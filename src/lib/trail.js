/**
 * How a page is used, for the admin area's Sessions view (api/trail.php): where the mouse pointer goes, how far
 * down the page is and when, what is clicked or tapped, which field is put in focus or typed in, and when the
 * page is hidden. Each against the milliseconds since the page came into view, so the admin area can replay it
 * over the page itself. Never what is typed, and of the page's own text only the label of what was clicked
 * ("Download for Mac", "Docs"). A shared design's secret is after the # of its address, which is never sent.
 *
 * On unless the visitor turns it off, with the switch in the privacy page's recording section (site/Recording.jsx);
 * nobody is asked. The choice is kept in the browser ("bezzle-recording": "no" while it is off, "yes" once turned on
 * again). Turned on again halfway down a page, it records the rest of it, on the page's own clock.
 *
 * Started with each page view by lib/track.js, under its view id, and sent in small batches: every few seconds
 * while something happens, and whenever the page is left or hidden. Never recorded: the admin area, a browser that
 * asks not to be tracked (Global Privacy Control, Do Not Track), and wherever track.js counts nothing. At most 30
 * minutes of one page.
 *
 * The events, as arrays: ["v", t, width, height, touch] the window, ["m", t, x, y] the pointer (in the window),
 * ["s", t, scrollY, page height], ["c", t, x, y, kind, label, scrollY, fixed] a click or tap (kind: "a" link, "b" button,
 * "f" field, "" anything else; fixed: 1 when it landed on something that stays put in the window, such as the bar at
 * the top, so the heatmaps keep it there), ["f", t, label] a field in focus, ["i", t, label] typed in it, ["h", t, 0|1] hidden, shown,
 * ["x", t] the site left (the tab closed, another site opened, the page reloaded).
 */
const ENDPOINT = "/api/trail.php";
const CHOICE = "bezzle-recording";
// Never recorded: the admin area (api/_trails.php refuses it too).
const PRIVATE = ["/admin.html"];
const FLUSH = 8000;         // ms between batches while something happens
const MOVE = 80;            // ms between two samples of the pointer
const SCROLL = 120;         // ms between two samples of the scroll position
const LONGEST = 1_800_000;  // ms of one page at most, as long as hit.php counts reading time
const MOST = 8000;          // events of one page at most

/** The replay in the admin area shows the site in a frame of this name: nothing in it is counted or recorded. */
export const REPLAY = "bezzle-replay";
export const replaying = typeof window !== "undefined" && window.name === REPLAY;

let page = null;    // the page in view, recorded unless the visitor turned it off: { id, start, at, seq }
let rec = null;     // the same page while it is recorded, with { buffer, count, typed }
let pointer = null; // where the mouse was last, so the next page starts with it
let answer = null;  // the choice made on this page load, for a browser that keeps nothing
const listeners = new Set();

/** Whether the browser asks sites not to track it: then nothing is recorded, and nobody asks. */
export const asksNotToTrack = () => typeof navigator !== "undefined" && (navigator.globalPrivacyControl === true || navigator.doNotTrack === "1" || window.doNotTrack === "1");

/** Whether the visitor lets their visits be recorded: yes unless they turned it off. */
export function recordingOn() {
    try { return (localStorage.getItem(CHOICE) ?? answer) !== "no"; } catch { return answer !== "no"; }
}

/** The visitor turns recording on or off: on records the page in view from now on, off stops at once. */
export function setRecording(yes) {
    answer = yes ? "yes" : "no";
    try { localStorage.setItem(CHOICE, answer); } catch { /* storage blocked: it holds for this page load */ }
    if (yes) begin(); else { send(); rec = null; }
    listeners.forEach((fn) => fn(answer));
}

/** Calls `fn` with each new choice ("yes" or "no"), so the privacy page's switch keeps up; returns the way to stop. */
export function onRecordingChoice(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
const now = () => Math.round(performance.now() - rec.start);
const words = (s) => (s || "").replace(/\s+/g, " ").trim().slice(0, 60);

function push(e) {
    if (!rec || rec.count >= MOST || e[1] > LONGEST) return;
    rec.buffer.push(e);
    rec.count++;
}

/** A sampler: runs `take` at most every `ms`, and once more after the last call, so the last position is never lost. */
function sampler(ms, take) {
    let last = 0, timer = 0;
    return () => {
        const t = performance.now();
        clearTimeout(timer);
        if (t - last >= ms) { last = t; take(); }
        else timer = setTimeout(() => { last = performance.now(); take(); }, ms - (t - last));
    };
}

const viewport = () => push(["v", now(), window.innerWidth, window.innerHeight, matchMedia("(pointer: coarse)").matches ? 1 : 0]);
const scrolled = () => push(["s", now(), Math.round(window.scrollY), document.documentElement.scrollHeight]);

// What a click or tap lands on: a link, a button (or anything that acts like one), a field, or the page itself.
const ACTIVE = "a[href], button, summary, label, input, select, textarea, [role=button], [role=link], [role=tab], [role=switch], [role=checkbox], [role=menuitem], [role=option]";
const fieldName = (el) => words(el.getAttribute("aria-label") || el.labels?.[0]?.innerText || el.placeholder || el.name || el.type);
function describe(target) {
    const el = target instanceof Element ? target : target?.parentElement;
    const hit = el?.closest(ACTIVE);
    if (!hit) {
        // Not something that acts: a heading by its words (people take them for links), anything else by its tag.
        const h = el?.closest("h1, h2, h3, h4");
        return ["", h ? words(h.innerText) : (el?.tagName || "").toLowerCase()];
    }
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(hit.tagName)) return ["f", fieldName(hit)];
    const kind = hit.tagName === "A" || hit.getAttribute("role") === "link" ? "a" : "b";
    return [kind, words(hit.getAttribute("aria-label") || hit.innerText || hit.title || hit.querySelector("img")?.alt)];
}

/** Whether something stays put in the window as the page scrolls: fixed, or sticky for the whole page (the bar at the top). */
function fixedIn(el) {
    const whole = document.documentElement.scrollHeight * 0.9;
    for (; el && el !== document.body; el = el.parentElement) {
        const at = getComputedStyle(el).position;
        if (at === "fixed" || (at === "sticky" && (el.parentElement?.offsetHeight ?? 0) >= whole)) return 1;
    }
    return 0;
}

function send() {
    if (!rec || !rec.buffer.length) return;
    const body = JSON.stringify({ id: rec.id, q: rec.seq++, at: rec.at, e: rec.buffer });
    rec.buffer = [];
    try { if (navigator.sendBeacon?.(ENDPOINT, body)) return; } catch { /* fall back to fetch */ }
    fetch(ENDPOINT, { method: "POST", body, keepalive: true }).catch(() => {});
}

let installed = false;
function install() {
    if (installed) return;
    installed = true;
    const move = sampler(MOVE, () => { if (rec && pointer) push(["m", now(), pointer.x, pointer.y]); });
    window.addEventListener("pointermove", (e) => {
        if (e.pointerType === "touch") return; // a finger only taps and scrolls
        pointer = { x: Math.round(e.clientX), y: Math.round(e.clientY) };
        move();
    }, { passive: true });
    window.addEventListener("scroll", sampler(SCROLL, () => { if (rec) scrolled(); }), { passive: true });
    window.addEventListener("resize", sampler(250, () => { if (rec) { viewport(); scrolled(); } }), { passive: true });
    // In the capture phase, before a link takes the visitor to the next page.
    document.addEventListener("click", (e) => {
        if (!rec) return;
        let x = e.clientX, y = e.clientY;
        // A click from the keyboard has no position: the middle of what it pressed.
        if (!e.detail && e.target instanceof Element) { const r = e.target.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
        push(["c", now(), Math.round(x), Math.round(y), ...describe(e.target), Math.round(window.scrollY), fixedIn(e.target instanceof Element ? e.target : e.target?.parentElement)]);
    }, { capture: true, passive: true });
    document.addEventListener("focusin", (e) => {
        if (!rec || !/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
        rec.typed = null;
        push(["f", now(), fieldName(e.target)]);
    });
    // That something was typed, once per focus; never what.
    document.addEventListener("input", (e) => {
        if (!rec || rec.typed === e.target || !/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
        rec.typed = e.target;
        push(["i", now(), fieldName(e.target)]);
    });
    document.addEventListener("visibilitychange", () => {
        if (!rec) return;
        push(["h", now(), document.visibilityState === "hidden" ? 0 : 1]);
        if (document.visibilityState === "hidden") send();
    });
    window.addEventListener("pagehide", () => { if (rec) push(["x", now()]); send(); });
    setInterval(send, FLUSH);
}

/** A page is in view under the id track.js counted it with (`path` without its language): record how it is used, unless the visitor turned it off. */
export function startTrail(id, path) {
    stopTrail();
    if (replaying || PRIVATE.includes(path) || asksNotToTrack()) return;
    page = { id, start: performance.now(), at: Date.now(), seq: 0, count: 0 };
    if (recordingOn()) begin();
}

/** Recording begins (again) on the page in view, its times still counted from when the page came into view. */
function begin() {
    if (!page || rec) return;
    install();
    rec = Object.assign(page, { buffer: [], typed: null });
    viewport();
    scrolled();
    if (pointer) push(["m", now(), pointer.x, pointer.y]);
}

/** The page is no longer in view: what is left goes. */
export function stopTrail() {
    send();
    rec = null;
    page = null;
}
