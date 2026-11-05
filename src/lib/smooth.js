/*
 * Smooth scrolling for mouse wheels: a wheel moves in steps, so the page glides to where each step
 * sends it. A trackpad (or a Magic Mouse) already scrolls with the Mac's own momentum; smoothing it
 * again would only make it lag behind the fingers, so its scrolling goes through as it comes.
 * GSAP's ScrollTrigger reads the same position, so the story moves with the page frame for frame.
 * Off with reduced motion, where the page scrolls as the system does.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis = null;
export const smoothScroll = () => lenis;

const WHEEL = 0.16;
/** A trackpad sends pixels with its legacy delta three times the new one; a wheel sends notches. */
function fromTrackpad(e) {
    if (!e || e.type !== "wheel") return false;
    if (e.deltaMode !== 0) return false;
    if (e.wheelDeltaY) return Math.abs(e.wheelDeltaY) === Math.abs(e.deltaY) * 3;
    return !Number.isInteger(e.deltaY) || Math.abs(e.deltaY) < 16;
}

export function startSmoothScroll() {
    if (typeof window === "undefined" || lenis) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({
        lerp: WHEEL, wheelMultiplier: 1, smoothWheel: true, syncTouch: false,
        virtualScroll: ({ event }) => { lenis.options.lerp = fromTrackpad(event) ? 1 : WHEEL; return true; },
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
}

/** Scroll the page to y, gliding when smooth scrolling is on. */
export function glideTo(y) {
    if (lenis) lenis.scrollTo(y, { duration: 1.2, lerp: undefined });
    else window.scrollTo({ top: y, behavior: "smooth" });
}
