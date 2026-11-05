# Bezzle release notes

<!--
The notes for every version released on the website, newest first, in English, German, French
and Italian: what changed for the people who use Bezzle, in their words. Written with each
release (CLAUDE.md › Releases). Scripts/release.sh refuses a version without its entry, puts the
notes into the update feed, where Sparkle shows them in each Mac's language, and onto the GitHub
release, and copies this file into the website's repository (mfrports/bezzle-web,
src/releases/RELEASE_NOTES.md) for its What's New page, which shows only the versions the feed has.
Scripts/release/notes.py and the website's src/notes.py read exactly this shape, so keep to it:

## <version> · <YYYY-MM-DD>

### en: <Title, one line, ending with a full stop.>

<Lede: one or two sentences.>

- **<Lead.>** <One or two sentences.>

<Optional closing paragraph, e.g. "Also in this update: …">

### de: <Titel.>

<The same in German, written fresh, with "du".>

### fr: <Titre.>

<The same in French, with "tu", like the website.>

### it: <Titolo.>

<The same in Italian, with "tu".>

A release with nothing to show (a fix) gets a title and a lede, no list. No dashes as punctuation
in any language. Comments like this one are ignored.
-->

## 1.3 · 2026-11-05

### en: Your designs, in the folder you choose.

Bezzle can now keep your designs in any folder you like, such as one in iCloud Drive or with the rest of a project. The designs you have go along.

- **Choose the folder.** Bezzle › Designs Folder… or the folder beside Your designs on the home screen lets you pick it. From then on, new designs and imported files are saved there, and Bezzle remembers your choice.
- **Your designs come along.** Bezzle offers to move the designs you already have, even those open in a tab. Each keeps its place on the home screen, and shared designs stay shared. Choose Leave Them, and they stay where they are and on the home screen all the same.
- **A folder you already use.** Choose a folder that holds designs already, and every one of them appears on the home screen.

Also in this update: a design you open from a folder inside your designs folder now shows on the home screen too.

### de: Deine Designs, in dem Ordner, den du wählst.

Bezzle bewahrt deine Designs jetzt in jedem Ordner auf, den du möchtest, etwa in iCloud Drive oder bei den übrigen Dateien eines Projekts. Deine bisherigen Designs ziehen mit um.

- **Ordner wählen.** Unter Bezzle › Designordner … oder mit einem Klick auf den Ordner neben Deine Designs auf der Startseite wählst du ihn aus. Neue Designs und importierte Dateien landen ab dann dort, und Bezzle merkt sich deine Wahl.
- **Deine Designs kommen mit.** Bezzle bietet dir an, deine Designs zu verschieben, auch die, die gerade in einem Tab offen sind. Jedes behält seinen Platz auf der Startseite, und geteilte Designs bleiben geteilt. Mit Dort lassen bleiben sie, wo sie sind, und trotzdem auf der Startseite.
- **Ein Ordner, den du schon nutzt.** Wählst du einen Ordner, in dem schon Designs liegen, erscheinen sie alle auf der Startseite.

Außerdem in diesem Update: Öffnest du ein Design aus einem Unterordner deines Designordners, erscheint es jetzt auch auf der Startseite.

### fr: Tes designs, dans le dossier de ton choix.

Bezzle peut désormais garder tes designs dans le dossier que tu veux, par exemple dans iCloud Drive ou avec le reste d’un projet. Les designs que tu as déjà y vont avec toi.

- **Choisis le dossier.** Bezzle › Dossier des designs… ou le dossier à côté de Vos designs sur l’accueil te permet de le choisir. Dès lors, les nouveaux designs et les fichiers importés y sont enregistrés, et Bezzle s’en souvient.
- **Tes designs suivent.** Bezzle te propose de déplacer les designs que tu as déjà, même ceux ouverts dans un onglet. Chacun garde sa place sur l’accueil, et les designs partagés restent partagés. Avec Les laisser, ils restent où ils sont, et toujours sur l’accueil.
- **Un dossier que tu utilises déjà.** Choisis un dossier qui contient déjà des designs, et ils apparaissent tous sur l’accueil.

Aussi dans cette mise à jour : un design que tu ouvres depuis un dossier rangé dans ton dossier des designs apparaît désormais aussi sur l’accueil.

### it: I tuoi design, nella cartella che scegli tu.

Bezzle ora può tenere i tuoi design in qualsiasi cartella, per esempio in iCloud Drive o insieme al resto di un progetto. I design che hai già vengono con te.

- **Scegli la cartella.** Bezzle › Cartella dei design… oppure la cartella accanto a I tuoi design nella Home ti permette di sceglierla. Da quel momento i nuovi design e i file importati vengono salvati lì, e Bezzle si ricorda la tua scelta.
- **I tuoi design vengono con te.** Bezzle ti propone di spostare i design che hai già, anche quelli aperti in un pannello. Ognuno mantiene il suo posto nella Home, e i design condivisi restano condivisi. Con Lasciali lì restano dove sono, e sempre nella Home.
- **Una cartella che usi già.** Scegli una cartella che contiene già dei design, e compaiono tutti nella Home.

Anche in questo aggiornamento: un design che apri da una sottocartella della tua cartella dei design ora compare anche nella Home.

## 1.2 · 2026-11-05

### en: Text that behaves the way you know it.

Text boxes now work as they do in Adobe XD, so they never surprise you. You can also turn text into paths, find a font by typing its name, and rename designs from the home screen.

- **Text boxes as in Adobe XD.** A click makes text of Auto width, which grows as you type, and its one handle makes the letters bigger or smaller. Dragging out a box makes Auto height text that wraps: pull a side to wrap it differently, or its top or bottom to make it Fixed size. Then the handles change only the box, never the letters.
- **See when words don't fit.** When a box of Fixed size is too small for its words, its bottom handle turns red. Double-click that handle and the box fits its words again.
- **The Text tool stays in your hand.** Click again for the next text. New text takes the style of the text you have selected, and Esc puts the tool down.
- **Text into paths.** Object › Convert to Path (⌘8) now works on text too: the letters become shapes you can edit point by point, and look exactly as they did.
- **Find a font by typing.** Open the font menu in the Text card and type a few letters of its name.
- **Rename from the home screen.** Right-click a design and choose Rename. Open in a tab or shared with others, it follows its new name.

Also in this update: changing only the capitals of a design's name, such as menu to Menu, no longer adds a number to it.

### de: Text, der sich so verhält, wie du es kennst.

Textfelder funktionieren jetzt wie in Adobe XD und überraschen dich nicht mehr. Außerdem machst du Text zu Pfaden, findest eine Schrift, indem du ihren Namen tippst, und benennst Designs direkt auf der Startseite um.

- **Textfelder wie in Adobe XD.** Ein Klick setzt Text mit automatischer Breite, der beim Tippen mitwächst, und sein einziger Griff macht die Buchstaben größer oder kleiner. Ziehst du ein Feld auf, entsteht Text mit automatischer Höhe, der umbricht: Zieh an einer Seite, um ihn anders umzubrechen, oder oben oder unten für eine feste Größe. Dann ändern die Griffe nur noch das Feld, nie die Buchstaben.
- **Du siehst, wenn Wörter keinen Platz haben.** Ist ein Feld mit fester Größe zu klein für seinen Text, wird sein unterer Griff rot. Ein Doppelklick darauf macht das Feld wieder passend.
- **Das Textwerkzeug bleibt in der Hand.** Klick einfach weiter für den nächsten Text. Neuer Text übernimmt den Stil des ausgewählten, und Esc legt das Werkzeug wieder weg.
- **Text zu Pfaden.** Objekt › In Pfad umwandeln (⌘8) geht jetzt auch mit Text: Die Buchstaben werden zu Formen, die du Punkt für Punkt bearbeiten kannst, und sehen genau so aus wie vorher.
- **Schriften durch Tippen finden.** Öffne das Schriftmenü in der Karte Text und tipp ein paar Buchstaben ihres Namens.
- **Umbenennen auf der Startseite.** Klick mit der rechten Maustaste auf ein Design und wähle Umbenennen. Ist es in einem Tab offen oder mit anderen geteilt, trägt es dort gleich den neuen Namen.

Außerdem in diesem Update: Änderst du nur die Groß- und Kleinschreibung eines Namens, etwa menu zu Menu, bekommt das Design keine Nummer mehr angehängt.

### fr: Du texte qui se comporte comme tu en as l’habitude.

Les zones de texte fonctionnent désormais comme dans Adobe XD et ne te surprennent plus. Tu peux aussi transformer du texte en tracés, trouver une police en tapant son nom et renommer tes designs depuis l’accueil.

- **Des zones de texte comme dans Adobe XD.** Un clic crée du texte en largeur automatique, qui s’allonge à mesure que tu tapes, et son unique poignée agrandit ou réduit les lettres. Tracer un cadre crée du texte en hauteur automatique, renvoyé à la ligne : tire un côté pour couper les lignes ailleurs, ou le haut ou le bas pour passer en taille fixe. Les poignées ne changent alors que le cadre, jamais les lettres.
- **Tu vois quand des mots ne tiennent pas.** Quand un cadre de taille fixe est trop petit pour ses mots, sa poignée du bas devient rouge. Double-clique dessus et le cadre s’ajuste de nouveau à ses mots.
- **L’outil Texte reste en main.** Clique encore pour le texte suivant. Un nouveau texte reprend le style du texte sélectionné, et Échap repose l’outil.
- **Du texte en tracés.** Objet › Convertir en tracé (⌘8) marche désormais aussi sur le texte : les lettres deviennent des formes que tu modifies point par point, et restent exactement les mêmes à l’œil.
- **Trouver une police en tapant.** Ouvre le menu des polices dans la carte Texte et tape quelques lettres de son nom.
- **Renommer depuis l’accueil.** Fais un clic droit sur un design et choisis Renommer. Ouvert dans un onglet ou partagé avec d’autres, il prend aussitôt son nouveau nom.

Aussi dans cette mise à jour : changer seulement les majuscules d’un nom, par exemple menu en Menu, n’ajoute plus de numéro au design.

### it: Testo che si comporta come sei abituato.

Le caselle di testo ora funzionano come in Adobe XD e non ti sorprendono più. Puoi anche trasformare il testo in tracciati, trovare un font digitandone il nome e rinominare i design dalla Home.

- **Caselle di testo come in Adobe XD.** Un clic crea testo a larghezza automatica, che si allunga mentre scrivi, e la sua unica maniglia ingrandisce o rimpicciolisce le lettere. Trascinando un riquadro crei testo ad altezza automatica, che va a capo: tira un lato per andare a capo altrove, oppure il bordo in alto o in basso per renderlo a dimensione fissa. Allora le maniglie cambiano solo il riquadro, mai le lettere.
- **Vedi quando le parole non ci stanno.** Quando un riquadro a dimensione fissa è troppo piccolo per le sue parole, la sua maniglia in basso diventa rossa. Fai doppio clic su di essa e il riquadro torna su misura.
- **Lo strumento Testo resta in mano.** Fai di nuovo clic per il testo successivo. Il nuovo testo prende lo stile di quello selezionato, ed Esc posa lo strumento.
- **Testo in tracciati.** Oggetto › Converti in tracciato (⌘8) ora funziona anche sul testo: le lettere diventano forme che modifichi punto per punto, e restano identiche a prima.
- **Trova un font digitando.** Apri il menu dei font nella scheda Testo e digita qualche lettera del suo nome.
- **Rinomina dalla Home.** Fai clic destro su un design e scegli Rinomina. Se è aperto in un pannello o condiviso con altri, prende subito il nuovo nome.

Anche in questo aggiornamento: se cambi solo le maiuscole di un nome, per esempio da menu a Menu, il design non riceve più un numero.

## 1.1 · 2026-11-04

### en: Bezzle, now also from its own website.

The same free Bezzle as on the Mac App Store, as a download from its website. It keeps itself up to date.

- **Updates by itself.** Bezzle looks for a new version once a day, fetches it quietly and puts it in place the next time you quit. Bezzle › Check for Updates… looks right away.
- **Signed and notarized.** Apple checks every download, and every update is signed, so only a version made by us is ever installed.
- **The same designs.** The copy from the website and the one from the App Store open the same designs, and designs shared over iCloud work between the two.

### de: Bezzle, jetzt auch direkt von seiner Website.

Dasselbe kostenlose Bezzle wie im Mac App Store, als Download von seiner Website. Es hält sich selbst auf dem neuesten Stand.

- **Updates von selbst.** Bezzle schaut einmal am Tag nach einer neuen Version, lädt sie im Hintergrund und setzt sie ein, wenn du es das nächste Mal beendest. Bezzle › Nach Updates suchen … schaut sofort nach.
- **Signiert und beglaubigt.** Apple prüft jeden Download, und jedes Update ist signiert, sodass nur eine Version von uns installiert wird.
- **Dieselben Designs.** Die Kopie von der Website und die aus dem App Store öffnen dieselben Designs, und über iCloud geteilte Designs funktionieren zwischen beiden.

### fr: Bezzle, désormais aussi sur son propre site.

Le même Bezzle gratuit que sur le Mac App Store, à télécharger depuis son site. Il se tient à jour tout seul.

- **Mises à jour automatiques.** Bezzle cherche une nouvelle version une fois par jour, la télécharge en arrière-plan et l’installe la prochaine fois que tu le quittes. Bezzle › Rechercher des mises à jour… vérifie tout de suite.
- **Signé et notarié.** Apple vérifie chaque téléchargement, et chaque mise à jour est signée, si bien que seule une version faite par nous est installée.
- **Les mêmes designs.** La copie du site et celle de l’App Store ouvrent les mêmes designs, et les designs partagés par iCloud fonctionnent entre les deux.

### it: Bezzle, ora anche dal suo sito.

Lo stesso Bezzle gratuito del Mac App Store, da scaricare dal suo sito. Si tiene aggiornato da solo.

- **Aggiornamenti da solo.** Bezzle cerca una nuova versione una volta al giorno, la scarica in sottofondo e la installa la prossima volta che lo chiudi. Bezzle › Verifica aggiornamenti… controlla subito.
- **Firmato e autenticato.** Apple controlla ogni download, e ogni aggiornamento è firmato, così viene installata solo una versione fatta da noi.
- **Gli stessi design.** La copia dal sito e quella dall’App Store aprono gli stessi design, e i design condivisi tramite iCloud funzionano tra le due.
