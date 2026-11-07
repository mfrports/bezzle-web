/*
 * The header: one bar floating over the top of the page, raised as a card once the page has moved.
 * Its menu sits in a well, as Bezzle's mode switch does, and a card springs to the item pointed at
 * (spring 0.36/0.8, the app's own), resting on the page you are on. Features opens every feature of
 * the story, each a step away, and on the home page a pencil line under it fills as the story is
 * read. On the home page the card rests where you are: on Features while the story plays, on Free
 * once its section is in front of you. The language opens the four. On a phone it all folds into
 * one menu, over the page dimmed behind it.
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { LANGS, Link, localize, useBarePath, useLang, useT } from "@/i18n";
import { CHAPTERS } from "@/words";
import { RELEASE } from "@/lib/release";
import { Icon } from "@/app/Kit";
import { ARROW } from "@/site/Ctas";
import { goTo, onStoryRead } from "@/lib/nav";
import { NAV as D } from "@/docs/nav";
import { spring, settle } from "@/story/engine";

const GLYPH = { files: "layers", adapt: "frame", components: "component", prototype: "play", inspect: "code", cutout: "picture", dark: "moon", deck: "group", together: "share", ai: "sparkle" };
const NATIVE = { en: "English", de: "Deutsch", fr: "Français", it: "Italiano" };
const SPRING = spring(0.36, 0.8), TIME = settle(0.36, 0.8);
const PANEL = "absolute rounded-[18px] bg-card shadow-[0_18px_44px_rgb(var(--shadow-rgb)/0.2),0_2px_6px_rgb(var(--shadow-rgb)/0.1),0_0_0_0.5px_var(--hairline)] transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top";
const shown = (on) => (on ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-1 scale-[0.98] pointer-events-none");

export default function Header() {
    const t = useT(), lang = useLang(), here = useBarePath(), navigate = useNavigate();
    const [raised, setRaised] = useState(false);
    const [open, setOpen] = useState(null);
    const [hover, setHover] = useState(null);
    const [chapter, setChapter] = useState(-1);
    const [reading, setReading] = useState(false), [inFree, setInFree] = useState(false);
    const header = useRef(null), well = useRef(null), thumb = useRef(null), line = useRef(null), placed = useRef(false), timer = useRef(0);
    const home = here === "/";
    const items = [
        { key: "features", label: t.nav_features, menu: true },
        { key: "free", label: t.nav_free, hash: "free" },
        ...(RELEASE ? [{ key: "news", label: t.nav_news, to: "/releases.html" }] : []),
        { key: "docs", label: D[lang.code].nav, to: "/docs/" },
        { key: "support", label: t.nav_support, to: "/support.html" },
    ];
    const page = here === "/releases.html" ? "news" : here === "/support.html" ? "support" : here.startsWith("/docs") ? "docs" : null;
    const active = page ?? (home ? (inFree ? "free" : reading ? "features" : null) : null);
    const target = hover ?? (open === "features" ? "features" : active);

    // raised once the page has moved
    useEffect(() => {
        const on = () => setRaised(scrollY > 8);
        on();
        addEventListener("scroll", on, { passive: true });
        return () => removeEventListener("scroll", on);
    }, []);
    // the card in the well goes where the pointer is, or rests where you are; from nowhere it
    // appears in its place, and between two items it springs across
    useEffect(() => {
        const card = thumb.current, el = target && well.current?.querySelector(`[data-item="${target}"]`);
        if (!el) { gsap.to(card, { opacity: 0, duration: 0.18, ease: "power1.out", overwrite: "auto" }); return; }
        const at = { x: el.offsetLeft, width: el.offsetWidth };
        if (!placed.current || gsap.getProperty(card, "opacity") < 0.05) {
            gsap.set(card, at);
            gsap.to(card, { opacity: 1, duration: 0.22, ease: "power1.out", overwrite: "auto" });
        } else gsap.to(card, { ...at, opacity: 1, duration: TIME, ease: SPRING, overwrite: "auto" });
        placed.current = true;
    }, [target, lang.code]);
    // the story's reading, under Features
    useEffect(() => onStoryRead((p, i) => {
        if (line.current) line.current.style.transform = `scaleX(${p.toFixed(4)})`;
        setChapter(i);
        setReading(i >= 0 && p < 0.995);
    }), []);
    useEffect(() => { if (line.current && !home) line.current.style.transform = "scaleX(0)"; setChapter(-1); setReading(false); }, [home]);
    // on the home page, whether Free is in front of you (its section across the middle of the screen)
    useEffect(() => {
        setInFree(false);
        const el = home && document.getElementById("free");
        if (!el) return;
        const io = new IntersectionObserver(([e]) => setInFree(e.isIntersecting), { rootMargin: "-42% 0px -42% 0px" });
        io.observe(el);
        return () => io.disconnect();
    }, [home]);
    // menus close on a page change, a click elsewhere, or Escape
    useEffect(() => { setOpen(null); setHover(null); }, [here, lang.code]);
    useEffect(() => {
        if (!open) return;
        const away = (e) => { if (!header.current?.contains(e.target)) setOpen(null); };
        const key = (e) => { if (e.key === "Escape") setOpen(null); };
        document.addEventListener("pointerdown", away);
        document.addEventListener("keydown", key);
        return () => { document.removeEventListener("pointerdown", away); document.removeEventListener("keydown", key); };
    }, [open]);

    // a point of the home page: glide to it when here, otherwise open the home page there
    const go = (id) => (e) => {
        e.preventDefault();
        setOpen(null);
        if (home && goTo(id)) return;
        navigate(`${localize("/", lang.code)}#${id}`);
    };
    // Features opens on hover with a mouse, and on a click or tap
    const hold = (fn, ms) => { clearTimeout(timer.current); timer.current = setTimeout(fn, ms); };
    const enter = (e) => { if (e.pointerType === "mouse") hold(() => setOpen("features"), 70); };
    const leave = (e) => { if (e.pointerType === "mouse") hold(() => setOpen((o) => (o === "features" ? null : o)), 220); };

    const features = (compact) => CHAPTERS.map((k, i) => {
        const [chip, l1, l2] = t.chapters[i];
        return (
            <RouterLink key={k} to={`${localize("/", lang.code)}#${k}`} onClick={go(k)} role="menuitem"
                className={`group flex items-center gap-3 rounded-[12px] ${compact ? "p-2" : "p-2.5"} transition-colors hover:bg-well ${home && i === chapter ? "bg-pencil-wash" : ""}`}>
                <span className={`grid place-items-center flex-none rounded-[10px] text-pencil bg-pencil-wash transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 ${compact ? "w-8 h-8" : "w-9 h-9"}`}><Icon name={GLYPH[k]} size={compact ? 16 : 18} /></span>
                <span className="min-w-0">
                    <span className="block text-[14px] font-semibold text-ink leading-tight">{chip}</span>
                    {!compact && <span className="block mt-0.5 text-[12.5px] text-ink-3 truncate">{l1} {l2}</span>}
                </span>
            </RouterLink>
        );
    });
    // on the download page itself, it starts the download
    const download = (cls = "") => RELEASE && <Link className={`btn btn-ink btn-small ${cls}`} to={here === "/download.html" ? "/download.html#now" : "/download.html"}>{ARROW}{t.nav_download}</Link>;

    return (
        <header ref={header} className="fixed inset-x-0 top-0 z-50 pointer-events-none">
            {/* on a phone, the page dims behind the open menu */}
            <div aria-hidden="true" className={`fixed inset-0 bg-[rgb(var(--shadow-rgb)/0.2)] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1060px]:hidden ${open === "menu" ? "opacity-100 pointer-events-auto" : "opacity-0"}`} onClick={() => setOpen(null)} />
            <div className="page pt-2.5 max-sm:pt-2">
                <div className={`pointer-events-auto relative grid grid-cols-[1fr_auto_1fr] max-[1059px]:grid-cols-[1fr_auto] items-center h-[52px] pl-3 pr-2 rounded-[16px] transition-[background-color,box-shadow] duration-300
                    ${raised || open ? "bg-card shadow-[0_10px_30px_rgb(var(--shadow-rgb)/0.12),0_1px_3px_rgb(var(--shadow-rgb)/0.1),0_0_0_0.5px_var(--hairline)]" : ""}`}>
                    <Link to="/" className="justify-self-start flex items-center gap-2.5 text-ink font-serif font-semibold text-[19px] tracking-[-0.01em]">
                        <img src="/img/icon-128.webp" alt="" width="28" height="28" className="w-7 h-7 drop-shadow-[0_2px_4px_rgb(var(--shadow-rgb)/0.18)]" />Bezzle
                    </Link>

                    {/* the menu, in a well like the app's mode switch */}
                    <nav ref={well} onPointerLeave={() => setHover(null)} className="relative flex items-center p-[3px] rounded-[12px] bg-well shadow-[inset_0_1px_1.5px_rgb(var(--shadow-rgb)/0.18),0_1px_0_var(--lip)] max-[1059px]:hidden">
                        <i ref={thumb} aria-hidden="true" className="absolute block left-0 top-[3px] bottom-[3px] w-0 rounded-[9px] bg-card opacity-0 shadow-[0_1px_2px_rgb(var(--shadow-rgb)/0.2),0_0_0_0.5px_var(--hairline)]" />
                        {items.map((it) => {
                            const on = target === it.key;
                            const cls = `relative z-[1] flex items-center gap-1 h-[34px] px-3.5 rounded-[9px] text-[14px] font-medium whitespace-nowrap transition-colors duration-200 ${on ? "text-ink" : "text-ink-2"}`;
                            const hov = { onPointerEnter: () => setHover(it.key) };
                            if (it.menu) return (
                                <button key={it.key} type="button" data-item={it.key} {...hov} aria-expanded={open === "features"} aria-controls="bz-features" className={cls}
                                    onClick={() => setOpen((o) => (o === "features" ? null : "features"))} onPointerEnter={(e) => { setHover(it.key); enter(e); }} onPointerLeave={leave}>
                                    {it.label}<Icon name="chevron" size={12} className={`transition-transform duration-300 ${open === "features" ? "rotate-180" : ""}`} />
                                    {home && <i ref={line} aria-hidden="true" className="absolute block left-3.5 right-3.5 bottom-[5px] h-[1.5px] rounded-full bg-pencil origin-left" style={{ transform: "scaleX(0)" }} />}
                                </button>
                            );
                            if (it.hash) return <RouterLink key={it.key} data-item={it.key} {...hov} to={`${localize("/", lang.code)}#${it.hash}`} onClick={go(it.hash)} className={cls}>{it.label}</RouterLink>;
                            return <Link key={it.key} data-item={it.key} {...hov} to={it.to} aria-current={page === it.key ? "page" : undefined} className={cls}>{it.label}</Link>;
                        })}
                    </nav>

                    <div className="justify-self-end flex items-center gap-1.5">
                        {/* the language */}
                        <div className="relative max-[1059px]:hidden">
                            <button type="button" aria-expanded={open === "lang"} aria-label={t.nav_language} onClick={() => setOpen((o) => (o === "lang" ? null : "lang"))}
                                className={`flex items-center gap-1.5 h-[34px] px-2.5 rounded-[10px] text-[13.5px] font-semibold transition-colors ${open === "lang" ? "bg-well text-ink" : "text-ink-2 hover:text-ink hover:bg-well"}`}>
                                <Icon name="globe" size={15} />{lang.label}<Icon name="chevron" size={11} className={`transition-transform duration-300 ${open === "lang" ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`${PANEL} right-0 top-[calc(100%+12px)] w-[200px] p-1.5 ${shown(open === "lang")}`}>
                                {LANGS.map((l) => (
                                    <RouterLink key={l.code} to={localize(here, l.code)} hrefLang={l.code} lang={l.code} aria-current={l.code === lang.code ? "page" : undefined}
                                        className={`flex items-center gap-2 h-9 px-3 rounded-[10px] text-[14px] transition-colors hover:bg-well ${l.code === lang.code ? "text-ink font-semibold" : "text-ink-2"}`}>
                                        {NATIVE[l.code]}<span className="ml-auto text-[11.5px] font-semibold text-ink-3">{l.label}</span>
                                        <span className="w-3.5 text-pencil">{l.code === lang.code && <Icon name="check" size={14} />}</span>
                                    </RouterLink>
                                ))}
                            </div>
                        </div>
                        {download("max-[420px]:px-3")}
                        {/* on a phone, one menu */}
                        <button type="button" aria-expanded={open === "menu"} aria-label={t.nav_menu} onClick={() => setOpen((o) => (o === "menu" ? null : "menu"))}
                            className="min-[1060px]:hidden relative w-10 h-10 rounded-[11px] grid place-items-center text-ink hover:bg-well">
                            <i className={`absolute block w-[17px] h-[1.6px] rounded-full bg-current transition-transform duration-300 ${open === "menu" ? "rotate-45" : "-translate-y-[3.5px]"}`} />
                            <i className={`absolute block w-[17px] h-[1.6px] rounded-full bg-current transition-transform duration-300 ${open === "menu" ? "-rotate-45" : "translate-y-[3.5px]"}`} />
                        </button>
                    </div>

                    {/* Features: every chapter of the story */}
                    <div id="bz-features" role="menu" onPointerEnter={() => clearTimeout(timer.current)} onPointerLeave={leave}
                        className={`${PANEL} left-1/2 top-[calc(100%+12px)] -ml-[330px] w-[660px] p-2 grid grid-cols-2 gap-0.5 max-[1059px]:hidden ${shown(open === "features")}`}>
                        {features(false)}
                    </div>

                    {/* the phone's menu */}
                    <div className={`${PANEL} inset-x-0 top-[calc(100%+10px)] p-3 max-h-[calc(100svh-90px)] overflow-y-auto min-[1060px]:hidden ${shown(open === "menu")}`}>
                        <div className="grid grid-cols-2 gap-0.5">{features(true)}</div>
                        <div className="mt-2 pt-2 border-t-[0.5px] border-hairline grid">
                            <RouterLink to={`${localize("/", lang.code)}#free`} onClick={go("free")} className="h-11 px-2 flex items-center text-[16px] font-medium text-ink">{t.nav_free}</RouterLink>
                            {RELEASE && <Link to="/releases.html" className="h-11 px-2 flex items-center text-[16px] font-medium text-ink">{t.nav_news}</Link>}
                            <Link to="/docs/" className="h-11 px-2 flex items-center text-[16px] font-medium text-ink">{D[lang.code].nav}</Link>
                            <Link to="/support.html" className="h-11 px-2 flex items-center text-[16px] font-medium text-ink">{t.nav_support}</Link>
                            <Link to="/privacy.html" className="h-11 px-2 flex items-center text-[16px] font-medium text-ink">{t.nav_privacy}</Link>
                        </div>
                        <div className="mt-2 pt-3 border-t-[0.5px] border-hairline flex items-center justify-between gap-3">
                            <span className="text-[13px] text-ink-3">{t.nav_language}</span>
                            <span className="langs">{LANGS.map((l) => <RouterLink key={l.code} to={localize(here, l.code)} hrefLang={l.code} lang={l.code} aria-current={l.code === lang.code ? "page" : undefined}>{l.label}</RouterLink>)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
