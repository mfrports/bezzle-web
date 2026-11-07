---
title: Untersuchen und Übergabe
nav: Untersuchen
lede: Lies das Design so, wie es jemand braucht, der es baut: Größen und Abstände auf der Arbeitsfläche gemessen, jeder Look mit dem Namen, den dein Design ihm gibt, die Ebene als CSS oder SwiftUI und ihre Bilder zum Herausziehen als Dateien.
---

Der Modus Untersuchen ist für die Leute, die bauen, was du gestaltest, und für dich, wenn du deine eigene Arbeit prüfst. Er liest das Design und ändert es nie, darum kann nichts aus Versehen verschoben oder gelöscht werden. Zeig auf etwas, um es zu messen, klick, um seine Angaben zu sehen, und klick auf einen beliebigen Wert, um ihn zu kopieren.

::: figure inspect
Das Design untersucht: der gewählte Button mit seiner Breite und Höhe, die Abstände zu dem, worauf der Zeiger ist, in Pink, und seine Angaben und sein Code im Panel.
:::

## Der Modus Untersuchen {#inspect-mode}

Wähl {Untersuchen} im Umschalter oben rechts im Fenster, drück {{⌃I}}, oder wähl {Fenster › Untersuchen}. Im Modus Prototyp tut der Knopf {Untersuchen} auf der Karte {Code} dasselbe. Der Tipp des Umschalters: „Das Design untersuchen, wie es gebaut wird: Größen, Abstände, Looks und Code“.

Das Design wird auf dem Millimeterpapier des Prototyps untersucht. Kommst du vom Prototyp, verblassen seine Fäden, während die Maße erscheinen; kommst du vom Design, bleiben sie weg. Die Werkzeuge treten zur Seite, wie im [Modus Prototyp](/docs/prototype.html#prototype-mode), und der Knopf rechts in der Leiste oben ist {Abspielen}.

- **Es wird nur gelesen.** {{⌫}} tut nichts, und {Ausschneiden}, {Einsetzen} und {Löschen} im Menü Bearbeiten sind ausgeschaltet. Nichts auf der Arbeitsfläche bewegt sich, wenn du ziehst.
- **Eins nach dem anderen.** Waren mehrere Ebenen gewählt, bleibt nur die erste gewählt.
- **Designs, die du nur lesen kannst.** Ein Design, das jemand nur zum Lesen mit dir geteilt hat, lässt sich trotzdem ganz untersuchen, Werte, Code und Assets eingeschlossen. Siehe [Teilen](/docs/sharing.html).

Zum Verlassen drück noch einmal {{⌃I}}, was zum Prototyp zurückführt, oder wähl {Design} im Umschalter. {{⌃P}} führt ebenfalls direkt zurück zum Design.

## Wählen {#picking}

Der Zeiger findet das Kleinste unter sich: eine Ebene, wie tief sie auch in Gruppen und Kopien von Komponenten liegt; den Screen selbst, wo sonst nichts ist; oder einen Screen an seinem Namen über seiner linken oberen Ecke. Auch Ebenen, die lose auf der Arbeitsfläche liegen, außerhalb jeder Zeichenfläche, lassen sich untersuchen.

- **Klick**, um zu wählen, was der Zeiger findet.
- **Klick noch einmal** auf das Gewählte oder auf etwas darin, um das Nächstäußere zu wählen: die Gruppe, in der es liegt, dann die Gruppe, die diese enthält, und so weiter bis zum Screen. Ein Klick mehr führt wieder hinein zum Kleinsten.
- **{{Esc}}** wählt ebenfalls das Nächstäußere. Ist der Screen gewählt, lässt es los.
- **Klick auf das leere Papier**, um das Gewählte loszulassen.
- **Zieh irgendwo**, um die Ansicht zu verschieben, wie eine Hand ein Blatt Papier verschiebt. Ein Drücken, das sich nicht bewegt, ist ein Klick. Auch {{Space}} gedrückt halten und ziehen geht.

Im Panel sind die Namen über dem eigenen Namen der gewählten Ebene die Gruppen und der Screen, in denen sie liegt: Klick auf einen, um ihn zu wählen.

## Messen {#measuring}

Maße werden auf der Arbeitsfläche wie auf einer technischen Zeichnung gezeichnet, und jedes wächst aus seiner Mitte heraus, wenn sich ändert, was gezeigt wird. Jeder Abstand wird zwischen den aufrechten Kästen gemessen, in denen Ebenen gezeichnet sind, in Punkt, auf eine Dezimalstelle genau.

- **Ist nichts gewählt,** ist das, worauf der Zeiger ist, mit Bleistift umrandet, mit Breite und Höhe darunter („320 × 48“).
- **Die gewählte Ebene** ist umrandet, mit ihrer Breite auf einer Linie an ihrer Oberkante und ihrer Höhe auf einer Linie an ihrer rechten Seite hinunter, jede mit einem Strich an beiden Enden und der Zahl auf einer kleinen Pille. Eine gedrehte Ebene wird nach ihrer eigenen Breite und Höhe gemessen, nicht nach dem Kasten, den sie bedeckt.
- **Zeig auf eine andere Ebene,** und die Abstände von der gewählten Ebene zu ihr werden in Pink gezeichnet, der Farbe, die die Arbeitsfläche Abständen gibt, und die andere Ebene ist pink umrandet. Wo sich die beiden über einen Abstand hinweg gegenüberliegen, ist der Abstand fein pink schraffiert.
- **Zeig auf die gewählte Ebene selbst,** und Bezzle misst, wie weit sie in dem liegt, was sie enthält: im Nächstäußeren, das ein Klick wählen würde, gestrichelt umrandet, mit seinem Namen oben links.
- **Ist ein Screen gewählt,** misst das Zeigen auf eine Ebene darauf von dieser Ebene bis zu den Kanten des Screens.

Welche Abstände gezeigt werden, hängt davon ab, wie die beiden Kästen zueinander liegen:

| Wie sie liegen | Was gemessen wird |
| --- | --- |
| Einer im anderen | Von jeder der vier Seiten des inneren Kastens gerade hinüber zur Seite des äußeren, durch die Mitte des inneren Kastens. |
| Getrennt, einander zugewandt | Der Abstand zwischen den Seiten, die einander zugewandt sind, durch die Mitte des Bereichs, in dem sie sich überschneiden. Wo sie sich gar nicht überschneiden, läuft die Linie auf Höhe der Mitte der gewählten Ebene, und eine gestrichelte Linie führt weiter, um zu zeigen, wo sie auf die Kante der anderen Ebene trifft. Kästen, die in beiden Richtungen getrennt sind, bekommen einen Abstand quer und einen nach unten. |
| Teilweise übereinander | Wie weit jede Seite des einen von derselben Seite des anderen entfernt ist. |

Eine Linie, die zu kurz für ihre Zahl ist, hat die Zahl daneben.

## Das Panel einer gewählten Ebene {#layer-panel}

Wähl eine Ebene, und das Panel zeigt von oben nach unten, wo sie liegt, ihren Kasten, ihre Schrift (bei Text), ihre Looks, das Layoutraster (bei einem Screen), ihren Code und die Ebene als Datei. Jede Zahl und jeder Name darin lässt sich mit einem Klick kopieren (siehe [Werte kopieren](/docs/inspect.html#copying)).

::: fields
- **Wo sie liegt**: bis zu drei der Gruppen und des Screens, die die Ebene enthalten, getrennt durch ›, mit …, wenn es mehr sind; ein Klick auf eines wählt es. Darunter Name und Art der Ebene, oder {Komponente} für eine Kopie einer Komponente. Bei einer Kopie oder einer Ebene darin zeigt ein Etikett den Namen der Komponente und die gezeigte Variante; ein Klick darauf wählt die Kopie.
- **Der Kasten**: so gezeichnet, wie die Werkzeuge eines Browsers einen zeichnen. Die Ebene ist ein Kasten in Bleistift mit Breite × Höhe in der Mitte, in einem gestrichelten Kasten, der nach dem benannt ist, was sie enthält, mit dem Abstand von jeder ihrer Seiten zu dessen Seite in Pink. Ein Abstand unter null, wo die Ebene hinausragt, ist rot. Darunter {X} und {Y}, wo die Ebene auf ihrem Screen liegt, und wie weit sie gedreht ist, in Grad, wenn sie es ist.
- **Schrift**, bei Text: ein Muster „Ag“ im Schnitt, die Familie ({System} für die eigene Schrift des Mac), der Schnitt mit seinem Gewicht, wie CSS es zählt („Semibold · 600“), und der Name ihres Textstils, wenn sie einen hat. Dann {Größe}; {Zeilenhöhe}, oder {Auto} mit der eigenen Zeilenhöhe der Schrift daneben; {Zeichenabstand} in Punkt und in Prozent, wenn er nicht 0 ist; {Ausrichten}, wenn nicht links; {Schreibweise}, wenn eine gesetzt ist; {Farbe}, oder die Art des Verlaufs. Dann der Text selbst, mit einem Klick ganz kopiert, und, wenn einige Wörter anders gesetzt sind, bis zu sechs Zeilen, die sagen wie, jede mit den Wörtern, die es haben.
- **Looks**: eine Zeile für jede {Füllung} (ihre Farbe, ihr Verlauf oder ihr Bild, die oberste zuerst), jeden {Rahmen} (Breite, {Innen}, {Zentriert} oder {Außen} und Farbe), {Ecken} (ein Radius, oder vier, wenn sie sich unterscheiden), jeden {Schatten} (x, y, Unschärfe und Ausbreitung, seine Farbe und {Innen} für einen inneren Schatten), {Deckkraft} in Prozent, {Füllmethode} und {Unschärfe} (ihr Radius und {Dahinter} für eine Hintergrundunschärfe). Aufgeführt ist nur, was die Ebene hat. Jeder Look, der im Design einen Namen hat, trägt seinen Namen als Etikett.
- **Layoutraster**, bei einem Screen, der eins hat: {Spalten} und {Zeilen} als Anzahl × die Größe von jeder, mit {Abstand} und {Rand}, und {Grundlinie}.
- **Code**: die Ebene als {CSS} oder {SwiftUI}, gewählt im kleinen Umschalter neben dem Titel, mit {CSS kopieren} oder {SwiftUI kopieren} darunter. Der Code lässt sich seitwärts scrollen und sein Text auswählen. Siehe [Code](/docs/inspect.html#code).
- **Die Ebene als Datei**: ihr Bild auf einem Schachbrettmuster, zum Herausziehen, mit {PNG}, {SVG} und {PDF}, den Größen {1×}, {2×} und {3×} für PNG und {Kopieren}. Siehe [Assets](/docs/inspect.html#assets).
:::

## Werte kopieren {#copying}

Klick auf einen beliebigen Wert im Panel, um ihn zu kopieren: eine Zahl, eine Farbe, eine Schrift, einen Namen. Er leuchtet auf, während du darauf zeigst, und ein Häkchen erscheint kurz, sobald er kopiert ist. Sein Tipp zeigt genau, was kopiert wird.

Werte werden so kopiert, wie der Code, den du in der Karte {Code} gewählt hast, sie schreibt, und diese Wahl bleibt erhalten:

| Wert | Mit CSS gewählt | Mit SwiftUI gewählt |
| --- | --- | --- |
| Eine Farbe | `#3366FF`, oder `rgba()`, wenn sie durchscheint | `Color(red: 0.2, green: 0.4, blue: 1)`, mit `.opacity()`, wenn sie durchscheint |
| Eine Schriftgröße, Zeilenhöhe oder Ecken | Mit px: `16px` | Die Zahl: `16` |
| Zeichenabstand | In em: `0.02em` | In Punkt |
| Eine Schriftfamilie | Der CSS-Font-Stack | Der Name der Familie |
| Ein Verlauf, ein Bild oder ein Schatten | Wie CSS es schreibt | Wie SwiftUI es schreibt |
| Das Etikett eines benannten Looks | Seine Custom Property: `var(--color-brand-blue)` | Sein Token: `Tokens.Colors.brandBlue` |

Größen und Abstände im Kasten werden als einfache Zahlen kopiert.

## Code {#code}

Die Karte {Code} schreibt die gewählte Ebene als CSS oder SwiftUI, mit ihren Looks unter den Namen, die dein Design ihnen gibt: Wo immer ein Look einen Namen hat, verwendet der Code sein Token, und in CSS steht der einfache Wert in einem Kommentar daneben. In der Karte sind Kommentare blass, Eigenschaften zurückhaltender und Tokens im Blau des Bleistifts.

Eine Gruppe bringt mit, was sie enthält, jede Ebene platziert, wie sie liegt, bis zu drei Ebenen tief und insgesamt 16 Ebenen; ein Kommentar sagt, wie viele es noch sind („and 4 more layers“). Ein Screen wird als eigener Kasten geschrieben: seine Größe, sein Hintergrund, seine Ecken und sein Beschneiden.

### CSS {#css}

Die Klasse der Regel ist der Name der Ebene, kleingeschrieben mit Bindestrichen: Eine Ebene namens „Sign in button“ ist `.sign-in-button`. Sie sagt:

- **Größe**: `width` und `height`. Text mit {Automatische Breite} ist `white-space: nowrap`, Text mit {Automatische Höhe} setzt nur seine Breite und Text mit {Feste Größe} beides. Eine Linie ist so breit wie ihre Länge und 0 hoch, gezeichnet mit `border-top`. Eine gedrehte Ebene bekommt `transform: rotate()`.
- **Füllungen**: `background`, die oberste zuerst: Farben, `linear-gradient()` und `radial-gradient()`, und Bilder als `url()` mit `cover`, `contain` oder `100% 100%`, je nachdem, ob das Bild füllt, einpasst oder streckt. Text bekommt seine Farbe als `color` und einen Verlauf über `background-clip: text`.
- **Rahmen**: Einer innen ist `border` mit `box-sizing: border-box`; einer zentriert ist eine `outline`, um die Hälfte ihrer Breite hereingezogen; einer außen ist eine `outline`. Gestrichelte Rahmen sind `dashed`. Text verwendet `-webkit-text-stroke`.
- **Ecken**: `border-radius`, mit vier Werten, wenn sie sich unterscheiden, und `50%` für eine Ellipse.
- **Effekte**: `box-shadow` (`text-shadow` bei Text), `opacity`, `mix-blend-mode`, `filter: blur()` oder, für eine Hintergrundunschärfe, `backdrop-filter: blur()`, und `overflow: hidden` für einen Screen, der beschneidet, und für eine Maske.
- **Schrift**: `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, wenn sie gesetzt ist, `letter-spacing`, `text-align`, `text-transform` oder Kapitälchen, `text-decoration` und ein Kommentar für den Abstand nach Absätzen.
- **Was eine Gruppe enthält**: Die Gruppe ist `position: relative`, und jede Ebene darin eine eigene Regel, `position: absolute` mit `left` und `top`.

### SwiftUI {#swiftui}

- **Text** ist `Text("…")` mit seiner Schrift (`.system(size:weight:)` für die Schrift des Mac, `.custom()` für andere), Laufweite, Zeilenabstand, Farbe, Ausrichtung, Schreibweise, Unterstreichung und Durchstreichung und einem Frame je nachdem, wie sein Kasten seine Größe findet. Ein Textstil mit Namen ist `.typeToken()`.
- **Rechtecke und Ellipsen** sind `Rectangle()`, `RoundedRectangle()`, `Capsule()`, `Circle()`, `Ellipse()` oder `UnevenRoundedRectangle()`, weiche Ecken als `.continuous`, gefüllt mit ihrer Farbe oder ihrem Verlauf, Rahmen als Overlays. Ein Rechteck, das mit einem Bild gefüllt ist, ist ein `Image()`, auf seine Form beschnitten.
- **Gruppen** sind ein `ZStack` in ihrer Größe, jede Ebene mit `.offset()` an ihren Platz gerückt. Ein Screen ist ein `ZStack` in seiner Größe, mit einem Kommentar, der sagt, wie viele Ebenen er enthält. Screens und Masken sind `.clipped()`.
- **Linien** sind ein dünnes `Rectangle()`, auf ihren Winkel gedreht.
- **Pfade** sind ein `Image()`, nach der Ebene benannt, mit einem Kommentar, die Zeichnung als SVG oder PDF zu exportieren.
- **Effekte**: Schatten als `.shadow()` oder `.shadowToken()`, ein Kommentar für einen inneren Schatten, `.opacity()`, `.blendMode()`, `.blur()` und für eine Hintergrundunschärfe `.ultraThinMaterial` mit einem Kommentar, der sagt, wie stark.

`.typeToken()`, `.shadowToken()` und die Namen unter `Tokens` kommen aus der Datei mit den SwiftUI-Tokens (unten).

## Assets {#assets}

Die letzte Karte ist die gewählte Ebene als Datei, für ein Symbol, eine Illustration oder ein Foto, das der Bau braucht.

::: fields
- **Das Bild**: die Ebene, wie sie gezeichnet ist, in ihrer eigenen Größe oder kleiner, damit sie passt, auf einem Schachbrettmuster; auf einem dunklen, wenn die Ebene selbst hell ist. Zieh es in den Finder oder in Code, und es wird dort zu einer Datei, nach der Ebene benannt, mit `@2x` oder `@3x` hinter dem Namen in diesen Größen.
- **PNG**, **SVG**, **PDF**: das Format der Datei. SVG und PDF bleiben in jeder Größe scharf.
- **1×**, **2×**, **3×**: bei PNG, wie viele Pixel auf einen Punkt kommen.
- **Kopieren**: legt die Datei in die Zwischenablage. Ein PNG wird als Bild eingesetzt; ein SVG als Bild, wo ein Bild hinpasst, und als sein Text in Code; ein PDF als PDF.
:::

Format und Größe, die du wählst, bleiben erhalten; anfangs sind es PNG in 2×. Der Tipp des Bildes sagt, was du bekommst („PNG @2x“). Eine Ebene geht nur so groß hinaus, wie das, was sie malt, Schatten eingeschlossen, auf nichts, so wie beim [Exportieren](/docs/export.html#layers).

## Das Design als Ganzes {#design}

Ist nichts gewählt, zeigt das Panel, woraus das ganze Design besteht.

::: fields
- **Farben**: die Farben, die du benannt hast, jede mit ihrem Namen, dann bis zu zehn weitere, in denen Ebenen am meisten gefüllt, umrandet und geschrieben sind, mit ihrem Wert (und ihrer Deckkraft, wenn sie durchscheinen). Ein Klick kopiert das Token einer benannten Farbe oder den Wert einer anderen Farbe.
- **Schrift**: jeder Textstil, den du benannt hast, als Muster seiner selbst mit Familie, Schnitt, Größe und Zeilenhöhe, dann bis zu sechs weitere Arten, wie Text am häufigsten gesetzt ist. Ein Klick kopiert das Token des Stils oder die Schrift als Code.
- **Code**: die Tokens des Designs und {Mit Claude bauen}, wie im [Modus Prototyp](/docs/prototype.html#handing-on).
- **Für den Export markiert**: bis zu 24 Ebenen, die für den Export markiert sind (Zeichenflächen bleiben hier außen vor), jede als kleines Bild zum Herausziehen als die erste Datei, die ihre [Karte Exportieren](/docs/export.html#marking) macht. Ein Klick auf eine wählt sie. {Exportieren …} öffnet den Dialog Exportieren.
:::

Karten, die nichts zu zeigen haben, fallen weg.

## Design Tokens {#tokens}

Die Chips {CSS}, {SwiftUI} und {JSON} auf der Karte {Code} kopieren alle benannten Looks des Designs auf einmal, als Datei zum Einsetzen ins Projekt. Benenne Farben, Schriften, Schatten und Ecken im Design (siehe [Komponenten, Stile und Bibliotheken](/docs/components.html)), und sie kommen hier heraus. Zwei Looks einer Art mit demselben Namen werden zu „Blau“ und „Blau 2“. Hat das Design dunkle Zeichenflächen oder ein Look eine dunkle Fassung, kommt der dunkle Wert jedes Looks mit (siehe [Hell und dunkel](/docs/dark.html)).

| Format | Was es enthält |
| --- | --- |
| CSS | Custom Properties auf `:root`, gruppiert als Colors, Type, Shadows und Corners: `--color-…`, `--gradient-…`, `--font-…-family`, `-size`, `-weight`, `-line-height` und `-letter-spacing`, `--shadow-…` und `--radius-…`. Dunkle Werte in `@media (prefers-color-scheme: dark)`. Eine Klasse `.text-…` für jeden Textstil. |
| SwiftUI | Ein `enum Tokens` mit `Colors`, `Gradients`, `Typography`, `Shadows` und `Corners`. Eine Farbe mit dunklem Wert ist `Color(light:dark:)`, samt der kleinen Erweiterung, die sie macht. Textstile und Schatten kommen mit `TypeToken` und `ShadowToken` und den Modifiern `.typeToken()` und `.shadowToken()`. |
| JSON | Das Format der W3C Design Tokens Community Group, in den Gruppen `color`, `typography`, `shadow` und `radius`, jedes mit seinem `$type`, seinem `$value` und dem Namen als `$description`. Ein dunkler Wert steht unter `$extensions` als `com.bezzle.dark`. |

Namen werden so geschrieben, wie Code sie schreibt: „Brand blue“ ist `brand-blue` in CSS und JSON und `brandBlue` in Swift. Solange das Design noch keine Namen hat, ruhen die Chips blass und kopieren nichts.

## Das Menü {#menu}

Klick mit der rechten Maustaste auf etwas auf der Arbeitsfläche für sein Menü. Es wählt, was unter dem Zeiger ist, außer es liegt in dem, was schon gewählt ist, das dann gewählt bleibt.

| Eintrag | Kopiert |
| --- | --- |
| {CSS kopieren} | Die Ebene als CSS, wie die Karte {Code} es schreibt. |
| {SwiftUI kopieren} | Die Ebene als SwiftUI. |
| {Als PNG kopieren} | Die Ebene als Bild, in 2×. |
| {Als SVG kopieren} | Die Ebene als SVG, als Bild und als Text. |
| {Namen kopieren} | Den Namen der Ebene. |
| {Text kopieren} | Bei Text: seine Wörter. |

## Tasten {#keys}

| Taste | Im Modus Untersuchen |
| --- | --- |
| {{⌃I}} | Zurück zum Prototyp. |
| {{⌃P}} | Zurück zum Design. |
| {{Esc}} | Wählt das Nächstäußere; vom Screen aus lässt es los. |
| {{Space}} | Gedrückt halten und ziehen, um die Ansicht zu verschieben. |
| {{⌘Return}} oder {{Return}} | Spielt den Prototyp ab. |
| {{⌫}} | Tut nichts: Untersuchen ändert nichts. |

Ein KI-Assistent, der mit Bezzle verbunden ist, kann dieselben Maße, Angaben und denselben Code lesen. Siehe [KI-Assistenten](/docs/ai.html).
