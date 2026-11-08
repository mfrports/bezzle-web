// Bezzle for Windows in the site's words (src/words.js), in English, German, French and Italian: what
// every page says while it is on its way (SOON), and once its first release is in its feed (OUT, with
// RELEASE_WIN), when the site is for the Mac and for Windows. Each language's function rewrites that
// language's words in place, before any page reads them; the keys and the order of questions are
// words.js's own. The rules of words.js hold: no dashes as punctuation, French with a narrow no-break
// space before ? ! : and ;.
//
// Only what Bezzle for Windows does, from its source (~/Documents/apps/Bezzle/Windows) and the app's
// session: Windows 11, an installer for x64 and for Arm PCs (each native), unsigned, from this website;
// the Bezzle menu hangs from the home tab and has About Bezzle, Check for Updates…, Bring In a Design…
// and Allow AI Control, but no Connect an AI Assistant; it looks for updates as the Mac does, each time
// it opens and once a day, and shows what is new before installing; synced folders work; the AI server
// is the Mac's. Not on Windows yet: Remove Background, so what says it runs on your Mac stays so.
// Where Windows' Smart App Control is on, it runs no app without a paid certificate, Bezzle's
// installer among them: Support says so, after the question about Windows (faq[12], once it is out).
//
// Two keys are new, for what a page shows on a PC beside the Mac's (src/site/ForOs.jsx):
//   cta_download_win  the download button's words on a PC (OUT only)
//   cta_small_win     the facts under it on a PC
//   inv_steps_win     a shared design's page: the steps if it does not open, on a PC
import { RELEASE_WIN } from "@/lib/release";
import { swap } from "@/lib/swap";

const W = RELEASE_WIN;
/** The PCs it runs on: x64, and Arm too when the feed has an installer for it. */
const arm = () => W?.files.some((f) => f.arch === "arm64");

const SOON = {
    en(t) {
        t.inv_steps_win = [["Bezzle for Windows is on its way", "Free from this website, like the Mac’s, once it is out. Then links to designs open in it."], ["Follow it in your browser", "Until then, View in your browser, above, shows the design and everyone’s changes live."]];
        t.cta_small = "Free · No subscription · No account · macOS 26 or later · Windows soon";
        t.cta_small_win = "Free · No account · On the Mac today, on Windows soon";
        t.faq[11][1] = "Bezzle is made for the Mac and runs on macOS 26 or later. Bezzle for Windows is on its way, free from this website like the Mac’s. There is no iPad version. A design shared by link also opens in any browser, to follow it live without a Mac.";
    },
    de(t) {
        t.inv_steps_win = [["Bezzle für Windows ist unterwegs", "Kostenlos von dieser Website wie das für den Mac, sobald es da ist. Dann öffnen sich Links zu Designs darin."], ["Im Browser verfolgen", "Bis dahin zeigt dir „Im Browser ansehen“ oben das Design und die Änderungen aller live."]];
        t.cta_small = "Kostenlos · Kein Abo · Kein Konto · macOS 26 oder neuer · Bald für Windows";
        t.cta_small_win = "Kostenlos · Kein Konto · Heute für den Mac, bald für Windows";
        t.faq[11][1] = "Bezzle ist für den Mac gemacht und läuft ab macOS 26. Bezzle für Windows ist unterwegs, kostenlos von dieser Website wie das für den Mac. Eine Version fürs iPad gibt es nicht. Ein per Link geteiltes Design öffnet sich auch in jedem Browser, um es ohne Mac live zu verfolgen.";
    },
    fr(t) {
        t.inv_steps_win = [["Bezzle pour Windows est en route", "Gratuit sur ce site, comme celui pour Mac, dès sa sortie. Les liens vers des designs s’ouvriront alors dedans."], ["Suis-le dans ton navigateur", "En attendant, Voir dans le navigateur, plus haut, montre le design et les modifications de chacun en direct."]];
        t.cta_small = "Gratuit · Sans abonnement · Sans compte · macOS 26 ou ultérieur · Bientôt sur Windows";
        t.cta_small_win = "Gratuit · Sans compte · Sur Mac aujourd’hui, bientôt sur Windows";
        t.faq[11][1] = "Bezzle est fait pour le Mac et fonctionne avec macOS 26 ou ultérieur. Bezzle pour Windows est en route, gratuit sur ce site comme celui pour Mac. Il n’y a pas de version pour iPad. Un design partagé par lien s’ouvre aussi dans n’importe quel navigateur, pour le suivre en direct sans Mac.";
    },
    it(t) {
        t.inv_steps_win = [["Bezzle per Windows è in arrivo", "Gratis da questo sito, come quello per Mac, appena esce. Allora i link ai design si apriranno lì."], ["Seguilo nel browser", "Nel frattempo, Guarda nel browser, qui sopra, mostra il design e le modifiche di tutti dal vivo."]];
        t.cta_small = "Gratis · Nessun abbonamento · Nessun account · macOS 26 o successivo · Presto su Windows";
        t.cta_small_win = "Gratis · Nessun account · Oggi su Mac, presto su Windows";
        t.faq[11][1] = "Bezzle è fatto per il Mac e funziona con macOS 26 o successivo. Bezzle per Windows è in arrivo, gratis da questo sito come quello per Mac. Non c’è una versione per iPad. Un design condiviso tramite link si apre anche in qualsiasi browser, per seguirlo dal vivo senza un Mac.";
    },
};

const OUT = {
    en(t) {
        t.inv_steps_win = [["Get Bezzle for Windows", "Free from this website. Once it is installed, links to designs open in it."], t.inv_steps_link[1]];
        t.title = "Bezzle: the free design app for Mac and Windows";
        t.desc = "Bezzle is a complete design studio for your Mac or PC, and it is free: apps, websites, social posts and print, with components, prototypes, hand-off, dark mode in one click and live co-editing. No subscription, no account.";
        t.seo.download = ["Download Bezzle: the free design app for Mac and Windows", "Download Bezzle {v} for your Mac ({mb} MB, macOS {os} or later, signed and notarized by Apple) or Bezzle {wv} for your PC ({wmb} MB, Windows {wos}). Free, with every feature included. No subscription and no account."];
        t.seo.support[1] = "Help with Bezzle, the free design app for Mac and Windows: answers on importing Adobe XD, Figma and Sketch files, working together, AI assistants, Remove Background and more, and how to reach us.";
        t.lede = "Bezzle is a complete design studio for your Mac or PC: apps, websites, social posts and print. It opens your Adobe XD, Figma and Sketch files, and it is free. Not a trial, not freemium.";
        t.cta_download_win = "Download for Windows";
        t.cta_small_win = `Free · No subscription · No account · Windows ${W.os}`;
        t.support_sub = "Help with Bezzle, the free design app for Mac and Windows";
        t.faq[1][1] = "Yes. Drop the file on Bezzle, or choose File › Import from XD, Figma or Sketch on the Mac, and Bring In a Design… in the Bezzle menu on Windows. For Figma, first use Save local copy in Figma to get a .fig file. Artboards, layers, text, pictures, gradients and shadows come over; a short report lists anything that could not.";
        t.faq[3][1] = "Click Share… in the design's window, choose Copy Link and send the link however you like. Whoever opens it works on the design with you in Bezzle on their Mac or PC, with no account of any kind. Everyone's changes merge property by property, so nothing is overwritten. Stop Sharing… in the same menu ends it, and the others keep the design as it was, read only.";
        t.faq[4][1] = "Yes. A design kept in OneDrive, Google Drive, Dropbox, iCloud Drive or any folder several computers keep in step can be open on all of them at once, Macs and PCs alike. Each computer writes its changes into files of its own inside the design, so nothing is written over, and you see each other at work.";
        t.faq[5][1] = "On the Mac, choose Bezzle › Connect an AI Assistant › Add to Claude Desktop. Any MCP client can connect to http://127.0.0.1:7412/mcp on the same computer, on the Mac and on Windows. The server only listens on your computer and can be turned off with Allow AI Control in the Bezzle menu.";
        t.faq[6][1] = "Select a layer filled with a photo and choose Subject alone in the inspector, or Object › Remove Background. It runs on your Mac with Apple's Vision framework. The original photo is kept, so you can restore it at any time. Bezzle for Windows does not have it yet.";
        t.faq[8][1] = "Yes. Your designs are files on your computer, and everything works without a connection. Bezzle goes online only to share a design, to bring in a web page you choose and to look for updates. A shared design opens and can be edited offline too, and your changes go out once you are back online.";
        t.faq[9][1] = "No. Bezzle has no account, no analytics, no advertising and no tracking. Your designs stay on your computer, Remove Background runs on your Mac, and a design you share is encrypted before it leaves your computer, with a key only the link holds. The <a href=\"privacy.html\">privacy policy</a> has the details.";
        t.faq_updates[1] = swap(t.faq_updates[1], ["By itself.", "By itself, on the Mac and on Windows."]);
        t.faq[11][1] = `Windows, yes: Bezzle runs on the Mac with macOS 26 or later and on PCs with Windows ${W.os}, both free from this website. There is no iPad version. A design shared by link also opens in any browser, to follow it live without Bezzle.`;
        t.faq[12] = ["Which computers does Bezzle run on?", `Any Mac with macOS 26 or later, and any PC with Windows ${W.os}${arm() ? ", with an Intel, AMD or Arm processor" : ""}.`];
        t.privacy[1][1] = "Designs are files on your computer, in the Bezzle folder in your Documents or wherever you keep them. Pictures you place are copied into the design. Remove Background runs on your Mac; photos are never uploaded. A design you keep in a folder that OneDrive, Google Drive, Dropbox or iCloud Drive keeps in step goes wherever that service takes it, under its own privacy policy.";
        t.privacy[2][1] = swap(t.privacy[2][1], ["while your Mac is off", "while your computer is off"], ["encrypted on your Mac before it leaves", "encrypted on your computer before it leaves"]);
        t.privacy[3][1] = swap(t.privacy[3][1], ["listens only on your Mac", "listens only on your computer"]);
        t.privacy[5][1] = "On the Mac, if you have chosen to share analytics with app developers in macOS's settings, Apple may pass anonymous crash reports on to us. You can change this at any time in System Settings › Privacy & Security › Analytics & Improvements. Bezzle for Windows sends no crash reports; Windows may send its own to Microsoft, as set in Settings › Privacy & security › Diagnostics & feedback.";
        t.inv_sub = "Someone shared a design with you in Bezzle. It opens in Bezzle on your Mac or PC, where you work on it together.";
        t.receipt_sub = "Design studio for Mac and Windows";
        // where Windows' Smart App Control is on, after the question about Windows
        t.faq.splice(12, 0, ["Why doesn’t Windows run Bezzle’s installer on my PC?", "On a PC where Windows’ Smart App Control is on, Windows runs only apps that are signed with a paid certificate. Bezzle is free and not signed with one, so Windows does not run it there, and offers no Run anyway. On other PCs, Windows asks once before the installer runs: choose More info, then Run anyway."]);
    },
    de(t) {
        t.inv_steps_win = [["Bezzle für Windows holen", "Kostenlos auf dieser Website. Ist es installiert, öffnen sich Links zu Designs darin."], t.inv_steps_link[1]];
        t.title = "Bezzle: die kostenlose Design-App für Mac und Windows";
        t.desc = "Bezzle ist ein komplettes Designstudio für deinen Mac oder PC, und es ist kostenlos: Apps, Websites, Social Posts und Print, mit Komponenten, Prototypen, Übergabe an die Entwicklung, Dunkelmodus per Klick und Live-Zusammenarbeit. Kein Abo, kein Konto.";
        t.seo.download = ["Bezzle laden: die kostenlose Design-App für Mac und Windows", "Lade Bezzle {v} für deinen Mac ({mb} MB, macOS {os} oder neuer, signiert und von Apple beglaubigt) oder Bezzle {wv} für deinen PC ({wmb} MB, Windows {wos}). Kostenlos, mit allen Funktionen. Ohne Abo und ohne Konto."];
        t.seo.support[1] = "Hilfe zu Bezzle, der kostenlosen Design-App für Mac und Windows: Antworten zum Import aus Adobe XD, Figma und Sketch, zur gemeinsamen Arbeit, zu KI-Assistenten, zu Hintergrund entfernen und mehr, und wie du uns erreichst.";
        t.lede = "Bezzle ist ein komplettes Designstudio für deinen Mac oder PC: Apps, Websites, Social Posts und Print. Es öffnet deine Dateien aus Adobe XD, Figma und Sketch, und es ist kostenlos. Keine Testversion, kein Freemium.";
        t.cta_download_win = "Für Windows laden";
        t.cta_small_win = `Kostenlos · Kein Abo · Kein Konto · Windows ${W.os}`;
        t.support_sub = "Hilfe zu Bezzle, der kostenlosen Design-App für Mac und Windows";
        t.faq[1][1] = "Ja. Zieh die Datei auf Bezzle, oder wähle auf dem Mac Ablage › Aus XD, Figma oder Sketch importieren und unter Windows Ein Design übernehmen … im Bezzle-Menü. Für Figma sicherst du die Datei zuerst in Figma mit Save local copy als .fig. Zeichenflächen, Ebenen, Texte, Bilder, Verläufe und Schatten kommen mit; ein kurzer Bericht nennt, was nicht übernommen werden konnte.";
        t.faq[3][1] = "Klick im Fenster des Designs auf Teilen …, wähle Link kopieren und schick den Link, wie du willst. Wer ihn öffnet, arbeitet in Bezzle auf seinem Mac oder PC mit dir am Design, ganz ohne Konto. Die Änderungen aller werden Eigenschaft für Eigenschaft zusammengeführt, nichts wird überschrieben. Mit Teilen beenden … im selben Menü ist Schluss, und die anderen behalten das Design, wie es war, nur zum Ansehen.";
        t.faq[4][1] = "Ja. Ein Design in OneDrive, Google Drive, Dropbox, iCloud Drive oder einem anderen Ordner, den mehrere Computer abgleichen, kann auf allen zugleich offen sein, auf Macs wie auf PCs. Jeder Computer schreibt seine Änderungen in eigene Dateien im Design, nichts wird überschrieben, und ihr seht einander bei der Arbeit.";
        t.faq[5][1] = "Auf dem Mac wählst du Bezzle › KI-Assistenten verbinden › Zu Claude Desktop hinzufügen. Jeder MCP-Client verbindet sich auf demselben Computer mit http://127.0.0.1:7412/mcp, auf dem Mac wie unter Windows. Der Server ist nur auf deinem Computer erreichbar und lässt sich mit KI-Steuerung erlauben im Bezzle-Menü ausschalten.";
        t.faq[6][1] = "Wähle eine Ebene mit einem Foto und im Inspektor Nur Motiv, oder Objekt › Hintergrund entfernen. Das geschieht auf deinem Mac mit Apples Vision-Framework. Das Originalfoto bleibt erhalten und lässt sich jederzeit wiederherstellen. Bezzle für Windows kann das noch nicht.";
        t.faq[8][1] = "Ja. Deine Designs sind Dateien auf deinem Computer, und alles funktioniert ohne Verbindung. Ins Internet geht Bezzle nur, um ein Design zu teilen, eine Website hereinzuholen, die du wählst, und nach Updates zu sehen. Auch ein geteiltes Design öffnet sich offline und lässt sich bearbeiten, und deine Änderungen gehen raus, sobald du wieder online bist.";
        t.faq[9][1] = "Nein. Bezzle hat kein Konto, keine Analyse, keine Werbung und kein Tracking. Deine Designs bleiben auf deinem Computer, Hintergrund entfernen läuft auf deinem Mac, und ein geteiltes Design wird verschlüsselt, bevor es deinen Computer verlässt, mit einem Schlüssel, den nur der Link enthält. Mehr steht in der <a href=\"privacy.html\">Datenschutzerklärung</a>.";
        t.faq_updates[1] = swap(t.faq_updates[1], ["Von selbst.", "Von selbst, auf dem Mac und unter Windows."]);
        t.faq[11][1] = `Für Windows ja: Bezzle läuft auf dem Mac ab macOS 26 und auf PCs mit Windows ${W.os}, beides kostenlos von dieser Website. Eine Version fürs iPad gibt es nicht. Ein per Link geteiltes Design öffnet sich auch in jedem Browser, um es ohne Bezzle live zu verfolgen.`;
        t.faq[12] = ["Auf welchen Computern läuft Bezzle?", `Auf jedem Mac mit macOS 26 oder neuer und auf jedem PC mit Windows ${W.os}${arm() ? ", mit einem Prozessor von Intel, AMD oder Arm" : ""}.`];
        t.privacy[1][1] = "Designs sind Dateien auf deinem Computer, im Ordner Bezzle in deinen Dokumenten oder wo immer du sie ablegst. Platzierte Bilder werden in das Design kopiert. Hintergrund entfernen läuft auf deinem Mac; Fotos werden nie hochgeladen. Ein Design in einem Ordner, den OneDrive, Google Drive, Dropbox oder iCloud Drive abgleicht, geht dorthin, wohin dieser Dienst es bringt, und dafür gilt dessen Datenschutzrichtlinie.";
        t.privacy[2][1] = swap(t.privacy[2][1], ["auch wenn dein Mac aus ist", "auch wenn dein Computer aus ist"], ["auf deinem Mac verschlüsselt", "auf deinem Computer verschlüsselt"]);
        t.privacy[3][1] = swap(t.privacy[3][1], ["nur auf deinem Mac (127.0.0.1)", "nur auf deinem Computer (127.0.0.1)"]);
        t.privacy[5][1] = "Wenn du auf dem Mac in den macOS-Einstellungen zugestimmt hast, Analysedaten mit App-Entwicklern zu teilen, kann Apple uns anonyme Absturzberichte weitergeben. Das kannst du jederzeit unter Systemeinstellungen › Datenschutz & Sicherheit › Analyse & Verbesserungen ändern. Bezzle für Windows sendet keine Absturzberichte; Windows kann eigene an Microsoft senden, wie unter Einstellungen › Datenschutz und Sicherheit › Diagnose und Feedback eingestellt.";
        t.inv_sub = "Jemand hat ein Design in Bezzle mit dir geteilt. Es öffnet sich in Bezzle auf deinem Mac oder PC, und ihr arbeitet gemeinsam daran.";
        t.receipt_sub = "Designstudio für Mac und Windows";
        // where Windows' Smart App Control is on, after the question about Windows
        t.faq.splice(12, 0, ["Warum führt Windows das Installationsprogramm von Bezzle auf meinem PC nicht aus?", "Auf einem PC, auf dem die Intelligente App-Steuerung von Windows eingeschaltet ist, führt Windows nur Apps aus, die mit einem bezahlten Zertifikat signiert sind. Bezzle ist kostenlos und nicht so signiert, darum führt Windows es dort nicht aus, und Trotzdem ausführen gibt es dort nicht. Auf anderen PCs fragt Windows einmal nach, bevor das Installationsprogramm startet: Wähle Weitere Informationen, dann Trotzdem ausführen."]);
    },
    fr(t) {
        t.inv_steps_win = [["Installe Bezzle pour Windows", "Gratuit sur ce site. Une fois installé, les liens vers des designs s’ouvrent dedans."], t.inv_steps_link[1]];
        t.title = "Bezzle : l’app de design gratuite pour Mac et Windows";
        t.desc = "Bezzle est un studio de design complet pour ton Mac ou ton PC, et il est gratuit : apps, sites web, posts et print, avec composants, prototypes, inspection, mode sombre en un clic et création à plusieurs en direct. Sans abonnement, sans compte.";
        t.seo.download = ["Télécharger Bezzle : l’app de design gratuite pour Mac et Windows", "Télécharge Bezzle {v} pour ton Mac ({mb} Mo, macOS {os} ou ultérieur, signé et notarié par Apple) ou Bezzle {wv} pour ton PC ({wmb} Mo, Windows {wos}). Gratuit, avec toutes les fonctions. Sans abonnement ni compte."];
        t.seo.support[1] = "De l’aide pour Bezzle, l’app de design gratuite pour Mac et Windows : des réponses sur l’import de fichiers Adobe XD, Figma et Sketch, le travail à plusieurs, les assistants IA, la suppression de l’arrière-plan et plus encore, et comment nous écrire.";
        t.lede = "Bezzle est un studio de design complet pour ton Mac ou ton PC : apps, sites web, posts pour les réseaux et print. Il ouvre tes fichiers Adobe XD, Figma et Sketch, et il est gratuit. Ni version d’essai ni freemium.";
        t.cta_download_win = "Télécharger pour Windows";
        t.cta_small_win = `Gratuit · Sans abonnement · Sans compte · Windows ${W.os}`;
        t.support_sub = "De l’aide pour Bezzle, l’app de design gratuite pour Mac et Windows";
        t.faq[1][1] = "Oui. Dépose le fichier sur Bezzle, ou choisis Fichier › Importer depuis XD, Figma ou Sketch sur Mac, et Importer un design… dans le menu Bezzle sous Windows. Pour Figma, utilise d’abord Save local copy dans Figma pour obtenir un fichier .fig. Plans de travail, calques, textes, images, dégradés et ombres sont repris ; un court rapport liste ce qui n’a pas pu l’être.";
        t.faq[3][1] = "Clique sur Partager… dans la fenêtre du design, choisis Copier le lien et envoie le lien comme tu veux. La personne qui l’ouvre travaille avec toi sur le design dans Bezzle sur son Mac ou son PC, sans aucun compte. Les modifications de chacun se fusionnent propriété par propriété, rien n’est écrasé. Arrêter le partage… dans le même menu y met fin, et les autres gardent le design tel qu’il était, en lecture seule.";
        t.faq[4][1] = "Oui. Un design gardé dans OneDrive, Google Drive, Dropbox, iCloud Drive ou tout dossier que plusieurs ordinateurs synchronisent peut être ouvert sur tous à la fois, Mac comme PC. Chaque ordinateur écrit ses modifications dans ses propres fichiers à l’intérieur du design, rien n’est écrasé, et vous vous voyez travailler.";
        t.faq[5][1] = "Sur Mac, choisis Bezzle › Connecter un assistant IA › Ajouter à Claude Desktop. Tout client MCP se connecte à http://127.0.0.1:7412/mcp sur le même ordinateur, sur Mac comme sous Windows. Le serveur n’écoute que sur ton ordinateur et se désactive avec Autoriser le contrôle par IA dans le menu Bezzle.";
        t.faq[6][1] = "Sélectionne un calque rempli d’une photo et choisis Sujet seul dans l’inspecteur, ou Objet › Supprimer l’arrière-plan. Tout se fait sur ton Mac avec le framework Vision d’Apple. La photo d’origine est conservée et peut être rétablie à tout moment. Bezzle pour Windows ne le fait pas encore.";
        t.faq[8][1] = "Oui. Tes designs sont des fichiers sur ton ordinateur, et tout fonctionne sans connexion. Bezzle ne va en ligne que pour partager un design, importer une page web que tu choisis et chercher les mises à jour. Un design partagé s’ouvre et se modifie aussi hors ligne, et tes modifications partent dès que tu es de nouveau en ligne.";
        t.faq[9][1] = "Non. Bezzle n’a ni compte, ni statistiques, ni publicité, ni pistage. Tes designs restent sur ton ordinateur, la suppression de l’arrière-plan se fait sur ton Mac, et un design que tu partages est chiffré avant de quitter ton ordinateur, avec une clé que seul le lien contient. La <a href=\"privacy.html\">politique de confidentialité</a> donne les détails.";
        t.faq_updates[1] = swap(t.faq_updates[1], ["Tout seul.", "Tout seul, sur Mac comme sous Windows."]);
        t.faq[11][1] = `Pour Windows, oui : Bezzle fonctionne sur Mac avec macOS 26 ou ultérieur et sur les PC avec Windows ${W.os}, tous deux gratuits sur ce site. Il n’y a pas de version pour iPad. Un design partagé par lien s’ouvre aussi dans n’importe quel navigateur, pour le suivre en direct sans Bezzle.`;
        t.faq[12] = ["Sur quels ordinateurs Bezzle fonctionne-t-il ?", `Sur tout Mac avec macOS 26 ou ultérieur, et sur tout PC avec Windows ${W.os}${arm() ? ", avec un processeur Intel, AMD ou Arm" : ""}.`];
        t.privacy[1][1] = "Les designs sont des fichiers sur ton ordinateur, dans le dossier Bezzle de tes Documents ou là où tu les ranges. Les images placées sont copiées dans le design. La suppression de l’arrière-plan se fait sur ton Mac ; les photos ne sont jamais envoyées. Un design gardé dans un dossier que OneDrive, Google Drive, Dropbox ou iCloud Drive synchronise va là où ce service l’emmène, selon sa propre politique de confidentialité.";
        t.privacy[2][1] = swap(t.privacy[2][1], ["même quand ton Mac est éteint", "même quand ton ordinateur est éteint"], ["chiffré sur ton Mac avant de le quitter", "chiffré sur ton ordinateur avant de le quitter"]);
        t.privacy[3][1] = swap(t.privacy[3][1], ["n’écoute que sur ton Mac (127.0.0.1)", "n’écoute que sur ton ordinateur (127.0.0.1)"]);
        t.privacy[5][1] = "Sur Mac, si tu as choisi de partager les données d’analyse avec les développeurs dans les réglages de macOS, Apple peut nous transmettre des rapports de plantage anonymes. Tu peux changer cela à tout moment dans Réglages Système › Confidentialité et sécurité › Analyse et améliorations. Bezzle pour Windows n’envoie aucun rapport de plantage ; Windows peut envoyer les siens à Microsoft, selon Paramètres › Confidentialité et sécurité › Diagnostics et commentaires.";
        t.inv_sub = "Quelqu’un a partagé un design avec toi dans Bezzle. Il s’ouvre dans Bezzle sur ton Mac ou ton PC, où vous y travaillez ensemble.";
        t.receipt_sub = "Studio de design pour Mac et Windows";
        // where Windows' Smart App Control is on, after the question about Windows
        t.faq.splice(12, 0, ["Pourquoi Windows n’exécute-t-il pas le programme d’installation de Bezzle sur mon PC ?", "Sur un PC où le Contrôle intelligent des applications de Windows est activé, Windows n’exécute que les apps signées avec un certificat payant. Bezzle est gratuit et n’est pas signé ainsi, donc Windows ne l’y exécute pas, et Exécuter quand même n’y est pas proposé. Sur les autres PC, Windows pose la question une fois avant le programme d’installation : choisis Informations complémentaires, puis Exécuter quand même."]);
    },
    it(t) {
        t.inv_steps_win = [["Scarica Bezzle per Windows", "Gratis su questo sito. Una volta installato, i link ai design si aprono lì."], t.inv_steps_link[1]];
        t.title = "Bezzle: l’app di design gratuita per Mac e Windows";
        t.desc = "Bezzle è uno studio di design completo per il tuo Mac o PC, ed è gratis: app, siti web, post social e stampa, con componenti, prototipi, hand-off, modalità scura con un clic e lavoro di squadra dal vivo. Niente abbonamento, niente account.";
        t.seo.download = ["Scarica Bezzle: l’app di design gratuita per Mac e Windows", "Scarica Bezzle {v} per il tuo Mac ({mb} MB, macOS {os} o successivo, firmato e autenticato da Apple) o Bezzle {wv} per il tuo PC ({wmb} MB, Windows {wos}). Gratis, con tutte le funzioni. Senza abbonamento e senza account."];
        t.seo.support[1] = "Aiuto per Bezzle, l’app di design gratuita per Mac e Windows: risposte sull’importazione di file Adobe XD, Figma e Sketch, sul lavoro insieme, sugli assistenti IA, su Rimuovi sfondo e altro, e come scriverci.";
        t.lede = "Bezzle è uno studio di design completo per il tuo Mac o PC: app, siti web, post social e stampa. Apre i tuoi file Adobe XD, Figma e Sketch, ed è gratis. Non è una prova né un freemium.";
        t.cta_download_win = "Scarica per Windows";
        t.cta_small_win = `Gratis · Nessun abbonamento · Nessun account · Windows ${W.os}`;
        t.support_sub = "Aiuto per Bezzle, l’app di design gratuita per Mac e Windows";
        t.faq[1][1] = "Sì. Trascina il file su Bezzle, oppure scegli Archivio › Importa da XD, Figma o Sketch sul Mac, e Importa un design… nel menu Bezzle su Windows. Per Figma, usa prima Save local copy in Figma per ottenere un file .fig. Tavole, livelli, testi, immagini, sfumature e ombre vengono importati; un breve resoconto elenca ciò che non è stato possibile.";
        t.faq[3][1] = "Fai clic su Condividi… nella finestra del design, scegli Copia link e invia il link come preferisci. Chi lo apre lavora con te al design in Bezzle sul suo Mac o PC, senza alcun account. Le modifiche di tutti si uniscono proprietà per proprietà, niente viene sovrascritto. Interrompi condivisione… nello stesso menu la chiude, e gli altri tengono il design com’era, in sola lettura.";
        t.faq[4][1] = "Sì. Un design tenuto in OneDrive, Google Drive, Dropbox, iCloud Drive o in qualsiasi cartella che più computer sincronizzano può essere aperto su tutti nello stesso momento, Mac e PC. Ogni computer scrive le sue modifiche in file propri dentro il design, niente viene sovrascritto, e vi vedete lavorare.";
        t.faq[5][1] = "Sul Mac, scegli Bezzle › Collega un assistente IA › Aggiungi a Claude Desktop. Qualsiasi client MCP si collega a http://127.0.0.1:7412/mcp sullo stesso computer, sul Mac come su Windows. Il server ascolta solo sul tuo computer e si può disattivare con Consenti controllo IA nel menu Bezzle.";
        t.faq[6][1] = "Seleziona un livello riempito con una foto e scegli Solo soggetto nell’ispettore, oppure Oggetto › Rimuovi sfondo. Avviene sul tuo Mac con il framework Vision di Apple. La foto originale resta e puoi ripristinarla in qualsiasi momento. Bezzle per Windows non lo fa ancora.";
        t.faq[8][1] = "Sì. I tuoi design sono file sul tuo computer, e tutto funziona senza connessione. Bezzle va online solo per condividere un design, importare una pagina web che scegli e cercare gli aggiornamenti. Anche un design condiviso si apre e si modifica offline, e le tue modifiche partono appena torni online.";
        t.faq[9][1] = "No. Bezzle non ha account, statistiche, pubblicità né tracciamento. I tuoi design restano sul tuo computer, Rimuovi sfondo funziona sul tuo Mac, e un design che condividi viene cifrato prima di lasciare il tuo computer, con una chiave che ha solo il link. L’<a href=\"privacy.html\">informativa sulla privacy</a> spiega i dettagli.";
        t.faq_updates[1] = swap(t.faq_updates[1], ["Da solo.", "Da solo, sul Mac e su Windows."]);
        t.faq[11][1] = `Per Windows sì: Bezzle funziona sul Mac con macOS 26 o successivo e sui PC con Windows ${W.os}, entrambi gratis da questo sito. Non c’è una versione per iPad. Un design condiviso tramite link si apre anche in qualsiasi browser, per seguirlo dal vivo senza Bezzle.`;
        t.faq[12] = ["Su quali computer funziona Bezzle?", `Su qualsiasi Mac con macOS 26 o successivo, e su qualsiasi PC con Windows ${W.os}${arm() ? ", con un processore Intel, AMD o Arm" : ""}.`];
        t.privacy[1][1] = "I design sono file sul tuo computer, nella cartella Bezzle dei tuoi Documenti o dove li tieni. Le immagini inserite vengono copiate nel design. Rimuovi sfondo funziona sul tuo Mac; le foto non vengono mai caricate. Un design tenuto in una cartella che OneDrive, Google Drive, Dropbox o iCloud Drive sincronizza va dove lo porta quel servizio, secondo la sua informativa sulla privacy.";
        t.privacy[2][1] = swap(t.privacy[2][1], ["anche quando il tuo Mac è spento", "anche quando il tuo computer è spento"], ["cifrato sul tuo Mac prima di lasciarlo", "cifrato sul tuo computer prima di lasciarlo"]);
        t.privacy[3][1] = swap(t.privacy[3][1], ["ascolta solo sul tuo Mac (127.0.0.1)", "ascolta solo sul tuo computer (127.0.0.1)"]);
        t.privacy[5][1] = "Sul Mac, se nelle impostazioni di macOS hai scelto di condividere le analisi con gli sviluppatori, Apple può inoltrarci rapporti anonimi sugli arresti anomali. Puoi cambiarlo in qualsiasi momento in Impostazioni di Sistema › Privacy e sicurezza › Analisi e miglioramenti. Bezzle per Windows non invia rapporti sugli arresti anomali; Windows può inviare i propri a Microsoft, come impostato in Impostazioni › Privacy e sicurezza › Diagnostica e feedback.";
        t.inv_sub = "Qualcuno ha condiviso con te un design in Bezzle. Si apre in Bezzle sul tuo Mac o PC, dove ci lavorate insieme.";
        t.receipt_sub = "Studio di design per Mac e Windows";
        // where Windows' Smart App Control is on, after the question about Windows
        t.faq.splice(12, 0, ["Perché Windows non esegue il programma di installazione di Bezzle sul mio PC?", "Su un PC in cui il Controllo intelligente delle app di Windows è attivo, Windows esegue solo le app firmate con un certificato a pagamento. Bezzle è gratis e non è firmato così, quindi lì Windows non lo esegue, e Esegui comunque non c’è. Sugli altri PC, Windows chiede una volta prima del programma di installazione: scegli Ulteriori informazioni, poi Esegui comunque."]);
    },
};

/** Rewrites T in place: Bezzle for Windows on its way, or out. */
export function forWindows(T) {
    const words = W ? OUT : SOON;
    for (const code of Object.keys(words)) words[code](T[code]);
}
