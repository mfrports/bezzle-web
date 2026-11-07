---
title: Layoutraster, Wiederholungsraster und jede Größe
nav: Layout und Größen
lede: Leg Zeichenflächen auf Spalten, Zeilen und Grundlinien an, wiederhol ein Design in einem Raster aus Zellen, die einander gleich bleiben, und gib jeder Zeichenfläche eine neue Größe, während ihr Design sich von selbst neu komponiert.
---

Drei Dinge in Bezzle kümmern sich für dich um die Struktur. Ein **Layoutraster** ist das Gerüst aus Spalten, Zeilen und Grundlinien, auf dem eine Zeichenfläche angelegt ist. Ein **Wiederholungsraster** ist ein Design, das sich in Spalten und Zeilen wiederholt, und jede Änderung an einer Zelle ist eine Änderung an allen. Und jede Zeichenfläche **passt sich an**: Gib ihr eine neue Größe, und Bezzle liest ihr Design, wie es ein Designer lesen würde, und komponiert es neu, ohne dass du zuerst Constraints einrichten musst.

## Layoutraster {#layout-grids}

Ein Layoutraster gehört zu einer Zeichenfläche. Es kann Spalten haben, die nebeneinander über sie laufen, Zeilen, die untereinander an ihr hinunterlaufen, und Grundlinien, auf denen Text sitzt, in jeder Kombination. Das Raster wird nur auf der Arbeitsfläche über die Zeichenfläche gezeichnet: Es wird nie exportiert und ist nie Teil eines Bildes oder eines PDFs. Seine Spalten und Zeilen spannen sich zwischen den Rändern auf, darum folgen sie der Zeichenfläche, wann immer sie wächst oder schrumpft.

Auf der Arbeitsfläche sind Spalten und Zeilen im Rot eines Heftrands getönt, Grundlinien im blassen Blau liniierten Papiers. In Ruhe bleiben sie schwach. Während du etwas auf der Zeichenfläche bewegst, skalierst oder zeichnest, treten sie hervor, und die Spalten, die es bedeckt, leuchten auf.

### Ein Layoutraster hinzufügen {#add-layout-grid}

::: steps
1. **Wähl eine einzelne Zeichenfläche aus.** Klick auf ihren Namen auf der Arbeitsfläche oder auf ihre Zeile in der Ebenenliste.
2. **Zeig auf die gestrichelte Karte {Layoutraster}** unten im Inspektor. Die Arbeitsfläche zeigt das Raster, das Bezzle für die Größe der Zeichenfläche vorschlägt, noch bevor etwas hinzugefügt ist.
3. **Klick darauf.** Das Raster wird hinzugefügt, und seine Karte öffnet sich. Waren Layoutraster ausgeblendet, werden sie wieder eingeblendet.
:::

Welches Raster Bezzle vorschlägt, hängt von der Breite der Zeichenfläche ab:

| Breite der Zeichenfläche | Spalten | Abstand | Rand |
| --- | --- | --- | --- |
| Schmaler als 600 (ein Telefon) | 4 | 16 | 16 |
| 600 bis 1.199 (ein Tablet oder ein Beitrag) | 8 | 24 | 4 % der Breite, in Schritten von 8, mindestens 24 |
| 1.200 und breiter (ein Desktop) | 12 | 24 | 5,5 % der Breite, in Schritten von 8, mindestens 32 |

Auf einem Karussell wird das Raster für eine Folie berechnet und wiederholt sich auf jeder Folie (siehe [Karussells](#carousels)).

### Die Karte Layoutraster {#layout-grid-card}

Zugeklappt sagt die Karte, woraus das Raster besteht: `12 Spalten`, `4 × 6` für Spalten und Zeilen, oder `Grundlinie 8`, wenn es nur Grundlinien hat.

Zieh seitwärts über die zugeklappte Karte, um die wichtigste Zahl zu ändern, ohne sie zu öffnen. Mit Spalten bestimmt das Ziehen, wie viele es sind, von 1 bis 24, und rastet bei 2, 3, 4, 6, 8, 12, 16 und 24 ein, wenn es daran vorbeikommt (das Trackpad tickt dort). Ohne Spalten bestimmt es die Zeilen, 1 bis 24, mit Halt bei 2, 3, 4, 6, 8 und 12. Mit Grundlinien allein bestimmt es ihren Schritt, 2 bis 32, mit Halt bei 4, 6, 8, 12, 16 und 24. Zieh weit genug über das linke Ende hinaus, und die Karte sagt {Loslassen zum Entfernen}: Lass los, und das Raster ist weg.

Ein Klick öffnet die Karte. Ihre drei Kacheln, {Spalten}, {Zeilen} und {Grundlinien}, schalten jeden Teil ein und aus, und jeder eingeschaltete Teil zeigt darunter seine Zahlen.

::: fields
- **Spalten**, **Zeilen** (Kacheln): schalten Spalten oder Zeilen ein und aus. Zeilen kommen in der Anzahl, die mit den Spalten quadratische Felder ergibt, mit dem Abstand und dem Rand der Spalten, bis zu 24.
- **Grundlinien** (Kachel): schaltet Grundlinien ein, im Abstand von 4 auf einer Zeichenfläche schmaler als 600, sonst von 8.
- **Spalten**, **Zeilen** (Einträge der offenen Karte): Die Knöpfe Minus und Plus nehmen eine weg oder fügen eine hinzu; das Feld nimmt jede Anzahl von 1 bis 48.
- **Abstand**: der Raum zwischen einer Spalte (oder Zeile) und der nächsten, in Punkt, 0 oder mehr, in ganzen Punkt.
- **Rand**: der Raum vor der ersten Spalte und nach der letzten, an beiden Enden gleich, 0 oder mehr.
- **Grundlinie**: die Distanz von einer Grundlinie zur nächsten, 2 bis 200, in halben Punkt.
- **Versatz**: wie weit unter der Oberkante die Grundlinien beginnen, in ganzen Punkt.
- {Hilfslinien an den Rändern}: setzt Hilfslinien dort, wo die Spalten und Zeilen beginnen und enden, damit du dich daran halten kannst, wenn das Raster ausgeblendet ist. Hilfslinien, die schon da sind, kommen nicht doppelt dazu. Siehe [Hilfslinien](/docs/canvas.html#guides).
- Das **×** auf der offenen Karte ({Layoutraster entfernen}): nimmt das ganze Raster weg.
:::

Spalten und Zeilen füllen immer, was die Ränder übrig lassen, darum ergibt sich ihre eigene Breite aus der Anzahl, dem Abstand und dem Rand. Brauchen Abstände und Ränder mehr Platz, als die Zeichenfläche hat, schrumpfen die Spalten auf nichts, statt sich zu überlappen. Ein Raster, dessen Teile alle ausgeschaltet sind, wird entfernt.

### Das Raster auf der Arbeitsfläche ziehen {#drag-grid}

Solange die Karte Layoutraster offen und die Zeichenfläche allein ausgewählt ist, kannst du das Raster direkt auf der Zeichenfläche ändern. Jede Spalte ist oben nummeriert, und der Teil unter dem Zeiger ist schraffiert.

- **Abstände.** Zieh an einem beliebigen Abstand. Ziehst du von seiner Mitte weg, öffnen sich alle Abstände; schiebst du zu ihr hin, schließen sich alle, als würde die Lücke von beiden Seiten zugleich aufgezogen.
- **Ränder.** Zieh den Rand an einem der beiden Enden. Er folgt dem Zeiger, und das andere Ende bekommt denselben Rand.
- **Grundlinien.** Zieh an einer beliebigen Grundlinie außer der ersten, die bleibt, wo sie ist. Der Schritt folgt der Linie, die du hältst. Grundlinien lassen sich nur fassen, wenn sie auf dem Bildschirm mindestens 9 Punkt auseinanderliegen, also zoom hinein, um enge zu erreichen.

Ein Etikett neben der Zeichenfläche sagt beim Ziehen `Abstand 24`, `Rand 32` oder `Grundlinie 8`. Jedes Ziehen ist ein einziger Schritt zum Widerrufen, und {{Esc}} bricht es ab, bevor du loslässt.

### Was am Raster einrastet {#snapping-to-grid}

Was immer du auf einer Zeichenfläche bewegst, skalierst oder zeichnest, rastet an den Kanten ihrer Spalten und Zeilen ein, so wie es an Hilfslinien und an anderen Ebenen einrastet. Ein einzelner Text, den du bewegst, rastet außerdem mit seiner ersten Zeile an den Grundlinien ein, wann immer eine Grundlinie näher ist als jede Kante. Ein Etikett in einer roten Pille sagt, über wie viele Spalten sich die Ebene erstreckt, wenn beide ihrer Kanten auf Spaltenkanten liegen, zum Beispiel `3 Spalten`.

Ein ausgeblendetes Raster zeichnet nichts, und nichts rastet daran ein: Was zu sehen ist, ist das, woran etwas einrastet.

### Layoutraster ein- und ausblenden {#show-hide-grids}

{Layoutraster} ({{⌃G}}) in der Menüleiste, neben {Lineale} und {Hilfslinien}, blendet alle Layoutraster auf einmal ein oder aus. Denselben Schalter gibt es im Menü der Linealecke und im Zoom-Menü. Die Wahl gilt in jedem Fenster und bleibt erhalten, wenn du Bezzle das nächste Mal öffnest; sie ändert nur, was du siehst, nicht das Design.

Im [Modus Untersuchen](/docs/inspect.html#inspect-mode) zeigt eine ausgewählte Zeichenfläche ihr Raster für die Entwicklung: die Spalten mit ihrer Anzahl und Breite, samt Abstand und Rand, die Zeilen ebenso und den Schritt der Grundlinien, jeder Wert bereit zum Kopieren.

## Wiederholungsraster {#repeat-grids}

Ein Wiederholungsraster ist eine Ebene, oder ein paar zusammen gruppierte, einmal gestaltet und in Spalten nach rechts und Zeilen nach unten wiederholt, im immer gleichen Abstand. Jede Zelle ist eine Kopie der ersten. Was immer du in einer Zelle änderst, ihr Aussehen, ihre Größe und Lage, eine hinzugefügte oder weggenommene Ebene, ändert sich in jeder Zelle, während du es tust. Was jede Zelle enthält, gehört ihr: ihre Texte und ihre Bilder. Darum sind Wiederholungsraster der schnellste Weg zu einer Liste, einer Galerie, einem Menü oder einer Tabelle aus Karten.

Am Ende ist ein Wiederholungsraster eine Gruppe wie jede andere: Es wird gezeichnet, exportiert und geteilt wie eine Gruppe.

### Ein Wiederholungsraster erstellen {#make-repeat-grid}

::: steps
1. **Gestalte eine Zelle.** Eine Karte, eine Listenzeile, ein Vorschaubild mit Bildunterschrift.
2. **Wähl sie aus.** Eine einzelne Ebene wird selbst zur Zelle; mehrere werden zuerst in eine Gruppe gelegt.
3. **Wähl {Objekt › Wiederholungsraster erstellen}** ({{⌘R}}), oder klick auf die gestrichelte Karte {Wiederholung} unten im Inspektor, oder klick mit der rechten Maustaste und wähl {Wiederholungsraster erstellen}.
4. **Zieh es auf.** Das Raster beginnt mit einer Zelle. Zieh den Griff an seinem rechten Rand für mehr Spalten oder den an seinem unteren Rand für mehr Zeilen.
:::

Was du auswählst, muss zusammen in einer Zeichenfläche, einer Gruppe oder auf der Arbeitsfläche liegen, und nichts davon darf gesperrt, eine Zeichenfläche oder ein Wiederholungsraster sein. Eine Zelle eines Rasters kann nicht selbst zum Raster werden, doch ist eine Zelle eine Gruppe aus mehreren Ebenen, können Ebenen darin es, und so entsteht ein Raster im Raster.

Das neue Raster heißt `Wiederholungsraster 1`, `Wiederholungsraster 2` und so weiter und nimmt in der Ebenenliste den Platz dessen ein, was du ausgewählt hast. Seine Abstände beginnen bei etwa einem Achtel der kürzeren Seite der Zelle, in Schritten von 4, nie weniger als 4 und nie mehr als 32.

### Spalten und Zeilen aufziehen {#grid-handles}

Ist ein Wiederholungsraster ausgewählt und das Werkzeug Auswahl in der Hand, sitzen drei Griffe in Bleistiftblau darauf: einer in der Mitte des rechten Randes für Spalten, einer in der Mitte des unteren Randes für Zeilen und ein runder an der Ecke unten rechts für beides zugleich.

Beim Ziehen kommt eine neue Zelle hinzu, sobald der Zeiger die Mitte der Stelle passiert, an der sie sein wird, und ihr Umriss zeigt sich deutlicher, je näher du kommst. Zieh zurück, um Zellen wegzunehmen. Ein Etikett nennt dabei die Größe, zum Beispiel `3 × 4 · 12 Zellen`. Ein Raster kann 1 bis 100 Spalten und 1 bis 100 Zeilen haben. {{Esc}} bricht das Ziehen ab.

Fügst du Zellen hinzu, nehmen die neuen ihre Texte und Bilder aus den Zellen, die du schon hast. Zahlen zählen weiter: Sagen deine Zellen `Schritt 1` und `Schritt 2`, sagen die nächsten `Schritt 3` und `Schritt 4`, und `07`, `08` gehen als `09`, `10` weiter, mit gleich vielen Stellen. Alles andere wiederholt sich, immer reihum.

### Die Zellen verteilen {#grid-gaps}

Zeig zwischen zwei Zellen, und der Abstand leuchtet auf. Zieh daran, um die Zellen zu verteilen: Die Zelle nach dem Abstand, den du hältst, bleibt unter dem Zeiger, und jeder Abstand davor ändert sich gleich. Halt {{⇧}}, um die Abstände nach rechts und nach unten zusammen zu ändern. Das Etikett sagt `Abstand 20`, oder mit {{⇧}} `Abstände 20`.

In der Karte Wiederholungsraster nehmen die Abstände jede Zahl von −1.000 bis 10.000. Unter null überlappen sich die Zellen.

### Ein Raster drehen und spiegeln {#turn-grid}

Knapp außerhalb jeder Ecke eines ausgewählten Rasters dreht der Zeiger es als Ganzes, wie er jede Ebene dreht. Halt {{⇧}}, um in Schritten von 15° zu drehen. Die Zeilen laufen dann in der Richtung, in die das Raster gedreht ist, und Griffe und Abstände folgen. {Objekt › Horizontal spiegeln} und {Objekt › Vertikal spiegeln} spiegeln das Raster ebenfalls als Ganzes: Jede Zelle behält, was sie enthält.

### Die Karte Wiederholungsraster {#repeat-grid-card}

Wähl das Raster aus, um seine Karte zu sehen. Zugeklappt nennt sie seine Größe, etwa `3 × 4`. Offen enthält sie:

::: fields
- **Das Feld aus Zellen**: zwölf Quadrate nebeneinander und fünf untereinander. Zeig auf ein Quadrat, und das Raster zeigt so viele Spalten und Zeilen auf der Arbeitsfläche, mit der Größe daneben (`5 × 2 · 10 Zellen`) und {Zum Übernehmen klicken}. Ein Klick gibt dem Raster diese Größe.
- **Spalten**, **Zeilen**: die Knöpfe Minus und Plus ({Eine Spalte weniger}, {Eine Spalte mehr}) und ein Feld, 1 bis 100.
- **Abstände**: **↔** für den Abstand zwischen Spalten, **↕** für den Abstand zwischen Zeilen, −1.000 bis 10.000.
- **Inhalt**: jeder Text in der ersten Zelle und jede Form darin, die ein Bild enthält oder enthalten kann, mit einem Menü, {Texte} oder {Bilder}, um diese Ebene in jeder Zelle zu füllen (siehe [Zellen füllen](#fill-cells)).
- {Daten importieren …}: füllt die Textebenen des Rasters aus einer Text- oder CSV-Datei.
- {Rastergruppierung aufheben}: macht das Raster zu einer Gruppe seiner Zellen, jede eine eigene Ebene ({{⇧⌘R}}).
:::

Eine Beschriftung erinnert an die Griffe: Zieh an den Griffen am rechten und unteren Rand, und zieh zwischen zwei Zellen, um sie zu verteilen; {{⇧}} verteilt sie in beide Richtungen.

In die Karte Frame getippt, streckt eine neue Breite oder Höhe das ganze Raster, samt seinen Zellen und Abständen.

### Eine Zelle ändern heißt alle ändern {#cells-alike}

Wähl eine beliebige Ebene in einer beliebigen Zelle aus und ändere sie: ihre Füllung, ihren Rahmen, ihre Schrift, wo sie liegt, wie groß sie ist. Jede Zelle folgt, während du arbeitest. Füg einer Zelle eine Ebene hinzu oder lösch eine, und jede Zelle bekommt sie dazu oder verliert sie. Solange eine Ebene in einer Zelle ausgewählt ist, ist dieselbe Ebene in jeder anderen Zelle gestrichelt umrandet, so siehst du sofort, was eine Änderung erreicht.

Die Karte {In einem Wiederholungsraster} sagt dir, in welcher Zelle du bist (`Zelle 5 von 12`) und was geteilt wird: Alles, was du dort änderst, ändert sich in allen Zellen, bis auf die Wörter eines Textes und das Bild in einer Form, die jede Zelle für sich hat. {Raster auswählen} wählt das Raster selbst aus.

Die Ebenenliste zeigt nur die erste Zelle eines Rasters, da jede andere Zelle ihr folgt.

### Zellen mit Texten und Bildern füllen {#fill-cells}

Jede Textebene der Zelle und jede Form, die ein Bild enthält oder enthalten kann, lässt sich in allen Zellen auf einmal füllen. Eine Form, so groß wie die ganze Zelle, gilt als Hintergrund der Zelle, nicht als Platz für ein Bild, es sei denn, sie zeigt schon eines.

Für einen Text bietet das Menü {Texte} (in der Karte Wiederholungsraster) oder {Zellen füllen} (in der Karte eines Textes in einer Zelle):

- **Beispieltexte**: {Zahlen}, {Namen}, {Vornamen}, {Städte}, {Länder}, {Berufe}, {Firmen}, {E-Mail-Adressen}, {Preise}, {Datumsangaben}, {Uhrzeiten}, {Überschriften} und {Sätze}. Jeder Eintrag zeigt zwei Beispiele, und wenn du darauf zeigst, stehen die Texte schon vor der Wahl in jeder Zelle auf der Arbeitsfläche. Preise, Daten und Uhrzeiten werden geschrieben, wie dein Mac sie schreibt. Zahlen behalten die Wörter rund um eine Zahl, die schon dasteht.
- {Aus einer Datei …}: eine Textdatei mit einer Zeile pro Zelle oder eine CSV-Datei, deren Spalten an die gleichnamigen Textebenen gehen.

Für eine Form nimmt {Bilder wählen …} Bilder oder einen Ordner mit Bildern: Jede Zelle bekommt das nächste, in der Reihenfolge des Finders nach Namen, und wieder von vorn, wenn es weniger Bilder als Zellen gibt. Genommen werden Bilder in PNG, JPEG, HEIC, GIF, TIFF, WebP und BMP, und jedes wird ins Design kopiert.

Beide Menüs enden mit {Mischen}, das vertauscht, welche Zelle welche Texte oder welches Bild hat, ohne sie je so zu lassen, wie sie waren, und mit {Wie die erste Zelle} (oder {Wie diese Zelle}, aus der Karte einer Zelle), das jeder Zelle dieselben Texte oder dasselbe Bild gibt. Ein Rechtsklick auf einen Text oder ein Bild in einer Zelle bietet auch {In jeder Zelle gleich} und {Zellen mischen}.

Du kannst Dateien auch direkt auf das Raster ziehen:

- **Eine Text- oder CSV-Datei oder Text aus einer anderen App**, auf dem Raster abgelegt: eine Zeile pro Zelle. Bei einer Tabelle, deren erste Zeile ihre Spalten benennt (getrennt durch Kommas, Semikolons oder Tabulatoren), geht jede Spalte an die Textebene mit demselben Namen, ohne Rücksicht auf Groß- und Kleinschreibung, und die übrigen Spalten an die übrigen Textebenen in Lesereihenfolge. Solange du sie über dem Raster hältst, sagt ein Etikett, was geschieht, etwa `2 Spalten in 12 Zellen`.
- **Mehrere Bilder oder ein Ordner**, auf einer Form in einer Zelle abgelegt: je ein Bild, wieder von vorn.

### Die Rastergruppierung aufheben {#ungroup-grid}

{Objekt › Rastergruppierung aufheben} ({{⇧⌘R}}), oder {Rastergruppierung aufheben} auf der Karte oder im Kontextmenü, macht das Raster zu einer einfachen Gruppe der Zellen, die es hat. Ab dann ist jede Zelle eine eigene Ebene, und eine zu ändern ändert die anderen nicht mehr.

## Größen, die sich selbst komponieren {#adapt}

Gib einer Zeichenfläche eine neue Größe, und ihr Design wird für diese Größe neu angelegt, mit Blick auf das Design statt auf jede einzelne Ebene, die an einer Kante festgemacht ist. Ein Poster, das für Instagram quadratisch wird, behält sein Gewicht auf der Seite; ein Telefon-Screen, der zum Tablet wird, behält seine Schrift in der Größe, in der sie sich liest, und gewinnt Raum. Constraints musst du keine setzen: Bezzle erkennt an der Lage der Dinge, was sich strecken soll, was an einer Kante bleiben soll und was zusammengehört.

::: figure adapt
Zieh eine Zeichenfläche auf eine neue Größe, und ihr Design komponiert sich neu.
:::

### Wie Bezzle ein Design liest {#how-it-reads}

Bevor es ein Design neu anlegt, liest Bezzle es:

- **Hintergründe.** Eine Form oder ein Bild, das fast die ganze Zeichenfläche bedeckt (85 % oder mehr), ist ihr Hintergrund und bedeckt sie in jeder Größe weiter.
- **Anschnitte.** Eine Ebene, die über eine Kante oder eine Ecke hinausläuft, ohne ganz hinüberzureichen, bleibt an derselben Kante oder Ecke angeschnitten.
- **Bänder.** Ein Balken entlang einer Kante, der ganz hinüberreicht und auf dem andere Ebenen liegen, ist ein Untergrund für sie: Er reicht in jeder Größe ganz hinüber.
- **Blöcke.** Alles andere wird als Blöcke gelesen: eine Ebene für sich, ein paar, die sich überlappen und darum zusammengehören, oder eine Form, die andere enthält und damit ein kleines Design für sich ist. Eine große Gruppe, die Text neben anderen Ebenen enthält und keinen eigenen Untergrund hat, wird geöffnet und als Teil der Seite gelesen; ein Logo, eine Karte oder eine Zeichnung mit Beschriftung bleibt ein Block.
- **Zeilen und Spalten.** Die Blöcke werden entlang des breitesten leeren Raums zwischen ihnen getrennt, wieder und wieder, zu Zeilen aus Spalten aus Zeilen.
- **Abstände.** Ein Abstand ist *eng*, wenn er zwei Blöcke verbindet (eine Überschrift und die Zeile darunter), und *locker*, wenn er Raum zum Atmen ist: deutlich breiter als der schmalste und ein guter Teil der Länge.
- **Plätze.** Quer durch seine Zeile oder Spalte hält sich jeder Block an die Seite, der er nahe liegt, an die Mitte oder an beide Seiten.

Ausgeblendete Ebenen und Ebenen, die zu mehr als der Hälfte außerhalb der Zeichenfläche liegen, werden nicht als Blöcke gelesen: Sie behalten ihren Platz von den Kanten aus.

### Screens und Kompositionen {#interface-composition}

Bezzle legt ein Design auf eine von zwei Arten neu an.

- **Als Komposition**, für Beiträge, Print und Folien: Das ganze Design wächst oder schrumpft mit der Seite, die Schrift eingeschlossen, und behält so den Anteil der Seite, den es bedeckt.
- **Als Oberfläche**, für Screens und Webseiten: Die Schrift bleibt in der Größe, in der sie sich liest, und das Design gewinnt Raum oder gibt ihn ab. Auf einem schmaleren Screen werden auch die seitlichen Ränder schmaler.

Bezzle unterscheidet sie an der Größe: an der jetzigen Größe der Zeichenfläche, wenn sie eine der Vorlagen ist, sonst an der Größe, die sie bekommt. Eine Größe aus den Vorlagen {Geräte} (iPhone, Android, iPad, Mac, Web, Apple Watch) ergibt eine Oberfläche; eine aus den Vorlagen {Social Media} oder {Druck & Folien} eine Komposition. In jeder anderen Größe ist eine Zeichenfläche, die mindestens 1,9-mal so hoch wie breit ist, eine Oberfläche (eine lange Webseite), und sonst schaut Bezzle auf die Schrift: Kleine Schrift im Verhältnis zur Seite liest sich als Screen, Schrift im Maß der Seite als Poster.

### Was sich streckt und was sich neu ordnet {#rearranging}

In der neuen Größe wird das Design so groß, wie es ihm steht und wie es noch passt. Enge Abstände behalten ihr Verhältnis; der übrige Raum geht an die lockeren Abstände oder rund um einen Block, der für sich steht. Was sich strecken kann, streckt sich:

- Balken und Flächen reichen von Kante zu Kante.
- Text mit fester Breite (Automatische Höhe oder Feste Größe) bricht auf seine neue Breite um, und Text, der so breit ist wie seine Wörter, wächst und schrumpft als Ganzes. Auf einer Seite wird eine Textspalte nur so breit, dass ihre Zeilen eine gut lesbare Länge behalten.
- Einfache Formen nehmen jede Größe an, und Linien strecken sich der Länge nach.
- Ein Bild wird neu um das zugeschnitten, was es zeigt. Bezzle schaut sich jedes Bild auf deinem Mac an, um zu finden, was den Blick anzieht, und ein freigestelltes Bild (eines mit durchsichtigem Grund) wird nach seinem Motiv platziert.

Wo das Design nicht mehr passt, wie es ist, wird es neu geordnet. Ein Bild über seinem Text rückt in einem breiten Format neben ihn und in einem hohen wieder darüber. Karten in einer Reihe brechen in ein Raster mit mehr Zeilen um, die Zellen werden breiter, um die Reihe zu füllen, wo sie können, und Bezzle lässt eine letzte Reihe ungern mit weniger als der Hälfte ihrer Zellen stehen. Die Anordnung ändert es nur, wenn eine andere deutlich besser zur Größe passt, darum flackert ein Ziehen hin und her nicht zwischen zwei Anordnungen.

### Eine Zeichenfläche skalieren {#resize-artboard}

Jeder Weg, einer Zeichenfläche eine Größe zu geben, legt ihr Design neu an:

- **Ziehen** an einem Rand- oder Eckgriff auf der Arbeitsfläche. Halt {{⇧}}, um die Proportionen zu behalten, und {{⌥}}, um von der Mitte aus zu skalieren, wie bei jeder Ebene.
- **Tippen** einer Breite oder Höhe in der Karte Frame.
- **Wählen einer Größe** unter {Größe} in der Karte Zeichenfläche. Zeigst du im Menü auf eine Größe, zeigt die Arbeitsfläche die Zeichenfläche schon vor der Wahl in dieser Größe, ihr Design bereits dafür angelegt. (Die Vorlagen stehen unter [Größen und Vorlagen](/docs/canvas.html#presets).)

Während du an einem Rand ziehst, zeigt Bezzle schwach, was es vom Design verstanden hat: jeden Block umrandet, jeden lockeren Abstand als Feder, die sich mit dem Raum, den sie bekommt, dehnt und staucht, und jeden engen Abstand als Klammer, die zwei Blöcke zusammenhält. Wird das Design anders angeordnet, pulsieren die Umrisse, und das Trackpad gibt einen Tipp. Ändert sich eine Anordnung oder nimmt die Zeichenfläche eine Größe an, die du gewählt hast, wandert jede Ebene an ihren neuen Platz, nähere einen Moment vor ferneren; nichts springt.

Ein Skalieren ist ein einziger Schritt zum Widerrufen, wie lange das Ziehen auch dauert.

### Zurück zu einer Größe {#remembered}

Dasselbe Design in derselben Größe ist immer dasselbe Design: Nichts bewegt sich, bevor sich die Größe ändert. Und zurück zur Größe, in der ein Design gemacht wurde, bekommst du es genau wieder. Solange du eine Zeichenfläche so lässt, wie sie angelegt wurde, wird ihre nächste Größe aus dem Design angelegt, wie du es gemacht hast, nicht aus dem letzten Schritt auf dem Weg, darum nutzt sich das Design nie ab, wenn du Größen hin und her probierst.

Bezzle merkt sich das für die 64 Zeichenflächen, die du zuletzt skaliert hast, solange es offen ist. Sobald du auf einer skalierten Zeichenfläche etwas änderst, ist das Design, wie es jetzt ist, der Ausgangspunkt für die nächste Größe.

### Ebenen an ihrem Platz halten {#adapt-off}

{Layout anpassen} in der Karte Zeichenfläche ist anfangs für jede Zeichenfläche eingeschaltet. Schalte es aus, wenn eine Zeichenfläche nur eine neue Größe annehmen soll. Ihre Ebenen bleiben dann, wo sie sind: Ziehen an ihrem linken oder oberen Rand lässt sie, wo sie auf der Arbeitsfläche sind, und eine getippte oder gewählte Größe lässt sie, wo sie von oben links aus sind. Schalte es wieder ein, damit die nächste Größe neu angelegt wird. {Inhalt beschneiden}, gleich daneben, entscheidet, ob abgeschnitten wird, was über den Rand hinausreicht.

### In Kopien von Komponenten {#inside-copies}

Eine Kopie einer Komponente wird nach ihren eigenen Regeln angelegt, wenn du sie größer oder kleiner machst: Eine Ebene, die den größten Teil der Kopie überspannt, streckt sich mit, eine in ihrer Mitte bleibt in der Mitte, eine nahe an einer Kante bleibt gleich weit von dieser Kante, und ein Button wächst um seine Beschriftung. [Komponenten](/docs/components.html#copy-resizing) erklärt es ganz.

## Karussells {#carousels}

Ein Karussell ist eine Zeichenfläche aus Folien nebeneinander, als Ganzes gestaltet, damit das, was von einer Folie in die nächste läuft, über den Schnitt hinweg aufeinanderpasst. Es ist immer eine ganze Zahl von Folien breit und eine Folie hoch und wird als ein Bild pro Folie exportiert. [Die Seite über die Arbeitsfläche](/docs/canvas.html#carousels) zeigt, wie Karussells auf der Arbeitsfläche aussehen und sich verhalten.

Um eins zu machen, wähl ein Karussellformat am Ende des Menüs {Größe} in der Karte Zeichenfläche. Ein neues Karussell beginnt mit 3 Folien, oder mehr, wenn die Zeichenfläche schon breiter ist. Seine Karte heißt dann {Karussell}:

::: fields
- **Format**: {Hochkant 4:5}, {Quadrat 1:1}, {Hoch 3:4} oder {Story 9:16}, oder {Einfache Zeichenfläche}, um es wieder zu einer gewöhnlichen Zeichenfläche zu machen.
- **B**, **H**: die Größe jeder Folie, in ganzen Pixeln, für Proportionen, die keines der Formate hat.
- **Folien**: die Knöpfe Minus und Plus und ein Feld, 1 bis 20, so viele, wie Instagram nimmt. Folien kommen rechts dazu und werden rechts weggenommen.
:::

| Format | Foliengröße | Für |
| --- | --- | --- |
| Hochkant 4:5 | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| Quadrat 1:1 | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| Hoch 3:4 | 1080 × 1440 | Instagram |
| Story 9:16 | 1080 × 1920 | TikTok |

Ziehen an der Seite eines Karussells fügt ganze Folien hinzu oder nimmt sie weg, eine mehr, sobald der Zeiger die Hälfte der nächsten passiert. Ziehen an seiner Ober- oder Unterkante bestimmt die Höhe der Folien und rastet an den Proportionen jedes Formats ein. Ein Karussell wird nie neu angelegt: Seine Ebenen bleiben, wo sie sind, und auch die jenseits der letzten Folie bleiben, unsichtbar, bis es wieder wächst. Die Kanten und Mitten seiner Folien lassen einrasten, was du bewegst, und ein Layoutraster wiederholt sich auf jeder Folie.

## Befehle und Tasten {#commands}

| Befehl | Wo | Tasten |
| --- | --- | --- |
| Layoutraster ein- oder ausblenden | {Layoutraster} in der Menüleiste | {{⌃G}} |
| Ein Wiederholungsraster erstellen | {Objekt › Wiederholungsraster erstellen} | {{⌘R}} |
| Die Gruppierung eines Wiederholungsrasters aufheben | {Objekt › Rastergruppierung aufheben} | {{⇧⌘R}} |
| Rasterzellen in beide Richtungen verteilen | Einen Abstand ziehen mit | {{⇧}} |
| Ein Raster in Schritten von 15° drehen | Außerhalb einer Ecke ziehen mit | {{⇧}} |
| Ein Ziehen abbrechen | Beim Ziehen | {{Esc}} |

Weiter: Bau Teile, die sich durch ein ganzes Design wiederholen, mit [Komponenten und Stilen](/docs/components.html), oder staple viele Beiträge auf einer Zeichenfläche mit [Stapeln](/docs/decks.html).
