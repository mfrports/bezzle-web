// The words of the pages for people coming from another design app (src/pages/Compare.jsx), in English,
// German, French and Italian: /adobe-xd-alternative.html, /figma-alternative.html and
// /sketch-alternative.html. Their titles and descriptions are in words-compare-heads.js.
// The rules of words.js hold: no dashes as punctuation, French with a narrow no-break space before
// ? ! : and ;. What these pages say of Bezzle is what the docs say (src/docs/<lang>/import.md for what
// comes across); what they say of the other apps is only what was sure in November 2026, and the pages
// say so. Every language has the same rows, items and questions, in the same order.
// Bezzle for Windows changes some of them, on its way and once it is out (src/words-compare-windows.js).
import { compareForWindows } from "@/words-compare-windows";

export const VS = {
 "en": {
  "common": {
   "asof": "What this page says about {rival} is how it was in November 2026. {rival}’s own website has its plans and prices as they are today.",
   "steps_h": "Bring your files",
   "across_h": "Comes across",
   "again_h": "Do again in Bezzle",
   "table_h": "Side by side",
   "what": "What",
   "better_h": "When {rival} is the better choice",
   "faq_h": "Questions",
   "others_h": "Coming from another app?",
   "docs": "Everything that comes across, in the docs",
   "get": [
    "Get Bezzle",
    "Free from this website, for any Mac with macOS 26 or later. There is no account to make."
   ],
   "check": [
    "Read the report",
    "A card at the foot of the canvas says what came across and lists anything that looks a little different, so you know what to check."
   ],
   "alt": "Bezzle’s window with a travel app’s three screens on the canvas"
  },
  "xd": {
   "chip": "From Adobe XD to Bezzle",
   "h": [
    "XD stood still.",
    "Your designs can move on."
   ],
   "lede": "Adobe stopped adding to XD. Bezzle opens your .xd files with their artboards, layers, repeat grids and components, and carries on from there: layouts that fit every size, dark mode in one click, live co-editing and an AI that designs with you. Free, on your Mac.",
   "bring": [
    "Bring the file in",
    "Choose File › Import from XD, Figma, Sketch or Photoshop… (⇧⌘I), or drop the .xd file on Bezzle. It becomes a new design, and the file itself stays as it is."
   ],
   "across": [
    "Artboards at their sizes and places, and the layers on the pasteboard",
    "Layers with their names, order and groups, hidden or locked as they were",
    "Text you can edit, in its fonts, sizes, colors and spacing",
    "Repeat grids, as Bezzle’s own Repeat Grids, each cell keeping its words and pictures",
    "Masks, layout grids, guides, gradients, shadows, blurs and blend modes",
    "Component instances, as what they show"
   ],
   "again": [
    "Links between screens: draw them again in Prototype mode, where Bezzle reads the motion from your layout",
    "Components: instances come in as groups, and Object › Make Component makes them components again",
    "Shared styles: they come in as the looks they give; name them again as styles"
   ],
   "rows": [
    [
     "Still developed",
     "Yes, and it keeps itself up to date",
     "No new features: Adobe keeps XD in maintenance"
    ],
    [
     "Price",
     "Free, with every feature",
     "Comes with a Creative Cloud subscription"
    ],
    [
     "Account",
     "None",
     "An Adobe account"
    ],
    [
     "Runs on",
     "Mac, with macOS 26 or later",
     "Mac and Windows"
    ],
    [
     "Opens",
     "XD, Figma, Sketch and Photoshop files, and any website",
     "Its own files, and Sketch and Photoshop files"
    ],
    [
     "Repeat grids",
     "Yes, and those from XD come across as they are",
     "Yes"
    ],
    [
     "Every size",
     "Adaptive layout composes an artboard again at any size",
     "Responsive resize and stacks"
    ],
    [
     "Prototypes",
     "Links, motion read from your layout, component states",
     "Links and auto-animate"
    ],
    [
     "Hand-off",
     "Inspect mode: every measurement, CSS and SwiftUI",
     "Shared links for developers, in the browser"
    ],
    [
     "Working together",
     "Live, by link, and nobody needs an account",
     "Coediting documents kept in Creative Cloud"
    ],
    [
     "Dark mode",
     "Drawn in one click from your colors",
     "By hand"
    ],
    [
     "Remove background",
     "One click, on your Mac",
     "No"
    ],
    [
     "AI assistants",
     "A built-in MCP server: Claude or any MCP assistant designs with you",
     "No"
    ]
   ],
   "better": [
    "You design on Windows",
    "Your work depends on XD plugins or Creative Cloud Libraries",
    "Your Mac cannot run macOS 26 yet"
   ],
   "faq": [
    [
     "Can Bezzle open Adobe XD files?",
     "Yes. Choose File › Import from XD, Figma, Sketch or Photoshop…, or drop the .xd file on Bezzle. It comes in as a new design with its artboards, layers, text, repeat grids, masks and pictures, and a short report lists anything that looks a little different. The .xd file stays as it is."
    ],
    [
     "Do my XD prototypes come across?",
     "The screens do; the links between them do not. Draw them again in Prototype mode, where Bezzle reads the motion from how your screens lie, and play them in the device they are for."
    ],
    [
     "What about documents kept in Creative Cloud?",
     "Bezzle reads .xd files on your Mac. A document kept in Creative Cloud comes in once you have saved it from XD as a file."
    ],
    [
     "Is Adobe XD discontinued?",
     "Adobe keeps XD in maintenance: it fixes problems but adds no new features. Bezzle opens your XD files, so your designs can go on without it."
    ],
    [
     "Is Bezzle really free?",
     "Yes. Every feature is included, with no subscription, no in-app purchases and no account."
    ]
   ]
  },
  "figma": {
   "chip": "From Figma to Bezzle",
   "h": [
    "All your Figma files.",
    "None of the seats."
   ],
   "lede": "Bezzle opens your Figma files and gives you components, variants, prototypes, hand-off and live co-editing in an app made for the Mac. Free, with every feature and no account. Your designs are files on your Mac, so they open without a connection too.",
   "save": [
    "Save a local copy",
    "In Figma, choose Save local copy to get a .fig file of the design."
   ],
   "bring": [
    "Bring it in",
    "In Bezzle, choose File › Import from XD, Figma, Sketch or Photoshop… (⇧⌘I), or drop the .fig file on it. It becomes a new design of its own."
   ],
   "across": [
    "Frames on a page as artboards, and frames inside frames as groups, clipped when they clip",
    "Instances as what they show, with their overrides and component properties",
    "Text you can edit, growing in width, in height or not at all, as it did",
    "Smooth corners, progressive and background blurs, gradients, shadows and blend modes",
    "Layout grids, guides and lists in text",
    "Every page, laid out one under the other on Bezzle’s one canvas"
   ],
   "again": [
    "Links between screens: draw them again in Prototype mode",
    "Components: instances come in unlinked, and Object › Make Component makes them components again",
    "Shared styles and auto layout: styles come in as the looks they give, and frames inside frames as groups"
   ],
   "rows": [
    [
     "Price",
     "Free, with every feature",
     "A free plan for 3 design files; editors pay for a seat every month"
    ],
    [
     "Account",
     "None",
     "Needed to edit and comment"
    ],
    [
     "Where designs live",
     "Files on your Mac, or in a folder Google Drive, Dropbox or iCloud Drive keeps in step",
     "In Figma’s cloud"
    ],
    [
     "Without a connection",
     "Everything works",
     "Only files that are already open"
    ],
    [
     "Runs on",
     "Mac, with macOS 26 or later",
     "Any browser, and apps for Mac and Windows"
    ],
    [
     "Opens",
     "XD, Figma, Sketch and Photoshop files, and any website",
     "Its own files and Sketch files"
    ],
    [
     "Components",
     "Components, variants, libraries and named styles",
     "Components, variants, libraries and variables"
    ],
    [
     "Every size",
     "Adaptive layout composes an artboard again at any size",
     "Auto layout and constraints"
    ],
    [
     "Prototypes",
     "Links, motion read from your layout, component states",
     "Links, smart animate, variables and conditions"
    ],
    [
     "Hand-off",
     "Inspect mode, for everyone: every measurement, CSS and SwiftUI",
     "Dev Mode, with a paid seat"
    ],
    [
     "Working together",
     "Live, by link, and nobody needs an account",
     "Live, for everyone with a Figma account"
    ],
    [
     "Dark mode",
     "Drawn in one click from your colors",
     "Set up by hand with variable modes"
    ],
    [
     "AI assistants",
     "A built-in MCP server: Claude or any MCP assistant builds and edits right in your design",
     "Figma AI and Figma Make, which use credits"
    ]
   ],
   "better": [
    "You or your team work on Windows, Linux or in a browser",
    "You rely on Figma’s plugins and community files, or on FigJam and Sites",
    "A large company needs admin controls, single sign-on and library analytics"
   ],
   "faq": [
    [
     "Can Bezzle open Figma files?",
     "Yes. In Figma, use Save local copy to get a .fig file, then choose File › Import from XD, Figma, Sketch or Photoshop… in Bezzle, or drop the file on it. Artboards, layers, text, pictures, gradients and shadows come across, and a short report lists anything that looks a little different."
    ],
    [
     "Do components and auto layout come across?",
     "Instances come in as what they show, with their overrides and component properties, but not linked to each other; Object › Make Component makes them components again. Frames inside frames become groups, laid out as they were."
    ],
    [
     "Can we work on a design together, like in Figma?",
     "Yes. Click Share…, choose Copy Link and send it. Whoever opens it works with you live in Bezzle on their Mac, with no account of any kind, and everyone’s changes merge property by property. A shared design also opens in any browser, to follow it live."
    ],
    [
     "Is there something like Dev Mode?",
     "Inspect mode, free for everyone: every distance, color and font, and CSS or SwiftUI for any layer, named after your styles."
    ],
    [
     "Does Bezzle run in a browser or on Windows?",
     "No. Bezzle is made for the Mac and needs macOS 26 or later. A design shared by link opens in any browser to be followed live, but designing happens in the app."
    ]
   ]
  },
  "sketch": {
   "chip": "From Sketch to Bezzle",
   "h": [
    "Native like Sketch.",
    "Free like nothing else."
   ],
   "lede": "Bezzle is a design app made for the Mac, as Sketch is, and it is free. It opens your Sketch files with their pages, symbols, overrides and export settings, and adds co-editing by link with no account, dark mode in one click, background removal on your Mac and an AI that designs with you.",
   "bring": [
    "Bring the file in",
    "Choose File › Import from XD, Figma, Sketch or Photoshop… (⇧⌘I), or drop the .sketch file on Bezzle. It needs to be saved by Sketch 43 or later."
   ],
   "across": [
    "Every page, its artboards, and symbol masters as artboards",
    "Symbol instances at their own size, with their overrides: text, swapped symbols, pictures and styles",
    "Export settings: each layer’s sizes, formats and suffixes become its Export card",
    "Smooth corners, layout grids and guides on artboards",
    "Text you can edit, in its fonts, sizes, colors and spacing",
    "Masks, gradients, shadows, blurs and blend modes"
   ],
   "again": [
    "Prototype links: draw them again in Prototype mode",
    "Symbols: instances come in unlinked, and Object › Make Component makes them components again",
    "Shared styles: they come in as the looks they give"
   ],
   "rows": [
    [
     "Price",
     "Free, with every feature",
     "A subscription per editor, or a license for one Mac with a year of updates"
    ],
    [
     "Account",
     "None",
     "A Sketch account for the subscription and workspace"
    ],
    [
     "Made for the Mac",
     "Yes",
     "Yes"
    ],
    [
     "Runs on",
     "Mac, with macOS 26 or later",
     "Mac; a web app to view and inspect"
    ],
    [
     "Working together",
     "Live, by link, and nobody needs an account",
     "Live, in a Sketch workspace"
    ],
    [
     "Every size",
     "Adaptive layout composes an artboard again at any size",
     "Stacks and resizing settings"
    ],
    [
     "Prototypes",
     "Links, motion read from your layout, component states",
     "Links and transitions between artboards"
    ],
    [
     "Hand-off",
     "Inspect mode, right in the app: every measurement, CSS and SwiftUI",
     "Inspecting in the browser, in its web app"
    ],
    [
     "Dark mode",
     "Drawn in one click from your colors",
     "By hand, with color variables"
    ]
   ],
   "better": [
    "Your Mac cannot run macOS 26 yet",
    "Your team relies on Sketch plugins",
    "You keep libraries and reviews in a Sketch workspace the whole team shares"
   ],
   "faq": [
    [
     "Can Bezzle open Sketch files?",
     "Yes, files saved by Sketch 43 or later. Choose File › Import from XD, Figma, Sketch or Photoshop…, or drop the file on Bezzle. Every page, artboard, symbol and export setting comes across, and a short report lists anything that looks a little different."
    ],
    [
     "Do symbols and overrides come across?",
     "Yes. Each instance is laid out at its own size with its overrides: text, swapped symbols, pictures, and layer and text styles. Instances are not linked to each other in Bezzle; Object › Make Component makes them components again."
    ],
    [
     "Is Bezzle a native Mac app like Sketch?",
     "Yes. It is made for the Mac and runs on macOS 26 or later. Your designs are files on your Mac, saved as you work."
    ],
    [
     "Can we work on a design together?",
     "Yes. Click Share…, choose Copy Link and send it. Whoever opens it works with you live in Bezzle on their Mac, with no account of any kind, and nothing anyone does is written over."
    ],
    [
     "Is Bezzle really free?",
     "Yes. Every feature is included, with no subscription, no in-app purchases and no account."
    ]
   ]
  }
 },
 "de": {
  "common": {
   "asof": "Was diese Seite über {rival} sagt, galt im November 2026. Die Website von {rival} nennt Angebote und Preise, wie sie heute sind.",
   "steps_h": "Bring deine Dateien mit",
   "across_h": "Kommt mit",
   "again_h": "In Bezzle neu machen",
   "table_h": "Im Vergleich",
   "what": "Was",
   "better_h": "Wann {rival} die bessere Wahl ist",
   "faq_h": "Fragen",
   "others_h": "Kommst du von einer anderen App?",
   "docs": "Alles, was mitkommt, im Handbuch",
   "get": [
    "Bezzle laden",
    "Kostenlos von dieser Website, für jeden Mac mit macOS 26 oder neuer. Ein Konto brauchst du nicht."
   ],
   "check": [
    "Den Bericht lesen",
    "Eine Karte unten auf der Arbeitsfläche sagt, was mitgekommen ist, und nennt, was ein wenig anders aussieht, damit du weißt, was du prüfen solltest."
   ],
   "alt": "Das Fenster von Bezzle mit den drei Screens einer Reise-App auf der Arbeitsfläche"
  },
  "xd": {
   "chip": "Von Adobe XD zu Bezzle",
   "h": [
    "XD steht still.",
    "Deine Designs nicht."
   ],
   "lede": "Adobe fügt XD nichts mehr hinzu. Bezzle öffnet deine .xd-Dateien mit Zeichenflächen, Ebenen, Wiederholungsrastern und Komponenten und macht dort weiter: Layouts, die sich jeder Größe anpassen, Dunkelmodus mit einem Klick, gemeinsames Gestalten live und eine KI, die mit dir gestaltet. Kostenlos, auf deinem Mac.",
   "bring": [
    "Die Datei hereinholen",
    "Wähle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … (⇧⌘I) oder zieh die .xd-Datei auf Bezzle. Sie wird zu einem neuen Design, und die Datei selbst bleibt, wie sie ist."
   ],
   "across": [
    "Zeichenflächen in ihren Größen und an ihren Plätzen, und die Ebenen auf der Montagefläche",
    "Ebenen mit ihren Namen, ihrer Reihenfolge und ihren Gruppen, ausgeblendet oder gesperrt, wie sie waren",
    "Bearbeitbarer Text in seinen Schriften, Größen, Farben und Abständen",
    "Wiederholungsraster, als Wiederholungsraster von Bezzle, jede Zelle mit ihren eigenen Texten und Bildern",
    "Masken, Layoutraster, Hilfslinien, Verläufe, Schatten, Unschärfen und Füllmethoden",
    "Komponenteninstanzen, als das, was sie zeigen"
   ],
   "again": [
    "Links zwischen Screens: Zeichne sie im Modus Prototyp neu, wo Bezzle die Bewegung aus deinem Layout liest",
    "Komponenten: Instanzen kommen als Gruppen herein, und Objekt › Komponente erstellen macht sie wieder zu Komponenten",
    "Geteilte Stile: Sie kommen als die Looks herein, die sie geben; benenne sie wieder als Stile"
   ],
   "rows": [
    [
     "Wird weiterentwickelt",
     "Ja, und es hält sich selbst aktuell",
     "Keine neuen Funktionen: Adobe hält XD nur noch in Wartung"
    ],
    [
     "Preis",
     "Kostenlos, mit allen Funktionen",
     "Mit einem Creative-Cloud-Abo"
    ],
    [
     "Konto",
     "Keines",
     "Ein Adobe-Konto"
    ],
    [
     "Läuft auf",
     "Mac, mit macOS 26 oder neuer",
     "Mac und Windows"
    ],
    [
     "Öffnet",
     "Dateien aus XD, Figma, Sketch und Photoshop, und jede Website",
     "Eigene Dateien sowie Sketch- und Photoshop-Dateien"
    ],
    [
     "Wiederholungsraster",
     "Ja, und die aus XD kommen mit, wie sie sind",
     "Ja"
    ],
    [
     "Jede Größe",
     "Adaptives Layout setzt eine Zeichenfläche in jeder Größe neu",
     "Responsive Größenänderung und Stacks"
    ],
    [
     "Prototypen",
     "Links, Bewegung aus deinem Layout gelesen, Zustände von Komponenten",
     "Links und Auto-Animation"
    ],
    [
     "Übergabe",
     "Modus Untersuchen: jedes Maß, CSS und SwiftUI",
     "Geteilte Links für Entwickler, im Browser"
    ],
    [
     "Zusammenarbeit",
     "Live, per Link, und niemand braucht ein Konto",
     "Gemeinsames Bearbeiten von Dokumenten in der Creative Cloud"
    ],
    [
     "Dunkelmodus",
     "Mit einem Klick aus deinen Farben gezeichnet",
     "Von Hand"
    ],
    [
     "Hintergrund entfernen",
     "Ein Klick, auf deinem Mac",
     "Nein"
    ],
    [
     "KI-Assistenten",
     "Ein eingebauter MCP-Server: Claude oder jeder MCP-Assistent gestaltet mit dir",
     "Nein"
    ]
   ],
   "better": [
    "Du gestaltest unter Windows",
    "Deine Arbeit hängt an XD-Plug-ins oder Creative Cloud Libraries",
    "Dein Mac kann macOS 26 noch nicht ausführen"
   ],
   "faq": [
    [
     "Kann Bezzle Adobe-XD-Dateien öffnen?",
     "Ja. Wähle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … oder zieh die .xd-Datei auf Bezzle. Sie kommt als neues Design herein, mit Zeichenflächen, Ebenen, Texten, Wiederholungsrastern, Masken und Bildern, und ein kurzer Bericht nennt, was ein wenig anders aussieht. Die .xd-Datei bleibt, wie sie ist."
    ],
    [
     "Kommen meine XD-Prototypen mit?",
     "Die Screens ja, die Links zwischen ihnen nicht. Zeichne sie im Modus Prototyp neu, wo Bezzle die Bewegung daraus liest, wie deine Screens liegen, und spiel sie auf dem Gerät ab, für das sie gedacht sind."
    ],
    [
     "Und Dokumente in der Creative Cloud?",
     "Bezzle liest .xd-Dateien auf deinem Mac. Ein Dokument in der Creative Cloud kommt herein, sobald du es in XD als Datei gesichert hast."
    ],
    [
     "Wird Adobe XD eingestellt?",
     "Adobe hält XD in Wartung: Fehler werden behoben, neue Funktionen kommen keine. Bezzle öffnet deine XD-Dateien, damit deine Designs ohne XD weitergehen können."
    ],
    [
     "Ist Bezzle wirklich kostenlos?",
     "Ja. Alle Funktionen sind enthalten, ohne Abo, ohne In-App-Käufe und ohne Konto."
    ]
   ]
  },
  "figma": {
   "chip": "Von Figma zu Bezzle",
   "h": [
    "Alle deine Figma-Dateien.",
    "Ohne bezahlte Plätze."
   ],
   "lede": "Bezzle öffnet deine Figma-Dateien und bietet Komponenten, Varianten, Prototypen, Übergabe und gemeinsames Gestalten live, in einer App, die für den Mac gemacht ist. Kostenlos, mit allen Funktionen und ohne Konto. Deine Designs sind Dateien auf deinem Mac und öffnen sich auch ohne Verbindung.",
   "save": [
    "Eine lokale Kopie sichern",
    "Wähle in Figma Save local copy, um eine .fig-Datei des Designs zu bekommen."
   ],
   "bring": [
    "Sie hereinholen",
    "Wähle in Bezzle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … (⇧⌘I) oder zieh die .fig-Datei darauf. Sie wird zu einem eigenen neuen Design."
   ],
   "across": [
    "Frames auf einer Seite als Zeichenflächen, Frames in Frames als Gruppen, abgeschnitten, wenn sie beschneiden",
    "Instanzen als das, was sie zeigen, mit ihren Überschreibungen und Komponenteneigenschaften",
    "Bearbeitbarer Text, der in der Breite, in der Höhe oder gar nicht wächst, wie bisher",
    "Geglättete Ecken, zunehmende Unschärfen und Hintergrundunschärfen, Verläufe, Schatten und Füllmethoden",
    "Layoutraster, Hilfslinien und Textlisten",
    "Jede Seite, untereinander auf der einen Arbeitsfläche von Bezzle"
   ],
   "again": [
    "Links zwischen Screens: Zeichne sie im Modus Prototyp neu",
    "Komponenten: Instanzen kommen unverknüpft herein, und Objekt › Komponente erstellen macht sie wieder zu Komponenten",
    "Geteilte Stile und Auto Layout: Stile kommen als die Looks herein, die sie geben, Frames in Frames als Gruppen"
   ],
   "rows": [
    [
     "Preis",
     "Kostenlos, mit allen Funktionen",
     "Ein kostenloser Plan für 3 Designdateien; wer bearbeitet, zahlt jeden Monat für einen Platz"
    ],
    [
     "Konto",
     "Keines",
     "Nötig zum Bearbeiten und Kommentieren"
    ],
    [
     "Wo Designs liegen",
     "Dateien auf deinem Mac oder in einem Ordner, den Google Drive, Dropbox oder iCloud Drive abgleicht",
     "In der Cloud von Figma"
    ],
    [
     "Ohne Verbindung",
     "Alles funktioniert",
     "Nur Dateien, die schon offen sind"
    ],
    [
     "Läuft auf",
     "Mac, mit macOS 26 oder neuer",
     "Jedem Browser, und Apps für Mac und Windows"
    ],
    [
     "Öffnet",
     "Dateien aus XD, Figma, Sketch und Photoshop, und jede Website",
     "Eigene Dateien und Sketch-Dateien"
    ],
    [
     "Komponenten",
     "Komponenten, Varianten, Bibliotheken und benannte Stile",
     "Komponenten, Varianten, Bibliotheken und Variablen"
    ],
    [
     "Jede Größe",
     "Adaptives Layout setzt eine Zeichenfläche in jeder Größe neu",
     "Auto Layout und Constraints"
    ],
    [
     "Prototypen",
     "Links, Bewegung aus deinem Layout gelesen, Zustände von Komponenten",
     "Links, Smart Animate, Variablen und Bedingungen"
    ],
    [
     "Übergabe",
     "Modus Untersuchen, für alle: jedes Maß, CSS und SwiftUI",
     "Dev Mode, mit einem bezahlten Platz"
    ],
    [
     "Zusammenarbeit",
     "Live, per Link, und niemand braucht ein Konto",
     "Live, für alle mit einem Figma-Konto"
    ],
    [
     "Dunkelmodus",
     "Mit einem Klick aus deinen Farben gezeichnet",
     "Von Hand eingerichtet, mit Variablenmodi"
    ],
    [
     "KI-Assistenten",
     "Ein eingebauter MCP-Server: Claude oder jeder MCP-Assistent baut und ändert direkt in deinem Design",
     "Figma AI und Figma Make, die Credits verbrauchen"
    ]
   ],
   "better": [
    "Du oder dein Team arbeitet unter Windows, Linux oder im Browser",
    "Du brauchst die Plug-ins und Community-Dateien von Figma, oder FigJam und Sites",
    "Ein großes Unternehmen braucht Verwaltung, Single Sign-on und Auswertungen seiner Bibliotheken"
   ],
   "faq": [
    [
     "Kann Bezzle Figma-Dateien öffnen?",
     "Ja. Sichere in Figma mit Save local copy eine .fig-Datei, wähle dann in Bezzle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … oder zieh die Datei darauf. Zeichenflächen, Ebenen, Texte, Bilder, Verläufe und Schatten kommen mit, und ein kurzer Bericht nennt, was ein wenig anders aussieht."
    ],
    [
     "Kommen Komponenten und Auto Layout mit?",
     "Instanzen kommen als das herein, was sie zeigen, mit ihren Überschreibungen und Komponenteneigenschaften, aber nicht miteinander verknüpft; Objekt › Komponente erstellen macht sie wieder zu Komponenten. Frames in Frames werden zu Gruppen, angeordnet, wie sie waren."
    ],
    [
     "Können wir zusammen an einem Design arbeiten, wie in Figma?",
     "Ja. Klick auf Teilen …, wähle Link kopieren und schick ihn. Wer ihn öffnet, arbeitet in Bezzle auf seinem Mac live mit dir, ganz ohne Konto, und die Änderungen aller werden Eigenschaft für Eigenschaft zusammengeführt. Ein geteiltes Design öffnet sich auch in jedem Browser, um es live zu verfolgen."
    ],
    [
     "Gibt es etwas wie Dev Mode?",
     "Den Modus Untersuchen, kostenlos für alle: jeder Abstand, jede Farbe und jede Schrift, und CSS oder SwiftUI zu jeder Ebene, benannt nach deinen Stilen."
    ],
    [
     "Läuft Bezzle im Browser oder unter Windows?",
     "Nein. Bezzle ist für den Mac gemacht und braucht macOS 26 oder neuer. Ein per Link geteiltes Design öffnet sich in jedem Browser, um es live zu verfolgen, gestaltet wird aber in der App."
    ]
   ]
  },
  "sketch": {
   "chip": "Von Sketch zu Bezzle",
   "h": [
    "Nativ wie Sketch.",
    "Kostenlos wie sonst nichts."
   ],
   "lede": "Bezzle ist eine Design-App, die für den Mac gemacht ist, wie Sketch, und sie ist kostenlos. Sie öffnet deine Sketch-Dateien mit Seiten, Symbolen, Überschreibungen und Exporteinstellungen und bringt dazu gemeinsames Gestalten per Link ohne Konto, Dunkelmodus mit einem Klick, Hintergrund entfernen auf deinem Mac und eine KI, die mit dir gestaltet.",
   "bring": [
    "Die Datei hereinholen",
    "Wähle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … (⇧⌘I) oder zieh die .sketch-Datei auf Bezzle. Sie muss von Sketch 43 oder neuer gesichert sein."
   ],
   "across": [
    "Jede Seite, ihre Zeichenflächen, und die Originale der Symbole als Zeichenflächen",
    "Symbolinstanzen in ihrer eigenen Größe, mit ihren Überschreibungen: Text, ausgetauschte Symbole, Bilder und Stile",
    "Exporteinstellungen: Größen, Formate und Zusätze jeder Ebene werden zu ihrer Karte Exportieren",
    "Geglättete Ecken, Layoutraster und Hilfslinien auf Zeichenflächen",
    "Bearbeitbarer Text in seinen Schriften, Größen, Farben und Abständen",
    "Masken, Verläufe, Schatten, Unschärfen und Füllmethoden"
   ],
   "again": [
    "Prototyp-Links: Zeichne sie im Modus Prototyp neu",
    "Symbole: Instanzen kommen unverknüpft herein, und Objekt › Komponente erstellen macht sie wieder zu Komponenten",
    "Geteilte Stile: Sie kommen als die Looks herein, die sie geben"
   ],
   "rows": [
    [
     "Preis",
     "Kostenlos, mit allen Funktionen",
     "Ein Abo pro Person, die bearbeitet, oder eine Lizenz für einen Mac mit einem Jahr Updates"
    ],
    [
     "Konto",
     "Keines",
     "Ein Sketch-Konto für Abo und Workspace"
    ],
    [
     "Für den Mac gemacht",
     "Ja",
     "Ja"
    ],
    [
     "Läuft auf",
     "Mac, mit macOS 26 oder neuer",
     "Mac; eine Web-App zum Ansehen und Untersuchen"
    ],
    [
     "Zusammenarbeit",
     "Live, per Link, und niemand braucht ein Konto",
     "Live, in einem Sketch-Workspace"
    ],
    [
     "Jede Größe",
     "Adaptives Layout setzt eine Zeichenfläche in jeder Größe neu",
     "Stacks und Größeneinstellungen"
    ],
    [
     "Prototypen",
     "Links, Bewegung aus deinem Layout gelesen, Zustände von Komponenten",
     "Links und Übergänge zwischen Zeichenflächen"
    ],
    [
     "Übergabe",
     "Modus Untersuchen, direkt in der App: jedes Maß, CSS und SwiftUI",
     "Untersuchen im Browser, in der Web-App"
    ],
    [
     "Dunkelmodus",
     "Mit einem Klick aus deinen Farben gezeichnet",
     "Von Hand, mit Farbvariablen"
    ]
   ],
   "better": [
    "Dein Mac kann macOS 26 noch nicht ausführen",
    "Dein Team braucht Sketch-Plug-ins",
    "Ihr führt Bibliotheken und Reviews in einem Sketch-Workspace, den das ganze Team teilt"
   ],
   "faq": [
    [
     "Kann Bezzle Sketch-Dateien öffnen?",
     "Ja, Dateien, die Sketch 43 oder neuer gesichert hat. Wähle Ablage › Aus XD, Figma, Sketch oder Photoshop importieren … oder zieh die Datei auf Bezzle. Jede Seite, Zeichenfläche, jedes Symbol und jede Exporteinstellung kommt mit, und ein kurzer Bericht nennt, was ein wenig anders aussieht."
    ],
    [
     "Kommen Symbole und Überschreibungen mit?",
     "Ja. Jede Instanz wird in ihrer eigenen Größe angelegt, mit ihren Überschreibungen: Text, ausgetauschte Symbole, Bilder sowie Ebenen- und Textstile. In Bezzle sind Instanzen nicht miteinander verknüpft; Objekt › Komponente erstellen macht sie wieder zu Komponenten."
    ],
    [
     "Ist Bezzle eine native Mac-App wie Sketch?",
     "Ja. Bezzle ist für den Mac gemacht und läuft ab macOS 26. Deine Designs sind Dateien auf deinem Mac und werden beim Arbeiten gesichert."
    ],
    [
     "Können wir zusammen an einem Design arbeiten?",
     "Ja. Klick auf Teilen …, wähle Link kopieren und schick ihn. Wer ihn öffnet, arbeitet in Bezzle auf seinem Mac live mit dir, ganz ohne Konto, und nichts, was jemand tut, wird überschrieben."
    ],
    [
     "Ist Bezzle wirklich kostenlos?",
     "Ja. Alle Funktionen sind enthalten, ohne Abo, ohne In-App-Käufe und ohne Konto."
    ]
   ]
  }
 },
 "fr": {
  "common": {
   "asof": "Ce que cette page dit de {rival} était vrai en novembre 2026. Le site de {rival} donne ses offres et ses prix tels qu’ils sont aujourd’hui.",
   "steps_h": "Apporte tes fichiers",
   "across_h": "Ce qui passe",
   "again_h": "À refaire dans Bezzle",
   "table_h": "Côte à côte",
   "what": "Quoi",
   "better_h": "Quand {rival} reste le meilleur choix",
   "faq_h": "Questions",
   "others_h": "Tu viens d’une autre app ?",
   "docs": "Tout ce qui passe, dans le guide",
   "get": [
    "Télécharger Bezzle",
    "Gratuit depuis ce site, pour tout Mac avec macOS 26 ou ultérieur. Aucun compte à créer."
   ],
   "check": [
    "Lire le rapport",
    "Une carte au bas du canevas dit ce qui est passé et liste ce qui paraît un peu différent, pour que tu saches quoi vérifier."
   ],
   "alt": "La fenêtre de Bezzle avec les trois écrans d’une app de voyage sur le canevas"
  },
  "xd": {
   "chip": "D’Adobe XD à Bezzle",
   "h": [
    "XD s’est arrêté.",
    "Pas tes designs."
   ],
   "lede": "Adobe n’ajoute plus rien à XD. Bezzle ouvre tes fichiers .xd avec leurs plans de travail, calques, grilles de répétition et composants, et continue là où XD s’est arrêté : des mises en page qui s’adaptent à chaque taille, le mode sombre en un clic, la création à plusieurs en direct et une IA qui dessine avec toi. Gratuit, sur ton Mac.",
   "bring": [
    "Importer le fichier",
    "Choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop… (⇧⌘I), ou dépose le fichier .xd sur Bezzle. Il devient un nouveau design, et le fichier lui-même reste tel quel."
   ],
   "across": [
    "Les plans de travail à leurs tailles et à leurs places, et les calques de la table de montage",
    "Les calques avec leurs noms, leur ordre et leurs groupes, masqués ou verrouillés comme avant",
    "Le texte modifiable, dans ses polices, ses tailles, ses couleurs et ses espacements",
    "Les grilles de répétition, comme grilles de répétition de Bezzle, chaque cellule gardant ses textes et ses images",
    "Les masques, les grilles de mise en page, les repères, les dégradés, les ombres, les flous et les modes de fusion",
    "Les instances de composants, comme ce qu’elles montrent"
   ],
   "again": [
    "Les liens entre écrans : redessine-les en mode Prototype, où Bezzle lit le mouvement dans ta mise en page",
    "Les composants : les instances arrivent comme des groupes, et Objet › Créer un composant en refait des composants",
    "Les styles partagés : ils arrivent comme les apparences qu’ils donnent ; renomme-les en styles"
   ],
   "rows": [
    [
     "Toujours développé",
     "Oui, et il se met à jour tout seul",
     "Plus de nouvelles fonctions : Adobe garde XD en maintenance"
    ],
    [
     "Prix",
     "Gratuit, avec toutes les fonctions",
     "Avec un abonnement Creative Cloud"
    ],
    [
     "Compte",
     "Aucun",
     "Un compte Adobe"
    ],
    [
     "Fonctionne sur",
     "Mac, avec macOS 26 ou ultérieur",
     "Mac et Windows"
    ],
    [
     "Ouvre",
     "Les fichiers XD, Figma, Sketch et Photoshop, et tout site web",
     "Ses propres fichiers, et les fichiers Sketch et Photoshop"
    ],
    [
     "Grilles de répétition",
     "Oui, et celles de XD passent telles quelles",
     "Oui"
    ],
    [
     "Toutes les tailles",
     "La mise en page adaptative recompose un plan de travail à toute taille",
     "Redimensionnement réactif et stacks"
    ],
    [
     "Prototypes",
     "Des liens, le mouvement lu dans ta mise en page, des états de composants",
     "Des liens et l’animation automatique"
    ],
    [
     "Transmission",
     "Le mode Inspecter : chaque mesure, du CSS et du SwiftUI",
     "Des liens de partage pour les développeurs, dans le navigateur"
    ],
    [
     "Travail à plusieurs",
     "En direct, par lien, et personne n’a besoin de compte",
     "Coédition des documents gardés dans Creative Cloud"
    ],
    [
     "Mode sombre",
     "Dessiné en un clic à partir de tes couleurs",
     "À la main"
    ],
    [
     "Supprimer l’arrière-plan",
     "Un clic, sur ton Mac",
     "Non"
    ],
    [
     "Assistants IA",
     "Un serveur MCP intégré : Claude ou tout assistant MCP dessine avec toi",
     "Non"
    ]
   ],
   "better": [
    "Tu dessines sous Windows",
    "Ton travail dépend de plug-ins XD ou des bibliothèques Creative Cloud",
    "Ton Mac ne peut pas encore faire tourner macOS 26"
   ],
   "faq": [
    [
     "Bezzle peut-il ouvrir les fichiers Adobe XD ?",
     "Oui. Choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop…, ou dépose le fichier .xd sur Bezzle. Il arrive comme un nouveau design, avec ses plans de travail, calques, textes, grilles de répétition, masques et images, et un court rapport liste ce qui paraît un peu différent. Le fichier .xd reste tel quel."
    ],
    [
     "Mes prototypes XD passent-ils ?",
     "Les écrans oui, les liens entre eux non. Redessine-les en mode Prototype, où Bezzle lit le mouvement dans la façon dont tes écrans sont disposés, et joue-les dans l’appareil pour lequel ils sont faits."
    ],
    [
     "Et les documents gardés dans Creative Cloud ?",
     "Bezzle lit les fichiers .xd de ton Mac. Un document gardé dans Creative Cloud arrive une fois que tu l’as enregistré depuis XD comme fichier."
    ],
    [
     "Adobe XD est-il abandonné ?",
     "Adobe garde XD en maintenance : les problèmes sont corrigés, mais aucune nouvelle fonction n’arrive. Bezzle ouvre tes fichiers XD, pour que tes designs puissent continuer sans lui."
    ],
    [
     "Bezzle est-il vraiment gratuit ?",
     "Oui. Toutes les fonctions sont incluses, sans abonnement, sans achat intégré et sans compte."
    ]
   ]
  },
  "figma": {
   "chip": "De Figma à Bezzle",
   "h": [
    "Tous tes fichiers Figma.",
    "Aucun siège à payer."
   ],
   "lede": "Bezzle ouvre tes fichiers Figma et t’offre composants, variantes, prototypes, transmission et création à plusieurs en direct, dans une app faite pour le Mac. Gratuit, avec toutes les fonctions et sans compte. Tes designs sont des fichiers sur ton Mac, et ils s’ouvrent aussi sans connexion.",
   "save": [
    "Enregistrer une copie locale",
    "Dans Figma, choisis Save local copy pour obtenir un fichier .fig du design."
   ],
   "bring": [
    "L’importer",
    "Dans Bezzle, choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop… (⇧⌘I), ou dépose le fichier .fig dessus. Il devient un nouveau design à part entière."
   ],
   "across": [
    "Les cadres posés sur une page comme plans de travail, et les cadres dans des cadres comme groupes, coupés quand ils rognent",
    "Les instances comme ce qu’elles montrent, avec leurs remplacements et leurs propriétés de composant",
    "Le texte modifiable, qui grandit en largeur, en hauteur ou pas du tout, comme avant",
    "Les angles lisses, les flous progressifs et d’arrière-plan, les dégradés, les ombres et les modes de fusion",
    "Les grilles de mise en page, les repères et les listes dans le texte",
    "Toutes les pages, les unes sous les autres sur le canevas unique de Bezzle"
   ],
   "again": [
    "Les liens entre écrans : redessine-les en mode Prototype",
    "Les composants : les instances arrivent sans lien, et Objet › Créer un composant en refait des composants",
    "Les styles partagés et l’auto layout : les styles arrivent comme les apparences qu’ils donnent, les cadres dans des cadres comme groupes"
   ],
   "rows": [
    [
     "Prix",
     "Gratuit, avec toutes les fonctions",
     "Une offre gratuite pour 3 fichiers de design ; chaque éditeur paie un siège par mois"
    ],
    [
     "Compte",
     "Aucun",
     "Nécessaire pour modifier et commenter"
    ],
    [
     "Où vivent les designs",
     "Des fichiers sur ton Mac, ou dans un dossier que Google Drive, Dropbox ou iCloud Drive synchronise",
     "Dans le cloud de Figma"
    ],
    [
     "Sans connexion",
     "Tout fonctionne",
     "Seulement les fichiers déjà ouverts"
    ],
    [
     "Fonctionne sur",
     "Mac, avec macOS 26 ou ultérieur",
     "Tout navigateur, et des apps pour Mac et Windows"
    ],
    [
     "Ouvre",
     "Les fichiers XD, Figma, Sketch et Photoshop, et tout site web",
     "Ses propres fichiers et les fichiers Sketch"
    ],
    [
     "Composants",
     "Composants, variantes, bibliothèques et styles nommés",
     "Composants, variantes, bibliothèques et variables"
    ],
    [
     "Toutes les tailles",
     "La mise en page adaptative recompose un plan de travail à toute taille",
     "Auto layout et contraintes"
    ],
    [
     "Prototypes",
     "Des liens, le mouvement lu dans ta mise en page, des états de composants",
     "Des liens, Smart Animate, des variables et des conditions"
    ],
    [
     "Transmission",
     "Le mode Inspecter, pour tous : chaque mesure, du CSS et du SwiftUI",
     "Le Dev Mode, avec un siège payant"
    ],
    [
     "Travail à plusieurs",
     "En direct, par lien, et personne n’a besoin de compte",
     "En direct, pour tous ceux qui ont un compte Figma"
    ],
    [
     "Mode sombre",
     "Dessiné en un clic à partir de tes couleurs",
     "Préparé à la main avec des modes de variables"
    ],
    [
     "Assistants IA",
     "Un serveur MCP intégré : Claude ou tout assistant MCP crée et modifie directement dans ton design",
     "Figma AI et Figma Make, qui consomment des crédits"
    ]
   ],
   "better": [
    "Toi ou ton équipe travaillez sous Windows, Linux ou dans un navigateur",
    "Tu comptes sur les plug-ins et les fichiers de la communauté Figma, ou sur FigJam et Sites",
    "Une grande entreprise a besoin d’administration, d’authentification unique et de statistiques sur ses bibliothèques"
   ],
   "faq": [
    [
     "Bezzle peut-il ouvrir les fichiers Figma ?",
     "Oui. Dans Figma, utilise Save local copy pour obtenir un fichier .fig, puis choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop… dans Bezzle, ou dépose le fichier dessus. Plans de travail, calques, textes, images, dégradés et ombres passent, et un court rapport liste ce qui paraît un peu différent."
    ],
    [
     "Les composants et l’auto layout passent-ils ?",
     "Les instances arrivent comme ce qu’elles montrent, avec leurs remplacements et leurs propriétés de composant, mais sans lien entre elles ; Objet › Créer un composant en refait des composants. Les cadres dans des cadres deviennent des groupes, disposés comme avant."
    ],
    [
     "Peut-on travailler à plusieurs sur un design, comme dans Figma ?",
     "Oui. Clique sur Partager…, choisis Copier le lien et envoie-le. La personne qui l’ouvre travaille avec toi en direct dans Bezzle sur son Mac, sans aucun compte, et les modifications de chacun se fusionnent propriété par propriété. Un design partagé s’ouvre aussi dans n’importe quel navigateur, pour le suivre en direct."
    ],
    [
     "Y a-t-il quelque chose comme le Dev Mode ?",
     "Le mode Inspecter, gratuit pour tous : chaque distance, chaque couleur et chaque police, et du CSS ou du SwiftUI pour n’importe quel calque, nommés d’après tes styles."
    ],
    [
     "Bezzle fonctionne-t-il dans un navigateur ou sous Windows ?",
     "Non. Bezzle est fait pour le Mac et demande macOS 26 ou ultérieur. Un design partagé par lien s’ouvre dans n’importe quel navigateur pour être suivi en direct, mais on dessine dans l’app."
    ]
   ]
  },
  "sketch": {
   "chip": "De Sketch à Bezzle",
   "h": [
    "Natif comme Sketch.",
    "Gratuit comme nul autre."
   ],
   "lede": "Bezzle est une app de design faite pour le Mac, comme Sketch, et elle est gratuite. Elle ouvre tes fichiers Sketch avec leurs pages, symboles, remplacements et réglages d’export, et ajoute la création à plusieurs par lien sans compte, le mode sombre en un clic, la suppression de l’arrière-plan sur ton Mac et une IA qui dessine avec toi.",
   "bring": [
    "Importer le fichier",
    "Choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop… (⇧⌘I), ou dépose le fichier .sketch sur Bezzle. Il doit avoir été enregistré par Sketch 43 ou ultérieur."
   ],
   "across": [
    "Toutes les pages, leurs plans de travail, et les symboles principaux comme plans de travail",
    "Les instances de symboles à leur propre taille, avec leurs remplacements : textes, symboles échangés, images et styles",
    "Les réglages d’export : les tailles, formats et suffixes de chaque calque deviennent sa carte Exporter",
    "Les angles lisses, les grilles de mise en page et les repères des plans de travail",
    "Le texte modifiable, dans ses polices, ses tailles, ses couleurs et ses espacements",
    "Les masques, les dégradés, les ombres, les flous et les modes de fusion"
   ],
   "again": [
    "Les liens de prototype : redessine-les en mode Prototype",
    "Les symboles : les instances arrivent sans lien, et Objet › Créer un composant en refait des composants",
    "Les styles partagés : ils arrivent comme les apparences qu’ils donnent"
   ],
   "rows": [
    [
     "Prix",
     "Gratuit, avec toutes les fonctions",
     "Un abonnement par éditeur, ou une licence pour un Mac avec un an de mises à jour"
    ],
    [
     "Compte",
     "Aucun",
     "Un compte Sketch pour l’abonnement et l’espace de travail"
    ],
    [
     "Fait pour le Mac",
     "Oui",
     "Oui"
    ],
    [
     "Fonctionne sur",
     "Mac, avec macOS 26 ou ultérieur",
     "Mac ; une app web pour regarder et inspecter"
    ],
    [
     "Travail à plusieurs",
     "En direct, par lien, et personne n’a besoin de compte",
     "En direct, dans un espace de travail Sketch"
    ],
    [
     "Toutes les tailles",
     "La mise en page adaptative recompose un plan de travail à toute taille",
     "Stacks et réglages de redimensionnement"
    ],
    [
     "Prototypes",
     "Des liens, le mouvement lu dans ta mise en page, des états de composants",
     "Des liens et des transitions entre plans de travail"
    ],
    [
     "Transmission",
     "Le mode Inspecter, dans l’app : chaque mesure, du CSS et du SwiftUI",
     "L’inspection dans le navigateur, dans son app web"
    ],
    [
     "Mode sombre",
     "Dessiné en un clic à partir de tes couleurs",
     "À la main, avec des variables de couleur"
    ]
   ],
   "better": [
    "Ton Mac ne peut pas encore faire tourner macOS 26",
    "Ton équipe compte sur des plug-ins Sketch",
    "Vous gardez bibliothèques et revues dans un espace de travail Sketch partagé par toute l’équipe"
   ],
   "faq": [
    [
     "Bezzle peut-il ouvrir les fichiers Sketch ?",
     "Oui, les fichiers enregistrés par Sketch 43 ou ultérieur. Choisis Fichier › Importer depuis XD, Figma, Sketch ou Photoshop…, ou dépose le fichier sur Bezzle. Chaque page, plan de travail, symbole et réglage d’export passe, et un court rapport liste ce qui paraît un peu différent."
    ],
    [
     "Les symboles et les remplacements passent-ils ?",
     "Oui. Chaque instance est remise en page à sa propre taille avec ses remplacements : textes, symboles échangés, images, et styles de calque et de texte. Dans Bezzle, les instances ne sont pas liées entre elles ; Objet › Créer un composant en refait des composants."
    ],
    [
     "Bezzle est-il une app Mac native comme Sketch ?",
     "Oui. Bezzle est fait pour le Mac et fonctionne avec macOS 26 ou ultérieur. Tes designs sont des fichiers sur ton Mac, enregistrés pendant que tu travailles."
    ],
    [
     "Peut-on travailler à plusieurs sur un design ?",
     "Oui. Clique sur Partager…, choisis Copier le lien et envoie-le. La personne qui l’ouvre travaille avec toi en direct dans Bezzle sur son Mac, sans aucun compte, et rien de ce que fait chacun n’est écrasé."
    ],
    [
     "Bezzle est-il vraiment gratuit ?",
     "Oui. Toutes les fonctions sont incluses, sans abonnement, sans achat intégré et sans compte."
    ]
   ]
  }
 },
 "it": {
  "common": {
   "asof": "Ciò che questa pagina dice di {rival} valeva a novembre 2026. Il sito di {rival} riporta i piani e i prezzi di oggi.",
   "steps_h": "Porta i tuoi file",
   "across_h": "Cosa arriva",
   "again_h": "Da rifare in Bezzle",
   "table_h": "Fianco a fianco",
   "what": "Cosa",
   "better_h": "Quando {rival} resta la scelta migliore",
   "faq_h": "Domande",
   "others_h": "Arrivi da un’altra app?",
   "docs": "Tutto ciò che arriva, nella guida",
   "get": [
    "Scarica Bezzle",
    "Gratis da questo sito, per qualsiasi Mac con macOS 26 o successivo. Nessun account da creare."
   ],
   "check": [
    "Leggi il resoconto",
    "Una scheda in fondo alla tela dice cosa è arrivato ed elenca ciò che appare un po’ diverso, così sai cosa controllare."
   ],
   "alt": "La finestra di Bezzle con le tre schermate di un’app di viaggi sulla tela"
  },
  "xd": {
   "chip": "Da Adobe XD a Bezzle",
   "h": [
    "XD si è fermato.",
    "I tuoi design no."
   ],
   "lede": "Adobe non aggiunge più nulla a XD. Bezzle apre i tuoi file .xd con tavole, livelli, griglie di ripetizione e componenti, e continua da lì: layout che si adattano a ogni misura, la modalità scura con un clic, il lavoro insieme dal vivo e un’IA che progetta con te. Gratis, sul tuo Mac.",
   "bring": [
    "Importa il file",
    "Scegli Archivio › Importa da XD, Figma, Sketch o Photoshop… (⇧⌘I), o trascina il file .xd su Bezzle. Diventa un nuovo design, e il file stesso resta com’è."
   ],
   "across": [
    "Le tavole con le loro misure e posizioni, e i livelli del tavolo di montaggio",
    "I livelli con i loro nomi, il loro ordine e i loro gruppi, nascosti o bloccati come erano",
    "Il testo modificabile, nei suoi font, dimensioni, colori e spaziature",
    "Le griglie di ripetizione, come griglie di ripetizione di Bezzle, con ogni cella che mantiene i suoi testi e le sue immagini",
    "Maschere, griglie di layout, guide, sfumature, ombre, sfocature e metodi di fusione",
    "Le istanze dei componenti, come ciò che mostrano"
   ],
   "again": [
    "I collegamenti tra le schermate: disegnali di nuovo in modalità Prototipo, dove Bezzle legge il movimento dal tuo layout",
    "I componenti: le istanze arrivano come gruppi, e Oggetto › Crea componente le fa tornare componenti",
    "Gli stili condivisi: arrivano come gli aspetti che danno; dai loro di nuovo un nome come stili"
   ],
   "rows": [
    [
     "Ancora sviluppato",
     "Sì, e si aggiorna da solo",
     "Nessuna nuova funzione: Adobe tiene XD in manutenzione"
    ],
    [
     "Prezzo",
     "Gratis, con tutte le funzioni",
     "Con un abbonamento Creative Cloud"
    ],
    [
     "Account",
     "Nessuno",
     "Un account Adobe"
    ],
    [
     "Funziona su",
     "Mac, con macOS 26 o successivo",
     "Mac e Windows"
    ],
    [
     "Apre",
     "File di XD, Figma, Sketch e Photoshop, e qualsiasi sito web",
     "I propri file, e file di Sketch e Photoshop"
    ],
    [
     "Griglie di ripetizione",
     "Sì, e quelle di XD arrivano come sono",
     "Sì"
    ],
    [
     "Ogni misura",
     "Il layout adattivo ricompone una tavola a qualsiasi misura",
     "Ridimensionamento reattivo e stack"
    ],
    [
     "Prototipi",
     "Collegamenti, movimento letto dal tuo layout, stati dei componenti",
     "Collegamenti e animazione automatica"
    ],
    [
     "Consegna",
     "La modalità Ispeziona: ogni misura, CSS e SwiftUI",
     "Link condivisi per chi sviluppa, nel browser"
    ],
    [
     "Lavoro insieme",
     "Dal vivo, tramite link, e nessuno ha bisogno di un account",
     "Modifica condivisa dei documenti tenuti in Creative Cloud"
    ],
    [
     "Modalità scura",
     "Disegnata con un clic dai tuoi colori",
     "A mano"
    ],
    [
     "Rimuovi sfondo",
     "Un clic, sul tuo Mac",
     "No"
    ],
    [
     "Assistenti IA",
     "Un server MCP integrato: Claude o qualsiasi assistente MCP progetta con te",
     "No"
    ]
   ],
   "better": [
    "Progetti su Windows",
    "Il tuo lavoro dipende da plug-in di XD o dalle librerie Creative Cloud",
    "Il tuo Mac non può ancora usare macOS 26"
   ],
   "faq": [
    [
     "Bezzle può aprire i file di Adobe XD?",
     "Sì. Scegli Archivio › Importa da XD, Figma, Sketch o Photoshop…, o trascina il file .xd su Bezzle. Arriva come un nuovo design, con tavole, livelli, testi, griglie di ripetizione, maschere e immagini, e un breve resoconto elenca ciò che appare un po’ diverso. Il file .xd resta com’è."
    ],
    [
     "I miei prototipi XD arrivano?",
     "Le schermate sì, i collegamenti tra loro no. Disegnali di nuovo in modalità Prototipo, dove Bezzle legge il movimento da come sono disposte le tue schermate, e provali nel dispositivo per cui sono pensati."
    ],
    [
     "E i documenti tenuti in Creative Cloud?",
     "Bezzle legge i file .xd sul tuo Mac. Un documento tenuto in Creative Cloud arriva una volta che l’hai salvato da XD come file."
    ],
    [
     "Adobe XD è stato abbandonato?",
     "Adobe tiene XD in manutenzione: corregge i problemi, ma non aggiunge nuove funzioni. Bezzle apre i tuoi file XD, così i tuoi design possono andare avanti senza."
    ],
    [
     "Bezzle è davvero gratis?",
     "Sì. Tutte le funzioni sono incluse, senza abbonamento, senza acquisti in-app e senza account."
    ]
   ]
  },
  "figma": {
   "chip": "Da Figma a Bezzle",
   "h": [
    "Tutti i tuoi file Figma.",
    "Nessun posto da pagare."
   ],
   "lede": "Bezzle apre i tuoi file Figma e ti dà componenti, varianti, prototipi, consegna e lavoro insieme dal vivo, in un’app fatta per il Mac. Gratis, con tutte le funzioni e senza account. I tuoi design sono file sul tuo Mac, e si aprono anche senza connessione.",
   "save": [
    "Salva una copia locale",
    "In Figma, scegli Save local copy per ottenere un file .fig del design."
   ],
   "bring": [
    "Importala",
    "In Bezzle, scegli Archivio › Importa da XD, Figma, Sketch o Photoshop… (⇧⌘I), o trascinaci sopra il file .fig. Diventa un nuovo design a sé."
   ],
   "across": [
    "I frame su una pagina come tavole, e i frame dentro altri frame come gruppi, tagliati quando ritagliano",
    "Le istanze come ciò che mostrano, con i loro override e le proprietà dei componenti",
    "Il testo modificabile, che cresce in larghezza, in altezza o per niente, come prima",
    "Angoli morbidi, sfocature progressive e dello sfondo, sfumature, ombre e metodi di fusione",
    "Griglie di layout, guide ed elenchi nei testi",
    "Ogni pagina, una sotto l’altra sull’unica tela di Bezzle"
   ],
   "again": [
    "I collegamenti tra le schermate: disegnali di nuovo in modalità Prototipo",
    "I componenti: le istanze arrivano scollegate, e Oggetto › Crea componente le fa tornare componenti",
    "Gli stili condivisi e l’auto layout: gli stili arrivano come gli aspetti che danno, i frame dentro altri frame come gruppi"
   ],
   "rows": [
    [
     "Prezzo",
     "Gratis, con tutte le funzioni",
     "Un piano gratuito per 3 file di design; chi modifica paga un posto ogni mese"
    ],
    [
     "Account",
     "Nessuno",
     "Necessario per modificare e commentare"
    ],
    [
     "Dove stanno i design",
     "File sul tuo Mac, o in una cartella che Google Drive, Dropbox o iCloud Drive sincronizza",
     "Nel cloud di Figma"
    ],
    [
     "Senza connessione",
     "Funziona tutto",
     "Solo i file già aperti"
    ],
    [
     "Funziona su",
     "Mac, con macOS 26 o successivo",
     "Qualsiasi browser, e app per Mac e Windows"
    ],
    [
     "Apre",
     "File di XD, Figma, Sketch e Photoshop, e qualsiasi sito web",
     "I propri file e i file di Sketch"
    ],
    [
     "Componenti",
     "Componenti, varianti, librerie e stili con un nome",
     "Componenti, varianti, librerie e variabili"
    ],
    [
     "Ogni misura",
     "Il layout adattivo ricompone una tavola a qualsiasi misura",
     "Auto layout e vincoli"
    ],
    [
     "Prototipi",
     "Collegamenti, movimento letto dal tuo layout, stati dei componenti",
     "Collegamenti, Smart Animate, variabili e condizioni"
    ],
    [
     "Consegna",
     "La modalità Ispeziona, per tutti: ogni misura, CSS e SwiftUI",
     "Dev Mode, con un posto a pagamento"
    ],
    [
     "Lavoro insieme",
     "Dal vivo, tramite link, e nessuno ha bisogno di un account",
     "Dal vivo, per chi ha un account Figma"
    ],
    [
     "Modalità scura",
     "Disegnata con un clic dai tuoi colori",
     "Preparata a mano con le modalità delle variabili"
    ],
    [
     "Assistenti IA",
     "Un server MCP integrato: Claude o qualsiasi assistente MCP crea e modifica direttamente nel tuo design",
     "Figma AI e Figma Make, che consumano crediti"
    ]
   ],
   "better": [
    "Tu o il tuo team lavorate su Windows, Linux o in un browser",
    "Ti affidi ai plug-in e ai file della community di Figma, o a FigJam e Sites",
    "Una grande azienda ha bisogno di amministrazione, accesso unico e statistiche sulle sue librerie"
   ],
   "faq": [
    [
     "Bezzle può aprire i file Figma?",
     "Sì. In Figma, usa Save local copy per ottenere un file .fig, poi scegli Archivio › Importa da XD, Figma, Sketch o Photoshop… in Bezzle, o trascinaci sopra il file. Tavole, livelli, testi, immagini, sfumature e ombre arrivano, e un breve resoconto elenca ciò che appare un po’ diverso."
    ],
    [
     "Componenti e auto layout arrivano?",
     "Le istanze arrivano come ciò che mostrano, con i loro override e le proprietà dei componenti, ma non collegate tra loro; Oggetto › Crea componente le fa tornare componenti. I frame dentro altri frame diventano gruppi, disposti come erano."
    ],
    [
     "Possiamo lavorare insieme a un design, come in Figma?",
     "Sì. Fai clic su Condividi…, scegli Copia link e invialo. Chi lo apre lavora con te dal vivo in Bezzle sul suo Mac, senza alcun account, e le modifiche di tutti si uniscono proprietà per proprietà. Un design condiviso si apre anche in qualsiasi browser, per seguirlo dal vivo."
    ],
    [
     "C’è qualcosa come Dev Mode?",
     "La modalità Ispeziona, gratis per tutti: ogni distanza, colore e font, e CSS o SwiftUI per qualsiasi livello, con i nomi dei tuoi stili."
    ],
    [
     "Bezzle funziona in un browser o su Windows?",
     "No. Bezzle è fatto per il Mac e richiede macOS 26 o successivo. Un design condiviso tramite link si apre in qualsiasi browser per seguirlo dal vivo, ma si progetta nell’app."
    ]
   ]
  },
  "sketch": {
   "chip": "Da Sketch a Bezzle",
   "h": [
    "Nativo come Sketch.",
    "Gratis come nessun altro."
   ],
   "lede": "Bezzle è un’app di design fatta per il Mac, come Sketch, ed è gratis. Apre i tuoi file Sketch con pagine, simboli, override e impostazioni di esportazione, e aggiunge il lavoro insieme tramite link senza account, la modalità scura con un clic, la rimozione dello sfondo sul tuo Mac e un’IA che progetta con te.",
   "bring": [
    "Importa il file",
    "Scegli Archivio › Importa da XD, Figma, Sketch o Photoshop… (⇧⌘I), o trascina il file .sketch su Bezzle. Deve essere stato salvato da Sketch 43 o successivo."
   ],
   "across": [
    "Ogni pagina, le sue tavole, e i master dei simboli come tavole",
    "Le istanze dei simboli alla loro misura, con i loro override: testi, simboli sostituiti, immagini e stili",
    "Le impostazioni di esportazione: misure, formati e suffissi di ogni livello diventano la sua scheda Esporta",
    "Angoli morbidi, griglie di layout e guide sulle tavole",
    "Il testo modificabile, nei suoi font, dimensioni, colori e spaziature",
    "Maschere, sfumature, ombre, sfocature e metodi di fusione"
   ],
   "again": [
    "I collegamenti del prototipo: disegnali di nuovo in modalità Prototipo",
    "I simboli: le istanze arrivano scollegate, e Oggetto › Crea componente le fa tornare componenti",
    "Gli stili condivisi: arrivano come gli aspetti che danno"
   ],
   "rows": [
    [
     "Prezzo",
     "Gratis, con tutte le funzioni",
     "Un abbonamento per chi modifica, o una licenza per un Mac con un anno di aggiornamenti"
    ],
    [
     "Account",
     "Nessuno",
     "Un account Sketch per l’abbonamento e lo spazio di lavoro"
    ],
    [
     "Fatto per il Mac",
     "Sì",
     "Sì"
    ],
    [
     "Funziona su",
     "Mac, con macOS 26 o successivo",
     "Mac; un’app web per guardare e ispezionare"
    ],
    [
     "Lavoro insieme",
     "Dal vivo, tramite link, e nessuno ha bisogno di un account",
     "Dal vivo, in uno spazio di lavoro Sketch"
    ],
    [
     "Ogni misura",
     "Il layout adattivo ricompone una tavola a qualsiasi misura",
     "Stack e impostazioni di ridimensionamento"
    ],
    [
     "Prototipi",
     "Collegamenti, movimento letto dal tuo layout, stati dei componenti",
     "Collegamenti e transizioni tra tavole"
    ],
    [
     "Consegna",
     "La modalità Ispeziona, nell’app: ogni misura, CSS e SwiftUI",
     "L’ispezione nel browser, nella sua app web"
    ],
    [
     "Modalità scura",
     "Disegnata con un clic dai tuoi colori",
     "A mano, con variabili di colore"
    ]
   ],
   "better": [
    "Il tuo Mac non può ancora usare macOS 26",
    "Il tuo team si affida a plug-in di Sketch",
    "Tenete librerie e revisioni in uno spazio di lavoro Sketch condiviso da tutto il team"
   ],
   "faq": [
    [
     "Bezzle può aprire i file Sketch?",
     "Sì, i file salvati da Sketch 43 o successivo. Scegli Archivio › Importa da XD, Figma, Sketch o Photoshop…, o trascina il file su Bezzle. Ogni pagina, tavola, simbolo e impostazione di esportazione arriva, e un breve resoconto elenca ciò che appare un po’ diverso."
    ],
    [
     "Simboli e override arrivano?",
     "Sì. Ogni istanza viene impaginata alla sua misura con i suoi override: testo, simboli sostituiti, immagini, e stili di livello e di testo. In Bezzle le istanze non sono collegate tra loro; Oggetto › Crea componente le fa tornare componenti."
    ],
    [
     "Bezzle è un’app Mac nativa come Sketch?",
     "Sì. Bezzle è fatto per il Mac e funziona con macOS 26 o successivo. I tuoi design sono file sul tuo Mac, salvati mentre lavori."
    ],
    [
     "Possiamo lavorare insieme a un design?",
     "Sì. Fai clic su Condividi…, scegli Copia link e invialo. Chi lo apre lavora con te dal vivo in Bezzle sul suo Mac, senza alcun account, e niente di ciò che fa ognuno viene sovrascritto."
    ],
    [
     "Bezzle è davvero gratis?",
     "Sì. Tutte le funzioni sono incluse, senza abbonamento, senza acquisti in-app e senza account."
    ]
   ]
  }
 }
};

compareForWindows(VS);
