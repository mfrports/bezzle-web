import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { localize } from "@/i18n";
import { dontCount } from "@/lib/track";
import { spring, settle } from "@/story/engine";
import { MARK } from "@/site/Marked";
import { admin, card, I, Icon, Loader, quiet, ring, useCode, useParams, useT, Waiting } from "@/admin/ui";
import "@/admin/admin.css";

// Each view, with its charts and its player, loads only once someone signed in opens it.
const Visitors = lazy(() => import("@/admin/Visitors"));
const Sessions = lazy(() => import("@/admin/Sessions"));
const Heatmaps = lazy(() => import("@/admin/Heatmaps"));

/**
 * The admin area (bezzle.ch/admin, /de/admin in German): the site's own visitor numbers and OpenAI's read of them
 * (Visitors), every visit of a day replayed over the page (Sessions, ?view=sessions), and where each page is clicked
 * and how far down it is read (Heatmaps, ?view=heatmaps). Not linked from anywhere, noindex, and kept from robots.txt;
 * the API behind it (api/admin.php) wants the admin password (ADMIN_PASSWORD) and keeps the session in an HTTP-only
 * cookie. The browser signed in on is left out of the numbers (lib/track.js, dontCount).
 *
 * In Bezzle's materials: a bar of its own floating where the site's header floats, the views in its well with the
 * card springing to the one you are on (spring 0.36/0.8, the app's own, as the header's menu), the paper, its cards
 * and the blue pencil for whatever matters. Each view has one headline, a sentence saying what it shows, never the
 * tab's word again. In English and German, as the maker reads it.
 */
export default function Admin() {
    const [me, setMe] = useState(null);
    useEffect(() => { admin("me").then(setMe).catch(() => setMe({ admin: false, configured: true, offline: true })); }, []);
    useEffect(() => { if (me?.admin) dontCount(); }, [me]);
    const out = useCallback(() => setMe((m) => ({ ...m, admin: false })), []);
    return (
        <div className="min-h-[100svh]">
            <Bar signedIn={!!me?.admin} onOut={out} />
            <main id="main">
                {!me ? <div className="min-h-[100svh] grid place-items-center"><Loader size={64} /></div>
                    : !me.admin ? <SignIn configured={me.configured} offline={me.offline} onIn={() => setMe({ admin: true, configured: true })} />
                    : <Console onOut={out} />}
            </main>
        </div>
    );
}

/* ── The views ───────────────────────────────────────────────────────────── */

/* Each view: its tab, and its one headline, the last words under the pencil. */
const VIEWS = [
    { key: "visitors", tab: ["Visitors", "Besucher"], head: [["Who comes, from where, and what they", "read."], ["Wer kommt, woher, und was", "gelesen wird."]] },
    { key: "sessions", tab: ["Sessions", "Sitzungen"], head: [["Every visit of a day,", "played again."], ["Jeder Besuch eines Tages,", "noch einmal gespielt."]] },
    { key: "heatmaps", tab: ["Heatmaps", "Heatmaps"], head: [["Where each page is clicked, and how far it is", "read."], ["Wo jede Seite geklickt wird, und wie weit sie", "gelesen wird."]] },
];
const viewOf = (params) => (VIEWS.some((v) => v.key === params.get("view")) ? params.get("view") : "visitors");
const viewTo = (key) => (key === "visitors" ? "/admin.html" : `/admin.html?view=${key}`);
const SPRING = spring(0.36, 0.8), TIME = settle(0.36, 0.8);

/**
 * The bar along the top, in the place and the shape of the site's header: Bezzle (back to the site) and what this
 * is, the views in a well, the language and signing out. On a phone the views sit under it (Tabs).
 */
function Bar({ signedIn, onOut }) {
    const [params] = useParams();
    const t = useT(), code = useCode();
    const { pathname, search } = useLocation();
    const view = viewOf(params);
    const well = useRef(null), thumb = useRef(null), placed = useRef(false);
    const [hover, setHover] = useState(null);
    const [busy, setBusy] = useState(false);
    const [raised, setRaised] = useState(false);
    const target = hover ?? view;
    // raised a little more once the page has moved, as the site's header
    useEffect(() => {
        const on = () => setRaised(scrollY > 8);
        on();
        addEventListener("scroll", on, { passive: true });
        return () => removeEventListener("scroll", on);
    }, []);
    // the card in the well goes where the pointer is, or rests on the view you are on
    useLayoutEffect(() => {
        const c = thumb.current, el = signedIn && well.current?.querySelector(`[data-item="${target}"]`);
        if (!c || !el) return;
        const at = { x: el.offsetLeft, width: el.offsetWidth };
        if (!placed.current || matchMedia("(prefers-reduced-motion: reduce)").matches) { gsap.set(c, { ...at, opacity: 1 }); placed.current = true; return; }
        gsap.to(c, { ...at, opacity: 1, duration: TIME, ease: SPRING, overwrite: "auto" });
    }, [target, signedIn, code]);
    const signOut = async () => { setBusy(true); await admin("logout", {}).catch(() => {}); setBusy(false); onOut(); };
    const here = pathname.replace(/^\/de(?=\/)/, "") + search;
    return (
        <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
            <a href="#main" className="pointer-events-auto absolute left-4 -top-12 z-[2] px-3.5 py-2 rounded-[10px] bg-ink text-on-ink text-[13px] font-semibold transition-[top] duration-300 focus-visible:top-3">{t("Skip to content", "Zum Inhalt springen")}</a>
            <div className="page pt-2.5 max-sm:pt-2">
                <div className={`pointer-events-auto relative grid grid-cols-[1fr_auto_1fr] max-md:grid-cols-[1fr_auto] items-center h-[52px] pl-3 pr-2 rounded-[16px] bg-card transition-shadow duration-300
                    ${raised ? "shadow-[0_10px_30px_rgb(var(--shadow-rgb)/0.12),0_1px_3px_rgb(var(--shadow-rgb)/0.1),0_0_0_0.5px_var(--hairline)]" : "shadow-card"}`}>
                    <span className="justify-self-start flex items-center gap-2.5 min-w-0">
                        {/* back to the site, with the smooth scrolling it has from the start */}
                        <a href={localize("/", code)} title={t("Back to the site", "Zurück zur Website")} className={`flex items-center gap-2.5 rounded-[10px] text-ink font-serif font-semibold text-[19px] tracking-[-0.01em] ${ring}`}>
                            <img src="/img/icon-256.png" alt="" width="28" height="28" className="w-7 h-7 drop-shadow-[0_2px_4px_rgb(var(--shadow-rgb)/0.18)]" />Bezzle
                        </a>
                        <span className="chip !h-[22px] !px-2 !text-[11.5px]">Admin</span>
                    </span>
                    {signedIn ? (
                        <nav ref={well} aria-label="Admin" onPointerLeave={() => setHover(null)} className="relative flex items-center p-[3px] rounded-[12px] bg-well shadow-well max-md:hidden">
                            <i ref={thumb} aria-hidden="true" className="absolute block left-0 top-[3px] bottom-[3px] w-0 rounded-[9px] bg-card opacity-0 shadow-thumb" />
                            {VIEWS.map((v) => (
                                <RouterLink key={v.key} data-item={v.key} to={localize(viewTo(v.key), code)} onPointerEnter={() => setHover(v.key)} aria-current={v.key === view ? "page" : undefined}
                                    className={`relative z-[1] flex items-center h-[34px] px-4 rounded-[9px] text-[14px] font-medium whitespace-nowrap transition-colors duration-200 ${ring} ${target === v.key ? "text-ink" : "text-ink-2"}`}>
                                    {t(...v.tab)}
                                </RouterLink>
                            ))}
                        </nav>
                    ) : <span className="max-md:hidden" />}
                    <div className="justify-self-end flex items-center gap-1.5">
                        <span className="langs">
                            {[["en", "EN"], ["de", "DE"]].map(([c, name]) => <RouterLink key={c} to={localize(here, c)} hrefLang={c} lang={c} aria-current={c === code ? "page" : undefined}>{name}</RouterLink>)}
                        </span>
                        {signedIn && (
                            <button onClick={signOut} disabled={busy} title={t("Sign out", "Abmelden")} className={`${quiet} !h-[34px] !px-3 max-lg:!px-2.5`}>
                                <Icon d={I.signOut} size={15} /><span className="max-lg:sr-only">{t("Sign out", "Abmelden")}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

/** The views on a phone, where the bar has no room for them: a well of its own under it. */
function Tabs({ view }) {
    const t = useT(), code = useCode();
    return (
        <nav aria-label="Admin" className="md:hidden grid grid-cols-3 p-[3px] rounded-[12px] bg-well shadow-well">
            {VIEWS.map((v) => (
                <RouterLink key={v.key} to={localize(viewTo(v.key), code)} aria-current={v.key === view ? "page" : undefined}
                    className={`h-9 rounded-[9px] inline-flex items-center justify-center text-[13px] font-medium transition-[background-color,color,box-shadow] duration-200 ${ring} ${v.key === view ? "bg-card text-ink shadow-thumb" : "text-ink-2"}`}>
                    {t(...v.tab)}
                </RouterLink>
            ))}
        </nav>
    );
}

/** One headline, its last words under the blue pencil, as the site's own headlines. */
function Headline({ lines, as: Tag = "h1", className = "" }) {
    const [a, b] = lines;
    return (
        <Tag className={`font-serif font-semibold tracking-[-0.03em] leading-[1.04] text-balance text-[clamp(32px,4.2vw,56px)] ${className}`}>
            {a} <span className="marked">{b}{MARK}</span>
        </Tag>
    );
}

/* ── Signing in ──────────────────────────────────────────────────────────── */

function SignIn({ configured, offline, onIn }) {
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const t = useT();
    const go = async (e) => {
        e.preventDefault();
        setBusy(true); setError("");
        try { await admin("login", { password }); onIn(); } catch (err) { setError(err.message); setBusy(false); }
    };
    return (
        <section className="page min-h-[100svh] pt-[150px] pb-[120px] max-sm:pt-[116px] flex flex-col items-center text-center">
            <img src="/img/icon-512.webp" alt="" width="112" height="112" className="w-[112px] h-[112px] max-sm:w-24 max-sm:h-24 drop-shadow-[0_18px_26px_rgb(var(--shadow-rgb)/0.26)] animate-pop" />
            <Headline lines={t(["The site's own", "numbers."], ["Die eigenen Zahlen der", "Website."])} className="mt-9 max-w-[760px]" />
            <p className="lede mt-[22px] max-w-[540px]">
                {offline ? t("The admin area's server does not answer. It runs on bezzle.ch, or with npm run dev on made-up numbers.", "Der Server des Admin-Bereichs antwortet nicht. Er läuft auf bezzle.ch, oder mit npm run dev auf erfundenen Zahlen.")
                    : configured ? t("Who comes, from where, what they read, and every visit played again. For you alone: sign in with the admin password.", "Wer kommt, woher, was gelesen wird, und jeder Besuch noch einmal gespielt. Nur für dich: melde dich mit dem Admin-Passwort an.")
                    : t("Set the repository's ADMIN_PASSWORD secret (12 characters or more) and deploy, and this area opens.", "Setz das Secret ADMIN_PASSWORD im Repository (12 Zeichen oder mehr) und deploye, dann öffnet sich dieser Bereich.")}
            </p>
            {configured && !offline && (
                <form onSubmit={go} className={`${card} mt-10 w-full max-w-[460px] flex items-center gap-2 p-2 pl-4 focus-within:shadow-[var(--shadow-lifted)] transition-shadow`}>
                    <label htmlFor="password" className="sr-only">{t("Password", "Passwort")}</label>
                    <input id="password" type="password" autoComplete="current-password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder={t("Password", "Passwort")} className="flex-1 min-w-0 h-11 bg-transparent text-[16px] text-ink placeholder:text-ink-4 outline-none" />
                    <button className="btn btn-ink btn-small !h-11 !px-5" disabled={busy}>{busy ? t("Signing in…", "Anmelden…") : <>{t("Sign in", "Anmelden")} <span aria-hidden="true">→</span></>}</button>
                </form>
            )}
            <p role="alert" className="mt-4 min-h-5 text-[14px] text-warning">{error}</p>
        </section>
    );
}

/* ── Signed in ───────────────────────────────────────────────────────────── */

function Console({ onOut }) {
    const [params] = useParams();
    const t = useT();
    const view = viewOf(params);
    // A session that ran out sends you back to sign in; any other failure says what it was. (Through a ref: the
    // views keep the same function however often this renders.)
    const out = useRef(onOut);
    out.current = onOut;
    const [error, setError] = useState(null);
    const signedOut = useCallback((e) => { if (/sign in/i.test(e.message)) out.current(); else setError(e.message); }, []);
    useEffect(() => { if (!error) return; const id = setTimeout(() => setError(null), 4000); return () => clearTimeout(id); }, [error]);
    const v = VIEWS.find((x) => x.key === view);
    return (
        <section className="page pt-[108px] max-sm:pt-[84px] pb-28 min-h-[100svh]">
            <Tabs view={view} />
            <header key={view} className="mt-6 max-md:mt-9 animate-pop motion-reduce:animate-none">
                <Headline lines={t(...v.head)} className="max-w-[920px]" />
            </header>
            <Suspense fallback={<Waiting className="mt-10 h-[420px]" />}>
                {view === "visitors" ? <Visitors signedOut={signedOut} /> : view === "sessions" ? <Sessions signedOut={signedOut} /> : <Heatmaps signedOut={signedOut} />}
            </Suspense>
            {error && (
                <div role="status" className="fixed z-50 left-1/2 -translate-x-1/2 bottom-6 animate-pop">
                    <p className="flex items-center gap-2.5 h-10 pl-3.5 pr-4 rounded-full bg-card shadow-sheet text-[13.5px] font-medium text-warning">{error}</p>
                </div>
            )}
        </section>
    );
}
