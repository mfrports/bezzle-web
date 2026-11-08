import { RELEASE_WIN } from "@/lib/release";

/**
 * Words for a Mac and words for a PC, both in the page and one shown (src/lib/os.js): before Bezzle
 * for Windows is out, or when they are the same, only the Mac's, unless `soon` asks for the PC's
 * already (what a PC is told while Bezzle for Windows is on its way). `as` is the element they are in.
 */
export default function ForOs({ mac, win, soon = false, as: As = "span", className = "" }) {
    if ((!RELEASE_WIN && !soon) || win == null || win === mac) return mac;
    return (
        <>
            <As className={`on-mac${className ? ` ${className}` : ""}`}>{mac}</As>
            <As className={`on-win${className ? ` ${className}` : ""}`}>{win}</As>
        </>
    );
}
