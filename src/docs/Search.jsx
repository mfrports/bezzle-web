/*
 * Search through the docs, as Spotlight does: a card over the page dimmed behind it, the answers
 * as you type, from every heading and every word of every page in the page's language. The answer
 * chosen sits on a card that springs to the next as the arrows move, as the app's lists do; Return
 * goes there, to the very heading.
 */
import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { localize, useLang } from "@/i18n";
import { glideTo } from "@/lib/smooth";
import { D } from "@/docs/words";
import { G } from "@/docs/Glyphs";
import { GLYPH, PAGES, SECTIONS, docPath, metaOf, preload, searchIndex, sectionOf } from "@/docs/index";
import { SPRING, TIME, stillness } from "@/docs/Chrome";
import { RELEASE_WIN } from "@/lib/release";
import { osNow } from "@/lib/os";
import { WIN } from "@/docs/keys-win";

const fold = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss").replace(/[’']/g, "'");

/**
 * On a PC, a PC's keys find the Mac's they stand for in the words (the pages write the Mac's):
 * Ctrl for ⌘ (and ⌃), Alt for ⌥, Shift for ⇧, Enter for Return, as the keyboard and Bezzle for
 * Windows name them, also in German.
 */
const PC_KEYS = { ctrl: ["⌘", "⌃"], strg: ["⌘", "⌃"], control: ["⌘", "⌃"], alt: ["⌥"], shift: ["⇧"], umschalt: ["⇧"], enter: ["return"], backspace: ["⌫"] };
const PC_MOD = { ctrl: "ctrl", strg: "ctrl", control: "ctrl", alt: "alt", shift: "shift", umschalt: "shift" };
const pc = () => !!RELEASE_WIN && osNow() === "win";

/** A whole PC shortcut asked for ("ctrl shift y", "f7"): the Mac's keys it stands for, as the pages write them (src/docs/keys-win.js). */
function macKeysFor(words) {
    const mods = ["ctrl", "alt", "shift"].filter((m) => words.some((w) => PC_MOD[w] === m));
    const rest = words.filter((w) => !PC_MOD[w]);
    if (rest.length !== 1) return [];
    const pcKeys = [...mods, rest[0]].join("+");
    return Object.entries(WIN).filter(([, v]) => v && v.toLowerCase() === pcKeys).map(([mac]) => fold(mac));
}

/** Each section that has every word asked for, the best first, a few per page. */
function find(index, q, lang) {
    let words = fold(q).split(/[^\p{L}\p{N}⌘⇧⌥⌃]+/u).filter(Boolean);
    if (!words.length) return [];
    // on a PC: a PC's shortcut is looked for as the Mac's keys it stands for; else each word, or the Mac's key it names
    let ways = null;
    if (pc()) {
        const mac = macKeysFor(words);
        if (mac.length) { words = [mac[0]]; ways = { [mac[0]]: mac }; }
        else ways = Object.fromEntries(words.map((w) => [w, [w, ...(PC_KEYS[w] ?? [])]]));
    }
    const hits = [];
    for (const page of index) {
        const pageTitle = fold(metaOf(page.slug, lang).title);
        for (const [id, title, text] of page.s) {
            const t = fold(title), x = fold(text);
            let score = 0, ok = true;
            for (const said of words) {
                // the first way it is there, if any
                const w = ways ? ways[said].find((v) => t.includes(v) || x.includes(v)) ?? said : said;
                const inTitle = t.includes(w), inPage = pageTitle.includes(w), at = x.indexOf(w);
                if (!inTitle && !inPage && at < 0) { ok = false; break; }
                if (inTitle) score += new RegExp(`(^|[^\\p{L}])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "u").test(t) ? 14 : 9;
                if (inPage) score += 4;
                if (at >= 0) score += 1 + Math.min(4, x.split(w).length - 2);
            }
            if (!ok) continue;
            if (!id) score += 3;
            hits.push({ slug: page.slug, id, title, text, score });
        }
    }
    hits.sort((a, b) => b.score - a.score);
    const per = new Map(), out = [];
    for (const h of hits) {
        const n = per.get(h.slug) || 0;
        if (n >= 3) continue;
        per.set(h.slug, n + 1);
        out.push(h);
        if (out.length >= 30) break;
    }
    return out.map((h) => ({ ...h, snip: snippet(h.text, ways ? words.flatMap((w) => ways[w]) : words) }));
}

/** A line of the section around the first word found. */
function snippet(text, words) {
    if (!text) return "";
    const f = fold(text);
    let at = -1;
    for (const w of words) { const i = f.indexOf(w); if (i >= 0 && (at < 0 || i < at)) at = i; }
    if (at < 0) return text.slice(0, 120) + (text.length > 120 ? "…" : "");
    const from = Math.max(0, text.lastIndexOf(" ", Math.max(0, at - 42)));
    const s = text.slice(from, from + 140);
    return (from > 0 ? "…" : "") + s.trim() + (from + 140 < text.length ? "…" : "");
}

/** The words asked for, marked where they stand. */
function Marked({ text, q }) {
    const words = fold(q).split(/[^\p{L}\p{N}]+/u).filter((w) => w.length > 0);
    if (!words.length) return text;
    const f = fold(text), marks = [];
    for (const w of words) { let i = f.indexOf(w); while (i >= 0) { marks.push([i, i + w.length]); i = f.indexOf(w, i + w.length); } }
    marks.sort((a, b) => a[0] - b[0]);
    const out = [];
    let at = 0;
    for (const [a, b] of marks) { if (a < at) continue; out.push(text.slice(at, a), <mark key={a}>{text.slice(a, b)}</mark>); at = b; }
    out.push(text.slice(at));
    return out;
}

export default function Search({ open, onClose }) {
    if (!open || typeof document === "undefined") return null;
    return createPortal(<Palette onClose={onClose} />, document.body);
}

function Palette({ onClose }) {
    const lang = useLang(), w = D[lang.code], navigate = useNavigate();
    const [q, setQ] = useState(""), [index, setIndex] = useState(null), [sel, setSel] = useState(0);
    const panel = useRef(null), veil = useRef(null), list = useRef(null), card = useRef(null), input = useRef(null), leaving = useRef(false), placed = useRef(false);

    useEffect(() => { let live = true; searchIndex(lang.code).then((ix) => live && setIndex(ix)); return () => { live = false; }; }, [lang.code]);
    const results = useMemo(() => {
        if (!q.trim()) return PAGES.map((slug) => ({ slug, id: "", title: metaOf(slug, lang.code).title, snip: metaOf(slug, lang.code).lede, page: true }));
        return index ? find(index, q, lang.code) : [];
    }, [q, index, lang.code]);
    // the words marked in the answers: none for a PC's shortcut, found as the Mac's keys
    const marks = useMemo(() => (pc() && macKeysFor(fold(q).split(/[^\p{L}\p{N}⌘⇧⌥⌃]+/u).filter(Boolean)).length ? "" : q), [q]);
    useEffect(() => { setSel(0); }, [q]);

    // in: the page dims, the card comes down a little and settles
    useEffect(() => {
        const prev = document.activeElement;
        input.current?.focus({ preventScroll: true });
        document.documentElement.classList.add("dsearch-open");
        if (!stillness()) {
            veil.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease-out" });
            panel.current.animate([{ opacity: 0, transform: "translateY(-10px) scale(0.975)" }, { opacity: 1, transform: "none" }], { duration: 520, easing: "cubic-bezier(0.2, 1, 0.3, 1)" });
        }
        return () => { document.documentElement.classList.remove("dsearch-open"); prev?.focus?.({ preventScroll: true }); };
    }, []);
    const close = () => {
        if (leaving.current) return;
        leaving.current = true;
        if (stillness()) return onClose();
        veil.current.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: "ease-in", fill: "forwards" });
        panel.current.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-6px) scale(0.985)" }], { duration: 200, easing: "ease-in", fill: "forwards" }).onfinish = onClose;
    };

    // the chosen answer's card
    useLayoutEffect(() => {
        const el = list.current?.querySelector(`[data-i="${sel}"]`), c = card.current;
        if (!c) return;
        if (!el) { gsap.set(c, { opacity: 0 }); placed.current = false; return; }
        const at = { y: el.offsetTop, height: el.offsetHeight, opacity: 1 };
        if (!placed.current || stillness()) gsap.set(c, at); else gsap.to(c, { ...at, duration: TIME * 0.8, ease: SPRING, overwrite: "auto" });
        placed.current = true;
        // keep it in view
        const top = el.offsetTop, bottom = top + el.offsetHeight, box = list.current;
        if (top < box.scrollTop + 8) box.scrollTop = top - 8;
        else if (bottom > box.scrollTop + box.clientHeight - 8) box.scrollTop = bottom - box.clientHeight + 8;
    }, [sel, results]);

    const go = (r) => {
        if (!r) return;
        const to = localize(docPath(r.slug), lang.code), here = location.pathname === to;
        close();
        if (here && r.id) {
            const el = document.getElementById(r.id);
            history.replaceState(null, "", `#${r.id}`);
            if (el) glideTo(el.getBoundingClientRect().top + scrollY - 96);
        } else if (!here || !r.id) navigate(to + (r.id ? `#${r.id}` : ""));
    };
    const keys = (e) => {
        if (e.key === "Escape") { e.preventDefault(); close(); }
        else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(results.length - 1, s + 1)); }
        else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
        else if (e.key === "Enter") { e.preventDefault(); go(results[sel]); }
    };
    useEffect(() => { const r = results[sel]; if (r) preload(r.slug, lang.code); }, [sel, results]);

    let last = null;
    return (
        <div className="dsearch" role="dialog" aria-modal="true" aria-label={w.search} onKeyDown={keys}>
            <div ref={veil} className="dsearch-veil" onClick={close} />
            <div ref={panel} className="dsearch-panel">
                <div className="dsearch-field">
                    <G name="search" size={20} className="dsearch-g" />
                    <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder={w.search_ph} aria-label={w.search}
                        role="combobox" aria-expanded="true" aria-controls="dsearch-list" aria-activedescendant={results[sel] ? `dsr-${sel}` : undefined}
                        autoComplete="off" autoCorrect="off" spellCheck="false" enterKeyHint="go" />
                    <button type="button" className="dsearch-esc" onClick={close}>esc</button>
                </div>
                <div ref={list} id="dsearch-list" role="listbox" className="dsearch-list">
                    <i ref={card} className="dsearch-card" aria-hidden="true" />
                    {!q.trim() && <p className="dsearch-group">{w.search_start}</p>}
                    {q.trim() && index && results.length === 0 && (
                        <div className="dsearch-none"><p className="font-semibold text-ink">{w.search_none.replace("{q}", q.trim())}</p><p className="mt-1">{w.search_try}</p></div>
                    )}
                    {results.map((r, i) => {
                        const head = q.trim() && r.slug !== last;
                        last = r.slug;
                        const m = metaOf(r.slug, lang.code), sec = sectionOf(r.slug);
                        return (
                            <div key={`${r.slug}#${r.id}`}>
                                {head && <p className="dsearch-group">{w.sections[sec.key][0]} <span aria-hidden="true">›</span> {m.title}</p>}
                                <a id={`dsr-${i}`} data-i={i} role="option" aria-selected={i === sel} href={localize(docPath(r.slug), lang.code) + (r.id ? `#${r.id}` : "")}
                                    onClick={(e) => { e.preventDefault(); go(r); }} onPointerMove={() => sel !== i && setSel(i)}
                                    className={`dsearch-r ${i === sel ? "is-on" : ""}`}>
                                    <span className="dsearch-rg"><G name={r.id ? "arrow" : GLYPH[r.slug]} size={15} /></span>
                                    <span className="min-w-0">
                                        <span className="dsearch-rt"><Marked text={r.title} q={marks} /></span>
                                        {r.snip && <span className="dsearch-rs"><Marked text={r.snip} q={marks} /></span>}
                                    </span>
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="dsearch-foot" aria-hidden="true">
                    {w.search_keys.map(([k, t]) => <span key={k}><kbd className="key key-s">{k}</kbd>{t}</span>)}
                    <span className="ml-auto">{w.title} · {w.pages.replace("{n}", SECTIONS.reduce((n, s) => n + s.pages.length, 0))}</span>
                </div>
            </div>
        </div>
    );
}
