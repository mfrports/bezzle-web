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

## 1.5.2 · 2026-11-09

### en: When you work together, pointers from Windows now move smoothly.

The pointers of people working on Windows now glide across a shared design, also while they drag a layer, instead of stopping and jumping.

- **Your pointer as it moves.** On a PC, Bezzle now tells the others where your pointer is many times a second, also while you drag, so they see where you are and what you move as it happens.
- **Smoother dragging on Windows.** A layer you drag on a PC follows your hand closely, and the numbers on the Frame card keep up with it.

### de: Wenn ihr zusammenarbeitet, bewegen sich Zeiger von Windows jetzt ruhig.

Die Zeiger von Leuten auf Windows gleiten jetzt über ein geteiltes Design, auch während sie eine Ebene ziehen, statt stehen zu bleiben und zu springen.

- **Dein Zeiger, wie er sich bewegt.** Auf einem PC sagt Bezzle den anderen jetzt viele Male pro Sekunde, wo dein Zeiger ist, auch während du ziehst. So sehen sie, wo du bist und was du bewegst, genau dann, wenn es geschieht.
- **Flüssiger ziehen auf Windows.** Eine Ebene, die du auf einem PC ziehst, folgt deiner Hand dicht, und die Zahlen auf der Karte Frame halten mit.

### fr: Quand tu travailles avec d’autres, les pointeurs venus de Windows bougent maintenant en douceur.

Les pointeurs des personnes qui travaillent sur Windows glissent maintenant sur un design partagé, même pendant qu’elles font glisser un calque, au lieu de s’arrêter et de sauter.

- **Ton pointeur tel qu’il bouge.** Sur un PC, Bezzle indique maintenant aux autres où se trouve ton pointeur plusieurs fois par seconde, même pendant que tu fais glisser, pour qu’ils voient où tu es et ce que tu déplaces au moment même.
- **Des glissements plus fluides sur Windows.** Un calque que tu fais glisser sur un PC suit ta main de près, et les chiffres de la carte Cadre suivent le mouvement.

### it: Quando lavori con altri, i puntatori da Windows ora si muovono fluidi.

I puntatori di chi lavora su Windows ora scorrono su un design condiviso, anche mentre trascinano un livello, invece di fermarsi e saltare.

- **Il tuo puntatore mentre si muove.** Su un PC, Bezzle ora dice agli altri dove si trova il tuo puntatore molte volte al secondo, anche mentre trascini, così vedono dove sei e cosa sposti nel momento in cui accade.
- **Trascinamenti più fluidi su Windows.** Un livello che trascini su un PC segue da vicino la tua mano, e i numeri della scheda Frame tengono il passo.

## 1.5.1 · 2026-11-08

### en: Bezzle on Windows sets text and exports as the Mac does.

A design now looks the same on a PC as on a Mac in more places: in its words, in what you export and in its photos.

- **Text as on the Mac.** Justified text spreads the way the Mac spreads it, tabs stop where the Mac's do, Hebrew and Arabic read from right to left, and Arial, Georgia, Times New Roman and Courier New are drawn in Windows' own fonts.
- **Exports that match.** JPEGs come out as the Mac writes them at every quality, and gradients in layers with lowered opacity stay in place in a PDF opened on a Mac.
- **Photos keep their colours.** Display P3 photos keep their wide colours when you use Remove Background or develop them, and HDR photos look as they do on the Mac.
- **Photos develop on their way.** When someone shares a design with you, a photo still on its way shows as developing paper and comes into focus when it arrives, as on the Mac.

Also in this update: on the Mac, an AI app connected to Bezzle now duplicates designs when your Mac is set to German, French or Italian too.

### de: Bezzle setzt Text und exportiert auf Windows wie auf dem Mac.

Ein Design sieht auf einem PC jetzt an noch mehr Stellen gleich aus wie auf einem Mac: in seinen Worten, in allem, was du exportierst, und in seinen Fotos.

- **Text wie auf dem Mac.** Blocksatz verteilt sich so, wie der Mac ihn verteilt, Tabulatoren halten dort, wo sie auf dem Mac halten, Hebräisch und Arabisch laufen von rechts nach links, und Arial, Georgia, Times New Roman und Courier New erscheinen in den Schriften von Windows selbst.
- **Exporte, die passen.** JPEGs entstehen in jeder Qualität so, wie der Mac sie schreibt, und Verläufe in Ebenen mit weniger Deckkraft bleiben an ihrem Platz, wenn du ein PDF auf einem Mac öffnest.
- **Fotos behalten ihre Farben.** Fotos in Display P3 behalten ihre weiten Farben, wenn du Hintergrund entfernen nutzt oder sie entwickelst, und HDR-Fotos sehen aus wie auf dem Mac.
- **Fotos entwickeln sich unterwegs.** Teilt jemand ein Design mit dir, zeigt sich ein Foto, das noch unterwegs ist, als Fotopapier, das sich entwickelt, und wird scharf, sobald es ankommt, wie auf dem Mac.

Außerdem in diesem Update: Auf dem Mac dupliziert eine mit Bezzle verbundene KI-App Designs jetzt auch, wenn dein Mac auf Deutsch, Französisch oder Italienisch eingestellt ist.

### fr: Sur Windows, Bezzle compose le texte et exporte comme sur le Mac.

Un design est maintenant identique sur un PC et sur un Mac à plus d’endroits encore, dans ses mots, dans ce que tu exportes et dans ses photos.

- **Le texte comme sur le Mac.** Le texte justifié se répartit comme sur le Mac, les tabulations s’arrêtent là où le Mac les arrête, l’hébreu et l’arabe se lisent de droite à gauche, et Arial, Georgia, Times New Roman et Courier New s’affichent dans les polices de Windows lui-même.
- **Des exports identiques.** Les JPEG sortent comme le Mac les écrit, à chaque qualité, et les dégradés dans les calques à opacité réduite restent à leur place dans un PDF ouvert sur un Mac.
- **Les photos gardent leurs couleurs.** Les photos en Display P3 gardent leurs couleurs étendues quand tu utilises Supprimer l’arrière-plan ou que tu les développes, et les photos HDR ont le même aspect que sur le Mac.
- **Les photos se révèlent en chemin.** Quand quelqu’un partage un design avec toi, une photo encore en route apparaît comme un papier photo qui se révèle, puis devient nette à son arrivée, comme sur le Mac.

Également dans cette mise à jour, sur le Mac, une app d’IA connectée à Bezzle duplique maintenant les designs même quand ton Mac est réglé en allemand, en français ou en italien.

### it: Su Windows, Bezzle compone il testo ed esporta come sul Mac.

Un design ora è uguale su un PC e su un Mac in ancora più punti, nelle sue parole, in quello che esporti e nelle sue foto.

- **Il testo come sul Mac.** Il testo giustificato si distribuisce come sul Mac, le tabulazioni si fermano dove si fermano sul Mac, l’ebraico e l’arabo si leggono da destra a sinistra, e Arial, Georgia, Times New Roman e Courier New appaiono nei caratteri di Windows stesso.
- **Esportazioni identiche.** I JPEG escono come li scrive il Mac, a ogni qualità, e le sfumature nei livelli con opacità ridotta restano al loro posto in un PDF aperto su un Mac.
- **Le foto mantengono i loro colori.** Le foto in Display P3 mantengono i loro colori ampi quando usi Rimuovi sfondo o le sviluppi, e le foto HDR appaiono come sul Mac.
- **Le foto si sviluppano per strada.** Quando qualcuno condivide un design con te, una foto ancora in arrivo appare come carta fotografica che si sviluppa e diventa nitida quando arriva, come sul Mac.

Anche in questo aggiornamento, sul Mac, un’app di IA collegata a Bezzle ora duplica i design anche quando il tuo Mac è impostato in tedesco, francese o italiano.

## 1.5 · 2026-11-08

### en: Bezzle comes to Windows.

Bezzle is now a free app for Windows PCs too, with the same designs as on the Mac. Whoever you work with, on a Mac or a PC, you open the same design and work on it together.

- **One design on a Mac and a PC.** A design shared by link opens on either, you see each other at work live, and a design in a shared folder stays one design, whichever computer changes it.
- **Share links on bezzle.ch.** Copy Link now gives a bezzle.ch link, which anyone with Bezzle opens on a Mac or a PC. Links you sent before still open.
- **The Frame card is open from the start.** When you pick a layer, its size and place are right there, and they are again when you come back from Prototype.

### de: Bezzle gibt es jetzt auch für Windows.

Bezzle ist jetzt auch eine kostenlose App für Windows-PCs, mit denselben Designs wie auf dem Mac. Mit wem du auch arbeitest, ob am Mac oder am PC, ihr öffnet dasselbe Design und arbeitet gemeinsam daran.

- **Ein Design auf Mac und PC.** Ein per Link geteiltes Design öffnet sich auf beiden, ihr seht einander live arbeiten, und ein Design in einem geteilten Ordner bleibt ein Design, egal welcher Computer es ändert.
- **Links zum Teilen auf bezzle.ch.** Link kopieren gibt jetzt einen Link auf bezzle.ch, den alle mit Bezzle auf Mac oder PC öffnen. Links, die du früher geschickt hast, öffnen sich weiterhin.
- **Die Karte Frame ist von Anfang an offen.** Wählst du eine Ebene, siehst du gleich ihre Größe und Lage, und wieder, wenn du von Prototyp zurückkommst.

### fr: Bezzle arrive sur Windows.

Bezzle est maintenant aussi une app gratuite pour les PC Windows, avec les mêmes designs que sur le Mac. Avec qui que tu travailles, sur un Mac ou un PC, vous ouvrez le même design et y travaillez ensemble.

- **Un design sur Mac et PC.** Un design partagé par lien s’ouvre sur l’un comme sur l’autre, vous vous voyez travailler en direct, et un design dans un dossier partagé reste un seul design, quel que soit l’ordinateur qui le modifie.
- **Les liens de partage sur bezzle.ch.** Copier le lien donne maintenant un lien bezzle.ch, que tout le monde ouvre avec Bezzle sur Mac ou PC. Les liens que tu as envoyés avant s’ouvrent toujours.
- **La carte Cadre est ouverte dès le départ.** Quand tu choisis un calque, sa taille et sa place sont tout de suite là, et elles le sont encore quand tu reviens de Prototype.

### it: Bezzle arriva su Windows.

Bezzle è ora anche un’app gratuita per i PC Windows, con gli stessi design del Mac. Con chiunque tu lavori, su un Mac o su un PC, aprite lo stesso design e ci lavorate insieme.

- **Un design su Mac e PC.** Un design condiviso tramite link si apre su entrambi, vi vedete lavorare in diretta, e un design in una cartella condivisa resta un solo design, qualunque computer lo modifichi.
- **I link di condivisione su bezzle.ch.** Copia link ora dà un link bezzle.ch, che chiunque abbia Bezzle apre su Mac o PC. I link che hai mandato prima si aprono ancora.
- **La scheda Frame è aperta fin dall’inizio.** Quando scegli un livello, la sua dimensione e posizione sono subito lì, e lo sono di nuovo quando torni da Prototipo.

## 1.4.2 · 2026-11-06

### en: Designs in a shared folder stay one design.

When someone renames or moves a design in a shared Google Drive or Dropbox folder while you have it open, Bezzle now follows it. You all keep working in the same design, and nobody ends up alone in a copy.

- **Designs shared with you keep their name.** Rename is off for a design someone shared with you by link, so it stays the one everybody knows.
- **Text holds still while you type.** The letters no longer jump sideways with each key, however the text is aligned.
- **Long rows of styles fold away.** When a design has many styles, a card shows the first few and how many more there are, so its own settings come right after. One click shows them all, and Fewer folds them away again.
- **Menus stay open on the trackpad.** A right click with two fingers opens Bezzle's menu, and it stays open the first time.

### de: Designs in einem geteilten Ordner bleiben ein Design.

Benennt jemand ein Design in einem geteilten Ordner von Google Drive oder Dropbox um oder verschiebt es, während du es offen hast, geht Bezzle jetzt mit. Ihr arbeitet alle im selben Design weiter, und niemand landet allein in einer Kopie.

- **Mit dir geteilte Designs behalten ihren Namen.** Umbenennen ist aus bei einem Design, das jemand per Link mit dir geteilt hat. So bleibt es das, das alle kennen.
- **Text hält beim Tippen still.** Die Buchstaben springen nicht mehr bei jeder Taste zur Seite, wie auch immer der Text ausgerichtet ist.
- **Lange Reihen von Stilen klappen sich weg.** Hat ein Design viele Stile, zeigt eine Karte die ersten paar und wie viele weitere es gibt, damit ihre eigenen Einstellungen gleich folgen. Ein Klick zeigt alle, und Weniger klappt sie wieder weg.
- **Menüs bleiben auf dem Trackpad offen.** Ein Rechtsklick mit zwei Fingern öffnet das Menü von Bezzle, und es bleibt gleich beim ersten Mal offen.

### fr: Les designs d’un dossier partagé restent un seul design.

Quand quelqu’un renomme ou déplace un design dans un dossier partagé de Google Drive ou Dropbox pendant que tu l’as ouvert, Bezzle le suit maintenant. Vous continuez tous à travailler dans le même design, et personne ne se retrouve seul dans une copie.

- **Les designs partagés avec toi gardent leur nom.** Renommer est désactivé pour un design que quelqu’un a partagé avec toi par lien. Il reste ainsi celui que tout le monde connaît.
- **Le texte reste immobile pendant que tu tapes.** Les lettres ne sautent plus de côté à chaque touche, quel que soit l’alignement du texte.
- **Les longues rangées de styles se replient.** Quand un design a beaucoup de styles, une carte montre les premiers et combien il y en a encore, pour que ses propres réglages suivent tout de suite. Un clic les montre tous, et Moins les replie de nouveau.
- **Les menus restent ouverts sur le trackpad.** Un clic droit à deux doigts ouvre le menu de Bezzle, et il reste ouvert dès la première fois.

### it: I design in una cartella condivisa restano un solo design.

Quando qualcuno rinomina o sposta un design in una cartella condivisa di Google Drive o Dropbox mentre lo hai aperto, ora Bezzle lo segue. Continuate tutti a lavorare nello stesso design, e nessuno resta da solo in una copia.

- **I design condivisi con te tengono il loro nome.** Rinomina è disattivato per un design che qualcuno ha condiviso con te tramite link. Così resta quello che tutti conoscono.
- **Il testo sta fermo mentre scrivi.** Le lettere non saltano più di lato a ogni tasto, comunque sia allineato il testo.
- **Le lunghe file di stili si ripiegano.** Quando un design ha molti stili, una scheda mostra i primi e quanti ce ne sono ancora, così le sue impostazioni seguono subito. Un clic li mostra tutti, e Meno li ripiega di nuovo.
- **I menu restano aperti sul trackpad.** Un clic destro con due dita apre il menu di Bezzle, e resta aperto già la prima volta.

## 1.4.1 · 2026-11-05

### en: Rename an artboard right where it is.

Double click the name over an artboard and type a new one. Return keeps it, and Escape leaves the name as it was.

- **Designs open with room to work.** When you open a design, the window now takes all of the screen the menu bar and the Dock leave free. On a very large display it stops at a comfortable size, in the middle.

### de: Benenne eine Zeichenfläche direkt dort um, wo sie liegt.

Doppelklicke auf den Namen über einer Zeichenfläche und tippe einen neuen. Mit Return behältst du ihn, mit Esc bleibt der alte Name.

- **Designs öffnen sich mit Platz zum Arbeiten.** Öffnest du ein Design, nimmt das Fenster jetzt den ganzen Bildschirm ein, den Menüleiste und Dock frei lassen. Auf einem sehr großen Display hört es bei einer angenehmen Größe auf und steht in der Mitte.

### fr: Renomme un plan de travail là où il se trouve.

Double-clique sur le nom au-dessus d’un plan de travail et tape le nouveau. Retour le garde, Échap laisse le nom tel qu’il était.

- **Les designs s’ouvrent avec de la place pour travailler.** Quand tu ouvres un design, la fenêtre prend maintenant tout l’écran que laissent libres la barre des menus et le Dock. Sur un très grand écran, elle s’arrête à une taille confortable, au centre.

### it: Rinomina una tavola da disegno proprio dove si trova.

Fai doppio clic sul nome sopra una tavola da disegno e scrivi quello nuovo. Ritorno a capo lo conferma, Esc lascia il nome com’era.

- **I design si aprono con spazio per lavorare.** Quando apri un design, la finestra ora occupa tutto lo schermo lasciato libero dalla barra dei menu e dal Dock. Su un display molto grande si ferma a una dimensione comoda, al centro.

## 1.4 · 2026-11-05

### en: Share a design with anyone, by link.

Share… now offers Copy Link. Whoever opens the link can work on the design with you, on any Mac, wherever you keep it. Nobody needs iCloud or an account of any kind.

- **Only those with the link can read it.** The design is sealed on your Mac before it leaves, and Bezzle's server keeps it that way, so the others can go on working while your Mac is off.
- **You decide how long.** Stop Sharing… in the same menu ends it, and everyone else keeps the design as it is then, read only. Moving a design you shared to the Trash asks first, as it ends sharing too.
- **Designs in Google Drive or Dropbox stay whole.** Several people can have the same file open from a shared folder, and nobody's changes are written over. You see each other at work, as in a design shared by link.

Designs shared through iCloud are no longer kept in step. Your own are yours again: share them by link to go on working on them together. Those others shared with you stay as they last were, read only, and Save a Copy keeps one for you.

### de: Teile ein Design mit allen, per Link.

Teilen … bietet jetzt Link kopieren. Wer den Link öffnet, arbeitet mit dir am Design, auf jedem Mac und ganz gleich, wo du es aufbewahrst. Niemand braucht dafür iCloud oder irgendein Konto.

- **Nur wer den Link hat, kann es lesen.** Das Design wird auf deinem Mac versiegelt, bevor es ihn verlässt, und so bewahrt es der Server von Bezzle auf. Die anderen arbeiten also weiter, auch wenn dein Mac aus ist.
- **Du bestimmst, wie lange.** Mit Teilen beenden … im selben Menü ist Schluss, und alle anderen behalten das Design so, wie es dann ist, nur zum Ansehen. Legst du ein Design, das du teilst, in den Papierkorb, fragt Bezzle vorher, denn damit endet auch das Teilen.
- **Designs in Google Drive oder Dropbox bleiben ganz.** Mehrere Personen können dieselbe Datei aus einem geteilten Ordner offen haben, und niemandes Änderungen werden überschrieben. Ihr seht einander bei der Arbeit, wie in einem per Link geteilten Design.

Über iCloud geteilte Designs werden nicht mehr abgeglichen. Deine eigenen gehören wieder dir: Teile sie per Link, um weiter gemeinsam daran zu arbeiten. Die, die andere mit dir geteilt haben, bleiben, wie sie zuletzt waren, nur zum Ansehen, und mit Kopie sichern behältst du eine für dich.

### fr: Partage un design avec qui tu veux, par lien.

Partager… propose maintenant Copier le lien. La personne qui ouvre le lien travaille avec toi sur le design, sur n’importe quel Mac, où que tu le gardes. Personne n’a besoin d’iCloud ni d’aucun compte.

- **Seuls ceux qui ont le lien peuvent le lire.** Le design est scellé sur ton Mac avant de le quitter, et le serveur de Bezzle le garde ainsi : les autres continuent à travailler même quand ton Mac est éteint.
- **C’est toi qui décides combien de temps.** Arrêter le partage… dans le même menu y met fin, et tous les autres gardent le design tel qu’il est alors, en lecture seule. Placer dans la corbeille un design que tu partages te demande d’abord, car cela met fin au partage aussi.
- **Les designs dans Google Drive ou Dropbox restent entiers.** Plusieurs personnes peuvent ouvrir le même fichier depuis un dossier partagé, et les modifications de personne ne sont écrasées. Vous vous voyez travailler, comme dans un design partagé par lien.

Les designs partagés par iCloud ne sont plus synchronisés. Les tiens redeviennent à toi : partage-les par lien pour continuer à y travailler ensemble. Ceux que d’autres ont partagés avec toi restent tels qu’ils étaient, en lecture seule, et Enregistrer une copie t’en garde une.

### it: Condividi un design con chi vuoi, tramite link.

Condividi… ora offre Copia link. Chi apre il link lavora al design con te, su qualsiasi Mac, ovunque tu lo tenga. Nessuno ha bisogno di iCloud né di alcun account.

- **Solo chi ha il link può leggerlo.** Il design viene sigillato sul tuo Mac prima di lasciarlo, e il server di Bezzle lo conserva così: gli altri continuano a lavorare anche quando il tuo Mac è spento.
- **Decidi tu per quanto.** Interrompi condivisione… nello stesso menu la chiude, e tutti gli altri tengono il design com’è in quel momento, in sola lettura. Se sposti nel Cestino un design che condividi, Bezzle chiede prima, perché così finisce anche la condivisione.
- **I design in Google Drive o Dropbox restano interi.** Più persone possono avere aperto lo stesso file da una cartella condivisa, e le modifiche di nessuno vengono sovrascritte. Vi vedete lavorare, come in un design condiviso tramite link.

I design condivisi tramite iCloud non vengono più sincronizzati. I tuoi tornano tuoi: condividili tramite link per continuare a lavorarci insieme. Quelli che altri hanno condiviso con te restano com’erano, in sola lettura, e Salva una copia te ne tiene una.

## 1.3.3 · 2026-11-05

### en: Invitations that work from any mail or chat.

Share now offers Copy Invitation Link. Paste the link into any mail, chat or message: whoever opens it gets to the design in Bezzle with one click, in any browser, whatever iCloud account their Mac uses.

- **Anyone with the link can work on the design.** People… in the same menu shows who has it, and removes anyone you like.

### de: Einladungen, die aus jeder Mail und jedem Chat funktionieren.

Teilen bietet jetzt Einladungslink kopieren. Füge den Link in eine Mail, einen Chat oder eine Nachricht ein: Wer ihn öffnet, kommt mit einem Klick zum Design in Bezzle, in jedem Browser und egal, mit welchem Apple Account sein Mac bei iCloud angemeldet ist.

- **Alle mit dem Link können am Design mitarbeiten.** Unter Personen im selben Menü siehst du, wer es hat, und entfernst, wen du willst.

### fr: Des invitations qui marchent depuis n’importe quel e-mail ou chat.

Partager propose maintenant Copier le lien d’invitation. Colle le lien dans un e-mail, une discussion ou un message : la personne qui l’ouvre arrive au design dans Bezzle d’un clic, dans n’importe quel navigateur, quel que soit le compte iCloud de son Mac.

- **Toute personne ayant le lien peut travailler sur le design.** Personnes… dans le même menu montre qui l’a, et retire qui tu veux.

### it: Inviti che funzionano da qualsiasi mail o chat.

Condividi ora offre Copia link di invito. Incolla il link in una mail, una chat o un messaggio: chi lo apre arriva al design in Bezzle con un clic, in qualsiasi browser, con qualunque account iCloud abbia il suo Mac.

- **Chiunque abbia il link può lavorare al design.** Persone… nello stesso menu mostra chi ce l’ha e rimuove chi vuoi.

## 1.3.2 · 2026-11-05

### en: Invitations to shared designs find their way to Bezzle.

An invitation that opens in your browser instead of Bezzle can now be handed to Bezzle from the Bezzle website with one click. And when a shared design cannot be opened, Bezzle tells you why, for example that your Mac needs to be signed in to iCloud.

### de: Einladungen zu geteilten Designs finden zu Bezzle.

Öffnet sich eine Einladung in deinem Browser statt in Bezzle, gibst du sie jetzt auf der Website von Bezzle mit einem Klick an Bezzle weiter. Und lässt sich ein geteiltes Design nicht öffnen, sagt dir Bezzle, warum, etwa dass dein Mac bei iCloud angemeldet sein muss.

### fr: Les invitations aux designs partagés trouvent le chemin de Bezzle.

Quand une invitation s’ouvre dans ton navigateur au lieu de Bezzle, tu peux maintenant la passer à Bezzle d’un clic depuis le site de Bezzle. Et quand un design partagé ne peut pas s’ouvrir, Bezzle te dit pourquoi, par exemple que ton Mac doit être connecté à iCloud.

### it: Gli inviti ai design condivisi arrivano in Bezzle.

Quando un invito si apre nel browser invece che in Bezzle, ora puoi passarlo a Bezzle con un clic dal sito di Bezzle. E quando un design condiviso non si apre, Bezzle ti dice perché, per esempio che il tuo Mac deve aver effettuato l’accesso a iCloud.

## 1.3.1 · 2026-11-05

### en: New versions, shown as you open Bezzle.

When a new version is out, Bezzle now shows it with what's new as soon as you open it, and you choose when to install it. Until now it was put in place quietly when you quit, without a word.

### de: Neue Versionen, sobald du Bezzle öffnest.

Gibt es eine neue Version, zeigt Bezzle sie dir jetzt gleich beim Öffnen, mit allem, was neu ist, und du entscheidest, wann du sie installierst. Bisher wurde sie beim Beenden still und ohne Hinweis eingesetzt.

### fr: Les nouvelles versions, dès que tu ouvres Bezzle.

Quand une nouvelle version sort, Bezzle te la présente désormais dès que tu l’ouvres, avec ses nouveautés, et tu choisis quand l’installer. Jusqu’ici, elle s’installait discrètement quand tu quittais Bezzle, sans rien dire.

### it: Le nuove versioni, appena apri Bezzle.

Quando esce una nuova versione, Bezzle ora te la mostra appena lo apri, con tutte le novità, e scegli tu quando installarla. Finora veniva installata in silenzio alla chiusura, senza avvisarti.

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

### en: Bezzle, now from its own website.

Bezzle is free to download from its website, and it keeps itself up to date.

- **Updates by itself.** Bezzle looks for a new version once a day, fetches it quietly and puts it in place the next time you quit. Bezzle › Check for Updates… looks right away.
- **Signed and notarized.** Apple checks every download, and every update is signed, so only a version made by us is ever installed.

### de: Bezzle, jetzt direkt von seiner Website.

Bezzle gibt es kostenlos auf seiner Website, und es hält sich selbst auf dem neuesten Stand.

- **Updates von selbst.** Bezzle schaut einmal am Tag nach einer neuen Version, lädt sie im Hintergrund und setzt sie ein, wenn du es das nächste Mal beendest. Bezzle › Nach Updates suchen … schaut sofort nach.
- **Signiert und beglaubigt.** Apple prüft jeden Download, und jedes Update ist signiert, sodass nur eine Version von uns installiert wird.

### fr: Bezzle, désormais sur son propre site.

Bezzle se télécharge gratuitement depuis son site, et il se tient à jour tout seul.

- **Mises à jour automatiques.** Bezzle cherche une nouvelle version une fois par jour, la télécharge en arrière-plan et l’installe la prochaine fois que tu le quittes. Bezzle › Rechercher des mises à jour… vérifie tout de suite.
- **Signé et notarié.** Apple vérifie chaque téléchargement, et chaque mise à jour est signée, si bien que seule une version faite par nous est installée.

### it: Bezzle, ora dal suo sito.

Bezzle si scarica gratis dal suo sito, e si tiene aggiornato da solo.

- **Aggiornamenti da solo.** Bezzle cerca una nuova versione una volta al giorno, la scarica in sottofondo e la installa la prossima volta che lo chiudi. Bezzle › Verifica aggiornamenti… controlla subito.
- **Firmato e autenticato.** Apple controlla ogni download, e ogni aggiornamento è firmato, così viene installata solo una versione fatta da noi.
