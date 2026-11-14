// An artboard's film in the page: a quiet bar under the artboard to play it, stop it and drag
// through it, and the canvas its frames are drawn on, which lies exactly over the design's.
//
//   const film = createFilm({ CanvasKit, bz, words })
//   film.show(board, canvas, stage)     // after the artboard was drawn as the design, on `canvas` in `stage`
//
// An artboard opens as the design, as it always has. Playing shows its film from the start, round
// and round with a breath at the end, or once, as the film says (Animate's Play Once). Each frame
// is what the core says it is made from (bezzle.mjs' filmFrame): pictures made once, each drawn
// through a 3 by 3 map, on the graphics card where the browser has WebGL, and on the processor
// where it has not. Showing the artboard again, by its name in the list, shows the design
// (the page calls `film.rest()` before it draws it).
//
// `createScreen` alone is the canvas without the bar, for tools that only want frames
// (tools/film-compare.mjs).

const STYLE = `
.film-stage { align-content: center; row-gap: 14px; }
.film-stage > canvas { grid-row: 1; grid-column: 1; }
.film-stage > canvas.film-screen { box-shadow: none; background: none; }
.film-stage > canvas.film-screen[data-shown="false"] { visibility: hidden; }
.film-bar { grid-row: 2; grid-column: 1; display: flex; align-items: center; gap: 12px; width: min(100%, 340px); color: var(--soft, #8a8178); }
.film-bar button { flex: none; position: relative; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 50%; cursor: pointer;
  background: var(--line, #e2dcd3); color: var(--ink, #2b2620); transition: background .16s, color .16s; }
.film-bar button[aria-pressed="true"] { background: var(--pencil, var(--accent, #2f5bd3)); color: white; }
.film-bar button:focus-visible, .film-bar input:focus-visible { outline: 2px solid var(--pencil, var(--accent, #2f5bd3)); outline-offset: 2px; }
.film-bar svg { position: absolute; inset: 0; margin: auto; width: 10px; height: 10px; fill: currentColor; transition: opacity .16s; }
.film-bar button[aria-pressed="true"] .film-play, .film-bar button[aria-pressed="false"] .film-pause { opacity: 0; }
.film-bar input { flex: 1; min-width: 0; height: 18px; margin: 0; background: transparent; cursor: pointer; -webkit-appearance: none; appearance: none; }
.film-bar input::-webkit-slider-runnable-track { height: 3px; border-radius: 2px;
  background: linear-gradient(to right, var(--pencil, var(--accent, #2f5bd3)) var(--at, 0%), var(--line, #e2dcd3) var(--at, 0%)); }
.film-bar input::-moz-range-track { height: 3px; border-radius: 2px; background: var(--line, #e2dcd3); }
.film-bar input::-moz-range-progress { height: 3px; border-radius: 2px; background: var(--pencil, var(--accent, #2f5bd3)); }
.film-bar input::-webkit-slider-thumb { -webkit-appearance: none; width: 11px; height: 11px; margin-top: -4px; border-radius: 50%; border: 0;
  background: var(--pencil, var(--accent, #2f5bd3)); }
.film-bar input::-moz-range-thumb { width: 11px; height: 11px; border-radius: 50%; border: 0; background: var(--pencil, var(--accent, #2f5bd3)); }
.film-bar output { flex: none; width: 52px; text-align: right; font-size: 12.5px; font-variant-numeric: tabular-nums; white-space: nowrap; }
`

/** The breath a film takes at its end before it begins again, in seconds, as on the Mac (FilmDesk.breath). */
export const BREATH = 0.7

/**
 * A canvas that shows frames of the film `bz` has open: on the graphics card where the browser
 * gives the canvas WebGL, else each frame made on the processor and put on it.
 */
export function createScreen({ CanvasKit: CK, bz, software = false }) {
  let canvas = document.createElement('canvas')
  canvas.className = 'film-screen'
  let gpu = null // { handle, context, surface }
  let plain = software
  let asked = false, lost = null

  // The graphics card's context for this canvas, made when first asked for; null without one.
  function card() {
    if (plain) return null
    if (!gpu) {
      asked = true
      try {
        const handle = CK.GetWebGLContext(canvas, { antialias: 0, alpha: 0, depth: 0, stencil: 8, premultipliedAlpha: 1, preserveDrawingBuffer: 0 })
        const context = handle ? CK.MakeWebGLContext(handle) : null
        if (context) {
          // Room for a film's pictures: each is kept on the card as long as the film holds it.
          context.setResourceCacheLimitBytes(384 * 1024 * 1024)
          gpu = { handle, context, surface: null }
          canvas.addEventListener('webglcontextlost', (lost = () => fallBack()))
        }
      } catch { gpu = null }
      if (!gpu) { fallBack(); return null }
    }
    return gpu.context
  }

  function onGraphicsCard(width, height) {
    if (!card()) return null
    if (!gpu.surface || gpu.surface.width() !== width || gpu.surface.height() !== height) {
      gpu.surface?.delete()
      gpu.surface = CK.MakeOnScreenGLSurface(gpu.context, width, height, CK.ColorSpace.SRGB)
      if (!gpu.surface) { fallBack(); return null }
    }
    return gpu.surface
  }

  // Without the graphics card from here on: a canvas that was asked for WebGL cannot be drawn
  // on plainly, so another takes its place.
  function fallBack() {
    plain = true
    try { gpu?.surface?.delete(); gpu?.context?.delete() } catch {}
    gpu = null
    if (!asked) return
    asked = false
    const next = document.createElement('canvas')
    next.className = canvas.className
    next.width = canvas.width; next.height = canvas.height
    next.style.cssText = canvas.style.cssText
    for (const [k, v] of Object.entries(canvas.dataset)) next.dataset[k] = v
    if (lost) canvas.removeEventListener('webglcontextlost', lost)
    canvas.replaceWith(next)
    canvas = next
  }

  return {
    get canvas() { return canvas },
    /** Whether frames are drawn on the graphics card. */
    get onGraphicsCard() { return !plain && !!gpu },
    /** Makes the canvas `width` by `height` pixels. */
    size(width, height) {
      if (canvas.width !== width) canvas.width = width
      if (canvas.height !== height) canvas.height = height
    },
    /** Makes one more of the open film's pictures ahead of its playing; answers how many are left. */
    warm() { return bz.filmWarm(canvas.width, canvas.height, card()) },
    /** Shows the open film's frame at `t`; answers what it took: { coreMs, pictureMs, drawMs, drawn }. */
    show(t, backdrop, playing = false) {
      const width = canvas.width, height = canvas.height
      const t0 = performance.now()
      const frame = bz.filmFrame(t, width, height, playing)
      const t1 = performance.now()
      const surface = onGraphicsCard(width, height)
      let pictureMs = 0
      if (surface) {
        pictureMs = bz.filmDraw(surface.getCanvas(), frame, backdrop, gpu.context).pictureMs
        surface.flush()
      } else {
        const made = CK.MakeSurface(width, height)
        pictureMs = bz.filmDraw(made.getCanvas(), frame, backdrop).pictureMs
        const info = { width, height, colorType: CK.ColorType.RGBA_8888, alphaType: CK.AlphaType.Unpremul, colorSpace: CK.ColorSpace.SRGB }
        const px = made.getCanvas().readPixels(0, 0, info)
        // `dispose`, not `delete`, gives a processor's surface its pixels back.
        made.dispose()
        if (px) canvas.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(px.buffer, px.byteOffset, px.length), width, height), 0, 0)
      }
      // What the core took to say what the frame is made from, what making its new pictures took, and placing them all.
      return { coreMs: t1 - t0, pictureMs, drawMs: performance.now() - t1 - pictureMs, drawn: frame.drawn, pieces: frame.pieces.length }
    },
    close() {
      try { gpu?.surface?.delete(); gpu?.context?.delete() } catch {}
      gpu = null
    },
  }
}

/**
 * The film of the artboard the page shows. `words` are the page's own: { play, stop, film }, and
 * `lang` its language, for the clock's numbers. `missing` is told when a frame asked for pictures
 * the page does not have yet.
 */
export function createFilm({ CanvasKit: CK, bz, words = {}, lang = 'en', missing = null, software = false }) {
  if (!document.getElementById('film-style')) {
    const style = document.createElement('style')
    style.id = 'film-style'
    style.textContent = STYLE
    document.head.append(style)
  }
  const say = { play: 'Play the film', stop: 'Stop the film', film: 'Film', ...words }
  const screen = createScreen({ CanvasKit: CK, bz, software })

  const bar = document.createElement('div')
  bar.className = 'film-bar'
  const button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '<svg class="film-play" viewBox="0 0 10 10" aria-hidden="true"><path d="M2.2 0.8 9 5 2.2 9.2z"/></svg>'
    + '<svg class="film-pause" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.6 1h2.6v8H1.6zM5.8 1h2.6v8H5.8z"/></svg>'
  const track = document.createElement('input')
  track.type = 'range'; track.min = '0'; track.step = 'any'
  track.setAttribute('aria-label', say.film)
  const clock = document.createElement('output')
  bar.append(button, track, clock)

  // What is shown: the artboard, its film when it has one, and where in it the page is.
  let board = null, film = null, still = null, stage = null
  let t = 0, playing = false, showing = false
  let began = 0, from = 0, turn = 0

  const seconds = (s) => `${s.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} s`

  function reflect() {
    button.setAttribute('aria-pressed', String(playing))
    button.title = playing ? say.stop : say.play
    button.setAttribute('aria-label', button.title)
    const length = film?.length ?? 0
    track.max = String(length)
    if (document.activeElement !== track || playing) track.value = String(showing ? t : 0)
    track.style.setProperty('--at', `${length > 0 ? 100 * (showing ? t : 0) / length : 0}%`)
    // The design shows: how long its film runs. The film shows: where in it.
    clock.textContent = seconds(showing ? t : length)
    screen.canvas.dataset.shown = String(showing)
  }

  // The film's frame at its moment on the screen, over the design.
  function frame() {
    if (!film || !still) return
    screen.size(still.width, still.height)
    screen.canvas.style.width = still.style.width
    try {
      screen.show(t, film.backdrop, playing)
    } catch {
      // The core let the film go, as it does when its fonts change: opened again.
      const again = bz.film(board.index)
      if (!again) return leave()
      film = again
      screen.show(t, film.backdrop, playing)
    }
    showing = true
    if (missing && bz.missingPictures().length) missing()
  }

  function step(now) {
    if (!playing || !film) return
    const length = film.length
    const at = from + Math.max(now - began, 0) / 1000
    if (film.once) {
      if (at >= length) {
        t = length
        playing = false
        // At rest, as sharp as it is seen.
        frame()
        reflect()
        return
      }
      t = at
    } else {
      // Round and round, with a breath at the end before it begins again.
      t = Math.min(at % (length + BREATH), length)
    }
    frame()
    reflect()
    turn = requestAnimationFrame(step)
  }

  // The film's pictures made ahead, one at a time while the page has nothing else to do, so that
  // playing does not wait for a piece that first shows in the middle of it.
  let warming = 0, cold = false

  function warm() {
    clearTimeout(warming)
    if (!cold || !film || !still) return
    screen.size(still.width, still.height)
    cold = screen.warm() > 0
    if (cold) warming = setTimeout(warm, 20)
  }

  function play() {
    if (!film || playing) return
    // What is left of them, at once: then nothing is made while it plays but what moves.
    clearTimeout(warming)
    while (cold) cold = screen.warm() > 0
    from = t >= film.length - 0.001 || !showing ? 0 : t
    t = from
    began = performance.now()
    playing = true
    reflect()
    cancelAnimationFrame(turn)
    turn = requestAnimationFrame(step)
  }

  function stop() {
    if (!playing) return
    playing = false
    cancelAnimationFrame(turn)
    frame()
    reflect()
  }

  function seek(to) {
    if (!film) return
    playing = false
    cancelAnimationFrame(turn)
    t = Math.min(Math.max(to, 0), film.length)
    frame()
    reflect()
  }

  // Back to the artboard without a film to show.
  function leave() {
    playing = false
    showing = false
    cancelAnimationFrame(turn)
    clearTimeout(warming)
    cold = false
    film = null
    bar.remove()
    screen.canvas.remove()
    stage?.classList.remove('film-stage')
  }

  button.onclick = () => (playing ? stop() : play())
  track.oninput = () => seek(Number(track.value))
  document.addEventListener('keydown', (e) => {
    if (e.key !== ' ' || !film || !bar.isConnected || e.metaKey || e.ctrlKey || e.altKey) return
    // A button in hand takes the space bar itself.
    if (e.target instanceof HTMLElement && e.target.closest('button, input, textarea, select, [contenteditable]')) return
    e.preventDefault()
    playing ? stop() : play()
  })

  return {
    /**
     * The artboard was drawn as the design on `canvas`, which lies in `stage`: `next` is its entry
     * in the list of artboards, with its film when it has one. The same artboard drawn again, as
     * when the design changed or a picture came, keeps its film where it was; another shows the design.
     */
    show(next, canvas, inStage) {
      const same = !!board && !!next && board.index === next.index && !!film && !!next.film
      const was = { t, playing, showing }
      board = next ?? null
      still = canvas
      stage = inStage
      if (!next?.film) { leave(); bz.filmClose(); return }
      film = bz.film(next.index)
      if (!film) { leave(); return }
      stage.classList.add('film-stage')
      if (bar.parentElement !== stage) stage.append(screen.canvas, bar)
      if (screen.canvas.parentElement !== stage) stage.insertBefore(screen.canvas, bar)
      screen.size(canvas.width, canvas.height)
      screen.canvas.style.width = canvas.style.width
      cancelAnimationFrame(turn)
      if (same && was.showing) {
        t = Math.min(was.t, film.length)
        playing = was.playing
        showing = true
        if (playing) { from = t; began = performance.now(); turn = requestAnimationFrame(step) } else frame()
      } else {
        t = 0
        playing = false
        showing = false
      }
      reflect()
      cold = true
      clearTimeout(warming)
      warming = setTimeout(warm, 60)
    },
    /** Puts the film away: the artboard drawn next shows the design, as when its name is pressed in the list. */
    rest() {
      playing = false
      showing = false
      cancelAnimationFrame(turn)
      reflect()
    },
    play, stop, seek,
    get playing() { return playing },
    get time() { return t },
    get screen() { return screen },
  }
}
