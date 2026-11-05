// Editing a shared design in the browser: the artboard drawn by Bezzle's own renderer, with
// layers to pick, handles to drag, a small inspector and the design's notes. Every change is made
// by the core as the Mac makes it (WebEditing.swift), and goes to the room a moment later as a
// record of this browser's own (share.mjs), so it merges with everyone else's the same way.

const SVG = 'http://www.w3.org/2000/svg'
const el = (tag, props = {}, ...kids) => {
  const e = document.createElement(tag)
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') e.className = v
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v)
    else if (k === 'text') e.textContent = v
    else if (v !== undefined && v !== null && v !== false) e.setAttribute(k, v === true ? '' : v)
  }
  e.append(...kids.filter((k) => k !== null && k !== undefined && k !== false))
  return e
}
const svg = (tag, attrs) => { const e = document.createElementNS(SVG, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); return e }
const hex = (c) => '#' + c.slice(0, 3).map((v) => Math.round(Math.min(Math.max(v, 0), 1) * 255).toString(16).padStart(2, '0')).join('')
const rgba = (h, a = 1) => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255, a]
const round = (v) => Math.round(v * 100) / 100

export class Editor {
  /**
   * `bz` the core, `CK` CanvasKit, `room` the design's room, `me` { replica, writer, name },
   * `t` the page's words, `ensureFonts()` fetches faces the design shows, `els` the page's places.
   */
  constructor({ bz, CK, room, me, t, ensureFonts, faceNames, els, onName }) {
    Object.assign(this, { bz, CK, room, me, t, ensureFonts, faceNames, els, onName })
    this.boards = []
    this.current = -1
    this.layers = []
    this.byId = new Map()
    this.selection = new Set()
    this.scope = null // the group entered, if any
    this.hover = null
    this.gesture = null
    this.typing = null
    this.waiting = [] // others' records that came during a gesture
    this.sendTimer = null
    this.introduced = false
    this.canUndo = false
    this.canRedo = false
    this.listen()
  }

  // MARK: Showing

  /** The design's artboards, as the core answers after opening or taking something in. */
  show(boards) {
    this.boards = boards
    this.els.boards.replaceChildren(...boards.map((b) => el('button', { text: b.name, 'data-index': b.index, onclick: () => this.go(b.index) })))
    this.go(boards.some((b) => b.index === this.current) ? this.current : boards[0]?.index ?? -1, true)
  }

  go(index, keep = false) {
    if (index !== this.current || !keep) { if (!keep) { this.selection.clear(); this.scope = null } }
    this.current = index
    for (const b of this.els.boards.children) b.setAttribute('aria-current', String(+b.dataset.index === index))
    this.draw()
  }

  /** Draws the artboard, reads its layers, and puts the overlay and the inspector right. */
  draw() {
    const index = this.current
    if (index < 0) return
    const scale = Math.min(window.devicePixelRatio || 1, 2)
    const img = this.bz.render(index, scale).image
    const w = img.width(), h = img.height()
    const px = img.readPixels(0, 0, { width: w, height: h, colorType: this.CK.ColorType.RGBA_8888, alphaType: this.CK.AlphaType.Unpremul, colorSpace: this.CK.ColorSpace.SRGB })
    if (!this.canvas?.isConnected) this.build()
    this.canvas.width = w; this.canvas.height = h
    this.canvas.style.width = `${w / scale}px`
    this.canvas.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(px.buffer, px.byteOffset, px.length), w, h), 0, 0)
    this.board = this.boards.find((b) => b.index === index)
    this.layers = this.bz.layers(index)
    this.byId = new Map(this.layers.map((l) => [l.id, l]))
    for (const id of [...this.selection]) if (!this.byId.has(id)) this.selection.delete(id)
    if (this.scope && !this.byId.has(this.scope)) this.scope = null
    this.overlay.setAttribute('viewBox', `0 0 ${this.board.frame[2]} ${this.board.frame[3]}`)
    this.paint()
    if (!this.picking) this.inspect()
    this.listLayers()
    this.afterDraw?.()
  }

  build() {
    this.canvas = el('canvas')
    this.overlay = svg('svg', { class: 'overlay' })
    this.wrap = el('div', { class: 'board' }, this.canvas, this.overlay)
    this.els.stage.replaceChildren(this.wrap)
    this.overlay.addEventListener('pointerdown', (e) => this.down(e))
    this.overlay.addEventListener('pointermove', (e) => this.moveOver(e))
    this.overlay.addEventListener('pointerleave', () => { this.hover = null; this.paint() })
    this.overlay.addEventListener('dblclick', (e) => this.double(e))
  }

  /** How many screen pixels an artboard point is, as the canvas is shown now. */
  get ratio() { return this.canvas.getBoundingClientRect().width / this.board.frame[2] }

  point(e) {
    const r = this.canvas.getBoundingClientRect(), k = this.ratio
    return [(e.clientX - r.left) / k, (e.clientY - r.top) / k]
  }

  // MARK: The overlay

  paint() {
    if (!this.overlay) return
    const k = this.ratio || 1, line = 1.5 / k
    this.overlay.replaceChildren()
    const outline = (f, cls) => this.overlay.append(svg('rect', { x: f[0], y: f[1], width: f[2], height: f[3], class: cls, 'stroke-width': line }))
    if (this.scope) outline(this.byId.get(this.scope).frame, 'scope')
    if (this.hover && !this.selection.has(this.hover) && this.byId.has(this.hover)) outline(this.byId.get(this.hover).frame, 'hover')
    for (const id of this.selection) outline(this.byId.get(id).frame, 'picked')
    if (this.selection.size === 1 && !this.typing) {
      const f = this.byId.get([...this.selection][0]).frame, s = 8 / k
      for (const [name, x, y] of this.handles(f)) {
        const h = svg('rect', { x: x - s / 2, y: y - s / 2, width: s, height: s, class: `handle ${name}`, 'stroke-width': line })
        h.dataset.handle = name
        this.overlay.append(h)
      }
    }
  }

  handles(f) {
    const [x, y, w, h] = f, mx = x + w / 2, my = y + h / 2
    return [['nw', x, y], ['n', mx, y], ['ne', x + w, y], ['e', x + w, my], ['se', x + w, y + h], ['s', mx, y + h], ['sw', x, y + h], ['w', x, my]]
  }

  /** The topmost layer under a point, among those in the group entered (or on the artboard). */
  hit([px, py]) {
    const level = this.layers.filter((l) => (l.parent ?? null) === this.scope && !l.hidden && !l.locked)
    for (let i = level.length - 1; i >= 0; i--) {
      const [x, y, w, h] = level[i].frame
      if (px >= x && px <= x + w && py >= y && py <= y + h) return level[i]
    }
    return null
  }

  moveOver(e) {
    if (this.gesture) return
    const id = this.hit(this.point(e))?.id ?? null
    if (id !== this.hover) { this.hover = id; this.paint() }
  }

  // MARK: Gestures

  down(e) {
    if (this.typing) return this.commitText()
    const p = this.point(e)
    const handle = e.target.dataset?.handle
    if (handle && this.selection.size === 1) {
      const id = [...this.selection][0]
      this.gesture = { kind: 'resize', handle, id, from: p, frame: [...this.byId.get(id).frame], moved: false }
    } else {
      const layer = this.hit(p)
      if (!layer) {
        if (this.scope && !this.inside(p, this.byId.get(this.scope).frame)) this.scope = null
        this.selection.clear()
        this.paint(); this.inspect(); this.listLayers()
        return
      }
      if (e.shiftKey) { if (this.selection.has(layer.id)) this.selection.delete(layer.id); else this.selection.add(layer.id) }
      else if (!this.selection.has(layer.id)) { this.selection.clear(); this.selection.add(layer.id) }
      this.gesture = { kind: 'move', ids: [...this.selection], from: p, moved: false }
      this.paint(); this.inspect(); this.listLayers()
    }
    this.overlay.setPointerCapture(e.pointerId)
    const move = (ev) => this.drag(ev)
    const up = () => {
      this.overlay.removeEventListener('pointermove', move)
      this.overlay.removeEventListener('pointerup', up)
      this.overlay.removeEventListener('pointercancel', up)
      this.finish()
    }
    this.overlay.addEventListener('pointermove', move)
    this.overlay.addEventListener('pointerup', up)
    this.overlay.addEventListener('pointercancel', up)
  }

  inside([px, py], [x, y, w, h]) { return px >= x && px <= x + w && py >= y && py <= y + h }

  drag(e) {
    const g = this.gesture
    if (!g) return
    const p = this.point(e)
    let dx = p[0] - g.from[0], dy = p[1] - g.from[1]
    if (!g.moved && Math.hypot(dx, dy) * this.ratio < 3) return
    if (!g.moved) { g.moved = true; this.bz.begin() }
    if (e.shiftKey && g.kind === 'move') { if (Math.abs(dx) > Math.abs(dy)) dy = 0; else dx = 0 }
    if (g.kind === 'move') {
      g.op = [{ op: 'move', ids: g.ids, dx: round(dx), dy: round(dy) }]
    } else {
      let [x, y, w, h] = g.frame
      if (g.handle.includes('w')) { x += dx; w -= dx }
      if (g.handle.includes('e')) w += dx
      if (g.handle.includes('n')) { y += dy; h -= dy }
      if (g.handle.includes('s')) h += dy
      if (w < 1) { if (g.handle.includes('w')) x += w - 1; w = 1 }
      if (h < 1) { if (g.handle.includes('n')) y += h - 1; h = 1 }
      g.op = [{ op: 'frame', id: g.id, frame: [round(x), round(y), round(w), round(h)] }]
    }
    if (!g.frameAsked) {
      g.frameAsked = true
      requestAnimationFrame(() => { g.frameAsked = false; if (this.gesture === g && g.op) { this.bz.edit(g.op); this.draw() } })
    }
  }

  finish() {
    const g = this.gesture
    this.gesture = null
    if (!g?.moved) return
    if (g.op) this.bz.edit(g.op)
    this.changed(this.bz.end())
  }

  double(e) {
    const layer = this.hit(this.point(e))
    if (!layer) return
    if (layer.container && layer.kind !== 'artboard') {
      // Into the group: what is in it can be picked now.
      this.scope = layer.id
      const inner = this.hit(this.point(e))
      this.selection = new Set(inner ? [inner.id] : [])
      this.paint(); this.inspect(); this.listLayers()
    } else if (layer.kind === 'text') {
      this.startText(layer)
    }
  }

  // MARK: Typing on the artboard

  startText(layer) {
    this.selection = new Set([layer.id])
    const k = this.ratio, [x, y, w, h] = layer.frame
    const box = el('textarea', { class: 'typing', spellcheck: 'true', rows: 1 })
    box.value = layer.text
    // A text sized to its words grows sideways as they are typed; one of a set width, downwards.
    const wide = layer.style.sizing === 'autoWidth'
    if (wide) box.wrap = 'off'
    Object.assign(box.style, { left: `${x * k}px`, top: `${y * k}px`, width: `${Math.max(w * k, 40)}px`, height: `${h * k}px`,
      fontSize: `${layer.style.size * k}px`, textAlign: layer.style.align === 'justify' ? 'left' : layer.style.align })
    const fit = () => {
      box.style.height = 'auto'
      box.style.height = `${Math.max(box.scrollHeight, h * k)}px`
      if (wide) { box.style.width = 'auto'; box.style.width = `${Math.max(box.scrollWidth + 4, w * k, 40)}px` }
    }
    box.addEventListener('input', fit)
    this.typing = { id: layer.id, box, was: layer.text }
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); this.commitText(false) }
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); this.commitText() }
      e.stopPropagation()
    })
    box.addEventListener('blur', () => this.commitText())
    this.wrap.append(box)
    this.paint()
    fit()
    box.focus()
    box.select()
  }

  commitText(keep = true) {
    const typing = this.typing
    if (!typing) return
    this.typing = null
    typing.box.remove()
    if (keep && typing.box.value !== typing.was) this.edit([{ op: 'text', id: typing.id, text: typing.box.value }])
    else this.paint()
    this.takeWaiting()
  }

  // MARK: Changing the design

  /** One step: made by the core, drawn, and sent a moment later. */
  edit(ops) {
    this.changed(this.bz.edit(ops))
  }

  changed(answer) {
    this.canUndo = !!answer?.undo
    this.canRedo = !!answer?.redo
    this.els.undo.disabled = !this.canUndo
    this.els.redo.disabled = !this.canRedo
    if (answer?.boards) this.boards = answer.boards
    // A face chosen in the inspector is fetched before the text is drawn with it.
    this.ensureFonts().then((came) => { if (came) this.draw() })
    this.draw()
    this.sendSoon()
  }

  /** The person's name, asked once, before anything they do goes to the others. */
  asked(then = () => {}) {
    if (this.me.name) return true
    this.onName(then)
    return false
  }

  sendSoon() {
    clearTimeout(this.sendTimer)
    this.sendTimer = setTimeout(() => this.send(), 700)
  }

  async send() {
    if (this.gesture || this.typing) return this.sendSoon()
    // Nothing goes to the others before they know who it comes from.
    if (!this.asked(() => this.sendSoon())) return
    const change = this.bz.changes()
    if (!change.data) return
    const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))
    try {
      if (!this.introduced) { await this.room.introduce(); this.introduced = true }
      await this.room.send(bytes(change.data), change.upTo, () => bytes(this.bz.whole().data))
      this.onSent?.(true)
    } catch (e) {
      console.error('sending', e)
      this.onSent?.(false)
      // Everything since the last record that got out goes with the next.
      this.bz.unsent(change.from)
      setTimeout(() => this.sendSoon(), 5000)
    }
  }

  /** Others' records came: taken in now, or once the drag or the typing is done. */
  take(parts, receive) {
    if (this.gesture || this.typing) { this.waiting.push(...parts); this.receive = receive; return false }
    return receive(parts)
  }

  takeWaiting() {
    if (!this.waiting.length || this.gesture || this.typing) return
    const parts = this.waiting
    this.waiting = []
    this.receive?.(parts)
  }

  undo() { if (!this.gesture && !this.typing) this.changed(this.bz.undo()) }
  redo() { if (!this.gesture && !this.typing) this.changed(this.bz.redo()) }

  listen() {
    window.addEventListener('keydown', (e) => {
      if (e.target.closest?.('input, textarea, select')) return
      const mod = e.metaKey || e.ctrlKey
      if (mod && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? this.redo() : this.undo() }
      else if (mod && e.key.toLowerCase() === 'y') { e.preventDefault(); this.redo() }
      else if ((e.key === 'Delete' || e.key === 'Backspace') && this.selection.size) { e.preventDefault(); this.edit([{ op: 'delete', ids: [...this.selection] }]) }
      else if (e.key === 'Escape') {
        if (this.selection.size) this.selection.clear(); else this.scope = null
        this.paint(); this.inspect(); this.listLayers()
      } else if (e.key.startsWith('Arrow') && this.selection.size) {
        e.preventDefault()
        const step = e.shiftKey ? 10 : 1
        const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key]
        this.edit([{ op: 'move', ids: [...this.selection], dx: d[0], dy: d[1] }])
      } else if (e.key === 'Enter' && this.selection.size === 1) {
        const layer = this.byId.get([...this.selection][0])
        if (layer?.kind === 'text') { e.preventDefault(); this.startText(layer) }
      }
    })
    this.els.undo.addEventListener('click', () => this.undo())
    this.els.redo.addEventListener('click', () => this.redo())
    window.addEventListener('resize', () => this.paint())
  }

  // MARK: Layers

  listLayers() {
    const list = this.els.layers
    if (!list) return
    list.replaceChildren(...this.layers.map((l) => {
      const b = el('button', { class: `layer${this.selection.has(l.id) ? ' on' : ''}${l.hidden ? ' hidden' : ''}`, text: l.name || l.kind,
        style: `padding-left:${10 + l.depth * 12}px`, onclick: (e) => {
          this.scope = l.parent ?? null
          if (e.shiftKey) { if (this.selection.has(l.id)) this.selection.delete(l.id); else this.selection.add(l.id) } else this.selection = new Set([l.id])
          this.paint(); this.inspect(); this.listLayers()
        } })
      return b
    }))
  }

  // MARK: The inspector

  inspect() {
    const t = this.t, box = this.els.inspector
    // Not under the cursor of someone writing in it: once they leave it.
    if (box.contains(document.activeElement) && document.activeElement.matches('input, textarea, select')) {
      if (!this.inspectLater) {
        this.inspectLater = true
        box.addEventListener('focusout', () => setTimeout(() => { if (!box.contains(document.activeElement)) { this.inspectLater = false; this.inspect() } }), { once: true })
      }
      return
    }
    const picked = [...this.selection].map((id) => this.byId.get(id)).filter(Boolean)
    if (!picked.length) return box.replaceChildren(this.notesPanel())
    const one = picked.length === 1 ? picked[0] : null, ids = picked.map((l) => l.id)
    const section = (title, ...rows) => el('section', {}, el('h3', { text: title }), ...rows)
    const num = (label, value, onchange, step = 1) => el('label', { class: 'num' }, el('span', { text: label }),
      el('input', { type: 'number', step, value: round(value), onchange: (e) => { const v = parseFloat(e.target.value); if (!Number.isNaN(v)) onchange(v) } }))
    const parts = []
    parts.push(el('div', { class: 'title' }, el('b', { text: one ? one.name || one.kind : t.many(picked.length) })))
    if (one) {
      const [x, y, w, h] = one.frame
      const frame = (i) => (v) => { const f = [...one.frame]; f[i] = v; this.edit([{ op: 'frame', id: one.id, frame: f }]) }
      parts.push(el('div', { class: 'grid4' }, num('X', x, frame(0)), num('Y', y, frame(1)), num('W', w, frame(2)), num('H', h, frame(3))))
    }
    const lead = picked[0]
    if (lead.kind !== 'text' && lead.kind !== 'group') {
      parts.push(section(t.fill, lead.picture ? el('p', { class: 'soft', text: t.picture }) : el('div', { class: 'row' },
        el('input', { type: 'color', value: hex(lead.fill), oninput: (e) => this.preview(e, [{ op: 'fill', ids, color: rgba(e.target.value, lead.fill[3]) }]) }),
        num('%', lead.fill[3] * 100, (v) => this.edit([{ op: 'fill', ids, color: [...lead.fill.slice(0, 3), Math.min(Math.max(v, 0), 100) / 100] }])))))
    }
    if (lead.kind !== 'group') {
      parts.push(section(t.border, el('div', { class: 'row' },
        el('input', { type: 'checkbox', checked: lead.border.on, onchange: (e) => this.edit([{ op: 'border', ids, on: e.target.checked }]) }),
        el('input', { type: 'color', value: hex(lead.border.color), oninput: (e) => this.preview(e, [{ op: 'border', ids, on: true, color: rgba(e.target.value, lead.border.color[3]) }]) }),
        num(t.width, lead.border.width, (v) => this.edit([{ op: 'border', ids, on: true, width: v }]), 0.5))))
    }
    if (lead.kind === 'rectangle') parts.push(section(t.corners, num('', lead.radius, (v) => this.edit([{ op: 'radius', ids, value: v }]))))
    if (lead.kind === 'text') parts.push(this.typePanel(lead, ids))
    parts.push(section(t.opacity, num('%', lead.opacity * 100, (v) => this.edit([{ op: 'opacity', ids, value: v / 100 }]))))
    if (one) parts.push(this.notesPanel(one.id))
    box.replaceChildren(...parts)
  }

  /** A colour being picked shows as it goes, and is one step when the picker closes. */
  preview(e, ops) {
    if (!this.picking) {
      this.picking = true
      this.bz.begin()
      e.target.addEventListener('change', () => { this.picking = false; this.changed(this.bz.end()) }, { once: true })
    }
    this.bz.edit(ops)
    this.draw()
  }

  typePanel(lead, ids) {
    const t = this.t, s = lead.style
    const families = ['System', ...Object.keys(this.faceNames()).filter((f) => f !== 'System').sort()]
    const family = el('select', { onchange: (e) => {
      const faces = this.faceNames()[e.target.value] ?? ['Regular']
      this.edit([{ op: 'font', ids, family: e.target.value, face: faces.includes(s.face) ? s.face : faces.includes('Regular') ? 'Regular' : faces[0] }])
    } }, ...families.map((f) => el('option', { value: f, text: f === 'System' ? 'SF Pro' : f, selected: f === s.family })))
    const faces = this.faceNames()[s.family] ?? [s.face]
    const face = el('select', { onchange: (e) => this.edit([{ op: 'font', ids, face: e.target.value }]) },
      ...faces.map((f) => el('option', { value: f, text: f, selected: f === s.face })))
    const size = el('input', { type: 'number', min: 1, step: 1, value: round(s.size), onchange: (e) => { const v = parseFloat(e.target.value); if (v > 0) this.edit([{ op: 'font', ids, size: v }]) } })
    const aligns = ['left', 'center', 'right', 'justify'].map((a) => el('button', { class: `align${s.align === a ? ' on' : ''}`, title: t.align[a], text: { left: '⟸', center: '⟺', right: '⟹', justify: '☰' }[a],
      onclick: () => this.edit([{ op: 'font', ids, align: a }]) }))
    const words = ids.length === 1 ? el('textarea', { class: 'words', rows: 3, onchange: (e) => this.edit([{ op: 'text', id: ids[0], text: e.target.value }]) }) : null
    if (words) words.value = lead.text
    return el('section', {}, el('h3', { text: t.text }), family, el('div', { class: 'row' }, face, size), el('div', { class: 'row aligns' }, ...aligns), words)
  }

  // MARK: Notes

  notesPanel(on = null) {
    const t = this.t
    const notes = this.bz.notes().filter((n) => on ? n.on === on : (n.board === this.board?.id || n.on === this.board?.id || !n.on))
    const open = notes.filter((n) => !n.done)
    const when = (s) => new Date(s * 1000).toLocaleString(document.documentElement.lang, { dateStyle: 'medium', timeStyle: 'short' })
    const note = (n) => el('div', { class: 'note' }, el('div', { class: 'by' }, el('b', { text: n.by }), el('span', { text: when(n.time) })), el('p', { text: n.text }))
    const thread = (n) => {
      const reply = el('textarea', { rows: 2, placeholder: t.answer })
      return el('div', { class: 'thread' }, note(n), ...n.answers.map(note),
        el('div', { class: 'row' }, reply),
        el('div', { class: 'row end' },
          el('button', { class: 'quiet', text: t.closeNote, onclick: () => this.edit([{ op: 'done', thread: n.id, done: true }]) }),
          el('button', { text: t.send, onclick: () => {
            if (!reply.value.trim() || !this.asked(() => this.inspect())) return
            const words = reply.value
            reply.value = ''
            reply.blur()
            this.edit([{ op: 'answer', thread: n.id, text: words, by: this.me.name, replica: this.me.replica }])
          } })))
    }
    const write = el('textarea', { rows: 2, placeholder: on ? t.noteHere : t.noteBoard })
    const add = el('div', { class: 'thread new' }, write, el('div', { class: 'row end' }, el('button', { text: t.send, onclick: () => {
      if (!write.value.trim() || !this.asked(() => this.inspect())) return
      const target = on ?? this.board?.id, words = write.value
      write.value = ''
      write.blur()
      this.edit([{ op: 'note', ids: target ? [target] : [], text: words, by: this.me.name, replica: this.me.replica }])
    } })))
    return el('section', { class: 'notes' }, el('h3', { text: t.notes }), ...open.map(thread), add)
  }
}
