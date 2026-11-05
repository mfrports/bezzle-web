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
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useLang, useT } from "@/i18n";
import { CHAPTERS } from "@/words";
import { ui } from "@/app/words";
import Marked from "@/site/Marked";
import Ctas from "@/site/Ctas";
import { smoothScroll, glideTo } from "@/lib/smooth";
import { TrafficLights, Tab, tabWidth, DesignControls, ModeSwitch, ExportButton, HomeControls, ToolRail, Pointer, Icon } from "@/app/Kit";
import { THEME, shot, makeCamera } from "@/story/engine";
import { HomeState, playHome, enterHome, hoverHome } from "@/story/scenes/home";
import { FilesState, FilesFloat, playFiles, OPEN_AT } from "@/story/scenes/files";
import { AdaptState, playAdapt } from "@/story/scenes/adapt";
import { ComponentsState, playComponents } from "@/story/scenes/components";
import { PrototypeState, playPrototype } from "@/story/scenes/prototype";
import { InspectState, playInspect } from "@/story/scenes/inspect";
import { CutoutState, playCutout } from "@/story/scenes/cutout";
import { DarkState, playDark, DARK_AT } from "@/story/scenes/dark";
import { DeckState, playDeck } from "@/story/scenes/deck";
import { TogetherState, playTogether } from "@/story/scenes/together";
import { AiState, AiFloat, playAi } from "@/story/scenes/ai";

/* Each chapter: the design's tab, the window's mode and zoom, the scene, and where the camera looks
   (shots in the window's points, at points of the scene's own time). */
const SCENES = {
    files: { tab: "Wander", zoom: "50%", State: FilesState, Float: FilesFloat, play: playFiles, openAt: OPEN_AT,
        shots: [[0, shot(-20, 10, 1000, 690, { rx: 6, ry: -9 })], [0.37, shot(40, 0, 980, 790), 0.2], [0.6, shot(292, 290, 710, 500)]] },
    adapt: { tab: "Adoption Day Sizes", zoom: "25%", State: AdaptState, play: playAdapt,
        shots: [[0, shot(372, 70, 900, 560)], [0.34, shot(372, 90, 900, 650)], [0.64, shot(372, 70, 900, 560)]] },
    components: { tab: "Wander", zoom: "50%", State: ComponentsState, play: playComponents,
        shots: [[0, shot(300, 190, 740, 474)], [0.14, shot(302, 280, 520, 300), 0.12], [0.4, shot(300, 190, 740, 474), 0.14]] },
    prototype: { tab: "Wander", mode: "prototype", zoom: "50%", State: PrototypeState, play: playPrototype,
        shots: [[0, shot(280, 180, 730, 490)], [0.15, shot(540, 0, 740, 470), 0.2], [0.36, shot(330, 52, 620, 739), 0.2]] },
    inspect: { tab: "Wander", mode: "inspect", zoom: "78%", State: InspectState, play: playInspect,
        shots: [[0, shot(440, 52, 420, 739)], [0.56, shot(420, 52, 860, 739)]] },
    cutout: { tab: "Adoption Day Sizes", zoom: "42%", State: CutoutState, play: playCutout,
        shots: [[0, shot(380, 110, 900, 620)], [0.22, shot(395, 120, 500, 610)]] },
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
function tabLayout(names, sel) {
    let x = 164;
    const out = {};
    for (const n of names) { const w = n === sel ? 194 : tabWidth(n, false) + (SHARED.has(n) ? 18 : 0); out[n] = { x, w }; x += w + 4; }
    return { tabs: out, plus: x + 1 };
}

/** The world the camera looks at: the window in its own points, and what floats beside it. */
function World({ code, t, lens, rig }) {
    const u = ui(code);
    return (
        <div className="scene" aria-hidden="true">
            <div className="lens" ref={lens}>
                <div className="rig bz" ref={rig}>
                                        <div className="bz-win" data-win="">
                        <div data-home className="bz-abs inset-0"><HomeState u={u} /><Pointer data="home" /></div>
                        <div data-rail-wrap className="bz-abs inset-0" style={{ opacity: 0 }}><ToolRail /></div>
                        {CHAPTERS.map((k) => { const S = SCENES[k].State; return <div key={k} data-state={k} className="bz-abs inset-0" style={{ visibility: "hidden", opacity: 0, background: "var(--paper)" }}><S u={u} code={code} t={t} /></div>; })}
                        {/* the title bar */}
                        <TrafficLights />
                        <div data-tabcard className="bz-abs bz-card rounded-[8px]" style={{ left: 88, top: 11, width: 64, height: 30 }} />
                        <div className="bz-abs font-serif font-semibold text-[16.5px] leading-[30px] text-center tracking-[-0.01em]" style={{ left: 88, top: 11, width: 64 }}>Bezzle</div>
                        {NAMES.map((n) => <Tab key={n} name={n} x={164} w={194} data={n} shared={SHARED.has(n)} />)}
                        <div data-tab-plus className="bz-abs grid place-items-center w-[26px] h-[26px] rounded-[7px]" style={{ left: 160, top: 13, color: "var(--ink-2)" }}><Icon name="plus" size={14} /></div>
                        <div data-homectl className="bz-abs inset-0" style={{ bottom: "auto", height: 52 }}><HomeControls u={u} /></div>
                        <div data-designctl className="bz-abs inset-0" style={{ bottom: "auto", height: 52, opacity: 0, visibility: "hidden" }}><DesignControls u={u} /><ModeSwitch u={u} /><ExportButton u={u} /></div>
                    </div>
                    {CHAPTERS.map((k) => { const F = SCENES[k].Float; return F ? <div key={k} data-float={k} className="bz-abs left-0 top-0" style={{ transformStyle: "preserve-3d", visibility: "hidden" }}><F u={u} code={code} t={t} /></div> : null; })}
                </div>
            </div>
        </div>
    );
}

export default function Story() {
    const t = useT(), { code, locale } = useLang();
    const [motion, setMotion] = useState(false);
    const story = useRef(null), intro = useRef(null), list = useRef(null), lens = useRef(null), rig = useRef(null), ticksRef = useRef(null);
    useEffect(() => { setMotion(document.documentElement.classList.contains("motion")); }, []);

    useEffect(() => {
        if (!motion) return;
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
        let ctx = null, alive = true;
        const off = [];
        const root = document.documentElement;
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
                const thumb = $("[data-mode-thumb]"), modes = Object.fromEntries($$("[data-mode]").map((m) => [m.dataset.mode, m]));
                const zoom = $("[data-zoom]"), share = $("[data-share]"), plain = $("[data-export-plain]"), play = $("[data-export-play]");
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

                const MOVE = 0.45, PLAY = 0.95, HOLD = 0.04, HERO = 0.4;
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
                tl.to(intro.current, { autoAlpha: 0, y: -80, duration: 0.4, ease: "power2.in" }, HERO * 0.35);

                /* ---------------------------------------------------------- the chapters */
                const starts = [];
                let at = HERO, prev = null;
                const modeAt = (m) => ({ left: modes[m].offsetLeft, width: modes[m].offsetWidth });
                gsap.set(thumb, modeAt("design"));
                CHAPTERS.forEach((k, i) => {
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
                    const { tabs, plus: plusX } = tabLayout(TABS[k], c.tab);
                    NAMES.forEach((n) => {
                        const tab = tabEl[n], l = tabs[n], on = n === c.tab;
                        if (l) tl.to(tab, { left: l.x, width: l.w, autoAlpha: 1, duration: 0.2, ease: THEME.spring }, cut);
                        else tl.to(tab, { width: 0, autoAlpha: 0, duration: 0.12, ease: "power2.in" }, cut);
                        tl.set(tab, { color: on ? "var(--ink)" : "var(--ink-2)", fontWeight: on ? 500 : 400 }, cut);
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
                    tl.to(thumb, { ...modeAt(mode), duration: 0.2, ease: THEME.mode }, cut);
                    Object.entries(modes).forEach(([m, node]) => tl.set(node, { color: m === mode ? "var(--ink)" : "var(--ink-2)", fontWeight: m === mode ? 500 : 400 }, cut));
                    tl.to(plain, { autoAlpha: mode === "prototype" ? 0 : 1, duration: 0.06 }, cut);
                    tl.to(play, { autoAlpha: mode === "prototype" ? 1 : 0, scale: mode === "prototype" ? 1 : 0.9, duration: 0.1, ease: THEME.pop }, cut);
                    tl.to(tools, { opacity: mode === "design" ? 1 : 0.32, duration: 0.08 }, cut);
                    tl.set(zoom, { textContent: c.zoom }, cut);
                    tl.set(share, { textContent: c.shared ? u("Shared") : u("Share…") }, cut);
                    // the design: shown whole over the last one, a quick cut where the camera moves fastest
                    if (c.openAt != null) { tl.set(states[k], { autoAlpha: 1 }, cut); tl.set(prev ? states[prev] : home, { autoAlpha: 0 }, cut + 0.001); }
                    else { tl.fromTo(states[k], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06, ease: "power1.inOut", immediateRender: false }, cut); tl.set(prev ? states[prev] : home, { autoAlpha: 0 }, cut + 0.07); }
                    if (prev && floats[prev]) tl.to(floats[prev], { autoAlpha: 0, duration: 0.1 }, start);
                    if (floats[k]) tl.fromTo(floats[k], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1, immediateRender: false }, start + MOVE * 0.2);
                    // the scene, and the camera following it
                    const play_ = c.play({ q: gsap.utils.selector(states[k]), f: floats[k] ? gsap.utils.selector(floats[k]) : null, home: gsap.utils.selector(home), code });
                    play_.duration(PLAY);
                    tl.add(play_, start + MOVE);
                    c.shots.slice(1).forEach(([f, s, dur], j) => {
                        const next = c.shots[j + 2] ? c.shots[j + 2][0] : 1;
                        camTo(s, start + MOVE + f * PLAY, dur || Math.min(0.42, (next - f) * PLAY));
                    });
                    prev = k;
                    at = start + MOVE + PLAY + HOLD;
                });
                // the end: the last scene holds a moment, still drifting, and goes up with the page
                tl.to({}, { duration: 0.3 }, at);
                tl.fromTo(ticksRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, immediateRender: false }, starts[0] + MOVE * 0.6);
                const TOTAL = tl.duration();
                el.style.setProperty("--units", TOTAL.toFixed(3));
                window.bezzleStory = { starts, MOVE, PLAY, HERO, TOTAL, chapters: CHAPTERS, tl };

                /* ---------------------------------------------------------- following the scroll */
                const dark = CHAPTERS.indexOf("dark");
                const darkOn = starts[dark] + MOVE + PLAY * DARK_AT, darkOff = starts[dark + 1] + MOVE * 0.45;
                const near = new Set();
                const wakeIn = (r) => r && r.querySelectorAll("img[data-src]").forEach((img) => { img.decoding = "async"; img.src = img.dataset.src; img.removeAttribute("data-src"); });
                const wake = (i) => {
                    for (let j = Math.max(0, i - 1); j <= Math.min(CHAPTERS.length - 1, i + 2); j++) {
                        if (near.has(j)) continue;
                        near.add(j); wakeIn(states[CHAPTERS[j]]); wakeIn(floats[CHAPTERS[j]]);
                    }
                };
                wakeIn(home); wake(0);
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

                const trigger = ScrollTrigger.create({ trigger: el, start: "top top", end: "bottom bottom", scrub: smoothScroll() ? true : 0.5, animation: tl });
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
                // the first view: the window comes up onto the desk and opens as the app does
                off.push(hoverHome(home));
                if (scrollY < 40) {
                    gsap.from(lens.current, { y: 160, autoAlpha: 0, duration: 1.5, delay: 0.15, ease: "expo.out" });
                    enterHome(home, 0.45);
                }
            }, story.current);
        };
        (document.fonts?.ready || Promise.resolve()).then(() => requestAnimationFrame(build));
        return () => { alive = false; ctx?.revert(); off.forEach((f) => f()); delete document.documentElement.dataset.scene; };
    }, [motion, code]);

    const still = (k) => `/bezzle-web/img/app/${locale}/${k}.webp`;
    return (
        <section ref={story} className="story" id="story" aria-label={t.story_label}>
            <div className="stage">
                <div ref={intro} className="intro page">
                    <h1 className="display"><Marked first={t.h1[0]} second={t.h1[1]} /></h1>
                    <p className="lede">{t.lede}</p>
                    <Ctas className="ctas" />
                    <p className="facts">{t.cta_small}</p>
                </div>
                {motion && <World key={code} code={code} t={t} lens={lens} rig={rig} />}
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
                                    <img className="still" src={still(k === "files" ? "hero" : k)} width="1280" height="800" loading="lazy" alt="" />
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
