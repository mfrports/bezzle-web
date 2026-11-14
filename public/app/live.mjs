// Who else has a shared design open, in the page: a token for each in the bar at the top, in their
// own coloured pencil, and over the artboard their hand, shaped like the tool they hold, with
// their name beside it while they start moving or are at work; what they hold, outlined, with
// their initial on a flag; and the loop they draw by shaking their pointer. Drawn as Bezzle on
// the Mac draws them (Canvas/LiveMarks.swift, Views/LiveViews.swift): the same shapes, sizes and
// timing, on a canvas of its own that lies over the stage.
//
//   const live = createLive({ bz, words, lang, goTo, changed })
//   header.insertBefore(live.people, status)     // who is there
//   room.follow({ …, onLive: live.heard })       // what the room says (share.mjs)
//   live.show(board, canvas, stage)              // after the artboard was drawn on `canvas` in `stage`
//   live.list(aside)                             // the list of artboards: who is on which
//
// The page only watches. Nothing here says anything in the room, and whose pencil is whose, where
// a hand is and what it holds is worked out by the core, with the Mac's own code (bezzle.mjs'
// liveMessage and livePeople).

const STYLE = `
.live-people { display: flex; align-items: center; margin-left: auto; padding-left: 4px; }
.live-people:empty { display: none; }
.live-people:not(:empty) + * { margin-left: 0; }
.live-person { position: relative; flex: none; width: 28px; height: 28px; margin: 0 0 0 -4px; padding: 0; border: 2px solid var(--bg, #f4f1ec); border-radius: 50%;
  background: var(--c); color: white; font: 700 11px/1 ui-rounded, system-ui, -apple-system, "Segoe UI", sans-serif; cursor: pointer;
  transition: transform .18s, opacity .25s, filter .25s; animation: live-came .28s cubic-bezier(.3, 1.4, .5, 1); }
.live-person:hover, .live-person:focus-visible { transform: scale(1.08); z-index: 1; }
.live-person:focus-visible { outline: 2px solid var(--c); outline-offset: 1px; }
.live-person.away { opacity: .5; filter: saturate(.4); }
.live-person.busy::before { content: ""; position: absolute; inset: -3px; border: 1.5px solid var(--c); border-radius: 50%; opacity: .55; animation: live-busy .9s ease-in-out infinite alternate; }
.live-tag { position: absolute; top: 31px; left: 50%; display: flex; flex-direction: column; align-items: center; pointer-events: none;
  opacity: 0; transform: translate(-50%, -4px) scale(.9); transform-origin: top; transition: opacity .16s, transform .16s; }
.live-person:hover .live-tag, .live-person:focus-visible .live-tag { opacity: 1; transform: translate(-50%, 0); }
.live-tag::before { content: ""; width: 0; height: 0; border: solid transparent; border-width: 0 4.5px 5px; border-bottom-color: var(--c); margin-bottom: -1px; }
.live-name { display: flex; align-items: center; gap: 5px; height: 21px; padding: 0 9px; border-radius: 10.5px; background: var(--c); color: white;
  font: 600 11.5px/1 system-ui, -apple-system, "Segoe UI", sans-serif; white-space: nowrap; box-shadow: 0 1px 3px rgba(0, 0, 0, .16); transform: translateX(var(--shift, 0px)); }
.live-name time { font-weight: 500; font-size: 11px; font-variant-numeric: tabular-nums; opacity: .75; }
.live-name time:empty { display: none; }
.live-marks { position: fixed; z-index: 5; pointer-events: none; background: none !important; box-shadow: none !important; max-width: none !important; }
.live-dots { float: right; display: flex; align-items: center; gap: 3px; height: 1.45em; margin-left: 8px; }
.live-dots i { width: 6px; height: 6px; border-radius: 50%; }
@keyframes live-came { from { opacity: 0; transform: scale(.2); } }
@keyframes live-busy { from { opacity: .14; } to { opacity: .55; } }
@media (prefers-reduced-motion: reduce) { .live-person, .live-person.busy::before { animation: none; } }
`

/** Longer than this without a word, in seconds, someone shows as away; much longer, they are taken
    to have gone: as on the Mac (LiveRoom.dropSilent). */
const PATIENCE = { quiet: 25, gone: 300 }

const css = ([r, g, b], alpha = 1) => `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${alpha})`
const FONT = 'system-ui, -apple-system, "Segoe UI", sans-serif'

/**
 * `bz` is the core (bezzle.mjs). `words` are the page's own: { people, goTo(name) }, and `lang`
 * its language, for the time where someone is. `goTo(index)` shows an artboard, as when its name
 * is pressed in the list. `changed(record)` is told what someone changed, as they change it,
 * before it reaches the room's records: a record for the core's `receive`. `patience`, for tests:
 * { quiet, gone }, how long someone may say nothing, in seconds.
 */
export function createLive({ bz, words = {}, lang = 'en', goTo = () => {}, changed = () => {}, patience = {} }) {
  const QUIET = patience.quiet ?? PATIENCE.quiet, GONE = patience.gone ?? PATIENCE.gone
  if (!document.getElementById('live-style')) {
    const style = document.createElement('style')
    style.id = 'live-style'
    style.textContent = STYLE
    document.head.append(style)
  }
  const say = { people: 'People', goTo: (name) => `Go to ${name}`, ...words }

  const people = document.createElement('div')
  people.className = 'live-people'
  people.setAttribute('role', 'group')
  people.setAttribute('aria-label', say.people)
  const marks = document.createElement('canvas')
  marks.className = 'live-marks'
  marks.setAttribute('aria-hidden', 'true')
  const scratch = document.createElement('canvas')

  // Everyone who said who they are, as the core has them, in the order they came.
  let there = []
  const heardAt = new Map() // place in the room → when they last said anything, in seconds
  const arrivals = new Map()
  const hands = new Map() // place in the room → the hand as drawn
  const tokens = new Map()
  let winks = []
  let board = null, still = null, stage = null, aside = null
  let mine = null // this visitor's own pointer, in the window
  let last = 0, turning = 0, dpr = 1, watched = null

  const clock = () => performance.now() / 1000
  const person = (peer) => there.find((p) => p.peer === peer)
  const quiet = (p, now) => now - (heardAt.get(p.peer) ?? now)
  const away = (p, now) => p.away === true || quiet(p, now) > QUIET
  const gone = (p, now) => quiet(p, now) > GONE
  /** The artboard someone is on: the one under their pointer, else the one most of their window shows. */
  const where = (p) => (p.board >= 0 ? p.board : p.looksAt ?? -1)

  // MARK: Who is there

  function timeThere(zone) {
    if (!zone) return ''
    try {
      const now = new Date()
      const wall = (z) => new Intl.DateTimeFormat('en-GB', { timeZone: z, dateStyle: 'short', timeStyle: 'short' }).format(now)
      // Only if it is not the time here.
      if (wall(zone) === wall(undefined)) return ''
      return new Intl.DateTimeFormat(lang, { timeZone: zone, hour: 'numeric', minute: '2-digit' }).format(now)
    } catch {
      return ''
    }
  }

  function token(peer) {
    const el = document.createElement('button')
    el.type = 'button'
    el.className = 'live-person'
    const initial = document.createElement('span')
    const tag = document.createElement('span')
    tag.className = 'live-tag'
    const pill = document.createElement('span')
    pill.className = 'live-name'
    const name = document.createElement('span'), time = document.createElement('time')
    pill.append(name, time)
    tag.append(pill)
    el.append(initial, tag)
    const made = { el, initial, name, time, zone: null }
    el.onclick = () => {
      const p = person(peer), at = p ? where(p) : -1
      if (at >= 0) goTo(at)
    }
    // The name hangs below, kept inside the window where the token is near its edge.
    const open = () => {
      time.textContent = timeThere(made.zone)
      const r = el.getBoundingClientRect(), half = pill.offsetWidth / 2, mid = r.left + r.width / 2
      const over = Math.max(0, mid + half - (window.innerWidth - 8)) - Math.max(0, 8 - (mid - half))
      pill.style.setProperty('--shift', `${-over}px`)
    }
    el.addEventListener('pointerenter', open)
    el.addEventListener('focus', open)
    return made
  }

  // The tokens in the bar and the marks in the list of artboards, as people are now.
  function reflect() {
    const now = clock()
    const shown = there.filter((p) => !gone(p, now))
    for (const [peer, t] of tokens) if (!shown.some((p) => p.peer === peer)) { t.el.remove(); tokens.delete(peer) }
    shown.forEach((p, i) => {
      let t = tokens.get(p.peer)
      if (!t) tokens.set(p.peer, (t = token(p.peer)))
      if (people.children[i] !== t.el) people.insertBefore(t.el, people.children[i] ?? null)
      t.el.style.setProperty('--c', css(p.color))
      t.initial.textContent = p.initial
      t.name.textContent = p.name
      t.zone = p.timeZone ?? null
      const elsewhere = away(p, now)
      t.el.classList.toggle('away', elsewhere)
      t.el.classList.toggle('busy', !elsewhere && !!p.doing && p.doing !== 'looking')
      t.el.setAttribute('aria-label', where(p) >= 0 ? say.goTo(p.name) : p.name)
    })
    dots()
  }

  // Beside an artboard's name in the list, a dot in the pencil of each who is on it.
  function dots() {
    if (!aside) return
    const now = clock()
    const on = new Map()
    for (const p of there) {
      const at = gone(p, now) ? -1 : where(p)
      if (at >= 0) on.set(at, [...(on.get(at) ?? []), p])
    }
    for (const entry of aside.children) {
      const here = on.get(Number(entry.dataset.index)) ?? []
      let row = entry.querySelector(':scope > .live-dots')
      if (!here.length) { row?.remove(); continue }
      const as = here.map((p) => `${p.peer} ${p.name} ${css(p.color, away(p, now) ? 0.45 : 1)}`).join('|')
      if (row?.dataset.as === as) continue
      if (!row) { row = document.createElement('span'); row.className = 'live-dots'; entry.prepend(row) }
      row.dataset.as = as
      row.title = here.map((p) => p.name).join(', ')
      row.replaceChildren(...here.map((p) => {
        const dot = document.createElement('i')
        dot.style.background = css(p.color, away(p, now) ? 0.45 : 1)
        return dot
      }))
    }
  }

  function refresh(list = bz.livePeople()) {
    there = list
    reflect()
    kick()
  }

  /** What the room says, as share.mjs' `follow` hands it on. */
  function heard(e) {
    const now = clock()
    if (e.kind === 'welcome' || e.kind === 'closed') {
      // Come in, or cut off: whoever is there says who they are again.
      bz.liveClear()
      heardAt.clear()
      arrivals.clear()
      refresh([])
    } else if (e.kind === 'left') {
      heardAt.delete(e.peer)
      arrivals.delete(e.peer)
      refresh(bz.liveLeft(e.peer))
    } else if (e.kind === 'message') {
      const said = bz.liveMessage(e.peer, e.plain)
      if (said.kind === 'unread') return
      const back = now - (heardAt.get(e.peer) ?? now) > QUIET
      heardAt.set(e.peer, now)
      if (said.kind === 'hello') {
        if (!arrivals.has(e.peer)) arrivals.set(e.peer, now)
        refresh()
      } else if (said.kind === 'presence') {
        const i = there.findIndex((p) => p.peer === e.peer)
        if (i < 0) return refresh()
        const was = there[i]
        there[i] = said.person
        if (back || was.away !== said.person.away || was.doing !== said.person.doing || where(was) !== where(said.person)) reflect()
        kick()
      } else if (said.kind === 'wink') {
        winks.push({ ...said, time: now })
        kick()
      } else {
        if (back) reflect()
        if (said.kind === 'changes') changed(said.record)
      }
    }
  }

  // MARK: Moving, as LiveMarks.step

  function ease(value, target, k, state) {
    if (Math.abs(target - value) < 0.004) return target
    state.moving = true
    return value + (target - value) * k
  }

  function step(now, place) {
    const dt = last === 0 ? 1 / 60 : Math.min(Math.max(now - last, 0.001), 0.1)
    last = now
    const state = { moving: false }
    const k = (tau) => 1 - Math.exp(-dt / tau)
    const zoom = place?.zoom ?? 1
    for (const peer of new Set([...hands.keys(), ...there.map((p) => p.peer)])) {
      const who = person(peer)
      // Where they are, once they said so and while they are heard from.
      const p = who && who.view && !gone(who, now) ? who : null
      const hand = hands.get(peer)
      if (hand) {
        if (p?.pointer && (p.pointer[0] !== hand.target[0] || p.pointer[1] !== hand.target[1])) {
          if (now - hand.lastMoved > 1.5) hand.tagUntil = Math.max(hand.tagUntil, now + 2)
          hand.lastMoved = now
          hand.target = p.pointer
        }
        if (p?.pointer) hand.board = p.board
        const dx = hand.target[0] - hand.at[0], dy = hand.target[1] - hand.at[1]
        if (Math.hypot(dx, dy) * zoom > 0.25) {
          const s = k(0.075)
          hand.at = [hand.at[0] + dx * s, hand.at[1] + dy * s]
          state.moving = true
        } else {
          hand.at = hand.target
        }
        const elsewhere = !!p && away(p, now)
        hand.alpha = ease(hand.alpha, !p?.pointer ? 0 : elsewhere ? 0.38 : 1, k(0.12), state)
        const near = !!mine && !!place && Math.hypot(place.left + place.x + (hand.at[0] - board.frame[0]) * zoom - mine[0],
          place.top + place.y + (hand.at[1] - board.frame[1]) * zoom - mine[1]) < 80
        const working = p?.doing === 'typing' || p?.doing === 'moving'
        const wantTag = p && !elsewhere && (now < hand.tagUntil || near || working) ? 1 : 0
        hand.tag = ease(hand.tag, wantTag, k(wantTag > hand.tag ? 0.07 : 0.22), state)
        if (now < hand.tagUntil) state.moving = true
        if (!p && hand.alpha < 0.01) hands.delete(peer)
      } else if (p?.pointer) {
        const until = arrivals.has(peer) ? arrivals.get(peer) + 3 : now + 2
        hands.set(peer, { at: p.pointer, target: p.pointer, board: p.board, alpha: 0, tag: 0, tagUntil: until, lastMoved: now })
        state.moving = true
      }
    }
    winks = winks.filter((w) => now - w.time < w.drawn.length / 60)
    return state.moving || winks.length > 0
  }

  // MARK: Drawing, as LiveMarks.draw

  const shapes = (() => {
    const beam = new Path2D()
    beam.moveTo(-3, -8); beam.quadraticCurveTo(-1, -8, 0, -6.5); beam.quadraticCurveTo(1, -8, 3, -8)
    beam.moveTo(0, -6.5); beam.lineTo(0, 6.5)
    beam.moveTo(-3, 8); beam.quadraticCurveTo(-1, 8, 0, 6.5); beam.quadraticCurveTo(1, 8, 3, 8)
    const cross = new Path2D()
    cross.moveTo(0, -8); cross.lineTo(0, -2.5); cross.moveTo(0, 2.5); cross.lineTo(0, 8)
    cross.moveTo(-8, 0); cross.lineTo(-2.5, 0); cross.moveTo(2.5, 0); cross.lineTo(8, 0)
    // A nib, its point where the pointer is.
    const nib = new Path2D('M0 0L4.2 9.5L9.5 14.8L14.8 9.5L9.5 4.2Z')
    const slit = new Path2D('M1.2 1.2L6.6 6.6')
    const arrow = new Path2D('M0 0L0 15.5L3.9 11.9L6.6 18L9.1 16.9L6.5 10.9L11.8 10.9Z')
    return { beam, cross, nib, slit, arrow }
  })()

  const noShadow = (ctx) => { ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0 }
  // A canvas's shadows are in its own pixels, whatever it is scaled by.
  const shadow = (ctx, blur, alpha) => { ctx.shadowColor = `rgba(0, 0, 0, ${alpha})`; ctx.shadowBlur = blur * dpr; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = dpr }

  function rounded(ctx, x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  }

  // Rimmed in white, so it reads on anything.
  function filled(ctx, shape, color) {
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2.6
    ctx.stroke(shape)
    noShadow(ctx)
    ctx.fillStyle = color
    ctx.fill(shape)
  }

  function stroked(ctx, shape, color) {
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 4
    ctx.stroke(shape)
    noShadow(ctx)
    ctx.strokeStyle = color
    ctx.lineWidth = 1.8
    ctx.stroke(shape)
  }

  /** Someone's hand: the tool they hold, in their pencil. */
  function drawHand(ctx, x, y, tool, color, alpha) {
    ctx.save()
    ctx.globalAlpha = alpha
    ctx.translate(x, y)
    shadow(ctx, 2.5, 0.28)
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    if (tool === 'text') stroked(ctx, shapes.beam, color)
    else if (tool === 'artboard' || tool === 'rectangle' || tool === 'ellipse' || tool === 'line') stroked(ctx, shapes.cross, color)
    else if (tool === 'pen') {
      filled(ctx, shapes.nib, color)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.stroke(shapes.slit)
    } else filled(ctx, shapes.arrow, color)
    ctx.restore()
  }

  /** The person's name beside their hand, while they start moving, work, or are close to the visitor's own pointer. */
  function drawTag(ctx, name, x, y, color, alpha, lift, bounds) {
    ctx.save()
    ctx.globalAlpha = alpha
    ctx.font = `600 11px ${FONT}`
    const w = ctx.measureText(name).width + 14
    // Below and to the right of the hand, as on the Mac; on the other side where the stage ends.
    const left = x + 11 + w > bounds.maxX - 2 ? x - 11 - w : x + 11
    const top = y + 17 + 19 + 5 > bounds.maxY - 2 ? y - 17 - 19 - lift * 5 : y + 17 + lift * 5
    shadow(ctx, 3, 0.18)
    rounded(ctx, left, top, w, 19, 9.5)
    ctx.fillStyle = color
    ctx.fill()
    noShadow(ctx)
    ctx.fillStyle = 'white'
    ctx.textBaseline = 'middle'
    ctx.fillText(name, left + 7, top + 9.5 + 0.5)
    ctx.restore()
  }

  function drawFlag(ctx, initial, x, y, color, elsewhere) {
    ctx.save()
    ctx.globalAlpha = elsewhere ? 0.5 : 1
    ctx.font = `700 9.5px ${FONT}`
    const size = ctx.measureText(initial).width
    const w = Math.max(15, size + 8)
    rounded(ctx, x - 0.6, y - 15, w, 15, 3.5)
    ctx.fillStyle = color
    ctx.fill()
    ctx.fillStyle = 'white'
    ctx.textBaseline = 'middle'
    ctx.fillText(initial, x - 0.6 + w / 2 - size / 2, y - 7.5 + 0.5)
    ctx.restore()
  }

  /** Where someone shook their pointer, circled by hand in their pencil. */
  function drawWink(ctx, wink, x, y, now) {
    const at = Math.min(Math.max(Math.floor((now - wink.time) * 60), 0), wink.drawn.length - 1)
    const drawn = wink.drawn[at], alpha = wink.alpha[at]
    const count = wink.points.length / 2
    const end = Math.floor((count - 1) * drawn)
    if (!(drawn > 0) || !(alpha > 0) || end < 1) return
    const side = 120
    if (scratch.width !== side * dpr) { scratch.width = side * dpr; scratch.height = side * dpr }
    const s = scratch.getContext('2d')
    // A pale rim under the line keeps it clear on dark work and light alike. Each is drawn whole
    // and then made see-through, so the pieces never darken where they meet.
    for (const rim of [true, false]) {
      s.setTransform(1, 0, 0, 1, 0, 0)
      s.clearRect(0, 0, scratch.width, scratch.height)
      s.setTransform(dpr, 0, 0, dpr, side / 2 * dpr, side / 2 * dpr)
      s.lineCap = 'round'
      s.lineJoin = 'round'
      s.strokeStyle = rim ? 'white' : css(wink.color)
      for (let i = 1; i <= end; i++) {
        s.lineWidth = wink.widths[i] + (rim ? 2.4 : 0)
        s.beginPath()
        s.moveTo(wink.points[2 * i - 2], wink.points[2 * i - 1])
        s.lineTo(wink.points[2 * i], wink.points[2 * i + 1])
        s.stroke()
      }
      ctx.globalAlpha = alpha * (rim ? 0.5 : 0.94)
      ctx.drawImage(scratch, x - side / 2, y - side / 2, side, side)
    }
    ctx.globalAlpha = 1
  }

  /** Whether the artboard shows its film this moment (film.mjs): then nothing is drawn over it. */
  const filmShows = () => stage?.querySelector(':scope > canvas.film-screen')?.dataset.shown === 'true'

  // Where the stage is in the window, and the artboard in it: the canvas of marks covers the
  // stage as it is in sight, and stays while the stage scrolls under it.
  function measure() {
    if (!board || !still?.isConnected || !stage) return null
    const s = stage.getBoundingClientRect(), a = still.getBoundingClientRect()
    const left = s.left + stage.clientLeft, top = s.top + stage.clientTop, w = stage.clientWidth, h = stage.clientHeight
    if (!(w > 0 && h > 0 && a.width > 0)) return null
    return { left, top, w, h, x: a.left - left, y: a.top - top, zoom: a.width / board.frame[2] }
  }

  function paint(now, place) {
    const ctx = marks.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, marks.width, marks.height)
    if (!place || filmShows()) return
    // In the page's own pixels, from the artboard's corner.
    ctx.setTransform(dpr, 0, 0, dpr, place.x * dpr, place.y * dpr)
    const bounds = { minX: -place.x, minY: -place.y, maxX: place.w - place.x, maxY: place.h - place.y }
    const view = (x, y) => [(x - board.frame[0]) * place.zoom, (y - board.frame[1]) * place.zoom]
    const here = (at) => at === board.index || at === -1

    // What each person holds, outlined in their pencil, with their initial on a flag at its corner.
    for (const p of there) {
      if (!p.holds?.length || gone(p, now)) continue
      const elsewhere = away(p, now)
      let box = null
      ctx.strokeStyle = css(p.color, elsewhere ? 0.45 : 0.95)
      ctx.lineWidth = 1.25
      for (const held of p.holds) {
        if (held.board !== board.index) continue
        ctx.beginPath()
        for (let i = 0; i + 1 < held.points.length; i += 2) {
          const [x, y] = view(held.points[i], held.points[i + 1])
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
          box = box ? { minX: Math.min(box.minX, x), minY: Math.min(box.minY, y), maxX: Math.max(box.maxX, x), maxY: Math.max(box.maxY, y) } : { minX: x, minY: y, maxX: x, maxY: y }
        }
        if (held.points.length > 4) ctx.closePath()
        ctx.stroke()
      }
      if (box && box.maxX >= bounds.minX && box.minX <= bounds.maxX && box.maxY >= bounds.minY && box.minY <= bounds.maxY) {
        drawFlag(ctx, p.initial, box.minX, box.minY, css(p.color), elsewhere)
      }
    }

    for (const wink of winks) {
      if (!here(wink.board)) continue
      const [x, y] = view(wink.at[0], wink.at[1])
      drawWink(ctx, wink, x, y, now)
    }

    for (const [peer, hand] of [...hands].sort((a, b) => a[0] - b[0])) {
      const p = person(peer)
      if (!p || hand.alpha <= 0.01 || !here(hand.board)) continue
      const [x, y] = view(hand.at[0], hand.at[1])
      if (x < bounds.minX - 40 || x > bounds.maxX + 40 || y < bounds.minY - 40 || y > bounds.maxY + 40) continue
      drawHand(ctx, x, y, p.tool ?? 'select', css(p.color), hand.alpha)
      if (hand.tag > 0.01) drawTag(ctx, p.name, x, y, css(p.color), hand.alpha * hand.tag, 1 - hand.tag, bounds)
    }
  }

  function turn(ms) {
    turning = 0
    const now = ms / 1000
    const place = measure()
    if (place) {
      // The canvas of marks over the stage, as large as the stage shows.
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      marks.hidden = false
      marks.style.left = `${place.left}px`; marks.style.top = `${place.top}px`
      marks.style.width = `${place.w}px`; marks.style.height = `${place.h}px`
      const w = Math.round(place.w * dpr), h = Math.round(place.h * dpr)
      if (marks.width !== w) marks.width = w
      if (marks.height !== h) marks.height = h
    } else {
      marks.hidden = true
    }
    const moving = step(now, place)
    paint(now, place)
    if (moving) kick()
  }

  // Drawn while anything moves, and not otherwise.
  function kick() {
    if (!turning) turning = requestAnimationFrame(turn)
  }

  const sized = new ResizeObserver(kick)
  const filmed = new MutationObserver(kick)
  window.addEventListener('resize', kick)
  window.addEventListener('pointermove', (e) => { mine = [e.clientX, e.clientY]; if (hands.size) kick() })
  document.documentElement.addEventListener('pointerleave', () => { mine = null; if (hands.size) kick() })
  // Someone gone quiet shows as away, without a word from anyone to say so.
  setInterval(() => { if (there.length) { reflect(); kick() } }, Math.min(5000, QUIET * 200))

  return {
    /** The tokens of who is there, for the page's bar; empty, and so not there, when nobody is. */
    people,
    heard,
    /**
     * The artboard was drawn as the design on `canvas`, which lies in `stage`: `next` is its entry
     * in the list of artboards. What people hold lies where the design has it now.
     */
    show(next, canvas, inStage) {
      board = next ?? null
      still = canvas ?? null
      if (stage !== inStage) {
        sized.disconnect()
        watched = null
        filmed.disconnect()
        stage?.removeEventListener('scroll', kick)
        stage = inStage ?? null
        if (stage) {
          sized.observe(stage)
          filmed.observe(stage, { subtree: true, attributes: true, attributeFilter: ['data-shown'] })
          stage.addEventListener('scroll', kick, { passive: true })
          stage.parentElement.append(marks)
        }
      }
      if (still !== watched) {
        if (watched) sized.unobserve(watched)
        if (still) sized.observe(still)
        watched = still
      }
      refresh()
    },
    /** The list of artboards (`aside`, each entry with its artboard's place in `data-index`), built anew: marked with who is on which. */
    list(element) {
      aside = element
      dots()
    },
    /** Who is there, as drawn: for tests. */
    get state() {
      const now = clock()
      return {
        people: there.map((p) => ({ ...p, away: away(p, now), gone: gone(p, now), where: where(p) })),
        hands: [...hands].map(([peer, h]) => ({ peer, at: h.at, board: h.board, alpha: h.alpha, tag: h.tag })),
        winks: winks.length,
      }
    },
  }
}
