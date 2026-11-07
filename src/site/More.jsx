/*
 * And much more: after the story's ten chapters, everything Bezzle does, laid out the way Bezzle lays
 * out a design. Each kind of feature is an artboard on the app's canvas, its name over it, with the
 * canvas's rulers along the top and the left (CanvasView, Rulers in src/app/Kit.jsx). The artboards
 * stand in lanes, each lane a step lower than the one before, so that they come up one after another
 * as the page is read.
 *
 * As it is read, Bezzle's selection goes from artboard to artboard with the app's spring (0.36/0.8,
 * as the header's card), its size in the pencil's pill under it and its extent banded on both rulers;
 * pointing at an artboard selects it, and the rulers follow the pointer, as the app's do. A dock at
 * the foot of the screen counts the features read, names the kind in front of you and leads to any.
 *
 * Something answers every bit of scroll: the headline's pencil draws under it, a band of the features'
 * names drifts past, then each artboard lands on the table and its features rise into place as they
 * come up, the count climbing with them. Only transforms and opacity move, and the places of things
 * are measured when the page is (ScrollTrigger's refresh), never while it scrolls.
 *
 * Without motion (reduced motion, or no script) it is a plain page: the artboards in rows, every
 * feature with its words, and no dock.
 */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useLang } from "@/i18n";
import { MORE, KINDS, BAND } from "@/words-more";
import Marked from "@/site/Marked";
import { Glyph } from "@/app/Kit";
import { spring, settle, clamp01, cubicOut, THEME } from "@/story/engine";
import { glideTo } from "@/lib/smooth";
import "./more.css";

const S = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
/* The app's glyphs, and the one it has no need of: the Mac itself. */
const OWN = { mac: <><rect x="2.8" y="3.4" width="12.4" height="8.8" rx="1.6" {...S} /><path d="M1.6 14.8h14.8" {...S} /></> };
const G = ({ name, size = 18 }) => <svg viewBox="0 0 18 18" width={size} height={size} aria-hidden="true">{OWN[name] || Glyph[name]}</svg>;

const SPRING = spring(0.36, 0.8), TIME = settle(0.36, 0.8);
const XS = Array.from({ length: 16 }, (_, i) => i * 100), YS = Array.from({ length: 80 }, (_, i) => i * 100);
const HANDLES = [[0, 0], [50, 0], [100, 0], [100, 50], [100, 100], [50, 100], [0, 100], [0, 50]];
const num = (n) => String(n).padStart(3, "0");

export default function More() {
    const { code } = useLang(), m = MORE[code] || MORE.en;
    const root = useRef(null), canvas = useRef(null), table = useRef(null), dock = useRef(null);
    const total = m.kinds.reduce((a, k) => a + k[2].length, 0);
    let n = 0;

    useEffect(() => {
        if (!document.documentElement.classList.contains("motion")) return;
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
        const el = root.current, cnv = canvas.current, tbl = table.current, dk = dock.current;
        let alive = true, ctx = null;
        const off = [];
        const build = () => {
            if (!alive) return;
            ctx = gsap.context(() => {
                const boards = [...tbl.querySelectorAll(".more-board")];
                const sheets = boards.map((b) => b.querySelector(".more-sheet"));
                const rows = [...tbl.querySelectorAll(".more-f")];
                const rowBoard = rows.map((r) => boards.indexOf(r.closest(".more-board")));
                const sel = tbl.querySelector(".more-sel"), dim = sel.querySelector(".more-dim"), handles = sel.querySelectorAll("i");
                const bandX = cnv.querySelector(".more-rx .more-ext"), bandY = cnv.querySelector(".more-ry .more-ext");
                const curX = cnv.querySelector(".more-rx .more-cur"), curY = cnv.querySelector(".more-ry .more-cur");
                const count = dk.querySelector("[data-count]"), now = dk.querySelector("[data-now]");
                const buttons = [...dk.querySelectorAll("[data-go]")], thumb = dk.querySelector(".more-thumb");
                const names = m.kinds.map((k) => k[0]);

                /* ------------------------------------------------ the headline, and the band */
                gsap.fromTo(el.querySelectorAll(".more-head .mark path"), { drawSVG: "0%" }, { drawSVG: "100%", ease: "none", stagger: 0.18,
                    scrollTrigger: { trigger: el.querySelector(".more-head h2"), start: "top 84%", end: "top 44%", scrub: 0.5 } });
                const band = el.querySelector(".more-band"), [one, two] = band.querySelectorAll(".more-band-row");
                const travel = () => Math.min(innerWidth * 0.8, 1100);
                const drift = { trigger: band, start: "top bottom", end: "bottom top", scrub: 0.6, invalidateOnRefresh: true };
                gsap.fromTo(one, { x: () => -innerWidth * 0.04 }, { x: () => -innerWidth * 0.04 - travel(), ease: "none", scrollTrigger: drift });
                gsap.fromTo(two, { x: () => -innerWidth * 0.3 - travel() }, { x: () => -innerWidth * 0.3, ease: "none", scrollTrigger: { ...drift } });

                /* ------------------------------------------------ the canvas: artboards in lanes */
                // Each artboard in the next lane, a step lower than the last, so they come up in order.
                let L = null;
                const layout = () => {
                    const W = tbl.clientWidth, narrow = W < 640;
                    const pad = narrow ? { t: 46, x: 16, b: 56 } : { t: 62, x: 48, b: 84 };
                    const inner = W - pad.x * 2;
                    const lanes = inner >= 1000 ? 3 : inner >= 620 ? 2 : 1;
                    const gx = lanes === 3 ? 44 : 36, gy = narrow ? 50 : 64;
                    const lw = Math.floor((inner - gx * (lanes - 1)) / lanes);
                    tbl.style.setProperty("--lane", `${lw}px`);
                    tbl.dataset.laid = "";
                    const hs = boards.map((b) => b.offsetHeight);
                    const step = lanes > 1 ? Math.min(150, (hs.reduce((a, h) => a + h, 0) / hs.length + gy) / lanes) : 0;
                    const low = Array.from({ length: lanes }, (_, k) => pad.t + k * step);
                    const pos = [];
                    boards.forEach((b, i) => {
                        const k = i % lanes;
                        const y = Math.round(Math.max(low[k], i ? pos[i - 1].y + step * 0.6 : 0));
                        const x = pad.x + k * (lw + gx);
                        b.style.left = `${x}px`; b.style.top = `${y}px`;
                        low[k] = y + hs[i] + gy;
                        pos.push({ x, y, w: lw, h: hs[i], sy: y + sheets[i].offsetTop, sh: sheets[i].offsetHeight });
                    });
                    const H = Math.max(...low) - gy + pad.b;
                    tbl.style.height = `${H}px`;
                    L = { pos, H, lanes };
                };
                // where things are on the page, measured once the page has its height
                const measure = () => {
                    if (!L) return;
                    const r = tbl.getBoundingClientRect();
                    L.top = r.top + scrollY; L.left = r.left;
                    L.rows = rows.map((row, i) => L.top + L.pos[rowBoard[i]].y + row.offsetTop);
                };

                /* ------------------------------------------------ the selection, and the dock */
                const at = { x: 0, y: 0, w: 0, h: 0 };
                const draw = () => {
                    sel.style.transform = `translate3d(${at.x.toFixed(1)}px,${at.y.toFixed(1)}px,0)`;
                    sel.style.width = `${at.w.toFixed(1)}px`; sel.style.height = `${at.h.toFixed(1)}px`;
                    bandX.style.transform = `translate3d(${at.x.toFixed(1)}px,0,0)`; bandX.style.width = `${at.w.toFixed(1)}px`;
                    bandY.style.transform = `translate3d(0,${at.y.toFixed(1)}px,0)`; bandY.style.height = `${at.h.toFixed(1)}px`;
                };
                let cur = -1, pointed = -1, docked = -1, aimed = -1, shown = -1;
                const aimDock = () => {
                    const i = docked >= 0 ? docked : pointed >= 0 ? pointed : cur;
                    if (i < 0 || i === shown) return;
                    const dir = i > shown ? 1 : -1, first = shown < 0;
                    shown = i;
                    buttons.forEach((b, j) => (j === i ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current")));
                    const b = buttons[i], to = { x: b.offsetLeft, width: b.offsetWidth };
                    if (first || !thumb.offsetParent) gsap.set(thumb, { ...to, opacity: 1 });
                    else gsap.to(thumb, { ...to, opacity: 1, duration: TIME, ease: SPRING, overwrite: "auto" });
                    now.textContent = names[i];
                    if (!first) gsap.fromTo(now, { yPercent: 80 * dir, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.45, ease: "power3.out", overwrite: true });
                };
                const aim = () => {
                    const i = pointed >= 0 ? pointed : cur;
                    if (i >= 0 && i !== aimed && L?.pos) {
                        const p = L.pos[i], first = aimed < 0;
                        aimed = i;
                        boards.forEach((b, j) => (j === i ? b.setAttribute("data-on", "") : b.removeAttribute("data-on")));
                        dim.textContent = `${Math.round(p.w)} × ${Math.round(p.sh)}`;
                        const to = { x: p.x, y: p.sy, w: p.w, h: p.sh };
                        if (first) {
                            Object.assign(at, to); draw();
                            gsap.to([sel, bandX, bandY], { autoAlpha: 1, duration: 0.25, ease: "power1.out" });
                            gsap.fromTo(handles, { scale: 0 }, { scale: 1, duration: 0.45, stagger: 0.025, ease: THEME.pop });
                        } else gsap.to(at, { ...to, duration: TIME, ease: SPRING, overwrite: "auto", onUpdate: draw });
                    }
                    aimDock();
                };

                /* ------------------------------------------------ following the scroll */
                const landed = boards.map(() => -1), risen = rows.map(() => -1);
                let pointer = null, onDock = null, counted = -1;
                const update = () => {
                    if (!L?.rows) return;
                    const y = scrollY, vh = innerHeight, focus = y + vh * 0.5;
                    // each artboard lands on the table as it comes up, tipped back and settling flat
                    L.pos.forEach((p, i) => {
                        const e = cubicOut(clamp01((y + vh * 1.02 - (L.top + p.y)) / (vh * 0.36)));
                        if (Math.abs(e - landed[i]) < 0.0005) return;
                        landed[i] = e;
                        const s = boards[i].style;
                        if (e >= 1) { s.transform = ""; s.opacity = ""; return; }
                        s.transform = `translate3d(0,${((1 - e) * 72).toFixed(1)}px,0) rotateX(${((1 - e) * 11).toFixed(2)}deg) scale(${(0.965 + 0.035 * e).toFixed(4)})`;
                        s.opacity = Math.min(1, e * 1.7).toFixed(3);
                    });
                    // and its features rise into their places, one after another, as they come up
                    let c = 0;
                    L.rows.forEach((t, i) => {
                        if (y + vh * 0.88 > t) c++;
                        const e = clamp01((y + vh * 0.96 - t) / (vh * 0.2));
                        if (Math.abs(e - risen[i]) < 0.0005) return;
                        risen[i] = e;
                        const s = rows[i].style;
                        if (e >= 1) { s.transform = ""; s.opacity = ""; return; }
                        const k = cubicOut(e);
                        s.transform = `translate3d(0,${((1 - k) * 18).toFixed(1)}px,0)`;
                        s.opacity = k.toFixed(3);
                    });
                    if (c !== counted) { counted = c; count.textContent = c; }
                    // the artboard in front of you: across the middle of the screen, the nearest by its middle
                    let best = -1, d = Infinity;
                    L.pos.forEach((p, i) => {
                        const a = L.top + p.sy, b = a + p.sh;
                        if (focus < a - 80 || focus > b + 40) return;
                        const dd = Math.abs((a + b) / 2 - focus);
                        if (dd < d) { d = dd; best = i; }
                    });
                    if (best >= 0 && best !== cur) { cur = best; aim(); }
                    // the dock, while the canvas is in front of you
                    const on = y + vh * 0.62 > L.top && y + vh * 0.78 < L.top + L.H;
                    if (on !== onDock) { onDock = on; if (on) dk.dataset.on = ""; else delete dk.dataset.on; }
                    if (pointer) follow();
                };
                // the rulers mark where the pointer is, as the app's do
                const follow = () => {
                    curX.style.transform = `translate3d(${(pointer.x - L.left).toFixed(1)}px,0,0)`;
                    curY.style.transform = `translate3d(0,${(pointer.y - (L.top - scrollY)).toFixed(1)}px,0)`;
                };

                ScrollTrigger.addEventListener("refreshInit", layout);
                off.push(() => ScrollTrigger.removeEventListener("refreshInit", layout));
                layout();
                ScrollTrigger.create({ trigger: el, start: "top bottom", end: "bottom top", onUpdate: update, onRefresh: () => { measure(); update(); } });

                /* ------------------------------------------------ pointing, and the dock's buttons */
                const mouse = (f) => (e) => { if (e.pointerType === "mouse") f(e); };
                const listen = (node, type, f) => { node.addEventListener(type, f); off.push(() => node.removeEventListener(type, f)); };
                boards.forEach((b, i) => {
                    listen(b, "pointerenter", mouse(() => { pointed = i; aim(); }));
                    listen(b, "pointerleave", mouse(() => { if (pointed === i) { pointed = -1; aim(); } }));
                });
                listen(cnv, "pointermove", mouse((e) => { if (!L?.rows) return; pointer = { x: e.clientX, y: e.clientY }; follow(); curX.style.opacity = curY.style.opacity = "1"; }));
                listen(cnv, "pointerleave", () => { pointer = null; curX.style.opacity = curY.style.opacity = "0"; });
                buttons.forEach((b, i) => {
                    listen(b, "click", () => { if (L?.pos) glideTo(L.top + L.pos[i].sy - Math.min(150, innerHeight * 0.16)); });
                    listen(b, "pointerenter", mouse(() => { docked = i; aimDock(); }));
                    listen(b, "pointerleave", mouse(() => { if (docked === i) { docked = -1; aimDock(); } }));
                });
                dk.dataset.ready = "";
                ScrollTrigger.refresh();
            }, el);
        };
        (document.fonts?.ready || Promise.resolve()).then(() => requestAnimationFrame(build));
        return () => {
            alive = false;
            ctx?.revert();
            off.forEach((f) => f());
            // back to the plain page, for the next language or the next mount
            const tbl_ = table.current;
            if (tbl_) {
                delete tbl_.dataset.laid; tbl_.style.height = ""; tbl_.style.removeProperty("--lane");
                tbl_.querySelectorAll(".more-board, .more-f").forEach((x) => { x.style.left = x.style.top = x.style.transform = x.style.opacity = ""; x.removeAttribute("data-on"); });
            }
            if (dock.current) { delete dock.current.dataset.on; delete dock.current.dataset.ready; }
        };
    }, [code]);

    return (
        <section ref={root} id="more" className="more-all" aria-labelledby="more-h">
            <div className="page more-head">
                <span className="chip" data-reveal="soft">{m.chip}</span>
                <h2 id="more-h" className="title" data-reveal=""><Marked first={m.h[0]} second={m.h[1]} /></h2>
                <p className="lede" data-reveal="soft">{m.lede.replace("{n}", total)}</p>
            </div>

            {/* the names drifting past, two rows, one each way */}
            <div className="more-band" aria-hidden="true">
                {BAND.map((row, r) => (
                    <div key={r} className="more-band-row">
                        {row.map(([k, f]) => <span key={`${k}-${f}`}><G name={KINDS[k].glyph} />{m.kinds[k][2][f][0]}</span>)}
                    </div>
                ))}
            </div>

            <div ref={canvas} className="more-canvas">
                <div className="more-rx" aria-hidden="true">{XS.map((x) => <b key={x} style={{ left: x + 3 }}>{x}</b>)}<i className="more-ext" /><i className="more-cur" /></div>
                <div className="more-ry" aria-hidden="true">{YS.map((y) => <b key={y} style={{ top: y + 3 }}>{y}</b>)}<i className="more-ext" /><i className="more-cur" /></div>
                <i className="more-corner" aria-hidden="true" />
                <div ref={table} className="more-table">
                    {m.kinds.map(([name, title, features], i) => (
                        <section key={KINDS[i].k} id={`more-${KINDS[i].k}`} className="more-board" aria-labelledby={`more-${KINDS[i].k}-h`}>
                            <div className="more-label"><G name={KINDS[i].glyph} size={12} /><span>{name}</span><span className="more-label-n">{features.length}</span></div>
                            <div className="more-sheet">
                                <div className="more-sheet-head">
                                    <span className="more-glyph"><G name={KINDS[i].glyph} /></span>
                                    <h3 id={`more-${KINDS[i].k}-h`}>{title}</h3>
                                </div>
                                <ul>
                                    {features.map(([f, d]) => (
                                        <li key={f} className="more-f">
                                            <span className="more-n" aria-hidden="true">{num(++n)}</span>
                                            <span><b>{f}</b><span>{d}</span></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                    <div className="more-sel" aria-hidden="true">{HANDLES.map(([x, y]) => <i key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }} />)}<span className="more-dim" /></div>
                </div>
            </div>

            {/* the dock: how many you have read, the kind in front of you, and a way to every kind */}
            <nav ref={dock} className="more-dock" aria-label={m.nav}>
                <span className="more-count" aria-hidden="true"><b data-count>{total}</b><span>/{total}</span></span>
                <span className="more-now" aria-hidden="true"><span data-now>{m.kinds[0][0]}</span></span>
                <span className="more-well">
                    <i className="more-thumb" aria-hidden="true" />
                    {m.kinds.map(([name], i) => <button key={KINDS[i].k} type="button" data-go={i} aria-label={name} title={name}><G name={KINDS[i].glyph} size={17} /></button>)}
                </span>
            </nav>
        </section>
    );
}
