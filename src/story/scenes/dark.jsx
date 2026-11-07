/*
 * Dark looks: Wander Night, its three screens at 36 %, Place selected. "+ Dark" in the add bar, and
 * the wash (StyleMarks 86–209): from the artboard's top-right corner a radial front carries the old
 * light look away, 36 pt soft at its edge, fast enough to reach the far corner within 0.55 s, a faint
 * pencil ring riding on it, the artboard glowing (rise 0.11 s, fall 0.62 s). The Dark card takes the
 * chip's place, its moon popping in, the sun | moon pair beside it (DarkCard 8–143). Then the offer,
 * "A light one beside it · Add": a light twin lands 76 pt right of the row, a pencil glow running to it
 * from the original's right edge (StyleOperations 373–387).
 */
import { gsap } from "gsap";
import { Canvas, Card, Label, LayersPanel, Selection, Pointer, Icon } from "@/app/Kit";
import { THEME, cubicOut, spot, tip, click } from "@/story/engine";

const Z = 0.36, W = 393 * Z, H = 852 * Z, TOP = 270;
const XS = [330, 330 + 469 * Z, 330 + 938 * Z], TWIN = 330 + 1407 * Z;
const PLACE = XS[1];
const SHOTS = ["discover", "place", "saved"];
/** The moment the page follows the artboard into the dark, in the scene's own time. */
export const DARK_AT = 0.36;

function Chip({ children, data }) {
    return <span data-chip={data} className="flex items-center gap-[5px] h-7 px-2.5 rounded-[8px] text-[12px] whitespace-nowrap" style={{ color: "var(--ink-2)", outline: "1px dashed rgb(var(--ink-rgb) / 0.16)", outlineOffset: -1 }}><b className="text-[11px]">+</b>{children}</span>;
}

export function DarkState({ u }) {
    return (
        <>
            <LayersPanel u={u} count={142} rows={[
                { name: "Saved", kind: "artboard", open: false }, { name: "Place", kind: "artboard", open: true, on: true },
                ...["Home indicator", "Book button", "Per person", "Price", "Bottom bar", "About text", "About", "Fact 3", "Fact 2", "Fact 1", "Reviews", "Place title", "Hero"].map((n) => ({ name: n, depth: 1, kind: /Price|Per|About$|Reviews|title/.test(n) ? "text" : n === "Book button" ? "group" : "rect" })),
                { name: "Discover", kind: "artboard", open: false },
            ]} />
            <Canvas rulers={{ origin: [PLACE, TOP], zoom: Z, band: [PLACE, PLACE + W], bandY: [TOP, TOP + H] }}>
                {SHOTS.map((k, i) => (
                    <div key={k}>
                        <Label x={XS[i]} y={TOP} on={i === 1}>{k[0].toUpperCase() + k.slice(1)}</Label>
                        <div data-board={k} className="bz-abs overflow-hidden" style={{ left: XS[i], top: TOP, width: W, height: H, boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }}>
                            <img data-src={`/img/parts/wander-${k}-dark.webp`} alt="" className="bz-abs inset-0 w-full h-full max-w-none" />
                            <img data-light={k} data-src={`/img/parts/wander-${k}.webp`} alt="" className="bz-abs inset-0 w-full h-full max-w-none" />
                        </div>
                    </div>
                ))}
                {/* the front's pencil ring, clipped to the artboard */}
                <div className="bz-abs overflow-hidden pointer-events-none" style={{ left: PLACE, top: TOP, width: W, height: H }}>
                    <i data-front className="bz-abs block rounded-full" style={{ left: W, top: 0, width: 0, height: 0, boxShadow: "0 0 0 1.5px rgb(var(--cpencil-rgb) / 0.16), 0 0 0 14px rgb(var(--cpencil-rgb) / 0.05)", opacity: 0 }} />
                </div>
                <div data-glow="place" className="bz-abs pointer-events-none" style={{ left: PLACE - 1, top: TOP - 1, width: W + 2, height: H + 2, boxShadow: "0 0 0 2px var(--cpencil), 0 0 26px rgb(var(--cpencil-rgb) / 0.75)", opacity: 0 }} />
                <Selection x={PLACE} y={TOP} w={W} h={H} data="dark" />
                {/* the light twin */}
                <div data-twin className="bz-abs" style={{ left: TWIN, top: TOP, width: W, height: H, opacity: 0 }}>
                    <div className="bz-abs text-[11px] font-medium whitespace-nowrap" style={{ left: 0, top: -17, color: "var(--label)" }}>Place Light</div>
                    <img data-src="/img/parts/wander-place.webp" alt="" className="bz-abs inset-0 w-full h-full max-w-none" style={{ boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }} />
                    <div data-twin-glow className="bz-abs inset-0" style={{ boxShadow: "0 0 0 2px var(--cpencil), 0 0 26px rgb(var(--cpencil-rgb) / 0.75)", opacity: 0 }} />
                </div>
                <svg className="bz-abs left-0 top-0 overflow-visible pointer-events-none" width="1280" height="800">
                    <g data-wave opacity="0">
                        <line data-wave-line x1={PLACE + W} y1={TOP + H / 2} x2={PLACE + W} y2={TOP + H / 2} stroke="rgb(var(--cpencil-rgb) / 0.18)" strokeWidth="10" strokeLinecap="round" />
                        <line data-wave-line x1={PLACE + W} y1={TOP + H / 2} x2={PLACE + W} y2={TOP + H / 2} stroke="var(--cpencil)" strokeWidth="2" strokeLinecap="round" />
                    </g>
                </svg>
                {/* the offer, under the artboard */}
                <div data-offer className="bz-abs flex items-center gap-2 h-8 pl-3 pr-1 rounded-full whitespace-nowrap" style={{ left: PLACE + W / 2, top: TOP + H + 16, transform: "translateX(-50%)", background: "var(--card)", boxShadow: "0 4px 14px rgb(var(--shadow-rgb) / 0.22), 0 0 0 0.5px var(--hairline)", opacity: 0 }}>
                    <Icon name="sun" size={13} style={{ color: "var(--ink-2)" }} />
                    <span className="text-[12px] font-medium">{u("A light one beside it")}</span>
                    <span data-add-light className="h-6 px-3 rounded-full text-[12px] font-semibold leading-6" style={{ background: "var(--pencil)", color: "var(--on-ink)" }}>{u("Add")}</span>
                </div>
            </Canvas>
            <Card top={66} glyph="phone" title={u("Frame")} summary="393 × 852 · 470, 0" />
            <Card top={114} glyph="phone" title={u("Artboard")} summary="iPhone 16" />
            <Card top={162} swatch="#F9F8F6" title={u("Background")} summary="Off-white" />
            {/* the Dark card, taking the chip's place */}
            <div data-darkcard className="bz-abs bz-card rounded-[12px] flex items-center h-10 pl-[9px] pr-1.5 gap-1.5" style={{ left: 1014, top: 210, width: 248, opacity: 0 }}>
                <span data-moon className="grid place-items-center w-[22px] h-[22px]" style={{ color: "var(--ink-2)" }}><Icon name="moon" size={15} /></span>
                <span className="text-[12.5px] font-semibold">{u("Dark")}</span>
                <span className="ml-auto bz-well relative flex p-0.5 rounded-[8px]">
                    <i data-pair className="bz-abs block bz-card rounded-[6px]" style={{ left: 2, top: 2, width: 28, height: 20 }} />
                    <span className="relative grid place-items-center w-7 h-5" style={{ color: "var(--ink-2)" }}><Icon name="sun" size={12} /></span>
                    <span className="relative grid place-items-center w-7 h-5"><Icon name="moon" size={12} /></span>
                </span>
            </div>
            <div data-chips className="bz-abs flex flex-wrap gap-1.5" style={{ left: 1014, top: 216, width: 248 }}>
                <Chip>{u("Layout Grid")}</Chip><Chip data="dark">{u("Dark")}</Chip><Chip>{u("Export")}</Chip>
            </div>
            <Pointer data="dark" />
        </>
    );
}

export function playDark({ q }) {
    const tl = gsap.timeline(), p = q('[data-pointer="dark"]')[0];
    const chip = q('[data-chip="dark"]')[0], chips = q("[data-chips]")[0], card = q("[data-darkcard]")[0];
    const light = q('[data-light="place"]')[0], front = q("[data-front]")[0], glow = q('[data-glow="place"]')[0];
    const offer = q("[data-offer]")[0], add = q("[data-add-light]")[0], twin = q("[data-twin]")[0], wave = q("[data-wave]")[0];
    const at = (el) => tip(spot(el, 0.5, 0.55));
    tl.fromTo(p, { opacity: 0, x: 880, y: 600 }, { opacity: 1, ...at(chip), duration: 0.13, ease: "power2.inOut" }, 0.01);
    tl.set(chip, { outlineColor: "rgb(var(--ink-rgb) / 0.3)", color: "var(--ink)" }, 0.12);
    click(tl, p, 0.145);
    // the wash: a radial front out of the top-right corner, the old light look carried away under it
    const far = Math.hypot(W, H), R = { v: 0 };
    tl.to(R, { v: 1, duration: 0.15, ease: "none", onUpdate: () => {
        const r = R.v * (far + 14), m = `radial-gradient(circle at 100% 0%, transparent ${r - 6.5}px, #000 ${r + 6.5}px)`;
        light.style.maskImage = m; light.style.webkitMaskImage = m;
        Object.assign(front.style, { left: `${W - r}px`, top: `${-r}px`, width: `${2 * r}px`, height: `${2 * r}px` });
    } }, 0.16);
    tl.fromTo(front, { opacity: 0 }, { opacity: 1, duration: 0.01 }, 0.16).to(front, { opacity: 0, duration: 0.03 }, 0.29);
    tl.fromTo(glow, { opacity: 0 }, { opacity: 0.55, duration: 0.03, ease: "power2.out" }, 0.16).to(glow, { opacity: 0, duration: 0.17, ease: "power2.in" }, 0.19);
    // the card takes the chip's place, its moon popping in; the chips make way
    tl.to(chip, { opacity: 0, scale: 0.9, duration: 0.03 }, 0.18);
    tl.to(chip, { width: 0, paddingLeft: 0, paddingRight: 0, marginRight: -6, duration: 0.06, ease: THEME.spring }, 0.2);
    tl.to(chips, { y: 48, duration: 0.07, ease: THEME.spring }, 0.19);
    tl.fromTo(card, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.07, ease: THEME.open }, 0.2);
    tl.fromTo(q("[data-moon]")[0], { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.08, ease: THEME.pop }, 0.22);
    tl.fromTo(q("[data-pair]")[0], { x: 0 }, { x: 28, duration: 0.08, ease: THEME.spring }, 0.22);
    // the offer
    tl.fromTo(offer, { opacity: 0, y: -6, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.08, ease: THEME.pop }, 0.42);
    tl.to(p, { ...at(add), duration: 0.12, ease: "power2.inOut" }, 0.48);
    click(tl, p, 0.61);
    tl.to(offer, { opacity: 0, scale: 0.97, duration: 0.04, ease: "power1.in" }, 0.64);
    tl.set(twin, { opacity: 1 }, 0.645);
    tl.fromTo(q("[data-wave-line]"), { attr: { x2: PLACE + W } }, { attr: { x2: TWIN }, duration: 0.07, ease: cubicOut, immediateRender: false }, 0.645);
    tl.fromTo(wave, { opacity: 0 }, { opacity: 0.9, duration: 0.02, immediateRender: false }, 0.645).to(wave, { opacity: 0, duration: 0.08 }, 0.7);
    tl.fromTo(q("[data-twin-glow]")[0], { opacity: 0 }, { opacity: 0.6, duration: 0.03, immediateRender: false }, 0.69).to(q("[data-twin-glow]")[0], { opacity: 0, duration: 0.18, ease: "power2.in" }, 0.72);
    tl.to(p, { x: "+=60", y: "+=90", opacity: 0, duration: 0.1 }, 0.72);
    return tl;
}
