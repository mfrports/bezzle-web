import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { CHANNELS, channelName, city, language, pageName, SITE_LANGS } from "@/admin/names";
import {
    admin, card, CheckMark, clamp, day, dayLabel, duration, I, Icon, isDay, label, LOCALE, localDay, n0, percent, plural, quiet, ring, Segments, shiftDay,
    shimmer, useCode, useParams, useT, useWidth, Waiting,
} from "@/admin/ui";

/**
 * The admin area's Visitors view: the site's own numbers (api/_views.php, counted without cookies by lib/track.js),
 * and a read of them by OpenAI's model. One period for everything (?days=7|30|90, or days of one's own as
 * ?from=&to=), read top to bottom: the figures and their trend, the read (for the three periods, folded to its
 * headline until opened), then the way to a download, where people come from, what they read, what they read it on,
 * where they are and when.
 *
 * The charts are drawn here, in the site's paper and ink: the blue pencil for the numbers that matter and the inks
 * for context, thin marks, hairline grids, a tooltip on hover and keyboard focus, and a table for screen readers
 * under each chart.
 *
 * In English and German, the words where they are drawn: t(en, de). What goes to Claude Code (forClaudeCode,
 * siteBrief) stays English: it is a brief for work in this repository.
 */

const PERIODS = [[7, "7 days", "7 Tage"], [30, "30 days", "30 Tage"], [90, "90 days", "90 Tage"], ["dates", "Dates", "Datum"]];
/** Rises into place with the page, a beat after the one before, as the site's own cards (lib/reveal.js). */
const rise = { "data-reveal": "" };
const compact = (n) => (n >= 1e4 ? `${Math.round(n / 1e3)}K` : n >= 1e3 ? `${(n / 1e3).toFixed(1).replace(/\.0$/, "")}K` : `${Math.round(n)}`);
const durationAxis = (s) => (s < 60 ? `${s}s` : `${Math.round(s / 60)}m`);
const WEEKDAYS = { en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], de: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"] };
/** A weekday as the axes shorten it: "Mon", or "Mo" in German. */
const shortDay = (i, lang) => WEEKDAYS[lang][i].slice(0, lang === "de" ? 2 : 3);
/** The period as the legend says it: "Last 30 days"; for days of one's own "Wednesday 15 October", "1 to 14 October" or "25 Sep to 14 Oct". */
function periodName(data, lang) {
    const de = lang === "de";
    if (!data.custom) return de ? `Letzte ${data.days} Tage` : `Last ${data.days} days`;
    if (data.from === data.to) return dayLabel(data.from, lang, { weekday: "long", day: "numeric", month: "long" });
    const f = day(data.from), t = day(data.to), to = de ? "bis" : "to";
    if (f.getMonth() === t.getMonth() && f.getFullYear() === t.getFullYear()) return `${f.getDate()}${de ? "." : ""} ${to} ${dayLabel(data.to, lang, { day: "numeric", month: "long" })}`;
    return `${dayLabel(data.from, lang, { day: "numeric", month: "short" })} ${to} ${dayLabel(data.to, lang, { day: "numeric", month: "short" })}`;
}
/** How long ago the server wrote something (its times are Zurich time, like the maker's). */
function ago(s, lang) {
    const m = Math.round((Date.now() - new Date(s.replace(" ", "T")).getTime()) / 6e4);
    const de = lang === "de";
    if (m < 1) return de ? "gerade eben" : "just now";
    if (m < 60) return de ? `vor ${m} Min.` : `${m} min ago`;
    const h = Math.round(m / 60);
    if (h < 24) return de ? `vor ${plural(h, lang, ["Stunde", "Stunden"])}` : `${plural(h, lang, ["hour", "hours"])} ago`;
    const d = Math.round(h / 24);
    return de ? `vor ${plural(d, lang, ["Tag", "Tagen"])}` : `${plural(d, lang, ["day", "days"])} ago`;
}

/** A smooth curve through points that never overshoots them (monotone cubic), so a count never dips below zero between days. */
function monotone(p) {
    if (p.length === 1) return `M${p[0][0]},${p[0][1]}`;
    const n = p.length, dx = [], m = [];
    for (let i = 0; i < n - 1; i++) { dx[i] = p[i + 1][0] - p[i][0]; m[i] = (p[i + 1][1] - p[i][1]) / dx[i]; }
    const t = [m[0]];
    for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (3 * (dx[i - 1] + dx[i])) / ((2 * dx[i] + dx[i - 1]) / m[i - 1] + (dx[i] + 2 * dx[i - 1]) / m[i]);
    t[n - 1] = m[n - 2];
    let d = `M${p[0][0]},${p[0][1]}`;
    for (let i = 0; i < n - 1; i++) {
        const h = dx[i] / 3;
        d += `C${p[i][0] + h},${p[i][1] + h * t[i]} ${p[i + 1][0] - h},${p[i + 1][1] - h * t[i + 1]} ${p[i + 1][0]},${p[i + 1][1]}`;
    }
    return d;
}
/** Runs of points between the gaps (null), each as its own stretch of curve. */
const runs = (pts) => pts.reduce((acc, p) => { if (p) acc[acc.length - 1].push(p); else if (acc[acc.length - 1].length) acc.push([]); return acc; }, [[]]).filter((r) => r.length);
const curve = (pts) => runs(pts).map(monotone).join("");
const area = (pts, base) => runs(pts).map((r) => `${monotone(r)}L${r[r.length - 1][0]},${base}L${r[0][0]},${base}Z`).join("");

/** Round gridlines for a top value: 0 and two or three steps of 1, 2 or 5 (2.5 from 10 up). */
function scale(top) {
    if (!(top > 0)) return { max: 4, ticks: [0, 2, 4] };
    const raw = (top * 1.1) / 3;
    const p = 10 ** Math.floor(Math.log10(raw));
    const step = Math.max(1, (p >= 10 ? [1, 2, 2.5, 5, 10] : [1, 2, 5, 10]).map((k) => k * p).find((s) => s >= raw));
    const max = Math.ceil((top * 1.1) / step) * step;
    return { max, ticks: Array.from({ length: Math.round(max / step) + 1 }, (_, i) => i * step) };
}

/** Versions newest first: 1.10 after 1.9. */
const newer = (a, b) => { const p = (v) => v.split(".").map(Number); const [x, y] = [p(a), p(b)]; for (let k = 0; k < Math.max(x.length, y.length); k++) if ((y[k] ?? 0) !== (x[k] ?? 0)) return (y[k] ?? 0) - (x[k] ?? 0); return 0; };

/** A change against the previous period, as an arrow and a share; up is good unless `lowerIsBetter`. */
function Delta({ now, before, lowerIsBetter = false }) {
    const t = useT(), lang = useCode();
    if (now == null || before == null) return null;
    if (!before) return now ? <span className="text-[11.5px] font-medium text-pencil">{t("new", "neu")}</span> : null;
    const d = (now - before) / before;
    if (Math.abs(d) < 0.005) return <span className="text-[11.5px] text-ink-3">{t("no change", "unverändert")}</span>;
    const up = d > 0, good = up !== lowerIsBetter;
    return (
        <span title={t(`Previous period: ${n0(before, lang)}`, `Zeitraum davor: ${n0(before, lang)}`)} className={`inline-flex items-center gap-0.5 h-5 pl-1 pr-1.5 rounded-full text-[11.5px] font-medium tabular-nums ${good ? "text-pencil bg-pencil-wash" : "text-warning bg-[color-mix(in_srgb,var(--warning)_10%,transparent)]"}`}>
            <Icon d={up ? I.rise : I.fall} size={11} />{Math.abs(d) >= 10 ? `${Math.round(d + 1)}×` : `${Math.round(Math.abs(d) * 100)}%`}
        </span>
    );
}

function Panel({ title, sub, aside, className = "", children }) {
    return (
        <section aria-label={title} {...rise} className={`${card} min-w-0 ${className}`}>
            <header className="px-6 max-[400px]:px-4 pt-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <div className="min-w-0">
                    <h2 className="font-serif font-semibold tracking-[-0.015em] text-[22px] leading-tight">{title}</h2>
                    {sub && <p className="mt-1 text-[12.5px] text-ink-3 text-pretty">{sub}</p>}
                </div>
                {aside}
            </header>
            <div className="px-6 max-[400px]:px-4 pt-5 pb-6">{children}</div>
        </section>
    );
}

/* ── Days of one's own ───────────────────────────────────────────────────── */

/** A day's month: "2026-10". */
const monthOf = (s) => s.slice(0, 7);
/** The month some months on from another: shiftMonth("2026-10", -1) is "2026-09". */
function shiftMonth(ym, n) {
    const [y, m] = ym.split("-").map(Number);
    const d = new Date(y, m - 1 + n, 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
/** The day some months on from another, held within the month it lands in: shiftMonths("2026-10-31", -1) is "2026-09-30". */
function shiftMonths(s, n) {
    const ym = shiftMonth(monthOf(s), n);
    const last = new Date(Number(ym.slice(0, 4)), Number(ym.slice(5)), 0).getDate();
    return `${ym}-${String(Math.min(Number(s.slice(8)), last)).padStart(2, "0")}`;
}
const monthName = (ym, lang) => dayLabel(`${ym}-01`, lang, { month: "long", year: "numeric" });
/** A month's days in weeks from Monday; null where a week is outside the month. */
function weeksOf(ym) {
    const [y, m] = ym.split("-").map(Number);
    const lead = (new Date(y, m - 1, 1).getDay() + 6) % 7, count = new Date(y, m, 0).getDate();
    const cells = [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => `${ym}-${String(i + 1).padStart(2, "0")}`)];
    while (cells.length % 7) cells.push(null);
    return Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
}
/** The Monday of a day's week. */
const mondayOf = (s) => shiftDay(s, -((day(s).getDay() + 6) % 7));
/** How many days from one day to another, both included. */
const span = (a, b) => Math.round((day(b) - day(a)) / 864e5) + 1;
/** The periods a click away: for today, the day, the week and the month, and the ones before. */
function presets(today, t) {
    const monday = mondayOf(today), first = `${monthOf(today)}-01`;
    return [
        [t("Today", "Heute"), today, today],
        [t("Yesterday", "Gestern"), shiftDay(today, -1), shiftDay(today, -1)],
        [t("This week", "Diese Woche"), monday, today],
        [t("Last week", "Letzte Woche"), shiftDay(monday, -7), shiftDay(monday, -1)],
        [t("This month", "Dieser Monat"), first, today],
        [t("Last month", "Letzter Monat"), `${shiftMonth(monthOf(today), -1)}-01`, shiftDay(first, -1)],
    ];
}

/**
 * Days of one's own: a button naming the days on view, and under it a calendar to pick others. A first
 * day, then a last (the same day twice is a single day); the days between take the chart's green while
 * choosing, and six periods are a click away. Two months side by side where there is room, one on a phone.
 * The arrow keys walk the days, Page Up and Down the months, Esc closes. The days end today and begin
 * where the counts can (13 months back); those before counting began are dimmed.
 */
function Dates({ from, to, today, since, onChange, openAtFirst }) {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(monthOf(to));
    const [two, setTwo] = useState(true);
    const [pending, setPending] = useState(null);
    const [hover, setHover] = useState(null);
    const [focus, setFocus] = useState(to);
    const [align, setAlign] = useState("left");
    const wrap = useRef(null), trigger = useRef(null), pop = useRef(null), refocus = useRef(false);
    const t = useT(), lang = useCode();
    const earliest = shiftMonths(today, -13);
    const months = two ? [view, shiftMonth(view, 1)] : [view];
    const clampDay = (d) => (d < earliest ? earliest : d > today ? today : d);

    const show = () => {
        // The month the period ends in, and the one before it where there is room; the first day takes the keyboard if it is on view.
        const wide = window.matchMedia("(min-width: 640px)").matches;
        const left = wide ? shiftMonth(monthOf(to), -1) : monthOf(to);
        setTwo(wide);
        setView(left < monthOf(earliest) ? monthOf(earliest) : left);
        setFocus(monthOf(from) >= left ? from : to);
        setPending(null);
        setHover(null);
        setOpen(true);
        refocus.current = true;
    };
    const hide = (back = false) => { setOpen(false); setPending(null); setHover(null); if (back) trigger.current?.focus(); };
    const choose = (a, b) => { onChange(a < b ? a : b, a < b ? b : a); hide(true); };
    const pick = (d) => { if (pending) choose(pending, d); else { setPending(d); setHover(d); setFocus(d); } };
    /** Walks the keyboard to a day, turning to its month if it is not on view. */
    const go = (d) => {
        d = clampDay(d);
        setFocus(d);
        if (pending) setHover(d);
        const m = monthOf(d);
        if (m < view) setView(m);
        else if (m > months[months.length - 1]) setView(two ? shiftMonth(m, -1) : m);
        refocus.current = true;
    };
    const turn = (n) => { setView(shiftMonth(view, n)); setFocus(clampDay(shiftMonths(focus, n))); };
    const onKey = (e) => {
        const moves = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
        if (e.key in moves) go(shiftDay(focus, moves[e.key]));
        else if (e.key === "Home") go(mondayOf(focus));
        else if (e.key === "End") go(shiftDay(mondayOf(focus), 6));
        else if (e.key === "PageUp" || e.key === "PageDown") go(shiftMonths(focus, (e.key === "PageUp" ? -1 : 1) * (e.shiftKey ? 12 : 1)));
        else return;
        e.preventDefault();
    };

    // Opened by the Dates button, the calendar is up at once.
    useEffect(() => { if (openAtFirst?.current) { openAtFirst.current = false; show(); } }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // A click or tap anywhere else closes it.
    useEffect(() => {
        if (!open) return;
        const away = (e) => { if (!wrap.current?.contains(e.target)) hide(); };
        document.addEventListener("pointerdown", away);
        return () => document.removeEventListener("pointerdown", away);
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps
    // Under the button, from its left edge unless that runs off the screen.
    useLayoutEffect(() => {
        if (!open || !pop.current) return;
        setAlign(trigger.current.getBoundingClientRect().left + pop.current.offsetWidth > window.innerWidth - 12 ? "right" : "left");
    }, [open, two]);
    // The keyboard's day takes focus once it is on view.
    useEffect(() => { const el = refocus.current && pop.current?.querySelector(`[data-day="${focus}"]`); if (el) { refocus.current = false; el.focus(); } });

    const [lo, hi] = pending ? [pending, hover ?? pending].sort() : [from, to];
    const turnButton = (n, off, text) => (
        <button onClick={() => turn(n)} disabled={off} aria-label={text} className={`size-7 shrink-0 rounded-lg inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-ink/6 disabled:opacity-30 disabled:hover:bg-transparent transition-colors ${ring}`}>
            <Icon d={I.chevron} size={14} className={n < 0 ? "rotate-90" : "-rotate-90"} />
        </button>
    );
    return (
        <div ref={wrap} className="relative" onKeyDown={(e) => { if (e.key === "Escape" && open) { e.stopPropagation(); hide(true); } }}
            onBlur={(e) => { if (open && e.relatedTarget && !wrap.current.contains(e.relatedTarget)) hide(); }}>
            <div className="p-[3px] rounded-[11px] bg-well shadow-well">
                <button ref={trigger} aria-expanded={open} aria-haspopup="dialog" onClick={() => (open ? hide() : show())}
                    className={`h-8 pl-2.5 pr-2 rounded-lg bg-card shadow-card inline-flex items-center gap-2 text-[13px] font-medium tabular-nums text-ink hover:bg-[color-mix(in_srgb,var(--card),var(--ink)_4%)] transition-colors ${ring}`}>
                    <Icon d={I.calendar} size={13} className="text-ink-3" />{periodName({ custom: true, from, to }, lang)}
                    <Icon d={I.chevron} size={12} className={`text-ink-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                </button>
            </div>
            {open && (
                <div ref={pop} role="dialog" aria-label={t("Days of your own", "Eigene Tage")} className={`absolute top-full mt-2 z-20 ${align === "right" ? "right-0" : "left-0"} p-4 rounded-[18px] bg-card shadow-sheet animate-pop`}>
                    <div className="flex max-sm:flex-col sm:gap-4">
                        <div role="group" aria-label={t("Periods", "Zeiträume")} className="flex gap-0.5 max-sm:flex-wrap max-sm:pb-3 max-sm:mb-3 max-sm:shadow-[inset_0_-0.5px_0_var(--hairline)] sm:flex-col sm:w-[128px] sm:pr-4 sm:shadow-[inset_-0.5px_0_0_var(--hairline)]">
                            {presets(today, t).map(([text, a, b]) => (
                                <button key={text} aria-pressed={a === from && b === to} onClick={() => choose(a, b)}
                                    className={`h-7 px-2.5 rounded-lg text-left text-[12.5px] font-medium whitespace-nowrap text-ink-2 hover:text-ink hover:bg-ink/6 aria-pressed:text-ink aria-pressed:bg-ink/6 transition-colors ${ring}`}>
                                    {text}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-6" onPointerLeave={() => setHover(null)}>
                            {months.map((ym, i) => (
                                <div key={ym}>
                                    <div className="flex items-center justify-between gap-2">
                                        {i === 0 ? turnButton(-1, view <= monthOf(earliest), t("The month before", "Der Monat davor")) : <i className="size-7" />}
                                        <span className="font-serif font-semibold tracking-[-0.015em] text-[15.5px]">{monthName(ym, lang)}</span>
                                        {i === months.length - 1 ? turnButton(1, ym >= monthOf(today), t("The month after", "Der Monat danach")) : <i className="size-7" />}
                                    </div>
                                    <table role="grid" aria-label={monthName(ym, lang)} className="mt-2 border-separate border-spacing-0" onKeyDown={onKey}>
                                        <thead>
                                            <tr>{WEEKDAYS[lang].map((d) => <th key={d} scope="col" abbr={d} className="size-9 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-3">{d.slice(0, 2)}</th>)}</tr>
                                        </thead>
                                        <tbody>
                                            {weeksOf(ym).map((week, w) => (
                                                <tr key={w}>
                                                    {week.map((d, c) => {
                                                        if (!d) return <td key={c} />;
                                                        const end = d === lo || d === hi, inside = d >= lo && d <= hi, off = d < earliest || d > today;
                                                        return (
                                                            <td key={d} aria-selected={inside} className={`p-0 nth-[7n+1]:rounded-l-lg nth-[7n]:rounded-r-lg ${inside ? "bg-[color-mix(in_srgb,var(--pencil)_13%,transparent)]" : ""} ${d === lo ? "rounded-l-lg" : ""} ${d === hi ? "rounded-r-lg" : ""}`}>
                                                                <button data-day={d} tabIndex={d === focus ? 0 : -1} disabled={off} aria-pressed={end} aria-label={dayLabel(d, lang, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                                                                    onClick={() => pick(d)} onPointerEnter={() => pending && setHover(d)} onFocus={() => setFocus(d)}
                                                                    className={`relative size-9 rounded-lg text-[13px] tabular-nums transition-colors duration-100 ${ring} ${end ? "bg-ink text-on-ink font-semibold" : off ? "text-ink-4" : `hover:bg-ink/6 ${since && d < since ? "text-ink-3" : "text-ink"}`}`}>
                                                                    {Number(d.slice(8))}
                                                                    {d === today && <i aria-hidden="true" className={`absolute left-1/2 -translate-x-1/2 bottom-[5px] size-[3px] rounded-full ${end ? "bg-paper" : "bg-pencil"}`} />}
                                                                </button>
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 shadow-[inset_0_0.5px_0_var(--hairline)] text-[12.5px] text-ink-3">
                        <span><span className="font-medium text-ink">{periodName({ custom: true, from: lo, to: hi }, lang)}</span> · {plural(span(lo, hi), lang, t(["day", "days"], ["Tag", "Tage"]))}</span>
                        <span>{pending ? t("Now the last day", "Jetzt der letzte Tag") : t("A first day, then a last", "Ein erster Tag, dann ein letzter")}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

/* ── The view ────────────────────────────────────────────────────────────── */

export default function Visitors({ signedOut }) {
    const [params, , setParams] = useParams();
    const t = useT(), lang = useCode();
    const today = localDay();
    // The period: one of the buttons' (?days), or days of one's own (?from and ?to; one alone is a single day).
    const chosen = isDay(params.get("from")) || isDay(params.get("to"));
    const from = isDay(params.get("from")) ? params.get("from") : params.get("to");
    const to = isDay(params.get("to")) ? params.get("to") : from;
    const days = chosen ? null : [7, 30, 90].includes(Number(params.get("days"))) ? Number(params.get("days")) : 30;
    const query = chosen ? `&from=${from}&to=${to}` : `&days=${days}`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [metric, setMetric] = useState("visitors");
    const [live, setLive] = useState(null);
    const asked = useRef(0);
    // Set when the Dates button is pressed, so the calendar opens with it.
    const pickDates = useRef(false);

    const setPeriod = (p) => setParams((prev) => {
        const n = new URLSearchParams(prev);
        for (const k of ["days", "from", "to"]) n.delete(k);
        // Dates start from the days on view, so nothing moves until a date is changed.
        if (p === "dates") { pickDates.current = true; n.set("from", data?.from ?? shiftDay(today, 1 - (days ?? 30))); n.set("to", data?.to ?? today); }
        else if (p !== 30) n.set("days", String(p));
        return n;
    }, { replace: true });
    const setDates = (a, b) => setParams((prev) => {
        const n = new URLSearchParams(prev);
        n.delete("days");
        n.set("from", a <= b ? a : b);
        n.set("to", a <= b ? b : a);
        return n;
    }, { replace: true });

    useEffect(() => {
        const ask = ++asked.current;
        setLoading(true);
        admin("analytics", undefined, query)
            .then((d) => { if (ask === asked.current) setData(d); })
            .catch(signedOut)
            .finally(() => { if (ask === asked.current) setLoading(false); });
    }, [query, signedOut]);

    // Who is on the site now, every half minute while this page is in view.
    useEffect(() => {
        const tick = () => { if (document.visibilityState === "visible") admin("live").then(setLive).catch(() => {}); };
        tick();
        const t = setInterval(tick, 30_000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="mt-9">
            {/* Lifted over the cards: each keeps its finished entrance animation, which makes it a stacking context the calendar would otherwise sit under. */}
            <div className="relative z-30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Segments name={t("Period", "Zeitraum")} value={chosen ? "dates" : days} options={PERIODS.map(([key, en, de]) => [key, t(en, de)])} onChange={setPeriod} />
                    {chosen && <Dates from={from} to={to} today={today} since={data?.since?.slice(0, 10)} onChange={setDates} openAtFirst={pickDates} />}
                </div>
                <Now live={live} />
            </div>
            {!data ? (
                <Waiting className="mt-5 h-[420px]" />
            ) : !data.since ? <Empty /> : (
                // A new period keeps the old charts, faded, until its numbers are in.
                <div className={`transition-opacity duration-200 ${loading ? "opacity-55" : ""}`}>
                    <Overview data={data} metric={metric} setMetric={setMetric} />
                    {days && <Read days={days} data={data} />}
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        <Funnel data={data} />
                        <Sources data={data} />
                        <Pages data={data} className="lg:col-span-2" />
                        <Devices data={data} />
                        <Places data={data} />
                        <Hours data={data} className="lg:col-span-2" />
                    </div>
                    <p className="mt-10 max-w-[720px] text-[12.5px] leading-relaxed text-ink-3 text-pretty">
                        {t(
                            <>Counted by the site itself since {dayLabel(data.since.slice(0, 10), lang, { day: "numeric", month: "long", year: "numeric" })}, without cookies: a visitor is told apart for
                            one day only, and nothing about who they are is kept. Your own visits are left out: from this browser, and from every device on a network you opened
                            the admin area from in the last 30 days{data.network ? <>, like the one you are on now (<span className="font-mono">{data.network}</span>)</> : <>, though the network you are on now can't be told apart</>}. The read is written by
                            OpenAI's model from these counts and the site's recent changes, at most once a day for each of the three periods; days of your own show the numbers alone.</>,
                            <>Von der Website selbst gezählt seit {dayLabel(data.since.slice(0, 10), lang, { day: "numeric", month: "long", year: "numeric" })}, ohne Cookies: ein Besucher wird nur für
                            einen Tag auseinandergehalten, und nichts darüber, wer er ist, wird behalten. Deine eigenen Besuche bleiben aussen vor: aus diesem Browser und von jedem Gerät in einem Netz,
                            aus dem du den Admin-Bereich in den letzten 30 Tagen geöffnet hast{data.network ? <>, wie dem, in dem du gerade bist (<span className="font-mono">{data.network}</span>)</> : <>, wobei das Netz, in dem du gerade bist, nicht erkannt werden kann</>}. Die Deutung schreibt
                            das Modell von OpenAI aus diesen Zahlen und den letzten Änderungen an der Website, höchstens einmal am Tag für jeden der drei Zeiträume; eigene Tage zeigen nur die Zahlen.</>,
                        )}
                    </p>
                </div>
            )}
        </div>
    );
}

/** People on the site in the last five minutes, and the pages they are on. */
function Now({ live }) {
    const t = useT(), lang = useCode();
    if (!live) return null;
    const where = live.pages.map((p) => `${pageName(p.path, lang)} ${p.visitors}`).join(" · ");
    return (
        <p className="inline-flex items-center gap-2.5 h-9 px-3.5 rounded-full bg-card shadow-card text-[13px]" title={where || undefined}>
            <span className="relative flex size-2">
                {live.now > 0 && <span className="absolute inset-0 rounded-full bg-pencil opacity-60 animate-ping motion-reduce:animate-none" />}
                <span className={`relative size-2 rounded-full ${live.now > 0 ? "bg-pencil" : "bg-ink-4"}`} />
            </span>
            <span><span className="font-semibold tabular-nums">{live.now}</span> <span className="text-ink-2">{t("on the site now", "jetzt auf der Website")}</span></span>
        </p>
    );
}

function Empty() {
    const t = useT();
    return (
        <div {...rise} className={`${card} mt-5 px-8 py-20 text-center`}>
            <p className="font-serif font-semibold tracking-[-0.02em] text-[30px]">{t("Nothing counted yet.", "Noch nichts gezählt.")}</p>
            <p className="mt-3 mx-auto max-w-[460px] text-[14px] text-ink-2 text-pretty">
                {t("The site counts its visitors itself from now on, without cookies. The first visits show here within a minute of happening, and the read once there are a few days to read.",
                    "Die Website zählt ihre Besucher ab jetzt selbst, ohne Cookies. Die ersten Besuche erscheinen hier innert einer Minute, und die Deutung, sobald es ein paar Tage zu deuten gibt.")}
            </p>
        </div>
    );
}

/* ── The figures and their trend ─────────────────────────────────────────── */

/* Each figure's name, and its unit as the tooltip says it after the number: "123 visitors", "123 Besucher". */
const METRICS = [
    { key: "visitors", name: ["Visitors", "Besucher"], unit: ["visitors", "Besucher"], of: (d) => d.visitors, fmt: n0, axis: compact, counted: true },
    { key: "views", name: ["Page views", "Seitenaufrufe"], unit: ["page views", "Seitenaufrufe"], of: (d) => d.views, fmt: n0, axis: compact, counted: true },
    { key: "seconds", name: ["Time on a page", "Zeit auf einer Seite"], unit: ["on a page", "auf einer Seite"], of: (d) => d.seconds, fmt: duration, axis: durationAxis, counted: true },
    { key: "downloads", name: ["Downloads", "Downloads"], unit: ["downloads", "Downloads"], of: (d) => d.downloads, fmt: n0, axis: compact, counted: true },
    // A shared design's page followed: into the browser version, or into Bezzle on the Mac.
    { key: "shared", name: ["Shared designs", "Geteilte Designs"], unit: ["followed", "geöffnet"], of: (d) => d.shared, fmt: n0, axis: compact, counted: true },
];

/** A metric's value per day; null on the days before counting began, which were not counted rather than empty. */
const perDay = (rows, m, since) => rows.map((d) => (m.counted && d.day < since ? null : m.of(d)));

/** The figures' hairlines: two to a row (the fifth across both) below lg, one row of five above. */
const SEAMS = [
    "",
    "shadow-[inset_0.5px_0_0_var(--hairline)]",
    "max-lg:shadow-[inset_0_0.5px_0_var(--hairline)] lg:shadow-[inset_0.5px_0_0_var(--hairline)]",
    "max-lg:shadow-[inset_0.5px_0_0_var(--hairline),inset_0_0.5px_0_var(--hairline)] lg:shadow-[inset_0.5px_0_0_var(--hairline)]",
    "max-lg:col-span-2 max-lg:shadow-[inset_0_0.5px_0_var(--hairline)] lg:shadow-[inset_0.5px_0_0_var(--hairline)]",
];

function Overview({ data, metric, setMetric }) {
    const t = useT(), lang = useCode();
    const tot = data.totals, p = data.previous;
    const since = data.since.slice(0, 10);
    // A comparison only holds when the whole previous period was counted.
    const compared = since <= data.previousDaily[0].day;
    const notes = {
        visitors: tot.bounce != null ? t(`${Math.round(tot.bounce * 100)}% left after one page`, `${Math.round(tot.bounce * 100)}% gingen nach einer Seite`) : "",
        views: tot.visitors ? t(`${(tot.views / tot.visitors).toFixed(1)} a visitor`, `${(tot.views / tot.visitors).toFixed(1)} pro Besucher`) : "",
        seconds: tot.scroll != null ? t(`read ${tot.scroll}% of the way down`, `bis ${tot.scroll}% hinunter gelesen`) : "",
        downloads: t(`${percent(data.funnel.downloaded, tot.visitors)} of visitors`, `${percent(data.funnel.downloaded, tot.visitors)} der Besucher`),
        shared: data.funnel.link ? t(`from ${plural(data.funnel.link, lang, ["visitor", "visitors"])} with a link`, `von ${plural(data.funnel.link, lang, ["Besucher", "Besuchern"])} mit einem Link`) : t("no link opened", "kein Link geöffnet"),
    };
    const m = METRICS.find((x) => x.key === metric);
    return (
        <section aria-label={t("The period at a glance", "Der Zeitraum auf einen Blick")} {...rise} className={`${card} mt-5 overflow-hidden`}>
            <div className="grid grid-cols-2 lg:grid-cols-5">
                {METRICS.map((x, i) => {
                    const on = x.key === metric;
                    const values = perDay(data.daily, x, since);
                    return (
                        <button key={x.key} aria-pressed={on} onClick={() => setMetric(x.key)}
                            className={`group relative flex flex-col justify-start text-left px-6 max-[400px]:px-4 pt-6 pb-5 min-w-0 outline-none transition-colors duration-150 focus-visible:bg-ink/[0.04] ${on ? "" : "hover:bg-ink/[0.025]"} ${SEAMS[i]}`}>
                            <i aria-hidden="true" className={`absolute inset-x-0 top-0 h-[2.5px] bg-pencil origin-left transition-transform duration-300 ease-spring ${on ? "scale-x-100" : "scale-x-0"}`} />
                            <span className="flex items-center justify-between gap-3">
                                <span className={`${label} truncate`}>{t(...x.name)}</span>
                                <Spark values={values} on={on} />
                            </span>
                            <span className="mt-3 font-serif font-semibold tracking-[-0.03em] text-[34px] max-[400px]:text-[28px] sm:text-[40px] lg:text-[32px] xl:text-[38px] leading-none truncate">{x.fmt(tot[x.key], lang)}</span>
                            <span className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-ink-3">
                                {compared && <Delta now={tot[x.key]} before={p[x.key]} />}
                                <span className="text-pretty">{notes[x.key]}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
            <Trend key={metric} metric={m} data={data} since={since} compared={compared} />
        </section>
    );
}

/** A figure's days as a small line; the one the chart shows in green. */
function Spark({ values, on }) {
    const W = 52, H = 18;
    const top = Math.max(1, ...values.filter((v) => v != null));
    const pts = values.map((v, i) => (v == null ? null : [(i / Math.max(1, values.length - 1)) * W, H - 2 - (v / top) * (H - 4)]));
    return (
        <svg width={W} height={H} aria-hidden="true" className="shrink-0 overflow-visible max-sm:hidden">
            <path d={curve(pts)} fill="none" stroke={on ? "var(--pencil)" : "var(--ink-4)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-[stroke] duration-200" />
        </svg>
    );
}

/** The chosen figure a day: this period in green over a soft wash, the period before as a grey line, releases marked. */
function Trend({ metric, data, since, compared }) {
    const [box, W] = useWidth();
    const [at, setAt] = useState(null);
    const id = useId().replace(/[^\w-]/g, "");
    const t = useT(), lang = useCode();
    const name = t(...metric.name);
    const cur = perDay(data.daily, metric, since);
    const prev = compared || !metric.counted ? perDay(data.previousDaily, metric, since) : data.previousDaily.map(() => null);
    const hasPrev = prev.some((v) => v != null);
    const n = cur.length;
    const H = W && W < 560 ? 196 : 246, T = 40, B = 30, L = 46, R = 16;
    const pw = Math.max(1, W - L - R), ph = H - T - B;
    const known = [...cur, ...(hasPrev ? prev : [])].filter((v) => v != null);
    const { max, ticks } = scale(Math.max(0, ...known));
    const x = (i) => L + (n > 1 ? (i / (n - 1)) * pw : pw / 2);
    const y = (v) => T + ph - (v / max) * ph;
    const pts = cur.map((v, i) => (v == null ? null : [x(i), y(v)]));
    const prevPts = prev.map((v, i) => (v == null ? null : [x(i), y(v)]));
    const first = cur.findIndex((v) => v != null);
    const last = cur.findLastIndex((v) => v != null);
    const peak = cur.reduce((best, v, i) => (v != null && v > (cur[best] ?? -1) ? i : best), first);
    // Dates under the axis: every day for a week, every week for a month, every fortnight beyond; always today.
    const every = n <= 7 ? 1 : n <= 31 ? 7 : n <= 120 ? 15 : n <= 240 ? 30 : 60;
    const xTicks = [];
    for (let i = n - 1; i >= 0; i -= every) xTicks.push(i);
    const xText = (i) => (i === n - 1 && data.to === data.today ? t("Today", "Heute") : n <= 7 ? dayLabel(data.daily[i].day, lang, { weekday: "short" }) : dayLabel(data.daily[i].day, lang, { day: "numeric", month: "short" }));
    // Releases in the period, one mark a day named after the day's newest; the newest days claim their labels first.
    const byDay = new Map();
    for (const r of data.releases) {
        const i = data.daily.findIndex((d) => d.day === r.date);
        if (i >= 0) byDay.set(i, [...(byDay.get(i) ?? []), r.version].sort(newer));
    }
    const releases = [];
    for (const [i, versions] of [...byDay].sort((a, b) => b[0] - a[0])) {
        const w = versions[0].length * 6.6;
        const anchor = x(i) > W - R - w / 2 ? "end" : x(i) < L + w / 2 ? "start" : "middle";
        releases.push({ i, versions, w, anchor, text: !releases.some((o) => o.text && Math.abs(x(o.i) - x(i)) < (o.w + w) / 2 + 10) });
    }

    const pick = (clientX, rect) => setAt(clamp(Math.round(((clientX - rect.left - L) / pw) * (n - 1)), 0, n - 1));
    const onKey = (e) => {
        const moves = { ArrowLeft: -1, ArrowRight: 1, Home: -n, End: n };
        if (e.key === "Escape") { setAt(null); return; }
        if (!(e.key in moves)) return;
        e.preventDefault();
        setAt((a) => clamp((a ?? last) + moves[e.key], 0, n - 1));
    };
    const tipLeft = at != null && x(at) < W - 200;
    const over = data.custom ? periodName(data, lang) : t(`the last ${data.days} days`, `die letzten ${data.days} Tage`);

    return (
        <figure className="px-6 max-[400px]:px-3 pt-5 pb-5 shadow-[inset_0_0.5px_0_var(--hairline)] bg-panel">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <span className="text-[13px] font-medium">{name} {t("a day", "pro Tag")}</span>
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-ink-2">
                    <span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-[2px] rounded-full bg-pencil" />{periodName(data, lang)}</span>
                    {hasPrev && <span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-[2px] rounded-full bg-ink-4" />{t(`The ${data.days === 1 ? "day" : `${data.days} days`} before`, data.days === 1 ? "Der Tag davor" : `Die ${data.days} Tage davor`)}</span>}
                    {releases.length > 0 && <span className="inline-flex items-center gap-1.5"><i className="size-[7px] rotate-45 rounded-[1.5px] bg-ink-3" />{t("A release", "Eine Version")}</span>}
                </span>
            </figcaption>
            <div ref={box} className="relative mt-3 outline-none rounded-lg focus-visible:shadow-[0_0_0_2px_var(--pencil)]" tabIndex={0} role="img"
                aria-label={t(`${name} a day over ${over}. Use the arrow keys to read each day.`, `${name} pro Tag über ${over}. Mit den Pfeiltasten liest du jeden Tag.`)}
                onKeyDown={onKey} onFocus={() => setAt((a) => a ?? last)} onBlur={() => setAt(null)}>
                {W > 0 && (
                    <svg width={W} height={H} className="block touch-pan-y select-none" onPointerMove={(e) => pick(e.clientX, e.currentTarget.getBoundingClientRect())} onPointerLeave={() => setAt(null)}>
                        <defs>
                            <linearGradient id={`${id}-wash`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" style={{ stopColor: "var(--pencil)", stopOpacity: 0.2 }} />
                                <stop offset="1" style={{ stopColor: "var(--pencil)", stopOpacity: 0 }} />
                            </linearGradient>
                        </defs>
                        {first > 0 && (
                            <g>
                                <rect x={L} y={T} width={Math.max(0, x(first) - L)} height={ph} rx="6" className="fill-ink/[0.035]" />
                                {x(first) - L > 110 && <text x={L + (x(first) - L) / 2} y={T + ph / 2} textAnchor="middle" className="fill-ink-3 text-[11.5px]">{t("Not counted yet", "Noch nicht gezählt")}</text>}
                            </g>
                        )}
                        {ticks.map((v) => (
                            <g key={v}>
                                <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className={v ? "stroke-ink/[0.07]" : "stroke-ink/[0.16]"} strokeWidth="1" shapeRendering="crispEdges" />
                                <text x={L - 10} y={y(v)} dy="0.32em" textAnchor="end" className="fill-ink-3 text-[11px] tabular-nums">{metric.axis(v)}</text>
                            </g>
                        ))}
                        {releases.map((r) => (
                            <g key={r.i}>
                                <title>{`Bezzle ${r.versions.join(", ")}`}</title>
                                <line x1={x(r.i)} x2={x(r.i)} y1={T - 8} y2={T + ph} className="stroke-ink/[0.10]" strokeWidth="1" shapeRendering="crispEdges" />
                                <rect x={x(r.i) - 3.5} y={T - 11.5} width="7" height="7" rx="1.5" transform={`rotate(45 ${x(r.i)} ${T - 8})`} className="fill-ink-3" />
                                {r.text && <text x={r.anchor === "end" ? x(r.i) + 4 : r.anchor === "start" ? x(r.i) - 4 : x(r.i)} y={T - 22} textAnchor={r.anchor} className="fill-ink-2 text-[11px] font-medium tabular-nums">{r.versions[0]}</text>}
                            </g>
                        ))}
                        {hasPrev && <path d={curve(prevPts)} fill="none" className="stroke-ink-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
                        <g key={`${data.days}-${data.from}`}>
                            <path d={area(pts, T + ph)} fill={`url(#${id}-wash)`} className="animate-veil motion-reduce:animate-none" />
                            <path d={curve(pts)} fill="none" stroke="var(--pencil)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" className="animate-draw motion-reduce:animate-none" />
                        </g>
                        {peak >= 0 && cur[peak] > 0 && peak !== at && (
                            <text x={clamp(x(peak), L + 12, W - R - 12)} y={y(cur[peak]) - 11} textAnchor="middle" className="fill-ink-2 text-[11px] font-semibold tabular-nums">{metric.fmt(cur[peak], lang)}</text>
                        )}
                        {last >= 0 && at == null && <circle cx={x(last)} cy={y(cur[last])} r="4" fill="var(--pencil)" stroke="var(--panel)" strokeWidth="2" />}
                        {xTicks.map((i) => (
                            <text key={i} x={x(i)} y={H - 8} textAnchor={i === n - 1 ? "end" : x(i) - L < 24 ? "start" : "middle"} className="fill-ink-3 text-[11px] tabular-nums">{xText(i)}</text>
                        ))}
                        {at != null && (
                            <g pointerEvents="none">
                                <line x1={x(at)} x2={x(at)} y1={T} y2={T + ph} className="stroke-ink/30" strokeWidth="1" shapeRendering="crispEdges" />
                                {hasPrev && prev[at] != null && <circle cx={x(at)} cy={y(prev[at])} r="3.5" className="fill-ink-4" stroke="var(--panel)" strokeWidth="2" />}
                                {cur[at] != null && <circle cx={x(at)} cy={y(cur[at])} r="4.5" fill="var(--pencil)" stroke="var(--panel)" strokeWidth="2" />}
                            </g>
                        )}
                        <rect x={L} y={0} width={pw} height={H} fill="transparent" />
                    </svg>
                )}
                {at != null && W > 0 && (
                    <div aria-hidden="true" className="pointer-events-none absolute top-1 z-10" style={tipLeft ? { left: x(at) + 12 } : { right: W - x(at) + 12 }}>
                        <div className="rounded-xl bg-ink text-on-ink px-3 py-2.5 shadow-sheet text-[12px] leading-tight whitespace-nowrap">
                            <p className="font-medium">{dayLabel(data.daily[at].day, lang, { weekday: "long", day: "numeric", month: "long" })}</p>
                            <p className="mt-2 flex items-center gap-2">
                                <i className="w-3 h-[2px] rounded-full bg-pencil" />
                                {cur[at] == null ? <span className="text-on-ink/60">{t("not counted yet", "noch nicht gezählt")}</span> : <><span className="text-[15px] font-semibold tabular-nums">{metric.fmt(cur[at], lang)}</span><span className="text-on-ink/60">{t(...metric.unit)}</span></>}
                            </p>
                            {hasPrev && prev[at] != null && (
                                <p className="mt-1.5 flex items-center gap-2 text-on-ink/70">
                                    <i className="w-3 h-[2px] rounded-full bg-on-ink/35" /><span className="tabular-nums">{metric.fmt(prev[at], lang)}</span>
                                    <span className="text-on-ink/50">{dayLabel(data.previousDaily[at].day, lang, { day: "numeric", month: "short" })}</span>
                                </p>
                            )}
                        </div>
                    </div>
                )}
                {/* Hidden in a div, not on the table: a table will not shrink to sr-only's 1px, and a wide one pushes the page sideways on a phone. */}
                <div className="sr-only"><table>
                    <caption>{name} {t("a day", "pro Tag")}, {over}</caption>
                    <thead><tr><th>{t("Day", "Tag")}</th><th>{t("This period", "Dieser Zeitraum")}</th>{hasPrev && <th>{t("Period before", "Zeitraum davor")}</th>}</tr></thead>
                    <tbody>{data.daily.map((d, i) => <tr key={d.day}><td>{dayLabel(d.day, lang, { day: "numeric", month: "long" })}</td><td>{cur[i] == null ? t("not counted", "nicht gezählt") : metric.fmt(cur[i], lang)}</td>{hasPrev && <td>{prev[i] == null ? "-" : metric.fmt(prev[i], lang)}</td>}</tr>)}</tbody>
                </table></div>
            </div>
        </figure>
    );
}

/* ── The read ────────────────────────────────────────────────────────────── */

const MOODS = {
    growing: { name: ["Growing", "Wächst"], chip: "text-pencil bg-pencil-wash", icon: I.rise },
    steady: { name: ["Steady", "Stabil"], chip: "text-ink-2 shadow-chip", icon: null },
    slipping: { name: ["Slipping", "Rutscht ab"], chip: "text-warning bg-[color-mix(in_srgb,var(--warning)_10%,transparent)]", icon: I.fall },
    early: { name: ["Early days", "Noch früh"], chip: "text-ink-2 shadow-chip", icon: null },
};
/* An action's weight, as the model rates it (api/_views.php), as a chip. */
const IMPACT = { high: ["High impact", "Hohe Wirkung"], medium: ["Medium impact", "Mittlere Wirkung"], low: ["Low impact", "Geringe Wirkung"] };
const EFFORT = { small: ["Small effort", "Kleiner Aufwand"], medium: ["Medium effort", "Mittlerer Aufwand"], large: ["Large effort", "Grosser Aufwand"] };
/** gpt-6.1-sol → GPT-6.1 Sol */
function modelName(m = "") {
    const [, version, rest] = m.match(/^gpt-([\d.]+)-?(.*)$/i) ?? [];
    return version ? `GPT-${version}${rest ? ` ${rest.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}` : ""}` : m;
}

/**
 * The read and its numbers as Markdown, to paste into Claude Code in this repo: the model saw only the
 * counts, so the brief asks for each action to be checked against the code before anything changes.
 */
function forClaudeCode(r, at, data) {
    // The counts as insight_write sends them, with how the visits went (kept with the read); the network is the
    // admin's own and never part of the read.
    const numbers = { ...data, ...r.trails };
    delete numbers.now;
    delete numbers.previousDaily;
    delete numbers.network;
    // One line per field, and one per row of a list: still JSON, and a fraction of the lines of pretty-printing.
    const rows = (v) => (Array.isArray(v) && v.length ? `[\n${v.map((x) => `    ${JSON.stringify(x)}`).join(",\n")}\n  ]` : JSON.stringify(v));
    return [
        `# The read of bezzle.ch, last ${data.days} days (${data.from} to ${data.to})`,
        "",
        `The admin area's read of the site's own visitor numbers, written by ${modelName(r.model)} on ${at} (Zurich time). Work on it in this repo:`,
        "",
        "- The model saw the counts below (with `sessions` and `recordings`, totals from the Sessions and Heatmaps views), the commit messages of recent changes and the actions ticked off as done, never the code. Check each action against the repo first: some may be done already, others rest on a guess.",
        "- Pick the one action you would do first, say how, and wait for a go before editing anything.",
        "- Posts and e-mails are for the maker to send, with their texts in the admin area. Leave them out here, and say which.",
        "- The site's words are in four languages (`src/words.js`, the docs in `src/docs/<lang>/`): a change to its copy is made in all four, in the README's voice.",
        "- Small numbers are noise. With fewer than about 100 visitors, or when counting began only days ago, keep conclusions modest.",
        "- The site promises no tracking cookies and no third-party analytics, and the app collects no data at all. Nothing may break that: no pixels, no retargeting, no outside scripts, no accounts.",
        "- What each number means, and how the read was asked for: `INSIGHT_SYSTEM` and `analytics()` in `api/_views.php`, `trail_summary()` in `api/_trails.php`.",
        "",
        "## The read",
        "",
        `**${r.headline}** (${(MOODS[r.mood] ?? MOODS.steady).name[0].toLowerCase()})`,
        "",
        r.summary,
        "",
        "### What stands out",
        "",
        ...r.findings.map((f) => `- **${f.title}**${f.figure ? ` (${f.figure})` : ""}: ${f.detail}`),
        "",
        "### What to do next",
        "",
        ...r.actions.flatMap((a, i) => [
            `${i + 1}. **${a.title}** (${a.impact} impact, ${a.effort} effort${a.kind ? `, ${a.kind}` : ""})`, `   - Why: ${a.why}`, `   - How: ${a.how}`,
            ...(a.where ? [`   - Where: ${a.where}${a.url ? ` (${a.url})` : ""}`] : []),
            ...(a.body ? [`   - ${a.kind === "site" ? "Brief" : "Text"}: ${a.subject ? `${a.subject}. ` : ""}${a.body.replace(/\s*\n+\s*/g, " ")}`] : []),
            ...(a.link ? [`   - Link: ${a.link}`] : []),
            ...(a.check ? [`   - Check first: ${a.check}`] : []),
        ]),
        ...(r.watch ? ["", `**Next time:** ${r.watch}`] : []),
        "",
        "## The numbers",
        "",
        "As the admin area showed them when this was copied; today's counts may have grown since the read was written.",
        "",
        "```json",
        `{\n${Object.entries(numbers).map(([k, v]) => `  ${JSON.stringify(k)}: ${rows(v)}`).join(",\n")}\n}`,
        "```",
        "",
    ].join("\n");
}

/** Copies a text (or what a function gives at the moment of copying), and says so for a moment. `what` is in the page's language: "Copy title", "Titel kopieren". */
function Copy({ what, text, disabled = false, title, className = "" }) {
    const [done, setDone] = useState(false);
    const t = useT();
    const copy = async () => { try { await navigator.clipboard.writeText(typeof text === "function" ? text() : text); setDone(true); setTimeout(() => setDone(false), 1600); } catch { /* ignore */ } };
    return (
        <button onClick={copy} disabled={disabled} title={title} className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-lg text-[12px] font-medium whitespace-nowrap hover:bg-ink/6 disabled:opacity-40 transition-colors ${done ? "text-pencil" : "text-ink-2 hover:text-ink"} ${ring} ${className}`}>
            {done ? <><CheckMark size={11} />{t("Copied", "Kopiert")}</> : <><Icon d={I.copy} size={12} />{t(`Copy ${what}`, `${what} kopieren`)}</>}
        </button>
    );
}

/** A change to the site as a brief for Claude Code: the change, the page, the exact copy, and why the numbers call for it. */
const siteBrief = (a) => [
    `# ${a.title}`, "",
    `A change to bezzle.ch, from the admin area's read of the visitor numbers. Page: ${a.where || "see below"}.`, "",
    a.body, "",
    `Why: ${a.why}`,
    ...(a.check ? [`Check first: ${a.check}`] : []), "",
    "Check this against the repo first: it may be done already, or rest on a guess. Say how you would do it, and wait for a go before editing anything.", "",
].join("\n");

const KINDS = { post: ["Post", "Beitrag"], mail: ["E-mail", "E-Mail"], site: ["Brief for Claude Code", "Briefing für Claude Code"], other: ["To do", "Zu tun"] };

/** What an action hands over, ready to use: the place, the title and text to paste and the tagged link; for a change to the site, the brief. */
function Material({ a }) {
    const t = useT();
    const site = a.kind === "site";
    return (
        <div className="mt-3 max-w-[820px] rounded-xl bg-card shadow-[inset_0_0_0_0.5px_var(--hairline)] overflow-hidden">
            <div className="px-3.5 py-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-panel shadow-[inset_0_-0.5px_0_var(--hairline)]">
                <span className="min-w-0 flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                    <span className={label}>{t(...(KINDS[a.kind] ?? KINDS.other))}</span>
                    {a.where && (a.url ? <a href={a.url} target="_blank" rel="noreferrer" className={`text-[13px] font-medium text-ink underline decoration-ink-4 underline-offset-4 hover:decoration-ink rounded ${ring}`}>{a.where} ↗</a> : <span className="text-[13px] font-medium text-ink">{a.where}</span>)}
                </span>
                <span className="flex flex-wrap items-center gap-1">
                    {a.subject && <Copy what={t("title", "Titel")} text={a.subject} />}
                    <Copy what={site ? t("for Claude Code", "Für Claude Code") : t("text", "Text")} text={site ? siteBrief(a) : a.body} />
                    {a.link && <Copy what={t("link", "Link")} text={a.link} />}
                </span>
            </div>
            <div className="px-3.5 py-3 text-[13px]">
                {a.subject && <p className="font-medium text-ink">{a.subject}</p>}
                <p className={`whitespace-pre-wrap leading-[1.6] text-ink-2 ${a.subject ? "mt-1.5" : ""}`}>{a.body}</p>
                {a.link && <p className="mt-2 font-mono text-[12px] text-ink-3 break-all">{a.link}</p>}
                {a.check && <p className="mt-2.5 text-[12.5px] text-ink-3 text-pretty"><span className="font-medium text-ink-2">{t("Before you do: ", "Bevor du loslegst: ")}</span>{a.check}</p>}
            </div>
        </div>
    );
}

/**
 * An action ticked off, done or set aside, with a note on what came of it. The next read is told
 * (insight_write), builds on the note and does not suggest it again: the commits show the work on the
 * site, this shows the rest, such as a check in Stripe, a post or an e-mail. `chips` are the action's
 * weight, beside the buttons until it is ticked off.
 */
function Tick({ m, onTick, onUndo, chips }) {
    const t = useT(), lang = useCode();
    const [asking, setAsking] = useState(null);
    const [note, setNote] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState(null);
    const run = async (f) => {
        setBusy(true);
        setError(null);
        try { await f(); setAsking(null); setNote(""); } catch (e) { setError(e.message); } finally { setBusy(false); }
    };
    const quiet = `inline-flex items-center gap-1.5 h-7 px-2.5 rounded-lg text-[12px] font-medium text-ink-2 hover:text-ink hover:bg-ink/6 disabled:opacity-40 transition-colors ${ring}`;
    const fail = error && <p className="mt-2 text-[12.5px] text-warning">{error}</p>;
    if (m) {
        return (
            <div className="mt-1.5">
                <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px]">
                    <span className={`inline-flex items-center gap-1.5 font-medium ${m.status === "done" ? "text-pencil" : "text-ink-2"}`}>{m.status === "done" ? <><CheckMark size={11} />{t("Done", "Erledigt")}</> : t("Set aside", "Beiseitegelegt")}</span>
                    <span className="text-ink-3" title={m.at}>{ago(m.at, lang)}</span>
                    <button onClick={() => run(onUndo)} disabled={busy} className={`${quiet} -ml-1`}>{t("Undo", "Rückgängig")}</button>
                </p>
                {m.note && <p className="mt-1 max-w-[760px] whitespace-pre-wrap text-[13px] leading-[1.55] text-ink-2 text-pretty">{m.note}</p>}
                {fail}
            </div>
        );
    }
    const save = () => run(() => onTick(asking, note));
    return (
        <>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="flex flex-wrap gap-1.5">{chips}</p>
                {!asking && (
                    <span className="flex flex-wrap gap-1">
                        <button onClick={() => setAsking("done")} className={quiet}><CheckMark size={11} />{t("Done", "Erledigt")}</button>
                        <button onClick={() => setAsking("skipped")} className={quiet}>{t("Set aside", "Beiseitelegen")}</button>
                    </span>
                )}
            </div>
            {asking && (
                <div className="mt-3 max-w-[820px]">
                    <textarea autoFocus value={note} onChange={(e) => setNote(e.target.value)} rows={2} maxLength={500}
                        onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); save(); } if (e.key === "Escape") setAsking(null); }}
                        aria-label={asking === "done" ? t("What came of it", "Was dabei herauskam") : t("Why not", "Warum nicht")}
                        placeholder={asking === "done"
                            ? t("What came of it, if anything: what you found, where it went up, what you changed.", "Was dabei herauskam, falls etwas: was du gefunden hast, wo es online ging, was du geändert hast.")
                            : t("Why not, if you like.", "Warum nicht, wenn du magst.")}
                        className="block w-full resize-none [field-sizing:content] min-h-[68px] px-3.5 py-3 rounded-xl bg-card text-[13.5px] leading-[1.5] text-ink placeholder:text-ink-4 outline-none shadow-field focus:shadow-field-focus transition-shadow" />
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11.5px] text-ink-4">{t("The next read is told, and builds on it.", "Die nächste Deutung erfährt es und baut darauf auf.")}</span>
                        <span className="flex items-center gap-1">
                            <button onClick={() => setAsking(null)} className={quiet}>{t("Cancel", "Abbrechen")}</button>
                            <button onClick={save} disabled={busy} className="btn btn-ink btn-small !h-7 !px-3 !text-[12px] !rounded-[8px]">{asking === "done" ? t("Mark done", "Als erledigt markieren") : t("Set aside", "Beiseitelegen")}</button>
                        </span>
                    </div>
                    {fail}
                </div>
            )}
        </>
    );
}

/**
 * The model's read of the period: where things stand, what stands out, what to do, each action with its
 * material ready to use, and ticked off once done. Kept on the server; a new one is written the first time
 * the page is opened on a new day, or when asked. Folded to its headline and mood until opened, so the
 * counts below stay near.
 */
function Read({ days, data }) {
    const [s, setS] = useState({ status: "loading" });
    const [open, setOpen] = useState(false);
    const body = useId();
    const asked = useRef(new Set());
    const current = useRef(days);
    current.current = days;
    const t = useT(), lang = useCode();

    const write = useCallback(async (d) => {
        setS((x) => ({ ...x, status: "writing", error: null }));
        try {
            const r = await admin("insight", { days: d });
            if (current.current === d) setS({ status: "ready", ...r });
        } catch (e) {
            if (current.current === d) setS((x) => ({ ...x, status: x.read ? "ready" : "error", error: e.message }));
        }
    }, []);

    useEffect(() => {
        let gone = false;
        setS({ status: "loading" });
        admin("insight", undefined, `&days=${days}`).then((r) => {
            if (gone) return;
            if (!r.configured) { setS({ status: "off" }); return; }
            setS({ status: "ready", ...r });
            const today = r.at && r.at.slice(0, 10) === localDay();
            if (!today && !asked.current.has(days)) { asked.current.add(days); write(days); }
        }).catch((e) => { if (!gone) setS({ status: "error", error: e.message }); });
        return () => { gone = true; };
    }, [days, write]);

    const frame = `${card} mt-6 relative overflow-hidden`;
    // A faint wash of the pencil's blue from the top right: the one card on the page that is written, not counted.
    const wash = <i aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_70%_at_100%_0%,color-mix(in_srgb,var(--pencil)_9%,transparent),transparent_62%)]" />;
    const name = t("The read", "Die Deutung");
    const head = (aside) => (
        <div className="relative flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2"><Icon d={I.sparkle} size={14} className="text-pencil" /><span className={label}>{name}</span></p>
            {aside}
        </div>
    );

    if (s.status === "loading") return <section className={frame}>{wash}<div className="relative px-8 max-sm:px-5 py-5">{head(null)}<i className="mt-3 block h-5 w-3/5 rounded-lg bg-ink/[0.06]" /></div></section>;
    if (s.status === "off") {
        return (
            <section className={frame}>{wash}
                <div className="relative px-8 max-sm:px-5 py-5">
                    {head(null)}
                    <p className="mt-3 max-w-[760px] text-[14px] text-ink-2 text-pretty">{t(
                        <>A model can read these numbers for you once a day: set the <code className="font-mono text-[12.5px]">OPENAI_API_KEY</code> secret and deploy, and it writes here where things stand and what to do next, from the counts and the site's recent changes.</>,
                        <>Ein Modell kann diese Zahlen einmal am Tag für dich deuten: setz das Secret <code className="font-mono text-[12.5px]">OPENAI_API_KEY</code> und deploye, und es schreibt hier, wo die Dinge stehen und was als Nächstes zu tun ist, aus den Zahlen und den letzten Änderungen an der Website.</>,
                    )}</p>
                </div>
            </section>
        );
    }
    const r = s.read;
    if (!r) {
        return (
            <section className={frame}>{wash}
                <div className="relative px-8 max-sm:px-5 py-5">
                    {head(s.status === "error" && <button onClick={() => write(days)} className={`text-[12.5px] font-medium text-ink-2 hover:text-ink rounded ${ring}`}>{t("Try again", "Noch einmal")}</button>)}
                    {s.status === "error" ? (
                        <p className="mt-3 text-[14px] text-warning text-pretty">{s.error}</p>
                    ) : (
                        <p className={`mt-3 font-serif text-[20px] tracking-[-0.015em] ${shimmer}`}>{t(`Reading the last ${days} days…`, `Deutet die letzten ${days} Tage…`)}</p>
                    )}
                </div>
            </section>
        );
    }

    const mood = MOODS[r.mood] ?? MOODS.steady;
    const writing = s.status === "writing";
    // An action of this read is ticked off when one of that title was, after the read was written: a later read
    // that suggests it again, with a new reason, starts open.
    const tickOf = (a) => (s.done ?? []).find((d) => d.title === a.title && d.at >= s.at);
    const ticked = (list) => setS((x) => ({ ...x, done: list }));
    const tick = async (a, status, note) => ticked((await admin("mark", { action: { title: a.title, kind: a.kind, where: a.where, how: a.how }, status, note })).done);
    const untick = async (id) => ticked((await admin("unmark", { id })).done);
    return (
        <section aria-label={name} aria-busy={writing} className={frame}>{wash}
            <div className={`relative px-8 max-sm:px-5 pt-5 ${open ? "pb-8" : "pb-5"}`}>
                {/* Until opened, the card is its headline and mood: one button, so there is one thing to press. */}
                <button aria-expanded={open} aria-controls={open ? body : undefined} onClick={() => setOpen(!open)} className={`group block w-full text-left rounded-lg ${ring}`}>
                    <span className="flex items-center justify-between gap-3">
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="flex items-center gap-2"><Icon d={I.sparkle} size={14} className="text-pencil" /><span className={label}>{name}</span></span>
                            <span className={`inline-flex items-center gap-1 h-6 px-2.5 rounded-full text-[12px] font-medium ${mood.chip}`}>{mood.icon && <Icon d={mood.icon} size={11} />}{t(...mood.name)}</span>
                            <span className="text-[12px] text-ink-3" title={s.at}>{writing ? <span className={shimmer}>{t("Writing a new read…", "Schreibt eine neue Deutung…")}</span> : <>{modelName(r.model)} · {ago(s.at, lang)}</>}</span>
                        </span>
                        <span className="shrink-0 size-7 rounded-lg inline-flex items-center justify-center text-ink-3 transition-colors group-hover:text-ink group-hover:bg-ink/6">
                            <Icon d={I.chevron} size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                        </span>
                    </span>
                    <span className={`mt-3 block font-serif font-semibold tracking-[-0.022em] text-pretty ${open ? "text-[27px] sm:text-[31px] leading-[1.14] text-balance" : "text-[18px] sm:text-[20px] leading-[1.25]"}`}>{r.headline}</span>
                </button>
                {s.error && <p className="relative mt-3 text-[12.5px] text-warning">{t("A new read failed", "Eine neue Deutung ist fehlgeschlagen")}: {s.error}</p>}
                {open && <div id={body} className={`transition-opacity duration-300 ${writing ? "opacity-45" : ""}`}>
                    <p className="mt-3.5 max-w-[760px] text-[15.5px] leading-[1.6] text-ink-2 text-pretty">{r.summary}</p>

                    <div className="mt-8">
                        <h3 className={label}>{t("What stands out", "Was auffällt")}</h3>
                        <ul className="mt-2 grid gap-x-10 lg:grid-cols-2">
                            {r.findings.map((f, i) => (
                                <li key={i} className="flex items-start justify-between gap-5 py-3.5 shadow-[inset_0_-0.5px_0_var(--hairline)]">
                                    <span className="min-w-0">
                                        <span className="block text-[14px] font-medium">{f.title}</span>
                                        <span className="mt-1 block text-[13px] leading-[1.55] text-ink-2 text-pretty">{f.detail}</span>
                                    </span>
                                    {f.figure && <span className="shrink-0 font-serif font-semibold tracking-[-0.02em] text-[19px] leading-tight text-right max-w-[38%]">{f.figure}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className={label}>{t("What to do next", "Was als Nächstes zu tun ist")}</h3>
                        <ol className="mt-3 space-y-3">
                            {r.actions.map((a, i) => {
                                const m = tickOf(a);
                                return (
                                    // Ticked off, an action folds to its title and what came of it.
                                    <li key={i} className={`relative flex gap-4 p-4 rounded-2xl shadow-[inset_0_0_0_0.5px_var(--hairline)] ${m ? "" : "bg-paper/60"}`}>
                                        <span aria-hidden="true" className="font-serif font-semibold text-[22px] leading-none text-pencil tabular-nums w-4 shrink-0">{m?.status === "done" ? <CheckMark size={15} className="mt-0.5" /> : i + 1}</span>
                                        <div className="min-w-0 flex-1">
                                            <p className={`text-[14.5px] font-semibold leading-snug text-pretty ${m ? "text-ink-3" : ""}`}>{a.title}</p>
                                            {!m && <>
                                                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-2 text-pretty">{a.why}</p>
                                                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink text-pretty">{a.how}</p>
                                                {a.body && <Material a={a} />}
                                            </>}
                                            <Tick m={m} onTick={(status, note) => tick(a, status, note)} onUndo={() => untick(m.id)} chips={<>
                                                <span className={`inline-flex items-center h-[22px] px-2 rounded-full text-[11.5px] font-medium ${a.impact === "high" ? "text-pencil bg-pencil-wash" : "text-ink-2 shadow-chip"}`}>{t(...(IMPACT[a.impact] ?? [`${a.impact} impact`, `${a.impact} Wirkung`]))}</span>
                                                <span className="inline-flex items-center h-[22px] px-2 rounded-full text-[11.5px] font-medium text-ink-2 shadow-chip">{t(...(EFFORT[a.effort] ?? [`${a.effort} effort`, `${a.effort} Aufwand`]))}</span>
                                            </>} />
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    {r.watch && <p className="mt-8 pt-5 shadow-[inset_0_0.5px_0_var(--hairline)] font-serif italic text-[16px] text-ink-2 text-pretty"><span className="not-italic font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3 mr-2.5">{t("Next time", "Nächstes Mal")}</span>{r.watch}</p>}
                    <div className="mt-7 pt-5 shadow-[inset_0_0.5px_0_var(--hairline)] flex flex-wrap items-center justify-end gap-2 text-[12px]">
                        {/* Copying is off while a new read is written, or while the numbers are still those of the period before. */}
                        <Copy what={t("the read for Claude Code", "Deutung für Claude Code")} text={() => forClaudeCode({ ...s.read, actions: s.read.actions.filter((a) => !tickOf(a)) }, s.at, data)} disabled={writing || data.days !== days} title={t("The whole read and its numbers as Markdown, with a short brief, to paste into Claude Code", "Die ganze Deutung und ihre Zahlen als Markdown, mit einem kurzen Briefing, zum Einfügen in Claude Code")} />
                        <button onClick={() => write(days)} disabled={writing} className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-lg font-medium text-ink-2 hover:text-ink hover:bg-ink/6 disabled:opacity-40 transition-colors ${ring}`}>
                            <Icon d={I.redo} size={12} className={writing ? "animate-spin motion-reduce:animate-none" : ""} />{t("Read again", "Neu deuten")}
                        </button>
                    </div>
                </div>}
            </div>
        </section>
    );
}

/* ── From a visit to Bezzle ──────────────────────────────────────────────── */

function Funnel({ data }) {
    const t = useT();
    const f = data.funnel;
    const get = [[t("Visitors", "Besucher"), f.visitors], [t("Saw the download", "Download gesehen"), f.downloadPage], [t("Downloaded", "Heruntergeladen"), f.downloaded]];
    const shared = [[t("Came with a link", "Kamen mit Link"), f.link], [t("In the browser", "Im Browser"), f.app], [t("In Bezzle", "In Bezzle"), f.opened]];
    return (
        <Panel title={t("From a visit to Bezzle", "Vom Besuch zu Bezzle")} sub={t("Each step as a share of the one before it.", "Jeder Schritt als Anteil des vorherigen.")}
            aside={
                <dl className="flex gap-6 sm:text-right">
                    {[[t("download", "laden"), percent(f.downloaded, f.visitors)], [t("follow a link", "folgen einem Link"), percent(f.app + f.opened, f.link)]].map(([what, share]) => (
                        <div key={what} className="flex flex-col-reverse">
                            <dt className="mt-1.5 text-[11.5px] text-ink-3">{what}</dt>
                            <dd className="font-serif font-semibold tracking-[-0.02em] text-[28px] leading-none tabular-nums">{share}</dd>
                        </div>
                    ))}
                </dl>
            }>
            <Steps steps={get} />
            <h3 className={`mt-7 mb-2 ${label}`}>{t("A shared design", "Ein geteiltes Design")}</h3>
            <Steps steps={shared} parallel />
            <p className="mt-5 text-[12px] text-ink-3 text-pretty">{t(
                "A shared design's link lands on its page, which opens it in Bezzle on a Mac, or live in the browser version without one; some do both.",
                "Der Link eines geteilten Designs landet auf seiner Seite, die es in Bezzle auf dem Mac öffnet oder ohne Mac live in der Browser-Version; manche tun beides.",
            )}</p>
        </Panel>
    );
}

/** Funnel steps: each bar the share of the first, its ghost the step before, so the drop shows; `parallel` steps are each a share of the first. */
function Steps({ steps, parallel = false }) {
    const t = useT(), lang = useCode();
    const all = steps[0][1] || 0;
    return (
        <ol className="space-y-2.5">
            {steps.map(([name, value], i) => {
                const before = i ? steps[parallel ? 0 : i - 1][1] : null;
                const w = (v) => (all ? `max(${v > 0 ? 3 : 0}px, ${(v / all) * 100}%)` : "0");
                return (
                    <li key={name} className="grid grid-cols-[128px_minmax(0,1fr)_50px_56px] max-sm:grid-cols-[104px_minmax(0,1fr)_44px_48px] items-center gap-3">
                        <span className="text-[13px] text-ink-2 truncate">{name}</span>
                        <span className="relative h-5">
                            {before != null && <i className="absolute inset-y-0 left-0 rounded-r-[4px] bg-ink/[0.055]" style={{ width: w(before) }} />}
                            <i className="absolute inset-y-0 left-0 rounded-r-[4px] bg-pencil transition-[width] duration-500 ease-spring" style={{ width: w(value) }} />
                        </span>
                        <span className="text-right text-[13px] font-semibold tabular-nums">{n0(value, lang)}</span>
                        <span className="text-right text-[12px] text-ink-3 tabular-nums" title={before != null ? t(`${n0(value, lang)} of ${n0(before, lang)}`, `${n0(value, lang)} von ${n0(before, lang)}`) : undefined}>{before != null ? percent(value, before) : ""}</span>
                    </li>
                );
            })}
        </ol>
    );
}

/* ── Where they come from ────────────────────────────────────────────────── */

function Sources({ data }) {
    const [tab, setTab] = useState("channels");
    const t = useT();
    const tabs = [["channels", t("Channels", "Kanäle")], ["sites", t("Sites", "Websites")], ...(data.campaigns.length ? [["campaigns", t("Campaigns", "Kampagnen")]] : [])];
    const rows = tab === "channels"
        ? data.channels.map((c) => ({ key: c.channel, name: channelName(c.channel, t), note: CHANNELS[c.channel] && t(...CHANNELS[c.channel].note), glyph: <Icon d={I[c.channel] ?? I.Referral} size={14} />, visitors: c.visitors, downloaded: c.downloaded }))
        : tab === "sites"
            ? data.referrers.map((r) => ({ key: r.host, name: r.host, note: channelName(r.channel, t), glyph: <span className="font-serif text-[13px] font-semibold uppercase">{r.host[0]}</span>, visitors: r.visitors, downloaded: r.downloaded }))
            : data.campaigns.map((c) => ({ key: c.source, name: c.source, glyph: <Icon d={I.Campaign} size={14} />, visitors: c.visitors, downloaded: c.downloaded }));
    const total = data.channels.reduce((s, c) => s + c.visitors, 0);
    return (
        <Panel title={t("Where they come from", "Woher sie kommen")} sub={t("Where each visit began, and how many of those visitors downloaded Bezzle that day.", "Wo jeder Besuch begann, und wie viele dieser Besucher Bezzle am selben Tag geladen haben.")}
            aside={<Segments small name={t("Show", "Anzeigen")} value={tab} options={tabs} onChange={setTab} />}>
            <Bars rows={rows} total={total} empty={tab === "sites" ? t("No visits from other sites yet.", "Noch keine Besuche von anderen Websites.") : t("Nothing yet.", "Noch nichts.")} />
        </Panel>
    );
}

/** A ranked list with one bar per row in the chart's green: name, bar, visitors, and the share who downloaded. */
function Bars({ rows, total, empty, max = 8 }) {
    const [all, setAll] = useState(false);
    const t = useT(), lang = useCode();
    const top = Math.max(1, ...rows.map((r) => r.visitors));
    const shown = all ? rows : rows.slice(0, max);
    if (!rows.length) return <p className="py-8 text-center text-[13.5px] text-ink-3">{empty}</p>;
    return (
        <>
            <div className={`grid grid-cols-[minmax(0,1fr)_minmax(48px,28%)_68px_76px] max-sm:grid-cols-[minmax(0,1fr)_60px_72px] gap-x-3 pb-2 shadow-[inset_0_-0.5px_0_var(--hairline)] ${label}`}>
                <span /><span className="max-sm:hidden" /><span className="text-right">{t("Visitors", "Besucher")}</span><span className="text-right" title={t("Of these visitors, the share who downloaded Bezzle the same day", "Der Anteil dieser Besucher, der Bezzle am selben Tag geladen hat")}>Download</span>
            </div>
            <ul>
                {shown.map((r) => (
                    <li key={r.key} className="grid grid-cols-[minmax(0,1fr)_minmax(48px,28%)_68px_76px] max-sm:grid-cols-[minmax(0,1fr)_60px_72px] items-center gap-x-3 py-2.5 shadow-[inset_0_-0.5px_0_var(--hairline)] last:shadow-none">
                        <span className="flex items-center gap-2.5 min-w-0">
                            <span aria-hidden="true" className="shrink-0 size-7 rounded-full bg-well shadow-well inline-flex items-center justify-center text-ink-2">{r.glyph}</span>
                            <span className="min-w-0">
                                <span className="block truncate text-[13.5px] font-medium">{r.name}</span>
                                {r.note && <span className="block truncate text-[11.5px] text-ink-3">{r.note}</span>}
                            </span>
                        </span>
                        <span className="max-sm:hidden h-1.5 rounded-full bg-ink/[0.05] overflow-hidden" title={percent(r.visitors, total)}>
                            <i className="block h-full rounded-full bg-pencil transition-[width] duration-500 ease-spring" style={{ width: `${(r.visitors / top) * 100}%` }} />
                        </span>
                        <span className="text-right text-[13px] font-semibold tabular-nums">{n0(r.visitors, lang)}<span className="block text-[11px] font-normal text-ink-3">{percent(r.visitors, total)}</span></span>
                        <span className="text-right text-[13px] tabular-nums text-ink-2">{r.downloaded ? percent(r.downloaded, r.visitors) : <span className="text-ink-4">-</span>}</span>
                    </li>
                ))}
            </ul>
            {rows.length > max && <button onClick={() => setAll(!all)} className={`mt-3 text-[12.5px] font-medium text-ink-2 hover:text-ink rounded ${ring}`}>{all ? t("Show fewer", "Weniger zeigen") : t(`Show all ${rows.length}`, `Alle ${rows.length} zeigen`)}</button>}
        </>
    );
}

/* ── What they read ──────────────────────────────────────────────────────── */

function Pages({ data, className }) {
    const [all, setAll] = useState(false);
    const t = useT(), lang = useCode();
    const pages = data.pages;
    const top = Math.max(1, ...pages.map((p) => p.views));
    const shown = all ? pages : pages.slice(0, 10);
    const cols = "grid grid-cols-[minmax(0,1fr)_64px_64px_64px_72px_92px] max-md:grid-cols-[minmax(0,1fr)_56px_64px] items-center gap-x-4";
    return (
        <Panel className={className} title={t("What they read", "Was sie lesen")} sub={t("Pages by views. Landed: visits that began on the page. Time: how long it was read. Read: how far down, on average.", "Seiten nach Aufrufen. Gelandet: Besuche, die auf der Seite begannen. Zeit: wie lange sie gelesen wurde. Gelesen: wie weit hinunter, im Schnitt.")}>
            <div className={`${cols} pb-2 shadow-[inset_0_-0.5px_0_var(--hairline)] ${label}`}>
                <span>{t("Page", "Seite")}</span><span className="text-right">{t("Views", "Aufrufe")}</span><span className="text-right max-md:hidden">{t("Visitors", "Besucher")}</span><span className="text-right max-md:hidden">{t("Landed", "Gelandet")}</span><span className="text-right">{t("Time", "Zeit")}</span><span className="max-md:hidden">{t("Read", "Gelesen")}</span>
            </div>
            <ul>
                {shown.map((p) => (
                    <li key={p.path} className={`${cols} py-3 shadow-[inset_0_-0.5px_0_var(--hairline)] last:shadow-none`}>
                        <span className="min-w-0">
                            <span className="flex items-center gap-2 min-w-0">
                                <span className="truncate text-[13.5px] font-medium">{pageName(p.path, lang)}</span>
                                {p.missing && <span className="shrink-0 inline-flex items-center h-5 px-1.5 rounded-full text-[11px] font-medium text-warning bg-[color-mix(in_srgb,var(--warning)_10%,transparent)]">{t("Not found", "Nicht gefunden")}</span>}
                            </span>
                            <span className="mt-0.5 flex items-center gap-2 text-[11.5px] text-ink-3 min-w-0">
                                <code className="font-mono truncate">{p.path}</code>
                                {["de", "fr", "it"].filter((c) => p.langs?.[c] > 0).map((c) => <span key={c} className="shrink-0 uppercase text-[10.5px] font-semibold tracking-[0.04em] max-sm:hidden" title={t(`Views of the page in ${SITE_LANGS[c][0]}`, `Aufrufe der Seite auf ${SITE_LANGS[c][1]}`)}>{c} {percent(p.langs[c], p.views)}</span>)}
                            </span>
                            <i aria-hidden="true" className="mt-2 block h-[3px] rounded-full bg-pencil/70" style={{ width: `${Math.max(1.5, (p.views / top) * 100)}%` }} />
                        </span>
                        <span className="text-right text-[13px] font-semibold tabular-nums">{n0(p.views, lang)}</span>
                        <span className="text-right text-[13px] tabular-nums text-ink-2 max-md:hidden">{n0(p.visitors, lang)}</span>
                        <span className="text-right text-[13px] tabular-nums text-ink-2 max-md:hidden">{n0(p.entries, lang)}</span>
                        <span className="text-right text-[13px] tabular-nums text-ink-2">{duration(p.seconds)}</span>
                        <span className="max-md:hidden flex items-center gap-2">
                            <span className="flex-1 h-1.5 rounded-full bg-ink/[0.06] overflow-hidden"><i className="block h-full rounded-full bg-pencil" style={{ width: `${p.scroll ?? 0}%` }} /></span>
                            <span className="w-8 text-right text-[12px] tabular-nums text-ink-3">{p.scroll == null ? "-" : `${p.scroll}%`}</span>
                        </span>
                    </li>
                ))}
            </ul>
            {!pages.length && <p className="py-8 text-center text-[13.5px] text-ink-3">{t("No pages viewed in this period.", "Keine Seitenaufrufe in diesem Zeitraum.")}</p>}
            {pages.length > 10 && <button onClick={() => setAll(!all)} className={`mt-3 text-[12.5px] font-medium text-ink-2 hover:text-ink rounded ${ring}`}>{all ? t("Show the top ten", "Die ersten zehn zeigen") : t(`Show all ${pages.length}`, `Alle ${pages.length} zeigen`)}</button>}
        </Panel>
    );
}

/* ── What they read it on ────────────────────────────────────────────────── */

// Each device keeps its tone whatever its rank: the Mac in green, the rest in greys.
const TONES = { Mac: "var(--pencil)", iPhone: "rgb(var(--ink-rgb) / 0.42)", iPad: "rgb(var(--ink-rgb) / 0.30)", Windows: "rgb(var(--ink-rgb) / 0.22)", Android: "rgb(var(--ink-rgb) / 0.16)", Linux: "rgb(var(--ink-rgb) / 0.11)", ChromeOS: "rgb(var(--ink-rgb) / 0.08)", Other: "rgb(var(--ink-rgb) / 0.06)" };
const ORDER = Object.keys(TONES);

function Devices({ data }) {
    const t = useT(), lang = useCode();
    const devices = [...data.devices].sort((a, b) => ORDER.indexOf(a.device) - ORDER.indexOf(b.device));
    const total = devices.reduce((s, d) => s + d.visitors, 0);
    const mac = devices.find((d) => d.device === "Mac")?.visitors ?? 0;
    const macDl = devices.find((d) => d.device === "Mac")?.downloaded ?? 0;
    const otherDl = devices.reduce((s, d) => s + (d.device === "Mac" ? 0 : d.downloaded), 0);
    const browsers = data.browsers.slice(0, 5);
    const btotal = data.browsers.reduce((s, b) => s + b.visitors, 0);
    // The devices are named by the API (api/_views.php); only its catch-all needs translating.
    const deviceName = (d) => (d === "Other" ? t("Other", "Andere") : d);
    const others = total - mac;
    return (
        <Panel title={t("What they read it on", "Worauf sie lesen")} sub={t("Bezzle runs on a Mac with macOS 26; everyone else can read about it, and follow a shared design in the browser.", "Bezzle läuft auf einem Mac mit macOS 26; alle anderen können darüber lesen und ein geteiltes Design im Browser verfolgen.")}>
            <p className="flex items-baseline gap-3">
                <span className="font-serif font-semibold tracking-[-0.03em] text-[44px] leading-none">{percent(mac, total)}</span>
                <span className="text-[13.5px] text-ink-2">{t("on a Mac", "auf einem Mac")}</span>
            </p>
            <p className="mt-2 text-[12.5px] text-ink-3 text-pretty">{others > 0
                ? t(`${plural(others, lang, ["visitor", "visitors"])} came on something Bezzle doesn't run on.`, `${plural(others, lang, ["Besucher", "Besucher"])} ${others === 1 ? "kam" : "kamen"} auf etwas, worauf Bezzle nicht läuft.`)
                : t("Every visitor came on a Mac.", "Jeder Besucher kam auf einem Mac.")}</p>
            <div className="mt-5 flex h-3.5 gap-[2px] rounded-[5px] overflow-hidden" role="img" aria-label={devices.map((d) => `${deviceName(d.device)} ${percent(d.visitors, total)}`).join(", ")}>
                {devices.map((d) => <i key={d.device} title={`${deviceName(d.device)}: ${percent(d.visitors, total)}`} className="block h-full transition-[flex-grow] duration-500 ease-spring" style={{ flexGrow: d.visitors, flexBasis: 0, background: TONES[d.device] ?? TONES.Other }} />)}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-6">
                {devices.map((d) => (
                    <li key={d.device} className="flex items-center gap-2.5 py-2 shadow-[inset_0_-0.5px_0_var(--hairline)] text-[13px]">
                        <i className="size-2.5 rounded-[3px] shrink-0" style={{ background: TONES[d.device] ?? TONES.Other }} />
                        <span className={`flex-1 truncate ${d.device === "Mac" ? "font-medium" : "text-ink-2"}`}>{deviceName(d.device)}</span>
                        <span className="tabular-nums font-medium">{percent(d.visitors, total)}</span>
                    </li>
                ))}
            </ul>
            {mac > 0 && (
                <p className="mt-4 text-[12.5px] text-ink-2 text-pretty">
                    <span className="font-medium text-ink tabular-nums">{percent(macDl, mac)}</span> {t("of Mac visitors downloaded Bezzle", "der Mac-Besucher haben Bezzle geladen")}{others > 0 && <>, {t("against", "gegenüber")} <span className="font-medium text-ink tabular-nums">{percent(otherDl, others)}</span> {t("on everything else", "auf allem anderen")}</>}.
                </p>
            )}
            {browsers.length > 0 && (
                <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-ink-3">
                    <span className={label}>{t("Browsers", "Browser")}</span>
                    {browsers.map((b) => <span key={b.browser}>{b.browser} <span className="text-ink-2 tabular-nums">{percent(b.visitors, btotal)}</span></span>)}
                </p>
            )}
        </Panel>
    );
}

/* ── Where they are ──────────────────────────────────────────────────────── */

/** A time zone's offset from UTC today, in hours ("Asia/Kolkata" → 5.5). */
function offsetOf(zone) {
    try {
        const name = new Intl.DateTimeFormat("en-US", { timeZone: zone, timeZoneName: "shortOffset" }).formatToParts(new Date()).find((p) => p.type === "timeZoneName")?.value ?? "";
        const m = name.match(/^GMT(?:([+-])(\d{1,2})(?::(\d{2}))?)?$/);
        return m ? (m[1] === "-" ? -1 : 1) * (Number(m[2] ?? 0) + Number(m[3] ?? 0) / 60) : null;
    } catch { return null; }
}
// Cities named under the strip, in the order they claim their place.
const LANDMARKS = ["Europe/Zurich", "America/New_York", "America/Los_Angeles", "Asia/Tokyo", "Australia/Sydney", "Asia/Kolkata", "Europe/London", "America/Sao_Paulo"];
const FIRST = -11, LAST = 13;

function Places({ data }) {
    const [box, W] = useWidth();
    const [col, setCol] = useState(null);
    const t = useT(), lang = useCode();
    const buckets = useMemo(() => {
        const b = Array.from({ length: LAST - FIRST + 1 }, (_, k) => ({ offset: FIRST + k, visitors: 0, zones: [] }));
        for (const z of data.zones) {
            const o = offsetOf(z.zone);
            if (o == null) continue;
            const at = b[clamp(Math.round(o), FIRST, LAST) - FIRST];
            at.visitors += z.visitors;
            at.zones.push(z);
        }
        return b;
    }, [data.zones]);
    const top = Math.max(1, ...buckets.map((b) => b.visitors));
    const H = 112, B = 34;
    const cw = W / buckets.length;
    const bw = Math.max(4, Math.min(16, cw - 4));
    const cx = (k) => k * cw + cw / 2;
    const marks = [];
    for (const z of LANDMARKS) {
        const o = offsetOf(z);
        if (o == null) continue;
        const k = clamp(Math.round(o), FIRST, LAST) - FIRST;
        const width = city(z).length * 6.4 + 10;
        if (marks.some((m) => Math.abs(cx(m.k) - cx(k)) < (m.width + width) / 2)) continue;
        marks.push({ k, name: city(z), width });
    }
    const zoned = buckets.reduce((s, b) => s + b.visitors, 0);
    const langTotal = data.languages.reduce((s, l) => s + l.visitors, 0);
    const shownCol = col ?? null;
    const byZone = t("Visitors by time zone", "Besucher nach Zeitzone");

    return (
        <Panel title={t("Where they are", "Wo sie sind")} sub={t("By the time zone their browser keeps, and the language it asks for.", "Nach der Zeitzone ihres Browsers und der Sprache, die er verlangt.")}>
            <div ref={box} className="relative">
                {W > 0 && (
                    <svg width={W} height={H + B} className="block" onPointerLeave={() => setCol(null)} role="img" aria-label={byZone}>
                        <line x1="0" x2={W} y1={H} y2={H} className="stroke-ink/[0.16]" strokeWidth="1" shapeRendering="crispEdges" />
                        {buckets.map((b, k) => {
                            const h = b.visitors ? Math.max(3, (b.visitors / top) * (H - 14)) : 0;
                            return (
                                <g key={b.offset} onPointerEnter={() => setCol(k)}>
                                    <rect x={k * cw} y="0" width={cw} height={H + B} fill="transparent" />
                                    {h ? <path d={`M${cx(k) - bw / 2},${H}V${H - h + 3}a3,3 0 0 1 3,-3h${bw - 6}a3,3 0 0 1 3,3V${H}Z`} fill="var(--pencil)" className={`transition-opacity ${shownCol != null && shownCol !== k ? "opacity-45" : ""}`} />
                                        : <rect x={cx(k) - bw / 2} y={H - 2} width={bw} height="2" rx="1" className="fill-ink/[0.08]" />}
                                </g>
                            );
                        })}
                        {marks.map((m) => (
                            <g key={m.name} pointerEvents="none">
                                <line x1={cx(m.k)} x2={cx(m.k)} y1={H + 3} y2={H + 8} className="stroke-ink/25" strokeWidth="1" />
                                <text x={clamp(cx(m.k), m.width / 2, W - m.width / 2)} y={H + 22} textAnchor="middle" className="fill-ink-3 text-[11px]">{m.name}</text>
                            </g>
                        ))}
                    </svg>
                )}
                {shownCol != null && buckets[shownCol].visitors > 0 && (
                    <div aria-hidden="true" className="pointer-events-none absolute top-0 z-10" style={cx(shownCol) < W / 2 ? { left: cx(shownCol) + 14 } : { right: W - cx(shownCol) + 14 }}>
                        <div className="rounded-xl bg-ink text-on-ink px-3 py-2.5 shadow-sheet text-[12px] leading-tight whitespace-nowrap">
                            <p className="font-medium">UTC{buckets[shownCol].offset >= 0 ? "+" : "−"}{Math.abs(buckets[shownCol].offset)} · <span className="tabular-nums">{plural(buckets[shownCol].visitors, lang, t(["visitor", "visitors"], ["Besucher", "Besucher"]))}</span></p>
                            <ul className="mt-1.5 space-y-1 text-on-ink/70">
                                {buckets[shownCol].zones.slice(0, 4).map((z) => <li key={z.zone} className="flex justify-between gap-4"><span>{city(z.zone)}</span><span className="tabular-nums">{z.visitors}</span></li>)}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="sr-only"><table>
                    <caption>{byZone}</caption>
                    <tbody>{data.zones.map((z) => <tr key={z.zone}><td>{city(z.zone)}</td><td>{z.visitors}</td></tr>)}</tbody>
                </table></div>
            </div>
            {!zoned && <p className="-mt-16 mb-10 text-center text-[13px] text-ink-3">{t("No time zones yet.", "Noch keine Zeitzonen.")}</p>}
            <div className="mt-4">
                <h3 className={`mb-1 ${label}`}>{t("Their language", "Ihre Sprache")}</h3>
                <ul>
                    {data.languages.slice(0, 5).map((l) => (
                        <li key={l.lang} className="grid grid-cols-[minmax(0,1fr)_40%_44px] items-center gap-3 py-2 shadow-[inset_0_-0.5px_0_var(--hairline)] last:shadow-none">
                            <span className="truncate text-[13px]">{language(l.lang, lang)}</span>
                            <span className="h-1.5 rounded-full bg-ink/[0.05] overflow-hidden"><i className="block h-full rounded-full bg-pencil" style={{ width: `${(l.visitors / Math.max(1, data.languages[0].visitors)) * 100}%` }} /></span>
                            <span className="text-right text-[13px] font-medium tabular-nums">{percent(l.visitors, langTotal)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <SiteLanguages data={data} />
        </Panel>
    );
}

/* The site's four languages, each in its own tone: English in ink, the others in the pencil's blue and its washes. */
const LANG_TONES = { en: "rgb(var(--ink-rgb) / 0.32)", de: "var(--pencil)", fr: "color-mix(in srgb, var(--pencil) 55%, transparent)", it: "color-mix(in srgb, var(--pencil) 28%, transparent)" };

/** The language the site was read in: who read it in English, German, French and Italian, against the language their browser asks for. */
function SiteLanguages({ data }) {
    const t = useT(), lang = useCode();
    const langs = Object.entries(data.siteLangs ?? {});
    const total = langs.reduce((n, [, v]) => n + v, 0);
    if (!total) return null;
    // Of the visitors whose browser asks for German, French or Italian, how many read the site in it.
    const asked = Object.fromEntries(data.languages.map((l) => [l.lang, l.visitors]));
    const missed = ["de", "fr", "it"].map((c) => [c, (asked[c] ?? 0) - (data.siteLangs[c] ?? 0)]).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1])[0];
    return (
        <div className="mt-6">
            <h3 className={`mb-2.5 ${label}`}>{t("The site read in", "Die Website gelesen auf")}</h3>
            <div className="flex h-3 gap-[2px] rounded-[5px] overflow-hidden" role="img" aria-label={langs.map(([c, v]) => `${t(...SITE_LANGS[c])} ${percent(v, total)}`).join(", ")}>
                {langs.filter(([, v]) => v).map(([c, v]) => <i key={c} className="block h-full transition-[flex-grow] duration-500 ease-spring" style={{ flexGrow: v, flexBasis: 0, background: LANG_TONES[c] }} title={`${t(...SITE_LANGS[c])}: ${percent(v, total)}`} />)}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px]">
                {langs.map(([c, v]) => (
                    <li key={c} className="inline-flex items-center gap-1.5">
                        <i className="size-2.5 rounded-[3px]" style={{ background: LANG_TONES[c] }} />
                        <span className="text-ink-2">{t(...SITE_LANGS[c])}</span>
                        <span className="font-medium tabular-nums">{percent(v, total)}</span>
                    </li>
                ))}
            </ul>
            {missed && <p className="mt-3 text-[12.5px] text-ink-3 text-pretty">{t(
                `About ${plural(missed[1], lang, ["visitor", "visitors"])} whose browser asks for ${SITE_LANGS[missed[0]][0]} read the site in another language.`,
                `Etwa ${plural(missed[1], lang, ["Besucher", "Besucher"])}, deren Browser ${SITE_LANGS[missed[0]][1]} verlangt, ${missed[1] === 1 ? "las" : "lasen"} die Website in einer anderen Sprache.`,
            )}</p>}
        </div>
    );
}

/* ── When they come ──────────────────────────────────────────────────────── */

const LEVELS = [0.16, 0.32, 0.52, 0.76, 1];
const hour = (h) => `${String(h).padStart(2, "0")}:00`;

function Hours({ data, className }) {
    const heat = data.heat;
    const [cell, setCell] = useState(null); // [day, hour]
    const t = useT(), lang = useCode();
    const max = Math.max(1, ...heat.flat());
    const level = (v) => (v ? Math.max(1, Math.ceil((v / max) * LEVELS.length)) : 0);
    const tone = (v) => (v ? `color-mix(in srgb, var(--pencil) ${LEVELS[level(v) - 1] * 100}%, transparent)` : "rgb(var(--ink-rgb) / 0.045)");
    // The busiest day, and the busiest three hours of the week's days together.
    const byDay = heat.map((r) => r.reduce((s, v) => s + v, 0));
    const byHour = Array.from({ length: 24 }, (_, h) => heat.reduce((s, r) => s + r[h], 0));
    const busyDay = byDay.indexOf(Math.max(...byDay));
    let busyHour = 0;
    for (let h = 0; h < 22; h++) if (byHour[h] + byHour[h + 1] + byHour[h + 2] > byHour[busyHour] + byHour[busyHour + 1] + byHour[busyHour + 2]) busyHour = h;
    const any = byDay.some(Boolean);
    const onKey = (e) => {
        const moves = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] };
        if (!(e.key in moves)) return;
        e.preventDefault();
        setCell((c) => { const [d, h] = c ?? [busyDay, busyHour]; return [clamp(d + moves[e.key][0], 0, 6), clamp(h + moves[e.key][1], 0, 23)]; });
    };
    const strong = "font-medium text-ink", num = "font-medium text-ink tabular-nums";
    return (
        <Panel className={className} title={t("When they come", "Wann sie kommen")} sub={t("Page views by weekday and hour, Zurich time.", "Seitenaufrufe nach Wochentag und Stunde, Zürcher Zeit.")}
            aside={any && <p className="text-[13px] text-ink-2 text-right">{t(
                <>Busiest on <span className={strong}>{WEEKDAYS.en[busyDay]}s</span>, and from <span className={num}>{hour(busyHour)}</span> to <span className={num}>{hour((busyHour + 3) % 24)}</span></>,
                <>Am meisten los an <span className={strong}>{WEEKDAYS.de[busyDay]}en</span>, von <span className={num}>{hour(busyHour)}</span> bis <span className={num}>{hour((busyHour + 3) % 24)}</span></>,
            )}</p>}>
            <p aria-live="polite" className="h-5 text-[12.5px] text-ink-2 tabular-nums">
                {cell ? <><span className={strong}>{WEEKDAYS[lang][cell[0]]}, {hour(cell[1])} {t("to", "bis")} {hour((cell[1] + 1) % 24)}</span> · {plural(heat[cell[0]][cell[1]], lang, t(["page view", "page views"], ["Seitenaufruf", "Seitenaufrufe"]))}</> : <span className="text-ink-3">{t("Point at an hour to read it.", "Zeig auf eine Stunde, um sie zu lesen.")}</span>}
            </p>
            <div className="mt-3 grid grid-cols-[34px_minmax(0,1fr)] gap-x-2">
                <div className="grid grid-rows-7 gap-[3px]">
                    {WEEKDAYS[lang].map((d, k) => <span key={d} className="flex items-center text-[11px] text-ink-3">{shortDay(k, lang)}</span>)}
                </div>
                <div tabIndex={0} onKeyDown={onKey} onFocus={() => setCell((c) => c ?? [busyDay, busyHour])} onBlur={() => setCell(null)} onPointerLeave={() => setCell(null)}
                    role="img" aria-label={t("Page views by weekday and hour. Use the arrow keys to read each hour.", "Seitenaufrufe nach Wochentag und Stunde. Mit den Pfeiltasten liest du jede Stunde.")}
                    className="grid grid-cols-24 gap-[3px] outline-none rounded-md focus-visible:shadow-[0_0_0_2px_var(--pencil)]">
                    {heat.map((row, d) => row.map((v, h) => {
                        const on = cell && cell[0] === d && cell[1] === h;
                        return <i key={`${d}-${h}`} onPointerEnter={() => setCell([d, h])} className={`block h-[22px] max-sm:h-4 rounded-[4px] transition-[box-shadow,transform] duration-100 ${on ? "shadow-[0_0_0_1.5px_var(--ink)] scale-110 z-[1]" : ""}`} style={{ background: tone(v) }} />;
                    }))}
                </div>
                <span />
                <div className="mt-2 grid grid-cols-24 text-[11px] text-ink-3 tabular-nums">
                    {Array.from({ length: 24 }, (_, h) => <span key={h} className={h % 3 ? "" : h % 6 ? "max-sm:invisible" : ""}>{h % 3 ? "" : String(h).padStart(2, "0")}</span>)}
                </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 text-[11.5px] text-ink-3">
                {t("Fewer", "Weniger")}
                {[0, ...LEVELS].map((a, k) => <i key={k} className="size-3 rounded-[3px]" style={{ background: a ? `color-mix(in srgb, var(--pencil) ${a * 100}%, transparent)` : "rgb(var(--ink-rgb) / 0.045)" }} />)}
                {t("More", "Mehr")}
            </div>
            <div className="sr-only"><table>
                <caption>{t("Page views by weekday and hour", "Seitenaufrufe nach Wochentag und Stunde")}</caption>
                <thead><tr><th>{t("Day", "Tag")}</th>{Array.from({ length: 24 }, (_, h) => <th key={h}>{hour(h)}</th>)}</tr></thead>
                <tbody>{heat.map((row, d) => <tr key={d}><th>{WEEKDAYS[lang][d]}</th>{row.map((v, h) => <td key={h}>{v}</td>)}</tr>)}</tbody>
            </table></div>
        </Panel>
    );
}
