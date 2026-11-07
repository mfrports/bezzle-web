/*
 * Small things to try in the docs' pages (::: demo <name>), each doing what the app does with the
 * app's own numbers: the Corners card's round and squircle corners, drawn with Bezzle's squircle
 * (Model/Squircle.swift, after Figma's "Desperately seeking squircles"), and the Object menu's ways
 * of combining two shapes, with the front one to drag about. Without the script they stand as
 * they were prerendered.
 */
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n";
import { D } from "@/docs/words";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
const rad = (deg) => (deg * Math.PI) / 180;

/** Bezzle's squircle: a rectangle whose corners run smoothly into its sides, as an SVG path. */
export function squircle(x, y, w, h, radius, smoothing) {
    const budget = Math.min(w, h) / 2, s = Math.min(Math.max(smoothing, 0), 1);
    const turns = [
        [[x + w, y], [1, 0], [0, 1]], [[x + w, y + h], [0, 1], [-1, 0]],
        [[x, y + h], [-1, 0], [0, -1]], [[x, y], [0, -1], [1, 0]],
    ];
    const r = Math.min(Math.max(radius, 0), budget);
    let reach = (1 + s) * r;
    const arc = 90 * (1 - s), chord = Math.sin(rad(arc / 2)) * r * Math.SQRT2, alpha = (90 - arc) / 2;
    const p34 = r * Math.tan(rad(alpha / 2)), beta = 45 * s, c = p34 * Math.cos(rad(beta)), d = c * Math.tan(rad(beta));
    let b = (reach - chord - c - d) / 3, a = 2 * b;
    if (reach > budget) { const room = budget - d - chord - c; b = Math.min(b, room - room / 6); a = room - b; reach = budget; }
    const f = (n) => +n.toFixed(2);
    let out = "";
    turns.forEach(([o, al, th], i) => {
        const at = (u, v, p) => [p[0] + al[0] * u + th[0] * v, p[1] + al[1] * u + th[1] * v];
        const start = at(-reach, 0, o);
        out += `${i ? "L" : "M"}${f(start[0])} ${f(start[1])}`;
        if (r <= 0) { out += `L${f(o[0])} ${f(o[1])}`; return; }
        const on = at(a + b + c, d, start), c1 = at(a, 0, start), c2 = at(a + b, 0, start);
        out += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(on[0])} ${f(on[1])}`;
        const ctr = at(-r, r, o), from = Math.atan2(on[1] - ctr[1], on[0] - ctr[0]), to = from + rad(arc);
        const off = [ctr[0] + r * Math.cos(to), ctr[1] + r * Math.sin(to)];
        if (arc > 0.01) out += `A${f(r)} ${f(r)} 0 0 1 ${f(off[0])} ${f(off[1])}`;
        const k1 = at(d, c, off), k2 = at(d, b + c, off), end = at(d, a + b + c, off);
        out += `C${f(k1[0])} ${f(k1[1])} ${f(k2[0])} ${f(k2[1])} ${f(end[0])} ${f(end[1])}`;
    });
    return out + "Z";
}

/** Choices in a well, a card springing to the one chosen, as the app's switches are. */
function Switch({ items, value, onChange, label }) {
    const box = useRef(null), card = useRef(null), placed = useRef(false);
    useIso(() => {
        const el = box.current?.querySelector(`[data-v="${value}"]`), c = card.current;
        if (!el || !c) return;
        if (!placed.current) c.style.transition = "none";
        c.style.transform = `translateX(${el.offsetLeft - 3}px)`;
        c.style.width = `${el.offsetWidth}px`;
        if (!placed.current) { c.getBoundingClientRect(); c.style.transition = ""; placed.current = true; }
    }, [value, items.map((i) => i[1]).join()]);
    return (
        <div ref={box} className="demo-switch" role="group" aria-label={label}>
            <i ref={card} className="demo-switch-card" aria-hidden="true" />
            {items.map(([v, l]) => (
                <button key={v} type="button" data-v={v} aria-pressed={v === value} onClick={() => onChange(v)} className={v === value ? "is-on" : ""}>{l}</button>
            ))}
        </div>
    );
}

function Slider({ label, value, min, max, step = 1, onChange, show, stops = [] }) {
    const catchAt = (v) => { for (const s of stops) if (Math.abs(v - s) <= (max - min) * 0.018) return s; return v; };
    return (
        <label className="demo-slider">
            <span className="demo-slider-l">{label}</span>
            <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(catchAt(+e.target.value))}
                style={{ "--p": `${((value - min) / (max - min)) * 100}%` }} />
            <span className="demo-slider-v bz-num">{show(value)}</span>
        </label>
    );
}

/* ------------------------------------------------------------------ corners */
function Corners() {
    const w = D[useLang().code].demo;
    const [r, setR] = useState(48), [kind, setKind] = useState("squircle"), [s, setS] = useState(0.8);
    const X = 150, Y = 30, W = 220, H = 220;
    const smooth = kind === "squircle" ? s : 0;
    return (
        <div className="demo">
            <div className="demo-stage">
                <svg viewBox="0 0 520 280" className="demo-svg" role="img" aria-label={`${w.corners}: ${kind === "squircle" ? w.squircle : w.round}, ${Math.round(r)}`}>
                    <defs>
                        <linearGradient id="demo-tile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5B7CE6" /><stop offset="1" stopColor="#3046B0" /></linearGradient>
                    </defs>
                    <path d={squircle(X, Y, W, H, r, smooth)} fill="url(#demo-tile)" className="demo-shape" />
                    {/* a plain round corner, to see the difference */}
                    {smooth > 0 && <path d={squircle(X, Y, W, H, r, 0)} fill="none" className="demo-ghost" />}
                    <path d={squircle(X, Y, W, H, r, smooth)} fill="none" className="demo-edge" />
                </svg>
                {smooth > 0 && <p className="demo-note"><i aria-hidden="true" />{w.ghost}</p>}
            </div>
            <div className="demo-controls">
                <Switch label={w.corners} value={kind} onChange={setKind} items={[["round", w.round], ["squircle", w.squircle]]} />
                <Slider label="R" value={r} min={0} max={110} onChange={setR} show={(v) => Math.round(v)} stops={[0, 4, 12, 24, 110]} />
                <Slider label={w.smoothing} value={Math.round(s * 100)} min={0} max={100} onChange={(v) => { setS(v / 100); if (kind !== "squircle" && v > 0) setKind("squircle"); }} show={(v) => `${v}%`} stops={[60, 80]} />
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ combining */
const BACK = { x: 120, y: 50, w: 200, h: 180, r: 30 };
const rrect = ({ x, y, w, h, r }) => squircle(x, y, w, h, r, 0);
const circle = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

function Combine() {
    const w = D[useLang().code].demo;
    const [op, setOp] = useState("subtract"), [f, setF] = useState({ x: 318, y: 160 });
    const svg = useRef(null), drag = useRef(null);
    const R = 76, back = rrect(BACK), front = circle(f.x, f.y, R);
    const to = (e) => { const p = svg.current.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.current.getScreenCTM().inverse()); };
    const down = (e) => { e.currentTarget.setPointerCapture(e.pointerId); const p = to(e); drag.current = { dx: f.x - p.x, dy: f.y - p.y }; };
    const move = (e) => { if (!drag.current) return; const p = to(e); setF({ x: Math.min(520 - R, Math.max(R, p.x + drag.current.dx)), y: Math.min(280 - R * 0.6, Math.max(R * 0.6, p.y + drag.current.dy)) }); };
    const up = () => { drag.current = null; };
    const keys = (e) => {
        const d = e.shiftKey ? 10 : 2, k = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] }[e.key];
        if (k) { e.preventDefault(); setF((o) => ({ x: Math.min(520 - R, Math.max(R, o.x + k[0])), y: Math.min(280 - R * 0.6, Math.max(R * 0.6, o.y + k[1])) })); }
    };
    const ops = [["union", w.union], ["subtract", w.subtract], ["intersect", w.intersect], ["exclude", w.exclude]];
    return (
        <div className="demo">
            <div className="demo-stage">
                <svg ref={svg} viewBox="0 0 520 280" className="demo-svg" role="img" aria-label={ops.find((o) => o[0] === op)[1]}>
                    <defs>
                        <mask id="demo-sub"><rect width="520" height="280" fill="#fff" /><path d={front} fill="#000" /></mask>
                        <clipPath id="demo-int"><path d={front} /></clipPath>
                    </defs>
                    <g key={op} className="demo-result">
                        {op === "union" && <><path d={back} className="demo-fill" /><path d={front} className="demo-fill" /></>}
                        {op === "subtract" && <path d={back} className="demo-fill" mask="url(#demo-sub)" />}
                        {op === "intersect" && <path d={back} className="demo-fill" clipPath="url(#demo-int)" />}
                        {op === "exclude" && <path d={back + front} className="demo-fill" fillRule="evenodd" />}
                    </g>
                    <path d={back} className="demo-ghost" fill="none" />
                    <path d={front} className="demo-ghost demo-ghost-front" fill="none" />
                    <path d={front} className="demo-grab" tabIndex={0} role="slider" aria-label={w.drag} aria-valuetext={`${Math.round(f.x)}, ${Math.round(f.y)}`}
                        onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onKeyDown={keys} />
                </svg>
                <p className="demo-note demo-note-drag">{w.drag}</p>
            </div>
            <div className="demo-controls">
                <Switch label={w.combine} value={op} onChange={setOp} items={ops} />
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ number fields */
/** What a number field makes of what was typed, as Bezzle reads it (Model/NumberEntry.swift). */
function sum(text) {
    const c = [...text];
    let i = 0;
    const next = () => c[i];
    function factor() {
        if (next() === "-") { i++; const v = factor(); return v == null ? null : -v; }
        if (next() === "+") { i++; return factor(); }
        if (next() === "(") { i++; const v = add(); if (v == null || next() !== ")") return null; i++; return v; }
        const start = i;
        while (i < c.length && /[0-9.]/.test(c[i])) i++;
        if (i === start) return null;
        const v = Number(c.slice(start, i).join(""));
        return Number.isNaN(v) ? null : v;
    }
    function product() {
        let v = factor();
        while (v != null && (next() === "*" || next() === "/")) { const op = c[i++], r = factor(); if (r == null) return null; v = op === "*" ? v * r : v / r; }
        return v;
    }
    function add() {
        let v = product();
        while (v != null && (next() === "+" || next() === "-")) { const op = c[i++], r = product(); if (r == null) return null; v = op === "+" ? v + r : v - r; }
        return v;
    }
    const v = add();
    return v != null && i === c.length && Number.isFinite(v) ? v : null;
}
export function entry(text, old, whole, negatives) {
    let s = text.replace(/,/g, ".").replace(/pt/g, "");
    for (const [a, b] of [["×", "*"], ["x", "*"], ["X", "*"], ["÷", "/"], ["−", "-"], ["–", "-"]]) s = s.split(a).join(b);
    s = s.replace(/\s+/g, "");
    const percent = s.endsWith("%");
    if (percent) s = s.slice(0, -1);
    if (!s) return null;
    const rest = s.slice(1), first = s[0];
    let v;
    if (first === "+") { if ((v = sum(rest)) == null) return null; return percent ? old * (1 + v / 100) : old + v; }
    if (first === "-" && !negatives) { if ((v = sum(rest)) == null) return null; return percent ? old * (1 - v / 100) : old - v; }
    if (first === "*") { if ((v = sum(rest)) == null) return null; return old * (percent ? v / 100 : v); }
    if (first === "/") { if ((v = sum(rest)) == null || v === 0) return null; return old / v; }
    if ((v = sum(s)) == null) return null;
    return percent ? whole * (v / 100) : v;
}
const show = (v) => String(Math.round(v * 100) / 100);

/** The Frame card of a layer on a phone's artboard: type a number, a sum or a change into it. */
function Numbers() {
    const w = D[useLang().code].demo;
    const BOARD = { w: 393, h: 852 };
    const [f, setF] = useState({ x: 32, y: 120, w: 200, h: 160 });
    const [text, setText] = useState(null), [field, setField] = useState(null), [said, setSaid] = useState(null), [flash, setFlash] = useState(null);
    const inputs = useRef({}), typing = useRef(0);
    const FIELDS = [["x", true, BOARD.w], ["y", true, BOARD.h], ["w", false, BOARD.w], ["h", false, BOARD.h]];
    const apply = (k, typed) => {
        const [, neg, whole] = FIELDS.find((x) => x[0] === k);
        const v = entry(typed, f[k], whole, neg);
        setText(null); setField(null);
        if (v == null) { setSaid({ k, typed, bad: true }); return; }
        // brought back into the field's range, as the app does
        const next = k === "w" || k === "h" ? Math.min(100000, Math.max(0, v)) : Math.min(100000, Math.max(-100000, v));
        setSaid({ k, typed, from: f[k], to: next });
        setF((o) => ({ ...o, [k]: next }));
        setFlash(k); setTimeout(() => setFlash(null), 600);
    };
    // a chip types itself into its field, a letter at a time, and goes in
    const tryIt = (k, typed) => {
        clearTimeout(typing.current);
        setField(k); setText("");
        inputs.current[k]?.focus({ preventScroll: true });
        let n = 0;
        const step = () => {
            n++;
            setText(typed.slice(0, n));
            if (n < typed.length) typing.current = setTimeout(step, 90);
            else typing.current = setTimeout(() => apply(k, typed), 420);
        };
        typing.current = setTimeout(step, 160);
    };
    const k = 0.3;
    return (
        <div className="demo demo-numbers">
            <div className="demo-stage demo-numbers-stage">
                <div className="demo-board" style={{ width: BOARD.w * k, height: BOARD.h * k }}>
                    <div className="demo-layer" style={{ transform: `translate(${f.x * k}px, ${f.y * k}px)`, width: Math.max(1, f.w * k), height: Math.max(1, f.h * k) }} />
                </div>
                <div className="demo-card">
                    <p className="demo-card-h"><span>{w.frame}</span><span className="bz-num">{show(f.w)} × {show(f.h)}</span></p>
                    <div className="demo-fields">
                        {FIELDS.map(([key]) => (
                            <label key={key} className={`demo-field ${flash === key ? "is-flash" : ""} ${field === key ? "is-typing" : ""}`}>
                                <span>{key.toUpperCase()}</span>
                                <input ref={(el) => (inputs.current[key] = el)} inputMode="text" spellCheck="false" autoComplete="off"
                                    value={field === key && text != null ? text : show(f[key])}
                                    onFocus={() => { clearTimeout(typing.current); setField(key); setText(show(f[key])); }}
                                    onChange={(e) => setText(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); apply(key, e.currentTarget.value); e.currentTarget.blur(); } else if (e.key === "Escape") { setText(null); setField(null); e.currentTarget.blur(); } }}
                                    onBlur={() => { if (field === key && text != null && text !== show(f[key])) apply(key, text); else { setField(null); setText(null); } }} />
                            </label>
                        ))}
                    </div>
                    <p className="demo-said" aria-live="polite">
                        {said ? (said.bad ? <><code>{said.typed}</code> {w.kept}</> : <><span className="demo-said-k">{said.k.toUpperCase()}</span><code>{said.typed}</code><span aria-hidden="true">→</span><b className="bz-num">{show(said.to)}</b></>) : w.type}
                    </p>
                </div>
            </div>
            <div className="demo-controls">
                <span className="demo-try">{w.try}</span>
                {[["x", "+10"], ["w", "×2"], ["w", "50%"], ["h", "120/3"], ["h", "-10%"], ["y", "(852-160)/2"]].map(([key, t]) => (
                    <button key={key + t} type="button" className="demo-chip" onClick={() => tryIt(key, t)}><span>{key.toUpperCase()}</span><code>{t}</code></button>
                ))}
            </div>
        </div>
    );
}

const DEMOS = { corners: Corners, combine: Combine, numbers: Numbers };
export default function Demo({ name }) {
    const C = DEMOS[name];
    return C ? <figure className="demo-figure"><C /></figure> : null;
}
