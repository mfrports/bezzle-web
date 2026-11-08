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
 * Then, as on the Mac, the Bezzle menu (hanging from the home tab, as the Windows app's TabStrip
 * opens it) › Check for Updates…, and the updater's answer: nothing newer.
 *
 * The other apps and the system's marks are drawn plainly (a folder, a globe, an envelope, a grid
 * of dots for Start), never as Microsoft draws its own. The system's and the browser's words are
 * Windows' and Edge's in each language (WIN); the installer's and the updater's are their own
 * (WIN[code].setup, WIN[code].update); Bezzle's are the app's (src/app/words.js and the Windows
 * app's own, Resources/windows-words.json). Every colour is a page variable, so the PC is dark when
 * the page is, except the installer's and the updater's windows, which are light on a dark Windows
 * too, as they really are (.win-classic in install.css).
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
/** SmartScreen's window, as tall as Windows makes it, and a little above the middle of the screen (01-smartscreen-en.png). */
export const SMART = { x: 640 - 266, y: 112, w: 532, h: 499 };
/** The installer, in the middle of the screen, as large as it is at 100% (Inno Setup's modern wizard, 03-ready-en.png). */
export const SETUP = { x: 640 - 248, y: 181, w: 497, h: 390 };
/** Bezzle's window, at 0.7 of its points. */
export const APP = { x: 214, y: 112, k: 0.7 };
/** The Bezzle menu, below the home tab and as wide as the app opens it (TabStrip.openBezzleMenu), in the window's points. */
export const MENU = { x: 16, y: 43, w: 260 };
/** The updater's window (WinSparkle's UpdateDialog): its icon's column, then 300 for its words, in the middle of the screen. */
export const UPDATE = { x: 640 - 195, y: 300, w: 390 };
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
 * SmartScreen's App:/Publisher: labels in fr and it. SmartScreen's English is as a PC showed it on
 * 8 November 2026 (installer-shots/01, 02: an English Windows that writes "unrecognised" and
 * "Application:"; American English Windows may write "unrecognized" and "App:").
 *
 * `setup` is the installer's, as its screenshots show it in each language (the app's
 * Windows/Installer/Bezzle.iss [Messages] and [CustomMessages], and Inno Setup's own words for its
 * buttons and its status line): its window's title, Ready to install, Installing, and the last page
 * with Open Bezzle ticked. Its French says "vous", as the app's French does; it writes "..." where
 * Inno Setup does. `update` is the updater's (WinSparkle 0.9's own words, from its translations),
 * when Check for Updates… finds nothing newer; `bezzle` is the Bezzle menu, as the Windows app fills
 * it (Bar.appEntries) with the Mac's words for its entries (Localizable.xcstrings).
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
        smartBody: "Microsoft Defender SmartScreen prevented an unrecognised app from starting. Running this app might put your PC at risk.",
        moreInfo: "More info", app: "Application:", unknownPublisher: "Unknown publisher", run: "Run anyway", dont: "Don't run",
        setup: {
            title: "Bezzle Setup",
            ready: "Ready to install", readyText: "Bezzle is installed for you alone, in your own folder, so Windows needs no administrator to allow it.", readyGo: "Click Install to begin.",
            installing: "Installing", installingText: "Bezzle is being put in place. This takes a moment.", extracting: "Extracting files...", shortcuts: "Creating shortcuts...",
            done: "Bezzle is installed", find: "You find Bezzle in the Start menu. It looks for new versions by itself.", clickFinish: "Click Finish to close this window.",
            open: "Open Bezzle", install: "Install", cancel: "Cancel", finish: "Finish",
        },
        update: { title: "Software Update", checking: "Checking for updates...", upToDate: "You're up to date!", newest: "Bezzle {v} is currently the newest version available.", cancel: "Cancel", close: "Close" },
        bezzle: [["About Bezzle"], ["Check for Updates…"], null, ["Bring In a Design…", "Ctrl+Shift+I"], ["Import from a Website…", "Ctrl+Alt+Shift+I"], null, ["Allow AI Control", "", true], null, ["Copy Claude Code Command"], ["Copy Codex Command"], ["Copy Server Address"], null, ["Designs Folder…"], ["Welcome to Bezzle"]],
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
        setup: {
            title: "Bezzle installieren",
            ready: "Bereit zum Installieren", readyText: "Bezzle wird nur für dich installiert, in deinem eigenen Ordner. Darum braucht Windows dafür keine Administratorrechte.", readyGo: "Klicke auf „Installieren“, um zu beginnen.",
            installing: "Wird installiert", installingText: "Bezzle wird eingerichtet. Das dauert einen Moment.", extracting: "Dateien werden entpackt ...", shortcuts: "Verknüpfungen werden erstellt ...",
            done: "Bezzle ist installiert", find: "Du findest Bezzle im Startmenü. Neue Versionen sucht es von selbst.", clickFinish: "Klicke auf „Fertigstellen“, um dieses Fenster zu schließen.",
            open: "Bezzle öffnen", install: "Installieren", cancel: "Abbrechen", finish: "Fertigstellen",
        },
        update: { title: "Software-Aktualisierung", checking: "Es wird auf Aktualisierungen geprüft …", upToDate: "Sie benutzen bereits die neueste Version!", newest: "Bezzle {v} ist zur Zeit die neueste verfügbare Version.", cancel: "Abbrechen", close: "Schließen" },
        bezzle: [["Über Bezzle"], ["Nach Updates suchen …"], null, ["Ein Design übernehmen …", "Ctrl+Shift+I"], ["Von einer Website importieren …", "Ctrl+Alt+Shift+I"], null, ["KI-Steuerung erlauben", "", true], null, ["Claude Code-Befehl kopieren"], ["Codex-Befehl kopieren"], ["Serveradresse kopieren"], null, ["Designordner …"], ["Willkommen bei Bezzle"]],
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
        setup: {
            title: "Installation de Bezzle",
            ready: "Prêt à installer", readyText: "Bezzle est installé pour vous seul, dans votre propre dossier : Windows n'a donc besoin d'aucun droit d'administrateur.", readyGo: "Cliquez sur Installer pour commencer.",
            installing: "Installation en cours", installingText: "Bezzle est en cours d'installation. Cela prend un instant.", extracting: "Extraction des fichiers...", shortcuts: "Création des raccourcis...",
            done: "Bezzle est installé", find: "Vous trouvez Bezzle dans le menu Démarrer. Il cherche lui-même les nouvelles versions.", clickFinish: "Cliquez sur Terminer pour fermer cette fenêtre.",
            open: "Ouvrir Bezzle", install: "Installer", cancel: "Annuler", finish: "Terminer",
        },
        update: { title: "Mise à jour du logiciel", checking: "Recherche de mises à jour...", upToDate: "Le programme est à jour !", newest: "Bezzle {v} est actuellement la version la plus récente disponible.", cancel: "Annuler", close: "Fermer" },
        bezzle: [["À propos de Bezzle"], ["Rechercher des mises à jour…"], null, ["Importer un design…", "Ctrl+Shift+I"], ["Importer depuis un site web…", "Ctrl+Alt+Shift+I"], null, ["Autoriser le contrôle par IA", "", true], null, ["Copier la commande Claude Code"], ["Copier la commande Codex"], ["Copier l’adresse du serveur"], null, ["Dossier des designs…"], ["Bienvenue dans Bezzle"]],
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
        setup: {
            title: "Installazione di Bezzle",
            ready: "Pronto per l'installazione", readyText: "Bezzle viene installato solo per te, nella tua cartella. Per questo Windows non chiede i diritti di amministratore.", readyGo: "Fai clic su Installa per iniziare.",
            installing: "Installazione in corso", installingText: "Bezzle viene installato. Ci vuole un momento.", extracting: "Estrazione file...", shortcuts: "Creazione icone...",
            done: "Bezzle è installato", find: "Trovi Bezzle nel menu Start. Cerca da solo le nuove versioni.", clickFinish: "Fai clic su Fine per chiudere questa finestra.",
            open: "Apri Bezzle", install: "Installa", cancel: "Annulla", finish: "Fine",
        },
        update: { title: "Aggiornamento software", checking: "Controllo aggiornamenti…", upToDate: "Sei aggiornato!", newest: "Bezzle {v} è l'ultima versione disponibile.", cancel: "Annulla", close: "Chiudi" },
        bezzle: [["Informazioni su Bezzle"], ["Verifica aggiornamenti…"], null, ["Importa un design…", "Ctrl+Shift+I"], ["Importa da un sito web…", "Ctrl+Alt+Shift+I"], null, ["Consenti controllo IA", "", true], null, ["Copia comando per Claude Code"], ["Copia comando per Codex"], ["Copia indirizzo del server"], null, ["Cartella dei design…"], ["Primi passi con Bezzle"]],
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
/**
 * "Windows protected your PC", as a PC shows it (installer-shots/01, 02): the close box white in its
 * corner, the title, the words and More info; More info gives way to the file and its publisher in
 * two columns, and Run anyway comes beside Don't run, both white.
 */
function SmartScreen({ L, file }) {
    return (
        <div data-smart className="bz-abs win-smart" style={{ left: SMART.x, top: SMART.y, width: SMART.w, height: SMART.h, opacity: 0, visibility: "hidden" }}>
            <span className="bz-abs right-0 top-0 grid place-items-center" style={{ width: 46, height: 33, background: "#fff", color: "#1a1a1a" }}><svg viewBox="0 0 18 18" width="14" height="14" aria-hidden="true"><path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.1" /></svg></span>
            <div className="bz-abs" style={{ left: 20, right: 40, top: 26 }}>
                <div className="text-[27px] font-light leading-[1.15] tracking-[-0.01em]">{L.smartTitle}</div>
                <p className="text-[14px] leading-[20px]" style={{ marginTop: 22, marginLeft: 2, opacity: 0.96 }}>{L.smartBody}</p>
                <div className="relative text-[14px] leading-[20px]" style={{ marginLeft: 2 }}>
                    <span data-smart-more className="inline-block underline underline-offset-2">{L.moreInfo}</span>
                    <div data-smart-extra className="bz-abs left-0 grid gap-x-3 leading-[24px]" style={{ top: 10, gridTemplateColumns: "auto 1fr", whiteSpace: "nowrap", opacity: 0, visibility: "hidden" }}>
                        <span style={{ opacity: 0.9 }}>{L.app}</span><span>{file}</span>
                        <span style={{ opacity: 0.9 }}>{L.publisher}</span><span>{L.unknownPublisher}</span>
                    </div>
                </div>
            </div>
            <div className="bz-abs flex justify-end" style={{ right: 28, bottom: 25, gap: 20 }}>
                <span data-smart-run className="win-btn-smart" style={{ opacity: 0, visibility: "hidden" }}>{L.run}</span>
                <span data-smart-dont className="win-btn-smart">{L.dont}</span>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the installer */
/**
 * Bezzle's installer, screen for screen as it is (the app's Windows/Installer/Bezzle.iss, Inno Setup's
 * modern wizard at 100%, 497 × 390; installer-shots/03–05): no welcome, no folder to choose, as it
 * installs for the one using the PC alone, in their own folder, so Windows asks for no
 * administrator. Its title bar (Bezzle's icon, the title, minimize, a greyed maximize, close); then
 * Ready to install, its words, and Bezzle's icon at the top right; Install pressed, Installing, the
 * file it is at and its green bar, with Cancel and close greyed; then the last page, Bezzle's icon on
 * its paper at the left (the gradient the app's Resources/icons.swift paints), "Open Bezzle" ticked,
 * and Finish where Install was. The buttons are as wide as the longest of them needs, at least 74.
 */
const SETUP_PATH = {
    files: "C:\\...\\AppData\\Local\\Programs\\Bezzle\\Bezzle.exe",
    link: "C:\\...\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Bezzle.lnk",
};
function ClassicCaptions({ h = 30 }) {
    const mark = (d) => <svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true">{d}</svg>;
    const close = <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1" />;
    return (
        <div className="bz-abs right-0 top-0 flex" style={{ height: h }}>
            <span className="grid place-items-center" style={{ width: 46, height: h, color: "#1a1a1a" }}>{mark(<path d="M4 9h10" stroke="currentColor" strokeWidth="1" />)}</span>
            <span className="grid place-items-center" style={{ width: 46, height: h, color: "#c0c0c0" }}>{mark(<rect x="4.5" y="4.5" width="9" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />)}</span>
            <span className="relative grid place-items-center" style={{ width: 46, height: h, color: "#1a1a1a" }}>
                {mark(close)}
                <span data-setup-close-off className="bz-abs inset-0 grid place-items-center" style={{ background: "#f1f1f1", color: "#c0c0c0", opacity: 0, visibility: "hidden" }}>{mark(close)}</span>
            </span>
        </div>
    );
}
export function WinSetup({ S: W }) {
    const header = (title, words) => (
        <div className="bz-abs" style={{ left: 24, right: 66, top: 8 }}>
            <div className="font-bold leading-[16px]" style={{ fontSize: 12.5 }}>{title}</div>
            <p className="leading-[15px]" style={{ marginLeft: 16, marginTop: 2 }}>{words}</p>
        </div>
    );
    return (
        <div data-setup className="bz-abs win-classic" style={{ left: SETUP.x, top: SETUP.y, width: SETUP.w, height: SETUP.h, opacity: 0, visibility: "hidden" }}>
            <div className="bz-abs inset-x-0 top-0 flex items-center" style={{ height: 30, paddingLeft: 9, gap: 6, background: "#f1f1f1" }}><BezzleIcon size={16} />{W.title}</div>
            <ClassicCaptions />
            {/* the pages, one at a time */}
            <div className="bz-abs inset-x-0 overflow-hidden" style={{ top: 30, height: 314 }}>
                <div data-setup-small className="bz-abs" style={{ left: 437, top: 1 }}><img data-win-src="/img/icon-512.webp" alt="" width="58" height="58" style={{ width: 58, height: 58 }} draggable="false" /></div>
                <div data-setup-page="ready">
                    {header(W.ready, W.readyText)}
                    <p className="bz-abs leading-[15px]" style={{ left: 40, top: 72 }}>{W.readyGo}</p>
                </div>
                <div data-setup-page="installing" style={{ opacity: 0, visibility: "hidden" }}>
                    {header(W.installing, W.installingText)}
                    <div className="bz-abs leading-[16px] whitespace-nowrap overflow-hidden" style={{ left: 40, right: 40, top: 72 }}>
                        <div className="relative">
                            <div data-setup-status="files">{W.extracting}<br />{SETUP_PATH.files}</div>
                            <div data-setup-status="link" className="bz-abs inset-0" style={{ opacity: 0, visibility: "hidden" }}>{W.shortcuts}<br />{SETUP_PATH.link}</div>
                        </div>
                    </div>
                    <div className="bz-abs wc-bar" style={{ left: 40, top: 114, width: 417, height: 20 }}>
                        <div data-setup-bar className="h-full" style={{ background: "#396c23", transformOrigin: "0 50%", transform: "scaleX(0)" }} />
                    </div>
                </div>
                <div data-setup-page="done" className="bz-abs inset-0 bg-white" style={{ opacity: 0, visibility: "hidden" }}>
                    <div className="bz-abs left-0 top-0 bottom-0" style={{ width: 164, background: "linear-gradient(180deg, #f9f6f0, #efebe3)" }}>
                        <img data-win-src="/img/icon-512.webp" alt="" width="100" height="100" className="bz-abs" style={{ left: 32, top: 75, width: 100, height: 100 }} draggable="false" />
                    </div>
                    <div className="bz-abs flex flex-col items-start" style={{ left: 176, right: 10, top: 17 }}>
                        <div className="font-bold leading-[24px]" style={{ fontSize: 18 }}>{W.done}</div>
                        <p className="leading-[15px]" style={{ marginTop: 26 }}>{W.find}</p>
                        <p className="leading-[15px]" style={{ marginTop: 15 }}>{W.clickFinish}</p>
                        <div className="flex items-center leading-[15px]" style={{ marginTop: 18, marginLeft: 4, gap: 5 }}>
                            <span data-setup-check className="wc-check"><svg viewBox="0 0 13 13" width="13" height="13" aria-hidden="true"><path d="m3.2 6.8 2.2 2.1 4.4-4.6" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></span>{W.open}
                        </div>
                    </div>
                </div>
            </div>
            {/* the bevel, and the buttons: Install (then Finish in its place), Cancel */}
            <div className="bz-abs inset-x-0 bottom-0" style={{ height: 46, background: "#eeeeee", borderTop: "1px solid #a0a0a0" }}>
                <div className="bz-abs grid" style={{ right: 12, top: 12, gridAutoColumns: "1fr", columnGap: 11 }}>
                    <span data-setup-next className="wc-btn wc-btn-default" style={{ gridArea: "1 / 1" }}>{W.install}</span>
                    <span data-setup-finish className="wc-btn wc-btn-default" style={{ gridArea: "1 / 1", opacity: 0, visibility: "hidden" }}>{W.finish}</span>
                    <span data-setup-cancel className="wc-btn" style={{ gridArea: "1 / 2" }}>{W.cancel}</span>
                    <span data-setup-cancel-off className="wc-btn wc-btn-off" style={{ gridArea: "1 / 2", opacity: 0, visibility: "hidden" }}>{W.cancel}</span>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the updater */
/**
 * What Check for Updates… shows when there is nothing newer: WinSparkle's own window (its ui.cpp,
 * UpdateDialog), a plain dialog of Windows': "Software Update" with its orange mark, Bezzle's icon at
 * 48 in a column of its own, then 300 wide for its words. First "Checking for updates..." over a bar
 * that pulses, with Cancel; then its heading in blue ("You're up to date!", 12 pt), Bezzle and its
 * version, and Close. Its words are WinSparkle's in Bezzle's language (WIN[code].update).
 */
function WinUpdate({ U, v }) {
    return (
        <div data-upd className="bz-abs win-classic" style={{ left: UPDATE.x, top: UPDATE.y, width: UPDATE.w, background: "#f0f0f0", opacity: 0, visibility: "hidden" }}>
            <div className="relative flex items-center" style={{ height: 31, paddingLeft: 9, gap: 7, background: "#f3f3f3" }}>
                <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="8" cy="8" r="6.6" fill="#f0a430" /><path d="M8 4.2v5.2m0 0L5.8 7.2M8 9.4l2.2-2.2M5 11.6h6" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {U.title}
                <span className="bz-abs right-0 top-0 grid place-items-center" style={{ width: 46, height: 31, color: "#1a1a1a" }}><svg viewBox="0 0 18 18" width="15" height="15" aria-hidden="true"><path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1" /></svg></span>
            </div>
            <div className="flex">
                <div style={{ padding: 10, flex: "none" }}><BezzleIcon size={48} /></div>
                <div data-upd-body className="relative overflow-hidden" style={{ width: 320 }}>
                    <div data-upd-checking className="bz-abs inset-x-0 top-0" style={{ padding: 10 }}>
                        <p className="leading-[15px]">{U.checking}</p>
                        <div className="wc-bar relative overflow-hidden" style={{ margin: "10px 0", height: 16 }}>
                            <div data-upd-pulse className="bz-abs" style={{ left: 0, top: 1, bottom: 1, width: 72, background: "linear-gradient(90deg, rgb(57 108 35 / 0), #396c23 35%, #396c23 65%, rgb(57 108 35 / 0))", transform: "translateX(-80px)" }} />
                        </div>
                        <div className="flex justify-end" style={{ marginTop: 10 }}><span className="wc-btn">{U.cancel}</span></div>
                    </div>
                    <div data-upd-done className="bz-abs inset-x-0 top-0" style={{ padding: 10, opacity: 0, visibility: "hidden" }}>
                        <div className="leading-[21px]" style={{ fontSize: 16, color: "#003399", marginBottom: 10 }}>{U.upToDate}</div>
                        <p className="leading-[15px]">{U.newest.replace("{v}", v)}</p>
                        <div className="flex justify-end" style={{ marginTop: 10 }}><span data-upd-close className="wc-btn wc-btn-default">{U.close}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ the Bezzle menu */
/**
 * The Bezzle menu as the Windows app opens it from the home tab (Bar.appEntries, MenuHost in
 * Menus.swift): a card of radius 12, lifted, 6 inside, rows 28 tall with a column for the check,
 * the title (13) and its shortcut at the right (12, ink3), washed with ink at 7% under the pointer;
 * hairlines between groups; 260 wide, or as wide as its longest entry needs (MenuHost.fit). About Bezzle first, Check for Updates… after it, as on the Mac.
 */
function WinMenu({ items }) {
    return (
        <div data-wmenu className="bz-abs bz-card" style={{ left: MENU.x, top: MENU.y, minWidth: MENU.w, width: "max-content", maxWidth: 440, padding: 6, borderRadius: 12, opacity: 0, visibility: "hidden", transformOrigin: "20% 0" }}>
            <div data-wmenu-hl className="bz-abs rounded-[7px]" style={{ left: 6, right: 6, top: 6, height: 28, background: "rgb(var(--ink-rgb) / 0.07)", opacity: 0 }} />
            {items.map((m, i) => m === null
                ? <div key={i} style={{ height: 0.5, margin: "4px 8px", background: "var(--hairline)" }} />
                : <div key={i} data-wmi={i} className="relative flex items-center whitespace-nowrap" style={{ height: 28, padding: "0 8px" }}>
                    <span className="grid place-items-center" style={{ width: 12 }}>{m[2] && <Glyph name="check" size={11} />}</span>
                    <span className="text-[13px] flex-1" style={{ marginLeft: 8 }}>{m[0]}</span>
                    {m[1] && <span className="text-[12px]" style={{ marginLeft: 8, color: "var(--ink-3)" }}>{m[1]}</span>}
                </div>)}
        </div>
    );
}

/* ------------------------------------------------------------------ Bezzle's own window */
/** The bar of Bezzle's home on Windows (TabStrip, HomeView.bar, Bar.captionRoom). */
function WinHomeBar({ u, b }) {
    return (
        <div className="bz-abs inset-x-0 top-0" style={{ height: 52 }}>
            <div data-home-tab className="bz-abs bz-card rounded-[9px]" style={{ left: 16, top: 11, width: 72, height: 30 }}>
                <div data-home-tab-on className="bz-abs inset-0 rounded-[9px]" style={{ background: "rgb(var(--ink-rgb) / 0.07)", opacity: 0 }} />
            </div>
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
                        <WinMenu items={L.bezzle} />
                    </div>
                </div>
            </div>
            <WinUpdate U={L.update} v={r.version} />

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
