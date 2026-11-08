/*
 * What every page is, as schema.org data (JSON-LD) in its head, for search engines and the assistants
 * that answer from them: Bezzle the app (free, for macOS and, once it is out, Windows, its version, downloads
 * and screenshots), who
 * publishes it, and each page's own part: the questions on Support, the three steps on Download, every
 * version on What's New, and on a docs page the article, the way to it and the steps it walks through.
 * Only what the page itself says, in its language. The prerender's alone (scripts/prerender.mjs), so
 * none of it is in the browser's script.
 */
import { LANGS, localize } from "@/i18n";
import { T, CHAPTERS, ISSUES } from "@/words";
import { RELEASE, RELEASE_WIN, NOTES, SITE } from "@/lib/release";
import { DOCS_HOME, PAGES, docOf, docPath, docNow, metaOf, sectionOf } from "@/docs/index";
import { D } from "@/docs/words";
import { plain } from "@/docs/parse";
import { headFor } from "@/lib/seo";
import { VS } from "@/words-compare";
import { compareOf } from "@/words-compare-heads";
import { winSteps } from "@/site/Install";
import { WIN_T } from "@/site/win-words";

const at = (page, code) => SITE + localize(page, code);
const text = (html) => html.replace(/<[^>]+>/g, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\s+/g, " ").trim();
const ID = { org: `${SITE}/#organization`, site: `${SITE}/#website`, app: `${SITE}/#app`, logo: `${SITE}/#logo`, maker: `${SITE}/#maker` };
const ref = (id) => ({ "@id": id });
/** The app's window in each scene, as the captures have it (public/img/app/<locale>/). */
const SHOTS = ["hero", ...CHAPTERS.filter((c) => c !== "files")];
const shot = (lang, name) => `${SITE}/img/app/${lang.locale}/${name}.webp`;

function organization() {
    return {
        "@type": "Organization", "@id": ID.org, name: "Bezzle", url: `${SITE}/`,
        logo: { "@type": "ImageObject", "@id": ID.logo, url: `${SITE}/img/icon-512.png`, contentUrl: `${SITE}/img/icon-512.png`, width: 512, height: 512, caption: "Bezzle" },
        image: ref(ID.logo),
        sameAs: ["https://github.com/mfrports/bezzle-web"],
        contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: ISSUES, availableLanguage: ["English", "German", "French", "Italian"] },
    };
}

function website(code) {
    return {
        "@type": "WebSite", "@id": ID.site, url: `${SITE}/`, name: "Bezzle", description: T[code].desc,
        inLanguage: LANGS.map((l) => l.code), publisher: ref(ID.org),
        copyrightYear: 2026, copyrightHolder: { "@type": "Person", "@id": ID.maker, name: "Erik Muffler" },
    };
}

/** Bezzle itself: what it is, what it costs, what it runs on, and the version to download. */
function app(lang) {
    const t = T[lang.code], os = RELEASE?.os ?? "26", win = RELEASE_WIN;
    const chapter = (name) => t.chapters[CHAPTERS.indexOf(name)];
    return {
        "@type": "SoftwareApplication", "@id": ID.app, name: "Bezzle", url: at("/", lang.code),
        description: t.desc, abstract: t.lede,
        applicationCategory: "DesignApplication", applicationSubCategory: "UI design, prototyping, graphic design",
        operatingSystem: win ? `macOS ${os}, Windows ${win.os}` : `macOS ${os}`,
        softwareRequirements: win ? `macOS ${os} or later, or Windows ${win.os}` : `macOS ${os} or later`,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", url: at(RELEASE ? "/download.html" : "/", lang.code) },
        inLanguage: LANGS.map((l) => l.code),
        image: ref(ID.logo),
        screenshot: SHOTS.map((name) => {
            const c = chapter(name);
            return { "@type": "ImageObject", url: shot(lang, name), contentUrl: shot(lang, name), width: 2560, caption: c ? `${c[0]}: ${c[3]}` : t.title };
        }),
        featureList: t.receipt_items,
        author: ref(ID.maker), publisher: ref(ID.org),
        ...(RELEASE && {
            softwareVersion: RELEASE.version,
            downloadUrl: win ? [RELEASE.url, ...win.files.map((f) => f.url)] : RELEASE.url, installUrl: at("/download.html", lang.code),
            fileSize: `${RELEASE.mb} MB`,
            releaseNotes: at("/releases.html", lang.code),
            ...(NOTES.length && { datePublished: NOTES.at(-1).date, dateModified: NOTES[0].date }),
        }),
    };
}

function crumbs(url, trail) {
    return {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: trail.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
    };
}

/** A docs page's numbered steps, each under its heading, as the how-to it is. */
function howTos(tree, url, title) {
    const out = [];
    let head = null;
    for (const b of tree) {
        if (b.t === "h") head = { id: b.id, name: plain(b.c) };
        if (b.t !== "steps") continue;
        const steps = b.c.map((item, i) => {
            const words = item.filter((x) => x.t === "p").map((x) => x.c);
            const first = words[0]?.[0];
            // a step led in bold ("**Open the download.** Double-click…") is named by its lead
            const lead = first && typeof first === "object" && first.t === "b";
            const name = lead ? plain(first.c).replace(/[.:]$/, "") : undefined;
            const all = text([lead ? words[0].slice(1) : words[0], ...words.slice(1)].map(plain).join(" "));
            return { "@type": "HowToStep", position: i + 1, ...(name && { name }), text: all || name };
        }).filter((s) => s.text);
        if (steps.length < 2) continue;
        out.push({ "@type": "HowTo", "@id": `${url}#${head?.id ?? "steps"}-how`, name: head?.name ?? title, url: head ? `${url}#${head.id}` : url, step: steps });
    }
    return out;
}

/** The screenshots a docs page shows. */
const figures = (tree) => tree.filter((b) => b.t === "figure" && SHOTS.concat("home").includes(b.name));

/**
 * The page's graph. `dates` are the prerender's: when the page's words were first written and last
 * changed ({ published, modified }, from git).
 */
export function schemaFor(route, dates = {}) {
    const m = headFor(route);
    // only the page that is kept: a docs page shown in English stands for the English one
    if (!m.listed) return null;
    const { lang, page } = route, code = lang.code, t = T[code], w = D[code];
    const url = m.canonical;
    const home = ["Bezzle", at("/", code)];
    const webpage = (type, extra = {}) => ({
        "@type": type, "@id": `${url}#webpage`, url, name: m.title, description: m.description,
        inLanguage: code, isPartOf: ref(ID.site),
        primaryImageOfPage: { "@type": "ImageObject", url: m.image, width: 1200, height: 630 },
        ...(dates.modified && { dateModified: dates.modified }),
        ...extra,
    });
    const graph = [organization(), website(code)];
    const doc = docOf(page), vs = compareOf(page);

    // a page for people coming from another app: Bezzle, its questions, and the way the files come across
    if (vs) {
        const c = VS[code].common, r = VS[code][vs];
        const steps = [vs === "figma" ? r.save : c.get, r.bring, c.check];
        graph.push(app(lang), webpage(["WebPage", "FAQPage"], {
            about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`),
            mainEntity: r.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }), crumbs(url, [home, [r.chip, url]]), {
            "@type": "HowTo", "@id": `${url}#files`, name: r.chip, url,
            step: steps.map(([h, p], i) => ({ "@type": "HowToStep", position: i + 1, name: h, text: p })),
        });
        return { "@context": "https://schema.org", "@graph": graph };
    }

    if (page === "/") {
        graph.push(app(lang), webpage("WebPage", { about: ref(ID.app), mainEntity: ref(ID.app) }));
    } else if (page === "/support.html") {
        const faq = [...t.faq];
        if (RELEASE) faq.splice(faq.length - 1, 0, t.faq_updates);
        graph.push(webpage(["WebPage", "FAQPage"], {
            about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`),
            mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: text(q), acceptedAnswer: { "@type": "Answer", text: text(a) } })),
        }), crumbs(url, [home, [t.support_h, url]]));
    } else if (page === "/privacy.html") {
        graph.push(webpage("WebPage", { about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`) }), crumbs(url, [home, [t.privacy_h, url]]));
    } else if (page === "/download.html") {
        const howTo = (id, name, steps) => ({ "@type": "HowTo", "@id": `${url}#${id}`, name, description: t.dl_sub, url, step: steps.map(([h, p], i) => ({ "@type": "HowToStep", position: i + 1, name: h, text: p })) });
        graph.push(app(lang), webpage("WebPage", { about: ref(ID.app), mainEntity: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`) }), crumbs(url, [home, [t.dl_title, url]]),
            // on a Mac, and on a PC once Bezzle for Windows is out
            ...(RELEASE ? [howTo("install", t.dl_title, t.steps.map(([h, p]) => [h, p.replace("{zip}", RELEASE.zip)]))] : []),
            // the install's four steps, without the last chapter (updates), as the Mac's has its three
            ...(RELEASE_WIN ? [howTo("install-windows", WIN_T[code].story_label, winSteps(code).slice(0, 4))] : []));
    } else if (page === "/releases.html") {
        graph.push(app(lang), webpage("WebPage", {
            about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`),
            hasPart: NOTES.map((r) => {
                const n = r.notes[code];
                return { "@type": "CreativeWork", "@id": `${url}#v${r.version}`, url: `${url}#v${r.version}`, name: `${t.version.replace("{v}", r.version)}: ${n.title}`, datePublished: r.date, inLanguage: code, abstract: text(n.lede), about: ref(ID.app) };
            }),
        }), crumbs(url, [home, [t.news_h, url]]));
    } else if (doc === "") {
        graph.push(webpage("CollectionPage", {
            about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`),
            mainEntity: {
                "@type": "ItemList", numberOfItems: PAGES.length,
                itemListElement: PAGES.map((slug, i) => ({ "@type": "ListItem", position: i + 1, url: at(docPath(slug), code), name: metaOf(slug, code).title })),
            },
        }), crumbs(url, [home, [w.title, url]]));
    } else if (doc) {
        const meta = metaOf(doc, code);
        const tree = docNow(doc, code)?.doc.tree ?? [];
        const docs = at(DOCS_HOME, code);
        const pics = figures(tree).map((f) => ({ "@type": "ImageObject", url: shot(lang, f.name), caption: text(plain(f.c)) }));
        graph.push(webpage("WebPage", { about: ref(ID.app), breadcrumb: ref(`${url}#breadcrumb`), mainEntity: ref(`${url}#article`), isPartOf: [ref(ID.site), ref(`${docs}#webpage`)] }),
            {
                "@type": "TechArticle", "@id": `${url}#article`, url, mainEntityOfPage: ref(`${url}#webpage`),
                headline: meta.title, description: meta.lede, inLanguage: code,
                articleSection: w.sections[sectionOf(doc).key][0],
                wordCount: meta.words,
                image: pics.length ? pics : { "@type": "ImageObject", url: m.image, width: 1200, height: 630 },
                about: ref(ID.app), author: ref(ID.org), publisher: ref(ID.org),
                ...(dates.published && { datePublished: dates.published }),
                ...(dates.modified && { dateModified: dates.modified }),
            },
            crumbs(url, [home, [w.title, docs], [meta.title, url]]),
            ...howTos(tree, url, meta.title));
    }
    return { "@context": "https://schema.org", "@graph": graph };
}
