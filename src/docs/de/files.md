---
title: Dateien, Updates und Datenschutz
nav: Dateien und Datenschutz
lede: Wo deine Designs aufbewahrt werden und was in einem steckt, wie sie sich selbst sichern, wie Bezzle sich aktuell hält, wie geteilte Designs verschlüsselt werden und was zu tun ist, wenn etwas nicht funktioniert.
---

Deine Designs sind Dateien auf deinem Mac. Es gibt kein Konto und keine eigene Cloud von Bezzle: Ein Design liegt in deinem Designordner, oder wo immer du es aufbewahrst, und geht nur dann zum Server von Bezzle, wenn du es per Link teilst, verschlüsselt, bevor es deinen Mac verlässt.

## Der Designordner {#designs-folder}

Neue Designs, Dateien, die du importierst, und Designs, die per Link zu dir kommen, werden in deinem Designordner aufbewahrt: dem Ordner Bezzle in deinen Dokumenten, bis du einen anderen wählst. Die Startseite zeigt jedes Design darin, die neuesten zuerst, zusammen mit den Designs, die du von anderswo geöffnet hast.

Neben {Deine Designs} auf der Startseite ist ein Knopf mit dem Namen des Ordners; zeigst du darauf, erscheint der vollständige Pfad des Ordners. Klick darauf für:

- **{Im Finder zeigen}**: öffnet den Ordner im Finder.
- **{Ordner wählen …}**: wählt einen anderen, wie {Bezzle › Designordner …}.

### Einen anderen Ordner wählen {#choose-folder}

::: steps
1. **Wähl {Bezzle › Designordner …}.** Oder {Ordner wählen …} auf der Startseite.
2. **Wähl einen Ordner.** Das Fenster sagt „Wähle, wo Bezzle deine Designs aufbewahrt.“ Du kannst darin einen neuen Ordner anlegen. Klick auf {Designs hier aufbewahren}.
3. **Sag, was mit den Designs geschieht, die du hast.** Enthält der alte Ordner welche, fragt Bezzle, ob sie mit umziehen sollen: {Verschieben}, {Dort lassen} oder {Abbrechen}.
:::

{Verschieben} bringt jedes Design aus dem alten Ordner in den neuen, auch die, die in einem Tab offen sind, und jedes behält seinen Platz auf der Startseite; geteilte Designs bleiben geteilt. Ein Design, das sich nicht verschieben lässt, bleibt, wo es war. {Dort lassen} lässt sie alle, wo sie sind, und sie bleiben trotzdem auf der Startseite, wie von anderswo geöffnete Designs. Von da an werden neue Designs und importierte Dateien im neuen Ordner gesichert, und Bezzle merkt sich ihn.

Wählst du einen Ordner, der schon Designs enthält, erscheint jedes davon auf der Startseite. Die Startseite listet die Designs, die im Ordner selbst liegen; eines in einem Ordner darin erscheint, sobald du es geöffnet hast.

Ein Designordner, den Google Drive, Dropbox oder iCloud Drive mit anderen Macs abgleicht, macht jedes Design darin zu einem, das die Leute, die den Ordner teilen, zur selben Zeit mit dir öffnen können (siehe [Geteilte Ordner](/docs/sharing.html#folders)).

Lässt sich der gewählte Ordner nicht finden, wenn Bezzle startet, weil sein Laufwerk nicht angeschlossen ist oder er im Papierkorb gelandet ist, bewahrt Bezzle deine Designs inzwischen im Ordner Bezzle in Dokumente auf und merkt sich deine Wahl: Öffne Bezzle noch einmal, sobald der Ordner zurück ist.

### Auf der Startseite {#home}

Klick mit der rechten Maustaste auf ein Design auf der Startseite für {Öffnen}, {Im Finder zeigen}, {Umbenennen}, {Duplizieren}, und {In den Papierkorb legen} bei einem Design in deinem Designordner, oder {Aus Liste entfernen} bei einem, das woanders liegt, was es von der Startseite nimmt und die Datei lässt, wo sie ist. Das Feld über den Designs durchsucht sie nach Namen. Jede Karte sagt, wann sich das Design zuletzt geändert hat und ob es geteilt ist (siehe [Erste Schritte](/docs/start.html)).

Bezzle merkt sich bis zu 200 Designs, die von außerhalb des Designordners geöffnet wurden; sind es mehr, fallen die, die am längsten nicht mehr geöffnet wurden, zuerst aus der Liste. Ihre Dateien bleiben unberührt.

## Was eine Designdatei ist {#design-file}

Ein Design ist eine Datei mit der Endung `.bezzle`. Sie ist ein Paket: ein Ordner, den der Finder als eine Datei zeigt und kopiert. Darin ist alles, was das Design braucht, sodass ein Design, das auf einen anderen Mac kopiert oder jemandem geschickt wird, vollständig ist.

| Darin | Was es enthält |
| --- | --- |
| Das Design | Seine Zeichenflächen und Ebenen, Stile, Komponenten, Prototyp und Notizen, und wohin du zuletzt geschaut hast. |
| `images` | Jedes Bild, das im Design platziert ist, hineinkopiert. |
| `versions` | Die aufbewahrten Versionen des Designs (siehe [Versionen](/docs/notes.html#versions)). |
| `sharing` | Bei einem geteilten Design: sein Link und die eigene Aufzeichnung jedes Mac über die Änderungen, die er gemacht hat. |
| `QuickLook` | Das Bild, das der Finder für die Datei zeigt. |

Ein Bild, das du platzierst, wird in das Design kopiert, sodass sich daran nichts ändert, wenn du die Originaldatei danach verschiebst, umbenennst oder löschst. Designs aus den frühen Tagen von Bezzle, die als einzelne Datei vorliegen, bleiben eine, bis sie Platz für ein Bild, eine Version oder das Teilen brauchen, und werden dann von selbst zu einem Paket. Designs mit der älteren Endung `.vellum` öffnen sich auch.

Wähl im Finder {Paketinhalt zeigen}, um hineinzuschauen, aber ändere dort nichts: Bezzle liest und schreibt diese Dateien selbst.

> [!caution] Die Datei eines geteilten Designs enthält seinen Link
> Die Datei eines per Link geteilten Designs enthält seinen Link, sodass jeder, der die Datei bekommt, dem geteilten Design beitreten kann. Um jemandem ein eigenes Design zu geben, schick eine Kopie, die mit {Ablage › Kopie sichern} oder {Duplizieren} gemacht wurde, denn die ist nie geteilt.

## Sichern {#saving}

Es gibt keinen Befehl zum Sichern. Ein Design wird einen Moment nach jeder Änderung gesichert, deutlich innerhalb einer Sekunde, und wohin du darin schaust, innerhalb von zwei Sekunden. Das Sichern geschieht im Hintergrund, ein Sichern nach dem anderen, sodass dich selbst ein großes Design nie aufhält.

- **Einen Tab schließen** ({Ablage › Tab schließen}, {{⌘W}}) sichert das Design, bewahrt eine Version davon auf, wenn es sich geändert hat, und macht sein Bild für den Finder.
- **{Ablage › Fenster schließen}** ({{⇧⌘W}}) schließt, wenn ein Design vorn ist, jedes Design, jedes gesichert, und lässt die Startseite stehen. Mit der Startseite vorn beendet es Bezzle.
- **Beenden** wartet, bis jedes offene Design auf der Festplatte ist. Ließ sich eines nicht schreiben, sagt Bezzle das, „‚…‘ konnte nicht gespeichert werden.“, mit dem Grund, und bietet {Bezzle offen lassen} oder {Trotzdem beenden} an.
- **{Ablage › Kopie sichern}** ({{⇧⌘S}}) macht eine Kopie des Designs, wie es jetzt ist, benannt nach ihm mit „Kopie“, in deinem Designordner, mit seinen Bildern, und öffnet sie. Die Kopie beginnt ohne Versionen und ist nicht geteilt.
- **{Duplizieren}** auf der Startseite macht eine Kopie neben dem Original, mit seinen Versionen, und nie geteilt. Es öffnet sie nicht.
- **{Ablage › Im Finder zeigen}** zeigt die Datei des Designs.

Ein Design, das im Finder umbenannt oder bewegt wird, während es offen ist, geht dort weiter, wo es jetzt ist, sobald du zu Bezzle zurückkommst. Verschwindet seine Datei genau dann, wenn Bezzle sie sichert, sucht Bezzle, wohin sie gegangen ist, und sichert sie dort, oder schreibt sie sonst neu an ihren alten Platz, sodass nichts verloren geht, was du getan hast.

Jede Änderung ist außerdem ein Schritt im Widerrufen-Verlauf des Designs, solange es offen ist (siehe [Erste Schritte](/docs/start.html)), und Versionen reichen weiter zurück (siehe [Notizen und Versionen](/docs/notes.html#versions)).

## Vorschauen im Finder {#previews}

Der Finder zeigt jedes Design als Bild davon, auf einem Blatt des Papiers von Bezzle mit umgeknickter rechter oberer Ecke, so wie das Symbol eines Designs gezeichnet ist. Das Bild wird im Design aufbewahrt, bis zu 1.024 Pixel an seiner längeren Seite, genug für die größten Symbole des Finders auf einem Retina-Bildschirm.

- **Ein Design mit einer Zeichenfläche** zeigt diese Zeichenfläche randlos. Eine sehr hohe Seite zeigt ihren oberen Teil, ein sehr breiter Streifen seinen Anfang.
- **Ein Design mit mehreren Zeichenflächen** zeigt seine Arbeitsfläche auf dem Papier, nah herangeholt, sodass die ersten Zeichenflächen groß erscheinen statt alle klein.
- **Wann es entsteht**: etwa 20 Sekunden, nachdem du ein Design änderst, egal wie viele Änderungen in der Zwischenzeit kommen; wenn du seinen Tab schließt; und wenn Bezzle beendet wird. Ein Design auf der Startseite ohne aktuelles Bild, etwa eines, das woanders geändert oder von einer früheren Bezzle-Version gemacht wurde, bekommt eines im Hintergrund.
- **Stattdessen das Symbol**: Ein Design, auf dem nichts ist, oder eines, das als einzelne Datei vorliegt, zeigt das Designsymbol.

## Öffnen und importieren {#opening}

- **Doppelklick** auf ein Design im Finder, oder zieh es auf Bezzle im Dock. Es öffnet sich in einem eigenen Tab; bei einem, das schon offen ist, kommt sein Tab nach vorn.
- **{Ablage › Öffnen …}** ({{⌘O}}) öffnet Bezzle-Designs und holt Dateien aus Adobe XD, Figma, Sketch und Photoshop herein. Du kannst mehrere auf einmal wählen.
- **{Ablage › Aus XD, Figma, Sketch oder Photoshop importieren …}** ({{⇧⌘I}}) bietet nur Dateien zum Hereinholen an. Jede wird zu einem neuen Design in deinem Designordner; die Datei selbst bleibt, wie sie ist.
- **{Ablage › Von einer Website importieren …}** ({{⌥⇧⌘I}}) holt eine Webseite als Ebenen herein.

Was aus jeder App mitkommt, und den Bericht, der alles nennt, was nicht mitkommen konnte, findest du unter [Designs hereinholen](/docs/import.html).

macOS beschränkt jede App auf das, was sie erreichen darf. Bezzle kann immer auf seinen Designordner, deine Downloads und deine Bilder (zum Lesen) zugreifen, und auf jedes Design und jeden Ordner, den du darin öffnest oder wählst, aus dem Finder, dem Fenster zum Öffnen oder dem Exportfenster. Es behält die Erlaubnis für bis zu 200 davon, sodass sich ein von anderswo geöffnetes Design auch nach dem Beenden von Bezzle wieder öffnet.

## Updates {#updates}

Bezzle hält sich selbst aktuell. Es schaut bei jedem Start nach einer neuen Version, und einmal am Tag, während es läuft. Ist eine neue Version da, zeigt ein Fenster, was darin neu ist, und du installierst sie jetzt oder später. Wählst du dort, Updates automatisch zu installieren, lädt Bezzle jede neue Version im Hintergrund und setzt sie ein, wenn du es das nächste Mal beendest.

Um sofort nachzuschauen, wähl {Bezzle › Nach Updates suchen …}, direkt unter {Über Bezzle}.

Jeder Download wird von Apple geprüft, und jedes Update ist signiert, sodass nur eine Version installiert wird, die von Bezzle selbst stammt. Die Suche nach einem Update übermittelt nichts als deine Version. Jede Version und was sich darin geändert hat, steht auf der Seite [Neuigkeiten](/releases.html).

## Datenschutz {#privacy}

Bezzle sammelt keine Daten. Es gibt kein Konto, keine Analyse, keine Werbung und kein Tracking jeglicher Art, und es sendet nichts über dich oder deine Designs an irgendwen. Hintergrund entfernen läuft auf deinem Mac; Fotos werden nie hochgeladen. Die vollständige [Datenschutzerklärung](/privacy.html) nennt die Einzelheiten.

Bezzle verbindet sich nur dafür mit dem Internet:

- mit dem **Server von Bezzle bei Cloudflare**, für Designs, die du teilst, und, solange andere ein geteiltes Design mit dir offen haben, um eure Zeiger und Änderungen weiterzureichen, alles verschlüsselt mit einem Schlüssel, den nur die Leute mit dem Link haben;
- mit einer **Webseite, die du hereinholen willst**, die so geladen wird, wie dein Browser sie laden würde;
- mit **dieser Website und GitHub**, wo die Downloads liegen, um nach einer neuen Version zu schauen.

Der Server für KI-Assistenten lauscht nur auf deinem Mac und ist aus dem Netzwerk nicht erreichbar; nichts geht an einen Assistenten, solange du keinen verbindest (siehe [KI-Assistenten](/docs/ai.html#privacy)).

## Wie das Teilen verschlüsselt ist {#encryption}

Wenn du ein Design teilst, macht dein Mac ein Geheimnis dafür: 32 zufällige Bytes, geschrieben als die 43 Zeichen nach `#2.` in seinem Link. Das Geheimnis wird nie an den Server von Bezzle oder an die Website geschickt. Ein Browser behält alles nach dem `#` einer Adresse für sich, sodass die Einladungsseite es auf deinem Mac liest und direkt an Bezzle weitergibt, und nicht einmal die Website sieht es.

Aus dem Geheimnis leitet jeder Mac und jeder Browser mit dem Link dieselben Schlüssel ab:

- **den Namen des Raums** auf dem Server, der nichts über das Geheimnis verrät;
- **einen Schlüssel zum Lesen** des Raums und **einen Schlüssel zum Schreiben** hinein, von denen der Server nur einen Fingerabdruck behält;
- **den Verschlüsselungsschlüssel** für alles im Design;
- **einen Schlüssel zum Benennen von Bildern**, sodass der Server für jedes Bild nur einen verwürfelten Namen sieht, nie seinen Dateinamen.

Alles wird auf dem Mac verschlüsselt, bevor es ihn verlässt, mit AES-256-GCM: das Design, jede Änderung, jedes Bild, benannte Versionen, der Name des Designs und wer es geteilt hat, und jede Live-Nachricht mit deinem Zeiger und deinem Ziehen. Jeder Mac verschlüsselt mit einem eigenen Schlüssel für jede Sitzung, gemacht aus dem Schlüssel des Designs, und jedes Stück ist an seinen Platz im Raum gebunden, sodass niemand ein Stück ändern oder als ein anderes ausgeben kann, ohne dass es auffällt.

Der Server behält nur, was er nicht lesen kann: verschlüsselte Stücke, ihre Größe und wann sie ankommen. Weder der Hersteller von Bezzle noch Cloudflare können ein geteiltes Design lesen.

Zwei weitere Schlüssel kommen nie in den Link:

- **Der Besitzerschlüssel**, gemacht vom Mac, der das Design geteilt hat, und nur dort aufbewahrt. Nur mit ihm lässt sich das Teilen des Designs beenden, und nur er kann sagen, wie das Design heißt und wer es geteilt hat.
- **Der eigene Schlüssel jedes Mac** zum Schreiben seiner Änderungen, sodass seine Aufzeichnungen nur ihm gehören und niemand sonst sie löschen oder überschreiben kann.

{Teilen beenden …} löscht das Design und alles darin vom Server, und sein Raum bleibt für immer weg: Der alte Link lässt sich nie wieder verwenden.

Ein Design in einem Ordner, den Google Drive, Dropbox oder iCloud Drive abgleicht, geht dorthin, wohin dieser Dienst es bringt, und dafür gilt dessen Datenschutzrichtlinie. Nur was live zwischen den Macs läuft, die es offen haben, Zeiger, Ziehen und Änderungen, während sie geschehen, geht über den Server von Bezzle, verschlüsselt mit einem Schlüssel, der im Design aufbewahrt wird und den nur hat, wer den Ordner hat.

## Wo was aufbewahrt wird {#storage}

| Was | Wo |
| --- | --- |
| Deine Designs | Dein Designordner, oder wo immer du sie aufbewahrst. |
| Bilder, Versionen und Notizen | In jedem Design. |
| Ein per Link geteiltes Design | Auf jedem Mac, mit dem es geteilt ist, und verschlüsselt auf dem Server von Bezzle, bis es nicht mehr geteilt ist. |
| Die Bilder auf der Startseite | Im Cache-Ordner von Bezzle auf deinem Mac. |
| Einstellungen und was Bezzle sich merkt | Auf deinem Mac: der Designordner, den du gewählt hast, die Designs, die du von anderswo geöffnet hast, und die Erlaubnis, sie wieder zu öffnen, die Designs, die du geteilt hast, und die Schlüssel, um ihr Teilen zu beenden, welche Notizen du gelesen hast, ob die KI-Steuerung eingeschaltet ist, und die Einstellungen der Rechtschreibung. |

## Fehlerbehebung {#troubleshooting}

### Ein Link öffnet sich nicht in Bezzle {#link-not-opening}

Öffne den Link in einem Browser: Er zeigt die Einladungsseite. Klick auf {In Bezzle öffnen}. Passiert nichts, ist Bezzle 1.4 oder neuer nicht auf diesem Mac: Lade es von der Website, oder öffne das Bezzle, das du hast, und nimm das Update, das es dir anbietet, und klick dann noch einmal auf {In Bezzle öffnen}. Einladungen aus der Zeit vor Bezzle 1.4, über iCloud, führen zu keinem Design mehr: Bitte um einen neuen Link. Ohne Mac wähl {Im Browser ansehen}.

### Die Startseite sagt „Konnte nicht geöffnet werden“ {#could-not-open}

Die Karte sagt, warum: Der Link führt zu keinem Design, das Design wird nicht mehr geteilt, oder Bezzle konnte seinen Server nicht erreichen. Was jede Meldung bedeutet, steht unter [Ein geteiltes Design öffnen](/docs/sharing.html#arriving).

### Ein Design lässt sich nicht teilen {#share-fails}

„‚…‘ konnte nicht geteilt werden“ mit „Bezzle konnte keine Verbindung herstellen. Prüfe die Verbindung und versuche es noch einmal.“ bedeutet, dass der Server von Bezzle nicht erreichbar war. Versuch {Link kopieren} noch einmal, sobald du online bist. Ein Design, das jemand anders nicht mehr teilt, lässt sich nicht wieder teilen: Mach mit {Kopie sichern} eine eigene Kopie und teile diese. „Bezzle konnte das Teilen von ‚…‘ nicht beenden“ nach {Teilen beenden …} bedeutet ebenfalls, dass keine Verbindung besteht; versuch es noch einmal.

### Die Änderungen der anderen kommen nicht an {#not-arriving}

Ein Warndreieck auf dem Knopf {Geteilt} bedeutet, dass Bezzle gerade keine Verbindung herstellen kann; zeig darauf, um zu lesen, warum. Deine Änderungen bleiben erhalten und gehen raus, sobald es wieder geht. Bezzle schaut alle 30 Sekunden nach Neuem und immer, wenn es nach vorn kommt, sodass ein Klick in Bezzle sofort nachschauen lässt. Bei einem Design in einem geteilten Ordner prüf, ob der Dienst des Ordners läuft und abgleicht.

### Ein Design konnte nicht gesichert werden {#not-saved}

Sagt Bezzle, dass ein Design nicht gesichert werden konnte, folgt der Grund, den macOS genannt hat. Wähl {Bezzle offen lassen}, damit nichts verloren geht, behebe, was der Grund nennt, und beende dann noch einmal.

### Ein Design fehlt auf der Startseite {#missing-design}

Die Startseite listet die Designs in deinem Designordner und die, die du von anderswo geöffnet hast. Ein Design in einem Ordner innerhalb des Designordners erscheint, sobald du es mit {Ablage › Öffnen …} öffnest. Ein Designordner auf einem Laufwerk, das nicht angeschlossen ist, zeigt stattdessen den Ordner Bezzle in Dokumente, bis du das Laufwerk anschließt und Bezzle noch einmal öffnest.

### Zwei Kopien von Bezzle {#two-copies}

Mit zwei Kopien auf einem Mac, etwa einer in Downloads und einer in Programme, gibt die als zweite gestartete ihre Designs und Links an die bereits laufende weiter und beendet sich. Behalte die in Programme und leg die andere in den Papierkorb. Siehe [Zwei Kopien von Bezzle auf einem Mac](/docs/sharing.html#two-copies).

### Der Finder zeigt das Symbol statt eines Bilds {#no-preview}

Ein Design, auf dem nichts ist, zeigt das Symbol, und ebenso eines, das noch aus den frühen Tagen von Bezzle als einzelne Datei vorliegt, bis es zu einem Paket wird. Jedes andere bekommt sein Bild im Hintergrund, sobald die Startseite es zeigt, oder wenn du seinen Tab schließt.

### Ein Assistent erreicht Bezzle nicht {#ai-not-connecting}

Prüf, ob {Bezzle › KI-Steuerung erlauben} eingeschaltet ist. Sagt das Menü „KI-Steuerung ist aus: Port 7412 wird bereits verwendet“, belegt eine andere App den Port; beende sie und schalte dann {KI-Steuerung erlauben} aus und wieder ein. Ein Assistent, der eine Datei nicht findet, kann nur öffnen, was Bezzle erreichen darf (siehe [Öffnen und importieren](#opening)). Mehr unter [KI-Assistenten](/docs/ai.html#allow).

### Immer noch nicht weiter {#help}

Schreib uns über die Seite [Support](/support.html). Sag, was du getan und was du erwartet hast; jede Nachricht wird gelesen.
