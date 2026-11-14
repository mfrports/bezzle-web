/*
 * Vectorize: the Adoption Day poster at 75 %, where the shelter's logo has been dropped as the JPEG it came as: 144
 * pixels across, soft at this size, in its white box. The dashed Vectorize chip at the foot of the
 * inspector (VectorCard 79–86) adds the Vector card after the frame's and opens it (VectorCard 11–50; Cards.swift ›
 * Materialize, Unfold, ThrowOff): the colours found, how many to keep, how the outlines run, how much detail. On the canvas (VectorTool 60–140) the pencil passes once, a line 1.5
 * wide as tall as the picture, easing in and out: before it the picture is still the picture, behind it it is its
 * shapes, their outlines in pencil just where the pencil was (three bands over 0.3 of the width). The layer is a group
 * now with a layer for each shape, named by its kind (Vectorizing 201–220). Opened in the list (LayersPanel 560–660),
 * each row lights its shape on the canvas as the pointer passes (CanvasView › drawHover: a path along itself, any
 * other layer round its frame, 1.5 wide), and a row pointed at shows its lock and its eye: the eye of the last row
 * hides the white box, and the mark is left alone on the poster. It is still the vector it was (Vectorizing ›
 * version(of:): the same layers, as many), so its card stays; dragged by a corner, it grows and every edge stays an edge.
 */
import { gsap } from "gsap";
import { Canvas, Card, LayersPanel, Pointer, Selection, DimPill } from "@/app/Kit";
import { plural } from "@/app/words";
import { PosterStatic } from "@/story/scenes/cutout";
import { THEME, click, glide, spot, tip } from "@/story/engine";

const Z = 0.75, AX = 130, AY = -272;                // the poster at 75 %, its bottom right corner on the table
const L = { x: 832, y: 1104, s: 200 }, BIG = 320;   // the logo on the artboard, and as large as it is dragged
const LX = AX + L.x * Z, LY = AY + L.y * Z, LS = L.s * Z;
/* The logo's shapes, from the back: what Vectorize makes of the picture, to the point. They are the app's own tracing
   of public/img/parts/shelter-logo.jpg as the chip asks for it (Auto, Balanced, 50 %; scripts/shelter-logo.mjs says how
   to trace it again), in the picture's pixels: ten shapes of three colours, the toes found to be ellipses, the rest
   paths. The field inside the ring is no circle to the engine: each shape lies a little under those over it that it
   touches, so no gap shows between them, and what is under the ring is drawn with two curves. */
const SUN = "#F6BE3D", INK = "#1F1B15";
export const VIEW = 144;
export const LOGO = [
    { kind: "Rectangle", fill: "#FFFFFF", box: [0, 0, 144, 144] },
    { kind: "Path", fill: SUN, d: "M58.95 126.42C131.14 142.8 155.64 33.46 84.04 17.33C30.3 5.22 -6.18 71.91 32.88 111C40.15 118.28 48.78 124.11 58.95 126.42Z" },
    { kind: "Path", fill: INK, d: "M71.31 102.64C73.85 103.66 84.62 107.01 87.12 106.98C97.23 106.86 100.38 96.77 97.66 88.47C94.33 78.32 83.39 71.07 73.04 70.61C60.29 70.04 47.69 79.71 45.44 92.33C43.89 101 51.42 109.81 60.63 106.49L71.31 102.64Z" },
    { kind: "Ellipse", fill: INK, box: [73.46, 38.24, 18.69, 24.35], turn: 0.41 },
    { kind: "Ellipse", fill: INK, box: [51.85, 38.24, 18.7, 24.34] },
    { kind: "Ellipse", fill: INK, box: [34.58, 56.57, 17.2, 22.19] },
    { kind: "Ellipse", fill: INK, box: [92.22, 56.57, 17.2, 22.21] },
    { kind: "Path", fill: SUN, d: "M71.92 98.06L80.69 90.64C81.17 89.62 81.48 86.59 80.95 85.44C78.66 80.5 74.76 85.36 71.89 85.73C70.81 85.87 70.26 84.04 69.26 83.86C67.44 83.55 65.55 83.05 63.72 83.21C60.3 89.63 67.39 94.66 71.92 98.06Z" },
    { kind: "Path", fill: SUN, d: "M6.08 64.44C4.97 74.21 6.24 84.08 9.31 93.32C26.92 146.37 99.56 153.9 128.52 106.39C133.53 98.16 136.97 88.97 137.96 79.35C139.09 68.48 137.43 57.61 133.55 47.58C129.54 37.22 123.03 28.48 114.53 21.35C74.32 -12.37 12 12.25 6.08 64.44ZM127.87 80C116.65 153.15 5.49 137.14 16.05 64.43C26.77 -9.36 139.1 6.85 127.87 80Z" },
    { kind: "Path", fill: INK, d: "M14.13 64.16C13.09 73.11 13.91 82.11 16.74 90.64C19.47 98.85 24 105.96 29.97 112.16C58.15 141.38 105.21 134.19 123.85 98.47C126.88 92.66 129.18 86.18 129.91 79.62C130.89 70.75 130.07 61.82 127.26 53.36C124.52 45.12 119.94 37.91 113.91 31.71C85.67 2.66 38.77 9.85 20.15 45.53C17.15 51.27 14.88 57.67 14.13 64.16ZM106.94 30.94C112.62 35.81 117.41 41.79 120.63 48.51C140.73 90.54 102.25 135.92 57.61 124.01C50.43 122.09 43.6 118.55 37.84 113.79C0.74 83.21 19.02 23.16 66.62 18.32C73.3 17.64 80.2 18.07 86.63 20.04C94.13 22.33 100.95 25.79 106.94 30.94Z" },
];
const KINDS = { Rectangle: "rect", Ellipse: "ellipse", Path: "path" };
const UNIT = VIEW / LS, BOX = `0 0 ${VIEW} ${VIEW}`;        // a point of the canvas in the picture's pixels
const REACH = 0.3;                                  // how far behind the pencil the outlines still show
const frame = ({ box: [x, y, w, h] }) => <rect x={x} y={y} width={w} height={h} />;
export function shape(s) {
    if (s.kind === "Path") return <path d={s.d} fillRule="evenodd" />;
    if (s.kind === "Rectangle") return frame(s);
    const cx = s.box[0] + s.box[2] / 2, cy = s.box[1] + s.box[3] / 2;
    return <ellipse cx={cx} cy={cy} rx={s.box[2] / 2} ry={s.box[3] / 2} transform={s.turn ? `rotate(${s.turn} ${cx} ${cy})` : undefined} />;
}

/** VectorGlyph: a curve between two points, the handle of one drawn out. */
const VectorGlyph = (
    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
        <path d="M2.2 11.4C2.7 4.2 5.04 1.6 11.8 3.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M11.8 3.2 5.04 1.6" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" /><circle cx="5.04" cy="1.6" r="1.3" fill="currentColor" />
        <rect x=".4" y="9.6" width="3.6" height="3.6" fill="currentColor" /><rect x="10" y="1.4" width="3.6" height="3.6" fill="currentColor" />
    </svg>
);
/** The Frame card's glyph: the layer's own proportions, small. */
const SquareGlyph = <svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><rect x="3" y="3" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>;
const VTOP = 114, VTALL = 182;                      // the Vector card, open, in the second place
/** A SegmentedWell: a well, and a card behind the choice that is made. Each segment is as wide as its word is when
    chosen, and the room left is shared out evenly, the same either side of every word (BalancedSegments). */
export function Seg({ options, on }) {
    return (
        <div className="relative bz-well flex h-7 rounded-[9px] p-0.5 text-[12px] whitespace-nowrap">
            {options.map((o, j) => (
                <span key={o} className={`relative flex-auto grid place-items-center rounded-[7px] ${j === on ? "bz-card font-medium" : ""}`} style={j === on ? undefined : { color: "var(--ink-2)" }}>
                    <b className="font-medium invisible" style={{ gridArea: "1 / 1" }} aria-hidden="true">{o}</b><span style={{ gridArea: "1 / 1" }}>{o}</span>
                </span>
            ))}
        </div>
    );
}
function Chip({ data, children }) {
    return <span data-chip={data} className="flex items-center gap-[5px] h-7 px-2.5 rounded-[8px] text-[12px] whitespace-nowrap" style={{ color: "var(--ink-2)", outline: "1px dashed rgb(var(--ink-rgb) / 0.16)", outlineOffset: -1 }}><b className="text-[11px]">+</b>{children}</span>;
}
/** RowIcon: what a row of the list shows at its right end while it is pointed at, 20 square each: an open lock and an eye,
    which is struck through once its layer is hidden. */
function RowIcons() {
    const icon = (data, drawn) => <i data-icon={data} className="block w-5 h-5"><svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawn}</svg></i>;
    return (
        <span data-tail className="ml-auto flex flex-none" style={{ color: "var(--ink-3)", opacity: 0 }}>
            {icon("lock", <><rect x="6.1" y="9.5" width="7.8" height="6.1" rx="1.5" /><path d="M12.2 9.5V7.2a2.2 2.2 0 0 0-4.4 0v.6" /></>)}
            {icon("eye", <><path d="M3.7 10.3C5.3 7.7 7.4 6.4 10 6.4s4.7 1.3 6.3 3.9c-1.6 2.6-3.7 3.9-6.3 3.9s-4.7-1.3-6.3-3.9Z" /><circle cx="10" cy="10.3" r="1.8" fill="currentColor" stroke="none" /><path data-slash d="M5.4 5.3 14.6 15.3" style={{ opacity: 0 }} /></>)}
        </span>
    );
}

export function VectorizeState({ u, code }) {
    const n = plural(code);
    const said = (w, x, y) => `${w} × ${w} · ${x}, ${y}`;
    // the list: the logo as a picture, then as a group with its shapes (the front one first), and what lies under it
    const shapes = [...LOGO].reverse();
    const rows = [
        { name: "Where", kind: "text" }, { name: "Date", kind: "text" }, { name: "Date pill", kind: "rect" },
        { id: "pic", name: "Logo", kind: "rect", on: true, row: 3 },
        { id: "group", name: "Logo", kind: "group", open: false, on: true, row: 3, hidden: true },
        ...shapes.map((s, j) => ({ id: `shape${j}`, name: u(s.kind), kind: KINDS[s.kind], depth: 1, row: 4 + j, hidden: true, tail: <RowIcons /> })),
        ...["Pug", "Boy", "Good"].map((name, j) => ({ id: `under${j}`, name, kind: name === "Pug" ? "rect" : "text", row: 4 + j })),
    ];
    const outlines = { fill: "none", stroke: "var(--cpencil)" };
    return (
        <>
            <LayersPanel u={u} crumb="Poster" count={7} rows={rows} />
            <Canvas rulers={{ origin: [AX, AY], zoom: Z, band: [LX, LX + LS], bandY: [LY, LY + LS] }}>
                <PosterStatic z={Z} x={AX} y={AY}>
                    <img data-src="/img/parts/pug-cutout.webp" alt="" className="bz-abs max-w-none" style={{ left: -210 * Z, top: 440 * Z, width: 1500 * Z, height: 1000 * Z, filter: "drop-shadow(0 21px 25px rgb(20 22 70 / 0.4))" }} />
                    <div data-logo className="bz-abs overflow-hidden" style={{ left: L.x * Z, top: L.y * Z, width: LS, height: LS }}>
                        <svg data-shapes viewBox={BOX} className="bz-abs inset-0 w-full h-full">{LOGO.map((s, j) => <g key={j} data-shape={j} fill={s.fill}>{shape(s)}</g>)}</svg>
                        {/* the picture, still there ahead of the pencil */}
                        <img data-jpeg data-src="/img/parts/shelter-logo.jpg" alt="" className="bz-abs inset-0 w-full h-full max-w-none" />
                        {/* behind the pencil: the outlines, fainter the further back */}
                        <div data-trail className="bz-abs inset-y-0 left-0 overflow-hidden" style={{ width: LS * REACH, opacity: 0, maskImage: "linear-gradient(to right, rgb(0 0 0 / 0.16) 38%, rgb(0 0 0 / 0.35) 38%, rgb(0 0 0 / 0.35) 70%, rgb(0 0 0 / 0.54) 70%)", WebkitMaskImage: "linear-gradient(to right, rgb(0 0 0 / 0.16) 38%, rgb(0 0 0 / 0.35) 38%, rgb(0 0 0 / 0.35) 70%, rgb(0 0 0 / 0.54) 70%)" }}>
                            <svg data-outlines viewBox={BOX} className="bz-abs top-0 left-0 overflow-visible max-w-none" width={LS} height={LS} strokeWidth={UNIT} {...outlines}>{LOGO.map((s, j) => <g key={j}>{shape(s)}</g>)}</svg>
                        </div>
                        <i data-pencil className="bz-abs inset-y-0 left-0 block" style={{ width: 1.5, marginLeft: -0.75, background: "var(--cpencil)", opacity: 0 }} />
                    </div>
                </PosterStatic>
                {/* the layer the list's pointed row is: a path along itself, any other round its frame */}
                <svg viewBox={BOX} className="bz-abs overflow-visible pointer-events-none" style={{ left: LX, top: LY, width: LS, height: LS }} strokeWidth={1.5 * UNIT} strokeLinejoin="round" {...outlines}>
                    {shapes.map((s, j) => <g key={j} data-hover={j} style={{ opacity: 0 }}>{s.kind === "Path" ? shape(s) : frame(s)}</g>)}
                </svg>
                <Selection data="logo" x={LX} y={LY} w={LS} h={LS} />
                <DimPill data="logo" x={LX + LS / 2} y={LY + LS + 10}>{`${L.s} × ${L.s}`}</DimPill>
            </Canvas>
            {/* the picture: its cards, and Vectorize first among what it can gain. (Cut off at the panel's edge: a card
                that goes is thrown off to the left.) */}
            <div data-insp="picture" className="bz-abs inset-0" style={{ clipPath: "inset(52px 0 0 998px)" }}>
                <Card top={66} icon={SquareGlyph} title={u("Frame")} summary={said(L.s, L.x, L.y)} data="pic-stays" />
                <Card top={114} glyph="corners" title={u("Corners")} summary="0" data="pic-goes" />
                <Card top={162} glyph="opacity" title={u("Opacity")} summary="100%" data="pic-stays" />
                <Card top={210} glyph="picture" title={u("Fill")} summary={u("Picture")} data="pic-goes" />
                <Card top={258} glyph="picture" title={u("Photo")} summary={u("Original")} data="pic-goes" />
                <div data-chips="picture" className="bz-abs flex flex-wrap gap-1.5" style={{ left: 1014, top: 312, width: 248 }}>
                    <Chip data="vectorize">{u("Vectorize")}</Chip><Chip>{u("Border")}</Chip><Chip>{u("Shadow")}</Chip><Chip>{u("Blur")}</Chip><Chip>3D</Chip><Chip>{u("Export")}</Chip><Chip>{u("Repeat")}</Chip>
                </div>
            </div>
            {/* the group it becomes: the Vector card after its frame, open as its chip leaves it, and what else it has */}
            <div data-insp="group" style={{ opacity: 0, visibility: "hidden" }}>
                <Card top={66} icon={SquareGlyph} title={u("Frame")} summary={<span data-frame>{said(L.s, L.x, L.y)}</span>} />
                <Card top={VTOP} icon={VectorGlyph} title={u("Vector")} lifted data="vector"
                    summary={<span className="inline-flex items-center align-top h-5">{n("shapes", LOGO.length)}<svg viewBox="0 0 20 20" width="20" height="20" className="ml-2 -mr-0.5 flex-none" style={{ color: "var(--ink-3)" }} aria-hidden="true"><path d="M6.9 6.9l6.2 6.2M13.1 6.9l-6.2 6.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span>}>
                    <div data-vbody className="px-3 pt-[7px] pb-3 flex flex-col gap-2">
                        <div className="flex gap-1">{[SUN, "#FFFFFF", INK].map((c) => <i key={c} className="block w-[15px] h-[15px] rounded-[4.5px]" style={{ background: c, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.15)" }} />)}</div>
                        <Seg options={[u("Auto"), "2", "4", "8", "16", "32"]} on={0} />
                        <Seg options={[u("Exact"), u("Balanced"), u("Smooth")]} on={1} />
                        <div className="flex items-center gap-2">
                            <span className="bz-well flex-1 flex items-center h-7 rounded-[7px] text-[12px]">
                                <i className="not-italic flex-none text-[11px] font-medium ml-2 mr-1.5" style={{ color: "var(--ink-3)" }}>{u("Detail")}</i><b className="flex-1 font-normal bz-num">50</b><i className="not-italic text-[11px] pr-[7px]" style={{ color: "var(--ink-3)" }}>%</i>
                            </span>
                            <span className="grid place-items-center w-7 h-7 flex-none" style={{ color: "var(--ink-2)" }}><svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M7 1.6a5.4 5.4 0 0 1 0 10.8z" fill="currentColor" /></svg></span>
                        </div>
                    </div>
                </Card>
                {/* Materialize: the dashed outline the card was offered in, which fills in as its room opens */}
                <svg data-dashes className="bz-abs overflow-visible pointer-events-none" width="248" height={VTALL} style={{ left: 1014, top: VTOP, opacity: 0 }} aria-hidden="true"><rect x=".5" y=".5" width="247" height={VTALL - 1} rx="11.5" fill="none" stroke="var(--ink-3)" strokeDasharray="4 3" /></svg>
                <Card top={VTOP + VTALL + 8} glyph="opacity" title={u("Opacity")} summary="100%" data="group-opacity" />
                <div data-chips="group" className="bz-abs flex flex-wrap gap-1.5" style={{ left: 1014, top: VTOP + VTALL + 8 + 40 + 14, width: 248 }}>
                    <Chip>{u("Shadow")}</Chip><Chip>{u("Blur")}</Chip><Chip>3D</Chip><Chip>{u("Export")}</Chip><Chip>{u("Repeat")}</Chip>
                </div>
            </div>
            <Pointer data="vectorize" />
        </>
    );
}

export function playVectorize({ q }) {
    const tl = gsap.timeline(), p = q('[data-pointer="vectorize"]')[0];
    const one = (s) => q(s)[0], at = (el, ax = 0.5, ay = 0.55) => tip(spot(el, ax, ay));
    const insp = Object.fromEntries(["picture", "group"].map((k) => [k, one(`[data-insp="${k}"]`)]));
    const logo = one("[data-logo]"), jpeg = one("[data-jpeg]"), trail = one("[data-trail]"), outlines = one("[data-outlines]"), pencil = one("[data-pencil]");
    const sel = one('[data-sel="logo"]'), dim = one('[data-dim="logo"]'), count = one("[data-count]");
    const row = (id) => one(`[data-row="${id}"]`), rowPic = row("pic"), rowGroup = row("group");
    const kids = LOGO.map((_, j) => row(`shape${j}`)), under = [0, 1, 2].map((j) => row(`under${j}`));

    /* ---- the chip: Vectorize, and its card in the chip's place */
    const chip = one('[data-chip="vectorize"]'), vcard = one('[data-card="vector"]');
    tl.fromTo(p, { opacity: 0, x: 850, y: 640 }, { opacity: 1, ...at(chip), duration: 0.105, ease: "power2.inOut" }, 0.02);
    tl.set(chip, { outlineColor: "rgb(var(--ink-rgb) / 0.3)", color: "var(--ink)" }, 0.112);
    click(tl, p, 0.132);
    // The card comes as the app's cards come and go (Cards.swift: Unfold with Materialize, ThrowOff, all on Theme.unfold):
    // what the picture alone had is thrown off the panel to the left, Opacity makes room, and the Vector card fills in
    // from the dashes it was offered in, its room opening from the top.
    const stays = q('[data-card="pic-stays"]'), goes = q('[data-card="pic-goes"]'), dashes = one("[data-dashes]"), vbody = one("[data-vbody]");
    tl.set(insp.group, { autoAlpha: 1 }, 0.15).set([...stays, one('[data-chips="picture"]')], { autoAlpha: 0 }, 0.15);
    tl.to(goes, { x: -320, rotation: -5, opacity: 0, transformOrigin: "100% 50%", duration: 0.075, ease: THEME.unfold }, 0.15);
    tl.set(insp.picture, { autoAlpha: 0 }, 0.23);
    tl.fromTo(one('[data-card="group-opacity"]'), { y: 162 - (VTOP + VTALL + 8) }, { y: 0, duration: 0.075, ease: THEME.unfold, immediateRender: false }, 0.15);
    const room = { open: 0 };
    tl.fromTo(room, { open: 0 }, { open: 1, duration: 0.075, ease: THEME.unfold, immediateRender: false, onUpdate: () => { vcard.style.clipPath = room.open >= 0.999 ? "" : `inset(-40px -40px ${(VTALL * (1 - room.open)).toFixed(1)}px -40px)`; } }, 0.15);
    tl.fromTo([vcard, dashes], { scale: 0.95, transformOrigin: "50% 0%" }, { scale: 1, duration: 0.075, ease: THEME.unfold, immediateRender: false }, 0.15);
    tl.fromTo(vcard, { opacity: 0 }, { opacity: 1, duration: 0.075, ease: THEME.unfold, immediateRender: false }, 0.15);
    tl.fromTo(dashes, { opacity: 1 }, { opacity: 0, duration: 0.075, ease: THEME.unfold, immediateRender: false }, 0.15);
    tl.fromTo(vbody, { opacity: 0 }, { opacity: 1, duration: 0.04, ease: "power1.out", immediateRender: false }, 0.165);
    tl.fromTo(one('[data-chips="group"]'), { y: 312 - (VTOP + VTALL + 8 + 40 + 14), opacity: 0.3 }, { y: 0, opacity: 1, duration: 0.075, ease: THEME.unfold, immediateRender: false }, 0.15);
    // the layer is a group from that moment, and the artboard has a layer more for each of its shapes
    tl.set(rowPic, { opacity: 0 }, 0.15).set(rowGroup, { opacity: 1 }, 0.15);
    const had = { v: 7 };
    tl.to(had, { v: 7 + LOGO.length, duration: 0.07, ease: "power1.out", snap: { v: 1 }, onUpdate: () => { count.textContent = had.v; } }, 0.16);

    /* ---- the pencil's pass: x = w(−0.04 + 1.38e), e easing in and out; the picture right of it, its shapes left */
    const W = LS, pass = { t: 0 };
    const draw = () => {
        const e = 0.5 - 0.5 * Math.cos(Math.PI * pass.t), x = W * (-0.04 + (1.08 + REACH) * e), on = pass.t > 0 && pass.t < 1;
        jpeg.style.clipPath = `inset(0 0 0 ${Math.min(W, Math.max(0, x)).toFixed(1)}px)`;
        pencil.style.transform = `translateX(${x.toFixed(1)}px)`;
        pencil.style.opacity = on && x >= 0 && x <= W ? 1 : 0;
        trail.style.transform = `translateX(${(x - W * REACH).toFixed(1)}px)`;
        outlines.style.transform = `translateX(${(W * REACH - x).toFixed(1)}px)`;
        trail.style.opacity = on ? 1 : 0;
    };
    tl.to(p, { x: LX - 46, y: LY - 34, duration: 0.09, ease: "power2.inOut" }, 0.17);
    tl.to(pass, { t: 1, duration: 0.25, ease: "none", onUpdate: draw }, 0.19);
    tl.set(jpeg, { autoAlpha: 0 }, 0.441);

    /* ---- in the list: the group opened, a layer for each shape */
    const chevron = rowGroup.querySelector("svg");
    // (the pencil is through by 0.36; what is left of its pass are the outlines behind it)
    glide(tl, p, spot(chevron.parentElement), 0.4, 0.065);
    click(tl, p, 0.468);
    tl.to(chevron, { rotation: 0, duration: 0.04, ease: THEME.unfold }, 0.48);
    tl.to(under, { y: LOGO.length * 28, duration: 0.07, ease: THEME.unfold }, 0.48);
    kids.forEach((k, j) => tl.fromTo(k, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.035, ease: "power2.out", immediateRender: false }, 0.482 + j * 0.005));

    /* ---- down the rows: each lights its shape on the canvas; the last is the white box, and its eye hides it */
    const box = kids[kids.length - 1], hovers = kids.map((_, j) => one(`[data-hover="${j}"]`)), tails = kids.map((k) => k.querySelector("[data-tail]"));
    const lock = box.querySelector('[data-icon="lock"]'), eye = box.querySelector('[data-icon="eye"]');
    const gone = { v: 0 };
    const feel = () => {
        // which row the pointer's tip is on, once the rows are there; the list's rows start 90 down the window
        const x = gsap.getProperty(p, "x") + 2.5, y = gsap.getProperty(p, "y") + 2.2, hid = gone.v > 0.5;
        const on = x >= 64 && x <= 284 ? Math.floor((y - 90) / 28) - 4 : -1;
        kids.forEach((k, j) => {
            const lit = j === on, last = k === box;
            k.style.backgroundColor = lit ? "rgb(var(--ink-rgb) / 0.05)" : "transparent";
            tails[j].style.opacity = lit || (last && hid) ? 1 : 0;
            hovers[j].style.opacity = lit && !(last && hid) ? 1 : 0;
        });
        lock.style.opacity = on === kids.length - 1 ? 1 : 0;
        eye.style.color = on === kids.length - 1 && x >= 258 ? "var(--ink)" : hid ? "var(--ink-2)" : "";
    };
    const eyeAt = spot(eye);
    tl.to(p, { x: eyeAt[0] - 2.5, duration: 0.115, ease: "power2.inOut" }, 0.555);
    tl.to(p, { y: eyeAt[1] - 2.2, duration: 0.115, ease: "sine.inOut", onUpdate: feel }, 0.555);
    click(tl, p, 0.678);
    tl.to(gone, { v: 1, duration: 0.002, ease: "none", onUpdate: feel }, 0.692);
    tl.set(one('[data-shapes] [data-shape="0"]'), { opacity: 0 }, 0.693);
    tl.set(box.querySelector("[data-slash]"), { opacity: 1 }, 0.693).set(box.querySelector("[data-name]"), { color: "var(--ink-3)" }, 0.693);

    /* ---- it is shapes: dragged large by its corner, every edge stays an edge */
    const said = one("[data-frame]"), size = { s: L.s }, bandX = q("[data-band-x] > *"), bandY = one("[data-band-y] > rect");
    const grow = () => {
        const s = size.s, x = L.x + L.s - s, y = L.y + L.s - s, w = s * Z, left = AX + x * Z, top = AY + y * Z;
        Object.assign(logo.style, { left: `${x * Z}px`, top: `${y * Z}px`, width: `${w}px`, height: `${w}px` });
        Object.assign(sel.style, { left: `${left}px`, top: `${top}px`, width: `${w}px`, height: `${w}px` });
        dim.style.left = `${left + w / 2}px`;
        dim.textContent = `${Math.round(s)} × ${Math.round(s)}`;
        said.textContent = `${Math.round(s)} × ${Math.round(s)} · ${Math.round(x)}, ${Math.round(y)}`;
        // the rulers' bands follow what is selected
        bandX[0].setAttribute("x", left - 292); bandX[0].setAttribute("width", w);
        bandX[1].setAttribute("x1", left - 292); bandX[1].setAttribute("x2", left - 292);
        bandY.setAttribute("y", top - 52); bandY.setAttribute("height", w);
    };
    gsap.set(dim, { opacity: 0 });
    tl.to(p, { x: LX - 2.5, duration: 0.065, ease: "power3.inOut" }, 0.722);
    tl.to(p, { y: LY - 2.2, duration: 0.065, ease: "power2.inOut", onUpdate: feel }, 0.722);
    tl.to(p, { scale: 0.86, duration: 0.012 }, 0.79);
    tl.to(dim, { opacity: 1, duration: 0.02 }, 0.8);
    tl.to(size, { s: BIG, duration: 0.125, ease: "power2.inOut", onUpdate: grow }, 0.8);
    tl.to(p, { x: LX - (BIG - L.s) * Z - 2.5, y: LY - (BIG - L.s) * Z - 2.2, duration: 0.125, ease: "power2.inOut" }, 0.8);
    tl.to(p, { scale: 1, duration: 0.02 }, 0.93);
    tl.to(dim, { opacity: 0, duration: 0.025 }, 0.94);
    tl.to(p, { x: "-=30", y: "-=22", duration: 0.04, ease: "power1.out" }, 0.95);
    return tl;
}
