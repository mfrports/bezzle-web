---
title: Hell und dunkel
nav: Hell und dunkel
lede: Zeig jede Zeichenfläche mit einem Klick dunkel. Bezzle benennt ihre Farben und zeichnet für jede einen dunklen Look, den du von Hand feinjustieren kannst, während jede helle Zeichenfläche bleibt, wie sie ist.
---

Ein dunkler Look ist in Bezzle kein zweites Design, das du mitziehen musst. Es ist dieselbe Zeichenfläche, dunkel gezeigt: Jede Farbe darauf hat einen Namen, und jeder Name hat einen Look im Hellen und einen im Dunkeln. Änderst du den hellen Look einer Farbe, folgt ihr dunkler Look von selbst, bis du den dunklen Look von Hand einstellst. So kann ein Design zugleich hell und dunkel sein und bleibt doch ein Design.

::: figure dark
Ein Klick zeichnet den dunklen Look einer Zeichenfläche, Farbe für Farbe.
:::

## Eine Zeichenfläche dunkel machen {#make-dark}

::: steps
1. **Wähl eine einzelne Zeichenfläche aus.**
2. **Zeig auf die gestrichelte Karte {Dunkel}** unten im Inspektor ({Diese Zeichenfläche dunkel zeigen}). Die Arbeitsfläche zeigt die ganze Zeichenfläche dunkel, bevor sich irgendetwas ändert.
3. **Klick darauf.** Der dunkle Look legt sich von der oberen rechten Ecke aus über die Zeichenfläche, und das Trackpad gibt einen Tick. Die Karte Dunkel öffnet sich.
:::

Gleich danach bietet ein Hinweis neben der Zeichenfläche {Eine helle daneben} an, mit {Hinzufügen}, für eine helle Kopie neben der dunklen (siehe [Hell und dunkel nebeneinander](#side-by-side)). Er verschwindet nach etwa acht Sekunden.

Eine Zeichenfläche dunkel zu machen ist ein Schritt zum Widerrufen. Eine gesperrte Zeichenfläche lässt sich nicht dunkel machen.

## Wie der dunkle Look entsteht {#how-it-works}

### Jede Farbe bekommt einen Namen {#naming}

Machst du eine Zeichenfläche dunkel, bekommt zuerst jede Farbe darauf, die noch keinen Namen hat, einen: der eigene Hintergrund der Zeichenfläche, jede eingeschaltete Füllung, die Farbe jedes eingeschalteten Rahmens und die Farbe der Buchstaben jedes Texts. Jede wird zu einem [Stil](/docs/components.html#styles), benannt so, wie Bezzle jede Farbe benennt (`Weiß`, `Hellgrau`, `Blau`, `Dunkelgrün`), mit einer Zahl, wenn der Name vergeben ist (`Blau 2`). Ein Verlauf wird zu einem Stil namens `Verlauf`.

Dieselbe Farbe, auf dieselbe Weise genutzt, bekommt auf jeder hellen Zeichenfläche des Designs sofort denselben Namen. Das hält Hell und Dunkel zusammen: Änderst du `Blau` auf einer hellen Zeichenfläche, ändert es sich auch auf der dunklen, in seinem dunklen Look.

### Wie jede Farbe dunkel wird {#darkening}

Jede benannte Farbe wird für sich dunkel gemacht, danach, wie hell sie dem Auge erscheint, und nicht nach ihren Zahlen:

- **Blasse Hintergründe werden tief** und behalten, was über was liegt: Eine Karte bleibt heller als die Seite, auf der sie liegt. Sehr farbige blasse Hintergründe behalten nur einen Hauch ihres Farbtons, damit sie im Dunkeln nicht leuchten.
- **Dunkle Vordergrundfarben werden blass**: Je dunkler eine solche Farbe, desto blasser wird sie.
- **Farben dazwischen werden etwas heller**, damit sie auf Dunkel lesbar sind, und behalten fast ihre ganze Farbe.
- **Verläufe** werden Farbe für Farbe dunkel.
- **Schatten werden tiefer**: Ein benannter Schatten wird im Dunkeln schwarz und kräftiger.
- **Schrift und Ecken** bleiben, wie sie sind.

### Wörter, die ihre Farbe behalten {#words-keep}

Bezzle schaut, worauf jeder Text liegt, so wie es im Dunkeln sein wird. Wo sich die Farbe des Texts besser lesen lässt, wenn sie bleibt, wie sie ist, statt dunkel zu werden, behält er sie: Weiße Wörter auf einem blauen Button bleiben weiß, während schwarze Wörter auf einer weißen Seite blass werden. Eine Farbe, die bleibt, ist ein eigener Stil, getrennt von derselben Farbe, die dunkel wird, sodass Weiß auf einem Button und Weiß als Hintergrund einer Seite getrennte Wege gehen können.

### Was bleibt, wie es ist {#unchanged}

- **Bilder** werden nie verändert.
- **Schatten ohne Namen** bleiben, wie sie sind. Gib einem Schatten einen Namen (siehe [einen Look benennen](/docs/components.html#name-look)), damit er einen dunklen Look bekommt.
- **Die hellen Zeichenflächen** behalten ihren hellen Look genau. Ihre Farben können die neuen Namen bekommen, aber an ihrem Aussehen ändert sich nichts.

## Die Karte Dunkel {#dark-card}

Eine Zeichenfläche, die dunkel gemacht wurde, behält eine Karte Dunkel. Sie heißt {Dunkel}, solange die Zeichenfläche dunkel gezeigt wird, und {Hell}, solange sie hell gezeigt wird.

::: fields
- **Sonne und Mond** (in der zugeklappten Zeile): schalten die Zeichenfläche mit einem Klick zwischen hell und dunkel um. Der Wechsel legt sich jedes Mal über sie. Hell gezeigt behält die Zeichenfläche die Karte, sodass ihr dunkler Look immer einen Klick entfernt ist.
- **Zusammenfassung**: wie viele der Stile auf der Zeichenfläche du im Dunkeln von Hand angepasst hast, zum Beispiel `2 von 9 angepasst`. Es steht nichts da, bis du einen anpasst.
- {Helle daneben}: fügt neben der Zeichenfläche eine helle Kopie von ihr hinzu.
- Das **×** ({Ohne dunklen Look}): macht die Zeichenfläche für immer hell, ohne Umschalten auf Dunkel; wurde sie gerade dunkel gezeigt, wird sie hell. Ihre Stile bleiben, wie sie sind, samt dunklen Looks, für andere Zeichenflächen, die sie nutzen.
:::

## Den dunklen Look feinjustieren {#fine-tune}

Der dunkle Look einer Farbe entsteht von selbst, bis du ihn von Hand machst. Dafür gibt es zwei Wege.

- **Auf der dunklen Zeichenfläche.** Wähl dort eine beliebige Ebene aus und ändere ihre Füllung, die Farbe ihres Rahmens oder ihrer Buchstaben, oder einen benannten Schatten. Weil der Look benannt ist, änderst du den dunklen Look des Stils: Jede Ebene mit diesem Stil auf jeder dunklen Zeichenfläche folgt, und die hellen Zeichenflächen bleiben, wie sie sind. Von da an ist dieser dunkle Look dein eigener.
- **Im Stil-Kit.** Klick auf eine leere Stelle der Arbeitsfläche, um die Stile des Designs zu sehen. Klick auf eine Farbe oder einen Schatten und wähl die Sonne oder den Mond über ihren Reglern, um ihren hellen oder ihren dunklen Look zu ändern. Während du einen von Hand gemachten dunklen Look bearbeitest, macht {Automatisch} ihn wieder von selbst dunkel, aus seinem hellen Look. Siehe [das Stil-Kit](/docs/components.html#style-kit).

Solange das Design etwas Dunkles hat, zeigt jede Farbe im Stil-Kit auf ihrem Chip beide Looks: den hellen und daneben den dunklen mit einem kleinen Mond.

Änderst du den hellen Look eines Stils auf einer hellen Zeichenfläche, folgt ihm ein dunkler Look, den du nicht von Hand eingestellt hast, und wird von selbst neu dunkel gemacht. Ein dunkler Look, den du von Hand eingestellt hast, bleibt, wie du ihn gemacht hast.

## Hell und dunkel nebeneinander {#side-by-side}

Um ein Design hell und dunkel nebeneinander zu zeigen, klick auf der Karte Dunkel auf {Helle daneben}, oder im Angebot gleich nach dem Dunkelmachen einer Zeichenfläche auf {Hinzufügen}. Bezzle fügt eine helle Kopie hinzu, nach der Zeichenfläche benannt (`Start hell`), ohne Umschalten auf Dunkel, 80 Punkt rechts von der letzten Zeichenfläche in ihrer Reihe.

Die beiden sind dasselbe Design, durch ihre Stile verbunden: Änderst du auf einer von ihnen eine benannte Farbe, folgen beide, jede in ihrem eigenen Look. Was nicht benannt ist, etwa die Wörter, die du tippst, und die Ebenen, die du hinzufügst, gehört jeder Zeichenfläche allein.

## Stile in beiden Looks {#styles-both}

- **Benennst du einen Look auf einer dunklen Zeichenfläche**, entsteht ein Stil, dessen heller und dunkler Look gleich sind: Benennen ändert nie, was du siehst. Sein dunkler Look ist dann sein eigener, darum bleibt er, wie er ist, wenn du den hellen Look änderst, bis du im Stil-Kit auf {Automatisch} klickst.
- **Nutzt du einen Stil**, bekommt jede Ebene den Look der Zeichenfläche, auf der sie liegt: den dunklen Look auf einer dunklen Zeichenfläche, sonst den hellen.
- **Verschiebst du eine Ebene** von einer hellen Zeichenfläche auf eine dunkle oder zurück, zeigt sie ihren anderen Look.
- **Kopien von Komponenten** auf einer dunklen Zeichenfläche zeigen die dunklen Looks ihrer Stile, während die Komponente selbst im Hellen bleibt.
- **Stile aus einem anderen Design** bringen ihre dunklen Looks mit. Siehe [Bibliotheken](/docs/components.html#libraries).

## Teile, Exporte und Code {#parts-export-code}

- **Teile aus Kits und Symbole** kommen dunkel auf eine Zeichenfläche, deren Farbe dunkel ist, und die Ressourcen zeichnen sie dunkel, solange du eine solche Zeichenfläche anschaust. Siehe [die Ressourcen](/docs/components.html#resources-panel).
- **Exporte** zeigen eine Zeichenfläche so, wie du sie siehst: Eine dunkle Zeichenfläche geht dunkel hinaus. Siehe [Exportieren](/docs/export.html#boards).
- **Code**: Wo immer das Design eine dunkle Zeichenfläche oder einen von Hand gemachten dunklen Look hat, tragen die Tokens, die du von der Karte Code kopierst, beide Looks: CSS setzt die dunklen Farben unter `@media (prefers-color-scheme: dark)`, SwiftUI gibt jeder solchen Farbe einen hellen und einen dunklen Wert, und JSON fügt jedem Token den dunklen Wert hinzu. Siehe [Design Tokens](/docs/inspect.html#tokens).

Weiter: Erfahre mehr über die Stile, die all das möglich machen, unter [Komponenten, Stile und Bibliotheken](/docs/components.html), oder stapel viele Beiträge auf einer Zeichenfläche mit [Stapeln](/docs/decks.html).
