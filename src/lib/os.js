/*
 * The visitor's computer: "win", "mac", or "other" (a phone, a tablet, Linux), as the first script in
 * index.html's head found it before anything painted, on <html data-os>. The prerender writes every
 * page for a Mac. Where a page says something else on a PC, it writes both and lets the stylesheet
 * pick (.on-mac, .on-win in styles.css, by data-os), so nothing changes after it paints and React
 * finds the page it wrote; only what is built after the page is up (the download page's story) asks
 * here which one to build.
 *
 * The download page's switch picks the other one for the rest of the visit (sessionStorage
 * bezzle-os, which the head's script reads first).
 */
import { RELEASE, RELEASE_WIN } from "@/lib/release";

const KEPT = "bezzle-os";

/** The computer the page is for now; "mac" in the prerender. */
export function osNow() {
    if (typeof document === "undefined") return "mac";
    return document.documentElement.getAttribute("data-os") || "mac";
}

/** Which download a page offers: Windows on a PC once there is one, the Mac's otherwise (and on phones). */
export function platformFor(os = osNow()) {
    if (RELEASE_WIN && (os === "win" || !RELEASE)) return "win";
    return RELEASE ? "mac" : null;
}

/** Picks a computer for the rest of the visit: the page's words and downloads follow at once. */
export function pickOs(os) {
    document.documentElement.setAttribute("data-os", os);
    try { sessionStorage.setItem(KEPT, os); } catch { /* for this page only, then */ }
    dispatchEvent(new CustomEvent("bz:os", { detail: os }));
}

/**
 * The installer for this PC: the Arm one on a PC with an Arm processor, where the browser can say
 * (Edge and Chrome do, through User-Agent Client Hints), else the x64 one, which Windows 11 on Arm
 * runs too. Resolves to one of RELEASE_WIN.files.
 */
export async function windowsFile() {
    const files = RELEASE_WIN?.files ?? [];
    const arm = files.find((f) => f.arch === "arm64"), main = files.find((f) => f.arch === "x64") || files.find((f) => f.arch === "any") || files[0];
    if (!arm || arm === main) return main;
    try {
        const h = await navigator.userAgentData?.getHighEntropyValues?.(["architecture"]);
        if (h?.architecture === "arm") return arm;
    } catch { /* the browser would not say */ }
    return main;
}
