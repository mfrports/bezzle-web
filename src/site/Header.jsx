import { LANGS, Link, localize, useBarePath, useLang, useT } from "@/i18n";
import { STORE } from "@/words";
import { RELEASE } from "@/lib/release";
import { Link as RouterLink } from "react-router-dom";

/* A solid sheet of paper along the top, never glass. */
export default function Header() {
    const t = useT(), lang = useLang(), here = useBarePath();
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-16 bg-paper shadow-[0_0.5px_0_var(--hairline)] transition-colors duration-700">
            <div className="page h-full flex items-center gap-7 max-sm:gap-3">
                <Link to="/" className="flex items-center gap-2.5 text-ink font-serif font-semibold text-[20px] tracking-[-0.01em] max-[400px]:text-[0px]">
                    <img src="/bezzle-web/img/icon-256.png" alt="" width="28" height="28" className="w-7 h-7 drop-shadow-[0_2px_4px_rgb(var(--shadow-rgb)/0.18)]" />Bezzle
                </Link>
                <nav className="ml-auto flex gap-6 text-[14.5px] max-[860px]:hidden">
                    {RELEASE && <Link to="/releases.html" className="text-ink-2 hover:text-ink transition-colors">{t.nav_news}</Link>}
                    <Link to="/support.html" className="text-ink-2 hover:text-ink transition-colors">{t.nav_support}</Link>
                    <Link to="/privacy.html" className="text-ink-2 hover:text-ink transition-colors">{t.nav_privacy}</Link>
                </nav>
                <div className="flex items-center gap-4 max-sm:gap-2.5 max-[860px]:ml-auto">
                    <span className="langs">
                        {LANGS.map((l) => <RouterLink key={l.code} to={localize(here, l.code)} hrefLang={l.code} lang={l.code} aria-current={l.code === lang.code ? "page" : undefined}>{l.label}</RouterLink>)}
                    </span>
                    {RELEASE ? <Link className="btn btn-ink btn-small" to="/download.html">{t.nav_download}</Link> : <a className="btn btn-ink btn-small" href={STORE}>{t.cta_store}</a>}
                </div>
            </div>
        </header>
    );
}
