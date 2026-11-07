---
title: Exportieren
nav: Exportieren
lede: Exportiere Zeichenflächen, einzelne Ebenen, Karussells und Stapel als PNG, JPEG, WebP, AVIF, SVG oder PDF, in der Größe, die du brauchst, und markiere Ebenen, damit sie jedes Mal gleich hinausgehen.
---

Alles, was du in Bezzle machst, kann es als Datei verlassen: ein Screen für eine Besprechung, ein Symbol in drei Größen für eine App, jeder Beitrag eines Stapels für einen Redaktionsplan, ein ganzes Design als ein PDF. Es gibt zwei Wege zu exportieren. Der **Dialog Exportieren** exportiert jetzt, was du dort wählst. **Für den Export markieren** speichert an einer Ebene oder Zeichenfläche die Dateien, zu denen sie werden soll, sodass jedes Mal mit einem Klick dieselben herauskommen.

## Exportieren öffnen {#opening}

Wähl {Ablage › Exportieren …} oder drück {{⌘E}}, oder klick beim Gestalten auf {Exportieren …} rechts in der Leiste oben. (Im Modus Prototyp und Untersuchen ist dieser Knopf {Abspielen}; {{⌘E}} funktioniert trotzdem.) Der Dialog Exportieren öffnet sich über dem Fenster. Schließ ihn mit dem × in seiner Ecke, mit {{Esc}} oder mit einem Klick außerhalb.

In einem Design, in dem es nichts zu exportieren gibt, sagt der Dialog: „Es gibt noch nichts zu exportieren. Ziehe mit A eine Zeichenfläche auf.“

Der Dialog enthält von oben nach unten: was exportiert wird, das {Format}, die {Skalierung}, die {Qualität}, wenn sie eine Rolle spielt, einen Satz, der genau sagt, was geschrieben wird, und {Exportieren …}.

## Was exportiert wird {#what}

Oben im Dialog stehen die Möglichkeiten, die für das, was du gewählt hast, sinnvoll sind. Die genaueste kommt zuerst und ist anfangs gewählt, darum ist der Dialog mit einer gewählten Ebene bereit, genau diese Ebene zu exportieren. Ist nur eine Möglichkeit sinnvoll, gibt es keine Reihe zur Wahl.

| Möglichkeit | Angeboten, wenn | Was hinausgeht |
| --- | --- | --- |
| {Diese Ebene}, {Diese Gruppe}, {3 Ebenen} | Du Ebenen gewählt hast, die keine Zeichenflächen sind. | Jede gewählte Ebene für sich, nur so groß, wie sie ist. Siehe [Ebenen für sich](/docs/export.html#layers). |
| {Dieser Beitrag} | Du einen Stapel mit mehr als einem Beitrag gewählt hast oder etwas darauf. | Der Beitrag, der vorne liegt. |
| {Zeichenfläche}, {3 Zeichenflächen}, {Alle 12 Beiträge} | Du Zeichenflächen oder Ebenen darauf gewählt hast und das nicht alle Zeichenflächen des Designs sind oder auch Ebenen gewählt sind. | Die Zeichenflächen, auf denen die gewählten Ebenen liegen, oder die gewählten Zeichenflächen. Bei einem Stapel jeder Beitrag. |
| {5 markierte} | Etwas im Design für den Export markiert ist. | Alles Markierte, jedes so, wie seine Karte Exportieren es sagt. Siehe [Für den Export markieren](/docs/export.html#marking). |
| {Alle 4} | Die gewählten Zeichenflächen nicht schon alle sind. | Jede Zeichenfläche des Designs. |

Ausgeblendete Zeichenflächen und ausgeblendete Ebenen bleiben draußen, was immer du wählst. Ist {5 markierte} gewählt, treten {Format} und {Skalierung} zur Seite, da jede Markierung ihre eigenen sagt.

## Format {#formats}

| Format | Besteht aus | Hintergrund | Hinweise |
| --- | --- | --- | --- |
| PNG | Pixeln | Durchsichtige Teile bleiben durchsichtig | Verliert nichts. |
| JPEG | Pixeln | Auf Weiß | Kleiner; eingestellt mit {Qualität}. |
| WebP | Pixeln | Durchsichtige Teile bleiben durchsichtig | Kleiner; eingestellt mit {Qualität}, und in der höchsten Stufe verliert es nichts. Höchstens 16.383 Pixel pro Seite. |
| AVIF | Pixeln | Durchsichtige Teile bleiben durchsichtig | Kleiner; eingestellt mit {Qualität}. Angeboten, wenn dein Mac es schreiben kann. |
| SVG | Formen, Text und Verläufen | Durchsichtig | Eine Datei für jedes Ding. Bleibt in jeder Größe scharf und lässt sich in anderen Apps ändern. |
| PDF | Formen und Text | Durchsichtig | Eine Datei für alles, je eine Seite, in jeder Größe scharf. |

Kann das zuletzt verwendete Format auf diesem Mac nicht geschrieben werden, nimmt der Dialog PNG.

### SVG und PDF im Einzelnen {#vector}

Ein **SVG** wird so nah am Aussehen des Designs geschrieben, wie SVG es erlaubt, und so, wie SVG es kennt, darum bleibt es bearbeitbar: Rechtecke, Ellipsen und Pfade; Text, der Text bleibt, Zeile für Zeile, wie Bezzle ihn setzt, in seinen Schriften, mit anders gestalteten Wörtern in eigenen Spans und Listenzeichen vor ihren Einträgen; Text entlang einer Kurve als Buchstaben, die an ihr entlang gesetzt sind; Verläufe; Rahmen innen und außen; Schatten und Unschärfen als SVG-Filter; Bilder in der Datei mitgetragen. Jede Ebene behält ihren Namen als ihre ID. Zwei Dinge, die SVG nicht kann, kommen als Bilder: eine Hintergrundunschärfe (ein Bild dessen, was durch sie hindurchscheint) und eine in die Tiefe gedrehte Ebene. Bei Schriften fragt die Datei zuerst nach der Familie, die das Design verwendet, dann nach dem Schnitt, der hier gezeichnet ist, dann nach etwas Ähnlichem, das alle haben.

Ein **PDF** hat eine Seite für jedes exportierte Ding, jede Seite so groß wie das Ding in Punkt. Text und Formen bleiben Text und Formen. Ein PDF aus mehreren Dingen ist nach dem Design benannt; ein PDF aus einem Ding, etwa einem Karussell mit einer Seite pro Folie, nach diesem.

## Skalierung {#scale}

Bei PNG, JPEG, WebP und AVIF bestimmt {Skalierung}, wie viele Pixel in jeden Punkt des Designs gehen: {1×}, {2×} oder {3×}. Eine Zeichenfläche, die 390 Punkt breit ist, ist in 3× 1.170 Pixel breit. Der Dialog beginnt mit 2×.

PNG- und JPEG-Dateien sind mit ihrer Auflösung markiert, 72 dpi in 1× und doppelt so viel in 2×, damit Apps, die sie lesen, wissen, wie viele Pixel einen Punkt ergeben.

Karussells haben eine eigene Skalierung, die bei 1× beginnt: Ihre Folien sind in den Pixeln gemacht, die die Plattformen nehmen, darum ist 1× schon die Größe zum Posten. Gehen nur Folien hinaus, zeigt und ändert {Skalierung} diese.

Für jede andere Größe, etwa 1,5×, oder eine genaue Breite oder Höhe in Pixeln, markierst du die Ebene stattdessen für den Export: Ihre Größen können beliebig sein (siehe [Für den Export markieren](/docs/export.html#marking)).

## Qualität {#quality}

Bei JPEG, WebP und AVIF bestimmt {Qualität}, wie viel vom Bild erhalten bleibt, abgewogen dagegen, wie klein die Datei wird: {60%}, {80%}, {90%} oder {100%}. Bei WebP ist die höchste Stufe {Verlustfrei}. Beim Export des Markierten erscheint die Wahl, sobald eine dieser Dateien verlustbehaftet ist, und ihre höchste Stufe ist {Beste}, das Beste jedes Formats. Der Dialog beginnt mit 90 %, und der Knopf {Exportieren …} auf einer Karte Exportieren verwendet die Qualität, die hier zuletzt gewählt wurde.

## Die Zusammenfassung {#summary}

Unter den Möglichkeiten sagt ein Satz, was geschrieben wird, damit es keine Überraschungen gibt:

- „Home mit 1170 × 2532 Pixeln.“
- „Icon mit 96 × 96 Pixeln, auf transparentem Hintergrund.“ (Ein JPEG sagt „auf Weiß“.)
- „Die 5 Folien von Launch mit 1080 × 1350 Pixeln, je eine Datei.“
- „Die 12 Beiträge von Sale mit 2160 × 2700 Pixeln, je eine Datei.“
- „3 Zeichenflächen als ein PDF, je eine Seite, mit Text und Formen, die in jeder Größe scharf bleiben.“
- „Home als SVG: Formen, Text und Verläufe bleiben bearbeitbar; Hintergrundunschärfen werden zu Bildern.“
- „Wie markiert: Icon.png, Icon@2x.png und Icon@3x.png.“

Pixelgrößen werden für ein einzelnes Ding angegeben und für mehrere Zeichenflächen, Folien oder Beiträge derselben Größe.

## Wohin die Dateien gehen {#where}

::: steps
1. **Klick auf {Exportieren …}.** Ein Ordnerfenster fragt: „Wähle, wohin die exportierten Dateien sollen.“ Es öffnet sich in dem Ordner, in den du zuletzt exportiert hast, und du kannst dort einen neuen Ordner anlegen.
2. **Klick auf {Hier exportieren}.** Bezzle schreibt die Dateien eine nach der anderen, der Knopf sagt {Wird exportiert …} und füllt sich dabei.
3. **Sieh sie dir an.** Der Dialog sagt, wohin sie gegangen sind, „In Assets gesichert.“, oder den Namen der Datei, wenn es nur eine ist, mit {Im Finder zeigen} daneben.
:::

Liegen in diesem Ordner schon Dateien mit denselben Namen, fragt Bezzle zuerst: „In Assets gibt es schon eine Datei namens Icon@2x.png.“ oder „3 der Dateien liegen schon in Assets.“

- {Ersetzen} überschreibt sie.
- {Beide behalten} behält sie und gibt den neuen Dateien eine Nummer, etwa „Card 2.png“.
- {Abbrechen} schreibt nichts.

Änderst du eine Wahl, während die Frage offen ist, verschwindet sie, da sie anderen Dateien galt.

Lässt sich eine Datei nicht erstellen, sagt der Dialog es in Rot: „Eine Datei konnte nicht erstellt werden.“ oder „3 Dateien konnten nicht erstellt werden.“ Sind es WebPs, fügt er hinzu: „Ein WebP ist höchstens 16383 Pixel breit und hoch.“ Wähl eine kleinere Skalierung oder ein anderes Format.

## Wie Dateien benannt werden {#names}

| Was hinausgeht | Benannt |
| --- | --- |
| Eine Zeichenfläche oder eine Ebene | Ihr Name, dann die Skalierung: nichts in 1×, `@2x` in 2×, `@3x` in 3×. „Home@2x.png“ |
| Eine Folie eines Karussells | Der Name des Karussells und die Nummer der Folie. „Launch 01.png“, „Launch 02.png“ |
| Ein Beitrag eines Stapels | Der Name des Stapels, die Nummer des Beitrags und das, was der Beitrag zuerst sagt: die erste Zeile seiner größten Schrift, bis zu 40 Zeichen. „Sale 03 Hats.png“ |
| Ein SVG | Sein Name, ohne Skalierung. „Logo.svg“ |
| Ein PDF aus mehreren Dingen | Der Name des Designs. |

Nummern haben mindestens zwei Stellen und so viele, wie die letzte braucht, damit die Dateien im Finder der Reihe nach sortiert sind.

- **Ein `/` in einem Namen** legt die Datei in einen Ordner mit dem Namen davor: Eine Ebene namens „icons/home“ geht als „home.png“ in einen Ordner „icons“ hinaus, der angelegt wird, wenn es ihn nicht gibt. Aus einem `:` wird ein `-`. Nichts in einem Namen kann aus dem gewählten Ordner hinausreichen.
- **Zwei Dateien eines Exports landen nie auf einem Namen.** Die zweite wird zu „Card 2“ und so weiter.

## Ebenen für sich {#layers}

Eine Ebene, die keine Zeichenfläche ist, geht nur so groß hinaus wie das, was sie malt: Ihr Schatten, ihre Unschärfe und alles andere, was sie zeichnet, sind dabei, und der Rest wird abgeschnitten. Sie liegt auf nichts, darum bleibt, was um sie herum ist, durchsichtig (bei einem JPEG auf Weiß). Ihre linke obere Ecke landet auf einem ganzen Pixel, darum kommen ihre Kanten scharf heraus.

Eine Gruppe geht als ein Bild von allem darin hinaus. Eine Ebene mit Hintergrundunschärfe macht das unscharf, was hinter ihr auf ihrer Zeichenfläche liegt, wie auf der Arbeitsfläche; bei einem Stapel das, was hinter ihr auf ihrem eigenen Beitrag liegt.

## Zeichenflächen, Karussells und Stapel {#boards}

Eine **Zeichenfläche** geht ganz hinaus, in ihrer eigenen Größe.

Ein **Karussell** ist eine Zeichenfläche aus Folien nebeneinander, als Ganzes gestaltet, damit das, was von einer Folie in die nächste läuft, über den Schnitt hinweg aufeinanderpasst. Es geht als ein Bild pro Folie hinaus, jedes mit seiner Nummer benannt. Als ein PDF ist es eine Seite pro Folie.

Ein **Stapel** hält viele Beiträge auf einer Zeichenfläche. Als Zeichenfläche exportiert, oder mit {Alle 4}, geht er als eine Datei pro Beitrag hinaus. Ist ein Stapel gewählt, bietet der Dialog auch {Dieser Beitrag} an, nur für den Beitrag vorne, neben {Alle 12 Beiträge}. Ein Stapel, der für den Export markiert ist, geht mit jedem Beitrag hinaus, nicht nur mit dem vorderen. Siehe [Stapel](/docs/decks.html).

## Für den Export markieren {#marking}

Eine Markierung an einer Ebene oder Zeichenfläche sagt, zu welchen Dateien sie wird, wann immer das Markierte exportiert wird: zum Beispiel ein Symbol als PNG in 1×, 2× und 3× und als SVG. Die Markierungen werden mit dem Design gesichert.

::: steps
1. **Wähl die Ebene oder Zeichenfläche** beim Gestalten aus.
2. **Klick auf {Exportieren}** unter den gestrichelten Chips unten im Inspektor. Sein Tipp sagt „Für den Export markieren“. Die Ebene ist als PNG in 1× markiert, und ihre Karte {Exportieren} öffnet sich.
3. **Füg die Dateien hinzu, zu denen sie werden soll,** mit dem + unter den Zeilen, und stell jede Zeile ein.
:::

::: fields
- **Größe**: wie groß jede Datei ist. Tipp Pixel pro Punkt, etwa `2`, `2x`, `2×`, `@2x` oder `1,5x` (von 0,01× bis 20×), oder eine genaue Breite oder Höhe in Pixeln, etwa `512w` oder `64h` (von 1 bis 16.384). Eine Größe, die Bezzle nicht lesen kann, springt auf ihren alten Wert zurück. Bei SVG und PDF ruht die Größe blass, da sie keine haben.
- **Zusatz**: was hinter den Namen der Ebene kommt. Lässt du ihn, wie er ist, folgt er der Größe: `@2x` in 2×, nichts in 1× oder bei SVG und PDF, `-512w` für eine Breite. Tipp deinen eigenen, etwa `_large`. Ein `/` darin legt die Datei in einen Ordner.
- **Format**: ein Menü der Formate, die dieser Mac schreiben kann.
- **−**: „Diese Datei entfernen“. Entfernst du die letzte, ist die Ebene nicht mehr markiert.
- **+**: fügt die nächstgrößere Größe im Format der letzten Zeile hinzu, 2× nach 1×, dann 3×; sein Tipp sagt welche („2× hinzufügen“). Nach einem SVG oder PDF fügt es eine weitere Datei dieses Formats hinzu.
- **Exportieren …**: schreibt diese Dateien jetzt, fragt wohin, mit denselben Fragen wie der Dialog.
- **Die Dateinamen**: unter den Zeilen die Namen der Dateien, die geschrieben werden, bis zu vier alle, sonst die ersten drei und wie viele noch.
- **×**: „Nicht mehr exportieren“, in der Ecke der Karte, solange sie offen ist.
:::

Die zugeklappte Zeile der Karte fasst ihre Dateien zusammen, jedes Format einmal mit seinen Größen: „PNG 1× 2× 3× · SVG“. Sind mehrere Ebenen gewählt, gilt jede Änderung für alle; sind sie unterschiedlich markiert, sagt sie {Mehrere}.

Alles Markierte kann dann auf einmal hinausgehen, mit der Möglichkeit {5 markierte} im Dialog Exportieren. Im [Modus Untersuchen](/docs/inspect.html#design) zeigt eine Karte, wenn nichts gewählt ist, was markiert ist, jedes zum Herausziehen für sich. Sketch-Dateien bringen ihre Exportmarkierungen mit, wenn du [sie hereinholst](/docs/import.html#sketch).

Jede Änderung ist ein Schritt zum Widerrufen: {Für Export markieren}, {Exportgröße hinzufügen}, {Exportgröße ändern}, {Namenszusatz ändern}, {Exportformat ändern}, {Exportgröße entfernen} und {Exportmarkierung entfernen}.

## Kopieren statt exportieren {#copying}

Für ein schnelles Bild musst du nicht exportieren. Klick im [Modus Untersuchen](/docs/inspect.html#assets) mit der rechten Maustaste auf eine Ebene und wähl {Als PNG kopieren} (in 2×) oder {Als SVG kopieren}, oder zieh das Bild der Ebene aus dem Panel in den Finder oder in Code, als PNG in 1×, 2× oder 3×, als SVG oder als PDF.

## Was erhalten bleibt {#remembered}

Der Dialog merkt sich das Format, die Skalierung, die Skalierung für Karussellfolien, die Qualität und den Ordner, in den du zuletzt exportiert hast, von einem Export zum nächsten und für jedes Design. Wozu eine Ebene markiert ist, wird im Design selbst gesichert, darum ist es für alle da, die es öffnen.

Ein KI-Assistent, der mit Bezzle verbunden ist, kann ebenfalls exportieren, auf dieselben Arten. Siehe [KI-Assistenten](/docs/ai.html).
