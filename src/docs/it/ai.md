---
title: Assistenti IA
nav: Assistenti IA
lede: Collega Claude o qualsiasi altro assistente che parla MCP, e progetta in Bezzle con te. Crea schermate, pile e prototipi, modifica ciò che c’è e lo esporta, direttamente nei design che hai aperti, e ogni modifica che fa è un passo che puoi annullare.
---

Bezzle ha integrato un piccolo server per assistenti IA, che usa il Model Context Protocol (MCP), il modo in cui assistenti come Claude Desktop, Claude Code e Codex raggiungono le app in cui lavorano. Funziona solo sul tuo Mac, all’indirizzo `http://127.0.0.1:7412/mcp`, e niente al di fuori di questo Mac può raggiungerlo.

Un assistente lavora sui design aperti nella finestra di Bezzle, come faresti tu a mano. Ciò che fa compare sulla tela nel momento stesso in cui lo fa, ogni modifica è un passo della cronologia di Annulla del design, e il design si salva da solo un attimo dopo, come succede quando lavori tu. Può guardare ciò che ha creato sotto forma di immagine, e correggere ciò che non va.

::: figure ai
Chiedi cinque post, e l’assistente crea la pila, posiziona le foto, scrive i testi e li esporta, con ogni passo in Annulla.
:::

## Collegare Claude Desktop {#claude-desktop}

> [!windows]
> Bezzle per Windows non crea ancora un’estensione per Claude Desktop. Il suo menu Bezzle ha direttamente {Copia comando per Claude Code}, {Copia comando per Codex} e {Copia indirizzo del server}, descritti qui sotto.

::: steps
1. **Scegli {Bezzle › Collega un assistente IA › Aggiungi a Claude Desktop…}.** La voce c’è quando Claude Desktop è installato su questo Mac. Bezzle crea un’estensione per Claude Desktop e la apre lì.
2. **Installala in Claude Desktop.** Claude Desktop chiede se installare l’estensione Bezzle. Conferma.
3. **Chiedi qualcosa a Claude.** Ora Claude ha gli strumenti di Bezzle. Non serve che Bezzle sia aperto: quando Claude ne usa uno, Bezzle si apre da solo.
:::

Per installarla a mano, o su un altro Mac, scegli {Salva estensione per Claude Desktop…} nello stesso menu. Bezzle salva un file chiamato `Bezzle.mcpb`, in Download se non scegli un altro posto, e lo mostra nel Finder. Apri il file, o trascinalo in Impostazioni › Estensioni di Claude Desktop.

Mentre Bezzle è chiuso, l’estensione dice a Claude quali strumenti ci sono in base a un elenco che porta con sé, creato dalla copia di Bezzle che ha generato l’estensione. Quando Claude ne usa uno, l’estensione apre Bezzle e lo aspetta fino a 20 secondi. Se Bezzle non risponde, Claude riceve questo messaggio, in inglese: “Bezzle didn't answer. Open Bezzle and check that Bezzle ▸ Allow AI Control is on, then try again.” (Bezzle non ha risposto: apri Bezzle, controlla che Bezzle › Consenti controllo IA sia attivo e riprova.) Una volta aperto Bezzle, Claude riceve gli strumenti direttamente da Bezzle.

> [!tip] Dopo un aggiornamento
> L’elenco di strumenti dell’estensione è quello della versione di Bezzle che l’ha creata. Dopo un aggiornamento di Bezzle, scegli di nuovo {Aggiungi a Claude Desktop…}, così Claude conosce ogni nuovo strumento anche mentre Bezzle è chiuso.

## Claude Code, Codex e altri assistenti {#other-clients}

Il resto di {Bezzle › Collega un assistente IA} copia ciò che serve agli altri assistenti, pronto da incollare:

| Voce del menu | Cosa copia |
| --- | --- |
| {Copia comando per Claude Code} | Un comando per il Terminale che aggiunge Bezzle a Claude Code per tutti i progetti. |
| {Copia comando per Codex} | Un comando per il Terminale che aggiunge Bezzle a Codex, nel terminale e nell’app ChatGPT, che condividono i loro server. |
| {Copia indirizzo del server} | L’indirizzo del server, per qualsiasi altro assistente che si collega a un server MCP tramite HTTP. |

Il comando per Claude Code:

```
claude mcp add --transport http --scope user bezzle http://127.0.0.1:7412/mcp
```

Il comando per Codex:

```
codex mcp add bezzle --url http://127.0.0.1:7412/mcp
```

L’indirizzo, per tutto il resto:

```
http://127.0.0.1:7412/mcp
```

Questi si collegano a Bezzle mentre è in esecuzione, quindi apri prima Bezzle. Il server usa il trasporto Streamable HTTP di MCP e risponde in semplice JSON.

## Consenti controllo IA {#allow}

{Bezzle › Consenti controllo IA} attiva e disattiva il server. È attivo finché non lo disattivi, e Bezzle ricorda la tua scelta. Quando lo disattivi, il server si ferma subito, ogni assistente collegato viene scollegato, e {Collega un assistente IA} diventa grigio.

Se un’altra app sul tuo Mac usa già la porta del server, il menu lo segnala sotto la voce: “Controllo IA disattivato: La porta 7412 è in uso”. Esci dall’altra app, poi disattiva e riattiva {Consenti controllo IA}, oppure riapri Bezzle.

## Cosa può fare un assistente {#tools}

Bezzle offre a un assistente 65 strumenti, ognuno dei quali fa una sola cosa nel design, come farebbe un menu, una scheda o un gesto. L’assistente legge le loro descrizioni e li sceglie da solo; tu chiedi con parole tue. Quando si collega, gli viene spiegato cos’è Bezzle: una tela infinita di tavole da disegno con sopra dei livelli, misurata in punti, in cui i design si indicano per nome e i livelli per id o per nome, ogni modifica è un passo che puoi annullare, e non c’è Salva, perché i design si salvano da soli.

Gli strumenti, raggruppati, con i nomi con cui li vede l’assistente:

### Design {#tools-designs}

| Strumento | Cosa fa |
| --- | --- |
| `list_designs` | Elenca i design della Home, dal più recente, e indica quali sono aperti. |
| `create_design` | Crea un nuovo design nella tua cartella dei design e lo apre, con una prima tavola da un preset (come un iPhone o un post Instagram), in formato carosello, o per larghezza e altezza, oppure con una tela vuota. |
| `open_design` | Apre un design in un pannello, o porta il suo pannello in primo piano. Un file Adobe XD, Figma (`.fig`), Sketch o Photoshop arriva come nuovo design. |
| `import_website` | Porta una pagina web in Bezzle come nuovo design, come fa {Archivio › Importa da un sito web…}, alle larghezze richieste, affiancate, con i banner dei cookie nascosti. |
| `close_design` | Chiude il pannello di un design. Il design è salvato, come sempre. |
| `rename_design` | Dà un nuovo nome a un design. Non a uno che qualcuno ha condiviso con te, che mantiene il suo nome. |
| `duplicate_design` | Crea una copia accanto all’originale, con il suo nome seguito da “copia”, senza aprirla. |
| `delete_design` | Sposta un design nel Cestino, o lo toglie soltanto dalla Home se è tenuto fuori dalla tua cartella dei design. |

### Leggere e guardare {#tools-reading}

| Strumento | Cosa fa |
| --- | --- |
| `get_design` | Cosa c’è in un design: le sue tavole e i suoi livelli come albero, cosa è selezionato, lo zoom, e cosa annullerebbe Annulla. |
| `find_layers` | Trova livelli in base a una parte del loro nome, al loro tipo o al loro testo. |
| `get_layers` | Tutto su alcuni livelli: posizione, riempimento, bordo, ombra, angoli, font, sfocatura e il resto. |
| `render` | Disegna una tavola, un livello o l’intero design come immagine, così come verrà esportato, perché l’assistente lo guardi. Due pixel per punto, fino a 1.568 pixel sul lato più lungo. |
| `list_fonts` | Elenca le famiglie di font del tuo Mac, o gli stili di una famiglia. |
| `select_layers` | Seleziona livelli sulla tua tela, per mostrarti qualcosa o per agire su di essi. |
| `view` | Cambia lo zoom, o porta un livello in vista. Non cambia nulla nel design. |

### Creare e modificare livelli {#tools-layers}

| Strumento | Cosa fa |
| --- | --- |
| `add_layers` | Aggiunge tavole, caroselli, rettangoli, ellissi, linee, testi, tracciati e gruppi, anche annidati, così un’intera schermata è una sola chiamata e un solo passo di Annulla. I nuovi livelli vengono selezionati. |
| `update_layers` | Cambia qualsiasi proprietà di uno o più livelli, in un solo passo. |
| `delete_layers` | Elimina livelli, con tutto ciò che contengono. |
| `duplicate_layers` | Mette una copia appena sopra ogni livello, leggermente spostata; la copia di una tavola va accanto all’originale. |
| `move_layers` | Sposta livelli in un’altra tavola o in un altro gruppo, o sulla tela, e in una certa posizione tra i suoi livelli. |
| `group_layers`, `ungroup_layers` | Raggruppa livelli, o li toglie dai loro gruppi. |
| `arrange_layers` | Porta livelli in primo piano o avanti, o li manda indietro o in fondo. |
| `align_layers`, `distribute_layers` | Allinea livelli su un bordo o sul centro, o distribuisce in modo uniforme tre o più livelli. |
| `flip_layers` | Rispecchia livelli dove si trovano. Il testo si legge ancora nel verso giusto. |

### Forme e maschere {#tools-shapes}

| Strumento | Cosa fa |
| --- | --- |
| `combine_shapes` | Unisci, sottrai, interseca o escludi: due o più forme diventano un solo tracciato. |
| `convert_to_path` | Trasforma forme e linee in tracciati, e i testi nei contorni delle loro lettere. |
| `mask_layers`, `release_mask` | Mette livelli dentro una forma, come una forma contiene un’immagine, o scompone di nuovo una maschera. |

### Testo {#tools-text}

| Strumento | Cosa fa |
| --- | --- |
| `style_text` | Dà uno stile ad alcune lettere di un testo: una parola in grassetto o in un altro colore, un prezzo barrato, un paragrafo trasformato in voce di elenco. |
| `replace_text` | Trova parole nei testi del design, compresi ogni post di una pila e ogni cella di una griglia, e le sostituisce con altre, mantenendo l’aspetto delle lettere. |
| `check_spelling` | Elenca le parole scritte male, ognuna nella lingua del suo testo, con suggerimenti. |
| `curve_text`, `straighten_text` | Curva i testi ad arco, o li dispone lungo il contorno di una forma, e li raddrizza di nuovo. |

### Immagini {#tools-pictures}

| Strumento | Cosa fa |
| --- | --- |
| `place_image` | Mette un file immagine nel design: come nuovo rettangolo, o nel riempimento di una forma, nelle lettere di un testo o in un bordo. Il file viene copiato nel design. |
| `develop_photo` | Sviluppa le foto come fa un programma di fotoritocco: luce, colore, ogni colore per conto suo, e dettaglio. La foto originale resta. |
| `remove_background` | Toglie lo sfondo dalle immagini, sul tuo Mac, conservando l’immagine per poterla ripristinare. |

### Layout {#tools-layout}

| Strumento | Cosa fa |
| --- | --- |
| `layout_grid` | Dà a una tavola una griglia di layout fatta di colonne, righe e linee di base, o quella adatta alla sua misura. |
| `guides` | Mette guide su una tavola, o le toglie. |
| `repeat_grid`, `fill_repeat_grid` | Crea o modifica una griglia di ripetizione, e ne riempie le celle con testi, contenuti di esempio, immagini o le righe di un file CSV. |

### Componenti, stili e risorse {#tools-components}

| Strumento | Cosa fa |
| --- | --- |
| `list_components` | Elenca i componenti del design, le loro varianti e le loro copie. |
| `make_component` | Trasforma livelli in un componente e, se richiesto, collega come sue copie i gruppi che hanno lo stesso aspetto. |
| `add_copy` | Mette una nuova copia di un componente su una tavola. |
| `set_variant`, `add_variant` | Mostra delle copie come un’altra variante, o aggiunge una variante com’è ora una copia. |
| `update_component` | Rinomina un componente o una variante, o elimina una variante. |
| `keep_in_copy` | Rende proprie di una copia alcune proprietà, o le lascia di nuovo seguire il componente. |
| `unlink_copies`, `delete_component` | Trasforma delle copie in gruppi normali, o toglie un componente dal design, mentre le sue copie restano come gruppi. |
| `styles` | Elenca, nomina, assegna, modifica e rimuove stili (colori, testo, ombre e angoli), ne imposta l’aspetto scuro, e mostra una tavola scura o chiara. |
| `libraries` | Prende componenti e stili dagli altri tuoi design, e aggiorna ciò che è stato preso. L’altro design non cambia mai. |
| `list_resources`, `add_resource` | Elenca e posiziona ciò che contiene il pannello Risorse: parti dei kit UI di Bezzle, iOS, macOS e Android, e le icone Lucide, Phosphor e Material Symbols. |

### Pile {#tools-decks}

| Strumento | Cosa fa |
| --- | --- |
| `deck` | Trasforma una tavola in una pila di post, aggiunge, rimuove e sposta post, dà a ogni post i suoi testi o le sue immagini, ne porta uno davanti, o scompone la pila. |

### Prototipo e consegna {#tools-prototype}

| Strumento | Cosa fa |
| --- | --- |
| `prototype` | Legge o modifica il prototipo: dove porta il tocco su un livello, una nota sul perché, come entra la schermata successiva, dove comincia il prototipo, e le schermate che proseguono da sole. |
| `get_prototype` | Tutto ciò che serve per costruire il design in codice in una volta sola: ogni schermata come albero, i flussi, i componenti e i loro stati, i design token, come si adatta ogni schermata, i file delle immagini e un’immagine di ogni schermata. |
| `design_tokens` | Gli stili con nome del design come proprietà personalizzate CSS, costanti SwiftUI o nel formato W3C dei design token. |
| `inspect` | Un livello come lo legge uno sviluppatore in {Ispeziona}: il suo riquadro e le sue distanze, il suo aspetto per valore e per stile, la sua tipografia, e il livello come CSS e SwiftUI. |

### Note e versioni {#notes-versions}

| Strumento | Cosa fa |
| --- | --- |
| `notes` | Elenca i fili a margine, scrive una nota su un livello, su un punto o su una parte cerchiata, risponde, sposta, segna come fatti, riapre e rimuove fili, e ne apre uno sul tuo schermo, con la vista che vola fin lì. |
| `versions` | Elenca le versioni del design, dà un nome al design com’è ora, torna a una versione, o ne mostra una sulla tua tela con il righello del tempo aperto. |

Le note dell’assistente sono firmate “Claude”, con una matita tutta loro. Puoi rispondere e segnarle come fatte come qualsiasi altra nota; modificarle o eliminarle spetta all’assistente, o ad Annulla. Tornare a una versione funziona come quando lo fai a mano: il design com’è subito prima viene conservato come versione con nome, e le sue note restano come sono (vedi [Note e versioni](/docs/notes.html#going-back)).

### Annulla ed esportazione {#tools-undo}

| Strumento | Cosa fa |
| --- | --- |
| `undo`, `redo` | Annulla le ultime modifiche a un design, fatte a mano o dall’assistente, come fa {{⌘Z}}, o le ripete. |
| `export` | Esporta tavole o livelli come fa il pannello Esporta: PNG, JPEG, WebP, AVIF, SVG, o un unico PDF con una pagina per ciascuno, da 1× a 4×. |

## Richieste pronte {#prompts}

Bezzle offre a un assistente anche due richieste pronte, che alcuni assistenti elencano come prompt o come comandi slash (con il loro nome in inglese):

- **Build a prototype** (`build_prototype`, costruisci un prototipo): costruisce il design come prototipo funzionante in codice, con ogni schermata, flusso, stato dei componenti, design token e immagine in una volta sola, ogni elemento contrassegnato con il suo livello, così le modifiche nel codice si possono riportare nel design. Puoi dire con cosa costruirlo: SwiftUI, React, HTML e CSS, Flutter o qualsiasi altra cosa.
- **Write the code back into the design** (`write_back`, riporta il codice nel design): confronta con il design un prototipo costruito a partire da esso, e riporta nel design ciò che è cambiato nel codice (testi, colori, layout, flussi), così il design resta la fonte.

In {Prototipo} e {Ispeziona}, la scheda {Codice} nell’ispettore ha un pulsante, {Costruiscilo con Claude}. Copia una richiesta da incollare in Claude: costruire un prototipo funzionante di questo design tramite il server di Bezzle, come un unico file HTML con le sue immagini accanto, che si apre direttamente dal Finder, con ogni elemento contrassegnato con il suo livello, e riportare le modifiche nel design. Vedi [Ispeziona e consegna](/docs/inspect.html).

## Annulla {#undo}

Ogni modifica fatta da un assistente è un passo della cronologia di Annulla del design, la stessa cronologia della tua: {{⌘Z}} riprende il suo ultimo passo, o il tuo, a seconda di quale è venuto per ultimo, e il menu {Modifica} lo indica per nome. Un’intera schermata costruita con una sola chiamata torna indietro in un solo passo. Anche l’assistente può annullare, come fa {{⌘Z}}.

Ogni design tiene la propria cronologia finché il suo pannello è aperto, così un passo in un design non annulla mai qualcosa in un altro. Chiudere il pannello la cancella.

Alcune cose che fa un assistente restano decisioni tue:

- **Sostituire file**: quando esporta, i file con lo stesso nome già presenti nella cartella vengono conservati e quelli nuovi numerati, a meno che non chieda di sostituirli, cosa che gli viene detto di chiederti prima. I file vanno nella cartella in cui hai esportato l’ultima volta, o in Download.
- **Un design condiviso dal tuo Mac**: spostarlo nel Cestino ne interromperebbe la condivisione, quindi Bezzle chiede a te, sul Mac, se può farlo.
- **Un design in sola lettura** si può solo guardare, dall’assistente come da te.

In un design condiviso, ciò che l’assistente cambia arriva a tutti, come le tue modifiche (vedi [Condivisione e lavoro insieme](/docs/sharing.html#merging)).

## Ottenere buoni risultati {#tips}

- **Di’ quale design.** Un assistente lavora sul design in primo piano, a meno che tu non ne indichi un altro; se non è aperto, viene aperto. I nomi sono quelli della Home.
- **File che può raggiungere**: Bezzle può aprire e posizionare file dalla tua cartella dei design, da Download e da Immagini, e quelli che hai aperto in Bezzle dal Finder o dal suo pannello Apri. Per un’immagine tenuta altrove, mettila prima in Download o in Immagini.
- **Lascialo guardare.** Chiedigli di disegnare come immagine ciò che ha creato e di controllarlo; gli viene detto di guardare dopo aver fatto modifiche e di correggere ciò che non va.
- **Dai un nome ai tuoi stili.** Colori, testo, ombre e angoli con nome diventano i design token che usa nel codice, e cambiarne uno cambia ogni livello che lo usa.

## Privacy {#privacy}

Il server ascolta solo sul tuo Mac (`127.0.0.1`) e non è raggiungibile dalla rete. Rifiuta anche le richieste delle pagine web aperte nel tuo browser, che altrimenti potrebbero raggiungere un server sullo stesso Mac, con questo messaggio, in inglese: “Only apps on this Mac may use Bezzle's AI server.” (Solo le app su questo Mac possono usare il server IA di Bezzle.) Nulla dei tuoi design arriva a un assistente finché non ne colleghi uno.

Quando lo fai, ciò che l’assistente legge dai tuoi design, cioè i loro livelli, i testi e le immagini che ne ricava, va a quell’assistente e al suo fornitore, ed è trattato secondo la loro informativa sulla privacy. Per fermarlo, disattiva {Bezzle › Consenti controllo IA}, o rimuovi Bezzle dalle impostazioni dell’assistente. Vedi anche l’[informativa sulla privacy](/privacy.html) di Bezzle.
