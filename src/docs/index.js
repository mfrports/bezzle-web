/*
 * The docs: their sections and pages in reading order, and getting a page's tree. Every page's
 * title, lede and length are in the manifest, in every page's script; a page's tree is fetched
 * when it is wanted (before the first view hydrates, on a link's hover, and its neighbours once the
 * page stands), and the prerender has them all at hand. A page not yet in a language is shown in
 * English, and says so.
 */
import { MANIFEST } from "virtual:bezzle-docs";
import { useEffect, useState } from "react";
import { bare, langOf } from "@/i18n";

const ORDER = [
    ["start", ["start", "canvas"]],
    ["design", ["shapes", "text", "looks", "pictures", "layout", "components", "dark", "decks"]],
    ["handoff", ["prototype", "inspect", "export", "import"]],
    ["together", ["sharing", "notes", "ai"]],
    ["reference", ["shortcuts", "files"]],
];
/** Each page's glyph, in the app's hand (src/docs/Glyphs.jsx). */
export const GLYPH = {
    start: "select", canvas: "artboard", shapes: "pen", text: "text", looks: "drop", pictures: "picture", layout: "grid",
    components: "component", dark: "moon", decks: "deck", prototype: "play", inspect: "measure", export: "export", import: "import",
    sharing: "share", notes: "note", ai: "sparkle", shortcuts: "key", files: "folder",
};

/** Only what has been written, in English at least. */
export const SECTIONS = ORDER.map(([key, pages]) => ({ key, pages: pages.filter((p) => MANIFEST.en?.[p]) })).filter((s) => s.pages.length);
export const PAGES = SECTIONS.flatMap((s) => s.pages);
export const sectionOf = (slug) => SECTIONS.find((s) => s.pages.includes(slug));

export const docPath = (slug) => `/docs/${slug}.html`;
export const DOCS_HOME = "/docs/";
/** The page a path (without its language) names: "" for the docs' home, its slug, or null. */
export function docOf(path) {
    if (path === DOCS_HOME || path === "/docs") return "";
    const m = path.match(/^\/docs\/([\w-]+)\.html$/);
    return m && PAGES.includes(m[1]) ? m[1] : null;
}

/** A page's title, lede and length, in a language or else in English. */
export function metaOf(slug, lang) {
    const own = MANIFEST[lang]?.[slug];
    return own ? { ...own, lang } : { ...MANIFEST.en[slug], lang: "en" };
}

// a link to the docs pointed at, or touched: their script is fetched on the way
if (typeof window !== "undefined") {
    const intent = (e) => { if (e.target.closest?.('a[href*="/docs/"]')) import("@/docs/ui").then((m) => m.loadDocsUI()).catch(() => {}); };
    addEventListener("pointerover", intent, { passive: true });
    addEventListener("touchstart", intent, { passive: true });
    addEventListener("focusin", intent);
}

// in development, a page of the docs shows its words again as soon as one is saved
if (import.meta.hot) import.meta.hot.on("bezzle-docs", () => { if (docOf(bare(location.pathname)) !== null) location.reload(); });

/* ------------------------------------------------------------------ the trees */
const LOAD = import.meta.glob("./*/*.md", { query: "?doc", import: "default" });
const cache = new Map();
const keyOf = (lang, slug) => `${lang}/${slug}`;

/** The prerender hands every tree over at once (src/entry-server.jsx). */
export function provideDocs(all) {
    for (const [file, doc] of Object.entries(all)) {
        const m = file.match(/([a-z]{2})\/([\w-]+)\.md/);
        if (m) cache.set(keyOf(m[1], m[2]), doc);
    }
}
const has = (lang, slug) => !!LOAD[`./${lang}/${slug}.md`] || cache.has(keyOf(lang, slug));
/** Which language a page is shown in. */
const shownIn = (slug, lang) => (has(lang, slug) ? lang : "en");

/** A page's tree, if it is here already. */
export function docNow(slug, lang) {
    const l = shownIn(slug, lang);
    const doc = cache.get(keyOf(l, slug));
    return doc ? { doc, lang: l } : null;
}
/** Fetch a page's tree. */
export async function loadDoc(slug, lang) {
    const l = shownIn(slug, lang), k = keyOf(l, slug);
    if (!cache.has(k)) {
        const load = LOAD[`./${l}/${slug}.md`];
        if (!load) return null;
        cache.set(k, await load());
    }
    return { doc: cache.get(k), lang: l };
}
export const preload = (slug, lang) => { if (slug && PAGES.includes(slug)) loadDoc(slug, lang).catch(() => {}); };

/** Before the first view hydrates: the tree of the page it shows, so it hydrates as prerendered. */
export function preloadFor(pathname) {
    const slug = docOf(bare(pathname));
    if (slug === null) return Promise.resolve();
    return Promise.all([import("@/docs/ui").then((m) => m.loadDocsUI()), slug ? loadDoc(slug, langOf(pathname).code) : null]).catch(() => null);
}

/** The page's tree, fetched if it is not here yet; the last one stays until the next has come. */
export function useDoc(slug, lang) {
    const [, rerender] = useState(0);
    const now = docNow(slug, lang);
    useEffect(() => {
        if (now) return;
        let live = true;
        loadDoc(slug, lang).then(() => live && rerender((n) => n + 1), () => import("@/docs/ui").then((m) => m.reloadOnce()));
        return () => { live = false; };
    }, [slug, lang, !!now]);
    return now;
}

/* ------------------------------------------------------------------ search */
const SEARCH = {
    en: () => import("virtual:bezzle-docs-search/en"),
    de: () => import("virtual:bezzle-docs-search/de"),
    fr: () => import("virtual:bezzle-docs-search/fr"),
    it: () => import("virtual:bezzle-docs-search/it"),
};
const searches = new Map();
/** Every section of every page in a language (English for pages it does not have yet). */
export function searchIndex(lang) {
    if (!searches.has(lang)) {
        searches.set(lang, Promise.all([SEARCH[lang]?.() ?? Promise.resolve({ default: [] }), lang === "en" ? null : SEARCH.en()]).then(([own, en]) => {
            const mine = new Map(own.default.map((p) => [p.slug, p]));
            return PAGES.map((slug) => mine.get(slug) || en?.default.find((p) => p.slug === slug)).filter(Boolean);
        }));
    }
    return searches.get(lang);
}
