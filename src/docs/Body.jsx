/*
 * A docs page's words, drawn from its tree (src/docs/parse.js): headings with their links, the
 * app's controls as it labels them and its keys as keys, callouts in the margin's hand, numbered
 * steps along a pencil line, a card's fields as a reference list, code to copy, and the app's
 * window as figures that open full size.
 */
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Link, useLang } from "@/i18n";
import { glideTo } from "@/lib/smooth";
import { D } from "@/docs/words";
import { G } from "@/docs/Glyphs";
import { docOf, preload } from "@/docs/index";
import Live, { LiveGuard, useLive } from "@/docs/Live";
import Demo from "@/docs/Demos";
import { bare } from "@/i18n";
import { RELEASE_WIN } from "@/lib/release";

const NAMED = { Space: "Space", Esc: "esc", Return: "↩", Tab: "⇥", Delete: "⌫", Enter: "↩" };
const cls = (...parts) => parts.filter(Boolean).join(" ");

/**
 * Keys as keys: ⇧ ⌘ I, each its own cap, the whole read out by name. Once there is Bezzle for
 * Windows, `w` is what a PC presses (Ctrl Shift I; src/docs/keys-win.js), and both are in the page,
 * the stylesheet showing the one for the computer (.on-mac, .on-win); where a PC has no such key
 * yet (null), it shows the Mac's, marked Mac.
 */
export function Keys({ k, w, size = "" }) {
    const d = D[useLang().code];
    const label = k.map((x) => d.mods[x] || (RELEASE_WIN && d.win_mods[x]) || x).join(" ");
    const caps = k.map((x, i) => <kbd key={i} className={`key ${x.length > 1 && !NAMED[x] ? "key-wide" : ""} ${d.mods[x] ? "key-mod" : ""}`}>{NAMED[x] || x}</kbd>);
    const mac = (os) => <kbd className={os ? cls("keys", size, os) : `keys ${size}`} aria-label={label} title={label}>{caps}</kbd>;
    if (!RELEASE_WIN || w === undefined) return mac();
    if (w && w.join("\n") === k.map((x) => NAMED[x] || x).join("\n")) return mac();
    if (!w) {
        return (
            <>
                {mac("on-mac")}
                <kbd className={cls("keys", size, "keys-only on-win")} aria-label={`${label}, ${d.os.only}`} title={d.os.not_yet}>{caps}<span className="keys-os">{d.os.mac}</span></kbd>
            </>
        );
    }
    const said = w.map((x) => d.win_mods[x] || x).join(" ");
    return (
        <>
            {mac("on-mac")}
            <kbd className={cls("keys", size, "on-win")} aria-label={said} title={said}>
                {w.map((x, i) => <kbd key={i} className={`key ${x.length > 1 ? "key-wide" : ""}`}>{x}</kbd>)}
            </kbd>
        </>
    );
}

/** A control or a menu path as the app labels it: Object › Make Component. */
function Ui({ c }) {
    return (
        <span className="ui">
            {c.map((p, i) => <span key={i} className="ui-i">{i > 0 && <span className="ui-sep" aria-hidden="true">›</span>}<span className="ui-w">{p}</span></span>)}
        </span>
    );
}

/** Going to a place on this page glides there; a link to another page fetches it on the way. */
function A({ href, children }) {
    const lang = useLang();
    if (href.startsWith("#")) {
        const id = decodeURIComponent(href.slice(1));
        return <a href={href} onClick={(e) => { const el = document.getElementById(id); if (!el) return; e.preventDefault(); history.replaceState(null, "", href); glideTo(el.getBoundingClientRect().top + scrollY - 96); }}>{children}</a>;
    }
    if (href.startsWith("/")) {
        const slug = docOf(bare(href.split("#")[0]));
        return <Link to={href} onPointerEnter={() => preload(slug, lang.code)} onFocus={() => preload(slug, lang.code)}>{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener">{children}<span className="ext" aria-hidden="true">↗</span></a>;
}

export function In({ n }) {
    if (!n) return null;
    return n.map((x, i) => {
        if (typeof x === "string") return x;
        switch (x.t) {
            case "b": return <strong key={i}><In n={x.c} /></strong>;
            case "i": return <em key={i}><In n={x.c} /></em>;
            case "code": return <code key={i}>{x.c}</code>;
            case "kbd": return <Keys key={i} k={x.k} w={x.w} />;
            case "ui": return <Ui key={i} c={x.c} />;
            case "a": return <A key={i} href={x.href}><In n={x.c} /></A>;
            // words for one computer alone, the other's hidden by the stylesheet
            case "os": return <span key={i} className={`on-${x.os}`}><In n={x.c} /></span>;
            default: return null;
        }
    });
}

export const toast = (text) => dispatchEvent(new CustomEvent("bz:toast", { detail: text }));

/** A heading, its link a click away (copied, and said so). */
function H({ b }) {
    const w = D[useLang().code];
    const Tag = b.l === 2 ? "h2" : "h3";
    const copy = (e) => {
        e.preventDefault();
        const url = `${location.origin}${location.pathname}#${b.id}`;
        history.replaceState(null, "", `#${b.id}`);
        navigator.clipboard?.writeText(url).then(() => toast(w.copied), () => {});
        const el = document.getElementById(b.id);
        if (el) glideTo(el.getBoundingClientRect().top + scrollY - 96);
    };
    return (
        <Tag id={b.id} className={b.l === 2 ? "dh2" : "dh3"} data-toc={b.l}>
            <In n={b.c} /><a href={`#${b.id}`} onClick={copy} className="dh-link" aria-label={w.copy_link} title={w.copy_link}><G name="link" size={15} /></a>
        </Tag>
    );
}

/* A callout's glyph by its kind; one for Bezzle for Windows shows on a PC alone. */
const KIND_GLYPH = { tip: "tip", note: "info", caution: "caution", windows: "pc" };
function Callout({ b }) {
    const w = D[useLang().code];
    if (b.kind === "quote") return <blockquote className="dquote"><Blocks tree={b.c} /></blockquote>;
    const kind = KIND_GLYPH[b.kind] ? b.kind : "note";
    return (
        <aside className={`callout callout-${kind}${kind === "windows" ? " on-win" : ""}`}>
            <div className="callout-head"><G name={KIND_GLYPH[kind]} size={16} className="dg-draw" /><span className="callout-kind">{w.kinds[kind]}</span>{b.title && <span className="callout-title"><In n={b.title} /></span>}</div>
            <div className="callout-body"><Blocks tree={b.c} /></div>
        </aside>
    );
}

function Code({ b }) {
    const w = D[useLang().code];
    const [done, setDone] = useState(false);
    const copy = () => navigator.clipboard?.writeText(b.c).then(() => { setDone(true); setTimeout(() => setDone(false), 1600); }, () => {});
    return (
        <div className="dcode">
            {/* (a long line scrolls sideways: from the keyboard too) */}
            <pre tabIndex={0}><code>{b.c}</code></pre>
            <button type="button" onClick={copy} className={`dcode-copy ${done ? "is-done" : ""}`} aria-label={w.copy}>
                <span className="dcode-copy-g"><G name={done ? "check" : "copy"} size={14} className={done ? "dg-draw dg-now" : ""} /></span>{done ? w.copied_code : w.copy}
            </button>
        </div>
    );
}

/** A field's name and what it does: the leading words up to the first colon. */
function split(nodes) {
    const term = [], desc = [];
    let found = false;
    for (const n of nodes) {
        if (found) { desc.push(n); continue; }
        if (typeof n === "string" && n.includes(":")) {
            const at = n.indexOf(":");
            if (n.slice(0, at).trim()) term.push(n.slice(0, at));
            const rest = n.slice(at + 1).replace(/^\s+/, "");
            if (rest) desc.push(rest);
            found = true;
        } else term.push(n);
    }
    return found ? [term, desc] : [[], nodes];
}
function Fields({ b }) {
    return (
        <dl className="fields">
            {b.c.map((item, i) => {
                const [first, ...more] = item;
                const [term, desc] = first?.t === "p" ? split(first.c) : [[], []];
                return (
                    <div key={i} className="field">
                        <dt><In n={term} /></dt>
                        <dd>{desc.length > 0 && <p><In n={desc} /></p>}<Blocks tree={more} /></dd>
                    </div>
                );
            })}
        </dl>
    );
}

function Steps({ b }) {
    return (
        <ol className="steps" data-steps="">
            <i className="steps-rail" aria-hidden="true"><i className="steps-fill" /></i>
            {b.c.map((item, i) => (
                <li key={i} className="step">
                    <span className="step-n bz-num" aria-hidden="true">{i + 1}</span>
                    <div className="step-b"><Blocks tree={item} /></div>
                </li>
            ))}
        </ol>
    );
}

/** A cell with nothing in it (a table's empty corner). */
const empty = (c) => !c || c.every((x) => typeof x === "string" && !x.trim());

function Table({ b }) {
    const al = (i) => (b.align[i] === "c" ? "text-center" : b.align[i] === "r" ? "text-right" : "");
    return (
        <div className="dtable" tabIndex={0}>
            <table>
                <thead><tr>{b.head.map((c, i) => (empty(c) ? <td key={i} /> : <th key={i} className={al(i)}><In n={c} /></th>))}</tr></thead>
                <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, i) => <td key={i} className={al(i)}><In n={c} /></td>)}</tr>)}</tbody>
            </table>
        </div>
    );
}

/* ------------------------------------------------------------------ figures */
const SHOTS = new Set(["hero", "home", "adapt", "components", "prototype", "inspect", "cutout", "dark", "deck", "together", "ai"]);

/** The app's window as a figure: it opens full size from where it lies, and goes back there. */
function Figure({ b }) {
    const lang = useLang(), w = D[lang.code];
    const img = useRef(null), [open, setOpen] = useState(false);
    const live = useLive(b.name);
    if (!SHOTS.has(b.name)) return null;
    const src = `/img/app/${lang.locale}/${b.name}.webp`;
    const h = b.name === "home" ? 1707 : 1600;
    const capture = (
        <button type="button" className="shot-frame" onClick={() => setOpen(true)} aria-label={w.enlarge}>
            <img ref={img} src={src} alt={b.c ? textOf(b.c) : ""} width="2560" height={h} loading="lazy" decoding="async" style={{ visibility: open ? "hidden" : undefined }} />
            <span className="shot-zoom" aria-hidden="true"><G name="plus" size={14} /></span>
        </button>
    );
    return (
        <figure className={`shot ${live ? "shot-live" : ""}`} data-shot={live ? undefined : ""}>
            {live ? <LiveGuard fallback={capture}><Live name={b.name} code={lang.code} label={w.enlarge} onOpen={() => setOpen(true)} /></LiveGuard> : capture}
            {b.c?.length > 0 && <figcaption><In n={b.c} /></figcaption>}
            {open && <Lightbox from={img.current || document.querySelector(`[data-live="${b.name}"]`)} src={src} h={h} alt={b.c ? textOf(b.c) : ""} close={() => setOpen(false)} label={w.close} />}
        </figure>
    );
}
const textOf = (n) => n.map((x) => (typeof x === "string" ? x : x.c ? (Array.isArray(x.c) ? textOf(x.c) : x.c) : "")).join("");

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
function Lightbox({ from, src, h, alt, close, label }) {
    const big = useRef(null), veil = useRef(null), shut = useRef(false);
    const still = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    // from the figure's place to the middle of the screen, and back
    const delta = () => {
        const a = from.getBoundingClientRect(), z = big.current.getBoundingClientRect();
        return `translate(${a.left + a.width / 2 - (z.left + z.width / 2)}px, ${a.top + a.height / 2 - (z.top + z.height / 2)}px) scale(${a.width / z.width})`;
    };
    useEffect(() => {
        const prev = document.activeElement;
        big.current.focus({ preventScroll: true });
        if (!still) {
            big.current.animate([{ transform: delta(), borderRadius: "10px" }, { transform: "none", borderRadius: "14px" }], { duration: 560, easing: "cubic-bezier(0.2, 1, 0.3, 1)" });
            veil.current.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, easing: EASE });
        }
        const key = (e) => { if (e.key === "Escape") { e.preventDefault(); leave(); } };
        addEventListener("keydown", key);
        return () => { removeEventListener("keydown", key); prev?.focus?.({ preventScroll: true }); };
    }, []);
    const leave = () => {
        if (shut.current) return;
        shut.current = true;
        if (still) return close();
        veil.current.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: EASE, fill: "forwards" });
        big.current.animate([{ transform: "none" }, { transform: delta() }], { duration: 420, easing: EASE, fill: "forwards" }).onfinish = close;
    };
    return createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt || label} onClick={leave}>
            <div ref={veil} className="lightbox-veil" />
            <img ref={big} tabIndex={-1} src={src} alt={alt} width="2560" height={h} className="lightbox-img" />
            <button type="button" className="lightbox-x" aria-label={label} onClick={leave}><G name="close" size={16} /></button>
        </div>,
        document.body,
    );
}

/* ------------------------------------------------------------------ the blocks */
export function Blocks({ tree }) {
    if (!tree) return null;
    return tree.map((b, i) => {
        switch (b.t) {
            case "h": return <H key={b.id + i} b={b} />;
            case "p": return <p key={i}><In n={b.c} /></p>;
            case "ul": return <ul key={i} className="dlist">{b.c.map((item, j) => <li key={j}><Blocks tree={item} /></li>)}</ul>;
            case "ol": return <ol key={i} className="dlist dlist-n" start={b.start}>{b.c.map((item, j) => <li key={j}><Blocks tree={item} /></li>)}</ol>;
            case "note": return <Callout key={i} b={b} />;
            case "code": return <Code key={i} b={b} />;
            case "table": return <Table key={i} b={b} />;
            case "steps": return <Steps key={i} b={b} />;
            case "fields": return <Fields key={i} b={b} />;
            case "figure": return <Figure key={i} b={b} />;
            case "demo": return <LiveGuard key={i} fallback={null}><Demo name={b.name} /></LiveGuard>;
            // blocks for one computer alone (::: mac, ::: win), laid out as if they stood on their own
            case "os": return <div key={i} className={`os-blocks on-${b.os}`}><Blocks tree={b.c} /></div>;
            default: return null;
        }
    });
}
