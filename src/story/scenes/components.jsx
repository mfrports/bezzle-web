/*
 * Components: Wander's Explore page, six copies of one Place card. One is selected (its outline
 * violet, the "◆ Place card · Default" tag above it, the other copies dashed in violet at 0.42,
 * ComponentTool 256–299). Its corner dot is dragged in and that copy rounds as you drag. Let go,
 * and the change runs to every copy (ComponentTool 93–249): one circle of light grows out of the
 * edited copy at 1700 pt/s, and as it reaches each copy that copy takes the new corners, glows and
 * rings once. Then the offer: "All 6 copies · Only This Copy · New Variant".
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Pointer } from "@/app/Kit";
import { plural } from "@/app/words";
import { THEME, stiff, smooth, glide, click } from "@/story/engine";

export const PLACES = [["lysefjord", "Lysefjord", "Rogaland, Norway", "4.9"], ["hallstatt", "Hallstatt", "Salzkammergut, Austria", "4.8"],
    ["neuschwanstein", "Neuschwanstein", "Schwangau, Bavaria", "4.8"], ["yosemite", "Yosemite", "California, USA", "4.9"],
    ["grand-canyon", "Grand Canyon", "Arizona, USA", "4.7"], ["seljalandsfoss", "Seljalandsfoss", "South Iceland", "4.9"]];
const CARD = [208, 146], AT = (i) => [317 + (i % 3) * 224, 340 + Math.floor(i / 3) * 158];
const R0 = 10, R1 = 28, ARRIVE = stiff(260, 17);
const HEART = <svg viewBox="0 0 16 16" width="10" height="10"><path d="M8 13.6S2.2 10.2 2.2 6.1A2.9 2.9 0 0 1 8 4.4a2.9 2.9 0 0 1 5.8 1.7C13.8 10.2 8 13.6 8 13.6z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>;

/** A Place card: its photo, the rating, the heart, the name and the region; its corners are the component's. */
function Place({ p: [pic, name, where, rate], i }) {
    return (
        <div data-copy={i} className="bz-abs inset-0 overflow-hidden" style={{ borderRadius: R0 }}>
            <img data-src={`/bezzle-web/img/parts/${pic}.webp`} alt="" className="bz-abs inset-0 w-full h-full object-cover max-w-none" />
            <div className="bz-abs inset-0" style={{ background: "linear-gradient(to bottom, rgb(0 0 0 / 0) 45%, rgb(0 0 0 / 0.55))" }} />
            <span className="bz-abs h-[15px] px-1.5 rounded-full text-[7px] font-bold leading-[15px] text-white" style={{ left: 10, top: 9, background: "rgb(255 255 255 / 0.28)" }}>★ {rate}</span>
            <span className="bz-abs grid place-items-center w-[18px] h-[18px] rounded-full" style={{ right: 9, top: 8, background: "rgb(255 255 255 / 0.3)" }}>{HEART}</span>
            <b className="bz-abs text-white text-[13.5px] font-bold leading-none tracking-[-0.01em]" style={{ left: 12, bottom: 21 }}>{name}</b>
            <small className="bz-abs text-[7.5px] font-semibold leading-none" style={{ left: 12, bottom: 9, color: "rgb(255 255 255 / 0.88)" }}>⌖ {where}</small>
        </div>
    );
}

export function ComponentsState({ u, code }) {
    const rows = [...PLACES.map((p, i) => ({ name: "Place card", kind: "component", open: false, on: i === 0 })), ...["Subhead", "Headline", "Avatar", "Plan label", "Plan button", "Nav trips", "Nav saved", "Nav discover", "Logo"].map((n) => ({ name: n, kind: n === "Avatar" ? "ellipse" : n === "Plan button" ? "rect" : "text" }))];
    return (
        <>
            <LayersPanel u={u} crumb="Explore" count={75} rows={rows} />
            <Canvas rulers={{ origin: [317, 340], zoom: 0.5, band: [317, 525], bandY: [340, 486] }}>
                <Label x={312} y={207}>Explore</Label>
                {/* the page: Wander's web artboard, 1440 wide at 50 % */}
                <div className="bz-abs" style={{ left: 312, top: 207, width: 720, height: 449, background: "#F9F8F6", boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }}>
                    <b className="bz-abs text-[13px] font-extrabold tracking-[-0.02em]" style={{ left: 5, top: 22, color: "#1C1B19" }}>wander</b>
                    <div className="bz-abs flex gap-5 text-[7.5px] font-semibold" style={{ left: 413, top: 26, color: "#1C1B19" }}><span>Discover</span><span style={{ opacity: 0.5 }}>Saved</span><span style={{ opacity: 0.5 }}>My trips</span></div>
                    <span className="bz-abs h-[22px] px-4 rounded-[7px] text-[7.5px] font-bold leading-[22px] text-white" style={{ left: 563, top: 17, background: "#E2653D" }}>Plan a trip</span>
                    <img data-src="/bezzle-web/img/parts/lea.webp" alt="" className="bz-abs rounded-full object-cover" style={{ left: 640, top: 16, width: 24, height: 24 }} />
                    <b className="bz-abs text-[26px] font-bold tracking-[-0.02em]" style={{ left: 5, top: 66, color: "#1C1B19" }}>Where to next?</b>
                    <span className="bz-abs text-[9.5px]" style={{ left: 5, top: 106, color: "rgb(28 27 25 / 0.6)" }}>Hand-picked places for your next long weekend.</span>
                </div>
                {PLACES.map((pl, i) => {
                    const [x, y] = AT(i);
                    return (
                        <div key={pl[0]}>
                            <div data-glow={i} className="bz-abs" style={{ left: x - 2, top: y - 2, width: CARD[0] + 4, height: CARD[1] + 4, borderRadius: R0 + 2, boxShadow: "0 0 0 2px var(--linked), 0 0 24px rgb(var(--linked-rgb) / 0.85)", background: "rgb(var(--linked-rgb) / 0.1)", opacity: 0 }} />
                            <div className="bz-abs" style={{ left: x, top: y, width: CARD[0], height: CARD[1] }}><Place p={pl} i={i} /></div>
                            {i > 0 && <div data-dash={i} className="bz-abs" style={{ left: x - 2, top: y - 2, width: CARD[0] + 4, height: CARD[1] + 4, borderRadius: R0 + 2, outline: "1px dashed rgb(var(--linked-rgb) / 0.42)", opacity: 0 }} />}
                            <div data-ping={i} className="bz-abs" style={{ left: x - 2, top: y - 2, width: CARD[0] + 4, height: CARD[1] + 4, borderRadius: R1 + 2, boxShadow: "0 0 0 1.5px rgb(var(--linked-rgb) / 0.6)", opacity: 0 }} />
                        </div>
                    );
                })}
                <svg className="bz-abs left-0 top-0 overflow-visible pointer-events-none" width="1280" height="800">
                    <defs><radialGradient id="bz-light"><stop offset="0.86" stopColor="rgb(118 80 216)" stopOpacity="0" /><stop offset="0.97" stopColor="rgb(118 80 216)" stopOpacity="0.22" /><stop offset="1" stopColor="rgb(118 80 216)" stopOpacity="0" /></radialGradient></defs>
                    <circle data-light cx={421} cy={413} r="0" fill="url(#bz-light)" opacity="0" />
                    <circle data-wave cx={421} cy={413} r="0" fill="none" stroke="var(--linked)" strokeWidth="1.5" opacity="0" />
                </svg>
                {/* the selected copy: its outline and handles in violet, its tag above it, the corner dot */}
                <div data-pick className="bz-abs" style={{ left: 317, top: 340, width: CARD[0], height: CARD[1], opacity: 0 }}>
                    <div data-pick-edge className="bz-abs inset-0" style={{ boxShadow: "inset 0 0 0 1px var(--linked)", borderRadius: R0 }} />
                    {[[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [0, 0.5]].map(([a, b], j) => <i key={j} className="bz-abs block w-2 h-2 -ml-1 -mt-1 bg-white" style={{ left: `${a * 100}%`, top: `${b * 100}%`, boxShadow: "inset 0 0 0 1px var(--linked), 0 -0.5px 1.5px rgb(0 0 0 / 0.18)" }} />)}
                    <div className="bz-abs flex items-center gap-[5px] text-[10.5px] font-medium whitespace-nowrap" style={{ left: 0, top: -16, color: "var(--linked)" }}><i className="block w-[7px] h-[7px] rotate-45 rounded-[1px]" style={{ background: "var(--linked)" }} />Place card  ·  {u("Default")}</div>
                    <i data-dot className="bz-abs block w-[8px] h-[8px] -ml-1 -mt-1 rounded-full bg-white" style={{ left: 13, top: 13, boxShadow: "0 0 0 1.25px var(--linked), 0 1px 2px rgb(0 0 0 / 0.2)" }} />
                    <span data-radius className="bz-abs h-5 px-[7px] rounded-[6px] text-[11px] font-medium leading-5 text-white whitespace-nowrap bz-num" style={{ left: 30, top: 30, background: "var(--linked)", opacity: 0 }}>{u("Corners")} <span data-radius-v>{R0}</span></span>
                </div>
                {/* after a change that spreads: the offer */}
                <div data-offer className="bz-abs flex items-center gap-1 h-7 p-1 rounded-full" style={{ left: 330, top: 300, background: "var(--card)", boxShadow: "0 3px 12px rgb(0 0 0 / 0.2)", opacity: 0 }}>
                    <span data-all className="h-5 px-2.5 rounded-full text-[11.5px] font-semibold leading-5 text-white" style={{ background: "var(--linked)" }}>{plural(code)("copies", 6)}</span>
                    <span className="h-5 px-2.5 rounded-full text-[11.5px] font-semibold leading-5" style={{ background: "rgb(var(--linked-rgb) / 0.08)", color: "var(--linked)" }}>{u("Only This Copy")}</span>
                    <span className="h-5 px-2.5 rounded-full text-[11.5px] font-semibold leading-5" style={{ background: "rgb(var(--linked-rgb) / 0.08)", color: "var(--linked)" }}>{u("New Variant")}</span>
                </div>
                <Pointer data="components" />
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="416 × 292 · 64, 268" />
            <Card top={114} glyph="component" glyphColor="var(--linked)" title={u("Component")} summary="1 / 6" lifted>
                <div className="px-3 pb-3 pt-1">
                    <div className="bz-well h-7 rounded-[7px] px-2 text-[12.5px] leading-7">Place card</div>
                    <div className="grid grid-cols-3 gap-2 mt-2.5">
                        {[["Default", true], ["Saved", false]].map(([v, on]) => (
                            <div key={v} className="text-center">
                                <div data-variant={v} className="h-11 overflow-hidden" style={{ borderRadius: 7, boxShadow: on ? "0 0 0 2px var(--linked)" : "0 0 0 1px var(--hairline)" }}><img data-src="/bezzle-web/img/parts/lysefjord.webp" alt="" className="w-full h-full object-cover" /></div>
                                <div className="mt-1 text-[11px]" style={{ color: on ? "var(--linked)" : "var(--ink-2)" }}>{u(v)}</div>
                            </div>
                        ))}
                        <div className="text-center"><div className="h-11 rounded-[7px] grid place-items-center text-[16px]" style={{ outline: "1px dashed var(--ink-4)", outlineOffset: -1, color: "var(--ink-3)" }}>+</div><div className="mt-1 text-[11px]" style={{ color: "var(--ink-2)" }}>{u("New Variant")}</div></div>
                    </div>
                </div>
            </Card>
            <Card top={286} glyph="corners" title={u("Corners")} summary={String(R0)} data="comp-corners" />
            <AddChips top={340} items={[u("Shadow"), u("Blur"), "3D", u("Export"), u("Repeat")]} />
        </>
    );
}

export function playComponents({ q }) {
    const tl = gsap.timeline(), p = q('[data-pointer="components"]')[0];
    const pick = q("[data-pick]")[0], edge = q("[data-pick-edge]")[0], dot = q("[data-dot]")[0], dashes = q("[data-dash]"), offer = q("[data-offer]")[0];
    const copies = q("[data-copy]"), corners = q('[data-card="comp-corners"] [data-summary]')[0], pill = q("[data-radius]")[0], pillV = q("[data-radius-v]")[0];
    const variant = q('[data-variant="Default"]')[0];
    // pick the first copy: its outline, its tag, and the other copies dashed
    tl.fromTo(p, { opacity: 0, x: 560, y: 720 }, { opacity: 1, duration: 0.04 }, 0);
    glide(tl, p, [430, 430], 0, 0.11);
    click(tl, p, 0.11);
    tl.to(pick, { opacity: 1, duration: 0.02 }, 0.12);
    tl.to(dashes, { opacity: 1, duration: 0.05, stagger: 0.01 }, 0.125);
    // the corner dot, dragged in: only this copy rounds, live, its value in a pill beside it
    glide(tl, p, [330, 353], 0.16, 0.08);
    tl.to(pill, { opacity: 1, duration: 0.02 }, 0.25);
    const r = { v: R0 };
    tl.to(r, { v: R1, duration: 0.15, ease: "power1.inOut", onUpdate: () => {
        const v = r.v, k = (v - R0) / (R1 - R0);
        copies[0].style.borderRadius = edge.style.borderRadius = `${v}px`;
        variant.style.borderRadius = `${7 + 8 * k}px`;
        corners.textContent = pillV.textContent = String(Math.round(v));
        dot.style.left = dot.style.top = `${13 + 9 * k}px`;
        pill.style.left = pill.style.top = `${30 + 9 * k}px`;
    } }, 0.25);
    tl.to(p, { x: 339 - 2.5, y: 362 - 2.2, duration: 0.15, ease: "power1.inOut" }, 0.25);
    tl.to(pill, { opacity: 0, duration: 0.03 }, 0.41);
    // let go: the light runs out from the copy, 1700 pt/s, and each copy takes the new corners as it arrives
    const LIGHT = 0.42, REACH = 820, light = q("[data-light]")[0], wave = q("[data-wave]")[0];
    tl.to(dashes, { opacity: 0, duration: 0.03 }, LIGHT);
    tl.fromTo([wave, light], { attr: { r: 0 }, opacity: 1 }, { attr: { r: REACH }, duration: 0.3, ease: "none", immediateRender: false }, LIGHT);
    tl.to([wave, light], { opacity: 0, duration: 0.1, ease: "power1.in" }, LIGHT + 0.2);
    const [ox, oy] = [421, 413];
    for (let i = 1; i < 6; i++) {
        const [x, y] = AT(i), d = Math.hypot(x + 104 - ox, y + 73 - oy), at = LIGHT + 0.3 * (Math.max(0, d - 90) / REACH);
        tl.fromTo(copies[i], { borderRadius: R0 }, { borderRadius: R1, duration: 0.12, ease: ARRIVE, immediateRender: false }, at);
        const glow = q(`[data-glow="${i}"]`)[0], ping = q(`[data-ping="${i}"]`)[0];
        tl.fromTo(glow, { opacity: 0, borderRadius: R0 + 2 }, { opacity: 1, borderRadius: R1 + 2, duration: 0.04, ease: smooth, immediateRender: false }, at);
        tl.to(glow, { opacity: 0, duration: 0.16, ease: "power2.out" }, at + 0.06);
        tl.fromTo(ping, { opacity: 0.6, scale: 1 }, { opacity: 0, scale: 1.1, duration: 0.18, ease: smooth, immediateRender: false }, at);
        tl.set(q(`[data-dash="${i}"]`)[0], { borderRadius: R1 + 2 }, at);
    }
    // the offer: everywhere, only here, or a variant of its own
    tl.to(dashes, { opacity: 1, duration: 0.05 }, 0.74);
    tl.fromTo(offer, { opacity: 0, scale: 0.85, y: 8 }, { opacity: 1, scale: 1, y: 0, duration: 0.12, ease: THEME.pop }, 0.76);
    glide(tl, p, [358, 314], 0.8, 0.09);
    click(tl, p, 0.9);
    tl.to(q("[data-all]")[0], { scale: 0.94, duration: 0.012, yoyo: true, repeat: 1 }, 0.9);
    tl.to(offer, { opacity: 0, scale: 0.95, duration: 0.04, ease: "power1.in" }, 0.94);
    tl.to(dashes, { opacity: 0, duration: 0.04 }, 0.94);
    return tl;
}
