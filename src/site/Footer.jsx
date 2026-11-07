import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLang, useT } from "@/i18n";
import { NAV as D } from "@/docs/nav";
import { ISSUES } from "@/words";
import { RELEASE } from "@/lib/release";

/* The footer, and under it Bezzle's name in the paper, coming up out of the page's edge as the last
   of the page is scrolled to. */
export default function Footer() {
    const t = useT(), lang = useLang(), word = useRef(null);
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const el = word.current;
        const tw = gsap.fromTo(el, { yPercent: 46 }, { yPercent: 0, ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "clamp(top bottom)", end: "clamp(bottom bottom)", scrub: 0.5 } });
        return () => { tw.scrollTrigger?.kill(); tw.kill(); };
    }, []);
    const [a, b] = t.h1;
    const col = "grid gap-2.5 content-start [&_a]:text-ink-2 [&_a]:text-[15px] [&_a:hover]:text-ink";
    return (
        <footer className="relative overflow-hidden bg-panel shadow-[0_-0.5px_0_var(--hairline)] pt-16 transition-colors duration-700">
            <div className="page flex justify-between gap-12 flex-wrap">
                <div>
                    <Link to="/" className="flex items-center gap-2.5 text-ink font-serif font-semibold text-[20px]"><img src="/img/icon-256.png" alt="" width="28" height="28" className="w-7 h-7" />Bezzle</Link>
                    <p className="mt-4 font-serif font-semibold text-[22px] leading-tight tracking-[-0.015em] text-ink-2 max-w-[340px]">{a} {b}</p>
                </div>
                <nav className="flex gap-18 max-sm:gap-12">
                    {RELEASE && <div className={col}><p className="text-[12.5px] font-semibold text-ink-3 mb-1.5">Bezzle</p>
                        <Link to="/download.html">{t.nav_download}</Link>
                        <Link to="/releases.html">{t.nav_news}</Link>
                    </div>}
                    <div className={col}><p className="text-[12.5px] font-semibold text-ink-3 mb-1.5">{t.foot_help}</p>
                        <Link to="/docs/">{D[lang.code].nav}</Link>
                        <Link to="/support.html">{t.nav_support}</Link>
                        <Link to="/privacy.html">{t.nav_privacy}</Link>
                        <a href={ISSUES}>{t.foot_report}</a>
                    </div>
                </nav>
            </div>
            <div className="page flex justify-between mt-14 text-[13px] text-ink-3"><span>© 2026 Erik Muffler</span><span>macOS 26</span></div>
            <div ref={word} aria-hidden="true" className="will-change-transform font-serif font-semibold text-[min(30vw,420px)] leading-[0.74] tracking-[-0.045em] text-center whitespace-nowrap select-none mt-3 -mb-[0.1em]" style={{ color: "rgb(var(--ink-rgb) / 0.055)" }}>Bezzle</div>
        </footer>
    );
}
