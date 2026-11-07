/* eslint-disable react-refresh/only-export-components -- the admin area's small parts and their helpers live together. */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLang } from "@/i18n";

/*
 * What every part of the admin area shares: its words, in English and German side by side (t(en, de), as the maker
 * reads them; the French and Italian addresses are not made), the way it calls the API, and its small parts in
 * Bezzle's materials: the well with a card resting in it (the header's menu, the app's mode switch), the pencil's
 * blue for whatever matters, the paper's inks for the rest.
 */

/** "en" or "de": the admin area's language, from the page's. */
export const useCode = () => (useLang().code === "de" ? "de" : "en");
/** `t(en, de)`: the words for the page's language; either side can be a string or JSX. */
export function useT() {
    const code = useCode();
    return useCallback((en, de) => (code === "de" ? de : en), [code]);
}
/** Dates and counts as the maker reads them, in Switzerland. */
export const LOCALE = { en: "en-GB", de: "de-CH" };

/** The address's own parameters (?view=, ?days=…), changed in place: replaced unless `push` asks for a step Back can take. */
export function useParams() {
    const [params, setParams] = useSearchParams();
    const set = useCallback((key, value, push = false) => setParams((p) => {
        const n = new URLSearchParams(p);
        if (value) n.set(key, value); else n.delete(key);
        return n;
    }, { replace: !push }), [setParams]);
    return [params, set, setParams];
}

/** The PHP API behind the admin area (api/admin.php): GET to read, POST (JSON) to change; the session cookie rides along. */
export async function admin(action, body, query = "") {
    const res = await fetch(`/api/admin.php?action=${action}${query}`, body === undefined ? {} : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    let data = null;
    try { data = await res.json(); } catch { /* an empty answer */ }
    if (!res.ok) throw new Error(data?.error || `The server answered ${res.status}.`);
    return data;
}

/* ── Numbers and days ────────────────────────────────────────────────────── */

/** A count as the page's language writes it: 1,200, or 1’200 the Swiss way on the German page. */
export const n0 = (n, code) => { const s = (n ?? 0).toLocaleString("en-US"); return code === "de" ? s.replace(/,/g, "’") : s; };
/** A count with its noun: plural(3, code, t(["day", "days"], ["Tag", "Tage"])). */
export const plural = (n, code, [one, many]) => `${n0(n, code)} ${n === 1 ? one : many}`;
/** A share as people say it: "25%", "4.1%", "0.3%"; "-" when there is nothing to share. */
export function percent(part, whole) {
    if (!whole) return "-";
    const p = (part / whole) * 100;
    return `${p > 0 && p < 10 ? p.toFixed(1).replace(/\.0$/, "") : Math.round(p)}%`;
}
/** Time spent reading: "45s", "3m 12s". */
export const duration = (s) => (s == null ? "-" : s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`);
export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
// Days from the API (2026-11-07) are read at noon, so they stay on their day in any time zone.
export const day = (s) => new Date(`${s}T12:00:00`);
export const dayLabel = (s, code, opts) => day(s).toLocaleDateString(LOCALE[code], opts);
export const localDay = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const isDay = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || "");
/** The day some days on from another: shiftDay("2026-10-30", -29) is "2026-10-01". */
export const shiftDay = (s, n) => { const d = day(s); d.setDate(d.getDate() + n); return localDay(d); };
/** A time the server wrote (Zurich time, like the maker's). */
export const parse = (s) => new Date(s.replace(" ", "T"));

/* ── Small parts ─────────────────────────────────────────────────────────── */

/** A small heading inside a card, as the site's footer has its columns. */
export const label = "text-[12.5px] font-semibold text-ink-3";
/** The pencil's ring, for whatever takes the keyboard. */
export const ring = "outline-none focus-visible:shadow-[0_0_0_2px_var(--card),0_0_0_3.5px_var(--pencil)]";
/** A quiet button: the paper until pointed at, then a faint well. */
export const quiet = `inline-flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-[9px] text-[13px] font-medium text-ink-2 hover:text-ink hover:bg-ink/[0.06] active:bg-ink/[0.1] disabled:opacity-35 disabled:pointer-events-none transition-colors ${ring}`;
/** A card on the page: Theme.card, as every card of the site. */
export const card = "rounded-[16px] bg-card shadow-card";
/** Work in progress: an ink highlight sweeping across faint text. */
export const shimmer = "text-transparent bg-clip-text bg-[linear-gradient(90deg,transparent,var(--ink),transparent),linear-gradient(var(--ink-3),var(--ink-3))] bg-size-[60%_100%,100%_100%] bg-no-repeat animate-shimmer motion-reduce:animate-none motion-reduce:bg-none motion-reduce:text-ink-3";

/** A line drawing on a 16-point grid, as thin as the app's glyphs. */
export function Icon({ d, size = 16, className = "" }) {
    return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{d}</svg>;
}
export const I = {
    left: <path d="m10 4-4 4 4 4" />,
    right: <path d="m6 4 4 4-4 4" />,
    up: <path d="m4 10 4-4 4 4" />,
    down: <path d="m4 6 4 4 4-4" />,
    chevron: <path d="m4 6 4 4 4-4" />,
    close: <path d="m4 4 8 8M12 4l-8 8" />,
    rise: <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />,
    fall: <path d="M4.5 4.5 11.5 11.5M11.5 6v5.5H6" />,
    redo: <><path d="M12.8 8a4.8 4.8 0 1 1-1.4-3.4" /><path d="M12.6 2.6v2.6H10" /></>,
    copy: <><rect x="5" y="5" width="8.5" height="8.5" rx="1.8" /><path d="M3 10.5V4a1.5 1.5 0 0 1 1.5-1.5H11" /></>,
    calendar: <><rect x="2.5" y="3.5" width="11" height="10" rx="2" /><path d="M2.5 7h11M5.5 2v3M10.5 2v3" /></>,
    signOut: <path d="M6.5 13.5H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2.5M10 11l3-3-3-3M13 8H6.5" />,
    sparkle: <path d="M8 2.5c.45 2.75 2 4.3 4.75 4.75C10 7.7 8.45 9.25 8 12c-.45-2.75-2-4.3-4.75-4.75C6 6.8 7.55 5.25 8 2.5z" fill="currentColor" stroke="none" />,
    play: <path d="M5.2 3.4v9.2l7.3-4.6z" fill="currentColor" stroke="none" />,
    pause: <path d="M5.6 3.6v8.8M10.4 3.6v8.8" strokeWidth={2.2} />,
    click: <path d="M6.2 6.2 13 9l-2.9 1.1L9 13zM5 2.4v1.8M2.4 5h1.8M3.1 3.1l1.2 1.2" />,
    field: <path d="M6 3h4M6 13h4M8 3v10" />,
    away: <path d="M2.5 8h7M7 5.5 9.5 8 7 10.5M12.8 3v10" />,
    back: <path d="M13.5 8h-7M9 5.5 6.5 8 9 10.5M3.2 3v10" />,
    depth: <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" />,
    download: <path d="M8 2.5v7.5M5 7l3 3 3-3M3 13h10" />,
    browser: <><rect x="2" y="3" width="12" height="10" rx="2" /><path d="M2 6h12" /><path d="M4 4.5h.01M5.6 4.5h.01" strokeWidth={1.6} /></>,
    share: <><circle cx="6.5" cy="5.5" r="2.3" /><path d="M2.5 13c.5-2.3 2.2-3.4 4-3.4s3 .7 3.6 1.8M12 8.6v4.4M9.8 10.8h4.4" /></>,
    Search: <><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></>,
    Social: <path d="M3 4.6C3 3.7 3.7 3 4.6 3h6.8c.9 0 1.6.7 1.6 1.6v4.8c0 .9-.7 1.6-1.6 1.6H7.2L4.4 13v-2H4.6C3.7 11 3 10.3 3 9.4z" />,
    AI: <path d="M8 2.5c.45 2.75 2 4.3 4.75 4.75C10 7.7 8.45 9.25 8 12c-.45-2.75-2-4.3-4.75-4.75C6 6.8 7.55 5.25 8 2.5z" />,
    Referral: <path d="M6.8 9.2a2.6 2.6 0 0 0 3.7 0l2-2a2.6 2.6 0 0 0-3.7-3.7l-.7.7M9.2 6.8a2.6 2.6 0 0 0-3.7 0l-2 2a2.6 2.6 0 0 0 3.7 3.7l.7-.7" />,
    Campaign: <><path d="M2.5 8.1V3.5a1 1 0 0 1 1-1h4.6l5.4 5.4a1 1 0 0 1 0 1.4l-4.2 4.2a1 1 0 0 1-1.4 0z" /><circle cx="5.6" cy="5.6" r="1" /></>,
    Direct: <path d="M3 8h9.5M9.5 5l3 3-3 3" />,
};

/** The hand-drawn tick: round ends, a short arm and a long one. */
export function CheckMark({ size = 12, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" className={className} aria-hidden="true">
            <path d="M2.4 6.48 L4.92 9 L9.84 3.24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/** Something is on its way: the blue pencil drawing its line, as the site's loader does. */
export function Loader({ size = 44, className = "" }) {
    const t = useT();
    return (
        <svg width={size} height={size * 0.2} viewBox="0 0 300 24" preserveAspectRatio="none" role="img" aria-label={t("Loading", "Lädt")} className={`overflow-visible ${className}`}>
            <path pathLength="1" d="M3 15 C 70 8, 160 6, 297 10" fill="none" stroke="var(--pencil)" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 1"
                className="animate-pencil motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]" vectorEffect="non-scaling-stroke" />
        </svg>
    );
}

/** A card that waits for its numbers: the page's place for it, and the pencil drawing. */
export function Waiting({ className = "h-[420px]" }) {
    return <div className={`${card} ${className} flex items-center justify-center`}><Loader /></div>;
}

/** A small tag: ink by default; `tint` in the pencil's blue, `warn` in the warning's red. */
export function Chip({ children, tint = false, warn = false, className = "" }) {
    const tone = tint ? "text-pencil bg-pencil-wash" : warn ? "text-warning bg-[color-mix(in_srgb,var(--warning)_10%,transparent)]" : "text-ink-2 shadow-chip";
    return <span className={`inline-flex items-center gap-1 h-[21px] px-2 rounded-full text-[11.5px] font-semibold whitespace-nowrap ${tone} ${className}`}>{children}</span>;
}

/**
 * A choice of a few, as Bezzle's mode switch: a well, and a card resting in it under the one chosen, springing to the
 * next. `options` are [key, words, note?]; `keep` leaves the keyboard where it was on a click (the player's space bar).
 */
export function Segments({ value, options, onChange, name, small = false, keep = false, className = "" }) {
    const well = useRef(null), thumb = useRef(null), placed = useRef(false);
    useLayoutEffect(() => {
        const el = well.current?.querySelector('[aria-pressed="true"]'), card = thumb.current;
        if (!card) return;
        if (!el) { card.style.opacity = "0"; return; }
        card.style.transition = placed.current ? "" : "none";
        card.style.opacity = "1";
        card.style.width = `${el.offsetWidth}px`;
        card.style.transform = `translateX(${el.offsetLeft - 3}px)`;
        placed.current = true;
    });
    // the words change with the language, and so does where the card rests
    useEffect(() => {
        const ro = new ResizeObserver(() => { const el = well.current?.querySelector('[aria-pressed="true"]'); if (el && thumb.current) { thumb.current.style.width = `${el.offsetWidth}px`; thumb.current.style.transform = `translateX(${el.offsetLeft - 3}px)`; } });
        ro.observe(well.current);
        return () => ro.disconnect();
    }, []);
    return (
        <div ref={well} role="group" aria-label={name} className={`relative flex items-center p-[3px] rounded-[12px] bg-well shadow-well ${className}`}>
            <i ref={thumb} aria-hidden="true" className="absolute left-[3px] top-[3px] bottom-[3px] rounded-[9px] bg-card shadow-thumb opacity-0 transition-[transform,width] duration-[450ms] ease-[cubic-bezier(0.34,1.36,0.64,1)] motion-reduce:transition-none" />
            {options.map(([key, text, note]) => (
                <button key={key} aria-pressed={value === key} onClick={() => onChange(key)} onMouseDown={keep ? (e) => e.preventDefault() : undefined}
                    className={`relative z-[1] ${small ? "h-7 px-2.5 text-[12.5px]" : "h-8 px-3 max-sm:px-2.5 text-[13px]"} rounded-[9px] inline-flex flex-1 justify-center items-center gap-1.5 font-medium whitespace-nowrap tabular-nums transition-colors duration-200 ${ring} ${value === key ? "text-ink" : "text-ink-2 hover:text-ink"}`}>
                    {text}
                    {note != null && <span className={`text-[11.5px] ${value === key ? "text-ink-3" : "text-ink-4"}`}>{note}</span>}
                </button>
            ))}
        </div>
    );
}

/** A native dialog: the top layer, a focus trap, Esc and the backdrop for free. */
export function Dialog({ open, onClose, label: name, className = "", children }) {
    const ref = useRef(null);
    useEffect(() => {
        const d = ref.current;
        if (open && !d.open) d.showModal();
        if (!open && d.open) d.close();
    }, [open]);
    return (
        <dialog ref={ref} aria-label={name} onCancel={(e) => { e.preventDefault(); onClose(); }}
            onMouseDown={(e) => { if (e.target === ref.current) onClose(); }}
            className={`p-0 m-0 max-w-none max-h-none bg-transparent text-ink overflow-visible backdrop:bg-[rgb(var(--shadow-rgb)/0.24)] backdrop:backdrop-blur-[3px] backdrop:animate-veil ${className}`}>
            {open && children}
        </dialog>
    );
}

/** A Mac window's three lights; the red one closes, the others are only there. */
export function Lights({ onClose, label: name }) {
    const light = "block size-3 rounded-full shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.14)]";
    return (
        <span className="group/lights flex items-center gap-2">
            <button onClick={onClose} aria-label={name} className={`${light} bg-[#FF5F57] grid place-items-center ${ring}`}>
                <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" className="opacity-0 group-hover/lights:opacity-100 transition-opacity"><path d="m4 4 4 4M8 4 4 8" stroke="rgb(0 0 0 / 0.55)" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </button>
            <i aria-hidden="true" className={`${light} bg-[#FEBC2E]`} />
            <i aria-hidden="true" className={`${light} bg-[#28C840]`} />
        </span>
    );
}

/** The width of an element, kept up to date. */
export function useWidth() {
    const ref = useRef(null);
    const [w, setW] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setW(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width)));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);
    return [ref, w];
}

/** A choice kept for the next time, where the browser lets it. */
export function useKept(key, initial) {
    const [v, setV] = useState(() => { try { const s = localStorage.getItem(key); return s == null ? initial : JSON.parse(s); } catch { return initial; } });
    const set = useCallback((x) => { setV(x); try { localStorage.setItem(key, JSON.stringify(x)); } catch { /* storage blocked */ } }, [key]);
    return [v, set];
}
