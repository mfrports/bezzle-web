// The pages for people coming from another design app (src/pages/Compare.jsx): their addresses, the
// apps' names, and each page's title and description in English, German, French and Italian, small
// enough for every page's script (the head, the footer). Their words are in words-compare.js, which
// only those pages fetch.
// The rules of words.js hold: no dashes as punctuation, French with a narrow no-break space before
// ? ! : and ;. What these pages say of Bezzle is what the docs say (src/docs/<lang>/import.md for what
// comes across); what they say of the other apps is only what was sure in November 2026, and the pages
// say so. Every language has the same rows, items and questions, in the same order.

/** Each app's page, by its key. */
export const VS_PAGES = { xd: "/adobe-xd-alternative.html", figma: "/figma-alternative.html", sketch: "/sketch-alternative.html" };
/** The apps' names, as the pages and the footer write them. */
export const VS_NAMES = { xd: "Adobe XD", figma: "Figma", sketch: "Sketch" };
/** Which app a path (without its language) is the page for, or null. */
export const compareOf = (path) => Object.keys(VS_PAGES).find((k) => VS_PAGES[k] === path) ?? null;

/** Each page's [title, description], and the footer's heading, by language. */
export const VS_HEADS = {
 "en": {
  "xd": [
   "Free Adobe XD alternative for Mac · Bezzle",
   "Adobe no longer develops XD. Bezzle opens your .xd files with artboards, layers, repeat grids and components, and it is free on your Mac, with no account."
  ],
  "figma": [
   "Free Figma alternative for Mac · Bezzle",
   "Bezzle opens your Figma files and gives you components, prototypes, hand-off and live co-editing, free and with no account, in an app made for the Mac."
  ],
  "sketch": [
   "Free Sketch alternative for Mac · Bezzle",
   "A native Mac design app like Sketch, and free: Bezzle opens your Sketch files with their pages, symbols and export settings, and designs live with others by link."
  ],
  "foot": "Switch from"
 },
 "de": {
  "xd": [
   "Kostenlose Adobe-XD-Alternative für den Mac · Bezzle",
   "Adobe entwickelt XD nicht weiter. Bezzle öffnet deine .xd-Dateien mit Zeichenflächen, Ebenen, Wiederholungsrastern und Komponenten, kostenlos auf deinem Mac und ohne Konto."
  ],
  "figma": [
   "Kostenlose Figma-Alternative für den Mac · Bezzle",
   "Bezzle öffnet deine Figma-Dateien und bietet Komponenten, Prototypen, Übergabe und gemeinsames Gestalten live, kostenlos und ohne Konto, in einer App für den Mac."
  ],
  "sketch": [
   "Kostenlose Sketch-Alternative für den Mac · Bezzle",
   "Eine native Design-App für den Mac wie Sketch, und kostenlos: Bezzle öffnet deine Sketch-Dateien mit Seiten, Symbolen und Exporteinstellungen und gestaltet live per Link mit anderen."
  ],
  "foot": "Umsteigen von"
 },
 "fr": {
  "xd": [
   "Alternative gratuite à Adobe XD pour Mac · Bezzle",
   "Adobe ne développe plus XD. Bezzle ouvre tes fichiers .xd avec leurs plans de travail, calques, grilles de répétition et composants, gratuitement sur ton Mac et sans compte."
  ],
  "figma": [
   "Alternative gratuite à Figma pour Mac · Bezzle",
   "Bezzle ouvre tes fichiers Figma et t’offre composants, prototypes, transmission et création à plusieurs en direct, gratuitement et sans compte, dans une app faite pour le Mac."
  ],
  "sketch": [
   "Alternative gratuite à Sketch pour Mac · Bezzle",
   "Une app de design native pour Mac comme Sketch, et gratuite : Bezzle ouvre tes fichiers Sketch avec leurs pages, symboles et réglages d’export, et se partage par lien."
  ],
  "foot": "Passer de"
 },
 "it": {
  "xd": [
   "Alternativa gratuita ad Adobe XD per Mac · Bezzle",
   "Adobe non sviluppa più XD. Bezzle apre i tuoi file .xd con tavole, livelli, griglie di ripetizione e componenti, gratis sul tuo Mac e senza account."
  ],
  "figma": [
   "Alternativa gratuita a Figma per Mac · Bezzle",
   "Bezzle apre i tuoi file Figma e ti dà componenti, prototipi, consegna e lavoro insieme dal vivo, gratis e senza account, in un’app fatta per il Mac."
  ],
  "sketch": [
   "Alternativa gratuita a Sketch per Mac · Bezzle",
   "Un’app di design nativa per Mac come Sketch, e gratis: Bezzle apre i tuoi file Sketch con pagine, simboli e impostazioni di esportazione, e si condivide con un link."
  ],
  "foot": "Passa da"
 }
};
