/*
 * The PC that Bezzle is installed on, for the download page's story (src/site/Install.jsx): a
 * Windows 11 screen 1280 × 800 in its own points, the counterpart of the Mac (src/site/Mac.jsx).
 * On it, Windows as you meet it: the wallpaper, the taskbar in the middle with the clock at its
 * right, a browser with this very page in it and its downloads, the warnings an unsigned installer
 * meets (the browser's, then Microsoft Defender SmartScreen's), Bezzle's installer, and then
 * Bezzle's own window on its home, as the Windows app draws it (Windows/Sources/Bezzle: TabStrip,
 * Bar, HomeView, BezzleApp): its bar 52 tall with the home tab and the round plus at the left,
 * Search, From a Website…, Bring In… and Open… at the right, and Windows' caption buttons after them.
 *
 * The other apps and the system's marks are drawn plainly (a folder, a globe, an envelope, a grid
 * of dots for Start), never as Microsoft draws its own. The system's and the browser's words are
 * Windows' and Edge's in each language (WIN); Bezzle's are the app's (src/app/words.js and the
 * Windows app's own, Resources/windows-words.json). Every colour is a page variable, so the PC is
 * dark when the page is.
 */
import { MARK } from "@/site/Marked";
import { HomeState } from "@/story/scenes/home";
import { ui } from "@/app/words";
import { Icon } from "@/app/Kit";

/* ------------------------------------------------------------------ where everything stands */
export const TASKBAR = { y: 752, h: 48 };
export const BROWSER = { x: 160, y: 28, w: 960, h: 610 };
/** The browser's downloads, under its button at the right of the toolbar (in the browser's points). */
export const FLY = { right: 8, top: 82, w: 372 };
/** The browser's own question about the download, over the page (in the browser's points). */
export const KEEP = { x: (BROWSER.w - 452) / 2, y: 118, w: 452 };
export const SMART = { x: 640 - 252, y: 128, w: 504, h: 384 };
export const SETUP = { x: 640 - 262, y: 168, w: 524, h: 326 };
/** Bezzle's window, at 0.7 of its points. */
export const APP = { x: 214, y: 112, k: 0.7 };
/** The taskbar's buttons, 40 wide and 4 apart, the search box 184; Bezzle comes in at the end. */
const TB = ["start", "search", "files", "web", "mail", "photos"];
const cellW = (k) => (k === "search" ? 184 : 40);
function tbLayout(withBezzle) {
    const items = withBezzle ? [...TB, "bezzle"] : TB;
    let x = 0;
    const at = {};
    for (const k of items) { at[k] = x; x += cellW(k) + 4; }
    const width = x - 4;
    return { at, width, left: 640 - width / 2 };
}
const TB_A = tbLayout(false), TB_B = tbLayout(true);
/** How far the taskbar's buttons move as Bezzle comes in at its end: they stay in the middle. */
export const TB_SHIFT = TB_B.left - TB_A.left;

/* ------------------------------------------------------------------ the words of the PC */
/*
 * Windows' and Edge's own words in each language (Windows 11 and Edge in 2026): SmartScreen's dialog,
 * the browser's downloads and its warning for a file it has not seen often, the taskbar's search
 * box and Start. Looked up in November 2026: SmartScreen's in all four from Microsoft's pages and
 * screenshots people posted; Edge's English from Microsoft's, its German, French and Italian Keep,
 * Show more and Keep anyway from Microsoft's localized Edge docs (de: Behalten, as Edge says now,
 * no longer Beibehalten). Edge warns only of a file it was served from the internet, so its warning can
 * be checked only with the first real release. Still to check on a PC in each language: Edge's warning line and its
 * question's title and text in de/fr/it, Open file and the download's progress line, and
 * SmartScreen's App:/Publisher: labels in fr and it. `setup` is the installer's, which is not chosen
 * yet: plain words until it is, to be replaced by its own once there are screenshots of it.
 */
export const WIN = {
    en: {
        search: "Search", tab: "Download Bezzle",
        downloads: "Downloads", openFile: "Open file", progress: "{a}/{b} MB, {s} secs left",
        notCommon: "{f} isn't commonly downloaded. Make sure you trust {f} before you open it.",
        menu: ["Delete", "Keep", "Report this file as safe", "Learn more", "Copy download link"],
        keepTitle: "Make sure you trust {f} before you open it",
        keepBody: "Microsoft Defender SmartScreen couldn't verify if this file is safe because it isn't commonly downloaded. Make sure you trust the file you're downloading or its source before you open it.",
        name: "Name:", publisher: "Publisher:", unknown: "Unknown", del: "Delete", cancel: "Cancel", showMore: "Show more",
        more: ["Report this app as safe", "Learn more about Microsoft Defender SmartScreen", "Keep anyway"],
        smartTitle: "Windows protected your PC",
        smartBody: "Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.",
        moreInfo: "More info", app: "App:", unknownPublisher: "Unknown publisher", run: "Run anyway", dont: "Don't run",
        setup: { title: "Bezzle Setup", installing: "Installing Bezzle", wait: "Bezzle is being installed for you.", done: "Bezzle is installed", find: "You will find it in the Start menu.", launch: "Launch Bezzle", finish: "Finish", cancel: "Cancel" },
    },
    de: {
        search: "Suchen", tab: "Bezzle laden",
        downloads: "Downloads", openFile: "Datei öffnen", progress: "{a}/{b} MB, noch {s} Sek.",
        notCommon: "{f} wird häufig nicht heruntergeladen. Stellen Sie sicher, dass Sie {f} vertrauen, bevor Sie die Datei öffnen.",
        menu: ["Löschen", "Behalten", "Diese Datei als sicher melden", "Weitere Informationen", "Downloadlink kopieren"],
        keepTitle: "Stellen Sie sicher, dass Sie {f} vertrauen, bevor Sie die Datei öffnen",
        keepBody: "Microsoft Defender SmartScreen konnte nicht überprüfen, ob diese Datei sicher ist, da sie nicht häufig heruntergeladen wird. Stellen Sie sicher, dass Sie der heruntergeladenen Datei oder ihrer Quelle vertrauen, bevor Sie sie öffnen.",
        name: "Name:", publisher: "Herausgeber:", unknown: "Unbekannt", del: "Löschen", cancel: "Abbrechen", showMore: "Mehr anzeigen",
        more: ["Anwendung als sicher melden", "Weitere Informationen zu Microsoft Defender SmartScreen", "Trotzdem behalten"],
        smartTitle: "Der Computer wurde durch Windows geschützt",
        smartBody: "Von Microsoft Defender SmartScreen wurde der Start einer unbekannten App verhindert. Die Ausführung dieser App stellt u. U. ein Risiko für den PC dar.",
        moreInfo: "Weitere Informationen", app: "App:", unknownPublisher: "Unbekannter Herausgeber", run: "Trotzdem ausführen", dont: "Nicht ausführen",
        setup: { title: "Bezzle Setup", installing: "Bezzle wird installiert", wait: "Bezzle wird für dich installiert.", done: "Bezzle ist installiert", find: "Du findest es im Startmenü.", launch: "Bezzle starten", finish: "Fertig", cancel: "Abbrechen" },
    },
    fr: {
        search: "Rechercher", tab: "Télécharger Bezzle",
        downloads: "Téléchargements", openFile: "Ouvrir le fichier", progress: "{a}/{b} Mo, {s} s restantes",
        notCommon: "{f} n'est pas fréquemment téléchargé. Assurez-vous que vous faites confiance à {f} avant de l'ouvrir.",
        menu: ["Supprimer", "Conserver", "Signaler ce fichier comme sûr", "En savoir plus", "Copier le lien de téléchargement"],
        keepTitle: "Assurez-vous que vous faites confiance à {f} avant de l'ouvrir",
        keepBody: "Microsoft Defender SmartScreen n'a pas pu vérifier si ce fichier est sûr, car il n'est pas fréquemment téléchargé. Assurez-vous que vous faites confiance au fichier que vous téléchargez ou à sa source avant de l'ouvrir.",
        name: "Nom :", publisher: "Éditeur :", unknown: "Inconnu", del: "Supprimer", cancel: "Annuler", showMore: "Afficher plus",
        more: ["Signaler cette application comme sûre", "En savoir plus sur Microsoft Defender SmartScreen", "Conserver quand même"],
        smartTitle: "Windows a protégé votre ordinateur",
        smartBody: "Microsoft Defender SmartScreen a empêché le démarrage d’une application non reconnue. L’exécution de cette application peut mettre votre ordinateur en danger.",
        moreInfo: "Informations complémentaires", app: "Application :", unknownPublisher: "Éditeur inconnu", run: "Exécuter quand même", dont: "Ne pas exécuter",
        setup: { title: "Installation de Bezzle", installing: "Installation de Bezzle", wait: "Bezzle s’installe pour toi.", done: "Bezzle est installé", find: "Tu le trouveras dans le menu Démarrer.", launch: "Lancer Bezzle", finish: "Terminer", cancel: "Annuler" },
    },
    it: {
        search: "Cerca", tab: "Scarica Bezzle",
        downloads: "Download", openFile: "Apri file", progress: "{a}/{b} MB, {s} sec rimanenti",
        notCommon: "{f} non viene scaricato comunemente. Assicurati di considerare attendibile {f} prima di aprirlo.",
        menu: ["Elimina", "Mantieni", "Segnala questo file come sicuro", "Altre informazioni", "Copia collegamento di download"],
        keepTitle: "Assicurati di considerare attendibile {f} prima di aprirlo",
        keepBody: "Microsoft Defender SmartScreen non è riuscito a verificare se questo file è sicuro perché non viene scaricato comunemente. Assicurati di considerare attendibile il file che stai scaricando o la sua origine prima di aprirlo.",
        name: "Nome:", publisher: "Autore:", unknown: "Sconosciuto", del: "Elimina", cancel: "Annulla", showMore: "Mostra altro",
        more: ["Segnala questa app come sicura", "Altre informazioni su Microsoft Defender SmartScreen", "Mantieni comunque"],
        smartTitle: "PC protetto da Windows",
        smartBody: "Microsoft Defender SmartScreen ha impedito l'avvio di un'app non riconosciuta. L'esecuzione di tale app potrebbe costituire un rischio per il PC.",
        moreInfo: "Ulteriori informazioni", app: "App:", unknownPublisher: "Autore sconosciuto", run: "Esegui comunque", dont: "Non eseguire",
        setup: { title: "Installazione di Bezzle", installing: "Installazione di Bezzle", wait: "Bezzle si sta installando per te.", done: "Bezzle è installato", find: "Lo trovi nel menu Start.", launch: "Avvia Bezzle", finish: "Fine", cancel: "Annulla" },
    },
};

/**
 * The taskbar's clock as Windows shows it: the time over the date, short, in the visitor's own
 * way when they read the page in their language (en-GB, de-CH…), else the page's.
 */
export function winClock(date, locale) {
    let loc = locale;
    try {
        const own = navigator.language;
        if (own && own.slice(0, 2) === locale.slice(0, 2)) loc = own;
    } catch { /* the page's, then */ }
    // Windows' short dates: 11/8/2026 in the US, else the day and month with two digits (08.11.2026, 08/11/2026)
    const us = /^en(-US)?$/i.test(loc);
    const time = new Intl.DateTimeFormat(loc, { hour: "numeric", minute: "2-digit" }).format(date);
    const day = new Intl.DateTimeFormat(loc, us ? { year: "numeric", month: "numeric", day: "numeric" } : { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
    return [time, day];
}

/* ------------------------------------------------------------------ glyphs and icons */
const S = { stroke: "currentColor", fill: "none", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
const G = {
    back: <path d="M14 9H4.5m0 0L9 4.5M4.5 9 9 13.5" {...S} />,
    fwd: <path d="M4 9h9.5m0 0L9 4.5M13.5 9 9 13.5" {...S} />,
    refresh: <><path d="M14.2 9a5.2 5.2 0 1 1-1.6-3.8" {...S} /><path d="M13 2.8v2.8h-2.8" {...S} /></>,
    lock: <><rect x="5" y="8" width="8" height="6.4" rx="1.4" {...S} /><path d="M6.6 8V6.4a2.4 2.4 0 0 1 4.8 0V8" {...S} /></>,
    star: <path d="m9 3 1.8 3.8 4.1.5-3 2.8.8 4.1L9 12.2l-3.7 2 .8-4.1-3-2.8 4.1-.5z" {...S} />,
    download: <path d="M9 3.5v8m0 0-3.2-3.2M9 11.5l3.2-3.2M4 14.5h10" {...S} />,
    favorites: <><path d="m7.6 3 1.4 2.9 3.2.4-2.3 2.2.6 3.1-2.9-1.5-2.8 1.5.5-3.1L3 6.3l3.2-.4z" {...S} /><path d="M12 11.5h3.5M12 14h3.5" {...S} /></>,
    more: <><circle cx="4.5" cy="9" r="1" fill="currentColor" /><circle cx="9" cy="9" r="1" fill="currentColor" /><circle cx="13.5" cy="9" r="1" fill="currentColor" /></>,
    folder: <path d="M2.8 5.2a1.4 1.4 0 0 1 1.4-1.4h3l1.6 1.6h5a1.4 1.4 0 0 1 1.4 1.4v6.2a1.4 1.4 0 0 1-1.4 1.4H4.2a1.4 1.4 0 0 1-1.4-1.4z" {...S} />,
    search: <><circle cx="8" cy="8" r="4.6" {...S} /><path d="m11.4 11.4 3.4 3.4" {...S} /></>,
    pin: <><path d="M10.6 3 15 7.4l-2.2.6-2.6 2.6.2 2.6-1 1-5-5 1-1 2.6.2L10.6 5.2z" {...S} /><path d="m6.5 11.5-3 3" {...S} /></>,
    trash: <><path d="M3.5 5h11M7.2 5V3.6h3.6V5M5 5l.7 9.4h6.6L13 5" {...S} /></>,
    plus: <path d="M9 4v10M4 9h10" {...S} />,
    x: <path d="M5 5l8 8M13 5l-8 8" {...S} />,
    chevronUp: <path d="m5.5 11 3.5-3.5 3.5 3.5" {...S} />,
    chevronDown: <path d="m5.5 7.5 3.5 3.5 3.5-3.5" {...S} />,
    wifi: <><path d="M2.6 7.4a9.4 9.4 0 0 1 12.8 0M4.8 9.8a6.2 6.2 0 0 1 8.4 0M7 12.2a3 3 0 0 1 4 0" {...S} /><circle cx="9" cy="14.4" r="0.9" fill="currentColor" /></>,
    speaker: <><path d="M3 7.2h2.6L9 4.4v9.2L5.6 10.8H3z" {...S} /><path d="M11.6 6.6a3.4 3.4 0 0 1 0 4.8M13.4 4.8a6 6 0 0 1 0 8.4" {...S} /></>,
    battery: <><rect x="2.4" y="5.6" width="12" height="6.8" rx="1.6" {...S} /><rect x="4" y="7.2" width="7" height="3.6" rx="0.6" fill="currentColor" /><path d="M15.8 7.8v2.4" {...S} /></>,
    bell: <><path d="M5 12.6V8.4a4 4 0 0 1 8 0v4.2l1.2 1.4H3.8z" {...S} /><path d="M7.4 14.8a1.7 1.7 0 0 0 3.2 0" {...S} /></>,
    warn: <><path d="M9 2.8 16 15H2z" fill="#F2B84B" stroke="#C88A12" strokeWidth="0.8" strokeLinejoin="round" /><path d="M9 7v4" stroke="#3B2A06" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="13" r="0.85" fill="#3B2A06" /></>,
    check: <path d="m4.2 9.4 3 3 6.6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    person: <><circle cx="9" cy="6.6" r="2.8" {...S} /><path d="M3.8 15c.6-2.8 2.6-4.2 5.2-4.2s4.6 1.4 5.2 4.2" {...S} /></>,
};
const Glyph = ({ name, size = 16, style, className }) => <svg viewBox="0 0 18 18" width={size} height={size} className={className} style={{ flex: "none", ...style }} aria-hidden="true">{G[name]}</svg>;

/** Windows' caption buttons: minimize, maximize (greyed where the window can't be), close, 10 pt glyphs. */
function Captions({ w = 46, h = 32, noMax, only, ink = "var(--ink)" }) {
    const marks = {
        min: <path d="M4 9h10" stroke="currentColor" strokeWidth="1" />,
        max: <rect x="4.5" y="4.5" width="9" height="9" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1" />,
        close: <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1" />,
    };
    const keys = only || ["min", "max", "close"];
    return (
        <div className="bz-abs right-0 top-0 flex" style={{ height: h, color: ink }}>
            {keys.map((k) => <span key={k} className="grid place-items-center" style={{ width: w, height: h, opacity: k === "max" && noMax ? 0.35 : 1 }}><svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true">{marks[k]}</svg></span>)}
        </div>
    );
}

/** The installer as a file: a sheet with its corner folded and a window on it. */
function ExeIcon({ size = 32 }) {
    return (
        <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" style={{ flex: "none" }}>
            <path d="M7 2.5h12.5L26 9v19.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 6 28.5v-24.5A1.5 1.5 0 0 1 7.5 2.5z" fill="var(--win-sheet)" stroke="rgb(var(--ink-rgb) / 0.22)" strokeWidth="0.7" />
            <path d="M19.5 2.5V8a1 1 0 0 0 1 1H26" fill="var(--win-sheet-fold)" stroke="rgb(var(--ink-rgb) / 0.22)" strokeWidth="0.7" strokeLinejoin="round" />
            <rect x="9.5" y="15" width="13" height="9.5" rx="1.4" fill="none" stroke="rgb(var(--cpencil-rgb))" strokeWidth="1.2" />
            <path d="M9.5 17.6h13" stroke="rgb(var(--cpencil-rgb))" strokeWidth="1.2" />
        </svg>
    );
}
/** The installer flying from the page's button into the browser (as markup, for the flyer outside React). */
export const EXE_SVG = `<svg viewBox="0 0 64 64" aria-hidden="true" style="overflow:visible"><ellipse cx="33" cy="64" rx="19" ry="4" fill="rgba(40,32,20,.16)"/><path d="M14 3.5h25L52 16.5V58a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3z" fill="#FDFDFB" stroke="rgba(0,0,0,.18)" stroke-width="1"/><path d="M39 3.5V14a2.5 2.5 0 0 0 2.5 2.5H52" fill="#ECEBE6" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-linejoin="round"/><rect x="19" y="20" width="26" height="19" rx="2.6" fill="none" stroke="#3A63D8" stroke-width="2.2"/><path d="M19 25.4h26" stroke="#3A63D8" stroke-width="2.2"/><rect x="17" y="47" width="27" height="10" rx="2.5" fill="#5B6170"/><text x="20.4" y="54.6" font-size="8" font-weight="700" fill="#fff" font-family="Segoe UI,-apple-system,system-ui,sans-serif">EXE</text></svg>`;

/** The other apps on the taskbar, drawn plainly: a folder, a globe, an envelope, a picture. */
function App({ kind, size = 24 }) {
    const id = `w-${kind}`;
    const g = { files: ["#F7CF6B", "#E3A72F"], web: ["#5FC3E8", "#2C7FD8"], mail: ["#6AB8FF", "#2F66F0"], photos: ["#8BD3A6", "#2E9A6A"] }[kind];
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" style={{ flex: "none", overflow: "visible" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={g[0]} /><stop offset="1" stopColor={g[1]} /></linearGradient></defs>
            {kind === "files" && <><path d="M2.5 6.5a2 2 0 0 1 2-2h4.6l2 2h8.4a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" fill={`url(#${id})`} /><path d="M2.5 9.5h19V18a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" fill="#FFE29A" opacity="0.7" /></>}
            {kind === "web" && <g><circle cx="12" cy="12" r="9.5" fill={`url(#${id})`} /><g fill="none" stroke="#fff" strokeWidth="1.3" opacity="0.92"><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5c-3.6 3.2-3.6 15.8 0 19M12 2.5c3.6 3.2 3.6 15.8 0 19" /></g></g>}
            {kind === "mail" && <g><rect x="2.5" y="5" width="19" height="14" rx="2.4" fill={`url(#${id})`} /><path d="m3.6 6.6 8.4 6.4 8.4-6.4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /></g>}
            {kind === "photos" && <g><rect x="2.5" y="4" width="19" height="16" rx="2.6" fill={`url(#${id})`} /><circle cx="16" cy="9" r="1.9" fill="#fff" /><path d="M4.5 18l5-6.4 3.6 4.2 2.4-2.6 4 4.8z" fill="#fff" /></g>}
        </svg>
    );
}
/** Start, as a plain mark of its own: a grid of dots in the pencil's blue. */
const StartMark = ({ size = 24 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" style={{ flex: "none" }}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="rgb(var(--cpencil-rgb))" />
        <g fill="#fff">{[7.5, 12, 16.5].flatMap((y) => [7.5, 12, 16.5].map((x) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.35" />))}</g>
    </svg>
);
const BezzleIcon = ({ size = 24 }) => <img src="/img/icon-128.webp" alt="" width={size} height={size} style={{ width: size, height: size, flex: "none" }} draggable="false" />;

/* ------------------------------------------------------------------ the page in the browser */
function MiniPage({ t, w, r, noted }) {
    const [l1, l2] = w.h;
    const pill = noted ? t.updates_link.replace("{v}", r.version) : w.pill.replace("{v}", r.version);
    return (
        <div className="bz-abs inset-x-0 bottom-0 overflow-hidden" style={{ top: 84, background: "var(--paper)" }}>
            <div className="bz-abs flex items-center gap-1.5" style={{ left: 24, top: 14 }}>
                <BezzleIcon size={16} /><span className="font-serif font-semibold text-[13px]">Bezzle</span>
            </div>
            <div className="bz-abs flex gap-0.5 p-[2px] rounded-[7px] text-[9px] font-medium" style={{ left: "50%", top: 11, transform: "translateX(-50%)", background: "var(--well)", color: "var(--ink-2)" }}>
                {[t.nav_features, t.nav_free, t.nav_news, t.nav_support].map((x) => <span key={x} className="px-2 py-[3px] whitespace-nowrap">{x}</span>)}
            </div>
            <div className="bz-abs flex items-center gap-1 h-[20px] px-2 rounded-[6px] text-[9px] font-semibold" style={{ right: 24, top: 11, background: "var(--ink)", color: "var(--on-ink)" }}>↓ {t.nav_download}</div>
            <div className="bz-abs inset-x-0 flex flex-col items-center text-center" style={{ top: 64 }}>
                <span className="flex items-center gap-1.5 h-[20px] pl-1 pr-2.5 rounded-full text-[9px] font-semibold bz-card"><BezzleIcon size={14} />{pill}{noted && <b style={{ color: "var(--pencil)" }}>→</b>}</span>
                <div className="mt-3 font-serif font-semibold text-[52px] leading-[0.94] tracking-[-0.04em]">{l1}<br /><span className="marked">{l2}{MARK}</span></div>
                <p className="mt-4 text-[12px]" style={{ color: "var(--ink-2)" }}>{t.dl_sub}</p>
                <div data-mini-btn className="mt-4 flex items-center gap-2 h-[34px] px-4 rounded-[10px] text-[12px] font-semibold" style={{ background: "var(--ink)", color: "var(--on-ink)", boxShadow: "0 6px 14px rgb(var(--shadow-rgb) / 0.22)" }}>↓ {t.dl_button.replace("{v}", r.version)}</div>
                <p className="mt-2.5 text-[9px]" style={{ color: "var(--ink-3)" }}>{w.facts.replace("{mb}", r.mb).replace("{os}", r.os).split(" · ").join("   ·   ")}</p>
            </div>
            {/* and under it, this PC again, peeking up */}
            <div className="bz-abs win-wall rounded-t-[8px]" style={{ left: 170, right: 170, top: 410, height: 130, boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.12)" }}>
                <div className="bz-abs rounded-[5px]" style={{ left: 130, top: 22, width: 360, height: 150, background: "var(--card)", boxShadow: "0 4px 12px rgb(var(--shadow-rgb) / 0.22), 0 0 0 0.5px rgb(0 0 0 / 0.1)" }}>
                    <div className="bz-abs flex gap-2.5" style={{ right: 8, top: 5 }}>{[0, 1, 2].map((i) => <i key={i} className="block w-[6px] h-px mt-[3px]" style={{ background: "var(--ink-3)" }} />)}</div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the browser */
/** The file's line in the browser's downloads: on its way, then the browser's warning, then done. */
function DownloadItem({ L, file, mb }) {
    const warn = L.notCommon.replaceAll("{f}", file);
    return (
        <div data-fly-item className="bz-abs inset-x-0" style={{ top: 48, height: 92 }}>
            <div data-fly-hover className="bz-abs rounded-[6px]" style={{ inset: "2px 6px", background: "rgb(var(--ink-rgb) / 0.05)", opacity: 0 }} />
            <div className="bz-abs" style={{ left: 18, top: 14 }}>
                <div data-fi-file><ExeIcon size={30} /></div>
                <div data-fi-warn className="bz-abs left-0 top-0 grid place-items-center" style={{ width: 30, height: 30, opacity: 0, visibility: "hidden" }}><Glyph name="warn" size={24} /></div>
            </div>
            {/* on its way */}
            <div data-fs="prog" className="bz-abs" style={{ left: 60, right: 18, top: 14 }}>
                <div className="text-[13px] font-semibold truncate">{file}</div>
                <div className="mt-2 h-[3px] rounded-full overflow-hidden" style={{ background: "rgb(var(--ink-rgb) / 0.12)" }}>
                    <div data-fs-bar className="h-full rounded-full" style={{ background: "rgb(var(--cpencil-rgb))", transformOrigin: "0 50%", transform: "scaleX(0)" }} />
                </div>
                <div data-fs-text className="mt-1.5 text-[12px] bz-num whitespace-nowrap" style={{ color: "var(--ink-2)" }}>{L.progress.replace("{a}", "0").replace("{b}", mb).replace("{s}", "9")}</div>
            </div>
            {/* the browser's warning */}
            <div data-fs="warn" className="bz-abs" style={{ left: 60, right: 18, top: 12, opacity: 0, visibility: "hidden" }}>
                <div className="text-[12.5px] leading-[1.38]" style={{ paddingRight: 62 }}>{warn}</div>
                <div data-fs-actions className="bz-abs flex gap-1" style={{ right: -6, top: 2, opacity: 0, color: "var(--ink-2)" }}>
                    <span className="grid place-items-center w-7 h-7 rounded-[5px]"><Glyph name="trash" /></span>
                    <span data-fs-more className="grid place-items-center w-7 h-7 rounded-[5px]" style={{ background: "rgb(var(--ink-rgb) / 0.06)" }}><Glyph name="more" /></span>
                </div>
            </div>
            {/* done */}
            <div data-fs="done" className="bz-abs" style={{ left: 60, right: 18, top: 14, opacity: 0, visibility: "hidden" }}>
                <div className="text-[13px] font-semibold truncate">{file}</div>
                <div className="mt-1.5 text-[12.5px]"><span data-open-file className="inline-block underline underline-offset-2" style={{ color: "var(--win-link)" }}>{L.openFile}</span></div>
            </div>
        </div>
    );
}

function Browser({ t, w, L, r, file, noted }) {
    return (
        <div data-browser className="bz-abs win-window" style={{ left: BROWSER.x, top: BROWSER.y, width: BROWSER.w, height: BROWSER.h }}>
            {/* the tabs, in the window's frame */}
            <div className="bz-abs inset-x-0 top-0" style={{ height: 40, background: "var(--win-frame)" }} />
            <div className="bz-abs flex items-center gap-2 px-3 text-[12px]" style={{ left: 8, top: 6, width: 240, height: 34, borderRadius: "8px 8px 0 0", background: "var(--card)" }}>
                <BezzleIcon size={16} /><span className="truncate flex-1">{L.tab}</span><Glyph name="x" size={14} style={{ color: "var(--ink-2)" }} />
            </div>
            <div className="bz-abs grid place-items-center" style={{ left: 256, top: 9, width: 28, height: 28, color: "var(--ink-2)" }}><Glyph name="plus" size={15} /></div>
            <Captions h={36} />
            {/* the toolbar */}
            <div className="bz-abs inset-x-0" style={{ top: 40, height: 44, background: "var(--card)", boxShadow: "inset 0 -0.5px 0 var(--hairline)" }} />
            <div className="bz-abs flex items-center gap-[18px]" style={{ left: 16, top: 54, color: "var(--ink-2)" }}><Glyph name="back" /><Glyph name="fwd" style={{ opacity: 0.4 }} /><Glyph name="refresh" /></div>
            <div className="bz-abs flex items-center gap-2 rounded-full text-[13px] px-3.5" style={{ left: 112, top: 46, width: BROWSER.w - 112 - 196, height: 32, background: "rgb(var(--ink-rgb) / 0.055)" }}>
                <Glyph name="lock" size={14} style={{ color: "var(--ink-2)" }} />
                <span className="whitespace-nowrap">bezzle.ch<span style={{ color: "var(--ink-3)" }}>/download.html</span></span>
                <Glyph name="star" size={15} style={{ marginLeft: "auto", color: "var(--ink-2)" }} />
            </div>
            <div data-dl className="bz-abs grid place-items-center" style={{ left: BROWSER.w - 172, top: 48, width: 28, height: 28 }}>
                <div data-dl-pop className="relative w-7 h-7 grid place-items-center rounded-[5px]" style={{ color: "var(--ink-2)" }}>
                    <div data-dl-on className="bz-abs inset-0 rounded-[5px]" style={{ background: "rgb(var(--ink-rgb) / 0.07)", opacity: 0 }} />
                    <svg viewBox="0 0 28 28" width="28" height="28" className="bz-abs inset-0" aria-hidden="true">
                        <g data-dl-ring style={{ opacity: 0 }}>
                            <circle cx="14" cy="14" r="10.5" fill="none" stroke="rgb(var(--ink-rgb) / 0.14)" strokeWidth="2" />
                            <circle data-dl-fill cx="14" cy="14" r="10.5" fill="none" stroke="rgb(var(--cpencil-rgb))" strokeWidth="2" strokeLinecap="round" pathLength="1" strokeDasharray="1 1" strokeDashoffset="1" transform="rotate(-90 14 14)" />
                        </g>
                    </svg>
                    <Glyph name="download" size={15} style={{ position: "relative" }} />
                </div>
            </div>
            <div className="bz-abs flex items-center gap-[22px]" style={{ left: BROWSER.w - 128, top: 54, color: "var(--ink-2)" }}>
                <Glyph name="favorites" /><span className="grid place-items-center w-[20px] h-[20px] rounded-full" style={{ background: "rgb(var(--cpencil-rgb) / 0.16)", color: "rgb(var(--cpencil-rgb))" }}><Glyph name="person" size={13} /></span><Glyph name="more" />
            </div>
            <MiniPage t={t} w={w} r={r} noted={noted} />

            {/* the downloads, as the browser shows them when one starts */}
            <div data-fly className="bz-abs win-flyout" style={{ right: FLY.right, top: FLY.top, width: FLY.w, height: 216, opacity: 0, visibility: "hidden", transformOrigin: "88% 0" }}>
                <div className="bz-abs flex items-center text-[14px] font-semibold" style={{ left: 18, top: 0, height: 48 }}>{L.downloads}</div>
                <div className="bz-abs flex items-center gap-[14px]" style={{ right: 16, top: 16, color: "var(--ink-2)" }}><Glyph name="folder" /><Glyph name="search" /><Glyph name="more" /><Glyph name="pin" /></div>
                <DownloadItem L={L} file={file} mb={r.mb} />
                <div className="bz-abs inset-x-0" style={{ top: 142, height: 0.5, background: "var(--hairline)", margin: "0 14px" }} />
                <div className="bz-abs flex items-center gap-3" style={{ left: 18, top: 156 }}>
                    <div className="overflow-hidden rounded-[3px]" style={{ width: 30, height: 30, background: "var(--well)" }}><img data-win-src="/img/parts/lysefjord.webp" alt="" className="w-full h-full object-cover" /></div>
                    <div><div className="text-[13px]">Fjord.jpg</div><div className="text-[12.5px] underline underline-offset-2" style={{ color: "var(--win-link)" }}>{L.openFile}</div></div>
                </div>
                {/* its "…" menu */}
                <div data-fly-menu className="bz-abs win-flyout py-1" style={{ right: 14, top: 86, width: 252, opacity: 0, visibility: "hidden" }}>
                    <div data-fly-menu-hl className="bz-abs rounded-[5px]" style={{ left: 4, right: 4, top: 4, height: 34, background: "rgb(var(--ink-rgb) / 0.06)", opacity: 0 }} />
                    {L.menu.map((m, i) => <div key={m} data-fm={i} className="relative flex items-center h-[34px] px-4 text-[13px] whitespace-nowrap">{m}</div>)}
                </div>
            </div>

            {/* the browser's own question, once Keep is chosen, over the page dimmed */}
            <div data-scrim className="bz-abs inset-x-0 bottom-0" style={{ top: 84, background: "rgb(var(--shadow-rgb) / 0.22)", opacity: 0 }} />
            <div data-keep className="bz-abs" style={{ left: KEEP.x, top: KEEP.y, width: KEEP.w, opacity: 0, visibility: "hidden" }}>
                <div data-keep-bg className="bz-abs left-0 top-0 right-0 win-flyout" style={{ height: 0 }} />
                <div data-keep-body className="relative" style={{ padding: "22px 24px 20px" }}>
                    <div className="text-[17px] font-semibold leading-[1.3]" style={{ overflowWrap: "anywhere" }}>{L.keepTitle.replace("{f}", file)}</div>
                    <p className="mt-2.5 text-[12.5px] leading-[1.45]" style={{ color: "var(--ink-2)" }}>{L.keepBody}</p>
                    <div className="mt-3 text-[12.5px] leading-[1.6]"><div>{L.name} {file}</div><div>{L.publisher} {L.unknown}</div></div>
                    <div className="mt-4 flex items-center gap-2">
                        <span data-keep-more className="flex items-center gap-1 text-[12.5px] mr-auto" style={{ color: "var(--win-link)" }}>{L.showMore}<Glyph name="chevronDown" size={13} /></span>
                        <span className="win-btn win-btn-accent">{L.del}</span><span className="win-btn">{L.cancel}</span>
                    </div>
                    <div data-keep-extra className="text-[12.5px] leading-[1.9]" style={{ marginTop: 10, opacity: 0, visibility: "hidden" }}>
                        <div className="underline underline-offset-2" style={{ color: "var(--win-link)" }}>{L.more[0]}</div>
                        <div className="underline underline-offset-2" style={{ color: "var(--win-link)" }}>{L.more[1]}</div>
                        <div><span data-keep-anyway className="inline-block underline underline-offset-2" style={{ color: "var(--win-link)" }}>{L.more[2]}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ SmartScreen */
function SmartScreen({ L, file }) {
    return (
        <div data-smart className="bz-abs win-smart" style={{ left: SMART.x, top: SMART.y, width: SMART.w, height: SMART.h, opacity: 0, visibility: "hidden" }}>
            <Captions only={["close"]} w={46} h={34} ink="#fff" />
            <div className="bz-abs" style={{ left: 32, right: 40, top: 40 }}>
                <div className="text-[27px] font-light leading-[1.15] tracking-[-0.01em]">{L.smartTitle}</div>
                <p className="mt-5 text-[13.5px] leading-[1.5]" style={{ opacity: 0.95 }}>{L.smartBody}</p>
                <div className="mt-4 text-[13.5px]"><span data-smart-more className="inline-block underline underline-offset-2">{L.moreInfo}</span></div>
                <div data-smart-extra className="mt-6 text-[13.5px] leading-[1.7]" style={{ opacity: 0, visibility: "hidden" }}>
                    <div><span style={{ opacity: 0.85 }}>{L.app}</span> {file}</div>
                    <div><span style={{ opacity: 0.85 }}>{L.publisher}</span> {L.unknownPublisher}</div>
                </div>
            </div>
            <div className="bz-abs inset-x-0 bottom-0 flex justify-end gap-2" style={{ height: 76, padding: "22px 24px" }}>
                <span data-smart-run className="win-btn win-btn-smart" style={{ opacity: 0, visibility: "hidden" }}>{L.run}</span>
                <span data-smart-dont className="win-btn win-btn-smart">{L.dont}</span>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the installer */
/**
 * Bezzle's installer: for the one using the PC alone, so no administrator is asked; it adds Bezzle
 * to the Start menu and the bezzle: links. Which installer it is is not settled yet, so it stands
 * here as a small, plain setup window, its progress and then Finish with Launch Bezzle ticked; it
 * is to be drawn again from the real one's screenshots, here and nowhere else.
 */
// The installer is not built yet (the app's Scripts/release-windows.sh; probably Inno Setup, whose own title would
// be "Setup - Bezzle"): its words are WIN[code].setup, one place to change once its screenshots are in.
export function WinSetup({ S: W }) {
    return (
        <div data-setup className="bz-abs win-window" style={{ left: SETUP.x, top: SETUP.y, width: SETUP.w, height: SETUP.h, opacity: 0, visibility: "hidden" }}>
            <div className="bz-abs inset-x-0 top-0 flex items-center gap-2 text-[12px]" style={{ height: 32, paddingLeft: 12, background: "var(--win-frame)" }}><BezzleIcon size={16} />{W.title}</div>
            <Captions only={["min", "close"]} h={32} />
            <div className="bz-abs inset-x-0" style={{ top: 32, bottom: 64 }}>
                <div className="bz-abs" style={{ left: 30, top: 30 }}><BezzleIcon size={56} /></div>
                <div data-setup-installing className="bz-abs" style={{ left: 110, right: 34, top: 32 }}>
                    <div className="text-[19px] font-semibold">{W.installing}</div>
                    <p className="mt-2 text-[13px]" style={{ color: "var(--ink-2)" }}>{W.wait}</p>
                    <div className="mt-9 h-[6px] rounded-full overflow-hidden" style={{ background: "rgb(var(--ink-rgb) / 0.1)" }}>
                        <div data-setup-bar className="h-full rounded-full" style={{ background: "rgb(var(--cpencil-rgb))", transformOrigin: "0 50%", transform: "scaleX(0)" }} />
                    </div>
                </div>
                <div data-setup-done className="bz-abs" style={{ left: 110, right: 34, top: 32, opacity: 0, visibility: "hidden" }}>
                    <div className="text-[19px] font-semibold">{W.done}</div>
                    <p className="mt-2 text-[13px]" style={{ color: "var(--ink-2)" }}>{W.find}</p>
                    <div className="mt-8 flex items-center gap-2.5 text-[13px]">
                        <span data-setup-check className="grid place-items-center w-[18px] h-[18px] rounded-[4px] text-white" style={{ background: "rgb(var(--cpencil-rgb))" }}><Glyph name="check" size={14} /></span>{W.launch}
                    </div>
                </div>
            </div>
            <div className="bz-abs inset-x-0 bottom-0 flex justify-end items-center gap-2" style={{ height: 64, padding: "0 20px", background: "var(--win-frame)", boxShadow: "inset 0 0.5px 0 var(--hairline)" }}>
                <span data-setup-cancel className="win-btn">{W.cancel}</span>
                <span data-setup-finish className="win-btn win-btn-accent bz-abs" style={{ right: 20, top: 16, opacity: 0, visibility: "hidden" }}>{W.finish}</span>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ Bezzle's own window */
/** The bar of Bezzle's home on Windows (TabStrip, HomeView.bar, Bar.captionRoom). */
function WinHomeBar({ u, b }) {
    return (
        <div className="bz-abs inset-x-0 top-0" style={{ height: 52 }}>
            <div className="bz-abs bz-card rounded-[9px]" style={{ left: 16, top: 11, width: 72, height: 30 }} />
            <div className="bz-abs font-serif font-semibold text-[15px] leading-[30px] text-center" style={{ left: 16, top: 11, width: 72 }}>Bezzle</div>
            <div className="bz-abs grid place-items-center rounded-full" style={{ left: 94, top: 13, width: 26, height: 26, color: "var(--ink-2)" }}><Glyph name="plus" size={18} /></div>
            <div className="bz-abs flex items-center gap-2.5" style={{ right: 148, top: 12, height: 28 }}>
                <div className="bz-well flex items-center h-7 rounded-[8px] px-2.5 text-[12px]" style={{ width: 200, color: "var(--ink-3)" }}>{u("Search")}</div>
                <div className="bz-card flex items-center gap-1.5 h-7 pl-2.5 pr-3 rounded-[8px] text-[12px] font-medium"><Icon name="globe" size={12} />{u("From a Website…")}</div>
                <div className="bz-card flex items-center h-7 px-3 rounded-[8px] text-[12px] font-medium">{b}</div>
                <div className="bz-card flex items-center h-7 px-3 rounded-[8px] text-[12px] font-medium">{u("Open…")}</div>
            </div>
            <Captions h={48} w={46} noMax />
        </div>
    );
}
/* Bezzle for Windows' own words that the Mac has not (Windows/Resources/windows-words.json, and the Mac's Localizable for "Search") */
const BRING_IN = { en: "Bring In…", de: "Übernehmen …", fr: "Importer…", it: "Importa…" };
const SEARCH = { en: "Search", de: "Suchen", fr: "Rechercher", it: "Cerca" };

/* ------------------------------------------------------------------ the screen */
export default function Win({ t, w, code, r, noted }) {
    const L = WIN[code], mac = ui(code);
    // home on Windows has its heading alone, without the Mac's Show in Finder
    const u = (s) => (s === "Show in Finder" ? "" : s === "Search" ? SEARCH[code] : mac(s));
    const file = r.file;
    return (
        <div className="win bz" data-win="">
            <div className="bz-abs inset-0 win-wall" />

            <Browser t={t} w={w} L={L} r={r} file={file} noted={noted} />
            <SmartScreen L={L} file={file} />
            <WinSetup S={L.setup} />

            {/* Bezzle's own window, as it opens: its home */}
            <div data-bezzle className="bz-abs" style={{ left: APP.x, top: APP.y, width: 1280 * APP.k, height: 800 * APP.k, opacity: 0, visibility: "hidden", transformOrigin: "50% 60%" }}>
                <div className="bz-abs left-0 top-0" style={{ width: 1280, height: 800, transform: `scale(${APP.k})`, transformOrigin: "0 0" }}>
                    <div className="bz-win win-app">
                        <div className="bz-abs inset-0"><HomeState u={u} /></div>
                        <WinHomeBar u={u} b={BRING_IN[code]} />
                    </div>
                </div>
            </div>

            {/* the taskbar: Start, the search box and the apps in the middle; the tray and the clock at the right */}
            <div className="bz-abs inset-x-0 win-taskbar" style={{ top: TASKBAR.y, height: TASKBAR.h }}>
                <div data-tb-row className="bz-abs" style={{ left: TB_A.left, top: 4, width: TB_B.width, height: 40 }}>
                    {TB.map((k) => k === "search"
                        ? <div key={k} className="bz-abs flex items-center gap-2 rounded-full px-3 text-[13px]" style={{ left: TB_A.at[k], top: 4, width: 184, height: 32, background: "var(--win-search)", boxShadow: "inset 0 0 0 0.5px var(--hairline)", color: "var(--ink-2)" }}><Glyph name="search" size={15} style={{ color: "var(--ink)" }} />{L.search}</div>
                        : <div key={k} data-tb={k} className="bz-abs grid place-items-center" style={{ left: TB_A.at[k], top: 0, width: 40, height: 40 }}>
                            {k === "web" && <div data-tb-web-bg className="bz-abs inset-0 rounded-[5px]" style={{ background: "rgb(var(--ink-rgb) / 0.06)" }} />}
                            <div className="relative">{k === "start" ? <StartMark /> : <App kind={k} />}</div>
                            {k === "web" && <i data-pill="web" className="bz-abs block rounded-full" style={{ left: 12, top: 36, width: 16, height: 3, background: "rgb(var(--cpencil-rgb))" }} />}
                            {k === "files" && <i className="bz-abs block rounded-full" style={{ left: 17, top: 36, width: 6, height: 3, background: "var(--ink-3)" }} />}
                        </div>)}
                    <div data-tb-bezzle className="bz-abs grid place-items-center rounded-[5px]" style={{ left: TB_B.at.bezzle, top: 0, width: 40, height: 40, opacity: 0, visibility: "hidden", transformOrigin: "50% 100%" }}>
                        <div data-tb-bezzle-bg className="bz-abs inset-0 rounded-[5px]" style={{ background: "rgb(var(--ink-rgb) / 0.06)", opacity: 0 }} />
                        <div className="relative"><BezzleIcon size={24} /></div>
                        <i data-pill="bezzle" className="bz-abs block rounded-full" style={{ left: 12, top: 36, width: 16, height: 3, background: "var(--ink-3)", transform: "scaleX(0.375)" }} />
                    </div>
                </div>
                <div className="bz-abs flex items-center" style={{ right: 12, top: 0, height: TASKBAR.h }}>
                    <span className="grid place-items-center w-7 h-8" style={{ color: "var(--ink)" }}><Glyph name="chevronUp" size={15} /></span>
                    <span className="flex items-center gap-2.5 h-8 px-2 mx-1" style={{ color: "var(--ink)" }}><Glyph name="wifi" size={15} /><Glyph name="speaker" size={15} /><Glyph name="battery" size={16} /></span>
                    <span className="relative block text-right text-[12px] leading-[16px] bz-num px-2">
                        <span className="relative block overflow-hidden" style={{ height: 16 }}>
                            <span data-clock="size" className="block whitespace-nowrap invisible" />
                            <span data-clock="a" className="bz-abs right-0 top-0 whitespace-nowrap" />
                            <span data-clock="b" className="bz-abs right-0 top-0 whitespace-nowrap" />
                        </span>
                        <span data-clock="date" className="block whitespace-nowrap" />
                    </span>
                    <span className="grid place-items-center w-8 h-8 ml-0.5" style={{ color: "var(--ink)" }}><Glyph name="bell" size={15} /></span>
                </div>
            </div>

            {/* the pointer, as Windows draws it: white, edged in black (its shadow drawn, not filtered, so it moves for nothing) */}
            <svg data-pointer className="bz-abs" viewBox="0 0 24 30" width="24" height="30" style={{ left: 0, top: 0, opacity: 0, transformOrigin: "3px 3px", willChange: "transform", overflow: "visible" }} aria-hidden="true">
                <path d="M2.5 2.2v19.2l4.6-4.4 3.3 7.6 3.3-1.4-3.2-7.4h6.6z" transform="translate(0.6 1.8)" fill="rgb(0 0 0 / 0.22)" stroke="rgb(0 0 0 / 0.12)" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M2.5 2.2v19.2l4.6-4.4 3.3 7.6 3.3-1.4-3.2-7.4h6.6z" fill="#fff" stroke="#111" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
