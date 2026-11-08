/*
 * The download page's words for Bezzle for Windows, in the site's voice (src/words.js): the hero
 * on a PC, the switch between a Mac and a PC, the steps and the version's card. What Windows, Edge,
 * the installer and Bezzle's menu say on the PC in the story is theirs, in src/site/Win.jsx (WIN);
 * the steps name its buttons from WIN_BUTTONS ({keep}, {run_anyway}, {install}, {open}, {check}…),
 * which the screen takes its buttons from too, so they always say what the screen says. The last step
 * is what comes after: updates, as the Mac's. This file is plain words, so the download page's
 * structured data (src/lib/schema.js) and its steps read them without the PC's screen.
 */

/**
 * The buttons the steps tell you to press, as the PC names them: Edge's (Keep, Delete, whose arrow
 * holds Keep anyway, and Open file), SmartScreen's (More info, Run anyway), the installer's (Install, Open Bezzle,
 * Finish) and Bezzle's menu's (Check for Updates…). src/site/Win.jsx draws them with these words.
 */
export const WIN_BUTTONS = {
    en: { keep: "Keep", delete: "Delete", keep_anyway: "Keep anyway", open_file: "Open file", more_info: "More info", run_anyway: "Run anyway", install: "Install", open: "Open Bezzle", finish: "Finish", check: "Check for Updates…" },
    de: { keep: "Behalten", delete: "Löschen", keep_anyway: "Trotzdem behalten", open_file: "Datei öffnen", more_info: "Weitere Informationen", run_anyway: "Trotzdem ausführen", install: "Installieren", open: "Bezzle öffnen", finish: "Fertigstellen", check: "Nach Updates suchen …" },
    fr: { keep: "Conserver", delete: "Supprimer", keep_anyway: "Conserver quand même", open_file: "Ouvrir le fichier", more_info: "Informations complémentaires", run_anyway: "Exécuter quand même", install: "Installer", open: "Ouvrir Bezzle", finish: "Terminer", check: "Rechercher des mises à jour…" },
    it: { keep: "Mantieni", delete: "Elimina", keep_anyway: "Mantieni comunque", open_file: "Apri file", more_info: "Ulteriori informazioni", run_anyway: "Esegui comunque", install: "Installa", open: "Apri Bezzle", finish: "Fine", check: "Verifica aggiornamenti…" },
};
export const WIN_T = {
    en: {
        h: ["On your PC", "in a minute."],
        pill: "Bezzle {v} for Windows",
        facts: "{mb} MB · Windows {os} or later · No administrator needed",
        arm: "For a PC with an Arm processor",
        x64: "For other PCs (x64)",
        pick: "Download for",
        mac: "Mac", win: "Windows",
        version: "Version {v} for Windows",
        soon: "Bezzle for Windows is on its way.",
        soon_win: "Bezzle for Windows is on its way. Until then, this download is for a Mac.",
        story_label: "Installing Bezzle on Windows, step by step",
        steps: [
            ["Open the download", "Your browser lists it at the top right. If Edge says it isn’t commonly downloaded, choose … › {keep}, then the arrow beside {delete} › {keep_anyway}. Then click {open_file}."],
            ["Let Windows run it", "Windows says it protected your PC. Click {more_info}, then {run_anyway}. It asks because Bezzle is not signed with a paid certificate, not because something is wrong with it, and only for the installer you download: updates come from inside Bezzle."],
            ["Install it", "Click {install}. Bezzle is installed for you alone, in your own folder, so Windows asks for no administrator. Leave {open} ticked and click {finish}."],
            ["Open Bezzle", "It opens right away, and from now on you find it in the Start menu. The first time, it may show you around with its welcome tour."],
            ["It keeps itself up to date", "Bezzle looks for a new version each time it opens and once a day. When there is one, it shows you what is new and asks before it installs it. To look right away, click the Bezzle tab and choose {check}"],
        ],
    },
    de: {
        h: ["Auf deinem PC", "in einer Minute."],
        pill: "Bezzle {v} für Windows",
        facts: "{mb} MB · Windows {os} oder neuer · Ohne Administratorrechte",
        arm: "Für einen PC mit Arm-Prozessor",
        x64: "Für andere PCs (x64)",
        pick: "Laden für",
        mac: "Mac", win: "Windows",
        version: "Version {v} für Windows",
        soon: "Bezzle für Windows ist unterwegs.",
        soon_win: "Bezzle für Windows ist unterwegs. Bis dahin ist dieser Download für einen Mac.",
        story_label: "Bezzle auf Windows installieren, Schritt für Schritt",
        steps: [
            ["Download öffnen", "Dein Browser zeigt ihn oben rechts. Sagt Edge, die Datei werde nicht häufig heruntergeladen, wähle … › {keep}, dann den Pfeil neben {delete} › {keep_anyway}. Dann klicke auf {open_file}."],
            ["Windows ausführen lassen", "Windows sagt, es habe deinen Computer geschützt. Klicke auf {more_info}, dann auf {run_anyway}. Es fragt, weil Bezzle nicht mit einem bezahlten Zertifikat signiert ist, nicht weil etwas damit nicht stimmt, und nur beim Installationsprogramm, das du herunterlädst: Updates kommen aus Bezzle selbst."],
            ["Installieren", "Klicke auf {install}. Bezzle wird nur für dich installiert, in deinem eigenen Ordner, darum fragt Windows nach keinem Administrator. Lass {open} angehakt und klicke auf {finish}."],
            ["Bezzle öffnen", "Es öffnet sich gleich, und von nun an findest du es im Startmenü. Beim ersten Mal begrüßt es dich vielleicht mit seinem Willkommensrundgang."],
            ["Es hält sich selbst aktuell", "Bezzle schaut bei jedem Start und einmal am Tag nach einer neuen Version. Gibt es eine, zeigt es dir, was neu ist, und fragt, bevor es sie installiert. Um sofort nachzuschauen, klick auf den Tab Bezzle und wähle {check}"],
        ],
    },
    fr: {
        h: ["Sur ton PC", "en une minute."],
        pill: "Bezzle {v} pour Windows",
        facts: "{mb} Mo · Windows {os} ou ultérieur · Sans droits d’administrateur",
        arm: "Pour un PC avec processeur Arm",
        x64: "Pour les autres PC (x64)",
        pick: "Télécharger pour",
        mac: "Mac", win: "Windows",
        version: "Version {v} pour Windows",
        soon: "Bezzle pour Windows arrive bientôt.",
        soon_win: "Bezzle pour Windows arrive bientôt. D’ici là, ce téléchargement est pour Mac.",
        story_label: "Installer Bezzle sur Windows, étape par étape",
        steps: [
            ["Ouvre le téléchargement", "Ton navigateur l’affiche en haut à droite. Si Edge dit qu’il n’est pas fréquemment téléchargé, choisis … › {keep}, puis la flèche à côté de {delete} › {keep_anyway}. Clique ensuite sur {open_file}."],
            ["Laisse Windows l’exécuter", "Windows dit avoir protégé ton ordinateur. Clique sur {more_info}, puis sur {run_anyway}. Il le demande parce que Bezzle n’est pas signé avec un certificat payant, pas parce que quelque chose ne va pas, et seulement pour le programme d’installation que tu télécharges : les mises à jour arrivent depuis Bezzle."],
            ["Installe-le", "Clique sur {install}. Bezzle s’installe pour toi seul, dans ton propre dossier, donc Windows ne demande aucun administrateur. Laisse {open} coché et clique sur {finish}."],
            ["Ouvre Bezzle", "Il s’ouvre aussitôt, et désormais tu le trouves dans le menu Démarrer. La première fois, il t’accueille peut-être avec sa visite de bienvenue."],
            ["Il se tient à jour tout seul", "Bezzle cherche une nouvelle version à chaque ouverture et une fois par jour. S’il y en a une, il te montre ce qui est nouveau et te demande avant de l’installer. Pour vérifier tout de suite, clique sur l’onglet Bezzle et choisis {check}"],
        ],
    },
    it: {
        h: ["Sul tuo PC", "in un minuto."],
        pill: "Bezzle {v} per Windows",
        facts: "{mb} MB · Windows {os} o successivo · Senza diritti di amministratore",
        arm: "Per un PC con processore Arm",
        x64: "Per gli altri PC (x64)",
        pick: "Scarica per",
        mac: "Mac", win: "Windows",
        version: "Versione {v} per Windows",
        soon: "Bezzle per Windows sta arrivando.",
        soon_win: "Bezzle per Windows sta arrivando. Fino ad allora, questo download è per Mac.",
        story_label: "Installare Bezzle su Windows, passo dopo passo",
        steps: [
            ["Apri il download", "Il browser lo mostra in alto a destra. Se Edge dice che non viene scaricato comunemente, scegli … › {keep}, poi la freccia accanto a {delete} › {keep_anyway}. Poi fai clic su {open_file}."],
            ["Lascia che Windows lo esegua", "Windows dice di aver protetto il PC. Fai clic su {more_info}, poi su {run_anyway}. Lo chiede perché Bezzle non è firmato con un certificato a pagamento, non perché ci sia qualcosa che non va, e solo per il programma di installazione che scarichi: gli aggiornamenti arrivano da Bezzle stesso."],
            ["Installalo", "Fai clic su {install}. Bezzle si installa solo per te, nella tua cartella, quindi Windows non chiede un amministratore. Lascia selezionato {open} e fai clic su {finish}."],
            ["Apri Bezzle", "Si apre subito, e da ora in poi lo trovi nel menu Start. La prima volta può accoglierti con il suo tour di benvenuto."],
            ["Si aggiorna da solo", "Bezzle cerca una nuova versione a ogni avvio e una volta al giorno. Se ce n’è una, ti mostra le novità e chiede prima di installarla. Per controllare subito, fai clic sul pannello Bezzle e scegli {check}"],
        ],
    },
};

/** The steps on a PC in a language, [heading, words], the buttons named as the screen names them (also the download page's structured data, src/lib/schema.js). */
export const winSteps = (code) => WIN_T[code].steps.map(([h, p]) => [h, p.replace(/\{(\w+)\}/g, (m, k) => WIN_BUTTONS[code][k] ?? m)]);
