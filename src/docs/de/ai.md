---
title: KI-Assistenten
nav: KI-Assistenten
lede: Verbinde Claude oder einen anderen Assistenten, der MCP spricht, und er gestaltet in Bezzle mit dir. Er baut Screens, Stapel und Prototypen, bearbeitet, was da ist, und exportiert es, direkt in deinen offenen Designs, und jede Änderung, die er macht, ist ein Schritt, den du widerrufen kannst.
---

Bezzle hat einen kleinen Server für KI-Assistenten eingebaut, der das Model Context Protocol (MCP) nutzt, den Weg, auf dem Assistenten wie Claude Desktop, Claude Code und Codex die Apps erreichen, in denen sie arbeiten. Er läuft nur auf deinem Mac, unter `http://127.0.0.1:7412/mcp`, und nichts außerhalb dieses Mac kann ihn erreichen.

Ein Assistent arbeitet an den Designs, die im Fenster von Bezzle offen sind, so wie du es von Hand tätest. Was er tut, erscheint in dem Moment auf der Arbeitsfläche, in dem er es tut, jede Änderung ist ein Schritt im Widerrufen-Verlauf des Designs, und das Design sichert sich einen Moment später selbst, wie bei dir. Er kann sich ansehen, was er gemacht hat, als Bild, und korrigieren, was falsch aussieht.

::: figure ai
Bitte um fünf Beiträge, und der Assistent macht den Stapel, platziert die Fotos, schreibt die Texte und exportiert sie, jeder Schritt lässt sich widerrufen.
:::

## Claude Desktop verbinden {#claude-desktop}

> [!windows]
> Bezzle für Windows macht noch keine Erweiterung für Claude Desktop. Sein Menü Bezzle hat {Claude Code-Befehl kopieren}, {Codex-Befehl kopieren} und {Serveradresse kopieren} direkt, wie unten beschrieben.

::: steps
1. **Wähl {Bezzle › KI-Assistenten verbinden › Zu Claude Desktop hinzufügen …}.** Der Eintrag ist da, wenn Claude Desktop auf diesem Mac ist. Bezzle macht eine Erweiterung dafür und öffnet sie in Claude Desktop.
2. **Installier sie in Claude Desktop.** Claude Desktop fragt, ob die Erweiterung Bezzle installiert werden soll. Bestätige es.
3. **Bitte Claude um etwas.** Claude hat jetzt die Werkzeuge von Bezzle. Bezzle muss nicht offen sein: Wenn Claude eines nutzt, öffnet sich Bezzle von selbst.
:::

Um sie von Hand oder auf einem anderen Mac zu installieren, wähl {Claude Desktop-Erweiterung sichern …} im selben Menü. Bezzle sichert eine Datei namens `Bezzle.mcpb`, in Downloads, außer du wählst einen anderen Ort, und zeigt sie im Finder. Öffne die Datei oder zieh sie in Claude Desktop unter „Einstellungen“ › „Erweiterungen“.

Solange Bezzle geschlossen ist, sagt die Erweiterung Claude anhand einer mitgebrachten Liste, welche Werkzeuge es gibt, erstellt von der Kopie von Bezzle, die die Erweiterung gemacht hat. Wenn Claude eines nutzt, öffnet die Erweiterung Bezzle und wartet bis zu 20 Sekunden darauf. Antwortet Bezzle nicht, bekommt Claude die englische Meldung „Bezzle didn't answer. Open Bezzle and check that Bezzle ▸ Allow AI Control is on, then try again.“, also: Bezzle hat nicht geantwortet; öffne Bezzle, prüfe, ob {Bezzle › KI-Steuerung erlauben} eingeschaltet ist, und versuch es noch einmal. Sobald Bezzle offen ist, bekommt Claude die Werkzeuge von Bezzle selbst.

> [!tip] Nach einem Update
> Die eigene Werkzeugliste der Erweiterung ist die der Bezzle-Version, die sie gemacht hat. Wähl nach einem Update von Bezzle noch einmal {Zu Claude Desktop hinzufügen …}, damit Claude jedes neue Werkzeug kennt, auch während Bezzle geschlossen ist.

## Claude Code, Codex und andere Assistenten {#other-clients}

Der Rest von {Bezzle › KI-Assistenten verbinden} kopiert, was andere Assistenten brauchen, bereit zum Einsetzen:

| Menüeintrag | Was er kopiert |
| --- | --- |
| {Claude Code-Befehl kopieren} | Einen Befehl für das Terminal, der Bezzle für jedes Projekt zu Claude Code hinzufügt. |
| {Codex-Befehl kopieren} | Einen Befehl für das Terminal, der Bezzle zu Codex hinzufügt, im Terminal und in der ChatGPT-App, die sich ihre Server teilen. |
| {Serveradresse kopieren} | Die Adresse des Servers, für jeden anderen Assistenten, der sich über HTTP mit einem MCP-Server verbindet. |

Der Befehl für Claude Code:

```
claude mcp add --transport http --scope user bezzle http://127.0.0.1:7412/mcp
```

Der Befehl für Codex:

```
codex mcp add bezzle --url http://127.0.0.1:7412/mcp
```

Die Adresse, für alles andere:

```
http://127.0.0.1:7412/mcp
```

Diese verbinden sich mit Bezzle, während es läuft, darum öffne Bezzle zuerst. Der Server spricht den Streamable-HTTP-Transport von MCP und antwortet in schlichtem JSON.

## KI-Steuerung erlauben {#allow}

{Bezzle › KI-Steuerung erlauben} schaltet den Server ein und aus. Er ist eingeschaltet, bis du ihn ausschaltest, und Bezzle merkt sich deine Wahl. Ausgeschaltet hält der Server sofort an, jeder verbundene Assistent wird getrennt, und {KI-Assistenten verbinden} ist ausgegraut.

Nutzt schon eine andere App auf deinem Mac den Port des Servers, sagt das Menü es unter dem Eintrag: „KI-Steuerung ist aus: Port 7412 wird bereits verwendet“. Beende die andere App und schalte dann {KI-Steuerung erlauben} aus und wieder ein, oder öffne Bezzle neu.

## Was ein Assistent tun kann {#tools}

Bezzle bietet einem Assistenten 65 Werkzeuge, und jedes tut im Design eine Sache, so wie ein Menü, eine Karte oder eine Geste es täte. Der Assistent liest ihre Beschreibungen und wählt sie selbst aus; du bittest mit deinen eigenen Worten. Wenn er sich verbindet, erfährt er, was Bezzle ist: eine unendliche Arbeitsfläche mit Zeichenflächen und Ebenen darauf, gemessen in Punkt, Designs mit ihrem Namen angesprochen und Ebenen mit ihrer ID oder ihrem Namen, jede Änderung ein Schritt, den du widerrufen kannst, und kein Sichern, da Designs sich selbst sichern.

Die Werkzeuge, gruppiert, mit ihren Namen, wie der Assistent sie sieht:

### Designs {#tools-designs}

| Werkzeug | Was es tut |
| --- | --- |
| `list_designs` | Listet die Designs der Startseite auf, die neuesten zuerst, und welche offen sind. |
| `create_design` | Macht ein neues Design in deinem Designordner und öffnet es, mit einer ersten Zeichenfläche nach Vorgabe (etwa ein iPhone oder ein Instagram-Post), im Karussellformat oder nach Breite und Höhe, oder mit einer leeren Arbeitsfläche. |
| `open_design` | Öffnet ein Design in einem Tab oder holt seinen Tab nach vorn. Eine Datei aus Adobe XD, Figma (`.fig`), Sketch oder Photoshop kommt als neues Design herein. |
| `import_website` | Holt eine Webseite als neues Design herein, wie {Ablage › Von einer Website importieren …}, in den gewünschten Breiten nebeneinander, mit ausgeblendeten Cookie-Bannern. |
| `close_design` | Schließt den Tab eines Designs. Es ist gesichert, wie Designs es immer sind. |
| `rename_design` | Gibt einem Design einen neuen Namen. Nicht einem, das jemand mit dir geteilt hat, denn das behält seinen Namen. |
| `duplicate_design` | Macht daneben eine Kopie, benannt nach ihm mit „Kopie“, ohne sie zu öffnen. |
| `delete_design` | Legt ein Design in den Papierkorb, oder nimmt es nur von der Startseite, wenn es außerhalb deines Designordners liegt. |

### Lesen und ansehen {#tools-reading}

| Werkzeug | Was es tut |
| --- | --- |
| `get_design` | Was in einem Design ist: seine Zeichenflächen und Ebenen als Baum, was ausgewählt ist, der Zoom und was Widerrufen zurücknehmen würde. |
| `find_layers` | Findet Ebenen nach einem Teil ihres Namens, nach ihrer Art oder nach ihren Wörtern. |
| `get_layers` | Alles über einige Ebenen: Platz, Füllung, Rahmen, Schatten, Ecken, Schrift, Unschärfe und den Rest. |
| `render` | Zeichnet eine Zeichenfläche, eine Ebene oder das ganze Design als Bild, so wie es exportiert wird, damit der Assistent es ansehen kann. Zwei Pixel pro Punkt, bis zu 1.568 Pixel an der längeren Seite. |
| `list_fonts` | Listet die Schriftfamilien auf deinem Mac auf, oder die Schnitte einer davon. |
| `select_layers` | Wählt Ebenen auf deiner Arbeitsfläche aus, um dir etwas zu zeigen oder um damit zu arbeiten. |
| `view` | Zoomt oder holt eine Ebene in den Blick. Am Design ändert es nichts. |

### Ebenen machen und ändern {#tools-layers}

| Werkzeug | Was es tut |
| --- | --- |
| `add_layers` | Fügt Zeichenflächen, Karussells, Rechtecke, Ellipsen, Linien, Texte, Pfade und Gruppen hinzu, verschachtelt, sodass ein ganzer Screen ein Aufruf und ein Schritt zum Widerrufen ist. Die neuen Ebenen sind ausgewählt. |
| `update_layers` | Ändert beliebige Eigenschaften einer oder vieler Ebenen, als ein Schritt. |
| `delete_layers` | Löscht Ebenen, mit allem, was sie enthalten. |
| `duplicate_layers` | Legt eine Kopie direkt über jede Ebene, ein wenig versetzt; die Kopie einer Zeichenfläche kommt daneben. |
| `move_layers` | Verschiebt Ebenen in eine andere Zeichenfläche oder Gruppe oder auf die Arbeitsfläche, und an einen Platz unter deren Ebenen. |
| `group_layers`, `ungroup_layers` | Gruppiert Ebenen oder nimmt sie aus ihren Gruppen. |
| `arrange_layers` | Holt Ebenen ganz nach vorn oder eine Stufe nach vorn, oder schickt sie eine Stufe oder ganz nach hinten. |
| `align_layers`, `distribute_layers` | Richtet Ebenen an einer Kante oder ihren Mitten aus, oder verteilt drei oder mehr gleichmäßig. |
| `flip_layers` | Spiegelt Ebenen an Ort und Stelle. Wörter lesen sich weiterhin vorwärts. |

### Formen und Masken {#tools-shapes}

| Werkzeug | Was es tut |
| --- | --- |
| `combine_shapes` | Vereinen, Subtrahieren, Schnittmenge bilden oder Überlappung ausschließen: Zwei oder mehr Formen werden zu einem Pfad. |
| `convert_to_path` | Macht aus Formen und Linien Pfade und aus Texten die Umrisse ihrer Buchstaben. |
| `mask_layers`, `release_mask` | Legt Ebenen in eine Form, so wie eine Form ein Bild hält, oder nimmt eine Maske wieder auseinander. |

### Text {#tools-text}

| Werkzeug | Was es tut |
| --- | --- |
| `style_text` | Gestaltet einige Buchstaben eines Texts: ein Wort fett oder in einer anderen Farbe, einen durchgestrichenen Preis, einen Absatz als Listeneintrag. |
| `replace_text` | Sucht Wörter in den Texten des Designs, darunter jeder Beitrag eines Stapels und jede Zelle eines Rasters, und setzt andere an ihre Stelle, wobei das Aussehen der Buchstaben bleibt. |
| `check_spelling` | Listet die falsch geschriebenen Wörter auf, jedes in der Sprache seines Texts, mit Vorschlägen. |
| `curve_text`, `straighten_text` | Biegt Texte zu einem Bogen oder legt sie entlang des Umrisses einer Form, und macht sie wieder gerade. |

### Bilder {#tools-pictures}

| Werkzeug | Was es tut |
| --- | --- |
| `place_image` | Bringt eine Bilddatei ins Design: als neues Rechteck, oder in die Füllung einer Form, die Buchstaben eines Texts oder einen Rahmen. Die Datei wird hineinkopiert. |
| `develop_photo` | Entwickelt Fotos wie eine Fotobearbeitung: Licht, Farbe, jede Farbe für sich, und Details. Das Foto selbst bleibt erhalten. |
| `remove_background` | Entfernt den Hintergrund von Bildern, auf deinem Computer, und behält das Bild zum Wiederherstellen. |

### Layout {#tools-layout}

| Werkzeug | Was es tut |
| --- | --- |
| `layout_grid` | Gibt einer Zeichenfläche ein Layoutraster aus Spalten, Zeilen und Grundlinien, oder das, das zu ihrer Größe passt. |
| `guides` | Setzt Hilfslinien auf eine Zeichenfläche oder entfernt sie. |
| `repeat_grid`, `fill_repeat_grid` | Macht ein Wiederholungsraster oder ändert eines, und füllt seine Zellen mit Wörtern, Beispielinhalten, Bildern oder den Zeilen einer CSV-Datei. |

### Komponenten, Stile und Ressourcen {#tools-components}

| Werkzeug | Was es tut |
| --- | --- |
| `list_components` | Listet die Komponenten des Designs auf, ihre Varianten und ihre Kopien. |
| `make_component` | Macht Ebenen zu einer Komponente und verknüpft auf Wunsch Gruppen, die gleich aussehen, als Kopien davon. |
| `add_copy` | Setzt eine neue Kopie einer Komponente auf eine Zeichenfläche. |
| `set_variant`, `add_variant` | Zeigt Kopien als eine andere Variante, oder fügt eine Variante hinzu, so wie eine Kopie jetzt aussieht. |
| `update_component` | Benennt eine Komponente oder eine Variante um, oder entfernt eine Variante. |
| `keep_in_copy` | Macht Eigenschaften einer Kopie zu ihren eigenen, oder lässt sie wieder der Komponente folgen. |
| `unlink_copies`, `delete_component` | Macht Kopien zu gewöhnlichen Gruppen, oder nimmt eine Komponente aus dem Design, wobei ihre Kopien als Gruppen bleiben. |
| `styles` | Listet, benennt, vergibt, ändert und entfernt Stile (Farben, Schriften, Schatten und Ecken), setzt ihre dunklen Looks und zeigt eine Zeichenfläche dunkel oder hell. |
| `libraries` | Übernimmt Komponenten und Stile aus deinen anderen Designs und bringt Übernommenes auf den neuesten Stand. Das andere Design ändert sich dabei nie. |
| `list_resources`, `add_resource` | Listet und platziert, was die Ressourcen enthalten: Teile der UI-Kits von Bezzle, iOS, macOS und Android, und Icons von Lucide, Phosphor und Material Symbols. |

### Stapel {#tools-decks}

| Werkzeug | Was es tut |
| --- | --- |
| `deck` | Macht eine Zeichenfläche zu einem Stapel von Beiträgen, fügt Beiträge hinzu, entfernt und verschiebt sie, gibt jedem Beitrag seine Wörter oder Bilder, holt einen nach vorn oder löst den Stapel auf. |

### Prototyp und Übergabe {#tools-prototype}

| Werkzeug | Was es tut |
| --- | --- |
| `prototype` | Liest oder ändert den Prototyp: wohin das Tippen auf eine Ebene führt, eine Notiz zum Warum, wie der nächste Screen hereinkommt, wo der Prototyp beginnt, und Screens, die von selbst weitergehen. |
| `get_prototype` | Alles, was nötig ist, um das Design auf einmal in Code zu bauen: jeder Screen als Baum, die Flüsse, die Komponenten und ihre Zustände, die Design-Tokens, wie sich jeder Screen anpasst, die Bilddateien und ein Bild jedes Screens. |
| `design_tokens` | Die benannten Stile des Designs als CSS Custom Properties, als SwiftUI-Konstanten oder im W3C-Format für Design-Tokens. |
| `inspect` | Eine Ebene, wie die Entwicklung sie in {Untersuchen} liest: ihre Begrenzung und ihre Abstände, ihr Aussehen nach Wert und nach Stil, ihre Schrift, und die Ebene als CSS und SwiftUI. |

### Notizen und Versionen {#notes-versions}

| Werkzeug | Was es tut |
| --- | --- |
| `notes` | Listet die Gespräche an den Rändern auf, schreibt eine Notiz zu einer Ebene, einer Stelle oder einem eingekreisten Teil, antwortet, verschiebt, hakt ab, öffnet wieder und entfernt Gespräche, und öffnet eines auf deinem Bildschirm, wobei die Ansicht dorthin fliegt. |
| `versions` | Listet die Versionen des Designs auf, benennt das Design, wie es jetzt ist, geht zu einer Version zurück oder zeigt eine auf deiner Arbeitsfläche, mit hervorgeholtem Lineal der Zeit. |

Die Notizen des Assistenten sind mit „Claude“ unterschrieben, in einem eigenen Stift. Du kannst sie beantworten und abhaken wie jede andere; sie zu ändern oder zu löschen ist Sache des Assistenten, oder des Widerrufens. Zu einer Version zurückzugehen funktioniert wie von Hand: Das Design, wie es kurz davor ist, wird zuerst als benannte Version aufbewahrt, und seine Notizen bleiben, wie sie sind (siehe [Notizen und Versionen](/docs/notes.html#going-back)).

### Widerrufen und Export {#tools-undo}

| Werkzeug | Was es tut |
| --- | --- |
| `undo`, `redo` | Widerruft die letzten Änderungen an einem Design, ob von Hand oder vom Assistenten gemacht, wie {{⌘Z}}, oder wiederholt sie. |
| `export` | Exportiert Zeichenflächen oder Ebenen wie das Exportfenster: PNG, JPEG, WebP, AVIF, SVG oder ein PDF mit einer Seite pro Zeichenfläche, in 1× bis 4×. |

## Fertige Anfragen {#prompts}

Bezzle bietet einem Assistenten außerdem zwei fertige Anfragen, die manche Assistenten als Prompts oder Slash-Befehle auflisten, unter ihren englischen Namen:

- **Build a prototype** (`build_prototype`, einen Prototyp bauen): baut das Design als funktionierenden Prototyp in Code, mit jedem Screen, Fluss, Komponentenzustand, Design-Token und Bild auf einmal, jedes Element mit seiner Ebene markiert, sodass Änderungen im Code zurückgeschrieben werden können. Du kannst sagen, womit er bauen soll: SwiftUI, React, HTML und CSS, Flutter oder etwas anderes.
- **Write the code back into the design** (`write_back`, den Code zurück ins Design schreiben): vergleicht einen aus dem Design gebauten Prototyp mit dem Design und schreibt, was sich im Code geändert hat (Wörter, Farben, Layout, Flüsse), zurück hinein, sodass das Design die Quelle bleibt.

In {Prototyp} und {Untersuchen} hat die Karte {Code} im Inspektor einen Knopf {Mit Claude bauen}. Er kopiert eine Anfrage, die du in Claude einsetzen kannst: über den Server von Bezzle einen funktionierenden Prototyp dieses Designs bauen, als eine HTML-Datei mit ihren Bildern daneben, die sich direkt aus dem Finder öffnen lässt, jedes Element mit seiner Ebene markiert, und Änderungen zurück ins Design schreiben. Siehe [Untersuchen und Übergabe](/docs/inspect.html).

## Widerrufen {#undo}

Jede Änderung, die ein Assistent macht, ist ein Schritt im Widerrufen-Verlauf des Designs, demselben Verlauf wie deinem: {{⌘Z}} nimmt seinen letzten Schritt zurück oder deinen, je nachdem, welcher zuletzt kam, und das Menü {Bearbeiten} nennt ihn. Ein ganzer Screen, in einem Aufruf gebaut, geht in einem Schritt zurück. Auch der Assistent kann widerrufen, so wie {{⌘Z}}.

Jedes Design hat seinen eigenen Verlauf, solange sein Tab offen ist, sodass ein Schritt in einem Design nie etwas in einem anderen widerruft. Schließt du den Tab, ist der Verlauf weg.

Manches, was ein Assistent tut, bleibt dir überlassen:

- **Dateien ersetzen**: Beim Exportieren bleiben Dateien mit gleichem Namen, die schon im Ordner liegen, erhalten, und die neuen werden nummeriert, außer er bittet darum, sie zu ersetzen, und dafür ist er angewiesen, dich zuerst zu fragen. Dateien kommen in den Ordner, in den du zuletzt exportiert hast, oder in Downloads.
- **Ein von deinem Mac aus geteiltes Design**: Es in den Papierkorb zu legen, würde das Teilen beenden, darum fragt Bezzle dich am Mac, ob der Assistent das darf.
- **Ein Design, das nur gelesen werden kann**, kann ein Assistent ebenso wie du nur ansehen.

In einem geteilten Design geht, was der Assistent ändert, an alle, so wie deine eigenen Änderungen (siehe [Teilen und gemeinsam arbeiten](/docs/sharing.html#merging)).

## Gute Ergebnisse bekommen {#tips}

- **Sag, welches Design.** Ein Assistent arbeitet am Design, das vorn liegt, außer du nennst ein anderes; eines, das nicht offen ist, wird geöffnet. Die Namen sind die auf der Startseite.
- **Dateien, die er erreichen kann**: Bezzle kann Dateien aus deinem Designordner, aus Downloads und aus Bilder öffnen und platzieren, und die, die du in Bezzle aus dem Finder oder über sein Fenster zum Öffnen geöffnet hast. Ein Bild, das woanders liegt, leg zuerst in Downloads oder Bilder.
- **Lass ihn hinsehen.** Bitte ihn, zu rendern, was er gemacht hat, und es zu prüfen; er ist angewiesen, nach Änderungen hinzusehen und zu korrigieren, was falsch aussieht.
- **Benenne deine Stile.** Benannte Farben, Schriften, Schatten und Ecken werden zu den Design-Tokens, die er im Code verwendet, und eine Änderung an einem davon ändert jede Ebene, die ihn verwendet.

## Datenschutz {#privacy}

Der Server lauscht nur auf deinem Mac (`127.0.0.1`) und ist aus dem Netzwerk nicht erreichbar. Außerdem weist er Anfragen von Webseiten ab, die in deinem Browser offen sind und sonst einen Server auf demselben Mac erreichen könnten, mit der englischen Antwort „Only apps on this Mac may use Bezzle's AI server.“ (nur Apps auf diesem Mac dürfen den KI-Server von Bezzle nutzen). Nichts aus deinen Designs erreicht einen Assistenten, solange du keinen verbindest.

Tust du es, geht, was der Assistent aus deinen Designs liest, ihre Ebenen, Wörter und die Bilder, die er rendert, an diesen Assistenten und seinen Anbieter und wird nach deren eigener Datenschutzrichtlinie behandelt. Um das zu beenden, schalte {Bezzle › KI-Steuerung erlauben} aus oder entferne Bezzle aus den Einstellungen des Assistenten. Siehe auch die [Datenschutzerklärung](/privacy.html) von Bezzle.
