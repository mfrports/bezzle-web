const MONTHS = {
    en: "January February March April May June July August September October November December".split(" "),
    de: "Januar Februar März April Mai Juni Juli August September Oktober November Dezember".split(" "),
    fr: "janvier février mars avril mai juin juillet août septembre octobre novembre décembre".split(" "),
    it: "gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),
};
/** 2026-11-04 → "4 November 2026", "4. November 2026", "4 novembre 2026", "1er novembre 2026". */
export function day(date, lang) {
    const [y, m, d] = date.split("-").map(Number);
    const month = MONTHS[lang][m - 1];
    if (lang === "en") return `${d} ${month} ${y}`;
    if (lang === "de") return `${d}. ${month} ${y}`;
    const first = d === 1 ? (lang === "fr" ? "1er" : "1°") : d;
    return `${first} ${month} ${y}`;
}
