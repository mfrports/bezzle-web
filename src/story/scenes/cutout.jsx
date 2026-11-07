/*
 * Remove background: the Adoption Day poster, its Pug layer still the whole photograph. In the Fill
 * card, "Subject alone" (LookCards 193–209): the thumb slides over and fills with pencil wash as the
 * work goes on. On the canvas (CutoutTool 72–197): a pencil line sweeps across the picture, a wash
 * trailing it; once the subject is found the background sinks to the table's colour; then it melts,
 * a radial erase from the subject's middle, and the pug is left on the poster, blanket, fur and all.
 */
import { gsap } from "gsap";
import { Canvas, Card, LayersPanel, Pointer, Label } from "@/app/Kit";
import { cubicOut } from "@/story/engine";

const Z = 0.42, AX = 418, AY = 138, AW = 454, AH = 567;
const PUG = [-210 * Z, 440 * Z, 1500 * Z, 1000 * Z];

/** The poster as the design has it, at 42 %. */
export function PosterStatic({ children }) {
    const f = (x) => x * Z;
    return (
        <div className="bz-abs overflow-hidden" style={{ left: AX, top: AY, width: AW, height: AH, background: "#3559C7" }}>
            <div className="bz-abs bz-futura text-center leading-[0.92]" style={{ left: 0, top: f(150), width: AW, height: f(559), fontSize: f(430), color: "#F6F1E6" }}>GOOD</div>
            <div className="bz-abs bz-futura text-center leading-[0.92]" style={{ left: 0, top: f(520), width: AW, height: f(559), fontSize: f(430), color: "#F6F1E6" }}>BOY</div>
            {children}
            <div className="bz-abs rounded-full" style={{ left: f(72), top: f(66), width: f(300), height: f(76), background: "#1C1B19" }} />
            <div className="bz-abs bz-avenir font-semibold text-center whitespace-nowrap" style={{ left: f(72), top: f(86), width: f(300), fontSize: f(28), lineHeight: `${f(38)}px`, letterSpacing: "0.18em", color: "#F6F1E6" }}>SAT · 10 AM</div>
            <div className="bz-abs bz-avenir font-semibold text-right whitespace-nowrap" style={{ left: f(560), top: f(64), width: f(448), fontSize: f(28), lineHeight: `${f(40)}px`, color: "#F6F1E6" }}>Animal Shelter Zürich<br />Meet Bruno and 23 friends</div>
        </div>
    );
}

export function CutoutState({ u }) {
    const pic = { left: PUG[0], top: PUG[1], width: PUG[2], height: PUG[3] };
    const mask = "url(/img/parts/pug-cutout.webp)";
    return (
        <>
            <LayersPanel u={u} crumb="Poster" count={6} rows={["Where", "Date", "Date pill", "Pug", "Boy", "Good"].map((n) => ({ name: n, kind: /Date pill|Pug/.test(n) ? "rect" : "text", on: n === "Pug" }))} />
            <Canvas rulers={{ origin: [AX, AY], zoom: Z, band: [330, 960], bandY: [322, 742] }}>
                <Label x={AX} y={AY}>Poster</Label>
                <PosterStatic>
                    <img data-src="/img/parts/pug-cutout.webp" alt="" className="bz-abs max-w-none" style={{ ...pic, filter: "drop-shadow(0 12px 14px rgb(20 22 70 / 0.4))" }} />
                    <img data-photo data-src="/img/parts/pug.webp" alt="" className="bz-abs max-w-none" style={pic} />
                    {/* the background sinking, everywhere but the subject */}
                    {/* (its mask, the pug's cutout, is put on once the chapter is near: Story.jsx › wake) */}
                    <div data-sink data-mask={`${mask}, linear-gradient(#000, #000)`} className="bz-abs" style={{ ...pic, background: "linear-gradient(rgb(var(--cpencil-rgb) / 0.07), rgb(var(--cpencil-rgb) / 0.07)), rgb(229 225 217 / 0.62)", opacity: 0,
                        maskSize: "100% 100%", WebkitMaskSize: "100% 100%", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />
                    <div data-sweep className="bz-abs" style={{ top: PUG[1], height: PUG[3], width: 2, left: 0, opacity: 0 }}>
                        <div className="bz-abs inset-y-0 right-0 w-[136px]" style={{ background: "linear-gradient(to right, rgb(var(--cpencil-rgb) / 0), rgb(var(--cpencil-rgb) / 0.2))" }} />
                        <div className="bz-abs inset-y-0 right-0 w-[1.5px]" style={{ background: "var(--cpencil)" }} />
                    </div>
                </PosterStatic>
                <div className="bz-abs pointer-events-none" style={{ left: 330, top: 322, width: 630, height: 420, boxShadow: "inset 0 0 0 1px var(--cpencil)" }}>
                    {[[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [0, 0.5]].map(([a, b], j) => <i key={j} className="bz-abs block w-2 h-2 -ml-1 -mt-1 bg-white" style={{ left: `${a * 100}%`, top: `${b * 100}%`, boxShadow: "inset 0 0 0 1px var(--cpencil)" }} />)}
                </div>
            </Canvas>
            <Card top={66} glyph="frame" title={u("Frame")} summary="1500 × 1000 · −210, 440" />
            <Card top={114} glyph="corners" title={u("Corners")} summary="0" />
            <Card top={162} glyph="opacity" title={u("Opacity")} summary="100%" />
            <Card top={210} glyph="picture" title={u("Fill")} summary={u("Picture")} lifted>
                <div className="px-3 pb-3">
                    <div className="relative bz-well flex h-7 rounded-[8px] p-0.5 text-[12px]">
                        <div data-cthumb className="bz-abs bz-card rounded-[6px] overflow-hidden" style={{ left: 2, top: 2, width: 110, height: 24 }}>
                            <i data-cfill className="bz-abs inset-y-0 left-0 block" style={{ width: "0%", background: "var(--pencil-wash)", boxShadow: "1.5px 0 0 rgb(var(--pencil-rgb) / 0.5)" }} />
                        </div>
                        <span className="relative flex-1 grid place-items-center">{u("Whole picture")}</span>
                        <span data-subject className="relative flex-1 grid place-items-center" style={{ color: "var(--ink-2)" }}>{u("Subject alone")}</span>
                    </div>
                </div>
            </Card>
            <Card top={302} glyph="picture" title={u("Photo")} summary={u("Original")} />
            <Card top={350} glyph="opacity" title={u("Shadow")} summary="Y 30 · B 60" />
            <Pointer data="cutout" />
        </>
    );
}

export function playCutout({ q }) {
    const tl = gsap.timeline(), p = q('[data-pointer="cutout"]')[0];
    const thumb = q("[data-cthumb]")[0], fill = q("[data-cfill]")[0], subject = q("[data-subject]")[0];
    const photo = q("[data-photo]")[0], sink = q("[data-sink]")[0], sweep = q("[data-sweep]")[0];
    tl.fromTo(p, { opacity: 0, x: 900, y: 560 }, { opacity: 1, x: 1208, y: 262, duration: 0.12, ease: "power2.inOut" }, 0.02);
    tl.to(p, { scale: 0.82, duration: 0.015 }, 0.14).to(p, { scale: 1, duration: 0.025 }, 0.155);
    tl.to(thumb, { left: 124, duration: 0.06, ease: "power3.out" }, 0.15);
    tl.set(subject, { color: "var(--pencil)" }, 0.16);
    tl.to(p, { x: 1180, y: 330, opacity: 0, duration: 0.06 }, 0.2);
    // the work: steps of the matte's progress in the thumb, the sweep crossing the picture
    [[0.08, 0.17], [0.3, 0.3], [0.45, 0.42], [0.55, 0.5], [0.65, 0.56], [0.85, 0.64], [1, 0.7]].forEach(([v, at]) => tl.to(fill, { width: `${v * 100}%`, duration: 0.04, ease: "power2.out" }, at));
    tl.set(sweep, { opacity: 1 }, 0.17);
    for (let i = 0; i < 2; i++) tl.fromTo(sweep, { x: PUG[0] - PUG[2] * 0.15 }, { x: PUG[0] + PUG[2] * 1.15, duration: 0.24, ease: "sine.inOut", immediateRender: false }, 0.17 + i * 0.26);
    tl.to(sweep, { opacity: 0, duration: 0.03 }, 0.66);
    tl.to(sink, { opacity: 1, duration: 0.08, ease: "power1.out" }, 0.32);
    // done: the background melts away from the subject's middle
    const r = { v: 0 };
    tl.to(r, { v: 1, duration: 0.16, ease: cubicOut, onUpdate: () => {
        const R = r.v * 560, m = `radial-gradient(circle at 50% 48%, transparent ${R}px, #000 ${R + 90}px)`;
        photo.style.maskImage = m; photo.style.webkitMaskImage = m; sink.style.opacity = String(1 - r.v);
    } }, 0.7);
    tl.set(subject, { color: "var(--ink)", fontWeight: 600 }, 0.86);
    tl.to(fill, { opacity: 0, duration: 0.04 }, 0.86);
    return tl;
}
