import { bare, langOf } from "@/i18n";
import { RELEASE } from "@/lib/release";
import { replaying, startTrail, stopTrail } from "@/lib/trail";

/*
 * Counts page views for the admin area's Visitors view (api/hit.php). No cookies and nothing kept in the browser for
 * it: each view sends its page, where the visit came from (the other site's name, or the utm_source / ref the link
 * was tagged with), the browser's language and time zone; and, whenever the page is left or hidden, the seconds it
 * was actively read and how far down. How the page is used goes along under the same view id, for the replay in the
 * admin area (lib/trail.js).
 *
 * And the steps a visit takes from a page, so the way to them can be followed: the download (a click on the zip, or
 * the download page starting it), the browser version opened (/app/, from a shared design's page), and a shared
 * design handed to Bezzle (its bezzle:// link).
 *
 * Not counted: automated browsers, the admin area, a browser that has signed in to it (dontCount), and the admin
 * area's replay of a visit.
 */
const ENDPOINT = "/api/hit.php";
const UNCOUNTED = "bezzle-uncounted";
// Reading time stops after this long without a scroll, a key or the pointer moving.
const IDLE = 60_000;

let view = null; // the page in view: { id, seconds, scroll }
let landed = false; // whether this page load has counted its first page
let active = 0; // when the reader last did something
let missing = null; // the address the missing page was shown for

const ADMIN = "/admin.html";
const inAdmin = () => bare(location.pathname) === ADMIN;

/** Whether this browser's visits count: not an automated browser, the admin area's replay, nor the maker's own (dontCount). */
export const counted = () => {
    if (typeof window === "undefined" || navigator.webdriver || replaying) return false;
    try { return !localStorage.getItem(UNCOUNTED); } catch { return true; }
};
const hex = () => Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) => b.toString(16).padStart(2, "0")).join("");
const depth = () => Math.min(100, Math.round(((window.scrollY + window.innerHeight) / Math.max(1, document.documentElement.scrollHeight)) * 100));
/** A page as it is counted: without its language, and a shared design's page without what follows it (old invitations carried their code there). */
const pageOf = (pathname) => { const p = bare(pathname); return p.startsWith("/open.html") ? "/open.html" : p; };

function send(body) {
    const data = JSON.stringify(body);
    try { if (navigator.sendBeacon?.(ENDPOINT, data)) return; } catch { /* fall back to fetch */ }
    fetch(ENDPOINT, { method: "POST", body: data, keepalive: true }).catch(() => {});
}

/** How long the page in view was read and how far down; sent on every hide, and the server keeps the most. */
function report() {
    if (view) send({ t: "e", id: view.id, d: view.seconds, s: view.scroll });
}

/** A step taken from the page: "download", "app" (the browser version) or "open" (a shared design in Bezzle). */
export function stepTaken(name) {
    if (!counted() || inAdmin()) return;
    send({ t: "s", n: name });
}

/** What a link leads to, as a step: the release's zip, the browser version, or Bezzle itself. */
function stepOf(a) {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("bezzle:")) return "open";
    if (RELEASE && a.href === RELEASE.url) return "download";
    try { const u = new URL(a.href); if (u.origin === location.origin && u.pathname.startsWith("/app/")) return "app"; } catch { /* not a URL */ }
    return null;
}

let installed = false;
function install() {
    if (installed) return;
    installed = true;
    const touch = () => { active = Date.now(); };
    for (const type of ["pointermove", "pointerdown", "keydown", "wheel", "touchstart"]) window.addEventListener(type, touch, { passive: true });
    let queued = false;
    window.addEventListener("scroll", () => {
        active = Date.now();
        if (queued || !view) return;
        queued = true;
        requestAnimationFrame(() => { queued = false; if (view) view.scroll = Math.max(view.scroll, depth()); });
    }, { passive: true });
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") report(); else touch(); });
    window.addEventListener("pagehide", report);
    // The steps, as their links are followed (in the capture phase, before the browser leaves for them).
    document.addEventListener("click", (e) => {
        const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
        const step = a && stepOf(a);
        if (step) stepTaken(step);
    }, { capture: true, passive: true });
    // Reading time in two-second steps: only while the page is in view and the reader is there.
    setInterval(() => { if (view && document.visibilityState === "visible" && Date.now() - active < IDLE) view.seconds += 2; }, 2000);
}

/** A page is in view (App.jsx calls this once the address has settled). Ends the one before. */
export function pageView(pathname) {
    report();
    stopTrail();
    view = null;
    if (bare(pathname) === ADMIN || !counted()) return;
    install();
    // Where the visit came from counts only on the page it landed on, and only from another site.
    const first = !landed;
    landed = true;
    let host = "";
    try { host = first && document.referrer ? new URL(document.referrer).hostname : ""; } catch { /* not a URL */ }
    const entry = first && host !== location.hostname;
    const q = entry ? new URLSearchParams(location.search) : null;
    let zone = "";
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch { /* unknown */ }
    view = { id: hex(), seconds: 0, scroll: depth() };
    active = Date.now();
    const page = pageOf(pathname);
    send({
        t: "v", id: view.id, p: page, sl: langOf(pathname).code, n: entry ? 1 : 0, r: entry ? host : "",
        s: q?.get("utm_source") || q?.get("ref") || "", c: q?.get("utm_campaign") || "",
        l: navigator.language || "", z: zone, tp: navigator.maxTouchPoints > 1 ? 1 : 0, nf: missing === pathname ? 1 : 0,
    });
    startTrail(view.id, page);
}

/** The missing page says so, and the view is counted as a page that does not exist. */
export function markMissing(pathname) {
    missing = pathname;
}

/** The admin area marks the browser it is signed in on: the maker's own visits are not counted. */
export function dontCount() {
    try { localStorage.setItem(UNCOUNTED, "1"); } catch { /* storage blocked */ }
}
