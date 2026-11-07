/*
 * The Mac that Bezzle is installed on, for the download page's story (src/site/Install.jsx): a
 * screen 1280 × 800 in its own points, as the home page's story draws Bezzle's window. On it, macOS
 * 26 as you meet it: the menu bar standing straight on the wallpaper, a browser with this very page
 * in it, the Finder at your Downloads, Spotlight, the Dock, and then Bezzle's own window, its menu
 * and the alert Sparkle shows when there is nothing newer.
 *
 * The apps beside Bezzle are drawn plainly (a folder, a globe, an envelope), never as Apple draws
 * its own. The Finder's and the system's words are macOS's in each language; Bezzle's menu is the
 * app's (BezzleApp.swift, Updates.swift, MCPCommands.swift, Localizable.xcstrings), and the alert's
 * words are Sparkle's own (Sparkle.strings). Every colour is a page variable, so the Mac is dark
 * when the page is.
 */
import { MARK } from "@/site/Marked";
import { TrafficLights, HomeControls } from "@/app/Kit";
import { HomeState } from "@/story/scenes/home";
import { ui } from "@/app/words";

/* ------------------------------------------------------------------ where everything stands */
export const BROWSER = { x: 318, y: 60, w: 840, h: 520 };
export const FINDER = { x: 112, y: 134, w: 724, h: 436 };
/** The Finder's icons: the first one's cell, and how far apart they are. */
export const SLOT = { x: 204, y: 92, w: 102 };
/** The sidebar's rows: Recents, Applications, Desktop, Documents, Downloads. */
const SIDE = ["recents", "applications", "desktop", "documents", "downloads"];
const sideY = (i) => 72 + i * 28;
/** Bezzle's window, at 0.7 of its points. */
export const WIN = { x: 192, y: 64, k: 0.7 };
export const SPOT = { x: 330, y: 158, w: 620 };
export const MENU = { x: 8, y: 31, w: 290 };
export const ALERT = { x: 640 - 138, y: 206, w: 276 };
/** The Dock: tiles 50 apart by 6, inside 8; a separator 13 wide. Bezzle comes in after the calendar. */
const DOCK = ["files", "web", "mail", "photos", "notes", "calendar", "|", "downloads", "trash"];
const TILE = 50, GAP = 6, PADX = 8, SEP = 13, DOCK_H = 66, DOCK_Y = 800 - 10 - DOCK_H;
export function dockLayout(withBezzle) {
    const items = withBezzle ? [...DOCK.slice(0, 6), "bezzle", ...DOCK.slice(6)] : DOCK;
    let x = PADX;
    const at = {};
    for (const k of items) {
        if (k === "|") { at[k] = x + (SEP - GAP) / 2 - 0.5; x += SEP; continue; }
        at[k] = x; x += TILE + GAP;
    }
    const width = x - GAP + PADX;
    return { at, width, left: 640 - width / 2 };
}
const DOCK_A = dockLayout(false), DOCK_B = dockLayout(true);
/** Where each Dock tile moves to (in x) as Bezzle comes in, and the Dock's own new left and width. */
export const DOCK_SHIFT = { left: DOCK_B.left - DOCK_A.left, width: DOCK_B.width, items: Object.fromEntries(DOCK.map((k) => [k, DOCK_B.left + DOCK_B.at[k] - (DOCK_A.left + DOCK_A.at[k])])) };


/* ------------------------------------------------------------------ the words of the Mac */
export const MAC = {
    en: {
        finder: ["File", "Edit", "View", "Go", "Window", "Help"], bezzle: ["File", "Edit", "Object", "View", "Window", "Help"],
        favorites: "Favorites", recents: "Recents", applications: "Applications", desktop: "Desktop", documents: "Documents", downloads: "Downloads",
        spotlight: "Spotlight Search", application: "Application", apps: { calendar: "Calendar", mail: "Mail", notes: "Notes", photos: "Photos" },
        menu: [["About Bezzle"], ["Check for Updates…"], null, ["Designs Folder…"], null, ["Allow AI Control"], ["Connect an AI Assistant", "›"], null, ["Services", "›"], null, ["Hide Bezzle", "⌘H"], ["Hide Others", "⌥⌘H"], ["Show All"], null, ["Quit Bezzle", "⌘Q"]],
        upToDate: "You’re up to date!", newest: "Bezzle {v} is currently the newest version available.", ok: "OK",
    },
    de: {
        finder: ["Ablage", "Bearbeiten", "Darstellung", "Gehe zu", "Fenster", "Hilfe"], bezzle: ["Ablage", "Bearbeiten", "Objekt", "Darstellung", "Fenster", "Hilfe"],
        favorites: "Favoriten", recents: "Zuletzt benutzt", applications: "Programme", desktop: "Schreibtisch", documents: "Dokumente", downloads: "Downloads",
        spotlight: "Spotlight-Suche", application: "Programm", apps: { calendar: "Kalender", mail: "Mail", notes: "Notizen", photos: "Fotos" },
        menu: [["Über Bezzle"], ["Nach Updates suchen …"], null, ["Designordner …"], null, ["KI-Steuerung erlauben"], ["KI-Assistenten verbinden", "›"], null, ["Dienste", "›"], null, ["Bezzle ausblenden", "⌘H"], ["Andere ausblenden", "⌥⌘H"], ["Alle einblenden"], null, ["Bezzle beenden", "⌘Q"]],
        upToDate: "Du bist auf dem neuesten Stand!", newest: "Bezzle {v} ist zurzeit die neueste verfügbare Version.", ok: "OK",
    },
    fr: {
        finder: ["Fichier", "Édition", "Présentation", "Aller", "Fenêtre", "Aide"], bezzle: ["Fichier", "Édition", "Objet", "Présentation", "Fenêtre", "Aide"],
        favorites: "Favoris", recents: "Récents", applications: "Applications", desktop: "Bureau", documents: "Documents", downloads: "Téléchargements",
        spotlight: "Recherche Spotlight", application: "Application", apps: { calendar: "Calendrier", mail: "Mail", notes: "Notes", photos: "Photos" },
        menu: [["À propos de Bezzle"], ["Rechercher des mises à jour…"], null, ["Dossier des designs…"], null, ["Autoriser le contrôle par IA"], ["Connecter un assistant IA", "›"], null, ["Services", "›"], null, ["Masquer Bezzle", "⌘H"], ["Masquer les autres", "⌥⌘H"], ["Tout afficher"], null, ["Quitter Bezzle", "⌘Q"]],
        upToDate: "Votre logiciel est à jour !", newest: "Bezzle {v} est la version la plus récente disponible.", ok: "OK",
    },
    it: {
        finder: ["File", "Modifica", "Vista", "Vai", "Finestra", "Aiuto"], bezzle: ["File", "Modifica", "Oggetto", "Vista", "Finestra", "Aiuto"],
        favorites: "Preferiti", recents: "Recenti", applications: "Applicazioni", desktop: "Scrivania", documents: "Documenti", downloads: "Download",
        spotlight: "Ricerca Spotlight", application: "Applicazione", apps: { calendar: "Calendario", mail: "Mail", notes: "Note", photos: "Foto" },
        menu: [["Informazioni su Bezzle"], ["Verifica aggiornamenti…"], null, ["Cartella dei design…"], null, ["Consenti controllo IA"], ["Collega un assistente IA", "›"], null, ["Servizi", "›"], null, ["Nascondi Bezzle", "⌘H"], ["Nascondi altre", "⌥⌘H"], ["Mostra tutte"], null, ["Esci da Bezzle", "⌘Q"]],
        upToDate: "La tua applicazione è aggiornata!", newest: "Bezzle {v} è la versione più recente attualmente disponibile.", ok: "OK",
    },
};

/** The menu bar's clock: the day as macOS writes it in the language, then the time. */
export function clockText(date, locale) {
    const d = new Intl.DateTimeFormat(locale, { weekday: "short", day: "numeric", month: "short" }).format(date).replace(/,/g, "");
    const t = new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit" }).format(date);
    return `${d} ${t}`;
}

/* ------------------------------------------------------------------ glyphs and icons */
const S = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
const G = {
    recents: <><circle cx="9" cy="9" r="6" {...S} /><path d="M9 5.6V9l2.3 1.5" {...S} /></>,
    applications: <><rect x="3" y="3" width="5" height="5" rx="1.4" {...S} /><rect x="10" y="3" width="5" height="5" rx="1.4" {...S} /><rect x="3" y="10" width="5" height="5" rx="1.4" {...S} /><rect x="10" y="10" width="5" height="5" rx="1.4" {...S} /></>,
    desktop: <><rect x="2.5" y="3.5" width="13" height="9" rx="1.6" {...S} /><path d="M7 15.2h4M9 12.5v2.7" {...S} /></>,
    documents: <><path d="M5 2.8h5.2L13.5 6v9.2H5z" {...S} /><path d="M10 2.8V6h3.4" {...S} /></>,
    downloads: <><circle cx="9" cy="9" r="6.2" {...S} /><path d="M9 5.4v6.4m0 0-2.6-2.6M9 11.8l2.6-2.6" {...S} /></>,
    back: <path d="M11 4.5 6.5 9l4.5 4.5" {...S} />,
    fwd: <path d="M7 4.5 11.5 9 7 13.5" {...S} />,
    grid: <><rect x="3.5" y="3.5" width="4.5" height="4.5" rx="1" {...S} /><rect x="10" y="3.5" width="4.5" height="4.5" rx="1" {...S} /><rect x="3.5" y="10" width="4.5" height="4.5" rx="1" {...S} /><rect x="10" y="10" width="4.5" height="4.5" rx="1" {...S} /></>,
    search: <><circle cx="8" cy="8" r="4.6" {...S} /><path d="m11.4 11.4 3.4 3.4" {...S} /></>,
    lock: <><rect x="5" y="8" width="8" height="6.4" rx="1.4" fill="currentColor" /><path d="M6.6 8V6.4a2.4 2.4 0 0 1 4.8 0V8" {...S} /></>,
    sidebar: <><rect x="2.8" y="3.8" width="12.4" height="10.4" rx="2.2" {...S} /><path d="M7 3.8v10.4" {...S} /></>,
    share: <><path d="M9 2.8v8.4M6 5.6 9 2.6l3 3" {...S} /><path d="M6.2 8H5v6.8h8V8h-1.2" {...S} /></>,
    plus: <path d="M9 4v10M4 9h10" {...S} />,
    control: <><rect x="2.5" y="4" width="13" height="4" rx="2" {...S} /><circle cx="13.5" cy="6" r="1.2" fill="currentColor" /><rect x="2.5" y="10" width="13" height="4" rx="2" {...S} /><circle cx="4.5" cy="12" r="1.2" fill="currentColor" /></>,
};
const Glyph = ({ name, size = 16, style }) => <svg viewBox="0 0 18 18" width={size} height={size} style={{ flex: "none", ...style }} aria-hidden="true">{G[name]}</svg>;

/** A document as the Finder draws one: a sheet with its corner folded, and its kind on it. */
function Doc({ kind, color = "#5B6170", zip }) {
    return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
            <path d="M14 3.5h25L52 16.5V58a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3z" fill="#FDFDFB" stroke="rgb(0 0 0 / 0.16)" strokeWidth="0.8" />
            <path d="M39 3.5V14a2.5 2.5 0 0 0 2.5 2.5H52" fill="#ECEBE6" stroke="rgb(0 0 0 / 0.16)" strokeWidth="0.8" strokeLinejoin="round" />
            {zip && <g>{[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} x={i % 2 ? 31 : 28} y={5 + i * 4} width="5" height="2.6" rx="0.6" fill="#8D919B" />)}<rect x="27.5" y="33" width="9" height="9" rx="2" fill="none" stroke="#8D919B" strokeWidth="1.6" /></g>}
            <rect x="17" y="47" width={kind.length * 7 + 6} height="10" rx="2.5" fill={color} />
            <text x={20} y="54.6" fontSize="8" fontWeight="700" fill="#fff" fontFamily="-apple-system, system-ui, sans-serif" letterSpacing="0.3">{kind}</text>
        </svg>
    );
}
/** A picture's file: the picture itself, framed in white. */
function Photo() {
    return (
        <div className="bz-abs overflow-hidden" style={{ left: 2, top: 12, width: 60, height: 42, background: "#fff", padding: 2.5, borderRadius: 3, boxShadow: "0 1px 3px rgb(0 0 0 / 0.25)" }}>
            <img data-mac-src="/img/parts/lysefjord.webp" alt="" className="w-full h-full object-cover" style={{ borderRadius: 1 }} />
        </div>
    );
}
/** The other apps, drawn plainly on the icon grid: 80 % of their box, corners at 22.5 %. */
function Tile({ kind, day, size = 64 }) {
    const id = `t-${kind}`;
    const g = {
        files: ["#74BDFF", "#2370E8"], web: ["#86D6FF", "#2C82EE"], mail: ["#6AB8FF", "#2F66F0"], photos: ["#FFC771", "#EF6A3A"],
        downloads: ["#8CC8FF", "#3D86F2"],
    }[kind];
    return (
        <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" style={{ overflow: "visible" }}>
            {g && <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={g[0]} /><stop offset="1" stopColor={g[1]} /></linearGradient></defs>}
            {kind === "trash"
                ? <g><path d="M17 17h30l-3 38a4 4 0 0 1-4 3.6H24a4 4 0 0 1-4-3.6z" fill="rgb(255 255 255 / 0.42)" stroke="rgb(0 0 0 / 0.22)" strokeWidth="0.8" /><path d="M14 15.5h36" stroke="rgb(0 0 0 / 0.28)" strokeWidth="2.4" strokeLinecap="round" />{[25, 32, 39].map((x) => <path key={x} d={`M${x} 23v28`} stroke="rgb(0 0 0 / 0.16)" strokeWidth="1.4" strokeLinecap="round" />)}</g>
                : <rect x="6.4" y="6.4" width="51.2" height="51.2" rx="11.6" fill={g ? `url(#${id})` : "#FDFDFB"} stroke="rgb(0 0 0 / 0.1)" strokeWidth="0.6" />}
            {kind === "files" && <path d="M18 24a3 3 0 0 1 3-3h7.4l3 3H43a3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3z" fill="#fff" />}
            {kind === "web" && <g fill="none" stroke="#fff" strokeWidth="2.2"><circle cx="32" cy="32" r="14" /><path d="M18 32h28M32 18c-5.5 5-5.5 23 0 28M32 18c5.5 5 5.5 23 0 28" /></g>}
            {kind === "mail" && <g><rect x="17" y="22" width="30" height="21" rx="3" fill="#fff" /><path d="m18.5 23.5 13.5 10 13.5-10" fill="none" stroke={g?.[1]} strokeWidth="2" strokeLinejoin="round" /></g>}
            {kind === "photos" && <g fill="#fff"><circle cx="40" cy="24" r="4.2" /><path d="M16 45l10-13 7 8.5 5-5.5 10 10z" /></g>}
            {kind === "notes" && <g><path d="M6.4 18V18a11.6 11.6 0 0 1 11.6-11.6h28A11.6 11.6 0 0 1 57.6 18v2H6.4z" fill="#F6C944" />{[30, 37, 44].map((y) => <path key={y} d={`M15 ${y}h${y === 44 ? 22 : 34}`} stroke="#C9C6BE" strokeWidth="2" strokeLinecap="round" />)}</g>}
            {kind === "calendar" && <g><path d="M6.4 22V18A11.6 11.6 0 0 1 18 6.4h28A11.6 11.6 0 0 1 57.6 18v4z" fill="#EE5247" /><text x="32" y="48" textAnchor="middle" fontSize="23" fontWeight="500" fill="#1C1B19" fontFamily="-apple-system, system-ui, sans-serif">{day}</text></g>}
            {kind === "downloads" && <g><path d="M16 26a3 3 0 0 1 3-3h7l3 3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3z" fill="rgb(255 255 255 / 0.95)" /><path d="M32 28.5v10m0 0-4-4m4 4 4-4" fill="none" stroke={g?.[1]} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></g>}
        </svg>
    );
}
const BezzleIcon = ({ size = 64 }) => <img src="/img/icon-512.webp" alt="" width={size} height={size} style={{ width: size, height: size }} draggable="false" />;

/** A window's three lights, with grey ones over them for when another window is in front. */
function Lights({ x = 20, y = 20, data }) {
    return (
        <div className="bz-abs" style={{ left: x, top: y }}>
            <div className="flex gap-2">{["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <i key={c} className="block w-3 h-3 rounded-full" style={{ background: c, boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.12)" }} />)}</div>
            <div data-lights-off={data} className="bz-abs left-0 top-0 flex gap-2" style={{ opacity: 0 }}>{[0, 1, 2].map((i) => <i key={i} className="block w-3 h-3 rounded-full" style={{ background: "var(--mac-off)", boxShadow: "inset 0 0 0 0.5px rgb(0 0 0 / 0.1)" }} />)}</div>
        </div>
    );
}

/** One of the Finder's icons: its picture, its name under it, and how the Finder shows it selected. */
function Item({ data, slot, name, children, hidden }) {
    return (
        <div data-item={data} className="bz-abs" style={{ left: SLOT.x + slot * SLOT.w, top: SLOT.y, width: SLOT.w, height: 116, ...(hidden ? { opacity: 0, visibility: "hidden" } : {}) }}>
            <div data-on-bg className="bz-abs rounded-[10px]" style={{ left: SLOT.w / 2 - 39, top: -1, width: 78, height: 78, background: "rgb(var(--ink-rgb) / 0.08)", opacity: 0 }} />
            <div className="bz-abs" style={{ left: SLOT.w / 2 - 32, top: 6, width: 64, height: 64 }}>{children}</div>
            <div className="bz-abs inset-x-0 flex justify-center" style={{ top: 82 }}>
                <span data-label className="relative px-[5px] rounded-[5px] text-[12px] leading-[17px] text-center" style={{ maxWidth: SLOT.w - 6, overflowWrap: "anywhere" }}>
                    <i data-on-pill className="bz-abs inset-0 rounded-[5px]" style={{ background: "rgb(var(--cpencil-rgb))", opacity: 0 }} />
                    <span data-label-text className="relative">{name}</span>
                </span>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the page in the browser */
function MiniPage({ t, v }) {
    const [l1, l2] = t.dl_h;
    return (
        <div className="bz-abs inset-x-0 bottom-0 overflow-hidden" style={{ top: 52, background: "var(--paper)" }}>
            <div className="bz-abs flex items-center gap-1.5" style={{ left: 22, top: 14 }}>
                <BezzleIcon size={16} /><span className="font-serif font-semibold text-[13px]">Bezzle</span>
            </div>
            <div className="bz-abs flex gap-0.5 p-[2px] rounded-[7px] text-[9px] font-medium" style={{ left: "50%", top: 11, transform: "translateX(-50%)", background: "var(--well)", color: "var(--ink-2)" }}>
                {[t.nav_features, t.nav_free, t.nav_news, t.nav_support].map((x) => <span key={x} className="px-2 py-[3px] whitespace-nowrap">{x}</span>)}
            </div>
            <div className="bz-abs flex items-center gap-1 h-[20px] px-2 rounded-[6px] text-[9px] font-semibold" style={{ right: 22, top: 11, background: "var(--ink)", color: "var(--on-ink)" }}>↓ {t.nav_download}</div>
            <div className="bz-abs inset-x-0 flex flex-col items-center text-center" style={{ top: 70 }}>
                <span className="flex items-center gap-1.5 h-[20px] pl-1 pr-2.5 rounded-full text-[9px] font-semibold bz-card"><BezzleIcon size={14} />{t.updates_link.replace("{v}", v)} <b style={{ color: "var(--pencil)" }}>→</b></span>
                <div className="mt-3 font-serif font-semibold text-[50px] leading-[0.94] tracking-[-0.04em]">{l1}<br /><span className="marked">{l2}{MARK}</span></div>
                <p className="mt-4 text-[12px]" style={{ color: "var(--ink-2)" }}>{t.dl_sub}</p>
                <div data-mini-btn className="mt-4 flex items-center gap-2 h-[34px] px-4 rounded-[10px] text-[12px] font-semibold" style={{ background: "var(--ink)", color: "var(--on-ink)", boxShadow: "0 6px 14px rgb(var(--shadow-rgb) / 0.22)" }}>↓ {t.dl_button.replace("{v}", v)}</div>
                <p className="mt-2.5 text-[9px]" style={{ color: "var(--ink-3)" }}>{t.dl_facts.split(" · ").join("   ·   ")}</p>
            </div>
            {/* and under it, this Mac again, peeking up */}
            <div className="bz-abs mac-wall rounded-t-[10px]" style={{ left: 150, right: 150, top: 392, height: 120, boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.12)" }}>
                <div className="bz-abs inset-x-0 top-0 h-[10px] flex items-center gap-2.5 px-2 text-[6px] font-semibold" style={{ color: "var(--ink-2)" }}><span>Finder</span></div>
                <div className="bz-abs rounded-[6px]" style={{ left: 118, top: 18, width: 300, height: 140, background: "var(--card)", boxShadow: "0 4px 12px rgb(var(--shadow-rgb) / 0.22), 0 0 0 0.5px rgb(0 0 0 / 0.1)" }} />
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the screen */
export default function Mac({ t, code, v, day }) {
    const L = MAC[code], u = ui(code);
    const apps = Object.entries(L.apps).sort((a, b) => a[1].localeCompare(b[1], code)).map(([k]) => k);
    return (
        <div className="mac bz" data-win="">
            <div className="bz-abs inset-0 mac-wall" />

            {/* the menu bar: the app in front, its menus, and on the right the clock */}
            <div className="bz-abs inset-x-0 top-0 text-[13px]" style={{ height: 28 }}>
                <div data-title-hl className="bz-abs rounded-[7px]" style={{ left: 8, top: 3, height: 22, width: 64, background: "rgb(var(--ink-rgb) / 0.12)", opacity: 0 }} />
                <div data-bar="finder" className="bz-abs flex items-center gap-[18px] h-7" style={{ left: 18 }}>
                    <b className="font-bold">Finder</b>{L.finder.map((m) => <span key={m}>{m}</span>)}
                </div>
                <div data-bar="bezzle" className="bz-abs flex items-center gap-[18px] h-7" style={{ left: 18, opacity: 0, visibility: "hidden" }}>
                    <b data-bar-title className="font-bold">Bezzle</b>{L.bezzle.map((m) => <span key={m}>{m}</span>)}
                </div>
                <div className="bz-abs flex items-center gap-4 h-7" style={{ right: 16 }}>
                    <Glyph name="control" size={15} /><Glyph name="search" size={14} />
                    <span className="relative block overflow-hidden h-7 bz-num">
                        <span data-clock="size" className="block leading-7 whitespace-nowrap invisible" />
                        <span data-clock="a" className="bz-abs right-0 top-0 leading-7 whitespace-nowrap" />
                        <span data-clock="b" className="bz-abs right-0 top-0 leading-7 whitespace-nowrap" />
                    </span>
                </div>
            </div>

            {/* the browser, with this page in it */}
            <div data-browser className="bz-abs mac-win" style={{ left: BROWSER.x, top: BROWSER.y, width: BROWSER.w, height: BROWSER.h }}>
                <div className="bz-abs inset-x-0 top-0" style={{ height: 52, background: "var(--panel)", boxShadow: "inset 0 -0.5px 0 var(--hairline)" }} />
                <Lights data="browser" />
                <div className="bz-abs flex items-center gap-3.5" style={{ left: 88, top: 17, color: "var(--ink-2)" }}><Glyph name="sidebar" /><Glyph name="back" /><Glyph name="fwd" style={{ opacity: 0.4 }} /></div>
                <div className="bz-abs flex items-center justify-center gap-1.5 rounded-full text-[12.5px]" style={{ left: 250, top: 12, width: 340, height: 28, background: "rgb(var(--ink-rgb) / 0.055)", color: "var(--ink)" }}>
                    <Glyph name="lock" size={12} style={{ color: "var(--ink-3)" }} />bezzle.ch
                </div>
                <div data-dl className="bz-abs grid place-items-center" style={{ left: BROWSER.w - 116, top: 12, width: 28, height: 28 }}>
                    <div data-dl-pop className="relative w-7 h-7 grid place-items-center" style={{ color: "var(--ink-2)" }}>
                        <svg viewBox="0 0 28 28" width="28" height="28" className="bz-abs inset-0" aria-hidden="true">
                            <g data-dl-ring style={{ opacity: 0 }}>
                                <circle cx="14" cy="14" r="10.5" fill="none" stroke="rgb(var(--ink-rgb) / 0.14)" strokeWidth="2.2" />
                                <circle data-dl-fill cx="14" cy="14" r="10.5" fill="none" stroke="rgb(var(--cpencil-rgb))" strokeWidth="2.2" strokeLinecap="round" pathLength="1" strokeDasharray="1 1" strokeDashoffset="1" transform="rotate(-90 14 14)" />
                            </g>
                        </svg>
                        <svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><path d="M9 3.5v8m0 0-3.2-3.2M9 11.5l3.2-3.2M4 14.5h10" {...S} /></svg>
                    </div>
                </div>
                <div className="bz-abs flex items-center gap-4" style={{ left: BROWSER.w - 76, top: 17, color: "var(--ink-2)" }}><Glyph name="share" /><Glyph name="plus" /></div>
                <MiniPage t={t} v={v} />
            </div>

            {/* the Finder, at Downloads */}
            <div data-finder className="bz-abs mac-win" style={{ left: FINDER.x, top: FINDER.y, width: FINDER.w, height: FINDER.h, opacity: 0, visibility: "hidden" }}>
                <div className="bz-abs rounded-[12px]" style={{ left: 8, top: 8, bottom: 8, width: 180, background: "var(--panel)", boxShadow: "inset 0 0 0 0.5px var(--hairline)" }} />
                <Lights x={22} y={22} data="finder" />
                <div className="bz-abs text-[11px] font-semibold" style={{ left: 22, top: 50, color: "var(--ink-3)" }}>{L.favorites}</div>
                <div data-side-sel className="bz-abs rounded-[8px]" style={{ left: 14, top: sideY(4), width: 168, height: 28, background: "rgb(var(--ink-rgb) / 0.08)" }} />
                <div data-side-drop className="bz-abs rounded-[8px]" style={{ left: 14, top: sideY(1), width: 168, height: 28, background: "rgb(var(--cpencil-rgb) / 0.16)", boxShadow: "inset 0 0 0 1.5px rgb(var(--cpencil-rgb))", opacity: 0 }} />
                {SIDE.map((k, i) => (
                    <div key={k} data-side={k} className="bz-abs flex items-center gap-2 text-[13px] whitespace-nowrap" style={{ left: 22, top: sideY(i), height: 28 }}>
                        <Glyph name={k} style={{ color: "var(--cpencil)" }} /><span>{L[k]}</span>
                    </div>
                ))}
                <div className="bz-abs flex items-center gap-2.5" style={{ left: 204, top: 17, color: "var(--ink-2)" }}><Glyph name="back" /><Glyph name="fwd" style={{ opacity: 0.4 }} /></div>
                <div className="bz-abs font-bold text-[15px]" style={{ left: 262, top: 15 }}>
                    <span data-f-title="downloads" className="bz-abs left-0 top-0 whitespace-nowrap">{L.downloads}</span>
                    <span data-f-title="apps" className="bz-abs left-0 top-0 whitespace-nowrap" style={{ opacity: 0 }}>{L.applications}</span>
                </div>
                <div className="bz-abs flex items-center gap-1 h-7 px-2 rounded-full" style={{ right: 54, top: 12, background: "rgb(var(--ink-rgb) / 0.055)", color: "var(--ink-2)" }}><Glyph name="grid" size={15} /></div>
                <div className="bz-abs" style={{ right: 20, top: 17, color: "var(--ink-2)" }}><Glyph name="search" /></div>
                <div data-view="downloads" className="bz-abs inset-0">
                    <Item data="app" slot={0} name="Bezzle" hidden><BezzleIcon /></Item>
                    <Item data="zip" slot={0} name={`Bezzle-${v}.zip`}><Doc kind="ZIP" zip /></Item>
                    <Item data="pdf" slot={1} name="Briefing.pdf"><Doc kind="PDF" color="#E0483D" /></Item>
                    <Item data="jpg" slot={2} name="Fjord.jpg"><Photo /></Item>
                </div>
                <div data-view="apps" className="bz-abs inset-0" style={{ opacity: 0, visibility: "hidden" }}>
                    <Item data="app-new" slot={0} name="Bezzle"><BezzleIcon /></Item>
                    {apps.map((k, i) => <Item key={k} data={`app-${k}`} slot={i + 1} name={L.apps[k]}><Tile kind={k} day={day} /></Item>)}
                </div>
            </div>
            {/* Bezzle, held by the pointer on its way to Applications */}
            <div data-ghost className="bz-abs left-0 top-0" style={{ width: SLOT.w, opacity: 0, visibility: "hidden" }}>
                <div className="mx-auto" style={{ width: 64, marginTop: 6 }}><BezzleIcon /></div>
            </div>

            {/* Bezzle's own window, as it opens: its home */}
            <div data-bezzle className="bz-abs" style={{ left: WIN.x, top: WIN.y, width: 1280 * WIN.k, height: 800 * WIN.k, opacity: 0, visibility: "hidden", transformOrigin: "50% 70%" }}>
                <div className="bz-abs left-0 top-0" style={{ width: 1280, height: 800, transform: `scale(${WIN.k})`, transformOrigin: "0 0" }}>
                    <div className="bz-win">
                        <div className="bz-abs inset-0"><HomeState u={u} /></div>
                        <TrafficLights />
                        <div className="bz-abs bz-card rounded-[8px]" style={{ left: 88, top: 11, width: 64, height: 30 }} />
                        <div className="bz-abs font-serif font-semibold text-[16.5px] leading-[30px] text-center tracking-[-0.01em]" style={{ left: 88, top: 11, width: 64 }}>Bezzle</div>
                        <div className="bz-abs inset-0" style={{ bottom: "auto", height: 52 }}><HomeControls u={u} /></div>
                    </div>
                </div>
            </div>

            {/* the Dock */}
            <div data-dock className="bz-abs" style={{ left: DOCK_A.left, top: DOCK_Y, width: DOCK_A.width, height: DOCK_H }}>
                <div data-dock-bg className="bz-abs left-0 top-0 rounded-[22px] mac-dock" style={{ width: DOCK_A.width, height: DOCK_H }} />
                {DOCK.map((k) => k === "|"
                    ? <i key={k} data-dock-item={k} className="bz-abs block" style={{ left: DOCK_A.at[k], top: 12, width: 1, height: DOCK_H - 24, background: "rgb(var(--ink-rgb) / 0.16)" }} />
                    : <div key={k} data-dock-item={k} className="bz-abs" style={{ left: DOCK_A.at[k], top: 6, width: TILE, height: TILE }}>
                        <Tile kind={k} day={day} size={TILE} />
                        {(k === "files" || k === "web") && <i className="bz-abs block rounded-full" style={{ left: TILE / 2 - 2, top: TILE + 4, width: 4, height: 4, background: "rgb(var(--ink-rgb) / 0.55)" }} />}
                    </div>)}
                <div data-dock-bezzle className="bz-abs" style={{ left: DOCK_B.at.bezzle + DOCK_SHIFT.left, top: 6, width: TILE, height: TILE, opacity: 0, visibility: "hidden", transformOrigin: "50% 100%" }}>
                    <div data-bounce><BezzleIcon size={TILE} /></div>
                    <i data-dock-dot className="bz-abs block rounded-full" style={{ left: TILE / 2 - 2, top: TILE + 4, width: 4, height: 4, background: "rgb(var(--ink-rgb) / 0.55)", opacity: 0 }} />
                </div>
            </div>

            {/* Spotlight: what is typed, and Bezzle the top hit */}
            <div data-spot className="bz-abs" style={{ left: SPOT.x, top: SPOT.y, width: SPOT.w, opacity: 0, visibility: "hidden" }}>
                <div className="mac-glass flex items-center gap-3 px-5" style={{ height: 56, borderRadius: 28 }}>
                    <Glyph name="search" size={21} style={{ color: "var(--ink-2)" }} />
                    <div className="relative flex-1 h-7 text-[21px] leading-7 whitespace-nowrap">
                        <span data-spot-ph className="bz-abs left-0 top-0" style={{ color: "var(--ink-3)" }}>{L.spotlight}</span>
                        <span className="bz-abs left-0 top-0"><span data-spot-text /><span data-spot-comp style={{ color: "var(--ink-3)", opacity: 0 }}>zle<span className="text-[15px]">{" "}{L.application}</span></span></span>
                    </div>
                </div>
                <div data-spot-results className="mac-glass mt-2 p-1.5" style={{ borderRadius: 22, opacity: 0, visibility: "hidden" }}>
                    <div className="flex items-center gap-3 h-[52px] px-3 rounded-[16px] text-white" style={{ background: "rgb(var(--cpencil-rgb))" }}>
                        <BezzleIcon size={38} /><span className="text-[15px] font-semibold">Bezzle</span><span className="ml-auto text-[12.5px] opacity-75">{L.application}</span>
                    </div>
                    <div className="flex items-center gap-3 h-[48px] px-3.5">
                        <span style={{ width: 32, height: 32 }}><svg viewBox="0 0 64 64" width="32" height="32" aria-hidden="true"><path d="M14 3.5h25L52 16.5V58a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3z" fill="#FDFDFB" stroke="rgb(0 0 0 / 0.2)" strokeWidth="1.2" /><rect x="17" y="47" width="27" height="10" rx="2.5" fill="#5B6170" /></svg></span>
                        <span className="text-[14px]">Bezzle-{v}.zip</span><span className="ml-auto text-[12.5px]" style={{ color: "var(--ink-3)" }}>{L.downloads}</span>
                    </div>
                </div>
            </div>
            {/* the keys pressed for it */}
            <div data-keys className="bz-abs flex gap-2" style={{ left: 640 - 79, top: 628, opacity: 0, visibility: "hidden" }}>
                <span data-key="cmd" className="mac-key" style={{ width: 46 }}>⌘</span><span data-key="space" className="mac-key" style={{ width: 112 }} />
            </div>
            <span data-key="return" className="bz-abs mac-key" style={{ left: 640 - 26, top: 628, width: 52, opacity: 0, visibility: "hidden" }}>↩</span>

            {/* Bezzle's menu */}
            <div data-menu className="bz-abs mac-glass" style={{ left: MENU.x, top: MENU.y, width: MENU.w, padding: 5, borderRadius: 12, opacity: 0, visibility: "hidden" }}>
                <div data-menu-hl className="bz-abs rounded-[7px]" style={{ left: 5, right: 5, top: 5, height: 22, background: "rgb(var(--cpencil-rgb))", opacity: 0 }} />
                {L.menu.map((m, i) => m === null
                    ? <div key={i} className="mx-2.5 my-[5px] h-px" style={{ background: "rgb(var(--ink-rgb) / 0.1)" }} />
                    : <div key={i} data-mi={i} className="relative flex items-center h-[22px] px-2.5 text-[13px] whitespace-nowrap">
                        <span>{m[0]}</span>{m[1] && <span data-mi-key className="ml-auto pl-4" style={{ color: m[1] === "›" ? "var(--ink-2)" : "var(--ink-3)" }}>{m[1]}</span>}
                    </div>)}
            </div>

            {/* what Sparkle says when there is nothing newer */}
            <div data-alert className="bz-abs mac-glass text-center" style={{ left: ALERT.x, top: ALERT.y, width: ALERT.w, borderRadius: 20, padding: "22px 20px 16px", opacity: 0, visibility: "hidden" }}>
                <div className="flex justify-center"><BezzleIcon size={64} /></div>
                <div className="mt-3 text-[14px] font-bold leading-snug">{L.upToDate}</div>
                <div className="mt-1.5 text-[12px] leading-[1.4]" style={{ color: "var(--ink-2)" }}>{L.newest.replace("{v}", v)}</div>
                <div data-alert-ok className="mt-4 h-7 rounded-full text-[13px] font-medium leading-7 text-white" style={{ background: "rgb(var(--cpencil-rgb))" }}>{L.ok}</div>
            </div>

            {/* the pointer (its shadow drawn, not filtered, so it moves for nothing) */}
            <svg data-pointer className="bz-abs" viewBox="0 0 24 30" width="24" height="30" style={{ left: 0, top: 0, opacity: 0, transformOrigin: "3px 3px", willChange: "transform", overflow: "visible" }} aria-hidden="true">
                <path d="M2.5 2.2v19.6l4.9-4.7 3.4 7.7 3.4-1.4-3.3-7.6h6.8z" transform="translate(0.6 1.8)" fill="rgb(0 0 0 / 0.22)" stroke="rgb(0 0 0 / 0.12)" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M2.5 2.2v19.6l4.9-4.7 3.4 7.7 3.4-1.4-3.3-7.6h6.8z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
