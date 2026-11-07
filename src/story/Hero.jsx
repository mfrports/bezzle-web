/*
 * The hero: the headline as big as the screen allows, the words under it side by side with the
 * download on a wide screen, and Bezzle's window only peeking up from the bottom edge, to rise and
 * meet you as you scroll (the camera's `lift`).
 *
 * The page is a design two people have open together, as in Bezzle once you share one, and they keep
 * working on it while you look. As it first shows, the words rise one by one and the blue pencil
 * underlines the second line; Mia's pencil comes in and selects the headline, one text layer (her
 * outline and her initial, LiveMarks), and Noah's comes to rest at the end of the words under it.
 * Then, round and round while the hero is on screen:
 *
 *   Mia picks the headline's last word and gives it the blue pencil from the swatches;
 *   Noah shakes his pencil on the download and rings it, the app's wink, to show it to her;
 *   meanwhile Mia draws a square in the free space beside the headline, its size counting as she drags;
 *   Noah drags its corner handle until it is round, "Corners" counting;
 *   Mia moves it into place, and then deletes it, while Noah gives the word its ink back.
 *
 * Everything they touch is the page itself, and everything goes back as it was, so it can play again.
 * It stops while the story plays and goes on when you come back up. Where there is no free space
 * (a phone), the square is left out, and the hands come in from the edge to work and leave again.
 *
 * The headline is as large as the design asks, and smaller only where a language's line would not
 * fit across the page ("Nessun abbonamento." is longer than "None of the bills.").
 *
 * Without motion it is the plain headline, words and download, one under the other.
 */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Ctas from "@/site/Ctas";
import { MARK } from "@/site/Marked";
import { Hand } from "@/app/Kit";
import { ui } from "@/app/words";
import { ROSE, OLIVE } from "@/story/scenes/together";
import { pathOf } from "@/story/engine";
import { onStoryRead } from "@/lib/nav";

const AMBER = "#F2B84B";
// the swatches: ink, the blue pencil, then the two people's own colours and a warm one
const SWATCHES = ["var(--ink)", "var(--pencil)", ROSE, OLIVE, AMBER];
const DOT = 20, GAP = 6, PAD = 7;

/** A line of the headline, each word its own box so they can rise one after another. */
function Words({ text, from = 0 }) {
    return text.split(" ").flatMap((w, i) => [i ? " " : null, <span key={i} className="w" style={{ "--i": from + i }}>{w}</span>]);
}

/** Scale the headline down just enough for its widest line to fit the page (never up). */
function fit(h1) {
    h1.style.removeProperty("--fit");
    const room = h1.parentElement.parentElement.clientWidth;
    const widest = Math.max(...[...h1.querySelectorAll(".line, .marked")].map((l) => l.getBoundingClientRect().width));
    if (widest > room) h1.style.setProperty("--fit", ((room / widest) * 0.985).toFixed(4));
}

export default function Hero({ t, code }) {
    const [a, b] = t.h1, [, noah, mia] = t.names, h1 = useRef(null);
    // measured again once the font is in and whenever the screen changes, before the camera measures
    useEffect(() => {
        const el = h1.current, again = () => fit(el);
        again();
        document.fonts?.ready.then(again);
        addEventListener("resize", again);
        return () => removeEventListener("resize", again);
    }, [a, b]);
    return (
        <>
            <div className="hero-in">
                <h1 className="display" ref={h1}>
                    <span className="line"><Words text={a} /><i className="bl" /></span><br />
                    <span className="marked"><Words text={b} from={a.split(" ").length} /><i className="bl" />{MARK}</span>
                </h1>
                <div className="intro-row">
                    <p className="lede">{t.lede}</p>
                    <div className="intro-act">
                        <Ctas className="ctas" />
                        <p className="facts">{t.cta_small}</p>
                    </div>
                </div>
            </div>
            <div className="presence" aria-hidden="true">
                {/* Noah's wink: a pencil loop round what he shows, over a white rim */}
                <svg data-ring className="hero-ring" width="1" height="1"><path data-ring-under pathLength="1" /><path data-ring-line pathLength="1" /></svg>
                {/* the square Mia draws: her outline round it, its size, and the handle for its corners */}
                <div data-shape className="hero-shape">
                    <i data-shape-sel className="hero-shape-sel" />
                    <i data-radius-dot className="hero-dot" />
                    <span data-shape-pill className="hero-pill" data-corners={ui(code)("Corners")} />
                </div>
                <div data-word-sel className="hero-sel" style={{ "--c": OLIVE }} />
                <div data-swatches className="hero-swatches">
                    {SWATCHES.map((c) => <i key={c} style={{ background: c }} />)}
                    <b data-pick />
                </div>
                <div data-hero-sel className="hero-sel" style={{ "--c": OLIVE }}><span>{mia[0]}</span></div>
                <div className="hero-hand" data-who="mia"><div className="idle"><Hand data="hero-mia" color={OLIVE} name={mia} /><kbd data-key className="hero-key">⌫</kbd></div></div>
                <div className="hero-hand" data-who="noah"><div className="idle"><Hand data="hero-noah" color={ROSE} name={noah} /></div></div>
            </div>
        </>
    );
}

/* ------------------------------------------------------------------ where things are */
/* Everything in the intro's own pixels. A line's box is its tight leading, not its letters, so
   selections are drawn from the baselines, taking in the ascenders and the full stop, as the app's
   text box does. A hand and its name always stay on the screen: where there is no room beside the
   headline (a phone), a hand rests off the edge, and only comes in to work. */
const NAME = 70;
function layout(intro) {
    const o = intro.getBoundingClientRect(), one = intro.querySelector(".display .line"), line = intro.querySelector(".display .marked");
    const r1 = one.getBoundingClientRect(), r = line.getBoundingClientRect(), em = parseFloat(getComputedStyle(line).fontSize);
    const base1 = one.querySelector(".bl").getBoundingClientRect().top - o.top, base = line.querySelector(".bl").getBoundingClientRect().top - o.top;
    const left = Math.min(r1.left, r.left) - o.left, right = Math.max(r1.right, r.right) - o.left;
    const sel = { x: left - em * 0.06, y: base1 - em * 0.8, w: right - left + em * 0.12, h: base - base1 + em * 0.88 };
    const line2 = { x: r.left - o.left, y: base - em * 0.8, w: r.width, h: em * 0.88 };
    const page = intro.clientWidth, room = Math.min(innerWidth - 14 - NAME - o.left, page + 40), beside = line2.x + line2.w + em * 0.06 + 14;
    const away = [innerWidth + 30 - o.left, line2.y + line2.h * 1.4];
    // the headline's last word, and the swatches under it (below the pencil line), kept on the page
    const ws = line.querySelectorAll(".w"), wr = ws[ws.length - 1].getBoundingClientRect();
    const word = { x: wr.left - o.left - em * 0.04, y: line2.y, w: wr.width + em * 0.08, h: line2.h };
    const cw = SWATCHES.length * DOT + (SWATCHES.length - 1) * GAP + PAD * 2;
    const card = { x: Math.max(0, Math.min(page - cw, word.x + word.w / 2 - cw / 2)), y: base + Math.max(28, em * 0.3) };
    const dot = (i) => [card.x + PAD + i * (DOT + GAP) + DOT / 2, card.y + PAD + DOT / 2];
    // the last line of the words under the headline, where they end
    const range = document.createRange();
    range.selectNodeContents(intro.querySelector(".lede"));
    const lines = range.getClientRects(), last = lines[lines.length - 1] || r;
    const noah = innerWidth < 600 ? null : [Math.min(last.right - o.left + 10, room), last.top - o.top + last.height * 0.35];
    const b = intro.querySelector(".ctas .btn")?.getBoundingClientRect() || r;
    const btn = { x: b.left - o.left, y: b.top - o.top, w: b.width, h: b.height };
    // free space for the square: beside the first line (left first, so the two of them are spread over
    // the page), or left of the second (Mia rests right of it); its size shows above it beside the
    // first line, where under it the second begins, and under it beside the second
    const gaps = [
        [0, r1.left - o.left, base1, "l", "above", 0],
        [r1.right - o.left, room - 10, base1, "r", "above", 4],
        [0, line2.x, base, "l", "below", 2],
    ].map(([x0, x1, bl, side, pill, bias]) => ({ x0, x1, bl, side, pill, s: Math.min(112, em * 0.62, x1 - x0 - 56) - bias }));
    const g = gaps.sort((p, q) => q.s - p.s)[0];
    const spot = g.s >= 54 ? { x: (g.x0 + g.x1) / 2 - g.s / 2, y: g.bl - em * 0.72, s: Math.round(g.s), side: g.side, pill: g.pill, room: g.x0 } : null;
    return {
        sel, line2, word, card, dot, btn, spot, away,
        mia: beside <= room ? [beside, line2.y + line2.h * 0.58] : null,
        noah,
        click: [line2.x + line2.w * 0.68, line2.y + line2.h * 0.55],
        miaFrom: [Math.min(line2.x + line2.w + 240, room), line2.y + line2.h * 1.9],
        noahFrom: noah ? [noah[0] + 120, noah[1] + 150] : away,
    };
}

/** Live.swift's pencil loop, stretched round a box: it overshoots its start, with its wobble. */
function ring({ x, y, w, h }) {
    const cx = x + w / 2, cy = y + h / 2, rx = w / 2 + 18, ry = h / 2 + 14, pts = [];
    for (let i = 0; i <= 84; i++) {
        const f = i / 84, a = -2.3 + f * (Math.PI * 2 + 0.62);
        const k = 1 + 0.035 * Math.sin(1.7 * a) + 0.02 * Math.sin(3.3 * a) + 0.06 * f * f, t = -0.05;
        const ex = Math.cos(a) * rx * k, ey = Math.sin(a) * ry * k;
        pts.push([cx + ex * Math.cos(t) - ey * Math.sin(t), cy + ex * Math.sin(t) + ey * Math.cos(t)]);
    }
    return pathOf(pts);
}

const at = ([x, y]) => ({ x: x - 2.5, y: y - 2.5 });
/** A hand's glide: across with one ease, down with another, so its path bows a little, as a hand's
    does. Where to is read as the glide starts, so a late font or a resize is already allowed for. */
function glide(tl, el, where, t, dur) {
    tl.to(el, { x: () => where()[0] - 2.5, duration: dur, ease: "power3.inOut" }, t);
    tl.to(el, { y: () => where()[1] - 2.5, duration: dur, ease: "power2.inOut" }, t);
}
/** A click: the hand dips and comes back. */
const tap = (tl, el, t) => tl.to(el, { scale: 0.84, duration: 0.07, ease: "power1.in" }, t).to(el, { scale: 1, duration: 0.14, ease: "power2.out" }, t + 0.07);
const press = (tl, el, t) => tl.to(el, { scale: 0.88, duration: 0.08, ease: "power1.in" }, t);
const release = (tl, el, t) => tl.to(el, { scale: 1, duration: 0.14, ease: "power2.out" }, t);

/* ------------------------------------------------------------------ the two at work */
/**
 * The hero's first moments, once the loader has lifted, and then the two at work, round and round.
 * `play` false puts everyone at rest at once (the page opened further down). Everything follows the
 * headline if it changes size (its font arriving, the window resized). Returns a cleanup.
 */
export function enterHero(intro, { play = true, delay = 0 } = {}) {
    const q = (s) => intro.querySelector(s);
    const sel = q("[data-hero-sel]"), mia = q('[data-who="mia"]'), noah = q('[data-who="noah"]');
    if (!sel) return () => {};
    const word = [...q(".display .marked").querySelectorAll(".w")].pop();
    const els = { word, wordSel: q("[data-word-sel]"), card: q("[data-swatches]"), pick: q("[data-pick]"), ring: q("[data-ring]"),
        ringPaths: [q("[data-ring-under]"), q("[data-ring-line]")], shape: q("[data-shape]"), shapeSel: q("[data-shape-sel]"), dot: q("[data-radius-dot]"),
        pill: q("[data-shape-pill]"), key: q("[data-key]") };
    let L = layout(intro), entering = play, loop = null, entry = null, held = false;
    const box = () => ({ left: L.sel.x, top: L.sel.y, width: L.sel.w, height: L.sel.h });
    const rest = () => {
        gsap.set(mia, { ...at(L.mia || L.away), autoAlpha: 1 });
        gsap.set(noah, { ...at(L.noah || L.away), autoAlpha: 1 });
    };
    const start = () => {
        loop?.kill();
        clear();
        loop = work({ mia, noah, ...els }, () => L, !!L.spot);
        if (held) loop.pause();
    };
    const clear = () => {
        gsap.set([els.wordSel, els.card, els.shape, els.pill, els.dot, els.key, els.shapeSel], { autoAlpha: 0 });
        gsap.set(els.word, { color: "" });
        gsap.set(els.ringPaths, { strokeDashoffset: 1, opacity: 1 });
        gsap.set([mia, noah], { scale: 1 });
    };
    const relayout = () => {
        L = layout(intro);
        gsap.set(sel, box());
        if (entering) return;
        // a new screen: the work starts over from where everyone rests, with or without the square
        rest();
        if (loop) start();
    };
    let pending = 0;
    const later = () => { cancelAnimationFrame(pending); pending = requestAnimationFrame(relayout); };
    const ro = new ResizeObserver(later);
    ro.observe(q(".display")); ro.observe(q(".lede"));
    addEventListener("resize", later);
    // it waits while the story plays, and goes on when you are back at the top
    const unread = onStoryRead((p) => {
        const away = p > 0.004;
        if (away === held) return;
        held = away;
        [entry, loop].forEach((x) => x && (away ? x.pause() : x.resume()));
    });
    const off = () => { ro.disconnect(); removeEventListener("resize", later); cancelAnimationFrame(pending); unread(); };
    gsap.set(sel, { ...box(), autoAlpha: 0 });
    clear();
    if (!play) { rest(); start(); return () => { loop?.kill(); off(); }; }

    gsap.set(mia, { ...at(L.miaFrom), autoAlpha: 0 });
    gsap.set(noah, { ...at(L.noahFrom), autoAlpha: 0 });
    entry = gsap.timeline({ delay, onComplete: () => { entering = false; start(); } });
    // Mia comes onto the page, points at the headline and selects it
    entry.to(mia, { autoAlpha: 1, duration: 0.25, ease: "power1.out" }, 0);
    glide(entry, mia, () => L.click, 0, 0.95);
    tap(entry, mia, 0.98);
    entry.fromTo(sel, { autoAlpha: 0, scale: 1.012 }, { autoAlpha: 1, scale: 1, duration: 0.32, ease: "power2.out" }, 1.0);
    // then lets go of it and rests beside it (or off the edge, where there is no room)
    glide(entry, mia, () => L.mia || L.away, 1.35, 0.8);
    // Noah comes to the end of the words, reading them
    entry.to(noah, { autoAlpha: 1, duration: 0.25, ease: "power1.out" }, 0.9);
    glide(entry, noah, () => L.noah || L.away, 0.9, 1.1);
    // after a while her selection goes, as a selection does once she moves on
    entry.to(sel, { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, 3.9);
    entry.to({}, { duration: 0.6 }, 4.4);
    return () => { entry?.kill(); loop?.kill(); off(); };
}

/** One round of the two at work (see the top of the file), repeating; positions are read as each move begins. */
function work(e, $, shaped) {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.4, repeatRefresh: true });
    const L = () => $();
    const restOf = (who) => () => (who === "mia" ? L().mia : L().noah) || L().away;

    // a word's colour, picked from the swatches by one of them
    const recolor = (hand, color, swatch, colorVar, t0) => {
        glide(tl, hand, () => [L().word.x + L().word.w * 0.42, L().word.y + L().word.h * 0.58], t0, 0.85);
        tap(tl, hand, t0 + 0.88);
        tl.set(e.wordSel, { "--c": color, left: () => L().word.x, top: () => L().word.y, width: () => L().word.w, height: () => L().word.h }, t0 + 0.92);
        tl.fromTo(e.wordSel, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.16, immediateRender: false }, t0 + 0.92);
        tl.set(e.card, { left: () => L().card.x, top: () => L().card.y, "--c": color }, t0 + 1.1);
        tl.set(e.pick, { autoAlpha: 0 }, t0 + 1.1);
        tl.fromTo(e.card, { autoAlpha: 0, scale: 0.92, y: -6 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(2.2)", immediateRender: false }, t0 + 1.1);
        glide(tl, hand, () => L().dot(swatch), t0 + 1.32, 0.5);
        tap(tl, hand, t0 + 1.86);
        tl.set(e.pick, { x: swatch * (DOT + GAP), autoAlpha: 1 }, t0 + 1.9);
        tl.set(e.word, { color: colorVar }, t0 + 1.92);
        tl.to(e.card, { autoAlpha: 0, scale: 0.96, duration: 0.2, ease: "power1.in" }, t0 + 2.3);
        tl.to(e.wordSel, { autoAlpha: 0, duration: 0.25 }, t0 + 2.45);
    };

    // 1. Mia gives the headline's last word the blue pencil
    recolor(e.mia, OLIVE, 1, "var(--pencil)", 0);

    // 2. Noah shows her the download: his pencil shakes on it, and rings it
    const T2 = 2.7;
    glide(tl, e.noah, () => [L().btn.x + L().btn.w * 0.8, L().btn.y + L().btn.h * 0.72], T2, 0.9);
    tl.to(e.noah, { x: "+=7", duration: 0.055, repeat: 7, yoyo: true, ease: "sine.inOut" }, T2 + 0.95);
    tl.set(e.ringPaths, { attr: { d: () => ring(L().btn) }, strokeDashoffset: 1, opacity: 1 }, T2 + 1.1);
    tl.to(e.ringPaths, { strokeDashoffset: 0, duration: 0.52, ease: "power2.inOut" }, T2 + 1.15);
    tl.to(e.ringPaths, { opacity: 0, duration: 0.45, ease: "power1.in" }, T2 + 2.6);

    let tEnd = T2 + 3.1;
    if (shaped) {
        const S = () => L().spot.s, X = () => L().spot.x, Y = () => L().spot.y;
        const pillSize = function () { e.pill.textContent = `${Math.round(gsap.getProperty(e.shape, "width"))} × ${Math.round(gsap.getProperty(e.shape, "height"))}`; };
        // 3. meanwhile Mia draws a square in the free space beside the headline, its size counting
        const T3 = 2.55;
        glide(tl, e.mia, () => [X(), Y()], T3, 0.8);
        press(tl, e.mia, T3 + 0.85);
        tl.set(e.shape, { left: X, top: Y, width: 0, height: 0, borderRadius: 0, x: 0, y: 0, scale: 1, autoAlpha: 1 }, T3 + 0.9);
        tl.set(e.pill, { "--c": OLIVE, autoAlpha: 1, textContent: "0 × 0", attr: { "data-at": () => L().spot.pill } }, T3 + 0.9);
        tl.set(e.shapeSel, { "--c": OLIVE, autoAlpha: 1 }, T3 + 0.9);
        tl.to(e.shape, { width: S, height: S, duration: 0.75, ease: "power2.inOut", onUpdate: pillSize }, T3 + 0.92);
        glide(tl, e.mia, () => [X() + S(), Y() + S()], T3 + 0.92, 0.75);
        release(tl, e.mia, T3 + 1.7);
        tl.to(e.pill, { autoAlpha: 0, duration: 0.25 }, T3 + 2.3);
        // she leaves it to him for a moment, waiting on its far side from the headline
        const out = () => (L().spot.side === "l" ? -1 : 1);
        glide(tl, e.mia, () => [out() < 0 ? X() - 16 : X() + S() + 16, Y() + S() * 0.62], T3 + 2.0, 0.6);

        // 4. Noah drags its corner handle in until it is round, "Corners" counting
        const T4 = T2 + 2.75, D = () => S() * 0.34;
        const dotAt = (k) => () => 11 + k * D();
        glide(tl, e.noah, () => [X() + 11, Y() + 11], T4, 0.85);
        tl.set(e.dot, { left: 11, top: 11 }, T4);
        tl.to(e.dot, { autoAlpha: 1, duration: 0.18 }, T4 + 0.55);
        press(tl, e.noah, T4 + 0.9);
        tl.set(e.pill, { "--c": ROSE, textContent: () => `${e.pill.dataset.corners} 0` }, T4 + 0.9);
        tl.to(e.pill, { autoAlpha: 1, duration: 0.15 }, T4 + 0.9);
        tl.to(e.shape, { borderRadius: () => S() / 2, duration: 0.7, ease: "power2.inOut", onUpdate() { e.pill.textContent = `${e.pill.dataset.corners} ${Math.round(parseFloat(gsap.getProperty(e.shape, "borderTopLeftRadius")) || 0)}`; } }, T4 + 0.95);
        tl.to(e.dot, { left: dotAt(1), top: dotAt(1), duration: 0.7, ease: "power2.inOut" }, T4 + 0.95);
        glide(tl, e.noah, () => [X() + 11 + D(), Y() + 11 + D()], T4 + 0.95, 0.7);
        release(tl, e.noah, T4 + 1.7);
        tl.to([e.pill, e.dot], { autoAlpha: 0, duration: 0.25 }, T4 + 2.2);

        // 5. Mia moves it into place, and then deletes it
        // (outwards, away from the words, and never off the page)
        const T5 = T4 + 1.85, DX = () => (out() < 0 ? -Math.min(S() * 0.3, X() - L().spot.room) : S() * 0.3), DY = () => -S() * 0.06;
        glide(tl, e.mia, () => [X() + S() * 0.55, Y() + S() * 0.55], T5, 0.55);
        press(tl, e.mia, T5 + 0.6);
        tl.to(e.shape, { x: DX, y: DY, duration: 0.65, ease: "power2.inOut" }, T5 + 0.65);
        glide(tl, e.mia, () => [X() + S() * 0.55 + DX(), Y() + S() * 0.55 + DY()], T5 + 0.65, 0.65);
        release(tl, e.mia, T5 + 1.35);
        tl.fromTo(e.key, { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, duration: 0.22, ease: "back.out(2.4)", immediateRender: false }, T5 + 1.75);
        tl.to(e.key, { scale: 0.88, duration: 0.07, yoyo: true, repeat: 1, ease: "power1.inOut" }, T5 + 2.05);
        tl.to(e.shape, { scale: 0.6, autoAlpha: 0, duration: 0.28, ease: "power2.in" }, T5 + 2.1);
        tl.to(e.key, { autoAlpha: 0, duration: 0.25 }, T5 + 2.55);
        glide(tl, e.mia, restOf("mia"), T5 + 2.6, 0.9);
        // (Noah is off to the word as soon as he lets go of the corner, so the two work side by side)
        tEnd = T4 + 1.8;
    } else {
        glide(tl, e.mia, restOf("mia"), 2.55, 0.9);
    }

    // 6. Noah gives the word its ink back
    recolor(e.noah, ROSE, 0, "", tEnd);
    glide(tl, e.noah, restOf("noah"), tEnd + 2.75, 1.0);
    return tl;
}
