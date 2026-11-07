/*
 * The docs' home: what they are, the search, the app's window with its parts named where they are
 * (each a way into the page about it), and every page by section. The window lies on the desk and
 * comes up square as it is scrolled to, and leans a little towards the pointer; its parts breathe
 * until one is pointed at, then a card springs open beside it.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLang } from "@/i18n";
import Marked from "@/site/Marked";
import { ISSUES } from "@/words";
import { D } from "@/docs/words";
import { G } from "@/docs/Glyphs";
import { GLYPH, SECTIONS, docPath, metaOf, preload } from "@/docs/index";
import { SearchButton, Toast, stillness, useSearchKey } from "@/docs/Chrome";
import Search from "@/docs/Search";
import { useRead } from "@/docs/read";

/* Where each named part is in the capture of the window (per cent of its width and height). */
const SPOTS = [
    ["tabs", 20, 3.3], ["zoom", 56, 3.3], ["versions", 60.7, 3.3], ["share", 66.2, 3.3], ["modes", 81.2, 3.3], ["export", 95.6, 3.3],
    ["tools", 2.2, 31], ["layers", 12.4, 39], ["rulers", 52, 7.6], ["canvas", 31.5, 52], ["selection", 58.3, 30],
    ["cards", 89, 17], ["photo", 89, 42], ["add", 88, 89.4], ["resources", 2.2, 91.2],
];

export default function Docs() {
    const lang = useLang(), w = D[lang.code];
    const [searching, setSearching] = useState(false);
    const openSearch = useCallback(() => setSearching(true), []);
    useSearchKey(openSearch);
    const total = SECTIONS.reduce((n, s) => n + s.pages.length, 0);
    return (
        <div className="docs docs-index">
            <section className="page docs-hero">
                <div className="docs-hero-words">
                    <p className="docs-crumbs" data-reveal="soft"><G name="book" size={15} />{w.title}<span aria-hidden="true">·</span>{w.pages.replace("{n}", total)}</p>
                    <h1 className="title title-big" data-reveal=""><Marked first={w.h[0]} second={w.h[1]} /></h1>
                    <p className="lede mt-[26px] max-w-[600px]" data-reveal="">{w.sub}</p>
                    <div className="mt-9 max-w-[560px]" data-reveal="soft"><SearchButton onOpen={openSearch} big /></div>
                </div>
                <ToolKeys />
            </section>

            <Tour />

            {SECTIONS.map((s, k) => (
                <section key={s.key} id={s.key} className="page docs-sec">
                    <div className="docs-sec-head">
                        <p className="docs-sec-n bz-num" data-reveal="soft">{String(k + 1).padStart(2, "0")}</p>
                        <h2 className="title docs-sec-h" data-reveal="">{w.sections[s.key][0]}</h2>
                        <p className="docs-sec-sub" data-reveal="soft">{w.sections[s.key][1]}</p>
                    </div>
                    <ul className="docs-cards">
                        {s.pages.map((p, i) => <PageCard key={p} slug={p} first={k === 0 && i === 0} />)}
                    </ul>
                </section>
            ))}

            <section className="page docs-ask docs-ask-big" data-reveal="soft">
                <p><strong>{w.ask_h}</strong> {w.ask_p}</p>
                <a className="more" href={ISSUES} target="_blank" rel="noopener">{w.ask_link}<span className="go" aria-hidden="true">→</span></a>
            </section>
            <Search open={searching} onClose={() => setSearching(false)} />
            <Toast />
        </div>
    );
}

function PageCard({ slug, first }) {
    const lang = useLang(), w = D[lang.code], m = metaOf(slug, lang.code), read = useRead().has(slug);
    return (
        <li data-reveal="soft">
            <Link to={docPath(slug)} className={`docs-card ${first ? "docs-card-first" : ""}`} onPointerEnter={() => preload(slug, lang.code)} onFocus={() => preload(slug, lang.code)}>
                <span className="docs-card-g"><G name={GLYPH[slug]} size={first ? 24 : 20} className="dg-draw" /></span>
                {first && <span className="chip docs-card-chip">{w.start}</span>}
                <span className="docs-card-t">{m.title}</span>
                <span className="docs-card-l">{m.lede}</span>
                <span className="docs-card-f">
                    <span className="docs-card-time">{read && <span className="docs-card-done"><G name="check" size={13} className="dg-draw dg-now" />{w.done}</span>}{w.read.replace("{n}", Math.max(1, Math.round(m.words / 230)))}</span>
                    <span className="docs-card-go" aria-hidden="true">→</span>
                </span>
            </Link>
        </li>
    );
}

/* The tools as the rail has them, each its key, and the page about it. */
const TOOLS = [["select", "V", "canvas#selecting"], ["artboard", "A", "canvas#artboard-tool"], ["rect", "R", "shapes#drawing"], ["ellipse", "E", "shapes#drawing"], ["line", "L", "shapes#drawing"],
    ["pen", "P", "shapes#pen"], ["knife", "K", "shapes#knife"], ["text", "T", "text#text-tool"], ["note", "N", "notes#writing"]];

/**
 * Nine keys, one per tool. They type themselves out once as the page comes up, then answer the
 * pointer and the keyboard: press V here, as in Bezzle, and the Select key goes down and says what
 * it is. The words under the keys slide to the tool pressed.
 */
function ToolKeys() {
    const lang = useLang(), w = D[lang.code];
    const [on, setOn] = useState(0), [down, setDown] = useState(null);
    const pressed = useRef(false);
    const press = (i) => { pressed.current = true; setOn(i); setDown(i); setTimeout(() => setDown((d) => (d === i ? null : d)), 160); };
    // once, as the page comes up: the keys typed out one after another
    useEffect(() => {
        if (stillness()) return;
        const ts = TOOLS.map((_, i) => setTimeout(() => { if (pressed.current) return; setOn(i); setDown(i); setTimeout(() => setDown((d) => (d === i ? null : d)), 130); }, 900 + i * 170));
        ts.push(setTimeout(() => { if (!pressed.current) setOn(0); }, 900 + TOOLS.length * 170 + 200));
        return () => ts.forEach(clearTimeout);
    }, []);
    // the keyboard, as in Bezzle
    useEffect(() => {
        const key = (e) => {
            if (e.metaKey || e.ctrlKey || e.altKey || /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName) || document.documentElement.classList.contains("dsearch-open")) return;
            const i = TOOLS.findIndex(([, k]) => k === e.key.toUpperCase());
            if (i >= 0) press(i);
        };
        addEventListener("keydown", key);
        return () => removeEventListener("keydown", key);
    }, []);
    const [id, k, page] = TOOLS[on];
    return (
        <div className="tkeys" data-reveal="">
            <p className="tkeys-h">{w.keys_h}</p>
            <div className="tkeys-grid" role="group" aria-label={w.keys_h}>
                {TOOLS.map(([tool, key], i) => (
                    <button key={tool} type="button" className={`tkey ${i === on ? "is-on" : ""} ${i === down ? "is-down" : ""}`} aria-label={`${w.tools[tool]} ${key}`} aria-pressed={i === on}
                        onPointerDown={() => setDown(i)} onPointerUp={() => setDown(null)} onPointerLeave={() => setDown((d) => (d === i ? null : d))}
                        onClick={() => { pressed.current = true; setOn(i); }} onPointerEnter={(e) => { if (e.pointerType === "mouse") { pressed.current = true; setOn(i); } }}>
                        <G name={tool} size={15} className="tkey-g" />
                        <span className="tkey-k">{key}</span>
                    </button>
                ))}
            </div>
            <div className="tkeys-say" aria-live="polite">
                <span key={id} className="tkeys-name"><G name={id} size={16} className="text-pencil" />{w.tools[id]}<kbd className="key key-s">{k}</kbd></span>
                <Link to={docPath(page.split("#")[0]) + "#" + page.split("#")[1]} className="more tkeys-more" onPointerEnter={() => preload(page.split("#")[0], lang.code)}>{w.keys_more}<span className="go" aria-hidden="true">→</span></Link>
            </div>
            <p className="tkeys-sub">{w.keys_sub}</p>
        </div>
    );
}

/** The window, its parts named where they are. */
function Tour() {
    const lang = useLang(), w = D[lang.code];
    const desk = useRef(null), win = useRef(null);
    const [on, setOn] = useState(null);
    const spots = w.spots;
    useEffect(() => {
        if (stillness()) return;
        gsap.registerPlugin(ScrollTrigger);
        const tw = gsap.fromTo(win.current, { rotateX: 16, y: 40, scale: 0.94 }, { rotateX: 0, y: 0, scale: 1, ease: "none",
            scrollTrigger: { trigger: desk.current, start: "clamp(top bottom)", end: "clamp(top 30%)", scrub: 0.6 } });
        // and it leans towards the pointer, a little
        const lean = desk.current.querySelector(".tour-lean");
        const rx = gsap.quickTo(lean, "rotateX", { duration: 0.9, ease: "power3.out" }), ry = gsap.quickTo(lean, "rotateY", { duration: 0.9, ease: "power3.out" });
        const move = (e) => {
            if (e.pointerType !== "mouse") return;
            const r = desk.current.getBoundingClientRect();
            ry(((e.clientX - r.left) / r.width - 0.5) * 3.2);
            rx(-((e.clientY - r.top) / r.height - 0.5) * 2.4);
        };
        const rest = () => { rx(0); ry(0); };
        desk.current.addEventListener("pointermove", move);
        desk.current.addEventListener("pointerleave", rest);
        const d = desk.current;
        return () => { tw.scrollTrigger?.kill(); tw.kill(); d.removeEventListener("pointermove", move); d.removeEventListener("pointerleave", rest); };
    }, []);
    useEffect(() => {
        if (!on) return;
        const off = (e) => { if (!e.target.closest?.(".tour-spot")) setOn(null); };
        const key = (e) => e.key === "Escape" && setOn(null);
        addEventListener("pointerdown", off);
        addEventListener("keydown", key);
        return () => { removeEventListener("pointerdown", off); removeEventListener("keydown", key); };
    }, [on]);
    return (
        <section className="page docs-tour" aria-labelledby="tour-h">
            <div className="docs-tour-head">
                <h2 id="tour-h" className="docs-tour-h" data-reveal="soft">{w.tour_h}</h2>
                <p className="docs-tour-sub" data-reveal="soft">{w.tour_sub}</p>
            </div>
            <div ref={desk} className="tour-desk">
                <div ref={win} className="tour-win">
                    <div className="tour-lean">
                        <img src={`/img/app/${lang.locale}/hero.webp`} alt={w.tour_alt} width="2560" height="1600" className="tour-img" />
                        {SPOTS.map(([key, x, y], i) => {
                            const s = spots[key];
                            if (!s) return null;
                            const [label, line, to] = s;
                            const side = x > 62 ? "left" : "right", low = y > 70;
                            return (
                                <div key={key} className={`tour-spot ${on === key ? "is-on" : ""} tour-${side} ${low ? "tour-low" : ""}`} style={{ left: `${x}%`, top: `${y}%`, "--i": i }}
                                    onPointerEnter={(e) => e.pointerType === "mouse" && setOn(key)} onPointerLeave={(e) => e.pointerType === "mouse" && setOn((o) => (o === key ? null : o))}>
                                    <button type="button" className="tour-dot" aria-expanded={on === key} aria-label={label}
                                        onClick={() => setOn((o) => (o === key ? null : key))} onFocus={() => setOn(key)}><i><b className="bz-num">{i + 1}</b></i></button>
                                    <div className="tour-card">
                                        <p className="tour-card-t">{label}</p>
                                        <p className="tour-card-l">{line}</p>
                                        <Link to={to} className="more tour-card-a" tabIndex={on === key ? 0 : -1} onPointerEnter={() => preload(to.match(/\/docs\/([\w-]+)/)?.[1], lang.code)}>
                                            {metaOf(to.match(/\/docs\/([\w-]+)/)?.[1], lang.code)?.nav || w.keys_more}<span className="go" aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* on a phone, the parts as a list under the window, by the numbers on it */}
            <ol className="tour-list">
                {SPOTS.map(([key], i) => {
                    const s = spots[key];
                    if (!s) return null;
                    const [label, line, to] = s;
                    return (
                        <li key={key}>
                            <Link to={to} onPointerEnter={() => preload(to.match(/\/docs\/([\w-]+)/)?.[1], lang.code)}>
                                <span className="tour-list-n bz-num">{i + 1}</span>
                                <span><span className="tour-list-t">{label}</span><span className="tour-list-l">{line}</span></span>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
