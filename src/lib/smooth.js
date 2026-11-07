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

/** Scroll the page to y, gliding when smooth scrolling is on. Lenis measures the page again first:
    after a change of page it would still hold the last one's height, and stop short. A long way (past
    a few screens, as from the top to Free across the whole story) is not glided: the page turns, a
    sheet of paper over it for a moment while it goes there, so the story is not raced through. */
export function glideTo(y) {
    if (!lenis) { window.scrollTo({ top: y, behavior: "smooth" }); return; }
    lenis.resize();
    if (Math.abs(y - scrollY) > innerHeight * 3.5) turnTo(y);
    else lenis.scrollTo(y, { duration: 1.2, lerp: undefined });
}
let veil = null, turning = 0;
function turnTo(y) {
    if (!veil) { veil = document.createElement("div"); veil.className = "bz-veil"; veil.setAttribute("aria-hidden", "true"); document.body.appendChild(veil); }
    clearTimeout(turning);
    veil.dataset.on = "";
    turning = setTimeout(() => {
        jumpTo(y);
        // what follows the scroll with a lag (the story's 0.7 s) is where it belongs before the paper lifts
        ScrollTrigger.update();
        ScrollTrigger.getAll().forEach((st) => st.getTween?.()?.progress(1));
        // and it lifts once the frames of landing (the story drawing its new place) have passed
        requestAnimationFrame(() => requestAnimationFrame(() => { turning = setTimeout(() => delete veil.dataset.on, 110); }));
    }, 230);
}
/** Put the page at y at once. */
export function jumpTo(y) {
    if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate: true, force: true }); }
    else window.scrollTo(0, y);
}
