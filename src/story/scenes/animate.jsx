/*
 * Animate: the Adoption Day poster in the fourth mode. It lies on the prototype's table, whole above the timeline at
 * the canvas's foot (AnimateOperations › frameFilm; FilmTimeline: a card of radius 18, its names 22 % of its width, a
 * second (width − 28) / (length / 0.9) wide), and the panel on the right is the film's (AnimateInspector): Moves and
 * Film with nothing picked, Pose and the looks under them with layers picked, Camera and Film with the camera.
 *
 * One thing after another, each as the app does it:
 * – The pug is dragged down past the artboard's foot (MotionTool › drag). Its first pose is a key at the playhead and
 *   comes with the design for company, half a second on (Motion › pose, MotionTiming.beat), so one drag is a whole
 *   motion: its home is dashed, its way a fine line ticked each twentieth of a second with a bead at each key
 *   (drawWay), a line for it stands in the timeline, and let go, the motion is shown once (finish › showFilm).
 * – A loop pulled over the top of the poster picks the four layers it touches (drag › marquee), and the Drop chip in
 *   Moves gives each its keys (MotionMove.drop: 36 up and faded, 0.6 s on a spring, one after another 0.06 s apart
 *   from the top down): four more lines, the card growing from four lines to six, shown once, the playhead resting
 *   where the move ends (applyMove).
 * – The camera, picked by the small one over the artboard's corner (MotionTool › pickCamera): the pad in the Camera card
 *   tips and swings the scene under it, 0.6° a point (turnScene). The playhead rests where the move ended, so this
 *   first key of the camera's leaves the whole artboard at the start for company (Motion › pose), and the camera
 *   flies in while everything comes on. The artboard shows as the camera sees it (FilmLens: from twice the artboard's
 *   longer side above its middle), cut off at the film's frame with the backdrop behind it (FilmStage), and what the
 *   design lifts off the sheet stands off it.
 * – The playhead taken back to the start, the film running backwards under the hand, and Play. Nothing lies over a
 *   film that plays (MotionTool › draw), the clock counts in pencil, the panel waits where the playhead rests
 *   (FilmDesk.shown), and the bar's button says Pause.
 */
import { gsap } from "gsap";
import { Canvas, LayersPanel, Pointer, Label, Icon } from "@/app/Kit";
import { focus, number, pixels, plural } from "@/app/words";
import { PosterStatic } from "@/story/scenes/cutout";
import { GraphPaper } from "@/story/scenes/prototype";
import { LOGO, VIEW, shape, Seg } from "@/story/scenes/vectorize";
import { THEME, click, glide, spot, spring, tip } from "@/story/engine";
import { flatReplay } from "@/lib/trail";

/* ------------------------------------------------------------------ the film */
// frameFilm: the poster fitted above a card of four lines with 40 of room round it, which comes to 35 %. The view is
// not moved again as the card grows: at six lines it lies over the last points of the artboard's foot.
const BW = 1080, BH = 1350, AW = 380, AH = 475, Z = AH / BH, AX = 455, AY = 92;
const D = Math.max(600, Math.max(BW, BH) * 2);          // FilmLens.distance: how far above the artboard the camera rests
const LENGTH = 2, BEAT = 0.5;                           // MotionTiming.shortest, .beat
// the poster's layers, from the back: where each lies on the artboard, and how far the design lifts it off the sheet
const FRAMES = { good: [0, 150, 1080, 559], boy: [0, 520, 1080, 559], pug: [-210, 440, 1500, 1000], logo: [712, 984, 320, 320], pill: [72, 66, 300, 76], date: [72, 86, 300, 38], where: [560, 64, 448, 80] };
const LIFT = { good: 1, boy: 1, pug: 140, logo: 141, pill: 60, date: 61, where: 60 };
const NAMED = { where: ["Where", "text"], date: ["Date", "text"], pill: ["Date pill", "rect"], logo: ["Logo", "group"], pug: ["Pug", "rect"], boy: ["Boy", "text"], good: ["Good", "text"] };
const AWAY = 640;                                       // how far down the pug is dragged at the film's start: its eyes still over the foot
const DROP = { y: -36, time: 0.6, apart: 0.06, order: ["pill", "where", "date", "good"] };   // MotionMove.drop, top down
const END = DROP.time + DROP.apart * (DROP.order.length - 1);   // where the move ends, and the playhead rests after it
const TILT = 32, SWING = -24;                           // the pad dragged 53 down and 40 right

/* How a value comes to a key (MotionEase): CSS's curves, and a spring that has settled when its time is up. */
function bezier(x1, y1, x2, y2) {
    return (x) => {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let lo = 0, hi = 1, t = x;
        for (let i = 0; i < 22; i++) { t = (lo + hi) / 2; if (3 * (1 - t) * (1 - t) * t * x1 + 3 * (1 - t) * t * t * x2 + t * t * t < x) lo = t; else hi = t; }
        return 3 * (1 - t) * (1 - t) * t * y1 + 3 * (1 - t) * t * t * y2 + t * t * t;
    };
}
const PACE = { smooth: bezier(0.45, 0, 0.2, 1), gathers: bezier(0.6, 0, 0.9, 0.4), settles: bezier(0.1, 0.7, 0.2, 1) };
function sprung(u, bounce = 0.3) {
    if (u <= 0) return 0;
    if (u >= 1) return 1;
    const z = 1 - 0.78 * bounce, w = 7.2 / z, wd = w * Math.sqrt(1 - z * z);
    const raw = (x) => 1 - Math.exp(-z * w * x) * (Math.cos(wd * x) + ((z * w) / wd) * Math.sin(wd * x));
    return raw(u) + (1 - raw(1)) * u;
}
/* FilmLens: a point of a sheet lying `height` above the artboard, where the camera shows it in the film's frame. The
   scene is swung, then tipped, about the artboard's middle, and seen from D above it. (The same in CSS: a perspective
   of D × zoom on the frame, rotateX(tilt) rotateY(swing) on the scene, translateZ(height) on a layer. The admin's
   replay on a phone draws these flat, lib/flat.js: there nothing stands off the sheet, and far is as large as near.) */
const RAD = Math.PI / 180;
function lens(tilt, swing, height = 0) {
    const ct = Math.cos(tilt * RAD), st = Math.sin(tilt * RAD), cs = Math.cos(swing * RAD), ss = Math.sin(swing * RAD);
    return ([x, y]) => {
        const h = flatReplay ? 0 : height, X = x - BW / 2, Y = y - BH / 2, x1 = X * cs + h * ss, z1 = -X * ss + h * cs;
        const y2 = Y * ct - z1 * st, k = flatReplay ? 1 : D / (D - (Y * st + z1 * ct));
        return [BW / 2 + x1 * k, BH / 2 + y2 * k];
    };
}
const onCanvas = ([x, y]) => [AX + x * Z, AY + y * Z];
const corners = ([x, y, w, h], dx = 0, dy = 0) => [[x + dx, y + dy], [x + w + dx, y + dy], [x + w + dx, y + h + dy], [x + dx, y + h + dy]];

/* ------------------------------------------------------------------ the timeline */
const CARD = { x: 310, w: 670, bottom: 777 };           // 18 in from the canvas's sides, 14 from its foot
const NAMES = Math.min(150, Math.max(104, CARD.w * 0.22)), SHEET = CARD.w - NAMES;
const PER = (SHEET - 28) / (LENGTH / 0.9), at = (t) => 14 + t * PER;   // FilmScale: 14 of room either side
const tall = (lines) => 44 + 1 + 24 + lines * 24 + 6;
const TOP = CARD.bottom - tall(6);                      // the card's top once it shows six lines
// the lines, in the order the card ends with: the camera's, then each layer that moves, the front ones first
const LINES = [
    ["camera", null, [[0, "home", "given"], [END]]],
    ["where", 1, [[0.06], [0.66, "home"]]], ["date", 2, [[0.12], [0.72, "home"]]], ["pill", 3, [[0], [0.6, "home"]]],
    ["pug", 4, [[0], [BEAT, "home", "given"]]], ["good", 5, [[0.18], [0.78, "home"]]],
];
const curve = (f, k = 1) => Array.from({ length: 29 }, (_, s) => `${s ? "L" : "M"}${(6 + (16 * s) / 28).toFixed(2)} ${(19.5 - 13 * f(s / 28) * k).toFixed(2)}`).join("");
// PaceChip: how a key is come to, as the curve it is; Auto only pencilled in
const PACES = [["auto", curve(PACE.smooth)], ["smooth", curve(PACE.smooth)], ["gathers", curve(PACE.gathers)], ["settles", curve(PACE.settles)], ["even", "M6 19.5 22 6.5"], ["spring", curve((u) => sprung(u, 0.55), 0.8)], ["hold", "M6 19.5H21.4L22 6.5"]];

const CameraGlyph = (
    <svg viewBox="0 0 15 15" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1.5" y="4.5" width="12" height="7.8" rx="2" /><circle cx="7.5" cy="8.4" r="2.1" /><path d="M5.4 4.5 6.3 2.55h2.4l.9 1.95" />
    </svg>
);
function Line({ k, line, name, kind, marks, hidden, u }) {
    const first = marks[0][0], last = marks[marks.length - 1][0];
    return (
        <div data-line={k} className="bz-abs" style={{ left: 0, right: 0, top: 24 + line * 24, height: 24, ...(hidden ? { opacity: 0 } : {}) }}>
            <i data-wash className="bz-abs inset-0 block" style={{ background: "var(--pencil-wash)", opacity: 0 }} />
            <div className="bz-abs flex items-center gap-[5px] text-[12px] whitespace-nowrap" style={{ left: 0, top: 0, width: NAMES, height: 24, paddingLeft: 8, paddingRight: 6 }}>
                <span data-chev className="grid place-items-center w-3.5 flex-none" style={{ color: "var(--ink-4)", opacity: k === "camera" ? 0 : 1 }}><Icon name="chevron" size={11} style={{ transform: "rotate(-90deg)" }} /></span>
                <span data-kind className="grid place-items-center w-[15px] h-[15px] flex-none" style={{ color: "var(--ink-2)" }}>{kind ? <Icon name={kind} size={15} /> : CameraGlyph}</span>
                <span data-word className="truncate">{kind ? name : u("Camera")}</span>
            </div>
            <div data-keys className="bz-abs" style={{ left: NAMES, top: 0, right: 0, height: 24, ...(k === "camera" ? { opacity: 0 } : {}) }}>
                <i className="bz-abs block rounded-full" style={{ left: at(first) - 7.5, top: 4.5, width: at(last) - at(first) + 15, height: 15, background: "rgb(var(--ink-rgb) / 0.075)" }} />
                {marks.map(([t, home, given]) => {
                    const ink = given ? "var(--ink-3)" : "var(--ink)";
                    return <i key={t} data-mark className="bz-abs block rounded-full" style={{ left: at(t) - 4.5, top: 7.5, width: 9, height: 9, background: home ? "var(--card)" : ink, boxShadow: `inset 0 0 0 1.5px ${ink}` }} />;
                })}
            </div>
        </div>
    );
}
/** FilmTimeline: play and the clock, a key here and the paces, whether it goes round; under them the seconds, the
    film's end as a pole with its flag, a line for each thing that moves, and the playhead. */
function Timeline({ u, n }) {
    const strokes = [];
    for (let i = 0; at(i / 10) <= SHEET - 2; i++) {
        const t = i / 10, x = at(t), whole = i % 5 === 0, past = t > LENGTH + 0.0001;
        strokes.push(<g key={i}>
            <path d={`M${x} ${whole ? 17 : 20.5}V24`} stroke={`rgb(var(--ink-rgb) / ${past ? 0.14 : 0.3})`} />
            {whole && <text x={x + 3.5} y="12" dominantBaseline="central" fontSize="9.5" fontWeight="500" fill={`rgb(var(--ink-rgb) / ${past ? 0.22 : 0.46})`} style={{ fontVariantNumeric: "tabular-nums" }}>{n(t, 2)}</text>}
        </g>);
    }
    const end = at(LENGTH);
    return (
        <div data-timeline className="bz-abs bz-lifted rounded-[18px] overflow-hidden" style={{ left: CARD.x, bottom: 800 - CARD.bottom, width: CARD.w, height: tall(4) }}>
            <div className="bz-abs flex items-center" style={{ left: 12, right: 10, top: 0, height: 44, gap: 10 }}>
                <span data-play className="relative grid place-items-center w-[26px] h-[26px] rounded-full flex-none" style={{ background: "rgb(var(--ink-rgb) / 0.06)", color: "var(--ink-2)" }}>
                    <svg viewBox="0 0 10 10" width="10" height="10" aria-hidden="true">
                        <path data-plays d="M3 1.4v7.2L9.2 5z" fill="currentColor" /><path data-pauses d="M2.2 1.6h2v6.8h-2zM5.8 1.6h2v6.8h-2z" fill="#fff" style={{ opacity: 0 }} />
                    </svg>
                </span>
                <span className="flex items-baseline gap-[3px] w-[58px] flex-none font-serif">
                    <b data-clock className="text-[15px] font-medium bz-num">{n(0, 2)}{n(0.5, 2).slice(1, 2)}00</b><i className="not-italic text-[12px]" style={{ color: "var(--ink-3)" }}>s</i>
                </span>
                <span className="flex-1" />
                <span data-hold className="grid place-items-center w-[26px] h-[26px] flex-none" style={{ opacity: 0.3 }}><b className="block w-2.5 h-2.5 rounded-full" style={{ background: "var(--card)", boxShadow: "inset 0 0 0 1.5px var(--ink-2)" }} /></span>
                <span data-paces className="flex flex-none gap-px" style={{ opacity: 0.3 }}>
                    {PACES.map(([k, d]) => (
                        <svg key={k} data-pace={k} viewBox="0 0 28 26" width="28" height="26" className="rounded-[7px]" style={{ color: "rgb(var(--ink-rgb) / 0.6)" }} aria-hidden="true">
                            <path d={d} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={k === "auto" ? "2.2 2.6" : undefined} />
                        </svg>
                    ))}
                </span>
                <i className="block w-px h-4 flex-none" style={{ background: "var(--hairline)" }} />
                <span className="grid place-items-center w-[26px] h-[26px] rounded-full flex-none" style={{ background: "var(--pencil-wash)", color: "var(--pencil)" }}>
                    <svg viewBox="0 0 14 14" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 6.2V5.6a2 2 0 0 1 2-2h7M9.2 1.6l2 2-2 2M12 7.8v.6a2 2 0 0 1-2 2H3M4.8 12.4l-2-2 2-2" /></svg>
                </span>
            </div>
            <i className="bz-abs block inset-x-0 h-px" style={{ top: 44, background: "var(--hairline)" }} />
            <div className="bz-abs" style={{ left: 0, right: 0, top: 45, bottom: 0 }}>
                <svg className="bz-abs" width={SHEET} height="24" style={{ left: NAMES, top: 0 }} aria-hidden="true">
                    {strokes}
                    <path d={`M${end} 5V24`} stroke="rgb(var(--ink-rgb) / 0.55)" strokeWidth="1.25" />
                    <path d={`M${end} 4.5 ${end - 8} 8 ${end} 11.5Z`} fill="var(--card)" stroke="rgb(var(--ink-rgb) / 0.6)" strokeWidth="1.1" strokeLinejoin="round" />
                </svg>
                {/* the sheet, ruled a line at a time; past the film's end it lies in shade */}
                <i className="bz-abs block" style={{ left: NAMES, right: 0, top: 24, bottom: 6, backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 23.5px, rgb(var(--ink-rgb) / 0.07) 23.5px, rgb(var(--ink-rgb) / 0.07) 24px)" }} />
                <i className="bz-abs block" style={{ left: NAMES + end, right: 0, top: 24, bottom: 6, background: "rgb(var(--ink-rgb) / 0.05)" }} />
                {LINES.map(([k, line, marks]) => <Line key={k} k={k} u={u} line={k === "pug" ? 1 : line ?? 0} name={NAMED[k]?.[0]} kind={NAMED[k]?.[1]} marks={marks} hidden={k !== "camera"} />)}
                <div data-head className="bz-abs" style={{ left: NAMES - 5.5, top: 0, width: 11, bottom: 6, transform: `translateX(${at(0)}px)` }}>
                    <i className="bz-abs block inset-y-0" style={{ left: 4.875, width: 1.25, background: "var(--pencil)" }} />
                    <svg viewBox="0 0 11 12" width="11" height="12" className="bz-abs left-0 top-0" style={{ filter: "drop-shadow(0 1px 1px rgb(var(--shadow-rgb) / 0.2))" }} aria-hidden="true"><path d="M2.5 0h6Q11 0 11 2.5V6L5.5 12 0 6V2.5Q0 0 2.5 0Z" fill="var(--pencil)" /></svg>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the panel */
const G = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
const CascadeGlyph = <svg viewBox="0 0 18 18" width="18" height="18" {...G} strokeWidth="1.5" aria-hidden="true"><path d="M3.6 5.4h6.5M6.1 9h6.5M8.6 12.6h6.5" /></svg>;
const PoseGlyph = <svg viewBox="0 0 18 18" width="18" height="18" {...G} aria-hidden="true"><rect x="2.5" y="6.5" width="9" height="7.9" rx="2" strokeWidth="1.1" strokeDasharray="1.8 2" /><rect x="6.8" y="2.9" width="9" height="7.9" rx="2" fill="var(--card)" /></svg>;
const ReelGlyph = <svg viewBox="0 0 18 18" width="18" height="18" {...G} strokeWidth="1.3" aria-hidden="true"><rect x="2.2" y="4.3" width="13.7" height="9.4" rx="2.5" /><path d="M7.6 6.8 11.2 9l-3.6 2.2z" fill="currentColor" stroke="none" /></svg>;
/** A card of this panel (PanelCard): what it is and what it comes to on one line, 40 tall, and its controls under it. */
function Panel({ data, top, glyph, title, summary, sum, children, style }) {
    return (
        <div data-panel={data} className="bz-abs bz-card rounded-[12px]" style={{ left: 16, top, width: 248, ...style }}>
            <div className="flex items-center h-10 pl-[9px] pr-[11px] gap-2">
                <span className="grid place-items-center w-[22px] h-[22px] flex-none" style={{ color: "var(--ink-2)" }}>{glyph}</span>
                <span className="text-[12.5px] font-semibold whitespace-nowrap">{title}</span>
                <span data-sum={sum} className="ml-auto pl-1.5 text-[12px] bz-num truncate" style={{ color: "var(--ink-2)" }}>{summary}</span>
            </div>
            <div className="px-3 pb-3 flex flex-col gap-2">{children}</div>
        </div>
    );
}
/** One of the design's own cards, folded, as Animate shows it for a look that can be keyed: its key's bead at the end. */
function Look({ top, glyph, swatch, title, summary }) {
    return (
        <div className="bz-abs bz-card rounded-[12px] flex items-center h-10 pl-[9px] pr-2 gap-2" style={{ left: 16, top, width: 248 }}>
            <span className="grid place-items-center w-[22px] h-[22px] flex-none" style={{ color: "var(--ink-2)" }}>{swatch ? <i className="block w-[15px] h-[15px] rounded-[4px]" style={{ background: swatch, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.15)" }} /> : <Icon name={glyph} size={15} />}</span>
            <span className="text-[12.5px] font-semibold">{title}</span>
            <span className="ml-auto text-[12px] bz-num" style={{ color: "var(--ink-2)" }}>{summary}</span>
            <Bead />
        </div>
    );
}
/** KeyBead: faint while the property never changes, a ring while it does, filled where it has a key (set by the scene). */
const Bead = ({ data }) => <i data-bead={data} className="grid place-items-center w-5 h-5 flex-none"><b className="block w-[9px] h-[9px] rounded-full" style={{ background: "var(--card)", boxShadow: "inset 0 0 0 1.4px var(--ink-4)" }} /></i>;
/** NumberField: a well 28 tall, what it is at the left, its number, its unit at the right. (A pair gives a long name
    in another language the few points it is short of.) */
function Field({ data, label = "", unit, width = 84, children }) {
    return (
        <span className={`bz-well flex items-center h-7 rounded-[7px] text-[12px] ${width < 84 ? "min-w-0" : "flex-none"}`} style={{ width }}>
            <i className="not-italic flex-none text-[11px] font-medium" style={{ width: 12, marginLeft: 8, marginRight: 4, color: "var(--ink-3)" }}>{label}</i>
            <b data-v={data} className="flex-1 font-normal bz-num">{children}</b>
            {unit && <i className="not-italic text-[11px] pr-[7px]" style={{ color: "var(--ink-3)" }}>{unit}</i>}
        </span>
    );
}
/** PropertyRow: its key, its name, its numbers. */
const Row = ({ bead, name, children }) => <div className="flex items-center gap-1 h-7 -ml-[5px]"><Bead data={bead} /><span className="flex-1 text-[12px] whitespace-nowrap" style={{ color: "var(--ink-2)" }}>{name}</span>{children}</div>;
const Hair = () => <i className="block h-px my-0.5" style={{ background: "var(--hairline)" }} />;
const Plain = ({ name, children, style }) => <div className="flex items-center gap-1.5 h-7" style={style}><span className="text-[12px] whitespace-nowrap" style={{ color: "var(--ink-2)" }}>{name}</span><span className="flex-1" />{children}</div>;

/* MoveGlyph: a small card making its move over the place it belongs, part of the way there (0.46 away) at rest. */
const HOME = [9, 5.5, 18, 13], A = 0.46;
const MOVES = {
    Fade: { o: 1 - A }, Rise: { y: 8 * A, o: 1 - A }, Drop: { y: -9 * A, o: 1 - A }, Slide: { x: -26 * A }, Pop: { inset: [0.2 * A, 0.2 * A], o: 1 - A }, Zoom: { inset: [-0.2 * A, -0.2 * A], o: 1 - A },
    Flip: { inset: [0.06 * A, (1 - Math.cos(80 * RAD * A)) / 2], o: 1 - A }, Focus: { blur: 3.2 * A, o: 1 - 0.75 * A }, Draw: null,
};
function MoveGlyph({ move }) {
    const m = MOVES[move], [x, y, w, h] = HOME;
    const dx = m?.inset ? w * m.inset[0] : 0, dy = m?.inset ? h * m.inset[1] : 0;
    return (
        <svg viewBox="0 0 36 24" width="36" height="24" aria-hidden="true">
            <rect x={x + 0.5} y={y + 0.5} width={w - 1} height={h - 1} rx="2.5" fill="none" stroke="rgb(var(--ink-rgb) / 0.2)" strokeDasharray="2 2" />
            {m
                ? <rect data-mini x={x + (m.x || 0) + dx} y={y + (m.y || 0) + dy} width={w - 2 * dx} height={h - 2 * dy} rx="2.5" fill="var(--ink)" style={{ opacity: 0.82 * (m.o ?? 1), ...(m.blur ? { filter: `blur(${m.blur}px)` } : {}) }} />
                : <path d="M6 15C11 1.5 14 3.5 18 12S25 22.5 30 9" fill="none" stroke="rgb(var(--ink-rgb) / 0.82)" strokeWidth="2.2" strokeLinecap="round" pathLength="1" strokeDasharray={`${1 - A} 1`} />}
        </svg>
    );
}

export function AnimateState({ u, code }) {
    const n = number(code), count = plural(code);
    // in the other three languages a pose's Fade is the word the design has for Opacity
    const fade = code === "en" ? "Fade" : u("Opacity");
    const rows = ["where", "date", "pill", "logo", "pug", "boy", "good"].map((id) => ({ id, name: NAMED[id][0], kind: NAMED[id][1], ...(id === "logo" ? { open: false } : {}) }));
    const padFit = Math.min((224 - 36) / BW, (118 - 26) / BH);
    return (
        <>
            <LayersPanel u={u} crumb="Poster" count={17} rows={rows} />
            <Canvas rulers={false} grid={<GraphPaper />}>
                <Label x={AX} y={AY}>Poster</Label>
                {/* the small camera over the artboard's corner, with a bead beside it once the camera has keys */}
                <svg data-chip className="bz-abs overflow-visible" viewBox="0 0 22 18" width="22" height="18" style={{ left: AX + AW - 22, top: AY - 21, color: "var(--label)" }} aria-hidden="true">
                    <path d="M7 5h7a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM17.5 9.25 21.5 5.8v6.9Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    <circle cx="-1" cy="9.25" r="2" fill="currentColor" style={{ opacity: 0 }} />
                </svg>
                {/* the film's frame: what is past it is cut off, and the backdrop shows in it */}
                <div data-film className="bz-abs overflow-hidden" style={{ left: AX, top: AY, width: AW, height: AH, background: "rgb(15 14 13)", perspective: D * Z }}>
                    <div data-world className="bz-abs" style={{ left: AW / 2, top: AH / 2, width: 0, height: 0, transformStyle: "preserve-3d" }}>
                        <PosterStatic z={Z} x={-AW / 2} y={-AH / 2} sheet={{ overflow: "visible", transformStyle: "preserve-3d" }}>
                            <img data-layer="pug" data-src="/img/parts/pug-cutout.webp" alt="" className="bz-abs max-w-none" style={{ left: FRAMES.pug[0] * Z, top: FRAMES.pug[1] * Z, width: FRAMES.pug[2] * Z, height: FRAMES.pug[3] * Z, filter: "drop-shadow(0 8px 10px rgb(20 22 70 / 0.4))" }} />
                            <svg data-layer="logo" viewBox={`0 0 ${VIEW} ${VIEW}`} className="bz-abs" style={{ left: FRAMES.logo[0] * Z, top: FRAMES.logo[1] * Z, width: FRAMES.logo[2] * Z, height: FRAMES.logo[3] * Z }} aria-hidden="true">{LOGO.slice(1).map((s, j) => <g key={j} fill={s.fill}>{shape(s)}</g>)}</svg>
                        </PosterStatic>
                    </div>
                </div>
                {/* what the canvas draws over the film: outlines, a layer's home and way, the loop, the camera's frame */}
                <svg data-over className="bz-abs left-0 top-0 overflow-visible pointer-events-none" width="1280" height="800" aria-hidden="true" />
                <Timeline u={u} n={n} />
            </Canvas>
            <div className="bz-abs overflow-hidden" style={{ left: 998, top: 52, width: 282, height: 748, maskImage: "linear-gradient(to bottom, #000 728px, transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 728px, transparent)" }}>
                <Panel data="moves" top={14} glyph={CascadeGlyph} title={u("Moves")} summary={u("Everything")} sum="moves">
                    <Seg options={[u("Comes On"), u("Goes")]} on={0} />
                    <div className="grid grid-cols-3 gap-1.5 py-0.5">
                        {Object.keys(MOVES).map((m) => (
                            <span key={m} data-move={m} className="flex flex-col items-center justify-center gap-[3px] h-[52px] rounded-[9px]" style={{ background: "rgb(var(--ink-rgb) / 0.035)" }}>
                                <MoveGlyph move={m} /><span className="text-[10.5px] leading-none whitespace-nowrap" style={{ color: "var(--ink-2)" }}>{u(m)}</span>
                            </span>
                        ))}
                    </div>
                    <Plain name={u("One After Another")}><Field unit="s">{n(DROP.apart, 2)}</Field></Plain>
                </Panel>
                <Panel data="pose" top={320} glyph={PoseGlyph} title={u("Pose")} summary={`${n(0)} s`} sum="pose" style={{ opacity: 0, visibility: "hidden" }}>
                    <Row bead="move" name={u("Move")}><Field label="X" width={64}>0</Field><Field data="move" label="Y" width={64}>0</Field></Row>
                    <Row name={u("Scale")}><Field unit="%">100</Field></Row>
                    <Row name={u("Turn")}><Field unit="°">0</Field></Row>
                    <Row bead="fade" name={fade}><Field data="fade" unit="%">100</Field></Row>
                    <Row name={u("Blur")}><Field>0</Field></Row>
                    <Hair />
                    <Row name={u("Lift")}><Field>0</Field></Row>
                    <Row name={u("Tilt")}><Field unit="°">0</Field></Row>
                    <Row name={u("Swing")}><Field unit="°">0</Field></Row>
                </Panel>
                {/* under the pose, the looks that can be keyed: the pug's corners and shadow; the four layers' colour */}
                <div data-panel="pug" style={{ opacity: 0, visibility: "hidden" }}>
                    <Look top={675} glyph="corners" title={u("Corners")} summary="0" />
                    <Look top={725} glyph="opacity" title={u("Shadow")} summary="Y 30 · B 60" />
                </div>
                <div data-panel="four" style={{ opacity: 0, visibility: "hidden" }}>
                    <Look top={675} swatch="#F6F1E6" title={u("Fill")} summary="#F6F1E6" />
                    <div className="bz-abs bz-card rounded-[12px] flex items-center h-10 pl-[9px] pr-3 gap-2" style={{ left: 16, top: 725, width: 248 }}>
                        <span className="grid place-items-center w-[22px] h-[22px] flex-none" style={{ color: "var(--ink-2)" }}>{CameraGlyph}</span>
                        <span className="text-[12.5px] font-semibold whitespace-nowrap">{u("Fly the Camera Here")}</span>
                    </div>
                </div>
                <Panel data="camera" top={14} glyph={CameraGlyph} title={u("Camera")} summary="×1" style={{ opacity: 0, visibility: "hidden" }}>
                    {/* the artboard as the camera sees it, small, in the frame the film has */}
                    <div data-pad className="relative bz-well rounded-[9px] overflow-hidden" style={{ height: 118 }}>
                        <svg viewBox="0 0 224 118" className="bz-abs inset-0 w-full h-full" aria-hidden="true">
                            <path data-pad-sheet fill="var(--card)" stroke="rgb(var(--ink-rgb) / 0.75)" strokeWidth="1.2" strokeLinejoin="round" />
                            <path data-pad-rules fill="none" stroke="rgb(var(--ink-rgb) / 0.12)" strokeWidth="0.75" />
                            <rect x={112 - (BW * padFit) / 2} y={59 - (BH * padFit) / 2} width={BW * padFit} height={BH * padFit} rx="2" fill="none" stroke="var(--pencil)" strokeWidth="1.25" />
                            <path d="M108.5 59h7M112 55.5v7" stroke="var(--pencil)" />
                        </svg>
                    </div>
                    <Row name="Zoom"><Field unit="×">1</Field></Row>
                    <Row name={u("Look At")}><Field label="X" width={64}>0</Field><Field label="Y" width={64}>0</Field></Row>
                    <Row name={u("Roll")}><Field unit="°">0</Field></Row>
                    <Row bead="tilt" name={u("Tilt")}><Field data="tilt" unit="°">0</Field></Row>
                    <Row bead="swing" name={u("Swing")}><Field data="swing" unit="°">0</Field></Row>
                    <div className="flex justify-end pt-0.5"><span data-whole className="grid place-items-center h-7 px-[11px] rounded-[8px] text-[12.5px] whitespace-nowrap" style={{ background: "rgb(var(--ink-rgb) / 0.05)", opacity: 0.4 }}>{u("See the Whole Artboard")}</span></div>
                    <Hair />
                    <Row name={focus(code)}><Field>0</Field></Row>
                    <Row name={u("Blur")}><Field>0</Field></Row>
                </Panel>
                <Panel data="film" top={320} glyph={ReelGlyph} title="Film" summary={`${n(LENGTH)} s`}>
                    <Plain name={u("Length")}><Field unit="s">{n(LENGTH)}</Field></Plain>
                    <Seg options={[u("Round and Round"), u("Once")]} on={0} />
                    <Plain name={u("Backdrop")}>
                        <i className="block w-7 h-7 rounded-[7px] flex-none" style={{ background: "#0F0E0D", boxShadow: "inset 0 0 0 0.5px rgb(255 255 255 / 0.18), 0 0 0 0.5px var(--hairline)" }} />
                        <span className="bz-well flex items-center h-7 rounded-[7px] text-[12px]" style={{ width: 96, marginLeft: 2 }}><i className="not-italic text-[11px] pl-2 pr-0.5" style={{ color: "var(--ink-3)" }}>#</i><b className="font-normal font-mono text-[11.5px]">0F0E0D</b></span>
                    </Plain>
                    <Hair />
                    <div className="flex gap-2"><div className="flex-1"><Seg options={["1×", "2×", "3×"]} on={1} /></div><div style={{ width: 84 }}><Seg options={["30", "60"]} on={1} /></div></div>
                    <Seg options={["H.264", u("HEVC 10 bit")]} on={0} />
                    <div className="text-[11px] leading-[14px] text-center bz-num" style={{ color: "var(--ink-3)" }}>{pixels(code, BW * 2, BH * 2, 60)}</div>
                    <div className="grid place-items-center h-[38px] rounded-[10px] text-[13px] font-semibold" style={{ background: "var(--ink)", color: "var(--on-ink)", boxShadow: "0 3px 6px rgb(var(--shadow-rgb) / 0.18)" }}>{u("Save as Movie…")}</div>
                </Panel>
            </div>
            <Pointer data="animate" />
            {/* said by the scene as it plays, kept here in the page's language */}
            <i data-said hidden data-everything={u("Everything")} data-layers={[2, 3, 4].map((k) => count("layers", k)).join("|")} data-mark={n(0.5, 2).slice(1, 2)} />
        </>
    );
}

export function playAnimate({ q, bar }) {
    const tl = gsap.timeline(), p = q('[data-pointer="animate"]')[0];
    const one = (s) => q(s)[0], said = one("[data-said]").dataset, mark = said.mark;
    const num = (v, places = 1) => { const f = 10 ** places, r = Math.round(v * f) / f, s = Number.isInteger(r) ? String(r) : r.toFixed(places).replace(/0+$/, ""); return mark === "." ? s : s.replace(".", mark); };
    const layers = Object.fromEntries(Object.keys(FRAMES).map((k) => [k, one(`[data-layer="${k}"]`)]));
    const world = one("[data-world]"), over = one("[data-over]"), chip = one("[data-chip]");
    const card = one("[data-timeline]"), head = one("[data-head]"), clock = one("[data-clock]"), play = one("[data-play]"), hold = one("[data-hold]"), paces = one("[data-paces]");
    const line = Object.fromEntries(LINES.map(([k]) => [k, one(`[data-line="${k}"]`)]));
    const panel = Object.fromEntries(["moves", "pose", "pug", "four", "camera", "film"].map((k) => [k, one(`[data-panel="${k}"]`)]));
    const row = Object.fromEntries(Object.keys(NAMED).map((k) => [k, one(`[data-row="${k}"]`)]));
    const value = (k) => one(`[data-v="${k}"]`), bead = (k) => one(`[data-bead="${k}"] > b`);
    const sums = { moves: one('[data-sum="moves"]'), pose: one('[data-sum="pose"]') }, apart = panel.moves.lastElementChild.lastElementChild, whole = one("[data-whole]");
    const padSheet = one("[data-pad-sheet]"), padRules = one("[data-pad-rules]"), drop = one('[data-move="Drop"]'), mini = drop.querySelector("[data-mini]");

    /* ---- the film as a state: where its playhead is, what has keys, what is picked, and what is in hand */
    const S = { t: 0, rest: 0, away: 0, drops: 0, tilt: 0, swing: 0, pick: 0, hot: 0, moving: 0, loop: 0, run: 0, chip: 0 };
    const FOUR = ["good", "pill", "date", "where"], BOARD = ["good", "boy", "pug", "logo", "pill", "date", "where"], LOOP = [AX - 21, AY + 9], LOOPED = [AX + AW + 13, AY + 120];
    const REST = { y: 0, o: 1 };
    const pose = (k, t) => {
        if (k === "pug") return { y: S.away * (1 - PACE.settles(t / BEAT)), o: 1 };
        const i = DROP.order.indexOf(k);
        if (i < 0 || !S.drops) return REST;
        const u = (t - i * DROP.apart) / DROP.time;
        return { y: DROP.y * (1 - sprung(u)), o: PACE.settles(u) };
    };
    const keyed = (k) => (k === "pug" ? S.away > 0 && [0, BEAT] : k === "camera" ? (S.tilt || S.swing) && [0, END] : S.drops && DROP.order.includes(k) && [DROP.order.indexOf(k) * DROP.apart, DROP.order.indexOf(k) * DROP.apart + DROP.time]) || [];
    const state = (keys, t) => (keys.some((k) => Math.abs(k - t) < 0.0042) ? 2 : keys.length ? 1 : 0);
    const dot = (el, s) => { el.style.background = s === 2 ? "var(--pencil)" : "var(--card)"; el.style.boxShadow = `inset 0 0 0 1.4px var(--${s === 2 ? "pencil" : s ? "ink-2" : "ink-4"})`; el.style.transform = s === 2 ? "scale(1.1)" : ""; };
    const d = (pts) => "M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L") + "Z";
    const grip = ([x, y]) => `<rect x="${Math.round(x) - 3.5}" y="${Math.round(y) - 3.5}" width="7" height="7" fill="#fff" stroke="var(--cpencil)"/>`;
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    let last = "";
    const show = () => {
        const t = S.t, run = S.run > 0.5, px = gsap.getProperty(p, "x") + 2.5, py = gsap.getProperty(p, "y") + 2.2;
        // the camera leaves the whole artboard at the start and is where it was posed by the move's end, gently both ways
        const flown = (at) => { const k = PACE.smooth(at / END); return { tilt: S.tilt * k, swing: S.swing * k }; }, cam = flown(t);
        // the panels show the moment the playhead rests at, which a film that plays runs ahead of
        const pt = run ? S.rest : t, seen = flown(pt);
        const quad = (id, y = pose(id, t).y) => corners(FRAMES[id], 0, y).map(lens(cam.tilt, cam.swing, LIFT[id])).map(onCanvas);
        // what is picked: the pug, the camera, or what a loop is pulled round, bottom first as the artboard holds them
        const loop = S.loop > 0.5 ? [LOOP[0], LOOP[1], Math.max(px, LOOP[0]), Math.max(py, LOOP[1])] : null;
        const picked = loop ? BOARD.filter((id) => { const c = quad(id); return c[0][0] <= loop[2] && c[1][0] >= loop[0] && c[0][1] <= loop[3] && c[2][1] >= loop[1]; }) : S.pick === 1 ? ["pug"] : S.pick === 2 ? FOUR : [];
        const sig = [t, pt, S.away, S.drops, S.tilt, S.swing, S.pick, S.hot, S.moving, S.run, S.chip, loop ? `${px | 0},${py | 0}` : ""].join();
        if (sig === last) return;
        last = sig;

        // the film: each layer where its keys have it, lifted as the design lifts it, under the camera
        for (const id in layers) { const a = pose(id, t); layers[id].style.transform = `translate3d(0,${(a.y * Z).toFixed(2)}px,${(LIFT[id] * Z).toFixed(2)}px)`; layers[id].style.opacity = a.o.toFixed(3); }
        world.style.transform = `rotateX(${cam.tilt.toFixed(2)}deg) rotateY(${cam.swing.toFixed(2)}deg)`;

        // over it, while it does not play
        let o = "";
        if (!run) {
            if (S.pick === 3) {
                const sheet = corners([0, 0, BW, BH]).map(lens(cam.tilt, cam.swing)).map(onCanvas), cx = AX + AW / 2, cy = AY + AH / 2, cross = `M${cx - 5} ${cy}h10M${cx} ${cy - 5}v10`;
                o += `<rect x="${AX - 0.5}" y="${AY - 0.5}" width="${AW + 1}" height="${AH + 1}" fill="none" stroke="rgb(var(--cpencil-rgb) / 0.45)" stroke-dasharray="3 3"/>`;
                o += `<path d="${d(sheet)}" fill="none" stroke="var(--cpencil)"/><path d="${cross}" stroke="rgb(255 255 255 / 0.9)" stroke-width="3"/><path d="${cross}" stroke="var(--cpencil)"/>${sheet.map(grip).join("")}`;
            }
            for (const id of picked) if (Math.abs(pose(id, t).y) > 0.01) o += `<path d="${d(quad(id, 0))}" fill="none" stroke="rgb(var(--cpencil-rgb) / 0.45)" stroke-dasharray="3 3"/>`;
            if (S.pick === 1 && S.away > 0) {
                // the pug's way: where its middle goes from its first key to its last, ticked each twentieth of a second
                const way = Array.from({ length: 31 }, (_, j) => { const c = quad("pug", pose("pug", (BEAT * j) / 30).y); return mid(c[0], c[2]); });
                o += `<path d="M${way.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L")}" fill="none" stroke="rgb(var(--cpencil-rgb) / 0.55)"/>`;
                for (let j = 3; j < 30; j += 3) o += `<circle cx="${way[j][0].toFixed(1)}" cy="${way[j][1].toFixed(1)}" r="1.25" fill="var(--cpencil)"/>`;
                o += `<circle cx="${way[0][0]}" cy="${way[0][1]}" r="${t < 0.004 ? 4.5 : 3.5}" fill="var(--cpencil)" stroke="#fff"/>`;
                o += `<circle cx="${way[30][0]}" cy="${way[30][1]}" r="${(Math.abs(t - BEAT) < 0.004 ? 4.5 : 3.5) - 0.75}" fill="#fff" stroke="var(--cpencil)" stroke-width="1.5"/>`;
            }
            if (S.hot > 0.5 && !picked.includes("pug")) o += `<path d="${d(quad("pug"))}" fill="none" stroke="var(--cpencil)" stroke-width="1.5"/>`;
            for (const id of picked) o += `<path d="${d(quad(id))}" fill="none" stroke="var(--cpencil)"/>`;
            if (S.pick === 1 && S.moving < 0.5) { const c = quad("pug"); o += `<g style="filter:drop-shadow(0 -0.5px 0.75px rgb(0 0 0 / 0.18))">${[0, 1, 2, 3].map((j) => grip(mid(c[j], c[(j + 1) % 4])) + grip(c[j])).join("")}</g>`; }
            if (loop) o += `<rect x="${loop[0] + 0.5}" y="${loop[1] + 0.5}" width="${Math.max(loop[2] - loop[0] - 1, 0)}" height="${Math.max(loop[3] - loop[1] - 1, 0)}" fill="rgb(var(--cpencil-rgb) / 0.08)" stroke="rgb(var(--cpencil-rgb) / 0.8)"/>`;
        }
        if (over.innerHTML !== o) over.innerHTML = o;
        // the small camera: drawn in full once it is picked, a bead beside it once it has keys
        const on = S.pick === 3;
        chip.style.color = on ? "var(--label-on)" : "var(--label)";
        chip.firstElementChild.setAttribute("fill-opacity", on ? 1 : 0);
        chip.lastElementChild.style.opacity = S.tilt || S.swing ? 1 : 0;

        // the timeline: the playhead and the clock, and above it whether the film runs and what is held here
        head.style.transform = `translateX(${at(t).toFixed(2)}px)`;
        clock.textContent = t.toFixed(2).replace(".", mark);
        clock.style.color = run ? "var(--pencil)" : "";
        play.style.background = run ? "var(--pencil)" : "rgb(var(--ink-rgb) / 0.06)";
        play.querySelector("[data-plays]").style.opacity = run ? 0 : 1;
        play.querySelector("[data-pauses]").style.opacity = run ? 1 : 0;
        const targets = S.pick === 3 ? ["camera"] : picked, held = Math.max(0, ...targets.map((id) => state(keyed(id), pt)));
        hold.style.opacity = held ? 1 : 0.3;
        dot(hold.firstElementChild, held === 2 ? 2 : 1);
        hold.firstElementChild.style.boxShadow = `inset 0 0 0 1.5px var(--${held === 2 ? "pencil" : "ink-2"})`;
        paces.style.opacity = held === 2 ? 1 : 0.3;
        // Auto is the pace of a key nobody paced; the keys a move ends on are come to on a spring and settling, which is no one pace
        const auto = held === 2 && !(S.pick === 2 && S.drops && pt > 0.5);
        paces.firstElementChild.style.color = auto ? "var(--pencil)" : "";
        paces.firstElementChild.style.background = auto ? "var(--pencil-wash)" : "";
        for (const [id, el] of Object.entries(line)) {
            const mine = id === "camera" ? on : picked.includes(id);
            el.querySelector("[data-wash]").style.opacity = mine ? 0.7 : 0;
            el.querySelector("[data-word]").style.cssText = mine ? "color:var(--pencil);font-weight:500" : "";
            el.querySelector("[data-kind]").style.color = mine ? "var(--pencil)" : "var(--ink-2)";
        }
        for (const [id, el] of Object.entries(row)) {
            const mine = picked.includes(id);
            el.style.background = mine ? "var(--pencil-wash)" : "transparent";
            el.style.fontWeight = mine ? 500 : 400;
            el.children[1].style.color = mine ? "var(--ink)" : "var(--ink-3)";
        }

        // the panel: whose moves they are, the pose at the playhead to the number, and the camera
        sums.moves.textContent = picked.length > 1 ? said.layers.split("|")[picked.length - 2] : picked.length ? NAMED[picked[0]][0] : said.everything;
        apart.style.opacity = picked.length === 1 ? 0.35 : 1;
        sums.pose.textContent = `${num(pt, 2)} s`;
        const ys = picked.map((id) => pose(id, pt).y), os = picked.map((id) => pose(id, pt).o), same = (v) => v.every((x) => Math.abs(x - v[0]) < 0.005);
        value("move").textContent = !ys.length || same(ys) ? num(ys[0] || 0, 1) : "–";
        value("fade").textContent = !os.length || same(os) ? num((os[0] ?? 1) * 100, 0) : "–";
        dot(bead("move"), Math.max(0, ...picked.map((id) => state(keyed(id), pt))));
        dot(bead("fade"), Math.max(0, ...picked.filter((id) => id !== "pug").map((id) => state(keyed(id), pt))));
        value("tilt").textContent = num(seen.tilt, 1);
        value("swing").textContent = num(seen.swing, 1);
        dot(bead("tilt"), S.tilt ? state(keyed("camera"), pt) : 0);
        dot(bead("swing"), S.swing ? state(keyed("camera"), pt) : 0);
        whole.style.opacity = Math.abs(seen.tilt) + Math.abs(seen.swing) > 0.01 ? 1 : 0.4;
        const fit = Math.min((224 - 36) / BW, (118 - 26) / BH), onPad = ([x, y]) => [112 + (x - BW / 2) * fit, 59 + (y - BH / 2) * fit], see = lens(seen.tilt, seen.swing);
        padSheet.setAttribute("d", d(corners([0, 0, BW, BH]).map(see).map(onPad)));
        padRules.setAttribute("d", [1, 2].map((j) => { const a = (BW * j) / 3, b = (BH * j) / 3, l = (m, n) => `M${onPad(see(m)).map((v) => v.toFixed(1)).join(" ")}L${onPad(see(n)).map((v) => v.toFixed(1)).join(" ")}`; return l([a, 0], [a, BH]) + l([0, b], [BW, b]); }).join(""));

        // the Drop chip, pointed at: its small card drops on over and over (here, once)
        const far = S.chip > 0 ? 1 - sprung(S.chip) : A;
        mini.setAttribute("y", (HOME[1] - 9 * far).toFixed(2));
        mini.style.opacity = (0.82 * (1 - Math.min(Math.max(far, 0), 1))).toFixed(3);
    };
    tl.eventCallback("onUpdate", show);
    show();

    /* ---- the panel's cards come and go with what is picked, the film's own card always last */
    const cards = (want, film, t) => {
        for (const k of ["moves", "pose", "pug", "four", "camera"]) {
            const on = want.includes(k);
            tl.to(panel[k], { autoAlpha: on ? 1 : 0, y: on ? 0 : 12, duration: on ? 0.04 : 0.018, ease: on ? THEME.spring : "power1.in" }, t);
        }
        tl.to(panel.film, { y: film, duration: 0.05, ease: THEME.spring }, t);
    };
    gsap.set([panel.pose, panel.pug, panel.four, panel.camera], { y: 12 });
    // a line of the timeline has keys: its beads grow out of their middles
    const keys = (id, t, each = 0) => tl.fromTo(line[id].querySelectorAll("[data-mark]"), { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.03, stagger: each, ease: THEME.pop, immediateRender: false }, t);
    // the film runs: the bar's button says Pause while it does (ModeAction: 0.3/0.8, the word coming up from under)
    const runs = (on, t, rest = 0) => {
        tl.set(S, { run: on ? 1 : 0, rest }, t);
        if (!bar) return;
        tl.to(bar.slot, { width: on ? bar.widths.pause : bar.widths.play, duration: 0.03, ease: spring(0.3, 0.8) }, t);
        tl.to(bar.faces.play, { autoAlpha: on ? 0 : 1, duration: 0.012 }, t).to(bar.faces.pause, { autoAlpha: on ? 1 : 0, duration: 0.012 }, t);
    };
    // the pug is taken by the nose, and let go that much further down
    const nose = (y) => onCanvas(lens(0, 0, LIFT.pug)([BW / 2, y])), grab = nose(650), pull = nose(650 + AWAY)[1] - grab[1];

    /* ---- a key, made by moving a layer: the pug dragged down past the artboard's foot at the film's start */
    tl.fromTo(p, { opacity: 0, x: 786, y: 232 }, { opacity: 1, ...tip(grab), duration: 0.044, ease: "power2.inOut" }, 0.01);
    tl.set(S, { hot: 1 }, 0.034);
    tl.to(p, { scale: 0.86, duration: 0.012 }, 0.058);
    tl.set(S, { pick: 1, hot: 0 }, 0.062);
    cards(["moves", "pose", "pug"], 480, 0.062);
    tl.set(S, { moving: 1 }, 0.074);
    tl.to(S, { away: AWAY, duration: 0.078, ease: "power2.inOut" }, 0.074);
    tl.to(p, { y: grab[1] + pull - 2.2, duration: 0.078, ease: "power2.inOut" }, 0.074);
    // its first pose is a key, and the design keeps it company half a second on: a line for it in the timeline
    tl.to(line.pug, { opacity: 1, duration: 0.02 }, 0.08);
    keys("pug", 0.082, 0.012);
    tl.set(S, { moving: 0 }, 0.158);
    tl.to(p, { scale: 1, duration: 0.02 }, 0.158);
    // let go, the motion it made is shown once, and the playhead is back where it was
    runs(true, 0.168);
    tl.to(S, { t: BEAT, duration: 0.05, ease: "none" }, 0.17);
    runs(false, 0.234);
    tl.set(S, { t: 0 }, 0.234);

    /* ---- ready-made moves: a loop round the top of the poster, and Drop for the four layers it picks */
    glide(tl, p, LOOP, 0.236, 0.038);
    tl.to(p, { scale: 0.86, duration: 0.01 }, 0.275);
    tl.set(S, { pick: 0, loop: 1 }, 0.279);
    cards(["moves"], 0, 0.279);
    tl.to(p, { ...tip(LOOPED), duration: 0.05, ease: "power2.inOut" }, 0.283);
    cards(["moves", "pose", "four"], 480, 0.295);
    tl.set(S, { pick: 2, loop: 0 }, 0.336);
    tl.to(p, { scale: 1, duration: 0.02 }, 0.336);
    glide(tl, p, spot(drop, 0.76, 0.42), 0.342, 0.044);
    tl.to(drop, { backgroundColor: "rgb(var(--ink-rgb) / 0.07)", scale: 1.04, duration: 0.012, ease: THEME.quick }, 0.38);
    tl.set(drop.lastElementChild, { color: "var(--ink)", fontWeight: 500 }, 0.38);
    tl.to(S, { chip: 1, duration: 0.03, ease: "none" }, 0.382);
    click(tl, p, 0.396);
    // four more lines: the card grows to hold them, the pug's line makes room, and each line's keys come one after another
    tl.set(S, { drops: 1 }, 0.41);
    tl.to(card, { height: tall(6), duration: 0.05, ease: THEME.spring }, 0.41);
    tl.to(line.pug, { y: 72, duration: 0.05, ease: THEME.spring }, 0.41);
    DROP.order.forEach((id, j) => { tl.to(line[id], { opacity: 1, duration: 0.02 }, 0.416 + j * 0.006); keys(id, 0.422 + j * 0.008, 0.01); });
    runs(true, 0.414);
    tl.to(S, { t: END, duration: 0.062, ease: "none" }, 0.416);
    runs(false, 0.494, END);
    tl.to(drop, { backgroundColor: "rgb(var(--ink-rgb) / 0.035)", scale: 1, duration: 0.012 }, 0.488);
    tl.set(drop.lastElementChild, { color: "var(--ink-2)", fontWeight: 400 }, 0.488).set(S, { chip: 0 }, 0.488);

    /* ---- the camera: picked by the small one over the artboard, and the scene tipped and swung on its pad */
    glide(tl, p, [AX + AW - 11.5, AY - 11.5], 0.486, 0.04);
    click(tl, p, 0.53);
    tl.set(S, { pick: 3 }, 0.542);
    cards(["camera"], 177, 0.542);
    const pad = spot(one("[data-pad]"), 0.42, 0.26);
    glide(tl, p, pad, 0.552, 0.04);
    tl.to(p, { scale: 0.86, duration: 0.01 }, 0.596);
    tl.to(S, { tilt: TILT, swing: SWING, duration: 0.09, ease: "power2.inOut" }, 0.606);
    tl.to(p, { x: pad[0] - SWING / 0.6 - 2.5, y: pad[1] + TILT / 0.6 - 2.2, duration: 0.09, ease: "power2.inOut" }, 0.606);
    // its first key, here where the playhead rests, and the whole artboard at the start for company
    tl.to(line.camera.querySelector("[data-keys]"), { opacity: 1, duration: 0.012 }, 0.612).to(line.camera.querySelector("[data-chev]"), { opacity: 1, duration: 0.012 }, 0.612);
    keys("camera", 0.614, 0.014);
    tl.to(p, { scale: 1, duration: 0.014 }, 0.7);

    /* ---- the film: the playhead taken back to its start, everything running backwards under the hand, and Play */
    const tab = (t) => [CARD.x + NAMES + at(t), TOP + 45 + 6];
    glide(tl, p, tab(END), 0.708, 0.044);
    tl.to(p, { scale: 0.86, duration: 0.01 }, 0.755);
    tl.to(S, { t: 0, duration: 0.07, ease: "power1.inOut" }, 0.765);
    tl.to(p, { x: tab(0)[0] - 2.5, duration: 0.07, ease: "power1.inOut" }, 0.765);
    tl.to(p, { scale: 1, duration: 0.014 }, 0.838);
    glide(tl, p, spot(play), 0.842, 0.026);
    click(tl, p, 0.87);
    runs(true, 0.884);
    tl.to(S, { t: 0.9, duration: 0.112, ease: "none" }, 0.886);
    tl.to(p, { x: "+=30", y: "-=26", opacity: 0, duration: 0.03, ease: "power1.in" }, 0.9);
    return tl;
}
