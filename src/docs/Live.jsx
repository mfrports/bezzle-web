/*
 * A figure that plays: the app's window rebuilt (src/app/Kit.jsx), with the same scene the home
 * page's story plays for this feature (src/story/scenes/), framed on what it is about and played by
 * the scroll as the figure is read past, a pencil line under it showing how far. It is the capture
 * until the page stands (and stays the capture without motion, or before the script), so the
 * prerendered page and the first view are the same.
 */
import { Component, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ui } from "@/app/words";
import { T } from "@/words";
import { TrafficLights, Tab, DesignControls, ModeSwitch, ExportButton, ToolRail, Icon } from "@/app/Kit";
import { AdaptState, playAdapt } from "@/story/scenes/adapt";
import { ComponentsState, playComponents } from "@/story/scenes/components";
import { PrototypeState, playPrototype } from "@/story/scenes/prototype";
import { InspectState, playInspect } from "@/story/scenes/inspect";
import { CutoutState, playCutout } from "@/story/scenes/cutout";
import { DarkState, playDark } from "@/story/scenes/dark";
import { DeckState, playDeck } from "@/story/scenes/deck";
import { TogetherState, playTogether } from "@/story/scenes/together";

/* Each scene: its design's tab, the window's mode and zoom, and the part of the window it is about
   (in the window's points), the frame of the story's camera through the scene. */
export const LIVE = {
    adapt: { tab: "Adoption Day Sizes", zoom: "25%", State: AdaptState, play: playAdapt, view: [360, 56, 920, 700] },
    components: { tab: "Wander", zoom: "50%", State: ComponentsState, play: playComponents, view: [290, 176, 760, 500] },
    prototype: { tab: "Wander", mode: "prototype", zoom: "50%", State: PrototypeState, play: playPrototype, view: [392, 0, 888, 800] },
    inspect: { tab: "Wander", mode: "inspect", zoom: "78%", State: InspectState, play: playInspect, view: [410, 52, 870, 748] },
    cutout: { tab: "Adoption Day Sizes", zoom: "42%", State: CutoutState, play: playCutout, view: [370, 100, 910, 640] },
    dark: { tab: "Wander Night", zoom: "36%", State: DarkState, play: playDark, view: [306, 52, 974, 632] },
    deck: { tab: "Wander Posts", zoom: "34%", State: DeckState, play: playDeck, view: [282, 52, 998, 748] },
    together: { tab: "Wander Pitch", shared: true, zoom: "27%", State: TogetherState, play: playTogether, view: [290, 52, 734, 528] },
};

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Whether this figure should play: with motion, once the page stands. */
export function useLive(name) {
    const [live, setLive] = useState(false);
    useEffect(() => { if (LIVE[name] && document.documentElement.classList.contains("motion")) setLive(true); }, [name]);
    return live;
}

/** Should a scene ever fail, the figure is its capture again, and the page stands. */
export class LiveGuard extends Component {
    constructor(props) { super(props); this.state = { failed: false }; }
    static getDerivedStateFromError() { return { failed: true }; }
    componentDidCatch(error) { console.warn("[docs] a live figure fell back to its capture:", error); }
    render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

export default function Live({ name, code, label, onOpen }) {
    const c = LIVE[name];
    const box = useRef(null), rig = useRef(null), state = useRef(null), line = useRef(null);
    const [vx, vy, vw, vh] = c.view;
    const u = ui(code);
    // the window scaled to the figure's width, its view in the middle
    useIso(() => {
        const fit = () => {
            const k = box.current.clientWidth / vw;
            rig.current.style.transform = `scale(${k}) translate(${-vx}px, ${-vy}px)`;
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(box.current);
        return () => ro.disconnect();
    }, [name]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
        const win = rig.current;
        // the pictures inside, and the window in its mode
        win.querySelectorAll("img[data-src]").forEach((img) => { img.decoding = "async"; img.src = img.dataset.src; img.removeAttribute("data-src"); });
        const mode = c.mode || "design";
        const m = win.querySelector(`[data-mode="${mode}"]`), thumb = win.querySelector("[data-mode-thumb]");
        if (m && thumb) Object.assign(thumb.style, { left: `${m.offsetLeft}px`, width: `${m.offsetWidth}px` });
        win.querySelectorAll("[data-mode]").forEach((n) => { n.style.color = n.dataset.mode === mode ? "var(--ink)" : "var(--ink-2)"; n.style.fontWeight = n.dataset.mode === mode ? 500 : 400; });
        if (mode === "prototype") { gsap.set(win.querySelector("[data-export-plain]"), { autoAlpha: 0 }); gsap.set(win.querySelector("[data-export-play]"), { autoAlpha: 1 }); }
        if (mode !== "design") gsap.set(win.querySelectorAll('[data-tool]:not([data-tool="select"])'), { opacity: 0.32 });
        let ctx = gsap.context(() => {
            const tl = c.play({ q: gsap.utils.selector(state.current), f: () => [], home: () => [], code });
            tl.pause(0);
            ScrollTrigger.create({
                trigger: box.current, start: "top 82%", end: "bottom 28%", scrub: 0.7,
                onUpdate: (st) => { tl.progress(st.progress); line.current.style.transform = `scaleX(${st.progress.toFixed(4)})`; },
            });
        }, box);
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => ctx.revert();
    }, [name, code]);
    return (
        <button type="button" ref={box} data-live={name} className="live" style={{ aspectRatio: `${vw} / ${vh}` }} onClick={onOpen} aria-label={label}>
            <div className="live-rig bz" ref={rig} aria-hidden="true" inert>
                <div className="bz-win live-win">
                    <div className="bz-abs inset-0"><ToolRail /></div>
                    <div ref={state} className="bz-abs inset-0" style={{ background: "var(--paper)" }}><c.State u={u} code={code} t={T[code]} /></div>
                    <TrafficLights />
                    <div className="bz-abs bz-card rounded-[8px]" style={{ left: 164, top: 11, width: 194, height: 30 }} />
                    <div className="bz-abs font-serif font-semibold text-[16.5px] leading-[30px] text-center tracking-[-0.01em]" style={{ left: 88, top: 11, width: 64 }}>Bezzle</div>
                    <Tab name={c.tab} x={164} w={194} on shared={c.shared} />
                    <div className="bz-abs grid place-items-center w-[26px] h-[26px] rounded-[7px]" style={{ left: 362, top: 13, color: "var(--ink-2)" }}><Icon name="plus" size={14} /></div>
                    <DesignControls u={u} zoom={c.zoom} shared={c.shared} /><ModeSwitch u={u} /><ExportButton u={u} />
                </div>
            </div>
            <i className="live-line" aria-hidden="true"><i ref={line} /></i>
        </button>
    );
}
