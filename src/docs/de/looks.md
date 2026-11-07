---
title: Farbe, Rahmen und Effekte
nav: Farbe und Effekte
lede: Füll Ebenen mit Farben, Verläufen und Bildern, gib ihnen Rahmen, Schatten, Unschärfe und Tiefe, und stell jedes davon genau ein, auf seiner Karte oder direkt auf der Arbeitsfläche.
---

Wie eine ausgewählte Ebene aussieht, steht auf Karten im Inspektor, eine Karte für jede Eigenschaft, die sie hat: {Deckkraft}, {Füllung}, {Rahmen}, {Schatten}, {Unschärfe} und {3D}, dazu {Ecken} bei einem Rechteck und {Foto} bei einem Bild. Was sie noch nicht hat, wartet darunter als gestrichelte Chips. Diese Seite geht jede dieser Karten durch, das Füllungsmenü mit seinen Verläufen und die Griffe und Knäufe, die sie auf die Arbeitsfläche legen.

## Wie die Look-Karten funktionieren {#look-cards}

Zugeklappt ist eine Karte eine einzige Zeile: ein kleines, lebendiges Bild dessen, was sie enthält, ihr Name und was dabei herauskommt, etwa `#D1CFC9 · 50%` bei einer Füllung oder {Weich} bei einem Schatten. Alles auf einer Karte erreichst du auf mehreren Wegen, vom schnellen Ziehen bis zu genauen Zahlen.

- **Klick auf die Zeile**, um die Karte zu öffnen, und noch einmal, um sie zuzuklappen. Öffnest du eine Karte, klappt die zu, die offen war.
- **Zieh seitwärts über die Zeile**, um einzustellen, wovon die Karte am meisten hat: wie viel von einer Füllung zu sehen ist, wie kräftig ein Rahmen ist, wie hoch ein Schatten die Ebene anhebt, wie stark eine Unschärfe ist, wie weit eine Ebene in die Tiefe gekippt ist. Die Breite der Karte ist der ganze Bereich. Die Zeile füllt sich von links, so weit der Wert reicht, der Zeiger zeigt, dass sich ziehen lässt, und das Ziehen hält auf dem Weg bei jeder Vorgabe kurz an, mit einem spürbaren Klick des Trackpads und einer höheren Kerbe am Fuß der Karte. Über beide Enden hinaus gibt die Karte ein wenig nach.
- **Zieh über null hinaus**, um die Eigenschaft zu entfernen, bei Karten, die sie verlieren können. Zieh weiter nach links über den Anfang des Bereichs hinaus, und die Karte kippt und zeigt {Loslassen zum Entfernen}; lass los, und sie ist in einem Schritt weg. Zieh zurück, bevor du loslässt, um sie zu behalten.
- **Das ×** auf einer geöffneten Karte entfernt, was sie zeigt, und **das +** daneben legt eine weitere Eigenschaft derselben Art obendrauf: eine weitere Füllung, einen weiteren Rahmen oder Schatten. Zeigst du auf das +, siehst du auf der Arbeitsfläche, was es hinzufügen würde.
- **Vorgaben** liegen in einer Leiste kleiner Bilder, jedes mit seinem Namen, wenn du darauf zeigst. Zeigst du auf eines, siehst du es sofort auf der Arbeitsfläche, ein Klick übernimmt es, und das verwendete ist hervorgehoben.
- **Die genauen Zahlen** kommen zuletzt, in Feldern, die wie alle Zahlenfelder von Bezzle funktionieren: Zieh über sie, stell sie mit den Pfeiltasten schrittweise ein, oder tipp Rechnungen und Änderungen wie `+2` (siehe [Zahlenfelder](/docs/canvas.html)).

Die gestrichelten Chips unter den Karten ({Füllung}, {Rahmen}, {Schatten}, {Innenschatten}, {Unschärfe}, {3D} und weitere wie {Exportieren}) bieten an, was die Auswahl haben könnte. Zeigst du auf einen Chip, siehst du ihn auf der Arbeitsfläche; ein Klick fügt ihn hinzu, schon auf etwas eingestellt, das gut aussieht, und öffnet seine Karte. Zeigst du auf irgendeine Karte, umreißt die Arbeitsfläche den Teil der Ebene, den sie ändert: die Füllung, die Kante, wohin der Schatten fällt, den unscharfen Bereich.

Sind mehrere Ebenen ausgewählt, zeigt eine Karte, was sie gemeinsam haben, und {Mehrere}, wo sie sich unterscheiden. Eine Änderung gilt für alle; eine eingetippte Änderung wie `+2` ändert jede Ebene ausgehend von ihrem eigenen Wert. Jedes Ziehen, ob auf einer Karte oder auf der Arbeitsfläche, ist ein Schritt unter {Bearbeiten › Widerrufen}, benannt nach dem, was es getan hat, etwa „Schatten ändern“ oder „Verlauf formen“.

### Füllungen, Rahmen und Schatten übereinander {#piles}

Eine Ebene kann mehrere Füllungen, Rahmen und Schatten haben. Jede hat eine eigene Karte, und die Karten einer Art liegen dicht aufeinander, die oberste zuerst. Zieh eine dieser Karten nach oben oder unten, um sie aufzunehmen und an einen anderen Platz zu legen; die anderen rücken beiseite, um Platz zu machen, und beim Loslassen werden sie in einem Schritt neu geordnet (Füllungen umordnen, Rahmen umordnen, Schatten umordnen). Ein Bild bleibt immer die unterste Füllung, sodass nichts darunter geschoben werden kann.

### Welche Ebenen welche Karten haben {#which-cards}

| Ebene | Füllung | Rahmen | Schatten darunter | Schatten innen | Ausbreitung | Unschärfe dahinter |
|---|---|---|---|---|---|---|
| Rechteck, Ellipse, Pfad | Beliebig viele | Beliebig viele | Ja | Ja | Ja | Ja |
| Text | Eine, für seine Buchstaben | Nein | Ja | Ja | Nein | Nein |
| Linie | Nein | Ihre Striche, auf Karten {Linie} | Ja | Nein | Ja | Nein |
| Gruppe | Nein | Nein | Ja | Ja | Nein | Nein |
| Zeichenfläche | Ihr {Hintergrund} | Nein | Nein | Nein | Nein | Nein |

{Deckkraft}, eine Unschärfe der Ebene selbst und {3D} gibt es für jede Ebene außer einer Zeichenfläche, die ja die Seite selbst ist.

## Farben {#colors}

### Das Farbfeld {#color-field}

Wo immer Bezzle nach einer Farbe fragt, zeigt es dieselbe Zeile:

::: fields
- **Das Farbmuster**: die Farbe über einem Schachbrett, damit du siehst, wie durchscheinend sie ist. Klick darauf, um den Farbwähler zu öffnen; bei einer Füllung oder einem Rahmen öffnet es stattdessen das [Füllungsmenü](#fill-menu). Ein Farbmuster, das von Ecke zu Ecke grau schattiert ist, bedeutet, dass sich die ausgewählten Ebenen unterscheiden.
- **Das Hex-Feld**: die Farbe als sechs Hex-Ziffern nach dem `#`. Tipp sechs, oder drei, die für sechs stehen (`F60` ist `FF6600`), mit oder ohne `#`, und drück {{Return}} oder klick woandershin. Die Transparenz bleibt, wie sie war. Solange sich die Ebenen unterscheiden, zeigt das Feld einen Strich.
- **Der Prozentwert**: steht neben dem Hex-Wert, wenn die Farbe weniger als 100 % deckt.
- **Die Farben des Designs**: auf den Karten {Füllung} und {Rahmen} bis zu vier der Farben, die das Design schon verwendet, als Punkte am Ende der Zeile, ohne die Farbe, die die Ebene gerade hat. Zeig auf einen Punkt, um die Farbe auf der Arbeitsfläche zu sehen, und klick, um sie zu verwenden; die Transparenz, die du hattest, bleibt.
:::

### Der Farbwähler {#color-picker}

::: fields
- **Das Quadrat**: Sättigung von links nach rechts, Helligkeit von oben nach unten. Zieh irgendwo darin.
- **Die Farbtonleiste**: die Farbe rund um den Farbkreis. Ein Grau hat keinen eigenen Farbton, darum bleibt die Leiste, wo sie war, wenn du eines wählst.
- **Die Transparenzleiste**: von durchsichtig bis deckend, über einem Schachbrett, in ganzen Prozent.
- **Das Hex-Feld** und **der Prozentwert** darunter.
- **Die Pipette**: {Farbe vom Bildschirm aufnehmen} nimmt jede Farbe irgendwo auf deinem Bildschirm auf, in jeder App. Die Transparenz, die du hattest, bleibt.
- **In diesem Design**: bis zu 18 der Farben, die das Design verwendet, die meistverwendeten zuerst. Klick auf eine, um sie zu verwenden.
:::

Ein Ziehen im Farbwähler ist ein einziger Schritt zum Widerrufen, wie lange es auch dauert. Die Farben, die ein Design verwendet, hier und neben den Farbfeldern, sind die Füllungs- und Rahmenfarben all seiner Ebenen, ohne ihre Transparenz, gezählt über alle Zeichenflächen; Hintergründe von Zeichenflächen und Schatten zählen nicht.

## Füllungen {#fills}

### Die Karte Füllung {#fill-card}

Eine Füllung malt das Innere einer Form aus, oder die Buchstaben eines Texts. Zugeklappt sagt die Karte, was sie ist: Hex-Wert und Transparenz einer Farbe, {Linear} oder {Radial} bei einem Verlauf, {Bild} bei einem Bild, und die Füllmethode, wenn es eine gibt.

::: fields
- **Das Ziehen**: bei einer Farbe, wie viel davon zu sehen ist, von 0 bis 100 %, mit Halt bei 100 %. Über null hinaus verschwindet die Füllung.
- **Die Farbe oder die Füllung**: das [Farbfeld](#color-field) bei einer Farbe. Bei einem Verlauf oder einem Bild ein Farbmuster und sein Name ({Linearer Verlauf}, {Radialer Verlauf}, {Bild}); klick auf eines davon, um das [Füllungsmenü](#fill-menu) zu öffnen.
- **Ganzes Bild**, **Nur Motiv**: bei einer Füllung, die ein Bild ist, ob es ganz zu sehen ist oder ohne seinen Hintergrund (siehe [Hintergrund entfernen](/docs/pictures.html#remove-background)).
- **Füllmethode**: bei der ersten Füllung einer Form, wie sich die Ebene mit dem mischt, was darunter liegt (siehe [Füllmethoden](#blend)).
:::

Neue Rechtecke, Ellipsen und Pfade sind mit einem warmen, hellen Grau gefüllt, `#D1CFC9`; neuer Text ist `#1C1B19`; eine neue Zeichenfläche ist weiß.

Das × oder ein Ziehen über null hinaus entfernt eine Füllung. Ist es die einzige, wird sie nur ausgeschaltet: Der gestrichelte Chip {Füllung} bringt sie mit der Farbe zurück, die sie hatte. Entfernst du die letzte Füllung, verschwindet auch die Füllmethode, die zu ihr gehört.

### Mehr als eine Füllung {#more-fills}

Das + auf einer geöffneten Karte Füllung legt eine weitere Füllung über die anderen: einen Verlauf von nichts oben bis zu Schwarz mit 50 % unten, wie ihn Wörter über einem Foto brauchen, auf allem gut zu sehen und bereit, zu dem gemacht zu werden, was du brauchst. Füllungen werden übereinander gemalt, die erste zuunterst, jede innerhalb des Umrisses der Ebene. Nur die erste Füllung kann ein Bild sein, und über einem Bild, dessen Hintergrund entfernt wurde, färben die Füllungen darüber nur das Motiv.

### Füllungen von Texten und Zeichenflächen {#text-and-artboard-fills}

Ein Text hat eine einzige Füllung, für seine Buchstaben: eine Farbe, einen Verlauf oder ein Bild, über das ganze Textfeld gelegt. Sie lässt sich nicht entfernen, und ein Text hat weder Füllmethode noch zweite Füllung. Buchstaben, die du beim Tippen markierst, bekommen eine eigene Farbe; färbst du den ganzen Text neu, verlieren sie diese Farben, sodass alles die neue Füllung zeigt (siehe [Text](/docs/text.html)).

Die Füllung einer Zeichenfläche ist ihre Karte {Hintergrund}: eine Farbe, ein Verlauf oder ein Bild, ohne Ziehen und ohne Füllmethode. Eine Zeichenfläche, deren Hintergrund ein Bild ist, bekommt zusätzlich eine [Karte Foto](/docs/pictures.html#photo-card).

## Das Füllungsmenü {#fill-menu}

Das Füllungsmenü hängt am Farbmuster einer Füllung oder eines Rahmens. Oben wählst du, womit gemalt wird:

- **Vollton**: eine Farbe, gewählt wie jede Farbe.
- **Linear**: Farben, die entlang einer Linie ineinander übergehen.
- **Radial**: Farben, die sich von einem Punkt aus ausbreiten.
- **Bild**: angeboten für die erste Füllung einer Ebene und für jeden Rahmen, und immer, solange ein Bild da ist.

Ein neuer Verlauf geht von der Farbe aus, die da war: von ihr zu einer Abstufung davon, dunkler, wenn die Farbe hell ist, und heller, wenn sie dunkel ist, gerade von oben nach unten über die Ebene. Auf einer Linie läuft er von einem Ende der Linie zum anderen, beginnend dort, wo die Linie beginnt. Ein radialer Verlauf beginnt in der Mitte der Ebene und reicht bis zu ihren Seiten: ein Kreis in einer quadratischen Ebene, eine breite Ellipse in einer breiten. Beim Wechsel zwischen {Linear} und {Radial} bleiben die Farben, und zurück zu {Vollton} bleibt die erste davon.

{Bild} fragt nach einer Bilddatei; brichst du ab, bleibt die Füllung, wie sie war. Solange ein Bild die Ebene füllt, sagt das Menü das und bietet {Anderes Bild wählen …} an; wählst du {Vollton}, {Linear} oder {Radial}, wird die Ebene stattdessen damit gemalt. Du kannst auch eine Bilddatei aus dem Finder auf das Farbmuster einer Füllung oder eines Rahmens ziehen: Das Farbmuster wird umrandet, und beim Loslassen wird mit diesem Bild gemalt. Mehr über Bilder steht unter [Bilder und Fotos](/docs/pictures.html).

### Die Verlaufsleiste {#gradient-bar}

Bei einem Verlauf legt das Menü seine Farben auf eine Leiste, jede Farbe ein kleines Farbmuster darauf, mit dem Farbwähler unter der Leiste für die gewählte.

::: fields
- **Eine Farbe wählen**: Klick auf ihr Farbmuster auf der Leiste. Es bekommt einen Ring, und der Farbwähler darunter ändert es.
- **Eine Farbe verschieben**: Zieh ihr Farbmuster an der Leiste entlang. Es darf an den anderen vorbei; es bleibt das gewählte.
- **Eine Farbe hinzufügen**: Klick auf die Leiste, wo du sie haben willst. Sie kommt in der Farbe, die der Verlauf dort schon hat, sodass sich nichts ändert, bis du eine andere wählst.
- **Eine Farbe entfernen**: Zieh ihr Farbmuster nach oben oder unten von der Leiste weg und lass los, oder drück {{⌫}}. Ein Verlauf behält mindestens zwei Farben; sind nur noch zwei übrig, gibt der Mac einen Warnton aus.
:::

Solange das Füllungsmenü auf einem Verlauf offen ist, entfernt {{⌫}} die gewählte Farbe, nie die Ebene, sodass ein Ausrutscher nicht löschen kann, woran du arbeitest. Jede Farbe kann durchscheinend sein, mit der Transparenzleiste des Farbwählers.

### Verlaufsgriffe auf der Arbeitsfläche {#gradient-handles}

Solange das Füllungsmenü auf einem Verlauf offen ist und eine Ebene ausgewählt ist, liegen die Griffe des Verlaufs auf der Arbeitsfläche über der Ebene. Ein Klick darauf lässt das Menü offen, sodass du zwischen beidem hin und her wechseln kannst.

Ein linearer Verlauf zeigt die Linie, entlang der er läuft, mit seiner ersten Farbe an einem Ende und seiner letzten am anderen:

- **Zieh an einem Ende**, um den Verlauf zu drehen und zu dehnen. Halte {{⇧}}, um die Linie in Schritten von 15° zu halten.
- **Klick auf ein Ende**, um seine Farbe im Menü zu wählen.
- **Die Farben dazwischen** sind kleinere Punkte auf der Linie. Klick auf einen, um ihn zu wählen, zieh ihn entlang, um ihn zu verschieben, oder zieh ihn von der Linie weg und lass los, um ihn zu entfernen.
- **Klick auf die Linie**, um dort eine Farbe hinzuzufügen.

Ein radialer Verlauf zeigt seine Mitte, eine Linie hinaus bis zum Ende seines Radius und einen gestrichelten Ring, so weit er sich ausbreitet:

- **Zieh an der Mitte**, um den Verlauf zu verschieben.
- **Zieh am Ende des Radius**, um ihn zu drehen und zu dehnen, mit {{⇧}} in Schritten von 15°.
- **Zieh an der Raute auf dem Ring**, rechtwinklig zum Radius, um den Verlauf breiter oder schmaler zu machen.
- **Zieh an der Raute an der Ecke** jenseits des Rings, um ihn in beide Richtungen zugleich zu skalieren, so wie du eine Ebene an ihrer Ecke skalierst; halte {{⇧}}, um seine Form zu behalten. Zeigst du darauf, erscheinen die zwei Seiten des Quadrats, in dem der Ring sitzt.
- Farben dazwischen und Klicks auf die Linie funktionieren wie bei einem linearen Verlauf.

Ein Verlauf ist an die Ebene selbst gebunden, sodass er sich mit ihr dehnt, dreht und spiegelt. Vor seiner ersten Farbe und nach seiner letzten reichen diese Farben bis an die Ränder; außerhalb des Rings eines radialen Verlaufs füllt die letzte Farbe den Rest.

### Füllmethoden {#blend}

Das Menü {Füllmethode} auf der ersten Karte Füllung einer Form legt fest, wie sich die ganze Ebene, Füllungen, Rahmen und Schatten zusammen, mit dem mischt, was darunter liegt. Zeig im Menü auf eine Methode, um sie auf der Arbeitsfläche zu sehen, bevor du sie wählst. Das Menü ordnet die Methoden in sechs Gruppen:

- {Normal}: die Ebene, so wie sie ist, über das gezeichnet, was darunter liegt.
- {Abdunkeln}, {Multiplizieren}, {Farbig nachbelichten}, {Linear nachbelichten}: dunkler.
- {Aufhellen}, {Negativ multiplizieren}, {Farbig abwedeln}, {Linear abwedeln}: heller.
- {Ineinanderkopieren}, {Weiches Licht}, {Hartes Licht}: mehr Kontrast.
- {Differenz}, {Ausschluss}: die beiden voneinander abgezogen.
- {Farbton}, {Sättigung}, {Farbe}, {Luminanz}: ein Teil der Farbe von der Ebene, der Rest von dem, was darunter liegt.

{Linear nachbelichten} und {Linear abwedeln} sind die Methoden, die Photoshop Linear nachbelichten und Linear abwedeln (Addieren) nennt. Text hat keine Füllmethode.

## Rahmen {#borders}

Ein Rahmen läuft am Umriss einer Form entlang. Zugeklappt sagt die Karte, wie kräftig er ist, wo er liegt, ob er gestrichelt ist und ob er mit einem Verlauf oder einem Bild gemalt ist, etwa `2 pt · Außen · Gestrichelt`.

::: fields
- **Das Ziehen**: die Stärke, von 0 bis 12 Punkt (oder bis zu seinem Wert, wenn er stärker ist), in halben Punkten, mit Halt bei 1, 2 und 4. Über null hinaus verschwindet der Rahmen.
- **Dünn**, **Mittel**, **Kräftig**, **Gestrichelt**: 1, 2 und 4 Punkt, durchgezogen; oder gestrichelt in der Stärke, die er hat, jeder Strich doppelt so lang wie die Stärke (mindestens 4 Punkt) und jede Lücke ebenso lang.
- **Die Farbe**: eine Farbe, oder ein Verlauf oder ein Bild aus dem [Füllungsmenü](#fill-menu), wie bei einer Füllung.
- **Dicke**: die Stärke in Punkt, von 0 bis 1000.
- **Strich**, **Lücke**: die Länge jedes Strichs und jeder Lücke dazwischen, in Punkt. Ein Strich von 0 zeichnet eine durchgezogene Linie. Tippst du einen Strich ein, während die Lücke 0 ist, wird die Lücke ebenso lang.
- **Innen**, **Mittig auf der Kante**, **Außen**: wo der Rahmen am Umriss liegt, als drei kleine Bilder.
:::

Ein Rahmen innen liegt ganz innerhalb des Umrisses, sodass die Ebene nicht über ihre Begrenzung hinausreicht; ein mittiger liegt halb innen und halb außen; einer außen liegt ganz jenseits davon. Auf einem Pfad, der nicht geschlossen ist, liegt der Rahmen immer quer über der Linie, was seine Position auch sagt. Striche haben flache Enden; ein durchgezogener Rahmen auf einem offenen Pfad hat runde.

Ein Verlauf auf einem Rahmen wird wie der einer Füllung an die Ebene gebunden. Ein Bild auf einem Rahmen bedeckt alles, was der Rahmen erreichen kann: die Begrenzung der Ebene und so weit darüber hinaus, wie der Rahmen außen liegt.

Der gestrichelte Chip {Rahmen} fügt einen 1 Punkt starken Rahmen innen hinzu, beim ersten Mal in `#706E69`, sonst so, wie der Rahmen war, bevor er entfernt wurde. Das + auf einer geöffneten Karte Rahmen zeichnet einen weiteren darüber: einen Ring in der Farbe des obersten Rahmens, blasser, mindestens 2 Punkt stark, auf der anderen Seite der Kante (außen, wenn der oberste innen oder mittig liegt, innen, wenn er außen liegt), sodass beide zu sehen sind.

Um ein Bild, dessen Hintergrund entfernt wurde, folgt ein Rahmen dem Umriss des Motivs, wie der Rand eines Stickers. Um einen Rahmen in eine eigene Form umzuwandeln, nimm [Rahmen in Form umwandeln](/docs/shapes.html#outline-border).

### Die Striche einer Linie {#line-strokes}

Eine Linie ist ganz Rahmen: Ihre Striche stehen auf Karten {Linie}. Sie funktionieren wie Rahmen, ohne Position, da eine Linie kein Inneres hat; ein Strich ist nie dünner als 0,5 Punkt, und der erste Strich einer Linie lässt sich nicht entfernen. Das + auf einer Karte Linie fügt einen feineren Strich in der Mitte des obersten hinzu, etwa ein Drittel so breit, weiß über einer dunklen Linie und schwarz über einer hellen. Eine neue Linie hat einen 1 Punkt starken Strich in `#706E69`.

## Schatten {#shadows}

Ein Schatten fällt unter eine Ebene und über sie hinaus, oder in sie hinein, als wäre die Ebene in die Seite gedrückt. Zugeklappt heißt die Karte {Schatten} oder {Innenschatten} und nennt die Vorgabe oder gibt die Zahlen an, etwa `Y 4 · U 12`.

::: fields
- **Das Ziehen**: wie hoch der Schatten die Ebene anhebt, von gar nicht über jede Vorgabe bis {Schwebend}, wobei es zwischen zwei Vorgaben beide mischt. Die Farbe des Schattens, wie weit er seitwärts fällt und ob er innen fällt, bleiben.
- **Außen**, **Innen**: unter der Ebene oder in ihr. Eine Linie hat kein Inneres, darum fallen die Schatten einer Linie immer unter sie. Eine Vorgabe wird zu der, die ihr gegenüberliegt ({Weich} zu {Gedrückt}); ein Schatten, den du von Hand eingestellt hast, behält seine Zahlen.
- **Die Vorgaben**: vier unter der Ebene, vier in ihr (siehe unten).
- **Die Farbe**: Farbe und Transparenz des Schattens. Die Vorgaben setzen die Transparenz und behalten die Farbe.
- **X**, **Y**: wie weit der Schatten nach rechts und nach unten fällt, in Punkt, von −1000 bis 1000.
- **U**: wie weich er ist, seine Unschärfe, von 0 bis 1000.
- **Ausbreitung**: bei Rechtecken, Ellipsen, Pfaden und Linien, wie viel größer als die Ebene der Schatten geworfen wird (siehe unten).
:::

| Unter der Ebene | Y | Unschärfe | Deckkraft | In der Ebene | Y | Unschärfe | Deckkraft |
|---|---|---|---|---|---|---|---|
| {Dezent} | 1 | 3 | 14 % | {Graviert} | 1 | 2 | 14 % |
| {Weich} | 4 | 12 | 14 % | {Gedrückt} | 2 | 6 | 16 % |
| {Angehoben} | 10 | 28 | 18 % | {Versenkt} | 4 | 12 | 20 % |
| {Schwebend} | 24 | 56 | 22 % | {Tief} | 8 | 24 | 26 % |

Jede Vorgabe fällt gerade nach unten, ohne X und ohne Ausbreitung. Der gestrichelte Chip {Schatten} fügt {Weich} unter der Ebene hinzu. Hat eine Ebene schon einen Schatten unter sich, bietet der Chip stattdessen {Innenschatten} an, der {Gedrückt} hinzufügt. Das + auf einer geöffneten Karte Schatten fügt einen weiteren auf derselben Seite hinzu: unter der Ebene einen nahen Schatten {Dezent}, der sie auf die Seite setzt, was ein weicher Schatten weit darunter allein nicht kann; innen eine feine Linie {Graviert} entlang der Oberkante.

### Einen Schatten auf der Arbeitsfläche verschieben {#shadow-on-canvas}

Ist eine Ebene ausgewählt, zeig auf ihren Schatten, wo er außerhalb der Ebene zu sehen ist: Der Zeiger wird zur Hand, und der Umriss des Schattens wird gestrichelt gezeichnet. Zieh ihn dorthin, wohin er fallen soll; ein Etikett zeigt dabei X und Y, und {{⇧}} hält das Ziehen genau waagerecht oder senkrecht. Das Ziehen verschiebt den Schatten, dessen Karte offen ist, sonst den ersten unter der Ebene. Ein Klick dort ohne Ziehen wählt aus, was unter dem Zeiger liegt, wie überall sonst. Das funktioniert bei jeder Ebene außer einer Linie, solange sie weder gesperrt noch in die Tiefe gedreht ist.

### Ausbreitung {#spread}

Eine Ausbreitung wirft den Schatten vom Umriss der Ebene aus, ringsum um so viele Punkt vergrößert, oder unter 0 verkleinert. Eckige Ecken bleiben eckig, und runde werden runder. In der Ebene verengt eine Ausbreitung die Vertiefung, um die der Schatten geworfen wird, sodass der Schatten weiter hineinreicht. Bei einer Linie macht die Ausbreitung den Strich, den sie wirft, kräftiger, und bei einem freigestellten Bild vergrößert sie den Umriss seines Motivs. Text und Gruppen haben keine Ausbreitung.

### Wie Schatten fallen {#shadow-light}

Das Licht steht über der Seite, darum fällt ein Schatten in dieselbe Richtung, wie auch immer seine Ebene gedreht ist. Mehrere Schatten werden jeder für sich geworfen, der erste zuunterst. Schatten innen liegen über den Füllungen und unter den Rahmen, so wie eine Vertiefung innerhalb ihres Rands liegt. Die Schatten eines Texts oder einer Gruppe werden von dem geworfen, was er oder sie zeichnet: von den Buchstaben oder den Ebenen darin. Ein Bild, dessen Hintergrund entfernt wurde, wirft seine Schatten nur von seinem Motiv.

## Unschärfe {#blur}

Eine Unschärfe macht die Ebene selbst weicher, oder das, was dahinter liegt, wie Milchglas. Zugeklappt sagt die Karte, wie viel, mit dem Namen der Vorgabe und einer Zahl, mit {Dahinter} bei einer Unschärfe dessen, was dahinter liegt, und {Zunehmend} bei einer, die über die Ebene hinweg zunimmt.

::: fields
- **Das Ziehen**: wie viel, von 0 bis 40 (oder bis zu ihrem Wert, wenn er höher ist), mit Halt bei jeder Vorgabe. Über null hinaus verschwindet die Unschärfe.
- **Die Ebene**, **Was dahinter liegt**: ob die Ebene selbst unscharf wird oder das, was hinter ihr liegt, durch ihren Umriss gesehen. Nur Rechtecke, Ellipsen und Pfade können unscharf machen, was hinter ihnen liegt.
- **Leicht**, **Weich**, **Stark**, **Sehr stark**: Unschärfen von 3, 8, 16 und 32.
- **Gleichmäßig**, **Zunehmend**: überall gleich unscharf, oder über die Ebene hinweg von scharf zu unscharf zunehmend (siehe unten).
- **Stärke**: wie viel, von 0 bis 500. Gemessen wird so, wie Adobe XD seine Unschärfen misst, sodass ein aus XD hereingeholtes Design aussieht wie vorher.
- **Helligkeit**: bei einer Unschärfe dessen, was dahinter liegt, von −100 % bis 100 %: Über 0 hellt sie auf, was durchscheint, unter 0 dunkelt sie es ab.
- **Füllung**: bei einer Unschärfe dessen, was dahinter liegt, wie viel von den eigenen Füllungen der Ebene über der Unschärfe liegt, von 0 bis 100 %.
:::

Eine Unschärfe der Ebene macht alles unscharf, was sie zeichnet, auch ihren Schatten. Eine Unschärfe dessen, was dahinter liegt, zeigt, was hinter der Ebene auf ihrer Zeichenfläche liegt, unscharf, innerhalb des Umrisses der Ebene; auf einer Zeichenfläche, die ihren Inhalt beschneidet, setzt sich das, was am Rand der Zeichenfläche liegt, nach außen fort, sodass die Unschärfe dort nicht ausbleicht. Ihre {Füllung} beginnt bei 0 %, sodass zuerst nur das Milchglas zu sehen ist: Erhöhe {Füllung}, um die eigene Farbe der Ebene darüberzulegen, wie eine getönte Scheibe.

Der gestrichelte Chip {Unschärfe} gibt der Ebene selbst die Unschärfe {Weich}. Beim Wechsel zu {Was dahinter liegt} bleibt die Stärke.

### Eine zunehmende Unschärfe {#growing-blur}

{Zunehmend} macht die Ebene an einer Stelle scharf und an einer anderen um die ganze Stärke unscharf, und jenseits von beiden bleibt es, wie es ist. Zu Beginn ist das obere Drittel der Ebene scharf, und zu ihrer Unterkante hin wird sie unscharf. Ein Feld unter dem Schalter zeigt die Ebene klein, ihre Markierungen so unscharf, wie die Ebene sein wird, mit einem Ring, wo sie scharf ist, und einem Punkt, wo die Unschärfe voll ist:

- **Zieh den Ring oder den Punkt**, um ihn zu verschieben.
- **Zieh irgendwo sonst über das Feld**, um die Unschärfe neu zu zeichnen, von dort aus, wo du angesetzt hast.
- Halte {{⇧}}, um in Schritten von 45° zu bleiben.
- **Doppelklick auf das Feld**, um wieder nach unten hin unscharf zu machen.

Die vier Vorgaben daneben, {Nach unten}, {Nach oben}, {Nach links} und {Nach rechts}, machen zu einer Kante hin unscharf. Ring und Punkt können bis zu einem Viertel der Ebene jenseits ihrer Seiten liegen, und sie sind an die Ebene selbst gebunden, sodass sich die Unschärfe mit ihr dehnt und dreht. Die Ebenen auf der Arbeitsfläche folgen dem Feld, während du ziehst.

## Deckkraft {#opacity}

Die Karte {Deckkraft} macht die ganze Ebene durchscheinend: ihre Füllungen, Rahmen und Schatten zusammen, als eins. Zieh darüber von 0 bis 100 %, mit Halt bei jedem Viertel; wähl eines der vier Viertel, 25 %, 50 %, 75 % und 100 %, gezeichnet als Ringe, die so weit gefüllt sind; oder tipp einen Prozentwert in ihr Feld. Die Deckkraft lässt sich nicht entfernen, nur auf 100 % zurücksetzen.

Die eigene Transparenz einer Füllung, eingestellt auf ihrer Karte Füllung oder im Farbwähler, ist etwas anderes: Sie macht nur diese eine Farbe durchscheinend und lässt Rahmen und Schatten, wie sie sind.

## Ecken {#corners}

Die Karte {Ecken} eines Rechtecks rundet seine Ecken ab, von eckig bis zur Kapsel, als schlichte Bögen oder als Squircles, und die Punkte in den Ecken eines ausgewählten Rechtecks runden sie direkt auf der Arbeitsfläche ab. Beides ist unter [Formen, Pfade und der Zeichenstift](/docs/shapes.html#corners) beschrieben.

## 3D: Tiefe und Perspektive {#depth}

{3D} hält eine Ebene von der Seite hoch, so wie du eine Karte hochhältst, um sie anzusehen: nach hinten oder vorne gekippt, herumgeschwenkt und näher geholt oder weggeschoben, in echter Perspektive. Es wirkt auf jede Ebene außer einer Zeichenfläche: Formen, Text, Bilder und ganze Gruppen.

### Die Karte 3D {#depth-card}

Der gestrichelte Chip {3D} hebt die Ebene ein wenig an, nach links gedreht: um 16° gekippt und um −22° geschwenkt. Zugeklappt nennt die Karte die zwei Winkel, etwa `16°, −22°`, oder zeigt {Ecken fixiert} bei einer Ebene, die [an ihren Ecken fixiert](#pinned-corners) ist.

::: fields
- **Das Ziehen**: kippt die Ebene weiter, von flach bis 60°, in die Richtung, in die sie schon gedreht ist; von flach aus in die Richtung, in die der Chip sie dreht. Über null hinaus verschwindet das 3D.
- **Das Feld**: eine kleine Karte, die dorthin blickt, wohin du zeigst. In ihrer Mitte siehst du die Ebene von vorn, flach in der Seite; der gestrichelte Ring darum steht für den Blick genau auf die Kante. Zieh irgendwo darin, um die Ebene dorthin auszurichten, oder zieh den Knauf, ohne dass er springt. Die Ebenen auf der Arbeitsfläche drehen sich dabei mit. Halte {{⇧}} für Schritte von 15°, und doppelklick auf das Feld, um die Ebene wieder flach hinzulegen. Das Feld dreht eine Ebene nicht weiter als 85°, knapp bevor du nur noch ihre Kante siehst.
- **X**: um wie viel Grad die Ebene um ihre Mitte nach hinten gekippt ist, wobei ihre Oberkante über 0 zurückweicht, von −180° bis 180°.
- **Y**: um wie viel Grad sie herumgeschwenkt ist, wobei ihre rechte Seite über 0 zurückweicht, von −180° bis 180°.
- **Z**: um wie viele Punkt sie näher geholt ist, oder unter 0 weggeschoben, von −10.000 bis 10.000.
:::

Das kleine Bild auf der zugeklappten Karte zeigt die Drehung der Ebene selbst: von oben beleuchtet, dunkler, je mehr sich ihre Vorderseite abwendet, und grau, sobald du ihre Rückseite siehst. Das × entfernt das 3D und legt die Ebene wieder flach und gerade hin.

### In die Tiefe drehen auf der Arbeitsfläche {#depth-on-canvas}

Eine Ebene, die in die Tiefe gedreht ist, zeigt einen Knauf auf einem kurzen Stiel aus ihrer Mitte, der dorthin zeigt, wohin ihre Vorderseite blickt. Er erscheint, wenn eine Ebene mit dem Werkzeug {Auswahl} ausgewählt ist, die Ebene nicht gesperrt ist und sie auf dem Bildschirm mindestens 40 Punkt misst.

- **Zieh den Knauf**, um die Vorderseite auszurichten: Sie folgt dem Knauf, so wie sich ein Kopf dorthin dreht, wohin man ihn an der Nase führt. Zeig zuerst auf den Knauf, und ein gestrichelter Ring zeigt, wo du die Vorderseite nur noch von der Kante sehen würdest.
- **Halte {{⌥}}**, während du den Knauf ziehst, um die Ebene stattdessen näher zu holen, indem du nach oben ziehst, oder sie wegzuschieben, indem du nach unten ziehst.
- **Halte {{⇧}}** für Schritte von 15°. Kommt die Ebene an der Ansicht von vorn vorbei, legt sie sich flach.
- **Doppelklick auf den Knauf**, um die Ebene wieder flach hinzulegen.

Knapp außerhalb der Mitte jeder Seite der Auswahl zeigt der Zeiger, dass er Dinge in die Tiefe dreht. Zieh dort, um alles Ausgewählte zu drehen, flach oder nicht, so wie sich eine Kugel unter deiner Hand dreht: Die Vorderseite geht dorthin, wohin der Zeiger geht, und du kannst über die Kante hinaus weiterdrehen. Jede ausgewählte Ebene dreht sich gleich, jede um ihre eigene Mitte. Halte {{⇧}}, um nur um eine Achse zu drehen, in Schritten von 15°, und drück {{Esc}}, um alles so zurückzusetzen, wie es war. Ein Klick dort ohne Ziehen wählt aus, was unter dem Zeiger liegt. Während du drehst, zeigt ein Etikett die Winkel, etwa `X 16°  Y −22°`, die Nähe oder wie viele Ebenen sich drehen.

Die Griffe einer in die Tiefe gedrehten Ebene ändern weiterhin ihre Größe: Der Zug wird an der Ebene gemessen, wie sie flach läge, sodass sie entlang ihrer eigenen Seiten wächst.

### Wie die Perspektive funktioniert {#perspective}

Eine in die Tiefe gedrehte Ebene wird von genau vor ihrer eigenen Mitte aus gesehen, so wie die CSS-Perspektive eines Browsers sie sieht, sodass ihre Mitte bleibt, wo sie ist, und sie gleich aussieht, wo auch immer sie auf der Zeichenfläche liegt. Sie wird aus doppelt so großer Entfernung gesehen, wie sie groß ist, und nie näher als aus 600 Punkt, sodass eine kleine Ebene so viel Tiefe zeigt wie eine große und etwas Kleines nicht verzerrt wird. Das Näherholen mit Z hält bei 40 % dieser Entfernung an, sodass kein Teil der Ebene je das Auge erreicht.

Ein Schatten unter einer Ebene in der Tiefe fällt von der Form, die die Ebene auf der Seite ergibt, mit dem Licht wie immer über der Seite. Ein Schatten in ihr ist Teil ihrer Vorderseite und dreht sich mit. Eine in die Tiefe gedrehte Gruppe dreht alles, was sie enthält. Eine in die Tiefe gedrehte Form kann als [Maske](/docs/pictures.html#masks) keine Ebenen aufnehmen.

### Fixierte Ecken {#pinned-corners}

Eine Ebene kann auch an ihren Ecken fixiert werden, so wie ein Bild auf einen Bildschirm gelegt wird, der auf einem Foto schräg zu sehen ist. Die Bildschirme eines Photoshop-Mockups kommen so herein (siehe [Designs hereinholen](/docs/import.html)), und ein Bild, das du auf einen davon ziehst, kommt im Winkel des Bildschirms hinein. Solange eine fixierte Ebene nicht zusätzlich gedreht ist, zieh an einem ihrer Eckgriffe, um diese Ecke dorthin zu bringen, wo du sie haben willst, oder am Griff einer Seite, um die zwei Ecken dieser Seite mitzunehmen; ein Zug, der die Ebene über sich selbst falten würde, wird nicht angenommen. Entfernst du das 3D, liegt sie wieder gerade.

## Was worüber gezeichnet wird {#drawing-order}

Eine Ebene wird in dieser Reihenfolge gezeichnet, von unten nach oben:

1. Ihre Schatten unter ihr, jeder für sich, der erste zuunterst.
2. Eine Unschärfe dessen, was hinter ihr liegt, wenn sie eine hat, dann ihre Füllungen, die erste zuunterst.
3. Ihre Schatten innen.
4. Ihre Rahmen, der erste zuunterst.

Deckkraft und Füllmethode wirken dann auf alles als eins, sodass eine Füllung und ihr Rahmen gemeinsam verblassen und einen einzigen Schatten werfen. Eine Unschärfe der Ebene macht alles davon unscharf, und eine Ebene in der Tiefe wird so flach liegend gezeichnet und dann an ihren Platz gedreht. Die Arbeitsfläche, die Vorschaubilder der Startseite und jeder Export werden auf dieselbe Weise gezeichnet, sodass sie auf den Punkt genau übereinstimmen.

## Benannte Looks {#styles}

Hat das Design Stile einer Art, bieten die geöffneten Karten {Füllung}, {Rahmen} und {Schatten} sie zuerst an, und eine Karte, die einen Stil zeigt, nennt seinen Namen statt seiner Zahlen. Stile sind Farben, Schatten, Schriften und Ecken mit einem Namen, überall gleich, wo sie verwendet werden, und ein benannter Look kann einen eigenen dunklen Look haben. Siehe [Komponenten, Stile und Bibliotheken](/docs/components.html) und [Hell und dunkel](/docs/dark.html).
