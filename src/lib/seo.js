/*
 * Every page the prerender writes, and what goes into its head: the title and description, the one
 * address search engines keep (canonical), the same page in the other languages (hreflang, with
 * English as x-default), and the link preview. The pages' structured data (src/lib/schema.js) and the
 * sitemap, robots.txt, llms.txt and the docs' Markdown (scripts/prerender.mjs) are the prerender's
 * alone; App only takes the title and language from here when a page is reached inside the site.
 */
import { LANGS, localize } from "@/i18n";
import { T } from "@/words";
import { RELEASE, SITE } from "@/lib/release";
import { DOCS_HOME, PAGES as DOC_PAGES, docOf, docPath, metaOf } from "@/docs/index";
import { NAV as D } from "@/docs/nav";

const PAGES = ["/", "/support.html", "/privacy.html", ...(RELEASE ? ["/download.html", "/releases.html"] : []), "/open.html", "/404.html", DOCS_HOME, ...DOC_PAGES.map(docPath)];
export const ROUTES = LANGS.flatMap((l) => PAGES.map((p) => ({ path: localize(p, l.code), page: p, lang: l })));

/** Each language as Open Graph names it. */
export const OG_LOCALE = { en: "en_US", de: "de_DE", fr: "fr_FR", it: "it_IT" };

const fill = (s) => s.replace("{v}", RELEASE?.version ?? "").replace("{mb}", RELEASE?.mb ?? "").replace("{os}", RELEASE?.os ?? "26");

function words(page, t, code) {
    const doc = docOf(page);
    if (doc === "") return [D[code].seo, D[code].desc];
    if (doc) {
        // the docs' name after the page's, or only Bezzle's when that would make the title too long for a result
        const m = metaOf(doc, code), full = `${m.title} · ${D[code].title}`;
        return [full.length > 65 ? `${m.title} · Bezzle` : full, m.lede];
    }
    switch (page) {
        case "/support.html": return t.seo.support;
        case "/privacy.html": return [t.seo.privacy, t.privacy[0][1]];
        case "/download.html": return t.seo.download.map(fill);
        case "/releases.html": return t.seo.news.map(fill);
        case "/open.html": return [`${t.inv_title} · Bezzle`, t.inv_sub];
        case "/404.html": return [`${t.lost_h} · Bezzle`, t.lost_p];
        default: return [t.title, t.desc];
    }
}

/** Pages search engines leave out: the missing page, and the invitation, which is nobody's to find. */
export const hidden = (page) => page === "/404.html" || page === "/open.html";

/** The languages a page is written in: all four, but a docs page only those it has been written in. */
export function langsOf(page) {
    const doc = docOf(page);
    return doc ? LANGS.filter((l) => metaOf(doc, l.code).lang === l.code) : LANGS;
}

export function headFor(route) {
    const code = route.lang.code, t = T[code];
    const [title, description] = words(route.page, t, code);
    const url = SITE + route.path;
    const doc = docOf(route.page);
    const langs = langsOf(route.page);
    // a docs page not yet in this language shows the English one, and that is the one to keep
    const own = langs.some((l) => l.code === code);
    const noindex = hidden(route.page);
    const listed = !noindex && own;
    return {
        lang: code, locale: OG_LOCALE[code], title, description, url,
        canonical: own ? url : SITE + route.page,
        image: `${SITE}/img/og/${route.lang.locale}.jpg`, imageAlt: t.title,
        type: doc ? "article" : "website",
        alternates: listed ? [...langs.map((l) => ({ lang: l.code, url: SITE + localize(route.page, l.code) })), { lang: "x-default", url: SITE + route.page }] : [],
        locales: listed ? langs.filter((l) => l.code !== code).map((l) => OG_LOCALE[l.code]) : [],
        // the page's words as plain Markdown, for assistants that read (scripts/prerender.mjs writes it)
        markdown: doc && own ? url.replace(/\.html$/, ".md") : null,
        noindex, listed,
    };
}
