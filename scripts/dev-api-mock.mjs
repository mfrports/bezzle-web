/**
 * A stand-in for api/*.php while `npm run dev` runs, as there is no PHP here: the admin area (api/admin.php) on a few
 * months of made-up visits, sessions to replay and clicks for the heatmaps, and the site's own counting (hit.php,
 * trail.php), which keeps the dev server's own visits for real, in memory, so they show among the made-up ones today
 * from any browser that has not signed in to the admin area. The password is anything of 12 characters or more.
 * Nothing here is used in production.
 */
import { releaseInfo } from "./release-info.mjs";

function json(res, data, code = 200) {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
}
function readJson(req) {
    return new Promise((resolve) => {
        let b = "";
        req.on("data", (c) => (b += c));
        req.on("end", () => { try { resolve(JSON.parse(b || "{}")); } catch { resolve({}); } });
    });
}
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const local = (d = new Date()) => `${iso(d)} ${d.toTimeString().slice(0, 8)}`;
const ago = (days) => local(new Date(Date.now() - days * 864e5));
const RELEASES = (() => { try { return releaseInfo().notes.map((n) => ({ version: n.version, date: n.date })); } catch { return []; } })();

/* ── The Visitors view ───────────────────────────────────────────────────── */

const hits = new Map(); // id → { path, at }: the dev server's own page views, for "on the site now"
const COUNTED = 75;
/** The `days` days ending on `end` (today, unless days of one's own were asked for), and as many before them. */
function analytics(days, end = new Date(), custom = false) {
    let s = 11;
    const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    const releaseDays = new Set(RELEASES.map((x) => x.date));
    const rows = [];
    for (let i = 2 * days - 1; i >= 0; i--) {
        const d = new Date(end); d.setDate(d.getDate() - i);
        const key = iso(d), prior = new Date(d); prior.setDate(prior.getDate() - 1);
        // How many days ago the day was: the story (growth, a Hacker News day, when counting began) is told from today.
        const back = Math.round((new Date().setHours(12, 0, 0, 0) - new Date(d).setHours(12, 0, 0, 0)) / 864e5);
        const hn = { 19: 6.2, 18: 2.8, 17: 1.6, 16: 1.2 }[back] ?? 1;
        const lift = releaseDays.has(key) ? 1.5 : releaseDays.has(iso(prior)) ? 1.2 : 1;
        const people = (58 + (COUNTED - back) * 0.9) * [0.72, 1.08, 1.12, 1.06, 1.0, 0.88, 0.7][d.getDay()] * hn * lift * (0.85 + r() * 0.3);
        const counted = back < COUNTED;
        const visitors = counted ? Math.round(people) : 0;
        rows.push({
            day: key, visitors, views: Math.round(visitors * (2.1 + r() * 0.7)),
            seconds: counted ? Math.round(58 + r() * 30 - (hn > 2 ? 20 : 0)) : null,
            downloads: counted ? Math.round((people * (0.11 + r() * 0.05)) / (hn > 2 ? 1.8 : 1)) : 0,
            shared: counted ? Math.round(people * (0.025 + r() * 0.02)) : 0,
        });
    }
    const sum = (list, k) => list.reduce((n, x) => n + (x[k] ?? 0), 0);
    const totals = (list) => {
        const visitors = sum(list, "visitors"), timed = list.filter((x) => x.seconds != null);
        return { visitors, views: sum(list, "views"), seconds: timed.length ? Math.round(sum(timed, "seconds") / timed.length) : null, scroll: visitors ? 58 : null, bounce: visitors ? 0.41 : null, downloads: sum(list, "downloads"), shared: sum(list, "shared") };
    };
    const daily = rows.slice(days), previousDaily = rows.slice(0, days), now = totals(daily), V = now.visitors, views = now.views;
    const share = (shares, rates = {}) => Object.entries(shares).map(([name, sh]) => [name, Math.round(V * sh), Math.round(V * sh * (rates[name] ?? 0.1))]);
    const PAGES = [["/", 0.34, 74, 41], ["/download.html", 0.15, 38, 86], ["/docs/", 0.07, 46, 64], ["/releases.html", 0.05, 52, 38], ["/support.html", 0.05, 61, 57], ["/open.html", 0.045, 18, 92],
        ["/docs/start.html", 0.04, 128, 62], ["/docs/import.html", 0.035, 144, 58], ["/docs/components.html", 0.025, 117, 54], ["/docs/prototype.html", 0.02, 102, 49], ["/docs/sharing.html", 0.018, 96, 61],
        ["/docs/shortcuts.html", 0.015, 88, 44], ["/privacy.html", 0.01, 49, 36], ["/docs/inspect.html", 0.01, 91, 52], ["/download-mac", 0.003, 5, 100]];
    const heat = Array.from({ length: 7 }, (_, d) => Array.from({ length: 24 }, (_, h) => {
        const zurich = Math.exp(-((h - 10.5) ** 2) / 8) + 0.8 * Math.exp(-((h - 15) ** 2) / 6) + 0.9 * Math.exp(-((h - 21) ** 2) / 5);
        const us = 0.6 * Math.exp(-((h - 2.5) ** 2) / 4);
        return Math.round((views / 120) * [1.05, 1.15, 1.1, 1.05, 0.95, 0.65, 0.6][d] * (zurich + us + 0.04) * (0.8 + r() * 0.4));
    }));
    const ZONES = [["Europe/Zurich", 0.18], ["Europe/Berlin", 0.17], ["America/New_York", 0.1], ["America/Los_Angeles", 0.08], ["Europe/London", 0.07], ["Europe/Paris", 0.07], ["Europe/Rome", 0.05], ["Europe/Vienna", 0.04], ["Europe/Amsterdam", 0.04], ["America/Chicago", 0.03], ["America/Toronto", 0.025], ["Asia/Tokyo", 0.02], ["Australia/Sydney", 0.015], ["Asia/Kolkata", 0.015], ["Europe/Stockholm", 0.012], ["America/Sao_Paulo", 0.01]];
    const channels = share({ Direct: 0.33, Search: 0.26, Social: 0.22, AI: 0.07, Referral: 0.09, Campaign: 0.03 }, { Direct: 0.12, Search: 0.15, Social: 0.06, AI: 0.19, Referral: 0.1, Campaign: 0.14 });
    const link = Math.round(V * 0.045);
    return {
        days, from: daily[0].day, to: daily.at(-1).day, today: iso(new Date()), custom: custom && !(daily.at(-1).day === iso(new Date()) && [7, 30, 90].includes(days)), since: `${rows.find((x) => x.visitors)?.day ?? daily.at(-1).day} 09:12:44`, now: 2, network: "2001:db8:4a1c:2f00::/64",
        totals: now, previous: totals(previousDaily), daily, previousDaily,
        pages: PAGES.map(([path, sh, seconds, scroll]) => ({ path, views: Math.round(views * sh), visitors: Math.round(V * sh * 0.82), entries: Math.round(V * sh * (path === "/" || path.startsWith("/docs/") || path === "/open.html" ? 0.7 : 0.18)), seconds, scroll, missing: path === "/download-mac",
            langs: { de: Math.round(views * sh * 0.24), fr: Math.round(views * sh * 0.07), it: Math.round(views * sh * 0.04) } })),
        channels: channels.map(([channel, visitors, downloaded]) => ({ channel, visitors, downloaded })),
        referrers: [["google.com", "Search", 0.18, 0.15], ["news.ycombinator.com", "Social", 0.1, 0.05], ["reddit.com", "Social", 0.06, 0.09], ["github.com", "Referral", 0.04, 0.18], ["chatgpt.com", "AI", 0.04, 0.2], ["duckduckgo.com", "Search", 0.04, 0.16], ["mfrports.github.io", "Referral", 0.03, 0.12], ["perplexity.ai", "AI", 0.02, 0.17], ["dribbble.com", "Social", 0.02, 0.08], ["macrumors.com", "Referral", 0.015, 0.11], ["bing.com", "Search", 0.012, 0.14], ["designernews.co", "Social", 0.008, 0.13]]
            .map(([host, channel, sh, rate]) => ({ host, channel, visitors: Math.round(V * sh), downloaded: Math.round(V * sh * rate) })),
        campaigns: [{ source: "macapps", visitors: Math.round(V * 0.02), downloaded: Math.round(V * 0.004) }, { source: "producthunt", visitors: Math.round(V * 0.01), downloaded: Math.round(V * 0.0012) }],
        devices: share({ Mac: 0.66, iPhone: 0.17, Windows: 0.09, iPad: 0.04, Android: 0.03, Linux: 0.01 }, { Mac: 0.17, iPhone: 0.004, Windows: 0.006, iPad: 0.01 }).map(([device, visitors, downloaded]) => ({ device, visitors, downloaded })),
        browsers: share({ Safari: 0.52, Chrome: 0.3, Firefox: 0.09, Edge: 0.04, Arc: 0.03, Other: 0.02 }).map(([browser, visitors, downloaded]) => ({ browser, visitors, downloaded })),
        languages: [["en", 0.5], ["de", 0.28], ["fr", 0.09], ["it", 0.05], ["nl", 0.02], ["es", 0.02], ["ja", 0.01]].map(([lang, sh]) => ({ lang, visitors: Math.round(V * sh) })),
        siteLangs: { en: Math.round(V * 0.62), de: Math.round(V * 0.24), fr: Math.round(V * 0.07), it: Math.round(V * 0.04) },
        zones: ZONES.map(([zone, sh]) => ({ zone, visitors: Math.round(V * sh) })),
        heat,
        funnel: { visitors: V, downloadPage: Math.round(V * 0.21), downloaded: Math.round(now.downloads * 0.92), link, app: Math.round(link * 0.31), opened: Math.round(link * 0.46) },
        releases: RELEASES.filter((x) => x.date >= previousDaily[0].day && x.date <= daily.at(-1).day),
    };
}
const READ = {
    headline: "Visits are up a third on the month before, and the new ones download about as often as the old: the Hacker News day brought people who try things.",
    mood: "growing",
    summary: "2,410 visitors in the last 30 days against 1,820 before, 380 of them on the Hacker News day almost three weeks ago. 13.1% of visitors downloaded Bezzle, nearly the same as before, but the home page loses half its readers before the chapter on Figma and Sketch files. Search and assistants keep sending the visitors most likely to download.",
    findings: [
        { title: "Assistants send the right people", detail: "Visitors sent by ChatGPT and Perplexity downloaded at 19%, half again the site's average, from 7% of visits.", figure: "19%" },
        { title: "The story loses half before files", detail: "Of the recorded home page views, 52% reached a quarter of the story and 21% its end; the import chapter comes second.", figure: "52%" },
        { title: "A third can't install", detail: "34% of visitors came on an iPhone, iPad, Windows or Android, and almost none of them downloaded.", figure: "34%" },
        { title: "A broken link", detail: "/download-mac doesn't exist and still gets visits, likely from an old post.", figure: "/download-mac" },
    ],
    actions: [
        { title: "Show Bezzle on Hacker News", why: "Hacker News sent 240 visitors who downloaded at 5%, a third of the average; a Show HN reaches the people who try things. Mac visits and same-day downloads should move.", how: "Post a Show HN with the home page as the link, this text as the first comment, and answer questions through the day.",
            kind: "post", where: "Hacker News, Show HN", url: "https://news.ycombinator.com/submit", subject: "Show HN: Bezzle, a free design app for the Mac that opens Figma, Sketch and XD files", link: "https://bezzle.ch/?ref=hn",
            body: "I make Bezzle, a design app for the Mac. It is free, with every feature: no subscription, no account, no paid tier. It opens Adobe XD, Figma and Sketch files with their artboards, layers, masks and text, and brings in any website as layers.\n\nComponents, prototypes that play in a real device, hand-off with CSS and SwiftUI, dark mode in one click, cutouts on the Mac, and live co-editing by link, encrypted end to end. It needs macOS 26.\n\nI'm one person in Switzerland and glad to answer anything about how it works: https://bezzle.ch/?ref=hn",
            check: "Show HN posts are URL posts: the link goes in the URL field and this text in the first comment. Tuesday to Thursday mornings, US time, get the most readers.", impact: "high", effort: "small" },
        { title: "Bring the import chapter forward", why: "Half the recorded home page views end before the chapter on opening Figma, Sketch and XD files, which is what search visitors ask for.", how: "Move the files chapter to the first place in the story, and say it in the hero's lede.",
            kind: "site", where: "/", url: "", subject: "", link: "", check: "The story's order is CHAPTERS in src/words.js; the captures follow it.",
            body: "In src/words.js, make \"files\" the first of CHAPTERS (it is already first) and add to the lede, in all four languages: \"It opens your Adobe XD, Figma and Sketch files.\" Check that the scene still plays first.", impact: "high", effort: "small" },
        { title: "Redirect /download-mac", why: "A missing page still gets visits every week, and each is a lost download.", how: "Add a redirect from /download-mac to /download.html in public/.htaccess.",
            kind: "site", where: "/download-mac", url: "", subject: "", link: "", check: "",
            body: "In public/.htaccess, add a 301 from /download-mac to /download.html, before the rule that serves pages without .html.", impact: "low", effort: "small" },
    ],
    watch: "Whether downloads per visitor hold at 13% now that the Hacker News wave has passed.",
    model: "gpt-6.1-sol",
};
const reads = {};
const done = [];
let nextDone = 1;

/* ── The Sessions view ───────────────────────────────────────────────────── */

const views = []; // the dev server's own page views, as api/hit.php keeps them
const steps = []; // and their steps
const trails = new Map(); // view id → its batches, as api/trail.php keeps them
const PRIVATE = ["/admin.html"];
const uaDevice = (ua, touch) => (/iPhone|iPod/.test(ua) ? "iPhone" : /iPad/.test(ua) || (/Macintosh/.test(ua) && touch) ? "iPad" : /Macintosh/.test(ua) ? "Mac" : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows" : /Linux/.test(ua) ? "Linux" : "Other");
const uaBrowser = (ua) => (/Edg\//.test(ua) ? "Edge" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\/|CriOS/.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "Other");

/** Views (by visitor, then time) as sessions, split after half an hour away, as api/_trails.php does. */
function sessionsOf(list, stepList = []) {
    const out = [];
    for (const v of [...list].sort((a, b) => a.visitor.localeCompare(b.visitor) || a.created_at.localeCompare(b.created_at))) {
        const at = new Date(v.created_at.replace(" ", "T")).getTime() / 1000, cur = out.at(-1);
        if (!cur || cur.visitor !== v.visitor || at - cur.until > 1800) out.push({ visitor: v.visitor, views: [v], start: at, until: at + (v.seconds ?? 0), steps: [...(v.steps ?? [])] });
        else { cur.views.push(v); cur.until = Math.max(cur.until, at + (v.seconds ?? 0)); cur.steps.push(...(v.steps ?? [])); }
    }
    for (const e of stepList) {
        const at = new Date(e.at.replace(" ", "T")).getTime() / 1000;
        const s = out.filter((x) => x.visitor === e.visitor && x.start - 5 <= at).at(-1);
        if (s) s.steps.push(e);
    }
    return out;
}
/** Rage clicks as api/_trails.php counts them: bursts of three or more on one spot, each within half a second of the one before. */
function rageCount(clicks) {
    let n = 0;
    for (let i = 0; i < clicks.length; ) {
        let j = i;
        while (j + 1 < clicks.length && clicks[j + 1][1] - clicks[j][1] <= 500 && Math.abs(clicks[j + 1][2] - clicks[i][2]) <= 30 && Math.abs(clicks[j + 1][3] - clicks[i][3]) <= 30) j++;
        if (j - i >= 2) n++;
        i = j + 1;
    }
    return n;
}
function sessionRow(s) {
    const first = s.views[0], sum = (f) => s.views.reduce((n, v) => n + f(v), 0);
    const clicks = (v) => v.events.filter((e) => e[0] === "c");
    return {
        id: first.vid, start: first.created_at, end: local(new Date(s.until * 1000)), seconds: sum((v) => v.seconds ?? 0), scroll: Math.max(...s.views.map((v) => v.scroll ?? 0)),
        pages: s.views.map((v) => ({ path: v.path, lang: v.site_lang, missing: !!v.missing })),
        channel: first.entry ? first.channel : null, referrer: first.referrer, source: first.source, campaign: first.campaign,
        device: first.device, browser: first.browser, lang: first.lang, zone: first.zone,
        recorded: s.views.some((v) => v.events.length), clicks: sum((v) => clicks(v).length),
        rage: sum((v) => rageCount(clicks(v))),
        steps: [...new Set(s.steps.map((x) => x.name))],
    };
}
const sessionFull = (s) => ({
    ...sessionRow(s), keep: 30,
    views: s.views.map((v) => ({ id: v.vid, path: v.path, lang: v.site_lang, missing: !!v.missing, at: v.created_at, seconds: v.seconds, scroll: v.scroll, private: PRIVATE.includes(v.path), started: v.started ?? null, events: v.events })),
    stepsAt: s.steps, recordedSince: `${iso(new Date(Date.now() - 20 * 864e5))} 10:02:11`,
});
/** The dev server's own views with their trails. */
const ownViews = () => views.map((v) => {
    const batches = (trails.get(v.vid) ?? []).sort((a, b) => a.seq - b.seq);
    return { ...v, started: batches[0]?.started ?? null, events: batches.flatMap((b) => b.events).sort((a, b) => a[1] - b[1]) };
});

const JOURNEYS = [
    { pages: ["/", "/download.html"], download: true }, { pages: ["/"] }, { pages: ["/docs/import.html", "/", "/download.html"], download: true },
    { pages: ["/", "/docs/", "/docs/start.html", "/docs/components.html"] }, { pages: ["/open.html"], open: true }, { pages: ["/"] },
    { pages: ["/open.html"], app: true }, { pages: ["/download-mac", "/download.html"], download: true },
    { pages: ["/", "/releases.html", "/download.html"], download: true }, { pages: ["/support.html", "/"] }, { pages: ["/docs/shortcuts.html"] }, { pages: ["/", "/support.html", "/privacy.html"] },
];
const TALL = { "/": 16400, "/download.html": 5200, "/docs/": 3800, "/releases.html": 7400, "/support.html": 3600, "/open.html": 1900, "/privacy.html": 3100, "/download-mac": 900 };
const LABELS = { "/": ["a", "Bezzle"], "/download.html": ["a", "Download"], "/docs/": ["a", "Docs"], "/releases.html": ["a", "What’s New"], "/support.html": ["a", "Support"], "/privacy.html": ["a", "Privacy"], "/docs/start.html": ["a", "Getting started"], "/docs/components.html": ["a", "Components and styles"] };
const SCREENS = { Mac: [[1512, 945], [1440, 900], [1728, 1084], [1280, 760]], iPhone: [[393, 852], [390, 844]], Windows: [[1536, 864]], iPad: [[820, 1180]], Android: [[412, 915]] };
const ORIGINS = [["Direct", null, null], ["Search", "google.com", null], ["Social", "news.ycombinator.com", null], ["AI", "chatgpt.com", null], ["Social", "reddit.com", null], ["Search", "duckduckgo.com", null], ["Campaign", null, "macapps"], ["Referral", "github.com", null]];
const PLACES = [["Europe/Zurich", "de-CH", "de"], ["Europe/Berlin", "de-DE", "de"], ["America/New_York", "en-US", "en"], ["Europe/London", "en-GB", "en"], ["America/Los_Angeles", "en-US", "en"], ["Europe/Paris", "fr-FR", "fr"], ["Europe/Rome", "it-IT", "it"], ["Asia/Tokyo", "ja-JP", "en"]];

/*
 * Where the made-up visitors click, so the heatmaps have places that draw them: the header's links (which stay put at
 * the top of the window), and on a page what its first screen offers. Across a wide window by the distance from its
 * middle (the site is centred), down it as a share of its height; on a phone, across as a share of the width.
 */
const BAR = { "/": ["a", "Bezzle", -560, 0.1], "/releases.html": ["a", "What’s New", 6, 0.5], "/docs/": ["a", "Docs", 92, 0.6], "/support.html": ["a", "Support", 168, 0.7], "/download.html": ["a", "Download", 560, 0.85] };
const SPOTS = {
    "/": [["a", "Download for Mac", 0, 0.5, 0.62], ["b", "Features", -150, 0.3, 0.06], ["", "Bezzle is a complete design studio for your Mac", -200, 0.4, 0.5]],
    "/download.html": [["a", "Download Bezzle 1.4.2", 0, 0.5, 0.56]],
    "/open.html": [["a", "Open in Bezzle", -90, 0.35, 0.58], ["a", "Open in your browser", 90, 0.65, 0.58]],
};
const spotX = (w, dx, fx, touch) => (touch ? w * fx : w / 2 + dx);

/** One made-up page's trail: reading, scrolling in stretches and now and then back, the pointer wandering, a few clicks on what the page offers, and the one that leads on. */
function fakeTrail(r, { path, w, h, touch, height, seconds, next, rage, away, step }) {
    const ev = [["v", 0, w, h, touch ? 1 : 0], ["s", 0, 0, height]];
    const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
    const jitter = (n) => (r() + r() + r() - 1.5) * n;
    const end = seconds * 1000;
    let t = 300, y = 0, x = w * (0.3 + r() * 0.4), py = h * (0.35 + r() * 0.3);
    const scrollTo = (to, dur) => { for (let s = 120; s < dur + 120; s += 120) ev.push(["s", Math.round(t + Math.min(s, dur)), Math.round(y + (to - y) * ease(Math.min(1, s / dur))), height]); t += dur; y = to; };
    const moveTo = (nx, ny, dur) => { if (touch) { x = nx; py = ny; return; } for (let s = 80; s < dur + 80; s += 80) { const k = ease(Math.min(1, s / dur)); ev.push(["m", Math.round(t + Math.min(s, dur)), Math.round(x + (nx - x) * k + Math.sin(k * 3) * 14), Math.round(py + (ny - py) * k)]); } t += dur; x = nx; py = ny; };
    const click = (kind, text, fixed = 0) => ev.push(["c", Math.round(t), Math.round(x), Math.round(py), kind, text, Math.round(y), fixed]);
    const spot = ([kind, text, dx, fx, fy]) => { if (y > 0) scrollTo(0, 500); moveTo(spotX(w, dx, fx, touch) + jitter(26), h * fy + jitter(10), 600); click(kind, text); t += 400; };
    if (!touch) ev.push(["m", 0, Math.round(x), Math.round(py)]);
    while (t < end - 2500) {
        const what = r();
        if (what < 0.46 && y < height - h) scrollTo(Math.min(height - h, y + h * (0.35 + r() * 0.9)), 380 + r() * 700);
        else if (what < 0.52 && y > 0) scrollTo(Math.max(0, y - h * (0.2 + r() * 0.4)), 300 + r() * 400);
        else if (what < 0.57 && SPOTS[path]) spot(SPOTS[path][Math.floor(r() * SPOTS[path].length)]);
        else if (what < 0.6) { moveTo(40 + r() * (w - 80), 60 + r() * (h - 120), 400); click("", r() < 0.5 ? "p" : "h2"); }
        else moveTo(40 + r() * (w - 80), 60 + r() * (h - 120), 300 + r() * 700);
        if (rage && t > end / 2) { // a picture of the window that is not a link, pressed again and again
            rage = false;
            for (let i = 0; i < 4; i++) { click("", "img"); t += 260; }
            t += 200;
        }
        t += 700 + r() * 2600;
    }
    if (step === "open") spot(SPOTS["/open.html"][0]);
    if (step === "app") spot(SPOTS["/open.html"][1]);
    if (away) { ev.push(["h", Math.round(t), 0], ["h", Math.round(t + 41000), 1]); t += 42000; }
    if (next) {
        // The header's links stay at the top of the window; the download is on the page.
        const bar = !touch && BAR[next];
        if (next === "/download.html" && SPOTS[path]?.[0]) spot(SPOTS[path][0]);
        else if (bar) { const [kind, text, dx] = BAR[next]; moveTo(w / 2 + dx + jitter(12), 36 + jitter(5), 700); t += 120; click(kind, text, 1); }
        else { const [kind, text] = LABELS[next] ?? ["a", next]; moveTo(w / 2 + jitter(60), h * (0.45 + r() * 0.2), 700); t += 120; click(kind, text); }
    }
    return ev.sort((a, b) => a[1] - b[1]);
}

/** A day's made-up sessions, the same each time it is asked for. Their ids carry the day, so a session can be found from its id alone. */
const madeUp = new Map();
function fakeSessions(dayKey) {
    if (madeUp.has(dayKey)) return madeUp.get(dayKey);
    const out = makeSessions(dayKey);
    if (dayKey < iso(new Date())) madeUp.set(dayKey, out);
    return out;
}
function makeSessions(dayKey) {
    let s0 = Number(dayKey.replace(/-/g, "")) % 2147483647;
    const r = () => ((s0 = (s0 * 16807) % 2147483647) / 2147483647);
    const isToday = dayKey === iso(new Date()), nowS = Date.now() / 1000;
    const out = [];
    const count = 16 + Math.floor(r() * 14);
    for (let i = 0; i < count; i++) {
        const j = JOURNEYS[Math.floor(r() * JOURNEYS.length)];
        const device = j.app ? ["iPhone", "Windows", "iPad", "Mac"][Math.floor(r() * 4)] : r() < 0.66 ? "Mac" : ["iPhone", "iPhone", "Windows", "iPad", "Android"][Math.floor(r() * 5)];
        const screen = SCREENS[device][Math.floor(r() * SCREENS[device].length)], touch = ["iPhone", "iPad", "Android"].includes(device);
        const [zone, lang, siteLang] = PLACES[Math.floor(r() * PLACES.length)];
        const [channel, referrer, source] = j.pages[0] === "/open.html" ? ["Direct", null, null] : ORIGINS[Math.floor(r() * ORIGINS.length)];
        const startS = new Date(`${dayKey}T00:00:00`).getTime() / 1000 + (7 + r() * 16) * 3600;
        if (isToday && startS > nowS - 120) continue;
        const id = Number(dayKey.replace(/-/g, "")).toString(16).padStart(8, "0") + (i * 2654435761 >>> 0).toString(16).padStart(8, "0");
        let at = startS;
        const taken = [];
        const list = j.pages.map((path, k) => {
            const seconds = Math.round(path === "/download-mac" ? 3 + r() * 3 : path === "/open.html" ? 12 + r() * 20 : 8 + r() ** 1.4 * (path === "/" ? 160 : 110));
            const last = k === j.pages.length - 1;
            const nextPath = j.pages[k + 1];
            const height = Math.round((TALL[path] ?? 5600) * (touch && path !== "/" ? 2.3 : 1));
            const step = last ? (j.download ? "download" : j.open ? "open" : j.app ? "app" : null) : null;
            const events = fakeTrail(r, { path, w: screen[0], h: screen[1], touch, height, seconds, next: last ? (j.download && path !== "/download.html" ? "/download.html" : null) : nextPath, rage: r() < 0.12, away: r() < 0.08, step: step === "download" ? null : step });
            const v = {
                vid: k ? id.slice(0, 8) + ((i * 2654435761 + k * 40503) >>> 0).toString(16).padStart(8, "0") : id, visitor: `fake-${i}`, path, site_lang: siteLang,
                missing: path === "/download-mac" ? 1 : 0, entry: k === 0 ? 1 : 0, channel: k === 0 ? (source ? "Campaign" : channel) : null, referrer: k === 0 ? referrer : null, source: k === 0 ? source : null, campaign: null,
                device, browser: device === "Windows" || device === "Android" ? "Chrome" : r() < 0.7 ? "Safari" : "Chrome", lang, zone,
                seconds, scroll: Math.round(path === "/open.html" ? 100 : 30 + r() * 70), created_at: local(new Date(at * 1000)), started: Math.round(at * 1000), events,
            };
            const length = events.length ? events.at(-1)[1] / 1000 : seconds;
            if (step) taken.push({ name: step, at: local(new Date((at + length) * 1000)) });
            at += length + 0.6;
            return v;
        });
        out.push({ visitor: `fake-${i}`, views: list, start: startS, until: at, steps: taken });
    }
    return out;
}

/* ── The API ─────────────────────────────────────────────────────────────── */

const state = { in: false };
async function adminApi(req, res, url) {
    const action = url.searchParams.get("action"), body = req.method === "POST" ? await readJson(req) : {};
    await new Promise((r) => setTimeout(r, 160 + Math.random() * 200));
    if (action === "me") return json(res, { admin: state.in, configured: true });
    if (action === "login") { if (String(body.password || "").length < 12) return json(res, { error: "Wrong password." }, 401); state.in = true; return json(res, { admin: true }); }
    if (action === "logout") { state.in = false; return json(res, { admin: false }); }
    if (!state.in) return json(res, { error: "Please sign in." }, 401);
    const days = [7, 30, 90].includes(Number(url.searchParams.get("days") ?? body.days)) ? Number(url.searchParams.get("days") ?? body.days) : 30;
    if (action === "analytics") {
        // Days of one's own (from, to in either order; one alone is a single day), never past today.
        const isDay = (v) => /^\d{4}-\d{2}-\d{2}$/.test(v || "");
        const from = url.searchParams.get("from"), to = url.searchParams.get("to");
        if (isDay(from) || isDay(to)) {
            const today = iso(new Date());
            const [a, b] = [isDay(from) ? from : to, isDay(to) ? to : from].map((v) => (v > today ? today : v)).sort();
            const noon = (v) => new Date(`${v}T12:00:00`);
            return json(res, analytics(Math.round((noon(b) - noon(a)) / 864e5) + 1, noon(b), true));
        }
        return json(res, analytics(days));
    }
    if (action === "live") {
        for (const [id, h] of hits) if (h.at < Date.now() - 300e3) hits.delete(id);
        const pages = {};
        [{ path: "/" }, { path: "/download.html" }, ...hits.values()].forEach((h) => { pages[h.path] = (pages[h.path] ?? 0) + 1; });
        return json(res, { now: hits.size + 2, pages: Object.entries(pages).map(([path, visitors]) => ({ path, visitors })) });
    }
    if (action === "sessions") {
        const today = iso(new Date()), asked = url.searchParams.get("day");
        const dayKey = /^\d{4}-\d{2}-\d{2}$/.test(asked || "") && asked < today ? asked : today;
        const own = dayKey === today ? sessionsOf(ownViews(), steps) : [];
        const all = [...own, ...fakeSessions(dayKey)].sort((a, b) => b.views[0].created_at.localeCompare(a.views[0].created_at));
        return json(res, { day: dayKey, today, since: `${iso(new Date(Date.now() - 74 * 864e5))} 09:12:44`, recordedSince: `${iso(new Date(Date.now() - 20 * 864e5))} 10:02:11`, keep: 30, sessions: all.map(sessionRow) });
    }
    if (action === "session") {
        const id = url.searchParams.get("id") || "";
        const own = sessionsOf(ownViews(), steps).find((x) => x.views.some((v) => v.vid === id));
        const n = parseInt(id.slice(0, 8), 16), dayKey = String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
        const fake = !own && /^\d{4}-\d{2}-\d{2}$/.test(dayKey) ? fakeSessions(dayKey).find((x) => x.views.some((v) => v.vid === id)) : null;
        return own || fake ? json(res, sessionFull(own || fake)) : json(res, { error: "No such session." }, 404);
    }
    if (action === "heatmap") {
        const span = Number(url.searchParams.get("days")) === 7 ? 7 : 30;
        const screenOf = (w) => (w < 600 ? "phone" : w < 1060 ? "tablet" : "desktop");
        const recorded = [...Array.from({ length: span }, (_, i) => fakeSessions(iso(new Date(Date.now() - i * 864e5)))).flat().flatMap((x) => x.views), ...ownViews()]
            .filter((v) => v.events[0]?.[0] === "v");
        const counts = new Map();
        for (const v of recorded) counts.set(`${v.path}|${v.site_lang}`, (counts.get(`${v.path}|${v.site_lang}`) ?? 0) + 1);
        const pages = [...counts].sort((a, b) => b[1] - a[1]).map(([k, n]) => ({ path: k.split("|")[0], lang: k.split("|")[1], views: n }));
        let path = url.searchParams.get("path") || "", lang = ["en", "de", "fr", "it"].includes(url.searchParams.get("lang")) ? url.searchParams.get("lang") : "en";
        if (!/^\/[a-z0-9/_.-]{0,159}$/.test(path)) [path, lang] = pages[0] ? [pages[0].path, pages[0].lang] : ["/", "en"];
        const screen = ["desktop", "tablet", "phone"].includes(url.searchParams.get("screen")) ? url.searchParams.get("screen") : "desktop";
        const mine = recorded.filter((v) => v.path === path && v.site_lang === lang);
        const screens = { desktop: 0, tablet: 0, phone: 0 };
        mine.forEach((v) => screens[screenOf(v.events[0][2])]++);
        const shown = mine.filter((v) => screenOf(v.events[0][2]) === screen);
        const middle = (list) => [...list].sort((a, b) => a - b)[Math.floor(list.length / 2)];
        const depth = Array(101).fill(0);
        shown.forEach((v) => { if (v.scroll != null) depth[Math.min(100, Math.round(v.scroll))]++; });
        const labels = [], index = new Map(), clicks = [];
        for (const v of shown) {
            let w = v.events[0][2];
            const own = v.events.filter((e) => e[0] === "c");
            const rage = new Set();
            for (let i = 0; i < own.length; ) {
                let j = i;
                while (j + 1 < own.length && own[j + 1][1] - own[j][1] <= 500 && Math.abs(own[j + 1][2] - own[i][2]) <= 30 && Math.abs(own[j + 1][3] - own[i][3]) <= 30) j++;
                if (j - i >= 2) for (let k = i; k <= j; k++) rage.add(own[k]);
                i = j + 1;
            }
            for (const e of v.events) {
                if (e[0] === "v") w = e[2];
                if (e[0] !== "c") continue;
                const key = `${e[4]}|${e[5]}`;
                if (!index.has(key)) { index.set(key, labels.length); labels.push([e[4], e[5]]); }
                clicks.push([e[2], e[7] ? e[3] : e[3] + (e[6] ?? 0), w, e[7] ? 1 : 0, index.get(key), rage.has(e) ? 1 : 0]);
            }
        }
        return json(res, {
            days: span, keep: 30, path, lang, screen, pages, screens, views: shown.length,
            window: shown.length ? [middle(shown.map((v) => v.events[0][2])), middle(shown.map((v) => v.events[0][3]))] : null,
            depth, labels, clicks,
        });
    }
    if (action === "insight" && req.method === "GET") return json(res, { read: reads[days]?.read ?? null, at: reads[days]?.at ?? null, done, configured: true });
    if (action === "insight") {
        // The model takes a while; so does the mock.
        await new Promise((r) => setTimeout(r, 2600));
        reads[days] = { read: READ, at: ago(0) };
        return json(res, { ...reads[days], done, configured: true });
    }
    if (action === "mark") {
        const a = body.action ?? {};
        if (!a.title || !["done", "skipped"].includes(body.status)) return json(res, { error: "Which action, and done or set aside?" }, 400);
        done.unshift({ id: nextDone++, status: body.status, title: a.title, kind: a.kind ?? "other", where: a.where ?? "", how: a.how ?? "", note: String(body.note ?? "").trim() || null, at: ago(0) });
        return json(res, { done });
    }
    if (action === "unmark") {
        const i = done.findIndex((d) => d.id === Number(body.id));
        if (i >= 0) done.splice(i, 1);
        return json(res, { done });
    }
    json(res, { error: "Unknown action." }, 400);
}

export function mockApi() {
    return {
        name: "bezzle-mock-api",
        apply: "serve",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (!req.url.startsWith("/api/")) return next();
                const url = new URL(req.url, "http://x");
                const ep = url.pathname.slice(5);
                if (ep === "admin.php") return adminApi(req, res, url);
                // The dev server's own visits, counted and recorded as api/hit.php and api/trail.php keep them (not while signed in, as there).
                if (ep === "hit.php") {
                    const b = await readJson(req), ua = req.headers["user-agent"] || "";
                    if (!state.in && b.t === "v" && b.id) {
                        hits.set(b.id, { path: b.p || "/", at: Date.now() });
                        views.push({
                            vid: b.id, visitor: ua, path: b.p || "/", site_lang: ["de", "fr", "it"].includes(b.sl) ? b.sl : "en", missing: b.nf ? 1 : 0, entry: b.n ? 1 : 0,
                            channel: b.n ? (b.s ? "Campaign" : b.r ? "Referral" : "Direct") : null, referrer: b.r || null, source: b.s || null, campaign: b.c || null,
                            device: uaDevice(ua, !!b.tp), browser: uaBrowser(ua), lang: b.l || null, zone: b.z || null, seconds: null, scroll: null, created_at: local(),
                        });
                    }
                    if (!state.in && b.t === "s" && ["download", "app", "open"].includes(b.n)) steps.push({ name: b.n, visitor: ua, at: local() });
                    const v = b.t === "e" && views.find((x) => x.vid === b.id);
                    if (v) { v.seconds = Math.max(v.seconds ?? 0, b.d || 0); v.scroll = Math.max(v.scroll ?? 0, b.s || 0); }
                    res.statusCode = 204;
                    return res.end();
                }
                if (ep === "trail.php") {
                    const b = await readJson(req);
                    if (Array.isArray(b.e) && views.some((v) => v.vid === b.id && !PRIVATE.includes(v.path))) {
                        const list = trails.get(b.id) ?? [];
                        if (!list.some((x) => x.seq === b.q)) list.push({ seq: b.q, started: b.at, events: b.e });
                        trails.set(b.id, list);
                    }
                    res.statusCode = 204;
                    return res.end();
                }
                json(res, { error: "not found" }, 404);
            });
        },
    };
}
