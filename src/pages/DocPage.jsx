/*
 * One page of the docs: the pages down the left, the page in the middle, and on the right what is
 * on it, a pencil line beside the headings filling as it is read and a card resting on the one in
 * front of you. On a narrower screen both fold into a bar under the header, its pencil line the
 * reading's. Numbered steps fill their line as they are read; the app's window in a figure comes
 * up square to the page as it is scrolled to.
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLang, useBarePath } from "@/i18n";
import { ISSUES } from "@/words";
import { glideTo, jumpTo } from "@/lib/smooth";
import { D } from "@/docs/words";
import { G } from "@/docs/Glyphs";
import { Blocks } from "@/docs/Body";
import { DOCS_HOME, GLYPH, PAGES, docOf, docPath, metaOf, preload, sectionOf, useDoc } from "@/docs/index";
import { OsSwitch, SPRING, TIME, SearchButton, SideNav, Toast, stillness, useSearchKey } from "@/docs/Chrome";
import Search from "@/docs/Search";
import { markRead } from "@/docs/read";
import { RELEASE_WIN } from "@/lib/release";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
const OFFSET = 96;

/** Whether a page says anything differently on a Mac and on a PC: keys, or words for one of them. */
const forOs = (tree) => /"t":"(kbd|os)"|"kind":"windows"/.test(JSON.stringify(tree ?? []));

export default function DocPage() {
    const lang = useLang(), w = D[lang.code], here = useBarePath(), { hash } = useLocation();
    const slug = docOf(here);
    const meta = metaOf(slug, lang.code);
    const got = useDoc(slug, lang.code);
    const doc = got?.doc;
    const toc = (doc?.toc ?? []).filter((h) => h.l <= 3);
    const i = PAGES.indexOf(slug), prev = PAGES[i - 1], next = PAGES[i + 1];
    const sec = sectionOf(slug);
    const [searching, setSearching] = useState(false);
    const [sheet, setSheet] = useState(null);
    const openSearch = useCallback(() => { setSheet(null); setSearching(true); }, []);
    useSearchKey(openSearch);
    const article = useRef(null);
    const active = useReading(article, toc, slug, !!doc);
    // once there is Bezzle for Windows, Mac | Windows on a page that differs between them
    const twoWays = useMemo(() => !!RELEASE_WIN && forOs(doc?.tree), [doc]);

    // arriving at a heading by its link, once the page's words are here
    useEffect(() => {
        if (!doc || !hash) return;
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) requestAnimationFrame(() => jumpTo(el.getBoundingClientRect().top + scrollY - OFFSET));
    }, [doc, slug]);
    // the next pages, fetched once this one stands
    useEffect(() => {
        if (!doc) return;
        const t = setTimeout(() => { preload(next, lang.code); preload(prev, lang.code); }, 900);
        return () => clearTimeout(t);
    }, [doc, slug, lang.code]);
    useEffect(() => setSheet(null), [slug]);
    useMotion(article, slug, !!doc);

    return (
        <div className="docs">
            <DocsBar slug={slug} toc={toc} active={active} sheet={sheet} setSheet={setSheet} openSearch={openSearch} />
            <div className="page docs-grid">
                <aside className="docs-side" data-lenis-prevent="">
                    <div className="docs-side-in">
                        <Link to={DOCS_HOME} className="docs-home-a"><G name="book" size={16} />{w.title}</Link>
                        <SearchButton onOpen={openSearch} />
                        <SideNav current={slug} />
                    </div>
                </aside>

                <article ref={article} key={slug + lang.code} className="docs-main">
                    <header className="docs-head">
                        <p className="docs-crumbs" data-reveal="soft">
                            <Link to={DOCS_HOME}>{w.title}</Link><span aria-hidden="true">›</span><span>{w.sections[sec.key][0]}</span>
                        </p>
                        <div className="docs-mark" data-reveal="soft" aria-hidden="true"><G name={GLYPH[slug]} size={26} className="dg-draw dg-in" /></div>
                        <h1 className="docs-h1" data-reveal="" lang={meta.lang !== lang.code ? meta.lang : undefined}>{meta.title}</h1>
                        {meta.lede && <p className="lede docs-lede" data-reveal="" lang={meta.lang !== lang.code ? meta.lang : undefined}>{meta.lede}</p>}
                        <p className="docs-meta" data-reveal="soft">
                            <span>{w.read.replace("{n}", Math.max(1, Math.round(meta.words / 230)))}</span>
                            {toc.filter((h) => h.l === 2).length > 1 && <><i aria-hidden="true" /><span>{w.parts.replace("{n}", toc.filter((h) => h.l === 2).length)}</span></>}
                            {twoWays && <OsSwitch className="docs-os" />}
                        </p>
                        {got && got.lang !== lang.code && <p className="docs-only-en" data-reveal="soft"><G name="globe" size={15} />{w.only_en}</p>}
                    </header>

                    <div className="prose-docs" lang={got?.lang}>
                        {doc ? <Blocks tree={doc.tree} /> : <Pending />}
                    </div>

                    <nav className="docs-turn" aria-label={`${w.prev} / ${w.next}`}>
                        {prev ? <Turn slug={prev} dir="prev" /> : <span />}
                        {next ? <Turn slug={next} dir="next" /> : <span />}
                    </nav>
                    <div className="docs-ask">
                        <p><strong>{w.ask_h}</strong> {w.ask_p}</p>
                        <a className="more" href={ISSUES} target="_blank" rel="noopener">{w.ask_link}<span className="go" aria-hidden="true">→</span></a>
                    </div>
                </article>

                <aside className="docs-toc" data-lenis-prevent="">
                    <Toc toc={toc} active={active} title={w.toc} />
                </aside>
            </div>
            <Search open={searching} onClose={() => setSearching(false)} />
            <Toast />
        </div>
    );
}

/** While a page's words are on their way (a moment, after a click inside the site). */
function Pending() {
    return <div className="docs-pending" aria-hidden="true">{[92, 100, 84, 0, 96, 88, 72].map((x, i) => (x ? <i key={i} style={{ width: `${x}%` }} /> : <b key={i} />))}</div>;
}

/** The way on: the page before and the one after. */
function Turn({ slug, dir }) {
    const lang = useLang(), w = D[lang.code], m = metaOf(slug, lang.code), sec = sectionOf(slug);
    return (
        <Link to={docPath(slug)} className={`docs-turn-a docs-turn-${dir}`} onPointerEnter={() => preload(slug, lang.code)}>
            <span className="docs-turn-k">{dir === "prev" ? <><span className="go" aria-hidden="true">←</span>{w.prev}</> : <>{w.next}<span className="go" aria-hidden="true">→</span></>}</span>
            <span className="docs-turn-t">{m.nav}</span>
            <span className="docs-turn-s">{w.sections[sec.key][0]}</span>
        </Link>
    );
}

/**
 * What is on the page: its headings, a pencil line beside them filling as the page is read, and a
 * card on the one in front of you. A section's subheadings unfold while you read it and fold away
 * after, so the list stays short however long the page; the card follows its heading as they move.
 */
function Toc({ toc, active, title, onGo }) {
    const w = D[useLang().code];
    const box = useRef(null), card = useRef(null), quick = useRef(null), placed = useRef(false);
    const groups = [];
    for (const h of toc) {
        if (h.l === 2 || !groups.length) groups.push({ h, kids: [] });
        else groups[groups.length - 1].kids.push(h);
    }
    const openGroup = groups.find((g) => g.h.id === active || g.kids.some((k) => k.id === active))?.h.id;
    useIso(() => {
        const el = active && box.current?.querySelector(`[data-id="${active}"]`), c = card.current;
        if (!c) return;
        if (!el) { gsap.to(c, { opacity: 0, duration: 0.2, overwrite: "auto" }); return; }
        if (!placed.current || stillness()) { gsap.set(c, { y: el.offsetTop, height: el.offsetHeight, opacity: 1 }); placed.current = true; return; }
        if (!quick.current) quick.current = { y: gsap.quickTo(c, "y", { duration: TIME * 0.7, ease: "power3.out" }), h: gsap.quickTo(c, "height", { duration: TIME * 0.7, ease: "power3.out" }) };
        gsap.to(c, { opacity: 1, duration: 0.2 });
        // the sections fold and unfold for a moment: the card follows its heading all the while
        let raf = 0;
        const until = performance.now() + 620;
        const follow = () => {
            quick.current.y(el.offsetTop);
            quick.current.h(el.offsetHeight);
            if (performance.now() < until) raf = requestAnimationFrame(follow);
            else {
                // and in a list taller than the screen, the heading stays in sight
                const pane = box.current.closest(".docs-toc, .docs-sheet");
                if (pane && pane.scrollHeight > pane.clientHeight) {
                    const r = el.getBoundingClientRect(), p = pane.getBoundingClientRect();
                    if (r.top < p.top + 40 || r.bottom > p.bottom - 60) pane.scrollTo({ top: pane.scrollTop + r.top - p.top - p.height * 0.35, behavior: "smooth" });
                }
            }
        };
        follow();
        return () => cancelAnimationFrame(raf);
    }, [active, toc]);
    const go = (id) => (e) => {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        history.replaceState(null, "", `#${id}`);
        onGo?.();
        glideTo(el.getBoundingClientRect().top + scrollY - OFFSET + 2);
    };
    if (!toc.length) return null;
    const a = (h) => <a key={h.id} href={`#${h.id}`} data-id={h.id} onClick={go(h.id)} className={`dtoc-a dtoc-${h.l} ${active === h.id ? "is-on" : ""}`}>{h.text}</a>;
    return (
        <nav className="dtoc" aria-label={title}>
            <p className="dtoc-h">{title}</p>
            <div ref={box} className="dtoc-list">
                <i className="dtoc-rail" aria-hidden="true"><i className="dtoc-fill" data-read-fill="" /></i>
                <i ref={card} className="dtoc-card" aria-hidden="true" />
                {groups.map((g) => (
                    <div key={g.h.id} className={`dtoc-g ${g.h.id === openGroup ? "is-open" : ""}`}>
                        {a(g.h)}
                        {g.kids.length > 0 && <div className="dtoc-kids"><div>{g.kids.map(a)}</div></div>}
                    </div>
                ))}
            </div>
            <button type="button" className="dtoc-top" onClick={() => glideTo(0)}><G name="up" size={13} />{w.top}</button>
        </nav>
    );
}

/** On a narrower screen: the pages and what is on this one, folded into a bar under the header. */
function DocsBar({ slug, toc, active, sheet, setSheet, openSearch }) {
    const lang = useLang(), w = D[lang.code], m = metaOf(slug, lang.code);
    const current = toc.find((h) => h.id === active);
    const toggle = (k) => () => setSheet((s) => (s === k ? null : k));
    useEffect(() => {
        if (!sheet) return;
        const key = (e) => e.key === "Escape" && setSheet(null);
        addEventListener("keydown", key);
        return () => removeEventListener("keydown", key);
    }, [sheet]);
    return (
        <div className={`docs-bar ${sheet ? "is-open" : ""}`}>
            <div className="docs-bar-veil" onClick={() => setSheet(null)} aria-hidden="true" />
            <div className="page docs-bar-in">
                <div className="docs-bar-row">
                    <button type="button" className="docs-bar-b docs-bar-pages" onClick={toggle("pages")} aria-expanded={sheet === "pages"}>
                        <G name={GLYPH[slug]} size={15} className="text-pencil" /><span className="truncate">{m.nav}</span><G name="chevron" size={12} className={`docs-bar-chev ${sheet === "pages" ? "rotate-180" : ""}`} />
                    </button>
                    {toc.length > 0 && (
                        <button type="button" className="docs-bar-b docs-bar-toc" onClick={toggle("toc")} aria-expanded={sheet === "toc"}>
                            <span className="truncate">{current?.text ?? w.toc}</span><G name="chevron" size={12} className={`docs-bar-chev ${sheet === "toc" ? "rotate-180" : ""}`} />
                        </button>
                    )}
                    <button type="button" className="docs-bar-b docs-bar-s" onClick={openSearch} aria-label={w.search}><G name="search" size={16} /></button>
                    <i className="docs-bar-line" aria-hidden="true"><i data-read-fill="" /></i>
                </div>
                <div className={`docs-sheet ${sheet === "pages" ? "is-on" : ""}`} data-lenis-prevent="">
                    <SideNav current={slug} compact onGo={() => setSheet(null)} />
                </div>
                <div className={`docs-sheet ${sheet === "toc" ? "is-on" : ""}`} data-lenis-prevent="">
                    <Toc toc={toc} active={active} title={w.toc} onGo={() => setSheet(null)} />
                </div>
            </div>
        </div>
    );
}

/**
 * Where the reading is: the heading last passed (a little below the header), and how far through
 * the page, which fills every pencil line marked data-read-fill. Read on every scroll, written as a
 * transform only.
 */
function useReading(article, toc, slug, ready) {
    const [active, setActive] = useState(toc[0]?.id ?? null);
    useEffect(() => {
        const el = article.current;
        if (!el) return;
        let raf = 0, last = null;
        const fills = () => document.querySelectorAll("[data-read-fill]");
        const read = () => {
            raf = 0;
            const line = OFFSET + Math.min(140, innerHeight * 0.18);
            let on = toc[0]?.id ?? null;
            for (const h of toc) {
                const node = document.getElementById(h.id);
                if (node && node.getBoundingClientRect().top <= line) on = h.id; else if (node) break;
            }
            // at the very end, the last heading
            if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4 && toc.length) on = toc[toc.length - 1].id;
            if (on !== last) { last = on; setActive(on); }
            const r = el.getBoundingClientRect();
            const p = Math.min(1, Math.max(0, (innerHeight * 0.35 - r.top) / Math.max(1, r.height - innerHeight * 0.5)));
            fills().forEach((f) => { f.style.transform = f.parentElement.classList.contains("docs-bar-line") ? `scaleX(${p.toFixed(4)})` : `scaleY(${p.toFixed(4)})`; });
            // read to the end: ticked off in the menu
            if (ready && p > 0.92) markRead(slug);
        };
        const on = () => { if (!raf) raf = requestAnimationFrame(read); };
        read();
        addEventListener("scroll", on, { passive: true });
        addEventListener("resize", on);
        return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
    }, [slug, ready, toc.length]);
    return active;
}

/** Steps fill their line, and figures come up square to the page, both with the scroll. */
function useMotion(article, slug, ready) {
    useEffect(() => {
        const el = article.current;
        if (!el || !ready || stillness()) return;
        gsap.registerPlugin(ScrollTrigger);
        const made = [];
        el.querySelectorAll("[data-steps]").forEach((list) => {
            const fill = list.querySelector(".steps-fill"), steps = [...list.querySelectorAll(".step")];
            made.push(ScrollTrigger.create({
                trigger: list, start: "top 72%", end: "bottom 62%",
                onUpdate: (st) => {
                    fill.style.transform = `scaleY(${st.progress.toFixed(4)})`;
                    const y = innerHeight * 0.72;
                    steps.forEach((s) => s.classList.toggle("is-on", s.getBoundingClientRect().top + 14 < y));
                },
                onLeaveBack: () => steps.forEach((s) => s.classList.remove("is-on")),
            }));
        });
        el.querySelectorAll("[data-shot] .shot-frame").forEach((frame) => {
            made.push(gsap.fromTo(frame, { rotateX: 11, y: 26, scale: 0.97 }, { rotateX: 0, y: 0, scale: 1, ease: "none",
                scrollTrigger: { trigger: frame, start: "clamp(top bottom)", end: "clamp(top 58%)", scrub: 0.5 } }));
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => made.forEach((m) => { m.scrollTrigger?.kill(); m.kill(); });
    }, [slug, ready]);
}
