---
title: Komponenten, Stile und Bibliotheken
nav: Komponenten und Stile
lede: Gestalte ein Teil einmal und nutze es überall. Kopien einer Komponente ändern sich gemeinsam, benannte Farben, Schriften, Schatten und Ecken bleiben überall gleich, wo sie verwendet werden, und jedes Design kann seine Komponenten und Stile einem anderen leihen.
---

Ein Design bleibt einheitlich, wenn seine Teile einmal gemacht sind. Bezzle hat dafür zwei Wege. Eine **Komponente** ist ein ganzes Teil, etwa ein Button, eine Karte oder eine Navigationsleiste, das an vielen Stellen verwendet wird: Ändere eine beliebige Kopie, und jede Kopie folgt. Ein **Stil** ist ein einzelner Look mit einem Namen, etwa ein Markenblau, eine Überschriftenschrift oder ein weicher Schatten: Ändere ihn irgendwo, und er ändert sich überall. Keins von beiden muss eingerichtet werden, und jedes Design auf deiner Startseite kann seine Komponenten und Stile mit den anderen teilen.

## Komponenten {#components}

Jede Stelle, an der eine Komponente verwendet wird, ist eine Kopie, und keine Kopie ist das Original. Was immer du in einer Kopie änderst, ihr Aussehen, die Ebenen darin, wo sie in ihr liegen, ändert sich in jeder anderen Kopie, während du arbeitest. Was eine Kopie enthält, gehört ihr: ihre Texte und ihre Bilder. Wo eine Kopie liegt, wie groß sie ist, wie weit sie gedreht und ob sie gespiegelt ist, gehört ebenfalls ihr.

So kannst du einen Screen aus zehn Kopien eines Buttons bauen, jedem seine eigene Beschriftung geben und dann alle zehn runder machen, indem du einen davon änderst.

::: figure components
Ändere eine Kopie, und jede Kopie folgt.
:::

Auf der Arbeitsfläche ist eine Kopie violett statt bleistiftblau umrandet, und in der Ebenenliste trägt sie ein violettes Zeichen aus vier kleinen Rauten. Ist eine Kopie ausgewählt, steht der Name ihrer Komponente über ihrer linken oberen Ecke (und die Variante, die sie zeigt, sobald es mehrere gibt), und jede andere Kopie ist schwach gestrichelt umrandet, so siehst du, was sich ändern wird, bevor du etwas änderst.

### Eine Komponente erstellen {#make-component}

::: steps
1. **Wähl aus, woraus die Komponente besteht.** Eine Gruppe oder mehrere Ebenen auf einer Zeichenfläche (oder auf der Arbeitsfläche).
2. **Wähl {Objekt › Komponente erstellen}** ({{⌥⌘K}}), oder klick mit der rechten Maustaste und wähl {Komponente erstellen}.
3. **Gib ihr einen Namen.** Die Auswahl ist jetzt die erste Kopie. Öffne ihre Karte Komponente, um der Komponente einen eigenen Namen zu geben.
:::

Eine einzelne Gruppe wird so, wie sie ist, zur Komponente, wo immer sie liegt, sogar als Zelle eines Wiederholungsrasters. Alles andere wird zuerst in eine Gruppe gelegt. Die Komponente bekommt den Namen der Gruppe oder Ebene, die du ausgewählt hast, oder bei mehreren Ebenen `Komponente 1`, `Komponente 2` und so weiter.

Aus einer Zeichenfläche, einer gesperrten Ebene, einer Kopie selbst oder aus Ebenen in einer Kopie lässt sich keine Komponente machen. Kopien anderer Komponenten können in eine neue hinein, so wie Buttons in eine Karte.

Gleich danach sucht Bezzle im Design nach Gruppen, die gleich aussehen: dieselben Ebenen, in jeder Hinsicht gleich bis auf ihre Lage, ihre Größe und ihre Texte und Bilder. Findet es welche, sagt ein Hinweis unter der Kopie zum Beispiel `3 weitere sehen gleich aus`, mit {Verknüpfen}. Klick darauf, und diese Gruppen werden ebenfalls zu Kopien, jede mit ihren eigenen Texten und Bildern. Das Angebot bleibt etwa acht Sekunden stehen.

### Weitere Kopien platzieren {#placing-copies}

- **Dupliziere** eine Kopie ({{⌘D}}), oder kopier sie und setz sie ein: Was dabei herauskommt, ist eine weitere Kopie.
- **Aus den Ressourcen**: Die eigenen Komponenten des Designs stehen zuerst in seinem Regal, jede so gezeichnet, wie eine neue Kopie aussähe, mit der Anzahl der Kopien, die das Design hat. Klick auf eine, um eine Kopie in die Mitte der sichtbaren Zeichenfläche zu setzen, oder zieh sie auf die Arbeitsfläche. Siehe [die Ressourcen](#resources-panel).
- **In einem Wiederholungsraster oder einem Stapel**: Eine Kopie, die sich in den Zellen eines Rasters oder den Beiträgen eines Stapels wiederholt, ist in jeder Zelle und jedem Beitrag eine Kopie der Komponente.

### Eine Komponente ändern {#changing}

Um eine Komponente zu ändern, änderst du eine ihrer Kopien, wie du jede Gruppe ändern würdest: Wähl eine Ebene darin aus und gib ihr eine neue Füllung, verschieb sie, skalier sie, füg eine Ebene hinzu oder lösch eine. Erreicht die Änderung die anderen Kopien, läuft ein Licht von der geänderten Kopie über die Arbeitsfläche, und jede Kopie leuchtet auf, sobald das Licht sie erreicht, die nächste zuerst. Was gefolgt ist, zeigt sich, und sonst nichts.

Was eine Kopie für sich behält, was immer du mit den anderen machst:

- **Ihre Texte und Bilder.** Tipp eine neue Beschriftung in einen Button, und nur dieser Button sagt sie.
- **Ihre Lage, Größe, Drehung und Spiegelung als Ganzes.** Verschieb oder skalier eine Kopie, und die anderen bleiben, wo sie sind.
- **Was immer du ihr zu behalten gesagt hast.** Siehe [Was eine Kopie für sich behält](#copy-own).

### Was nach einer Änderung angeboten wird {#offers}

Nach einer Änderung an einer Kopie erscheint daneben ein Hinweis (oder darunter, wo kein Platz ist) mit einem oder zwei Knöpfen, um einzugrenzen, was die Änderung erreicht hat, oder um es auszuweiten. Er verschwindet nach etwa acht Sekunden oder sobald du an etwas anderem arbeitest.

| Du hast geändert | Bezzle sagt | Knöpfe |
| --- | --- | --- |
| Wie etwas aussieht, in einer Kopie der ersten Variante | `Alle 5 Kopien` | {Nur diese Kopie}, {Neue Variante} |
| Wie etwas aussieht, in einer Kopie einer anderen Variante | `Nur` und den Namen der Variante, etwa `Nur Variante 2` | {Nur diese Kopie}, {In allen Varianten} |
| Den Text oder das Bild einer Ebene, die noch die der Komponente hatte | `Nur in dieser Kopie` | {In allen 5} |
| Eine neue Komponente, mit Gruppen, die gleich aussehen | `3 weitere sehen gleich aus` | {Verknüpfen} |

- {Nur diese Kopie} behält die Änderung nur in dieser Kopie und setzt jede andere Kopie zurück, wie sie war.
- {Neue Variante} macht die Kopie, wie sie jetzt ist, zu einer neuen Variante der Komponente und setzt die anderen Kopien zurück.
- {In allen Varianten} gibt die Änderung jeder Variante, nicht nur der, die diese Kopie zeigt.
- {In allen 5} gibt den neuen Text oder das neue Bild jeder Kopie und der Komponente selbst.

### Was eine Kopie für sich behält {#copy-own}

Wählst du {Nur diese Kopie}, behalten die Ebenen, die du geändert hast, das Geänderte von da an, was immer die anderen Kopien tun. Wählst du eine solche Ebene aus, listet die Karte {Nur in dieser Kopie} auf, was sie behält (zum Beispiel `Füllung, Ecken`), und bietet {Angleichen} an, womit sie der Komponente wieder folgt. Dasselbe steht im Kontextmenü als {Den anderen Kopien folgen}.

Um alles auf einmal aufzuheben, was eine Kopie für sich behält, wähl {Objekt › Wie die anderen aussehen}, oder den gleichnamigen Knopf in der Karte Komponente oder im Kontextmenü. Ihre Texte und Bilder bleiben; alles andere folgt wieder der Komponente. Der Befehl steht nur zur Verfügung, wenn die Kopie außer ihren Texten und Bildern etwas für sich behält.

Umgekehrt: Klick mit der rechten Maustaste auf einen Text oder ein Bild in einer Kopie und wähl {In jeder Kopie gleich}, um seinen Text oder sein Bild jeder Kopie der Komponente zu geben, und der Komponente selbst.

### Wie die Ebenen einer Kopie in eine neue Größe passen {#copy-resizing}

Machst du eine Kopie größer oder kleiner als ihre Komponente, legt Bezzle ihre Ebenen danach an, wo jede in der Komponente liegt, darum muss nichts eingerichtet werden:

- Eine Ebene, die mindestens die Hälfte der Kopie überspannt, in einer Richtung, in der sie sich strecken kann, streckt sich mit.
- Eine Ebene in der Mitte bleibt in der Mitte.
- Eine Ebene, die höchstens ein Viertel des Weges von einer Kante entfernt liegt, bleibt gleich weit von dieser Kante.
- Jede andere Ebene behält ihren Anteil am Weg, wie es die Tabs einer Leiste tun.

Text streckt sich nur in der Breite, wenn er eine feste Breite hat ([Automatische Höhe](/docs/text.html#auto-height) oder [Feste Größe](/docs/text.html#fixed-size)), und nur in der Höhe, wenn er Feste Größe hat; gedrehte Ebenen und Wiederholungsraster werden verschoben, nie gestreckt. Eine Kopie einer anderen Komponente in der Kopie wird von ihrer eigenen Komponente angelegt.

Eine Kopie wächst auch um ihren Text herum. Liegt eine Form, etwas größer als eine Beschriftung, um sie herum, so wie ein Button um seinen Text liegt, und tippst du eine längere Beschriftung, wächst die Kopie um so viel: nach links bei linksbündigem Text, nach rechts bei rechtsbündigem und um die Mitte bei zentriertem Text oder Text in der Mitte seiner Form. Ein Feld oder eine Leiste, viel breiter als das, was darin steht, bleibt, wie es ist.

### Varianten {#variants}

Eine Komponente kann Varianten haben: dasselbe Teil in einem anderen Zustand oder Stil, etwa ein Button, der primär, sekundär oder deaktiviert ist. Jede Variante hat dieselben Ebenen, und jede sieht aus, wie sie will. Eine Kopie zeigt eine Variante, und du kannst sie jederzeit auf eine andere umstellen; ihre Texte und Bilder kommen mit.

Eine Variante entsteht auf zwei Wegen:

- **Bevor du etwas änderst.** Wähl eine Kopie aus und wähl {Objekt › Neue Variante}, klick auf die gestrichelte Kachel {Neue Variante} in der Karte Komponente, oder wähl {Neue Variante} im Kontextmenü. Die Kopie zeigt jetzt eine neue Variante, genau so, wie sie aussah. Ändere sie, wie die Variante aussehen soll: Was du darin änderst, bleibt in der neuen Variante.
- **Nach einer Änderung.** Ändere eine Kopie, und wenn der Hinweis darunter sagt, dass die Änderung jede Kopie erreicht hat, klick dort auf {Neue Variante}. Die Kopie, wie sie jetzt ist, wird zur neuen Variante, und die anderen Kopien werden wieder, wie sie waren.

Eine Kopie auf eine andere Variante umstellen:

- **In der Karte Komponente**: Die Varianten sind Kacheln, drei pro Reihe, jede so gezeichnet, wie diese Kopie als diese Variante aussähe. Zeig auf eine Kachel, um die Kopie auf der Arbeitsfläche dazu werden zu sehen; klick, um es zu übernehmen.
- **Auf der Arbeitsfläche**: Sobald eine Komponente zwei oder mehr Varianten hat, liegt eine Reihe davon neben der ausgewählten Kopie (oder darunter, wo kein Platz ist), am Ende ein runder Knopf, der eine neue Variante macht. Zeigen und klicken wie in der Karte.
- **Im Kontextmenü**: jede Variante mit Namen, die gezeigte mit Häkchen.

Wechselt eine Kopie zu einer Variante, die größer oder kleiner ist, wächst oder schrumpft sie an ihren Kanten um so viel und behält dabei ihren eigenen Text.

Eine Änderung in einer Kopie einer Variante bleibt in dieser Variante, und die Kopien, die andere Varianten zeigen, bleiben, wie sie sind; das Angebot {In allen Varianten} gibt sie allen. Eine Änderung in einer Kopie der ersten Variante erreicht jede Variante, außer was eine Variante für sich behält.

Die erste Variante heißt `Standard`, die anderen `Variante 2`, `Variante 3` und so weiter, bis du sie benennst. Doppelklick auf eine Kachel, um sie umzubenennen, oder Rechtsklick für {Umbenennen} und {Variante löschen}. Die erste Variante lässt sich nicht löschen. Wird eine Variante gelöscht, zeigen ihre Kopien die erste Variante.

### Die Karte Komponente {#component-card}

Wähl eine Kopie oder eine beliebige Ebene darin aus, und die Karte Komponente erscheint.

::: fields
- **Die zugeklappte Zeile**: die Variante, die die Kopie zeigt, wenn es mehrere gibt, sonst der Name der Komponente. Bei mehr als einer Kopie gehen Pfeile ({Die Kopie davor}, {Die Kopie danach}) und `2 von 7` durch jede Kopie in Lesereihenfolge: Zeichenfläche für Zeichenfläche, dann von oben, dann von links. Jede wird ausgewählt und ins Bild geholt, und ein Stapel wird zu dem Beitrag geblättert, der sie enthält.
- **Name**: wie die Komponente heißt. Benennst du sie um, werden alle Kopien umbenannt, die noch nach ihr heißen.
- {Aus „Design System“}: erscheint, wenn die Komponente aus einem anderen Design übernommen wurde, mit dem Namen dieses Designs.
- **Varianten**: die Kacheln, die unter [Varianten](#variants) beschrieben sind, die gezeigte violett umringt, und die gestrichelte Kachel {Neue Variante}.
- {Wie die anderen aussehen}: erscheint, wenn die Kopie außer ihren Texten und Bildern etwas für sich behält.
- Das **×** ({Von der Komponente lösen}): erscheint, wenn die Kopie selbst ausgewählt ist, nicht eine Ebene darin. Es löst die Kopie.
:::

Zeigst du auf die Karte, wird jede Kopie auf der Arbeitsfläche umrandet.

### Komponenten in Komponenten {#nested}

Eine Kopie kann Kopien anderer Komponenten enthalten, so wie eine Karte Buttons enthält. Änderst du einen Button in einer Karte, änderst du die Komponente des Buttons, also folgt jeder Button, in jeder Karte und für sich allein. Wo der Button in der Karte liegt, wie groß er ist und welche Variante er zeigt, gehört der Karte.

Eine Komponente kann nie eine Kopie ihrer selbst enthalten, wie tief auch immer: Bezzle löst, was eine solche ergeben würde.

### Lösen und löschen {#unlink}

{Objekt › Kopie lösen}, oder {Kopie lösen} im Kontextmenü, oder das × in der Karte Komponente, macht die ausgewählten Kopien zu Gruppen wie jede andere. Sie sehen aus wie vorher und ändern sich nicht mehr mit der Komponente. Kopien anderer Komponenten darin bleiben Kopien ihrer Komponenten.

Um eine Komponente selbst zu löschen, klick sie im Regal der Ressourcen mit der rechten Maustaste an und wähl {Komponente löschen}. Sie verlässt das Design, und jede ihrer Kopien bleibt, als Gruppe wie jede andere.

## Stile {#styles}

Ein Stil ist ein Look, dem das Design einen Namen gegeben hat. Es gibt vier Arten:

| Art | Was er enthält | Wohin er passt |
| --- | --- | --- |
| Farbe | Eine Farbe oder die Farben eines Verlaufs | Jede Füllung, die Farbe eines Rahmens, die Farbe von Buchstaben, den Hintergrund einer Zeichenfläche |
| Schrift | Schrift, Schnitt, Größe, Zeilen- und Zeichenabstand, Absatzabstand, Groß- und Kleinschreibung, Unterstreichung, Durchstreichung, Schriftfunktionen und Achsen | Eine Textebene |
| Schatten | Farbe, X, Y, Unschärfe, Ausbreitung und ob er nach innen fällt | Jeden Schatten |
| Ecken | Ein Radius für alle vier Ecken und wie weich sie in die Seiten übergehen | Ein Rechteck |

Ein Stil enthält nur den Look. Jede Ebene behält, was ihr gehört: ob eine Füllung oder ein Schatten eingeschaltet ist, wo ein Verlauf über sie läuft, wo ihr Text in seinem Kasten liegt und wie der Kasten seine Größe findet. Ein Farbstil lässt sich nicht auf eine Füllung legen, die ein Bild zeigt.

Wo immer ein Stil verwendet wird, ist er derselbe, und eine Änderung an ihm, wo auch immer, auf einer Ebene, die ihn hat, oder in der Liste der Stile des Designs, ist eine Änderung überall.

### Einen Look benennen {#name-look}

::: steps
1. **Wähl eine Ebene aus** und öffne die Karte des Looks, den du benennen willst: eine Füllung, einen Rahmen, einen Schatten, die Karte Text, die Karte Ecken oder den Hintergrund einer Zeichenfläche.
2. **Klick auf den gestrichelten Chip {+ Stil}** oben auf der Karte. Er wird zu einem Feld, in dem schon ein Name steht.
3. **Tipp einen Namen oder behalt den vorgeschlagenen und drück {{Return}}.** {{Esc}} lässt den Look ohne Namen. Ein Klick anderswohin behält einen getippten Namen und verwirft den vorgeschlagenen, wenn du ihn unverändert gelassen hast.
:::

Der vorgeschlagene Name sagt, was der Look ist: der Alltagsname einer Farbe (`Blau`, `Hellgrau`, `Elfenbein`, `Dunkelgrün`), `Verlauf`, wofür eine Schriftgröße meist dient (`Display` ab 48 Punkt, dann `Titel`, `Überschrift`, `Zwischentitel`, `Fließtext`, `Klein` und `Bildunterschrift` unter 12), der Name einer Vorlage für Schatten oder Ecken, der er entspricht (`Weich`, `Angehoben`), oder sonst `Schatten` oder `Ecken 10`. Hat ein anderer Stil derselben Art den Namen schon, folgt eine Zahl (`Blau 2`). Namen haben höchstens 60 Zeichen.

Die ausgewählten Ebenen bekommen den Namen. Sehen weitere Ebenen im Design gleich aus, bietet ein Hinweis an, sie ebenfalls zu benennen, zum Beispiel `4 weitere Ebenen sehen gleich aus`, mit {Auch benennen}.

Ist er benannt, zeigt die zugeklappte Zeile der Karte den Namen in Bleistiftblau hinter einer kleinen Raute, statt der Zahlen, und das Bild der Karte ist umringt.

### Einen Stil verwenden {#use-style}

Eine offene Karte bietet zuerst die Stile des Designs ihrer Art an, als Chips. Zeig auf einen Chip, um ihn an der Auswahl zu sehen und jede Ebene umrandet zu sehen, die ihn schon verwendet; klick darauf, um ihn der Auswahl zu geben. Hat ein Design mehr als sechs Stile der Art, zeigt die Karte die ersten fünf und einen Chip mit der Anzahl der übrigen; klick darauf, um alle zu sehen, und auf {Weniger}, um sie wieder einzuklappen.

Bekommt ein Text einen Schriftstil, übernimmt ihn der ganze Text: Buchstaben, die du in einer anderen Schrift oder Größe abgesetzt hattest, folgen wieder dem Stil.

Der Chip des Stils, den die Auswahl hat, ist bleistiftblau gefüllt. Doppelklick darauf, um den Stil umzubenennen. Sein kleines × ({Den Look behalten, ohne seinen Namen}) behält den Look auf der Auswahl, nimmt aber den Namen weg.

### Einen Stil ändern {#change-style}

Einen Stil änderst du auf zwei Wegen, und beide ändern jede Ebene, die ihn verwendet.

- **Über eine beliebige Ebene, die ihn hat.** Ändere die Füllung, die Schrift, den Schatten oder die Ecken einer Ebene, die nach einem Stil benannt ist, und der Stil ändert sich, und mit ihm jede andere Ebene, die ihn hat. Die Änderung läuft als Licht über sie, von dort aus, wo du sie gemacht hast. Ein Hinweis sagt dann zum Beispiel `Auch auf 12 weiteren Ebenen`, mit {Nur hier}: Klick darauf, um die Änderung nur auf den ausgewählten Ebenen zu behalten, die dann den Namen verlieren, und um den Stil zurückzusetzen, wie er war.
- **Im Stil-Kit**, wenn nichts ausgewählt ist (siehe unten).

Ein Rechteck, dessen Ecken du unterschiedlich machst, hat eigene Ecken: Es verlässt seinen Eckenstil.

### Das Stil-Kit {#style-kit}

Klick auf eine leere Stelle der Arbeitsfläche, sodass nichts ausgewählt ist, und der Inspektor zeigt die Stile des Designs, eine Karte für jede Art, die es hat, über der Liste der Werkzeuge (mit dem Werkzeug Zeichenfläche in der Hand zeigt er stattdessen Größen für Zeichenflächen):

- **Farben** als Farbmuster, drei pro Reihe, mit Namen und Hex-Code (oder `Verlauf`) auf dem Streifen darunter.
- **Schriften** in sich selbst gesetzt, mit ihrer Größe.
- **Schatten** und **Ecken** als kleine Kacheln, vier pro Reihe.

Zeig auf einen Stil, um ihn anzuheben, jede Ebene umrandet zu sehen, die ihn verwendet, und wie viele es sind. Klick darauf, um ihn zu öffnen und zu ändern:

::: fields
- **Name**: benennt ihn um. {{Return}} behält den neuen Namen.
- Das **×** ({Stil entfernen}): nimmt den Stil weg.
- **Hell und dunkel**: eine Sonne und ein Mond, um zu wählen, welchen Look du änderst, bei Farben und Schatten, solange das Design etwas Dunkles hat. {Automatisch} lässt den dunklen Look wieder dem hellen folgen. Siehe [Hell und dunkel](/docs/dark.html).
- **Eine Farbe**: die Farbauswahl. Ein Verlaufsstil wird gezeigt, aber über eine Ebene geändert, die ihn hat.
- **Eine Schrift**: das Schriftmenü (tipp, um eine Schrift zu finden), der Schnitt, die Größe (1 bis 2.000 pt), Abstand der **Zeile** (0 bis 4.000) und der **Zeichen** (−500 bis 2.000).
- **Ein Schatten**: seine Farbe, **X** und **Y** (−1.000 bis 1.000), **U** für die Unschärfe (0 bis 1.000) und **Ausbreitung** (−1.000 bis 1.000).
- **Ecken**: {Rund} oder {Squircle} und **R**, der Radius (0 bis 10.000).
:::

Jede Änderung geht an jede Ebene, die den Stil hat, während du sie machst.

### Looks ohne Namen {#found-looks}

Hinter den Stilen jeder Karte des Kits warten, gestrichelt, die Looks, die zwei oder mehr Ebenen ohne Namen gemeinsam haben, die meistgenutzten zuerst: bis zu acht Farben und bis zu vier jeder anderen Art. Jeder sagt, wie viele Ebenen ihn haben (`×6`). Zeig auf einen, um diese Ebenen zu umranden; klick darauf, um ihn zu benennen, und jede dieser Ebenen bekommt den Namen auf einmal. Der neue Stil öffnet sich, mit seinem Namen bereit zum Tippen.

Ein Design muss für nichts davon eingerichtet werden: Benenne, was du sich wiederholen siehst, wenn du es siehst.

### Einen Stil oder seinen Namen entfernen {#remove-style}

- **Das × auf dem Chip eines Stils** in einer Karte: Die ausgewählten Ebenen behalten ihren Look, ohne den Namen.
- **{Stil entfernen}** im Stil-Kit: Der Stil verschwindet, und jede Ebene, die ihn verwendet hat, sieht weiter aus, wie sie aussieht, ohne Namen.

### Stile als Code {#tokens}

Ist im Modus Prototyp oder [Untersuchen](/docs/inspect.html#tokens) nichts ausgewählt, zählt die Karte **Code** die Stile des Designs als Tokens und kopiert sie mit einem Klick als {CSS} (Custom Properties wie `--color-brand-blue`, mit einer Klasse für jede Schrift), {SwiftUI} (Konstanten) oder {JSON} (das Format der W3C Design Tokens). Der dunkle Look jedes Stils kommt mit, wo immer das Design einen hat.

## Bibliotheken {#libraries}

Jedes Design ist eine Bibliothek für jedes andere, ohne dass etwas einzurichten oder zu veröffentlichen wäre. Seine Komponenten und Stile lassen sich aus den Ressourcen in jedes andere Design übernehmen, und sie kommen mit, wenn du seine Ebenen in ein anderes Design einsetzt.

Einmal übernommen, gehört eine Komponente oder ein Stil dem anderen Design und wird dort verwendet und geändert wie alles Eigene. Beide merken sich nur, woher sie kamen und wie sie dort damals waren. Nichts ändert je ein anderes Design von selbst.

### Aus einem anderen Design übernehmen {#taking}

::: steps
1. **Öffne die Ressourcen** ({Ressourcen einblenden} in der Menüleiste, {{⇧⌘Y}}).
2. **Klick im Regal auf das andere Design.** Aufgeführt sind die Designs deiner Startseite, die eigene Komponenten oder Stile haben, jedes mit ein paar seiner Komponenten und seinen Farben auf dem Umschlag und der Anzahl der Dinge, die es enthält.
3. **Nimm, was du brauchst.** Zuerst kommen seine Stile, je zwei nebeneinander, dann seine Komponenten.
:::

- **Eine Komponente**: Klick darauf, um eine Kopie in die Mitte der sichtbaren Zeichenfläche zu setzen, oder zieh sie auf die Arbeitsfläche. Sie bringt die Komponenten mit, von denen sie Kopien enthält, und die Stile, die sie verwendet, und ihre Bilder werden in dein Design kopiert. Einmal übernommen, trägt sie die Raute der Komponente, und nimmst du sie noch einmal, entsteht eine weitere Kopie der Komponente deines Designs.
- **Ein Stil**: Zeig darauf, um ihn an der Auswahl zu sehen; klick, um ihn der Auswahl zu geben, was ihn in dein Design holt. Er kommt dorthin, wo die offene Karte ist, wenn sie seine Art hat, sonst auf die erste Füllung (bei einem Text die Buchstaben), die Schrift, den ersten Schatten oder die Ecken, und diese Füllung oder dieser Schatten wird eingeschaltet. Ist nichts ausgewählt, holt ein Klick den Stil nur herein, um ihn aus deinen eigenen Stilen zu verwenden. Schon übernommene Stile tragen einen Punkt.

Auf der Seite eines Designs findet das Suchfeld oben in den Ressourcen seine Komponenten und Stile nach Namen.

Setzt du Ebenen ein, die aus einem anderen Design kopiert sind, kommen die Komponenten und Stile mit, die sie verwenden. Ein Stil, den dein Design schon hat, bleibt, wie er ist, und die eingesetzten Ebenen übernehmen seinen Look; ein Stil derselben Art und desselben Namens tritt an die Stelle eines Stils, den dein Design nicht hat; alles andere kommt mit.

### Wenn sich das andere Design ändert {#library-updates}

Hat sich etwas, das du übernommen hast, in dem Design geändert, aus dem es kam, sagt Bezzle es dir oben auf der Arbeitsfläche, wenn du dein Design öffnest oder wenn das andere Design gesichert wird: zum Beispiel `Neu in „Design System“: Button, Primary +2`, mit {Aktualisieren}.

- Zeig auf {Aktualisieren}, um dein Design auf den neuen Stand gebracht zu sehen, mit jeder Kopie und Ebene umrandet, die sich ändern würde.
- Klick auf {Aktualisieren}, um die Änderung zu übernehmen. Jede Kopie der Komponenten folgt, und jede Ebene, die nach den Stilen benannt ist, während jede Kopie behält, was ihr gehört. Ein einziger Schritt zum Widerrufen.
- Klick auf das × ({Nicht jetzt}), um es zu lassen, wie es ist. Es erscheint erst wieder, wenn es etwas Neueres gibt.

Dasselbe Angebot steht oben auf der Seite dieses Designs in den Ressourcen, für den Fall, dass du es beiseitegelegt hast, und seine Karte im Regal ist markiert. Änderungen, die du nur in deinem eigenen Design gemacht hast, sind nie eine Neuigkeit.

## Die Ressourcen {#resources-panel}

Die Ressourcen nehmen den Platz der Ebenenliste ein. Öffne sie mit dem Knopf Ressourcen in der Werkzeugleiste oder mit {Ressourcen einblenden} in der Menüleiste ({{⇧⌘Y}}); dasselbe noch einmal ({Ressourcen ausblenden}) legt sie weg und bringt die Ebenenliste zurück, wenn sie draußen war. Ihr Regal enthält, von oben nach unten:

1. **Die eigenen Komponenten des Designs**, mit der Anzahl ihrer Kopien. Rechtsklick auf eine für {Komponente löschen}.
2. **Andere Designs** mit eigenen Komponenten oder Stilen.
3. **Die Kits**: {Bezzle UI-Kit}, {iOS}, {macOS} und {Android}, jedes in Abschnitten wie Leisten, Schaltflächen, Steuerelemente und Textfelder.
4. **Die Symbolsätze**: Lucide, Phosphor und Material Symbols.

Klick auf eines davon, um seine Seite zu öffnen; klick oben auf {Ressourcen}, um zurückzugehen. Tipp im Regal in {Suchen}, um über alle Bibliotheken hinweg Komponenten anderer Designs nach Namen zu finden, Teile der Kits und die besten Symbole jedes Satzes (mit einer Anzahl, die sie alle öffnet); auf einer Seite bleibt die Suche auf dieser Seite. {{Esc}} leert die Suche.

### Teile der Kits {#kit-parts}

Jedes Teil ist so gezeichnet, wie es herauskommen wird, hell oder dunkel wie die Zeichenfläche, auf die es käme. Klick auf ein Teil, um es der sichtbaren Zeichenfläche hinzuzufügen, oder zieh es: Das echte Teil folgt dem Zeiger in seiner Größe, die Zeichenfläche, auf die es kommt, ist umrandet, und ein Etikett sagt, was beim Loslassen geschieht.

- **Leisten** (Statusleisten, Navigationsleisten, Tableisten, Symbolleisten) legen sich an die Ober- oder Unterkante der Zeichenfläche, so breit wie sie, unter oder über das, was schon an dieser Kante liegt: zuerst eine Statusleiste, dann eine Navigationsleiste darunter. Das Etikett sagt `Oben an iPhone 18 Pro`.
- **Listen, Felder und Schieberegler** strecken sich über die Zeichenfläche, mit einem Rand auf beiden Seiten, wo immer du sie in der Höhe loslässt: `Über die ganze Breite von iPhone 18 Pro`.
- **Alles andere** landet, wo du es loslässt, so, wie es gemacht wurde.

Teile strecken sich nur auf eine Zeichenfläche, die etwa so breit ist wie die, für die sie gemacht wurden; auf einer viel breiteren landen sie, wie sie sind. Ein Teil kommt dunkel, wenn die eigene Farbe der Zeichenfläche dunkel ist.

Ein Teil eines Kits ist eine Komponente. Fügst du eins zum ersten Mal einem Design hinzu, wird es zu einer Komponente des Designs, und jedes weitere Mal ist es eine weitere Kopie davon, wie dein Design sie dann hat. Ändere also eine Tableiste, und jede Tableiste folgt. Der helle und der dunkle Look eines Teils sind zwei Komponenten.

### Symbole {#icons}

Die Seite eines Symbolsatzes zeigt oben einen Streifen mit Stilen und darunter jedes Symbol, sechs pro Reihe. Lucide ist in Linien gezeichnet, in einer Strichstärke deiner Wahl ({Dünn}, {Leicht}, {Normal}, {Fett}, {Extrafett}); Phosphor gibt es {Dünn}, {Leicht}, {Normal}, {Fett} und {Gefüllt}; Material Symbols {Kontur} und {Gefüllt}. Der gewählte Stil bleibt für jeden Satz erhalten.

Klick auf ein Symbol, um es der sichtbaren Zeichenfläche hinzuzufügen, 24 Punkt im Quadrat, oder zieh es auf die Arbeitsfläche. Es kommt fast schwarz, oder fast weiß auf einer dunklen Zeichenfläche. Lass es über einem Symbol los, das schon da ist, und das neue tritt an seine Stelle und behält Farbe und Größe des alten; das Etikett nennt den Namen des alten Symbols mit `ersetzen`. Ein Symbol kommt als Pfad, den du bearbeiten kannst wie jeden anderen; siehe [Punkte bearbeiten](/docs/shapes.html#editing-points).

## Befehle und Tasten {#commands}

| Befehl | Wo | Tasten |
| --- | --- | --- |
| Eine Komponente erstellen | {Objekt › Komponente erstellen} | {{⌥⌘K}} |
| Neue Variante aus der ausgewählten Kopie | {Objekt › Neue Variante} | |
| Eine Kopie wieder ihrer Komponente folgen lassen | {Objekt › Wie die anderen aussehen} | |
| Eine Kopie zur einfachen Gruppe machen | {Objekt › Kopie lösen} | |
| Eine weitere Kopie | {Bearbeiten › Duplizieren} | {{⌘D}} |
| Die Ressourcen ein- oder ausblenden | {Ressourcen einblenden} in der Menüleiste | {{⇧⌘Y}} |

Weiter: Sieh unter [Hell und dunkel](/docs/dark.html), wie Stile einen eigenen dunklen Look bekommen, oder gib einer Kopie Zustände für einen Prototyp unter [Zustände einer Kopie](/docs/prototype.html#states).
