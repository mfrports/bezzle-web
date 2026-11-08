import { T } from "@/words";
import { NAV } from "@/docs/nav";
import { docOf, metaOf } from "@/docs/index";

/*
 * What the admin area's views call things: the site's pages (by the words the site itself names them with), the
 * channels a visit comes through, the steps it takes, places by their time zone, and languages. In the admin area's
 * two languages, side by side, as t(en, de) takes them.
 */

/* The channels as api/_views.php sorts a visit into them, named and explained. */
export const CHANNELS = {
    Search: { name: ["Search", "Suche"], note: ["search engines", "Suchmaschinen"] },
    Social: { name: ["Social", "Social"], note: ["Hacker News, Reddit, Dribbble, social sites", "Hacker News, Reddit, Dribbble, soziale Netzwerke"] },
    AI: { name: ["AI", "KI"], note: ["ChatGPT, Perplexity, Claude…", "ChatGPT, Perplexity, Claude…"] },
    Referral: { name: ["Referral", "Verweis"], note: ["links on other sites", "Links auf anderen Websites"] },
    Campaign: { name: ["Campaign", "Kampagne"], note: ["links tagged with utm_source or ref", "Links mit utm_source oder ref"] },
    Direct: { name: ["Direct", "Direkt"], note: ["typed, bookmarked, apps, messages, shared links", "eingetippt, Lesezeichen, Apps, Nachrichten, geteilte Links"] },
};
export const channelName = (c, t) => (CHANNELS[c] ? t(...CHANNELS[c].name) : c);

/* The steps a visit takes from a page (api/_views.php, VIEW_STEPS). */
export const STEPS = {
    download: ["Downloaded Bezzle", "Hat Bezzle geladen"],
    "download-win": ["Downloaded Bezzle for Windows", "Hat Bezzle für Windows geladen"],
    app: ["Opened the browser version", "Öffnete die Browser-Version"],
    open: ["Opened a design in Bezzle", "Öffnete ein Design in Bezzle"],
};

/** A page as the views name it, in the words the site uses for it in that language (the admin's own two). */
export function pageName(path, code) {
    const w = T[code === "de" ? "de" : "en"];
    const de = code === "de";
    switch (path) {
        case "/": return de ? "Startseite" : "Home";
        case "/download.html": return w.nav_download;
        case "/releases.html": return w.nav_news;
        case "/support.html": return w.nav_support;
        case "/privacy.html": return w.nav_privacy;
        case "/open.html": return de ? "Geteiltes Design" : "Shared design";
        case "/404.html": return de ? "Seite fehlt" : "Missing page";
        case "/admin.html": return "Admin";
    }
    const doc = docOf(path);
    if (doc === "") return NAV[de ? "de" : "en"].nav;
    if (doc) return `${NAV[de ? "de" : "en"].nav}: ${metaOf(doc, de ? "de" : "en").nav || metaOf(doc, de ? "de" : "en").title}`;
    return path;
}

/** A time zone as the place it is named after: "America/New_York" is "New York". */
export const city = (zone) => zone.split("/").pop().replace(/_/g, " ");

/** A language's name in the admin's language: "German", "Deutsch". */
const languageNames = {};
export function language(code, lang) {
    try {
        languageNames[lang] ??= typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames([lang], { type: "language" }) : null;
        return languageNames[lang]?.of(code) ?? code;
    } catch { return code; }
}
/** The site's own languages, by their code. */
export const SITE_LANGS = { en: ["English", "Englisch"], de: ["German", "Deutsch"], fr: ["French", "Französisch"], it: ["Italian", "Italienisch"] };
