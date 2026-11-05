// Every word of the website, in English, German, French and Italian: T[lang][key].
// No dashes as punctuation in any language. French puts a narrow no-break space before ? ! : and ;.
// The story's chapters are the App Store captions (captions.py in the app), so the store and the site
// say the same. Ported from the site's former words.py.
export const STORE = "https://apps.apple.com/app/id6829008596";
export const ISSUES = "https://github.com/mfrports/bezzle-web/issues/new";
export const CHAPTERS = ["files", "adapt", "components", "prototype", "inspect", "cutout", "dark", "deck", "together", "ai"];
export const T = {
 "en": {
  "title": "Bezzle: the free design app for Mac",
  "desc": "Bezzle is a complete design studio for your Mac, and it is free: apps, websites, social posts and print, with components, prototypes, hand-off, dark mode in one click, one-click cutouts and live co-editing. No subscription, no account.",
  "nav_support": "Support",
  "nav_privacy": "Privacy",
  "nav_features": "Features", "nav_free": "Free", "nav_language": "Language", "nav_menu": "Menu",
  "h1": [
   "All the tools.",
   "None of the bills."
  ],
  "lede": "Bezzle is a complete design studio for your Mac: apps, websites, social posts and print. It opens your Adobe XD, Figma and Sketch files, and it is free. Not a trial, not freemium.",
  "cta": "Get Bezzle on the Mac App Store",
  "cta_small": "Free · No subscription · No account · macOS 26 or later",
  "free_h": "Free. Really.",
  "free_sub": "Design tools have become rent. Bezzle is yours, with nothing held back.",
  "free": [
   [
    "No subscription",
    "Every tool and every export, from the first launch. No plans, no seats, no trial that runs out."
   ],
   [
    "No account",
    "Open it and design. Sharing needs none either: send a link, and whoever opens it works with you."
   ],
   [
    "Nothing locked",
    "No pro tier and no watermarks. What you see on this page is all of Bezzle, for everyone."
   ]
  ],
  "best_h": "The best of every design app. In one.",
  "best_sub": "The ideas designers love, each made simpler, and a few that no other app has.",
  "cards": [
   [
    "Open your files",
    "Adobe XD, Figma and Sketch files come in with artboards, layers, masks, text and pictures. Any website comes in as layers, too."
   ],
   [
    "Components and styles",
    "Every copy is the component: change one and all follow. Name colors, type, shadows and corners, and use them everywhere."
   ],
   [
    "Every size, light and dark",
    "Drag an artboard to a new size and the layout composes itself again. One click draws its dark look."
   ],
   [
    "Prototypes and hand-off",
    "Link a button to a screen and play it in a real device. Developers measure everything and copy CSS or SwiftUI."
   ],
   [
    "Decks for social media",
    "Dozens of posts on one artboard, stacked like cards. Restyle one and all follow."
   ],
   [
    "Remove background",
    "People, pets and products lifted from their photo in one click, hair and all, right on your Mac."
   ],
   [
    "Design together, live",
    "Share by link and see everyone's pencil as they work. Notes in the margin, and every version kept."
   ],
   [
    "Your AI designs, too",
    "A built-in MCP server lets Claude or any MCP assistant build screens, decks and prototypes, with every step in Undo."
   ],
   [
    "Export everything",
    "PNG, JPEG, WebP, AVIF, SVG and PDF from 1x to 4x, with presets, and every post of a deck at once."
   ]
  ],
  "gallery_h": "See it at work",
  "closing": "Free, with everything included.",
  "support_h": "Support",
  "support_sub": "Help with Bezzle, the free design app for Mac",
  "support_intro": "Something not working, or an idea for Bezzle? <a href=\"https://github.com/mfrports/bezzle-web/issues/new\">Write to us</a> (a free GitHub account is needed). Every message is read. Please say what you did and what you expected.",
  "faq_h": "Questions",
  "faq": [
   [
    "Is Bezzle really free?",
    "Yes. Every feature is included, with no subscription, no in-app purchases and no account."
   ],
   [
    "Can I open my Adobe XD, Figma or Sketch files?",
    "Yes. Choose File › Import from XD, Figma or Sketch, or drop the file on Bezzle. For Figma, first use Save local copy in Figma to get a .fig file. Artboards, layers, text, pictures, gradients and shadows come over; a short report lists anything that could not."
   ],
   [
    "Where are my designs saved?",
    "In the Bezzle folder in your Documents. There is no Save command: a design is saved as you work, and the home screen shows all of them, latest first."
   ],
   [
    "How do I work on a design with someone else?",
    "Click Share… in the design's window, choose Copy Link and send the link however you like. Whoever opens it works on the design with you in Bezzle on their Mac, with no account of any kind. Everyone's changes merge property by property, so nothing is overwritten. Stop Sharing… in the same menu ends it, and the others keep the design as it was, read only."
   ],
   [
    "Can several people open the same design from Google Drive?",
    "Yes. A design kept in Google Drive, Dropbox, iCloud Drive or any folder several Macs keep in step can be open on all of them at once. Each Mac writes its changes into files of its own inside the design, so nothing is written over, and you see each other at work."
   ],
   [
    "How do I connect an AI assistant?",
    "Choose Bezzle › Connect an AI Assistant › Add to Claude Desktop. Other MCP clients can connect to http://127.0.0.1:7412/mcp on the same Mac. The server only listens on your Mac and can be turned off in the same menu."
   ],
   [
    "How does Remove Background work?",
    "Select a layer filled with a photo and choose Subject alone in the inspector, or Object › Remove Background. It runs on your Mac with Apple's Vision framework. The original photo is kept, so you can restore it at any time."
   ],
   [
    "What is a deck?",
    "One artboard that holds many posts, stacked like cards. Change how anything looks in one post and every post follows, while each keeps its own words and photos. Each post is exported as a file of its own."
   ],
   [
    "Which Macs does Bezzle run on?",
    "Any Mac with macOS 26 or later."
   ]
  ],
  "privacy_h": "Privacy",
  "effective": "Effective 5 November 2026",
  "privacy": [
   [
    "",
    "Bezzle does not collect any data. It has no account, no analytics, no advertising and no tracking of any kind, and it sends nothing about you or your designs to us or to third parties."
   ],
   [
    "Your designs",
    "Designs are files on your Mac, in the Bezzle folder in your Documents or wherever you keep them. Pictures you place are copied into the design. Remove Background runs on your Mac; photos are never uploaded. A design you keep in a folder that Google Drive, Dropbox or iCloud Drive keeps in step goes wherever that service takes it, under its own privacy policy."
   ],
   [
    "Sharing by link",
    "When you share a design, it is kept on Bezzle's server at Cloudflare, so that whoever you give the link to can open it, also while your Mac is off. Everything in it is encrypted on your Mac before it leaves, with a key that only the link holds: neither we nor Cloudflare can read it, and the server sees only encrypted pieces, their sizes and when they arrive. Anyone with the link can open the design. Stop Sharing… deletes it from the server. Versions of Bezzle before 1.4 shared designs through Apple's iCloud (CloudKit) instead, where Apple's privacy policy applies."
   ],
   [
    "AI assistants",
    "Bezzle includes a server for AI assistants that listens only on your Mac (127.0.0.1) and cannot be reached from the network. Nothing is shared with an assistant unless you connect one. If you do, what it reads from your design is handled by that assistant and its provider under their own privacy policy."
   ],
   [
    "Network",
    "Bezzle connects to the internet only for these: Bezzle's server at Cloudflare, for designs you share and, while others have a shared design open with you, to pass on your pointers and changes, all encrypted end to end with a key only the people with the link have, so that neither we nor Cloudflare can read them; a web page you choose to bring in, which is loaded as your browser would load it; and, in the copy from this website, this website, to look for new versions, and GitHub, to download them."
   ],
   [
    "Crash reports",
    "If you have chosen to share analytics with app developers in macOS's settings, Apple may pass anonymous crash reports on to us. You can change this at any time in System Settings › Privacy & Security › Analytics & Improvements."
   ],
   [
    "Children",
    "Bezzle collects no data from anyone, including children."
   ],
   [
    "Changes and contact",
    "If this policy changes, the new version will appear on this page with a new date. Questions are welcome: <a href=\"support.html\">get in touch</a>."
   ]
  ],
  "nav_download": "Download",
  "nav_news": "What’s New",
  "cta_download": "Download for Mac",
  "cta_store": "Mac App Store",
  "dl_title": "Download Bezzle",
  "dl_sub": "Free, with everything included. The same Bezzle as on the Mac App Store.",
  "dl_button": "Download Bezzle {v}",
  "dl_facts": "{mb} MB · macOS {os} or later · Signed and notarized by Apple",
  "dl_started": "Bezzle is on its way to your Downloads folder.",
  "steps_h": "Three steps",
  "steps": [
   [
    "Open the download",
    "Double-click {zip} in your Downloads folder, if your browser has not opened it already."
   ],
   [
    "Move it to Applications",
    "Drag Bezzle into the Applications folder."
   ],
   [
    "Open Bezzle",
    "From Applications or with Spotlight. Apple has checked it, so it opens like any app."
   ]
  ],
  "updates_h": "It keeps itself up to date",
  "updates_p": "Bezzle looks for a new version once a day, fetches it in the background and puts it in place the next time you quit. To look right away, choose Bezzle › Check for Updates…",
  "updates_link": "What’s new in {v}",
  "both_h": "Website or App Store?",
  "both_p": "Both are the same Bezzle, free and complete. The App Store keeps its copy up to date, and this one updates itself. Either opens the same designs, and you can share designs between the two. Keep one of them in Applications, not both.",
  "inv_title": "A design is waiting for you",
  "inv_sub": "Someone shared a design with you in Bezzle. It opens in Bezzle on your Mac, where you work on it together.",
  "inv_button": "Open in Bezzle",
  "inv_missing": "This link is not complete. Ask for a new invitation.",
  "inv_steps_h": "If it does not open",
  "inv_steps": [
   [
    "Get Bezzle",
    "Free from the Mac App Store or from this website. Open it once."
   ],
   [
    "Sign in to iCloud",
    "On your Mac, in System Settings › Apple Account. Signing in on the iCloud website is not enough."
   ],
   [
    "Open the invitation",
    "Come back to this page and click Open in Bezzle."
   ]
  ],
  "inv_steps_link": [
   [
    "Get Bezzle 1.4",
    "Free from this website. If you have it already, open it and take the update it offers."
   ],
   [
    "Open the design",
    "Come back to this page and click Open in Bezzle."
   ]
  ],
  "news_h": "What’s new",
  "news_sub": "Every version of Bezzle, newest first.",
  "version": "Version {v}",
  "faq_updates": [
   "How does Bezzle stay up to date?",
   "The Mac App Store updates its copy. The copy from this website updates itself: it looks for a new version once a day and puts it in place when you quit. Bezzle › Check for Updates… looks right away."
  ],
  "net_and": "and ",
  "net_updates": "; and, in the copy from this website only, GitHub, which hosts this website and its downloads, once a day, to look for a new version of Bezzle, sending nothing but the version you have.",
  "effective_on": "Effective {}",
  "story_label": "Bezzle at work",
  "chapters": [
   [
    "Import",
    "Bring your files.",
    "Keep every layer.",
    "Adobe XD, Figma, Sketch and Photoshop files open with their artboards, layers, masks, text and pictures. Any website comes in as layers, too."
   ],
   [
    "Adaptive layout",
    "One design.",
    "Every size.",
    "Drag an artboard to a new size and Bezzle composes it again, keeping type, pictures and space in balance."
   ],
   [
    "Components",
    "Change one.",
    "Change them all.",
    "Every copy is the component. Change any of them and the rest follow, live."
   ],
   [
    "Prototypes",
    "Tap through it",
    "before you build it.",
    "Link a button to a screen. Bezzle reads the motion from your layout and plays it in a real device."
   ],
   [
    "Inspect",
    "Measure it.",
    "Copy the code.",
    "Every distance, color and font for developers, with CSS and SwiftUI for any layer, named after your styles."
   ],
   [
    "Remove background",
    "Cut out anything.",
    "In one click.",
    "People, pets and products, hair and all, lifted from their background right on your Mac. The original always stays."
   ],
   [
    "Light and dark",
    "Dark mode",
    "in one click.",
    "Bezzle names your colors and draws a dark look for each of them. Fine-tune any one by hand."
   ],
   [
    "Social decks",
    "One design.",
    "A hundred posts.",
    "A deck stacks every post on one artboard. Restyle one and all follow, while each keeps its own words and photos."
   ],
   [
    "Design together",
    "Side by side.",
    "Live.",
    "Share by link and see everyone’s pencil as they work. Talk it over in the margin and go back to any version."
   ],
   [
    "AI assistants",
    "Your AI can",
    "design, too.",
    "Connect Claude or any MCP assistant. It builds, edits, prototypes and exports right in your design, and every step can be undone."
   ]
  ],
  "ai_title": "AI assistant",
  "ai_prompt": "Make five autumn posts for the café, one per drink, with our photos and prices.",
  "ai_steps": [
   "Made “Autumn menu” a deck of 5 posts",
   "Placed 5 photos",
   "Wrote headlines, lines and prices",
   "Exported 5 PNGs"
  ],
  "ai_done": "Done. Every step is in Undo.",
  "ai_note": "Five posts, one per drink. The prices are from your menu.",
  "names": [
   "Lea",
   "Noah",
   "Mia"
  ],
  "notes": [
   "Could “Book a tour” be a little bigger? It is the whole point of the screen.",
   "Yes! Trying 56 pt with a softer shadow.",
   "Love how the prices line up here."
  ],
  "receipt_label": "What Bezzle costs",
  "receipt_sub": "Design studio for Mac",
  "receipt_items": [
   "Adaptive layout",
   "Components and styles",
   "Light and dark",
   "Prototypes",
   "Inspect and code",
   "Social decks",
   "Remove background",
   "Design together, live",
   "AI assistants",
   "XD, Figma, Sketch and Photoshop files",
   "Export to PNG, JPEG, WebP, AVIF, SVG, PDF",
   "Every update"
  ],
  "included": "included",
  "receipt_rows": [
   [
    "Subscription",
    "none"
   ],
   [
    "Account",
    "none"
   ]
  ],
  "total": "Total",
  "amount": "0.00",
  "receipt_thanks": "Thank you for designing with Bezzle.",
  "all_questions": "All questions",
  "foot_help": "Help",
  "foot_report": "Report a problem"
 },
 "de": {
  "title": "Bezzle: die kostenlose Design-App für den Mac",
  "desc": "Bezzle ist ein komplettes Designstudio für deinen Mac, und es ist kostenlos: Apps, Websites, Social Posts und Print, mit Komponenten, Prototypen, Übergabe an die Entwicklung, Dunkelmodus per Klick, Freistellen per Klick und Live-Zusammenarbeit. Kein Abo, kein Konto.",
  "nav_support": "Support",
  "nav_privacy": "Datenschutz",
  "nav_features": "Funktionen", "nav_free": "Kostenlos", "nav_language": "Sprache", "nav_menu": "Menü",
  "h1": [
   "Alle Werkzeuge.",
   "Kein Abo."
  ],
  "lede": "Bezzle ist ein komplettes Designstudio für deinen Mac: Apps, Websites, Social Posts und Print. Es öffnet deine Dateien aus Adobe XD, Figma und Sketch, und es ist kostenlos. Keine Testversion, kein Freemium.",
  "cta": "Bezzle im Mac App Store laden",
  "cta_small": "Kostenlos · Kein Abo · Kein Konto · macOS 26 oder neuer",
  "free_h": "Kostenlos. Wirklich.",
  "free_sub": "Design-Werkzeuge sind zur Miete geworden. Bezzle gehört dir, ohne Einschränkungen.",
  "free": [
   [
    "Kein Abo",
    "Alle Werkzeuge und alle Exporte vom ersten Start an. Keine Tarife, keine Lizenzen, keine ablaufende Testphase."
   ],
   [
    "Kein Konto",
    "Öffnen und loslegen. Auch zum Teilen brauchst du keins: Schick einen Link, und wer ihn öffnet, arbeitet mit dir."
   ],
   [
    "Nichts gesperrt",
    "Keine Pro-Stufe, keine Wasserzeichen. Was du auf dieser Seite siehst, ist ganz Bezzle, für alle."
   ]
  ],
  "best_h": "Das Beste aller Design-Apps. In einer.",
  "best_sub": "Die Ideen, die Designer lieben, jede einfacher gemacht, und ein paar, die keine andere App hat.",
  "cards": [
   [
    "Öffne deine Dateien",
    "Dateien aus Adobe XD, Figma und Sketch kommen mit Zeichenflächen, Ebenen, Masken, Texten und Bildern. Auch jede Website kommt als Ebenen herein."
   ],
   [
    "Komponenten und Stile",
    "Jede Kopie ist die Komponente: Ändere eine, und alle folgen. Benenne Farben, Schrift, Schatten und Ecken und nutze sie überall."
   ],
   [
    "Jedes Format, hell und dunkel",
    "Zieh eine Zeichenfläche auf ein neues Format, und das Layout komponiert sich neu. Ein Klick zeichnet ihren dunklen Look."
   ],
   [
    "Prototypen und Übergabe",
    "Verbinde einen Button mit einem Screen und spiel es in einem echten Gerät ab. Die Entwicklung misst alles aus und kopiert CSS oder SwiftUI."
   ],
   [
    "Stapel für Social Media",
    "Dutzende Posts auf einer Zeichenfläche, gestapelt wie Karten. Ändere den Look von einem, und alle folgen."
   ],
   [
    "Hintergrund entfernen",
    "Menschen, Tiere und Produkte mit einem Klick freigestellt, samt Haaren, direkt auf deinem Mac."
   ],
   [
    "Gemeinsam gestalten, live",
    "Teile per Link und sieh den Stift aller, während sie arbeiten. Notizen am Rand, und jede Version bleibt erhalten."
   ],
   [
    "Deine KI gestaltet mit",
    "Ein eingebauter MCP-Server lässt Claude oder einen anderen MCP-Assistenten Screens, Stapel und Prototypen bauen, jeder Schritt lässt sich widerrufen."
   ],
   [
    "Alles exportieren",
    "PNG, JPEG, WebP, AVIF, SVG und PDF in 1x bis 4x, mit Vorlagen, und alle Posts eines Stapels auf einmal."
   ]
  ],
  "gallery_h": "So sieht es aus",
  "closing": "Kostenlos, mit allem drin.",
  "support_h": "Support",
  "support_sub": "Hilfe zu Bezzle, der kostenlosen Design-App für den Mac",
  "support_intro": "Funktioniert etwas nicht, oder hast du eine Idee für Bezzle? <a href=\"https://github.com/mfrports/bezzle-web/issues/new\">Schreib uns</a> (ein kostenloses GitHub-Konto ist nötig). Jede Nachricht wird gelesen. Bitte beschreib, was du getan und was du erwartet hast.",
  "faq_h": "Fragen",
  "faq": [
   [
    "Ist Bezzle wirklich kostenlos?",
    "Ja. Alle Funktionen sind enthalten, ohne Abo, ohne In-App-Käufe und ohne Konto."
   ],
   [
    "Kann ich meine Dateien aus Adobe XD, Figma oder Sketch öffnen?",
    "Ja. Wähle Ablage › Aus XD, Figma oder Sketch importieren oder zieh die Datei auf Bezzle. Für Figma sicherst du die Datei zuerst in Figma mit Save local copy als .fig. Zeichenflächen, Ebenen, Texte, Bilder, Verläufe und Schatten kommen mit; ein kurzer Bericht nennt, was nicht übernommen werden konnte."
   ],
   [
    "Wo werden meine Designs gespeichert?",
    "Im Ordner Bezzle in deinen Dokumenten. Einen Befehl zum Sichern gibt es nicht: Ein Design wird beim Arbeiten gesichert, und der Startbildschirm zeigt alle, die neuesten zuerst."
   ],
   [
    "Wie arbeite ich mit jemandem zusammen an einem Design?",
    "Klick im Fenster des Designs auf Teilen …, wähle Link kopieren und schick den Link, wie du willst. Wer ihn öffnet, arbeitet in Bezzle auf seinem Mac mit dir am Design, ganz ohne Konto. Die Änderungen aller werden Eigenschaft für Eigenschaft zusammengeführt, nichts wird überschrieben. Mit Teilen beenden … im selben Menü ist Schluss, und die anderen behalten das Design, wie es war, nur zum Ansehen."
   ],
   [
    "Können mehrere Personen dasselbe Design aus Google Drive öffnen?",
    "Ja. Ein Design in Google Drive, Dropbox, iCloud Drive oder einem anderen Ordner, den mehrere Macs abgleichen, kann auf allen zugleich offen sein. Jeder Mac schreibt seine Änderungen in eigene Dateien im Design, nichts wird überschrieben, und ihr seht einander bei der Arbeit."
   ],
   [
    "Wie verbinde ich einen KI-Assistenten?",
    "Wähle Bezzle › KI-Assistenten verbinden › Zu Claude Desktop hinzufügen. Andere MCP-Clients verbinden sich auf demselben Mac mit http://127.0.0.1:7412/mcp. Der Server ist nur auf deinem Mac erreichbar und lässt sich im selben Menü ausschalten."
   ],
   [
    "Wie funktioniert Hintergrund entfernen?",
    "Wähle eine Ebene mit einem Foto und im Inspektor Nur Motiv, oder Objekt › Hintergrund entfernen. Das geschieht auf deinem Mac mit Apples Vision-Framework. Das Originalfoto bleibt erhalten und lässt sich jederzeit wiederherstellen."
   ],
   [
    "Was ist ein Stapel?",
    "Eine Zeichenfläche mit vielen Posts, gestapelt wie Karten. Ändere das Aussehen in einem Post, und alle folgen, während jeder seine eigenen Texte und Fotos behält. Jeder Post wird als eigene Datei exportiert."
   ],
   [
    "Auf welchen Macs läuft Bezzle?",
    "Auf jedem Mac mit macOS 26 oder neuer."
   ]
  ],
  "privacy_h": "Datenschutz",
  "effective": "Gültig ab 5. November 2026",
  "privacy": [
   [
    "",
    "Bezzle sammelt keine Daten. Es gibt kein Konto, keine Analyse, keine Werbung und kein Tracking jeglicher Art, und es sendet nichts über dich oder deine Designs an uns oder an Dritte."
   ],
   [
    "Deine Designs",
    "Designs sind Dateien auf deinem Mac, im Ordner Bezzle in deinen Dokumenten oder wo immer du sie ablegst. Platzierte Bilder werden in das Design kopiert. Hintergrund entfernen läuft auf deinem Mac; Fotos werden nie hochgeladen. Ein Design in einem Ordner, den Google Drive, Dropbox oder iCloud Drive abgleicht, geht dorthin, wohin dieser Dienst es bringt, und dafür gilt dessen Datenschutzrichtlinie."
   ],
   [
    "Teilen per Link",
    "Wenn du ein Design teilst, wird es auf dem Server von Bezzle bei Cloudflare aufbewahrt, damit alle, denen du den Link gibst, es öffnen können, auch wenn dein Mac aus ist. Alles darin wird auf deinem Mac verschlüsselt, bevor es ihn verlässt, mit einem Schlüssel, den nur der Link enthält: Weder wir noch Cloudflare können es lesen, und der Server sieht nur verschlüsselte Teile, ihre Größe und wann sie ankommen. Wer den Link hat, kann das Design öffnen. Mit Teilen beenden … wird es vom Server gelöscht. Versionen von Bezzle vor 1.4 haben Designs stattdessen über Apples iCloud (CloudKit) geteilt, für die Apples Datenschutzrichtlinie gilt."
   ],
   [
    "KI-Assistenten",
    "Bezzle enthält einen Server für KI-Assistenten, der nur auf deinem Mac (127.0.0.1) erreichbar ist und nicht aus dem Netzwerk. Mit einem Assistenten wird nichts geteilt, solange du keinen verbindest. Tust du es, behandeln dieser Assistent und sein Anbieter, was er aus deinem Design liest, nach ihrer eigenen Datenschutzrichtlinie."
   ],
   [
    "Netzwerk",
    "Bezzle verbindet sich nur dafür mit dem Internet: mit dem Server von Bezzle bei Cloudflare für Designs, die du teilst, und, solange andere ein geteiltes Design mit dir offen haben, um eure Zeiger und Änderungen weiterzureichen, alles Ende-zu-Ende-verschlüsselt mit einem Schlüssel, den nur die Leute mit dem Link haben, sodass weder wir noch Cloudflare es lesen können; mit einer Website, die du hereinholen willst, die so geladen wird, wie dein Browser sie laden würde; und in der Kopie von dieser Website mit dieser Website, um nach neuen Versionen zu sehen, und mit GitHub, um sie zu laden."
   ],
   [
    "Absturzberichte",
    "Wenn du in den macOS-Einstellungen zugestimmt hast, Analysedaten mit App-Entwicklern zu teilen, kann Apple uns anonyme Absturzberichte weitergeben. Das kannst du jederzeit unter Systemeinstellungen › Datenschutz & Sicherheit › Analyse & Verbesserungen ändern."
   ],
   [
    "Kinder",
    "Bezzle sammelt von niemandem Daten, auch nicht von Kindern."
   ],
   [
    "Änderungen und Kontakt",
    "Ändert sich diese Erklärung, erscheint die neue Fassung mit neuem Datum auf dieser Seite. Fragen sind willkommen: <a href=\"support.html\">schreib uns</a>."
   ]
  ],
  "nav_download": "Download",
  "nav_news": "Neuigkeiten",
  "cta_download": "Für den Mac laden",
  "cta_store": "Mac App Store",
  "dl_title": "Bezzle laden",
  "dl_sub": "Kostenlos, mit allem drin. Dasselbe Bezzle wie im Mac App Store.",
  "dl_button": "Bezzle {v} laden",
  "dl_facts": "{mb} MB · macOS {os} oder neuer · Signiert und von Apple beglaubigt",
  "dl_started": "Bezzle ist unterwegs in deinen Downloads-Ordner.",
  "steps_h": "Drei Schritte",
  "steps": [
   [
    "Download öffnen",
    "Doppelklicke {zip} in deinem Downloads-Ordner, falls dein Browser die Datei nicht schon geöffnet hat."
   ],
   [
    "In Programme bewegen",
    "Zieh Bezzle in den Ordner Programme."
   ],
   [
    "Bezzle öffnen",
    "Aus Programme oder mit Spotlight. Apple hat es geprüft, darum öffnet es sich wie jede App."
   ]
  ],
  "updates_h": "Es hält sich selbst aktuell",
  "updates_p": "Bezzle schaut einmal am Tag nach einer neuen Version, lädt sie im Hintergrund und setzt sie ein, wenn du es das nächste Mal beendest. Um sofort nachzuschauen, wähle Bezzle › Nach Updates suchen …",
  "updates_link": "Neu in {v}",
  "both_h": "Website oder App Store?",
  "both_p": "Beide sind dasselbe Bezzle, kostenlos und vollständig. Der App Store hält seine Kopie aktuell, diese hier aktualisiert sich selbst. Beide öffnen dieselben Designs, und du kannst Designs zwischen beiden teilen. Behalte eines davon in Programme, nicht beide.",
  "inv_title": "Ein Design wartet auf dich",
  "inv_sub": "Jemand hat ein Design in Bezzle mit dir geteilt. Es öffnet sich in Bezzle auf deinem Mac, und ihr arbeitet gemeinsam daran.",
  "inv_button": "In Bezzle öffnen",
  "inv_missing": "Dieser Link ist unvollständig. Bitte um eine neue Einladung.",
  "inv_steps_h": "Falls es sich nicht öffnet",
  "inv_steps": [
   [
    "Bezzle holen",
    "Kostenlos im Mac App Store oder auf dieser Website. Öffne es einmal."
   ],
   [
    "Bei iCloud anmelden",
    "Auf deinem Mac unter Systemeinstellungen › Apple Account. Die Anmeldung auf der iCloud Website reicht nicht."
   ],
   [
    "Einladung öffnen",
    "Komm auf diese Seite zurück und klicke auf „In Bezzle öffnen“."
   ]
  ],
  "inv_steps_link": [
   [
    "Bezzle 1.4 holen",
    "Kostenlos auf dieser Website. Hast du es schon, öffne es und nimm das Update, das es dir anbietet."
   ],
   [
    "Design öffnen",
    "Komm auf diese Seite zurück und klicke auf „In Bezzle öffnen“."
   ]
  ],
  "news_h": "Neuigkeiten",
  "news_sub": "Jede Version von Bezzle, die neueste zuerst.",
  "version": "Version {v}",
  "faq_updates": [
   "Wie bleibt Bezzle aktuell?",
   "Die Kopie aus dem Mac App Store aktualisiert der App Store. Die Kopie von dieser Website aktualisiert sich selbst: Sie schaut einmal am Tag nach einer neuen Version und setzt sie ein, wenn du Bezzle beendest. Bezzle › Nach Updates suchen … schaut sofort nach."
  ],
  "net_and": "und ",
  "net_updates": "; und, nur in der Kopie von dieser Website, mit GitHub, wo diese Website und ihre Downloads liegen, einmal am Tag, um nach einer neuen Version von Bezzle zu schauen, wobei nichts als deine Version übermittelt wird.",
  "effective_on": "Gültig ab {}",
  "story_label": "Bezzle bei der Arbeit",
  "chapters": [
   [
    "Import",
    "Bring deine Dateien.",
    "Jede Ebene bleibt.",
    "Dateien aus Adobe XD, Figma, Sketch und Photoshop öffnen sich mit Zeichenflächen, Ebenen, Masken, Texten und Bildern. Auch jede Website kommt als Ebenen herein."
   ],
   [
    "Adaptives Layout",
    "Ein Design.",
    "Jede Größe.",
    "Zieh eine Zeichenfläche auf eine neue Größe, und Bezzle komponiert sie neu. Schrift, Bilder und Abstände bleiben im Gleichgewicht."
   ],
   [
    "Komponenten",
    "Eine ändern.",
    "Alle ändern.",
    "Jede Kopie ist die Komponente. Ändere eine davon, und alle anderen folgen sofort."
   ],
   [
    "Prototypen",
    "Durchtippen,",
    "bevor du baust.",
    "Verbinde einen Button mit einem Screen. Bezzle liest die Bewegung aus deinem Layout und spielt sie in einem echten Gerät ab."
   ],
   [
    "Untersuchen",
    "Ausmessen.",
    "Code kopieren.",
    "Jeder Abstand, jede Farbe und Schrift für die Entwicklung, mit CSS und SwiftUI für jede Ebene, benannt nach deinen Stilen."
   ],
   [
    "Hintergrund entfernen",
    "Alles freistellen.",
    "Mit einem Klick.",
    "Menschen, Tiere und Produkte, samt Haaren, direkt auf deinem Mac freigestellt. Das Original bleibt immer erhalten."
   ],
   [
    "Hell und dunkel",
    "Dunkelmodus",
    "mit einem Klick.",
    "Bezzle benennt deine Farben und zeichnet für jede einen dunklen Look. Jeden davon kannst du von Hand anpassen."
   ],
   [
    "Social Posts",
    "Ein Design.",
    "Hundert Posts.",
    "Ein Stapel hält alle Posts auf einer Zeichenfläche. Ändere den Look einmal und alle folgen, jeder mit eigenen Texten und Fotos."
   ],
   [
    "Gemeinsam gestalten",
    "Seite an Seite.",
    "Live.",
    "Teile per Link und sieh den Stift aller, während sie arbeiten. Besprecht euch am Rand, und geh zu jeder Version zurück."
   ],
   [
    "KI-Assistenten",
    "Deine KI",
    "gestaltet mit.",
    "Verbinde Claude oder einen anderen MCP-Assistenten. Er baut, ändert, verlinkt und exportiert direkt in deinem Design, und jeder Schritt lässt sich widerrufen."
   ]
  ],
  "ai_title": "KI-Assistent",
  "ai_prompt": "Mach fünf Herbst-Posts für das Café, einen pro Getränk, mit unseren Fotos und Preisen.",
  "ai_steps": [
   "„Autumn menu“ zu einem Stapel mit 5 Posts gemacht",
   "5 Fotos platziert",
   "Titel, Texte und Preise geschrieben",
   "5 PNGs exportiert"
  ],
  "ai_done": "Fertig. Jeder Schritt lässt sich widerrufen.",
  "ai_note": "Fünf Posts, einer pro Getränk. Die Preise sind aus deiner Karte.",
  "names": [
   "Lea",
   "Noah",
   "Mia"
  ],
  "notes": [
   "Könnte „Book a tour“ etwas größer sein? Darum geht es auf dem ganzen Screen.",
   "Ja! Ich probiere 56 pt mit weicherem Schatten.",
   "Schön, wie sauber die Preise hier untereinander stehen."
  ],
  "receipt_label": "Was Bezzle kostet",
  "receipt_sub": "Designstudio für den Mac",
  "receipt_items": [
   "Adaptives Layout",
   "Komponenten und Stile",
   "Hell und dunkel",
   "Prototypen",
   "Untersuchen und Code",
   "Social Posts",
   "Hintergrund entfernen",
   "Gemeinsam gestalten, live",
   "KI-Assistenten",
   "Dateien aus XD, Figma, Sketch und Photoshop",
   "Export als PNG, JPEG, WebP, AVIF, SVG, PDF",
   "Jedes Update"
  ],
  "included": "inklusive",
  "receipt_rows": [
   [
    "Abo",
    "keins"
   ],
   [
    "Konto",
    "keins"
   ]
  ],
  "total": "Total",
  "amount": "0.00",
  "receipt_thanks": "Danke, dass du mit Bezzle gestaltest.",
  "all_questions": "Alle Fragen",
  "foot_help": "Hilfe",
  "foot_report": "Problem melden"
 },
 "fr": {
  "title": "Bezzle : l’app de design gratuite pour Mac",
  "desc": "Bezzle est un studio de design complet pour ton Mac, et il est gratuit : apps, sites web, posts et print, avec composants, prototypes, inspection, mode sombre en un clic, détourage en un clic et création à plusieurs en direct. Sans abonnement, sans compte.",
  "nav_support": "Assistance",
  "nav_privacy": "Confidentialité",
  "nav_features": "Fonctionnalités", "nav_free": "Gratuit", "nav_language": "Langue", "nav_menu": "Menu",
  "h1": [
   "Tous les outils.",
   "Aucun abonnement."
  ],
  "lede": "Bezzle est un studio de design complet pour ton Mac : apps, sites web, posts pour les réseaux et print. Il ouvre tes fichiers Adobe XD, Figma et Sketch, et il est gratuit. Ni version d’essai ni freemium.",
  "cta": "Obtenir Bezzle sur le Mac App Store",
  "cta_small": "Gratuit · Sans abonnement · Sans compte · macOS 26 ou ultérieur",
  "free_h": "Gratuit. Vraiment.",
  "free_sub": "Les outils de design se louent désormais. Bezzle est à toi, sans rien retenir.",
  "free": [
   [
    "Sans abonnement",
    "Tous les outils et tous les exports dès le premier lancement. Ni formules, ni licences, ni essai qui expire."
   ],
   [
    "Sans compte",
    "Ouvre l’app et crée. Pour partager non plus : envoie un lien, et la personne qui l’ouvre travaille avec toi."
   ],
   [
    "Rien de verrouillé",
    "Pas de version pro, pas de filigrane. Ce que tu vois sur cette page, c’est tout Bezzle, pour tout le monde."
   ]
  ],
  "best_h": "Le meilleur de chaque app de design. En une seule.",
  "best_sub": "Les idées que les designers aiment, chacune rendue plus simple, et quelques-unes qu’aucune autre app n’a.",
  "cards": [
   [
    "Ouvre tes fichiers",
    "Les fichiers Adobe XD, Figma et Sketch arrivent avec plans de travail, calques, masques, textes et images. Tout site web arrive aussi en calques."
   ],
   [
    "Composants et styles",
    "Chaque copie est le composant : modifies-en une et toutes suivent. Nomme couleurs, textes, ombres et coins, et utilise-les partout."
   ],
   [
    "Toutes les tailles, clair et sombre",
    "Donne une nouvelle taille à un plan de travail et la mise en page se recompose. Un clic dessine sa version sombre."
   ],
   [
    "Prototypes et inspection",
    "Relie un bouton à un écran et joue-le dans un vrai appareil. Les développeurs mesurent tout et copient le CSS ou le SwiftUI."
   ],
   [
    "Des piles pour les réseaux",
    "Des dizaines de posts sur un seul plan de travail, empilés comme des cartes. Change le style de l’un et tous suivent."
   ],
   [
    "Supprimer l’arrière-plan",
    "Personnes, animaux et produits détourés en un clic, cheveux compris, directement sur ton Mac."
   ],
   [
    "Créer ensemble, en direct",
    "Partage par lien et vois le crayon de chacun pendant qu’il travaille. Des notes en marge, et chaque version conservée."
   ],
   [
    "Ton IA crée avec toi",
    "Un serveur MCP intégré permet à Claude ou à tout assistant MCP de construire écrans, piles et prototypes, chaque étape pouvant être annulée."
   ],
   [
    "Exporte tout",
    "PNG, JPEG, WebP, AVIF, SVG et PDF de 1x à 4x, avec des préréglages, et tous les posts d’une pile d’un coup."
   ]
  ],
  "gallery_h": "Bezzle en action",
  "closing": "Gratuit, tout compris.",
  "support_h": "Assistance",
  "support_sub": "De l’aide pour Bezzle, l’app de design gratuite pour Mac",
  "support_intro": "Quelque chose ne marche pas, ou une idée pour Bezzle ? <a href=\"https://github.com/mfrports/bezzle-web/issues/new\">Écris-nous</a> (un compte GitHub gratuit est nécessaire). Chaque message est lu. Dis-nous ce que tu as fait et ce que tu attendais.",
  "faq_h": "Questions",
  "faq": [
   [
    "Bezzle est-il vraiment gratuit ?",
    "Oui. Toutes les fonctions sont incluses, sans abonnement, sans achat intégré et sans compte."
   ],
   [
    "Puis-je ouvrir mes fichiers Adobe XD, Figma ou Sketch ?",
    "Oui. Choisis Fichier › Importer depuis XD, Figma ou Sketch, ou dépose le fichier sur Bezzle. Pour Figma, utilise d’abord Save local copy dans Figma pour obtenir un fichier .fig. Plans de travail, calques, textes, images, dégradés et ombres sont repris ; un court rapport liste ce qui n’a pas pu l’être."
   ],
   [
    "Où sont enregistrés mes designs ?",
    "Dans le dossier Bezzle de tes Documents. Il n’y a pas de commande Enregistrer : un design s’enregistre pendant que tu travailles, et l’écran d’accueil les montre tous, du plus récent au plus ancien."
   ],
   [
    "Comment travailler à plusieurs sur un design ?",
    "Clique sur Partager… dans la fenêtre du design, choisis Copier le lien et envoie le lien comme tu veux. La personne qui l’ouvre travaille avec toi sur le design dans Bezzle sur son Mac, sans aucun compte. Les modifications de chacun se fusionnent propriété par propriété, rien n’est écrasé. Arrêter le partage… dans le même menu y met fin, et les autres gardent le design tel qu’il était, en lecture seule."
   ],
   [
    "Plusieurs personnes peuvent-elles ouvrir le même design depuis Google Drive ?",
    "Oui. Un design gardé dans Google Drive, Dropbox, iCloud Drive ou tout dossier que plusieurs Mac synchronisent peut être ouvert sur tous à la fois. Chaque Mac écrit ses modifications dans ses propres fichiers à l’intérieur du design, rien n’est écrasé, et vous vous voyez travailler."
   ],
   [
    "Comment connecter un assistant IA ?",
    "Choisis Bezzle › Connecter un assistant IA › Ajouter à Claude Desktop. Les autres clients MCP se connectent à http://127.0.0.1:7412/mcp sur le même Mac. Le serveur n’écoute que sur ton Mac et se désactive dans le même menu."
   ],
   [
    "Comment fonctionne la suppression de l’arrière-plan ?",
    "Sélectionne un calque rempli d’une photo et choisis Sujet seul dans l’inspecteur, ou Objet › Supprimer l’arrière-plan. Tout se fait sur ton Mac avec le framework Vision d’Apple. La photo d’origine est conservée et peut être rétablie à tout moment."
   ],
   [
    "Qu’est-ce qu’une pile ?",
    "Un plan de travail qui contient plusieurs posts, empilés comme des cartes. Change l’apparence d’un élément dans un post et tous suivent, chacun gardant ses propres textes et photos. Chaque post est exporté dans son propre fichier."
   ],
   [
    "Sur quels Mac Bezzle fonctionne-t-il ?",
    "Sur tout Mac avec macOS 26 ou ultérieur."
   ]
  ],
  "privacy_h": "Confidentialité",
  "effective": "En vigueur depuis le 5 novembre 2026",
  "privacy": [
   [
    "",
    "Bezzle ne collecte aucune donnée. Il n’a ni compte, ni statistiques, ni publicité, ni pistage d’aucune sorte, et n’envoie rien sur toi ou tes designs, ni à nous, ni à des tiers."
   ],
   [
    "Tes designs",
    "Les designs sont des fichiers sur ton Mac, dans le dossier Bezzle de tes Documents ou là où tu les ranges. Les images placées sont copiées dans le design. La suppression de l’arrière-plan se fait sur ton Mac ; les photos ne sont jamais envoyées. Un design gardé dans un dossier que Google Drive, Dropbox ou iCloud Drive synchronise va là où ce service l’emmène, selon sa propre politique de confidentialité."
   ],
   [
    "Partage par lien",
    "Quand tu partages un design, il est gardé sur le serveur de Bezzle chez Cloudflare, pour que les personnes à qui tu donnes le lien puissent l’ouvrir, même quand ton Mac est éteint. Tout ce qu’il contient est chiffré sur ton Mac avant de le quitter, avec une clé que seul le lien contient : ni nous ni Cloudflare ne pouvons le lire, et le serveur ne voit que des morceaux chiffrés, leur taille et le moment où ils arrivent. Toute personne ayant le lien peut ouvrir le design. Arrêter le partage… le supprime du serveur. Les versions de Bezzle avant la 1.4 partageaient les designs par iCloud (CloudKit) d’Apple, où s’applique la politique de confidentialité d’Apple."
   ],
   [
    "Assistants IA",
    "Bezzle inclut un serveur pour assistants IA qui n’écoute que sur ton Mac (127.0.0.1) et n’est pas joignable depuis le réseau. Rien n’est partagé avec un assistant tant que tu n’en connectes pas. Si tu le fais, ce qu’il lit de ton design est traité par cet assistant et son fournisseur selon leur propre politique de confidentialité."
   ],
   [
    "Réseau",
    "Bezzle ne se connecte à internet que pour ceci : le serveur de Bezzle chez Cloudflare, pour les designs que tu partages et, tant que d’autres ont un design partagé ouvert avec toi, pour transmettre vos pointeurs et vos modifications, le tout chiffré de bout en bout avec une clé que seules les personnes ayant le lien possèdent, de sorte que ni nous ni Cloudflare ne pouvons le lire ; une page web que tu choisis d’importer, chargée comme ton navigateur la chargerait ; et, dans la copie de ce site, ce site, pour chercher les nouvelles versions, et GitHub, pour les télécharger."
   ],
   [
    "Rapports de plantage",
    "Si tu as choisi de partager les données d’analyse avec les développeurs dans les réglages de macOS, Apple peut nous transmettre des rapports de plantage anonymes. Tu peux changer cela à tout moment dans Réglages Système › Confidentialité et sécurité › Analyse et améliorations."
   ],
   [
    "Enfants",
    "Bezzle ne collecte de données de personne, enfants compris."
   ],
   [
    "Modifications et contact",
    "Si cette politique change, la nouvelle version paraîtra sur cette page avec une nouvelle date. Les questions sont les bienvenues : <a href=\"support.html\">écris-nous</a>."
   ]
  ],
  "nav_download": "Télécharger",
  "nav_news": "Nouveautés",
  "cta_download": "Télécharger pour Mac",
  "cta_store": "Mac App Store",
  "dl_title": "Télécharger Bezzle",
  "dl_sub": "Gratuit, avec tout inclus. Le même Bezzle que sur le Mac App Store.",
  "dl_button": "Télécharger Bezzle {v}",
  "dl_facts": "{mb} Mo · macOS {os} ou ultérieur · Signé et notarié par Apple",
  "dl_started": "Bezzle arrive dans ton dossier Téléchargements.",
  "steps_h": "Trois étapes",
  "steps": [
   [
    "Ouvre le téléchargement",
    "Double-clique sur {zip} dans ton dossier Téléchargements, si ton navigateur ne l’a pas déjà ouvert."
   ],
   [
    "Place-le dans Applications",
    "Fais glisser Bezzle dans le dossier Applications."
   ],
   [
    "Ouvre Bezzle",
    "Depuis Applications ou avec Spotlight. Apple l’a vérifié, il s’ouvre donc comme n’importe quelle app."
   ]
  ],
  "updates_h": "Il se tient à jour tout seul",
  "updates_p": "Bezzle cherche une nouvelle version une fois par jour, la télécharge en arrière-plan et l’installe la prochaine fois que tu le quittes. Pour vérifier tout de suite, choisis Bezzle › Rechercher des mises à jour…",
  "updates_link": "Nouveautés de la {v}",
  "both_h": "Site ou App Store ?",
  "both_p": "Les deux sont le même Bezzle, gratuit et complet. L’App Store tient sa copie à jour, celle-ci se met à jour toute seule. Les deux ouvrent les mêmes designs, et tu peux partager des designs entre les deux. Garde l’un des deux dans Applications, pas les deux.",
  "inv_title": "Un design t’attend",
  "inv_sub": "Quelqu’un a partagé un design avec toi dans Bezzle. Il s’ouvre dans Bezzle sur ton Mac, où vous y travaillez ensemble.",
  "inv_button": "Ouvrir dans Bezzle",
  "inv_missing": "Ce lien est incomplet. Demande une nouvelle invitation.",
  "inv_steps_h": "Si rien ne s’ouvre",
  "inv_steps": [
   [
    "Installe Bezzle",
    "Gratuit sur le Mac App Store ou sur ce site. Ouvre-le une fois."
   ],
   [
    "Connecte-toi à iCloud",
    "Sur ton Mac, dans Réglages Système › Compte Apple. Se connecter sur le site d’iCloud ne suffit pas."
   ],
   [
    "Ouvre l’invitation",
    "Reviens sur cette page et clique sur Ouvrir dans Bezzle."
   ]
  ],
  "inv_steps_link": [
   [
    "Installe Bezzle 1.4",
    "Gratuit sur ce site. Si tu l’as déjà, ouvre-le et accepte la mise à jour qu’il te propose."
   ],
   [
    "Ouvre le design",
    "Reviens sur cette page et clique sur Ouvrir dans Bezzle."
   ]
  ],
  "news_h": "Nouveautés",
  "news_sub": "Chaque version de Bezzle, de la plus récente à la plus ancienne.",
  "version": "Version {v}",
  "faq_updates": [
   "Comment Bezzle reste-t-il à jour ?",
   "L’App Store met à jour sa copie. La copie de ce site se met à jour toute seule : elle cherche une nouvelle version une fois par jour et l’installe quand tu quittes Bezzle. Bezzle › Rechercher des mises à jour… vérifie tout de suite."
  ],
  "net_and": "et ",
  "net_updates": " ; et, seulement dans la copie de ce site, GitHub, qui héberge ce site et ses téléchargements, une fois par jour, pour chercher une nouvelle version de Bezzle, sans rien envoyer d’autre que ta version.",
  "effective_on": "En vigueur depuis le {}",
  "story_label": "Bezzle au travail",
  "chapters": [
   [
    "Import",
    "Apporte tes fichiers.",
    "Chaque calque reste.",
    "Les fichiers Adobe XD, Figma, Sketch et Photoshop s’ouvrent avec leurs plans de travail, calques, masques, textes et images. Tout site web arrive aussi en calques."
   ],
   [
    "Mise en page adaptative",
    "Un design.",
    "Toutes les tailles.",
    "Donne une nouvelle taille à un plan de travail et Bezzle le recompose, en gardant textes, images et espaces en équilibre."
   ],
   [
    "Composants",
    "Modifie-en un.",
    "Tous suivent.",
    "Chaque copie est le composant. Change l’une d’elles et toutes les autres suivent, en direct."
   ],
   [
    "Prototypes",
    "Teste-le",
    "avant de le coder.",
    "Relie un bouton à un écran. Bezzle déduit l’animation de ta mise en page et la joue dans un vrai appareil."
   ],
   [
    "Inspecter",
    "Mesure.",
    "Copie le code.",
    "Chaque distance, couleur et police pour le développement, avec CSS et SwiftUI pour chaque calque, nommés d’après tes styles."
   ],
   [
    "Supprimer l’arrière-plan",
    "Détoure tout.",
    "En un clic.",
    "Personnes, animaux et produits, cheveux compris, détourés directement sur ton Mac. L’original reste toujours intact."
   ],
   [
    "Clair et sombre",
    "Le mode sombre",
    "en un clic.",
    "Bezzle nomme tes couleurs et dessine une version sombre de chacune. Ajuste-les à la main quand tu veux."
   ],
   [
    "Réseaux sociaux",
    "Un design.",
    "Cent publications.",
    "Une pile réunit toutes tes publications sur un seul plan de travail. Change le style une fois et tout suit, chaque post garde ses textes et ses photos."
   ],
   [
    "Créer ensemble",
    "Côte à côte.",
    "En direct.",
    "Partage par lien et vois le crayon de chacun pendant qu’il travaille. Discutez dans la marge et reviens à n’importe quelle version."
   ],
   [
    "Assistants IA",
    "Ton IA",
    "crée avec toi.",
    "Connecte Claude ou n’importe quel assistant MCP : il construit, modifie, relie et exporte dans ton design, et chaque étape peut être annulée."
   ]
  ],
  "ai_title": "Assistant IA",
  "ai_prompt": "Fais cinq posts d’automne pour le café, un par boisson, avec nos photos et nos prix.",
  "ai_steps": [
   "« Autumn menu » transformé en pile de 5 posts",
   "5 photos placées",
   "Titres, textes et prix rédigés",
   "5 PNG exportés"
  ],
  "ai_done": "Terminé. Chaque étape peut être annulée.",
  "ai_note": "Cinq posts, un par boisson. Les prix viennent de ta carte.",
  "names": [
   "Léa",
   "Noah",
   "Mia"
  ],
  "notes": [
   "« Book a tour » pourrait être un peu plus grand ? C’est tout l’enjeu de l’écran.",
   "Oui ! J’essaie 56 pt avec une ombre plus douce.",
   "J’adore l’alignement des prix ici."
  ],
  "receipt_label": "Ce que coûte Bezzle",
  "receipt_sub": "Studio de design pour Mac",
  "receipt_items": [
   "Mise en page adaptative",
   "Composants et styles",
   "Clair et sombre",
   "Prototypes",
   "Inspection et code",
   "Publications pour les réseaux",
   "Suppression de l’arrière-plan",
   "Création à plusieurs, en direct",
   "Assistants IA",
   "Fichiers XD, Figma, Sketch et Photoshop",
   "Export PNG, JPEG, WebP, AVIF, SVG, PDF",
   "Chaque mise à jour"
  ],
  "included": "inclus",
  "receipt_rows": [
   [
    "Abonnement",
    "aucun"
   ],
   [
    "Compte",
    "aucun"
   ]
  ],
  "total": "Total",
  "amount": "0,00",
  "receipt_thanks": "Merci de créer avec Bezzle.",
  "all_questions": "Toutes les questions",
  "foot_help": "Aide",
  "foot_report": "Signaler un problème"
 },
 "it": {
  "title": "Bezzle: l’app di design gratuita per Mac",
  "desc": "Bezzle è uno studio di design completo per il tuo Mac, ed è gratis: app, siti web, post social e stampa, con componenti, prototipi, hand-off, modalità scura con un clic, scontorno con un clic e lavoro di squadra dal vivo. Niente abbonamento, niente account.",
  "nav_support": "Assistenza",
  "nav_privacy": "Privacy",
  "nav_features": "Funzionalità", "nav_free": "Gratis", "nav_language": "Lingua", "nav_menu": "Menu",
  "h1": [
   "Tutti gli strumenti.",
   "Nessun abbonamento."
  ],
  "lede": "Bezzle è uno studio di design completo per il tuo Mac: app, siti web, post social e stampa. Apre i tuoi file Adobe XD, Figma e Sketch, ed è gratis. Non è una prova né un freemium.",
  "cta": "Scarica Bezzle dal Mac App Store",
  "cta_small": "Gratis · Nessun abbonamento · Nessun account · macOS 26 o successivo",
  "free_h": "Gratis. Davvero.",
  "free_sub": "Gli strumenti di design sono diventati un affitto. Bezzle è tuo, senza limiti.",
  "free": [
   [
    "Nessun abbonamento",
    "Tutti gli strumenti e tutti gli export dal primo avvio. Niente piani, niente licenze, nessuna prova che scade."
   ],
   [
    "Nessun account",
    "Apri e progetta. Nemmeno per condividere: invia un link, e chi lo apre lavora con te."
   ],
   [
    "Niente di bloccato",
    "Nessuna versione pro, nessuna filigrana. Quello che vedi in questa pagina è tutto Bezzle, per tutti."
   ]
  ],
  "best_h": "Il meglio di ogni app di design. In una sola.",
  "best_sub": "Le idee che i designer amano, ognuna resa più semplice, e alcune che nessun’altra app ha.",
  "cards": [
   [
    "Apri i tuoi file",
    "I file Adobe XD, Figma e Sketch arrivano con tavole, livelli, maschere, testi e immagini. Anche qualsiasi sito web arriva come livelli."
   ],
   [
    "Componenti e stili",
    "Ogni copia è il componente: ne cambi una e tutte seguono. Dai un nome a colori, testi, ombre e angoli e usali ovunque."
   ],
   [
    "Ogni formato, chiaro e scuro",
    "Porta una tavola a una nuova misura e il layout si ricompone. Un clic disegna la sua versione scura."
   ],
   [
    "Prototipi e hand-off",
    "Collega un pulsante a una schermata e provalo in un vero dispositivo. Chi sviluppa misura tutto e copia CSS o SwiftUI."
   ],
   [
    "Pile per i social",
    "Decine di post su un’unica tavola, impilati come carte. Cambi lo stile di uno e tutti seguono."
   ],
   [
    "Rimuovi sfondo",
    "Persone, animali e prodotti scontornati con un clic, capelli compresi, direttamente sul tuo Mac."
   ],
   [
    "Progettare insieme, dal vivo",
    "Condividi tramite link e guarda la matita di ognuno mentre lavora. Note a margine, e ogni versione conservata."
   ],
   [
    "La tua IA progetta con te",
    "Un server MCP integrato permette a Claude o a qualsiasi assistente MCP di creare schermate, pile e prototipi, e ogni passo si può annullare."
   ],
   [
    "Esporta tutto",
    "PNG, JPEG, WebP, AVIF, SVG e PDF da 1x a 4x, con preset, e tutti i post di una pila in una volta."
   ]
  ],
  "gallery_h": "Guardalo all’opera",
  "closing": "Gratis, tutto incluso.",
  "support_h": "Assistenza",
  "support_sub": "Aiuto per Bezzle, l’app di design gratuita per Mac",
  "support_intro": "Qualcosa non funziona, o hai un’idea per Bezzle? <a href=\"https://github.com/mfrports/bezzle-web/issues/new\">Scrivici</a> (serve un account GitHub gratuito). Leggiamo ogni messaggio. Indica cosa hai fatto e cosa ti aspettavi.",
  "faq_h": "Domande",
  "faq": [
   [
    "Bezzle è davvero gratis?",
    "Sì. Tutte le funzioni sono incluse, senza abbonamento, senza acquisti in-app e senza account."
   ],
   [
    "Posso aprire i miei file Adobe XD, Figma o Sketch?",
    "Sì. Scegli Archivio › Importa da XD, Figma o Sketch, o trascina il file su Bezzle. Per Figma, usa prima Save local copy in Figma per ottenere un file .fig. Tavole, livelli, testi, immagini, sfumature e ombre vengono importati; un breve resoconto elenca ciò che non è stato possibile."
   ],
   [
    "Dove vengono salvati i miei design?",
    "Nella cartella Bezzle dei tuoi Documenti. Non c’è un comando Salva: un design si salva mentre lavori, e la schermata iniziale li mostra tutti, dal più recente."
   ],
   [
    "Come lavoro su un design con qualcun altro?",
    "Fai clic su Condividi… nella finestra del design, scegli Copia link e invia il link come preferisci. Chi lo apre lavora con te al design in Bezzle sul suo Mac, senza alcun account. Le modifiche di tutti si uniscono proprietà per proprietà, niente viene sovrascritto. Interrompi condivisione… nello stesso menu la chiude, e gli altri tengono il design com’era, in sola lettura."
   ],
   [
    "Più persone possono aprire lo stesso design da Google Drive?",
    "Sì. Un design tenuto in Google Drive, Dropbox, iCloud Drive o in qualsiasi cartella che più Mac sincronizzano può essere aperto su tutti nello stesso momento. Ogni Mac scrive le sue modifiche in file propri dentro il design, niente viene sovrascritto, e vi vedete lavorare."
   ],
   [
    "Come collego un assistente IA?",
    "Scegli Bezzle › Collega un assistente IA › Aggiungi a Claude Desktop. Gli altri client MCP si collegano a http://127.0.0.1:7412/mcp sullo stesso Mac. Il server ascolta solo sul tuo Mac e si può disattivare dallo stesso menu."
   ],
   [
    "Come funziona Rimuovi sfondo?",
    "Seleziona un livello riempito con una foto e scegli Solo soggetto nell’ispettore, oppure Oggetto › Rimuovi sfondo. Avviene sul tuo Mac con il framework Vision di Apple. La foto originale resta e puoi ripristinarla in qualsiasi momento."
   ],
   [
    "Che cos’è una pila?",
    "Una tavola che contiene molti post, impilati come carte. Cambi l’aspetto di qualcosa in un post e tutti seguono, mentre ognuno tiene i suoi testi e le sue foto. Ogni post viene esportato in un file proprio."
   ],
   [
    "Su quali Mac funziona Bezzle?",
    "Su qualsiasi Mac con macOS 26 o successivo."
   ]
  ],
  "privacy_h": "Privacy",
  "effective": "In vigore dal 5 novembre 2026",
  "privacy": [
   [
    "",
    "Bezzle non raccoglie alcun dato. Non ha account, statistiche, pubblicità né tracciamento di alcun tipo, e non invia nulla su di te o sui tuoi design, né a noi né a terzi."
   ],
   [
    "I tuoi design",
    "I design sono file sul tuo Mac, nella cartella Bezzle dei tuoi Documenti o dove li tieni. Le immagini inserite vengono copiate nel design. Rimuovi sfondo funziona sul tuo Mac; le foto non vengono mai caricate. Un design tenuto in una cartella che Google Drive, Dropbox o iCloud Drive sincronizza va dove lo porta quel servizio, secondo la sua informativa sulla privacy."
   ],
   [
    "Condivisione tramite link",
    "Quando condividi un design, viene conservato sul server di Bezzle presso Cloudflare, perché chi riceve il link possa aprirlo, anche quando il tuo Mac è spento. Tutto ciò che contiene viene cifrato sul tuo Mac prima di lasciarlo, con una chiave che si trova solo nel link: né noi né Cloudflare possiamo leggerlo, e il server vede solo pezzi cifrati, la loro dimensione e quando arrivano. Chiunque abbia il link può aprire il design. Interrompi condivisione… lo cancella dal server. Le versioni di Bezzle prima della 1.4 condividevano i design tramite iCloud (CloudKit) di Apple, dove vale l’informativa sulla privacy di Apple."
   ],
   [
    "Assistenti IA",
    "Bezzle include un server per assistenti IA che ascolta solo sul tuo Mac (127.0.0.1) e non è raggiungibile dalla rete. Nulla viene condiviso con un assistente finché non ne colleghi uno. Se lo fai, ciò che legge dal tuo design è trattato da quell’assistente e dal suo fornitore secondo la loro informativa sulla privacy."
   ],
   [
    "Rete",
    "Bezzle si collega a internet solo per questo: il server di Bezzle presso Cloudflare, per i design che condividi e, mentre altri hanno aperto con te un design condiviso, per inoltrare i vostri puntatori e le modifiche, tutto cifrato end-to-end con una chiave che hanno solo le persone con il link, così che né noi né Cloudflare possiamo leggerlo; una pagina web che scegli di importare, caricata come la caricherebbe il tuo browser; e, nella copia da questo sito, questo sito, per cercare nuove versioni, e GitHub, per scaricarle."
   ],
   [
    "Rapporti sugli arresti anomali",
    "Se nelle impostazioni di macOS hai scelto di condividere le analisi con gli sviluppatori, Apple può inoltrarci rapporti anonimi sugli arresti anomali. Puoi cambiarlo in qualsiasi momento in Impostazioni di Sistema › Privacy e sicurezza › Analisi e miglioramenti."
   ],
   [
    "Bambini",
    "Bezzle non raccoglie dati da nessuno, bambini compresi."
   ],
   [
    "Modifiche e contatti",
    "Se questa informativa cambia, la nuova versione comparirà su questa pagina con una nuova data. Le domande sono benvenute: <a href=\"support.html\">scrivici</a>."
   ]
  ],
  "nav_download": "Scarica",
  "nav_news": "Novità",
  "cta_download": "Scarica per Mac",
  "cta_store": "Mac App Store",
  "dl_title": "Scarica Bezzle",
  "dl_sub": "Gratis, con tutto incluso. Lo stesso Bezzle del Mac App Store.",
  "dl_button": "Scarica Bezzle {v}",
  "dl_facts": "{mb} MB · macOS {os} o successivo · Firmato e autenticato da Apple",
  "dl_started": "Bezzle sta arrivando nella tua cartella Download.",
  "steps_h": "Tre passaggi",
  "steps": [
   [
    "Apri il download",
    "Fai doppio clic su {zip} nella cartella Download, se il browser non l’ha già aperto."
   ],
   [
    "Spostalo in Applicazioni",
    "Trascina Bezzle nella cartella Applicazioni."
   ],
   [
    "Apri Bezzle",
    "Da Applicazioni o con Spotlight. Apple l’ha controllato, quindi si apre come qualsiasi app."
   ]
  ],
  "updates_h": "Si aggiorna da solo",
  "updates_p": "Bezzle cerca una nuova versione una volta al giorno, la scarica in sottofondo e la installa la prossima volta che lo chiudi. Per controllare subito, scegli Bezzle › Verifica aggiornamenti…",
  "updates_link": "Novità della {v}",
  "both_h": "Sito o App Store?",
  "both_p": "Sono lo stesso Bezzle, gratis e completo. L’App Store tiene aggiornata la sua copia, questa si aggiorna da sola. Entrambe aprono gli stessi design, e puoi condividere design tra le due. Tieni in Applicazioni una sola delle due.",
  "inv_title": "Un design ti aspetta",
  "inv_sub": "Qualcuno ha condiviso con te un design in Bezzle. Si apre in Bezzle sul tuo Mac, dove ci lavorate insieme.",
  "inv_button": "Apri in Bezzle",
  "inv_missing": "Questo link è incompleto. Chiedi un nuovo invito.",
  "inv_steps_h": "Se non si apre",
  "inv_steps": [
   [
    "Scarica Bezzle",
    "Gratis sul Mac App Store o su questo sito. Aprilo una volta."
   ],
   [
    "Accedi a iCloud",
    "Sul tuo Mac, in Impostazioni di Sistema › Account Apple. Accedere al sito di iCloud non basta."
   ],
   [
    "Apri l’invito",
    "Torna su questa pagina e fai clic su Apri in Bezzle."
   ]
  ],
  "inv_steps_link": [
   [
    "Scarica Bezzle 1.4",
    "Gratis su questo sito. Se ce l’hai già, aprilo e accetta l’aggiornamento che ti propone."
   ],
   [
    "Apri il design",
    "Torna su questa pagina e fai clic su Apri in Bezzle."
   ]
  ],
  "news_h": "Novità",
  "news_sub": "Ogni versione di Bezzle, dalla più recente.",
  "version": "Versione {v}",
  "faq_updates": [
   "Come si mantiene aggiornato Bezzle?",
   "La copia del Mac App Store la aggiorna l’App Store. La copia di questo sito si aggiorna da sola: cerca una nuova versione una volta al giorno e la installa quando chiudi Bezzle. Bezzle › Verifica aggiornamenti… controlla subito."
  ],
  "net_and": "e ",
  "net_updates": "; e, solo nella copia di questo sito, GitHub, che ospita questo sito e i suoi download, una volta al giorno, per cercare una nuova versione di Bezzle, senza inviare altro che la tua versione.",
  "effective_on": "In vigore dal {}",
  "story_label": "Bezzle al lavoro",
  "chapters": [
   [
    "Importa",
    "Porta i tuoi file.",
    "Ogni livello resta.",
    "I file di Adobe XD, Figma, Sketch e Photoshop si aprono con tavole, livelli, maschere, testi e immagini. Anche qualsiasi sito web arriva a livelli."
   ],
   [
    "Layout adattivo",
    "Un design.",
    "Ogni formato.",
    "Porta una tavola a una nuova misura e Bezzle la ricompone, tenendo in equilibrio testi, immagini e spazi."
   ],
   [
    "Componenti",
    "Ne cambi uno.",
    "Cambiano tutti.",
    "Ogni copia è il componente. Modificane una e tutte le altre seguono, dal vivo."
   ],
   [
    "Prototipi",
    "Provalo",
    "prima di costruirlo.",
    "Collega un pulsante a una schermata. Bezzle ricava il movimento dal layout e lo riproduce in un vero dispositivo."
   ],
   [
    "Ispeziona",
    "Misura.",
    "Copia il codice.",
    "Ogni distanza, colore e font per chi sviluppa, con CSS e SwiftUI per ogni livello, con i nomi dei tuoi stili."
   ],
   [
    "Rimuovi sfondo",
    "Scontorna tutto.",
    "Con un clic.",
    "Persone, animali e prodotti, capelli compresi, scontornati direttamente sul tuo Mac. L’originale resta sempre."
   ],
   [
    "Chiaro e scuro",
    "La modalità scura",
    "con un clic.",
    "Bezzle dà un nome ai tuoi colori e disegna per ognuno una versione scura. Puoi ritoccarle tutte a mano."
   ],
   [
    "Post social",
    "Un design.",
    "Cento post.",
    "Una pila raccoglie tutti i post in un’unica tavola. Cambi lo stile una volta e tutti seguono, ognuno con i suoi testi e le sue foto."
   ],
   [
    "Progettare insieme",
    "Fianco a fianco.",
    "Dal vivo.",
    "Condividi tramite link e guarda la matita di ognuno mentre lavora. Parlatene a margine e torna a qualsiasi versione."
   ],
   [
    "Assistenti IA",
    "La tua IA",
    "progetta con te.",
    "Collega Claude o qualsiasi assistente MCP: crea, modifica, collega ed esporta direttamente nel tuo design, e ogni passo si può annullare."
   ]
  ],
  "ai_title": "Assistente IA",
  "ai_prompt": "Crea cinque post autunnali per il bar, uno per bevanda, con le nostre foto e i prezzi.",
  "ai_steps": [
   "“Autumn menu” trasformato in una pila di 5 post",
   "5 foto inserite",
   "Titoli, testi e prezzi scritti",
   "5 PNG esportati"
  ],
  "ai_done": "Fatto. Ogni passo si può annullare.",
  "ai_note": "Cinque post, uno per bevanda. I prezzi vengono dal tuo menu.",
  "names": [
   "Lea",
   "Noah",
   "Mia"
  ],
  "notes": [
   "“Book a tour” potrebbe essere un po’ più grande? È il senso di tutta la schermata.",
   "Sì! Provo 56 pt con un’ombra più morbida.",
   "Adoro come si allineano i prezzi qui."
  ],
  "receipt_label": "Quanto costa Bezzle",
  "receipt_sub": "Studio di design per Mac",
  "receipt_items": [
   "Layout adattivo",
   "Componenti e stili",
   "Chiaro e scuro",
   "Prototipi",
   "Ispezione e codice",
   "Post social",
   "Rimozione dello sfondo",
   "Progettare insieme, dal vivo",
   "Assistenti IA",
   "File XD, Figma, Sketch e Photoshop",
   "Export in PNG, JPEG, WebP, AVIF, SVG, PDF",
   "Ogni aggiornamento"
  ],
  "included": "incluso",
  "receipt_rows": [
   [
    "Abbonamento",
    "nessuno"
   ],
   [
    "Account",
    "nessuno"
   ]
  ],
  "total": "Totale",
  "amount": "0,00",
  "receipt_thanks": "Grazie di progettare con Bezzle.",
  "all_questions": "Tutte le domande",
  "foot_help": "Aiuto",
  "foot_report": "Segnala un problema"
 }
};

for (const code of Object.keys(T)) T[code].__code = code;
