---
title: Teilen und gemeinsam arbeiten
nav: Teilen
lede: Teile ein Design per Link, oder bewahre es in einem Ordner auf, den Google Drive, Dropbox oder iCloud Drive abgleicht, und arbeite im selben Moment mit anderen daran. Die Änderungen aller werden zusammengeführt, sodass nichts verloren geht, was jemand tut.
---

Es gibt zwei Wege, mit anderen an einem Design zu arbeiten, und beide lassen sich zusammen nutzen. **Per Link**: Du kopierst einen Link, schickst ihn, wie du willst, und wer ihn öffnet, arbeitet in Bezzle auf seinem Mac mit dir am Design oder verfolgt es in einem Browser. Niemand braucht irgendein Konto, und das Design wird auf deinem Mac verschlüsselt, bevor es zum Server von Bezzle geht. **Über einen geteilten Ordner**: Ein Design in einem Ordner, den Google Drive, Dropbox, iCloud Drive oder ein Server abgleicht, kann auf mehreren Macs zugleich offen sein, und jeder Mac schreibt nur seine eigenen Änderungen.

So oder so seht ihr einander bei der Arbeit: den Zeiger aller in einem eigenen farbigen Stift, was sie ansehen und halten, ihr Ziehen, während sie es tun. Änderungen werden Eigenschaft für Eigenschaft zusammengeführt, Notizen am Rand und benannte Versionen werden ebenfalls geteilt, und Widerrufen nimmt immer nur deine eigenen Schritte zurück.

::: figure together
Zwei Personen bei der Arbeit an einem geteilten Design, jede mit eigenem Stift, mit ihren Notizen am Rand.
:::

## Per Link teilen {#by-link}

::: steps
1. **Klick auf {Teilen …}.** Es steht rechts in der Leiste oben im Fenster des Designs. Ein Menü öffnet sich mit {Link kopieren} und dem Hinweis, dass alle mit dem Link am Design mitarbeiten können.
2. **Wähl {Link kopieren}.** Beim ersten Mal geht alles im Design auf den Server, bevor der Link herausgegeben wird: Der Knopf zeigt „Vorbereiten …“ und zählt dann die Bilder, während sie hochgehen, „Hochladen: 3 von 12“.
3. **Setz den Link irgendwo ein.** Sobald er kopiert ist, zeigt der Knopf kurz ein Häkchen. Setz den Link in jede Mail, jeden Chat oder jede Nachricht ein.
:::

Der Link sieht so aus, mit 43 Buchstaben, Ziffern und den Zeichen `-` und `_` nach dem `2.`:

```
https://bezzle.ch/open.html#2.<secret>
```

Alles nach dem `#` ist das Geheimnis des Designs, der Schlüssel dazu. Ein Browser schickt diesen Teil einer Adresse nie an einen Server, sodass nicht einmal die Website ihn sieht. Links aus der Zeit, bevor die Website umgezogen ist, die mit `https://mfrports.github.io/bezzle-web/` beginnen, funktionieren weiter.

Ist das Design geteilt, zeigt der Knopf {Geteilt}, und ein Etikett neben dem Zoom zeigt ebenfalls {Geteilt} (zeigst du darauf, sagt es, dass die Änderungen aller ankommen, sobald sie gemacht werden). {Link kopieren} gibt dir denselben Link jederzeit wieder, wenn du ihn brauchst. Wer das Design hat, kann seinen Link genauso kopieren und weitergeben, denn es ist für alle dasselbe Design.

Was hochgeht: das ganze Design, jedes Bild darin und die Versionen, die du benennst, solange es geteilt ist (siehe [Versionen in einem geteilten Design](/docs/notes.html#shared-versions)). Es bleibt verschlüsselt auf dem Server, sodass die anderen weiterarbeiten können, während dein Mac aus ist. Bevor es hochgeht, wird das Design gesichert, und ein Design, das noch aus den frühen Tagen von Bezzle als einzelne Datei vorliegt, wird zu einem Paket, denn das Teilen braucht Platz darin (siehe [Was eine Designdatei ist](/docs/files.html#design-file)).

> [!caution] Der Link ist der Schlüssel
> Wer den Link hat, kann das Design öffnen und ändern. Schick ihn nur den Leuten, die du im Design haben willst. Wie du es beendest, steht unter [Teilen beenden](#stop-sharing).

## Ein geteiltes Design öffnen {#opening-a-link}

### Die Einladungsseite {#invitation}

Ein Link öffnet die Einladungsseite von Bezzle im Browser, die sagt, dass ein Design wartet. Sie bietet zwei Knöpfe:

- **{In Bezzle öffnen}** gibt den Link an Bezzle auf diesem Mac weiter, als `bezzle://share/2.<secret>`.
- **{Im Browser ansehen}** öffnet das Design im Browser, für alle ohne Mac (siehe [Im Browser](#browser)).

Passiert bei {In Bezzle öffnen} nichts, erklärt die Seite, was zu tun ist: Bezzle 1.4 oder neuer holen, kostenlos auf der Website (hast du es schon, öffne es und nimm das Update, das es dir anbietet), dann auf die Seite zurückkommen und noch einmal auf {In Bezzle öffnen} klicken. Ein Link, der unterwegs sein Geheimnis verloren hat, zeigt „Dieser Link ist unvollständig. Bitte um eine neue Einladung.“

### In Bezzle {#arriving}

Bezzle holt seine Startseite nach vorn, wo eine Karte für das Design zeigt, wie es ankommt: seinen Namen und „Kommt von“ mit dem Namen der Person, die es geteilt hat. Sobald es da ist, öffnet es sich in einem eigenen Tab. Bilder folgen, wenn das Design sie zeigt, sodass beim ersten Blick einige noch unterwegs sein können (siehe [Bilder unterwegs](#pictures-arriving)).

Das Design wird in deinem Designordner unter dem Namen aufbewahrt, unter dem es geteilt wurde, oder als „Geteiltes Design“, wenn es keinen hat, mit einer angehängten Zahl, wenn der Name schon vergeben ist. Von da an ist es ein Design auf deiner Startseite wie jedes andere, markiert mit „Geteilt von“ und dem Namen der Person, der es gehört. Öffnest du denselben Link später noch einmal, öffnet er es einfach.

Lässt sich ein Link nicht öffnen, sagt die Startseite auf einer eigenen Karte, warum, „Konnte nicht geöffnet werden“, die du mit ihrem ✕ schließt:

| Meldung | Was sie bedeutet |
| --- | --- |
| „Dieser Link führt zu keinem Design.“ | Der Link ist kein Bezzle-Link, ist beschädigt, oder sein Design ist nicht auf dem Server. |
| „Dieses Design wird nicht mehr geteilt.“ | Wem es gehört, hat das Teilen beendet, darum führt der Link nirgendwohin mehr. |
| „Bezzle konnte das Design nicht erreichen. Prüfe die Verbindung und öffne den Link noch einmal.“ | Bezzle konnte seinen Server nicht erreichen. Öffne den Link noch einmal, sobald du online bist. |

Ein Design, das jemand mit dir geteilt hat, behält den Namen, unter dem es geteilt wurde: {Umbenennen} ist dafür ausgeschaltet, auf der Startseite und in seinem Tab, sodass es das Design bleibt, das alle kennen.

### Wer du für die anderen bist {#names}

Es gibt keine Konten. Die anderen sehen dich unter dem Namen deines Benutzeraccounts auf diesem Mac, in seiner Kurzform, und du siehst sie unter ihrem. Mit demselben Namen sind die Notizen unterschrieben, die du schreibst, und die Versionen, die du benennst.

## Im selben Moment arbeiten {#live}

Solange andere das Design mit dir offen haben, gibt Bezzle deinen Zeiger, deine Ansicht und deine Änderungen an sie weiter, und ihre an dich, einen Moment, nachdem sie geschehen. All das wird mit dem Schlüssel des Designs verschlüsselt, bevor es den Mac verlässt. Ein per Link geteiltes Design und ein Design in einem geteilten Ordner funktionieren hier gleich.

### Wer da ist {#who}

Die Leute, die mit dir im Design sind, erscheinen rechts in der oberen Leiste, jede als Abzeichen: ihr Anfangsbuchstabe auf einem Kreis in der Farbe ihres Stifts. Sie nehmen den Platz des Etiketts {Geteilt} ein, solange jemand da ist.

- **Bei der Arbeit**: Ein Ring um das Abzeichen kommt und geht, während die Person Ebenen bewegt, tippt oder zeichnet.
- **Abwesend**: Das Abzeichen ist abgeblendet, während die Person in einer anderen App oder einem anderen Fenster ist, oder wenn 25 Sekunden lang nichts von ihr kam. Es wird wieder hell, sobald sie zurück ist.
- **Zeigst du darauf**: Ihr Name hängt unter dem Abzeichen, mit der Uhrzeit bei ihr, wenn sie nicht der Zeit hier entspricht.
- **Gegangen**: Sie verlässt die Leiste, wenn sie das Design schließt, oder nach fünf Minuten ohne ein Lebenszeichen von ihr.

Der Stift deines eigenen Mac ist blau. Alle anderen zeichnen in einer von acht anderen Farben: Zinnober, Ocker, Viridian, Rosé, Petrol, Sepia, Oliv und Pflaume. Jede Person behält auf jedem Mac im Design dieselbe Farbe, und keine zwei teilen sich eine, solange genug für alle da sind. Wer in einem Browser zuschaut, erscheint nicht unter den Abzeichen.

### Auf der Arbeitsfläche {#on-canvas}

Jede Person erscheint in ihrer eigenen Farbe, mit den Markierungen, die Bezzle für dich in Blau zeichnet:

- **Ihre Hand**: ihr Zeiger, geformt wie das Werkzeug, das sie hält: ein Pfeil, ein Textcursor, ein Fadenkreuz, während sie eine Form oder eine Zeichenfläche zeichnet, eine Zeichenfeder. Er hat einen weißen Rand, sodass er auf allem zu erkennen ist, und gleitet, wie eine Hand es täte, statt zu springen, wie das Netzwerk es tut.
- **Ihr Name**: auf einem kleinen Etikett neben der Hand, wenn sie sich zu bewegen beginnt, während sie arbeitet oder wenn ihre Hand deiner nahe kommt.
- **Wohin sie schaut**: ein weicher Lichtschein in ihrer Farbe auf dem Tisch, um die Zeichenflächen, die sie im Blick hat.
- **Was sie hält**: ihre Auswahl, umrandet in ihrem Stift, mit ihrem Anfangsbuchstaben auf einem Fähnchen an der Ecke.
- **Was sie zieht**: Ebenen, die sie zieht oder skaliert, bewegen sich auf deiner Arbeitsfläche, während sie es tut, noch bevor die Änderung selbst ankommt, und kommen dort zur Ruhe, wo sie loslässt.
- **Was sie geändert hat**: Jede Ebene, die jemand ändert, leuchtet kurz in dessen Farbe auf, wenn die Änderung ankommt.

### Zu jemandem gehen {#follow}

Klick auf das Abzeichen einer Person in der oberen Leiste, und deine Ansicht fliegt zu dem, was sie gerade ansieht, hinaus, hinüber und wieder hinein, damit du die Orientierung behältst, und geht dann mit ihr mit, während sie sich bewegt. Schnittmarken in ihrer Farbe stehen in den Ecken deiner Arbeitsfläche, mit ihrem Namen am Fuß, solange du folgst. Bewegst du die Ansicht selbst oder klickst du noch einmal auf ihr Abzeichen, gehört die Ansicht wieder dir.

Wer außerhalb deines Blickfelds arbeitet, sitzt als Abzeichen am Rand der Arbeitsfläche, das in die Richtung zeigt, in der die Person ist, und am Rand entlanggleitet, wenn sich einer von euch bewegt. Zeig darauf für den Namen, und klick darauf, um dorthin zu fliegen und ihr zu folgen.

### Auf etwas hinweisen {#wink}

Um „schau hier“ zu sagen, schüttle den Zeiger: schnell hin und her, mindestens viermal die Richtung wechselnd innerhalb von 0,7 Sekunden, jedes Mal mindestens 16 Punkt weit. Eine Schlaufe wird in deinem Stift um die Stelle gezogen, so wie man etwas auf einem Ausdruck einkreist, auf jeder Arbeitsfläche im Design, und verblasst nach ein paar Sekunden. Für jemanden, der die Stelle nicht im Blick hat, umkreist die Schlaufe stattdessen dein Abzeichen am Rand seiner Arbeitsfläche, und ein Klick darauf lässt ihn zur Stelle fliegen. Ein Schütteln zählt höchstens einmal alle 1,2 Sekunden.

### Bilder unterwegs {#pictures-arriving}

Ein Bild, das jemand platziert, erreicht die anderen in zwei Schritten. In dem Moment, in dem es platziert wird, geht ein winziger Vorgeschmack davon an alle im Design, ein paar Dutzend Pixel breit, weich und unscharf dort gezeigt, wo das Bild sein wird. Das Bild selbst folgt vom Server, und solange es unterwegs ist, entwickelt es sich wie ein Foto, milchig und körnig, während die Farben langsam kommen; ohne Vorgeschmack beginnt es als unbelichtetes Papier. Sobald es da ist, wird es scharf gezeichnet.

### Im Hintergrund {#background}

Solange andere mit dir im Design sind, hält Bezzle macOS davon ab, es im Hintergrund zu bremsen, sodass sie dich weiter sehen, statt zu denken, du seist gegangen. Dein Mac kann trotzdem in den Ruhezustand gehen. Die Verbindung kümmert sich um sich selbst: Sie merkt, wenn sie abbricht, etwa nach einem WLAN-Wechsel, versucht es jedes Mal etwas später wieder und verbindet sich sofort neu, wenn der Mac aufwacht.

## Wie Änderungen zusammengeführt werden {#merging}

Jede Kopie eines geteilten Designs schreibt nur ihre eigenen Änderungen und nie über die von jemand anderem. Jede Kopie nimmt die Änderungen aller auf und führt sie zusammen, in welcher Reihenfolge und wie spät sie auch ankommen, zu demselben Design. So geht keine Bearbeitung je verloren oder wird überschrieben.

Änderungen werden Eigenschaft für Eigenschaft zusammengeführt:

- **Verschiedene Ebenen, oder verschiedene Eigenschaften einer Ebene**: Alles bleibt. Änderst du die Füllung eines Buttons, während jemand ihn verschiebt, hat er am Ende deine Füllung an dem Platz, an den die andere Person ihn gesetzt hat.
- **Dieselbe Eigenschaft derselben Ebene**: Die spätere Änderung bleibt, auf jedem Mac gleich. Position und Größe einer Ebene zählen als eine Eigenschaft, ihre Wörter als eine andere.
- **Eine entfernte Ebene**: Hat jemand sie oder etwas darin geändert, nachdem sie entfernt wurde und bevor er davon erfuhr, kommt sie mit dem zurück, was sie hält, sodass seine Arbeit nicht verloren geht.
- **Zwei Ebenen, gleichzeitig ineinandergelegt**: Der ältere der beiden Züge gibt nach, und diese Ebene kommt auf die Arbeitsfläche.
- **Stile und Notizen**: werden genauso zusammengeführt, jede Eigenschaft für sich. Eine Antwort auf eine Notiz, eine Änderung an ihren Wörtern und das Abhaken des Gesprächs, gleichzeitig von drei Personen gemacht, bleiben alle erhalten.

Manches gehört nur dir: wohin du schaust und wie nah, was du ausgewählt hast und welcher Beitrag eines Stapels für dich vorn liegt.

Während du etwas ziehst, warten die Änderungen der anderen, bis du loslässt, sodass nichts unter deiner Hand springt; während du tippst, kommen sie wie gewohnt an. Sie sind nie Schritte in deinem Widerrufen-Verlauf: Widerrufen nimmt nur zurück, was du getan hast, und lässt die Änderungen aller anderen, wie sie sind, auch wenn sie danach kamen.

### Wann Änderungen unterwegs sind {#timing}

Zu den Leuten, die mit dir im Design sind, geht eine Änderung sofort; ein Ziehen geht, wenn du loslässt, während sich die Ebenen auf ihrer Arbeitsfläche schon beim Ziehen bewegen. Zum Server geht sie innerhalb von ein paar Sekunden, zusammen mit allem, was du in der Zwischenzeit tust. Ein geteiltes Design schaut außerdem nach Neuem, wann immer der Server sagt, dass es etwas gibt, auf jeden Fall alle 30 Sekunden, und immer, wenn Bezzle nach vorn kommt.

Ohne Verbindung arbeitest du wie gewohnt weiter. Der Knopf Teilen zeigt ein Warndreieck, und zeigst du darauf, steht dort „Bezzle kann gerade keine Verbindung herstellen. Deine Änderungen bleiben erhalten und gehen raus, sobald es wieder geht.“ Ein geteiltes Design öffnet sich immer so, wie es zuletzt geteilt war, auch ohne Netzwerk, denn alles, was es braucht, liegt in seiner Datei.

## Teilen beenden und nur lesen {#stop-sharing}

Nur der Mac, der ein Design geteilt hat, kann das Teilen beenden. Wähl {Teilen …} › {Teilen beenden …}. Bezzle fragt zuerst: Der Link funktioniert dann nicht mehr, und alle, die das Design haben, behalten es so, wie es jetzt ist, nur zum Lesen. Klick auf {Teilen beenden}, um fortzufahren.

Das Design wird dann vom Server gelöscht, mit allem darin, und der Link funktioniert nie wieder. Auf deinem Mac geht das Design als dein eigenes weiter.

Die Kopie aller anderen bleibt, wie sie zuletzt war, markiert mit „Nicht mehr geteilt“ und einem Schloss. Zeigst du darauf, sagt das Etikett: „Nur lesen: Dieses Design wird nicht mehr mit dir geteilt. Sichere eine Kopie, um weiter daran zu arbeiten.“ In einem solchen Design gilt:

- Nichts lässt sich ändern. Der Inspektor ist abgeblendet, doch {Untersuchen} misst weiterhin alles aus und zeigt seinen Code.
- Der Knopf Teilen wird zu {Kopie sichern} ({{⇧⌘S}}), womit du daraus ein eigenes Design machst, benannt nach ihm mit „Kopie“, in deinem Designordner, und es öffnest.
- Notizen lassen sich lesen und kopieren, aber nicht schreiben, beantworten oder abhaken; Versionen lassen sich ansehen, aber weder benennen noch wiederherstellen.

Um einem Design einen neuen Link zu geben, beende das Teilen und wähl dann noch einmal {Link kopieren}: Es bekommt einen neuen Platz auf dem Server und ein neues Geheimnis, und der alte Link bleibt tot.

### Ein geteiltes Design in den Papierkorb legen {#trash}

Legst du ein Design, das du geteilt hast, in den Papierkorb, beendet das auch das Teilen, darum fragt Bezzle zuerst: „‚…‘ in den Papierkorb legen und nicht mehr teilen?“, mit {In den Papierkorb legen} und {Abbrechen}. Ist der Server gerade nicht erreichbar, versucht Bezzle es jedes Mal wieder, wenn es nach vorn kommt, bis es durchkommt. Nimmst du ein Design, das außerhalb deines Designordners liegt, von der Startseite ({Aus Liste entfernen}), bleiben seine Datei und sein Teilen, wie sie sind.

> [!note] Einst über iCloud geteilte Designs
> Bezzle vor 1.4 hat Designs über iCloud geteilt. Diese Designs werden nicht mehr abgeglichen. Deine eigenen gehören wieder ganz dir: Teile sie per Link, um gemeinsam weiter daran zu arbeiten. Die anderen, die mit dir geteilt wurden, bleiben, wie sie zuletzt waren, nur zum Lesen, und {Kopie sichern} behält eine Kopie für dich.

## Kopien eines geteilten Designs {#copies}

Eine Kopie ist immer ein eigenes Design, nie geteilt:

- **{Duplizieren}** auf der Startseite und {Ablage › Kopie sichern} machen Kopien, die nicht geteilt sind.
- **Eine im Finder gemachte Kopie** eines per Link geteilten Designs wird auf deinem Mac zu einem eigenen Design, solange das Original noch da ist.

> [!caution] Wer die Datei schickt, schickt den Schlüssel
> Die Datei eines geteilten Designs enthält seinen Link, denn alle, die das Design haben, haben den Link. Schickst du jemandem die Datei selbst, kann diese Person damit dem geteilten Design beitreten. Um jemandem ein Design zu geben, ohne die Person hineinzulassen, schick eine Kopie, die mit {Kopie sichern} oder {Duplizieren} gemacht wurde.

## Im Browser {#browser}

{Im Browser ansehen} auf der Einladungsseite öffnet das Design auf der Website von Bezzle, gezeichnet von demselben Code, der es auf einem Mac zeichnet. Das ist für Leute ohne Mac, vor allem unter Windows, die ein Design ansehen wollen, das jemand mit ihnen geteilt hat.

- **Sein Name** und wer es geteilt hat stehen oben, zusammen mit dem Stand der Verbindung: „Live“, „Verbinden …“, „Neu verbinden …“, „Nicht mehr geteilt“ oder „Offline“.
- **Seine Zeichenflächen** stehen links in einer Liste (auf einem schmalen Bildschirm oben quer). Klick auf eine, um sie zu sehen.
- **Änderungen**, die andere machen, kommen an, sobald sie gemacht werden, und die Zeichenfläche wird neu gezeichnet. Bilder werden geholt, wenn die Zeichenfläche sie zeigt.

Der Browser zeigt das Design; er ändert es nicht, und die Leute darin sehen keinen Zeiger von jemandem, der in einem Browser zuschaut. Schriften, die zum Mac gehören, wie SF Pro, werden in ähnlich aussehenden offenen Schriften gezeichnet (SF Pro zum Beispiel in Inter), sodass Wörter etwas anders sitzen können als auf einem Mac. Der erste Besuch dauert einen Moment, denn die Seite lädt etwa 22 MB.

## Geteilte Ordner {#folders}

Ein Design in einem Ordner, den mehrere Computer abgleichen, kann auf allen zugleich offen sein: Google Drive, Dropbox, OneDrive, Box, iCloud Drive oder ein Ordner auf einem Server. Leg das Design dort ab, indem du es im Finder dorthin bewegst oder einen solchen Ordner als deinen Designordner wählst ([Der Designordner](/docs/files.html#designs-folder)), und öffne es auf jedem Mac.

Jeder Mac schreibt dann seine Änderungen in eigene Dateien im Design und liest die aller anderen, sodass nie etwas überschrieben wird, wie viele Leute es auch offen haben. Änderungen werden genauso zusammengeführt wie in einem per Link geteilten Design, und ihr seht einander auf dieselbe Weise bei der Arbeit: Zeiger, Ansichten, Ziehen und Änderungen gehen, während sie geschehen, über den Server von Bezzle, verschlüsselt mit einem Schlüssel, den nur hat, wer den Ordner hat, und der im Design aufbewahrt wird, während der Ordner selbst das Design aufbewahrt.

- **Das Etikett** neben dem Zoom zeigt „In … geteilt“ mit dem Namen des Dienstes, etwa „In Google Drive geteilt“, sobald die Arbeit von jemand anderem im Design ist. Deine eigenen Macs, unter demselben Namen, zählen als du.
- **Auf dem Laufenden bleiben**: Bezzle liest Neues, wann immer der Dienst Dateien im Design ändert, und auf jeden Fall alle 20 Sekunden (alle 5 Sekunden bei einem Ordner auf einem Server, der nicht immer sagt, wenn sich etwas geändert hat). Eine Datei, die der Dienst nur online aufbewahrt, wird geladen, wenn Bezzle sie liest.
- **Umbenannt oder bewegt** von jemand anderem, während du es offen hast, geht das Design dort weiter, wo es jetzt ist, sodass ihr alle im selben Design weiterarbeitet.
- **Eine Kopie**, die im Finder gemacht wurde, ist ein eigenes Design, mit einem eigenen Live-Raum.
- **Auch per Link**: Ein Design in einem geteilten Ordner lässt sich zusätzlich per Link mit jemandem außerhalb des Ordners teilen.

Ein Design in einem abgeglichenen Ordner geht dorthin, wohin dieser Dienst es bringt, und dafür gilt dessen Datenschutzrichtlinie.

## Zwei Kopien von Bezzle auf einem Mac {#two-copies}

Mit zwei Kopien von Bezzle auf einem Mac, etwa einer in Downloads und einer in Programme, läuft immer nur eine. Startest du die zweite, während die erste läuft, per Doppelklick oder durch das Öffnen eines Links oder Designs, gibt sie das, womit sie geöffnet wurde, an die bereits laufende weiter, holt diese nach vorn und beendet sich ein paar Sekunden später. So sichern zwei Kopien nie dieselben Designs übereinander. Beide Kopien haben dieselben Designs und dasselbe Teilen, denn sie sind dieselbe App.

## Grenzen {#limits}

| Was | Grenze |
| --- | --- |
| Ein geteiltes Design auf dem Server | 2 GB, alles darin zusammen |
| Ein Bild | etwa 32 MB; eine größere Bilddatei bleibt auf deinem Mac, und die anderen bekommen sie nicht |
| Stiftfarben | acht neben deinem Blau; bei mehr Leuten wiederholen sich die Farben |

Wie die Verschlüsselung funktioniert und was der Server sehen kann und was nicht, steht unter [Wie das Teilen verschlüsselt ist](/docs/files.html#encryption). Notizen und Versionen in einem geteilten Design stehen unter [Notizen und Versionen](/docs/notes.html#shared-notes).
