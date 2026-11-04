#!/usr/bin/env python3
"""Bezzle's website (mfrports.github.io/bezzle-web): the home page, Support and Privacy, in English,
German, French and Italian, and once Bezzle is released on the website, its Download and What's New
pages. Writes everything to dist/: the pages, style.css, and public/ as it is (the pictures, and the
update feed updates/appcast.xml).

Usage: python3 src/build.py
The version offered, its zip and size come from public/updates/appcast.xml, and the notes from
src/releases/RELEASE_NOTES.md. The app's Scripts/release.sh writes both with every release."""
import html, os, re, shutil, sys
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "dist")
PUBLIC = os.path.join(ROOT, "public")
STORE = "https://apps.apple.com/app/id6829008596"
ISSUES = "https://github.com/mfrports/bezzle-web/issues/new"
# No __pycache__ beside notes.py.
sys.dont_write_bytecode = True
import notes  # noqa: E402
NB = " "
LANGS = [("en-US", "en", "", "EN"), ("de-DE", "de", "de/", "DE"), ("fr-FR", "fr", "fr/", "FR"), ("it", "it", "it/", "IT")]

T = {}
T["en"] = dict(
    title="Bezzle: the free design app for Mac",
    desc="Bezzle is a complete design studio for your Mac, and it is free: apps, websites, social posts and print, with components, prototypes, hand-off, dark mode in one click, one-click cutouts and live co-editing. No subscription, no account.",
    nav_support="Support", nav_privacy="Privacy",
    h1=("All the tools.", "None of the bills."),
    lede="Bezzle is a complete design studio for your Mac: apps, websites, social posts and print. It opens your Adobe XD, Figma and Sketch files, and it is free. Not a trial, not freemium.",
    cta="Get Bezzle on the Mac App Store", cta_small="Free · No subscription · No account · macOS 26 or later",
    free_h="Free. Really.", free_sub="Design tools have become rent. Bezzle is yours, with nothing held back.",
    free=[("No subscription", "Every tool and every export, from the first launch. No plans, no seats, no trial that runs out."),
          ("No account", "Open it and design. Sharing works through the iCloud your Mac already has."),
          ("Nothing locked", "No pro tier and no watermarks. What you see on this page is all of Bezzle, for everyone.")],
    best_h="The best of every design app. In one.",
    best_sub="The ideas designers love, each made simpler, and a few that no other app has.",
    cards=[("Open your files", "Adobe XD, Figma and Sketch files come in with artboards, layers, masks, text and pictures. Any website comes in as layers, too."),
           ("Components and styles", "Every copy is the component: change one and all follow. Name colors, type, shadows and corners, and use them everywhere."),
           ("Every size, light and dark", "Drag an artboard to a new size and the layout composes itself again. One click draws its dark look."),
           ("Prototypes and hand-off", "Link a button to a screen and play it in a real device. Developers measure everything and copy CSS or SwiftUI."),
           ("Decks for social media", "Dozens of posts on one artboard, stacked like cards. Restyle one and all follow."),
           ("Remove background", "People, pets and products lifted from their photo in one click, hair and all, right on your Mac."),
           ("Design together, live", "Share over iCloud and see everyone's pencil as they work. Notes in the margin, and every version kept."),
           ("Your AI designs, too", "A built-in MCP server lets Claude or any MCP assistant build screens, decks and prototypes, with every step in Undo."),
           ("Export everything", "PNG, JPEG, WebP, AVIF, SVG and PDF from 1x to 4x, with presets, and every post of a deck at once.")],
    gallery_h="See it at work",
    closing="Free, with everything included.",
    support_h="Support", support_sub="Help with Bezzle, the free design app for Mac",
    support_intro=f'Something not working, or an idea for Bezzle? <a href="{ISSUES}">Write to us</a> (a free GitHub account is needed). Every message is read. Please say what you did and what you expected.',
    faq_h="Questions",
    faq=[("Is Bezzle really free?", "Yes. Every feature is included, with no subscription, no in-app purchases and no account."),
         ("Can I open my Adobe XD, Figma or Sketch files?", "Yes. Choose File › Import from XD, Figma or Sketch, or drop the file on Bezzle. For Figma, first use Save local copy in Figma to get a .fig file. Artboards, layers, text, pictures, gradients and shadows come over; a short report lists anything that could not."),
         ("Where are my designs saved?", "In the Bezzle folder in your Documents. There is no Save command: a design is saved as you work, and the home screen shows all of them, latest first."),
         ("How do I work on a design with someone else?", "Click Share… in the design's window and invite them. They need a Mac signed in to iCloud, nothing else. Everyone's changes merge property by property, so nothing is overwritten."),
         ("How do I connect an AI assistant?", "Choose Bezzle › Connect an AI Assistant › Add to Claude Desktop. Other MCP clients can connect to http://127.0.0.1:7412/mcp on the same Mac. The server only listens on your Mac and can be turned off in the same menu."),
         ("How does Remove Background work?", "Select a layer filled with a photo and choose Subject alone in the inspector, or Object › Remove Background. It runs on your Mac with Apple's Vision framework. The original photo is kept, so you can restore it at any time."),
         ("What is a deck?", "One artboard that holds many posts, stacked like cards. Change how anything looks in one post and every post follows, while each keeps its own words and photos. Each post is exported as a file of its own."),
         ("Which Macs does Bezzle run on?", "Any Mac with macOS 26 or later.")],
    privacy_h="Privacy", effective="Effective 1 November 2026",
    privacy=[("", "Bezzle does not collect any data. It has no account, no analytics, no advertising and no tracking of any kind, and it sends nothing about you or your designs to us or to third parties."),
             ("Your designs", "Designs are files on your Mac, in the Bezzle folder in your Documents or wherever you keep them. Pictures you place are copied into the design. Remove Background runs on your Mac; photos are never uploaded."),
             ("Sharing over iCloud", "When you share a design, it is stored with Apple's iCloud (CloudKit) in your account and in the accounts of the people you invite. We cannot see it. Apple's privacy policy applies to iCloud."),
             ("AI assistants", "Bezzle includes a server for AI assistants that listens only on your Mac (127.0.0.1) and cannot be reached from the network. Nothing is shared with an assistant unless you connect one. If you do, what it reads from your design is handled by that assistant and its provider under their own privacy policy."),
             ("Network", "Bezzle connects to the internet only for these: iCloud, for designs you share; while others have a shared design open with you, a relay run on Cloudflare that passes on your pointers and changes, encrypted end to end with a key only the people in the share have, so that neither we nor Cloudflare can read them; and a web page you choose to bring in, which is loaded as your browser would load it."),
             ("Crash reports", "If you have chosen to share analytics with app developers in macOS's settings, Apple may pass anonymous crash reports on to us. You can change this at any time in System Settings › Privacy & Security › Analytics & Improvements."),
             ("Children", "Bezzle collects no data from anyone, including children."),
             ("Changes and contact", f'If this policy changes, the new version will appear on this page with a new date. Questions are welcome: <a href="support.html">get in touch</a>.')],
)
T["de"] = dict(
    title="Bezzle: die kostenlose Design-App für den Mac",
    desc="Bezzle ist ein komplettes Designstudio für deinen Mac, und es ist kostenlos: Apps, Websites, Social Posts und Print, mit Komponenten, Prototypen, Übergabe an die Entwicklung, Dunkelmodus per Klick, Freistellen per Klick und Live-Zusammenarbeit. Kein Abo, kein Konto.",
    nav_support="Support", nav_privacy="Datenschutz",
    h1=("Alle Werkzeuge.", "Kein Abo."),
    lede="Bezzle ist ein komplettes Designstudio für deinen Mac: Apps, Websites, Social Posts und Print. Es öffnet deine Dateien aus Adobe XD, Figma und Sketch, und es ist kostenlos. Keine Testversion, kein Freemium.",
    cta="Bezzle im Mac App Store laden", cta_small="Kostenlos · Kein Abo · Kein Konto · macOS 26 oder neuer",
    free_h="Kostenlos. Wirklich.", free_sub="Design-Werkzeuge sind zur Miete geworden. Bezzle gehört dir, ohne Einschränkungen.",
    free=[("Kein Abo", "Alle Werkzeuge und alle Exporte vom ersten Start an. Keine Tarife, keine Lizenzen, keine ablaufende Testphase."),
          ("Kein Konto", "Öffnen und loslegen. Geteilt wird über die iCloud, die dein Mac schon hat."),
          ("Nichts gesperrt", "Keine Pro-Stufe, keine Wasserzeichen. Was du auf dieser Seite siehst, ist ganz Bezzle, für alle.")],
    best_h="Das Beste aller Design-Apps. In einer.",
    best_sub="Die Ideen, die Designer lieben, jede einfacher gemacht, und ein paar, die keine andere App hat.",
    cards=[("Öffne deine Dateien", "Dateien aus Adobe XD, Figma und Sketch kommen mit Zeichenflächen, Ebenen, Masken, Texten und Bildern. Auch jede Website kommt als Ebenen herein."),
           ("Komponenten und Stile", "Jede Kopie ist die Komponente: Ändere eine, und alle folgen. Benenne Farben, Schrift, Schatten und Ecken und nutze sie überall."),
           ("Jedes Format, hell und dunkel", "Zieh eine Zeichenfläche auf ein neues Format, und das Layout komponiert sich neu. Ein Klick zeichnet ihren dunklen Look."),
           ("Prototypen und Übergabe", "Verbinde einen Button mit einem Screen und spiel es in einem echten Gerät ab. Die Entwicklung misst alles aus und kopiert CSS oder SwiftUI."),
           ("Stapel für Social Media", "Dutzende Posts auf einer Zeichenfläche, gestapelt wie Karten. Ändere den Look von einem, und alle folgen."),
           ("Hintergrund entfernen", "Menschen, Tiere und Produkte mit einem Klick freigestellt, samt Haaren, direkt auf deinem Mac."),
           ("Gemeinsam gestalten, live", "Teile über iCloud und sieh den Stift aller, während sie arbeiten. Notizen am Rand, und jede Version bleibt erhalten."),
           ("Deine KI gestaltet mit", "Ein eingebauter MCP-Server lässt Claude oder einen anderen MCP-Assistenten Screens, Stapel und Prototypen bauen, jeder Schritt lässt sich widerrufen."),
           ("Alles exportieren", "PNG, JPEG, WebP, AVIF, SVG und PDF in 1x bis 4x, mit Vorlagen, und alle Posts eines Stapels auf einmal.")],
    gallery_h="So sieht es aus",
    closing="Kostenlos, mit allem drin.",
    support_h="Support", support_sub="Hilfe zu Bezzle, der kostenlosen Design-App für den Mac",
    support_intro=f'Funktioniert etwas nicht, oder hast du eine Idee für Bezzle? <a href="{ISSUES}">Schreib uns</a> (ein kostenloses GitHub-Konto ist nötig). Jede Nachricht wird gelesen. Bitte beschreib, was du getan und was du erwartet hast.',
    faq_h="Fragen",
    faq=[("Ist Bezzle wirklich kostenlos?", "Ja. Alle Funktionen sind enthalten, ohne Abo, ohne In-App-Käufe und ohne Konto."),
         ("Kann ich meine Dateien aus Adobe XD, Figma oder Sketch öffnen?", "Ja. Wähle Ablage › Aus XD, Figma oder Sketch importieren oder zieh die Datei auf Bezzle. Für Figma sicherst du die Datei zuerst in Figma mit Save local copy als .fig. Zeichenflächen, Ebenen, Texte, Bilder, Verläufe und Schatten kommen mit; ein kurzer Bericht nennt, was nicht übernommen werden konnte."),
         ("Wo werden meine Designs gespeichert?", "Im Ordner Bezzle in deinen Dokumenten. Einen Befehl zum Sichern gibt es nicht: Ein Design wird beim Arbeiten gesichert, und der Startbildschirm zeigt alle, die neuesten zuerst."),
         ("Wie arbeite ich mit jemandem zusammen an einem Design?", "Klick im Fenster des Designs auf Teilen … und lade die Person ein. Sie braucht nur einen Mac mit iCloud. Die Änderungen aller werden Eigenschaft für Eigenschaft zusammengeführt, nichts wird überschrieben."),
         ("Wie verbinde ich einen KI-Assistenten?", "Wähle Bezzle › KI-Assistenten verbinden › Zu Claude Desktop hinzufügen. Andere MCP-Clients verbinden sich auf demselben Mac mit http://127.0.0.1:7412/mcp. Der Server ist nur auf deinem Mac erreichbar und lässt sich im selben Menü ausschalten."),
         ("Wie funktioniert Hintergrund entfernen?", "Wähle eine Ebene mit einem Foto und im Inspektor Nur Motiv, oder Objekt › Hintergrund entfernen. Das geschieht auf deinem Mac mit Apples Vision-Framework. Das Originalfoto bleibt erhalten und lässt sich jederzeit wiederherstellen."),
         ("Was ist ein Stapel?", "Eine Zeichenfläche mit vielen Posts, gestapelt wie Karten. Ändere das Aussehen in einem Post, und alle folgen, während jeder seine eigenen Texte und Fotos behält. Jeder Post wird als eigene Datei exportiert."),
         ("Auf welchen Macs läuft Bezzle?", "Auf jedem Mac mit macOS 26 oder neuer.")],
    privacy_h="Datenschutz", effective="Gültig ab 1. November 2026",
    privacy=[("", "Bezzle sammelt keine Daten. Es gibt kein Konto, keine Analyse, keine Werbung und kein Tracking jeglicher Art, und es sendet nichts über dich oder deine Designs an uns oder an Dritte."),
             ("Deine Designs", "Designs sind Dateien auf deinem Mac, im Ordner Bezzle in deinen Dokumenten oder wo immer du sie ablegst. Platzierte Bilder werden in das Design kopiert. Hintergrund entfernen läuft auf deinem Mac; Fotos werden nie hochgeladen."),
             ("Teilen über iCloud", "Wenn du ein Design teilst, wird es bei Apples iCloud (CloudKit) in deinem Konto und in den Konten der eingeladenen Personen gespeichert. Wir können es nicht sehen. Für iCloud gilt Apples Datenschutzrichtlinie."),
             ("KI-Assistenten", "Bezzle enthält einen Server für KI-Assistenten, der nur auf deinem Mac (127.0.0.1) erreichbar ist und nicht aus dem Netzwerk. Mit einem Assistenten wird nichts geteilt, solange du keinen verbindest. Tust du es, behandeln dieser Assistent und sein Anbieter, was er aus deinem Design liest, nach ihrer eigenen Datenschutzrichtlinie."),
             ("Netzwerk", "Bezzle verbindet sich nur dafür mit dem Internet: mit iCloud für Designs, die du teilst; solange andere ein geteiltes Design mit dir offen haben, mit einem Relay bei Cloudflare, das eure Zeiger und Änderungen weiterreicht, Ende-zu-Ende-verschlüsselt mit einem Schlüssel, den nur die Leute im geteilten Design haben, sodass weder wir noch Cloudflare sie lesen können; und mit einer Website, die du hereinholen willst, die so geladen wird, wie dein Browser sie laden würde."),
             ("Absturzberichte", "Wenn du in den macOS-Einstellungen zugestimmt hast, Analysedaten mit App-Entwicklern zu teilen, kann Apple uns anonyme Absturzberichte weitergeben. Das kannst du jederzeit unter Systemeinstellungen › Datenschutz & Sicherheit › Analyse & Verbesserungen ändern."),
             ("Kinder", "Bezzle sammelt von niemandem Daten, auch nicht von Kindern."),
             ("Änderungen und Kontakt", 'Ändert sich diese Erklärung, erscheint die neue Fassung mit neuem Datum auf dieser Seite. Fragen sind willkommen: <a href="support.html">schreib uns</a>.')],
)
T["fr"] = dict(
    title="Bezzle : l’app de design gratuite pour Mac",
    desc="Bezzle est un studio de design complet pour ton Mac, et il est gratuit : apps, sites web, posts et print, avec composants, prototypes, inspection, mode sombre en un clic, détourage en un clic et création à plusieurs en direct. Sans abonnement, sans compte.",
    nav_support="Assistance", nav_privacy="Confidentialité",
    h1=("Tous les outils.", "Aucun abonnement."),
    lede="Bezzle est un studio de design complet pour ton Mac : apps, sites web, posts pour les réseaux et print. Il ouvre tes fichiers Adobe XD, Figma et Sketch, et il est gratuit. Ni version d’essai ni freemium.",
    cta="Obtenir Bezzle sur le Mac App Store", cta_small="Gratuit · Sans abonnement · Sans compte · macOS 26 ou ultérieur",
    free_h="Gratuit. Vraiment.", free_sub="Les outils de design se louent désormais. Bezzle est à toi, sans rien retenir.",
    free=[("Sans abonnement", "Tous les outils et tous les exports dès le premier lancement. Ni formules, ni licences, ni essai qui expire."),
          ("Sans compte", "Ouvre l’app et crée. Le partage passe par l’iCloud que ton Mac a déjà."),
          ("Rien de verrouillé", "Pas de version pro, pas de filigrane. Ce que tu vois sur cette page, c’est tout Bezzle, pour tout le monde.")],
    best_h="Le meilleur de chaque app de design. En une seule.",
    best_sub="Les idées que les designers aiment, chacune rendue plus simple, et quelques-unes qu’aucune autre app n’a.",
    cards=[("Ouvre tes fichiers", "Les fichiers Adobe XD, Figma et Sketch arrivent avec plans de travail, calques, masques, textes et images. Tout site web arrive aussi en calques."),
           ("Composants et styles", "Chaque copie est le composant : modifies-en une et toutes suivent. Nomme couleurs, textes, ombres et coins, et utilise-les partout."),
           ("Toutes les tailles, clair et sombre", "Donne une nouvelle taille à un plan de travail et la mise en page se recompose. Un clic dessine sa version sombre."),
           ("Prototypes et inspection", "Relie un bouton à un écran et joue-le dans un vrai appareil. Les développeurs mesurent tout et copient le CSS ou le SwiftUI."),
           ("Des piles pour les réseaux", "Des dizaines de posts sur un seul plan de travail, empilés comme des cartes. Change le style de l’un et tous suivent."),
           ("Supprimer l’arrière-plan", "Personnes, animaux et produits détourés en un clic, cheveux compris, directement sur ton Mac."),
           ("Créer ensemble, en direct", "Partage via iCloud et vois le crayon de chacun pendant qu’il travaille. Des notes en marge, et chaque version conservée."),
           ("Ton IA crée avec toi", "Un serveur MCP intégré permet à Claude ou à tout assistant MCP de construire écrans, piles et prototypes, chaque étape pouvant être annulée."),
           ("Exporte tout", "PNG, JPEG, WebP, AVIF, SVG et PDF de 1x à 4x, avec des préréglages, et tous les posts d’une pile d’un coup.")],
    gallery_h="Bezzle en action",
    closing="Gratuit, tout compris.",
    support_h="Assistance", support_sub="De l’aide pour Bezzle, l’app de design gratuite pour Mac",
    support_intro=f'Quelque chose ne marche pas, ou une idée pour Bezzle{NB}? <a href="{ISSUES}">Écris-nous</a> (un compte GitHub gratuit est nécessaire). Chaque message est lu. Dis-nous ce que tu as fait et ce que tu attendais.',
    faq_h="Questions",
    faq=[(f"Bezzle est-il vraiment gratuit{NB}?", "Oui. Toutes les fonctions sont incluses, sans abonnement, sans achat intégré et sans compte."),
         (f"Puis-je ouvrir mes fichiers Adobe XD, Figma ou Sketch{NB}?", "Oui. Choisis Fichier › Importer depuis XD, Figma ou Sketch, ou dépose le fichier sur Bezzle. Pour Figma, utilise d’abord Save local copy dans Figma pour obtenir un fichier .fig. Plans de travail, calques, textes, images, dégradés et ombres sont repris ; un court rapport liste ce qui n’a pas pu l’être."),
         (f"Où sont enregistrés mes designs{NB}?", "Dans le dossier Bezzle de tes Documents. Il n’y a pas de commande Enregistrer : un design s’enregistre pendant que tu travailles, et l’écran d’accueil les montre tous, du plus récent au plus ancien."),
         (f"Comment travailler à plusieurs sur un design{NB}?", "Clique sur Partager… dans la fenêtre du design et invite la personne. Il lui faut seulement un Mac connecté à iCloud. Les modifications de chacun se fusionnent propriété par propriété, rien n’est écrasé."),
         (f"Comment connecter un assistant IA{NB}?", "Choisis Bezzle › Connecter un assistant IA › Ajouter à Claude Desktop. Les autres clients MCP se connectent à http://127.0.0.1:7412/mcp sur le même Mac. Le serveur n’écoute que sur ton Mac et se désactive dans le même menu."),
         (f"Comment fonctionne la suppression de l’arrière-plan{NB}?", "Sélectionne un calque rempli d’une photo et choisis Sujet seul dans l’inspecteur, ou Objet › Supprimer l’arrière-plan. Tout se fait sur ton Mac avec le framework Vision d’Apple. La photo d’origine est conservée et peut être rétablie à tout moment."),
         (f"Qu’est-ce qu’une pile{NB}?", "Un plan de travail qui contient plusieurs posts, empilés comme des cartes. Change l’apparence d’un élément dans un post et tous suivent, chacun gardant ses propres textes et photos. Chaque post est exporté dans son propre fichier."),
         (f"Sur quels Mac Bezzle fonctionne-t-il{NB}?", "Sur tout Mac avec macOS 26 ou ultérieur.")],
    privacy_h="Confidentialité", effective="En vigueur depuis le 1er novembre 2026",
    privacy=[("", "Bezzle ne collecte aucune donnée. Il n’a ni compte, ni statistiques, ni publicité, ni pistage d’aucune sorte, et n’envoie rien sur toi ou tes designs, ni à nous, ni à des tiers."),
             ("Tes designs", "Les designs sont des fichiers sur ton Mac, dans le dossier Bezzle de tes Documents ou là où tu les ranges. Les images placées sont copiées dans le design. La suppression de l’arrière-plan se fait sur ton Mac ; les photos ne sont jamais envoyées."),
             ("Partage via iCloud", "Quand tu partages un design, il est stocké dans iCloud (CloudKit) d’Apple, dans ton compte et dans ceux des personnes invitées. Nous ne pouvons pas le voir. La politique de confidentialité d’Apple s’applique à iCloud."),
             ("Assistants IA", "Bezzle inclut un serveur pour assistants IA qui n’écoute que sur ton Mac (127.0.0.1) et n’est pas joignable depuis le réseau. Rien n’est partagé avec un assistant tant que tu n’en connectes pas. Si tu le fais, ce qu’il lit de ton design est traité par cet assistant et son fournisseur selon leur propre politique de confidentialité."),
             ("Réseau", "Bezzle ne se connecte à internet que pour ceci : iCloud, pour les designs que tu partages ; tant que d’autres ont un design partagé ouvert avec toi, un relais hébergé chez Cloudflare qui transmet vos pointeurs et vos modifications, chiffrés de bout en bout avec une clé que seules les personnes du partage possèdent, de sorte que ni nous ni Cloudflare ne pouvons les lire ; et une page web que tu choisis d’importer, chargée comme ton navigateur la chargerait."),
             ("Rapports de plantage", "Si tu as choisi de partager les données d’analyse avec les développeurs dans les réglages de macOS, Apple peut nous transmettre des rapports de plantage anonymes. Tu peux changer cela à tout moment dans Réglages Système › Confidentialité et sécurité › Analyse et améliorations."),
             ("Enfants", "Bezzle ne collecte de données de personne, enfants compris."),
             ("Modifications et contact", f'Si cette politique change, la nouvelle version paraîtra sur cette page avec une nouvelle date. Les questions sont les bienvenues{NB}: <a href="support.html">écris-nous</a>.')],
)
T["it"] = dict(
    title="Bezzle: l’app di design gratuita per Mac",
    desc="Bezzle è uno studio di design completo per il tuo Mac, ed è gratis: app, siti web, post social e stampa, con componenti, prototipi, hand-off, modalità scura con un clic, scontorno con un clic e lavoro di squadra dal vivo. Niente abbonamento, niente account.",
    nav_support="Assistenza", nav_privacy="Privacy",
    h1=("Tutti gli strumenti.", "Nessun abbonamento."),
    lede="Bezzle è uno studio di design completo per il tuo Mac: app, siti web, post social e stampa. Apre i tuoi file Adobe XD, Figma e Sketch, ed è gratis. Non è una prova né un freemium.",
    cta="Scarica Bezzle dal Mac App Store", cta_small="Gratis · Nessun abbonamento · Nessun account · macOS 26 o successivo",
    free_h="Gratis. Davvero.", free_sub="Gli strumenti di design sono diventati un affitto. Bezzle è tuo, senza limiti.",
    free=[("Nessun abbonamento", "Tutti gli strumenti e tutti gli export dal primo avvio. Niente piani, niente licenze, nessuna prova che scade."),
          ("Nessun account", "Apri e progetta. La condivisione passa dall’iCloud che il tuo Mac ha già."),
          ("Niente di bloccato", "Nessuna versione pro, nessuna filigrana. Quello che vedi in questa pagina è tutto Bezzle, per tutti.")],
    best_h="Il meglio di ogni app di design. In una sola.",
    best_sub="Le idee che i designer amano, ognuna resa più semplice, e alcune che nessun’altra app ha.",
    cards=[("Apri i tuoi file", "I file Adobe XD, Figma e Sketch arrivano con tavole, livelli, maschere, testi e immagini. Anche qualsiasi sito web arriva come livelli."),
           ("Componenti e stili", "Ogni copia è il componente: ne cambi una e tutte seguono. Dai un nome a colori, testi, ombre e angoli e usali ovunque."),
           ("Ogni formato, chiaro e scuro", "Porta una tavola a una nuova misura e il layout si ricompone. Un clic disegna la sua versione scura."),
           ("Prototipi e hand-off", "Collega un pulsante a una schermata e provalo in un vero dispositivo. Chi sviluppa misura tutto e copia CSS o SwiftUI."),
           ("Pile per i social", "Decine di post su un’unica tavola, impilati come carte. Cambi lo stile di uno e tutti seguono."),
           ("Rimuovi sfondo", "Persone, animali e prodotti scontornati con un clic, capelli compresi, direttamente sul tuo Mac."),
           ("Progettare insieme, dal vivo", "Condividi via iCloud e guarda la matita di ognuno mentre lavora. Note a margine, e ogni versione conservata."),
           ("La tua IA progetta con te", "Un server MCP integrato permette a Claude o a qualsiasi assistente MCP di creare schermate, pile e prototipi, e ogni passo si può annullare."),
           ("Esporta tutto", "PNG, JPEG, WebP, AVIF, SVG e PDF da 1x a 4x, con preset, e tutti i post di una pila in una volta.")],
    gallery_h="Guardalo all’opera",
    closing="Gratis, tutto incluso.",
    support_h="Assistenza", support_sub="Aiuto per Bezzle, l’app di design gratuita per Mac",
    support_intro=f'Qualcosa non funziona, o hai un’idea per Bezzle? <a href="{ISSUES}">Scrivici</a> (serve un account GitHub gratuito). Leggiamo ogni messaggio. Indica cosa hai fatto e cosa ti aspettavi.',
    faq_h="Domande",
    faq=[("Bezzle è davvero gratis?", "Sì. Tutte le funzioni sono incluse, senza abbonamento, senza acquisti in-app e senza account."),
         ("Posso aprire i miei file Adobe XD, Figma o Sketch?", "Sì. Scegli Archivio › Importa da XD, Figma o Sketch, o trascina il file su Bezzle. Per Figma, usa prima Save local copy in Figma per ottenere un file .fig. Tavole, livelli, testi, immagini, sfumature e ombre vengono importati; un breve resoconto elenca ciò che non è stato possibile."),
         ("Dove vengono salvati i miei design?", "Nella cartella Bezzle dei tuoi Documenti. Non c’è un comando Salva: un design si salva mentre lavori, e la schermata iniziale li mostra tutti, dal più recente."),
         ("Come lavoro su un design con qualcun altro?", "Fai clic su Condividi… nella finestra del design e invita la persona. Le serve solo un Mac con iCloud. Le modifiche di tutti si uniscono proprietà per proprietà, niente viene sovrascritto."),
         ("Come collego un assistente IA?", "Scegli Bezzle › Collega un assistente IA › Aggiungi a Claude Desktop. Gli altri client MCP si collegano a http://127.0.0.1:7412/mcp sullo stesso Mac. Il server ascolta solo sul tuo Mac e si può disattivare dallo stesso menu."),
         ("Come funziona Rimuovi sfondo?", "Seleziona un livello riempito con una foto e scegli Solo soggetto nell’ispettore, oppure Oggetto › Rimuovi sfondo. Avviene sul tuo Mac con il framework Vision di Apple. La foto originale resta e puoi ripristinarla in qualsiasi momento."),
         ("Che cos’è una pila?", "Una tavola che contiene molti post, impilati come carte. Cambi l’aspetto di qualcosa in un post e tutti seguono, mentre ognuno tiene i suoi testi e le sue foto. Ogni post viene esportato in un file proprio."),
         ("Su quali Mac funziona Bezzle?", "Su qualsiasi Mac con macOS 26 o successivo.")],
    privacy_h="Privacy", effective="In vigore dal 1° novembre 2026",
    privacy=[("", "Bezzle non raccoglie alcun dato. Non ha account, statistiche, pubblicità né tracciamento di alcun tipo, e non invia nulla su di te o sui tuoi design, né a noi né a terzi."),
             ("I tuoi design", "I design sono file sul tuo Mac, nella cartella Bezzle dei tuoi Documenti o dove li tieni. Le immagini inserite vengono copiate nel design. Rimuovi sfondo funziona sul tuo Mac; le foto non vengono mai caricate."),
             ("Condivisione via iCloud", "Quando condividi un design, viene conservato in iCloud (CloudKit) di Apple, nel tuo account e in quelli delle persone invitate. Noi non possiamo vederlo. Per iCloud vale l’informativa sulla privacy di Apple."),
             ("Assistenti IA", "Bezzle include un server per assistenti IA che ascolta solo sul tuo Mac (127.0.0.1) e non è raggiungibile dalla rete. Nulla viene condiviso con un assistente finché non ne colleghi uno. Se lo fai, ciò che legge dal tuo design è trattato da quell’assistente e dal suo fornitore secondo la loro informativa sulla privacy."),
             ("Rete", "Bezzle si collega a internet solo per questo: iCloud, per i design che condividi; mentre altri hanno aperto con te un design condiviso, un relay su Cloudflare che inoltra i vostri puntatori e le modifiche, cifrati end-to-end con una chiave che hanno solo le persone della condivisione, così che né noi né Cloudflare possiamo leggerli; e una pagina web che scegli di importare, caricata come la caricherebbe il tuo browser."),
             ("Rapporti sugli arresti anomali", "Se nelle impostazioni di macOS hai scelto di condividere le analisi con gli sviluppatori, Apple può inoltrarci rapporti anonimi sugli arresti anomali. Puoi cambiarlo in qualsiasi momento in Impostazioni di Sistema › Privacy e sicurezza › Analisi e miglioramenti."),
             ("Bambini", "Bezzle non raccoglie dati da nessuno, bambini compresi."),
             ("Modifiche e contatti", 'Se questa informativa cambia, la nuova versione comparirà su questa pagina con una nuova data. Le domande sono benvenute: <a href="support.html">scrivici</a>.')],
)

# The download from this website, its updates and its What's New page: used once a release is in
# the update feed (see release_info), left out before.
T["en"].update(
    nav_download="Download", nav_news="What’s New",
    cta_download="Download for Mac", cta_store="Mac App Store",
    dl_title="Download Bezzle", dl_sub="Free, with everything included. The same Bezzle as on the Mac App Store.",
    dl_button="Download Bezzle {v}", dl_facts="{mb} MB · macOS {os} or later · Signed and notarized by Apple",
    dl_started="Bezzle is on its way to your Downloads folder.",
    steps_h="Three steps",
    steps=[("Open the download", "Double-click {zip} in your Downloads folder, if your browser has not opened it already."),
           ("Move it to Applications", "Drag Bezzle into the Applications folder."),
           ("Open Bezzle", "From Applications or with Spotlight. Apple has checked it, so it opens like any app.")],
    updates_h="It keeps itself up to date",
    updates_p="Bezzle looks for a new version once a day, fetches it in the background and puts it in place the next time you quit. To look right away, choose Bezzle › Check for Updates…",
    updates_link="What’s new in {v}",
    both_h="Website or App Store?",
    both_p="Both are the same Bezzle, free and complete. The App Store keeps its copy up to date, and this one updates itself. Either opens the same designs, and you can share designs between the two. Keep one of them in Applications, not both.",
    news_h="What’s new", news_sub="Every version of Bezzle, newest first.", version="Version {v}",
    faq_updates=("How does Bezzle stay up to date?", "The Mac App Store updates its copy. The copy from this website updates itself: it looks for a new version once a day and puts it in place when you quit. Bezzle › Check for Updates… looks right away."),
    net_and="and ", net_updates="; and, in the copy from this website only, GitHub, which hosts this website and its downloads, once a day, to look for a new version of Bezzle, sending nothing but the version you have.",
    effective_on="Effective {}",
)
T["de"].update(
    nav_download="Download", nav_news="Neuigkeiten",
    cta_download="Für den Mac laden", cta_store="Mac App Store",
    dl_title="Bezzle laden", dl_sub="Kostenlos, mit allem drin. Dasselbe Bezzle wie im Mac App Store.",
    dl_button="Bezzle {v} laden", dl_facts="{mb} MB · macOS {os} oder neuer · Signiert und von Apple beglaubigt",
    dl_started="Bezzle ist unterwegs in deinen Downloads-Ordner.",
    steps_h="Drei Schritte",
    steps=[("Download öffnen", "Doppelklicke {zip} in deinem Downloads-Ordner, falls dein Browser die Datei nicht schon geöffnet hat."),
           ("In Programme bewegen", "Zieh Bezzle in den Ordner Programme."),
           ("Bezzle öffnen", "Aus Programme oder mit Spotlight. Apple hat es geprüft, darum öffnet es sich wie jede App.")],
    updates_h="Es hält sich selbst aktuell",
    updates_p="Bezzle schaut einmal am Tag nach einer neuen Version, lädt sie im Hintergrund und setzt sie ein, wenn du es das nächste Mal beendest. Um sofort nachzuschauen, wähle Bezzle › Nach Updates suchen …",
    updates_link="Neu in {v}",
    both_h="Website oder App Store?",
    both_p="Beide sind dasselbe Bezzle, kostenlos und vollständig. Der App Store hält seine Kopie aktuell, diese hier aktualisiert sich selbst. Beide öffnen dieselben Designs, und du kannst Designs zwischen beiden teilen. Behalte eines davon in Programme, nicht beide.",
    news_h="Neuigkeiten", news_sub="Jede Version von Bezzle, die neueste zuerst.", version="Version {v}",
    faq_updates=("Wie bleibt Bezzle aktuell?", "Die Kopie aus dem Mac App Store aktualisiert der App Store. Die Kopie von dieser Website aktualisiert sich selbst: Sie schaut einmal am Tag nach einer neuen Version und setzt sie ein, wenn du Bezzle beendest. Bezzle › Nach Updates suchen … schaut sofort nach."),
    net_and="und ", net_updates="; und, nur in der Kopie von dieser Website, mit GitHub, wo diese Website und ihre Downloads liegen, einmal am Tag, um nach einer neuen Version von Bezzle zu schauen, wobei nichts als deine Version übermittelt wird.",
    effective_on="Gültig ab {}",
)
T["fr"].update(
    nav_download="Télécharger", nav_news="Nouveautés",
    cta_download="Télécharger pour Mac", cta_store="Mac App Store",
    dl_title="Télécharger Bezzle", dl_sub="Gratuit, avec tout inclus. Le même Bezzle que sur le Mac App Store.",
    dl_button="Télécharger Bezzle {v}", dl_facts="{mb} Mo · macOS {os} ou ultérieur · Signé et notarié par Apple",
    dl_started="Bezzle arrive dans ton dossier Téléchargements.",
    steps_h="Trois étapes",
    steps=[("Ouvre le téléchargement", "Double-clique sur {zip} dans ton dossier Téléchargements, si ton navigateur ne l’a pas déjà ouvert."),
           ("Place-le dans Applications", "Fais glisser Bezzle dans le dossier Applications."),
           ("Ouvre Bezzle", "Depuis Applications ou avec Spotlight. Apple l’a vérifié, il s’ouvre donc comme n’importe quelle app.")],
    updates_h="Il se tient à jour tout seul",
    updates_p="Bezzle cherche une nouvelle version une fois par jour, la télécharge en arrière-plan et l’installe la prochaine fois que tu le quittes. Pour vérifier tout de suite, choisis Bezzle › Rechercher des mises à jour…",
    updates_link="Nouveautés de la {v}",
    both_h=f"Site ou App Store{NB}?",
    both_p="Les deux sont le même Bezzle, gratuit et complet. L’App Store tient sa copie à jour, celle-ci se met à jour toute seule. Les deux ouvrent les mêmes designs, et tu peux partager des designs entre les deux. Garde l’un des deux dans Applications, pas les deux.",
    news_h="Nouveautés", news_sub="Chaque version de Bezzle, de la plus récente à la plus ancienne.", version="Version {v}",
    faq_updates=(f"Comment Bezzle reste-t-il à jour{NB}?", f"L’App Store met à jour sa copie. La copie de ce site se met à jour toute seule{NB}: elle cherche une nouvelle version une fois par jour et l’installe quand tu quittes Bezzle. Bezzle › Rechercher des mises à jour… vérifie tout de suite."),
    net_and="et ", net_updates=f"{NB}; et, seulement dans la copie de ce site, GitHub, qui héberge ce site et ses téléchargements, une fois par jour, pour chercher une nouvelle version de Bezzle, sans rien envoyer d’autre que ta version.",
    effective_on="En vigueur depuis le {}",
)
T["it"].update(
    nav_download="Scarica", nav_news="Novità",
    cta_download="Scarica per Mac", cta_store="Mac App Store",
    dl_title="Scarica Bezzle", dl_sub="Gratis, con tutto incluso. Lo stesso Bezzle del Mac App Store.",
    dl_button="Scarica Bezzle {v}", dl_facts="{mb} MB · macOS {os} o successivo · Firmato e autenticato da Apple",
    dl_started="Bezzle sta arrivando nella tua cartella Download.",
    steps_h="Tre passaggi",
    steps=[("Apri il download", "Fai doppio clic su {zip} nella cartella Download, se il browser non l’ha già aperto."),
           ("Spostalo in Applicazioni", "Trascina Bezzle nella cartella Applicazioni."),
           ("Apri Bezzle", "Da Applicazioni o con Spotlight. Apple l’ha controllato, quindi si apre come qualsiasi app.")],
    updates_h="Si aggiorna da solo",
    updates_p="Bezzle cerca una nuova versione una volta al giorno, la scarica in sottofondo e la installa la prossima volta che lo chiudi. Per controllare subito, scegli Bezzle › Verifica aggiornamenti…",
    updates_link="Novità della {v}",
    both_h="Sito o App Store?",
    both_p="Sono lo stesso Bezzle, gratis e completo. L’App Store tiene aggiornata la sua copia, questa si aggiorna da sola. Entrambe aprono gli stessi design, e puoi condividere design tra le due. Tieni in Applicazioni una sola delle due.",
    news_h="Novità", news_sub="Ogni versione di Bezzle, dalla più recente.", version="Versione {v}",
    faq_updates=("Come si mantiene aggiornato Bezzle?", "La copia del Mac App Store la aggiorna l’App Store. La copia di questo sito si aggiorna da sola: cerca una nuova versione una volta al giorno e la installa quando chiudi Bezzle. Bezzle › Verifica aggiornamenti… controlla subito."),
    net_and="e ", net_updates="; e, solo nella copia di questo sito, GitHub, che ospita questo sito e i suoi download, una volta al giorno, per cercare una nuova versione di Bezzle, senza inviare altro che la tua versione.",
    effective_on="In vigore dal {}",
)
MONTHS = {
    "en": "January February March April May June July August September October November December".split(),
    "de": "Januar Februar März April Mai Juni Juli August September Oktober November Dezember".split(),
    "fr": "janvier février mars avril mai juin juillet août septembre octobre novembre décembre".split(),
    "it": "gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(),
}
# The privacy policy's text without the download dates from this day.
PRIVACY_SINCE = "2026-11-01"
SPARKLE_NS = "{http://www.andymatuschak.org/xml-namespaces/sparkle}"


def day(date, lang):
    y, m, d = (int(x) for x in date.split("-"))
    month = MONTHS[lang][m - 1]
    first = {"fr": "1er", "it": "1°"}.get(lang) if d == 1 else None
    return {"en": f"{d} {month} {y}", "de": f"{d}. {month} {y}"}.get(lang) or f"{first or d} {month} {y}"


def load_feed():
    """The update feed the site offers, as the last release left it. None before the first release."""
    path = os.path.join(PUBLIC, "updates", "appcast.xml")
    return open(path, encoding="utf-8").read() if os.path.exists(path) else None


def release_info(feed):
    """The newest version in the feed: version, the zip's address and size, the macOS it needs."""
    item = ET.fromstring(feed).find("channel/item")
    enclosure = item.find("enclosure")
    return dict(version=item.findtext(f"{SPARKLE_NS}shortVersionString"), url=enclosure.get("url"),
                zip=enclosure.get("url").rsplit("/", 1)[-1], mb=round(int(enclosure.get("length")) / 1e6),
                os=(item.findtext(f"{SPARKLE_NS}minimumSystemVersion") or "26").removesuffix(".0"))


# Set by main(): the release the site offers, and its notes, newest first. None before the first release.
RELEASE = None
NOTES = []
ARROW = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5v10m0 0-4-4m4 4 4-4M4.5 16.5h11" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>'

MARK = '<svg class="mark" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 15 C 70 8, 160 6, 297 10" stroke-width="6"/><path d="M28 20 C 110 15, 200 14, 282 16" stroke-width="3" opacity=".55"/></svg>'
DOT = '<svg class="dot" viewBox="0 0 22 22" aria-hidden="true"><rect x="1" y="1" width="20" height="20" rx="6" fill="var(--well)"/><rect x="6" y="6" width="10" height="10" rx="3.2" fill="var(--pencil)"/></svg>'


def page(lang, prefix, title, desc, body, here):
    up = "../" if prefix else ""
    switch = " ".join(
        f'<a href="{up}{p}{here}"{" aria-current=page" if l == lang else ""} hreflang="{l}">{label}</a>' for _, l, p, label in LANGS)
    alts = "".join(f'<link rel="alternate" hreflang="{l}" href="https://mfrports.github.io/bezzle-web/{p}{here}">' for _, l, p, _ in LANGS)
    t = T[lang]
    return f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(desc)}">
<meta property="og:title" content="{html.escape(title)}">
<meta property="og:description" content="{html.escape(desc)}">
<meta property="og:image" content="https://mfrports.github.io/bezzle-web/img/{LANGS[[x[1] for x in LANGS].index(lang)][0]}/1.jpg">
{alts}
<link rel="icon" href="{up}img/favicon.png">
<link rel="stylesheet" href="{up}style.css">
</head>
<body>
<div class="wrap">
  <header class="top">
    <a class="brand" href="./"><img src="{up}img/icon-256.png" alt="">Bezzle</a>
    <nav class="links">{f'<a href="download.html">{t["nav_download"]}</a>' if RELEASE else ""}<a href="support.html">{t["nav_support"]}</a><a href="privacy.html">{t["nav_privacy"]}</a><span class="langs">{switch}</span></nav>
  </header>
{body}
</div>
<footer><div class="wrap"><span>© 2026 Erik Muffler</span><nav><a href="./">Bezzle</a>{f'<a href="download.html">{t["nav_download"]}</a><a href="releases.html">{t["nav_news"]}</a>' if RELEASE else ""}<a href="support.html">{t["nav_support"]}</a><a href="privacy.html">{t["nav_privacy"]}</a></nav></div></footer>
</body>
</html>
"""


def e(s):
    return html.escape(s, quote=False)


def ctas(t):
    if not RELEASE:
        return f'<a class="button" href="{STORE}">{e(t["cta"])}</a>'
    # The download page starts the download and says what comes next.
    return (f'<div class="buttons"><a class="button" href="download.html#now">{ARROW}{e(t["cta_download"])}</a>'
            f'<a class="button quiet" href="{STORE}">{e(t["cta_store"])}</a></div>')


def home(lang, locale, up):
    t = T[lang]
    img = f"{up}img/{locale}"
    free = "".join(f'<div class="card">{DOT}<h3>{e(h)}</h3><p>{e(p)}</p></div>' for h, p in t["free"])
    cards = "".join(f'<div class="card">{DOT}<h3>{e(h)}</h3><p>{e(p)}</p></div>' for h, p in t["cards"])
    shots = "".join(f'<figure><img src="{img}/{i}.jpg" width="1440" height="900" loading="lazy" alt=""></figure>' for i in (2, 3, 5, 6, 7, 8))
    a, b = t["h1"]
    return f"""  <div class="hero">
    <img class="icon" src="{up}img/icon-256.png" alt="">
    <h1>{e(a)}<br><span class="marked">{e(b)}{MARK}</span></h1>
    <p class="lede">{e(t["lede"])}</p>
    <div class="cta">
      {ctas(t)}
      <small>{e(t["cta_small"])}</small>
    </div>
    <img class="window" src="{img}/window.png" width="1600" height="1000" alt="">
  </div>
  <section>
    <h2>{e(t["free_h"])}</h2>
    <p class="sub">{e(t["free_sub"])}</p>
    <div class="grid">{free}</div>
  </section>
  <section>
    <h2>{e(t["best_h"])}</h2>
    <p class="sub">{e(t["best_sub"])}</p>
    <div class="grid">{cards}</div>
  </section>
  <section>
    <h2>{e(t["gallery_h"])}</h2>
    <div class="pair">{shots}</div>
  </section>
  <div class="closing">
    <h2>{e(t["closing"])}</h2>
    {ctas(t)}
  </div>"""


def support(lang):
    t = T[lang]
    faq = list(t["faq"])
    if RELEASE:
        faq.insert(len(faq) - 1, t["faq_updates"])
    faq = "".join(f"<details><summary>{e(q)}</summary><p>{e(a)}</p></details>" for q, a in faq)
    return f"""  <article class="narrow">
    <h1>{e(t["support_h"])}</h1>
    <p class="meta">{e(t["support_sub"])}</p>
    <p>{t["support_intro"]}</p>
    <h2>{e(t["faq_h"])}</h2>
    {faq}
  </article>"""


def privacy(lang):
    t = T[lang]
    sections, effective = list(t["privacy"]), t["effective"]
    if RELEASE:
        # The last connection named loses its "and", and the update check follows it.
        i = next(i for i, (_, p) in enumerate(sections) if "Cloudflare" in p)
        h, p = sections[i]
        cut = p.rindex("; " + t["net_and"])
        p = p[:cut] + p[cut:].replace("; " + t["net_and"], "; ", 1)
        sections[i] = (h, p.removesuffix(".") + t["net_updates"])
        since = min([r["date"] for r in NOTES] or [PRIVACY_SINCE])
        effective = t["effective_on"].format(day(max(since, PRIVACY_SINCE), lang))
    parts = "".join((f"<h2>{e(h)}</h2>" if h else "") + f"<p>{p}</p>" for h, p in sections)
    return f"""  <article class="narrow">
    <h1>{e(t["privacy_h"])}</h1>
    <p class="meta">{e(effective)}</p>
    {parts}
  </article>"""


def download(lang, up):
    t, r = T[lang], RELEASE
    steps = "".join(f'<li class="card"><span class="num">{i}</span><h3>{e(h)}</h3><p>{e(p.format(zip=r["zip"]))}</p></li>'
                    for i, (h, p) in enumerate(t["steps"], 1))
    return f"""  <div class="hero download">
    <img class="icon" src="{up}img/icon-256.png" alt="">
    <h1>{e(t["dl_title"])}</h1>
    <p class="lede">{e(t["dl_sub"])}</p>
    <div class="cta">
      <a class="button" id="zip" href="{html.escape(r["url"])}">{ARROW}{e(t["dl_button"].format(v=r["version"]))}</a>
      <small>{e(t["dl_facts"].format(mb=r["mb"], os=r["os"]))}</small>
      <p class="started" hidden>{e(t["dl_started"])}</p>
    </div>
  </div>
  <section>
    <h2>{e(t["steps_h"])}</h2>
    <ol class="grid steps">{steps}</ol>
  </section>
  <section>
    <div class="grid two">
      <div class="card">{DOT}<h3>{e(t["updates_h"])}</h3><p>{e(t["updates_p"])}</p><p class="more"><a href="releases.html">{e(t["updates_link"].format(v=r["version"]))}</a></p></div>
      <div class="card">{DOT}<h3>{e(t["both_h"])}</h3><p>{e(t["both_p"])}</p><p class="more"><a href="{STORE}">{e(t["cta"])}</a></p></div>
    </div>
  </section>
  <script>
    // From the home page's button: the download starts at once, and this page says what comes next.
    if (location.hash === "#now") {{
      document.querySelector(".started").hidden = false;
      history.replaceState(null, "", location.pathname);
      location.href = document.getElementById("zip").href;
    }}
  </script>"""


def news(lang):
    t = T[lang]
    entries = "".join(
        f'<div class="release" id="v{r["version"]}"><p class="meta">{e(t["version"].format(v=r["version"]))} · {e(day(r["date"], lang))}</p>'
        f'{notes.to_html(r["notes"][lang])}</div>' for r in NOTES)
    return f"""  <article class="narrow">
    <h1>{e(t["news_h"])}</h1>
    <p class="meta">{e(t["news_sub"])}</p>
    {entries}
  </article>"""


def check():
    bad = []
    for lang, t in T.items():
        for k, v in t.items():
            for s in (v if isinstance(v, (list, tuple)) else [v]):
                for x in (s if isinstance(s, tuple) else [s]):
                    if "—" in x or re.search(r"\s[–-]\s", x):
                        bad.append(f"{lang} {k}: {x[:60]}")
    if bad:
        sys.exit("Dashes used as punctuation:\n" + "\n".join(bad))


def main():
    global RELEASE, NOTES
    check()
    feed = load_feed()
    if feed:
        RELEASE = release_info(feed)
        # Only what can be downloaded: a version is shown once the feed offers it.
        try:
            NOTES = [r for r in notes.parse() if notes.version_key(r["version"]) <= notes.version_key(RELEASE["version"])]
        except ValueError as error:
            sys.exit(f"RELEASE_NOTES.md: {error}")
        print(f"release: Bezzle {RELEASE['version']}, {RELEASE['mb']} MB, {len(NOTES)} versions with notes")
    else:
        print("release: none in the feed yet, so the site offers the Mac App Store alone")
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    shutil.copytree(PUBLIC, OUT)
    shutil.copy(os.path.join(HERE, "style.css"), OUT)
    for locale, lang, prefix, _ in LANGS:
        folder = os.path.join(OUT, prefix)
        os.makedirs(folder, exist_ok=True)
        up = "../" if prefix else ""
        t = T[lang]
        open(os.path.join(folder, "index.html"), "w").write(page(lang, prefix, t["title"], t["desc"], home(lang, locale, up), ""))
        open(os.path.join(folder, "support.html"), "w").write(page(lang, prefix, f'{t["support_h"]} · Bezzle', t["support_sub"], support(lang), "support.html"))
        open(os.path.join(folder, "privacy.html"), "w").write(page(lang, prefix, f'{t["privacy_h"]} · Bezzle', t["privacy"][0][1], privacy(lang), "privacy.html"))
        if RELEASE:
            open(os.path.join(folder, "download.html"), "w").write(page(lang, prefix, f'{t["dl_title"]} · Bezzle', t["dl_sub"], download(lang, up), "download.html"))
            open(os.path.join(folder, "releases.html"), "w").write(page(lang, prefix, f'{t["news_h"]} · Bezzle', t["news_sub"], news(lang), "releases.html"))
    print("site written to", OUT)


if __name__ == "__main__":
    main()
