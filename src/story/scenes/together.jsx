/*
 * Together: Wander Pitch, shared. Noah's and Mia's avatars come into the title bar (24 pt pencil
 * circles with a paper ring, LiveViews 196–281); their hands move over the design in their pencils
 * (rose, olive), each with its name chip, a soft pool of light where they look (LiveMarks 209–231).
 * Mia selects the Place screen (her outline and initial flag), circles "Book a tour" with a pencil
 * loop (Live.swift's wink: drawn in 0.52 s, held, faded) and pins a note to it: its thread draws in,
 * the card unfolds in the margin (NotesLayer). Noah rings the prices on Saved and writes his, then
 * answers Mia, and his change glows on the button in his colour.
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Hand } from "@/app/Kit";
import { loop, pathOf, noteThread, cubicOut, smooth } from "@/story/engine";

const Z = 0.27, AX = 318, AY = 250, AW = 1600 * Z, AH = 1000 * Z;
const at = (x, y) => [AX + x * Z, AY + y * Z];
export const ROSE = "#D9437E", OLIVE = "#6B9928";
const PHONES = [["Discover", 227, "rotateX(4deg) rotateY(34deg)"], ["Place", 630, "rotateX(6deg) translateZ(16px)"], ["Saved", 1033, "rotateX(4deg) rotateY(-34deg)"]];
const BOOK = [188.5 * 0.8193, 775.6 * 0.8193, 180.8 * 0.8193, 53.8 * 0.8193];
const MIA_PIN = at(870.8, 849.4), NOAH_AREA = [at(1325, 540), 18.5, 62], NOAH_PIN = [NOAH_AREA[0][0] + 18.5, NOAH_AREA[0][1]];
const NOTE_X = 776, NOAH_Y = 372, MIA_Y = 452;
const WINK = { mia: loop(...at(870, 827), 27, -2.1, -0.22, Math.PI * 2 + 0.7), noah: loop(...at(580, 219), 24, -2.4, -0.1, Math.PI * 2 + 0.62) };
const ELLIPSE = (() => { const [[cx, cy], rx, ry] = NOAH_AREA, pts = []; for (let i = 0; i <= 64; i++) { const a = -Math.PI / 2 + (i / 64) * Math.PI * 2.06; pts.push([cx + Math.cos(a) * rx * (1 + 0.03 * Math.sin(3 * a)), cy + Math.sin(a) * ry]); } return pts; })();

function Note({ data, color, who, text, top, children }) {
    return (
        <div data-note={data} className="bz-abs bz-lifted rounded-[11px] px-[11px] pt-[10px] pb-[11px]" style={{ left: NOTE_X, top, width: 208, transformOrigin: "0 19px", opacity: 0 }}>
            <i className="bz-abs block rounded-full" style={{ left: -1.25, top: 19 - 8, width: 2.5, height: 16, background: color }} />
            <div className="flex items-center gap-1.5 text-[12px] font-semibold">
                <span className="grid place-items-center w-[15px] h-[15px] rounded-full text-[8.5px] font-bold text-white" style={{ background: color }}>{who[0]}</span>
                {who}<i className="block w-[5px] h-[5px] rounded-full" style={{ background: "#3FB950" }} />
            </div>
            <div className="mt-1 text-[12.5px] leading-[1.38]">{text}</div>
            {children}
        </div>
    );
}

export function TogetherState({ u, t }) {
    const [, noah, mia] = t.names;
    return (
        <>
            {/* who is here, in the title bar */}
            <div className="bz-abs" style={{ left: 636, top: 14 }}>
                {[[noah, ROSE, 0], [mia, OLIVE, 20]].map(([n, c, x]) => (
                    <div key={n} data-avatar={n} className="bz-abs" style={{ left: x, top: 0, opacity: 0 }}>
                        <i data-avatar-ring className="bz-abs block rounded-full" style={{ inset: -3.5, boxShadow: `0 0 0 1.5px ${c}`, opacity: 0 }} />
                        <span className="grid place-items-center w-6 h-6 rounded-full text-[11.5px] font-bold text-white" style={{ background: c, boxShadow: "0 0 0 2px var(--paper)" }}>{n[0]}</span>
                        <span data-avatar-tag className="bz-abs left-1/2 -translate-x-1/2 h-[19px] px-2 rounded-[9.5px] text-[11px] font-semibold leading-[19px] text-white whitespace-nowrap" style={{ top: 32, background: c, opacity: 0 }}>{n}</span>
                    </div>
                ))}
            </div>
            <LayersPanel u={u} count={8} rows={[{ name: "Presentation", kind: "artboard", open: true }, ...["Place screen", "Place bezel", "Saved screen", "Saved bezel", "Discover screen", "Discover bezel", "Kicker"].map((n) => ({ name: n, kind: n === "Kicker" ? "text" : "rect", depth: 1 }))]} />
            <Canvas rulers={{ origin: [AX, AY], zoom: Z }}>
                {/* where each of them is looking */}
                <div data-pool="noah" className="bz-abs rounded-full" style={{ left: 330, top: 190, width: 420, height: 380, background: `radial-gradient(closest-side, rgb(217 67 126 / 0.2), rgb(217 67 126 / 0.1) 55%, transparent)`, mixBlendMode: "var(--glow-blend)", opacity: 0 }} />
                <div data-pool="mia" className="bz-abs rounded-full" style={{ left: 380, top: 250, width: 400, height: 380, background: `radial-gradient(closest-side, rgb(107 153 40 / 0.2), rgb(107 153 40 / 0.1) 55%, transparent)`, mixBlendMode: "var(--glow-blend)", opacity: 0 }} />
                <Label x={AX} y={AY}>Presentation</Label>
                <div className="bz-abs overflow-hidden" style={{ left: AX, top: AY, width: AW, height: AH, background: "radial-gradient(90% 90% at 50% 35%, #2C5754, #0E2423)", perspective: 900, perspectiveOrigin: "50% 45%" }}>
                    <div className="bz-abs inset-x-0 text-center font-semibold" style={{ top: 70 * Z, fontSize: 20 * Z, lineHeight: `${23 * Z}px`, letterSpacing: "0.3em", color: "rgb(255 255 255 / 0.6)" }}>WANDER · DESIGN REVIEW</div>
                    {PHONES.map(([n, x, tf]) => (
                        <div key={n} className="bz-abs" style={{ left: x * Z, top: 161 * Z, width: 340 * Z, height: 717 * Z, transform: tf, transformStyle: "preserve-3d" }}>
                            <div className="bz-abs inset-0" style={{ borderRadius: 55 * Z, background: "#0D0D0F", boxShadow: `0 ${40 * Z}px ${70 * Z}px rgb(0 0 0 / 0.45)` }} />
                            <div className="bz-abs overflow-hidden" style={{ left: 9 * Z, top: 9 * Z, width: 322 * Z, height: 699 * Z, borderRadius: 46 * Z, background: "#222" }}>
                                <img data-src={`/bezzle-web/img/parts/screen-${n.toLowerCase()}.webp`} alt="" className="bz-abs inset-0 w-full h-full max-w-none" />
                                {n === "Place" && <div data-change className="bz-abs" style={{ left: BOOK[0] * Z, top: BOOK[1] * Z, width: BOOK[2] * Z, height: BOOK[3] * Z, borderRadius: 18 * 0.8193 * Z, background: "rgb(217 67 126 / 0.09)", boxShadow: `0 0 0 2px rgb(217 67 126 / 0.85), 0 0 10px ${ROSE}`, opacity: 0 }} />}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Mia's selection: her outline and her initial */}
                <div data-mia-sel className="bz-abs pointer-events-none" style={{ left: at(639, 170)[0], top: at(639, 170)[1], width: 322 * Z, height: 699 * Z, boxShadow: `inset 0 0 0 1.25px ${OLIVE}`, opacity: 0 }}>
                    <span className="bz-abs grid place-items-center min-w-[15px] h-[15px] px-[3px] rounded-[3.5px] text-[9.5px] font-bold text-white" style={{ left: 0, top: -15, background: OLIVE }}>{mia[0]}</span>
                </div>
                <svg className="bz-abs left-0 top-0 overflow-visible pointer-events-none" width="1280" height="800">
                    {[["mia", OLIVE], ["noah", ROSE]].map(([k, c]) => (
                        <g key={k} data-wink={k}>
                            <path d={pathOf(WINK[k])} fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={pathOf(WINK[k])} fill="none" stroke={c} strokeOpacity="0.94" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    ))}
                    <path data-area d={pathOf(ELLIPSE)} fill="none" stroke={ROSE} strokeWidth="1.4" strokeLinecap="round" />
                    {[["mia", MIA_PIN, [NOTE_X, MIA_Y + 19], OLIVE], ["noah", NOAH_PIN, [NOTE_X, NOAH_Y + 19], ROSE]].map(([k, a, b, c]) => (
                        <g key={k} data-thread={k}>
                            <path d={noteThread(a, b)} fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" data-casing />
                            <path d={noteThread(a, b)} fill="none" stroke={c} strokeOpacity="0.62" strokeWidth="1.1" strokeLinecap="round" data-line />
                        </g>
                    ))}
                </svg>
                {[["mia", MIA_PIN, OLIVE], ["noah", NOAH_PIN, ROSE]].map(([k, [x, y], c]) => (
                    <span key={k} data-pin={k} className="bz-abs block rounded-full bg-white" style={{ left: x - 5.5, top: y - 5.5, width: 11, height: 11, boxShadow: `inset 0 0 0 1.6px ${c}, 0 1px 2px rgb(0 0 0 / 0.25)`, opacity: 0 }}>
                        <i className="bz-abs block rounded-full" style={{ left: 3.75, top: 3.75, width: 3.5, height: 3.5, background: c }} />
                    </span>
                ))}
                <Note data="noah" color={ROSE} who={noah} text={t.notes[2]} top={NOAH_Y} />
                <Note data="mia" color={OLIVE} who={mia} text={t.notes[0]} top={MIA_Y}>
                    <div data-reply className="overflow-hidden" style={{ height: 0 }}>
                        <div className="mt-2.5 pt-2.5 flex gap-1.5" style={{ borderTop: "0.5px solid var(--hairline)" }}>
                            <span className="flex-none grid place-items-center w-[15px] h-[15px] mt-px rounded-full text-[8.5px] font-bold text-white" style={{ background: ROSE }}>{noah[0]}</span>
                            <span className="text-[12px] leading-[1.38]"><b className="font-semibold">{noah}</b> {t.notes[1]}</span>
                        </div>
                    </div>
                </Note>
                <Hand data="noah" color={ROSE} name={noah} />
                <Hand data="mia" color={OLIVE} name={mia} />
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="1600 × 1000 · 0, 0" />
            <Card top={114} glyph="artboard" title={u("Artboard")} summary={u("Slides")} />
            <Card top={162} swatch="radial-gradient(#2C5754, #0E2423)" title={u("Background")} summary="#2C5754 → #0E2423" />
            <AddChips top={216} items={[u("Layout Grid"), u("Dark"), u("Export")]} />
        </>
    );
}

export function playTogether({ q }) {
    const tl = gsap.timeline();
    const hand = (k) => q(`[data-hand="${k}"]`)[0];
    const H = { noah: hand("noah"), mia: hand("mia") };
    // they arrive: avatars pop into the title bar, their name tags drop in and go again
    q("[data-avatar]").forEach((a, i) => {
        tl.fromTo(a, { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, duration: 0.06, ease: "back.out(2.2)" }, 0.01 + i * 0.04);
        const tag = a.querySelector("[data-avatar-tag]");
        tl.fromTo(tag, { opacity: 0, y: -4 }, { opacity: 1, y: 0, duration: 0.04 }, 0.03 + i * 0.04).to(tag, { opacity: 0, duration: 0.04 }, 0.2 + i * 0.03);
    });
    // a hand: its position eases (τ 0.075 s in the app, here a short glide), its name chip drops in as it starts to move
    const move = (k, pts, t0, dur) => {
        const el = H[k];
        tl.set(el, { x: pts[0][0], y: pts[0][1] }, t0);
        pts.slice(1).forEach(([x, y], i) => tl.to(el, { x, y, duration: dur / (pts.length - 1), ease: "sine.inOut" }, t0 + (i * dur) / (pts.length - 1)));
    };
    const show = (k, t0) => {
        tl.fromTo(H[k], { opacity: 0 }, { opacity: 1, duration: 0.03 }, t0);
        tl.fromTo(H[k].querySelector("[data-hand-name]"), { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.04 }, t0 + 0.01);
    };
    tl.fromTo(q('[data-pool="noah"]')[0], { opacity: 0 }, { opacity: 1, duration: 0.12 }, 0.04);
    tl.fromTo(q('[data-pool="mia"]')[0], { opacity: 0 }, { opacity: 1, duration: 0.12 }, 0.1);
    show("noah", 0.04); move("noah", [[360, 660], [420, 420], [470, 316]], 0.04, 0.14);
    show("mia", 0.1); move("mia", [[960, 320], [700, 380], [560, 470]], 0.1, 0.14);
    // Noah's wink on Discover's avatar; Mia selects Place and circles the button
    const wink = (k, t0) => {
        const g = q(`[data-wink="${k}"]`)[0], paths = g.querySelectorAll("path");
        tl.set(g, { opacity: 1 }, t0);
        tl.fromTo(paths, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.06, ease: (x) => 1 - (1 - x) ** 2.2 }, t0);
        tl.to(g, { opacity: 0, duration: 0.06 }, t0 + 0.18);
    };
    gsap.set(q("[data-wink]"), { opacity: 0 });
    tl.to(H.noah, { x: 476, y: 311, duration: 0.035, ease: "sine.inOut", yoyo: true, repeat: 1 }, 0.19);
    wink("noah", 0.19);
    tl.fromTo(q("[data-mia-sel]")[0], { opacity: 0 }, { opacity: 1, duration: 0.02 }, 0.25);
    wink("mia", 0.27);
    tl.to(H.mia, { x: MIA_PIN[0] - 1, y: MIA_PIN[1] - 1, duration: 0.05 }, 0.3);
    // her note: the pin, the thread drawing in, the card unfolding from its end
    const note = (k, t0) => {
        const pin = q(`[data-pin="${k}"]`)[0], th = q(`[data-thread="${k}"]`)[0].querySelectorAll("path"), card = q(`[data-note="${k}"]`)[0];
        tl.fromTo(pin, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.04, ease: "back.out(2)" }, t0);
        tl.fromTo(th, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.07, ease: smooth }, t0 + 0.02);
        tl.fromTo(card, { opacity: 0, scale: 0.94, x: -8 }, { opacity: 1, scale: 1, x: 0, duration: 0.12, ease: cubicOut }, t0 + 0.07);
    };
    note("mia", 0.34);
    // Noah rings the prices on Saved and writes his
    move("noah", [[470, 316], [600, 330], [NOAH_AREA[0][0] + 6, NOAH_AREA[0][1] - 60]], 0.3, 0.1);
    tl.fromTo(q("[data-area]")[0], { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.1, ease: "power1.inOut" }, 0.41);
    move("noah", [[NOAH_AREA[0][0] + 6, NOAH_AREA[0][1] - 60], [NOAH_AREA[0][0] + 20, NOAH_AREA[0][1]], [NOAH_AREA[0][0] - 2, NOAH_AREA[0][1] + 62], [NOAH_AREA[0][0] - 18, NOAH_AREA[0][1]], [NOAH_PIN[0], NOAH_PIN[1]]], 0.41, 0.1);
    note("noah", 0.52);
    tl.to(H.mia, { x: 640, y: 520, duration: 0.12, ease: "sine.inOut" }, 0.5);
    // then answers Mia: her card grows to hold his reply, and his change glows on the button
    const ring = q(`[data-avatar] [data-avatar-ring]`)[0];
    tl.fromTo(ring, { opacity: 0.25 }, { opacity: 1, duration: 0.05, yoyo: true, repeat: 5, ease: "sine.inOut" }, 0.6);
    tl.to(H.noah, { x: NOTE_X + 60, y: MIA_Y + 70, duration: 0.1, ease: "sine.inOut" }, 0.62);
    const reply = q("[data-reply]")[0];
    tl.to(reply, { height: () => reply.scrollHeight, duration: 0.1, ease: cubicOut }, 0.7);
    const change = q("[data-change]")[0];
    tl.fromTo(change, { opacity: 0 }, { opacity: 1, duration: 0.02, immediateRender: false }, 0.78).to(change, { opacity: 0, duration: 0.18, ease: (x) => 1 - (1 - x) ** 2 }, 0.8);
    tl.to(H.noah, { x: 560, y: 520, duration: 0.14, ease: "sine.inOut" }, 0.76);
    tl.to(H.mia, { x: 470, y: 300, duration: 0.18, ease: "sine.inOut" }, 0.78);
    return tl;
}
