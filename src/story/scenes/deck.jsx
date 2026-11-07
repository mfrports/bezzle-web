/*
 * Decks: Wander's "Weekend picks", six posts stacked on one artboard (DeckTool). Behind the front
 * post two plain cards show, each inset 3.5 % a side and lowered by a sliver (2.2 % of the width,
 * 3 to 9 pt). The row under it has a mini card per post and a ring that glides (stiffness 320,
 * damping 28). A turn: the old post slides left by 72 % of its width, rising on an arc, shrinking 10 %
 * and rotating −0.14 rad, while the next rises out of the slot behind (0.46 s, 0.24 s for a quick
 * second turn, cubic out). The badge is restyled once and every post follows (Deck.sync), each with
 * its own photo and words; a click on the stack's feet spreads them out on the table (cards on
 * springs 210/21, a stagger per depth, leaning with their speed).
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Selection, Pointer, Icon } from "@/app/Kit";
import { ofN } from "@/app/words";
import { PLACES } from "@/story/scenes/components";
import { stiff, cubicOut, clamp01, lerp, spot, tip, click } from "@/story/engine";

const Z = 0.34, W = 1080 * Z, H = 1350 * Z, X0 = 470, Y0 = 150;
const SLIVER = Math.min(9, Math.max(3, W * 0.022));
const ROW_Y = Y0 + H + 18, MINI = [10, 12.5], ROW_X = X0 + W / 2 - 61;
const RING = stiff(320, 28), OUT = stiff(210, 21);
const SWATCHES = [["White", "#FFFFFF"], ["Sunset", "#E2653D"], ["Pine", "#2F5D50"], ["Sky", "#8FB8DE"], ["Ink", "#1C1B19"]];
// the spread: 56 in from the canvas, 24 between the cards, a row for their names
const CELL = 182, CELL_H = CELL * 1.25, cellAt = (i) => [348 + (i % 3) * (CELL + 24), 164 + Math.floor(i / 3) * (CELL_H + 18 + 24)];
const f = (x) => x * Z;

/** One post of the deck, as its template lays it out, in the design's units at 34 %. */
function Post({ p: [pic, name, where, rate], i }) {
    return (
        <div className="bz-abs inset-0 overflow-hidden" style={{ background: "#2B2A28" }}>
            <img data-src={`/img/parts/${pic}.webp`} alt="" className="bz-abs inset-0 w-full h-full object-cover max-w-none" />
            <div className="bz-abs inset-0" style={{ background: "linear-gradient(rgb(0 0 0 / 0.34), rgb(0 0 0 / 0) 26%, rgb(0 0 0 / 0) 52%, rgb(0 0 0 / 0.76))" }} />
            <b className="bz-abs text-white font-extrabold tracking-[-0.02em] leading-none" style={{ left: f(72), top: f(66), fontSize: f(50) }}>wander</b>
            <span className="bz-abs rounded-full text-white text-center bz-avenir font-semibold whitespace-nowrap" style={{ left: f(742), top: f(58), width: f(266), height: f(62), lineHeight: `${f(62)}px`, fontSize: f(21), letterSpacing: "0.16em", background: "rgb(255 255 255 / 0.24)" }}>WEEKEND PICK</span>
            <b className="bz-abs text-white font-bold leading-none tracking-[-0.025em] whitespace-nowrap" style={{ left: f(72), top: f(1000), fontSize: f(88) }}>{name}</b>
            <span className="bz-abs whitespace-nowrap font-medium" style={{ left: f(72), top: f(1118), fontSize: f(34), color: "rgb(255 255 255 / 0.88)" }}>⌖ {where}</span>
            <div data-badge={i} className="bz-abs rounded-full grid place-content-center text-center" style={{ left: f(846), top: f(1078), width: f(170), height: f(170), background: "#FFFFFF", color: "#1C1B19", boxShadow: `0 ${f(10)}px ${f(30)}px rgb(0 0 0 / 0.3)` }}>
                <span className="font-semibold leading-none" style={{ fontSize: f(24) }}>★</span>
                <b className="font-bold leading-none tracking-[-0.02em]" style={{ fontSize: f(54), marginTop: f(4) }}>{rate}</b>
            </div>
        </div>
    );
}

export function DeckState({ u, code }) {
    return (
        <>
            <LayersPanel u={u} count={14} rows={[{ name: "Weekend picks", kind: "artboard", open: true }, ...[["Rating badge", "group", true], ["Region", "text"], ["Place name", "text"], ["Tag label", "text"], ["Tag", "rect"], ["Logo", "text"], ["Shade", "rect"], ["Photo", "rect"]].map(([n, k, on]) => ({ name: n, kind: k, depth: 1, on, open: k === "group" ? false : undefined }))]} />
            <Canvas rulers={{ origin: [X0, Y0], zoom: Z, band: [X0, X0 + W], bandY: [Y0, Y0 + H] }}>
                <Label x={X0} y={Y0} data="deck">Weekend picks</Label>
                <div data-backdrop className="bz-abs" style={{ left: 292, top: 52, width: 706, height: 739, background: "var(--table)", opacity: 0 }} />
                {PLACES.map((pl, i) => (
                    <div key={pl[0]} data-post={i} className="bz-abs" style={{ left: X0, top: Y0, width: W, height: H, transformOrigin: "50% 50%" }}>
                        <Post p={pl} i={i} />
                        {/* behind the front, a post is a plain card in the artboard's colour */}
                        <div data-blank className="bz-abs inset-0" style={{ background: "#2B2A28" }}><i data-dim className="bz-abs inset-0 block bg-black" /></div>
                        <i className="bz-abs inset-0 block pointer-events-none" style={{ boxShadow: "inset 0 0 0 0.5px rgb(28 27 25 / 0.12)" }} />
                        <div data-name className="bz-abs left-0 text-[22px] font-medium whitespace-nowrap" style={{ top: H + 10, color: "var(--label)", opacity: 0 }}>{i + 1}  ·  {pl[1]}</div>
                    </div>
                ))}
                <Selection data="deck" x={X0 + f(846)} y={Y0 + f(1078)} w={f(170)} h={f(170)} />
                {/* the row under the stack */}
                <div data-row className="bz-abs" style={{ left: ROW_X, top: ROW_Y, width: 122, height: 22 }}>
                    {PLACES.map((pl, i) => <i key={i} data-mini={i} className="bz-abs block rounded-[2px] bg-cover bg-center" style={{ left: i * 16, top: 4, width: MINI[0], height: MINI[1], background: "#2B2A28", boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.2)" }} />)}
                    <i data-ring className="bz-abs block rounded-[4px]" style={{ left: -4, top: 0.5, width: MINI[0] * 1.1 + 7, height: MINI[1] * 1.1 + 7, boxShadow: "inset 0 0 0 1.5px var(--pencil)" }} />
                    <span className="bz-abs grid place-items-center w-[18px] h-[18px] rounded-full" style={{ left: 104, top: 1.5, background: "rgb(var(--pencil-rgb) / 0.13)", color: "var(--pencil)" }}><Icon name="plus" size={11} /></span>
                    <span data-tip className="bz-abs bz-mono h-[18px] px-1.5 rounded-[5px] text-[10.5px] font-semibold leading-[18px] text-white whitespace-nowrap" style={{ left: 0, top: -24, background: "var(--pencil)", transform: "translateX(-50%)", opacity: 0 }}>{ofN(code, 1, 6)}</span>
                </div>
                <Pointer data="deck" />
            </Canvas>
            <Card top={66} glyph="layers" title={u("Post")} summary={<span className="flex items-center gap-2"><span style={{ color: "var(--ink-4)" }}>‹</span><span data-postof>{ofN(code, 1, 6)}</span><span>›</span></span>} />
            <Card top={114} glyph="ellipse" title={u("Frame")} summary="170 × 170 · 846, 1078" />
            <Card top={162} swatch="#FFFFFF" title={u("Fill")} summary={<span data-fillname>White</span>} lifted data="deck-fill">
                <div className="flex gap-2 px-3 pb-3">
                    {SWATCHES.map(([n, c], j) => (
                        <span key={n} data-swatch={n} className="relative grid place-items-center w-[38px] h-[30px] rounded-[8px]" style={{ background: "var(--well)" }}>
                            <i className="block w-[18px] h-[18px] rounded-full" style={{ background: c, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.2)" }} />
                            {j === 0 && <i data-swatch-ring className="bz-abs -inset-px block rounded-[9px]" style={{ boxShadow: "inset 0 0 0 1.5px var(--pencil)" }} />}
                        </span>
                    ))}
                </div>
            </Card>
            <Card top={256} glyph="opacity" title={u("Shadow")} summary="Y 10 · B 30" />
            <AddChips top={310} items={[u("Border"), u("Blur"), u("Export")]} />
        </>
    );
}

export function playDeck({ q, code }) {
    const posts = q("[data-post]"), blanks = posts.map((p) => p.querySelector("[data-blank]")), dims = posts.map((p) => p.querySelector("[data-dim]")), names = posts.map((p) => p.querySelector("[data-name]"));
    const minis = q("[data-mini]"), ring = q("[data-ring]")[0], tipEl = q("[data-tip]")[0], backdrop = q("[data-backdrop]")[0];
    const sel = q('[data-sel="deck"]')[0], label = q('[data-label="deck"]')[0], row = q("[data-row]")[0], postof = q("[data-postof]")[0];
    const p = q('[data-pointer="deck"]')[0];
    minis.forEach((m, i) => { m.dataset.bg = `url(/img/parts/${PLACES[i][0]}.webp)`; });
    const state = { front: 0, spread: 0, ring: 0 };
    const n = posts.length;
    function render() {
        const { front, spread } = state;
        posts.forEach((el, i) => {
            const s = i - front;
            // in the stack
            let cx = X0 + W / 2, cy = Y0 + H / 2, k = 1, rot = 0, op = 1, blank = 0, lift = 0;
            if (s >= 0) {
                const d = Math.min(s, 2), kk = 1 - 0.07 * d;
                k = kk; cy += (H * (1 - kk)) / 2 + SLIVER * d; blank = clamp01(s); op = s > 2 ? clamp01(3 - s) : 1;
            } else {
                const qq = clamp01(-s);
                cx -= 0.72 * W * qq; cy -= 0.03 * H * Math.sin(Math.PI * qq); k = 1 - 0.1 * qq; rot = -0.14 * qq; op = clamp01((1 - qq) * 4); lift = Math.sin(Math.PI * qq);
            }
            // spread out on the table, the cards nearest the front first
            const depth = Math.abs(s), sp = OUT(clamp01((spread - depth * 0.035) / 0.72));
            const [gx, gy] = cellAt(i), gk = CELL / W, gcx = gx + CELL / 2, gcy = gy + CELL_H / 2;
            const lean = 0.09 * Math.sin(Math.PI * clamp01(sp)) * Math.sign(gcx - cx || 1);
            const X = lerp(cx, gcx, sp), Y = lerp(cy, gcy, sp), K = lerp(k, gk, sp), R = lerp(rot, 0, clamp01(sp)) + lean;
            el.style.transform = `translate(${(X - X0 - W / 2).toFixed(2)}px, ${(Y - Y0 - H / 2).toFixed(2)}px) rotate(${R.toFixed(4)}rad) scale(${K.toFixed(4)})`;
            el.style.opacity = lerp(op, 1, clamp01(sp * 1.6)).toFixed(3);
            el.style.zIndex = String(sp > 0.5 ? 200 + i : Math.round(100 - s * 10));
            blanks[i].style.opacity = lerp(blank, 0, clamp01(sp * 1.4)).toFixed(3);
            dims[i].style.opacity = (0.05 * Math.min(2, Math.max(0, s)) * (1 - sp)).toFixed(3);
            el.style.boxShadow = `0 ${(2 + 10 * lift).toFixed(1)}px ${(10 + 22 * lift).toFixed(1)}px rgb(0 0 0 / ${(0.13 + 0.19 * lift) * (s <= 0 ? 1 : 0.6)})`;
            names[i].style.opacity = clamp01((sp - 0.7) / 0.3).toFixed(3);
        });
        backdrop.style.opacity = (0.985 * clamp01(spread * 1.8)).toFixed(3);
        const fade = clamp01(1 - spread * 4);
        for (const el of [sel, row, label]) el.style.opacity = fade.toFixed(3);
        // the ring glides to the front's mini card
        minis.forEach((m, i) => { const on = Math.max(0, 1 - Math.abs(i - front)); m.style.opacity = (0.75 + 0.25 * on).toFixed(2); m.style.transform = `scale(${(1 + 0.1 * on).toFixed(3)})`; });
        ring.style.left = `${(state.ring * 16 - 4.5).toFixed(2)}px`;
        tipEl.style.left = `${(state.ring * 16 + MINI[0] / 2).toFixed(2)}px`;
    }
    render();
    const tl = gsap.timeline();
    const go = { onUpdate: render };
    const turn = (to, at, dur) => {
        tl.to(state, { front: to, duration: dur, ease: cubicOut, ...go }, at);
        tl.to(state, { ring: to, duration: dur * 1.3, ease: RING, ...go }, at);
        tl.set([tipEl, postof], { textContent: ofN(code, to + 1, n) }, at + 0.01);
    };
    const miniAt = (i) => tip(spot(minis[i]));
    tl.fromTo(p, { opacity: 0, x: 760, y: 760 }, { opacity: 1, ...miniAt(1), duration: 0.07, ease: "power2.out" }, 0.005);
    tl.fromTo(tipEl, { opacity: 0, y: 3 }, { opacity: 1, y: 0, duration: 0.03 }, 0.05);
    click(tl, p, 0.08); turn(1, 0.09, 0.1);
    tl.to(p, { ...miniAt(2), duration: 0.05, ease: "power2.inOut" }, 0.15);
    click(tl, p, 0.2); turn(2, 0.21, 0.055);
    tl.to(tipEl, { opacity: 0, duration: 0.03 }, 0.29);
    // restyle the badge: every post follows, each keeping its own photo and words
    const sunset = q('[data-swatch="Sunset"]')[0], swRing = q("[data-swatch-ring]")[0];
    tl.to(p, { ...tip(spot(sunset)), duration: 0.1, ease: "power2.inOut" }, 0.27);
    click(tl, p, 0.38);
    tl.set(q("[data-badge]"), { backgroundColor: "#E2653D" }, 0.392);
    tl.set(q('[data-card="deck-fill"] [data-fillname]')[0], { textContent: "Sunset" }, 0.392);
    tl.set(q('[data-card="deck-fill"] [data-swatch-dot]')[0], { backgroundColor: "#E2653D" }, 0.392);
    tl.to(swRing, { x: 46, duration: 0.05, ease: stiff(380, 30) }, 0.392);
    // the stack's feet: a click spreads the posts out
    tl.to(p, { x: X0 + W / 2 + 40, y: Y0 + H + 4, duration: 0.12, ease: "power2.inOut" }, 0.45);
    click(tl, p, 0.565);
    tl.to(state, { spread: 1, duration: 0.34, ease: "none", ...go }, 0.575);
    tl.to(p, { x: cellAt(4)[0] + 120, y: cellAt(4)[1] + 150, duration: 0.14, ease: "power2.inOut" }, 0.8);
    return tl;
}
