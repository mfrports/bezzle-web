import { Link, useT } from "@/i18n";
import { ISSUES } from "@/words";
import { RELEASE } from "@/lib/release";

export default function Footer() {
    const t = useT();
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
                    {RELEASE && <div className={col}><h4 className="text-[12.5px] font-semibold text-ink-3 mb-1.5">Bezzle</h4>
                        <Link to="/download.html">{t.nav_download}</Link>
                        <Link to="/releases.html">{t.nav_news}</Link>
                    </div>}
                    <div className={col}><h4 className="text-[12.5px] font-semibold text-ink-3 mb-1.5">{t.foot_help}</h4>
                        <Link to="/support.html">{t.nav_support}</Link>
                        <Link to="/privacy.html">{t.nav_privacy}</Link>
                        <a href={ISSUES}>{t.foot_report}</a>
                    </div>
                </nav>
            </div>
            <div className="page flex justify-between mt-14 text-[13px] text-ink-3"><span>© 2026 Erik Muffler</span><span>macOS 26</span></div>
            <div aria-hidden="true" className="font-serif font-semibold text-[min(30vw,420px)] leading-[0.74] tracking-[-0.045em] text-center whitespace-nowrap select-none mt-3 -mb-[0.1em]" style={{ color: "rgb(var(--ink-rgb) / 0.055)" }}>Bezzle</div>
        </footer>
    );
}
