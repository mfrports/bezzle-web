/*
 * Inspect: Wander's Place screen at 78 %, on graph paper. Hovering follows the pointer (InspectTool
 * 115–130): a pencil outline and a white "W × H" pill. A click picks the Book button: its outline
 * thickens, its width and height are drawn in pencil 12 pt off it. Hovering the artboard then draws
 * the pink spans to its edges, each with its ticks and its pill, growing in on a spring that
 * overshoots. In the inspector, the box model ("180 × 54", the pink distances) and the code card:
 * CSS, then SwiftUI (the thumb slides, 0.3/0.8), then Copy CSS turning to Copied.
 */
import { gsap } from "gsap";
import { Canvas, LayersPanel, Pointer } from "@/app/Kit";
import { GraphPaper } from "@/story/scenes/prototype";
import { stiff } from "@/story/engine";

const Z = 0.78, PX = 492, PY = 7;
const BTN = [639, 612, 141, 42];
const CSS = [[".book-button {"], ["  position", "relative"], ["  width", "180px"], ["  height", "54px"], ["}"], [""], [".book-button > .book {"], ["  position", "absolute"], ["  left", "0"], ["  top", "0"],
    ["  width", "180px"], ["  height", "54px"], ["  background", "#E0673E"], ["  border-radius", "18px"], ["  box-shadow", "0px 8px 18px rgba(224, 103, 62, 0.35)"], ["}"], [""],
    [".book-button > .book-label {"], ["  position", "absolute"], ["  top", "17px"], ["  width", "180px"], ["  color", "#FFFFFF"], ["  font-size", "16px"], ["  font-weight", "600"], ["  text-align", "center"], ["}"]];
const SWIFT = ["ZStack {", "    RoundedRectangle(cornerRadius: 18)", "        .fill(Color(hex: 0xE0673E))", "        .shadow(color: .black.opacity(0.35),", "                radius: 9, y: 8)", "    Text(\"Book a tour\")",
    "        .font(.system(size: 16, weight: .semibold))", "        .foregroundStyle(.white)", "}", ".frame(width: 180, height: 54)"];
const SPANS = [
    // x, y, w, h, value, pill x, pill y, grow from
    [492, BTN[1] + 21, BTN[0] - 492, 1, 189, 565, 633, "100% 50%"],
    [BTN[0] + BTN[2], BTN[1] + 21, 798 - BTN[0] - BTN[2], 1, 24, 789, 620, "0% 50%"],
    [709, BTN[1] + BTN[3], 1, 672 - BTN[1] - BTN[3], 24, 722, 664, "50% 0%"],
    [709, 72, 1, BTN[1] - 72, 774, 709, 330, "50% 100%"],
];
const GROW = stiff(420, 24);

export function InspectState({ u }) {
    return (
        <>
            <LayersPanel u={u} crumb="Place" count={47} rows={["Home indicator", "Book button", "Per person", "Price", "Bottom bar", "About text", "About", "Fact 3 label", "Fact 3 value", "Fact 3", "Fact 2 label", "Fact 2 value", "Fact 2", "Fact 1 label", "Fact 1 value", "Fact 1", "Reviews", "Score", "Star 5", "Star 4", "Star 3", "Star 2", "Star 1"].map((n) => ({ name: n, kind: /label|value|About|Price|Per|Reviews|Score/.test(n) && n !== "About text" ? "text" : n === "Book button" ? "group" : /Star/.test(n) ? "path" : "rect", on: n === "Book button", open: n === "Book button" ? false : undefined }))} />
            <Canvas rulers={false} grid={<GraphPaper step={22} />}>
                <img data-src="/img/parts/wander-discover.webp" alt="" className="bz-abs" style={{ left: 127, top: PY, width: 306.5, height: 664.6 }} />
                <img data-src="/img/parts/wander-place.webp" alt="" className="bz-abs" style={{ left: PX, top: PY, width: 306.5, height: 664.6, boxShadow: "0 1px 3px rgb(58 50 38 / 0.18)" }} />
                <img data-src="/img/parts/wander-saved.webp" alt="" className="bz-abs" style={{ left: 857, top: PY, width: 306.5, height: 664.6 }} />
                {/* hover marks */}
                {[["title", 509, 376, 180, 26, "229 × 33"], ["fact", 510, 461, 82, 54, "105 × 70"]].map(([k, x, y, w, h, t]) => (
                    <div key={k} data-hover={k} className="bz-abs" style={{ left: x, top: y, width: w, height: h, boxShadow: "inset 0 0 0 1px var(--cpencil)", opacity: 0 }}>
                        <span className="bz-abs left-1/2 -translate-x-1/2 h-[17px] px-1.5 rounded-[8.5px] text-[10.5px] font-semibold leading-[17px] whitespace-nowrap bz-num" style={{ top: h + 13, background: "#fff", color: "var(--cpencil)", boxShadow: "0 1px 3px rgb(0 0 0 / 0.2)" }}>{t}</span>
                    </div>
                ))}
                <div data-picked className="bz-abs" style={{ left: BTN[0], top: BTN[1], width: BTN[2], height: BTN[3], boxShadow: "inset 0 0 0 1.5px var(--cpencil)", opacity: 0 }} />
                {/* its width and height, in pencil, 12 off it */}
                <div data-dims className="bz-abs inset-0" style={{ opacity: 0 }}>
                    <i className="bz-abs block" style={{ left: BTN[0], top: BTN[1] - 12, width: BTN[2], height: 1, background: "var(--cpencil)" }} />
                    <i className="bz-abs block" style={{ left: BTN[0] + BTN[2] + 12, top: BTN[1], width: 1, height: BTN[3], background: "var(--cpencil)" }} />
                    <span className="bz-abs -translate-x-1/2 -translate-y-1/2 h-[17px] px-[5px] rounded-[8.5px] text-[10.5px] font-semibold leading-[17px] text-white bz-num" style={{ left: BTN[0] + BTN[2] / 2, top: BTN[1] - 12, background: "var(--cpencil)", boxShadow: "0 0 0 1.5px #fff" }}>180</span>
                    <span className="bz-abs -translate-x-1/2 -translate-y-1/2 h-[17px] px-[5px] rounded-[8.5px] text-[10.5px] font-semibold leading-[17px] text-white bz-num" style={{ left: BTN[0] + BTN[2] + 12, top: BTN[1] + BTN[3] / 2, background: "var(--cpencil)", boxShadow: "0 0 0 1.5px #fff" }}>54</span>
                </div>
                {SPANS.map(([x, y, w, h, v, lx, ly, o], i) => (
                    <div key={i}>
                        <div data-span={i} className="bz-abs" style={{ left: x, top: y, width: w, height: h, background: "var(--gap)", boxShadow: "0 0 0 1.5px rgb(255 255 255 / 0.7)", transformOrigin: o }} />
                        <span data-spill={i} data-v={v} className="bz-abs -translate-x-1/2 -translate-y-1/2 h-[17px] px-[5px] rounded-[8.5px] text-[10.5px] font-semibold leading-[17px] text-white bz-num" style={{ left: lx, top: ly, background: "var(--gap)", boxShadow: "0 0 0 1.5px #fff, 0 1px 3px rgb(0 0 0 / 0.2)" }}>{v}</span>
                    </div>
                ))}
            </Canvas>
            <Pointer data="inspect" />
            <div className="bz-abs" style={{ left: 1020, top: 64 }}>
                <div className="text-[11px]" style={{ color: "var(--ink-3)" }}>Place ›</div>
                <div className="mt-1 text-[13px] font-semibold">Book button <span className="ml-1 font-normal text-[11px]" style={{ color: "var(--ink-3)" }}>Group</span></div>
            </div>
            {/* the box model */}
            <div data-box className="bz-abs bz-card rounded-[12px]" style={{ left: 1014, top: 108, width: 248, height: 182 }}>
                <div className="bz-abs rounded-[9px]" style={{ left: 12, top: 12, right: 12, height: 136, outline: "1px dashed var(--ink-4)", outlineOffset: -1 }}>
                    <span className="bz-abs text-[10.5px] font-medium" style={{ left: 8, top: 6, color: "var(--ink-3)" }}>Place</span>
                    <div className="bz-abs grid place-items-center rounded-[6px] text-[12.5px] font-semibold bz-num" style={{ left: 54, top: 46, width: 116, height: 44, background: "var(--pencil-wash)", boxShadow: "inset 0 0 0 1.2px var(--pencil)", color: "var(--pencil)" }}>180 <span className="opacity-70">×</span> 54</div>
                    {[["774", 112, 22, "x"], ["24", 112, 108, "x"], ["189", 26, 68, "y"], ["24", 196, 68, "y"]].map(([v, x, y], i) => <span key={i} className="bz-abs -translate-x-1/2 -translate-y-1/2 text-[11.5px] font-semibold bz-num" style={{ left: x, top: y, color: "var(--gap)" }}>{v}</span>)}
                </div>
                <div className="bz-abs flex gap-4 text-[11.5px] bz-num" style={{ left: 14, top: 156, color: "var(--ink-2)" }}><span><span style={{ color: "var(--ink-3)" }}>X</span> 189</span><span><span style={{ color: "var(--ink-3)" }}>Y</span> 774</span></div>
            </div>
            {/* the code */}
            <div className="bz-abs bz-card rounded-[12px]" style={{ left: 1014, top: 298, width: 248, height: 486 }}>
                <div className="flex items-center h-10 px-3 gap-1.5"><span className="text-[12.5px] font-semibold">{u("Code")}</span>
                    <div className="ml-auto relative bz-well flex rounded-[7px] p-0.5 text-[11px]">
                        <i data-codethumb className="bz-abs bz-card block rounded-[5px]" style={{ left: 2, top: 2, width: 36, height: 16 }} />
                        <span data-seg="css" className="relative w-9 h-4 leading-4 text-center font-medium">CSS</span><span data-seg="swift" className="relative w-[52px] h-4 leading-4 text-center" style={{ color: "var(--ink-2)" }}>SwiftUI</span>
                    </div>
                </div>
                <div className="relative mx-3 rounded-[8px] overflow-hidden" style={{ height: 382, background: "rgb(var(--ink-rgb) / 0.035)" }}>
                    <pre data-css className="bz-mono m-0 p-2.5 text-[10.5px] leading-[14.5px] whitespace-pre">{CSS.map(([k, v], i) => <div key={i} data-cl={i}>{v === undefined ? <span>{k}</span> : <><span style={{ color: "var(--ink-2)" }}>{k}</span>: <span style={{ color: k.includes("color") || k.includes("background") ? "var(--pencil)" : "var(--ink)" }}>{v}</span>;</>}</div>)}</pre>
                    <pre data-swift className="bz-abs inset-0 bz-mono m-0 p-2.5 text-[10.5px] leading-[14.5px] whitespace-pre" style={{ opacity: 0 }}>{SWIFT.map((l, i) => <div key={i} style={{ color: /^\s*\./.test(l) ? "var(--ink-2)" : "var(--ink)" }}>{l}</div>)}</pre>
                </div>
                <div className="mx-3 mt-2.5 relative h-[30px] rounded-[8px] grid place-items-center text-[12.5px] font-semibold" style={{ background: "var(--ink)", color: "var(--on-ink)" }}>
                    <span data-copy>{u("Copy CSS")}</span><span data-copied className="bz-abs inset-0 grid place-items-center" style={{ opacity: 0 }}>✓ {u("Copied")}</span>
                </div>
            </div>
        </>
    );
}

export function playInspect({ q }) {
    const tl = gsap.timeline(), p = q('[data-pointer="inspect"]')[0];
    const hover = (k, on, off) => { const el = q(`[data-hover="${k}"]`)[0]; tl.to(el, { opacity: 1, duration: 0.02 }, on); tl.to(el, { opacity: 0, duration: 0.02 }, off); };
    tl.fromTo(p, { opacity: 0, x: 560, y: 520 }, { opacity: 1, x: 600, y: 386, duration: 0.08, ease: "power2.inOut" }, 0);
    hover("title", 0.08, 0.16);
    tl.to(p, { x: 548, y: 486, duration: 0.07, ease: "power2.inOut" }, 0.15);
    hover("fact", 0.21, 0.28);
    tl.to(p, { x: 716, y: 638, duration: 0.07, ease: "power2.inOut" }, 0.27);
    tl.to(p, { scale: 0.82, duration: 0.015 }, 0.35).to(p, { scale: 1, duration: 0.025 }, 0.365);
    tl.to(q("[data-picked]")[0], { opacity: 1, duration: 0.02 }, 0.36);
    tl.fromTo(q("[data-dims]")[0], { opacity: 0 }, { opacity: 1, duration: 0.04 }, 0.37);
    // over the artboard: the spans to its edges grow in, overshooting a little
    tl.to(p, { x: 600, y: 560, duration: 0.07, ease: "power2.inOut" }, 0.42);
    SPANS.forEach((s, i) => {
        const span = q(`[data-span="${i}"]`)[0], pill = q(`[data-spill="${i}"]`)[0], v = { n: 0 };
        const horizontal = s[2] > 2;
        tl.fromTo(span, horizontal ? { scaleX: 0 } : { scaleY: 0 }, { ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }), duration: 0.12, ease: GROW }, 0.49 + i * 0.015);
        tl.fromTo(pill, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.1, ease: GROW }, 0.51 + i * 0.015);
        tl.fromTo(v, { n: 0 }, { n: s[4], duration: 0.1, ease: "power2.out", onUpdate: () => { pill.textContent = Math.round(v.n); } }, 0.51 + i * 0.015);
    });
    // the code, line by line, then SwiftUI, then copied
    const lines = q("[data-cl]");
    tl.fromTo(lines, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.18 / lines.length }, 0.6);
    tl.to(p, { x: 1238, y: 340, duration: 0.07, ease: "power2.inOut" }, 0.76);
    tl.to(p, { scale: 0.82, duration: 0.015 }, 0.835).to(p, { scale: 1, duration: 0.025 }, 0.85);
    tl.to(q("[data-codethumb]")[0], { left: 38, width: 52, duration: 0.06, ease: stiff(380, 30) }, 0.84);
    tl.to(q("[data-css]")[0], { opacity: 0, duration: 0.03 }, 0.85);
    tl.to(q("[data-swift]")[0], { opacity: 1, duration: 0.03 }, 0.86);
    tl.to(p, { x: 1150, y: 770, duration: 0.06, ease: "power2.inOut" }, 0.88);
    tl.to(p, { scale: 0.82, duration: 0.015 }, 0.945).to(p, { scale: 1, duration: 0.025 }, 0.96);
    tl.to(q("[data-copy]")[0], { opacity: 0, duration: 0.02 }, 0.95);
    tl.to(q("[data-copied]")[0], { opacity: 1, duration: 0.02 }, 0.955);
    return tl;
}
