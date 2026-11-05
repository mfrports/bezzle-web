import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LangProvider, langOf, bare } from "@/i18n";
import Header from "@/site/Header";
import Footer from "@/site/Footer";
import Home from "@/pages/Home";
import Download from "@/pages/Download";
import Releases from "@/pages/Releases";
import Support from "@/pages/Support";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import Open from "@/pages/Open";
import { RELEASE } from "@/lib/release";
import { ROUTES, headFor } from "@/lib/seo";
import { smoothScroll } from "@/lib/smooth";
import { goTo } from "@/lib/nav";

const PAGES = { "/": Home, "/support.html": Support, "/privacy.html": Privacy, "/404.html": NotFound, "/open.html": Open, ...(RELEASE ? { "/download.html": Download, "/releases.html": Releases } : {}) };

export default function App() {
    const { pathname } = useLocation();
    const lang = langOf(pathname);
    const path = bare(pathname);
    // An invitation iCloud sent with its code in the path comes as an unknown page: still the invitation.
    const Page = PAGES[path] || (path.startsWith("/open.html") ? Open : NotFound);
    // A page reached inside the site: its title and language, and the top of it.
    useEffect(() => {
        const route = ROUTES.find((r) => r.path === pathname);
        if (route) { const m = headFor(route); document.title = m.title; document.documentElement.lang = m.lang; }
        if (!location.hash) { const s = smoothScroll(); if (s) s.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0); }
        // a link to a place on a page; the home page's story finds its own once it is built
        else if (!(path === "/" && document.documentElement.classList.contains("motion"))) requestAnimationFrame(() => goTo(decodeURIComponent(location.hash.slice(1)), { immediate: true }));
    }, [pathname]);
    return (
        <LangProvider value={lang}>
            <Header />
            <main>
                <Page />
            </main>
            <Footer />
        </LangProvider>
    );
}
