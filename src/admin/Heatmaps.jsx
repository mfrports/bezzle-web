import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { bare, langOf, localize } from "@/i18n";
import { REPLAY } from "@/lib/trail";
import { pageName, SITE_LANGS } from "@/admin/names";
import { admin, card, clamp, Loader, n0, plural, ring, Segments, useCode, useParams, useT, Waiting } from "@/admin/ui";

/**
 * The admin area's Heatmaps view: for one page, where people click and how far down they read, drawn over the page
 * itself (api/_trails.php, from the trails lib/trail.js records). One page in one language, one kind of screen
 * (desktop, tablet, phone: the site's own breakpoints, 600 and 1060, since a page is laid out differently on each), the
 * last 7 or 30 days.
 *
 * The page sits in a frame as wide and as tall as most of those visitors' windows, greyed and faded so the map reads
 * over it, and scrolls like the page: wheel, drag, keys, or the strip beside it, which is the whole page at once.
 * Clicks: a density map in the pencil's blue, the more clicks the deeper; a click on something that stays put in the
 * window (the bar at the top) stays there as the page scrolls. Across a wide window a click is placed by its distance
 * from the middle, since the site is centred; on a tablet or phone in proportion to the width. Scroll depth: the page
 * fades the fewer views reached it, with lines where a quarter, half and three quarters of them had stopped. The home
 * page is one long scroll story, so its depth is how much of the story was watched. Pointing at the map says what is
 * there; beside it the same in words, and pointing at a row there shows its clicks alone.
 */

const SCREENS = [["desktop", "Desktop", "Desktop"], ["tablet", "Tablet", "Tablet"], ["phone", "Phone", "Handy"]];
const MAPS = [["clicks", "Clicks", "Klicks"], ["scroll", "Scroll depth", "Scrolltiefe"]];
const PERIODS = [[7, "7 days", "7 Tage"], [30, "30 days", "30 Tage"]];
// A window for a kind of screen nobody has used on the page yet.
const FALLBACK = { desktop: [1440, 900], tablet: [820, 1180], phone: [390, 844] };
const CELL = 4;     // px of the page in each cell of the density map
const SIGMA = 14;   // px: how far one click spreads
const REACH = 22;   // px around the pointer that its readout counts
const STRIP = 44;   // px: the whole page, beside the frame

const pct = (part, whole) => (whole ? `${Math.round((part / whole) * 100)}%` : "-");

/** A colour token as numbers, for drawing on a canvas: "#08856a" → [8, 133, 106]. */
function rgbOf(name) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const hex = v.match(/^#([0-9a-f]{6})$/i);
    if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16));
    return (v.match(/\d+(\.\d+)?/g) ?? [0, 0, 0]).slice(0, 3).map(Number);
}

/** What a click landed on, as the list names it: a link's or button's label; on the page itself, what is there. */
function clickName([kind, text], t) {
    if (kind) return text || (kind === "a" ? t("A link", "Ein Link") : kind === "f" ? t("A field", "Ein Feld") : t("A button", "Ein Knopf"));
    if (text && !/^[a-z0-9]+$/.test(text)) return `“${text}”`;
    if (["img", "svg", "path", "picture", "video"].includes(text)) return t("An image", "Ein Bild");
    if (text === "canvas") return t("The animation", "Die Animation");
    return t("The page itself", "Die Seite selbst");
}

/* ── The maps' numbers ───────────────────────────────────────────────────── */

/**
 * The clicks as a density map, the page's (by where they landed on it) and the window's (what stays put there) apart:
 * each click spread into the cells around it, and the deepest cell of both, which the colours are measured against.
 */
function densityOf(points, W, H) {
    const cols = Math.ceil(W / CELL) + 1;
    const lowest = points.reduce((m, p) => (p.fixed ? m : Math.max(m, p.y)), H);
    const pageRows = Math.ceil((lowest + 3 * SIGMA) / CELL) + 1, winRows = Math.ceil(H / CELL) + 1;
    const page = new Float32Array(cols * pageRows), win = new Float32Array(cols * winRows);
    const R = Math.ceil((3 * SIGMA) / CELL);
    const kernel = [];
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) kernel.push([dx, dy, Math.exp(-((dx * CELL) ** 2 + (dy * CELL) ** 2) / (2 * SIGMA ** 2))]);
    for (const p of points) {
        const grid = p.fixed ? win : page, rows = p.fixed ? winRows : pageRows;
        const cx = Math.round(p.x / CELL), cy = Math.round(p.y / CELL);
        for (const [dx, dy, w] of kernel) {
            const x = cx + dx, y = cy + dy;
            if (x >= 0 && x < cols && y >= 0 && y < rows) grid[y * cols + x] += w;
        }
    }
    let max = 0;
    for (const g of [page, win]) for (let i = 0; i < g.length; i++) if (g[i] > max) max = g[i];
    return { cols, pageRows, winRows, page, win, max: max || 1, height: pageRows * CELL };
}

/** How much of a cell's colour shows: deeper with more clicks, by the square root so a few still show, and fading out at the edges. */
const alphaOf = (v, max) => Math.min(1, Math.sqrt(v / max) * 1.05);

/** The share of views that read at least `f` of the page (0 to 1), from how many stopped at each percent. */
function reachOf(depth) {
    const total = depth.reduce((s, n) => s + n, 0);
    const atLeast = new Array(102).fill(0);
    for (let p = 100; p >= 0; p--) atLeast[p] = atLeast[p + 1] + depth[p];
    return { total, share: (f) => (total ? atLeast[clamp(Math.ceil(f * 100), 0, 100)] / total : 0), atLeast };
}

/** How far down the page a share of the views got (the deepest percent at least that share reached). */
const depthFor = (reach, share) => { for (let p = 100; p >= 0; p--) if (reach.total && reach.atLeast[p] / reach.total >= share) return p; return 0; };

/* ── The view ────────────────────────────────────────────────────────────── */

export default function Heatmaps({ signedOut }) {
    const [params, , setParams] = useParams();
    const t = useT(), lang = useCode();
    const page = params.get("page") || "";
    const screen = SCREENS.some(([k]) => k === params.get("screen")) ? params.get("screen") : "desktop";
    const map = params.get("map") === "scroll" ? "scroll" : "clicks";
    const days = params.get("days") === "7" ? 7 : 30;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [only, setOnly] = useState(null);   // the labels whose clicks alone are shown
    const [go, setGo] = useState(null);       // where the list asks the page to go: { y }
    const asked = useRef(0);
    const setParam = useCallback((key, value) => setParams((p) => { const n = new URLSearchParams(p); if (value) n.set(key, value); else n.delete(key); return n; }, { replace: true }), [setParams]);

    const query = `&path=${encodeURIComponent(page ? bare(page) : "")}&lang=${page ? langOf(page).code : ""}&screen=${screen}&days=${days}`;
    useEffect(() => {
        const ask = ++asked.current;
        setLoading(true);
        setOnly(null);
        admin("heatmap", undefined, query)
            .then((d) => { if (ask === asked.current) setData(d); })
            .catch(signedOut)
            .finally(() => { if (ask === asked.current) setLoading(false); });
    }, [query, signedOut]);

    const [W, H] = data?.window ?? FALLBACK[screen];
    // Each click where it would land in a window of that width.
    const points = useMemo(() => (data?.clicks ?? []).map(([x, y, w, fixed, index, rage]) => ({
        x: screen === "desktop" ? W / 2 + (x - w / 2) : (x * W) / Math.max(1, w), y, fixed: !!fixed, index, rage: !!rage,
    })), [data, screen, W]);
    // What was clicked, the most first: by label, and the page itself by what the list calls it (a paragraph and a picture's frame are both the page).
    const ranked = useMemo(() => {
        const by = new Map();
        for (const p of points) {
            const [kind] = data.labels[p.index];
            const key = kind ? p.index : clickName(data.labels[p.index], t);
            const r = by.get(key) ?? { key, index: p.index, indexes: new Set(), clicks: 0, rage: 0, ys: [], fixed: p.fixed };
            r.clicks++; if (p.rage) r.rage++; r.ys.push(p.y); r.indexes.add(p.index);
            by.set(key, r);
        }
        return [...by.values()].sort((a, b) => b.clicks - a.clicks);
    }, [points, data, t]);
    const reach = useMemo(() => reachOf(data?.depth ?? []), [data]);

    const current = data ? localize(data.path, data.lang) : page;
    const choices = data ? [...data.pages] : [];
    if (data && !choices.some((p) => p.path === data.path && p.lang === data.lang)) choices.unshift({ path: data.path, lang: data.lang, views: 0 });
    const first = !data;

    return (
        <div className="mt-9">
            <div className="flex flex-wrap items-center gap-3">
                <label className="relative max-sm:w-full">
                    <span className="sr-only">{t("Page", "Seite")}</span>
                    <select value={current} onChange={(e) => setParam("page", e.target.value)} disabled={!data}
                        className={`h-10 w-full sm:w-[340px] pl-3.5 pr-9 rounded-[12px] bg-card shadow-card text-[13.5px] font-medium text-ink appearance-none cursor-pointer ${ring}`}>
                        {choices.map((p) => {
                            const at = localize(p.path, p.lang);
                            // the page by its name in the admin's language, and which of the site's languages it was read in
                            return <option key={at} value={at}>{pageName(p.path, lang)} · {t(...SITE_LANGS[p.lang] ?? [p.lang, p.lang])} · {n0(p.views, lang)}</option>;
                        })}
                    </select>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none"><path d="m4 6 4 4 4-4" /></svg>
                </label>
                <Segments name={t("Screen", "Bildschirm")} value={screen} onChange={(k) => setParam("screen", k === "desktop" ? "" : k)}
                    options={SCREENS.map(([k, en, de]) => [k, t(en, de), data ? n0(data.screens[k], lang) : null])} />
                <Segments name={t("Map", "Karte")} value={map} onChange={(k) => setParam("map", k === "clicks" ? "" : k)} options={MAPS.map(([k, en, de]) => [k, t(en, de)])} />
                <div className="sm:ml-auto">
                    <Segments name={t("Period", "Zeitraum")} value={days} onChange={(k) => setParam("days", k === 30 ? "" : String(k))} options={PERIODS.map(([k, en, de]) => [k, t(en, de)])} />
                </div>
            </div>

            {first ? (
                <Waiting className="mt-5 h-[520px]" />
            ) : !data.pages.length ? (
                <div data-reveal="" className={`${card} mt-5 px-8 py-20 text-center`}>
                    <p className="font-serif font-semibold tracking-[-0.02em] text-[30px]">{t("Nothing recorded yet.", "Noch nichts aufgezeichnet.")}</p>
                    <p className="mt-3 mx-auto max-w-[460px] text-[14px] text-ink-2 text-pretty">{t("The heatmaps are drawn from the recorded sessions. They fill in as people visit.", "Die Heatmaps entstehen aus den aufgezeichneten Sitzungen. Sie füllen sich, sobald Leute vorbeikommen.")}</p>
                </div>
            ) : (
                <div data-reveal="" className={`mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px] transition-opacity duration-200 ${loading ? "opacity-55" : ""}`}>
                    <section aria-label={t("The map", "Die Karte")} className="rounded-[16px] bg-card shadow-card min-w-0 overflow-hidden">
                        {data.views ? (
                            <Board key={`${current}|${W}|${H}`} url={current} W={W} H={H} map={map} points={only == null ? points : points.filter((p) => only.has(p.index))}
                                labels={data.labels} reach={reach} views={data.views} clicks={points.length} go={go} />
                        ) : (
                            <div className="px-8 py-24 text-center">
                                <p className="font-serif text-[24px] tracking-[-0.02em]">{t("No views on this screen.", "Keine Aufrufe auf diesem Bildschirm.")}</p>
                                <p className="mt-2 text-[14px] text-ink-3">{t(`Nobody read this page on a ${screen === "phone" ? "phone" : screen} in the last ${days} days.`, `Niemand hat diese Seite in den letzten ${days} Tagen auf ${screen === "phone" ? "einem Handy" : screen === "tablet" ? "einem Tablet" : "einem Desktop"} gelesen.`)}</p>
                                <div className="mt-6 flex justify-center gap-2">
                                    {SCREENS.filter(([k]) => k !== screen && data.screens[k]).map(([k, en, de]) => (
                                        <button key={k} onClick={() => setParam("screen", k === "desktop" ? "" : k)} className="btn btn-quiet btn-small">{t(en, de)} <span className="text-ink-3 tabular-nums">{n0(data.screens[k], lang)}</span></button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                    <aside className="rounded-[16px] bg-card shadow-card min-w-0 self-start">
                        {map === "clicks"
                            ? <Clicked data={data} ranked={ranked} total={points.length} only={only} setOnly={setOnly} onGo={(y) => setGo({ y })} />
                            : <Depth data={data} reach={reach} onGo={(f) => setGo({ f })} />}
                    </aside>
                </div>
            )}

            <p className="mt-10 max-w-[720px] text-[12.5px] leading-relaxed text-ink-3 text-pretty">
                {t(
                    <>Drawn from the recorded sessions of the last {days} days, kept {data?.keep ?? 30} days: every click on the page, and how far down each view got. The page is shown as it is today,
                    at the window size most of those visitors had; on a wide screen a click is placed by its distance from the middle, on a tablet or phone in proportion to the width, so a page
                    changed since, or a window very unlike the one shown, can put a click a little off what it was on.</>,
                    <>Aus den aufgezeichneten Sitzungen der letzten {days} Tage, die {data?.keep ?? 30} Tage bleiben: jeder Klick auf der Seite und wie weit jeder Aufruf nach unten kam. Die Seite erscheint, wie sie heute
                    ist, in der Fenstergrösse, die die meisten dieser Besucher hatten; auf einem breiten Bildschirm sitzt ein Klick nach seinem Abstand zur Mitte, auf Tablet und Handy im Verhältnis zur Breite.
                    Eine seither geänderte Seite oder ein ganz anderes Fenster kann einen Klick daher etwas neben das setzen, worauf er ging.</>,
                )}
            </p>
        </div>
    );
}

/* ── The page with its map ───────────────────────────────────────────────── */

function Board({ url, W, H, map, points, labels, reach, views, clicks, go }) {
    const t = useT(), lang = useCode();
    const room = useRef(null);
    const frame = useRef(null);
    const paint = useRef(null);
    const strip = useRef(null);
    const over = useRef(null);
    const cells = useRef(null);            // the window's cells, kept from frame to frame as the page scrolls
    const [width, setWidth] = useState(0);
    const [y, setY] = useState(0);         // how far the page in the frame is scrolled
    const [D, setD] = useState(H * 3);     // and how tall it is
    const [ready, setReady] = useState(false);
    const [hover, setHover] = useState(null);
    const [theme, setTheme] = useState(0);
    const tallest = typeof window === "undefined" ? 800 : Math.min(window.innerHeight - 250, 780);
    const scale = width ? clamp(Math.min((width - STRIP - 16) / W, Math.max(320, tallest) / H), 0.05, 1) : 0;
    const k = useRef(scale);
    k.current = scale;
    const grid = useMemo(() => (map === "clicks" ? densityOf(points, W, H) : null), [map, points, W, H]);
    const whole = Math.max(D, grid?.height ?? 0, H + 1);

    useEffect(() => {
        const ro = new ResizeObserver(([e]) => setWidth(Math.round(e.contentRect.width)));
        ro.observe(room.current);
        // The colours follow the admin area's appearance.
        const mo = new MutationObserver(() => setTheme((n) => n + 1));
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const flip = () => setTheme((n) => n + 1);
        mq.addEventListener("change", flip);
        return () => { ro.disconnect(); mo.disconnect(); mq.removeEventListener("change", flip); };
    }, []);

    const win = () => { try { return frame.current?.contentWindow ?? null; } catch { return null; } };
    const scrollTo = useCallback((top, smooth = false) => { const w = win(); if (w) w.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "instant" }); }, []);
    const onLoad = () => {
        const w = win();
        if (!w) return;
        let queued = false;
        w.addEventListener("scroll", () => { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; setY(w.scrollY); }); }, { passive: true });
        setD(w.document.documentElement.scrollHeight);
        setReady(true);
    };
    // A page grows as it settles (pictures, the docs' text): its height, now and then.
    useEffect(() => {
        if (!ready) return;
        const tick = setInterval(() => { const w = win(); if (w) setD(w.document.documentElement.scrollHeight); }, 800);
        return () => clearInterval(tick);
    }, [ready]);
    // The list asks for a place on the page: a click's height, or a share of the page.
    useEffect(() => { if (go) scrollTo((go.f != null ? go.f * D : go.y) - H / 2, true); }, [go]); // eslint-disable-line react-hooks/exhaustive-deps

    // The wheel and the keys scroll the page in the frame, not the admin area, until it reaches an end.
    useEffect(() => {
        const el = over.current;
        if (!el) return;
        const wheel = (e) => {
            const w = win();
            if (!w || e.ctrlKey) return;
            const dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? H : 1);
            const max = w.document.documentElement.scrollHeight - w.innerHeight;
            if ((dy > 0 && w.scrollY >= max - 1) || (dy < 0 && w.scrollY <= 0)) return;
            e.preventDefault();
            w.scrollBy({ top: dy / k.current, behavior: "instant" });
        };
        el.addEventListener("wheel", wheel, { passive: false });
        return () => el.removeEventListener("wheel", wheel);
    }, [H, ready]);
    const onKey = (e) => {
        const by = { ArrowDown: 60, ArrowUp: -60, PageDown: H * 0.85, PageUp: -H * 0.85, " ": H * 0.85 }[e.key];
        if (by != null) { e.preventDefault(); scrollTo(y + by); }
        if (e.key === "Home") { e.preventDefault(); scrollTo(0); }
        if (e.key === "End") { e.preventDefault(); scrollTo(whole); }
    };
    // A finger drags the page, as on a phone.
    const drag = useRef(null);
    const onDown = (e) => { if (e.pointerType === "mouse") return; drag.current = { from: e.clientY, at: y }; e.currentTarget.setPointerCapture(e.pointerId); };
    const onMove = (e) => {
        if (drag.current) { scrollTo(drag.current.at - (e.clientY - drag.current.from) / scale); return; }
        const r = e.currentTarget.getBoundingClientRect();
        setHover({ x: (e.clientX - r.left) / scale, y: (e.clientY - r.top) / scale, left: e.clientX - r.left, top: e.clientY - r.top });
    };

    // The map over the window on view, drawn again as the page scrolls.
    useEffect(() => {
        const c = paint.current;
        if (!c || !scale) return;
        const dpr = window.devicePixelRatio || 1;
        c.width = Math.round(W * scale * dpr); c.height = Math.round(H * scale * dpr);
        const ctx = c.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W * scale, H * scale);
        if (map === "clicks") {
            const [r, g, b] = rgbOf("--pencil");
            const top = Math.floor(y / CELL), rows = Math.ceil(H / CELL) + 2;
            if (cells.current?.img.width !== grid.cols || cells.current.img.height !== rows) cells.current = { img: new ImageData(grid.cols, rows), off: new OffscreenCanvas(grid.cols, rows) };
            const { img, off } = cells.current;
            for (let row = 0; row < rows; row++) {
                const pr = top + row, wr = Math.round((pr * CELL - y) / CELL);
                for (let col = 0; col < grid.cols; col++) {
                    const v = (pr < grid.pageRows ? grid.page[pr * grid.cols + col] : 0) + (wr >= 0 && wr < grid.winRows ? grid.win[wr * grid.cols + col] : 0);
                    const i = (row * grid.cols + col) * 4;
                    img.data[i] = r; img.data[i + 1] = g; img.data[i + 2] = b; img.data[i + 3] = Math.round(alphaOf(v, grid.max) * 235);
                }
            }
            off.getContext("2d").putImageData(img, 0, 0);
            ctx.imageSmoothingEnabled = true;
            ctx.drawImage(off, -CELL / 2 * scale, (top * CELL - y - CELL / 2) * scale, grid.cols * CELL * scale, rows * CELL * scale);
        } else {
            // The fewer views got this far down, the more the page fades into the paper.
            const [r, g, b] = rgbOf("--paper");
            for (let at = 0; at < H; at += 4) {
                ctx.fillStyle = `rgb(${r} ${g} ${b} / ${(1 - reach.share((y + at) / whole)) * 0.86})`;
                ctx.fillRect(0, at * scale, W * scale, 4 * scale + 0.5);
            }
        }
    }, [map, grid, reach, y, whole, W, H, scale, theme]);

    // The whole page at once, beside the frame, with the window on view marked; a click there goes to it.
    const stripH = H * scale;
    useEffect(() => {
        const c = strip.current;
        if (!c || !scale) return;
        const dpr = window.devicePixelRatio || 1;
        c.width = STRIP * dpr; c.height = Math.round(stripH * dpr);
        const ctx = c.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, STRIP, stripH);
        const [r, g, b] = rgbOf("--pencil");
        if (map === "clicks") {
            const img = new ImageData(grid.cols, grid.pageRows);
            for (let i = 0; i < grid.page.length; i++) {
                const v = grid.page[i] + (i < grid.win.length ? grid.win[i] : 0);
                img.data[i * 4] = r; img.data[i * 4 + 1] = g; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = Math.round(alphaOf(v, grid.max) * 255);
            }
            const off = new OffscreenCanvas(grid.cols, grid.pageRows);
            off.getContext("2d").putImageData(img, 0, 0);
            ctx.imageSmoothingEnabled = true;
            ctx.drawImage(off, 0, 0, STRIP, (grid.height / whole) * stripH);
        } else {
            for (let at = 0; at < stripH; at += 2) {
                ctx.fillStyle = `rgb(${r} ${g} ${b} / ${reach.share(at / stripH) * 0.8})`;
                ctx.fillRect(0, at, STRIP, 2.5);
            }
        }
    }, [map, grid, reach, whole, stripH, scale, theme]);
    const onStrip = (e) => {
        if (e.type === "pointermove" && !(e.buttons & 1)) return;
        if (e.type === "pointerdown") e.currentTarget.setPointerCapture(e.pointerId);
        const r = e.currentTarget.getBoundingClientRect();
        scrollTo(((e.clientY - r.top) / r.height) * whole - H / 2);
    };

    // What is under the pointer: the clicks around it and what most of them were on, or how many views got that far.
    let readout = null;
    if (hover && scale) {
        if (map === "clicks") {
            const near = points.filter((p) => Math.hypot(p.x - hover.x, p.y - (p.fixed ? hover.y : hover.y + y)) <= REACH);
            if (near.length) {
                const by = new Map();
                near.forEach((p) => by.set(p.index, (by.get(p.index) ?? 0) + 1));
                const [top, many] = [...by].sort((a, b) => b[1] - a[1])[0];
                const rage = near.filter((p) => p.rage).length;
                readout = <><b className="font-semibold tabular-nums">{plural(near.length, lang, t(["click", "clicks"], ["Klick", "Klicks"]))}</b><span className="text-on-ink/70"> · {clickName(labels[top], t)}{by.size > 1 ? ` ${n0(many, lang)}` : ""}{rage ? ` · ${t(`${rage} in rage`, `${rage} wütend`)}` : ""}</span></>;
            }
        } else readout = <><b className="font-semibold tabular-nums">{pct(reach.share((hover.y + y) / whole) * reach.total, reach.total)}</b><span className="text-on-ink/70"> {t("of views got this far", "der Aufrufe kamen so weit")}</span></>;
    }

    const lines = map === "scroll" ? [0.75, 0.5, 0.25].map((share) => ({ share, at: (depthFor(reach, share) / 100) * whole })) : [];
    return (
        <div>
            <div className="px-5 pt-4 pb-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 shadow-[inset_0_-0.5px_0_var(--hairline)]">
                <p className="min-w-0 text-[12.5px] text-ink-3 tabular-nums truncate">
                    <span className="font-mono">bezzle.ch{url === "/" ? "" : url}</span> · {W} × {H} · {plural(views, lang, t(["view", "views"], ["Aufruf", "Aufrufe"]))}{map === "clicks" && ` · ${plural(clicks, lang, t(["click", "clicks"], ["Klick", "Klicks"]))}`}
                </p>
                {/* The scale: the one green, from a few to many; or the paper, from everyone to nobody. */}
                <p className="flex items-center gap-2 text-[11.5px] text-ink-3" aria-hidden="true">
                    {map === "clicks" ? t("Fewer", "Weniger") : t("Seen by all", "Von allen gesehen")}
                    <i className={`w-20 h-2 rounded-full shadow-[inset_0_0_0_0.5px_var(--hairline)] ${map === "clicks" ? "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--pencil)_18%,transparent),var(--pencil))]" : "bg-[linear-gradient(90deg,var(--ink-3),var(--paper))]"}`} />
                    {map === "clicks" ? t("More clicks", "Mehr Klicks") : t("by few", "von wenigen")}
                </p>
            </div>
            <div ref={room} className="px-4 py-4 bg-table">
                {scale > 0 && (
                    <div className="flex justify-center gap-4">
                        <div className="relative rounded-[10px] overflow-hidden bg-paper shadow-[0_0_0_0.5px_rgb(0_0_0/0.14),0_24px_50px_-12px_rgb(var(--shadow-rgb)/0.3),0_6px_14px_rgb(var(--shadow-rgb)/0.1)] shrink-0" style={{ width: W * scale, height: H * scale }}>
                            <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
                                <iframe ref={frame} name={REPLAY} src={url} onLoad={onLoad} inert tabIndex={-1} title={t("The page", "Die Seite")}
                                    className={`block w-full h-full border-0 bg-paper ${map === "clicks" ? "grayscale" : ""}`} />
                            </div>
                            {map === "clicks" && <div className="absolute inset-0 bg-paper/45 pointer-events-none" />}
                            <canvas ref={paint} className="absolute inset-0 pointer-events-none" style={{ width: W * scale, height: H * scale }} />
                            {lines.map(({ share, at }) => at - y > 2 && at - y < H - 2 && (
                                <div key={share} className="absolute inset-x-0 pointer-events-none" style={{ top: (at - y) * scale }}>
                                    <i className="block h-px bg-ink/55" />
                                    <span className="absolute left-3 -top-3 px-2 h-6 leading-6 rounded-full bg-ink text-on-ink text-[11.5px] font-medium tabular-nums whitespace-nowrap">
                                        {t(`${share * 100}% of views got this far`, `${share * 100} % der Aufrufe kamen so weit`)}
                                    </span>
                                </div>
                            ))}
                            <div ref={over} tabIndex={0} role="img" aria-label={map === "clicks" ? t("Where the page was clicked; the list beside says the same", "Wo auf die Seite geklickt wurde; die Liste daneben sagt dasselbe") : t("How far down the page was read; the list beside says the same", "Wie weit die Seite gelesen wurde; die Liste daneben sagt dasselbe")}
                                onKeyDown={onKey} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={() => { drag.current = null; }} onPointerLeave={() => setHover(null)}
                                className="absolute inset-0 cursor-crosshair touch-none outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--pencil)] rounded-[10px]" />
                            {readout && (
                                <span className="absolute px-2.5 h-7 leading-7 rounded-full bg-ink text-on-ink text-[12px] whitespace-nowrap pointer-events-none shadow-card max-w-[300px] truncate"
                                    style={{ left: Math.min(hover.left + 14, W * scale - 160), top: Math.max(4, hover.top - 36) }}>{readout}</span>
                            )}
                            {!ready && <span className="absolute inset-0 flex items-center justify-center bg-paper"><Loader size={36} /></span>}
                        </div>
                        <div className="relative shrink-0 rounded-md overflow-hidden bg-paper shadow-[inset_0_0_0_0.5px_var(--hairline)] cursor-pointer touch-none" style={{ width: STRIP, height: stripH }}
                            onPointerDown={onStrip} onPointerMove={onStrip} title={t("The whole page", "Die ganze Seite")}>
                            <canvas ref={strip} className="absolute inset-0" style={{ width: STRIP, height: stripH }} />
                            <i className="absolute inset-x-0 rounded-[3px] shadow-[inset_0_0_0_1.5px_var(--ink)] bg-ink/[0.06] pointer-events-none" style={{ top: (y / whole) * stripH, height: Math.max(6, (H / whole) * stripH) }} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ── Beside the map, in words ────────────────────────────────────────────── */

function Clicked({ data, ranked, total, only, setOnly, onGo }) {
    const t = useT(), lang = useCode();
    const rage = ranked.reduce((s, r) => s + r.rage, 0);
    const idle = ranked.filter((r) => !data.labels[r.index][0]).reduce((s, r) => s + r.clicks, 0);
    const most = ranked[0]?.clicks ?? 1;
    return (
        <div className="py-5">
            <div className="px-5">
                <h2 className="font-serif font-semibold tracking-[-0.02em] text-[20px] leading-tight">{t("Most clicked", "Am meisten geklickt")}</h2>
                <p className="mt-1 text-[12.5px] text-ink-3 text-pretty">
                    {t(`${plural(total, "en", ["click", "clicks"])} in ${plural(data.views, "en", ["view", "views"])}`, `${plural(total, "de", ["Klick", "Klicks"])} in ${plural(data.views, "de", ["Aufruf", "Aufrufen"])}`)}
                    {idle > 0 && <>{" · "}{t(`${pct(idle, total)} on things that do nothing`, `${pct(idle, total)} auf Dinge, die nichts tun`)}</>}
                    {rage > 0 && <span className="text-warning"> · {plural(rage, lang, t(["rage click", "rage clicks"], ["Wutklick", "Wutklicks"]))}</span>}
                </p>
            </div>
            {ranked.length ? (
                <ol className="mt-3 px-2" onMouseLeave={() => setOnly(null)}>
                    {ranked.slice(0, 14).map((r) => {
                        const [kind] = data.labels[r.index];
                        const mid = [...r.ys].sort((a, b) => a - b)[Math.floor(r.ys.length / 2)];
                        return (
                            <li key={r.key}>
                                <button onMouseEnter={() => setOnly(r.indexes)} onFocus={() => setOnly(r.indexes)} onBlur={() => setOnly(null)} onClick={() => { if (!r.fixed) onGo(mid); }}
                                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-ink/[0.04] ${ring} ${only === r.indexes ? "bg-pencil-wash" : ""}`}>
                                    <span className="flex items-baseline justify-between gap-3 text-[13px]">
                                        <span className={`min-w-0 truncate ${kind ? "font-medium" : "text-ink-2"}`}>{clickName(data.labels[r.index], t)}</span>
                                        <span className="shrink-0 tabular-nums text-ink-2">{n0(r.clicks, lang)}</span>
                                    </span>
                                    <span className="mt-1.5 flex items-center gap-2">
                                        <i className="h-1 rounded-full bg-pencil" style={{ width: `${Math.max(2, (r.clicks / most) * 100)}%` }} />
                                    </span>
                                    {(!kind || r.rage > 0 || r.fixed) && (
                                        <span className="mt-1 block text-[11.5px] text-ink-3">
                                            {[!kind && t("Not something that acts", "Nichts, das etwas tut"), r.fixed && t("In the bar at the top", "In der Leiste oben"), r.rage > 0 && plural(r.rage, lang, t(["rage click", "rage clicks"], ["Wutklick", "Wutklicks"]))].filter(Boolean).join(" · ")}
                                        </span>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            ) : <p className="px-5 mt-4 text-[13px] text-ink-3">{t("No clicks on this page yet.", "Noch keine Klicks auf dieser Seite.")}</p>}
            {ranked.length > 0 && <p className="px-5 mt-3 text-[11.5px] text-ink-3 text-pretty">{t("Point at a row to see its clicks alone; a click takes the page there.", "Zeig auf eine Zeile, um nur ihre Klicks zu sehen; ein Klick bringt die Seite dorthin.")}</p>}
        </div>
    );
}

function Depth({ data, reach, onGo }) {
    const t = useT(), lang = useCode();
    const n = reach.total;
    const mean = n ? Math.round(data.depth.reduce((s, c, p) => s + c * p, 0) / n) : 0;
    const marks = [[25, "A quarter of the page", "Ein Viertel der Seite"], [50, "Half of it", "Die Hälfte"], [75, "Three quarters", "Drei Viertel"], [100, "The end", "Das Ende"]];
    return (
        <div className="py-5">
            <div className="px-5">
                <h2 className="font-serif font-semibold tracking-[-0.02em] text-[20px] leading-tight">{t("How far down", "Wie weit nach unten")}</h2>
                <p className="mt-1 text-[12.5px] text-ink-3 text-pretty">{n ? t(`${plural(n, "en", ["view", "views"])}, read to ${mean}% of the page on average`, `${plural(n, "de", ["Aufruf", "Aufrufe"])}, im Schnitt bis ${mean} % der Seite gelesen`) : t("No views yet.", "Noch keine Aufrufe.")}</p>
            </div>
            {n > 0 && (
                <ol className="mt-3 px-2">
                    {marks.map(([p, en, de]) => {
                        const share = reach.atLeast[p] / n;
                        return (
                            <li key={p}>
                                <button onClick={() => onGo(p / 100)} className={`w-full text-left px-3 py-2.5 rounded-lg hover:bg-ink/[0.04] ${ring}`}>
                                    <span className="flex items-baseline justify-between gap-3 text-[13px]">
                                        <span className="font-medium">{t(en, de)}</span>
                                        <span className="shrink-0 tabular-nums text-ink-2">{pct(reach.atLeast[p], n)}</span>
                                    </span>
                                    <span className="mt-1.5 block h-1 rounded-full bg-ink/8"><i className="block h-1 rounded-full bg-pencil" style={{ width: `${Math.max(1, share * 100)}%` }} /></span>
                                </button>
                            </li>
                        );
                    })}
                </ol>
            )}
            {n > 0 && <p className="px-5 mt-3 text-[11.5px] text-ink-3 text-pretty">{t("The share of views that got at least this far down; a click takes the page there.", "Der Anteil der Aufrufe, die mindestens so weit nach unten kamen; ein Klick bringt die Seite dorthin.")}</p>}
        </div>
    );
}
