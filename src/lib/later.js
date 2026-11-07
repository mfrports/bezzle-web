/*
 * Work that can wait a moment: each job in a task of its own, in the order asked, so a phone never
 * holds the screen for long while the page wakes (the story's timeline, the canvas of features,
 * the Mac on the download page). Between two jobs the browser may draw a frame or answer a touch.
 */
const jobs = [];
let busy = false, ch = null;
// a message posted to itself comes back as a new task, without a timer's least delay (made on first
// use only: in the prerender, an open channel would keep Node from ever finishing)
function next() {
    if (typeof MessageChannel === "undefined") return void setTimeout(run, 0);
    if (!ch) { ch = new MessageChannel(); ch.port1.onmessage = run; }
    ch.port2.postMessage(0);
}

function run() {
    const job = jobs.shift();
    try { job?.(); } finally { if (jobs.length) next(); else busy = false; }
}

/** Run fn in a task of its own, after the jobs already asked for. */
export function later(fn) {
    jobs.push(fn);
    if (!busy) { busy = true; next(); }
}

/** Once the page's type is in, and then in a task of its own. */
export const afterFonts = (fn) => (document.fonts?.ready || Promise.resolve()).then(() => later(fn));
