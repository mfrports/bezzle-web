/*
 * The home page's story: Bezzle's own window, rebuilt from its SwiftUI views, and a camera that walks
 * through it one feature at a time. The page scrolls as it always does (gliding, with Lenis); the
 * story is a pure function of how far it has been scrolled, one GSAP timeline scrubbed by it, so it
 * plays backwards when you scroll back and is never on a clock.
 *
 * Something answers every bit of scroll: from the first pixel the hero's pointer moves and the window
 * lifts; between chapters the camera steps back while the window switches tabs; inside a chapter the
 * scene plays, and the camera keeps drifting the whole way through, so there is no dead stretch.
 *
 * Everything in the window is drawn with the page's colours, so in dark mode the app is dark too,
 * and while the Dark chapter shows its dark look the page goes dark with it.
 *
 * Without motion (reduced motion, or no script) the page is the plain one: every chapter with its
 * words and a picture of the app.
 */
import { memo, startTransition, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useLang, useT } from "@/i18n";
import { CHAPTERS } from "@/words";
import { ui } from "@/app/words";
import Marked from "@/site/Marked";
import Hero, { enterHero } from "@/story/Hero";
import { glideTo, jumpTo } from "@/lib/smooth";
import { revealed } from "@/lib/loader";
import { afterFonts, later } from "@/lib/later";
import { CAPTURED } from "@/lib/shot";
import { setStory, storyRead, goTo } from "@/lib/nav";
import { TrafficLights, Tab, tabWidth, DesignBar, measureBar, MODE_WAY, HomeControls, ToolRail, Pointer, Icon } from "@/app/Kit";
import { THEME, shot, makeCamera, smooth } from "@/story/engine";
import { HomeState, playHome, enterHome, hoverHome } from "@/story/scenes/home";
import { FilesState, FilesFloat, playFiles, OPEN_AT } from "@/story/scenes/files";
import { AdaptState, playAdapt } from "@/story/scenes/adapt";
import { ComponentsState, playComponents } from "@/story/scenes/components";
import { PrototypeState, playPrototype } from "@/story/scenes/prototype";
import { InspectState, playInspect } from "@/story/scenes/inspect";
import { CutoutState, playCutout } from "@/story/scenes/cutout";
import { VectorizeState, playVectorize } from "@/story/scenes/vectorize";
import { AnimateState, playAnimate } from "@/story/scenes/animate";
import { DarkState, playDark, DARK_AT } from "@/story/scenes/dark";
import { DeckState, playDeck } from "@/story/scenes/deck";
import { TogetherState, playTogether } from "@/story/scenes/together";
import { AiState, AiFloat, playAi } from "@/story/scenes/ai";

/* A chapter whose camera goes deep into a design that fills the window above its frame: on a narrow screen the window
   fades out under the words all through it (engine › shot). */
const UNDER = { under: 1 };
/* Each chapter: the design's tab, the window's mode and zoom, the scene, and where the camera looks
   (shots in the window's points, at points of the scene's own time). */
const SCENES = {
    files: { tab: "Wander", zoom: "50%", State: FilesState, Float: FilesFloat, play: playFiles, openAt: OPEN_AT,
        shots: [[0, shot(-20, 10, 1000, 690, { rx: 6, ry: -9 })], [0.37, shot(40, 0, 980, 790), 0.21], [0.6, shot(292, 290, 710, 500)]] },
    adapt: { tab: "Adoption Day Sizes", zoom: "25%", State: AdaptState, play: playAdapt,
        shots: [[0, shot(372, 70, 900, 560)], [0.34, shot(372, 90, 900, 650)], [0.64, shot(372, 70, 900, 560)]] },
    components: { tab: "Wander", zoom: "50%", State: ComponentsState, play: playComponents,
        shots: [[0, shot(300, 190, 740, 474)], [0.14, shot(302, 280, 520, 300), 0.13], [0.4, shot(300, 190, 740, 474), 0.15]] },
    prototype: { tab: "Wander", mode: "prototype", zoom: "50%", State: PrototypeState, play: playPrototype,
        shots: [[0, shot(280, 180, 730, 490)], [0.15, shot(540, 0, 740, 470), 0.21], [0.36, shot(330, 52, 620, 739), 0.21]] },
    inspect: { tab: "Wander", mode: "inspect", zoom: "78%", State: InspectState, play: playInspect,
        shots: [[0, shot(440, 52, 420, 739)], [0.56, shot(420, 52, 860, 739)]] },
    cutout: { tab: "Adoption Day Sizes", zoom: "42%", State: CutoutState, play: playCutout,
        shots: [[0, shot(380, 110, 900, 620)], [0.22, shot(395, 120, 500, 610)]] },
    vectorize: { tab: "Adoption Day Sizes", zoom: "75%", State: VectorizeState, play: playVectorize,
        shots: [[0, shot(560, 56, 712, 690, UNDER)], [0.15, shot(684, 486, 290, 290, UNDER), 0.14], [0.4, shot(56, 56, 880, 690, UNDER), 0.11], [0.715, shot(560, 380, 440, 400, UNDER), 0.09], [0.925, shot(560, 56, 712, 690, UNDER), 0.075]] },
    animate: { tab: "Adoption Day Sizes", mode: "animate", zoom: "35%", State: AnimateState, play: playAnimate,
        shots: [[0, shot(292, 52, 706, 739)], [0.225, shot(298, 56, 976, 730, { f: 0.97 }), 0.08], [0.5, shot(438, 54, 838, 524), 0.08], [0.7, shot(302, 60, 686, 730), 0.08]] },
    dark: { tab: "Wander Night", zoom: "36%", State: DarkState, play: playDark,
        shots: [[0, shot(316, 52, 964, 560)], [0.24, shot(318, 236, 520, 420)], [0.5, shot(318, 236, 680, 440)]] },
    deck: { tab: "Wander Posts", zoom: "34%", State: DeckState, play: playDeck,
        shots: [[0, shot(420, 110, 860, 580)], [0.52, shot(292, 52, 706, 739, { f: 0.95 })]] },
    together: { tab: "Wander Pitch", shared: true, zoom: "27%", State: TogetherState, play: playTogether,
        shots: [[0, shot(300, 0, 720, 560)], [0.18, shot(306, 226, 692, 336, { f: 0.93 })]] },
    ai: { tab: "Ember & Oat", zoom: "34%", State: AiState, Float: AiFloat, play: playAi,
        shots: [[0, shot(10, 110, 980, 640)], [0.76, shot(10, 110, 1000, 640)]] },
};
// the open tabs: each design opens in a tab of its own, and the window keeps the last three
const TABS = (() => {
    const out = {}, open = [];
    for (const k of CHAPTERS) {
        const n = SCENES[k].tab;
        if (!open.includes(n)) { open.push(n); if (open.length > 3) open.shift(); }
        out[k] = [...open];
    }
    return out;
})();
const NAMES = [...new Set(CHAPTERS.map((k) => SCENES[k].tab))];
const SHARED = new Set(CHAPTERS.filter((k) => SCENES[k].shared).map((k) => SCENES[k].tab));
/* The tabs in the room the design's controls leave them (TabBar.swift › TabRow): each as wide as its name asks; when the
   row is too short the widest give way first, all down to one width (44 at least), and the front tab last of all. */
function level(widths, room) {
    let left = widths.length, rest = room;
    for (const w of [...widths].sort((a, b) => a - b)) { if (w * left <= rest) { rest -= w; left -= 1; } else return Math.floor(rest / left); }
    return Infinity;
}
function tabLayout(names, sel, room) {
    const own = Object.fromEntries(names.map((n) => [n, n === sel ? 194 : tabWidth(n, false) + (SHARED.has(n) ? 18 : 0)]));
    const free = room - 27 - 4 * names.length, others = names.filter((n) => n !== sel);
    if (names.reduce((a, n) => a + own[n], 0) > free) {
        const cap = Math.max(44, level(others.map((n) => own[n]), free - own[sel]));
        for (const n of others) own[n] = Math.min(own[n], cap);
        own[sel] = Math.max(44, Math.min(194, free - others.reduce((a, n) => a + own[n], 0)));
    }
    let x = 164;
    const out = {};
    for (const n of names) { out[n] = { x, w: own[n] }; x += own[n] + 4; }
    return { tabs: out, plus: x + 1 };
}

/** A chapter's design in the window, and what floats beside it: empty until its turn comes (Story › the chapters). */
const ChapterState = memo(function ChapterState({ k, on, code, t }) {
    const S = SCENES[k].State;
    return <div data-state={k} className="bz-abs inset-0" style={{ visibility: "hidden", opacity: 0, background: "var(--paper)" }}>{on && <S u={ui(code)} code={code} t={t} />}</div>;
});
const ChapterFloat = memo(function ChapterFloat({ k, on, code, t }) {
    const F = SCENES[k].Float;
    return <div data-float={k} className="bz-abs left-0 top-0" style={{ transformStyle: "preserve-3d", visibility: "hidden" }}>{on && <F u={ui(code)} code={code} t={t} />}</div>;
});
/** The window's home and its tool rail, under the chapters' designs. */
const Desk = memo(function Desk({ code }) {
    return (
        <>
            <div data-home className="bz-abs inset-0"><HomeState u={ui(code)} /><Pointer data="home" /></div>
            <div data-rail-wrap className="bz-abs inset-0" style={{ opacity: 0 }}><ToolRail /></div>
        </>
    );
});
/** The title bar, over them: the tabs, and the controls of the home and of a design. */
const TitleBar = memo(function TitleBar({ code }) {
    const u = ui(code);
    return (
        <>
            <TrafficLights />
            <div data-tabcard className="bz-abs bz-card rounded-[8px]" style={{ left: 88, top: 11, width: 64, height: 30 }} />
            <div className="bz-abs font-serif font-semibold text-[16.5px] leading-[30px] text-center tracking-[-0.01em]" style={{ left: 88, top: 11, width: 64 }}>Bezzle</div>
            {NAMES.map((n) => <Tab key={n} name={n} x={164} w={194} data={n} shared={SHARED.has(n)} />)}
            <div data-tab-plus className="bz-abs grid place-items-center w-[26px] h-[26px] rounded-[7px]" style={{ left: 160, top: 13, color: "var(--ink-2)" }}><Icon name="plus" size={14} /></div>
            <div data-homectl className="bz-abs inset-0" style={{ bottom: "auto", height: 52 }}><HomeControls u={u} /></div>
            <div data-designctl className="bz-abs inset-0" style={{ bottom: "auto", height: 52, opacity: 0, visibility: "hidden" }}><DesignBar u={u} /></div>
        </>
    );
});

/** The world the camera looks at: the window in its own points, and what floats beside it. The
    chapters' designs come into it one at a time (`upTo` of them), once the home is up. */
function World({ code, t, lens, rig, upTo }) {
    return (
        <div className="scene" aria-hidden="true">
            <div className="lens" ref={lens}>
                <div className="rig bz" ref={rig}>
                    <div className="bz-win" data-win="">
                        <Desk code={code} />
                        {CHAPTERS.map((k, i) => <ChapterState key={k} k={k} on={i < upTo} code={code} t={t} />)}
                        <TitleBar code={code} />
                    </div>
                    {CHAPTERS.map((k, i) => (SCENES[k].Float ? <ChapterFloat key={k} k={k} on={i < upTo} code={code} t={t} /> : null))}
                </div>
            </div>
        </div>
    );
}

export default function Story() {
    const t = useT(), { code, locale } = useLang();
    const [motion, setMotion] = useState(false);
    // how many chapters' designs are in the window, for which language
    const [upTo, setUpTo] = useState({ code: null, n: 0 });
    const story = useRef(null), intro = useRef(null), list = useRef(null), lens = useRef(null), rig = useRef(null), ticksRef = useRef(null), builder = useRef(null);
    // the window, a whole app of it, is put together a little at a time (it is hidden until it stands)
    useEffect(() => { const on = document.documentElement.classList.contains("motion"); startTransition(() => setMotion(on)); }, []);

    useEffect(() => {
        if (!motion) return;
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
        let ctx = null, alive = true;
        const off = [];
        const root = document.documentElement;
        // what the chapters and the end share with the first view (the effect below calls them)
        const parts = { code, alive: true, built: 0, chapter: null, finish: null };
        builder.current = parts;
        // first the window with its home, under the hero, so it can come up as soon as it stands
        const build = () => {
            if (!alive || !rig.current) return;
            ctx = gsap.context(() => {
                const el = story.current, win = rig.current.querySelector("[data-win]");
                const words = [...list.current.querySelectorAll(".chapter")], ticks = [...ticksRef.current.querySelectorAll(".tick")];
                const $ = (s, r = win) => r.querySelector(s), $$ = (s, r = win) => [...r.querySelectorAll(s)];
                const states = Object.fromEntries(CHAPTERS.map((k) => [k, $(`[data-state="${k}"]`)]));
                const floats = Object.fromEntries(CHAPTERS.map((k) => [k, rig.current.querySelector(`[data-float="${k}"]`)]));
                const home = $("[data-home]"), railWrap = $("[data-rail-wrap]");
                const card = $("[data-tabcard]"), plus = $("[data-tab-plus]"), homeCtl = $("[data-homectl]"), designCtl = $("[data-designctl]");
                const tabEl = Object.fromEntries(NAMES.map((n) => [n, $(`[data-tab="${n}"]`)]));
                const thumb = $("[data-mode-thumb]"), zoom = $("[data-zoom]"), share = $("[data-share]");
                const tools = $$("[data-tool]").filter((x) => x.dataset.tool !== "select");
                const u = ui(code);

                /* ---------------------------------------------------------- the camera */
                const { cam, lean, measure, apply } = makeCamera({ rig: rig.current, lens: lens.current, scene: lens.current.parentElement, list: list.current, intro: intro.current, words });
                cam.rx = 20;
                measure(); apply();
                const scene = lens.current.parentElement;
                scene.dataset.live = "";

                /* ---------------------------------------------------------- the window at rest */
                gsap.set(Object.values(tabEl), { width: 0, autoAlpha: 0 });

                const MOVE = 0.6, PLAY = 1.65, HOLD = 0.06, HERO = 0.5;
                const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
                const camTo = (s, at, dur, ease = "power2.inOut") => tl.to(cam, { ...s, duration: dur, ease }, at);
                const lift = (w, at) => {
                    tl.fromTo(w, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power3.out", immediateRender: false }, at);
                    const marks = w.querySelectorAll(".mark path");
                    tl.fromTo(marks, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.26, stagger: 0.06, ease: "power2.inOut", immediateRender: false }, at + 0.12);
                };
                const drop = (w, at) => tl.to(w, { autoAlpha: 0, y: -22, duration: 0.22, ease: "power2.in" }, at);

                /* ---------------------------------------------------------- the hero */
                // from the first pixel of scroll: the pointer finds a device, the window stands up a little
                const hero = playHome({ q: gsap.utils.selector(home) });
                hero.duration(HERO + MOVE);
                tl.add(hero, 0);
                camTo({ rx: 12, f: 1.04, cy: 380 }, 0, HERO + 0.1, "sine.inOut");
                // the words go up, and the window rises after them into the middle of the screen
                tl.to(intro.current, { autoAlpha: 0, y: -110, duration: 0.36, ease: "power1.in" }, 0.08);
                tl.to(cam, { lift: 1, duration: 0.52, ease: "power3.inOut" }, 0.16);

                /* ---------------------------------------------------------- pictures */
                const near = new Set();
                // a chapter's pictures load as the story comes near it: its images, and the photos it draws as backgrounds and masks
                const wakeIn = (r) => {
                    if (!r) return;
                    r.querySelectorAll("img[data-src]").forEach((img) => { img.decoding = "async"; img.src = img.dataset.src; img.removeAttribute("data-src"); });
                    r.querySelectorAll("[data-bg]").forEach((el) => { if (!el.style.backgroundImage) el.style.backgroundImage = el.dataset.bg; el.removeAttribute("data-bg"); });
                    r.querySelectorAll("[data-mask]").forEach((el) => { el.style.maskImage = el.style.webkitMaskImage = el.dataset.mask; el.removeAttribute("data-mask"); });
                };
                const wake = (i) => {
                    for (let j = Math.max(0, i - 1); j <= Math.min(CHAPTERS.length - 1, i + 2); j++) {
                        if (near.has(j)) continue;
                        near.add(j); wakeIn(states[CHAPTERS[j]]); wakeIn(floats[CHAPTERS[j]]);
                    }
                };
                wakeIn(home);

                /* ---------------------------------------------------------- the chapters */
                // one at a time, each once its design has come into the window (the effect below), so a
                // phone never holds still for long while the story is put together
                const starts = [];
                let at = HERO, prev = null;
                // the design's bar: where the switch's card lies behind each mode, and where the bar begins, for the tabs
                const bar = measureBar(win), { plain, play } = bar.faces;
                const barLeft = (m) => 1280 - 16 - bar.bar.offsetWidth + (m === "design" ? 0 : bar.widths.plain - bar.widths.play);
                const beads = $$("[data-mode-bead]");
                const way = (p) => MODE_WAY[0].map((_, a) => (1 - p) ** 3 * MODE_WAY[0][a] + 3 * (1 - p) ** 2 * p * MODE_WAY[1][a] + 3 * (1 - p) * p * p * MODE_WAY[2][a] + p ** 3 * MODE_WAY[3][a]);
                gsap.set(thumb, bar.at.design);
                // its height, which the scroll needs from the start, follows from the timing alone (checked once all are in)
                el.style.setProperty("--units", (HERO + CHAPTERS.length * (MOVE + PLAY + HOLD) + 0.3).toFixed(3));
                parts.chapter = (i) => ctx.add(() => {
                    const k = CHAPTERS[i];
                    const c = SCENES[k], start = at, mode = c.mode || "design";
                    // where the window changes over: at the camera's fastest, or where the scene opens its design
                    const cut = c.openAt != null ? start + MOVE + c.openAt * PLAY : start + MOVE * 0.45;
                    starts.push(start);
                    // the camera: to the chapter's first shot, stepping back on the way, drifting all through it
                    camTo({ ...c.shots[0][1], side: 1 }, start, i ? MOVE : MOVE + 0.15);
                    tl.to(cam, { breath: 1, duration: MOVE / 2, ease: "sine.inOut" }, start).to(cam, { breath: 0, duration: MOVE / 2, ease: "sine.inOut" }, start + MOVE / 2);
                    // the words
                    if (i) drop(words[i - 1], start);
                    lift(words[i], start + MOVE * (i ? 0.55 : 0.7));
                    // the window: the tab bar, the mode, the controls, then the design itself
                    // who else is here stands left of the bar, and the tabs have the room that is left
                    const people = states[k].querySelector("[data-people]"), left = barLeft(mode) - (people ? 54 : 0);
                    if (people) people.style.left = `${left}px`;
                    const { tabs, plus: plusX } = tabLayout(TABS[k], c.tab, left - 14 - 164);
                    NAMES.forEach((n) => {
                        const tab = tabEl[n], l = tabs[n], on = n === c.tab;
                        if (l) tl.to(tab, { left: l.x, width: l.w, autoAlpha: 1, duration: 0.2, ease: THEME.spring }, cut);
                        else tl.to(tab, { width: 0, autoAlpha: 0, duration: 0.12, ease: "power2.in" }, cut);
                        tl.set(tab, { color: on ? "var(--ink)" : "var(--ink-2)", fontWeight: on ? 500 : 400, paddingRight: on ? 26 : 0 }, cut);
                        tl.set(tab.querySelector("[data-tab-x]"), { opacity: on ? 1 : 0 }, cut);
                    });
                    tl.to(card, { left: tabs[c.tab].x, width: tabs[c.tab].w, duration: 0.22, ease: THEME.spring }, cut);
                    tl.to(plus, { left: plusX, duration: 0.2, ease: THEME.spring }, cut);
                    if (!i) {
                        tl.to(homeCtl, { autoAlpha: 0, duration: 0.05 }, cut);
                        tl.to(designCtl, { autoAlpha: 1, duration: 0.08 }, cut + 0.03);
                        tl.to(railWrap, { opacity: 1, duration: 0.1 }, cut);
                        tl.fromTo(railWrap, { x: -24 }, { x: 0, duration: 0.2, ease: THEME.spring, immediateRender: false }, cut);
                    }
                    tl.to(thumb, { ...bar.at[mode], duration: 0.2, ease: THEME.mode }, cut);
                    Object.entries(bar.modes).forEach(([m, node]) => {
                        tl.set(node, { color: m === mode ? "var(--ink)" : "var(--ink-2)", fontWeight: m === mode ? 600 : 400 }, cut);
                        tl.set(node.querySelectorAll("[data-mode-accent]"), { opacity: m === mode ? 1 : 0 }, cut);
                    });
                    // Animate's bead travels its way as its mode comes on: slowly away, quickly across, slowly home
                    if (mode === "animate") {
                        const went = { p: 0 };
                        tl.to(went, { p: 1, duration: 0.24, onUpdate: () => { const [x, y] = way(went.p > 0 ? smooth(went.p) : 1); beads.forEach((b) => { b.setAttribute("cx", x.toFixed(2)); b.setAttribute("cy", y.toFixed(2)); }); } }, cut + 0.03);
                    }
                    // Export… while the design is drawn; Play whenever it is seen as a prototype, inspected or animated
                    const seen = mode !== "design";
                    tl.to(bar.slot, { width: seen ? bar.widths.play : bar.widths.plain, duration: 0.2, ease: THEME.play }, cut);
                    tl.to(plain, { autoAlpha: seen ? 0 : 1, duration: 0.06 }, cut);
                    tl.to(play, { autoAlpha: seen ? 1 : 0, scale: seen ? 1 : 0.9, duration: 0.1, ease: THEME.pop }, cut);
                    // (Pause is a film's own: a chapter that plays one turns the button itself, and the next finds Play again)
                    tl.to(bar.faces.pause, { autoAlpha: 0, duration: 0.06 }, cut);
                    tl.to(tools, { opacity: mode === "design" ? 1 : 0.32, duration: 0.08 }, cut);
                    tl.set(zoom, { textContent: c.zoom }, cut);
                    tl.set(share, { textContent: c.shared ? u("Shared") : u("Share…") }, cut);
                    // the design: shown whole over the last one, a quick cut where the camera moves fastest
                    if (c.openAt != null) { tl.set(states[k], { autoAlpha: 1 }, cut); tl.set(prev ? states[prev] : home, { autoAlpha: 0 }, cut + 0.001); }
                    else { tl.fromTo(states[k], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06, ease: "power1.inOut", immediateRender: false }, cut); tl.set(prev ? states[prev] : home, { autoAlpha: 0 }, cut + 0.07); }
                    if (prev && floats[prev]) tl.to(floats[prev], { autoAlpha: 0, duration: 0.1 }, start);
                    if (floats[k]) tl.fromTo(floats[k], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1, immediateRender: false }, start + MOVE * 0.2);
                    // the scene, and the camera following it
                    const play_ = c.play({ q: gsap.utils.selector(states[k]), f: floats[k] ? gsap.utils.selector(floats[k]) : null, home: gsap.utils.selector(home), code, bar });
                    play_.duration(PLAY);
                    tl.add(play_, start + MOVE);
                    c.shots.slice(1).forEach(([f, s, dur], j) => {
                        const next = c.shots[j + 2] ? c.shots[j + 2][0] : 1;
                        camTo(s, start + MOVE + f * PLAY, (dur || Math.min(0.42, next - f)) * PLAY);
                    });
                    prev = k;
                    at = start + MOVE + PLAY + HOLD;
                });
                /* ---------------------------------------------------------- once all are in */
                parts.finish = () => ctx.add(() => {
                    // the end: the last scene holds a moment, still drifting, and goes up with the page
                    tl.to({}, { duration: 0.3 }, at);
                    tl.fromTo(ticksRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, immediateRender: false }, starts[0] + MOVE * 0.6);
                    // the chapters' ticks have told it all: they go before the screen is let go, so they never ride up alone
                    tl.to(ticksRef.current, { autoAlpha: 0, duration: 0.14, ease: "power1.in" }, at + 0.1);
                    const TOTAL = tl.duration();
                    el.style.setProperty("--units", TOTAL.toFixed(3));
                    window.bezzleStory = { starts, MOVE, PLAY, HERO, TOTAL, chapters: CHAPTERS, tl };

                    /* ---------------------------------------------------------- following the scroll */
                    const dark = CHAPTERS.indexOf("dark");
                    const darkOn = starts[dark] + MOVE + PLAY * DARK_AT, darkOff = starts[dark + 1] + MOVE * 0.45;
                    wake(0);
                    let shown = -2;
                    const bars = ticks.map((b) => b.querySelector("i"));
                    let live = null;
                    tl.eventCallback("onUpdate", () => {
                        const time = tl.time(), w = (time / 2.6) * Math.PI * 2;
                        // your own pointer works on the home while the hero is at rest
                        const rest = time < 0.02;
                        if (rest !== live) { live = rest; if (rest) scene.dataset.live = ""; else delete scene.dataset.live; }
                        cam.drift = Math.sin(w); cam.drift2 = Math.cos(w);
                        apply();
                        storyRead(time / TOTAL, (() => { let c = -1; for (let j = 0; j < starts.length; j++) if (time >= starts[j] + MOVE * 0.45) c = j; return c; })());
                        let i = -1;
                        for (let j = 0; j < starts.length; j++) if (time >= starts[j] + MOVE * 0.45) i = j;
                        if (i !== shown) {
                            shown = i;
                            ticks.forEach((b, j) => (j === i ? b.setAttribute("aria-current", "step") : b.removeAttribute("aria-current")));
                            if (i >= 0) wake(i);
                        }
                        bars.forEach((b, j) => {
                            const a = starts[j], z = starts[j + 1] ?? TOTAL;
                            b.style.transform = `scaleX(${Math.min(1, Math.max(0, (time - a) / (z - a))).toFixed(3)})`;
                        });
                        const inDark = time >= darkOn && time < darkOff;
                        if (inDark !== (root.dataset.scene === "dark")) { if (inDark) root.dataset.scene = "dark"; else delete root.dataset.scene; }
                    });

                    // the story eases after the scroll (0.7 s to catch up), so a quick flick still plays out at the app's pace
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
                    ticks.forEach((b, i) => {
                        const go = () => glideTo(trigger.start + ((starts[i] + MOVE + PLAY * 0.97) / TOTAL) * (trigger.end - trigger.start));
                        b.addEventListener("click", go);
                        off.push(() => b.removeEventListener("click", go));
                    });
                    ScrollTrigger.refresh();
                    // the chapters can be reached from the header, and a link to one (/#adapt) lands on it
                    const at_ = (i) => trigger.start + ((starts[i] + MOVE * 0.92) / TOTAL) * (trigger.end - trigger.start);
                    setStory({ goTo: (i, immediate) => { if (immediate) jumpTo(at_(i)); else glideTo(at_(i)); } });
                    off.push(() => setStory(null));
                    const wanted = decodeURIComponent(location.hash.slice(1));
                    if (wanted) requestAnimationFrame(() => goTo(wanted, { immediate: true }));
                });

                // shown only now that it stands where the camera puts it
                scene.dataset.ready = "";
                off.push(hoverHome(home));
                const atTop = scrollY < 40;
                if (atTop) gsap.set(lens.current, { autoAlpha: 0 });
                // the people at work on the hero come in after its words (or are simply there, further down)
                revealed().then(() => alive && ctx && ctx.add(() => off.push(enterHero(intro.current, { play: atTop, delay: 1.05 }))));
                // the first view: once the words rise and the window's own pictures are in, it comes up onto the desk and opens as the app does
                const pictures = [...home.querySelectorAll("img")].map((img) => (img.decode ? img.decode().catch(() => {}) : null));
                const inPlace = Promise.race([Promise.all(pictures), new Promise((r) => setTimeout(r, 2500))]);
                if (atTop) Promise.all([revealed(), inPlace]).then(() => alive && ctx && ctx.add(() => {
                    gsap.fromTo(lens.current, { y: 160, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5, delay: 0.1, ease: "expo.out" });
                    enterHome(home, 0.4);
                }));
            }, story.current);
            startTransition(() => setUpTo({ code, n: 1 }));
        };
        afterFonts(build);
        return () => { alive = false; parts.alive = false; ctx?.revert(); off.forEach((f) => f()); delete document.documentElement.dataset.scene; };
    }, [motion, code]);

    // a chapter's design has come into the window: its part of the timeline, then the next one's design (or the end)
    useEffect(() => {
        const parts = builder.current;
        if (!parts || parts.code !== code || upTo.code !== code || !upTo.n) return;
        let on = true;
        later(() => {
            if (!on || !parts.alive || !parts.chapter || parts.built !== upTo.n - 1) return;
            parts.chapter(parts.built++);
            if (parts.built < CHAPTERS.length) startTransition(() => setUpTo({ code, n: parts.built + 1 }));
            else later(() => parts.alive && parts.finish());
        });
        return () => { on = false; };
    }, [upTo, code]);

    const still = (k) => `/img/app/${locale}/${k}.webp`;
    return (
        <section ref={story} className="story" id="story" aria-label={t.story_label}>
            <div className="stage">
                <div ref={intro} className="intro page"><Hero t={t} code={code} /></div>
                {motion && <World key={code} code={code} t={t} lens={lens} rig={rig} upTo={upTo.code === code ? upTo.n : 0} />}
                <img className="still still-home" src={still("home")} width="1280" height="853" loading="lazy" alt="" />
                <div className="words page">
                    <ol ref={list} className="chapters">
                        {CHAPTERS.map((k, i) => {
                            const [chip, l1, l2, body] = t.chapters[i];
                            return (
                                <li key={k} className="chapter" data-k={k} id={k}>
                                    <span className="chip">{chip}</span>
                                    <h2 className="title"><Marked first={l1} second={l2} /></h2>
                                    <p className="body">{body}</p>
                                    {CAPTURED.has(k) && <img className="still" src={still(k === "files" ? "hero" : k)} width="1280" height="800" loading="lazy" alt="" />}
                                </li>
                            );
                        })}
                    </ol>
                    <div ref={ticksRef} className="ticks">
                        {CHAPTERS.map((k, i) => <button key={k} type="button" className="tick" aria-label={t.chapters[i][0]}><span><i /></span></button>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
