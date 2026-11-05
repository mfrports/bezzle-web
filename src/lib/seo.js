/* Every page the prerender writes, and what goes into its head. */
import { LANGS, localize } from "@/i18n";
import { T } from "@/words";
import { RELEASE, SITE } from "@/lib/release";

const PAGES = ["/", "/support.html", "/privacy.html", ...(RELEASE ? ["/download.html", "/releases.html"] : []), "/404.html"];
export const ROUTES = LANGS.flatMap((l) => PAGES.map((p) => ({ path: localize(p, l.code), page: p, lang: l })));

function words(page, t) {
    switch (page) {
        case "/support.html": return [`${t.support_h} · Bezzle`, t.support_sub];
        case "/privacy.html": return [`${t.privacy_h} · Bezzle`, t.privacy[0][1]];
        case "/download.html": return [`${t.dl_title} · Bezzle`, t.dl_sub];
        case "/releases.html": return [`${t.news_h} · Bezzle`, t.news_sub];
        case "/404.html": return ["Bezzle", t.desc];
        default: return [t.title, t.desc];
    }
}

export function headFor(route) {
    const t = T[route.lang.code];
    const [title, description] = words(route.page, t);
    const url = SITE + route.path;
    return {
        lang: route.lang.code, title, description, url,
        image: `${SITE}/img/og/${route.lang.locale}.jpg`,
        alternates: route.page === "/404.html" ? [] : LANGS.map((l) => ({ lang: l.code, url: SITE + localize(route.page, l.code) })),
        noindex: route.page === "/404.html",
    };
}
