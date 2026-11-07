---
title: Prototypen
nav: Prototypen
lede: Verbinde Buttons mit Screens, indem du einen Faden vom einen zum anderen ziehst, lass Bezzle die Bewegung aus der Lage deiner Screens lesen, gib Komponenten Zustände und tipp dich durch alles im Gerät, für das es gemacht ist.
---

Ein Prototyp in Bezzle ist das Design, das du schon hast, anders gesehen. Für keinen Übergang muss etwas eingerichtet werden: Du verbindest eine Ebene mit dem Screen, zu dem sie führt, und Bezzle erkennt daran, wie die beiden auf der Arbeitsfläche liegen und was sie gemeinsam haben, wie der nächste Screen erscheint. Komponenten zeigen ihren Look für Hover, Gedrückt und Ausgewählt anhand der Namen ihrer Varianten. Spielst du ihn ab, hebt sich der Screen von der Arbeitsfläche in das Gerät, für das er ist, und du klickst dich durch, wie jemand durch das echte Produkt tippen würde.

::: figure prototype
Das Design als Prototyp gesehen: Screens auf Millimeterpapier, ein Lichtfaden von jeder verlinkten Ebene zu dem Screen, den sie öffnet, und die Startfahne am ersten Screen.
:::

## Der Modus Prototyp {#prototype-mode}

Jedes Design lässt sich auf drei Arten sehen, im Umschalter oben rechts in seinem Fenster: {Design}, {Prototyp} und {Untersuchen}. Wähl {Prototyp}, drück {{⌃P}}, oder wähl {Fenster › Prototyp}. Der Tipp des Umschalters sagt, wofür er da ist: „Das Design als Prototyp sehen: seine Screens und die Wege zwischen ihnen“.

Wird das Design zum Prototyp:

- **Die Arbeitsfläche wird zu Millimeterpapier.** Feine blaue Linien, jede fünfte kräftiger, fest mit der Arbeitsfläche verbunden, wenn du sie bewegst. Die Zeichenflächen liegen darauf als Screens.
- **Die Abläufe leuchten auf.** Jeder Link ist als Faden mit Pfeilspitze gezeichnet, und die Fäden leuchten einer nach dem anderen auf, vom Screen aus, auf dem der Prototyp startet, wie Strom durch Drähte läuft.
- **Die Werkzeuge treten zur Seite.** Im Modus Prototyp wird nichts gezeichnet, darum leert sich die Werkzeugleiste (die Schalter für Ebenen und Ressourcen bleiben). Die Tasten der Zeichenwerkzeuge tun hier nichts. Ein Text, in den du gerade getippt hast, wird abgeschlossen, das Werkzeug wechselt zurück zu Auswahl, und ein Pfad oder Bild, das du gerade bearbeitest, wird losgelassen.
- **Der Inspektor zeigt den Prototyp.** Ist nichts gewählt, zeigt er, wo der Prototyp startet, und jeden Weg hindurch; ist eine Ebene gewählt, wohin sie führt; ist ein Screen gewählt, den Teil des Screens selbst.
- **Aus Exportieren … wird Abspielen.** Der Knopf ganz rechts in der Leiste oben wird zu {Abspielen}, im Blau des Bleistifts.
- **Notizen treten zur Seite.** Notizen am Rand sind ausgeblendet, solange du am Prototyp arbeitest, und kommen mit dem Design zurück.

Drück noch einmal {{⌃P}} oder wähl {Design} im Umschalter, um wieder zu zeichnen. Ein Prototyp, der gerade abgespielt wird, hält sofort an.

Nur eingeblendete Zeichenflächen sind Screens. Eine ausgeblendete Zeichenfläche bleibt aus dem Prototyp draußen, ebenso Links auf ausgeblendeten Ebenen.

### Sich bewegen {#moving-around}

Der Modus Prototyp hat keine Werkzeuge, darum tut der Zeiger, was der Prototyp braucht:

- **Zieh auf dem leeren Papier**, um die Ansicht zu verschieben. Der Zeiger wird zur geschlossenen Hand. Hältst du {{Space}} gedrückt und ziehst, verschiebt sich die Ansicht überallhin, wie beim Gestalten. Zoomen funktioniert wie immer.
- **Klick auf eine Ebene**, um sie zu wählen, wie ein Klick sie beim Gestalten wählt: zuerst eine Gruppe, und ein Doppelklick geht eine Ebene hinein. Eine Ebene, die schon irgendwohin führt, wird direkt gewählt, wie tief sie auch liegt, so erreichst du einen Link immer.
- **Ein Klick in eine Kopie einer Komponente wählt die Kopie.** Die Kopie ist das, was irgendwohin führt, darum wird ein Button aus einer Komponente als Ganzes verlinkt. Liegen Kopien in Kopien, wird die innerste gewählt: Ein Button in einer Kartenkomponente ist der Button.
- **{{⇧}}-Klick** fügt dem Gewählten eine Ebene oder einen Screen hinzu oder nimmt sie weg.
- **Klick auf den Hintergrund oder den Namen eines Screens**, um den Screen zu wählen.
- **Zieh einen Screen an seinem Namen**, um ihn auf der Arbeitsfläche zu verschieben. Da die Bewegung aus der Lage der Screens gelesen wird, kann das Verschieben eines Screens ändern, wie er erscheint.
- **Doppelklick auf den Namen oder Hintergrund eines Screens**, um den Prototyp ab diesem Screen abzuspielen.
- **Klick auf das leere Papier**, um das Gewählte loszulassen.

| Taste | Im Modus Prototyp |
| --- | --- |
| {{⌫}} | Entfernt die Links der gewählten Ebenen. Die Ebenen selbst bleiben. |
| {{Return}} | Spielt den Prototyp ab, vom gewählten Screen aus oder von dort, wo er startet. |
| {{Esc}} | Lässt einen Faden los, den du gerade ziehst, schließt eine Notiz, die du gerade schreibst, oder lässt das Gewählte los. |
| {{Space}} | Gedrückt halten und ziehen, um die Ansicht zu verschieben. |
| Pfeiltasten, Werkzeugbuchstaben | Tun nichts: Hier wird nichts gezeichnet oder verschoben. |

## Eine Ebene mit einem Screen verbinden {#linking}

Ein Link sagt, wohin eine Ebene führt, wenn man darauf tippt. Du machst einen, indem du einen Faden aus der Ebene ziehst und ihn über einem Screen loslässt.

::: steps
1. **Zeig auf einen Button.** Er wird umrandet, und solange er noch nirgendwohin führt, sitzt an seinem rechten Rand ein kleiner runder Knauf mit einem Plus: die Stelle, aus der der Faden kommt.
2. **Drück und zieh.** Ein Faden kommt aus der Ebene und folgt dem Zeiger, ein wenig durchhängend wie eine Schnur zwischen zwei Händen. Jeder Screen, zu dem er führen könnte, hebt sich ein wenig, und links vom eigenen Screen der Ebene erscheint eine runde Mulde.
3. **Zieh über den Screen, den er öffnen soll.** Dieser Screen fängt den Faden: Er leuchtet ringsum auf, der Faden spannt sich, und sein Ende kommt am Rand des Screens zur Ruhe, wo der Faden hineinführen wird. Auf einem Trackpad spürst du ein Ticken.
4. **Lass los.** Der Faden ist geknüpft. Er kommt mit einem kleinen Wackeln zur Ruhe, eine Lichtperle läuft an ihm entlang, und der Screen, den er erreicht, leuchtet einmal ringsum auf.
:::

Ein Faden verlässt die Ebene an der Seite, an der du ihn herausziehst, darum kommt er beim Ziehen nach links aus der linken Seite der Ebene. Eine Ebene lässt sich nicht mit dem Screen verbinden, auf dem sie liegt: Dieser Screen fängt den Faden nicht. Lass über dem leeren Papier los, und der Faden schnellt in seine Ebene zurück, und nichts ändert sich.

Jede Ebene hat einen Link. Ziehst du einen neuen Faden aus einer Ebene, die schon irgendwohin führt, und lässt ihn über einem anderen Screen los, führt sie stattdessen dorthin.

> [!tip] Leg die Screens so an, wie sie sich bewegen sollen
> Bezzle liest jeden Übergang von der Arbeitsfläche. Leg den nächsten Screen eines Ablaufs rechts neben den vorigen, und er gleitet von rechts herein; leg einen Screen darunter, und er steigt von unten auf. Siehe [Wie Screens sich bewegen](/docs/prototype.html#motion).

### Einen Faden umlegen oder durchtrennen {#rerouting}

- **Um einen Link woandershin zu führen,** drück auf seinen Faden und zieh. Der Faden löst sich von dem Screen, zu dem er führte, und du kannst ihn über einem anderen loslassen.
- **Um einen Link zu durchtrennen,** zieh seinen Faden von seinem Screen weg und lass ihn über dem leeren Papier los. Solange er lose hängt, wird der Faden rot und gestrichelt, zum Zeichen, dass er durchtrennt wird.
- {{Esc}} beim Ziehen lässt los, ohne etwas zu ändern.

### Zurückgehen {#going-back}

Eine Ebene kann auch zu dem Screen zurückführen, von dem du kamst, wie es ein Zurück-Button oder ein Schließen-Button tut. Während du einen Faden ziehst, sitzt knapp links vom Screen der Ebene, auf ihrer Höhe, eine runde Mulde mit einem Haken darin. Lass über der Mulde los, und die Ebene führt zurück.

Eine Ebene, die zurückführt, ist statt mit einem Faden mit einem kurzen gestrichelten Haken gezeichnet, der sich aus ihrer linken Seite krümmt. Beim Abspielen kehrt sie zu dem Screen zurück, der hierher geführt hat, so, wie dieser Screen erschienen ist, rückwärts abgespielt.

### Die Karte Führt zu {#goes-to-card}

Wähl eine Ebene, und der Inspektor öffnet ihre Karte {Führt zu}. Sie kann alles, was das Ziehen eines Fadens kann, und ein wenig mehr. Ihre zugeklappte Zeile sagt, wohin die Ebene führt: den Namen eines Screens, {Zurück}, {Nirgends}, oder {Gemischt}, wenn mehrere Ebenen gewählt sind und sie an verschiedene Orte führen.

::: fields
- **Die Screens**: jeder andere Screen als kleines Bild mit seinem Namen, drei pro Reihe. Klick auf einen, um die Ebene dorthin zu führen; klick noch einmal auf den gewählten, um den Link wegzunehmen. Zeig auf ein Bild, und die Arbeitsfläche zeichnet den gestrichelten Faden, den die Ebene dorthin nehmen würde.
- **Zurück**: der runde Haken nach den Screens. Sein Tipp: „Geht zurück zum Screen, von dem man kam“. Ein weiterer Klick nimmt ihn wieder weg.
- **Die Notiz**: eine Zeile zum Beschreiben, in einer Handschrift, mit dem Hinweis „Warum, oder wann: nach dem Anmelden“. Erscheint, sobald die Ebene irgendwohin führt. Siehe [Notizen an Fäden](/docs/prototype.html#notes).
- **Die Bewegung**: vier Möglichkeiten, {Auto}, {Schieben}, {Überblenden} und {Sofort}, jede ein kleines bewegtes Bild zweier Screens, das abläuft, während du darauf zeigst; ihr Name steht in ihrem Tipp. Ist {Auto} gewählt, sagt eine Zeile darunter, wie die Arbeitsfläche den Screen erscheinen lässt. Siehe [Wie Screens sich bewegen](/docs/prototype.html#motion).
- **Link entfernen**: das × in der Ecke der Karte, solange sie offen ist.
:::

### Mehrere Ebenen auf einmal {#several}

Klick mit {{⇧}} mehrere Ebenen an und dann auf einen Screen in der Karte {Führt zu}: Sie führen alle dorthin. Ihre Notizen und Bewegungen bleiben, wie jede sie hatte. Haben die gewählten Ebenen denselben Link, dieselbe Notiz und dieselbe Bewegung, gelten Notiz und Bewegung der Karte für alle zugleich.

### Das Menü {#menu}

Klick mit der rechten Maustaste auf eine Ebene, einen Faden oder einen Screen für ein Menü dessen, was er kann:

| Eintrag | Was er tut |
| --- | --- |
| {Ab hier abspielen} | Auf einem Screen: spielt den Prototyp ab ihm ab. |
| {Hier starten} | Auf einem Screen: Der Prototyp startet auf ihm. Mit Häkchen, und nicht noch einmal angeboten, auf einem Screen, der schon als Start markiert ist. |
| {Zu …} | Einer für jeden anderen Screen, mit seinem Namen: führt die Ebene dorthin. Der Screen, zu dem sie jetzt führt, hat ein Häkchen. |
| {Zurück gehen} | Auf einer Ebene: Sie führt zum Screen davor zurück. |
| {Notiz schreiben} | Schreibt auf ihren Faden. Erscheint, wenn sie irgendwohin führt. |
| {Link entfernen} | Nimmt den Link weg. Erscheint, wenn sie irgendwohin führt. |

### Links wegnehmen {#removing}

Jeder dieser Wege nimmt einen Link weg und lässt die Ebene, wie sie ist: {{⌫}} bei gewählter Ebene (der Modus Prototyp löscht nie Ebenen), das × auf der Karte {Führt zu}, {Link entfernen} im Menü, ein erneuter Klick auf den gewählten Screen in der Karte oder das Durchtrennen des Fadens auf der Arbeitsfläche. Mit einem Link verschwinden auch seine Notiz und seine Bewegung.

Löschst du einen Screen, führen die Links, die zu ihm führten, nirgendwohin, und ihre Fäden verschwinden.

## Notizen an Fäden {#notes}

Eine Notiz sagt in deinen eigenen Worten, warum oder wann eine Ebene dorthin führt, wohin sie führt: „nach erfolgreicher Anmeldung“, „nur für Neukunden“. Sie ist für die Leute, die den Prototyp lesen, und für einen KI-Assistenten, der ihn in Code baut.

- **Doppelklick auf einen Faden**, um darauf zu schreiben, oder wähl {Notiz schreiben} in seinem Menü, oder tipp in die Notizzeile der Karte {Führt zu}. Auf der Arbeitsfläche öffnet sich in der Mitte des Fadens ein kleines Papierschild mit dem Hinweis „Warum, oder wann“.
- {{Return}} behält die Notiz, ebenso ein Klick anderswohin. {{Esc}} schließt sie ohne Änderung. Leere die Zeile, um eine Notiz wegzunehmen.
- Die Notiz hängt als Papierschild an ihrem Faden, in einer Handschrift, und der Faden ist darunter weiter zu sehen. Eine lange Notiz wird auf der Arbeitsfläche mit Auslassungspunkten gekürzt und ganz aufbewahrt.
- Ein Klick auf das Schild wählt seine Ebene, wie ein Klick auf den Faden.
- Notizen erscheinen auch unter jedem Weg in der Liste des Inspektors, und beim Abspielen des Prototyps wird die Notiz des eben genommenen Wegs unter dem Gerät von Hand ausgeschrieben.

## Wie Screens sich bewegen {#motion}

Wie ein Screen erscheint, wird von der Arbeitsfläche gelesen, und die Wahl {Auto} stimmt fast immer. Du kannst trotzdem in der Karte {Führt zu} für jeden Link eine einfache Bewegung wählen.

| Bewegung | Was sie tut |
| --- | --- |
| {Auto} | Gelesen aus der Lage der Screens und dem, was sie teilen (unten). So beginnt jeder Link. |
| {Schieben} | Der nächste Screen gleitet von der Seite herein, auf der er liegt, und der vorige weicht, was immer sie teilen. |
| {Überblenden} | Der vorige Screen blendet in den nächsten über. |
| {Sofort} | Der nächste Screen ist sofort da. |

### Was Auto von der Arbeitsfläche liest {#auto}

{Auto} schaut auf den Screen, von dem ein Link kommt, und auf den Screen, zu dem er führt, und wählt eine von drei Arten:

- **Ein Sheet,** wenn der nächste Screen nicht breiter ist als der, über dem er sich öffnet, und entweder niedriger als 92 Prozent von dessen Höhe oder schmaler als 92 Prozent von dessen Breite. Er steigt von unten über den Screen auf, über dem er sich öffnet, und dieser wird dahinter abgedunkelt. Das Sheet sitzt mittig am unteren Rand des Geräts, mit abgerundeten oberen Ecken.
- **Ein Morph,** wenn die beiden Screens im Grunde derselbe Screen sind, verändert: Mindestens 60 Prozent ihrer Ebenen sind nach Art und Name dieselben Ebenen (der erste „Titel“ mit dem ersten „Titel“, eine Kopie einer Komponente mit einer Kopie derselben), und einige davon haben sich bewegt, ihre Größe oder ihren Look geändert. Was sie teilen, wandert an seinen neuen Platz und nimmt seinen neuen Look an; was nur auf dem ersten ist, blendet aus, während es wegtreibt; was nur auf dem zweiten ist, blendet ein und treibt von der Seite, auf der der Screen liegt, an seinen Platz; und der Hintergrund wechselt die Farbe zwischen ihnen. Dupliziere einen Screen und ändere ihn, und die beiden morphen.
- **Ein Push,** sonst. Der nächste Screen gleitet von der Seite herein, auf der er liegt, so, wie das Auge auf der Arbeitsfläche zwischen ihnen wandert: Einer rechts kommt von rechts, einer links von links, einer darunter steigt von unten auf, einer darüber kommt von oben. Liegt ein Screen sowohl seitlich als auch darunter oder darüber, gewinnt die Richtung, in der er weiter entfernt liegt, gemessen an der Größe der Screens. Der vorige Screen weicht ein wenig zur anderen Seite und dunkelt sich unter dem Schatten des neuen ab.

Solange {Auto} gewählt ist, sagt die Karte {Führt zu} mit einem dieser Sätze, was sie gelesen hat:

| Die Karte sagt | Das heißt |
| --- | --- |
| Gleitet von rechts herein, wie er auf der Arbeitsfläche liegt. | Ein Push von rechts. |
| Gleitet von links herein, wie er auf der Arbeitsfläche liegt. | Ein Push von links. |
| Steigt von unten auf, wie er auf der Arbeitsfläche liegt. | Ein Push von unten. |
| Kommt von oben, wie er auf der Arbeitsfläche liegt. | Ein Push von oben. |
| Was beide Screens teilen, bewegt sich; der Rest ändert sich drumherum. | Ein Morph. |
| Kleiner als der Screen darunter: steigt als Sheet darüber auf. | Ein Sheet. |

### Was an seinem Platz bleibt {#shared-layers}

Bei einem Schieben oder Push bleiben Ebenen, die auf beiden Screens an derselben Stelle liegen und genau gleich aussehen, etwa eine Tableiste, eine Statusleiste oder ein Titel, wo sie sind, während der Rest des Screens unter ihnen durchgleitet, wie es die Leisten einer echten App tun. Das geschieht, wenn keiner der beiden Screens gescrollt ist.

### Timing {#timing}

Jede Bewegung wird von einer Feder getragen, darum beginnt sie schnell und kommt sanft zur Ruhe:

| Art | Dauert etwa |
| --- | --- |
| Push oder Schieben | 0,5 Sekunden |
| Morph | 0,62 Sekunden |
| Sheet | 0,62 Sekunden, mit einem kleinen Nachgeben oben, wenn es landet |
| Überblenden | 0,34 Sekunden |
| Sofort | Keine Zeit |

Zurückgehen spielt die Art, wie der Screen erschienen ist, rückwärts ab: Ein Sheet fällt weg, ein hereingeschobener Screen gleitet wieder hinaus. Ein Neubeginn von vorn blendet zum ersten Screen über.

## Wo der Prototyp startet {#start}

Am Screen, auf dem der Prototyp startet, ragt links nahe der Oberkante eine Fahne heraus, darauf das Dreieck für Abspielen.

- **Zieh die Fahne** auf einen anderen Screen, um dort zu starten. Ein Geisterbild davon auf dem Screen unter dem Zeiger zeigt, wo sie landen wird.
- **Zeig auf einen anderen Screen**, und ein gestricheltes Geisterbild der Fahne erscheint an derselben Stelle darauf. Klick auf das Geisterbild, und die Fahne fliegt von dort herüber, wo sie war.
- **Im Menü** eines Screens wählst du {Hier starten}.
- **Im Inspektor**, wenn nichts gewählt ist, listet das Menü {Start} unter der Startkarte jeden Screen auf. Ist ein Screen gewählt, hat seine Karte {Screen} ein Ankreuzfeld {Startet hier}.

Ist kein Screen als Start markiert, startet der Prototyp auf dem ersten Screen, von dem ein Link ausgeht und zu dem keiner führt, oder sonst auf dem ersten Screen, den es gibt. Nimmst du das Häkchen bei {Startet hier} weg, wählt Bezzle wieder auf diese Weise.

## Screens, die von selbst weitergehen {#timed}

Ein Screen kann nach einer Weile ohne Tippen zum nächsten weitergehen, wie es ein Splash-Screen oder eine Bestätigung tut. Wähl den Screen, und seine Karte {Screen} öffnet sich. Ihre zugeklappte Zeile funktioniert wie ein Drehregler: Zieh seitwärts darüber, um festzulegen, wie lange der Screen wartet, wobei die Breite der Karte der ganze Bereich von nichts bis 10 Sekunden ist. Das Ziehen rastet bei 0,5, 1, 1,5, 2, 3 und 5 Sekunden ein, wenn es daran vorbeikommt, und das Trackpad tickt dort. Zurück auf nichts gezogen, wartet der Screen wieder auf ein Tippen. Solange ein Screen nicht wartet, sagt eine Zeile unter seiner Karte: „Zieh die Karte zur Seite, und der Screen geht von selbst weiter, wie ein Splash-Screen.“

Sobald er wartet, zeigt die offene Karte {Geht dann von selbst weiter zu}, mit jedem anderen Screen als Bild zum Anklicken. Du kannst auch einen Faden aus dem Hintergrund des Screens selbst auf den Screen ziehen, zu dem er weitergeht: Der Faden eines Screens kommt aus seinem rechten Rand. Von selbst weiter geht er erst, wenn er eine Wartezeit hat.

Die Zeit wird auf eine Zehntelsekunde genau gehalten, mindestens 0,1 Sekunden. Auf der Arbeitsfläche ist der Faden des Screens gestrichelt, und eine kleine Uhr neben seinem Anfang sagt, wie lange er wartet („1,5 s“). Die zugeklappte Zeile der Karte sagt {Weiter nach 1,5 s}; sonst sagt sie {Startet hier} auf dem Startscreen oder wie viele Wege hineinführen („1 Weg hierher“, „3 Wege hierher“).

Die offene Karte {Screen} hat auch {Ab hier abspielen}.

## Zustände einer Kopie {#states}

Eine Kopie einer Komponente kann ihr Aussehen ändern, während sie benutzt wird: heller, solange der Zeiger darauf ist, dunkler, solange sie gedrückt wird, ausgefüllt, sobald sie ausgewählt ist. In Bezzle muss dafür nichts eingerichtet werden. Eine Variante einer Komponente spielt einen Zustand, wenn ihr Name es sagt: Eine Variante namens „Hover“ zeigt sich, solange der Zeiger auf einer Kopie ist, eine namens „Gedrückt“, solange sie gedrückt wird, und so weiter. Der Name sagt es, für Menschen wie für einen Assistenten, der den Prototyp in Code baut. Wie du Varianten machst, steht unter [Komponenten](/docs/components.html).

| Zustand | Namen, unter denen er läuft | Im abgespielten Prototyp |
| --- | --- | --- |
| Hover | hover, hovered, hovering, mouseover, over, überfahren | Zeigt sich, solange der Zeiger darauf ist |
| Gedrückt | pressed, press, down, tap, tapped, active, gedrückt | Zeigt sich, solange es gedrückt wird |
| Fokussiert | focus, focused, fokus, fokussiert | Zeigt sich nach einem Tippen, wie ein Feld |
| Ausgewählt | selected, on, checked, chosen, current, ausgewählt, aktiviert, an, gewählt | Ein Tippen schaltet es ein und aus |
| Deaktiviert | disabled, inactive, unavailable, deaktiviert, inaktiv, gesperrt | Nimmt kein Tippen an |
| Lädt | loading, busy, progress, spinner, wait, waiting, lädt, laden, ladend | Zeigt sich kurz, bevor es weitergeht |
| Fehler | error, invalid, failed, failure, fehler, ungültig, fehlerhaft | Für den Code, wenn etwas schiefgeht |
| Erfolg | success, done, valid, complete, completed, erfolg, erfolgreich, fertig | Für den Code, wenn etwas geklappt hat |

Englische, deutsche, französische und italienische Namen funktionieren alle, etwa „Pressed“, „Gedrückt“, „Survolé“ oder „Premuto“. Groß- und Kleinschreibung und Akzente machen keinen Unterschied. Der Name kann der ganze Name der Variante sein oder ein beliebiges Wort darin, etwa „Button / Hover“ oder „Primär gedrückt“; nennen mehrere Wörter Zustände, gewinnt das letzte, also ist „Ausgewählt Hover“ ein Hover. Die erste Variante einer Komponente (die „Standard“ heißt, bis du sie umbenennst) ist nur dann ein Zustand, wenn du ihr den Namen eines Zustands gegeben hast.

### Die Karte Zustände {#states-card}

Wähl im Modus Prototyp eine Kopie einer Komponente, und unter {Führt zu} erscheint eine Karte {Zustände}. Ihre zugeklappte Zeile listet die Zustände auf, die die Komponente hat, oder sagt {Keine}.

::: fields
- **Die Varianten**: jede mit einem Punkt (blau, wenn sie ein Zustand ist), ihrem Namen und darunter, was sie im Prototyp tut. Die erste Variante sagt {In Ruhe}.
- **Verwenden als**: neben jeder Variante außer der ersten, deren Name keinen Zustand nennt, ein Menü der acht Zustände. Wählst du einen, wird die Variante nach diesem Zustand umbenannt.
- **Die fehlenden Zustände**: gestrichelte Chips für {Hover}, {Gedrückt}, {Ausgewählt}, {Deaktiviert} und {Lädt}, wenn die Komponente keine Variante dafür hat. Ein Klick macht eine neue Variante, die so aussieht, wie die Kopie jetzt aussieht, benennt sie nach dem Zustand und zeigt sie in der Kopie, bereit zum Ändern. Der Tipp des Chips sagt, was der Zustand tun wird.
:::

### Wie Kopien sich beim Abspielen verhalten {#states-played}

- Der Zeiger auf einer Kopie mit einer Variante {Hover} zeigt diese; das Drücken einer Kopie mit einer Variante {Gedrückt} zeigt jene, bis du loslässt.
- Ein Tippen auf eine Kopie, die irgendwohin führt, folgt ihrem Link. Hat die Kopie eine Variante {Lädt}, zeigt sich diese zuerst 0,9 Sekunden lang, dann erscheint der nächste Screen.
- Ein Tippen auf eine Kopie mit einer Variante {Ausgewählt} und ohne Link schaltet sie ein, und das nächste Tippen schaltet sie wieder aus, wie bei einem Ankreuzfeld, einem Schalter oder einem Tab. Eine Kopie, die du schon mit {Ausgewählt} platziert hast, schaltet sich zur ersten Variante der Komponente aus.
- Ein Tippen auf eine Kopie mit einer Variante {Fokussiert} und ohne Link fokussiert sie. Nur eine Kopie ist jeweils fokussiert: Fokussierst du eine andere, verliert die erste den Fokus, wie bei Feldern.
- Eine Kopie, die {Deaktiviert} zeigt, zeigt keinen Look für Hover oder Gedrückt und nimmt überhaupt kein Tippen an.
- {Fehler} und {Erfolg} werden nicht abgespielt. Sie sagen allen, die das echte Produkt bauen, welche Variante zu zeigen ist, wenn etwas schiefgeht oder klappt.

## Wenn nichts gewählt ist {#overview}

Klick auf das leere Papier, und der Inspektor zeigt den Prototyp als Ganzes, auf drei Karten.

::: fields
- **Die Startkarte**: der Screen, auf dem der Prototyp startet, in seinem Gerät auf einer kleinen beleuchteten Bühne, mit einem Knopf zum Abspielen darüber. Klick darauf, um abzuspielen; sein Tipp sagt „Ab … abspielen“ mit dem Namen des Screens. Darunter die Fahne und der Name des Screens, und bei mehr als einem Screen das Menü {Start}, um anderswo zu starten. Ihr Tipp: „Wo der Prototyp startet. Auf der Arbeitsfläche ziehst du die Fahne auf einen anderen Screen.“
- **Die Wege hindurch**: jeder Link, als Geschichte. Jede Zeile nennt die Ebene, einen kleinen Faden (oder einen Haken für eine, die zurückführt) und wohin sie führt, darunter den Screen, auf dem sie liegt, und ihre Notiz in einer Handschrift. Ein Screen, der von selbst weitergeht, zeigt, wie lange er wartet. Ein Klick wählt diese Ebene und holt sie ins Bild. Bis zu 60 Zeilen. Gibt es noch keine Links, zeigt eine kleine Zeichnung, wie einer entsteht: „Zieh einen Faden von einem Button auf einen Screen“.
- **Code**: die benannten Looks des Designs als Tokens, der Weg, den ganzen Prototyp an Claude zu übergeben, und {Untersuchen}. Siehe unten.
:::

### Den Prototyp weitergeben {#handing-on}

Die Karte {Code} zählt die Tokens des Designs („12 Tokens“): die Farben, Schriften, Schatten und Ecken, denen du Namen gegeben hast. Ihre drei Chips kopieren alle auf einmal, als {CSS}, {SwiftUI} oder {JSON}; ein Häkchen sagt, wann es erledigt ist. Hat das Design noch keine Namen, ruhen die Chips blass, und ihr Tipp sagt: „Gib Farben, Schrift, Schatten oder Ecken im Design einen Namen, dann kommen sie hier als Tokens heraus.“ [Untersuchen und Übergabe](/docs/inspect.html#tokens) sagt, was jede Datei enthält.

{Mit Claude bauen} kopiert, was du Claude sagen kannst. Ist Bezzle als KI-Server verbunden, bekommt Claude jeden Screen, jeden Ablauf, jeden Zustand und jedes Token auf einmal, baut einen funktionierenden Prototyp als eine HTML-Datei mit ihren Bildern daneben und kann zurück ins Design schreiben, was sich im Code ändert. Das kopiert der Knopf, mit dem Namen deines Designs darin:

```
Build a working prototype of my Bezzle design "Design name". Use the Bezzle MCP server: run its build_prototype prompt (or call get_prototype) for the screens, flows, component states, design tokens and assets. Make it one self-contained HTML file with its pictures beside it, that opens straight from the Finder: no server, no build step, nothing to install. Keep every element tagged with its Bezzle layer id, and when the prototype changes, write the change back into the design with Bezzle's tools.
```

Setz es in Claude Desktop oder einem anderen Assistenten ein, der mit Bezzle verbunden ist. Wie du einen verbindest, steht unter [KI-Assistenten](/docs/ai.html).

{Untersuchen} schaltet die Arbeitsfläche in den [Modus Untersuchen](/docs/inspect.html), um das Design von Hand zu bauen, Ebene für Ebene.

## Den Prototyp abspielen {#playing}

Jeder dieser Wege spielt den Prototyp ab:

- {Abspielen} ganz rechts in der Leiste oben, oder {Fenster › Prototyp abspielen}, oder {{⌘Return}}. Er spielt vom gewählten Screen ab (oder vom Screen, auf dem eine gewählte Ebene liegt), sonst von dort, wo der Prototyp startet. Das geht auch im Modus Design.
- {{Return}} im Modus Prototyp.
- Ein Klick auf die Startkarte im Inspektor.
- Ein Doppelklick auf einen Screen oder seinen Namen, {Ab hier abspielen} im Menü eines Screens oder {Ab hier abspielen} auf seiner Karte {Screen}: ab diesem Screen.

Zum Abspielen braucht es mindestens eine Zeichenfläche.

Das Fenster wird zu einer beleuchteten Bühne aus demselben Millimeterpapier. Der Screen hebt sich von der Arbeitsfläche ab und legt sich in sein Gerät, und das Gerät erscheint um ihn herum. Unter dem Gerät steht der Name des Screens, darüber, von Hand ausgeschrieben, die Notiz des Wegs, den du eben genommen hast.

### Sich durchklicken {#clicking-through}

- **Klick auf eine Ebene, die irgendwohin führt**, um ihrem Link zu folgen. Über allem, worauf man tippen kann, wird der Zeiger zur zeigenden Hand.
- **Klick dorthin, wo man auf nichts tippen kann,** und alles auf dem Screen, worauf man tippen kann, leuchtet kurz blau auf, so siehst du, wohin es geht.
- **Scroll** mit dem Trackpad oder dem Mausrad, wenn ein Screen höher ist als das Gerät, wie eine lange Seite. Jeder neue Screen beginnt oben.
- **Klick oberhalb eines Sheets**, auf den abgedunkelten Screen dahinter, um zurückzugehen, wie du ein Sheet in einer App schließen würdest.
- **Screens, die von selbst weitergehen**, gehen nach ihrer Zeit weiter, solange du auf ihnen bleibst.

Die Bedienelemente oben rechts auf der Bühne und ihre Tasten:

| Bedienelement | Taste | Was es tut |
| --- | --- | --- |
| {Zurück} | {{←}} oder {{⌫}} | Zurück zum Screen davor, so, wie dieser erschienen ist, rückwärts abgespielt. Gibt es nichts, wohin es zurückgeht, schüttelt das Gerät den Kopf. |
| {Von vorn} | {{R}} | Zurück zum ersten Screen, mit dem Zustand jeder Kopie wie am Anfang. |
| {Beenden} | {{Esc}} | Beendet das Abspielen. Ein Klick auf die Bühne außerhalb des Geräts ebenso. |

Hörst du auf, fliegt der Screen, auf dem du bist, an seinen Platz auf der Arbeitsfläche zurück, was ihn ins Bild holt, und er bleibt gewählt.

### Das Gerät {#device}

Ein Screen wird in dem Gerät abgespielt, für das er gemacht ist, gewählt nach seiner Größe:

- **Eine Größe aus den Vorlagen für Zeichenflächen von Bezzle** spielt im Gerät dieser Vorlage: ein iPhone mit seiner Dynamic Island, ein Android-Telefon, ein iPad, ein MacBook, ein iMac oder ein anderer Desktop, ein Browserfenster, eine Apple Watch oder der Rahmen eines Social-Media-Beitrags, einer Story oder eines Banners.
- **Die Breite einer Vorlage für Telefon, Tablet, Mac, Web oder Uhr, aber höher,** wie eine lange Seite zum Scrollen, spielt im Gerät dieser Vorlage in der Höhe der Vorlage und scrollt.
- **Jede andere Größe** wird aus ihrer Form gelesen: Bis 460 Punkt breit und mindestens 1,3-mal so hoch spielt in einem Telefon; bis 1.100 Punkt breit und mindestens 0,6-mal so hoch in einem Tablet; breiter als 1.100 Punkt in einem Browserfenster; alles andere als Karte. Ein Telefon, ein Tablet oder ein Browser ist so hoch, wie ein solcher Screen wäre, und ein höherer Screen scrollt darin.

Ein Screen, der breiter ist als sein Gerät, wird kleiner gezeichnet, damit er in die Breite passt. Das Gerät wird so groß, wie das Fenster es erlaubt, bis zum Eineinviertelfachen seiner eigenen Größe.

## Widerrufen, und Designs, die du nur liest {#undo}

Alles, was du im Modus Prototyp tust, ist ein Schritt in {Bearbeiten › Rückgängig}, benannt nach dem, was es getan hat: {Verlinken}, {Link entfernen}, {Notiz schreiben}, {Bewegung ändern}, {Von selbst weiter}, {Start verschieben} und {Screen bewegen}. Das Hinzufügen eines Zustands ist eine {Neue Variante}. Abspielen ändert nichts, darum hinterlässt es keinen Schritt.

In einem Design, das jemand nur zum Lesen mit dir geteilt hat, kannst du den Prototyp sehen und abspielen, aber keine Fäden ziehen und die Karten nicht ändern. [Teilen](/docs/sharing.html) sagt mehr über Designs, die zum Lesen geteilt sind.
