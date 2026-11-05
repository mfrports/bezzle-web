/* eslint-disable react-refresh/only-export-components -- the language's helpers live with its Link. */
import { createContext, useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { T } from "@/words";

/*
 * The site in English, German, French and Italian. English keeps the plain paths (/support.html),
 * the others live under their code (/de/support.html). The pages are one table, matched on the path
 * without its language, so App picks the language off the URL and the pages ask for it with useLang.
 */
export const LANGS = [
    { code: "en", locale: "en-US", prefix: "", label: "EN" },
    { code: "de", locale: "de-DE", prefix: "/de", label: "DE" },
    { code: "fr", locale: "fr-FR", prefix: "/fr", label: "FR" },
    { code: "it", locale: "it", prefix: "/it", label: "IT" },
];
const byCode = Object.fromEntries(LANGS.map((l) => [l.code, l]));

export const langOf = (path) => LANGS.find((l) => l.prefix && (path === l.prefix || path.startsWith(l.prefix + "/"))) || LANGS[0];
/** A path without its language: /de/support.html → /support.html, /de/ → /. */
export function bare(path) {
    const l = langOf(path);
    const rest = l.prefix ? path.slice(l.prefix.length) : path;
    return rest === "" ? "/" : rest;
}
/** A site path in a language: /support.html → /de/support.html, / → /de/. */
export const localize = (to, code) => (byCode[code].prefix ? byCode[code].prefix + to : to);

const LangContext = createContext(LANGS[0]);
export const LangProvider = LangContext.Provider;
export const useLang = () => useContext(LangContext);
/** This language's words. */
export const useT = () => T[useLang().code];

/** A link to a page of the site, in the page's language; anything else is a plain anchor. */
export function Link({ to, ...props }) {
    const lang = useLang();
    if (typeof to === "string" && to.startsWith("/")) return <RouterLink to={localize(to, lang.code)} {...props} />;
    return <a href={to} {...props} />;
}

/** The page's path without its language, for the language switch and the head. */
export function useBarePath() {
    return bare(useLocation().pathname);
}
