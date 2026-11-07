/*
 * AI assistants: Ember & Oat, and an assistant connected over Bezzle's MCP server. Asked for five
 * autumn posts, it works through the design as the app shows any change (MCPEditing): the café's
 * post becomes a deck and four posts are dealt onto it (DeckTool's deal: a copy arcs right by 42 %
 * of the width and up 4 %, grows 4 %, turns 0.09 rad and lays back on top, 0.62 s), the photos go
 * in, the words and prices are written; turning back through the deck shows each post with its own
 * (the reverse turn, settling with a back ease), the PNGs come out, and its note, signed "Claude",
 * is written into the margin like anyone's. Every step is one step of Undo.
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Selection, Icon } from "@/app/Kit";
import { ofN } from "@/app/words";
import { stiff, cubicOut, clamp01, smooth, noteThread } from "@/story/engine";

const Z = 0.34, W = 1080 * Z, H = 1350 * Z, X0 = 360, Y0 = 150;
const SLIVER = Math.min(9, Math.max(3, W * 0.022)), MINI = [10, 12.5], ROW_Y = Y0 + H + 18;
const RING = stiff(320, 28);
const f = (x) => x * Z;
const SEPIA = "#A6663C";
export const CAFE = [
    ["cafe-latte", "Maple Oat Latte", "Toasted maple, oat milk and a pinch of sea salt.", "5.40"],
    ["cafe-chai", "Smoked Chai", "Lapsang, cardamom and warm honey.", "4.80"],
    ["cafe-brunch", "Sunday Brunch", "Every Sunday from nine. Bring everyone.", "24.00"],
    ["cafe-crumble", "Berry Crumble", "Late raspberries under a brown-butter crumble.", "6.20"],
    ["cafe-roast", "House Roast No. 7", "Our autumn beans, roasted on Tuesdays.", "18.00"],
];
const PIN = [X0 + f(931), Y0 + f(1163)], NOTE = [753, 500];

/** A post of Ember & Oat's Autumn menu, as the design has it (Bodoni 72 and Avenir Next). */
export function CafePost({ c: [pic, head, line, price], template }) {
    const [tp, th, tl, tpr] = template || [pic, head, line, price];
    return (
        <div className="bz-abs inset-0 overflow-hidden" style={{ background: "#2B211B" }}>
            <img data-src={`/img/parts/${tp}.webp`} alt="" className="bz-abs inset-0 w-full h-full object-cover max-w-none" />
            {template && <img data-own-photo data-src={`/img/parts/${pic}.webp`} alt="" className="bz-abs inset-0 w-full h-full object-cover max-w-none" style={{ opacity: 0 }} />}
            <div className="bz-abs inset-0" style={{ background: "linear-gradient(rgb(0 0 0 / 0.35), rgb(0 0 0 / 0) 28%, rgb(0 0 0 / 0) 55%, rgb(0 0 0 / 0.78))" }} />
            <span className="bz-abs bz-avenir font-semibold text-white whitespace-nowrap" style={{ left: f(72), top: f(74), fontSize: f(30), lineHeight: `${f(41)}px`, letterSpacing: "0.26em" }}>EMBER &amp; OAT</span>
            <span className="bz-abs rounded-full" style={{ left: f(772), top: f(58), width: f(236), height: f(62), background: "rgb(255 255 255 / 0.3)" }} />
            <span className="bz-abs bz-avenir font-semibold text-white text-center whitespace-nowrap" style={{ left: f(772), top: f(77), width: f(236), fontSize: f(21), lineHeight: `${f(29)}px`, letterSpacing: "0.16em" }}>AUTUMN MENU</span>
            {[[th, tl, tpr, "data-was"], ...(template ? [[head, line, price, "data-own"]] : [])].map(([h, l, p, k]) => (
                <div key={k} {...{ [k]: "" }} className="bz-abs inset-0" style={k === "data-own" ? { clipPath: "inset(0 100% 0 0)" } : undefined}>
                    <span className="bz-abs bz-bodoni text-white" style={{ left: f(72), top: f(880), width: f(780), fontSize: f(132), lineHeight: `${f(124)}px`, letterSpacing: "-0.02em" }}>{h}</span>
                    <span className="bz-abs bz-avenir font-medium" style={{ left: f(72), top: f(1192), width: f(660), fontSize: f(34), lineHeight: `${f(46)}px`, color: "rgb(255 255 255 / 0.85)" }}>{l}</span>
                    <div className="bz-abs rounded-full text-center" style={{ left: f(846), top: f(1078), width: f(170), height: f(170), background: "#F2B544", color: "#1C1B19" }}>
                        <span className="bz-abs inset-x-0 bz-avenir font-semibold" style={{ top: f(40), fontSize: f(20), lineHeight: `${f(27)}px`, letterSpacing: "0.2em" }}>CHF</span>
                        <span className="bz-abs inset-x-0 bz-bodoni font-bold" style={{ top: f(62), fontSize: f(56), lineHeight: `${f(67)}px` }}>{p}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function AiState({ u, code, t }) {
    return (
        <>
            <LayersPanel u={u} count={12} rows={[{ name: "Autumn menu", kind: "artboard", open: true, on: true }, ...[["Price badge", "group"], ["Line", "text"], ["Headline", "text"], ["Tag label", "text"], ["Tag", "rect"], ["Brand", "text"], ["Shade", "rect"], ["Photo", "rect"]].map(([n, k]) => ({ name: n, kind: k, depth: 1, open: k === "group" ? false : undefined }))]} />
            <Canvas rulers={{ origin: [X0, Y0], zoom: Z, band: [X0, X0 + W], bandY: [Y0, Y0 + H] }}>
                <Label x={X0} y={Y0} on>Autumn menu</Label>
                {CAFE.map((c, i) => (
                    <div key={c[0]} data-cpost={i} className="bz-abs" style={{ left: X0, top: Y0, width: W, height: H, transformOrigin: "50% 50%", opacity: i ? 0 : 1 }}>
                        {/* each dealt post is the template's copy when it lands; the assistant then gives it its own */}
                        <CafePost c={c} template={i ? CAFE[0] : undefined} />
                        <div data-blank className="bz-abs inset-0" style={{ background: "#2B211B", opacity: 0 }}><i data-dim className="bz-abs inset-0 block bg-black" style={{ opacity: 0 }} /></div>
                        <i className="bz-abs inset-0 block pointer-events-none" style={{ boxShadow: "inset 0 0 0 0.5px rgb(28 27 25 / 0.12)" }} />
                    </div>
                ))}
                <Selection x={X0} y={Y0} w={W} h={H} data="ai" />
                <div data-crow className="bz-abs" style={{ left: X0 + W / 2 - 53, top: ROW_Y, width: 106, height: 22 }}>
                    {CAFE.map((c, i) => <i key={i} data-cmini={i} className="bz-abs block rounded-[2px]" style={{ left: i * 16, top: 4, width: MINI[0], height: MINI[1], background: "#2B211B", boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.2)", opacity: i ? 0 : 1 }} />)}
                    <i data-cring className="bz-abs block rounded-[4px]" style={{ left: -4.5, top: 0.5, width: MINI[0] * 1.1 + 7, height: MINI[1] * 1.1 + 7, boxShadow: "inset 0 0 0 1.5px var(--pencil)" }} />
                    <span data-cadd className="bz-abs grid place-items-center w-[18px] h-[18px] rounded-full" style={{ left: 24, top: 1.5, background: "rgb(var(--pencil-rgb) / 0.13)", color: "var(--pencil)" }}><Icon name="plus" size={11} /></span>
                </div>
                {/* the assistant's note */}
                <svg className="bz-abs left-0 top-0 overflow-visible pointer-events-none" width="1280" height="800">
                    <g data-cthread>
                        <path d={noteThread(PIN, [NOTE[0], NOTE[1] + 19])} fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
                        <path d={noteThread(PIN, [NOTE[0], NOTE[1] + 19])} fill="none" stroke={SEPIA} strokeOpacity="0.62" strokeWidth="1.1" strokeLinecap="round" />
                    </g>
                </svg>
                <span data-cpin className="bz-abs block rounded-full bg-white" style={{ left: PIN[0] - 5.5, top: PIN[1] - 5.5, width: 11, height: 11, boxShadow: `inset 0 0 0 1.6px ${SEPIA}, 0 1px 2px rgb(0 0 0 / 0.25)`, opacity: 0 }}>
                    <i className="bz-abs block rounded-full" style={{ left: 3.75, top: 3.75, width: 3.5, height: 3.5, background: SEPIA }} />
                </span>
                <div data-cnote className="bz-abs bz-lifted rounded-[11px] px-[11px] pt-[10px] pb-[11px]" style={{ left: NOTE[0], top: NOTE[1], width: 208, transformOrigin: "0 19px", opacity: 0 }}>
                    <i className="bz-abs block rounded-full" style={{ left: -1.25, top: 11, width: 2.5, height: 16, background: SEPIA }} />
                    <div className="flex items-center gap-1.5 text-[12px] font-semibold">
                        <span className="grid place-items-center w-[15px] h-[15px] rounded-full text-white" style={{ background: SEPIA }}><Icon name="sparkle" size={9} /></span>Claude
                    </div>
                    <div className="mt-1 text-[12.5px] leading-[1.38]">{t.ai_note}</div>
                </div>
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="1080 × 1350 · 0, 0" />
            <Card top={114} glyph="phone" title={u("Artboard")} summary="Instagram post, 4:5" />
            <Card top={162} swatch="#2B211B" title={u("Background")} summary="#2B211B" />
            <div data-cpostcard className="bz-abs" style={{ left: 0, top: 0, opacity: 0 }}>
                <Card top={210} glyph="layers" title={u("Post")} summary={<span className="flex items-center gap-2"><span style={{ color: "var(--ink-4)" }}>‹</span><span data-cpostof>{ofN(code, 1, 1)}</span><span>›</span></span>} />
            </div>
            <div data-cchips className="bz-abs" style={{ left: 0, top: 0 }}><AddChips top={216} items={[u("Layout Grid"), u("Dark"), u("Export")]} /></div>
        </>
    );
}

/** The assistant, in its own window beside Bezzle: the request, and each step as it is done. */
export function AiFloat({ t }) {
    return (
        <>
            <div data-chat className="bz bz-abs bz-lifted rounded-[16px] p-4" style={{ left: 22, top: 236, width: 312, opacity: 0, transformStyle: "preserve-3d" }}>
                <div className="flex items-center gap-2 text-[12.5px] font-semibold"><span className="grid place-items-center w-[22px] h-[22px] rounded-[7px] text-white" style={{ background: SEPIA }}><Icon name="sparkle" size={12} /></span>{t.ai_title}<span className="ml-auto h-[18px] px-1.5 rounded-[5px] text-[10px] font-semibold leading-[18px]" style={{ background: "var(--well)", color: "var(--ink-3)" }}>MCP · Bezzle</span></div>
                <div className="mt-3 ml-8 rounded-[12px] rounded-tr-[4px] px-3 py-2 text-[12.5px] leading-[1.4]" style={{ background: "var(--well)" }}>{t.ai_prompt}</div>
                <div className="mt-3 grid gap-2">
                    {t.ai_steps.map((s, i) => (
                        <div key={i} data-step={i} className="flex items-start gap-2 text-[12.5px] leading-[1.35]" style={{ opacity: 0 }}>
                            <span className="relative flex-none w-4 h-4 mt-px">
                                <i data-spin className="bz-abs inset-0 block rounded-full" style={{ border: "1.5px solid rgb(var(--ink-rgb) / 0.15)", borderTopColor: SEPIA }} />
                                <span data-check className="bz-abs inset-0 grid place-items-center rounded-full text-white" style={{ background: SEPIA, opacity: 0 }}><Icon name="check" size={11} /></span>
                            </span>
                            <span>{s}</span>
                        </div>
                    ))}
                </div>
                <div data-done className="mt-3 pt-3 font-serif text-[15px] font-medium" style={{ borderTop: "0.5px solid var(--hairline)", opacity: 0 }}>{t.ai_done}</div>
            </div>
            {/* the PNGs, out of the design and onto the desk */}
            {[1, 2, 3, 4, 5].map((n, i) => (
                <img key={n} data-png={i} data-src={`/img/parts/post${n}.webp`} alt="" className="bz-abs max-w-none rounded-[3px]" style={{ left: 0, top: 0, width: 96, height: 120, opacity: 0, boxShadow: "0 10px 24px rgb(0 0 0 / 0.28), 0 0 0 0.5px rgb(0 0 0 / 0.2)" }} />
            ))}
        </>
    );
}

export function playAi({ q, f: fq, code }) {
    const posts = q("[data-cpost]"), blanks = posts.map((p) => p.querySelector("[data-blank]")), dims = posts.map((p) => p.querySelector("[data-dim]"));
    const minis = q("[data-cmini]"), ring = q("[data-cring]")[0], add = q("[data-cadd]")[0], postof = q("[data-cpostof]")[0];
    minis.forEach((m, i) => { m.style.backgroundImage = `url(/img/parts/${CAFE[0][0]}.webp)`; m.style.backgroundSize = "cover"; m.style.backgroundPosition = "center"; });
    const state = { d1: 0, d2: 0, d3: 0, d4: 0, front: 4, back: 0, ring: 0, count: 1 };
    const D = (i) => (i === 0 ? 1 : state[`d${i}`]);
    function render() {
        posts.forEach((el, i) => {
            let x = 0, y = 0, k = 1, rot = 0, op = 1, blank = 0, z = 100, lift = 0;
            if (!state.back) {
                // dealing: the newest arcs out to the right and lays back on top, covering the one before
                const d = D(i), next = i < 4 ? D(i + 1) : 0;
                if (d <= 0) op = 0;
                else if (d < 1) { const s = Math.sin(Math.PI * d); x = 0.42 * W * s; y = -0.04 * H * s; k = 1 + 0.04 * s; rot = 0.09 * s; z = 120; lift = s; }
                else if (next >= 1) op = 0;
                else z = 100 - i;
                if (d >= 1 && next < 1) z = 110;
            } else {
                // turning back through the deck: the one before comes in from the left onto the top
                const s = i - state.front;
                if (s >= 0) { const dd = Math.min(s, 2), kk = 1 - 0.07 * dd; k = kk; y = (H * (1 - kk)) / 2 + SLIVER * dd; blank = clamp01(s); op = s > 2 ? clamp01(3 - s) : 1; }
                else { const qq = clamp01(-s); x = -0.72 * W * qq; y = -0.03 * H * Math.sin(Math.PI * qq); k = 1 - 0.1 * qq; rot = -0.14 * qq; op = clamp01((1 - qq) * 4); lift = Math.sin(Math.PI * qq); }
                z = Math.round(100 - s * 10);
            }
            el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rot.toFixed(4)}rad) scale(${k.toFixed(4)})`;
            el.style.opacity = op.toFixed(3);
            el.style.zIndex = String(z);
            el.style.boxShadow = `0 ${(2 + 10 * lift).toFixed(1)}px ${(10 + 22 * lift).toFixed(1)}px rgb(0 0 0 / ${(0.13 + 0.19 * lift).toFixed(3)})`;
            blanks[i].style.opacity = blank.toFixed(3);
            dims[i].style.opacity = (0.05 * Math.min(2, blank * 2)).toFixed(3);
        });
        minis.forEach((m, i) => { const on = Math.max(0, 1 - Math.abs(i - state.ring)); m.style.transform = `scale(${(1 + 0.1 * on).toFixed(3)})`; });
        ring.style.left = `${(state.ring * 16 - 4.5).toFixed(2)}px`;
        add.style.left = `${(state.count * 16 + 8).toFixed(2)}px`;
    }
    render();
    const tl = gsap.timeline(), go = { onUpdate: render };
    const chat = fq("[data-chat]")[0];
    tl.fromTo(chat, { opacity: 0, y: 16, z: 40 }, { opacity: 1, y: 0, z: 90, duration: 0.07, ease: cubicOut }, 0);
    const step = (i, t0, t1) => {
        const row = fq(`[data-step="${i}"]`)[0];
        tl.fromTo(row, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.03 }, t0);
        tl.fromTo(row.querySelector("[data-spin]"), { rotation: 0 }, { rotation: 360 * 3, duration: t1 - t0, ease: "none" }, t0);
        tl.to(row.querySelector("[data-spin]"), { opacity: 0, duration: 0.01 }, t1);
        tl.fromTo(row.querySelector("[data-check]"), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.03, ease: "back.out(2.4)" }, t1);
    };
    // 1. the post becomes a deck: four posts are dealt onto it, the row grows under it
    step(0, 0.05, 0.36);
    tl.fromTo(q("[data-cpostcard]")[0], { opacity: 0 }, { opacity: 1, duration: 0.03 }, 0.07);
    tl.to(q("[data-cchips]")[0], { y: 48, duration: 0.05, ease: stiff(300, 30) }, 0.07);
    [1, 2, 3, 4].forEach((i, j) => {
        const t0 = 0.09 + j * 0.065;
        tl.to(state, { [`d${i}`]: 1, duration: 0.07, ease: smooth, ...go }, t0);
        tl.fromTo(minis[i], { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.03, ease: "back.out(2)", immediateRender: false }, t0 + 0.03);
        tl.to(state, { ring: i, count: i + 1, duration: 0.05, ease: RING, ...go }, t0 + 0.03);
        tl.set(postof, { textContent: ofN(code, i + 1, i + 1) }, t0 + 0.04);
    });
    // 2. the photos go in, 3. the words and prices are written
    step(1, 0.37, 0.46);
    const own = (sel) => posts.slice(1).map((p) => p.querySelector(sel));
    tl.to(own("[data-own-photo]"), { opacity: 1, duration: 0.06 }, 0.39);
    minis.forEach((m, i) => tl.set(m, { backgroundImage: `url(/img/parts/${CAFE[i][0]}.webp)` }, 0.39 + i * 0.014));
    step(2, 0.47, 0.58);
    tl.to(own("[data-was]"), { opacity: 0, duration: 0.03 }, 0.48);
    tl.to(own("[data-own]"), { clipPath: "inset(0 0% 0 0)", duration: 0.09, ease: "none" }, 0.49);
    // turning back through the deck, each post with its own photo and words
    tl.set(state, { back: 1, ...go }, 0.6);
    [3, 2, 1, 0].forEach((to, j) => {
        const t0 = 0.6 + j * 0.045;
        tl.to(state, { front: to, duration: 0.05, ease: "back.out(1.5)", ...go }, t0);
        tl.to(state, { ring: to, duration: 0.06, ease: RING, ...go }, t0);
        tl.set(postof, { textContent: ofN(code, to + 1, 5) }, t0 + 0.01);
    });
    // 4. the PNGs come out
    step(3, 0.79, 0.88);
    fq("[data-png]").forEach((png, i) => {
        tl.fromTo(png, { x: X0 + W / 2 - 48, y: Y0 + H / 2 - 60, z: 0, scale: W / 96, rotation: 0, opacity: 0 },
            { x: 772 + i * 28, y: 176 + i * 22, z: 70 + i * 12, scale: 1, rotation: -9 + i * 4, opacity: 1, duration: 0.1, ease: cubicOut, immediateRender: false }, 0.8 + i * 0.016);
    });
    // the note, signed Claude, and the last word
    tl.fromTo(q("[data-cpin]")[0], { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.03, ease: "back.out(2)" }, 0.86);
    tl.fromTo(q("[data-cthread] path"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.05, ease: smooth }, 0.875);
    tl.fromTo(q("[data-cnote]")[0], { opacity: 0, scale: 0.94, x: -8 }, { opacity: 1, scale: 1, x: 0, duration: 0.08, ease: cubicOut }, 0.9);
    tl.fromTo(fq("[data-done]")[0], { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.04 }, 0.9);
    return tl;
}
