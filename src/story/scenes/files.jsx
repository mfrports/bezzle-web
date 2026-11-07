/*
 * Import: Wander.fig, dragged from the Finder onto Bezzle's home. Over the window the drag takes the
 * copy badge and the window shows where it will land; let go, and the design opens in a tab of its
 * own (the tab grows in from its leading edge, TabBar 176). Its artboards come in one after another,
 * every layer arrives in the list as it is read, the count running up with them, and the import
 * report rises at the foot of the canvas (ImportReport.swift: "Brought over from Figma", serif 17
 * medium, 400 wide, a lifted card of radius 14).
 */
import { gsap } from "gsap";
import { Canvas, Card, AddChips, Label, LayersPanel, Selection } from "@/app/Kit";
import { brought, plural } from "@/app/words";
import { THEME, spring, cubicOut, glide } from "@/story/engine";

export const SCREENS = [["Discover", "wander-discover", 312], ["Place", "wander-place", 546], ["Saved", "wander-saved", 781]];
export const PLACE_ROWS = ["Fact 1 label", "Fact 1 value", "Fact 1", "Reviews", "Score", "Star 5", "Star 4", "Star 3", "Star 2", "Star 1", "Place region", "Place pin", "Place title", "Dot 4", "Dot 3", "Dot 2", "Dot 1", "Page dots", "Save heart", "Save", "Back chevron", "Back", "Status bar", "Hero shade", "Hero"]
    .map((name, i) => ({ id: name, name, kind: /label|value|Reviews|Score|region|title/.test(name) ? "text" : /Star|pin|heart|chevron/.test(name) ? "path" : /Dot|Back$/.test(name) ? "ellipse" : name === "Status bar" ? "group" : "rect", on: name === "Hero", open: name === "Status bar" ? false : undefined, i }));

/** Wander's three screens at 50 %, as the window shows them when the design opens. */
export function WanderScreens({ top = 207 }) {
    return SCREENS.map(([name, pic, x]) => (
        <div key={name} data-board={name}>
            <Label x={x} y={top} on={name === "Place"}>{name}</Label>
            <img data-screen={name} data-src={`/img/parts/${pic}.webp`} alt="" className="bz-abs" style={{ left: x, top, width: 196.5, height: 426, boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }} />
        </div>
    ));
}

export function FilesState({ u, code }) {
    return (
        <>
            <LayersPanel u={u} crumb="Place" count={47} rows={PLACE_ROWS} />
            <Canvas rulers={{ origin: [546, 207], zoom: 0.5, band: [546, 742.5], bandY: [207, 430] }}>
                <WanderScreens />
                <Selection x={546} y={207} w={196.5} h={223} data="files" />
                {/* the import report, at the foot of the canvas */}
                <div data-report className="bz-abs bz-lifted rounded-[14px] p-4" style={{ left: 445, top: 646, width: 400, opacity: 0 }}>
                    <div className="font-serif font-medium text-[17px]">{brought(code, "Figma")}</div>
                    <div className="mt-1 text-[12px] bz-num" style={{ color: "var(--ink-2)" }}>{plural(code)("artboards", 3)}, <span data-read>{plural(code)("layers", 238)}</span>.</div>
                    <div className="mt-2.5 text-[12.5px]">{u("Everything came across as it is.")}</div>
                </div>
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="393 × 446 · 0, 0" />
            <Card top={114} glyph="corners" title={u("Corners")} summary="32" />
            <Card top={162} glyph="opacity" title={u("Opacity")} summary="100%" />
            <Card top={210} glyph="picture" title={u("Fill")} summary={u("Picture")} />
            <Card top={258} glyph="picture" title={u("Photo")} summary={u("Original")} />
            <AddChips top={312} items={[u("Border"), u("Shadow"), u("Blur"), "3D", u("Export"), u("Repeat")]} />
        </>
    );
}

/** The file as the Finder drags it: its icon with a picture of what is inside, its name in a selection pill. */
export function FilesFloat() {
    return (
        <div data-file className="bz-abs" style={{ left: 0, top: 0, width: 120, opacity: 0, transformOrigin: "78px 82px", willChange: "transform" }}>
            <div data-icon className="relative mx-auto" style={{ width: 84, height: 106 }}>
                <i className="bz-abs block" style={{ inset: "8px 2px 0", borderRadius: 6, boxShadow: "0 16px 24px rgb(0 0 0 / 0.24), 0 2px 5px rgb(0 0 0 / 0.16)" }} />
                <div className="bz-abs inset-0" style={{ background: "#FFFFFF", borderRadius: 5, clipPath: "polygon(0 0, 74% 0, 100% 21%, 100% 100%, 0 100%)" }} />
                <i className="bz-abs block" style={{ right: 0, top: 0, width: "26%", height: "21%", borderRadius: "0 0 0 4px", background: "linear-gradient(225deg, transparent 50%, #DAD7D1 50%)" }} />
                <div className="bz-abs flex gap-[3px]" style={{ left: 9, top: 22 }}>
                    {SCREENS.map(([n, pic]) => <img key={n} data-src={`/img/parts/${pic}.webp`} alt="" className="block rounded-[2px] max-w-none" style={{ width: 20, height: 43, boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.12)" }} />)}
                </div>
                <span className="bz-abs inset-x-0 text-center text-[10px] font-bold tracking-[0.06em]" style={{ bottom: 9, color: "#8C8983" }}>FIG</span>
            </div>
            <div data-name className="mt-1.5 mx-auto w-fit px-[5px] rounded-[4px] text-[11.5px] font-medium leading-[17px] text-white" style={{ background: "#2F6BE8" }}>Wander.fig</div>
            {/* the system's arrow holding it, and the copy badge it takes over a window that will open it */}
            <svg className="bz-abs" viewBox="0 0 22 28" width="22" height="28" style={{ left: 66, top: 70, filter: "drop-shadow(0 2px 3px rgb(0 0 0 / 0.28))" }}>
                <path d="M2.5 2.2v19.6l4.9-4.7 3.4 7.7 3.4-1.4-3.3-7.6h6.8z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span data-plus className="bz-abs grid place-items-center rounded-full text-white" style={{ left: 80, top: 88, width: 17, height: 17, background: "#34C759", boxShadow: "0 0 0 1.5px #fff, 0 1px 3px rgb(0 0 0 / 0.3)", transform: "scale(0)" }}>
                <svg viewBox="0 0 10 10" width="9" height="9"><path d="M5 1.5v7M1.5 5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </span>
        </div>
    );
}

/** Where the drop lands, in the scene's own time: the story opens the design's tab then. */
export const OPEN_AT = 0.36;

/** The file comes in from beside the window and is let go over it; the design then builds itself up. */
export function playFiles({ q, f, home }) {
    const tl = gsap.timeline();
    const file = f("[data-file]")[0], icon = f("[data-icon]")[0], name = f("[data-name]")[0], plus = f("[data-plus]")[0];
    const drop = home("[data-drop]")[0];
    // the drag: out of the Finder beside the window, over it, a moment's hover, let go
    tl.set(file, { opacity: 0.92 }, 0);
    tl.fromTo(file, { x: -260, z: 140, rotation: -7, scale: 1.35 }, { x: 430, rotation: 1.5, duration: 0.3, ease: "power2.out" }, 0);
    tl.fromTo(file, { y: 640 }, { y: 300, duration: 0.3, ease: "power3.out" }, 0);
    tl.to(file, { x: 446, y: 314, z: 110, rotation: 0, duration: 0.05, ease: "sine.inOut" }, 0.3);
    tl.to(drop, { opacity: 1, duration: 0.04 }, 0.2);
    tl.to(plus, { scale: 1, duration: 0.05, ease: spring(0.3, 0.55) }, 0.21);
    // let go: the icon goes into the window, the arrow stays
    tl.to([icon, name, plus], { scale: 0.55, opacity: 0, y: -8, duration: 0.04, ease: "power2.in" }, OPEN_AT - 0.01);
    tl.to(drop, { opacity: 0, duration: 0.03 }, OPEN_AT);
    // the design builds itself up as it is read: the artboards, every layer, the inspector
    q("[data-board]").forEach((b, i) => tl.fromTo(b, { opacity: 0, y: 14, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.09, ease: spring(0.5, 0.78) }, OPEN_AT + 0.02 + i * 0.035));
    tl.fromTo(q('[data-sel="files"]')[0], { opacity: 0 }, { opacity: 1, duration: 0.02 }, OPEN_AT + 0.14);
    const rows = q("[data-row]");
    tl.fromTo(rows, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.03, ease: cubicOut, stagger: 0.12 / rows.length }, OPEN_AT + 0.03);
    const count = q("[data-count]")[0], n = { v: 0 };
    tl.fromTo(n, { v: 0 }, { v: 47, duration: 0.15, ease: "power1.out", onUpdate: () => { count.textContent = Math.round(n.v); } }, OPEN_AT + 0.03);
    tl.fromTo(q("[data-card], [data-adds]"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.06, ease: THEME.open, stagger: 0.016 }, OPEN_AT + 0.08);
    // the report, at the foot of the canvas
    tl.fromTo(q("[data-report]")[0], { opacity: 0, y: 16, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.14, ease: spring(0.24, 0.86) }, 0.62);
    // the pointer, its file let go, drifts down to the report
    glide(tl, file, [440, 610], 0.66, 0.2);
    tl.to(file, { opacity: 0, duration: 0.06 }, 0.86);
    return tl;
}
