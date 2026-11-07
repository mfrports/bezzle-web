---
title: Text
nav: Text
lede: Setz Wörter in jeder Schrift auf deinem Mac, von einer einzelnen Beschriftung bis zu Absätzen und Listen, gestalte einzelne Buchstaben, bieg Text entlang einer Kurve oder einer Form, und wandle ihn in Umrisse um.
---

Text verhält sich in Bezzle wie in Adobe XD: Ein Klick macht eine Zeile, die beim Tippen wächst, ein Ziehen macht ein Feld, in dem der Text umbricht. Jeder Text hat im Inspektor eine Karte {Text} für seine Typografie, das Menü {Format} gestaltet einzelne Wörter, und was du beim Tippen siehst, ist genau das, was gezeichnet und exportiert wird.

## Das Textwerkzeug {#text-tool}

Drück {{T}} oder wähl {Text} in der Werkzeugleiste. Der Zeiger wird zum Textcursor.

### Ein Klick: Text mit automatischer Breite {#click}

Klick irgendwohin und fang an zu tippen. Der Text hat {Automatische Breite}: Er wird so breit wie seine Wörter, und seine Zeilen brechen nur dort um, wo du {{Return}} drückst. Wo du klickst, beginnt die Grundlinie der ersten Zeile: an ihrem linken Ende bei linksbündigem Text, in ihrer Mitte bei zentriertem, an ihrem rechten Ende bei rechtsbündigem.

### Ein Ziehen: ein Feld, in dem der Text umbricht {#drag}

Zieh ein Feld auf und tipp hinein. Der Text hat {Automatische Höhe}: Er behält die Breite, die du aufgezogen hast, bricht seine Wörter daran um und wird mit jeder Zeile höher. Ein Feld, das du schmaler als 20 Punkt aufziehst, wird stattdessen zu einem Text mit {Automatische Breite}.

### Das Werkzeug bleibt in der Hand {#tool-stays}

Nach einem Text hast du das Textwerkzeug weiter in der Hand: Klick noch einmal für den nächsten. Drück {{Esc}}, um mit dem Tippen aufzuhören, und noch einmal {{Esc}}, um das Werkzeug wegzulegen.

- **Neuer Text sieht aus wie der ausgewählte.** Ist ein Text ausgewählt, übernimmt der nächste, den du machst, seine Schrift, Größe, Abstände, Ausrichtung und Farbe.
- **Ein Klick auf einen Text tippt in ihn hinein**, mit all seinen Wörtern markiert. Ein Ziehen, ob über einem Text oder nicht, macht immer einen neuen.
- **Die Griffe des ausgewählten Texts** ändern seine Größe weiterhin, auch wenn du das Textwerkzeug in der Hand hast.

Ein neuer Text, ohne ausgewählten Text als Vorbild, ist in SF Pro gesetzt, der eigenen Schrift des Mac, in 24 Punkt, in einem weichen Schwarz (`#1C1B19`), linksbündig.

## Tippen {#typing}

So tippst du in einen Text, der schon da ist:

- Doppelklick darauf.
- Wähl ihn aus und drück {{Return}}.
- Klick mit dem Textwerkzeug darauf.

Zuerst sind alle seine Wörter markiert, sodass das, was du tippst, sie ersetzt; klick oder nimm die Pfeiltasten, um die Einfügemarke dorthin zu setzen, wo du sie haben willst. In einer Gruppe führt der erste Doppelklick in die Gruppe hinein, der nächste beginnt das Tippen.

Um mit dem Tippen aufzuhören, drück {{Esc}} oder klick irgendwo anders auf die Arbeitsfläche. Ein Text, den du leer lässt, wird entfernt (außer in einer Zelle eines Wiederholungsrasters oder in einem Beitrag eines Stapels, wo er die Wörter dieser Zelle oder dieses Beitrags ist).

- **Widerrufen beim Tippen** nimmt dein Tippen Schritt für Schritt zurück. Sobald du aufhörst, ist die ganze Zeit, in der du getippt hast, ein einziger Schritt im Verlauf des Designs, genannt {Tippen}, oder {Text hinzufügen} bei einem neuen Text.
- **Einsetzen** bringt nur die Wörter herein, im Aussehen der Buchstaben um sie herum.
- **Nichts wird hinter deinem Rücken geändert.** Anführungszeichen und Striche bleiben, wie du sie tippst, und Wörter werden nicht automatisch korrigiert oder ersetzt.
- **Die Griffe bleiben.** Der ausgewählte Text behält beim Tippen seine Griffe: Zieh an einem, um die Größe des Felds zu ändern, und das Tippen geht dort weiter, wo es war, mit denselben markierten Buchstaben.
- **Der Text hält still.** Wie auch immer er ausgerichtet ist, die Buchstaben springen beim Tippen nicht herum. Zentrierter Text mit {Automatische Breite} wächst aus seiner Mitte heraus, und rechtsbündiger Text wächst nach links.

In einem Stapel springt {{Tab}} zum selben Text im nächsten Beitrag (siehe [Stapel](/docs/decks.html)).

## Wie Textfelder ihre Größe finden {#sizing}

Jeder Text findet seine Größe auf eine von drei Arten. Die drei Knöpfe auf der Karte {Text} wechseln zwischen ihnen: {Automatische Breite}, {Automatische Höhe} und {Feste Größe}.

### Automatische Breite {#auto-width}

So breit wie seine Wörter, so hoch wie seine Zeilen. Ein solcher Text hat einen einzigen runden Griff, unten: Zieh daran, um die Buchstaben größer oder kleiner zu machen, samt den Abständen zwischen Zeilen und Absätzen. Drehen kannst du ihn knapp außerhalb seiner Ecken oder dieses Griffs.

### Automatische Höhe {#auto-height}

Eine eigene Breite, und so hoch wie seine Zeilen. Zieh an einer Seite, um die Wörter bei einer anderen Breite umzubrechen. Ziehst du oben, unten oder an einer Ecke, wird das Feld zu {Feste Größe}.

### Feste Größe {#fixed-size}

Das Feld hat die Größe, die du ihm gibst, egal wie viel Platz seine Wörter brauchen. Die Griffe ändern nur das Feld, nie die Buchstaben. Seine Zeilen können oben, in der Mitte oder unten darin liegen.

Ist ein Feld mit {Feste Größe} zu klein für seine Wörter, wird der Rest jenseits seines Rands ausgeblendet, und sein unterer Griff wird rot. Ein Doppelklick auf den unteren Griff eines Texts mit eigener Breite passt das Feld wieder an seine Wörter an: Es wird zu {Automatische Höhe}.

### Wechseln und eine Größe eintippen {#switching-sizing}

| | Automatische Breite | Automatische Höhe | Feste Größe |
| --- | --- | --- | --- |
| Beim Tippen | Wird breiter, und mit jeder neuen Zeile höher | Bricht an seiner Breite um, wird höher | Bleibt, wie es ist |
| Ziehen an einem Griff | Die Buchstaben wachsen oder schrumpfen mit dem Feld | Eine Seite bricht um; oben, unten oder eine Ecke machen es zu Feste Größe | Ändert nur das Feld |
| Eintippen in {B} oder {H} auf der Karte {Frame} | Die Buchstaben wachsen oder schrumpfen, nach der Höhe, wenn sie sich geändert hat, sonst nach der Breite | Eine Breite bricht um; eine Höhe macht es zu Feste Größe | Ändert nur das Feld |

Schaltest du einen umbrechenden Text auf {Automatische Breite}, kommt überall dort ein Zeilenumbruch hinein, wo eine Zeile umgebrochen war, sodass er genauso aussieht wie vorher. Wird Text mit {Automatische Breite} zusammen mit anderen Ebenen skaliert, wächst er nach der Höhe.

Wachsen oder schrumpfen die Buchstaben mit dem Feld, bekommt der Text eine eigene Typografie: Hatte er einen benannten Textstil, hat er ihn danach nicht mehr, und der Stil bleibt überall sonst, wie er war.

## Die Karte Text {#text-card}

Zugeklappt zeigt die Karte {Text} Schrift und Größe, etwa {SF Pro · 24 pt}, oder {Mehrere Schriften}, wenn sich die ausgewählten Texte unterscheiden. Zieh seitwärts darüber, um die Größe zu ändern, ab 1 Punkt aufwärts; das Ziehen hält bei 12, 14, 16, 20, 24, 32, 48 und 64 kurz an. Klick darauf, um sie zu öffnen. Änderungen gelten für jeden ausgewählten Text.

::: fields
- **Schrift**: jede Schriftfamilie auf deinem Mac, SF Pro zuerst, jede in ihren eigenen Buchstaben gezeigt, wo sie ihren eigenen Namen schreiben kann. Zeig auf eine, und die Arbeitsfläche probiert sie an (außer solange Buchstaben markiert sind; die zeigen die Schrift, sobald du sie wählst). Wählst du eine andere Familie, bleibt der Schnitt, der deinem bisherigen am nächsten kommt: derselbe Name, wenn es ihn gibt, sonst die nächstliegende Stärke mit derselben Neigung.
- **Schnitt**: die Schnitte der Familie, etwa {Regular}, {Medium Italic} oder {Bold}. SF Pro hat neun Stärken, von {Ultralight} bis {Black}, jede aufrecht und als {Italic}.
- **Größe**: in Punkt, von 1 bis 2.000.
- **Größenvorgaben**: 12, 14, 16, 20, 24, 32, 48 und 64 Punkt.
- **Ausrichtung**: {Links ausrichten}, {Zentrieren}, {Rechts ausrichten} und {Blocksatz}, der jede Zeile außer der letzten eines Absatzes von Rand zu Rand laufen lässt.
- **Unterstreichen** ({{⌘U}}), **Durchstreichen** ({{⇧⌘X}}): eine Linie unter den Buchstaben oder durch sie hindurch.
- **Aufzählung** ({{⇧⌘8}}), **Nummerierte Liste** ({{⇧⌘7}}): siehe [Listen](/docs/text.html#lists).
- **Schreibweise**: {Wie getippt}, {Großbuchstaben}, {Kleinbuchstaben}, {Wortanfänge groß} oder {Kapitälchen}: wie die Buchstaben gesetzt werden, egal wie sie getippt wurden. Kapitälchen nutzt die eigenen Kapitälchen der Schrift, wo sie welche hat, und setzt sonst Kleinbuchstaben als kleinere Großbuchstaben. Beim Tippen siehst du die Buchstaben so, wie du sie getippt hast.
- **Automatische Breite**, **Automatische Höhe**, **Feste Größe**: wie das Feld seine Größe findet (siehe [Wie Textfelder ihre Größe finden](/docs/text.html#sizing)).
- **Zeilen oben**, **Zeilen in der Mitte**, **Zeilen unten**: wo die Zeilen im Feld liegen. Wählst du eine davon, wird das Feld zu {Feste Größe}, denn nur ein solches Feld hat Platz übrig.
- **Zeile**: der Abstand von einer Grundlinie zur nächsten, in Punkt. Bis du einen setzt, zeigt das Feld die eigene Zeilenhöhe der Schrift. Zusätzlicher Raum verteilt sich gleichmäßig über und unter die Buchstaben, sodass sie in der Mitte ihrer Zeilen bleiben.
- **Zeichen**: der Zeichenabstand, in Tausendsteln der Schriftgröße, wie Schriftgestalter ihn zählen: 100 fügt ein Zehntel der Größe zwischen den Buchstaben ein. Von −500 bis 2.000.
- **¶**: der Abstand nach jedem Absatz außer dem letzten, in Punkt.
- **Funktionen**: die OpenType-Funktionen der Schrift (siehe [OpenType-Funktionen](/docs/text.html#features)).
- **Variable Schrift**: bei einer variablen Schrift ihre Achsen (siehe [Variable Schriften](/docs/text.html#variable-fonts)).
:::

Die Felder für Größe und Abstände nehmen auch Rechnungen an, und Änderungen am eigenen Wert jedes Texts wie `+2` oder `×1.5` (siehe [Die Arbeitsfläche](/docs/canvas.html)).

### Buchstaben oder der ganze Text {#letters-or-layer}

Tippst du und sind einige Buchstaben markiert, zeigt die Karte {Ändert die 5 markierten Zeichen}, und was sie an Buchstaben einstellt, gilt nur für diese Buchstaben: Schrift, Schnitt, Größe, Zeichenabstand, Unterstreichen, Durchstreichen und Listen. Der Rest betrifft immer den ganzen Text: Ausrichtung, Schreibweise, Zeilen- und Absatzabstand, Funktionen, die Achsen der variablen Schrift und wie das Feld seine Größe findet.

Steht beim Tippen nur die Einfügemarke, gelten Schrift, Schnitt, Größe und Zeichenabstand für den ganzen Text, während Unterstreichen, Durchstreichen und die Listen für das gelten, was du als Nächstes tippst (eine Liste für den Absatz, in dem die Einfügemarke steht). Ist der Text nur ausgewählt, gilt alles für den ganzen Text.

### Eine Schrift finden {#font-menu}

Das Schriftmenü öffnet sich bei der Schrift, die du hast. Fang an zu tippen, um es einzugrenzen: Schriften, deren Namen mit dem Getippten beginnen, kommen zuerst, dann die mit einem Wort, das so beginnt (`new` findet Times New Roman), dann alle anderen, die es enthalten. Groß- und Kleinschreibung, Akzente und Leerzeichen zählen nicht, also geht auch `timesnew`. Der beste Treffer ist hervorgehoben: {{Return}} nimmt ihn, die Pfeiltasten gehen durch die übrigen, und die Arbeitsfläche probiert jeden an, sobald er hervorgehoben ist. {{⌫}} nimmt einen Buchstaben zurück, {{⌥⌫}} alle, {{⌘V}} setzt einen Namen ein, und {{Esc}} löscht das Getippte, bevor es das Menü schließt.

Ein Text, dessen Schrift auf diesem Mac fehlt, wird in SF Pro gezeichnet.

### OpenType-Funktionen {#features}

Das Menü {Funktionen} listet, was die Schrift anbietet, und sonst nichts: {Ligaturen}, {Seltene Ligaturen}, {Kontextbedingte Varianten}, {Mediävalziffern}, {Versalziffern}, {Tabellenziffern}, {Proportionalziffern}, {Durchgestrichene Null}, {Brüche}, {Hochgestellt}, {Tiefgestellt}, {Ordinalzahlen}, {Versalformen}, {Stilistische Varianten}, {Zierbuchstaben} und {Titelformen}, danach die Stilsätze und Zeichenvarianten der Schrift unter den Namen, die sie selbst dafür hat. Ein Häkchen zeigt, was eingeschaltet ist; zeig auf einen Eintrag, um den Text mit der umgekehrten Einstellung zu sehen, und klick, um sie zu behalten.

{Ligaturen} und {Kontextbedingte Varianten} sind eingeschaltet, bis du sie ausschaltest, so wie Schriften sie gedacht haben. Der Titel des Menüs zählt die Funktionen, die du anders eingestellt hast als die Schrift, etwa {2 Funktionen}. Bei einer Schrift ohne solche Funktionen steht dort {Keine Funktionen}.

### Variable Schriften {#variable-fonts}

Bei einer variablen Schrift wie SF Pro endet die Karte mit einer Zeile {Variable Schrift}, die ihre Achsen nennt, etwa Stärke und Breite. Sie bleibt zugeklappt, bis du darauf klickst oder bis eine Achse eingestellt ist. Geöffnet hat jede Achse ein Feld, zwischen dem Kleinsten und dem Größten, was die Schrift erlaubt.

## Formatierter Text und das Menü Format {#format}

Beliebige Buchstaben eines Texts können anders aussehen als der Rest: ein Wort fett, ein anderes in einer anderen Farbe, eines größer. Markiere sie beim Tippen und nimm dann das Menü {Format}, die Tasten oder die Karte {Text}.

| Befehl | Tasten | Was er tut |
| --- | --- | --- |
| {Format › Kräftig} | {{⌘B}} | Der fette Schnitt der Familie, oder zurück zu normal |
| {Format › Kursiv} | {{⌘I}} | Der kursive Schnitt der Familie in derselben Stärke, oder wieder aufrecht |
| {Format › Unterstreichen} | {{⌘U}} | Eine Linie unter den Buchstaben |
| {Format › Durchstreichen} | {{⇧⌘X}} | Eine Linie durch die Buchstaben |
| {Format › Größer} | {{⇧⌘.}} | Einen Punkt größer |
| {Format › Kleiner} | {{⇧⌘,}} | Einen Punkt kleiner |
| {Format › Aufzählung} | {{⇧⌘8}} | Macht die Absätze zu einer Aufzählung, oder beendet sie |
| {Format › Nummerierte Liste} | {{⇧⌘7}} | Macht die Absätze zu einer nummerierten Liste, oder beendet sie |

Was die Befehle ändern:

- **Markierte Buchstaben** beim Tippen: diese Buchstaben.
- **Nur die Einfügemarke**: die Buchstaben, die du als Nächstes tippst.
- **Ein ausgewählter Text**, in den du nicht tippst: jeden seiner Buchstaben, und die jedes anderen ausgewählten Texts.

Jeder Befehl schaltet sein Aussehen ein, außer alle Buchstaben haben es schon, dann schaltet er es aus. Kräftig und Kursiv wechseln zu einem anderen Schnitt derselben Familie und funktionieren also, wenn die Familie einen solchen hat: Kräftig nimmt den Schnitt, der einer fetten Stärke am nächsten kommt, und das Ausschalten geht zu dem Schnitt, der der normalen am nächsten kommt. Größer und Kleiner ändern jeden Buchstaben um einen Punkt, sodass Buchstaben mit eigener Größe um so viel größer oder kleiner als der Rest bleiben; kein Buchstabe wird kleiner als 1 Punkt.

**Farbe.** Die Farbe eines Texts steht auf seiner Karte {Füllung}. Sind beim Tippen Buchstaben markiert, setzt die Karte eine Farbe nur für diese Buchstaben. Die eigene Füllung eines Texts kann auch ein Verlauf oder ein Bild sein, das durch seine Buchstaben scheint, während sie Wörter bleiben, in die du tippen kannst: Öffne die Karte {Füllung} und wähl es dort, oder zieh ein Bild aus dem Finder auf den Text. Färbst du den Text über das Füllungsmenü neu, verlieren die Buchstaben ihre eigenen Farben, sodass alles die neue Füllung zeigt; Buchstaben, die du danach färbst, behalten ihre Farbe darüber. Siehe [Farbe, Rahmen und Effekte](/docs/looks.html).

## Listen {#lists}

{Format › Aufzählung} ({{⇧⌘8}}) und {Format › Nummerierte Liste} ({{⇧⌘7}}), oder die beiden Listenknöpfe auf der Karte {Text}, machen Absätze zu Einträgen einer Liste. Eine Liste besteht immer aus ganzen Absätzen: denen, die deine Auswahl berührt, oder dem, in dem die Einfügemarke steht.

- Einträge einer Aufzählung beginnen mit •, nummerierte mit 1., 2., 3. und so weiter, durchgezählt über die nummerierten Einträge, die aufeinander folgen.
- Jeder Eintrag einer Liste beginnt seine Wörter an derselben Stelle, sodass sie untereinander stehen, wie groß die Listenzeichen auch sind; die Listenzeichen übernehmen die Schrift ihres Eintrags.
- Drück am Ende eines Eintrags {{Return}} für den nächsten. Sein Listenzeichen erscheint sofort, auf der leeren Zeile.
- Drück {{Return}} in einem leeren Eintrag oder {{⌫}} am Anfang eines Eintrags, um die Liste dort zu beenden.
- Wähl dieselbe Liste noch einmal, um die Absätze wieder herauszunehmen.

## Textstile {#text-styles}

Eine Typografie kann einen Namen bekommen, sodass viele Texte sie teilen und eine Änderung daran alle ändert. Die geöffnete Karte {Text} beginnt mit den Textstilen des Designs, jeder in seiner eigenen Typografie geschrieben, und einem gestrichelten Chip {+ Stil}:

- **Klick auf einen Stil**, um ihn den ausgewählten Texten zu geben. Zeig zuerst darauf, um ihn auf der Arbeitsfläche auszuprobieren.
- **{+ Stil}** benennt die Typografie, die der ausgewählte Text hat. Bezzle schlägt einen Namen nach der Größe vor: {Display} ab 48 Punkt, {Titel} ab 32, {Überschrift} ab 24, {Zwischentitel} ab 19, {Fließtext} ab 15, {Klein} ab 12 und {Bildunterschrift} darunter. Drück {{Return}}, um ihn zu behalten, oder tipp deinen eigenen.
- **Doppelklick auf den verwendeten Stil**, um ihn umzubenennen; sein {×} behält das Aussehen ohne den Namen.
- Bei mehr als sechs Stilen erscheinen die ersten fünf, und ein Chip sagt, wie viele es noch sind; klick darauf, um alle zu sehen, und auf {Weniger}, um sie wieder einzuklappen.

Ein Textstil umfasst Schrift, Schnitt, Größe, Zeilenabstand, Zeichenabstand, Schreibweise, Absatzabstand, Unterstreichen, Durchstreichen, Funktionen und die Achsen einer variablen Schrift. Ausrichtung, die Art, wie das Feld seine Größe findet, und die Farbe bleiben Sache jedes einzelnen Texts (Farben können eigene Namen haben). Eine zugeklappte Karte {Text} nennt den Namen des verwendeten Stils. Solange Buchstaben markiert sind, werden keine Stile angeboten. Mehr zu Stilen unter [Komponenten, Stile und Bibliotheken](/docs/components.html).

## Text entlang einer Kurve {#curves}

Wörter können auf einem eigenen Bogen laufen oder dem Umriss einer Form folgen und bleiben dabei Wörter, in die du tippen kannst. Auf einer Kurve ist ein Text immer eine einzige Zeile: Zeilenumbrüche darin werden zu Leerzeichen.

### Text zu einem Bogen biegen {#bending}

Wähl einen Text mit dem Werkzeug {Auswahl} aus und zeig in seine Nähe: Eine Linie läuft an seiner Grundlinie entlang und über seine Enden hinaus bis zu je einer Perle. Zieh eine Perle um die Mitte der Wörter herum:

- Schwenk sie nach unten, um die Wörter zu wölben, und genau unter die Mitte, um sie zu einem Ring zu schließen.
- Schwenk sie nach oben, damit die Wörter durchhängen.
- Die Biegung hält bei gerade, beim Halbkreis und beim Ring kurz an, mit einem spürbaren Klick des Trackpads. Halte {{⌘}} beim Ziehen, um frei darüber hinwegzugehen.

Die Mitte der Wörter bleibt, wo sie ist, und der Winkel wird beim Ziehen angezeigt. {{Esc}} während des Ziehens setzt alles zurück. Die Perlen erscheinen, solange der Text auf dem Bildschirm mindestens 14 Punkt breit ist und weder gesperrt noch in die Tiefe gedreht ist oder auf einer Form läuft.

Einen geraden Text kannst du auch mit der gestrichelten Karte {Biegung} unten im Inspektor biegen; sie gibt ihm einen {Bogen}.

### Die Karte Biegung {#curve-card}

Ein gebogener Text hat eine Karte {Biegung}. Zugeklappt zeigt sie, wie weit die Wörter um einen Kreis herumgehen, etwa {90°}, oder {Ring}. Zieh seitwärts darüber, um sie von ganz durchhängend über gerade bis zum Ring zu biegen; das Ziehen hält in beiden Richtungen beim Halb- und beim Vollkreis und bei gerade kurz an.

::: fields
- **Vorgaben**: {Mulde}, die um einen Viertelkreis durchhängt, {Bogen}, ein Viertelkreis nach oben, {Halbkreis} und {Ring}.
- **Grad**: wie weit die Wörter um einen Kreis herumgehen, von −360° (durchhängend) bis 360°.
- **×**: {Begradigen}, die Wörter wieder gerade. Dasselbe tut ein Ziehen der zugeklappten Karte über ihr linkes Ende hinaus, oder {Objekt › Text begradigen}.
:::

Der Bogen ist immer so lang wie die Wörter: Tippst du mehr, wächst er und behält bei, wie weit die Wörter um den Kreis herumgehen.

### Text auf eine Form legen {#on-path}

Ein Text kann auf dem Umriss eines Rechtecks, einer Ellipse, eines Pfads oder einer Linie laufen und ihm folgen, wohin die Form auch verschoben, gedreht oder umgeformt wird. Dafür gibt es zwei Wege:

- **Mit dem Menü.** Wähl den Text und die Form aus und wähl {Objekt › Text auf Pfad legen}, das auch im Kontextmenü steht. Die Wörter kommen dorthin, wo sie dem Umriss am nächsten liegen, auf die Seite, auf der sie sind, aufrecht lesbar.
- **Von Hand.** Zieh den Text auf die Kante der Form und halte ihn dort einen Moment, ohne loszulassen. Eine Linie läuft so weit an der Kante entlang, wie die Wörter reichen werden, der Umriss leuchtet auf, und die Wörter springen Buchstabe für Buchstabe darauf. Hältst du weiter gedrückt, schiebst du sie entlang: Sie folgen dem Zeiger, bleiben auf der Seite der Kante, auf der der Zeiger ist, und drehen sich so, dass sie überall aufrecht lesbar sind. Lass los, um sie dort zu behalten, oder zieh sie weit genug weg, dann lösen sie sich wieder, gerade.

Der Text und die Form kommen in eine eigene Gruppe namens *Text auf Pfad 1*, *Text auf Pfad 2* und so weiter, mit der Form zuerst, sodass alles, was über der Form lag, weiterhin darüber liegt. Weitere Texte können auf derselben Form laufen.

Eine Form kann keinen Text tragen, wenn sie gesperrt ist, in die Tiefe gedreht ist, in einem Wiederholungsraster liegt oder die Form ist, auf die eine Maske ihre Ebenen zuschneidet. Der Text darf weder gesperrt sein noch in einem Wiederholungsraster liegen.

### Entlang gleiten und lösen {#sliding}

Ziehst du einen Text, der auf einer Form läuft, gleitet er dem Zeiger nach am Umriss entlang, gehalten an der Stelle, an der du ihn gegriffen hast. Zieh ihn weit genug vom Umriss weg, etwa zweieinhalbmal seine Schriftgröße, dann löst er sich, gerade und aufrecht lesbar, und das Ziehen bewegt ihn weiter.

Auf einem offenen Umriss werden die Wörter an ihrem Anfang, ihrer Mitte oder ihrem Ende gehalten, je nachdem, wie der Text ausgerichtet ist; auf einem geschlossenen Umriss und auf einem Bogen an ihrer Mitte. Tippst du mehr, wachsen sie von dort aus.

### Die Karte Auf Pfad {#on-path-card}

Ein Text auf einer Form hat anstelle von {Biegung} eine Karte {Auf Pfad}. Zugeklappt nennt sie die Form.

::: fields
- **Seitwärts ziehen** über die zugeklappte Karte: schiebt die Wörter am Umriss entlang, von seinem Anfang bis zu seinem Ende, mit kurzem Halt bei jedem Viertel.
- **Auf die andere Seite**: Der Knopf in der zugeklappten Zeile bringt die Wörter auf die andere Seite des Umrisses, weiterhin aufrecht lesbar.
- **×**: {Vom Pfad lösen}. Dasselbe tun ein Ziehen der Karte über ihr linkes Ende hinaus, {Objekt › Text begradigen} oder {Text vom Pfad lösen} im Kontextmenü. Der Text kommt direkt über die Gruppe, wieder gerade; eine Gruppe, in der nur ihre Form übrig bleibt, wird wieder zu dieser Form.
:::

Wird die Form gelöscht, behält der Text die Kurve, die er hatte.

### Gebogenen Text tippen und skalieren {#curved-typing}

In einen gebogenen Text tippst du wie in jeden anderen. Beim Tippen liegen seine Wörter gerade, in der Richtung, die die Kurve an der Stelle hat, von der aus sie platziert werden; hörst du auf, springt jeder Buchstabe zurück an seinen Platz auf der Kurve. Genauso springen Buchstaben an ihre neuen Plätze, wann immer sie sich anders als mit dem ganzen Text bewegen: wenn er gebogen, auf eine Form gelegt, davon gelöst oder widerrufen wird.

Jeder Griff eines gebogenen Texts vergrößert oder verkleinert seine Buchstaben, so wie der eine Griff eines Texts mit {Automatische Breite}.

## Text als Umrisse {#outlines}

{Objekt › In Pfad umwandeln} ({{⌘8}}), auch im Kontextmenü, macht aus den ausgewählten Texten die Umrisse ihrer Buchstaben, die genau so aussehen wie vorher. Dann kannst du sie Punkt für Punkt bearbeiten, mit Formen kombinieren oder mit dem Messer zerschneiden (siehe [Formen, Pfade und der Zeichenstift](/docs/shapes.html)).

- Ein einfarbiger Text wird zu einem Pfad, gefüllt wie der Text: Ein Verlauf oder ein Bild liegt, wo es lag.
- Ein Text, dessen Buchstaben eigene Farben haben, wird zu einer Gruppe mit einem Pfad pro Farbe, der Pfad in der Farbe des Texts selbst ganz hinten, jeder nach seinen Wörtern benannt.
- Alles, was der Text zeichnet, kommt mit: Unterstreichungen, Durchstreichungen und Listenzeichen. Text auf einer Kurve wird so in Umrisse gewandelt, wie er verläuft.
- Das Ergebnis behält Namen, Platz und Drehung des Texts, seine Deckkraft, Füllmethode, Schatten und Unschärfe. Die Ausbreitung eines Schattens und eine Unschärfe dessen, was dahinter liegt, die ein Text nie zeigt, fallen weg.
- Ein Text, der die Form einer Maske ist, wird zu einem einzigen Pfad, welche Farben seine Buchstaben auch haben.

Manche Texte können keine Umrisse werden: gesperrte, solche aus lauter Leerzeichen und solche in einer Zelle eines Wiederholungsrasters, in einer Kopie einer Komponente oder in einem Stapel, denn ihre Wörter gehören zu den anderen Zellen, Kopien oder Beiträgen. Buchstaben, die Bilder sind, wie Emoji, haben keine Umrisse: Bezzle gibt einen Warnton aus, und ein Text mit ihnen bleibt Text. Um zurückzugehen, widerrufe den Schritt.

## Rechtschreibung {#spelling}

### Beim Tippen {#spelling-typing}

Falsch geschriebene Wörter werden beim Tippen unterstrichen. Klick mit der rechten Maustaste auf eines, um die Schreibweisen zu sehen, die der Mac dafür vorschlägt. Schalte die Prüfung unter {Bearbeiten › Rechtschreibung und Grammatik › Rechtschreibung während der Eingabe prüfen} aus oder ein, und nimm die Grammatik mit {Grammatik mit Rechtschreibung prüfen} dazu. Bezzle merkt sich beides, für allen Text; zu Beginn ist die Rechtschreibprüfung eingeschaltet und die Grammatik aus.

### Ein ganzes Design prüfen {#spelling-design}

{Bearbeiten › Rechtschreibung und Grammatik › Rechtschreibung prüfen …} ({{⌘;}}) öffnet die Suchleiste über der Arbeitsfläche, auf Rechtschreibung gestellt. Sie geht die falsch geschriebenen Wörter des Designs in Leserichtung durch, Zeichenfläche für Zeichenfläche und auf jeder von oben nach unten: Jedes falsch geschriebene Wort wird auf der Arbeitsfläche mit einer Wellenlinie markiert, und das gerade gewählte wird gezeigt, sein Text ausgewählt.

::: fields
- **Das Wort**: das gewählte falsch geschriebene Wort, in Rot.
- **Richtig geschrieben**: die wahrscheinlichste Schreibweise, bereit zum Übernehmen; tipp eine andere, wenn du willst.
- **Vorschläge**: jede Schreibweise, die der Mac anbietet. Wählst du eine davon, wird sie sofort eingesetzt.
- **Ändern**: setzt {Richtig geschrieben} anstelle des Worts ein und geht zum nächsten. {{Return}} im Feld tut dasselbe.
- **Ignorieren**: lässt das Wort, wie es ist, überall im Design, solange es offen ist.
- **Lernen**: fügt das Wort dem Wörterbuch des Mac hinzu.
- **Zurück**, **Weiter**: die beiden Pfeile, um ohne Änderung zurück- oder weiterzugehen.
- **Schließen**: das ×, oder {{Esc}}.
:::

Die Leiste zählt mit, etwa {3 von 7}, und zeigt {Keine Fehler}, wenn es keine gibt. Jeder Text wird in der Sprache geprüft, in der er geschrieben ist. Geprüft werden nur Wörter, die zu sehen sind: Ausgeblendete Ebenen werden übersprungen, und in einem Stapel wird jeder Beitrag geprüft. Jede Änderung ist ein Schritt zum Widerrufen ({Rechtschreibung korrigieren}).

Die Symbole links in der Leiste wechseln zwischen Rechtschreibung und {Wörter suchen und ersetzen} ({{⌘F}}), womit du Wörter im ganzen Design suchst und ersetzt (siehe [Die Arbeitsfläche](/docs/canvas.html)). Sind beim Tippen Buchstaben markiert, sucht {{⌘F}} nach ihnen.

## Die Karten eines Texts {#cards}

Ein ausgewählter Text hat {Frame}, dann {Text}, dann {Biegung} oder {Auf Pfad}, wenn er entlang einer Kurve läuft, {Deckkraft} und {Füllung} für die Farbe seiner Buchstaben, die ein Text immer hat. Schatten, Unschärfe, 3D und Export folgen, wenn er sie hat. Texte haben keine Rahmen. Von den gestrichelten Karten unten kommt {Biegung} zuerst, um den Text zu biegen, dann {Schatten}, {Unschärfe}, {3D} und der Rest. Siehe [Farbe, Rahmen und Effekte](/docs/looks.html).

Einen Text allein zu spiegeln bewirkt nichts, da Wörter sich immer vorwärts lesen; mit anderen Ebenen gespiegelt, rückt er an seinen gespiegelten Platz.

## Tastaturkürzel {#shortcuts}

| Tasten | Was sie tun |
| --- | --- |
| {{T}} | Textwerkzeug |
| {{Return}} | In den ausgewählten Text tippen |
| {{Esc}} | Tippen beenden; noch einmal: das Textwerkzeug weglegen |
| {{⌘B}}, {{⌘I}}, {{⌘U}} | Kräftig, Kursiv, Unterstreichen |
| {{⇧⌘X}} | Durchstreichen |
| {{⇧⌘.}}, {{⇧⌘,}} | Größer, Kleiner |
| {{⇧⌘8}}, {{⇧⌘7}} | Aufzählung, Nummerierte Liste |
| {{⌘8}} | In Pfad umwandeln (Text als Umrisse) |
| {{⌘;}} | Rechtschreibung prüfen … |
| {{⌘F}} | Suchen … |

Jedes Tastaturkürzel von Bezzle steht unter [Tastaturkürzel](/docs/shortcuts.html).
