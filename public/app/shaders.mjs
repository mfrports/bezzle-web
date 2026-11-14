// Shader fills, drawn with WebGL: a web page's own programs, as Bezzle kept them when the page
// came in (Bezzle/Model/Shader.swift), drawn again by the browser they were written for. The Mac
// draws them with Metal and Windows with Direct3D (Packages/Shaders, whose README has the
// conventions kept here too); a browser needs no translation, only the same care for what part
// of the drawing buffer is drawn, and how sharp.
//
//   const shaders = createShaders({ picture })            // picture(name) → { width, height, data } | null
//   shaders.define(1, fill)                               // { ok } | { unavailable } | { broken }
//   shaders.draw(1, uniformsPerDraw, [w, h], [x, y, w, h]) // { width, height, data, premultiplied } | { broken } | {}
//
// A fill is drawn for a region of its drawing buffer, counted from the buffer's top left, into
// as many pixels as it shows with. Its programs still read gl_FragCoord in the buffer's own
// pixels and place their vertices in the whole buffer: each fragment shader's gl_FragCoord is
// mapped back, and each vertex shader's position moved on, by a few lines put round the page's.
// Where there is no WebGL (Node), nothing is drawn and the fill's picture stands in.

export function createShaders({ picture }) {
  const contexts = new Map() // "<WebGL version>|<antialias>" → what was made in it
  const fills = new Map() // number → { fill, version }

  function context(version, antialias) {
    const key = `${version}|${antialias ? 1 : 0}`
    if (contexts.has(key)) return contexts.get(key)
    let canvas = null, gl = null
    try {
      canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(16, 16) : typeof document !== 'undefined' ? document.createElement('canvas') : null
      gl = canvas?.getContext(version === 2 ? 'webgl2' : 'webgl',
        { alpha: true, premultipliedAlpha: true, antialias, depth: false, stencil: false, preserveDrawingBuffer: true }) ?? null
    } catch { gl = null }
    let made = null
    if (gl) {
      made = { gl, canvas, version, programs: new Map(), textures: new Map(), buffers: new Map(), black: null, wide: version === 2 }
      if (version === 1) {
        // What pages turn on, and what a draw's own numbers need.
        for (const name of ['OES_standard_derivatives', 'EXT_frag_depth', 'EXT_shader_texture_lod', 'EXT_blend_minmax', 'OES_texture_float', 'OES_texture_float_linear']) gl.getExtension(name)
        made.wide = !!gl.getExtension('OES_element_index_uint')
        made.minmax = gl.getExtension('EXT_blend_minmax')
      }
    }
    contexts.set(key, made)
    return made
  }

  // MARK: The page's programs, with Bezzle's lines round them

  // The vertex shader: its position, which is in the whole drawing buffer, moved on to where
  // that lies in the part being drawn; its points as much bigger as the part is drawn.
  function vertexSource(source) {
    const sized = /\bgl_PointSize\b/.test(source)
    return source.replace(/\bvoid\s+main\s*\(\s*(void)?\s*\)/, 'void bz_main()') +
      `\nuniform vec4 bz_place;\n${sized ? 'uniform float bz_grown;\n' : ''}void main() {\n  bz_main();\n` +
      `  gl_Position.xy = gl_Position.xy * bz_place.xy + bz_place.zw * gl_Position.w;\n${sized ? '  gl_PointSize *= bz_grown;\n' : ''}}\n`
  }

  // The fragment shader: gl_FragCoord in the drawing buffer's pixels, whatever part is drawn
  // and however large.
  function fragmentSource(source) {
    if (!/\bgl_FragCoord\b/.test(source)) return source
    const lines = source.replace(/\bgl_FragCoord\b/g, 'bz_FragCoord').split('\n')
    // After the version and the extensions, which come first, and outside any #if they are in.
    let at = 0, depth = 0, open = 0
    lines.forEach((line, k) => {
      if (/^\s*#\s*(if|ifdef|ifndef)\b/.test(line)) depth++
      else if (/^\s*#\s*endif\b/.test(line)) depth--
      else if (/^\s*#\s*(version|extension)\b/.test(line)) { at = k + 1; open = depth }
    })
    for (; open > 0 && at < lines.length; at++) {
      if (/^\s*#\s*(if|ifdef|ifndef)\b/.test(lines[at])) open++
      else if (/^\s*#\s*endif\b/.test(lines[at])) open--
    }
    lines.splice(at, 0, '#ifdef GL_FRAGMENT_PRECISION_HIGH', 'uniform highp vec4 bz_view;', '#else', 'uniform mediump vec4 bz_view;', '#endif',
      '#define bz_FragCoord vec4(gl_FragCoord.xy * bz_view.xy + bz_view.zw, gl_FragCoord.zw)')
    return lines.join('\n')
  }

  function compiled(c, id, k, program) {
    const key = `${id}|${k}`
    if (c.programs.has(key)) return c.programs.get(key)
    const gl = c.gl
    const shader = (type, source) => {
      const s = gl.createShader(type)
      gl.shaderSource(s, source)
      gl.compileShader(s)
      if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s
      console.warn('[shader]', gl.getShaderInfoLog(s))
      gl.deleteShader(s)
      return null
    }
    let made = null
    const v = shader(gl.VERTEX_SHADER, vertexSource(program.vertex)), f = v && shader(gl.FRAGMENT_SHADER, fragmentSource(program.fragment))
    if (v && f) {
      const handle = gl.createProgram()
      gl.attachShader(handle, v); gl.attachShader(handle, f)
      gl.linkProgram(handle)
      if (gl.getProgramParameter(handle, gl.LINK_STATUS)) {
        const uniforms = new Map(), attributes = []
        for (let i = 0; i < gl.getProgramParameter(handle, gl.ACTIVE_UNIFORMS); i++) {
          const u = gl.getActiveUniform(handle, i)
          if (u) uniforms.set(u.name, { type: u.type, size: u.size })
        }
        for (let i = 0; i < gl.getProgramParameter(handle, gl.ACTIVE_ATTRIBUTES); i++) {
          const a = gl.getActiveAttrib(handle, i)
          if (a) attributes.push({ name: a.name, type: a.type, at: gl.getAttribLocation(handle, a.name) })
        }
        made = { handle, uniforms, attributes, place: gl.getUniformLocation(handle, 'bz_place'), grown: gl.getUniformLocation(handle, 'bz_grown'),
          view: gl.getUniformLocation(handle, 'bz_view') }
      } else {
        console.warn('[shader]', gl.getProgramInfoLog(handle))
        gl.deleteProgram(handle)
      }
    }
    if (v) gl.deleteShader(v)
    if (f) gl.deleteShader(f)
    c.programs.set(key, made)
    return made
  }

  // MARK: What a draw is given

  const bytes = (base64) => Uint8Array.from(atob(base64), (ch) => ch.charCodeAt(0))

  // One of a draw's inputs, set as its kind takes it: numbers come as floats whatever it is.
  function setUniform(gl, program, name, values) {
    const at = gl.getUniformLocation(program.handle, name)
    const kind = program.uniforms.get(name) ?? program.uniforms.get(`${name}[0]`) ?? program.uniforms.get(name.replace(/\[\d+\]$/, '[0]'))
    if (!at || !kind || !values.length) return
    const whole = () => Int32Array.from(values, Math.round)
    switch (kind.type) {
      case gl.FLOAT: gl.uniform1fv(at, values); break
      case gl.FLOAT_VEC2: gl.uniform2fv(at, values.slice(0, values.length - values.length % 2)); break
      case gl.FLOAT_VEC3: gl.uniform3fv(at, values.slice(0, values.length - values.length % 3)); break
      case gl.FLOAT_VEC4: gl.uniform4fv(at, values.slice(0, values.length - values.length % 4)); break
      case gl.INT: case gl.BOOL: case gl.UNSIGNED_INT: gl.uniform1iv(at, whole()); break
      case gl.INT_VEC2: case gl.BOOL_VEC2: gl.uniform2iv(at, whole()); break
      case gl.INT_VEC3: case gl.BOOL_VEC3: gl.uniform3iv(at, whole()); break
      case gl.INT_VEC4: case gl.BOOL_VEC4: gl.uniform4iv(at, whole()); break
      case gl.FLOAT_MAT2: if (values.length % 4 === 0) gl.uniformMatrix2fv(at, false, values); break
      case gl.FLOAT_MAT3: if (values.length % 9 === 0) gl.uniformMatrix3fv(at, false, values); break
      case gl.FLOAT_MAT4: if (values.length % 16 === 0) gl.uniformMatrix4fv(at, false, values); break
      default: break // a sampler: by its picture
    }
  }

  // A picture a sampler reads, handed to the graphics card as the page handed it: upside down
  // or premultiplied where it said so; a cube's six faces from one picture, stacked.
  function texture(c, asset, flips, premultiplies, cube) {
    const key = `${asset}|${flips ? 1 : 0}|${premultiplies ? 1 : 0}|${cube ? 1 : 0}`
    if (c.textures.has(key)) return c.textures.get(key)
    const gl = c.gl
    const p = picture(asset)
    if (!p) return null
    const w = p.width, h = cube ? Math.floor(p.height / 6) : p.height
    const prepared = (from) => {
      const out = new Uint8Array(w * h * 4)
      for (let y = 0; y < h; y++) {
        const row = p.data.subarray((from + (flips ? h - 1 - y : y)) * w * 4, (from + (flips ? h - 1 - y : y) + 1) * w * 4)
        out.set(row, y * w * 4)
      }
      if (premultiplies) for (let i = 0; i < out.length; i += 4) { const a = out[i + 3] / 255; out[i] = Math.round(out[i] * a); out[i + 1] = Math.round(out[i + 1] * a); out[i + 2] = Math.round(out[i + 2] * a) }
      return out
    }
    const t = gl.createTexture()
    const target = cube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D
    gl.bindTexture(target, t)
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
    if (cube) for (let face = 0; face < 6; face++) gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, prepared(face * h))
    else gl.texImage2D(target, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, prepared(0))
    const made = { handle: t, target, mipped: false, even: c.version === 2 || ((w & (w - 1)) === 0 && (h & (h - 1)) === 0) }
    c.textures.set(key, made)
    return made
  }

  // What a sampler without a picture reads: opaque black.
  function black(c, cube) {
    const gl = c.gl
    const key = cube ? 'blackCube' : 'black'
    if (c[key]) return c[key]
    const t = gl.createTexture(), target = cube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D, one = new Uint8Array([0, 0, 0, 255])
    gl.bindTexture(target, t)
    if (cube) for (let face = 0; face < 6; face++) gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, one)
    else gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, one)
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    return (c[key] = { handle: t, target })
  }

  function buffer(c, key, target, make) {
    const gl = c.gl
    let b = c.buffers.get(key)
    if (!b) {
      b = { handle: gl.createBuffer(), kind: null }
      gl.bindBuffer(target, b.handle)
      const data = make(b)
      gl.bufferData(target, data, gl.STATIC_DRAW)
      c.buffers.set(key, b)
    } else {
      gl.bindBuffer(target, b.handle)
    }
    return b
  }

  const factors = { zero: 'ZERO', one: 'ONE', 'src-color': 'SRC_COLOR', 'one-minus-src-color': 'ONE_MINUS_SRC_COLOR', 'dst-color': 'DST_COLOR',
    'one-minus-dst-color': 'ONE_MINUS_DST_COLOR', 'src-alpha': 'SRC_ALPHA', 'one-minus-src-alpha': 'ONE_MINUS_SRC_ALPHA', 'dst-alpha': 'DST_ALPHA',
    'one-minus-dst-alpha': 'ONE_MINUS_DST_ALPHA', 'constant-color': 'CONSTANT_COLOR', 'one-minus-constant-color': 'ONE_MINUS_CONSTANT_COLOR',
    'constant-alpha': 'CONSTANT_ALPHA', 'one-minus-constant-alpha': 'ONE_MINUS_CONSTANT_ALPHA', 'src-alpha-saturate': 'SRC_ALPHA_SATURATE' }
  const modes = { triangles: 'TRIANGLES', triangleStrip: 'TRIANGLE_STRIP', triangleFan: 'TRIANGLE_FAN', lines: 'LINES', lineStrip: 'LINE_STRIP', points: 'POINTS' }

  function equation(c, name) {
    const gl = c.gl
    if (name === 'func-subtract') return gl.FUNC_SUBTRACT
    if (name === 'func-reverse-subtract') return gl.FUNC_REVERSE_SUBTRACT
    if (name === 'min') return c.version === 2 ? gl.MIN : c.minmax?.MIN_EXT ?? gl.FUNC_ADD
    if (name === 'max') return c.version === 2 ? gl.MAX : c.minmax?.MAX_EXT ?? gl.FUNC_ADD
    return gl.FUNC_ADD
  }

  // MARK: Drawing

  function draw(id, uniforms, [pw, ph], [rx, ry, rw, rh]) {
    const known = fills.get(id)
    if (!known) return {}
    const fill = known.fill
    const c = context(known.version, fill.antialias !== false)
    if (!c) return { unavailable: true }
    const gl = c.gl
    if (gl.isContextLost() || !(pw >= 1) || !(ph >= 1) || !(rw > 0) || !(rh > 0)) return {}
    const [W, H] = fill.size
    // The canvas only ever grows: its bottom left corner is drawn in.
    if (c.canvas.width < pw || c.canvas.height < ph) {
      c.canvas.width = Math.max(c.canvas.width, pw)
      c.canvas.height = Math.max(c.canvas.height, ph)
    }
    gl.viewport(0, 0, pw, ph)
    gl.enable(gl.SCISSOR_TEST)
    gl.scissor(0, 0, pw, ph)
    gl.disable(gl.BLEND)
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.colorMask(true, true, true, true)
    const clear = fill.clear ?? [0, 0, 0, 0]
    gl.clearColor(clear[0] ?? 0, clear[1] ?? 0, clear[2] ?? 0, clear[3] ?? 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    // The part drawn, in the buffer's pixels up from its bottom left, as WebGL counts.
    const bottom = H - (ry + rh)
    const sx = W / rw, sy = H / rh
    const x0 = 2 * rx / W - 1, y0 = 2 * bottom / H - 1
    for (let k = 0; k < fill.draws.length; k++) {
      const d = fill.draws[k]
      const program = compiled(c, id, d.program, fill.programs[d.program] ?? { vertex: '', fragment: '' })
      if (!program) return { broken: true }
      gl.useProgram(program.handle)
      // The draw's own viewport, in the buffer's pixels; all of the buffer without one.
      const v = d.viewport ? [d.viewport[0][0], d.viewport[0][1], d.viewport[1][0], d.viewport[1][1]] : [0, 0, W, H]
      const ax = v[2] / W, ay = v[3] / H, bx = (2 * v[0] + v[2]) / W - 1, by = (2 * v[1] + v[3]) / H - 1
      if (program.place) gl.uniform4f(program.place, ax * sx, ay * sy, (bx - x0) * sx - 1, (by - y0) * sy - 1)
      if (program.grown) gl.uniform1f(program.grown, pw / rw)
      if (program.view) gl.uniform4f(program.view, rw / pw, rh / ph, rx, bottom)
      // What falls outside its viewport is cut.
      const left = Math.max(0, Math.round((v[0] - rx) * pw / rw)), low = Math.max(0, Math.round((v[1] - bottom) * ph / rh))
      const right = Math.min(pw, Math.round((v[0] + v[2] - rx) * pw / rw)), high = Math.min(ph, Math.round((v[1] + v[3] - bottom) * ph / rh))
      if (right <= left || high <= low) continue
      gl.scissor(left, low, right - left, high - low)

      for (const [name, values] of Object.entries(uniforms[k] ?? {})) setUniform(gl, program, name, values)

      // Pictures, each on a unit of its own.
      let unit = 0
      for (const [name, kind] of program.uniforms) {
        const cube = kind.type === gl.SAMPLER_CUBE
        if (kind.type !== gl.SAMPLER_2D && !cube) continue
        const plain = name.replace(/\[0\]$/, '')
        const given = d.textures?.[plain] ?? d.textures?.[name]
        let t = given ? texture(c, given.asset, d.flipsTextures === true, d.premultipliesTextures === true, cube) : black(c, cube)
        if (given && !t) return {}
        gl.activeTexture(gl.TEXTURE0 + unit)
        gl.bindTexture(t.target, t.handle)
        if (given) {
          const s = d.sampling?.[plain] ?? d.sampling?.[name] ?? {}
          const wrap = (w) => (!t.even ? gl.CLAMP_TO_EDGE : w === 'repeat' ? gl.REPEAT : w === 'mirror' ? gl.MIRRORED_REPEAT : gl.CLAMP_TO_EDGE)
          const near = s.minify === 'nearest'
          let min = near ? gl.NEAREST : gl.LINEAR
          if (s.mipmap && t.even) {
            if (!t.mipped) { gl.generateMipmap(t.target); t.mipped = true }
            min = s.mipmap === 'nearest' ? (near ? gl.NEAREST_MIPMAP_NEAREST : gl.LINEAR_MIPMAP_NEAREST) : (near ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR_MIPMAP_LINEAR)
          }
          gl.texParameteri(t.target, gl.TEXTURE_WRAP_S, wrap(s.wrapS))
          gl.texParameteri(t.target, gl.TEXTURE_WRAP_T, wrap(s.wrapT))
          gl.texParameteri(t.target, gl.TEXTURE_MAG_FILTER, s.magnify === 'nearest' ? gl.NEAREST : gl.LINEAR)
          gl.texParameteri(t.target, gl.TEXTURE_MIN_FILTER, min)
        }
        const at = gl.getUniformLocation(program.handle, name)
        if (at) gl.uniform1i(at, unit)
        unit++
      }

      // Vertices: numbers for each, or one value for all.
      const most = gl.getParameter(gl.MAX_VERTEX_ATTRIBS)
      for (let i = 0; i < most; i++) gl.disableVertexAttribArray(i)
      for (const a of program.attributes) {
        if (a.at < 0) continue
        const given = d.attributes?.[a.name]
        const columns = a.type === gl.FLOAT_MAT4 ? 4 : a.type === gl.FLOAT_MAT3 ? 3 : a.type === gl.FLOAT_MAT2 ? 2 : 1
        if (given?.values) {
          buffer(c, `${id}|${k}|${a.name}`, gl.ARRAY_BUFFER, () => bytes(given.values))
          if (columns > 1) {
            for (let col = 0; col < columns; col++) {
              gl.enableVertexAttribArray(a.at + col)
              gl.vertexAttribPointer(a.at + col, columns, gl.FLOAT, false, columns * columns * 4, col * columns * 4)
            }
          } else {
            gl.enableVertexAttribArray(a.at)
            gl.vertexAttribPointer(a.at, Math.min(Math.max(given.components, 1), 4), gl.FLOAT, false, 0, 0)
          }
        } else {
          const one = given?.constant ?? []
          gl.vertexAttrib4f(a.at, one[0] ?? 0, one[1] ?? 0, one[2] ?? 0, one[3] ?? 1)
        }
      }

      if (d.blend) {
        const f = (name) => gl[factors[name] ?? 'ONE']
        gl.enable(gl.BLEND)
        gl.blendFuncSeparate(f(d.blend.source), f(d.blend.destination), f(d.blend.sourceAlpha), f(d.blend.destinationAlpha))
        gl.blendEquationSeparate(equation(c, d.blend.equation), equation(c, d.blend.equationAlpha))
      } else {
        gl.disable(gl.BLEND)
      }

      const mode = gl[modes[d.mode] ?? 'TRIANGLES']
      if (d.indices) {
        const b = buffer(c, `${id}|${k}|indices`, gl.ELEMENT_ARRAY_BUFFER, (made) => {
          const raw = bytes(d.indices), wide = new Uint32Array(raw.buffer, 0, raw.length >> 2)
          made.kind = c.wide ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT
          return c.wide ? wide : Uint16Array.from(wide)
        })
        gl.drawElements(mode, d.count, b.kind, d.first * (b.kind === gl.UNSIGNED_INT ? 4 : 2))
      } else {
        gl.drawArrays(mode, d.first, d.count)
      }
    }
    gl.disable(gl.SCISSOR_TEST)
    // Read back, the top row first.
    const up = new Uint8Array(pw * ph * 4)
    gl.readPixels(0, 0, pw, ph, gl.RGBA, gl.UNSIGNED_BYTE, up)
    if (gl.getError() === gl.CONTEXT_LOST_WEBGL) return {}
    const data = new Uint8Array(pw * ph * 4)
    for (let y = 0; y < ph; y++) data.set(up.subarray((ph - 1 - y) * pw * 4, (ph - y) * pw * 4), y * pw * 4)
    // A canvas that cannot be seen through is solid everywhere.
    if (fill.alpha === false) for (let i = 3; i < data.length; i += 4) data[i] = 255
    return { width: pw, height: ph, data, premultiplied: fill.premultipliedAlpha !== false }
  }

  return {
    /** Takes a fill to draw later, all of it but its inputs. Says whether its programs build. */
    define(id, fill) {
      const version = fill.programs.some((p) => /^\s*#version\s+300/.test(p.vertex) || /^\s*#version\s+300/.test(p.fragment)) ? 2 : 1
      const c = context(version, fill.antialias !== false)
      if (!c) return { unavailable: true }
      fills.set(id, { fill, version })
      for (const d of fill.draws) if (!compiled(c, id, d.program, fill.programs[d.program] ?? { vertex: '', fragment: '' })) return { broken: true }
      return { ok: true }
    },
    draw,
    /** Lets go of every fill taken, and what was made for them on the graphics card. */
    forget() {
      fills.clear()
      for (const c of contexts.values()) {
        if (!c) continue
        for (const p of c.programs.values()) if (p) c.gl.deleteProgram(p.handle)
        for (const t of c.textures.values()) c.gl.deleteTexture(t.handle)
        for (const b of c.buffers.values()) c.gl.deleteBuffer(b.handle)
        c.programs.clear(); c.textures.clear(); c.buffers.clear()
      }
    },
    /** Pictures that came late are read anew. */
    forgetPictures() {
      for (const c of contexts.values()) {
        if (!c) continue
        for (const t of c.textures.values()) c.gl.deleteTexture(t.handle)
        c.textures.clear()
      }
    },
  }
}
