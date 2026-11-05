// Bezzle in a page: the WebAssembly core, which is Bezzle's own model and renderer, and
// CanvasKit, which makes what the renderer records. Runs alike in a browser and in Node.
//
//   const bz = await createBezzle({ CanvasKit, wasm, fonts })
//   const { boards } = bz.open(documentJSON, pictures)   // pictures: Map of name → encoded bytes
//   const image = bz.render(boards[0].index, 2)          // a CanvasKit Image of the artboard
//
// The core calls back for what only the page can do: Skia's path operations, the design's
// pictures, and setting text (`host`). What it draws comes back as a recording of Core Graphics
// calls, which `play` makes on a CanvasKit canvas, keeping Core Graphics' own rules: its space is y
// up, a shadow is measured in device pixels, a transparency layer is faded and shadowed whole.

export async function createBezzle({ CanvasKit: CK, wasm, fonts, options = {} }) {
  let instance, memory
  let pending = new Uint8Array(0)
  const bytes = () => new Uint8Array(memory.buffer)
  const decoder = new TextDecoder(), encoder = new TextEncoder()

  // The design's pictures, read by the page, and every picture the core describes.
  const assets = { byName: new Map(), byId: new Map(), next: 1 }
  const images = new Map() // id → description from the core
  const made = new Map() // id → CanvasKit Image

  // Text the core has had set: per paragraph, its lines, each a paragraph of its own (`text`).
  const texts = new Map()
  let nextText = 1

  // Fonts: the system font whole as "System", every other face as "<family>|<face>". A face
  // without its data yet is known by name, and registered once the page has fetched it (`addFonts`).
  const provider = CK.TypefaceFontProvider.Make()
  for (const f of fonts.faces) if (f.data) provider.registerFont(f.data, `${f.family}|${f.face}`)
  provider.registerFont(fonts.system.data, 'System')
  const system = fonts.system

  // MARK: WASI, as little as Swift's runtime asks for

  const wasi = {
    args_get: () => 0, args_sizes_get: (c, s) => { view().setUint32(c, 0, true); view().setUint32(s, 0, true); return 0 },
    environ_get: () => 0, environ_sizes_get: (c, s) => { view().setUint32(c, 0, true); view().setUint32(s, 0, true); return 0 },
    clock_res_get: (id, out) => { view().setBigUint64(out, 1000n, true); return 0 },
    clock_time_get: (id, prec, out) => { view().setBigUint64(out, BigInt(Math.round(performance.now() * 1e6)) + (id === 0 ? BigInt(Date.now()) * 1000000n : 0n), true); return 0 },
    fd_write: (fd, iovs, n, written) => {
      let total = 0, s = ''
      for (let i = 0; i < n; i++) {
        const p = view().getUint32(iovs + i * 8, true), l = view().getUint32(iovs + i * 8 + 4, true)
        s += decoder.decode(bytes().slice(p, p + l)); total += l
      }
      view().setUint32(written, total, true)
      if (s.trim()) (fd === 2 ? console.error : console.log)('[core]', s.trimEnd())
      return 0
    },
    fd_close: () => 0, fd_fdstat_get: (fd, out) => { view().setUint8(out, 2); return 0 }, fd_fdstat_set_flags: () => 52,
    fd_filestat_get: () => 8, fd_filestat_set_size: () => 52, fd_filestat_set_times: () => 52, fd_pread: () => 8,
    fd_prestat_get: () => 8, fd_prestat_dir_name: () => 8, fd_read: () => 8, fd_readdir: () => 8, fd_seek: () => 8,
    fd_sync: () => 0, fd_tell: () => 8, path_create_directory: () => 63, path_filestat_get: () => 44,
    path_filestat_set_times: () => 63, path_link: () => 63, path_open: () => 44, path_readlink: () => 44,
    path_remove_directory: () => 63, path_rename: () => 63, path_symlink: () => 63, path_unlink_file: () => 63,
    poll_oneoff: () => 52, proc_exit: (code) => { throw new Error(`core exited ${code}`) },
    random_get: (p, n) => { crypto.getRandomValues(bytes().subarray(p, p + n)); return 0 },
  }
  const view = () => new DataView(memory.buffer)

  // MARK: What the core asks of the page

  const host = {
    call(fn, ptr, len) {
      const input = bytes().slice(ptr, ptr + len)
      let out
      switch (fn) {
        case 1: out = f64(pathOp(new Float64Array(input.buffer))); break
        case 2: out = f64(image(decoder.decode(Uint8Array.from(new Float64Array(input.buffer))))); break
        case 3: out = encoder.encode(textCall(JSON.parse(decoder.decode(input)))); break
        case 4: console.log('[core]', decoder.decode(input)); out = new Uint8Array(0); break
        default: out = new Uint8Array(0)
      }
      pending = out
      return out.length
    },
    take(ptr) { bytes().set(pending, ptr) },
  }
  const f64 = (a) => new Uint8Array(Float64Array.from(a).buffer)

  // Paths come and go as CanvasKit's commands: a verb, then its points.
  function pathOp(v) {
    let i = 0
    const op = v[i++], rule = v[i++]
    const nA = v[i++], a = v.slice(i, i + nA); i += nA
    const nB = v[i++], b = v.slice(i, i + nB); i += nB
    const nP = v[i++], p = v.slice(i, i + nP)
    const A = CK.Path.MakeFromCmds(a) ?? new CK.Path()
    A.setFillType(rule === 1 ? CK.FillType.EvenOdd : CK.FillType.Winding)
    let R = null
    if (op <= 4) {
      const B = CK.Path.MakeFromCmds(b) ?? new CK.Path()
      B.setFillType(rule === 1 ? CK.FillType.EvenOdd : CK.FillType.Winding)
      R = CK.Path.MakeFromOp(A, B, [CK.PathOp.Union, CK.PathOp.Intersect, CK.PathOp.Difference, CK.PathOp.XOR][op - 1])
      B.delete()
    } else if (op === 5) {
      R = A.makeSimplified()
    } else if (op === 6) {
      R = A.makeStroked({ width: p[0], cap: [CK.StrokeCap.Butt, CK.StrokeCap.Round, CK.StrokeCap.Square][p[1]],
        join: [CK.StrokeJoin.Miter, CK.StrokeJoin.Round, CK.StrokeJoin.Bevel][p[2]], miter_limit: p[3] })
    } else if (op === 7) {
      R = A.makeDashed(p[1] ?? 1, p[2] ?? p[1] ?? 1, p[0])
    }
    const cmds = R ? Array.from(R.toCmds()) : []
    A.delete(); R?.delete()
    return cmds
  }

  // Pictures a drawing asked for that the page does not have yet, as from a shared design's room.
  const missing = new Set()

  function image(name) {
    const img = assets.byName.get(name)
    if (!img) missing.add(name)
    return img ? [img.id, img.image.width(), img.image.height()] : [0]
  }

  // MARK: Text

  function trak(size) {
    if (!options.trak) return 0
    const t = system.trak
    if (size <= t[0][0]) return t[0][1] * size / system.upem
    for (let i = 1; i < t.length; i++) {
      if (size <= t[i][0]) {
        const [s0, v0] = t[i - 1], [s1, v1] = t[i]
        return (v0 + (v1 - v0) * (size - s0) / (s1 - s0)) * size / system.upem
      }
    }
    return t[t.length - 1][1] * size / system.upem
  }

  function style(run) {
    const s = { fontSize: run.size, letterSpacing: run.tracking, color: run.color ? CK.Color4f(...run.color) : CK.TRANSPARENT }
    if (run.family === 'System') {
      const face = run.face.replace(/ Italic$/, '')
      s.fontFamilies = ['System']
      s.fontVariations = [{ axis: 'wght', value: system.weights[face] ?? 400 }]
      if (options.opsz !== false) s.fontVariations.push({ axis: 'opsz', value: Math.min(Math.max(run.size, system.opsz[0]), system.opsz[1]) })
      s.letterSpacing += trak(run.size)
    } else {
      s.fontFamilies = [`${run.family}|${run.face}`, 'System']
    }
    let d = 0
    if (run.underline) d |= CK.UnderlineDecoration
    if (run.strike) d |= CK.LineThroughDecoration
    if (d) { s.decoration = d; s.decorationColor = s.color }
    return new CK.TextStyle(s)
  }

  const aligns = { left: 'Left', center: 'Center', right: 'Right', justify: 'Justify' }

  function paragraph(spec, runs, width) {
    const ps = new CK.ParagraphStyle({ textAlign: CK.TextAlign[aligns[spec.align] ?? 'Left'], textStyle: style(runs[0] ?? spec.runs[0]) })
    const b = CK.ParagraphBuilder.MakeFromFontProvider(ps, provider)
    for (const r of runs) { b.pushStyle(style(r)); b.addText(r.text); b.pop() }
    const p = b.build()
    b.delete()
    p.layout(width)
    return p
  }

  // The runs of [start, end) of the words, in UTF-16 as Skia and Text Kit both count.
  function slice(runs, start, end) {
    const out = []
    let at = 0
    for (const r of runs) {
      const a = Math.max(start, at), z = Math.min(end, at + r.text.length)
      if (z > a) out.push({ ...r, text: r.text.slice(a - at, z - at) })
      at += r.text.length
    }
    return out
  }

  function textCall(spec) {
    if (spec.place !== undefined) {
      const t = texts.get(spec.place)
      if (t) t.baselines = spec.baselines
      return ''
    }
    const whole = paragraph(spec, spec.runs, spec.width)
    const metrics = whole.getLineMetrics()
    const lines = []
    const out = []
    for (const m of metrics) {
      const end = m.endIncludingNewline ?? m.endIndex
      const runs = slice(spec.runs, m.startIndex, m.endExcludingWhitespaces)
      const leading = leadingOf(spec.runs[0])
      // Each line drawn on its own, so it can sit where the core puts it.
      const line = runs.length ? paragraph(spec, runs, spec.width) : null
      const lm = line?.getLineMetrics()[0]
      lines.push({ paragraph: line, baseline: lm?.baseline ?? m.baseline })
      // Skia shares the leading out above and below the line; Text Kit keeps it apart.
      out.push([m.startIndex, end, m.width, m.ascent - leading / 2, m.descent - leading / 2, leading])
    }
    whole.delete()
    const id = nextText++
    texts.set(id, { lines, baselines: metrics.map((m) => m.baseline) })
    return JSON.stringify({ id, lines: out })
  }

  const leadings = new Map()
  function leadingOf(run) {
    if (!run) return 0
    const key = `${run.family}|${run.face}|${run.size}`
    if (leadings.has(key)) return leadings.get(key)
    let leading = 0
    if (run.family !== 'System') {
      const face = fonts.faces.find((f) => f.family === run.family && f.face === run.face)
      if (face) {
        const tf = CK.Typeface.MakeTypefaceFromData(face.data)
        const font = new CK.Font(tf, run.size)
        leading = font.getMetrics().leading ?? 0
        font.delete(); tf?.delete()
      }
    }
    leadings.set(key, leading)
    return leading
  }

  // MARK: Playing a recording

  const blends = ['SrcOver', 'Multiply', 'Screen', 'Overlay', 'Darken', 'Lighten', 'ColorDodge', 'ColorBurn', 'SoftLight', 'HardLight',
    'Difference', 'Exclusion', 'Hue', 'Saturation', 'Color', 'Luminosity', 'Clear', 'Src', 'SrcIn', 'SrcOut', 'SrcATop',
    'DstOver', 'DstIn', 'DstOut', 'DstATop', 'Xor', 'Multiply', 'Plus']

  // Alpha, blend mode and shadow, as each drawing carries them.
  function look(c, i, paint, canvas) {
    const alpha = c[i], blend = c[i + 1], shadowed = c[i + 2]
    paint.setBlendMode(CK.BlendMode[blends[blend] ?? 'SrcOver'])
    if (shadowed) {
      // Given in device pixels, as Core Graphics measures shadows: back into the canvas's own space.
      const m = canvas.getTotalMatrix()
      const a = m[0], b = m[3], cc = m[1], d = m[4], det = a * d - b * cc
      const dx = c[i + 3], dy = c[i + 4]
      const lx = det ? (d * dx - cc * dy) / det : dx, ly = det ? (-b * dx + a * dy) / det : dy
      const scale = Math.sqrt(Math.abs(det)) || 1
      const sigma = c[i + 5] / scale
      paint.setImageFilter(CK.ImageFilter.MakeDropShadow(lx, ly, sigma, sigma, CK.Color4f(c[i + 6], c[i + 7], c[i + 8], c[i + 9]), null))
    }
    return { alpha, blend, shadowed, next: i + 10 }
  }

  function readPath(c, i, rule) {
    const n = c[i]
    const p = CK.Path.MakeFromCmds(c.subarray(i + 1, i + 1 + n)) ?? new CK.Path()
    p.setFillType(rule === 1 ? CK.FillType.EvenOdd : CK.FillType.Winding)
    return { path: p, next: i + 1 + n }
  }

  function play(canvas, c) {
    let i = 0
    while (i < c.length) {
      const op = c[i++]
      switch (op) {
        case 1: canvas.save(); break
        case 2: canvas.restore(); break
        case 3: canvas.concat([c[i], c[i + 2], c[i + 4], c[i + 1], c[i + 3], c[i + 5], 0, 0, 1]); i += 6; break
        case 4: {
          const rule = c[i++]
          if (c[i] === 0) { canvas.clipRect(CK.LTRBRect(0, 0, 0, 0), CK.ClipOp.Intersect, false); i += 1; break }
          const { path, next } = readPath(c, i, rule); i = next
          canvas.clipPath(path, CK.ClipOp.Intersect, true); path.delete()
          break
        }
        case 5: case 6: {
          const paint = new CK.Paint(); paint.setAntiAlias(true)
          const l = look(c, i, paint, canvas); i = l.next
          if (op === 5) {
            const rule = c[i++]
            paint.setColor(CK.Color4f(c[i], c[i + 1], c[i + 2], c[i + 3] * l.alpha)); i += 4
            const { path, next } = readPath(c, i, rule); i = next
            canvas.drawPath(path, paint); path.delete()
          } else {
            paint.setStyle(CK.PaintStyle.Stroke)
            paint.setStrokeWidth(c[i]); paint.setStrokeCap([CK.StrokeCap.Butt, CK.StrokeCap.Round, CK.StrokeCap.Square][c[i + 1]])
            paint.setStrokeJoin([CK.StrokeJoin.Miter, CK.StrokeJoin.Round, CK.StrokeJoin.Bevel][c[i + 2]]); paint.setStrokeMiter(c[i + 3])
            const phase = c[i + 4], nd = c[i + 5]; i += 6
            if (nd > 0) { paint.setPathEffect(CK.PathEffect.MakeDash(Array.from(c.subarray(i, i + nd)).concat(nd % 2 ? Array.from(c.subarray(i, i + nd)) : []), phase)) }
            i += nd
            paint.setColor(CK.Color4f(c[i], c[i + 1], c[i + 2], c[i + 3] * l.alpha)); i += 4
            const { path, next } = readPath(c, i, 0); i = next
            canvas.drawPath(path, paint); path.delete()
          }
          paint.delete()
          break
        }
        case 7: case 8: {
          const paint = new CK.Paint(); paint.setAntiAlias(true)
          const l = look(c, i, paint, canvas); i = l.next
          const geometry = c.subarray(i, i + (op === 7 ? 4 : 6)); i += op === 7 ? 4 : 6
          const before = c[i], after = c[i + 1], n = c[i + 2]; i += 3
          const colors = [], positions = []
          for (let k = 0; k < n; k++) { positions.push(c[i]); colors.push(CK.Color4f(c[i + 1], c[i + 2], c[i + 3], c[i + 4])); i += 5 }
          const mode = before && after ? CK.TileMode.Clamp : (after || before ? CK.TileMode.Clamp : CK.TileMode.Decal)
          const shader = op === 7
            ? CK.Shader.MakeLinearGradient([geometry[0], geometry[1]], [geometry[2], geometry[3]], colors, positions, mode)
            : CK.Shader.MakeTwoPointConicalGradient([geometry[0], geometry[1]], geometry[2], [geometry[3], geometry[4]], geometry[5], colors, positions, mode)
          paint.setShader(shader); paint.setAlphaf(l.alpha)
          canvas.drawPaint(paint)
          shader.delete(); paint.delete()
          break
        }
        case 9: {
          const paint = new CK.Paint(); paint.setAntiAlias(true)
          const l = look(c, i, paint, canvas); i = l.next
          const id = c[i], x = c[i + 1], y = c[i + 2], w = c[i + 3], h = c[i + 4]; i += 6
          const img = get(id)
          if (img) {
            paint.setAlphaf(l.alpha)
            // Core Graphics draws a picture with its top row at the rectangle's top, which is up.
            canvas.save()
            canvas.concat([1, 0, 0, 0, -1, 2 * y + h, 0, 0, 1])
            canvas.drawImageRectOptions(img, CK.XYWHRect(0, 0, img.width(), img.height()), CK.XYWHRect(x, y, w, h),
              CK.FilterMode.Linear, CK.MipmapMode.Linear, paint)
            canvas.restore()
          }
          paint.delete()
          break
        }
        case 10: {
          const paint = new CK.Paint()
          const l = look(c, i, paint, canvas); i = l.next
          paint.setAlphaf(l.alpha)
          const has = c[i], bounds = has ? CK.XYWHRect(c[i + 1], c[i + 2], c[i + 3], c[i + 4]) : null; i += 5
          canvas.saveLayer(paint, bounds)
          paint.delete()
          break
        }
        case 11: canvas.restore(); break
        case 12: {
          const paint = new CK.Paint()
          const l = look(c, i, paint, canvas); i = l.next
          const id = c[i], x = c[i + 1], y = c[i + 2]; i += 3 + 5
          const t = texts.get(id)
          const layered = l.alpha < 1 || l.shadowed || l.blend
          if (layered) { paint.setAlphaf(l.alpha); canvas.saveLayer(paint, null) }
          if (t) t.lines.forEach((line, k) => line.paragraph && canvas.drawParagraph(line.paragraph, x, y + (t.baselines[k] ?? 0) - line.baseline))
          if (layered) canvas.restore()
          paint.delete()
          break
        }
        default:
          throw new Error(`unknown drawing call ${op} at ${i - 1}`)
      }
    }
  }

  // MARK: Pictures, made when first drawn

  function get(id) {
    if (made.has(id)) return made.get(id)
    const d = images.get(id)
    if (!d) return null
    let img = null
    if (d.asset !== undefined) {
      img = assets.byId.get(d.asset) ?? null
    } else if (d.picture) {
      img = raster(d.w, d.h, (canvas) => {
        // Core Graphics' space: y up from the bottom left.
        canvas.concat([1, 0, 0, 0, -1, d.h, 0, 0, 1])
        play(canvas, Float64Array.from(d.picture))
      })
    } else if (d.from !== undefined) {
      const from = get(d.from)
      if (from) {
        let crop = [0, 0, d.w, d.h], matrix = null, filter = null
        for (const ch of d.changes) {
          if (ch.crop) crop = ch.crop
          if (ch.blur !== undefined) filter = CK.ImageFilter.MakeBlur(ch.blur, ch.blur, ch.clamp ? CK.TileMode.Clamp : CK.TileMode.Decal, null)
          if (ch.perspective) matrix = ch.perspective
        }
        img = raster(d.w, d.h, (canvas) => {
          canvas.translate(-crop[0], -crop[1])
          if (matrix) canvas.concat(matrix)
          const paint = new CK.Paint()
          if (filter) paint.setImageFilter(filter)
          canvas.drawImageOptions(from, 0, 0, CK.FilterMode.Linear, CK.MipmapMode.None, paint)
          paint.delete()
        })
      }
    } else if (d.pixels) {
      const raw = Uint8Array.from(atob(d.pixels), (ch) => ch.charCodeAt(0))
      img = CK.MakeImage({ width: d.w, height: d.h, alphaType: CK.AlphaType.Premul, colorType: CK.ColorType.RGBA_8888, colorSpace: CK.ColorSpace.SRGB }, raw, d.row)
    }
    made.set(id, img)
    return img
  }

  function raster(w, h, draw) {
    const surface = CK.MakeSurface(Math.max(1, w), Math.max(1, h))
    const canvas = surface.getCanvas()
    canvas.clear(CK.TRANSPARENT)
    draw(canvas)
    const img = surface.makeImageSnapshot()
    surface.delete()
    return img
  }

  // MARK: The core

  const module = await WebAssembly.compile(wasm)
  instance = await WebAssembly.instantiate(module, { wasi_snapshot_preview1: wasi, bezzle: host })
  memory = instance.exports.memory
  instance.exports._initialize()
  const x = instance.exports

  function send(fn, data) {
    const b = typeof data === 'string' ? encoder.encode(data) : data
    const p = x.bz_alloc(b.length)
    bytes().set(b, p)
    const n = fn(p, b.length)
    x.bz_free(p)
    return n
  }
  const reply = (n) => JSON.parse(decoder.decode(bytes().slice(x.bz_outbox(), x.bz_outbox() + n)))

  send(x.bz_fonts, JSON.stringify(fonts.families))

  // The design's pictures, decoded once: name → encoded bytes.
  function take(pictures) {
    for (const img of assets.byName.values()) img.image.delete()
    assets.byName.clear(); assets.byId.clear()
    add(pictures)
  }

  function add(pictures) {
    for (const [name, data] of pictures) {
      if (assets.byName.has(name)) continue
      missing.delete(name)
      const image = CK.MakeImageFromEncoded(data)
      if (!image) continue
      const id = assets.next++
      const mipped = image.makeCopyWithDefaultMipmaps()
      image.delete()
      assets.byName.set(name, { id, image: mipped }); assets.byId.set(id, mipped)
    }
  }

  return {
    open(json, pictures = new Map()) {
      take(pictures)
      return reply(send(x.bz_open, json))
    },
    render(index, scale = 1) {
      const t0 = performance.now()
      const r = reply(x.bz_render(index, scale))
      if (r.error) throw new Error(r.error)
      for (const d of r.images) images.set(d.id, d)
      const t1 = performance.now()
      const img = get(r.root)
      return { image: img, coreMs: r.ms, totalMs: performance.now() - t0, playMs: performance.now() - t1 }
    },
    texts() { return reply(x.bz_texts()) },

    // Shared designs: records are each record's packed data, base64, as CloudKit gives it.
    openShared(records, replica, pictures = new Map()) {
      take(pictures)
      return reply(send(x.bz_shared_open, JSON.stringify({ records, replica })))
    },
    receive(records) { return reply(send(x.bz_shared_receive, JSON.stringify({ records }))) },
    /** What was changed here since last time, packed for a change record: { data, upTo } or {}. */
    changes() { return reply(x.bz_shared_changes()) },
    snapshot() { return reply(x.bz_shared_snapshot()) },
    /** The whole shared design as this copy has it, packed: { data, upTo }. */
    whole() { return reply(x.bz_shared_whole()) },
    /** Faces fetched after the design was opened, [{ family, face, data }]: texts are set again with them. */
    addFonts(faces) {
      for (const f of faces) {
        provider.registerFont(f.data, `${f.family}|${f.face}`)
        const known = fonts.faces.find((k) => k.family === f.family && k.face === f.face)
        if (known) known.data = f.data; else fonts.faces.push(f)
      }
      leadings.clear()
      x.bz_forget_text()
    },
    /** Pictures that came after the design: name → encoded bytes. */
    addPictures(pictures) { add(pictures) },
    /** Names of the pictures drawings asked for that are not here yet. */
    missingPictures() { return [...missing] },
    testEdit() { return reply(x.bz_test_edit()) },
    document() { return reply(x.bz_document()) },
    /** The design as the core encodes it, sorted keys, as the Mac writes it. */
    documentBytes() { const n = x.bz_document(); return bytes().slice(x.bz_outbox(), x.bz_outbox() + n) },
  }
}
