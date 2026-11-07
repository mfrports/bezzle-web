/*
 * The download page: one headline, the download, and the minute after it played on a Mac.
 *
 * It is the home page's story in small. The screen is held while the page scrolls past it; at the
 * top the headline and the download stand over the Mac, which only peeks up from the bottom edge,
 * and as you scroll the words go up and the Mac rises to meet you. On it the minute after a download
 * plays out, a pure function of the scroll (one GSAP timeline scrubbed by it), so it plays backwards
 * when you scroll back:
 *
 *   in the browser, this very page: the pointer presses its Download, and the download fills;
 *   the Finder at Downloads: a double-click, and Bezzle comes out of the zip, the others making room;
 *   Bezzle dragged onto Applications in the sidebar, and the window following it there;
 *   ⌘ Space, "Bez", Return: Bezzle bounces in the Dock and its window opens on its home, the menu
 *   bar becomes Bezzle's, and the clock, which shows your own time, moves on by one minute;
 *   Bezzle › Check for Updates…, and Sparkle's answer: nothing newer.
 *
 * Something answers every bit of scroll: the camera drifts all the while and steps back between the
 * steps. Pressing the real Download sends the zip from the button into the browser on the Mac, and
 * a link here from another page (/download.html#now) does the same once the page is up.
 *
 * Without motion (reduced motion, or no script) it is a plain page: the download, and the steps as
 * cards under it.
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLang, useT } from "@/i18n";
import { RELEASE } from "@/lib/release";
import { revealed, storyReady } from "@/lib/loader";
import { glideTo } from "@/lib/smooth";
import { ARROW, More } from "@/site/Ctas";
import { MARK } from "@/site/Marked";
import { THEME, makeCamera, shot, spring, settle, glide, click, spot } from "@/story/engine";
import Mac, { FINDER, SLOT, DOCK_SHIFT, clockText } from "@/site/Mac";
import "@/site/install.css";

const STEPS = ["open", "move", "launch", "updates"];
/* where the camera looks in each step, in the screen's points, at points of the step's own time */
const SHOTS = {
    open: [[0, shot(96, 112, 780, 490)], [0.38, shot(240, 168, 650, 410), 0.3]],
    move: [[0, shot(84, 120, 780, 470)], [0.62, shot(100, 120, 760, 470), 0.3]],
    launch: [[0, shot(250, 120, 790, 680, { f: 0.95 })], [0.7, shot(150, 0, 1130, 720), 0.24]],
    updates: [[0, shot(0, 0, 720, 470)], [0.6, shot(210, 70, 860, 560), 0.3]],
};
const FACTS = [
    <svg key="mb" viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M9 2.6 15 5.6v6.8L9 15.4 3 12.4V5.6z" /><path d="M3 5.6 9 8.6l6-3M9 8.6v6.8" /></g></svg>,
    <svg key="os" viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3.6" width="12" height="8.4" rx="1.6" /><path d="M1.8 14.6h14.4" /></g></svg>,
    <svg key="ok" viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><path d="M9 1.8l1.9 1.4 2.3-.1.7 2.2 1.9 1.4-.8 2.2.8 2.2-1.9 1.4-.7 2.2-2.3-.1L9 16.2l-1.9-1.4-2.3.1-.7-2.2-1.9-1.4.8-2.2-.8-2.2 1.9-1.4.7-2.2 2.3.1z" fill="currentColor" opacity=".16" /><path d="m6 9.2 2 2 4-4.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];
const ZIP_SVG = `<svg viewBox="0 0 64 64" aria-hidden="true" style="overflow:visible"><ellipse cx="33" cy="64" rx="19" ry="4" fill="rgba(40,32,20,.16)"/><path d="M14 3.5h25L52 16.5V58a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3z" fill="#FDFDFB" stroke="rgba(0,0,0,.18)" stroke-width="1"/><path d="M39 3.5V14a2.5 2.5 0 0 0 2.5 2.5H52" fill="#ECEBE6" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-linejoin="round"/><g fill="#8D919B">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${i % 2 ? 31 : 28}" y="${5 + i * 4}" width="5" height="2.6" rx=".6"/>`).join("")}</g><rect x="17" y="47" width="27" height="10" rx="2.5" fill="#5B6170"/><text x="20" y="54.6" font-size="8" font-weight="700" fill="#fff" font-family="-apple-system,system-ui,sans-serif">ZIP</text></svg>`;

/** A line of the headline, each word its own box so they can rise one after another (as the home's). */
function Words({ text, from = 0 }) {
    return text.split(" ").flatMap((w, i) => [i ? " " : null, <span key={i} className="w" style={{ "--i": from + i }}>{w}</span>]);
}
/** The headline as large as the design asks, and smaller only where a language's line would not fit. */
function fit(h1) {
    h1.style.removeProperty("--fit");
    const room = h1.parentElement.clientWidth;
    const widest = Math.max(...[...h1.querySelectorAll(".line, .marked")].map((l) => l.getBoundingClientRect().width));
    if (widest > room) h1.style.setProperty("--fit", ((room / widest) * 0.985).toFixed(4));
}

function Hero({ t, r, started, onStart, onNext, zip }) {
    const [l1, l2] = t.dl_h, h1 = useRef(null);
    const [b1, b2] = t.dl_button.split("{v}");
    const facts = t.dl_facts.replace("{mb}", r.mb).replace("{os}", r.os).split(" · ");
    useEffect(() => {
        const el = h1.current, again = () => fit(el);
        again();
        document.fonts?.ready.then(again);
        addEventListener("resize", again);
        return () => removeEventListener("resize", again);
    }, [l1, l2]);
    return (
        <div className="relative flex flex-col items-center">
            <Link className="dl-pill dl-up" style={{ "--d": "0s" }} to="/releases.html">
                <img src="/img/icon-256.png" alt="" width="26" height="26" />{t.updates_link.replace("{v}", r.version)}<span className="go" aria-hidden="true">→</span>
            </Link>
            <h1 className="dl-h" ref={h1}>
                <span className="line"><Words text={l1} /></span><br />
                <span className="marked"><Words text={l2} from={l1.split(" ").length} />{MARK}</span>
            </h1>
            <p className="dl-lede dl-up" style={{ "--d": "0.42s" }}>{t.dl_sub}</p>
            <div className="dl-act dl-up" style={{ "--d": "0.54s" }}>
                <a ref={zip} className="btn btn-ink dl-btn" href={r.url} onClick={onStart}>{ARROW}<span>{b1}<span className="bz-v">{r.version}</span>{b2}</span></a>
                <ul className="dl-facts">{facts.map((f, i) => <li key={f}>{FACTS[i]}{f}</li>)}</ul>
            </div>
            <div className="dl-status" data-on={started ? "true" : "false"}>
                <span className="on-way" aria-live="polite">{started && <><i aria-hidden="true" />{t.dl_started}</>}</span>
                <button type="button" onClick={onNext} tabIndex={started ? 0 : -1} aria-hidden={!started}>{t.dl_next}<span className="go" aria-hidden="true">↓</span></button>
            </div>
        </div>
    );
}

/** The world the camera looks at: the Mac's screen, in its own points. */
function World({ t, code, v, lens, rig }) {
    return (
        <div className="scene" aria-hidden="true">
            <div className="lens" ref={lens}>
                <div className="rig bz" ref={rig}><Mac t={t} code={code} v={v} day={new Date().getDate()} /></div>
            </div>
        </div>
    );
}

/** The page's story. `api` is given what the page may ask of it: fly the zip in, go to the first step. */
export default function Install({ api, started, onStart }) {
    const t = useT(), { code, locale } = useLang(), r = RELEASE;
    const [motion, setMotion] = useState(false);
    const story = useRef(null), intro = useRef(null), list = useRef(null), lens = useRef(null), rig = useRef(null), ticksRef = useRef(null), zip = useRef(null);
    const built = useRef({ pending: false });
    useEffect(() => { setMotion(document.documentElement.classList.contains("motion")); }, []);

    // what the page may ask, with the story or without it
    useEffect(() => {
        if (!api) return;
        api.current = {
            fly: () => (built.current.fly ? built.current.fly() : (built.current.pending = true)),
            next: () => (built.current.next ? built.current.next() : list.current?.scrollIntoView({ behavior: "smooth", block: "start" })),
        };
    }, [api]);

    useEffect(() => {
        if (!motion) return;
        gsap.registerPlugin(ScrollTrigger);
        let ctx = null, alive = true;
        const off = [];
        const build = () => {
            if (!alive || !rig.current) return;
            ctx = gsap.context(() => {
                const el = story.current, win = rig.current.querySelector("[data-win]");
                const $ = (s) => win.querySelector(s), $$ = (s) => [...win.querySelectorAll(s)];
                const words = [...list.current.querySelectorAll(".chapter")], ticks = [...ticksRef.current.querySelectorAll(".tick")];
                const scene = lens.current.parentElement;
                const at = (n, ax = 0.5, ay = 0.5) => spot(n, ax, ay);

                /* ---------------------------------------------------------- the camera */
                const { cam, lean, measure, apply } = makeCamera({ rig: rig.current, lens: lens.current, scene, list: list.current, intro: intro.current, words, air: 0.065, rest: 0.6 });
                cam.rx = 20;
                measure(); apply();

                /* ---------------------------------------------------------- the Mac at rest */
                const P = $("[data-pointer]");
                const finder = $("[data-finder]"), bezzle = $("[data-bezzle]");
                const miniBtn = $("[data-mini-btn]"), dl = $("[data-dl]"), dlPop = $("[data-dl-pop]"), ring = $("[data-dl-ring]"), ringFill = $("[data-dl-fill]");
                const offB = $('[data-lights-off="browser"]'), offF = $('[data-lights-off="finder"]');
                const item = (k) => { const n = $(`[data-item="${k}"]`); return { n, icon: n.children[1], marks: [n.querySelector("[data-on-bg]"), n.querySelector("[data-on-pill]")], text: n.querySelector("[data-label-text]") }; };
                const zipI = item("zip"), pdfI = item("pdf"), jpgI = item("jpg"), appI = item("app"), newI = item("app-new");
                const sideSel = $("[data-side-sel]"), sideDrop = $("[data-side-drop]");
                const titleDl = $('[data-f-title="downloads"]'), titleApps = $('[data-f-title="apps"]');
                const viewDl = $('[data-view="downloads"]'), viewApps = $('[data-view="apps"]'), appsItems = $$('[data-view="apps"] [data-item]');
                const ghost = $("[data-ghost]");
                const spotEl = $("[data-spot]"), ph = $("[data-spot-ph]"), typed = $("[data-spot-text]"), comp = $("[data-spot-comp]"), results = $("[data-spot-results]");
                const keys = $("[data-keys]"), kDown = $$('[data-key="cmd"], [data-key="space"]'), kRet = $('[data-key="return"]');
                const dockBg = $("[data-dock-bg]"), dockItems = $$("[data-dock-item]"), dockBz = $("[data-dock-bezzle]"), bounce = $("[data-bounce]"), dot = $("[data-dock-dot]");
                const barF = $('[data-bar="finder"]'), barB = $('[data-bar="bezzle"]'), titleHl = $("[data-title-hl]"), barTitle = $("[data-bar-title]");
                const menu = $("[data-menu]"), hl = $("[data-menu-hl]"), mi = (i) => $(`[data-mi="${i}"]`);
                const alertEl = $("[data-alert]"), ok = $("[data-alert-ok]");
                const homeParts = $$("[data-bezzle] [data-rise-in]"), devices = $$("[data-bezzle] [data-device] [data-rise]");
                const clockA = $('[data-clock="a"]'), clockB = $('[data-clock="b"]'), clockSize = $('[data-clock="size"]');
                win.querySelectorAll("img[data-mac-src]").forEach((img) => { img.decoding = "async"; img.src = img.dataset.macSrc; });
                gsap.set(clockB, { yPercent: 100 });
                gsap.set(titleHl, { left: 18 + barTitle.offsetLeft - 9, width: barTitle.offsetWidth + 18 });

                // the places the pointer goes, measured once while nothing has moved
                const MINI = at(miniBtn), ICON0 = at(zipI.icon), GRAB = [ICON0[0] + 6, ICON0[1] + 10];
                const ROW = at($('[data-side="applications"]'), 0.3, 0.5), TITLE = at(barTitle);
                const C0 = [FINDER.x + SLOT.x, FINDER.y + SLOT.y], HOLD_AT = [GRAB[0] - C0[0], GRAB[1] - C0[1]];
                gsap.set(ghost, { x: C0[0], y: C0[1], transformOrigin: `${HOLD_AT[0]}px ${HOLD_AT[1]}px` });

                /* ---------------------------------------------------------- the timeline */
                const MOVE = 0.42, PLAY = 1, HOLD = 0.06, HERO = 0.5;
                const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
                const camTo = (s, t0, dur, ease = "power2.inOut") => tl.to(cam, { ...s, duration: dur, ease }, t0);
                const lift = (w, t0) => tl.fromTo(w, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power3.out", immediateRender: false }, t0);
                const drop = (w, t0) => tl.to(w, { autoAlpha: 0, y: -22, duration: 0.22, ease: "power2.in" }, t0);
                const show = (n, on, t0, d = 0.04) => tl.to(n, { autoAlpha: on ? 1 : 0, duration: d }, t0);
                const select = (it, on, t0) => { tl.to(it.marks, { opacity: on ? 1 : 0, duration: 0.02 }, t0); tl.set(it.text, { color: on ? "#fff" : "var(--ink)" }, t0); };
                const pointTo = ([x, y]) => ({ x: x - 2.5, y: y - 2.2 });

                /* the hero: the words go up and the Mac rises; on it, this page's Download is pressed */
                tl.to(intro.current, { autoAlpha: 0, y: -110, duration: 0.36, ease: "power1.in" }, 0.08);
                tl.to(cam, { lift: 1, duration: 0.52, ease: "power3.inOut" }, 0.16);
                camTo({ rx: 12, f: 1.04, cy: 380 }, 0, HERO + 0.1, "sine.inOut");
                tl.set(P, pointTo([1010, 770]), 0);
                tl.to(P, { opacity: 1, duration: 0.06 }, 0.02);
                glide(tl, P, MINI, 0.02, 0.3);
                click(tl, P, 0.34);
                tl.to(miniBtn, { scale: 0.96, duration: 0.014, ease: "power1.in" }, 0.34).to(miniBtn, { scale: 1, duration: 0.03, ease: "power2.out" }, 0.354);
                show(ring, true, 0.35, 0.03);
                tl.fromTo(ringFill, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.42, ease: "power1.inOut", immediateRender: false }, 0.36);

                const starts = [];
                let t0 = HERO, ROLL = 0;
                const play = {
                    /* 1. the Finder at Downloads: a double-click, and Bezzle comes out of the zip */
                    open(s, A) {
                        tl.to(dl, { scale: 1.2, duration: 0.04, ease: "power2.out" }, s + 0.28).to(dl, { scale: 1, duration: 0.1, ease: THEME.pop }, s + 0.32);
                        show(ring, false, s + 0.32);
                        tl.fromTo(finder, { autoAlpha: 0, scale: 0.94, y: 18 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.24, ease: THEME.open, immediateRender: false }, s + 0.12);
                        show(offB, true, s + 0.13, 0.02);
                        glide(tl, P, ICON0, s + 0.16, MOVE - 0.16 + 0.2 * PLAY);
                        click(tl, P, A(0.26)); select(zipI, true, A(0.26));
                        click(tl, P, A(0.31));
                        // Archive Utility puts it beside the zip: the others make room, and it comes up where the zip was
                        tl.to([zipI.n, pdfI.n, jpgI.n], { x: SLOT.w, duration: 0.24, ease: THEME.spring, stagger: 0.02 }, A(0.4));
                        select(zipI, false, A(0.42));
                        tl.fromTo(appI.n, { autoAlpha: 0, scale: 0.5 }, { autoAlpha: 1, scale: 1, duration: 0.26, ease: THEME.pop, immediateRender: false }, A(0.44));
                        select(appI, true, A(0.6));
                        glide(tl, P, GRAB, A(0.62), 0.24);
                    },
                    /* 2. dragged onto Applications in the sidebar, and the window following it there */
                    move(s, A) {
                        const D = A(0.1), DUR = 0.34;
                        tl.to(P, { scale: 0.86, duration: 0.02 }, A(0.04));
                        tl.to(ghost, { autoAlpha: 0.8, duration: 0.03 }, A(0.07));
                        tl.to(appI.n, { opacity: 0.42, duration: 0.03 }, A(0.07));
                        // the pointer and Bezzle under it as one, bowing up a little on the way
                        const path = (n, [ox, oy]) => {
                            tl.to(n, { x: ROW[0] - ox, duration: DUR, ease: "power2.inOut" }, D);
                            tl.to(n, { y: ROW[1] - 20 - oy, duration: DUR * 0.6, ease: "sine.out" }, D).to(n, { y: ROW[1] - oy, duration: DUR * 0.4, ease: "sine.in" });
                        };
                        path(P, [2.5, 2.2]); path(ghost, HOLD_AT);
                        show(sideDrop, true, A(0.38), 0.03);
                        // let go: it goes into Applications, and out of Downloads
                        tl.to(P, { scale: 1, duration: 0.03 }, A(0.5));
                        tl.to(ghost, { autoAlpha: 0, scale: 0.35, duration: 0.07, ease: "power2.in" }, A(0.5));
                        tl.to(sideDrop, { opacity: 0, duration: 0.06 }, A(0.58));
                        tl.to(appI.n, { autoAlpha: 0, scale: 0.8, duration: 0.06 }, A(0.53));
                        tl.to([zipI.n, pdfI.n, jpgI.n], { x: 0, duration: 0.22, ease: THEME.spring, stagger: 0.02 }, A(0.56));
                        // and the window goes after it
                        click(tl, P, A(0.68));
                        tl.to(sideSel, { y: -84, duration: 0.2, ease: THEME.spring }, A(0.69));
                        tl.to(titleDl, { opacity: 0, duration: 0.03 }, A(0.69)); tl.to(titleApps, { opacity: 1, duration: 0.03 }, A(0.7));
                        tl.to(viewDl, { autoAlpha: 0, duration: 0.03 }, A(0.69));
                        show(viewApps, true, A(0.7), 0.03);
                        tl.fromTo(appsItems, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.16, ease: THEME.spring, stagger: 0.016 }, A(0.7));
                        select(newI, true, A(0.8));
                        glide(tl, P, [ROW[0] + 170, ROW[1] + 96], A(0.82), 0.16);
                    },
                    /* 3. ⌘ Space, "Bez", Return: it bounces in the Dock, and its window opens */
                    launch(s, A) {
                        tl.to(P, { opacity: 0, duration: 0.06 }, s + 0.1);
                        tl.fromTo(keys, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.07, ease: "power2.out", immediateRender: false }, A(0));
                        tl.to(kDown, { y: 2.5, scale: 0.97, duration: 0.02 }, A(0.09)).to(kDown, { y: 0, scale: 1, duration: 0.03 }, A(0.15));
                        tl.to(keys, { autoAlpha: 0, y: 6, duration: 0.05 }, A(0.22));
                        tl.fromTo(spotEl, { autoAlpha: 0, scale: 0.96, y: -8 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.12, ease: THEME.open, immediateRender: false }, A(0.11));
                        tl.set(ph, { autoAlpha: 0 }, A(0.22));
                        ["B", "Be", "Bez"].forEach((x, i) => tl.set(typed, { textContent: x }, A(0.22 + i * 0.04)));
                        tl.fromTo(results, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.1, ease: THEME.open, immediateRender: false }, A(0.23));
                        tl.set(comp, { opacity: 1 }, A(0.31));
                        tl.fromTo(kRet, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.06, ease: "power2.out", immediateRender: false }, A(0.34));
                        tl.to(kRet, { y: 2.5, scale: 0.96, duration: 0.02 }, A(0.41)).to(kRet, { y: 0, scale: 1, duration: 0.03 }, A(0.44));
                        tl.to(kRet, { autoAlpha: 0, duration: 0.05 }, A(0.5));
                        tl.to(spotEl, { autoAlpha: 0, scale: 0.985, duration: 0.06, ease: "power2.in" }, A(0.44));
                        // the Dock makes room, and Bezzle bounces in it while it opens
                        tl.to(dockBg, { x: DOCK_SHIFT.left, width: DOCK_SHIFT.width, duration: 0.16, ease: THEME.spring }, A(0.48));
                        dockItems.forEach((n) => tl.to(n, { x: DOCK_SHIFT.items[n.dataset.dockItem], duration: 0.16, ease: THEME.spring }, A(0.48)));
                        tl.fromTo(dockBz, { autoAlpha: 0, scale: 0.2 }, { autoAlpha: 1, scale: 1, duration: 0.14, ease: THEME.pop, immediateRender: false }, A(0.5));
                        tl.to(bounce, { y: -30, duration: 0.055, ease: "power2.out" }, A(0.58)).to(bounce, { y: 0, duration: 0.055, ease: "power2.in" })
                            .to(bounce, { y: -17, duration: 0.045, ease: "power2.out" }).to(bounce, { y: 0, duration: 0.045, ease: "power2.in" });
                        tl.to(dot, { opacity: 1, duration: 0.03 }, A(0.62));
                        // its window: the Finder goes behind it, and the menu bar is Bezzle's
                        tl.fromTo(bezzle, { autoAlpha: 0, scale: 0.9, y: 20 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.22, ease: THEME.open, immediateRender: false }, A(0.76));
                        show(offF, true, A(0.76), 0.02);
                        tl.to(barF, { autoAlpha: 0, duration: 0.03 }, A(0.77)); show(barB, true, A(0.78), 0.03);
                        tl.fromTo(homeParts, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.14, ease: THEME.spring, stagger: 0.012 }, A(0.8));
                        tl.fromTo(devices, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.16, ease: spring(0.5, 0.72), stagger: 0.008 }, A(0.82));
                        // and a minute has gone by
                        ROLL = A(0.92);
                        tl.to(clockA, { yPercent: -100, duration: 0.05, ease: "power2.inOut" }, ROLL);
                        tl.to(clockB, { yPercent: 0, duration: 0.05, ease: "power2.inOut" }, ROLL);
                    },
                    /* 4. Bezzle › Check for Updates…, and Sparkle's answer */
                    updates(s, A) {
                        tl.set(P, { ...pointTo([880, 470]), scale: 1 }, s + 0.02);
                        tl.to(P, { opacity: 1, duration: 0.06 }, s + 0.06);
                        glide(tl, P, TITLE, s + 0.08, MOVE - 0.08 + 0.2 * PLAY);
                        click(tl, P, A(0.22));
                        tl.to(titleHl, { opacity: 1, duration: 0.015 }, A(0.22));
                        tl.fromTo(menu, { autoAlpha: 0, y: -3 }, { autoAlpha: 1, y: 0, duration: 0.05, ease: "power2.out", immediateRender: false }, A(0.225));
                        glide(tl, P, at(mi(0), 0.42, 0.5), A(0.28), 0.07);
                        tl.set(hl, { y: mi(0).offsetTop - 5, opacity: 1 }, A(0.33)); tl.set(mi(0), { color: "#fff" }, A(0.33));
                        glide(tl, P, at(mi(1), 0.42, 0.5), A(0.37), 0.06);
                        tl.set(hl, { y: mi(1).offsetTop - 5 }, A(0.42)); tl.set(mi(0), { color: "var(--ink)" }, A(0.42)); tl.set(mi(1), { color: "#fff" }, A(0.42));
                        // chosen: the item blinks, as a menu's does, and the menu goes
                        click(tl, P, A(0.5));
                        tl.set(hl, { opacity: 0 }, A(0.52)); tl.set(hl, { opacity: 1 }, A(0.545));
                        tl.to(menu, { autoAlpha: 0, duration: 0.05 }, A(0.58));
                        tl.to(titleHl, { opacity: 0, duration: 0.03 }, A(0.6));
                        tl.fromTo(alertEl, { autoAlpha: 0, scale: 0.88 }, { autoAlpha: 1, scale: 1, duration: 0.16, ease: THEME.pop, immediateRender: false }, A(0.64));
                        glide(tl, P, at(ok, 0.62, 0.6), A(0.76), 0.2);
                    },
                };
                STEPS.forEach((k, i) => {
                    const s = t0, A = (f) => s + MOVE + f * PLAY;
                    starts.push(s);
                    camTo({ ...SHOTS[k][0][1], side: 1 }, s, i ? MOVE : MOVE + 0.15);
                    tl.to(cam, { breath: 1, duration: MOVE / 2, ease: "sine.inOut" }, s).to(cam, { breath: 0, duration: MOVE / 2, ease: "sine.inOut" }, s + MOVE / 2);
                    if (i) drop(words[i - 1], s);
                    lift(words[i], s + MOVE * (i ? 0.55 : 0.7));
                    play[k](s, A);
                    SHOTS[k].slice(1).forEach(([f, sh, dur]) => camTo(sh, A(f), dur * PLAY));
                    t0 = s + MOVE + PLAY + HOLD;
                });
                camTo({ ...shot(0, 0, 1280, 800, { f: 0.9, rx: 8, ry: -6 }) }, t0 - 0.12, 0.46, "power2.inOut");
                tl.to({}, { duration: 0.36 }, t0);
                tl.fromTo(ticksRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, immediateRender: false }, starts[0] + MOVE * 0.6);
                tl.to(ticksRef.current, { autoAlpha: 0, duration: 0.14, ease: "power1.in" }, t0 + 0.1);
                const TOTAL = tl.duration();
                el.style.setProperty("--units", TOTAL.toFixed(3));

                /* ---------------------------------------------------------- the clock: your own time */
                let base = 0;
                const tick = () => {
                    const now = new Date(); now.setSeconds(0, 0);
                    if (+now === base) return;
                    base = +now;
                    clockA.textContent = clockText(now, locale);
                    clockB.textContent = clockText(new Date(base + 60000), locale);
                    // as wide as the longer of the two, so the clock keeps its place when it moves on
                    clockSize.textContent = clockB.textContent.length > clockA.textContent.length ? clockB.textContent : clockA.textContent;
                };
                tick();
                const timer = setInterval(() => { if (tl.time() < ROLL) tick(); }, 5000);
                off.push(() => clearInterval(timer));

                /* ---------------------------------------------------------- following the scroll */
                let shown = -2, woke = false;
                const bars = ticks.map((b) => b.querySelector("i"));
                tl.eventCallback("onUpdate", () => {
                    const time = tl.time(), w = (time / 2.6) * Math.PI * 2;
                    cam.drift = Math.sin(w); cam.drift2 = Math.cos(w);
                    apply();
                    let i = -1;
                    for (let j = 0; j < starts.length; j++) if (time >= starts[j] + MOVE * 0.45) i = j;
                    if (i !== shown) {
                        shown = i;
                        ticks.forEach((b, j) => (j === i ? b.setAttribute("aria-current", "step") : b.removeAttribute("aria-current")));
                        // Bezzle's home and its pictures, once the steps have begun
                        if (i >= 0 && !woke) { woke = true; win.querySelectorAll("img[data-src]").forEach((img) => { img.decoding = "async"; img.src = img.dataset.src; img.removeAttribute("data-src"); }); }
                    }
                    bars.forEach((b, j) => {
                        const a = starts[j], z = starts[j + 1] ?? TOTAL;
                        b.style.transform = `scaleX(${Math.min(1, Math.max(0, (time - a) / (z - a))).toFixed(3)})`;
                    });
                });
                // the story eases after the scroll (0.7 s to catch up), as the home page's does
                const trigger = ScrollTrigger.create({ trigger: el, start: "top top", end: "bottom bottom", scrub: 0.7, animation: tl });
                const onResize = () => { measure(); apply(); };
                ScrollTrigger.addEventListener("refreshInit", measure);
                ScrollTrigger.addEventListener("refresh", apply);
                off.push(() => { ScrollTrigger.removeEventListener("refreshInit", measure); ScrollTrigger.removeEventListener("refresh", apply); });
                addEventListener("resize", onResize);
                off.push(() => removeEventListener("resize", onResize));
                if (matchMedia("(pointer: fine)").matches) {
                    const toX = gsap.quickTo(lean, "x", { duration: 0.9, ease: "power3.out", onUpdate: apply });
                    const toY = gsap.quickTo(lean, "y", { duration: 0.9, ease: "power3.out", onUpdate: apply });
                    const move = (e) => { toX((e.clientX / innerWidth) * 2 - 1); toY((e.clientY / innerHeight) * 2 - 1); };
                    const leave = () => { toX(0); toY(0); };
                    addEventListener("pointermove", move, { passive: true });
                    document.addEventListener("pointerleave", leave);
                    off.push(() => { removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); });
                }
                const yAt = (time) => trigger.start + (time / TOTAL) * (trigger.end - trigger.start);
                ticks.forEach((b, i) => {
                    const go = () => glideTo(yAt(starts[i] + MOVE + PLAY * 0.97));
                    b.addEventListener("click", go);
                    off.push(() => b.removeEventListener("click", go));
                });
                ScrollTrigger.refresh();

                /* ---------------------------------------------------------- the zip, from the button to the Mac */
                const fly = () => {
                    const from = zip.current, b = dlPop.getBoundingClientRect();
                    if (!from || tl.time() > 0.04 || !b.width || b.top > innerHeight) return;
                    const a = from.getBoundingClientRect();
                    const f = document.createElement("div");
                    f.className = "dl-flyer"; f.innerHTML = ZIP_SVG; document.body.appendChild(f);
                    const x0 = a.left + a.width / 2 - 32, y0 = a.top + a.height / 2 - 36, x1 = b.left + b.width / 2 - 32, y1 = b.top + b.height / 2 - 36;
                    const T = 0.95, top = Math.min(y0, y1) - 110;
                    // it comes up off the button, arcs over, and drops into the browser's downloads, shrinking as it goes
                    gsap.timeline({ onComplete: () => f.remove() })
                        .fromTo(f, { x: x0, y: y0, scale: 0.5, rotation: -16, opacity: 0 }, { scale: 1.15, rotation: -8, opacity: 1, duration: 0.22, ease: spring(0.3, 0.62) }, 0)
                        .to(f, { x: x1, duration: T, ease: "power1.inOut" }, 0.06)
                        .to(f, { y: top, duration: T * 0.42, ease: "power2.out" }, 0.06)
                        .to(f, { y: y1, duration: T * 0.58, ease: "power2.in" }, 0.06 + T * 0.42)
                        .to(f, { scale: 0.3, rotation: 4, duration: T * 0.7, ease: "power1.in" }, 0.06 + T * 0.3)
                        .to(f, { opacity: 0, duration: 0.1 }, T - 0.04)
                        .fromTo(dlPop, { scale: 1 }, { scale: 1.32, duration: 0.08, ease: "power2.out", immediateRender: false }, T - 0.02)
                        .to(dlPop, { scale: 1, duration: settle(0.32, 0.5), ease: spring(0.32, 0.5) }, T + 0.06)
                        .to(dlPop, { color: "rgb(58 99 216)", duration: 0.2 }, T);
                };
                built.current.fly = fly;
                window.bezzleInstall = { tl, starts, MOVE, PLAY, HERO, TOTAL, trigger, cam };
                built.current.next = () => glideTo(yAt(starts[0] + MOVE + PLAY * 0.18));

                // shown only now that it stands where the camera puts it
                scene.dataset.ready = "";
                storyReady();
                // the first view: once the loader has lifted, the Mac comes up onto the desk
                const atTop = scrollY < 40;
                if (atTop) gsap.set(lens.current, { autoAlpha: 0 });
                revealed().then(() => alive && ctx && ctx.add(() => {
                    if (atTop) gsap.fromTo(lens.current, { y: 160, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5, delay: 0.1, ease: "expo.out" });
                    if (built.current.pending) { built.current.pending = false; gsap.delayedCall(atTop ? 1.5 : 0.2, fly); }
                }));
            }, story.current);
        };
        (document.fonts?.ready || Promise.resolve()).then(() => requestAnimationFrame(build));
        return () => { alive = false; built.current.fly = built.current.next = null; ctx?.revert(); off.forEach((f) => f()); };
    }, [motion, code, locale]);

    const chips = STEPS.map((k, i) => (i < 3 ? t.dl_step.replace("{n}", i + 1) : t.dl_then));
    const steps = [...t.steps.map(([h, p]) => [h, p.replace("{zip}", r.zip)]), [t.updates_h, t.updates_p]];
    return (
        <section ref={story} className="story install" aria-label={t.dl_story_label}>
            <div className="stage">
                <div ref={intro} className="intro page">
                    <Hero t={t} r={r} started={started} onStart={onStart} onNext={() => api?.current?.next()} zip={zip} />
                </div>
                {motion && <World key={code} t={t} code={code} v={r.version} lens={lens} rig={rig} />}
                <div className="words page">
                    <ol ref={list} className="chapters">
                        {STEPS.map((k, i) => (
                            <li key={k} className="chapter" data-k={k}>
                                <span className="chip">{chips[i]}</span>
                                <h2 className="title">{steps[i][0]}</h2>
                                <p className="body">{steps[i][1]}</p>
                                {k === "updates" && <More className="more" to="/releases.html">{t.updates_link.replace("{v}", r.version)}</More>}
                            </li>
                        ))}
                    </ol>
                    <div ref={ticksRef} className="ticks">
                        {STEPS.map((k, i) => <button key={k} type="button" className="tick" aria-label={`${chips[i]}: ${steps[i][0]}`}><span><i /></span></button>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
