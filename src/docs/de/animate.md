---
title: Animieren
nav: Animieren
lede: Bring ein Design in Bewegung. Stell seine Ebenen entlang einer Zeitleiste Pose für Pose hin, gib ihnen fertige Bewegungen, lass eine Kamera in 2D und 3D über die Zeichenfläche fliegen und sichere den Film als Video, während das Design selbst genau so bleibt, wie es ist.
---

Animieren ist eine vierte Art, ein Design zu sehen, neben Design, Prototyp und Untersuchen. Jede Zeichenfläche kann einen Film haben: Mit der Zeit erscheinen ihre Ebenen, bewegen sich, wachsen, drehen sich und blenden aus, und eine Kamera schaut auf alles, näher, gerollt oder aus einem Winkel. Den Film machst du Pose für Pose. Setz die Abspielposition auf einen Moment, verschieb oder dreh dann eine Ebene direkt auf der Arbeitsfläche, und Bezzle merkt sich das als Keyframe. Zwischen den Keyframes ermittelt es die Bewegung.

Das Design ändert sich nie, während du animierst. Ein Keyframe wird als Änderung gegenüber dem Design aufbewahrt: so weit rechts von dort, wo die Ebene liegt, so viel größer, als sie ist. Änderst du später das Design, folgt ihm der Film.

::: figure animate
Ein Poster als Film: Die Kamera schaut aus einem Winkel auf die Zeichenfläche, und die Zeitleiste hat eine Linie für sie und für jede Ebene, die sich bewegt.
:::

## Der Modus Animieren {#animate-mode}

Wähl {Animieren} im Umschalter oben rechts im Fenster, drück {{⌃A}}, oder wähl {Fenster › Animieren}. Der Tipp des Umschalters sagt, wofür er da ist: „Das Design animieren: seine Ebenen und eine Kamera, Pose für Pose entlang einer Zeitleiste“.

Wechselt das Design zu Animieren:

- **Die Arbeitsfläche wird zu Millimeterpapier,** wie im Modus Prototyp, und die Werkzeuge treten zur Seite: Hier wird nichts gezeichnet, darum leert sich die Werkzeugleiste, und die Tasten der Zeichenwerkzeuge tun nichts.
- **Eine Zeichenfläche trägt den Film.** Sie zeigt den Film an der Abspielposition, durch seine Kamera. Die Ansicht gleitet so, dass diese Zeichenfläche ganz über der Zeitleiste liegt.
- **Die Zeitleiste erscheint** auf einer Karte am unteren Rand der Arbeitsfläche. Siehe [Die Zeitleiste](#timeline).
- **Der Inspektor zeigt den Film:** {Bewegungen} und {Film}, wenn nichts gewählt ist, dazu {Pose}, wenn Ebenen gewählt sind, und {Kamera}, wenn die Kamera gewählt ist.
- **Aus Exportieren … wird Abspielen.** Der Knopf ganz rechts in der Leiste oben spielt den Film ab und sagt {Pause}, solange er läuft.

Drück noch einmal {{⌃A}} oder wähl {Design} im Umschalter, um wieder zu zeichnen. Das Design ist da, wie du es verlassen hast.

### Welche Zeichenfläche {#film-board}

Jede Zeichenfläche hat einen eigenen Film. Animieren wendet sich der Zeichenfläche dessen zu, was ausgewählt ist, bleibt sonst bei dem Film, den es zuletzt gezeigt hat, oder nimmt sonst die Zeichenfläche, von der am meisten zu sehen ist. Um am Film einer anderen Zeichenfläche zu arbeiten, klick auf den Namen dieser Zeichenfläche oder auf eine leere Stelle darauf.

### Wählen und sich bewegen {#picking}

- **Klick auf eine Ebene**, um sie zu wählen, wie ein Klick sie beim Gestalten wählt: zuerst eine Gruppe, und ein Doppelklick geht eine Ebene weiter hinein. {{⌘}}-Klick wählt die oberste Ebene unter dem Zeiger, wie tief sie auch liegt.
- **{{⇧}}-Klick** fügt dem Gewählten eine Ebene hinzu oder nimmt sie weg.
- **Zieh von einer leeren Stelle** auf der Zeichenfläche oder auf dem Papier daneben, um ein Auswahlrechteck um Ebenen aufzuziehen: Jede Ebene, die es berührt, wird gewählt.
- **Klick auf einen Namen in der Zeitleiste**, um diese Ebene zu wählen; {{⇧}}-Klick fügt sie hinzu.
- **Halte {{Space}} gedrückt und zieh**, um die Ansicht zu verschieben. Zoomen funktioniert wie immer.
- **Drück auf einen Film, der gerade läuft**, und er hält an, sodass du Posen setzen kannst.

Ausgeblendete und gesperrte Ebenen werden auf der Arbeitsfläche nicht gewählt.

## Einer Ebene eine Pose geben {#posing}

Wähl eine Ebene, setz die Abspielposition auf einen Moment (siehe [Die Abspielposition](#playhead)) und ändere die Ebene auf der Arbeitsfläche mit den Griffen, die die Arbeitsfläche überall hat. Jede Änderung ist ein Keyframe an der Abspielposition, ohne Nachfrage gesetzt.

| Pose | Auf der Arbeitsfläche | Mit gehaltener Taste |
| --- | --- | --- |
| {Versatz} | Zieh die Ebene. Sie rastet an dem Platz ein, an dem das Design sie hat. | {{⇧}} hält die Richtung, in die es überwiegend ging; mit {{⌘}} rastet nichts ein |
| {Skalierung} | Zieh an einer Ecke, um sie um ihre Mitte zu vergrößern oder zu verkleinern, oder an der Mitte einer Seite für nur eine Richtung. Sie rastet bei 100 % ein. | Mit {{⌘}} rastet nichts ein |
| {Drehung} | Zieh von knapp außerhalb einer Ecke. Drehungen addieren sich, zweimal herum sind also 720°. | {{⇧}} für Schritte von 15° |
| {Neigung} | Zieh von knapp außerhalb der Mitte der oberen oder unteren Seite: Die Ebene kippt in die Tiefe nach hinten oder vorne. Sie rastet bei flach ein. | {{⇧}} für Schritte von 15° |
| {Schwenk} | Zieh von knapp außerhalb der Mitte der linken oder rechten Seite: Die Ebene schwenkt in der Tiefe herum. | {{⇧}} für Schritte von 15° |
| {Anhebung} | Halte beim Verschieben der Ebene {{⌃|Alt}} und zieh nach oben, um sie näher zu holen, nach unten, um sie wegzuschieben. Sie rastet an der Seite ein. | {{⇧}} für Schritte von zehn Punkt |

{Deckkraft} und {Unschärfe} haben keinen Griff auf der Arbeitsfläche: Stell sie auf der [Karte Pose](#pose-card) ein, oder gib der Ebene eine [Bewegung](#moves).

Die Pfeiltasten verschieben das Gewählte um 1 Punkt, oder mit {{⇧}} um 10. Sind mehrere Ebenen gewählt, bekommen sie ihre Pose gemeinsam.

{Neigung} und {Schwenk}, auf der [Karte Pose](#pose-card) für mehrere Ebenen eingetippt, die zusammenliegen, geben ihnen an der Abspielposition eine Pose als [ein Körper](/docs/looks.html#depth-body), mit einem Keyframe für Neigung und Schwenk jeder Ebene, und für ihren Platz, ihre Anhebung und ihre Drehung, wo sie sich ändern. Die Griffe auf der Arbeitsfläche kippen oder schwenken eine Ebene auf einmal. Zwischen den Keyframes geht jede Zahl ihren eigenen Weg, sodass ein Körper dort nur beinahe starr ist: Gruppiere die Ebenen, damit sie durchgehend eines bleiben.

> [!windows] Alt für die Tiefe
> In Bezzle für Windows drückst du {{Alt}} erst, wenn das Ziehen läuft, um die Ebene anzuheben. Schon beim Drücken gehalten, tut Alt, was es überall tut.

### Die erste Pose ist eine ganze Bewegung {#first-pose}

Eine Ebene, die noch keine Keyframes hat, hat nichts, von dem aus sie sich bewegen könnte. Darum bekommt die erste Pose, die du ihr gibst, das Design als Gegenstück, und ein einziges Ziehen ist eine ganze Bewegung:

- **Am Anfang des Films hingestellt,** startet die Ebene dort, wo du sie hinstellst, und fliegt in einer halben Sekunde nach Hause, dorthin, wo das Design sie hat. So erscheint etwas: Zieh es am Anfang zur Seite weg, und es kommt an.
- **Später hingestellt,** bekommt die Ebene am Anfang einen Keyframe, wie das Design sie hat, und verlässt ihr Zuhause in Richtung dessen, wo du sie hinstellst; dort kommt sie an der Abspielposition an.

Bezzle spielt die neue Bewegung dann einmal ab und bringt die Abspielposition zurück, sodass du siehst, was du gemacht hast. Lässt du die Ebene dort los, wo das Design sie hat, wird nichts aufbewahrt.

### Der Weg, den eine Ebene nimmt {#way}

Eine gewählte Ebene, die sich bewegt, zeigt ihren Weg über die Zeichenfläche: eine feine Linie mit einem kleinen Strich in gleichen Zeitabständen, sodass dicht gedrängte Striche heißen, dass sie dort langsam ist, und eine Perle an jedem Keyframe von {Versatz}, hohl, wo die Ebene zu Hause ist. Zieh eine Perle, um den Ort dieses Keyframes zu verschieben; die Abspielposition geht zum Keyframe, sobald du die Perle anfasst.

### Die Karte Pose {#pose-card}

Sind Ebenen gewählt, zeigt die Karte {Pose} ihre Pose an der Abspielposition in genauen Zahlen. Die Zeile der Karte nennt den Moment, in Sekunden.

::: fields
- **Versatz**: {X} und {Y}, Punkt ab dem Platz, an dem das Design die Ebene hat.
- **Skalierung**: Prozent ihrer Größe im Design, von 0,1 bis 10.000.
- **Drehung**: Grad, von −3.600 bis 3.600, sodass sich eine Ebene zehnmal herumdrehen kann.
- **Deckkraft**: wie viel von ihr zu sehen ist, von 0 bis 100 %.
- **Unschärfe**: von 0 bis 200.
- **Anhebung**: Punkt über der Seite, oder unter 0 darunter, von −4.000 bis 4.000.
- **Neigung**, **Schwenk**: Grad in der Tiefe, von −360 bis 360.
- **Strich** und **Form**: für Linien und Formen, siehe [Linien und Formen](#shapes).
:::

Eine Zahl einzutippen oder über ihr Feld zu ziehen gibt der Ebene eine Pose, wie es ein Ziehen auf der Arbeitsfläche tut. Sind mehrere Ebenen gewählt, zeigt ein Feld die Zahl, die sie gemeinsam haben, oder einen Strich, wo sie sich unterscheiden.

Eine Perle neben jeder Zeile ist der Keyframe dieser Eigenschaft an der Abspielposition:

| Die Perle | Bedeutet | Ein Klick |
| --- | --- | --- |
| Blass | Das ändert sich im Film nie. | Setzt hier einen Keyframe und hält es, wie es ist. Ihr Tipp: „Hier einen Keyframe setzen“. |
| Ein Ring | Es ändert sich im Film, hat aber in diesem Moment keinen Keyframe. | Setzt hier einen Keyframe, mit dem Wert, bei dem es angekommen ist. |
| Gefüllt | Hier ist ein Keyframe. | Entfernt den Keyframe. Ihr Tipp: „Hier ist ein Keyframe. Klicke, um ihn zu entfernen.“ |

### Halten und entfernen {#keys}

- **Hier halten** setzt für das Gewählte einen Keyframe an der Abspielposition und hält alles so, wie es in diesem Moment ist, sodass das, was danach kommt, von dort ausgeht. Drück {{K}}, klick auf die Perle im Kopf der Zeitleiste, oder wähl {Hier halten} im Kontextmenü auf der Arbeitsfläche.
- **{{⌫}}** entfernt die in der Zeitleiste gewählten Keyframes, oder sonst die Keyframes des Gewählten an der Abspielposition. Im Modus Animieren löscht es nie eine Ebene.
- **{Keyframe entfernen}**, **{Bewegung entfernen}** und, wenn nichts gewählt ist, **{Alle Bewegung entfernen}** stehen im Kontextmenü auf der Arbeitsfläche, zusammen mit {Hier halten}, den sieben [Tempos](#pace) und {Abspielen}.

Die Befehle, die auf Ebenen wirken, bleiben verfügbar, etwa {Bearbeiten › Duplizieren} und das Menü Objekt. Ausschneiden, Einsetzen und Löschen gehören dem Film.

## Bewegungen {#moves}

Die Karte {Bewegungen} gibt dem Gewählten mit einem Klick eine fertige Art zu erscheinen oder zu gehen. Ihre Zeile sagt, wer sie bekommt: der Name einer Ebene, „3 Ebenen“, oder {Alles}, wenn nichts gewählt ist, also jede Ebene auf der Zeichenfläche, die weder ausgeblendet noch gesperrt ist.

Wähl {Kommt} oder {Geht} und klick dann auf einen der neun Chips. Jeder spielt sich im Kleinen selbst ab, solange du darauf zeigst.

| Bewegung | Beim Erscheinen | Dauert |
| --- | --- | --- |
| {Einblenden} | Blendet ein. | 0,4 s |
| {Aufsteigen} | Steigt 28 Punkt an ihren Platz auf und blendet dabei ein. | 0,5 s |
| {Fallen} | Fällt von 36 Punkt weiter oben herein, blendet dabei ein und landet mit einer Feder. | 0,6 s |
| {Schieben} | Gleitet von jenseits der näheren Seite der Zeichenfläche herein. | 0,5 s |
| {Pop} | Wächst von 60 % an und blendet dabei ein, mit einer Feder. | 0,6 s |
| {Zoom} | Kommt von 135 % herunter und blendet dabei ein. | 0,5 s |
| {Klappen} | Klappt aus der Rückenlage hoch, 80° in der Tiefe, und blendet dabei ein, mit einer kleinen Feder. | 0,6 s |
| {Fokus} | Kommt aus einer Unschärfe und blendet dabei ein. | 0,5 s |
| {Zeichnen} | Ihr Umriss wird gezeichnet, wie von Hand. Eine Ebene ohne Umriss zum Zeichnen blendet ein. | 0,9 s |

Eine Bewegung beginnt an der Abspielposition. Beim Erscheinen kommt die Ebene an ihrem Platz zur Ruhe; mit {Geht} läuft dieselbe Bewegung andersherum, vom Design weg, und nimmt dabei Fahrt auf. Keyframes derselben Art, die die Ebene in dieser Zeit schon hatte, weichen der Bewegung. Bezzle spielt sie dann einmal ab.

**Nacheinander** legt fest, wie lange jede Ebene nach der vorigen wartet, von 0 bis 1 Sekunde, wenn mehrere eine Bewegung bekommen: anfangs 0,06 Sekunden. Sie kommen in der Reihenfolge, in der die Zeichenfläche gelesen wird, von oben nach unten und quer hinüber.

Eine Bewegung besteht aus gewöhnlichen Keyframes. Danach kannst du sie verschieben, ihr Tempo ändern oder der Ebene von dort aus weitere Posen geben, wie bei allen anderen.

## Die Kamera {#camera}

Jeder Film wird durch eine Kamera gesehen. In Ruhe schaut sie senkrecht von oben auf die ganze Zeichenfläche, und der Film zeigt, was das Design zeigt. Gib ihr Keyframes, und sie kommt näher, wandert über die Zeichenfläche, rollt oder schaut aus einem Winkel auf die Szene.

Wähl die Kamera an der kleinen Kamera über der oberen rechten Ecke der Zeichenfläche oder an ihrer Linie in der Zeitleiste, der ersten. Klick noch einmal darauf, um sie loszulassen. Solange die Kamera gewählt ist, hast du die Zeichenfläche selbst in der Hand.

### Die Kamera auf der Arbeitsfläche {#camera-canvas}

| Die Kamera | Auf der Arbeitsfläche |
| --- | --- |
| {Blickpunkt} | Zieh das Bild: Der Punkt unter dem Zeiger bleibt darunter. Er rastet an der Mitte der Zeichenfläche ein. {{⇧}} hält eine Richtung. |
| {Zoom} | Zieh an einer Ecke. Er rastet bei 1× ein. |
| {Rollen} | Zieh von knapp außerhalb einer Ecke. |
| {Neigung}, {Schwenk} | Zieh von knapp außerhalb der Mitte einer Seite: Die Szene kippt unter der Kamera nach hinten oder schwenkt herum. |

{mac:Auf einem Trackpad zoomst du die Kamera, indem du zwei Finger auf- oder zuziehst, und rollst sie, indem du zwei Finger drehst.}{win:Auf einem Touchpad zoomst du die Kamera, indem du zwei Finger über dem Film auf- oder zuziehst. Zwei Finger zu drehen rollt sie nicht: Windows meldet einer App keine solche Geste.}

Ist die Kamera gewählt, verschieben die Pfeiltasten, wohin sie schaut. Ein Klick auf eine Ebene wählt die Ebene und lässt die Kamera los.

Eine Kamera, die ihre erste Pose am Anfang des Films bekommt, fliegt über die Länge des Films zur ganzen Zeichenfläche hinaus; bekommt sie sie später, fliegt sie von der ganzen Zeichenfläche dorthin. Wie bei der [ersten Pose](#first-pose) einer Ebene ist ein einziges Ziehen ein ganzer Flug.

### Die Karte Kamera {#camera-card}

Die Zeile der Karte sagt, wie nah die Kamera ist, etwa `×1.5`.

::: fields
- **Das Feld**: Zieh darin, um die Szene nach hinten zu kippen und unter der Kamera herumzuschwenken. Es rastet beim Blick senkrecht von oben ein; mit {{⇧}} geht es in Schritten von 15°. Doppelklick darauf, um wieder senkrecht von oben zu schauen. {mac:Solange die Kamera unscharf macht, zeigt eine gepunktete Linie über das Feld, wo die Zeichenfläche scharf liegt. }Sein Tipp: „Ziehe, um die Szene nach hinten zu kippen und unter der Kamera zu drehen. Doppelklicke, um senkrecht von oben zu schauen.“
- **Zoom**: von 0,1× bis 16×.
- **Blickpunkt**: {X} und {Y}, Punkt ab der Mitte der Zeichenfläche.
- **Rollen**: Grad.
- **Neigung**, **Schwenk**: Grad, von −80 bis 80.
- **Ganze Zeichenfläche zeigen**: bringt die Kamera an der Abspielposition wieder in Ruhe: die ganze Zeichenfläche, senkrecht von oben{mac:; Fokus und Unschärfe bleiben, wie sie sind}.
:::

Jede Zeile hat ihre Keyframe-Perle, wie auf der [Karte Pose](#pose-card). {mac:Unter {Ganze Zeichenfläche zeigen} stellen {Fokus} und {Unschärfe} den [Fokus](#camera-focus) der Kamera ein.}

### Kamera hierher fliegen {#fly}

Sind Ebenen gewählt, schickt {Kamera hierher fliegen} die Kamera los, um ab der Abspielposition auf sie zu schauen: so nah, dass sie ganz zu sehen sind, mit einem Drittel mehr Raum um sie herum, nie weiter zurück als die ganze Zeichenfläche und nie näher als 8×. Rollen, Neigung und Schwenk der Kamera bleiben, wie sie sind. Bezzle zeigt den Flug einmal. Der Tipp dazu: „Die Kamera schaut ab der Abspielposition auf die Auswahl und fliegt von dort hin, wo sie vorher war“.

### Tiefe unter der Kamera {#camera-depth}

Die Kamera ruht dort, von wo aus die Szene der Zeichenfläche im Design gesehen wird (siehe [Eine Zeichenfläche ist eine Szene](/docs/looks.html#perspective)), sodass ein Film mit der Kamera in Ruhe aussieht wie das Design. Neig oder schwenk die Kamera, und Ebenen, die über der Seite gehalten werden, zeigen, wie hoch sie stehen, wobei nähere vor ferneren vorbeiziehen, während sich die Kamera bewegt. Keyframes von {Anhebung} heben eine Ebene mit der Zeit von der Seite ab.

Was jenseits der Ränder der Zeichenfläche zu sehen ist, wenn die Kamera sie zeigt, ist der {Hintergrund} des Films, auf der [Karte Film](#film-card).

### Der Fokus der Kamera {#camera-focus}

::: mac
Eine Kamera kann auf eine Entfernung scharf stellen und unscharf machen, was näher oder weiter weg steht, wie ein Objektiv: Eine Karte, die zum Auge hin angehoben ist, wird weich, während die Seite scharf bleibt, oder der Fokus wandert von hinten in einer Szene nach vorn. Zwei Zahlen am Fuß der [Karte Kamera](#camera-card) stellen das ein:

- **Unschärfe**: wie stark die Kamera unscharf macht, in Punkt Unschärfe für je hundert Punkt, die etwas vom Fokus entfernt steht, von 0 bis 100. Bei 0, womit jeder Film beginnt, ist nichts unscharf. Eine Karte, die hundert Punkt entfernt steht, ist unter einer {Unschärfe} von 4 so unscharf, wie ihre eigene {Unschärfe} von 4 sie machen würde, und nichts wird um mehr als 200 Punkt unscharf. Ihr Tipp: „Punkte Unschärfe für je hundert Punkte, die etwas vom Fokus entfernt steht“.
- **Fokus**: was scharf ist, in Punkt näher am Auge als die Stelle, auf die die Kamera schaut; unter 0 weiter weg. Bei 0 ist die Seite dort scharf, wo die Kamera hinschaut. Der Fokus geht mit der Kamera mit, sodass eine Kamera, die näher kommt, auf dem scharf bleibt, worauf sie schaut. Sein Tipp: „So viele Punkte näher als dort, wo sie hinschaut, ist die Kamera scharf. Unter 0 weiter weg.“

Beide bekommen Keyframes wie die anderen Zahlen der Kamera, jede mit ihrer Keyframe-Perle, und die Linie der Kamera in der Zeitleiste hat, geöffnet, für jede eine Linie. Eine Zeichenfläche, die die Kamera schräg sieht, ist entlang einer Linie scharf und nach beiden Seiten davon weicher; solange die Kamera unscharf macht, ist diese Linie auf dem Feld der Karte gepunktet.

Sind Ebenen gewählt, bietet in einem Film mit Tiefe (eine Ebene angehoben, geneigt oder geschwenkt, oder die Kamera geneigt oder geschwenkt) eine Karte unter {Kamera hierher fliegen} {Kamera hier scharf stellen} an. Sie setzt an der Abspielposition einen Keyframe des Fokus dorthin, wo die gewählten Ebenen dann stehen, bei mehreren in die Mitte zwischen der nächsten und der fernsten, und Bezzle zeigt das Umschärfen einmal. Macht die Kamera an der Abspielposition nichts unscharf, bekommt sie dazu eine {Unschärfe} von 4; eine Kamera, die nie unscharf gemacht hat, bekommt davon einen einzigen Keyframe, der für den ganzen Film gilt, sodass sich von da an nur der Fokus bewegt. Um den Fokus von einer Karte hinten auf eine vorn zu ziehen, wähl die hintere und klick auf {Kamera hier scharf stellen}, setz dann die Abspielposition weiter und tu dasselbe mit der vorderen. Der Tipp dazu: „Die Kamera stellt ab der Abspielposition auf die Auswahl scharf, und was näher oder weiter weg steht, wird unscharf“.

Die Arbeitsfläche, [Als Video sichern](#movie) und die Momente, die ein Assistent zeichnet, zeigen dieselbe Unschärfe. {Ganze Zeichenfläche zeigen} lässt Fokus und Unschärfe, wie sie sind. Bezzle 1.7 und früher behalten beide Arten von Keyframes und zeigen den Film ohne die Unschärfe.
:::

> [!windows]
> Bezzle für Windows behält die Keyframes von {Fokus} und {Unschärfe} der Kamera und zeigt ihre Linien in der Zeitleiste, spielt einen solchen Film aber überall scharf: Seine [Karte Kamera](#camera-card) hat noch keine Zeilen dafür, und es gibt kein {Kamera hier scharf stellen}.

## Linien und Formen {#shapes}

Rechtecke, Ellipsen, Linien und Pfade haben auf der Karte {Pose} zwei weitere Zeilen.

### Strich {#draw}

{Strich} ist, wie viel vom Umriss gezeichnet ist, von einem Prozentwert bis zu einem anderen: `0% → 100%` ist alles, `0% → 0%` nichts. Gib der zweiten Zahl Keyframes von 0 bis 100, und die Linie zeichnet sich von selbst; gib danach der ersten welche, und sie wird von ihrem Anfang her wieder weggenommen, wie eine Linie, die weggewischt wird. Der Chip {Zeichnen} der Karte [Bewegungen](#moves) macht das Erste davon mit einem Klick.

### Form {#shape}

{Form} verschiebt die eigenen Punkte der Form an der Abspielposition, sodass mit der Zeit ein Umriss zu einem anderen wird. Klick daneben auf {Punkte bearbeiten}, oder doppelklick auf eine Form, die allein gewählt ist: Du bekommst ihre Punkte in die Hand, wie beim Bearbeiten eines Pfads im Design. Zieh sie oder ihre Griffe; die Pfeiltasten verschieben die gewählten. Jede Änderung ist ein Keyframe von {Form} an der Abspielposition. {Fertig}, {{Return}}, {{Esc}} oder ein Doppelklick neben die Punkte legt sie wieder weg. Der Tipp des Chips: „Verschiebe seine Punkte auf der Arbeitsfläche, um ihm an der Abspielposition eine andere Form zu geben“.

Keyframes von {Form} gehen mit dem Design mit. Ändere im Design die Größe der Ebene, und was ihre Keyframes mit ihrem Umriss tun, wächst mit. Gib einem Rechteck andere Ecken, und seine Keyframes formen den neuen Umriss um, wie sie den alten umgeformt haben. Spiegle die Ebene, und ihre Keyframes werden mit ihr gewendet. Jedes geschieht in einem Schritt mit der Änderung, die es ausgelöst hat.

Hast du die Punkte einer Form in der Hand, kann sie auch mehr oder weniger Punkte bekommen, wie im Design: Klick auf den Umriss, um dort einen Punkt hinzuzufügen, und drück {{⌫}}, um die gewählten wegzunehmen. Das ändert den Umriss nur an der Abspielposition, nie den des Designs. Der Keyframe hält dann einen eigenen Umriss, und zwischen zwei Keyframes mit anderen Punkten ordnet Bezzle die Punkte selbst einander zu, sodass jeder so wenig weit geht wie möglich.

{Von …}, neben {Punkte bearbeiten}, gibt der Form an der Abspielposition den Umriss einer anderen Form, sodass aus einem Stern ein Kreis wird: Wähl den Stern, setz die Abspielposition auf einen späteren Moment, klick auf {Von …} und wähl den Kreis. Das Menü nennt die anderen Formen auf der Zeichenfläche des Films, die vorderste zuerst, und jede {mac:wird auf der Arbeitsfläche gezeigt}{win:leuchtet in der Ebenenliste auf}, solange du auf ihren Namen zeigst. Der Umriss kommt so groß und so gedreht, wie die andere Form auf der Zeichenfläche liegt, um die Mitte der Form, die ihn bekommt. Der Tipp des Chips: „Gib ihm an der Abspielposition den Umriss einer anderen Form“. Er ruht blass, wenn die Zeichenfläche keine andere Form hat oder mehrere Ebenen gewählt sind.

Bezzle 1.7 und früher zeigen bei einem Keyframe, der einen Umriss mit anderen Punkten hält, den eigenen Umriss des Designs und behalten den Keyframe.

{Punkte bearbeiten} gilt für eine Ebene auf einmal.

## Shader-Füllungen {#shader-inputs}

Eine Ebene, deren Füllung die Shader einer Webseite zeichnen (siehe [Shader-Füllungen](/docs/looks.html#shader-fills)), läuft, während der Film spielt, ab ihrem {Moment} und in ihrem {Tempo}. Ist eine solche Ebene gewählt, listet eine Karte {Shader} die Eingaben auf, die ihre Shader nehmen, jede mit dem Namen, den die Seite ihr gegeben hat, und jede mit einer Keyframe-Perle: ein Farbfeld für eine Eingabe, die eine Farbe ist, Zahlenfelder für die übrigen. Gib einer Eingabe Keyframes, und die Füllung ändert sich über den Film, wie du es sagst: ein Leuchten, das heller wird, ein Muster, das seine Farben wechselt.

::: mac
Eine Füllung, die auf ihren eigenen früheren Bildern aufbaut, etwa Spuren oder eine Simulation, wird in Schritten vorwärts gespielt, von dort aus, wo die Seite war, als die Füllung hereinkam, jeder Schritt mit ihren Eingaben, wie der Film sie im Moment dieses Schritts hat. So zeigt ein Moment des Films immer dasselbe Bild, wie auch immer die Abspielposition dorthin gekommen ist. Beim Abspielen wird ein Schritt pro Bild gezeichnet; ein weiter Sprung nach vorn zeichnet zuerst jeden Schritt dazwischen, was einen Moment dauern kann. Nach 36.000 Schritten, zehn Minuten einer Seite, die sechzigmal pro Sekunde gezeichnet hat, steht eine solche Füllung still.
:::

> [!windows]
> In Bezzle für Windows zeigt eine Shader-Füllung, die in mehreren Schritten zeichnet, in einem Film ihr Bild, unbewegt: siehe [Shader-Füllungen](/docs/looks.html#shader-fills).

## Farben, Rahmen, Ecken und Schatten {#looks}

::: mac
Auch wie eine Ebene aussieht, kann sich über einen Film ändern: Ein Knopf wechselt von Grau zu seiner Akzentfarbe, der Schatten einer Karte wird tiefer, während sie sich hebt, die Ecken eines Quadrats werden rund. Sind Ebenen gewählt, stehen unter der Karte {Pose} die Karten, die das Design für ihre Looks hat, {Ecken}, {Füllung}, {Rahmen} und {Schatten}, und zeigen die Ebenen so, wie sie an der Abspielposition aussehen. Ändere auf einer davon etwas, mit einem Ziehen über ihre Zeile, im Füllungsmenü oder durch Eintippen, und die Änderung ist ein Keyframe an der Abspielposition, so wie das Ziehen einer Ebene einen Keyframe von {Versatz} setzt. Das Design behält seinen eigenen Look.

- **Füllung**: ihre Farbe, oder die Farben ihres Verlaufs und wo jede auf ihm liegt. Die Farbe eines Texts bekommt auf dieselbe Weise Keyframes und überdeckt die eigenen Farben seiner Buchstaben.
- **Rahmen**: seine Farbe oder die Farben seines Verlaufs, und seine Stärke. Eine Linie hat dafür ihre Karte {Linie}.
- **Ecken**: die vier Ecken eines Rechtecks, jede für sich.
- **Schatten**: seine Farbe, seine Lage, seine Unschärfe und seine Ausbreitung.

Eine Ebene mit mehreren Füllungen, Rahmen oder Schatten hat für jedes davon eine Karte, wie im Design. Wie bei [der ersten Pose](#first-pose) bekommt der erste Keyframe eines Looks das Design als Gegenstück, sodass eine einzige Änderung eine ganze Bewegung ist. Zwischen zwei Keyframes mischen sich Farben für das Auge gleichmäßig.

Jede Karte hat eine Perle für ihren Keyframe an der Abspielposition, wie die Zeilen der [Karte Pose](#pose-card): blass, solange sich der Look im Film nie ändert, ein Ring, wo er sich ändert, aber in diesem Moment keinen Keyframe hat, gefüllt auf einem Keyframe. Ein Klick setzt dort einen Keyframe, der den Look hält, wie er ist, oder entfernt den Keyframe.

Auf der Arbeitsfläche zeigt ein gewähltes Rechteck die Punkte in seinen Ecken, solange du darauf zeigst, wie im Design (siehe [Ein Rechteck auf der Arbeitsfläche abrunden](/docs/shapes.html#corner-dots)). Zieh einen, um an der Abspielposition alle Ecken abzurunden, oder halte {{⌥}} für diese Ecke allein. Die Punkte erscheinen bei einem einzelnen gewählten Rechteck, das auf dem Bildschirm mindestens 48 Punkt breit und hoch ist. Ein Rechteck in einer Gruppe, die der Film als Ganzes zeichnet, etwa eine Gruppe mit eigenen Keyframes, eine Maske oder eine Gruppe mit verringerter Deckkraft, zeigt keine: Seine Karte {Ecken} rundet es ab.

Ein Keyframe ändert eine Farbe in eine Farbe und die Farben eines Verlaufs in ebenso viele. Woraus der Look besteht, bleibt so, wie das Design es hat, und steht im Modus Animieren nicht auf den Karten:

- **Womit eine Ebene gemalt ist**: eine Farbe, ein Verlauf, ein Bild oder ein Shader, wie viele Farben ein Verlauf hat, und seine Linie über die Ebene.
- **Welche Looks sie hat**: eine Füllung, einen Rahmen oder einen Schatten hinzufügen, einen wegnehmen, einen ausschalten, und ihre Reihenfolge.
- **Der Rest eines Looks**: Stile, Füllmethoden, die Strichelung, auf welcher Seite der Kante ein Rahmen liegt, ob ein Schatten innen oder außen fällt, und geglättete Ecken.

Ändere irgendetwas davon im Modus Design, und der Film macht von dort aus weiter. Eine Farbe, die du an einem Keyframe gewählt hast, bleibt diese Farbe, was auch immer das Design später tut: Sie ist eine eigene Farbe, keine benannte, und wird mit einer dunklen Zeichenfläche nicht dunkel. Eine Stärke, eine Ecke, Lage, Unschärfe und Ausbreitung eines Schattens und die Lage einer Farbe auf einem Verlauf werden als ihr Abstand zu dem aufbewahrt, was das Design hat, und gehen darum mit ihm mit. Die Keyframes, die Bezzle als Gegenstück gesetzt hat, folgen dem Design in allem.

- **Keyframes für das, was das Design nicht mehr hat**, ändern nichts: eine Füllung, die weggenommen wurde, eine Farbe, die zu einem Verlauf gemacht wurde, ein Verlauf, der mehr oder weniger Farben bekommen hat. Sie warten, blass in der Zeitleiste, bis das Design es wieder hat.
- **Ein Rechteck, dessen {Form} Keyframes hat**, behält durchgehend die Ecken des Designs. Es hat im Modus Animieren keine Karte {Ecken} und keine Punkte, und Keyframes von {Ecken}, die es vorher hatte, warten auf dieselbe Weise.
- **Das Zeigen auf eine Vorgabe** probiert sie im Film nicht aus, anders als im Design.

In der Zeitleiste hat die Linie einer Ebene, an ihrem Pfeil geöffnet, eine Linie für jeden Look mit Keyframes: {Füllung}, {Verlauf}, {Rahmen}, {Rahmenverlauf}, {Rahmendicke}, {Schatten} und {Ecken}, oder, wenn die Ebene eine Linie ist, {Linie}, {Linienverlauf} und {Liniendicke}. Gibt es mehrere Füllungen, Rahmen oder Schatten, tragen ab dem zweiten von unten alle ihre Nummer, etwa {Füllung 2}. Ihre Keyframes lassen sich ziehen, mit einem Tempo versehen und entfernen wie alle anderen, und ein [Auswahlrechteck über Keyframes](#keys-box) erfasst jeden auf seiner eigenen Linie. {Hier halten} hält die Looks, die schon Keyframes haben, {{⌥←}} und {{⌥→}} halten an ihren Keyframes an, und {Bewegung entfernen} nimmt sie mit allem Übrigen weg.

Bezzle 1.7 und früher zeigen durchgehend den Look des Designs und behalten die Keyframes.
:::

> [!windows]
> In Bezzle für Windows kann vorerst nur ein KI-Assistent einem Look Keyframes geben (siehe [KI-Assistenten](/docs/ai.html#tools-animate)): Der Modus Animieren hat dort keine Karten, Perlen oder Punkte in den Ecken für Looks. Ein Film mit Keyframes für Looks spielt dort wie auf dem Mac. Die Zeitleiste hat eine Linie für jeden Look mit Keyframes, deren Keyframes du ziehst, mit einem Tempo versiehst und entfernst, ohne die anderen anzurühren, und {Hier halten} hält auch diese Looks.

## Die Zeitleiste {#timeline}

Die Zeitleiste ist eine Karte am unteren Rand der Arbeitsfläche: ein Lineal der Sekunden über einem linierten Blatt, zuerst mit einer Linie für die Kamera und dann einer für jede Ebene, die sich bewegt, die vorderste zuerst. Sie zeigt vier bis sieben Linien und scrollt, wenn es mehr sind.

Oben entlang, von links: der Abspielknopf, die Uhr mit dem Moment der Abspielposition in Sekunden, die Perle {Hier halten}, die sieben [Tempos](#pace) und ein runder Knopf, der sagt, ob der Film in Schleife oder einmal spielt.

### Die Abspielposition {#playhead}

- **Drück oder zieh auf dem Lineal**, um die Abspielposition dorthin zu setzen{mac:, oder zieh sie an ihrer eigenen Linie, die das Blatt hinunterläuft. Auch ein Klick auf eine leere Stelle des Blatts setzt sie dorthin}{win:, oder auf einer leeren Stelle des Blatts}. Die Zeichenfläche zeigt diesen Moment. Die Abspielposition rastet an Keyframes ein, wenn sie daran vorbeikommt, und geht sonst in Zwanzigstelsekunden; {{⌥}} macht sie feiner, in Hundertsteln, und mit {{⌘}} ist sie frei.
- **{{←}} und {{→}}** gehen ein Bild von einer Sechzigstelsekunde zurück oder vor, wenn nichts gewählt ist, mit {{⇧}} zehn. {{,}} und {{.}} tun dasselbe, was auch immer gewählt ist.
- **{{⌥←}} und {{⌥→}}** gehen zum Keyframe davor oder danach.
- **{{Home}} und {{End}}** gehen zum Anfang und zum Ende des Films.

### Linien und Perlen {#lines}

Jeder Keyframe ist eine Perle auf seiner Linie. Eine Perle ist gefüllt, wo die Ebene vom Design abweicht, und hohl, wo sie ist wie im Design, sodass sich eine Linie als das liest, was sie tut: hinaus und wieder nach Hause. Eine Perle ist grau, wo Bezzle sie als Gegenstück gesetzt hat und du sie nicht angerührt hast.

- **Klick auf eine Perle**, um ihren Keyframe zu wählen; die Abspielposition geht dorthin. {{⇧}}-Klick wählt mehr oder weniger.
- **Zieh eine Perle**, um ihren Keyframe in der Zeit zu verschieben. Sie rastet an anderen Keyframes und an der Abspielposition ein und geht sonst in Zwanzigstelsekunden, mit {{⌥}} in Hundertsteln.
- **Zieh am Band einer Linie,** zwischen ihren Perlen, um die ganze Bewegung zu verschieben.
- **Doppelklick auf eine Linie**, um dort einen Keyframe zu setzen.
- **Öffne eine Linie** an ihrem Pfeil, um eine Linie für alles zu sehen, was sich ändert: {Versatz}, {Skalierung}, {Deckkraft} und so weiter, und jede Eingabe eines Shaders, und jeden [Look](#looks), der Keyframes hat. Dort ist das Tempo zwischen zwei Keyframes als Kurve gezeichnet.
- **Rechtsklick auf eine Perle** für die Tempos und {Keyframe entfernen}; **Rechtsklick auf eine Linie** für {Keyframe hier hinzufügen} und {Bewegung entfernen}, oder {Bewegung der Kamera entfernen}.

### Mehrere Keyframes auf einmal {#keys-box}

::: mac
Zieh von einer leeren Stelle des Blatts, abseits der Perlen und der Bänder, um ein Auswahlrechteck über Keyframes aufzuziehen. Jeder Keyframe, den es berührt, wird gewählt, während das Rechteck wächst. Mit den Keyframes werden ihre Ebenen gewählt, oder die Kamera, wo nur ihre Keyframes erfasst sind. Auf der Linie einer Ebene steht eine Perle für alle Keyframes der Ebene in diesem Moment; auf einer geöffneten Linie für den Keyframe dieser einen Sache allein.

- **{{⇧}}** fügt dem Gewählten hinzu: Das Rechteck wählt die erfassten Keyframes, die nicht gewählt waren, und lässt die los, die es waren.
- **{{Esc}}** während des Ziehens gibt zurück, was vorher gewählt war.
- **Ziehst du über den Rand** einer Zeitleiste hinaus, bei der du [näher hinsiehst](#timeline-zoom), kriecht das Blatt unter dem Rechteck weiter, und das Rechteck behält, was es erfasst hat und nun außer Sicht ist.

Die gewählten Keyframes gehen dann zusammen: Zieh irgendeinen davon, um sie alle in der Zeit zu verschieben, wähl ein [Tempo](#pace) für sie alle, oder drück {{⌫}}, um sie zu entfernen. Ein Klick auf eine leere Stelle lässt sie los und setzt die Abspielposition dorthin; mit gehaltener {{⇧}} ändert er nichts.
:::

> [!windows]
> Bezzle für Windows hat noch kein Auswahlrechteck über Keyframes. Dort wählt {{⇧}}-Klick mehrere Keyframes, und ein Ziehen von einer leeren Stelle des Blatts bewegt die Abspielposition.

### Tempo {#pace}

Das Tempo ist, wie eine Ebene zu einem Keyframe reist: gleichmäßig, sanft, mit einer Feder. Es gehört zu dem Keyframe, an dem sie ankommt. Wähl einen der sieben Chips im Kopf der Zeitleiste oder in einem Kontextmenü, für die in der Zeitleiste gewählten Keyframes, oder sonst für die Keyframes des Gewählten an der Abspielposition. Die Chips ruhen blass, solange es keinen Keyframe gibt, dem sich ein Tempo geben ließe.

| Tempo | Wie sie ankommt |
| --- | --- |
| {Auto} | Aus den Keyframes ringsum gelesen: Sie fließt durch einen Keyframe, über den die Bewegung hinausgeht, und kommt zur Ruhe, wo die Bewegung endet oder umkehrt. So beginnt jeder Keyframe. |
| {Weich} | Fährt sanft an und kommt sanft an. |
| {Nimmt Fahrt auf} | Fährt sanft an und kommt mit voller Geschwindigkeit an. |
| {Kommt zur Ruhe} | Startet mit voller Geschwindigkeit und kommt sanft an. |
| {Gleichmäßig} | Dieselbe Geschwindigkeit auf dem ganzen Weg. |
| {Feder} | Geht ein wenig über den Keyframe hinaus und kommt auf ihm zur Ruhe. |
| {Halten} | Bleibt bis zum Keyframe, wie sie war, und ist dann sofort dort. |

**Nachfedern** ist, wie weit eine Feder über ihren Keyframe hinausschwingt, bevor sie zur Ruhe kommt, von 0 bis 100 %. Eine Feder hat 30 %, bis du etwas anderes sagst. Sind Federn unter den Keyframes, die du in der Hand hast, zeigt der Kopf der Zeitleiste neben den Tempos {Nachfedern} mit seiner Zahl: Zieh darüber, tipp, oder ändere sie mit den Pfeiltasten Schritt für Schritt. Ihr Tipp: „Wie weit eine Feder über ihren Keyframe hinausschwingt, bevor sie zur Ruhe kommt“. Die kleine Kurve des gewählten Chips {Feder} zeigt, wie weit die Federn gehen werden. {mac:Oder zieh diesen Chip seitwärts, wie einen Drehregler: Er hält bei 30 % einen Moment an, wenn er daran vorbeikommt. Sein Tipp: „Feder. Zieh seitwärts, um ihr Nachfedern einzustellen.“}

Jede Feder, die du in der Hand hast, bekommt dasselbe Nachfedern, in einem Schritt unter {Bearbeiten › Widerrufen}{mac:, genannt {Nachfedern}}; Keyframes mit einem anderen Tempo bleiben, wie sie sind. Wählst du {Feder} für Keyframes, bleibt das Nachfedern, das eine Feder unter ihnen hat, und die anderen bekommen es auch. Auf einer schmalen Zeitleiste {mac:weicht die Zahl, und der Chip allein stellt das Nachfedern ein}{win:steht die Zahl ohne ihren Namen}.

### Wo der Film endet {#film-end}

Eine Fahne auf dem Lineal markiert das Ende des Films. Ein Film ist so lang wie seine Keyframes: Er endet an der nächsten halben Sekunde nach dem letzten und ist mindestens 2 Sekunden lang. Die Fahne ist hohl, solange sie den Keyframes folgt.

Zieh die Fahne, um die Länge selbst festzulegen. Sie rastet am letzten Keyframe ein und geht sonst in Viertelsekunden. Ist die Länge festgelegt, ist die Fahne gefüllt, und das Blatt ist dahinter schattiert: Keyframes dort draußen bleiben erhalten, werden aber nicht abgespielt. Doppelklick auf die Fahne, damit sie wieder den Keyframes folgt. Ihr Tipp: „Hier endet der Film. Ziehe, um seine Länge festzulegen; doppelklicke, damit er den Keyframes folgt.“

### Näher hinsehen {#timeline-zoom}

Die Zeitleiste zeigt zu Beginn den ganzen Film. Um an einem kurzen Stück eines langen Films zu arbeiten, sieh näher hin:

::: mac
- **Zieh zwei Finger auf oder zu** über den Linien der Zeitleiste. Sie geht um den Moment unter dem Zeiger näher heran, und der bleibt, wo er ist. Gehst du wieder zurück, rastet sie beim ganzen Film ein, und das Trackpad tickt.
- **Beweg zwei Finger seitwärts**, um dich am Film entlangzubewegen. Die Bewegung läuft aus wie bei einer gescrollten Seite und hält an den Enden des Films an. Nach oben und unten scrollst du wie immer durch die Linien.
- **Tipp doppelt mit zwei Fingern**, um sofort wieder den ganzen Film zu sehen, oder, vom ganzen Film aus, viermal näher hinzusehen.
- **Mit einer Maus** drehst du das Rad mit gehaltener {{⌘}}, {{⌥}} oder {{⌃}}, um näher hinzusehen, wie auf der Arbeitsfläche, und mit gehaltener {{⇧}}, um dich entlangzubewegen.

Ein Auf- oder Zuziehen oder zwei Finger, die über den Linien beginnen, gehören der Zeitleiste, bis du die Finger abhebst. Anderswo begonnen, gehören sie der Arbeitsfläche.
:::

::: win
- **Dreh das Rad mit gehaltener {{Ctrl}}** über den Linien der Zeitleiste oder ihrem Lineal, oder zieh dort auf einem Touchpad zwei Finger auf oder zu. Sie geht um den Moment unter dem Zeiger näher heran, und der bleibt, wo er ist, wie die Arbeitsfläche beim Zoomen. Gehst du wieder auf Abstand, hält sie beim ganzen Film an.
- **Dreh das Rad mit gehaltener {{Shift}}** oder seitwärts, um dich am Film entlangzubewegen. Es hält an den Enden des Films an. Nach oben und unten scrollst du wie immer durch die Linien.
- **Doppelklick auf den Strich unter den Linien**, um sofort wieder den ganzen Film zu sehen.
:::

Das Lineal füllt sich, je näher du kommst, von einer Zahl pro Minute bis zu einer pro Zwanzigstelsekunde, mit einem Strich für jedes Hundertstel. Aus nächster Nähe ist eine Hundertstelsekunde ein Dutzend Punkt breit. Ein Strich unter den Linien zeigt, welcher Teil des Films zu sehen ist.

- **Die Abspielposition bleibt in Sicht.** Schickst du sie zu einem Moment außer Sicht, geht die Zeitleiste mit ihr dorthin. Ein Film, der aus dem sichtbaren Teil hinausspielt, blättert um.
- **Ein Ziehen geht über den Rand hinaus.** Zieh die Abspielposition, eine Perle, das Band einer Linie oder das Ende des Films über eines der beiden Enden dessen hinaus, was zu sehen ist, und das Blatt kriecht darunter weiter, umso schneller, je weiter draußen du es hältst.

Wie nah du hinsiehst, gehört dir allein: Es ist kein Teil des Designs und kein Schritt unter {Bearbeiten › Widerrufen}. Den Film einer anderen Zeichenfläche siehst du zuerst ganz.

## Den Film abspielen {#playing}

| Um | Tu dies |
| --- | --- |
| Abzuspielen oder anzuhalten | Drück kurz {{Space}}, klick auf den Abspielknopf in der Zeitleiste oder auf {Abspielen} oben rechts im Fenster |
| Vom Anfang abzuspielen | {{Return}}, oder {Fenster › Film abspielen} ({{⌘Return}}) |
| Anzuhalten | {{Esc}} |

Der Film spielt dort, wo er liegt, auf seiner Zeichenfläche, in Schleife oder einmal, wie es der runde Knopf im Kopf der Zeitleiste und die [Karte Film](#film-card) sagen. Solange du im Modus Animieren bist, steht {Fenster › Film abspielen} anstelle von {Prototyp abspielen}.

## Die Karte Film {#film-card}

Die Karte {Film} steht im Inspektor, was auch immer gewählt ist. Ihre Zeile sagt, wie lang der Film ist.

::: fields
- **Länge**: Sekunden, von 0,25 bis 600, in Viertelsekunden. Sie einzustellen legt das Ende des Films fest, wie das Ziehen der Fahne; daneben erscheint dann {Den Keyframes folgen} und lässt den Film wieder so lang sein wie seine Keyframes.
- **In Schleife**, **Einmal**: ob der Film von vorn beginnt, wenn er sein Ende erreicht, oder dort anhält.
- **Hintergrund**: die Farbe, die jenseits der Ränder der Zeichenfläche zu sehen ist, wenn die Kamera sie zeigt. Hell unter einer hellen Zeichenfläche und dunkel unter einer dunklen, bis du wählst.
- **1×**, **2×**, **3×**: wie viele Pixel ein Video für jeden Punkt der Zeichenfläche hat.
- **30**, **60**: die Bilder pro Sekunde des Videos.
- **Als Video sichern …**: siehe unten. Die Zeile darüber sagt, was das Video sein wird, etwa „2880 × 1800 Pixel, 60 pro Sekunde“.
:::

## Als Video sichern {#movie}

{Als Video sichern …} auf der Karte {Film} sichert den Film als MP4-Video{win:, in H.264, das überall läuft}. Wähl, wo es liegen soll; der Knopf füllt sich, während das Video entsteht, und sagt derweil {Sichern abbrechen}. Ist es fertig, zeigt Bezzle das Video {mac:im Finder}{win:im Explorer}.

::: mac
Unter der Größe und den Bildern pro Sekunde hat die Karte {Film} die Art des Videos: {H.264} oder {HEVC 10 Bit}. H.264 läuft überall, und ein Video ist H.264, bis du wählst. Ein breiter dunkler Verlauf, ein weicher Schatten oder ein langsames Einblenden kann darin Streifen zeigen, da jede seiner Farben 256 Stufen hat; HEVC mit 10 Bit hat Stufen, die ein Viertel so groß sind, hält Verlauf, Schatten und Einblenden glatt und läuft auf Apple-Geräten und in den meisten Browsern. Der Tipp sagt dasselbe: „H.264 läuft überall. HEVC mit 10 Bit hält sanfte Verläufe, weiche Schatten und langsames Einblenden glatt, wo H.264 Streifen zeigt, und läuft auf Apple-Geräten und in den meisten Browsern.“ Bezzle merkt sich die Wahl, wie es sich die Größe und die Bilder pro Sekunde merkt.

Auf einem Mac, der ein solches Video nicht machen kann, sagt Bezzle „Dieser Mac kann ein solches Video nicht sichern.“ und „Sichere es stattdessen als H.264.“
:::

- **So scharf wie das Design.** Jedes Bild des Videos wird aus dem Design selbst in der Größe des Videos gezeichnet, sodass Text und Formen scharf bleiben, wie nah die Kamera auch kommt.
- **Bis 4K.** Die längere Seite des Videos hat höchstens 3.840 Pixel. Eine große Zeichenfläche mit 3× bekommt so viele Pixel, wie darin Platz haben.
- **Bis zu einer Stunde.** Ein längerer Film wird nicht gesichert: „Dieser Film ist zu lang, um ihn als Video zu sichern. Ein Video dauert höchstens eine Stunde. Gib dem Film eine kürzere Länge oder entferne die späteren Keyframes.“
- **Für die Schleife gemacht.** Ein Film, der in Schleife spielt, wird ohne sein letztes Bild gesichert, das wieder sein erstes ist, sodass das Video ohne Ruckeln in Schleife läuft. Ein Film, der einmal spielt, endet auf seinem letzten Moment.
- **Ganz oder gar nicht.** Das Video wird nebenher geschrieben und erst an seinen Platz gelegt, wenn es ganz ist. Brichst du das Sichern ab, bleibt nichts zurück.

## Tasten im Modus Animieren {#keyboard}

| Taste | Was sie tut |
| --- | --- |
| {{⌃A}} | {Animieren}, und zurück zu Design |
| {{Space}} | Kurz gedrückt: spielt den Film ab oder hält ihn an. Gedrückt gehalten und gezogen: verschiebt die Ansicht |
| {{Return}} | Spielt vom Anfang ab; hast du die Punkte einer Form in der Hand, legt es sie weg |
| {{⌘Return}} | {Film abspielen} |
| {{K}} | {Hier halten} |
| {{⌫}} | Entfernt die gewählten Keyframes, oder die Keyframes des Gewählten an der Abspielposition; hast du die Punkte einer Form in der Hand, die gewählten Punkte |
| {{←}} {{→}} {{↑}} {{↓}} | Verschieben das Gewählte um 1 Punkt, mit {{⇧}} um 10; ist die Kamera gewählt, wohin sie schaut. Ist nichts gewählt, gehen {{←}} und {{→}} ein Bild zurück oder vor |
| {{,}} {{.}} | Ein Bild zurück oder vor, mit {{⇧}} zehn |
| {{⌥←}} {{⌥→}} | Zum Keyframe davor oder danach |
| {{Home}} {{End}} | Zum Anfang oder Ende des Films |
| {{Esc}} | Nimmt ein laufendes Ziehen zurück; sonst hält es den Film an, lässt die gewählten Keyframes los, dann die Kamera, dann das Gewählte |

## Widerrufen, Teilen und Assistenten {#together}

Jede Pose, jede Bewegung und jede Änderung des Tempos ist ein Schritt unter {Bearbeiten › Widerrufen}, benannt nach dem, was er getan hat, etwa {Keyframe verschieben}, {Tempo ändern}, {Bewegung entfernen} oder {Filmlänge}. Abspielen ändert nichts, darum hinterlässt es keinen Schritt.

Ein Film ist Teil seines Designs und wird mit ihm geteilt. Seine Keyframes werden einzeln geteilt, sodass zwei Leute, die derselben Ebene zur selben Zeit Keyframes geben, beide ihre Keyframes behalten. In einem Design, das jemand nur zum Ansehen mit dir geteilt hat, kannst du den Film abspielen, aber nicht ändern. Wer Bezzle nicht hat, kann ihn über den Link des Designs in einem Browser abspielen: siehe [Im Browser](/docs/sharing.html#browser).

Ein KI-Assistent, der mit Bezzle verbunden ist, kann einen Film lesen und einen schreiben: siehe [KI-Assistenten](/docs/ai.html).

> [!windows] Animieren unter Windows
> Bezzle für Windows hat Animieren mit demselben Bereich, derselben Zeitleiste, denselben Bewegungen, derselben Kamera und demselben Video. Was vorerst anders ist, steht dort, wo es vorkommt: Einem Look gibt dort nur ein Assistent Keyframes, der [Fokus](#camera-focus) der Kamera macht nichts unscharf, die Zeitleiste hat kein Auswahlrechteck über Keyframes, der Chip {Feder} ist kein Drehregler, zwei Finger auf einem Touchpad zu drehen rollt die Kamera nicht, und ein Video ist nur H.264. Und wo die Kamera nahe herangeht, zeichnet Bezzle für Windows, was sie sieht, erst schärfer, wenn der Film ruht, wo ein Mac es schon tut, während der Film läuft.
