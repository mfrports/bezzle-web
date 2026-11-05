/* Every page the prerender writes, and what goes into its head. */
import { LANGS, localize } from "@/i18n";
import { T } from "@/words";
import { RELEASE, SITE } from "@/lib/release";

const PAGES = ["/", "/support.html", "/privacy.html", ...(RELEASE ? ["/download.html", "/releases.html"] : []), "/open.html", "/404.html"];
export const ROUTES = LANGS.flatMap((l) => PAGES.map((p) => ({ path: localize(p, l.code), page: p, lang: l })));

function words(page, t) {
    switch (page) {
        case "/support.html": return [`${t.support_h} · Bezzle`, t.support_sub];
        case "/privacy.html": return [`${t.privacy_h} · Bezzle`, t.privacy[0][1]];
        case "/download.html": return [`${t.dl_title} · Bezzle`, t.dl_sub];
        case "/releases.html": return [`${t.news_h} · Bezzle`, t.news_sub];
        case "/open.html": return [`${t.inv_title} · Bezzle`, t.inv_sub];
        case "/404.html": return ["Bezzle", t.desc];
        default: return [t.title, t.desc];
    }
}

/** Pages search engines leave out: the missing page, and the invitation, which is nobody's to find. */
const hidden = (page) => page === "/404.html" || page === "/open.html";

export function headFor(route) {
    const t = T[route.lang.code];
    const [title, description] = words(route.page, t);
    const url = SITE + route.path;
    return {
        lang: route.lang.code, title, description, url,
        image: `${SITE}/img/og/${route.lang.locale}.jpg`,
        alternates: hidden(route.page) ? [] : LANGS.map((l) => ({ lang: l.code, url: SITE + localize(route.page, l.code) })),
        noindex: hidden(route.page),
    };
}
