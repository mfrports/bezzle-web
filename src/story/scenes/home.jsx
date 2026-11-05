/*
 * The hero: Bezzle's home, as HomeView and HomeStage draw it. The greeting of the hour, in serif;
 * the stage of sizes as the devices they are for, on a table lit as the room is at this time of day
 * (HomeStage 157–225: the light low from the left in the morning, overhead at noon, warm from the
 * right towards evening, a lamp's pool after dark, every shadow falling away from it); the designs
 * below. Everything rises in as the window opens (devices on spring 0.5/0.72, 45 ms apart). Point at
 * a device and it lifts 9 pt and leans toward the pointer, its screen outlined in pencil, the plus
 * badge growing in (HomeStage 380–486), with your own pointer while the hero shows.
 */
import { gsap } from "gsap";
import { spring, settle } from "@/story/engine";

const FAMILIES = ["iPhone", "Android", "iPad", "Mac", "Web", "Apple Watch", "|", "Instagram", "TikTok", "YouTube", "Facebook", "LinkedIn", "X", "Pinterest", "Carousels", "|", "Print", "Slides", "|", "Your own size"];
// x, width, height, island, name, size
const DEVICES = [
    [202, 142, 101, "duo", "iPhone Duo, open", "890 × 626"], [390, 71, 102, "punch", "iPhone Duo, closed", "466 × 678"],
    [522, 69, 145, "island", "iPhone 18 Pro Max", "440 × 956"], [640, 65, 133, "island", "iPhone 18 Pro", "402 × 874"],
    [738, 66, 138, "island", "iPhone Air", "420 × 912"], [834, 64, 133, "island", "iPhone 17", "402 × 874"],
    [926, 62, 128, "island", "iPhone 17e", "390 × 844"], [1016, 62, 129, "island", "iPhone 16", "393 × 852"],
];
const FOOT = 318;
const TILES = [
    ["Wander", ["wander-discover", "wander-place", "wander-saved"], "12 minutes ago"],
    ["Wander Night", ["wander-discover-dark", "wander-place-dark", "wander-saved-dark"], "13 minutes ago"],
    ["Adoption Day Sizes", ["size-story", "size-poster", "size-square"], "13 minutes ago"],
    ["Wander Pitch", ["screen-discover", "screen-place", "screen-saved"], "yesterday"],
    ["Ember & Oat", ["cafe-latte"], "yesterday"],
];

/** The room's light at this hour (HomeStage.Daylight). */
export function daylight(date = new Date()) {
    const hour = date.getHours() + date.getMinutes() / 60;
    if (hour < 6 || hour >= 20) return { x: 0.8, warmth: 1, lamp: true };
    const day = (hour - 6) / 14;
    return { x: 0.14 + day * 0.72, warmth: Math.max(0, day - 0.45) * 1.6, lamp: false };
}
/** HomeView.greeting: morning from five, afternoon from noon, evening from six. */
export function greeting(date = new Date()) {
    const h = date.getHours();
    return h >= 5 && h < 12 ? "Good morning." : h >= 12 && h < 18 ? "Good afternoon." : "Good evening.";
}

function Device({ d: [x, w, h, kind, name, size], i, lean }) {
    return (
        <div data-device={i} className="bz-abs" style={{ left: x, top: FOOT - h, width: w, height: h + 46, transformOrigin: "50% 100%" }}>
            <div data-rise className="bz-abs inset-0">
                <div data-contact className="bz-abs" style={{ left: "3%", right: "3%", top: h - 5, height: 11, background: "radial-gradient(closest-side, rgb(0 0 0 / 0.32), rgb(0 0 0 / 0))", transform: `translateX(${lean}px)` }} />
                <div data-body className="bz-abs inset-x-0 top-0" style={{ height: h, borderRadius: kind === "duo" ? 9 : 11, background: "#2F2E2C", padding: 3, boxShadow: `${lean * 0.3}px 2px 3px rgb(0 0 0 / 0.14), inset 0 0 0 0.8px #55534f`, transformOrigin: "50% 80%" }}>
                    <div data-screen className="relative w-full h-full" style={{ borderRadius: kind === "duo" ? 6 : 8, background: "#fff" }}>
                        {kind === "island" && <i className="bz-abs block" style={{ left: "50%", top: 5, width: w * 0.3, height: 6, marginLeft: -w * 0.15, borderRadius: 4, background: "#111" }} />}
                        {kind === "punch" && <i className="bz-abs block" style={{ right: 7, top: 6, width: 5, height: 5, borderRadius: "50%", background: "#111" }} />}
                        {kind === "duo" && <i className="bz-abs block" style={{ left: "50%", top: 0, bottom: 0, width: 1, background: "rgb(0 0 0 / 0.08)" }} />}
                    </div>
                    <div data-ring className="bz-abs" style={{ inset: 1.5, borderRadius: kind === "duo" ? 7.5 : 9.5, boxShadow: "inset 0 0 0 1.5px var(--pencil)", opacity: 0 }} />
                    <div data-badge className="bz-abs grid place-items-center rounded-full text-white" style={{ left: w / 2 - 11, top: h / 2 - 11, width: 22, height: 22, background: "var(--pencil)", boxShadow: "0 4px 10px rgb(var(--pencil-rgb) / 0.4)", transform: "scale(0.2)", opacity: 0 }}>
                        <svg viewBox="0 0 12 12" width="11" height="11"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                    </div>
                </div>
                <div className="bz-abs left-1/2 -translate-x-1/2 text-center whitespace-nowrap" style={{ top: h + 12 }}>
                    <div className="text-[11px] font-medium">{name}</div><div className="text-[10px] bz-num" style={{ color: "var(--ink-3)" }}>{size}</div>
                </div>
            </div>
        </div>
    );
}

export function HomeState({ u }) {
    const light = daylight(), t = Math.min(Math.max(light.warmth, 0), 1);
    const c = [0.92 + 0.08 * t, 0.95 - 0.11 * t, 1 - 0.36 * t].map((v) => Math.round(v * 255)).join(" ");
    const pool = `radial-gradient(ellipse ${light.lamp ? 62 : 85}% ${light.lamp ? 62 : 85}% at ${(light.x * 100).toFixed(1)}% ${light.lamp ? 25 : 0}%, rgb(${c} / ${light.lamp ? 0.5 : 0.62}), rgb(${c} / 0))`;
    const lean = (0.5 - light.x) * 9;
    return (
        <div className="bz-abs inset-0" style={{ top: 52 }}>
            <div data-rise-in className="bz-abs inset-x-0 text-center font-serif font-medium text-[33px] tracking-[-0.01em]" style={{ top: 14 }}>
                {u(greeting())} <span style={{ color: "var(--ink-3)" }}>{u("What are you designing today?")}</span>
            </div>
            {/* the stage: the table's colour, lit as the room is now */}
            <div data-rise-in className="bz-abs overflow-hidden" style={{ left: 40, top: 78, width: 1200, height: 292, borderRadius: 20, background: "var(--table)", boxShadow: "inset 0 0 0 0.5px var(--hairline), inset 0 1px 2px rgb(var(--shadow-rgb) / 0.18)" }}>
                <div className="bz-abs inset-0" style={{ background: pool, opacity: `var(--pool-${light.lamp ? "lamp" : "day"})` }} />
                <div className="bz-abs inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to bottom, transparent, rgb(0 0 0 / var(--table-shade)))" }} />
                <div className="bz-abs flex items-center gap-1 text-[12.5px] font-medium" style={{ left: 20, top: 16 }}>
                    {FAMILIES.map((f, i) => f === "|" ? <i key={i} className="block w-px h-3.5 mx-2" style={{ background: "var(--hairline)" }} /> :
                        <span key={i} className={`h-7 leading-7 px-2.5 rounded-full whitespace-nowrap ${i === 0 ? "bz-card" : ""}`} style={{ color: i === 0 ? "var(--ink)" : "var(--ink-2)" }}>{u(f)}</span>)}
                </div>
                <div className="bz-abs" style={{ left: -40, top: -78 }}>{DEVICES.map((d, i) => <Device key={i} d={d} i={i} lean={lean} />)}</div>
            </div>
            <div data-rise-in className="bz-abs flex items-baseline gap-2" style={{ left: 40, top: 420 }}>
                <span className="font-serif font-semibold text-[22px]">{u("Your designs")}</span><span className="text-[13px] bz-num" style={{ color: "var(--ink-3)" }}>6</span>
            </div>
            <div data-rise-in className="bz-abs text-[12.5px]" style={{ right: 40, top: 426, color: "var(--ink-2)" }}>{u("Show in Finder")}</div>
            {TILES.map(([name, pics, when], i) => (
                <div key={name} data-tile={i} data-rise-in className="bz-abs" style={{ left: 40 + i * 244, top: 462, width: 222 }}>
                    <div data-tile-art className="relative overflow-hidden flex items-center justify-center gap-1.5" style={{ height: 137, borderRadius: 12, background: "var(--table)", boxShadow: "inset 0 0 0 0.5px var(--hairline)" }}>
                        {pics.map((p) => <img key={p} data-src={`/bezzle-web/img/parts/${p}.webp`} alt="" className="h-[118px] w-auto rounded-[2px] shadow-[0_2px_6px_rgb(0_0_0/0.18)]" style={{ maxWidth: pics.length === 1 ? "none" : 64, objectFit: "cover" }} />)}
                    </div>
                    <div className="mt-2.5 font-serif font-semibold text-[15px]">{name}</div>
                    <div className="text-[11.5px]" style={{ color: "var(--ink-3)" }}>{when}</div>
                </div>
            ))}
            {/* a file held over the window: where it would land */}
            <div data-drop className="bz-abs pointer-events-none" style={{ inset: "-44px 8px 8px", borderRadius: 12, boxShadow: "inset 0 0 0 2px var(--pencil)", background: "rgb(var(--pencil-rgb) / 0.06)", opacity: 0 }} />
        </div>
    );
}

/** The window opening: the greeting, the table and the designs rise 12 pt, the devices 14 pt, each a moment after the last. */
export function enterHome(root, delay = 0) {
    const tl = gsap.timeline({ delay });
    const parts = root.querySelectorAll("[data-rise-in]"), devices = root.querySelectorAll("[data-device] [data-rise]");
    tl.from(parts, { y: 12, opacity: 0, duration: settle(0.34, 0.86), ease: spring(0.34, 0.86), stagger: 0.035 }, 0.04);
    tl.from(devices, { y: 14, opacity: 0, duration: settle(0.5, 0.72), ease: spring(0.5, 0.72), stagger: 0.045 }, 0.1);
    return tl;
}

/** Your own pointer on the home while the hero shows: a device lifts and leans toward it, a design tilts. */
export function hoverHome(root) {
    const off = [];
    const on = (el, type, fn) => { el.addEventListener(type, fn); off.push(() => el.removeEventListener(type, fn)); };
    root.querySelectorAll("[data-device]").forEach((dev) => {
        const body = dev.querySelector("[data-body]"), ring = dev.querySelector("[data-ring]"), badge = dev.querySelector("[data-badge]"), contact = dev.querySelector("[data-contact]");
        gsap.set(body, { transformPerspective: 260 });
        const rx = gsap.quickTo(body, "rotationX", { duration: settle(0.28, 0.82), ease: spring(0.28, 0.82) });
        const ry = gsap.quickTo(body, "rotationY", { duration: settle(0.28, 0.82), ease: spring(0.28, 0.82) });
        on(dev, "pointerenter", () => {
            gsap.to(body, { y: -9, duration: settle(0.32, 0.72), ease: spring(0.32, 0.72), overwrite: "auto" });
            gsap.to(contact, { scaleX: 1.15, scaleY: 1.4, opacity: 0.5, duration: 0.3 });
            gsap.to(ring, { opacity: 1, duration: 0.15 });
            gsap.to(badge, { opacity: 1, scale: 1, duration: settle(0.3, 0.55), ease: spring(0.3, 0.55) });
        });
        on(dev, "pointermove", (e) => {
            const r = body.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            rx(Math.max(-14, Math.min(14, (py - 0.5) * 28))); ry(Math.max(-16, Math.min(16, (0.5 - px) * 32)));
        });
        on(dev, "pointerleave", () => {
            rx(0); ry(0);
            gsap.to(body, { y: 0, duration: settle(0.32, 0.72), ease: spring(0.32, 0.72), overwrite: "auto" });
            gsap.to(contact, { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.3 });
            gsap.to(ring, { opacity: 0, duration: 0.15 });
            gsap.to(badge, { opacity: 0, scale: 0.2, duration: 0.15 });
        });
        on(dev, "pointerdown", () => gsap.to(body, { scale: 0.975, duration: 0.08 }));
        on(dev, "pointerup", () => gsap.to(body, { scale: 1, duration: settle(0.3, 0.6), ease: spring(0.3, 0.6) }));
    });
    root.querySelectorAll("[data-tile-art]").forEach((art) => {
        gsap.set(art, { transformPerspective: 500 });
        on(art, "pointerenter", () => gsap.to(art, { y: -3, rotationX: 5, rotationY: -6, duration: settle(0.34, 0.86), ease: spring(0.34, 0.86) }));
        on(art, "pointerleave", () => gsap.to(art, { y: 0, rotationX: 0, rotationY: 0, duration: settle(0.34, 0.86), ease: spring(0.34, 0.86) }));
    });
    return () => off.forEach((f) => f());
}

/** The hero's first stretch of scroll: the pointer comes to rest on iPhone 18 Pro, which lifts toward it. */
export function playHome({ q }) {
    const tl = gsap.timeline();
    const dev = q('[data-device="3"]')[0], ring = dev.querySelector("[data-ring]"), badge = dev.querySelector("[data-badge]");
    const p = q("[data-pointer=home]")[0];
    tl.fromTo(p, { x: 520, y: 640, opacity: 0 }, { x: 676, y: 262, opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0);
    tl.to(dev, { y: -9, rotationX: 14, rotationY: -16, transformPerspective: 260, duration: 0.42, ease: spring(0.32, 0.72) }, 0.34);
    tl.to(ring, { opacity: 1, duration: 0.12 }, 0.4);
    tl.to(badge, { opacity: 1, scale: 1, duration: 0.3, ease: spring(0.3, 0.55) }, 0.44);
    // then it goes off to the Finder for a file, and the device settles back on the table
    tl.to(p, { x: -40, y: 420, duration: 0.3, ease: "power2.in" }, 0.72);
    tl.to(p, { opacity: 0, duration: 0.06 }, 0.96);
    tl.to(dev, { y: 0, rotationX: 0, rotationY: 0, duration: 0.3, ease: spring(0.32, 0.72) }, 0.76);
    tl.to([ring, badge], { opacity: 0, duration: 0.08 }, 0.76);
    tl.to(badge, { scale: 0.2, duration: 0.08 }, 0.76);
    return tl;
}
