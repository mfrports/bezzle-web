/*
 * Adaptive layout: the Poster artboard of Adoption Day Sizes, its corner dragged to a square, a
 * story and a thumbnail. As in the app, the layers re-flow live during the drag (CanvasView 1841):
 * while the arrangement holds they follow the frame, and where it changes they spring to their new
 * places (stiffness 230, damping 23), each a little later the farther it lies from the top left.
 * While dragging, the skeleton shows (AdaptTool 194–273): every block outlined in pencil, a staple
 * across tight gaps, a pink zigzag spring across loose ones, and the size in a pill under the frame.
 * The four arrangements are the design's own, read from its document.json.
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Selection, Pointer } from "@/app/Kit";
import { stiff, clamp01, lerp, smooth } from "@/story/engine";

const Z = 0.25, X0 = 452, Y0 = 136;
// [w, h], then each layer's frame [x, y, w, h] in the design's units
const SIZES = [
    { name: "Instagram post, 4:5", size: [1080, 1350], Good: [0, 150, 1080, 559], Boy: [0, 520, 1080, 559], Pug: [-210, 440, 1500, 1000], Pill: [72, 66, 300, 76], Date: [72, 86, 300, 38], Where: [560, 64, 448, 80] },
    { name: "Instagram post, square", size: [1080, 1080], Good: [103.5, 110.5, 872.7, 453], Boy: [103.5, 409.5, 872.7, 453], Pug: [103.5, 344.5, 872.7, 735.3], Pill: [58, 42.5, 242.4, 61.4], Date: [58, 58.5, 242.4, 31], Where: [660, 40.5, 362, 65] },
    { name: "Instagram story & reel", size: [1080, 1920], Good: [5, 731.5, 1069.7, 554], Boy: [5, 1098, 1069.7, 554], Pug: [5, 1018.5, 1069.7, 901.3], Pill: [71, 647, 297, 76], Date: [71.5, 667.5, 297.1, 38], Where: [565, 646, 443.7, 80] },
    { name: "YouTube thumbnail", size: [1280, 720], Good: [349, 73.5, 581.9, 302], Boy: [349, 273, 581.9, 302], Pug: [349, 229.5, 581.9, 490.3], Pill: [39, 27, 162, 42], Date: [39, 38, 161.6, 21], Where: [1000, 26, 241.4, 44] },
];
const LAYERS = ["Pug", "Good", "Boy", "Pill", "Date", "Where"];
const ROWS = [{ name: "Poster", kind: "artboard", open: true, on: true }, ...["Where", "Date", "Date pill", "Pug", "Boy", "Good"].map((n) => ({ name: n, kind: /Date pill|Pug/.test(n) ? "rect" : "text", depth: 1 }))];
const RIPPLE = stiff(230, 23);

/** The poster itself, its layers as the design has them; positions are set as the frame changes. */
function Poster() {
    return (
        <div data-art className="bz-abs overflow-hidden" style={{ left: X0, top: Y0, width: 270, height: 337.5, background: "#3559C7" }}>
            <div data-l="Good" className="bz-abs bz-futura text-center leading-[0.92]" style={{ color: "#F6F1E6", letterSpacing: "-0.01em" }}>GOOD</div>
            <div data-l="Boy" className="bz-abs bz-futura text-center leading-[0.92]" style={{ color: "#F6F1E6", letterSpacing: "-0.01em" }}>BOY</div>
            <img data-l="Pug" data-src="/img/parts/pug-cutout.webp" alt="" className="bz-abs object-cover max-w-none" />
            <div data-l="Pill" className="bz-abs rounded-full" style={{ background: "#1C1B19" }} />
            <div data-l="Date" className="bz-abs bz-avenir font-semibold text-center whitespace-nowrap" style={{ color: "#F6F1E6", letterSpacing: "0.18em" }}>SAT · 10 AM</div>
            <div data-l="Where" className="bz-abs bz-avenir font-semibold text-right whitespace-nowrap" style={{ color: "#F6F1E6" }}>Animal Shelter Zürich<br />Meet Bruno and 23 friends</div>
        </div>
    );
}

export function AdaptState({ u }) {
    return (
        <>
            <LayersPanel u={u} count={28} rows={ROWS} />
            <Canvas rulers={{ origin: [X0, Y0], zoom: Z, band: [X0, X0 + 270] }}>
                <Label x={X0} y={Y0} on data="adapt">Poster</Label>
                <Poster />
                {/* the skeleton while dragging */}
                <div data-skel className="bz-abs inset-0" style={{ opacity: 0 }}>
                    {LAYERS.filter((n) => n !== "Date").map((n) => <div key={n} data-b={n} className="bz-abs rounded-[3px]" style={{ boxShadow: "0 0 0 1px rgb(var(--cpencil-rgb) / 0.5)" }} />)}
                    <svg className="bz-abs left-0 top-0 overflow-visible" width="1280" height="800"><path data-zig fill="none" stroke="rgb(var(--gap-rgb) / 0.85)" strokeWidth="1.25" strokeLinejoin="round" /><path data-staple fill="none" stroke="rgb(var(--cpencil-rgb) / 0.55)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <Selection data="adapt" x={X0} y={Y0} w={270} h={337.5} />
                <div data-dim="adapt" className="bz-abs h-5 px-[7px] rounded-[6px] text-[11px] font-medium leading-5 text-white whitespace-nowrap bz-num" style={{ left: 0, top: 0, background: "var(--cpencil)", opacity: 0, transform: "translateX(-50%)" }}>1080 × 1350</div>
                <Pointer data="adapt" />
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="1080 × 1350 · 0, 0" data="adapt-frame" />
            <Card top={114} glyph="phone" title={u("Artboard")} summary="Instagram post, 4:5" data="adapt-preset" />
            <Card top={162} swatch="#3559C7" title={u("Background")} summary="#3559C7" />
            <AddChips top={216} items={[u("Layout Grid"), u("Dark"), u("Export")]} />
        </>
    );
}

/** The layers' frames at stretch s (0 = poster, 1 = square, 2 = story, 3 = thumbnail). */
function framesAt(s) {
    const i = Math.min(2, Math.floor(s)), p = s - i, A = SIZES[i], B = SIZES[i + 1];
    const size = [lerp(A.size[0], B.size[0], smooth(p)), lerp(A.size[1], B.size[1], smooth(p))];
    const fit = (S, f) => { const sx = size[0] / S.size[0], sy = size[1] / S.size[1]; return [f[0] * sx, f[1] * sy, f[2] * sx, f[3] * sy]; };
    const out = {};
    for (const n of LAYERS) {
        const a = fit(A, A[n]), b = fit(B, B[n]);
        // the switch: each layer springs over once the drag is past half way, the far ones a little later
        const mid = (a[0] + a[2] / 2) / size[0] + (a[1] + a[3] / 2) / size[1];
        const k = RIPPLE(clamp01((p - 0.42 - mid * 0.04) / 0.5));
        out[n] = a.map((v, j) => lerp(v, b[j], k));
    }
    return { size, out, pulse: Math.max(0, 1 - Math.abs(p - 0.5) * 5), open: clamp01(Math.min(p, 1 - p) * 9) * (s > 0 && s < 3 ? 1 : 0) };
}

export function playAdapt({ q }) {
    const art = q("[data-art]")[0], sel = q('[data-sel="adapt"]')[0], dim = q('[data-dim="adapt"]')[0], skel = q("[data-skel]")[0];
    const L = Object.fromEntries(LAYERS.map((n) => [n, q(`[data-l="${n}"]`)[0]]));
    const B = Object.fromEntries(LAYERS.map((n) => [n, q(`[data-b="${n}"]`)[0]]));
    const zig = q("[data-zig]")[0], staple = q("[data-staple]")[0], p = q('[data-pointer="adapt"]')[0];
    const frame = q('[data-card="adapt-frame"] [data-summary]')[0], preset = q('[data-card="adapt-preset"] [data-summary]')[0];
    const state = { s: 0 };
    function render() {
        const { size, out, pulse, open } = framesAt(state.s);
        const W = size[0] * Z, H = size[1] * Z;
        for (const el of [art, sel]) Object.assign(el.style, { width: `${W}px`, height: `${H}px` });
        for (const n of LAYERS) {
            const [x, y, w, h] = out[n].map((v) => v * Z);
            Object.assign(L[n].style, { left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` });
            if (n === "Good" || n === "Boy") L[n].style.fontSize = `${Math.min(h * 0.768, w * 0.398)}px`;
            if (n === "Date") L[n].style.fontSize = `${Math.min(h * 0.737, w * 0.0933)}px`;
            if (n === "Where") { const fs = Math.min(h * 0.35, w * 0.0625); L[n].style.fontSize = `${fs}px`; L[n].style.lineHeight = `${fs * 1.43}px`; }
            if (B[n]) Object.assign(B[n].style, { left: `${X0 + x - 2}px`, top: `${Y0 + y - 2}px`, width: `${w + 4}px`, height: `${h + 4}px` });
        }
        skel.style.opacity = open.toFixed(3);
        for (const b of Object.values(B)) if (b) b.style.boxShadow = `0 0 0 1px rgb(var(--cpencil-rgb) / ${(0.26 + 0.4 * pulse).toFixed(2)})`;
        // a loose gap under the date pill: a zigzag spring of six turns; a tight one between the words: a staple
        const pill = out.Pill, good = out.Good, boy = out.Boy;
        const zx = X0 + (pill[0] + pill[2] / 2) * Z, y1 = Y0 + (pill[1] + pill[3]) * Z + 3, y2 = Y0 + (good[1] + good[3] * 0.12) * Z - 3;
        const amp = Math.min(6, Math.max(3, 144 / Math.max(1, y2 - y1))) * 0.6;
        let d = `M${zx} ${y1} L${zx} ${y1 + 3}`;
        for (let i = 0; i <= 12; i++) d += ` L${(zx + (i % 2 ? amp : -amp) * (i && i < 12 ? 1 : 0)).toFixed(1)} ${(y1 + 3 + ((y2 - y1 - 6) * i) / 12).toFixed(1)}`;
        zig.setAttribute("d", y2 - y1 > 8 ? d + ` L${zx} ${y2}` : "");
        const sx = X0 + (good[0] + good[2] * 0.82) * Z, sy1 = Y0 + (good[1] + good[3] * 0.86) * Z, sy2 = Y0 + (boy[1] + boy[3] * 0.1) * Z;
        staple.setAttribute("d", `M${sx - 2.5} ${sy1} H${sx + 2.5} M${sx} ${sy1} V${sy2} M${sx - 2.5} ${sy2} H${sx + 2.5}`);
        Object.assign(dim.style, { left: `${X0 + W / 2}px`, top: `${Y0 + H + 10}px`, opacity: Math.max(open, 0).toFixed(3) });
        dim.textContent = `${Math.round(size[0])} × ${Math.round(size[1])}`;
        frame.textContent = `${Math.round(size[0])} × ${Math.round(size[1])} · 0, 0`;
        preset.textContent = SIZES[Math.round(Math.min(3, state.s))].name;
        p.style.transform = `translate(${(X0 + W - 3).toFixed(1)}px, ${(Y0 + H - 3).toFixed(1)}px)`;
    }
    L.Pug.style.filter = `drop-shadow(0 ${(30 * Z).toFixed(1)}px ${(30 * Z).toFixed(1)}px rgb(20 22 70 / 0.4))`;
    render();
    const tl = gsap.timeline();
    tl.to(p, { opacity: 1, duration: 0.06 }, 0.02);
    [[0.08, 1], [0.37, 2], [0.66, 3]].forEach(([at, to]) => tl.to(state, { s: to, duration: 0.25, ease: "power1.inOut", onUpdate: render }, at));
    tl.to(p, { opacity: 0, duration: 0.06 }, 0.93);
    return tl;
}
