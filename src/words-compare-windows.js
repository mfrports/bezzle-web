// Bezzle for Windows on the pages for people coming from another design app (src/words-compare.js), in
// English, German, French and Italian: while it is on its way (SOON), and once it is out (OUT, with
// RELEASE_WIN), as src/words-windows.js does for the rest of the site, and with its rules. Every language
// keeps the same rows, items and questions in the same order: when Bezzle runs on Windows, "you design on
// Windows" stops being a reason to keep XD, and goes from every language's list. Remove Background is
// on both computers once Windows is out, so its row says "on your computer".
import { RELEASE_WIN } from "@/lib/release";
import { swap } from "@/lib/swap";

const os = RELEASE_WIN?.os;

const SOON = {
    en(v) {
        for (const k of ["xd", "figma", "sketch"]) { const r = v[k].rows.find(([w]) => w === "Runs on"); r[1] = "Mac, with macOS 26 or later; Windows soon"; }
        v.xd.better[0] = "You design on Windows, until Bezzle for Windows is out";
        v.figma.better[0] = "You or your team work on Linux or in a browser, or on Windows until Bezzle for Windows is out";
        v.figma.faq[4][1] = "Not yet. Bezzle is made for the Mac and needs macOS 26 or later, and Bezzle for Windows is on its way. A design shared by link opens in any browser to be followed live, but designing happens in the app.";
    },
    de(v) {
        for (const k of ["xd", "figma", "sketch"]) { const r = v[k].rows.find(([w]) => w === "Läuft auf"); r[1] = "Mac, mit macOS 26 oder neuer; bald Windows"; }
        v.xd.better[0] = "Du gestaltest unter Windows, bis Bezzle für Windows da ist";
        v.figma.better[0] = "Du oder dein Team arbeitet unter Linux oder im Browser, oder unter Windows, bis Bezzle für Windows da ist";
        v.figma.faq[4][1] = "Noch nicht. Bezzle ist für den Mac gemacht und braucht macOS 26 oder neuer, und Bezzle für Windows ist unterwegs. Ein per Link geteiltes Design öffnet sich in jedem Browser, um es live zu verfolgen, gestaltet wird aber in der App.";
    },
    fr(v) {
        for (const k of ["xd", "figma", "sketch"]) { const r = v[k].rows.find(([w]) => w === "Fonctionne sur"); r[1] = "Mac, avec macOS 26 ou ultérieur ; bientôt Windows"; }
        v.xd.better[0] = "Tu dessines sous Windows, en attendant Bezzle pour Windows";
        v.figma.better[0] = "Toi ou ton équipe travaillez sous Linux ou dans un navigateur, ou sous Windows en attendant Bezzle pour Windows";
        v.figma.faq[4][1] = "Pas encore. Bezzle est fait pour le Mac et demande macOS 26 ou ultérieur, et Bezzle pour Windows est en route. Un design partagé par lien s’ouvre dans n’importe quel navigateur pour être suivi en direct, mais on dessine dans l’app.";
    },
    it(v) {
        for (const k of ["xd", "figma", "sketch"]) { const r = v[k].rows.find(([w]) => w === "Funziona su"); r[1] = "Mac, con macOS 26 o successivo; presto Windows"; }
        v.xd.better[0] = "Progetti su Windows, finché non arriva Bezzle per Windows";
        v.figma.better[0] = "Tu o il tuo team lavorate su Linux o in un browser, o su Windows finché non arriva Bezzle per Windows";
        v.figma.faq[4][1] = "Non ancora. Bezzle è fatto per il Mac e richiede macOS 26 o successivo, e Bezzle per Windows è in arrivo. Un design condiviso tramite link si apre in qualsiasi browser per seguirlo dal vivo, ma si progetta nell’app.";
    },
};

const OUT = {
    en(v) {
        for (const k of ["xd", "figma", "sketch"]) v[k].bring[1] = swap(v[k].bring[1], ["(⇧⌘I), or drop", "(⇧⌘I) on the Mac, or Bring In a Design… (Ctrl+Shift+I) in the Bezzle menu on Windows, or drop"]);
        v.common.get[1] = `Free from this website, for any Mac with macOS 26 or later and any PC with Windows ${os}. There is no account to make.`;
        for (const k of ["xd", "figma", "sketch"]) v[k].rows.find(([w]) => w === "Runs on")[1] = `Mac with macOS 26 or later, and Windows ${os}`;
        v.xd.lede = swap(v.xd.lede, ["Free, on your Mac.", "Free, on your Mac or PC."]);
        v.xd.better.splice(0, 1);
        { const r = v.xd.rows.find(([w]) => w === "Remove background"); r[1] = swap(r[1], ["One click, on your Mac", "One click, on your computer"]); }
        v.xd.faq[2][1] = swap(v.xd.faq[2][1], ["on your Mac", "on your computer"]);
        v.figma.lede = swap(v.figma.lede, ["in an app made for the Mac", "in an app for the Mac and Windows"], ["Your designs are files on your Mac", "Your designs are files on your computer"]);
        v.figma.rows[2][1] = "Files on your computer, or in a folder OneDrive, Google Drive, Dropbox or iCloud Drive keeps in step";
        v.figma.better[0] = "You or your team work on Linux or in a browser";
        v.figma.faq[2][1] = swap(v.figma.faq[2][1], ["in Bezzle on their Mac,", "in Bezzle on their Mac or PC,"]);
        v.figma.faq[4][1] = `On Windows, yes: Bezzle for Windows runs on PCs with Windows ${os}, as Bezzle runs on Macs with macOS 26 or later. In a browser, a design shared by link opens to be followed live, but designing happens in the app.`;
        v.sketch.lede = swap(v.sketch.lede, ["Bezzle is a design app made for the Mac, as Sketch is, and it is free.", "Bezzle is a design app made for the Mac, as Sketch is, that runs on Windows too, and it is free."]);
        v.sketch.faq[2][1] += ` Bezzle for Windows is a native app too, for PCs with Windows ${os}.`;
        v.sketch.faq[3][1] = swap(v.sketch.faq[3][1], ["in Bezzle on their Mac,", "in Bezzle on their Mac or PC,"]);
    },
    de(v) {
        for (const k of ["xd", "figma", "sketch"]) v[k].bring[1] = swap(v[k].bring[1], ["(⇧⌘I) oder zieh", "(⇧⌘I) auf dem Mac, Ein Design übernehmen … (Ctrl+Shift+I) im Bezzle-Menü unter Windows, oder zieh"]);
        v.common.get[1] = `Kostenlos von dieser Website, für jeden Mac mit macOS 26 oder neuer und jeden PC mit Windows ${os}. Ein Konto brauchst du nicht.`;
        for (const k of ["xd", "figma", "sketch"]) v[k].rows.find(([w]) => w === "Läuft auf")[1] = `Mac mit macOS 26 oder neuer, und Windows ${os}`;
        v.xd.lede = swap(v.xd.lede, ["Kostenlos, auf deinem Mac.", "Kostenlos, auf deinem Mac oder PC."]);
        v.xd.better.splice(0, 1);
        { const r = v.xd.rows.find(([w]) => w === "Hintergrund entfernen"); r[1] = swap(r[1], ["Ein Klick, auf deinem Mac", "Ein Klick, auf deinem Computer"]); }
        v.xd.faq[2][1] = swap(v.xd.faq[2][1], ["auf deinem Mac", "auf deinem Computer"]);
        v.figma.lede = swap(v.figma.lede, ["in einer App, die für den Mac gemacht ist", "in einer App für Mac und Windows"], ["Deine Designs sind Dateien auf deinem Mac", "Deine Designs sind Dateien auf deinem Computer"]);
        v.figma.rows[2][1] = "Dateien auf deinem Computer oder in einem Ordner, den OneDrive, Google Drive, Dropbox oder iCloud Drive abgleicht";
        v.figma.better[0] = "Du oder dein Team arbeitet unter Linux oder im Browser";
        v.figma.faq[2][1] = swap(v.figma.faq[2][1], ["in Bezzle auf seinem Mac live", "in Bezzle auf seinem Mac oder PC live"]);
        v.figma.faq[4][1] = `Unter Windows ja: Bezzle für Windows läuft auf PCs mit Windows ${os}, wie Bezzle auf Macs mit macOS 26 oder neuer. Im Browser öffnet sich ein per Link geteiltes Design, um es live zu verfolgen, gestaltet wird aber in der App.`;
        v.sketch.lede = swap(v.sketch.lede, ["Bezzle ist eine Design-App, die für den Mac gemacht ist, wie Sketch, und sie ist kostenlos.", "Bezzle ist eine Design-App, die für den Mac gemacht ist, wie Sketch, die auch unter Windows läuft, und sie ist kostenlos."]);
        v.sketch.faq[2][1] += ` Bezzle für Windows ist ebenfalls eine native App, für PCs mit Windows ${os}.`;
        v.sketch.faq[3][1] = swap(v.sketch.faq[3][1], ["in Bezzle auf seinem Mac live", "in Bezzle auf seinem Mac oder PC live"]);
    },
    fr(v) {
        for (const k of ["xd", "figma", "sketch"]) v[k].bring[1] = swap(v[k].bring[1], ["(⇧⌘I), ou dépose", "(⇧⌘I) sur Mac, ou Importer un design… (Ctrl+Shift+I) dans le menu Bezzle sous Windows, ou dépose"]);
        v.common.get[1] = `Gratuit depuis ce site, pour tout Mac avec macOS 26 ou ultérieur et tout PC avec Windows ${os}. Aucun compte à créer.`;
        for (const k of ["xd", "figma", "sketch"]) v[k].rows.find(([w]) => w === "Fonctionne sur")[1] = `Mac avec macOS 26 ou ultérieur, et Windows ${os}`;
        v.xd.lede = swap(v.xd.lede, ["Gratuit, sur ton Mac.", "Gratuit, sur ton Mac ou ton PC."]);
        v.xd.better.splice(0, 1);
        { const r = v.xd.rows.find(([w]) => w === "Supprimer l’arrière-plan"); r[1] = swap(r[1], ["Un clic, sur ton Mac", "Un clic, sur ton ordinateur"]); }
        v.xd.faq[2][1] = swap(v.xd.faq[2][1], ["les fichiers .xd de ton Mac", "les fichiers .xd de ton ordinateur"]);
        v.figma.lede = swap(v.figma.lede, ["dans une app faite pour le Mac", "dans une app pour Mac et Windows"], ["Tes designs sont des fichiers sur ton Mac", "Tes designs sont des fichiers sur ton ordinateur"]);
        v.figma.rows[2][1] = "Des fichiers sur ton ordinateur, ou dans un dossier que OneDrive, Google Drive, Dropbox ou iCloud Drive synchronise";
        v.figma.better[0] = "Toi ou ton équipe travaillez sous Linux ou dans un navigateur";
        v.figma.faq[2][1] = swap(v.figma.faq[2][1], ["dans Bezzle sur son Mac,", "dans Bezzle sur son Mac ou son PC,"]);
        v.figma.faq[4][1] = `Sous Windows, oui : Bezzle pour Windows fonctionne sur les PC avec Windows ${os}, comme Bezzle sur les Mac avec macOS 26 ou ultérieur. Dans un navigateur, un design partagé par lien s’ouvre pour être suivi en direct, mais on dessine dans l’app.`;
        v.sketch.lede = swap(v.sketch.lede, ["Bezzle est une app de design faite pour le Mac, comme Sketch, et elle est gratuite.", "Bezzle est une app de design faite pour le Mac, comme Sketch, qui fonctionne aussi sous Windows, et elle est gratuite."]);
        v.sketch.faq[2][1] += ` Bezzle pour Windows est lui aussi une app native, pour les PC avec Windows ${os}.`;
        v.sketch.faq[3][1] = swap(v.sketch.faq[3][1], ["dans Bezzle sur son Mac,", "dans Bezzle sur son Mac ou son PC,"]);
    },
    it(v) {
        for (const k of ["xd", "figma", "sketch"]) v[k].bring[1] = swap(v[k].bring[1], ["(⇧⌘I), o trascina", "(⇧⌘I) sul Mac, o Importa un design… (Ctrl+Shift+I) nel menu Bezzle su Windows, o trascina"]);
        v.common.get[1] = `Gratis da questo sito, per qualsiasi Mac con macOS 26 o successivo e qualsiasi PC con Windows ${os}. Nessun account da creare.`;
        for (const k of ["xd", "figma", "sketch"]) v[k].rows.find(([w]) => w === "Funziona su")[1] = `Mac con macOS 26 o successivo, e Windows ${os}`;
        v.xd.lede = swap(v.xd.lede, ["Gratis, sul tuo Mac.", "Gratis, sul tuo Mac o PC."]);
        v.xd.better.splice(0, 1);
        { const r = v.xd.rows.find(([w]) => w === "Rimuovi sfondo"); r[1] = swap(r[1], ["Un clic, sul tuo Mac", "Un clic, sul tuo computer"]); }
        v.xd.faq[2][1] = swap(v.xd.faq[2][1], ["sul tuo Mac", "sul tuo computer"]);
        v.figma.lede = swap(v.figma.lede, ["in un’app fatta per il Mac", "in un’app per Mac e Windows"], ["I tuoi design sono file sul tuo Mac", "I tuoi design sono file sul tuo computer"]);
        v.figma.rows[2][1] = "File sul tuo computer, o in una cartella che OneDrive, Google Drive, Dropbox o iCloud Drive sincronizza";
        v.figma.better[0] = "Tu o il tuo team lavorate su Linux o in un browser";
        v.figma.faq[2][1] = swap(v.figma.faq[2][1], ["in Bezzle sul suo Mac,", "in Bezzle sul suo Mac o PC,"]);
        v.figma.faq[4][1] = `Su Windows sì: Bezzle per Windows funziona sui PC con Windows ${os}, come Bezzle sui Mac con macOS 26 o successivo. In un browser, un design condiviso tramite link si apre per seguirlo dal vivo, ma si progetta nell’app.`;
        v.sketch.lede = swap(v.sketch.lede, ["Bezzle è un’app di design fatta per il Mac, come Sketch, ed è gratis.", "Bezzle è un’app di design fatta per il Mac, come Sketch, che funziona anche su Windows, ed è gratis."]);
        v.sketch.faq[2][1] += ` Anche Bezzle per Windows è un’app nativa, per i PC con Windows ${os}.`;
        v.sketch.faq[3][1] = swap(v.sketch.faq[3][1], ["in Bezzle sul suo Mac,", "in Bezzle sul suo Mac o PC,"]);
    },
};

/** Rewrites VS in place: Bezzle for Windows on its way, or out. */
export function compareForWindows(VS) {
    const words = RELEASE_WIN ? OUT : SOON;
    for (const code of Object.keys(words)) words[code](VS[code]);
}
