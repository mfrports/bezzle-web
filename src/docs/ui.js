/*
 * The docs' pages are a script of their own, fetched only on the way to them: before a docs page
 * first hydrates (src/main.jsx), when a link to the docs is pointed at, and on arriving. The
 * prerender has them at hand from the start (src/entry-server.jsx).
 */
import { useEffect, useState } from "react";

let ui = null, loading = null;
export const provideDocsUI = (mods) => { ui = mods; };
export const docsUI = () => ui;
export function loadDocsUI() {
    if (ui) return Promise.resolve(ui);
    loading ??= Promise.all([import("@/pages/Docs"), import("@/pages/DocPage")]).then(([a, b]) => (ui = { Docs: a.default, DocPage: b.default }));
    return loading;
}

/** Should a script not come (the site was deployed again since this page was opened, and its old
    files are gone), the page is loaded afresh, once. */
export function reloadOnce() {
    let done = null;
    try { done = sessionStorage.getItem("bz-reloaded"); sessionStorage.setItem("bz-reloaded", location.pathname); } catch { /* without storage, no second try */ }
    if (done !== location.pathname) location.reload();
}

/** The docs' pages, once they are here (they are at once, but for a first click from elsewhere). */
export function useDocsUI(wanted) {
    const [, rerender] = useState(0);
    useEffect(() => {
        if (!wanted || ui) return;
        let live = true;
        loadDocsUI().then(() => live && rerender((n) => n + 1), reloadOnce);
        return () => { live = false; };
    }, [wanted]);
    return ui;
}
