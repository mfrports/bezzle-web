/*
 * Bezzle's window, rebuilt from its SwiftUI views in the app's own points (the window is 1280 × 800):
 * TabBar (52 tall), the tool rail (56), the layers panel (236), the canvas (its table, rulers 20
 * thick), the inspector (280, cards 248 wide). Sizes, radii, type and colours are the ones in
 * Theme.swift, TabBar.swift, Workspace.swift, LayersPanel.swift, Cards.swift and CanvasView.swift.
 * Every colour is a page variable, so the window is dark when the page is.
 */

const S = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

/* The tool glyphs, drawn as the app draws them: 1.5 strokes with round caps. */
export const Glyph = {
    select: <path d="M5 3.5v11.2l3-2.9 2 4.6 2.1-.9-2-4.5h4.3z" {...S} />,
    artboard: <path d="M6 2.5v13M12 2.5v13M2.5 6h13M2.5 12h13" {...S} />,
    rect: <rect x="3" y="4" width="12" height="10" rx="2.2" {...S} />,
    ellipse: <circle cx="9" cy="9" r="5.8" {...S} />,
    line: <path d="M4 14 14 4" {...S} />,
    pen: <><path d="M9 2.6 13.8 8 11 14H7L4.2 8z" {...S} /><circle cx="9" cy="9.4" r="1.2" {...S} /><path d="M7 14h4v1.6H7z" {...S} /></>,
    knife: <path d="M3.5 14.5 12.8 5.2l1.4-2.4.4 1.9-1.3 2.4-6.8 9.3z M5 13l2 2" {...S} />,
    text: <path d="M4 4.5h10M9 4.5v10M7 14.5h4" {...S} />,
    note: <><path d="M3.5 4.2h11v7.5H9l-3.3 2.8v-2.8H3.5z" {...S} /><path d="M6.3 7.2h5.4M6.3 9.2h3.6" {...S} /></>,
    resources: <><rect x="3" y="3" width="5" height="5" rx="1.3" {...S} /><rect x="10" y="3" width="5" height="5" rx="1.3" {...S} /><rect x="3" y="10" width="5" height="5" rx="1.3" {...S} /><path d="M12.5 10v5M10 12.5h5" {...S} /></>,
    layers: <path d="M9 3 15.5 6.3 9 9.6 2.5 6.3zM2.5 9.2 9 12.5l6.5-3.3M2.5 12 9 15.3l6.5-3.3" {...S} />,
    group: <><rect x="2.8" y="5" width="9" height="8.8" rx="1.6" {...S} /><path d="M6 3.2h7.4c.9 0 1.6.7 1.6 1.6v7.4" {...S} /></>,
    path: <path d="M3 14c1.5-7 4.5-9 6-6s4.5 1 6-4" {...S} />,
    frame: <rect x="5" y="2.5" width="8" height="13" rx="2" {...S} />,
    corners: <path d="M3.5 14.5V8a4.5 4.5 0 0 1 4.5-4.5h6.5" {...S} />,
    opacity: <circle cx="9" cy="9" r="5.6" fill="currentColor" opacity=".8" />,
    picture: <><rect x="2.8" y="3.8" width="12.4" height="10.4" rx="2" {...S} /><path d="m3.5 12.5 3.3-3.3 2.6 2.6 1.8-1.8 3.3 3.3" {...S} /><circle cx="11.6" cy="7.2" r="1.1" fill="currentColor" stroke="none" /></>,
    swatch: <rect x="3" y="3" width="12" height="12" rx="3.5" fill="currentColor" />,
    phone: <rect x="5.5" y="2.5" width="7" height="13" rx="1.8" {...S} />,
    moon: <path d="M13.8 11.3A5.6 5.6 0 0 1 6.7 4.2a5.6 5.6 0 1 0 7.1 7.1z" {...S} />,
    sun: <><circle cx="9" cy="9" r="3" {...S} /><path d="M9 2.5v1.6M9 13.9v1.6M2.5 9h1.6M13.9 9h1.6M4.4 4.4l1.1 1.1M12.5 12.5l1.1 1.1M4.4 13.6l1.1-1.1M12.5 5.5l1.1-1.1" {...S} /></>,
    component: <path d="M9 2.4 11 4.4 9 6.4 7 4.4zM4.4 7 6.4 9 4.4 11 2.4 9zM13.6 7l2 2-2 2-2-2zM9 11.6l2 2-2 2-2-2z" fill="currentColor" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />,
    code: <path d="M6.5 5 3 9l3.5 4M11.5 5 15 9l-3.5 4" {...S} />,
    history: <><path d="M3.4 9a5.6 5.6 0 1 0 1.7-4" {...S} /><path d="M3 3.6v2.6h2.6" {...S} /><path d="M9 6v3.2l2 1.4" {...S} /></>,
    share: <><circle cx="7.5" cy="6.5" r="2.6" {...S} /><path d="M2.8 14.6c.6-2.6 2.5-3.9 4.7-3.9s3.4.8 4.1 2" {...S} /><path d="M13.4 10.2v4.4M11.2 12.4h4.4" {...S} /></>,
    play: <path d="M5.5 3.8v10.4L14 9z" fill="currentColor" />,
    plus: <path d="M9 4v10M4 9h10" {...S} />,
    chevron: <path d="m6 7.5 3 3 3-3" {...S} />,
    search: <><circle cx="8" cy="8" r="4.3" {...S} /><path d="m11.3 11.3 3.2 3.2" {...S} /></>,
    globe: <><circle cx="9" cy="9" r="6" {...S} /><path d="M3 9h12M9 3c-2 2-2 10 0 12M9 3c2 2 2 10 0 12" {...S} /></>,
    check: <path d="m4.5 9.4 3 3 6-6.8" {...S} />,
    sparkle: <path d="M9 2.5 10.6 7.2 15.4 9l-4.8 1.8L9 15.5l-1.6-4.7L2.6 9l4.8-1.8z" fill="currentColor" />,
};
export function Icon({ name, size = 18, className = "", style }) {
    return <svg viewBox="0 0 18 18" width={size} height={size} className={className} style={style} aria-hidden="true">{Glyph[name]}</svg>;
}

/* ------------------------------------------------------------------ the title bar */
export function TrafficLights() {
    return (
        <div className="bz-abs flex gap-2" style={{ left: 20, top: 20 }}>
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <i key={c} className="block w-3 h-3 rounded-full" style={{ background: c, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.12)" }} />)}
        </div>
    );
}
/** A tab: system 12.5, medium when selected (the card behind it is drawn on its own and slides). */
export const tabWidth = (name, selected) => (selected ? 196 : Math.min(196, Math.round(name.length * 6.7 + 24)));
export function Tab({ name, x, w, on, shared, data }) {
    return (
        <div data-tab={data} className="bz-abs flex items-center h-[30px] text-[12.5px] whitespace-nowrap overflow-hidden" style={{ left: x, top: 11, width: w, paddingLeft: 12, color: on ? "var(--ink)" : "var(--ink-2)", fontWeight: on ? 500 : 400 }}>
            {shared && <svg viewBox="0 0 12 10" width="12" height="9" className="mr-1.5 flex-none" style={{ color: "var(--pencil)" }}><circle cx="4" cy="3" r="2.2" fill="currentColor" /><circle cx="8.6" cy="3.4" r="1.8" fill="currentColor" /><path d="M.3 9.6c.4-2.3 1.8-3.4 3.7-3.4s3.3 1.1 3.7 3.4zM8 6.4c1.8 0 3 1 3.4 3.2H8.6" fill="currentColor" /></svg>}
            <span data-tab-name className="truncate" style={{ maxWidth: w - 38 }}>{name}</span>
            <svg data-tab-x viewBox="0 0 18 18" width="18" height="18" className="bz-abs" style={{ right: 6, top: 6, color: "var(--ink-3)", opacity: on ? 1 : 0 }}><path d="M6.1 6.1l5.8 5.8M11.9 6.1l-5.8 5.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </div>
    );
}
/** The design's controls, right of the tabs, where the app has them: zoom, history, Share…, the mode switch, Export… */
export function DesignControls({ u, zoom = "50%", shared }) {
    return (
        <>
            <div className="bz-abs flex items-center gap-1.5 h-7 rounded-[8px] pl-2.5 pr-2 text-[12.5px]" style={{ left: 692, top: 12, background: "rgb(var(--ink-rgb) / 0.04)" }}>
                <span data-zoom className="bz-num">{zoom}</span><Icon name="chevron" size={11} style={{ color: "var(--ink-3)" }} />
            </div>
            <div className="bz-abs grid place-items-center w-[30px] h-7" style={{ left: 762, top: 12, color: "var(--ink-2)" }}><Icon name="history" size={15} /></div>
            <div className="bz-abs bz-card flex items-center gap-1.5 h-7 px-3.5 rounded-[7.84px] text-[12.5px] font-medium" style={{ left: 800, top: 12 }}>
                <Icon name="share" size={13} style={{ color: "var(--ink-2)" }} /><span data-share>{shared ? u("Shared") : u("Share…")}</span>
            </div>
        </>
    );
}
/** The mode switch: a well, and a raised card behind the mode that is on (it slides, 0.36/0.8). */
export function ModeSwitch({ u, x = 904 }) {
    const modes = [["design", "Design", "pen"], ["prototype", "Prototype", "artboard"], ["inspect", "Inspect", "code"]];
    return (
        <div data-modes className="bz-abs bz-well flex gap-0.5 p-0.5 rounded-[9px]" style={{ left: x, top: 12 }}>
            <div data-mode-thumb className="bz-abs bz-card rounded-[7px]" style={{ left: 2, top: 2, height: 24, width: 80 }} />
            {modes.map(([k, label, g]) => (
                <div key={k} data-mode={k} className="relative flex items-center gap-1.5 h-6 px-2.5 text-[12.5px] whitespace-nowrap" style={{ color: "var(--ink-2)" }}>
                    <Icon name={g} size={14} />{u(label)}
                </div>
            ))}
        </div>
    );
}
export function ExportButton({ u }) {
    return (
        <div data-export className="bz-abs" style={{ left: 1186, top: 12, height: 28 }}>
            <div data-export-plain className="bz-card flex items-center h-7 px-3.5 rounded-[8px] text-[12.5px] font-medium whitespace-nowrap">{u("Export…")}</div>
            <div data-export-play className="bz-abs flex items-center gap-1.5 h-7 px-[13px] rounded-[8px] text-[12.5px] font-semibold whitespace-nowrap" style={{ right: 0, top: 0, background: "var(--pencil)", color: "var(--on-ink)", opacity: 0, boxShadow: "0 3px 8px rgb(var(--pencil-rgb) / 0.3)" }}>
                <Icon name="play" size={11} />{u("Play")}
            </div>
        </div>
    );
}
export function HomeControls({ u }) {
    return (
        <>
            <div className="bz-abs bz-well flex items-center gap-1.5 h-[26px] rounded-[8px] px-2.5 text-[12.5px]" style={{ left: 833, top: 13, width: 192, color: "var(--ink-3)" }}><Icon name="search" size={13} />{u("Search designs")}</div>
            <div className="bz-abs bz-card flex items-center gap-1.5 h-7 px-3.5 rounded-[8px] text-[12.5px] font-medium" style={{ left: 1037, top: 12 }}><Icon name="globe" size={13} style={{ color: "var(--ink-2)" }} />{u("From a Website…")}</div>
            <div className="bz-abs bz-card flex items-center h-7 px-3.5 rounded-[8px] text-[12.5px] font-medium" style={{ right: 16, top: 12 }}>{u("Open…")}</div>
        </>
    );
}

/* ------------------------------------------------------------------ the rail and the layers */
const TOOLS = ["select", "artboard", "rect", "ellipse", "line", "pen", "knife", "text", "note"];
export function ToolRail() {
    return (
        <div data-rail className="bz-abs" style={{ left: 0, top: 52, width: 56, bottom: 0 }}>
            {TOOLS.map((k, i) => (
                <div key={k} data-tool={k} className="bz-abs grid place-items-center w-[38px] h-[38px] rounded-[10px]"
                    style={{ left: 9, top: 6 + i * 42, color: k === "select" ? "var(--ink)" : "var(--ink-2)", ...(k === "select" ? { background: "var(--well)", boxShadow: "inset 0 1px 1.5px rgb(var(--shadow-rgb) / 0.22), 0 1px 0 var(--lip)" } : {}) }}>
                    <Icon name={k} />
                </div>
            ))}
            <div className="bz-abs grid place-items-center w-[38px] h-[38px]" style={{ left: 9, bottom: 51, color: "var(--ink-2)" }}><Icon name="resources" /></div>
            <div className="bz-abs grid place-items-center w-[38px] h-[38px] rounded-[10px]" style={{ left: 9, bottom: 9, color: "var(--ink)", background: "var(--well)", boxShadow: "inset 0 1px 1.5px rgb(var(--shadow-rgb) / 0.22), 0 1px 0 var(--lip)" }}><Icon name="layers" /></div>
        </div>
    );
}
const KIND = { artboard: "artboard", text: "text", rect: "rect", ellipse: "ellipse", group: "group", path: "path", component: "component", line: "line" };
/** The layers panel: "Layers" and its count, then rows 28 tall, 18 in per depth. */
export function LayersPanel({ u, crumb, count, rows }) {
    return (
        <div className="bz-abs" style={{ left: 56, top: 52, width: 236, bottom: 0 }}>
            <div className="bz-abs flex items-center gap-1.5 text-[13px]" style={{ left: 16, top: 12, right: 16, height: 20 }}>
                <span className="font-semibold" style={{ color: crumb ? "var(--ink-3)" : "var(--ink)" }}>{u("Layers")}</span>
                {crumb && <><Icon name="chevron" size={10} style={{ color: "var(--ink-3)", transform: "rotate(-90deg)" }} /><span className="font-semibold">{crumb}</span></>}
                <span data-count className="ml-auto text-[11.5px] bz-num" style={{ color: "var(--ink-3)" }}>{count}</span>
            </div>
            {rows.map((r, i) => (
                <div key={i} data-row={r.id} className="bz-abs flex items-center gap-1.5 rounded-[7px] text-[12.5px] whitespace-nowrap"
                    style={{ left: 8, right: 8, top: 38 + i * 28, height: 28, paddingLeft: 4 + (r.depth || 0) * 18, background: r.on ? "var(--pencil-wash)" : "transparent", fontWeight: r.on || r.kind === "artboard" ? 500 : 400 }}>
                    <span className="w-3.5 flex-none" style={{ color: "var(--ink-3)" }}>{r.open !== undefined && <Icon name="chevron" size={12} style={{ transform: r.open ? "none" : "rotate(-90deg)" }} />}</span>
                    <Icon name={KIND[r.kind] || "rect"} size={r.kind === "component" ? 13 : 15} style={{ color: r.kind === "component" ? "var(--linked)" : r.on ? "var(--ink)" : "var(--ink-3)", flex: "none" }} />
                    <span className="truncate">{r.name}</span>
                </div>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ the canvas */
/** The table: radius 12, its edge a hairline and a soft inner shadow, rulers 20 thick along its top and left. */
export function Canvas({ children, rulers, grid, className = "" }) {
    return (
        <div data-canvas className={`bz-abs overflow-hidden rounded-[12px] ${className}`} style={{ left: 292, top: 52, width: 706, height: 739, background: "var(--table)", transition: "background-color 0.7s" }}>
            {grid}
            <div className="bz-abs" style={{ left: -292, top: -52, width: 1280, height: 800 }}>{children}</div>
            {rulers !== false && <Rulers {...(rulers || {})} />}
            <div className="bz-abs inset-0 rounded-[12px] pointer-events-none" style={{ boxShadow: "inset 0 0 0 0.5px var(--hairline), inset 0 1px 1.5px rgb(var(--shadow-rgb) / 0.22)" }} />
        </div>
    );
}
/** Rulers: ticks and numbers in design units from `origin` at `zoom`, the selection's extent banded in pencil. */
export function Rulers({ origin = [312, 72], zoom = 0.5, band, bandY }) {
    const ticks = [], vticks = [];
    const step = zoom >= 0.7 ? 50 : zoom >= 0.35 ? 100 : zoom >= 0.17 ? 250 : 500;
    for (let v = -Math.ceil((origin[0] - 312) / zoom / step) * step; (origin[0] - 312) + v * zoom < 686; v += step / 5) {
        const x = origin[0] - 292 + v * zoom; if (x < 20) continue;
        const major = Math.round(v / step) * step === Math.round(v);
        ticks.push(<g key={v}><line x1={x} x2={x} y1={major ? 12 : 16} y2={20} stroke={`rgb(var(--ruler-ink) / ${major ? 0.4 : 0.22})`} strokeWidth="1" />{major && <text x={x + 3} y={10} fontSize="9" fontWeight="500" fill="rgb(var(--ruler-ink) / 0.5)" style={{ fontVariantNumeric: "tabular-nums" }}>{Math.round(v)}</text>}</g>);
    }
    for (let v = -Math.ceil((origin[1] - 72) / zoom / step) * step; (origin[1] - 72) + v * zoom < 719; v += step / 5) {
        const y = origin[1] - 52 + v * zoom; if (y < 20) continue;
        const major = Math.round(v / step) * step === Math.round(v);
        vticks.push(<g key={v}><line y1={y} y2={y} x1={major ? 12 : 16} x2={20} stroke={`rgb(var(--ruler-ink) / ${major ? 0.4 : 0.22})`} strokeWidth="1" />{major && <text x={10} y={y + 3} fontSize="9" fontWeight="500" fill="rgb(var(--ruler-ink) / 0.5)" transform={`rotate(-90 10 ${y + 3})`} style={{ fontVariantNumeric: "tabular-nums" }}>{Math.round(v)}</text>}</g>);
    }
    return (
        <svg className="bz-abs left-0 top-0" width="706" height="739" style={{ pointerEvents: "none" }}>
            <rect x="0" y="0" width="706" height="20" fill="var(--table)" /><rect x="0" y="0" width="20" height="739" fill="var(--table)" />
            {band && <g data-band-x><rect x={band[0] - 292} y="0" width={band[1] - band[0]} height="20" fill="rgb(var(--cpencil-rgb) / 0.13)" /><line x1={band[0] - 292} x2={band[0] - 292} y1="0" y2="20" stroke="rgb(var(--cpencil-rgb) / 0.75)" /><line x1={band[1] - 292} x2={band[1] - 292} y1="0" y2="20" stroke="rgb(var(--cpencil-rgb) / 0.75)" /></g>}
            {bandY && <g data-band-y><rect y={bandY[0] - 52} x="0" height={bandY[1] - bandY[0]} width="20" fill="rgb(var(--cpencil-rgb) / 0.13)" /></g>}
            {ticks}{vticks}
            <line x1="20" x2="706" y1="20" y2="20" stroke="var(--hairline)" /><line x1="20" x2="20" y1="20" y2="739" stroke="var(--hairline)" />
        </svg>
    );
}
/** An artboard's name, 19 above it: 11 medium, pencil when selected. */
export function Label({ x, y, on, children, data }) {
    return <div data-label={data} className="bz-abs text-[11px] font-medium whitespace-nowrap" style={{ left: x, top: y - 17, color: on ? "var(--label-on)" : "var(--label)" }}>{children}</div>;
}
/** The selection: a 1 pt outline (violet for a component's copy) and 8 × 8 handles. */
export function Selection({ x, y, w, h, color = "var(--cpencil)", handles = true, data, style }) {
    const hs = handles ? [[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [0, 0.5]] : [];
    return (
        <div data-sel={data} className="bz-abs pointer-events-none" style={{ left: x, top: y, width: w, height: h, boxShadow: `inset 0 0 0 1px ${color}`, ...style }}>
            {hs.map(([a, b], i) => <i key={i} className="bz-abs block" style={{ left: `${a * 100}%`, top: `${b * 100}%`, width: 8, height: 8, margin: "-4px 0 0 -4px", background: "#fff", boxShadow: `inset 0 0 0 1px ${color}, 0 -0.5px 1.5px rgb(0 0 0 / 0.18)` }} />)}
        </div>
    );
}
/** While drawing or resizing: the size, 10 under the selection, white on pencil. */
export function DimPill({ x, y, children, data }) {
    return <div data-dim={data} className="bz-abs h-5 px-[7px] rounded-[6px] text-[11px] font-medium leading-5 text-white whitespace-nowrap bz-num" style={{ left: x, top: y, transform: "translateX(-50%)", background: "var(--cpencil)" }}>{children}</div>;
}

/* ------------------------------------------------------------------ the inspector */
/** One AspectCard, folded: its glyph, title and a one-line summary on a card of radius 12. */
export function Card({ glyph, swatch, title, summary, children, top, lifted, data, glyphColor }) {
    return (
        <div data-card={data ?? ""} className={`bz-abs rounded-[12px] ${lifted ? "bz-lifted" : "bz-card"}`} style={{ left: 1014, top, width: 248 }}>
            <div className="flex items-center h-10 pl-[9px] pr-2 gap-1.5">
                <span className="grid place-items-center w-[22px] h-[22px]" style={{ color: glyphColor || "var(--ink-2)" }}>{swatch ? <i data-swatch-dot className="block w-3.5 h-3.5 rounded-[4px]" style={{ background: swatch, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.15)" }} /> : <Icon name={glyph} size={15} />}</span>
                <span className="text-[12.5px] font-semibold">{title}</span>
                <span data-summary className="ml-auto pl-1.5 text-[12px] bz-num truncate" style={{ color: "var(--ink-2)" }}>{summary}</span>
            </div>
            {children}
        </div>
    );
}
/** The dashed "+ Border" chips under the cards. */
export function AddChips({ items, top, data }) {
    return (
        <div data-adds={data ?? ""} className="bz-abs flex flex-wrap gap-1.5" style={{ left: 1014, top, width: 248 }}>
            {items.map((x) => <span key={x} data-add={x} className="flex items-center gap-[5px] h-7 px-2.5 rounded-[8px] text-[12px]" style={{ color: "var(--ink-2)", outline: "1px dashed rgb(var(--ink-rgb) / 0.16)", outlineOffset: -1 }}><b className="text-[11px]">+</b>{x}</span>)}
        </div>
    );
}

/* ------------------------------------------------------------------ hands */
/** The system's arrow. */
export function Pointer({ data, fill = "#111", style }) {
    return (
        <svg data-pointer={data} className="bz-abs" viewBox="0 0 22 28" width="22" height="28" style={{ left: 0, top: 0, transformOrigin: "3px 3px", filter: "drop-shadow(0 2px 3px rgb(0 0 0 / 0.28))", willChange: "transform", opacity: 0, ...style }}>
            <path d="M2.5 2.2v19.6l4.9-4.7 3.4 7.7 3.4-1.4-3.3-7.6h6.8z" fill={fill} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );
}
/** A collaborator's hand (LiveMarks): their pencil's colour with a white rim, and their name in a pill. */
export function Hand({ data, color, name }) {
    return (
        <div data-hand={data} className="bz-abs" style={{ left: 0, top: 0, opacity: 0, willChange: "transform" }}>
            <svg viewBox="-2 -2 16 22" width="16" height="22" style={{ filter: "drop-shadow(0 1px 2.5px rgb(0 0 0 / 0.28))", overflow: "visible" }}>
                <path d="M0 0v15.5l3.9-3.6 2.7 6.1 2.5-1.1-2.6-6h5.3z" fill={color} stroke="#fff" strokeWidth="2.6" paintOrder="stroke" strokeLinejoin="round" />
            </svg>
            <span data-hand-name className="bz-abs h-[19px] px-2 rounded-[9.5px] text-[11px] font-semibold leading-[19px] text-white whitespace-nowrap" style={{ left: 11, top: 17, background: color }}>{name}</span>
        </div>
    );
}
