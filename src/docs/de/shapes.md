---
title: Formen, Pfade und der Zeichenstift
nav: Formen und Pfade
lede: Zeichne Rechtecke, Ellipsen, Linien und eigene Pfade, forme jede Ecke und jeden Punkt von Hand, und mach aus Formen neue, indem du sie schneidest, verbindest und versetzt.
---

Bezzle hat drei Zeichenwerkzeuge für die Formen, die du am häufigsten brauchst, einen Zeichenstift für jeden beliebigen Umriss und eine Reihe von Pfadwerkzeugen, die aus vorhandenen Formen neue machen: Vereinen und die anderen Arten, Formen zu kombinieren, das Bauen aus den Teilen, die sich überlappende Formen bilden, das Messer, das Versetzen eines Umrisses nach außen oder innen und das Umwandeln eines Rahmens in eine Form. Alles, was dabei entsteht, ist eine gewöhnliche Ebene, die das Aussehen der Ausgangsform behält, und jeder Schritt lässt sich widerrufen.

## Formen zeichnen {#drawing}

### Rechteck, Ellipse und Linie {#basic-shapes}

Wähl ein Werkzeug in der Werkzeugleiste oder drück seine Taste: {{R}} für {Rechteck}, {{E}} für {Ellipse}, {{L}} für {Linie}. Zieh dann auf der Arbeitsfläche. Während du ziehst, steht die Größe neben der Form (bei einer Linie ihre Länge), und die Ecken, an denen du beginnst und endest, rasten an den Kanten und der Mitte der Zeichenfläche ein, und an ihren Hilfslinien und ihrem Layoutraster, wenn diese eingeblendet sind.

Ein Klick ohne Ziehen macht etwas in vernünftiger Größe: ein Rechteck oder eine Ellipse von 100 mal 100 Punkt, deren linke obere Ecke dort liegt, wo du geklickt hast, oder eine 100 Punkt lange Linie nach rechts. Sobald die Form liegt, hast du wieder das Werkzeug {Auswahl} in der Hand und kannst sie gleich verschieben oder ihre Größe ändern.

Eine Form landet auf der Zeichenfläche, auf der du sie begonnen hast, oder neben den Zeichenflächen auf der Arbeitsfläche, wenn du außerhalb beginnst. Neue Rechtecke und Ellipsen sind mit einem hellen, warmen Grau gefüllt (`#D1CFC9`), eine neue Linie ist ein 1 Punkt starker Strich in dunklem Grau (`#706E69`). Beides änderst du auf ihren Karten im Inspektor (siehe [Farbe, Rahmen und Effekte](/docs/looks.html)). Zeichnest du eine Form über ein Bild, bietet Bezzle an, das Bild damit zu maskieren (siehe [Bilder und Fotos](/docs/pictures.html)).

| Beim Ziehen gedrückt | Rechteck und Ellipse | Linie |
| --- | --- | --- |
| {{⇧}} | Ein Quadrat oder ein Kreis | Bleibt in Schritten von 45° |
| {{⌥}} | Zieht aus der Mitte auf | Nichts |
| {{⇧}} und {{⌥}} | Ein Quadrat oder ein Kreis aus der Mitte | Schritte von 45° |
| {{⌘}} | Nichts rastet ein | Nichts rastet ein |

Mit {{⇧}} rastet ein Quadrat weiterhin ein, und zwar mit derjenigen seiner bewegten Kanten, die einer anderen Sache am nächsten kommt; die andere Kante folgt, sodass es quadratisch bleibt.

> [!windows]
> In Bezzle für Windows rastet eine Form beim Zeichnen nirgends ein, und {{Alt}} zieht sie noch nicht aus der Mitte auf: {{Shift}} macht ein Quadrat, einen Kreis oder eine Linie in Schritten von 45°.

### Linien {#lines}

Eine ausgewählte Linie hat keine Griffe ringsum wie andere Ebenen, sondern an jedem Ende einen runden Griff. Zieh an einem Ende, um es zu verschieben, während das andere bleibt, wo es ist; {{⇧}} hält die Linie in Schritten von 45°, und das Ende rastet an dem ein, was in der Nähe liegt, außer du hältst {{⇧}} oder {{⌘}}. Die Enden landen auf ganzen Punkten, und die Länge wird beim Ziehen angezeigt. Eine Linie, die du gedreht hast, wird in dem Moment, in dem du ein Ende greifst, auf ihre zwei Enden zurückgeführt, sodass die Enden überallhin können.

Eine Linie hat keine Füllung: Ihr Strich ist ihre Karte {Linie}, die wie ein Rahmen funktioniert. Eine Linie kann Text tragen (siehe [Text entlang einer Kurve](/docs/text.html#curves)), zum Pfad werden und gespiegelt werden. Kombinieren oder mit dem Messer schneiden lässt sie sich nicht, da sie keine Fläche umschließt; um aus ihrem Strich eine Form zu machen, die das kann, nimm [Rahmen in Form umwandeln](/docs/shapes.html#outline-border).

## Ecken {#corners}

### Ein Rechteck auf der Arbeitsfläche abrunden {#corner-dots}

Wähl ein Rechteck aus und zeig darauf: In jeder Ecke erscheint ein kleiner Punkt, auf der Diagonale so weit innen, wie die Ecke gerundet ist, und auf dem Bildschirm nie näher als 10 Punkt an der Ecke. Zieh einen Punkt zur Mitte hin, um alle Ecken gleich abzurunden, und wieder hinaus, um sie wieder eckig zu machen. Halte {{⌥}} vor oder während des Ziehens gedrückt, um nur die Ecke abzurunden, an der du ziehst. Der Radius wird dabei angezeigt und geht nie über die Hälfte der kürzeren Seite hinaus.

Die Punkte erscheinen, solange das Rechteck auf dem Bildschirm mindestens 48 Punkt breit und hoch ist; zoom bei einem kleinen hinein, um sie zu bekommen.

### Die Karte Ecken {#corners-card}

Jedes ausgewählte Rechteck hat eine Karte {Ecken}. Zugeklappt zeigt sie, wie rund die Ecken sind, etwa {Weich · 12}, {Kapsel} oder {Squircle · Rund · 24}. Zieh seitwärts über die zugeklappte Karte, um die Ecken von eckig bis zur Kapsel abzurunden; das Ziehen hält bei 0, 4, 12, 24 und bei der Kapsel kurz an. Klick auf die Karte, um sie zu öffnen:

::: fields
- **Vorgaben**: {Eckig} (0), {Leicht abgerundet} (4), {Weich} (12), {Rund} (24) und {Kapsel}, die die kurzen Seiten ganz abrundet. Zeig auf eine Vorgabe, um sie auf der Arbeitsfläche auszuprobieren, bevor du klickst.
- **R**: der Radius aller Ecken, in Punkt. Das Feld bleibt leer, solange die Ecken verschieden sind. Ein Wert, den du eintippst, rundet alle vier gleich ab; Ziehen über das Feld oder eine eingetippte Änderung wie `+2` ändert jede Ecke ausgehend von ihrem eigenen Radius.
- **Rund**, **Squircle**: schlichte runde Ecken, jede ein Viertelkreis, oder Squircles, deren Ecken weich in die Seiten übergehen, sodass die Biegung sanft einsetzt statt auf einmal, so wie iOS seine App-Symbole zeichnet.
- **Glättung**: das %-Feld daneben, von 0 bis 100 %. {Squircle} beginnt bei 80 %, etwas glatter als die 60 %, mit denen iOS seine Symbole zeichnet; bei 0 sind die Ecken wieder schlicht rund.
:::

Ecken können auch einen Namen bekommen, damit du sie auf anderen Ebenen nutzen und überall auf einmal ändern kannst; die geöffnete Karte bietet zuerst die Eckenstile des Designs an (siehe [Komponenten, Stile und Bibliotheken](/docs/components.html)).

::: demo corners
:::

### Ecken eines Pfads {#path-corners}

Auch Pfade haben Ecken. Zeig auf einen ausgewählten Pfad, und in jeder seiner Ecken erscheint ein Punkt: an jeder Stelle, an der der Umriss scharf abknickt, und in jeder Rundung zwischen zwei geraden Seiten. Zieh einen Punkt nach innen, um alle Ecken des Pfads gleich abzurunden, oder halte {{⌥}}, um nur diese eine abzurunden; zieh ihn wieder hinaus, um die Ecke wieder spitz zu machen. Eine Rundung nimmt nie mehr von einer Seite, als da ist, und nur die Hälfte, wenn auch die Ecke an ihrem anderen Ende gerundet ist.

Eine so entstandene Rundung behält ihren Punkt, wie jede Rundung zwischen zwei geraden Seiten (etwa die Ecken eines abgerundeten Rechtecks, das du in einen Pfad umgewandelt hast), sodass du sie später runder oder spitzer machen kannst. Die Punkte erscheinen, solange die längere Seite des Pfads auf dem Bildschirm mindestens 40 Punkt misst und er nicht mehr als 64 Ecken hat.

## Der Zeichenstift {#pen}

Der {Zeichenstift} ({{P}}) zeichnet einen Pfad Punkt für Punkt: Ein Klick setzt eine Ecke, ein Ziehen zieht eine Kurve aus dem Punkt heraus. Ein neuer Pfad hat keine Füllung und einen 1 Punkt starken Strich in dunklem Grau; eine Füllung fügst du bei Bedarf mit der gestrichelten Karte {Füllung} unten im Inspektor hinzu.

::: steps
1. **Drück {{P}}.** Der Zeiger wird zum Zeichenstift.
2. **Klick dort, wo der Pfad beginnen soll.** Bei den Ebenen kommt noch nichts dazu: Der Pfad wird mit seinem zweiten Punkt zur Ebene, und zwar auf der Zeichenfläche, auf der der erste Punkt liegt.
3. **Klick für jede Ecke, oder zieh für eine Kurve.** Eine Kurve folgt dem Zeiger vom neuesten Punkt aus und zeigt, wo das nächste Stück verlaufen würde.
4. **Abschließen.** Klick wieder auf den ersten Punkt, um die Form zu schließen, oder drück {{Return}} oder {{Esc}}, um sie offen zu lassen. So oder so bleibt der Pfad ausgewählt, und du hast wieder das Werkzeug {Auswahl} in der Hand.
:::

### Kurven und Griffe beim Zeichnen {#pen-curves}

Ziehst du beim Setzen eines Punkts, ziehst du seine Griffe heraus: Der ausgehende Griff folgt dem Zeiger, der eingehende spiegelt ihn, sodass der Umriss glatt durch den Punkt läuft.

- **{{⌥}} beim Ziehen** lässt den eingehenden Griff, wo er ist (oder den Punkt ganz ohne ihn, wenn du die Taste von Anfang an hältst), sodass der Pfad am Punkt abknickt, statt glatt hindurchzulaufen.
- **{{⇧}} beim Ziehen** hält den Griff in Schritten von 45°.
- **Klick noch einmal auf den neuesten Punkt**, um seinen ausgehenden Griff zu entfernen, sodass das nächste Stück gerade weitergeht. Ziehst du stattdessen von ihm aus, ziehst du nur einen neuen ausgehenden Griff heraus, für eine scharfe Wendung nach einer Kurve.
- **Zieh auf dem ersten Punkt**, während du den Pfad schließt, um die Kurve zu formen, die in ihn zurückläuft. Der erste Punkt wird dabei glatt; halte {{⌥}}, um die erste Kurve so zu lassen, wie sie war.

{{⇧}} und {{⌥}} wirken, sobald du sie drückst, ohne dass sich der Zeiger erst bewegen muss.

### Punkte genau setzen {#pen-snapping}

Ein Punkt rastet im Umkreis von 5 Punkt auf dem Bildschirm an den Kanten und Mitten dessen ein, was in der Nähe liegt, an Hilfslinien und Layoutrastern und an den eigenen Punkten des Pfads. Wo nichts ihn fängt, landet er auf ganzen Punkten, und wenn du hineinzoomst, auf halben, viertel, zehntel und noch feineren, sodass ein Schritt auf dem Bildschirm nie mehr als zwei Punkt ausmacht.

- **{{⇧}}** setzt den nächsten Punkt in Schritten von 45° vom letzten aus.
- **{{⌘}}** lässt den Punkt überallhin: Nichts rastet ein, und er landet auf Hundertstelpunkten.

### Punkte zurücknehmen {#pen-undo}

Beim Zeichnen nimmt {{⌫}} den neuesten Punkt zurück; sind nur noch zwei Punkte übrig, verschwindet der Pfad, und sein erster Punkt wartet auf den nächsten Klick. {{Esc}} während eines Ziehens nimmt den Punkt zurück, den du gerade setzt. Jeder Punkt ist ein eigener Schritt zum Widerrufen, also geht auch {{⌘Z}}.

### Der Zeichenstift auf einem ausgewählten Pfad {#pen-on-paths}

Hast du den Zeichenstift in der Hand und ist ein Pfad ausgewählt, erscheinen seine Punkte, und der Zeiger zeigt, was ein Klick bewirken würde:

| Der Zeiger auf | Ein Klick |
| --- | --- |
| einem offenen Ende des Pfads | Zeichnet von diesem Ende aus weiter |
| einem anderen Punkt | Entfernt diesen Punkt |
| dem Umriss zwischen Punkten | Fügt dort einen Punkt hinzu, ohne die Form zu ändern |
| irgendwo sonst | Beginnt einen neuen Pfad |

Beim Zeichnen erscheint ein Ring um den ersten Punkt, wenn du auf ihn zeigst: Ein Klick dort schließt den Pfad. Zeigst du auf den neuesten Punkt, siehst du, dass ein Klick seinen Griff entfernt.

## Punkte bearbeiten {#editing-points}

### Beginnen und beenden {#start-editing}

Die Punkte jedes Pfads lassen sich verschieben, hinzufügen und entfernen. Um zu beginnen, tu eines davon:

- Doppelklick auf einen Pfad.
- Wähl einen Pfad aus und drück {{Return}}.
- Klick auf {Punkte bearbeiten} auf seiner Karte {Pfad}, oder wähl {Punkte bearbeiten}, wenn du ihn mit der rechten Maustaste anklickst.

Auch die Punkte eines Rechtecks, einer Ellipse oder einer Linie bearbeitest du per Doppelklick. Solange du sie bearbeitest, ist die Form ein Pfad; lässt du sie unverändert, ist sie danach wieder die Form, die sie war, samt ihren Ecken. Änderst du ihren Umriss, bleibt sie ein Pfad.

Ein Pfad oder eine Form, die mit einem Bild gefüllt ist, öffnet beim Doppelklick das Platzieren des Bilds (siehe [Bilder und Fotos](/docs/pictures.html)). Für die Punkte eines solchen Pfads nimm {Punkte bearbeiten}; eine Form wandelst du zuerst in einen Pfad um.

Zum Beenden drück {{Esc}} oder {{Return}}, klick auf {Fertig} auf der Karte {Pfad}, doppelklick irgendwo neben die Punkte oder klick auf eine leere Stelle der Arbeitsfläche. Ein Klick auf eine andere Ebene beendet das Bearbeiten und wählt diese Ebene aus.

### Punkte wählen und verschieben {#moving-points}

- **Klick auf einen Punkt**, um ihn zu wählen. {{⇧}}-Klick fügt einen Punkt zu den gewählten hinzu oder nimmt ihn wieder heraus.
- **Zieh ein Rechteck um Punkte auf**, beginnend auf leerer Arbeitsfläche oder im Pfad abseits seines Umrisses, um alle darin zu wählen; halte {{⇧}}, um sie zu den gewählten hinzuzufügen. {{⌘A}} wählt alle Punkte.
- **Zieh einen gewählten Punkt**, um alle gewählten Punkte gemeinsam zu verschieben. {{⇧}} hält die Bewegung waagerecht oder senkrecht; der Punkt, den du hältst, rastet an den anderen Punkten des Pfads und an dem ein, was in der Nähe liegt, und {{⌘}} schaltet das Einrasten aus. Die Punkte landen auf ganzen Punkten, oder in feineren Schritten, wenn du hineingezoomt hast, wie beim Zeichenstift.
- **Pfeiltasten** verschieben die gewählten Punkte um 1 Punkt, mit {{⇧}} um 10. Ist kein Punkt gewählt, verschieben sie den ganzen Pfad.
- **{{⌫}}** entfernt die gewählten Punkte und verbindet die Punkte zu beiden Seiten. Ein Teil des Pfads, dem weniger als zwei Punkte bleiben, verschwindet, und ein Pfad ohne Punkte verschwindet ganz.

### Griffe, glatte Punkte und Ecken {#handles}

Die Griffe der gewählten Punkte erscheinen, und dazu die der Nachbarpunkte, die die Kurven zu ihnen hin ziehen. Zieh an einem Griff, um seine Kurve neu zu formen:

- An einem glatten Punkt dreht sich der andere Griff mit und behält seine eigene Länge, sodass der Umriss glatt bleibt.
- Halte {{⌥}}, um einen Griff allein zu bewegen; am Punkt entsteht dann ein Knick.
- {{⇧}} hält den Griff in Schritten von 45°.

**Doppelklick auf einen Punkt** wechselt zwischen spitzer Ecke und glattem Punkt. Eine Ecke verliert ihre Griffe, sodass die Linien zu beiden Seiten gerade hineinlaufen. Bei einem glatten Punkt werden die Griffe auf eine Linie gebracht: entlang der Griffe, die er schon hat, mit ihren Längen, oder bei einem Punkt ohne Griffe entlang der Richtung vom vorigen zum nächsten Punkt, jeder Griff ein Drittel des Wegs zu seinem Nachbarn lang.

### Punkte hinzufügen {#adding-points}

Zeig auf den Umriss zwischen zwei Punkten: Ein blasser Punkt zeigt, wo ein Klick einen hinzufügen würde. Klick, um ihn dort hinzuzufügen; die Form ändert sich nicht, denn die Kurven zu beiden Seiten werden passend kürzer. Halte die Maustaste gedrückt und zieh, um den neuen Punkt gleich zu verschieben.

### Die Karte Pfad {#path-card}

Ein ausgewählter Pfad hat eine Karte {Pfad}. Zugeklappt zeigt sie {Offen} oder {Geschlossen}, und {Punkte in Bearbeitung}, während du seine Punkte bearbeitest.

::: fields
- **Offen**, **Geschlossen**: schließt jeden ausgewählten Pfad mit einer Linie von seinem letzten Punkt zurück zum ersten, oder öffnet ihn dort.
- **Überlappungen**: erscheint, wenn der Pfad eine Füllung hat. Wo sich der Umriss selbst kreuzt oder ein Teil in einem anderen liegt, füllt {Füllen} diese Stellen, und {Lochen} lässt sie als Loch leer.
- **Punkte bearbeiten**, **Fertig**: beginnt oder beendet das Bearbeiten der Punkte des einen ausgewählten Pfads ({{Return}}).
- **X**, **Y**: während du Punkte bearbeitest und einige gewählt sind, wo sie liegen, gemessen von der linken oberen Ecke der Zeichenfläche oder Gruppe, in der der Pfad liegt. Sind mehrere gewählt, bleibt das Feld leer, außer sie haben denselben Wert. Ein eingetippter Wert setzt alle gewählten Punkte darauf und richtet sie so aneinander aus; eine Änderung wie `+10` verschiebt jeden um so viel.
- **Ecke**, **Glatt**: macht die gewählten Punkte zu spitzen Ecken oder glatten Punkten.
:::

Ist kein Punkt gewählt, sagt die Karte, was du tun kannst: einen Punkt oder seine Griffe ziehen, auf den Umriss klicken, um einen Punkt hinzuzufügen, und auf einen Punkt doppelklicken, um ihn glatt oder spitz zu machen.

## In Pfad umwandeln {#convert-to-path}

{Objekt › In Pfad umwandeln} ({{⌘8}}) macht aus den ausgewählten Rechtecken, Ellipsen und Linien Pfade, deren Punkte du dauerhaft bearbeiten kannst. Der Umriss bleibt genau, wie er war, runde Ecken und Squircle-Ecken eingeschlossen; was wegfällt, ist die Karte {Ecken}, denn die Ecken eines Pfads sind seine eigenen Punkte. Texte werden zu den Umrissen ihrer Buchstaben (siehe [Text als Umrisse](/docs/text.html#outlines)). Gesperrte Ebenen bleiben, wie sie sind.

Um eine Form nur einmal anzupassen, brauchst du das nicht: Ein Doppelklick auf ein Rechteck, eine Ellipse oder eine Linie öffnet ihre Punkte, so wie sie sind.

## Formen kombinieren {#combining}

### Vereinen, Subtrahieren, Schnittmenge bilden und Überlappung ausschließen {#boolean}

Wähl zwei oder mehr Formen aus (Rechtecke, Ellipsen oder Pfade, keine davon gesperrt, und sonst nichts) und wähl einen dieser Befehle im Menü {Objekt}, oder klick auf seinen Knopf auf der Karte {Anordnen}, die erscheint, wenn mehrere Ebenen ausgewählt sind:

| Befehl | Tasten | Was bleibt |
| --- | --- | --- |
| {Vereinen} | {{⌥⌘U}} | Alle Formen, als ein einziger Umriss |
| {Subtrahieren} | {{⌥⌘S}} | Die hinterste Form, abzüglich aller Formen davor |
| {Schnittmenge bilden} | {{⌥⌘I}} | Nur, wo sich alle Formen überlappen |
| {Überlappung ausschließen} | {{⌥⌘X}} | Nur, wo eine ungerade Zahl von Formen liegt; wo sich zwei überlappen, wird also ausgeschnitten |

Das Ergebnis ist ein einziger Pfad. Er übernimmt das Aussehen der hintersten Form (ihre Füllungen, Rahmen, Schatten und alles Weitere, wobei ein Verlauf bleibt, wo er lag) und liegt direkt über der vordersten der Formen, sodass alles, was darüber lag, weiterhin darüber liegt. Danach ist er ausgewählt. Bliebe nichts übrig, etwa bei der Schnittmenge von Formen, die sich nicht überlappen, gibt Bezzle einen Warnton aus, und nichts ändert sich.

Texte lassen sich nicht direkt kombinieren: Wandle sie zuerst in Pfade um, dann wird ein einfarbiger Text zu einem einzigen Pfad, der sich wie jeder andere kombinieren lässt. Der Strich einer Linie lässt sich kombinieren, sobald [Rahmen in Form umwandeln](/docs/shapes.html#outline-border) eine Form daraus gemacht hat.

::: demo combine
:::

### Aus Teilen bauen {#build}

Formen, die sich überlappen, zerschneiden einander in Teile. Beim Bauen wählst du von Hand, welche davon du willst: einige verbinden, andere zu eigenen Formen machen, den Rest wegwischen.

::: steps
1. **Wähl zwei oder mehr Formen aus** (Rechtecke, Ellipsen oder Pfade).
2. **Wähl {Objekt › Aus Teilen bauen}** ({{⌥⌘B}}), oder klick auf den Bauen-Knopf am Ende der Kombinieren-Knöpfe auf der Karte {Anordnen}. Jedes Teil wird gestrichelt umrandet; das Teil unter dem Zeiger leuchtet auf, und die Karte {Anordnen} öffnet sich mit einer Erinnerung, was zu tun ist.
3. **Klick auf ein Teil**, um eine eigene Form daraus zu machen, herausgelöst aus jeder Form, zu der es gehörte.
4. **Zieh über Teile**, um alle Teile, die das Ziehen berührt, zu einer Form zu verbinden. Egal wie schnell du ziehst, jedes Teil auf dem Weg zählt.
5. **Halte {{⌥}}** beim Klicken oder Ziehen, um Teile stattdessen wegzuwischen. Die Teile und die Spur werden rot.
6. **Drück {{Return}} oder {{Esc}}**, klick neben die Teile oder wähl {Objekt › Bauen beenden}, um fertig zu werden.
:::

Eine verbundene Form sieht aus wie die vorderste Form über dem ersten Teil, das du berührt hast, und liegt über der vordersten der Formen, aus denen sie entstanden ist. Diese Formen behalten den Rest von sich und verschwinden, wenn nichts mehr von ihnen übrig ist. Ein Klick auf ein Teil, das schon für sich eine ganze Form ist, ändert nichts. Nach jedem Klick oder Ziehen kannst du weiterbauen; jedes ist ein eigener Schritt zum Widerrufen ({Teile verbinden} oder {Teile löschen}). {{Esc}} während eines Ziehens verwirft dieses Ziehen, ohne zu bauen.

Das Bauen endet auch, wenn du etwas anderes auswählst oder ein anderes Werkzeug nimmst.

## Das Messer {#knife}

Das {Messer} ({{K}}) zerschneidet Formen entlang einer Linie, die du quer darüber zeichnest. Die Klinge erscheint als rot gestrichelte Linie. Jedes Teil sieht aus wie die Form und liegt, wo sie lag, an ihrem Platz unter den Ebenen, und nach dem Schnitt sind die Teile ausgewählt. Das Messer bleibt für den nächsten Schnitt in deiner Hand; drück {{V}} oder {{Esc}}, um es wegzulegen.

### Schneiden durch Ziehen {#knife-drag}

Zieh quer über die Formen: Der Schnitt folgt dem Weg des Zeigers, geglättet. Halte {{⇧}}, um stattdessen in gerader Linie vom Startpunkt aus zu schneiden. {{Esc}} vor dem Loslassen bricht den Schnitt ab.

### Punkt für Punkt schneiden {#knife-points}

Klickst du, statt zu ziehen, setzt du eine Schnittlinie Punkt für Punkt, wie mit dem Zeichenstift:

- Jeder Klick fügt einen Punkt hinzu; Ziehen beim Klicken zieht eine Kurve heraus.
- {{⇧}} hält jedes Stück in Schritten von 45°.
- {{Return}}, ein Doppelklick oder ein Klick zurück auf den ersten Punkt führt den Schnitt aus. Ein Klick auf den ersten Punkt schließt die Linie zu einer Schlaufe, die ausschneidet, was sie umschließt.
- {{⌫}} nimmt den neuesten Punkt zurück, und {{Esc}} verwirft die Linie.

### Was das Messer schneidet {#knife-cuts}

Der Schnitt teilt die ausgewählten Formen, die er ganz durchquert. Kreuzt er keine davon, teilt er jede Form, die er kreuzt, sofern sie eingeblendet und nicht gesperrt ist. Er wirkt auf Rechtecke, Ellipsen und Pfade. Seine Enden reichen etwas weiter, als du sie gezeichnet hast, sodass eine Linie, die knapp innerhalb einer Form beginnt oder endet, sie trotzdem teilt; und wo die Linie in eine Form hineingeht und darin endet, schließt sich der Schlitz wieder. Wird nichts geschnitten, gibt Bezzle einen Warnton aus.

Schneidest du durch die Form einer Maske, bekommst du für jedes Teil eine Maske, und jede zeigt weiterhin, was sie dort zeigte, wie ein gerahmtes Bild, das samt Rahmen zerschnitten wird.

## Nach außen und innen versetzen {#outset}

Halte {{⌥}} und zeig auf die Kante eines ausgewählten Rechtecks, einer Ellipse oder eines Pfads (eines geschlossenen oder eines mit Füllung): Die Kante leuchtet auf, und der Zeiger zeigt einen Doppelpfeil quer dazu. Zieh nach außen für eine ringsum vergrößerte Kopie der Form, die dahinter liegt; zieh nach innen für eine ringsum verkleinerte Kopie, die davor liegt. Die Kopie reicht so weit von der Kante weg, wie der Zeiger entfernt ist, der Abstand wird beim Ziehen angezeigt, und ihre Ecken bleiben spitz. Halte {{⇧}} für runde Ecken.

Die Kopie sieht aus wie die Form und ist nach ihr benannt, etwa *Ellipse 1 außen* oder *Ellipse 1 innen*; beim Loslassen ist sie ausgewählt. {{Esc}} während des Ziehens bricht ab. Die Form muss auf dem Bildschirm mindestens 16 Punkt breit und hoch sein.

> [!note] Wahltaste an der Kante, Wahltaste anderswo
> Mit gedrückter {{⌥}} macht ein Ziehen, das an der Kante der ausgewählten Form beginnt, eine nach außen oder innen versetzte Kopie. Ein Ziehen, das irgendwo sonst auf ihr beginnt, zieht eine Kopie heraus, wie bei jeder Ebene (siehe [Die Arbeitsfläche](/docs/canvas.html)).

## Rahmen in Form umwandeln {#outline-border}

{Objekt › Rahmen in Form umwandeln} ({{⌥⌘O}}) macht aus dem Rahmen jeder ausgewählten Form oder Linie eine eigene Form, gefüllt mit der Farbe, dem Verlauf oder dem Bild des Rahmens, genau wie er gezeichnet war: innen, mittig oder außen, gestrichelt oder nicht. Anders als ein Rahmen, der seine Stärke behält, wie groß die Ebene auch wird, wächst und schrumpft die neue Form wie jede Form.

- Eine Ebene mit Füllung behält ihre Füllung, und die Rahmenform kommt direkt darüber, nach ihr benannt, etwa *Rechteck 1 Rahmen*. Die Schatten der Ebene bleiben auf der Ebene.
- Eine Ebene, die nur aus Rahmen bestand, etwa eine Linie oder eine Form ohne Füllung, wird selbst zur Form.
- Eine Ebene mit mehreren Rahmen bekommt für jeden eine Form, übereinander, wie sie gezeichnet waren.

Es wirkt auf Rechtecke, Ellipsen, Pfade und Linien, deren Rahmen breiter als 0 ist, sofern sie nicht gesperrt sind. Danach sind die neuen Formen ausgewählt.

## Spiegeln {#flip}

{Objekt › Horizontal spiegeln} und {Objekt › Vertikal spiegeln}, oder die beiden Spiegeln-Knöpfe neben dem Feld für die Drehung auf der Karte {Frame}, spiegeln die Auswahl an Ort und Stelle: eine einzelne Ebene um ihre eigene Mitte, mehrere um die Mitte des Rechtecks, das sie alle umfasst. Der Umriss eines Pfads wird umgedreht, die Ecken eines Rechtecks tauschen die Seiten, eine Linie neigt sich in die andere Richtung, eine gedrehte Ebene dreht sich in die andere Richtung, und Verläufe und Bilder werden mitgespiegelt. Eine Gruppe spiegelt, was sie enthält.

Zeichenflächen und gesperrte Ebenen bleiben, wie sie sind. Wörter lesen sich immer vorwärts, darum wird ein Text allein nicht gespiegelt; zusammen mit anderen Ebenen rückt er an seinen gespiegelten Platz.

## Die Karten einer Form {#cards}

Was der Inspektor für die Auswahl zeigt, hängt davon ab, was sie ist:

- **Rechteck**: {Frame}, {Ecken}, {Deckkraft}, dann seine Füllungen, Rahmen, Schatten, Unschärfe, 3D und Export.
- **Ellipse**: dasselbe, ohne {Ecken}.
- **Pfad**: {Frame}, {Pfad}, {Deckkraft}, dann sein Aussehen wie bei einem Rechteck.
- **Linie**: {Frame}, {Deckkraft}, {Linie} anstelle von Füllung und Rahmen, dann Schatten (nur darunter), Unschärfe, 3D und Export.
- **Mehrere Ebenen**: Zuerst kommt {Anordnen}, mit den Knöpfen, die sie ausrichten und verteilen; sind es alles Formen, auch die Kombinieren-Knöpfe und der Bauen-Knopf.

Karten für Eigenschaften, die eine Form noch nicht hat, warten unten als gestrichelte Karten, einen Klick entfernt. Alle findest du unter [Farbe, Rahmen und Effekte](/docs/looks.html).

## Tastaturkürzel {#shortcuts}

| Tasten | Was sie tun |
| --- | --- |
| {{R}}, {{E}}, {{L}} | Rechteck, Ellipse, Linie |
| {{P}} | Zeichenstift |
| {{K}} | Messer |
| {{V}} | Auswahl |
| {{Return}} | Die Punkte des ausgewählten Pfads bearbeiten; mit dem Zeichenstift den Pfad beenden |
| {{Esc}} | Zeichnen oder Punktbearbeitung beenden; das Werkzeug weglegen |
| {{⌫}} | Den neuesten Punkt zurücknehmen (Zeichenstift, Messer); die gewählten Punkte löschen |
| {{⌘A}} | Alle Punkte wählen, beim Bearbeiten von Punkten |
| {{⌘8}} | In Pfad umwandeln |
| {{⌥⌘U}} | Vereinen |
| {{⌥⌘S}} | Subtrahieren |
| {{⌥⌘I}} | Schnittmenge bilden |
| {{⌥⌘X}} | Überlappung ausschließen |
| {{⌥⌘B}} | Aus Teilen bauen, und Bauen beenden |
| {{⌥⌘O}} | Rahmen in Form umwandeln |

Jedes Tastaturkürzel von Bezzle steht unter [Tastaturkürzel](/docs/shortcuts.html).
