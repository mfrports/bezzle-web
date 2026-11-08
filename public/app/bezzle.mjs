// Bezzle in a page: the WebAssembly core, which is Bezzle's own model and renderer, and
// CanvasKit, which makes what the renderer records. Runs alike in a browser and in Node.
//
//   const bz = await createBezzle({ CanvasKit, wasm, fonts })   // fonts.standsIn: the Mac families drawn in open stand-ins
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
    // What each gap between words takes more: justified lines of letters that join.
    if (run.wordSpacing) s.wordSpacing = run.wordSpacing
    if (run.family === 'System') {
      const face = run.face.replace(/ Italic$/, '')
      s.fontFamilies = ['System']
      s.fontVariations = [{ axis: 'wght', value: system.weights[face] ?? 400 }]
      if (options.opsz !== false) s.fontVariations.push({ axis: 'opsz', value: Math.min(Math.max(run.size, system.opsz[0]), system.opsz[1]) })
      s.letterSpacing += trak(run.size)
    } else {
      s.fontFamilies = [`${run.family}|${run.face}`, 'System']
    }
    // The layer's OpenType features, as the core lists them ("liga=0,kern=0"): kern=0 among them
    // where the Mac's letters are not spaced, as Core Text then leaves out the font's own kerning
    // between pairs such as "Te". A core that does not say so has it left out here when unspaced.
    const features = (run.features ?? '').split(',').filter((f) => f.includes('=')).map((f) => {
      const [name, value] = f.split('=')
      return { name, value: Number(value) }
    })
    if (!run.tracking && !features.some((f) => f.name === 'kern')) features.push({ name: 'kern', value: 0 })
    if (features.length) s.fontFeatures = features
    let d = 0
    if (run.underline) d |= CK.UnderlineDecoration
    if (run.strike) d |= CK.LineThroughDecoration
    if (d) { s.decoration = d; s.decorationColor = s.color }
    return new CK.TextStyle(s)
  }

  const aligns = { left: 'Left', center: 'Center', right: 'Right', justify: 'Justify' }

  // Runs set as one paragraph `width` wide, aligned as `spec` says, read from right to left when
  // `rtl` says so. A tab is set as a space, which its spacing widens to its stop (stopTabs).
  function paragraph(spec, runs, width, rtl = false) {
    // Set at the width given, as Text Kit sets lines: Skia otherwise narrows it to whole points
    // and rounds lines' heights and widths, as Flutter wants.
    const ps = new CK.ParagraphStyle({ textAlign: CK.TextAlign[aligns[spec.align] ?? 'Left'], textStyle: style(runs[0] ?? spec.runs[0]), applyRoundingHack: false,
      textDirection: rtl ? CK.TextDirection.RTL : CK.TextDirection.LTR, replaceTabCharacters: true })
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

  // Whether a letter (UTF-16) ends a line wherever it is: a paragraph's end or a line break.
  const breaks = (u) => u === 0x0A || u === 0x0D || u === 0x2028 || u === 0x2029 || u === 0x85
  // Whether a letter ends a paragraph, as the Unicode bidi algorithm counts them (a line break, U+2028, does not).
  const endsParagraph = (u) => u === 0x0A || u === 0x0D || u === 0x2029 || u === 0x85 || (u >= 0x1C && u <= 0x1E)
  // The spaces a justified line is spread at, as Text Kit counts them: a no-break space is a letter.
  const spaces = (u) => u === 0x20 || u === 0x09 || (u >= 0x2000 && u <= 0x200A && u !== 0x2007) || u === 0x205F || u === 0x3000 || u === 0x1680
  // Whether a letter is of a script whose letters join (Arabic and its like), whose runs Skia never
  // spaces apart (Run::isCursiveScript).
  const joins = (u) => (u >= 0x0600 && u <= 0x08FF && !(u >= 0x0780 && u <= 0x07BF)) || (u >= 0x1800 && u <= 0x18AF) || (u >= 0xA840 && u <= 0xA87F) ||
    (u >= 0xFB50 && u <= 0xFDFF) || (u >= 0xFE70 && u <= 0xFEFF)

  // Which way the letter at k reads, where it has a way of its own: 1 right to left (Hebrew, Arabic
  // and their like), -1 left to right (letters of other scripts), 0 none (spaces, digits,
  // punctuation, symbols). Close enough to Unicode's bidi classes for telling which way a paragraph
  // runs. As Host/host.cpp's reads.
  function reads(s, k) {
    const u = s.charCodeAt(k)
    if (u >= 0xD800 && u < 0xDC00 && k + 1 < s.length) {
      const c = s.codePointAt(k)
      if ((c >= 0x10800 && c <= 0x10FFF) || (c >= 0x1E800 && c <= 0x1EFFF)) return 1
      return c >= 0x1F000 && c <= 0x1FFFF ? 0 : -1
    }
    if ((u >= 0x0590 && u <= 0x08FF) || (u >= 0xFB1D && u <= 0xFDFF) || (u >= 0xFE70 && u <= 0xFEFE)) return 1
    if ((u >= 0x41 && u <= 0x5A) || (u >= 0x61 && u <= 0x7A) || u === 0xAA || u === 0xB5 || u === 0xBA) return -1
    if (u >= 0xC0 && u <= 0x24F) return u === 0xD7 || u === 0xF7 ? 0 : -1
    if ((u >= 0x370 && u <= 0x58F) || (u >= 0x900 && u <= 0x1FFF) || (u >= 0x2C00 && u <= 0x2DFF) || (u >= 0x3040 && u <= 0xD7FF) ||
      (u >= 0xF900 && u <= 0xFB1C)) return -1
    return 0
  }

  // Whether the paragraph that `from` is in reads from right to left, as Text Kit takes it (its
  // paragraphs' writing direction is natural): by its first letter that reads one way or the other.
  function rightToLeft(s, from) {
    let start = from
    while (start > 0 && !endsParagraph(s.charCodeAt(start - 1))) start--
    for (let k = start; k < s.length && !endsParagraph(s.charCodeAt(k)); k++) {
      const way = reads(s, k)
      if (way) return way > 0
    }
    return false
  }

  // The faces Text Kit spreads as a justification table of their own says (Courier's 'just' table):
  // their spaces grow by up to their size on either side, their letters not at all.
  const ownJustification = (run) => run.family === 'Courier'

  // A justified line's runs spread to `width`, as Text Kit spreads a line that is not its
  // paragraph's last (measured on the Mac, as Host/host.cpp's spreadOut). Each letter can grow on
  // its left and on its right, both by up to 0.1445 of its size, and each space by up to half its
  // size; between a letter and a space to its right neither grows (where both are of a face
  // without a table of its own). The spaces grow first, all by the same part of what they can;
  // then the letters; then the spaces again, without end, or, on a line without spaces, the
  // letters. Courier's spaces grow by up to their size on either side, and its letters not at all,
  // so that a line of Courier without spaces is not spread. Only what follows a line's last tab is
  // spread: what comes before stays where the tab stops put it. All of this as the letters lie
  // from left to right, which is how Text Kit grows them in words read from right to left too.
  // Each letter takes what it grows to its right as Skia's letter spacing, which Skia also puts to
  // a letter's right. Letters that join (Arabic) Text Kit lengthens with kashidas, which Skia
  // cannot set and whose runs it never spaces apart: there the spaces between words take it all,
  // evenly, as Skia's word spacing. Null when it needs no spreading or cannot be spread.
  function spreadOut(runs, line, width) {
    const natural = line.getLineMetrics()[0]?.width ?? 0
    const extra = width - natural
    if (!(extra > 0.001)) return null
    const words = runs.map((r) => r.text).join('')
    const runAt = []
    runs.forEach((r, k) => { for (let i = 0; i < r.text.length; i++) runAt.push(k) })
    // Where each letter of the words begins in their UTF-8, which is how Skia tells them.
    const at16 = new Map()
    let u8 = 0
    for (let k = 0; k < words.length; k++) {
      at16.set(u8, k)
      const c = words.charCodeAt(k)
      if (c >= 0xD800 && c < 0xDC00 && k + 1 < words.length) { u8 += 4; k++ } else u8 += c < 0x80 ? 1 : c < 0x800 ? 2 : 3
    }
    // Where each letter Skia sets lies, left to right: one for each letter, however many glyphs it is drawn with.
    const spots = []
    for (const shaped of line.getShapedLines()) {
      for (const run of shaped.runs) {
        for (let g = 0; g < run.glyphs.length; g++) spots.push({ at: at16.get(run.offsets[g]) ?? 0, x: run.positions[2 * g] })
      }
    }
    spots.sort((a, b) => a.x - b.x)
    const lastTab = words.lastIndexOf('\t')
    const seen = new Set()
    const letters = spots.filter((s) => {
      if (s.at >= words.length || seen.has(s.at) || s.at <= lastTab) return false
      seen.add(s.at)
      return true
    })
    const n = letters.length
    if (n < 2) return null
    if (letters.some((s) => joins(words.charCodeAt(s.at)))) {
      // The gaps between words, in the order they are read, each as wide again as the others.
      const order = letters.map((s) => s.at).sort((a, b) => a - b)
      let gaps = 0
      for (let i = 1; i < order.length; i++) if (spaces(words.charCodeAt(order[i - 1])) && !spaces(words.charCodeAt(order[i]))) gaps++
      if (!gaps) return null
      return runs.map((r) => ({ ...r, wordSpacing: extra / gaps }))
    }
    const space = letters.map((s) => spaces(words.charCodeAt(s.at)))
    const own = letters.map((s) => ownJustification(runs[runAt[s.at]]))
    const limit = letters.map((s, i) => (space[i] ? (own[i] ? 1 : 0.5) : (own[i] ? 0 : 0.14453125)) * runs[runAt[s.at]].size)
    const left = limit.slice(), right = limit.slice()
    left[0] = 0
    right[n - 1] = 0
    for (let i = 0; i + 1 < n; i++) if (!space[i] && !own[i] && space[i + 1] && !own[i + 1]) right[i] = left[i + 1] = 0
    let inSpaces = 0, inLetters = 0
    for (let i = 0; i < n; i++) { if (space[i]) inSpaces += left[i] + right[i]; else inLetters += left[i] + right[i] }
    if (!(inSpaces > 0) && !(inLetters > 0)) return null
    // How much of what they can the spaces grow, and the letters: up to all of it, then the rest.
    let rest = extra, bySpaces = 0, byLetters = 0
    if (inSpaces > 0) { bySpaces = Math.min(1, rest / inSpaces); rest -= bySpaces * inSpaces }
    if (rest > 1e-9 && inLetters > 0) { byLetters = Math.min(1, rest / inLetters); rest -= byLetters * inLetters }
    if (rest > 1e-9) { if (inSpaces > 0) bySpaces += rest / inSpaces; else byLetters += rest / inLetters }
    // What each letter of the words takes after it, by its place in them.
    const after = new Float64Array(words.length)
    for (let i = 0; i < n; i++) {
      after[letters[i].at] += right[i] * (space[i] ? bySpaces : byLetters)
      if (i + 1 < n) after[letters[i].at] += left[i + 1] * (space[i + 1] ? bySpaces : byLetters)
    }
    const out = []
    let start = 0
    for (const r of runs) {
      let a = 0
      while (a < r.text.length) {
        let z = a + 1
        while (z < r.text.length && after[start + z] === after[start + a] && !spaces(r.text.charCodeAt(z))) z++
        out.push({ ...r, text: r.text.slice(a, z), tracking: r.tracking + after[start + a] })
        a = z
      }
      start += r.text.length
    }
    return out
  }

  // Half the spacing of a line's first letter, which Skia puts before the whole line (TextLine's
  // shift), as Skia picks that letter: the first not of a script whose letters join, whose runs it
  // never spaces apart; none when every letter that reads one way or the other joins.
  function halfFirstSpacing(runs) {
    const spacing = (r) => style(r).letterSpacing ?? 0
    if (!runs.some((r) => [...r.text].some((c) => joins(c.charCodeAt(0))))) return spacing(runs[0]) / 2
    for (const r of runs) for (let k = 0; k < r.text.length; k++) if (reads(r.text, k) && !joins(r.text.charCodeAt(k))) return spacing(r) / 2
    return 0
  }

  // The runs with each tab one of its own, so it can be spaced as wide as its stop needs.
  function tabsApart(runs) {
    return runs.flatMap((r) => (r.text.includes('\t') ? r.text.split(/(\t)/).filter((t) => t).map((text) => ({ ...r, text })) : [{ ...r }]))
  }

  // The tabs of the words from `start` to `end` set at Text Kit's stops (NSParagraphStyle's
  // default, every 28 points from where a line begins): each as wide as it takes to reach the
  // first stop past where it begins. Skia has no stops and sets a tab as a space
  // (replaceTabCharacters); each tab's own spacing makes up the rest. Set again after each tab
  // that moves, as what follows it, and where lines break, moves with it. Past the twelfth stop
  // (336 points), where Text Kit takes a tab to the next line, a tab stays a space. Lines read from
  // right to left keep their tabs as spaces. As Host/host.cpp's stopTabs.
  function stopTabs(runs, start, end, width, rtl) {
    const words = runs.map((r) => r.text).join('')
    const runAt = []
    runs.forEach((r, k) => { for (let i = 0; i < r.text.length; i++) runAt.push(k) })
    const tabs = []
    for (let k = start; k < end && k < words.length; k++) if (words.charCodeAt(k) === 0x09) tabs.push(k)
    if (!tabs.length || rtl) return
    for (let round = 0; round < 2 * tabs.length + 2; round++) {
      const those = slice(runs, start, end)
      if (!those.length) return
      const p = paragraph({ align: 'left', runs: those }, those, width)
      const lines = p.getLineMetrics()
      const box = (k) => p.getRectsForRange(k, k + 1, CK.RectHeightStyle.Tight, CK.RectWidthStyle.Tight)[0]?.rect
      let moved = false
      for (const t of tabs) {
        const k = t - start
        const line = lines.find((m) => m.startIndex <= k && k < m.endIncludingNewline)
        if (!line) continue
        // As wide as to the next letter, or, at the end of its line, as its own box.
        const last = k + 1 >= line.endIncludingNewline || breaks(words.charCodeAt(t + 1))
        const first = box(line.startIndex), at = box(k), next = last ? null : box(k + 1)
        if (!first || !at || (!last && !next)) continue
        const x = at[0] - first[0], stop = 28 * (Math.floor(x / 28 + 1e-9) + 1)
        if (stop > 336 + 1e-6) continue
        const now = last ? at[2] - at[0] : next[0] - at[0]
        if (Math.abs(stop - x - now) > 0.005) {
          runs[runAt[t]].tracking += stop - x - now
          moved = true
          break
        }
      }
      p.delete()
      if (!moved) return
    }
  }

  // Texts set as one line for a curve (WebCurvedText.swift): their letters, each drawn on its
  // own where the core places it (drawing call 13).
  const glyphLines = new Map()
  const utf8 = new TextEncoder()

  // A font's cap height and x height, from its letters H and x, as CanvasKit's metrics have neither.
  function heights(font) {
    const ids = font.getGlyphIDs('Hx')
    const b = font.getGlyphBounds(ids, null, null)
    return { cap: -(b[1] ?? 0), x: -(b[5] ?? 0) }
  }

  function glyphCall(spec) {
    const runs = spec.runs.length ? spec.runs : [{ text: '', family: 'System', face: 'Regular', size: 12, tracking: 0 }]
    const p = paragraph({ align: 'left', runs }, runs, 1e7)
    const m = p.getLineMetrics()[0]
    // Where each run begins in the words' UTF-8, which is how Skia tells where a letter is from.
    const starts = []
    let at = 0
    for (const r of runs) { starts.push(at); at += utf8.encode(r.text).length }
    const runOf = (u) => { let k = 0; while (k + 1 < starts.length && starts[k + 1] <= u) k++; return k }
    const laid = []
    const line = p.getShapedLines()[0]
    // Skia puts half the letters' spacing before each, Core Text all of it after.
    const spacings = runs.map((r) => style(r).letterSpacing ?? 0)
    for (const run of line?.runs ?? []) {
      const font = new CK.Font(run.typeface, run.size)
      for (let k = 0; k < run.glyphs.length; k++) {
        const r = runOf(run.offsets[k])
        laid.push({ font, id: run.glyphs[k], x: run.positions[2 * k] - spacings[r] / 2, y: run.positions[2 * k + 1], run: r })
      }
    }
    const baseline = laid.length ? laid[0].y : 0
    let width = p.getMaxIntrinsicWidth() - spacings[0] / 2, capHeight = -1
    const out = []
    laid.forEach((g, k) => {
      const metrics = g.font.getMetrics(), h = heights(g.font), size = g.font.getSize()
      const next = laid[k + 1]
      // As far as the next letter, or for the last, its own width and the spacing after it.
      const advance = next && next.x >= g.x ? next.x - g.x : g.font.getGlyphWidths([g.id])[0] + spacings[g.run]
      width = Math.max(width, g.x + advance)
      if (capHeight < 0) capHeight = h.cap
      out.push([g.run, g.x, g.y - baseline, advance, -metrics.ascent, metrics.descent, size * 0.1, size / 14, h.x, h.cap])
    })
    const ascent = m?.ascent ?? runs[0].size * 0.8, descent = m?.descent ?? runs[0].size * 0.2
    p.delete()
    const id = nextText++
    glyphLines.set(id, laid.map((g) => ({ font: g.font, id: g.id })))
    return JSON.stringify({ id, line: [width, ascent, descent, capHeight >= 0 ? capHeight : ascent * 0.7], glyphs: out })
  }

  function textCall(spec) {
    if (spec.place !== undefined) {
      const t = texts.get(spec.place)
      if (t) t.baselines = spec.baselines
      return ''
    }
    if (spec.glyphs) return glyphCall(spec)
    // The words in parts set at widths of their own: paragraphs set further in (items of lists,
    // spec.indents as [start, end, indent]) narrower, and drawn that much to the right; the rest
    // as wide as asked. Without any, one part, the whole text.
    const total = spec.runs.reduce((n, r) => n + r.text.length, 0)
    const indented = []
    let at = 0
    for (const [a, z, indent] of spec.indents ?? []) {
      if (z <= a || a < at || z > total) continue
      if (a > at) indented.push({ start: at, end: a, indent: 0 })
      indented.push({ start: a, end: z, indent: Math.max(indent, 0) })
      at = z
    }
    if (!indented.length || at < total) indented.push({ start: at, end: total, indent: 0 })
    const all = tabsApart(spec.runs)
    const words = all.map((r) => r.text).join('')
    // Paragraphs read from right to left in parts of their own, where the way they read changes,
    // as Text Kit takes each paragraph's way from its first letter that reads one way or the other.
    const parts = []
    for (const part of indented) {
      let from = part.start, rtl = rightToLeft(words, from)
      for (let k = part.start; k + 1 < part.end; k++) {
        const u = words.charCodeAt(k)
        if (!endsParagraph(u) || (u === 0x0D && words.charCodeAt(k + 1) === 0x0A)) continue
        const next = rightToLeft(words, k + 1)
        if (next === rtl) continue
        parts.push({ ...part, start: from, end: k + 1, rtl })
        from = k + 1
        rtl = next
      }
      parts.push({ ...part, start: from, rtl })
    }
    // Each part's tabs at their stops, as wide as Text Kit sets them.
    for (const part of parts) stopTabs(all, part.start, part.end, part.indent > 0 ? Math.max(spec.width - part.indent, 1) : spec.width, part.rtl)
    const lines = []
    const out = []
    const baselines = []
    const leading = leadingOf(spec.runs[0])
    // Skia puts half the letters' spacing before each, Core Text all of it after, which shows in
    // lines set from the left: drawn that much to the left (centred or from the right, they lie where the Mac's do).
    const fromLeft = spec.align !== 'center' && spec.align !== 'right'
    // Justified lines are broken as lines set from the left are, and spread here, never by Skia.
    const laid = spec.align === 'justify' ? { ...spec, align: 'left' } : spec
    let top = 0
    parts.forEach((part, p) => {
      const width = part.indent > 0 ? Math.max(spec.width - part.indent, 1) : spec.width
      const those = parts.length === 1 ? all : slice(all, part.start, part.end)
      const whole = paragraph(laid, those.length ? those : all, width, part.rtl)
      const metrics = whole.getLineMetrics()
      metrics.forEach((m, j) => {
        // A part ending in a paragraph's break has an empty line after it, set alone, which in
        // the whole text is the next part's first.
        if (p + 1 < parts.length && j > 0 && j + 1 === metrics.length && part.start + (metrics[j - 1].endIncludingNewline ?? metrics[j - 1].endIndex) >= part.end) return
        const start = part.start + m.startIndex, end = part.start + (m.endIncludingNewline ?? m.endIndex)
        let runs = slice(all, start, part.start + m.endExcludingWhitespaces)
        // Each line drawn on its own, so it can sit where the core puts it.
        let line = runs.length ? paragraph(laid, runs, width, part.rtl) : null
        // Justified, every line but a paragraph's last is spread to the width, as Text Kit spreads
        // it; not one that ends with a tab, as nothing follows its last tab.
        let spread = false
        const tabbed = words.slice(part.start + m.endExcludingWhitespaces, end).includes('\t')
        if (line && spec.align === 'justify' && end < words.length && !breaks(words.charCodeAt(end - 1)) && !tabbed) {
          const spaced = spreadOut(runs, line, width)
          if (spaced) {
            line.delete()
            runs = spaced
            line = paragraph({ ...spec, align: 'left' }, runs, 1e6, part.rtl)
            spread = true
          }
        }
        const lm = line?.getLineMetrics()[0]
        // Where Skia paints the line's letters: its ascent down, rounded to a whole point, which is
        // not where its line metrics put the baseline.
        const back = (runs.length && fromLeft ? halfFirstSpacing(runs) : 0) - part.indent
        lines.push({ paragraph: line, baseline: lm ? Math.floor(lm.ascent + 0.5) : m.baseline, back, start, runs })
        baselines.push(top + m.baseline)
        // A line with a tab measures as far as its last letter, with the spaces and tabs it ends
        // with, as Text Kit's used rect of such a line does (of no other).
        let measured = spread ? width : m.width
        let ends = end
        while (ends > start && breaks(words.charCodeAt(ends - 1))) ends--
        if (!spread && fromLeft && words.slice(start, ends).includes('\t')) {
          const rects = whole.getRectsForRange(start - part.start, ends - part.start, CK.RectHeightStyle.Tight, CK.RectWidthStyle.Tight)
          if (rects.length) measured = Math.max(...rects.map((b) => b.rect[2])) - Math.min(...rects.map((b) => b.rect[0]))
        }
        // Skia shares the leading out above and below the line; Text Kit keeps it apart.
        // Set from the left, its letters begin at its indent, as Text Kit's do; Skia's own left
        // there is off by half the spacing it puts before the first letter.
        const left = fromLeft ? 0 : lm ? lm.left : m.left
        out.push([start, end, measured, m.ascent - leading / 2, m.descent - leading / 2, leading, part.indent + left])
      })
      top += whole.getHeight()
      whole.delete()
    })
    const id = nextText++
    texts.set(id, { lines, baselines })
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
          if (t) t.lines.forEach((line, k) => line.paragraph && canvas.drawParagraph(line.paragraph, x - line.back, y + (t.baselines[k] ?? 0) - line.baseline))
          if (layered) canvas.restore()
          paint.delete()
          break
        }
        case 13: {
          // One letter of a line set for a curve, its baseline's left end at the origin.
          const paint = new CK.Paint(); paint.setAntiAlias(true)
          const l = look(c, i, paint, canvas); i = l.next
          const id = c[i], k = c[i + 1]; i += 2
          paint.setColor(CK.Color4f(c[i], c[i + 1], c[i + 2], c[i + 3] * l.alpha)); i += 4
          const g = glyphLines.get(id)?.[k]
          if (g) canvas.drawGlyphs([g.id], [0, 0], 0, 0, g.font, paint)
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
    } else if (d.from !== undefined && d.changes.some((ch) => ch.develop)) {
      const from = get(d.from)
      if (from) img = developed(from, d.changes.find((ch) => ch.develop).develop)
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

  // MARK: Developing photos, as the Mac's Developer does with Core Image (host.cpp has the same)

  const enc = (x) => { const a = Math.abs(x), v = a <= 0.0031308 ? a * 12.92 : 1.055 * Math.pow(a, 1 / 2.4) - 0.055; return x < 0 ? -v : v }
  const dec = (x) => { const a = Math.abs(x), v = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4); return x < 0 ? -v : v }
  const luma = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b)

  // A blur of four floats a pixel, edges carried on outward: three box passes each way, as near
  // a Gaussian of `sigma` as they come.
  function blurred(px, w, h, sigma) {
    const boxes = (() => {
      const n = 3, ideal = Math.sqrt((12 * sigma * sigma / n) + 1)
      let wl = Math.floor(ideal); if (wl % 2 === 0) wl--
      const m = Math.round((12 * sigma * sigma - n * wl * wl - 4 * n * wl - 3 * n) / (-4 * wl - 4))
      return [0, 1, 2].map((i) => ((i < m ? wl : wl + 2) - 1) / 2)
    })()
    let a = Float32Array.from(px), b = new Float32Array(px.length)
    const pass = (src, dst, r, across) => {
      const lines = across ? h : w, len = across ? w : h, step = across ? 4 : w * 4
      for (let l = 0; l < lines; l++) {
        const start = across ? l * w * 4 : l * 4
        for (let k = 0; k < 4; k++) {
          let sum = 0
          const at = (i) => src[start + clamp(i, 0, len - 1) * step + k]
          for (let i = -r; i <= r; i++) sum += at(i)
          for (let i = 0; i < len; i++) {
            dst[start + i * step + k] = sum / (2 * r + 1)
            sum += at(i + r + 1) - at(i - r)
          }
        }
      }
    }
    for (const r of boxes) {
      if (r < 1) continue
      pass(a, b, r, true); pass(b, a, r, false)
    }
    return a
  }

  function developed(from, dv) {
    const w = from.width(), h = from.height(), n = w * h
    const raw = from.readPixels(0, 0, { width: w, height: h, colorType: CK.ColorType.RGBA_8888, alphaType: CK.AlphaType.Unpremul, colorSpace: CK.ColorSpace.SRGB })
    if (!raw) return from
    const lut8 = Array.from({ length: 256 }, (_, i) => dec(i / 255))
    // In light, premultiplied, as Core Image works.
    let px = new Float32Array(n * 4)
    for (let i = 0; i < n; i++) {
      const a = raw[i * 4 + 3] / 255
      for (let k = 0; k < 3; k++) px[i * 4 + k] = lut8[raw[i * 4 + k]] * a
      px[i * 4 + 3] = a
    }
    const seen = (p, i, out) => { const a = p[i + 3]; for (let k = 0; k < 3; k++) out[k] = enc(a > 0.0001 ? p[i + k] / a : 0) }
    const longest = Math.max(w, h)
    if (dv.dehaze) {
      // The haze's colour, from the picture read small: the haziest hundredth's.
      const sw = Math.max(1, Math.round(w * Math.min(1, 96 / longest))), sh = Math.max(1, Math.round(h * Math.min(1, 96 / longest)))
      const darks = []
      for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
        const i = (Math.floor(y * h / sh) * w + Math.floor(x * w / sw)) * 4, a = raw[i + 3] / 255
        if (a <= 0.5) continue
        const c = [raw[i] / 255 / a, raw[i + 1] / 255 / a, raw[i + 2] / 255 / a]
        darks.push([Math.min(...c), c])
      }
      darks.sort((x, y) => y[0] - x[0])
      const top = darks.slice(0, Math.max(1, Math.floor(darks.length / 100)))
      const air = [0.9, 0.9, 0.9]
      if (top.length) for (let k = 0; k < 3; k++) air[k] = clamp(top.reduce((s, t) => s + t[1][k], 0) / top.length, 0.45, 1)
      const qw = Math.max(1, Math.round(w / 4)), qh = Math.max(1, Math.round(h / 4))
      let small = new Float32Array(qw * qh * 4)
      for (let y = 0; y < qh; y++) for (let x = 0; x < qw; x++) {
        const sum = [0, 0, 0, 0]
        for (let dy = 0; dy < 4; dy++) for (let dx = 0; dx < 4; dx++) {
          const i = (Math.min(h - 1, y * 4 + dy) * w + Math.min(w - 1, x * 4 + dx)) * 4
          for (let k = 0; k < 4; k++) sum[k] += px[i + k]
        }
        const o = (y * qw + x) * 4, m = Math.min(sum[0], sum[1], sum[2]) / 16
        small[o] = small[o + 1] = small[o + 2] = m; small[o + 3] = sum[3] / 16
      }
      const reach = Math.max(1, Math.round(longest * 0.25 * 0.01))
      for (const across of [true, false]) {
        const out = new Float32Array(small.length)
        for (let y = 0; y < qh; y++) for (let x = 0; x < qw; x++) for (let k = 0; k < 4; k++) {
          let m = 1e9
          for (let d = -reach; d <= reach; d++) {
            const sx = across ? clamp(x + d, 0, qw - 1) : x, sy = across ? y : clamp(y + d, 0, qh - 1)
            m = Math.min(m, small[(sy * qw + sx) * 4 + k])
          }
          out[(y * qw + x) * 4 + k] = m
        }
        small = out
      }
      small = blurred(small, qw, qh, reach * 1.6)
      const am = Math.max((air[0] + air[1] + air[2]) / 3, 0.2), amount = dv.dehaze, c = [0, 0, 0]
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4
        if (px[i + 3] <= 0.0001) continue
        const fx = clamp((x + 0.5) / 4 - 0.5, 0, qw - 1), fy = clamp((y + 0.5) / 4 - 0.5, 0, qh - 1)
        const x0 = Math.floor(fx), y0 = Math.floor(fy), x1 = Math.min(x0 + 1, qw - 1), y1 = Math.min(y0 + 1, qh - 1), tx = fx - x0, ty = fy - y0
        const at = (xx, yy, k) => small[(yy * qw + xx) * 4 + k]
        const mix = (k) => (at(x0, y0, k) * (1 - tx) + at(x1, y0, k) * tx) * (1 - ty) + (at(x0, y1, k) * (1 - tx) + at(x1, y1, k) * tx) * ty
        const dr = mix(0), da = mix(3)
        seen(px, i, c)
        const d = clamp(enc(da > 0.0001 ? dr / da : 0) / am, 0, 1)
        if (amount > 0) {
          const t = Math.max(1 - amount * 0.92 * d, 0.22)
          for (let k = 0; k < 3; k++) c[k] = (c[k] - air[k]) / t + air[k] + (1 - t) * 0.18 * amount
        } else {
          const m = -amount * 0.62 * (0.3 + 0.7 * d)
          for (let k = 0; k < 3; k++) c[k] += (air[k] - c[k]) * m
        }
        for (let k = 0; k < 3; k++) px[i + k] = dec(c[k]) * px[i + 3]
      }
    }
    const size = dv.size, cube = dv.cube
    if (cube && cube.length >= size * size * size * 3 && size > 1) {
      const top = size - 1, c = [0, 0, 0]
      for (let i = 0; i < n * 4; i += 4) {
        const a = px[i + 3]
        if (a <= 0.0001) continue
        for (let k = 0; k < 3; k++) c[k] = clamp(enc(px[i + k] / a), 0, 1) * top
        const r0 = Math.min(Math.floor(c[0]), size - 2), g0 = Math.min(Math.floor(c[1]), size - 2), b0 = Math.min(Math.floor(c[2]), size - 2)
        const tr = c[0] - r0, tg = c[1] - g0, tb = c[2] - b0
        let o0 = 0, o1 = 0, o2 = 0
        for (let db = 0; db < 2; db++) for (let dg = 0; dg < 2; dg++) for (let dr = 0; dr < 2; dr++) {
          const wgt = (dr ? tr : 1 - tr) * (dg ? tg : 1 - tg) * (db ? tb : 1 - tb), e = (((b0 + db) * size + (g0 + dg)) * size + (r0 + dr)) * 3
          o0 += cube[e] * wgt; o1 += cube[e + 1] * wgt; o2 += cube[e + 2] * wgt
        }
        px[i] = dec(o0) * a; px[i + 1] = dec(o1) * a; px[i + 2] = dec(o2) * a
      }
    }
    if (dv.clarity || dv.texture || dv.sharpness) {
      const o = new Float32Array(n * 3), c = new Float32Array(n * 3), s = [0, 0, 0], t = [0, 0, 0]
      for (let i = 0; i < n; i++) { seen(px, i * 4, s); o.set(s, i * 3) }
      c.set(o)
      const sigma = (part, least) => Math.max(longest * part, least)
      if (dv.clarity) {
        const wide = blurred(px, w, h, sigma(0.014, 2))
        for (let i = 0; i < n; i++) {
          if (px[i * 4 + 3] <= 0.0001) continue
          seen(wide, i * 4, s)
          const m = 1 - Math.pow(Math.abs(2 * clamp(luma(s[0], s[1], s[2]), 0, 1) - 1), 2.2)
          for (let k = 0; k < 3; k++) c[i * 3 + k] += dv.clarity * m * (o[i * 3 + k] - s[k])
        }
      }
      if (dv.texture) {
        const mid = blurred(px, w, h, sigma(0.0045, 1.5)), fine = blurred(px, w, h, sigma(0.0011, 0.6))
        for (let i = 0; i < n; i++) {
          if (px[i * 4 + 3] <= 0.0001) continue
          seen(fine, i * 4, s); seen(mid, i * 4, t)
          const m = 1 - Math.pow(Math.abs(2 * clamp(luma(o[i * 3], o[i * 3 + 1], o[i * 3 + 2]), 0, 1) - 1), 3)
          for (let k = 0; k < 3; k++) c[i * 3 + k] += dv.texture * m * (s[k] - t[k])
        }
      }
      if (dv.sharpness) {
        const tiny = blurred(px, w, h, sigma(0.00045, 0.7))
        for (let i = 0; i < n; i++) {
          if (px[i * 4 + 3] <= 0.0001) continue
          seen(tiny, i * 4, s)
          const d = clamp(luma(o[i * 3], o[i * 3 + 1], o[i * 3 + 2]) - luma(s[0], s[1], s[2]), -0.25, 0.25)
          for (let k = 0; k < 3; k++) c[i * 3 + k] += dv.sharpness * d
        }
      }
      for (let i = 0; i < n; i++) if (px[i * 4 + 3] > 0.0001) for (let k = 0; k < 3; k++) px[i * 4 + k] = dec(c[i * 3 + k]) * px[i * 4 + 3]
    }
    // Back into sRGB, eight bits a channel.
    const out = new Uint8Array(n * 4)
    for (let i = 0; i < n; i++) {
      const a = px[i * 4 + 3]
      for (let k = 0; k < 3; k++) out[i * 4 + k] = Math.round(clamp(enc(a > 0.0001 ? px[i * 4 + k] / a : 0), 0, 1) * 255)
      out[i * 4 + 3] = Math.round(clamp(a, 0, 1) * 255)
    }
    return CK.MakeImage({ width: w, height: h, alphaType: CK.AlphaType.Unpremul, colorType: CK.ColorType.RGBA_8888, colorSpace: CK.ColorSpace.SRGB }, out, w * 4) ?? from
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
  // The Mac's families the page has stand-ins for (the open fonts), spaced to the Mac's widths.
  if (fonts.standsIn && x.bz_stand_ins) send(x.bz_stand_ins, JSON.stringify(fonts.standsIn))

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
    // Where each letter of a text the core laid (texts()' laid) is set along its line, from the
    // text's left, by where in the words it is from, per line: for comparing with the Mac.
    letters(laid) {
      const t = texts.get(laid)
      return (t?.lines ?? []).map((line) => {
        if (!line.paragraph) return []
        const words = line.runs.map((r) => r.text).join('')
        const at16 = new Map()
        let u8 = 0
        for (let k = 0; k < words.length; k++) {
          at16.set(u8, k)
          const c = words.charCodeAt(k)
          if (c >= 0xD800 && c < 0xDC00 && k + 1 < words.length) { u8 += 4; k++ } else u8 += c < 0x80 ? 1 : c < 0x800 ? 2 : 3
        }
        const out = []
        for (const shaped of line.paragraph.getShapedLines()) {
          for (const run of shaped.runs) for (let g = 0; g < run.glyphs.length; g++) out.push([line.start + (at16.get(run.offsets[g]) ?? 0), run.positions[2 * g] - line.back])
        }
        return out
      })
    },

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
