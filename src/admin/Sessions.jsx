import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { localize } from "@/i18n";
import { REPLAY } from "@/lib/trail";
import { channelName, city, language, pageName, STEPS as STEP_NAMES } from "@/admin/names";
import {
    admin, card, Chip, clamp, day, Dialog, duration, I, Icon, isDay, label, LOCALE, Lights, Loader, localDay, n0, parse, plural, quiet, ring, Segments,
    shiftDay, useCode, useKept, useParams, useT,
} from "@/admin/ui";

/**
 * The admin area's Sessions view: every visit of a day, one by one (api/_trails.php), and each replayed. A session is
 * one visitor's pages on one day, split after half an hour away; a row says what it read, where it came from, what it
 * ran on and how it ended (a download, a shared design followed), and opens the player (?s=<the id of its first page
 * view>, so Back closes it and a link opens it).
 *
 * The player is a Mac window over the page, as the site draws Bezzle's: the visitor's page itself, as the site serves
 * it today, in a frame the size of their window (scaled to fit), and the trail lib/trail.js recorded replayed over it:
 * the page scrolls as theirs did, the pointer moves and clicks where theirs did, a tap shows as a ring. Beside it the
 * journey: each page, what was clicked, the fields used, the tab left and come back to, how far down the page was
 * read, the steps taken; a click on one goes there. Stretches where nothing happens are skipped unless asked not to.
 * Keys: space plays and pauses, ← and → go five seconds, ↑ and ↓ (or K and J) to the session above or below.
 *
 * The frame is named "bezzle-replay": the site in it counts and records nothing (lib/trail.js), does not glide its
 * scrolling (main.jsx), and stays in the visit's language.
 */

const FILTERS = [["", "All", "Alle"], ["mac", "Mac", "Mac"], ["downloaded", "Downloaded", "Geladen"], ["shared", "Shared design", "Geteiltes Design"]];
const SPEEDS = [1, 2, 4, 8];
const hm = (s) => s.slice(11, 16);
/** A point on the player's clock: "0:42", "12:05", "1:02:10". */
function clock(ms) {
    const s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = String(s % 60).padStart(2, "0");
    return h ? `${h}:${String(m).padStart(2, "0")}:${x}` : `${m}:${x}`;
}
/** "Today", "Yesterday", or the day: "Monday 26 October". */
function dayName(s, today, t, lang) {
    if (s === today) return t("Today", "Heute");
    if (s === shiftDay(today, -1)) return t("Yesterday", "Gestern");
    return day(s).toLocaleDateString(LOCALE[lang], { weekday: "long", day: "numeric", month: "long", ...(s.slice(0, 4) !== today.slice(0, 4) && { year: "numeric" }) });
}
/** Where a session came from: the campaign of its link, the other site, or how it came (Direct). */
const origin = (s, t) => s.source || s.referrer || (s.channel ? channelName(s.channel, t) : null);
/** The same in a sentence: "from reddit.com", but "Direct" as it is. */
const cameFrom = (s, t) => (s.source || s.referrer ? t(`from ${origin(s, t)}`, `von ${origin(s, t)}`) : origin(s, t));
/** What a session ran on, where and in which language: "Mac, Safari · Zurich · German". */
const about = (s, lang) => [[s.device, s.browser].filter((x) => x && x !== "Other").join(", "), s.zone && city(s.zone), s.lang && language(s.lang.split("-")[0], lang)].filter(Boolean).join(" · ");




/** How a session ended (a download, a shared design opened in Bezzle or in the browser), and what went wrong on the way, as chips. */
function Outcome({ s }) {
    const t = useT(), lang = useCode();
    const missing = s.pages.some((p) => p.missing);
    return (
        <>
            {s.steps.includes("download") && <Chip tint>{t("Downloaded", "Geladen")}</Chip>}
            {s.steps.includes("open") && <Chip tint>{t("In Bezzle", "In Bezzle")}</Chip>}
            {s.steps.includes("app") && <Chip>{t("In the browser", "Im Browser")}</Chip>}
            {s.rage > 0 && <Chip warn>{plural(s.rage, lang, t(["rage click", "rage clicks"], ["Wutklick", "Wutklicks"]))}</Chip>}
            {missing && <Chip warn>404</Chip>}
        </>
    );
}

/* ── The day's sessions ──────────────────────────────────────────────────── */

export default function Sessions({ signedOut }) {
    const [params, setParam] = useParams();
    const t = useT(), lang = useCode();
    const today = localDay();
    const dayOn = isDay(params.get("day")) && params.get("day") < today ? params.get("day") : today;
    const only = FILTERS.some(([k]) => k && k === params.get("only")) ? params.get("only") : "";
    const openId = /^[a-f0-9]{16}$/.test(params.get("s") || "") ? params.get("s") : null;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const asked = useRef(0);
    const list = useRef(null);


    useEffect(() => {
        const ask = ++asked.current;
        setLoading(true);
        admin("sessions", undefined, `&day=${dayOn}`)
            .then((d) => { if (ask === asked.current) setData(d); })
            .catch(signedOut)
            .finally(() => { if (ask === asked.current) setLoading(false); });
    }, [dayOn, signedOut]);

    // Today's sessions keep coming: every half minute, while the page is in view and no session is open.
    useEffect(() => {
        if (dayOn !== today || openId) return;
        const tick = setInterval(() => {
            if (document.visibilityState !== "visible") return;
            admin("sessions", undefined, `&day=${dayOn}`).then((d) => setData((prev) => (prev?.day === d.day ? d : prev))).catch(() => {});
        }, 30_000);
        return () => clearInterval(tick);
    }, [dayOn, today, openId]);

    const sessions = useMemo(() => (data?.sessions ?? []).filter((s) =>
        only === "mac" ? s.device === "Mac" : only === "downloaded" ? s.steps.includes("download") : only === "shared" ? s.pages.some((p) => p.path === "/open.html") : true), [data, only]);

    // Opening a session adds a history entry, so Back closes the player; closing takes that entry back.
    const pushed = useRef(false);
    const open = (id) => { pushed.current = !openId; setParam("s", id, !openId); };
    const close = () => { if (!openId) return; if (pushed.current) { pushed.current = false; window.history.back(); } else setParam("s", ""); };
    const index = sessions.findIndex((s) => s.id === openId);
    const step = (by) => { const next = sessions[index + by]; if (next) setParam("s", next.id); };

    // ↑ and ↓ walk the rows.
    const walk = (e) => {
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        const rows = [...e.currentTarget.querySelectorAll("button[data-row]")];
        const at = rows.indexOf(document.activeElement);
        if (at < 0) return;
        e.preventDefault();
        rows[at + (e.key === "ArrowDown" ? 1 : -1)]?.focus();
    };

    const first = !data || (loading && data.day !== dayOn);
    const recorded = sessions.filter((s) => s.recorded).length;
    const earliest = data?.since?.slice(0, 10);
    return (
        <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <div className={`flex items-center h-10 rounded-[12px] ${card}`}>
                        <button onClick={() => setParam("day", shiftDay(dayOn, -1))} disabled={!!earliest && dayOn <= earliest} aria-label={t("The day before", "Der Tag davor")} className={`${quiet} !h-10 !w-10 !px-0 !rounded-[12px]`}><Icon d={I.left} size={14} /></button>
                        <p className="min-w-[150px] px-1 text-center text-[13.5px] font-medium" aria-live="polite">{dayName(dayOn, today, t, lang)}</p>
                        <button onClick={() => setParam("day", shiftDay(dayOn, 1) >= today ? "" : shiftDay(dayOn, 1))} disabled={dayOn >= today} aria-label={t("The day after", "Der Tag danach")} className={`${quiet} !h-10 !w-10 !px-0 !rounded-[12px]`}><Icon d={I.right} size={14} /></button>
                    </div>
                    <Segments name={t("Show", "Anzeigen")} value={only} options={FILTERS.map(([key, en, de]) => [key, t(en, de)])} onChange={(k) => setParam("only", k)} />
                </div>
                {data && !first && (
                    <p className="text-[13px] text-ink-2 tabular-nums">
                        {plural(sessions.length, lang, t(["session", "sessions"], ["Sitzung", "Sitzungen"]))}
                        {sessions.length > 0 && <span className="text-ink-3"> · {t(`${n0(recorded, lang)} to replay`, `${n0(recorded, lang)} zum Abspielen`)}</span>}
                    </p>
                )}
            </div>

            <section data-reveal="" aria-label={t("Sessions", "Sitzungen")} className={`${card} mt-5 p-2`}>
                <ul ref={list} onKeyDown={walk} className={`transition-opacity duration-200 ${loading && !first ? "opacity-55" : ""}`}>
                    {!first && sessions.map((s) => <Row key={s.id} s={s} current={s.id === openId} onOpen={() => open(s.id)} />)}
                    {first && Array.from({ length: 6 }, (_, i) => (
                        <li key={i} aria-hidden="true" className="px-4 py-4 flex items-center gap-4 shadow-[inset_0_-0.5px_0_var(--hairline)] last:shadow-none" style={{ opacity: 1 - i * 0.14 }}>
                            <i className="h-3.5 w-10 rounded bg-ink/8 animate-pulse" />
                            <span className="flex-1 space-y-2"><i className="block h-3.5 w-64 max-w-full rounded bg-ink/8 animate-pulse" /><i className="block h-2.5 w-40 rounded bg-ink/5" /></span>
                            <i className="h-3 w-14 rounded bg-ink/5" />
                        </li>
                    ))}
                </ul>
                {!first && sessions.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="font-serif text-[26px] tracking-[-0.02em]">{only ? t("Nothing matches.", "Nichts passt.") : t("Nobody came by.", "Niemand war da.")}</p>
                        <p className="mt-2 text-[14px] text-ink-3">{only
                            ? t("No session of this day is among these.", "Keine Sitzung dieses Tages gehört dazu.")
                            : dayOn === today ? t("The day's sessions show here as they happen.", "Die Sitzungen des Tages erscheinen hier, während sie geschehen.") : t("No visits were counted on this day.", "An diesem Tag wurden keine Besuche gezählt.")}</p>
                        {only && <button onClick={() => setParam("only", "")} className="btn btn-quiet btn-small mt-6">{t("Show all sessions", "Alle Sitzungen zeigen")}</button>}
                    </div>
                )}
            </section>

            <p className="mt-10 max-w-[720px] text-[12.5px] leading-relaxed text-ink-3 text-pretty">
                {t(
                    <>Recorded by the site itself, without cookies: where the pointer went, how far the page was scrolled, what was clicked or tapped and which field was used, never
                    what was typed, and never a shared design's secret, which stays after the # of its link; a visitor can turn it off on the privacy page. A session is one visitor's pages on one day, a new one after half an
                    hour away. Recordings are kept {data?.keep ?? 30} days; browsers that ask not to be tracked are never recorded. The player shows the page as it is today, at the visitor's window size.</>,
                    <>Von der Website selbst aufgezeichnet, ohne Cookies: wohin der Zeiger ging, wie weit die Seite gescrollt wurde, was angeklickt oder angetippt und welches Feld benutzt
                    wurde, nie, was getippt wurde, und nie das Geheimnis eines geteilten Designs, das hinter dem # seines Links bleibt; ein Besucher kann es in der Datenschutzerklärung ausschalten. Eine Sitzung sind die Seiten
                    eines Besuchers an einem Tag, eine neue nach einer halben Stunde Pause. Aufzeichnungen bleiben {data?.keep ?? 30} Tage; Browser, die nicht verfolgt werden wollen, werden nie aufgezeichnet. Der Player zeigt die Seite, wie sie heute ist, in der Fenstergrösse des Besuchers.</>,
                )}
            </p>

            <Dialog open={!!openId} onClose={close} label={t("Session", "Sitzung")}
                className="fixed inset-0 m-auto w-[min(1380px,calc(100vw-24px))] h-[min(900px,calc(100dvh-24px))] max-sm:w-full max-sm:h-dvh">
                <Player key={openId} id={openId} today={today} position={index >= 0 ? [index, sessions.length] : null} onStep={step} onClose={close} />
            </Dialog>
        </div>
    );
}

function Row({ s, current, onOpen }) {
    const t = useT(), lang = useCode();
    const names = s.pages.map((p) => pageName(p.path, lang));
    const shown = names.length > 4 ? [...names.slice(0, 3), `+${names.length - 4}`, names.at(-1)] : names;
    // On the site within the last five minutes.
    const live = Date.now() - parse(s.end).getTime() < 300e3;
    const from = origin(s, t);
    return (
        <li className="shadow-[inset_0_-0.5px_0_var(--hairline)] last:shadow-none">
            <button data-row onClick={onOpen} aria-current={current || undefined}
                className="group w-full text-left px-4 max-sm:px-3 py-3.5 rounded-xl grid grid-cols-[46px_minmax(0,1fr)_auto] max-sm:grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-x-4 max-sm:gap-x-3 transition-colors duration-150 hover:bg-ink/[0.035] focus-visible:bg-ink/[0.05] outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--pencil)] aria-[current]:bg-pencil-wash">
                <span className="self-start pt-px text-[14px] font-medium tabular-nums">
                    {hm(s.start)}
                    {live && <span className="mt-1.5 flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-pencil"><i className="size-[5px] rounded-full bg-pencil animate-pulse motion-reduce:animate-none" />{t("Now", "Jetzt")}</span>}
                </span>
                <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                        <span className="min-w-0 max-w-full truncate text-[14.5px] font-medium">
                            {shown.map((n, i) => <span key={i}>{i > 0 && <span className="text-ink-4 font-normal"> → </span>}{n}</span>)}
                        </span>
                        <Outcome s={s} />
                    </span>
                    <span className="mt-0.5 block truncate text-[12.5px] text-ink-3">{[from, about(s, lang)].filter(Boolean).join(" · ")}</span>
                </span>
                <span className="flex items-center gap-3.5 text-[13px] text-ink-2 tabular-nums">
                    <span className="text-right leading-tight">
                        <span className="block">{duration(s.seconds)}</span>
                        <span className="block text-[11.5px] text-ink-3">{plural(s.pages.length, lang, t(["page", "pages"], ["Seite", "Seiten"]))}</span>
                    </span>
                    <span title={s.recorded ? undefined : t("Not recorded", "Nicht aufgezeichnet")}
                        className={`size-8 rounded-full inline-flex items-center justify-center transition-colors ${s.recorded ? "bg-ink/[0.06] text-ink group-hover:bg-ink group-hover:text-on-ink" : "text-ink-4"}`}>
                        {s.recorded ? <Icon d={I.play} size={12} /> : <i className="h-px w-2.5 bg-current" />}
                    </span>
                </span>
            </button>
        </li>
    );
}

/* ── One session, laid out on one clock ──────────────────────────────────── */

const TAIL = 1500;    // ms a page stays on after the last thing that happened on it
const IDLE = 3000;    // ms of nothing happening, past which the player skips ahead
const REACH = 500;    // ms between the clicks of a rage burst, as api/_trails.php counts them
const FALLBACK = { Mac: [1440, 900], iPhone: [390, 844], iPad: [820, 1180], Android: [412, 915] };

/** Marks the clicks of rage bursts (three or more on one spot, each within REACH of the one before) and gives each burst's size to its first. */
function rageOf(clicks) {
    for (let i = 0; i < clicks.length; ) {
        let j = i;
        while (j + 1 < clicks.length && clicks[j + 1].t - clicks[j].t <= REACH && Math.abs(clicks[j + 1].x - clicks[i].x) <= 30 && Math.abs(clicks[j + 1].y - clicks[i].y) <= 30) j++;
        if (j - i >= 2) for (let k = i; k <= j; k++) { clicks[k].rage = true; clicks[k].burst = k === i ? j - i + 1 : 0; }
        i = j + 1;
    }
}

/**
 * A session's pages on one clock, in ms from its start: each page's start and end, its events by kind, and the
 * stretches where nothing happens (which the player skips). The pages are placed by the visitor's own clock,
 * which lines them up to the millisecond, where it was recorded; by the server's, to the second, where not.
 */
function timeline(s) {
    const at0 = parse(s.views[0].at).getTime();
    const anchor = s.views.find((v) => v.started);
    const baseOf = (v) => (v.started && anchor ? parse(anchor.at).getTime() - at0 + (v.started - anchor.started) : parse(v.at).getTime() - at0);
    const fallback = FALLBACK[s.device] ?? FALLBACK.Mac;
    let end = 0;
    const pages = s.views.map((v, index) => {
        const of = (k) => v.events.filter((e) => e[0] === k);
        const viewports = of("v").map(([, t, w, h, touch]) => [t, w, h, touch]);
        const touch = viewports.some((x) => x[3]) || (!viewports.length && ["iPhone", "iPad", "Android"].includes(s.device));
        const clicks = of("c").map(([, t, x, y, kind, text]) => ({ t, x, y, kind, text }));
        rageOf(clicks);
        // The pointer goes where it clicked, so a click never lands away from it.
        const moves = touch ? [] : [...of("m").map(([, t, x, y]) => [t, x, y]), ...clicks.map((c) => [c.t, c.x, c.y])].sort((a, b) => a[0] - b[0]);
        const last = v.events.length ? v.events.at(-1)[1] : 0;
        const start = Math.max(baseOf(v), end);
        end = start + last;
        return {
            index, view: v, start, last, touch, clicks, moves,
            recorded: v.events.length > 0,
            url: localize(v.path, v.lang),
            viewports: viewports.length ? viewports : [[0, ...fallback, touch ? 1 : 0]],
            scrolls: of("s").map(([, t, y, h]) => [t, y, h]),
            fields: v.events.filter((e) => e[0] === "f" || e[0] === "i").map(([k, t, text]) => ({ t, typed: k === "i", text })),
            hidden: of("h").map(([, t, shown]) => [t, shown]),
            // When the site was left from this page: the tab closed, another site, a reload.
            gone: of("x")[0]?.[1] ?? null,
        };
    });
    pages.forEach((p, i) => {
        const next = pages[i + 1];
        p.stop = next ? next.start : p.start + Math.max(p.last + TAIL, p.recorded ? 0 : (p.view.seconds ?? 2) * 1000, 2000);
    });
    const length = pages.at(-1).stop;

    // The steps (a download, a shared design followed), each on the page it was taken from, a moment after the page's own time.
    const steps = s.stepsAt.map((e) => {
        const at = parse(e.at).getTime();
        const p = [...pages].reverse().find((x) => parse(x.view.at).getTime() <= at) ?? pages[0];
        return { name: e.name, T: clamp(p.start + at - parse(p.view.at).getTime(), p.start, p.stop) };
    });

    // When something happens, on the session's clock; the gaps between are the quiet stretches.
    const acts = pages.flatMap((p) => [p.start, ...p.view.events.map((e) => p.start + e[1])]).concat(steps.map((x) => x.T), length).sort((a, b) => a - b);
    const quiet = [];
    for (let i = 1; i < acts.length; i++) if (acts[i] - acts[i - 1] > IDLE) quiet.push([acts[i - 1] + 800, acts[i] - 400]);

    return { pages, steps, length, quiet };
}

/** The page on view at a time. */
const pageAt = (tl, T) => { let i = 0; while (i + 1 < tl.pages.length && tl.pages[i + 1].start <= T) i++; return i; };
/** The last index in a list sorted by time (each item's first element) at or before τ, or -1. */
function before(list, τ, time = (x) => x[0]) {
    let lo = 0, hi = list.length - 1, at = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (time(list[mid]) <= τ) { at = mid; lo = mid + 1; } else hi = mid - 1; }
    return at;
}
/**
 * A sampled position at τ: held at one sample, then eased to the next over the last `span` ms before it, so a
 * pointer that rests and moves again moves when it did. Null before the first sample unless `early`.
 */
function sample(list, τ, span, early = false) {
    const i = before(list, τ);
    if (i < 0) return early && list.length ? list[0] : null;
    const a = list[i], b = list[i + 1];
    if (!b) return a;
    const from = Math.max(a[0], b[0] - span);
    if (τ <= from || b[0] === from) return a;
    const k = (τ - from) / (b[0] - from);
    return [τ, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}

/* ── The player ──────────────────────────────────────────────────────────── */


function Player({ id, today, position, onStep, onClose }) {
    const t = useT(), lang = useCode();
    const [d, setD] = useState(null);
    const [error, setError] = useState("");
    const [playing, setPlaying] = useState(false);
    const [now, setNow] = useState(0);
    const [speed, setSpeed] = useKept("bezzle-replay-speed", 2);
    const [skip, setSkip] = useKept("bezzle-replay-skip", true);
    const time = useRef(0);       // the clock, in ms of the session
    const hold = useRef(0);       // the clock waits until then (performance.now()) while a page loads in the frame
    const started = useRef(false);

    useEffect(() => { admin("session", undefined, `&id=${id}`).then(setD).catch((e) => setError(e.message)); }, [id]);
    const tl = useMemo(() => (d ? timeline(d) : null), [d]);
    const recorded = !!tl?.pages.some((p) => p.recorded);

    const seek = useCallback((ms) => { if (!tl) return; time.current = clamp(ms, 0, tl.length); setNow(time.current); }, [tl]);
    const toggle = useCallback(() => {
        if (!tl) return;
        if (!playing && time.current >= tl.length - 50) seek(0);
        setPlaying((p) => !p);
    }, [tl, playing, seek]);

    // The clock runs while playing, held while a page loads, and over the quiet stretches when skipping them.
    useEffect(() => {
        if (!playing || !tl) return;
        let frame, last = performance.now(), shown = 0;
        const run = (at) => {
            const dt = Math.min(100, at - last);
            last = at;
            if (at >= hold.current) {
                let T = time.current + dt * speed;
                if (skip) { const q = tl.quiet.find(([a, b]) => T > a && T < b); if (q) T = q[1]; }
                time.current = Math.min(T, tl.length);
            }
            if (at - shown > 90 || time.current >= tl.length) { shown = at; setNow(time.current); }
            if (time.current >= tl.length) { setPlaying(false); return; }
            frame = requestAnimationFrame(run);
        };
        frame = requestAnimationFrame(run);
        return () => cancelAnimationFrame(frame);
    }, [playing, tl, speed, skip]);

    // It plays once the first page is in the frame.
    const ready = useCallback(() => { if (!started.current && recorded) { started.current = true; setPlaying(true); } }, [recorded]);

    // Space plays and pauses, ← and → go five seconds, ↑ and ↓ (or K and J) to the session above or below.
    useEffect(() => {
        const onKey = (e) => {
            if (e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
            if (e.key === " " && !/BUTTON/.test(e.target.tagName)) { e.preventDefault(); toggle(); }
            if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && e.target.getAttribute("role") !== "slider") { e.preventDefault(); seek(time.current + (e.key === "ArrowLeft" ? -5000 : 5000)); }
            if (e.key === "ArrowDown" || e.key === "j") { e.preventDefault(); onStep(1); }
            if (e.key === "ArrowUp" || e.key === "k") { e.preventDefault(); onStep(-1); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [toggle, seek, onStep]);

    // The session above or below, and where this one is among them; the red light (or Esc) closes the window.
    const bar = (
        <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => onStep(-1)} disabled={!position || position[0] === 0} aria-label={t("Previous session", "Vorherige Sitzung")} className={`${quiet} !px-2`}><Icon d={I.up} /></button>
            <button onClick={() => onStep(1)} disabled={!position || position[0] >= position[1] - 1} aria-label={t("Next session", "Nächste Sitzung")} className={`${quiet} !px-2`}><Icon d={I.down} /></button>
            {position && <span className="ml-1 text-[12px] text-ink-3 tabular-nums max-sm:hidden">{position[0] + 1} {t("of", "von")} {position[1]}</span>}
        </div>
    );
    // A Mac window, as the site draws Bezzle's: the paper, its lights, its shadow.
    const frame = "h-full flex flex-col rounded-[13px] max-sm:rounded-none max-sm:pb-[env(safe-area-inset-bottom)] bg-paper overflow-hidden animate-pop shadow-[0_0_0_0.6px_rgb(0_0_0/0.2),0_50px_90px_-24px_rgb(var(--shadow-rgb)/0.42),0_16px_34px_-8px_rgb(var(--shadow-rgb)/0.18)]";
    const lights = <Lights onClose={onClose} label={t("Close", "Schliessen")} />;
    if (error || !d) return <div className={frame}><div className="flex items-center justify-between px-4 py-3.5">{lights}{bar}</div><div className="flex-1 flex items-center justify-center">{error ? <p className="text-[14px] text-warning">{error}</p> : <Loader />}</div></div>;

    const from = cameFrom(d, t);
    return (
        <div className={frame}>
            <header className="flex items-start justify-between gap-4 pl-4 pr-3 pt-3.5 pb-3 bg-panel shadow-[inset_0_-0.5px_0_var(--hairline)]">
                <div className="pt-2 shrink-0">{lights}</div>
                <div className="min-w-0 flex-1 pl-3 pt-1">
                    <p className="text-[12.5px] text-ink-3 truncate">{dayName(d.start.slice(0, 10), today, t, lang)}, {hm(d.start)} · {[from, about(d, lang)].filter(Boolean).join(" · ")}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                        <h2 className="font-serif font-semibold tracking-[-0.02em] text-[22px] leading-tight">
                            {plural(d.pages.length, lang, t(["page", "pages"], ["Seite", "Seiten"]))}, {duration(d.seconds)} {t("read", "gelesen")}
                        </h2>
                        <Outcome s={d} />
                    </div>
                </div>
                {bar}
            </header>
            <div className="flex-1 min-h-0 flex max-lg:flex-col">
                <div className="flex-1 min-w-0 min-h-0 flex flex-col max-lg:flex-none max-lg:h-[min(56dvh,560px)]">
                    <Stage tl={tl} time={time} hold={hold} now={now} onReady={ready} />
                    <Controls tl={tl} now={now} playing={playing} recorded={recorded} onToggle={toggle} onSeek={seek} speed={speed} setSpeed={setSpeed} skip={skip} setSkip={setSkip} />
                </div>
                <Journey s={d} tl={tl} now={now} onSeek={seek} />
            </div>
        </div>
    );
}

/**
 * The page in a frame the size of the visitor's window, scaled to fit, with their pointer over it. Drawn on every
 * frame from the clock, outside React: the frame scrolls, the pointer moves, its trail follows, clicks ring.
 */
function Stage({ tl, time, hold, now, onReady }) {
    const t = useT(), lang = useCode();
    const room = useRef(null);
    const frame = useRef(null);
    const parts = useRef({});
    const loaded = useRef(false);
    const shownPage = useRef(-1);
    const [size, setSize] = useState({ w: 0, h: 0 });
    const [index, setIndex] = useState(() => pageAt(tl, time.current));
    const [vp, setVp] = useState(() => tl.pages[index].viewports[0].slice(1, 3));
    const vpNow = useRef(vp);
    const page = tl.pages[index];
    // The frame is sent to its first page once; after that the effect below takes it from page to page.
    const [first] = useState(() => (page.view.private ? "about:blank" : page.url));
    const sent = useRef(first);
    const fits = size.w > 0 && size.h > 0;
    const scale = fits ? Math.max(0.05, Math.min((size.w - 32) / vp[0], (size.h - 52) / vp[1], 1)) : 0.5;
    const k = useRef(1);
    k.current = scale;

    useEffect(() => {
        const el = room.current;
        const ro = new ResizeObserver(([e]) => setSize({ w: Math.round(e.contentRect.width), h: Math.round(e.contentRect.height) }));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // A new page: the site's own router takes the frame there, without loading it again; a page never recorded is not shown.
    useEffect(() => {
        const f = frame.current;
        if (!f || page.view.private || sent.current === page.url) return;
        sent.current = page.url;
        const win = f.contentWindow;
        if (loaded.current && win) {
            win.history.replaceState(win.history.state, "", page.url);
            win.dispatchEvent(new PopStateEvent("popstate", { state: win.history.state }));
            hold.current = performance.now() + 350;
        } else {
            loaded.current = false;
            hold.current = performance.now() + 8000;
            f.src = page.url;
        }
    }, [page, hold]);
    // A session that begins on a page never recorded has nothing to load first: it plays at once.
    useEffect(() => { if (first === "about:blank") { const go = setTimeout(onReady, 300); return () => clearTimeout(go); } }, [first, onReady]);
    const onLoad = () => {
        let ok = false;
        try { ok = frame.current.contentWindow.location.pathname !== "blank"; } catch { /* another origin */ }
        if (!ok) return;
        loaded.current = true;
        hold.current = performance.now() + 450;
        setTimeout(onReady, 450);
    };

    useEffect(() => {
        let raf;
        const draw = () => {
            raf = requestAnimationFrame(draw);
            const T = time.current;
            const i = pageAt(tl, T);
            if (i !== shownPage.current) { shownPage.current = i; setIndex(i); }
            const p = tl.pages[i], τ = T - p.start, s = 1 / k.current;
            const v = p.viewports[Math.max(0, before(p.viewports, τ))];
            if (v[1] !== vpNow.current[0] || v[2] !== vpNow.current[1]) { vpNow.current = [v[1], v[2]]; setVp(vpNow.current); }
            const { cursor, trail, rings, note, away } = parts.current;
            if (!cursor) return;

            const y = sample(p.scrolls, τ, 220, true);
            if (y && loaded.current && !p.view.private) {
                try { const win = frame.current.contentWindow; if (Math.abs(win.scrollY - y[1]) > 1) win.scrollTo({ top: Math.round(y[1]), behavior: "instant" }); } catch { /* loading */ }
            }

            const m = sample(p.moves, τ, 120);
            const gone = p.gone != null && τ >= p.gone;
            const hidden = gone || p.hidden[before(p.hidden, τ)]?.[1] === 0;
            cursor.style.opacity = m && !hidden ? "1" : "0";
            // Its tip, not its corner, on the spot.
            if (m) cursor.style.transform = `translate(${m[1]}px, ${m[2]}px) scale(${s}) translate(-5px, -3px)`;
            // The pointer's last half second, behind it.
            const from = before(p.moves, τ - 600) + 1, to = before(p.moves, τ);
            const pts = p.moves.slice(Math.max(0, from), to + 1).map((x) => `${x[1]},${x[2]}`);
            if (m && pts.length) pts.push(`${m[1]},${m[2]}`);
            trail.setAttribute("points", hidden ? "" : pts.join(" "));
            trail.setAttribute("stroke-width", String(2.5 * s));

            // The clicks of the last moments, the page before's too: the click that led here is still seen landing.
            const recent = [];
            for (const q of [tl.pages[i - 1], p]) {
                if (!q) continue;
                const local = T - q.start;
                for (let c = before(q.clicks, local, (x) => x.t); c >= 0 && local - q.clicks[c].t < 1800; c--) recent.push({ click: q.clicks[c], age: local - q.clicks[c].t, touch: q.touch });
            }
            recent.sort((a, b) => a.age - b.age);
            // As rings that open and fade.
            let n = 0;
            for (const { click, age, touch } of recent) {
                if (n === rings.length || age >= 900) break;
                const q = age / 900, r = rings[n++];
                r.setAttribute("cx", click.x); r.setAttribute("cy", click.y);
                r.setAttribute("r", String((7 + 20 * Math.sqrt(q)) * s));
                r.setAttribute("stroke-width", String(2.5 * s));
                r.setAttribute("fill", touch ? "currentColor" : "none");
                r.style.color = click.rage ? "var(--warning)" : "var(--pencil)";
                r.style.opacity = String(1 - q);
            }
            for (; n < rings.length; n++) rings[n].style.opacity = "0";
            // And what was clicked, for a moment beside it.
            const last = recent[0]?.click.kind ? recent[0] : null;
            if (last) {
                note.textContent = last.click.text || (last.click.kind === "a" ? t("A link", "Ein Link") : t("A button", "Ein Knopf"));
                note.style.opacity = String(Math.min(1, (1800 - last.age) / 300));
                note.style.transform = `translate(${last.click.x}px, ${last.click.y}px) scale(${s}) translate(14px, 14px)`;
            } else note.style.opacity = "0";
            away.style.opacity = hidden ? "1" : "0";
            if (hidden) away.firstChild.textContent = gone ? t("Left the site", "Hat die Website verlassen") : t("Away in another tab", "In einem anderen Tab");
        };
        raf = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(raf);
    }, [tl, time, t]);

    const address = `bezzle.ch${page.url === "/" ? "" : page.url}`;
    return (
        <div ref={room} className="relative flex-1 min-h-0 bg-table flex flex-col items-center justify-center overflow-hidden px-4">
            <div className={`contents ${fits ? "" : "[&>*]:invisible"}`}>
                <p className="w-full flex items-center justify-between gap-3 text-[11.5px] text-ink-3 tabular-nums" style={{ maxWidth: vp[0] * scale }}>
                    <span className="font-mono truncate">{address}</span>
                    <span className="shrink-0">{vp[0]} × {vp[1]}{scale < 0.995 && ` · ${Math.round(scale * 100)}%`}</span>
                </p>
                <div className="mt-2 relative rounded-[10px] overflow-hidden bg-paper shadow-[0_0_0_0.5px_rgb(0_0_0/0.14),0_24px_50px_-12px_rgb(var(--shadow-rgb)/0.3),0_6px_14px_rgb(var(--shadow-rgb)/0.1)]" style={{ width: vp[0] * scale, height: vp[1] * scale }}>
                    <div className="absolute left-0 top-0 origin-top-left" style={{ width: vp[0], height: vp[1], transform: `scale(${scale})` }}>
                        <iframe ref={frame} name={REPLAY} title={t("The page as the visitor saw it", "Die Seite, wie der Besucher sie sah")} onLoad={onLoad}
                            src={first} inert tabIndex={-1} className="block w-full h-full border-0 bg-paper" />
                        {/* Over the frame: the visitor's pointer, its trail, the clicks, and nothing of the maker's own reaches the page. */}
                        <div className="absolute inset-0 overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                                <polyline ref={(el) => { parts.current.trail = el; }} fill="none" stroke="var(--ink)" strokeOpacity="0.22" strokeLinecap="round" strokeLinejoin="round" />
                                {Array.from({ length: 6 }, (_, i) => <circle key={i} ref={(el) => { (parts.current.rings ??= [])[i] = el; }} fillOpacity="0.28" stroke="currentColor" style={{ opacity: 0 }} />)}
                            </svg>
                            <svg ref={(el) => { parts.current.cursor = el; }} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="absolute left-0 top-0 origin-top-left opacity-0 drop-shadow-[0_1px_1.5px_rgb(0_0_0/0.3)]">
                                <path d="M5 3v16.2l4.1-3.9 2.7 6 2.9-1.3-2.7-5.9 5.6-.2z" fill="var(--ink)" stroke="var(--paper)" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <span ref={(el) => { parts.current.note = el; }} className="absolute left-0 top-0 origin-top-left max-w-[260px] truncate px-2.5 h-7 leading-7 rounded-full bg-ink text-on-ink text-[12.5px] font-medium shadow-card opacity-0 whitespace-nowrap" />
                            <div ref={(el) => { parts.current.away = el; }} className="absolute inset-0 flex items-center justify-center bg-paper/70 backdrop-blur-[2px] opacity-0 transition-opacity duration-300">
                                <span className="px-3.5 h-9 leading-9 rounded-full bg-card shadow-card text-ink-2 font-medium" style={{ fontSize: 13 / scale }} />
                            </div>
                            {page.view.private && (
                                <div className="absolute inset-0 flex items-center justify-center bg-paper text-center px-10">
                                    <p className="text-ink-2 text-pretty" style={{ fontSize: 15 / scale, maxWidth: 420 / scale }}>
                                        <span className="block font-serif font-semibold text-ink" style={{ fontSize: 24 / scale }}>{pageName(page.view.path, lang)}</span>
                                        {t("This page is never recorded.", "Diese Seite wird nie aufgezeichnet.")}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {!page.recorded && !page.view.private && (
                <p className="absolute top-3 left-1/2 -translate-x-1/2 px-3 h-7 leading-7 rounded-full bg-card shadow-card text-[12px] text-ink-2 whitespace-nowrap">
                    {t("Not recorded: the page alone, without the visitor", "Nicht aufgezeichnet: nur die Seite, ohne den Besucher")}
                </p>
            )}
            {now === 0 && !loaded.current && !page.view.private && <span className="absolute bottom-4 right-4"><Loader size={36} /></span>}
        </div>
    );
}

function Controls({ tl, now, playing, recorded, onToggle, onSeek, speed, setSpeed, skip, setSkip }) {
    const t = useT();
    // The play button has the keyboard, so space plays and pauses from the start.
    const play = useRef(null);
    useEffect(() => { play.current?.focus({ preventScroll: true }); }, []);
    return (
        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2 px-5 max-sm:px-4 py-3 shadow-[inset_0_0.5px_0_var(--hairline)]">
            <button ref={play} onClick={onToggle} disabled={!recorded} aria-label={playing ? t("Pause", "Pause") : t("Play", "Abspielen")}
                className={`size-10 shrink-0 rounded-full inline-flex items-center justify-center bg-ink text-on-ink hover:bg-ink/88 active:scale-[0.96] transition-[background-color,scale] disabled:opacity-35 ${ring}`}>
                <Icon d={playing ? I.pause : I.play} size={15} className={playing ? "" : "translate-x-px"} />
            </button>
            <span className="w-[86px] shrink-0 text-[12.5px] text-ink-2 tabular-nums">{clock(now)} <span className="text-ink-4">/ {clock(tl.length)}</span></span>
            <Scrubber tl={tl} now={now} onSeek={onSeek} />
            <div className="flex items-center gap-3 max-md:ml-auto">
                <Segments small keep name={t("Speed", "Tempo")} value={speed} options={SPEEDS.map((x) => [x, `${x}×`])} onChange={setSpeed} />
                <label onMouseDown={(e) => e.preventDefault()} className="inline-flex items-center gap-2 text-[12.5px] text-ink-2 cursor-pointer select-none">
                    <input type="checkbox" checked={skip} onChange={(e) => setSkip(e.target.checked)} className="size-3.5 accent-[var(--pencil)]" />
                    {t("Skip pauses", "Pausen überspringen")}
                </label>
            </div>
        </div>
    );
}

/** The session's clock as a track: its pages side by side, the pauses fainter, the clicks and steps marked. Drag or click to go there. */
function Scrubber({ tl, now, onSeek }) {
    const t = useT(), lang = useCode();
    const ref = useRef(null);
    const [hover, setHover] = useState(null);
    const drag = useRef(false);
    const pct = (ms) => `${(ms / tl.length) * 100}%`;
    const at = (e) => { const r = ref.current.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width, 0, 1) * tl.length; };
    const onKey = (e) => {
        const to = { ArrowLeft: now - 5000, ArrowRight: now + 5000, Home: 0, End: tl.length, PageUp: now - 30000, PageDown: now + 30000 }[e.key];
        if (to === undefined) return;
        e.preventDefault();
        onSeek(to);
    };
    const hovered = hover == null ? null : tl.pages[pageAt(tl, hover)];
    const clicks = tl.pages.flatMap((p) => p.clicks.filter((c) => !c.rage || c.burst).map((c) => ({ T: p.start + c.t, rage: c.rage })));
    return (
        <div ref={ref} role="slider" tabIndex={0} aria-label={t("Position", "Position")} aria-valuemin={0} aria-valuemax={Math.round(tl.length / 1000)} aria-valuenow={Math.round(now / 1000)} aria-valuetext={clock(now)}
            onKeyDown={onKey}
            onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); onSeek(at(e)); }}
            onPointerMove={(e) => { setHover(at(e)); if (drag.current) onSeek(at(e)); }}
            onPointerUp={() => { drag.current = false; }} onPointerLeave={() => setHover(null)}
            className={`group relative flex-1 min-w-[220px] max-md:basis-full max-md:order-last h-9 cursor-pointer touch-none rounded-md outline-none focus-visible:shadow-[0_0_0_1.5px_var(--pencil)]`}>
            {tl.pages.map((p) => (
                <span key={p.index} className="absolute top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-ink/12 overflow-hidden" style={{ left: pct(p.start), width: `max(2px, calc(${pct(p.stop - p.start)} - 3px))` }}>
                    <span className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${clamp((now - p.start) / (p.stop - p.start), 0, 1) * 100}%` }} />
                </span>
            ))}
            {tl.quiet.map(([a, b], i) => <span key={i} className="absolute top-1/2 -translate-y-1/2 h-[6px] bg-[repeating-linear-gradient(135deg,var(--paper)_0_2px,transparent_2px_4px)] opacity-80 pointer-events-none" style={{ left: pct(a), width: pct(b - a) }} />)}
            {clicks.map((c, i) => <span key={i} className={`absolute top-[5px] w-[2px] h-[7px] -ml-px rounded-full pointer-events-none ${c.rage ? "bg-warning" : "bg-ink/35"}`} style={{ left: pct(c.T) }} />)}
            {tl.steps.map((x, i) => <span key={i} className="absolute top-1/2 -translate-y-1/2 -ml-[4.5px] size-[9px] rounded-full bg-pencil shadow-[0_0_0_2px_var(--paper)] pointer-events-none" style={{ left: pct(x.T) }} />)}
            <span className="absolute top-1/2 -translate-y-1/2 -ml-[7px] size-[14px] rounded-full bg-card shadow-[0_1px_3px_rgb(var(--shadow-rgb)/0.3),inset_0_0_0_0.5px_var(--hairline)] pointer-events-none transition-transform group-active:scale-110" style={{ left: pct(now) }} />
            {hovered && (
                <span className="absolute bottom-full mb-1 -translate-x-1/2 px-2 h-6 leading-6 rounded-md bg-ink text-on-ink text-[11.5px] font-medium whitespace-nowrap tabular-nums pointer-events-none" style={{ left: pct(hover) }}>
                    {clock(hover)} · {pageName(hovered.view.path, lang)}
                </span>
            )}
        </div>
    );
}

/* ── The journey beside the player ───────────────────────────────────────── */

const STEPS = { download: [I.download, ...STEP_NAMES.download], app: [I.browser, ...STEP_NAMES.app], open: [I.share, ...STEP_NAMES.open] };
const IMAGES = ["img", "svg", "path", "picture", "video"];

/** What happened, in order: each page, then its clicks, fields, tab changes, how far it was read, and the steps taken. */
function moments(s, tl, t, lang) {
    const out = [];
    const q = (x) => (lang === "de" ? `„${x}“` : `“${x}”`);
    for (const p of tl.pages) {
        out.push({ T: p.start, page: p });
        const verb = p.touch ? t("Tapped", "Tippte") : t("Clicked", "Klickte");
        for (const c of p.clicks) {
            if ((c.rage && !c.burst) || c.kind === "f") continue;
            // Something that acts by its label; the page itself by what is there: a heading's words, an image, the 3D scene.
            const what = c.kind ? (c.text ? q(c.text) : c.kind === "a" ? t("a link", "einen Link") : c.kind === "f" ? t("a field", "ein Feld") : t("a button", "einen Knopf"))
                : c.text && !/^[a-z0-9]+$/.test(c.text) ? q(c.text) : IMAGES.includes(c.text) ? t("an image", "ein Bild") : c.text === "canvas" ? t("the animation", "die Animation") : t("the page", "die Seite");
            const text = lang === "de" ? `${verb} auf ${what}` : `${verb} ${what}`;
            out.push({ T: p.start + c.t, icon: I.click, text: c.burst ? `${text}, ${c.burst}×` : text, warn: c.rage, faint: !c.kind });
        }
        for (const f of p.fields) out.push({ T: p.start + f.t, icon: I.field, text: f.typed ? t(`Typed in ${q(f.text)}`, `Schrieb in ${q(f.text)}`) : t(`Went to the field ${q(f.text)}`, `Ging ins Feld ${q(f.text)}`), faint: !f.typed });
        let left = null;
        for (const [at, shown] of p.hidden) {
            // Hidden as the site was left is said once, below.
            if (!shown && p.gone != null && p.gone - at < 1500) continue;
            if (!shown) { left = at; out.push({ T: p.start + at, icon: I.away, text: t("Left for another tab", "Wechselte in einen anderen Tab"), faint: true }); }
            else if (left != null) { out.push({ T: p.start + at, icon: I.back, text: t(`Came back after ${duration(Math.round((at - left) / 1000))}`, `Kam nach ${duration(Math.round((at - left) / 1000))} zurück`), faint: true }); left = null; }
        }
        if (p.gone != null) out.push({ T: p.start + p.gone, icon: I.away, text: t("Left the site", "Verliess die Website"), faint: true });
        // How far down the page was read, where it was furthest.
        let deepest = null;
        for (const [at, y, h] of p.scrolls) {
            const vh = p.viewports[Math.max(0, before(p.viewports, at))][2];
            const depth = h > 0 ? Math.min(100, Math.round(((y + vh) / h) * 100)) : 0;
            if (!deepest || depth > deepest.depth) deepest = { at, depth };
        }
        if (deepest && deepest.at > 0 && deepest.depth > 0) out.push({ T: p.start + deepest.at, icon: I.depth, text: deepest.depth >= 98 ? t("Read to the end", "Bis zum Ende gelesen") : t(`Read ${deepest.depth}% of the page`, `${deepest.depth} % der Seite gelesen`), faint: true });
    }
    for (const x of tl.steps) { const [icon, en, de] = STEPS[x.name] ?? [I.click, x.name, x.name]; out.push({ T: x.T, icon, text: t(en, de), step: true }); }
    // A page's own line first at its moment, then the rest in time.
    return out.sort((a, b) => a.T - b.T || (b.page ? 1 : 0) - (a.page ? 1 : 0));
}

/** Why a session has no recording at all, as far as can be told: pages never recorded, deleted, from before recording began, or turned off. */
function whyNot(s, t, lang) {
    const on = (d) => day(d.slice(0, 10)).toLocaleDateString(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });
    if (s.views.every((v) => v.private)) return t("Not recorded: its pages are never recorded.", "Nicht aufgezeichnet: ihre Seiten werden nie aufgezeichnet.");
    if (Date.now() - parse(s.start).getTime() > s.keep * 864e5) return t(`Its recording was deleted: recordings are kept ${s.keep} days.`, `Ihre Aufzeichnung ist gelöscht: Aufzeichnungen bleiben ${s.keep} Tage.`);
    if (!s.recordedSince || s.start < s.recordedSince) return s.recordedSince
        ? t(`Not recorded: the site has only been recording since ${on(s.recordedSince)}.`, `Nicht aufgezeichnet: die Website zeichnet erst seit dem ${on(s.recordedSince)} auf.`)
        : t("Not recorded: the site has not recorded any visit yet.", "Nicht aufgezeichnet: die Website hat noch keinen Besuch aufgezeichnet.");
    return t("Not recorded: the visitor turned recording off on the privacy page, or their browser asks sites not to track it.",
        "Nicht aufgezeichnet: der Besucher hat die Aufzeichnung in der Datenschutzerklärung ausgeschaltet, oder sein Browser bittet Websites, ihn nicht zu verfolgen.");
}

function Journey({ s, tl, now, onSeek }) {
    const t = useT(), lang = useCode();
    const items = useMemo(() => moments(s, tl, t, lang), [s, tl, t, lang]);
    const list = useRef(null);
    const current = before(items, now + 1, (x) => x.T);
    // The moment on view stays in sight as the replay moves on.
    useEffect(() => {
        const el = list.current?.querySelector(`[data-at="${current}"]`);
        el?.scrollIntoView({ block: "nearest" });
    }, [current]);
    const from = cameFrom(s, t);
    return (
        <aside aria-label={t("Journey", "Verlauf")} className="lg:w-[330px] shrink-0 min-h-0 max-lg:flex-1 overflow-y-auto overscroll-contain lg:shadow-[inset_0.5px_0_0_var(--hairline)] max-lg:shadow-[inset_0_0.5px_0_var(--hairline)] pb-6">
            <ol ref={list}>
                {items.map((it, i) => it.page ? (
                    <li key={i} data-at={i} className="px-2 pt-3 first:pt-2">
                        <button onClick={() => onSeek(it.T)} onMouseDown={(e) => e.preventDefault()} className={`w-full text-left px-3 py-2 rounded-xl flex items-baseline justify-between gap-3 hover:bg-ink/[0.04] ${ring} ${i === current ? "bg-pencil-wash" : ""}`}>
                            <span className="min-w-0">
                                <span className="block font-serif font-semibold tracking-[-0.015em] text-[17px] leading-snug">{pageName(it.page.view.path, lang)}</span>
                                <span className="block text-[11.5px] text-ink-3 truncate">
                                    {it.page.index === 0 && from ? from.charAt(0).toUpperCase() + from.slice(1) : hm(it.page.view.at)}
                                    {it.page.view.missing && <span className="text-warning"> · {t("does not exist", "gibt es nicht")}</span>}
                                    {!it.page.recorded && <span> · {t("not recorded", "nicht aufgezeichnet")}</span>}
                                </span>
                            </span>
                            <span className="shrink-0 text-[11.5px] text-ink-3 tabular-nums">{clock(it.T)}</span>
                        </button>
                    </li>
                ) : (
                    <li key={i} data-at={i} className="px-2">
                        <button onClick={() => onSeek(it.T - 600)} onMouseDown={(e) => e.preventDefault()} className={`w-full text-left pl-3 pr-3 py-[5px] rounded-lg flex items-start gap-2.5 text-[13px] leading-snug hover:bg-ink/[0.04] ${ring} ${i === current ? "bg-pencil-wash" : ""}`}>
                            <span className={`mt-px shrink-0 ${it.warn ? "text-warning" : it.step ? "text-pencil" : "text-ink-3"}`}><Icon d={it.icon} size={14} /></span>
                            <span className={`flex-1 min-w-0 break-words ${it.warn ? "text-warning" : it.step ? "font-medium" : it.faint ? "text-ink-2" : ""}`}>{it.text}</span>
                            <span className="shrink-0 text-[11px] text-ink-4 tabular-nums pt-px">{clock(it.T)}</span>
                        </button>
                    </li>
                ))}
            </ol>
            {!tl.pages.some((p) => p.recorded) && <p className="mx-5 mt-4 text-[12.5px] leading-relaxed text-ink-3 text-pretty">{whyNot(s, t, lang)}</p>}
        </aside>
    );
}
