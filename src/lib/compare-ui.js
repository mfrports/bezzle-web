/*
 * The pages for people coming from another design app (src/pages/Compare.jsx) are a script of their
 * own, with their words, fetched only on the way to them: before such a page first hydrates
 * (src/main.jsx), when a link to one is pointed at, and on arriving. The prerender has the page at
 * hand from the start (src/entry-server.jsx). The same as the docs' (src/docs/ui.js).
 */
import { useEffect, useState } from "react";
import { bare } from "@/i18n";
import { VS_PAGES, compareOf } from "@/words-compare-heads";
import { reloadOnce } from "@/docs/ui";

let page = null, loading = null;
export const provideCompareUI = (Page) => { page = Page; };
export function loadCompareUI() {
    if (page) return Promise.resolve(page);
    loading ??= import("@/pages/Compare").then((m) => (page = m.default));
    return loading;
}

/** Before the first view hydrates: the page's script, when it is one of these pages. */
export const preloadCompare = (pathname) => (compareOf(bare(pathname)) !== null ? loadCompareUI().catch(() => null) : Promise.resolve());

/** The page, once it is here (it is at once, but for a first click from elsewhere). */
export function useCompareUI(wanted) {
    const [, rerender] = useState(0);
    useEffect(() => {
        if (!wanted || page) return;
        let live = true;
        loadCompareUI().then(() => live && rerender((n) => n + 1), reloadOnce);
        return () => { live = false; };
    }, [wanted]);
    return page;
}

// a link to one of these pages pointed at, or touched: their script is fetched on the way
if (typeof window !== "undefined") {
    const ends = Object.values(VS_PAGES);
    const intent = (e) => {
        const href = e.target.closest?.("a[href]")?.getAttribute("href");
        if (href && ends.some((p) => href.endsWith(p))) loadCompareUI().catch(() => {});
    };
    addEventListener("pointerover", intent, { passive: true });
    addEventListener("touchstart", intent, { passive: true });
    addEventListener("focusin", intent);
}
