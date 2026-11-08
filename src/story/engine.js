import { flatReplay } from "@/lib/trail";

/*
 * What the story's scenes share: the app's motion as easing curves, and the camera.
 *
 * The story is scrubbed by the scroll, so every motion is a curve over its stretch of scroll, not a
 * clock. The app's springs (SwiftUI's response and damping, or stiffness and damping) become such
 * curves: their real step response, drawn out over the time they take to settle, so a card still
 * overshoots and settles the way it does in Bezzle, forwards and backwards.
 */

/** SwiftUI's .spring(response:dampingFraction:) as an ease over its settling time. */
export function spring(response = 0.34, damping = 0.86) {
    const w0 = (2 * Math.PI) / response, z = damping;
    const T = Math.min(7 / (z * w0), 3);
    const f = z < 1
        ? (t) => { const wd = w0 * Math.sqrt(1 - z * z); return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t)); }
        : (t) => 1 - (1 + w0 * t) * Math.exp(-w0 * t);
    const end = f(T);
    return (p) => (p <= 0 ? 0 : p >= 1 ? 1 : f(p * T) / end);
}
/** A spring given as stiffness and damping (unit mass), as the canvas tools write theirs. */
export const stiff = (k, c) => spring((2 * Math.PI) / Math.sqrt(k), c / (2 * Math.sqrt(k)));

/** How long such a spring takes to settle, for a tween on the clock that should move like it. */
export const settle = (response = 0.34, damping = 0.86) => Math.min(7 / (damping * ((2 * Math.PI) / response)), 3);

export const THEME = {
    spring: spring(0.34, 0.86), quick: spring(0.18, 0.9), open: spring(0.24, 0.86), pop: spring(0.32, 0.58),
    unfold: spring(0.3, 1), menu: spring(0.26, 0.74), mode: spring(0.36, 0.8), play: spring(0.4, 0.74),
};
export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const cubicOut = (t) => 1 - (1 - t) ** 3;
/** The player's push: critically damped, x = 1 − (1 + 15t)e^(−15t) over 0.5 s. */
export const push = (p) => { const t = p * 0.5; return Math.min(1, (1 - (1 + 15 * t) * Math.exp(-15 * t)) / (1 - (1 + 7.5) * Math.exp(-7.5))); };

/* ------------------------------------------------------------------ the camera */
/** A rectangle in the window's points for the camera to frame, and how. */
export const shot = (x, y, w, h, more = {}) => ({ cx: x + w / 2, cy: y + h / 2, lw: Math.log(w), lh: Math.log(h), f: 0.92, rx: 5, ry: -8, z: 0, ...more });

/**
 * The camera frames one rectangle at a time, fitted into the space beside the words (under the
 * headline while the hero shows), so the composition holds at any screen size. `lift` raises the
 * hero's window into the middle of the screen as the headline leaves, so it takes the stage rather
 * than waiting under an empty space; `side` blends the hero's space into the chapters' one; `drift`
 * keeps it moving a little through every chapter, so something answers every bit of scroll;
 * `breath` steps it back between chapters.
 */
export function makeCamera({ rig, lens, scene, list, intro, words, air = 0.1, rest = 0.7 }) {
    // In the admin's replay on a phone (lib/trail.js) the window is not tilted: a tilt would keep it, and all over it,
    // in layers of their own as large as the visitor's window at the phone's 3×. Its depth stays as the size it seems,
    // the lens's perspective over how far the window is pushed back.
    const depth = flatReplay ? parseFloat(getComputedStyle(lens).perspective) || 0 : 0;
    if (flatReplay) lens.style.perspective = "none";
    const cam = { ...shot(0, 0, 1280, 800), f: 1, rx: 22, ry: 0, z: 0, side: 0, lift: 0, drift: 0, drift2: 1, breath: 0 };
    const lean = { x: 0, y: 0 };
    let HB = { x: 0, y: 0, w: 1, h: 1, ly: 0 }, SB = HB, FX = 0;
    const mask = [null, null];
    function measure() {
        const vw = innerWidth, vh = innerHeight, narrow = vw < 900;
        const ib = intro.offsetTop + intro.offsetHeight;
        // the hero: the window across the screen under the words, its top close under them
        const hw = narrow ? vw * 1.25 : Math.min(vw * 0.86, 1480);
        // at rest the window only peeks up from the bottom edge, with air between it and the words
        const hh = hw * 0.625, y = narrow ? ib + Math.max(26, vh * 0.035) : Math.max(ib + vh * air, vh * rest);
        // risen: in the middle of the screen under the header, or as high as it will go
        HB = { x: (vw - hw) / 2, y, w: hw, h: hh, ly: Math.min(y, Math.max(76, 64 + (vh - 64 - hh) / 2)) };
        const col = list.getBoundingClientRect();
        if (narrow) {
            const top = col.top + Math.max(...words.map((w) => w.offsetHeight)) + 14;
            SB = { x: 0, y: top, w: vw, h: Math.max(160, vh - top - 40) }; FX = 0;
        } else {
            const left = col.right + 20;
            SB = { x: left, y: 72, w: vw - left, h: vh - 72 }; FX = col.right;
        }
    }
    function apply() {
        const s = cam.side, hy = lerp(HB.y, HB.ly, cam.lift);
        const B = { x: lerp(HB.x, SB.x, s), y: lerp(hy, SB.y, s), w: lerp(HB.w, SB.w, s), h: lerp(HB.h, SB.h, s) };
        const w = Math.exp(cam.lw), h = Math.exp(cam.lh);
        const k = cam.f * (1 + 0.025 * cam.drift) * (1 - 0.12 * cam.breath) * Math.min(B.w / w, B.h / h);
        const ox = B.x + B.w / 2, oy = B.y + B.h / 2;
        const rx = cam.rx - lean.y * 3 - 1.3 * cam.drift2, ry = cam.ry + lean.x * 4.5 + 2.4 * cam.drift;
        if (flatReplay) {
            const seem = depth ? depth / Math.max(depth * 0.1, depth + k * cam.z) : 1;
            rig.style.transform = `translate(${ox.toFixed(1)}px,${oy.toFixed(1)}px) scale(${(k * seem).toFixed(4)}) translate(${(-cam.cx).toFixed(1)}px,${(-cam.cy).toFixed(1)}px)`;
        } else rig.style.transform = `translate3d(${ox.toFixed(1)}px,${oy.toFixed(1)}px,0) scale3d(${k.toFixed(4)},${k.toFixed(4)},${k.toFixed(4)}) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translate3d(${(-cam.cx).toFixed(1)}px,${(-cam.cy).toFixed(1)}px,${(-cam.z).toFixed(1)}px)`;
        lens.style.perspectiveOrigin = `${ox.toFixed(0)}px ${oy.toFixed(0)}px`;
        // beside the words the scene fades in from the column's edge, so nothing meets them with a line
        // (set on the scene alone, and only when it changes: a variable would restyle all inside it)
        const a = FX ? Math.round((FX - 40) * s - 2 * (1 - s)) : -2, b = FX ? Math.round((FX + 110) * s - (1 - s)) : -1;
        // (not in the replay on a phone: a mask would keep the scene, twice over, in a layer of its own)
        if (!flatReplay && (a !== mask[0] || b !== mask[1])) {
            mask[0] = a; mask[1] = b;
            scene.style.maskImage = scene.style.webkitMaskImage = `linear-gradient(to right, transparent ${a}px, #000 ${b}px)`;
        }
    }
    return { cam, lean, measure, apply };
}

/* ------------------------------------------------------------------ drawing helpers */
/** A cubic thread from a to b, leaving a horizontally and entering b square to its edge. */
export function thread([ax, ay], [bx, by], sag = 0) {
    const len = Math.max(34, Math.hypot(bx - ax, by - ay) * 0.42);
    return `M${ax} ${ay} C${ax + len} ${ay + sag} ${bx - len} ${by + sag} ${bx} ${by}`;
}
/** Live.swift's pencil loop: an ellipse that overshoots its start, with its wobble, as points. */
export function loop(cx, cy, r = 30, start = -2.1, tilt = -0.2, sweep = Math.PI * 2 + 0.7) {
    const pts = [];
    for (let i = 0; i <= 72; i++) {
        const f = i / 72, a = start + f * sweep;
        const w = 1 + 0.045 * Math.sin(1.7 * a) + 0.025 * Math.sin(3.3 * a) + 0.09 * f * f;
        const ex = Math.cos(a) * 1.16 * r * w, ey = Math.sin(a) * 0.84 * r * w;
        pts.push([cx + ex * Math.cos(tilt) - ey * Math.sin(tilt), cy + ex * Math.sin(tilt) + ey * Math.cos(tilt)]);
    }
    return pts;
}
export const pathOf = (pts) => "M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L");

/* ------------------------------------------------------------------ pointing */
/** Where an element sits in the window's points (its offsets up to the window), at (ax, ay) of its box. */
export function spot(el, ax = 0.5, ay = 0.5) {
    let x = 0, y = 0, n = el;
    const w = el.offsetWidth, h = el.offsetHeight;
    while (n && !(n.dataset && "win" in n.dataset)) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return [x + w * ax, y + h * ay];
}
/** The pointer's tip at (x, y): the arrow's point is 2.5, 2.2 into its box. */
export const tip = ([x, y]) => ({ x: x - 2.5, y: y - 2.2 });
/** A hand's glide: across with one ease, down with another, so the path bows a little, as a hand's does. */
export function glide(tl, p, [x, y], at, dur) {
    tl.to(p, { x: x - 2.5, duration: dur, ease: "power3.inOut" }, at);
    tl.to(p, { y: y - 2.2, duration: dur, ease: "power2.inOut" }, at);
    return tl;
}
/** A click: the pointer dips and comes back. */
export const click = (tl, p, at) => tl.to(p, { scale: 0.82, duration: 0.014, ease: "power1.in" }, at).to(p, { scale: 1, duration: 0.03, ease: "power2.out" }, at + 0.014);
/** A thread from a pin to a card (NotePlacement 479–484): it leaves the pin level and enters the card square. */
export function noteThread([ax, ay], [bx, by], sag = 0) {
    const c = Math.max(Math.abs(bx - ax) * 0.5, 18), s = Math.sign(bx - ax) || 1;
    return `M${ax} ${ay} C${ax + c * s} ${ay + sag} ${bx - c * s} ${by + sag} ${bx} ${by}`;
}
