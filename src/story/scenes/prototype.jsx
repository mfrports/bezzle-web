/*
 * Prototypes: Wander in Prototype mode. The canvas turns to graph paper (FlowTool 728–771: pencil
 * ruling at 0.075, every fifth line 0.17), the threads draw in as a wave from the start screen
 * (0.26 s a step, a bead at the tip), each a cubic in pencil over a white casing, a dot where it
 * leaves and an open chevron where it arrives, its note hung on a white plate in Bradley Hand.
 * Then Play: the player's stage, the screen flying from the canvas into the device (spring 0.52/0.82),
 * and the pushes between screens, critically damped (x = 1 − (1 + 15t)e^(−15t), the old screen moving
 * 28 % the other way and dimming), the note under the device written in from the left.
 */
import { gsap } from "gsap";
import { Canvas, LayersPanel, Pointer } from "@/app/Kit";
import { PLACE_ROWS, SCREENS } from "@/story/scenes/files";
import { push, spring, thread } from "@/story/engine";

export function GraphPaper({ step = 18, fade }) {
    const minor = `linear-gradient(rgb(var(--cpencil-rgb) / 0.075) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--cpencil-rgb) / 0.075) 1px, transparent 1px)`;
    const major = `linear-gradient(rgb(var(--cpencil-rgb) / 0.17) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--cpencil-rgb) / 0.17) 1px, transparent 1px)`;
    return <div data-paper className="bz-abs inset-0" style={{ backgroundImage: `${major}, ${minor}`, backgroundSize: `${step * 5}px ${step * 5}px, ${step * 5}px ${step * 5}px, ${step}px ${step}px, ${step}px ${step}px`, backgroundPosition: "-1px -1px", ...(fade ? { maskImage: fade, WebkitMaskImage: fade } : {}) }} />;
}
const TOP = 221, AT = { Discover: 310, Place: 547, Saved: 784 };
// card → Place, Book → Saved, and the Back hook on Place
const THREADS = [
    { from: [494, 416], to: [547, 416], note: "Open a place", noteAt: [520, 397] },
    { from: [731, 621], to: [784, 621], note: "After booking", noteAt: [757, 602] },
];

export function PrototypeState({ u }) {
    return (
        <>
            <LayersPanel u={u} count={238} rows={PLACE_ROWS.slice(0, 12).map((r, i) => ({ ...r, on: false }))} />
            <Canvas rulers={false} grid={<GraphPaper />}>
                {SCREENS.map(([name, pic]) => (
                    <div key={name}>
                        <div className="bz-abs text-[11px] font-medium" style={{ left: AT[name], top: TOP - 17, color: "var(--label)" }}>{name}</div>
                        <img data-src={`/img/parts/${pic}.webp`} alt="" className="bz-abs" style={{ left: AT[name], top: TOP, width: 197, height: 427, boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }} />
                    </div>
                ))}
                <div className="bz-abs grid place-items-center w-5 h-5 rounded-[5px] text-white" style={{ left: 286, top: 233, background: "var(--cpencil)" }}><svg viewBox="0 0 10 10" width="8" height="8"><path d="M2.5 1.5v7L8.5 5z" fill="currentColor" /></svg></div>
                <svg className="bz-abs left-0 top-0 overflow-visible" width="1280" height="800">
                    {THREADS.map((t, i) => (
                        <g key={i} data-thread={i}>
                            <path d={thread(t.from, t.to)} fill="none" stroke="rgb(255 255 255 / 0.95)" strokeWidth="4.8" strokeLinecap="round" data-casing />
                            <path d={thread(t.from, t.to)} fill="none" stroke="var(--cpencil)" strokeWidth="1.8" strokeLinecap="round" data-line />
                            <circle cx={t.from[0]} cy={t.from[1]} r="3.2" fill="var(--cpencil)" data-start />
                            <path d={`M${t.to[0] - 6} ${t.to[1] - 4} L${t.to[0]} ${t.to[1]} L${t.to[0] - 6} ${t.to[1] + 4}`} fill="none" stroke="var(--cpencil)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-head />
                        </g>
                    ))}
                    {/* Back: a short dashed hook curling left out of the back button */}
                    <path data-hook d="M566 262 C552 262 548 248 556 240" fill="none" stroke="var(--cpencil)" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" />
                </svg>
                {THREADS.map((t, i) => (
                    <div key={i} data-tag={i} className="bz-abs bz-hand text-[14px] leading-none px-2 py-[3px] rounded-[5px] whitespace-nowrap" style={{ left: t.noteAt[0], top: t.noteAt[1], transform: "translate(-50%, -50%)", color: "#2F4FB5", background: "#FFFEFB", boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.12), 0 1.5px 4px rgb(0 0 0 / 0.12)" }}>{t.note}</div>
                ))}
            </Canvas>
            {/* the player: a paper well over the window, graph paper fading out from its middle */}
            <div data-player className="bz-abs overflow-hidden rounded-[12px]" style={{ left: 9, top: 52, right: 9, bottom: 9, background: "var(--paper)", boxShadow: "inset 0 0 0 0.5px var(--hairline), inset 0 1px 2px rgb(var(--shadow-rgb) / 0.2)", opacity: 0, visibility: "hidden" }}>
                <GraphPaper step={9} fade="radial-gradient(closest-side at 50% 45%, #000 20%, transparent 100%)" />
                <div className="bz-abs inset-0" style={{ background: "radial-gradient(40% 40% at 50% 32%, rgb(255 255 255 / 0.5), transparent)", mixBlendMode: "soft-light" }} />
                <div className="bz-abs flex gap-2" style={{ right: 16, top: 16 }}>{["‹", "↻", "×"].map((g) => <span key={g} className="bz-card grid place-items-center w-8 h-8 rounded-full text-[15px]" style={{ color: "var(--ink-2)" }}>{g}</span>)}</div>
                <div data-device className="bz-abs" style={{ left: 500, top: 66, width: 262, height: 566, borderRadius: 44, background: "#1D1D1F", padding: 8, boxShadow: "inset 0 0 0 1.4px #4A4A4E, inset 0 0 0 3px #121214, 0 24px 34px rgb(0 0 0 / 0.22), 0 2px 4px rgb(0 0 0 / 0.18)" }}>
                    <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 37, background: "#fff" }}>
                        {["discover", "place", "saved"].map((k, i) => <img key={k} data-pscreen={k} data-src={`/img/parts/wander-${k}.webp`} alt="" className="bz-abs inset-0 w-full h-full max-w-none" />)}
                        <i className="bz-abs block left-1/2 -ml-[38px] top-[11px] w-[76px] h-[22px] rounded-full bg-black" />
                        <i data-ptap className="bz-abs block w-[34px] h-[34px] -ml-[17px] -mt-[17px] rounded-full" style={{ background: "rgb(28 27 25 / 0.2)", boxShadow: "0 0 0 1.5px rgb(255 255 255 / 0.8)", opacity: 0 }} />
                    </div>
                </div>
                <div className="bz-abs inset-x-0 text-center" style={{ top: 650 }}>
                    <div data-pnote className="bz-hand text-[21px]" style={{ color: "#2F4FB5", clipPath: "inset(0 100% 0 0)" }}>Open a place</div>
                    <div data-pname className="mt-1 text-[11.5px] font-medium" style={{ color: "var(--ink-3)" }}>Discover</div>
                </div>
            </div>
            <Pointer data="prototype" />
        </>
    );
}

export function playPrototype({ q }) {
    const tl = gsap.timeline();
    // the threads draw in, a wave from the start screen
    q("[data-thread]").forEach((g, i) => {
        const line = g.querySelector("[data-line]"), casing = g.querySelector("[data-casing]");
        tl.fromTo([casing, line], { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.12, ease: "power3.out" }, 0.02 + i * 0.07);
        tl.fromTo(g.querySelectorAll("[data-head], [data-start]"), { opacity: 0 }, { opacity: 1, duration: 0.03 }, 0.02 + i * 0.07 + (i ? 0.1 : 0));
        tl.fromTo(q(`[data-tag="${i}"]`)[0], { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.05 }, 0.1 + i * 0.07);
    });
    tl.fromTo(q("[data-hook]")[0], { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.06 }, 0.12);
    // Play
    const p = q('[data-pointer="prototype"]')[0], player = q("[data-player]")[0], device = q("[data-device]")[0];
    tl.fromTo(p, { opacity: 0, x: 980, y: 300 }, { opacity: 1, x: 1222, y: 27, duration: 0.12, ease: "power2.inOut" }, 0.2);
    tl.to(p, { scale: 0.82, duration: 0.02 }, 0.33).to(p, { scale: 1, duration: 0.03 }, 0.35);
    tl.fromTo(player, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.36);
    // the screen flies from its place on the canvas into the device
    // from Discover's rect on the canvas (its centre 408, 434) to the device's (640, 401), 197 of its 262 wide
    tl.fromTo(device, { x: -232, y: 34, scale: 0.75, opacity: 0.4, borderRadius: 4 }, { x: 0, y: 0, scale: 1, opacity: 1, borderRadius: 44, duration: 0.16, ease: spring(0.52, 0.82) }, 0.36);
    tl.to(p, { x: 600, y: 300, duration: 0.08 }, 0.4);
    const note = q("[data-pnote]")[0], name = q("[data-pname]")[0], tap = q("[data-ptap]")[0];
    const s = Object.fromEntries(["discover", "place", "saved"].map((k) => [k, q(`[data-pscreen="${k}"]`)[0]]));
    gsap.set([s.place, s.saved], { xPercent: 100 });
    const go = (at, from, to, x, y, label, written) => {
        tl.fromTo(tap, { left: x, top: y, opacity: 0, scale: 1.3 }, { opacity: 1, scale: 0.85, duration: 0.03 }, at);
        tl.to(tap, { opacity: 0, duration: 0.04 }, at + 0.04);
        tl.to(p, { x: 500 + 8 + x, y: 66 + 8 + y, duration: 0.07, ease: "power2.inOut" }, at - 0.07);
        tl.fromTo(s[to], { xPercent: 100 }, { xPercent: 0, duration: 0.13, ease: push, immediateRender: false }, at + 0.03);
        tl.to(s[from], { xPercent: -28, filter: "brightness(0.8)", duration: 0.13, ease: push }, at + 0.03);
        tl.set(name, { textContent: label }, at + 0.06);
        tl.set(note, { textContent: written, clipPath: "inset(0 100% 0 0)" }, at + 0.06);
        tl.to(note, { clipPath: "inset(0 0% 0 0)", duration: 0.12, ease: "none" }, at + 0.08);
    };
    go(0.52, "discover", "place", 123, 190, "Place", "Open a place");
    go(0.76, "place", "saved", 190, 508, "Saved", "After booking");
    return tl;
}
