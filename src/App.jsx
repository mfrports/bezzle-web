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
import { RELEASE } from "@/lib/release";
import { ROUTES, headFor } from "@/lib/seo";
import { smoothScroll } from "@/lib/smooth";

const PAGES = { "/": Home, "/support.html": Support, "/privacy.html": Privacy, "/404.html": NotFound, ...(RELEASE ? { "/download.html": Download, "/releases.html": Releases } : {}) };

export default function App() {
    const { pathname } = useLocation();
    const lang = langOf(pathname);
    const path = bare(pathname);
    const Page = PAGES[path] || NotFound;
    // A page reached inside the site: its title and language, and the top of it.
    useEffect(() => {
        const route = ROUTES.find((r) => r.path === pathname);
        if (route) { const m = headFor(route); document.title = m.title; document.documentElement.lang = m.lang; }
        if (!location.hash) { const s = smoothScroll(); if (s) s.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0); }
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
