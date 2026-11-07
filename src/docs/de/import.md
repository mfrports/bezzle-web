---
title: Designs hereinholen
nav: Importieren
lede: Öffne Dateien aus Adobe XD, Figma, Sketch und Photoshop als Bezzle-Designs, mit ihren Zeichenflächen, Ebenen, Masken, Texten und Bildern, oder hol eine beliebige Webseite als Ebenen herein, und sieh in einem kurzen Bericht, was ein wenig anders aussieht.
---

Um in Bezzle zu arbeiten, musst du nicht von vorn beginnen. Eine Datei aus Adobe XD, Figma, Sketch oder Photoshop kommt als neues Design herein, das du bearbeiten kannst wie jedes andere, und eine Webseite kommt als Ebenen herein, eine Zeichenfläche für jede Breite, in der du sie liest. Alles, was Bezzle zeichnen kann, kommt herüber, wie es ist. Was es nur annähernd zeichnen kann, wird in einem Bericht gezählt, damit du weißt, was du prüfen solltest.

## Wege herein {#ways-in}

- **{Ablage › Aus XD, Figma, Sketch oder Photoshop importieren …}** oder {{⇧⌘I}}: ein Fenster, das nur diese Dateien zeigt. Du kannst mehrere auf einmal wählen. Seine Nachricht sagt: „Jede Datei wird zu einem neuen Design in deinem Bezzle-Ordner. Die Datei selbst bleibt unverändert.“
- **{Ablage › Öffnen …}** oder {{⌘O}}: öffnet Bezzle-Designs und diese Dateien gleichermaßen. Ebenso {Öffnen …} oben rechts auf der Startseite.
- **Leg die Dateien auf der Startseite ab.** Das Fenster sagt „Zum Öffnen loslassen“.
- **Leg sie auf dem Symbol von Bezzle** im Dock ab.
- **Im Finder** wählst du für die Datei Öffnen mit › Bezzle.
- **{Ablage › Von einer Website importieren …}** oder {{⌥⇧⌘I}}, oder {Von einer Website …} auf der Startseite: holt eine Webseite herein. Ziehst du einen Link aus einem Browser auf die Startseite, öffnet sich derselbe Dialog mit dieser Adresse. Siehe [Webseiten](/docs/import.html#websites).

| Aus | Datei | Bevor du sie hereinholst |
| --- | --- | --- |
| Adobe XD | `.xd` | Nichts. |
| Figma | `.fig` | In Figma mit Save local copy eine `.fig`-Datei sichern. |
| Sketch | `.sketch` | Gesichert mit Sketch 43 oder neuer. |
| Photoshop | `.psd`, `.psb` | Nichts. |

## Was geschieht {#what-happens}

Jede Datei wird zu einem **neuen Design** in deinem Ordner für Designs, benannt nach der Datei („Onboarding 2“, wenn der Name vergeben ist), und öffnet sich in einem eigenen Tab. Ihre Bilder werden ins Design kopiert, darum braucht es danach nichts mehr aus der Datei. Die Datei selbst bleibt genau, wie sie war.

Öffnest du dieselbe Datei noch einmal, kommt sie noch einmal herein, als weiteres neues Design. Änderungen, die du am ersten gemacht hast, bleiben im ersten.

Bezzle hat eine Arbeitsfläche, darum legt eine Datei mit mehreren Seiten diese darauf untereinander an: die erste, wo sie war, jede der anderen 800 Punkt unter der vorigen, links bündig. Das Design öffnet sich so gezoomt, dass alles hineinpasst.

Ein Photoshop-Dokument kann einen Moment dauern, da die Fotos eines Mockups groß sind. Während es gelesen wird, zeigt sein Tab das eigene Bild der Datei, wie der Finder es zeigt, das sich entwickelt wie ein Abzug: zuerst blass und weich, dann schärfer, während seine Ebenen gelesen werden, mit einer Haarlinie, wie weit es ist, und dem Namen der Ebene, bei der es gerade ist.

## Der Importbericht {#report}

Ist ein Design hereingekommen, sagt eine Karte unten auf der Arbeitsfläche, wie es gelaufen ist.

::: fields
- **Aus Figma übernommen**: die App, oder bei einer Webseite die Site.
- **Wie viel**: „4 Zeichenflächen und 312 Ebenen.“
- **Was zu prüfen ist**: „Alles wurde unverändert übernommen.“, oder „Einiges sieht hier etwas anders aus:“ mit einer Zeile für jedes Ding, das angenähert wurde, und wie oft, das häufigste zuerst. Die ersten fünf sind zu sehen; {3 weitere …} zeigt den Rest.
- **Schriften**: „Schriften, die auf diesem Mac fehlen, durch eine andere ersetzt:“ und ihre Namen. Installier sie, und der Text erscheint in ihnen; das Design fragt weiter mit Namen nach ihnen.
- **Fertig**: legt die Karte weg.
:::

Die Zeilen sind in einfachen Worten geschrieben, etwa „Winkelverläufe, als radiale gezeichnet“ oder „Einstellungsebenen weggelassen“. Der Abschnitt jeder App unten listet auf, was ihr Bericht sagen kann.

## Was aus XD, Figma und Sketch herüberkommt {#common}

- **Zeichenflächen** bleiben Zeichenflächen, in ihren Größen und an ihren Plätzen, und Ebenen, die lose auf der Arbeitsfläche liegen, bleiben lose.
- **Ebenen** behalten ihre Namen, ihre Reihenfolge und ihre Gruppen und bleiben ausgeblendet oder gesperrt, wie sie waren. Rechtecke, Ellipsen und Linien bleiben, was sie sind; alles andere Gezeichnete wird zum Pfad. Eine gedrehte Ebene behält ihre Drehung; eine, die so geneigt oder gestreckt ist, wie es ein Kasten mit einer Drehung nicht ausdrücken kann, wird zu einem Pfad ihres Umrisses.
- **Text** bleibt bearbeitbarer Text, in seinen Schriften, Größen, Farben und Abständen, anders gestaltete Wörter bleiben es, und seine Größenart ({Automatische Breite}, {Automatische Höhe} oder {Feste Größe}) bleibt, wie sie war. Apples San Francisco wird zur Schrift {System} von Bezzle.
- **Masken** werden zu denen von Bezzle: eine Gruppe, deren erste Form den Rest enthält, an ihrem Umriss abgeschnitten (siehe [Bilder und Fotos](/docs/pictures.html)). Eine Maske aus Text oder einer Linie schneidet nach ihrem Kasten.
- **Looks**: Farben, lineare und radiale Verläufe, Bilder, mehrere Füllungen auf einer Ebene, Rahmen, Schatten (auch innere), Unschärfen, Deckkraft und Füllmethoden.
- **Layoutraster und Hilfslinien** auf Zeichenflächen werden zu denen von Bezzle (siehe [Layout und jede Größe](/docs/layout.html)).
- **Komponenten und Symbole** kommen als das herein, was sie zeigen: eine Gruppe aus den Ebenen der Hauptkomponente mit den eigenen Änderungen jeder Instanz, Text und Bilder eingeschlossen. In Bezzle sind sie nicht miteinander verknüpft. Wie du sie wieder zu Komponenten machst, steht unter [Komponenten](/docs/components.html).

Was nicht herüberkommt: Links zwischen Screens (zeichne sie im [Modus Prototyp](/docs/prototype.html) neu) und geteilte Stile, die als die Looks hereinkommen, die sie geben, statt als benannte Stile.

## Adobe XD {#xd}

Eine XD-Datei kommt mit ihren Zeichenflächen und den Ebenen auf ihrer Montagefläche herein, Komponenteninstanzen als das, was sie zeigen, Masken, Layoutraster (ihre Spalten) und Hilfslinien. Wiederholungsraster werden zu [Wiederholungsrastern](/docs/layout.html) von Bezzle, von oben links gelesen, jede Zelle mit ihren eigenen Texten und Bildern; eines, dessen Zellen sich nicht gleichen, kommt als einfache Gruppe herein. Flächentext behält seinen Kasten ({Feste Größe}), Text mit automatischer Höhe wächst mit seinen Wörtern, und Punkttext ist {Automatische Breite}.

Was der Bericht sagen kann:

- Wiederholungsraster, als Gruppen übernommen
- Komponenteninstanzen ohne Hauptkomponente
- Masken, die nicht gefunden wurden
- Masken aus Text oder Linien, schneiden nach ihrem Begrenzungsrahmen
- Zusammengesetzte Formen ohne Umriss
- Abgerundete Polygonecken, spitz gezeichnet
- Gedrehte oder gestreckte radiale Verläufe
- Auf der Arbeitsfläche bemessene Verläufe, an der Ebene ausgerichtet
- Verläufe ohne Farben
- Gestreckte Texte, in der sichtbaren Größe gesetzt
- Schräggestellte Texte, aufrecht gesetzt
- Obere und untere Ränder von Layoutrastern, weggelassen
- Quadratische Raster, weggelassen
- Füllmethoden, die Bezzle nicht kennt, als „Normal“ gezeichnet
- Effekte, die Bezzle nicht kennt
- Formarten, Ebenenarten oder Füllungsarten, die Bezzle nicht kennt
- Bilder ohne Datei, oder Bilder, die in der Adobe-XD-Datei fehlen
- Zeichenflächen, die nicht gelesen werden konnten

## Figma {#figma}

Sichere in Figma mit Save local copy eine `.fig`-Datei und hol diese herein. Frames, die direkt auf einer Seite liegen, werden zu Zeichenflächen. Frames in Frames werden zu Gruppen, an ihrem Frame abgeschnitten, wenn sie beschneiden. Abschnitte (Sections) geben, was sie enthalten, an die Seite ab. Seiten werden untereinander angelegt. Instanzen kommen als das herein, was sie zeigen, mit ihren Überschreibungen und Komponenteneigenschaften angewendet.

Geglättete Ecken, zunehmende Unschärfen, die über eine Ebene hinweg wachsen, Hintergrundunschärfen, Layoutraster, Hilfslinien auf Frames, die auf der Seite liegen, und Textlisten kommen herüber. Text behält, ob er in der Breite, in der Höhe oder gar nicht wächst.

Was der Bericht sagen kann:

- Seiten, unter der ersten angeordnet
- Abschnitte, nur ihr Inhalt übernommen
- Komponenteninstanzen ohne Hauptkomponente
- Komponenten, die sich selbst enthalten, innen leer gelassen
- Als Ganzes skalierte Instanzen, ihr Inhalt in voller Größe
- Helligkeitsmasken, schneiden nach ihrer Form
- Alphamasken, schneiden nach ihrem Umriss
- Masken aus Text oder Linien, schneiden nach ihrem Begrenzungsrahmen
- Winkelverläufe, als radiale gezeichnet
- Rautenverläufe, als radiale gezeichnet
- Verläufe ohne Farben
- Füllungen unter einem Bild, weggelassen
- Mit den darunterliegenden verrechnete Füllungen, einfach darübergezeichnet
- Zugeschnittene Bilder, ganz gezeigt
- Gekachelte Bilder, füllen ihre Ebene einmal
- Gedrehte Bilder, aufrecht gezeigt
- Farblich angepasste Bilder, unverändert gezeigt
- Transparente Bilder, deckend gezeigt
- Transparente Zeichenflächen, deckend gezeichnet
- Schatten und Unschärfen auf Zeichenflächen, weggelassen
- Zunehmende Unschärfen mit Startwert, ab null gezeichnet
- Rahmen an abgerundeten Ecken, als Formen gezeichnet
- Rahmen mit unterschiedlicher Stärke je Seite, überall gleich gezeichnet
- Texte mit Rahmen, ohne Rahmen gezeigt
- Mit Verlauf gefüllte Texte, in dessen erster Farbe
- Mit Bild gefüllte Texte, in einer einfachen Farbe
- Texte mit mehreren Zeilen- oder Absatzabständen, wie ihr Hauptteil gesetzt
- Texte mit Schriftfunktionen oder Achsen nur in einem Teil, wie ihr Hauptteil gesetzt
- Gestreckte Texte, in der sichtbaren Größe gesetzt
- Schräggestellte Texte, aufrecht gesetzt
- Layoutraster auf Frames in Frames, weggelassen
- Weitere Layoutraster derselben Art, weggelassen
- Quadratische Raster, weggelassen
- Hilfslinien auf der Arbeitsfläche, weggelassen
- Hilfslinien auf Frames in Frames, weggelassen
- Formen ohne Umriss, weggelassen
- Füllmethoden, die Bezzle nicht kennt, als „Normal“ gezeichnet
- Effekte, die Bezzle nicht kennt
- Ebenenarten oder Füllungsarten, die Bezzle nicht kennt
- Bilder ohne Datei, oder Bilder, die in der Figma-Datei fehlen

## Sketch {#sketch}

Eine Sketch-Datei kommt mit jeder Seite herein, mit ihren Zeichenflächen und den Originalen ihrer Symbole als Zeichenflächen. Enthält die Seite Symbols nichts als Originale, die Instanzen auf den anderen Seiten zeigen, bleibt sie draußen, da dabei nichts verloren geht. Eine Symbolinstanz wird in ihrer eigenen Größe neu angelegt, wie es die Größeneinstellungen ihrer Ebenen sagen, mit ihren Überschreibungen: Text, ausgetauschte Symbole, Bilder sowie Ebenen- und Textstile. Die Tönung einer Gruppe färbt ein, was sie enthält. Geglättete Ecken, Layoutraster und Hilfslinien auf Zeichenflächen kommen herüber.

**Exportmarkierungen kommen mit:** Die Exportgrößen, Formate und Zusätze jeder Ebene werden in Bezzle zu ihrer Karte Exportieren, bereit zum Hinausgehen (siehe [Für den Export markieren](/docs/export.html#marking)).

Was der Bericht sagen kann:

- Symbolinstanzen ohne Original
- Symbole, die sich selbst enthalten, weggelassen
- Symbolüberschreibungen, die Bezzle nicht kennt, wie im Original belassen
- Symbolüberschreibungen in älterer Form, wie im Original belassen
- Zu tief verschachtelte oder zu viele Ebenen, weggelassen
- Ebenen in kombinierten Formen, die keine Formen sind, weggelassen
- Mit Verlauf oder Bild eingefärbte Gruppen, nicht eingefärbt
- Alphamasken, schneiden nach ihrem Umriss
- Masken aus Text oder Linien, schneiden nach ihrem Begrenzungsrahmen
- Rahmen und Innenschatten von Masken, über ihrem Inhalt gezeichnet
- Invertierte, abgeschrägte und rechtwinklige Ecken, rund gezeichnet
- Geglättete Ecken an Pfaden, rund gezeichnet
- Winkelverläufe, als lineare gezeichnet
- Verläufe ohne Farben
- Rauschfüllungen, weggelassen
- Füllungen unter einem Bild, weggelassen
- Füllungen mit eigener Füllmethode, als „Normal“ gezeichnet
- In der Füllung abgeschwächte Bilder, deckend gezeichnet
- Eingefärbte Bilder, in ihren eigenen Farben gezeigt
- Gekachelte Bilder, einmal füllend gezeichnet
- Bilder, die Bezzle nicht lesen kann, grau gezeigt
- Schatten von Formen ohne Füllung oder Rahmen, nicht geworfen
- Bewegungs- und Zoomunschärfen, als einfache gezeichnet
- Pfeilspitzen an Linien, weggelassen
- Texte aus einem älteren Sketch, aus ihren Ebenennamen gesetzt
- Texte mit Rahmen, ohne Rahmen gezeichnet
- Mit Verlauf gefüllte Texte, in dessen erster Farbe
- Mit Bild gefüllte Texte, in einer einfachen Farbe
- Texte mit unterschiedlich ausgerichteten Absätzen, wie ihr Hauptteil ausgerichtet
- Texte mit mehreren Zeilen- oder Absatzabständen, wie ihr Hauptteil gesetzt
- Texte mit Schriftfunktionen oder Achsen nur in einem Teil, wie ihr Hauptteil gesetzt
- Gestreckte Texte, in der sichtbaren Größe gesetzt
- Schräggestellte Texte, aufrecht gesetzt
- Gespiegelte Texte, normal lesbar gesetzt
- Quadratische Raster, weggelassen
- Hilfslinien auf der Arbeitsfläche, weggelassen
- Füllmethoden, die Bezzle nicht kennt, als „Normal“ gezeichnet
- Ebenenarten oder Füllungsarten, die Bezzle nicht kennt
- Seiten, die nicht gelesen werden konnten
- Bilder, die in der Sketch-Datei fehlen

## Photoshop {#photoshop}

Bezzle liest Photoshop-Dokumente mit Blick auf Mockups: ein Foto eines Telefons, eines Laptops oder eines Posters, mit dem Platz für ein Design als Smartobjekt. Jede Ebene kommt als eigene Ebene herüber, mit den darunterliegenden verrechnet, wie sie war, darum lässt sich ein Schatten oder eine Spiegelung weiterhin ausblenden oder ändern.

- **Zeichenflächen** im Dokument werden zu Zeichenflächen, mit ihrer Hintergrundfarbe. Ein Dokument ohne Zeichenflächen wird zu einer Zeichenfläche in seiner Größe, nach der Datei benannt, und eine reduzierte Datei ist ihr eines Bild.
- **Pixelebenen** werden zu Bildern, beschnitten durch ihre Masken, durch die Ebene, an der sie als Schnittmaske hängen, und durch die Gruppen, in denen sie liegen, mit ihrer Deckkraft, ihrer Flächendeckkraft und ihrer Füllmethode.
- **Füllebenen mit einer Farbe** werden zu Formen, mit dem Umriss ihrer Vektormaske oder der ganzen Arbeitsfläche.
- **Smartobjekte** werden zum Screen eines Mockups: das Bild, das sie enthalten, an seinen vier Ecken dort festgemacht, wo das Smartobjekt sich zeigt, im selben Winkel gesehen. Leg ein Bild irgendwo darauf ab, sogar durch die Spiegelungen und Schatten hindurch, die darüberliegen, und das Bild kommt in den Screen.
- **Ebenenstile**: Schlagschatten und Schatten nach innen werden zu Schatten in Bezzle und eine Kontur zu einem Rahmen (oder, auf einer Pixelebene, zu einem Teil ihrer Pixel). Eine Farbüberlagerung oder eine Verlaufsüberlagerung wird in die Pixel der Ebene gelegt.
- **Textebenen** kommen als Bilder ihrer Buchstaben herein.

Lesen lassen sich Dokumente in den Farbmodi RGB, CMYK, Graustufen, Duplex, Indizierte Farben, Bitmap und Mehrkanal.

Was der Bericht sagen kann:

- Text als Bild seiner Buchstaben übernommen
- Einstellungsebenen weggelassen
- Verkrümmte Smartobjekte als Bilder übernommen
- Maskierte oder beschnittene Smartobjekte als Bilder übernommen
- Smartobjekte, die sich nicht öffnen ließen, als Bilder übernommen
- Vektormasken auf Gruppen in deren Bilder gezeichnet
- Vektormasken, mit denen Bezzle nicht schneiden kann, weggelassen
- Ebenenstile auf Gruppen weggelassen
- Schein-Effekte weggelassen
- Abgeflachte Kanten und Glanz weggelassen
- Musterüberlagerungen weggelassen
- Rauschverläufe weggelassen
- Musterfüllungen weggelassen
- Ebenen, die nicht gelesen werden konnten

## Webseiten {#websites}

Bezzle kann jede Webseite als Design hereinholen: Es lädt die Seite unsichtbar, scrollt durch sie, damit alles lädt, und zerlegt sie in Ebenen.

::: steps
1. **Wähl {Ablage › Von einer Website importieren …}** ({{⌥⇧⌘I}}). Liegt eine Webadresse in der Zwischenablage, ist sie schon eingetragen.
2. **Tipp die Adresse** in {Adresse}, etwa `example.com`. Bezzle ergänzt `https://`, wenn du es weglässt. Auch eine `file:`-Adresse einer Seite auf deinem Mac funktioniert.
3. **Wähl die Größen**, in denen sie gelesen werden soll. Jede wird zu einer eigenen Zeichenfläche, nebeneinander.
4. **Lass {Cookie-Banner ausblenden} eingeschaltet**, um Cookie-Banner wegzunehmen und die Schleier, die sie über die Seite legen. Anfangs ist es eingeschaltet.
5. **Klick auf {Importieren}** oder drück {{Return}}. Das neue Design öffnet sich in einem eigenen Tab.
:::

| Größe | Breite | Gelesen in einem Fenster von |
| --- | --- | --- |
| {Desktop} | 1440 px | 1440 × 900 |
| {Tablet} | 768 px | 768 × 1024 |
| {Mobil} | 390 px | 390 × 844, so, wie ein Telefon sie liest, und die Seite erfährt das |
| {Andere Breite} | Beliebig, von 240 bis 3840 px | So hoch wie ein Bildschirm dieser Breite; bis 500 px wie von einem Telefon gelesen |

Anfangs ist {Desktop} gewählt. Wähl so viele Größen, wie du willst, und die Zeichenflächen werden nach ihnen benannt („Desktop“, „Mobil“, „1280 px“). Antwortet die Site mit einem Fehler, folgt sein Code dem Namen, etwa „Desktop (404)“.

Während es läuft, füllt sich der Knopf {Importieren}, und eine Zeile darunter sagt, was Bezzle gerade tut: „Seite wird geladen …“, „Seite wird durchgescrollt …“, „Seite wird zerlegt …“, „Bilder werden geholt (12 von 40) …“, „Was keine Form ist, wird fotografiert (2 von 5) …“ und „Ebenen werden angelegt …“, jeweils mit dem Namen der Größe vorneweg, wenn du mehrere gewählt hast. {Abbrechen} hält es an. Eine lange Seite dauert eine Weile.

### Was herüberkommt {#web-layers}

- **Boxen** werden zu Formen, mit ihren Füllungen, Verläufen, Rahmen, Ecken und Schatten.
- **Text** wird zu Text in seinen Schriften, in Zeilen gesetzt, wie der Browser ihn gesetzt hat: ein Absatz, umbrochen in seiner Box, oder ein Text pro Zeile, wo Wörter um andere Boxen fließen. Jede Schrift ist die erste, nach der die Seite fragt und die dein Mac hat, oder die, mit der die Seite gezeichnet hat, im Schnitt, der in Gewicht und Neigung am nächsten ist.
- **Bilder** werden geholt und so platziert, wie die Seite sie zeigt, und **SVGs** werden zu Pfaden, die du bearbeiten kannst.
- **Gruppen** folgen der Seite: Ebenen werden so gruppiert, wie die Elemente der Seite einander enthalten, in der Reihenfolge, in der der Browser sie malt. Sie sind nach dem benannt, was sie sind, etwa {Kopfzeile}, {Navigation}, {Abschnitt}, {Knopf}, {Link}, {Listeneintrag}, {Bild}, {Feld} oder {Fußzeile}, oder nach der eigenen Klasse oder ID des Elements, in Wörtern geschrieben: Aus „hero-banner“ wird „Hero banner“.
- **Was sich nicht zerlegen lässt**, etwa Icon-Schriften, Videos, eingebettete Seiten, Formularelemente und Canvas-Zeichnungen, wird fotografiert und kommt als Bild herein.
- **Die eigene Farbe der Seite** wird zu der der Zeichenfläche. Menüs, die aus dem Blick geschoben sind, und Karussellfolien, die jenseits des Randes liegen, bleiben draußen.

Jede Zeichenfläche ist so hoch wie die Seite, bis zu 30.000 Punkt. Das Design wird nach dem Titel der Seite benannt oder, wenn sie keinen hat, nach der Site. Der Bericht sagt „Aus … übernommen“ mit dem Namen der Site.

Was der Bericht sagen kann:

- Seiten, länger als Bezzle liest, unten abgeschnitten
- Seiten, die in einer Box scrollen, auf volle Höhe ausgeklappt
- Teile der Seite, die sich nur fotografieren ließen, als Bilder
- Icons aus Icon-Schriften, als Bilder
- Videos, als Standbild
- Eingebettete Seiten und Medien, als Bilder
- Zeichnungen auf einem Canvas, als Bilder
- Formularelemente, als Bilder
- SVGs mit Text, Bildern oder Filtern, als Bilder
- SVG-Hintergründe, als Bilder
- Mit einem Bild maskierte Boxen, als Bilder
- Boxen mit Farbfiltern, als Bilder
- Farbfilter, weggelassen
- Filter für den Hintergrund hinter Boxen, weggelassen
- Formen, auf die Boxen zugeschnitten sind, weggelassen
- Wiederholte Hintergründe, einmal gezeichnet
- Konische und andere Verläufe, weggelassen
- Konturen mit Verlauf, in dessen erster Farbe
- Doppelte, gerillte und abgeschrägte Rahmen, durchgezogen gezeichnet
- Gestrichelte Rahmen an einzelnen Seiten, durchgezogen gezeichnet
- Unterschiedliche Rahmen an runden Boxen, gerade gezeichnet
- Ovale Ecken, rund gemacht
- 3D-Transformationen, flach gezeichnet
- Texte, die um andere Boxen fließen, ein Text pro Zeile
- Texte mit Rahmen, ohne Rahmen gezeigt
- Hoch- und tiefgestellte Zeichen, auf die Zeile gesetzt
- Zähler in erzeugtem Text, weggelassen
- Bilder als Aufzählungszeichen, weggelassen

Die Seite wird so geladen, wie dein Browser sie laden würde. Siehe [Dateien, Updates und Datenschutz](/docs/files.html).

## Wenn eine Datei nicht hereinkommt {#errors}

Der Tab oder der Dialog für Webseiten sagt, warum:

| Nachricht | Warum |
| --- | --- |
| Dies ist keine Adobe-XD-Datei, die Bezzle lesen kann. | Sie ist keine mit XD gesicherte Datei, oder sie ist beschädigt. |
| Dies ist keine Figma-Datei, die Bezzle lesen kann. | Sie ist keine lokale Kopie, die Figma gesichert hat, oder sie ist beschädigt. |
| Dies ist keine Sketch-Datei, die Bezzle lesen kann. | Sie ist keine mit Sketch gesicherte Datei, oder sie ist beschädigt. |
| Diese Datei wurde mit einer Sketch-Version vor 43 gesichert, die Bezzle nicht lesen kann. Öffne sie in einem neueren Sketch, sichere sie erneut und importiere dann diese Datei. | Vor Version 43 hat Sketch seine Dateien anders aufbewahrt. |
| Dies ist keine Photoshop-Datei, die Bezzle lesen kann. | Sie ist kein Photoshop-Dokument. |
| Diese Photoshop-Datei ist beschädigt. | Ein Teil der Datei ließ sich nicht lesen. |
| Photoshop-Dateien in diesem Farbmodus kann Bezzle noch nicht lesen. | Das Dokument ist in Lab-Farbe oder einem anderen Modus, der oben nicht aufgeführt ist. |
| Diese Photoshop-Datei ist auf eine Weise gepackt, die Bezzle noch nicht lesen kann. | Die Pixel ihrer Ebenen sind auf eine Weise komprimiert, die Bezzle nicht liest. |
| Das ist keine Webadresse, die Bezzle öffnen kann. | Sie braucht einen Namen der Site mit einem Punkt darin, etwa `example.com`, und keine Leerzeichen. |
| Die Seite konnte nicht geladen werden: sie hat zu lange nicht geantwortet. | Nach einer halben Minute war die Seite noch nicht weit genug geladen, um gelesen zu werden. |
| Die Seite konnte nicht geladen werden: … | Die Site war nicht erreichbar oder hat nicht geantwortet; der Grund folgt. |
| Die Seite konnte nicht gelesen werden: … | Die Seite hat geladen, ließ sich aber nicht zerlegen; der Grund folgt. |
| Die Seite zeigt nichts, das sich übernehmen ließe. | Auf der Seite war nichts zum Hereinholen, als Bezzle sie gelesen hat. |

Ein KI-Assistent, der mit Bezzle verbunden ist, kann ebenfalls Dateien und Webseiten hereinholen. Siehe [KI-Assistenten](/docs/ai.html).
