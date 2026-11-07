---
title: Esportazione
nav: Esporta
lede: Esporta tavole, singoli livelli, caroselli e pile in PNG, JPEG, WebP, AVIF, SVG o PDF, alla misura che ti serve, e contrassegna i livelli perché escano ogni volta allo stesso modo.
---

Tutto ciò che crei in Bezzle può uscirne come file: una schermata per una revisione, un’icona in tre dimensioni per un’app, ogni post di una pila per un calendario social, un intero design in un unico PDF. Ci sono due modi per esportare. La **finestra Esporta** esporta subito ciò che scegli lì. **Contrassegnare per l’esportazione** memorizza su un livello o su una tavola i file che deve diventare, così lo stesso insieme esce ogni volta con un clic.

## Aprire Esporta {#opening}

Scegli {Archivio › Esporta…} o premi {{⌘E}}, oppure fai clic su {Esporta…} a destra della barra superiore mentre progetti. (In modalità Prototipo e Ispeziona quel pulsante è {Riproduci}; {{⌘E}} funziona comunque.) La finestra Esporta si apre sopra la finestra del design. Chiudila con la × nel suo angolo, con {{Esc}} o facendo clic fuori.

In un design senza nulla da esportare, la finestra dice: “Non c’è ancora nulla da esportare. Crea una tavola da disegno con A.”

La finestra contiene, dall’alto: cosa esportare, il {Formato}, la {Scala}, la {Qualità} quando conta, una frase che dice esattamente cosa verrà scritto, e {Esporta…}.

## Cosa esportare {#what}

In cima alla finestra ci sono le scelte che hanno senso per ciò che hai selezionato. La più specifica viene per prima ed è scelta all’inizio, quindi con un livello selezionato la finestra è pronta a esportare quel livello. Quando ha senso una sola scelta, la fila di scelte non c’è.

| Scelta | Proposta quando | Cosa esce |
| --- | --- | --- |
| {Questo livello}, {Questo gruppo}, {3 livelli} | Hai selezionato livelli che non sono tavole. | Ogni livello selezionato da solo, grande solo quanto è. Vedi [Livelli da soli](/docs/export.html#layers). |
| {Questo post} | Hai selezionato una pila con più di un post, o qualcosa su di essa. | Il post davanti. |
| {La tavola}, {3 tavole da disegno}, {Tutti i 12 post} | Hai selezionato tavole, o livelli su di esse, e non sono tutte le tavole del design, oppure sono selezionati anche dei livelli. | Le tavole su cui si trovano i livelli selezionati, o le tavole selezionate. Per una pila, ogni post. |
| {5 contrassegnati} | Qualcosa nel design è contrassegnato per l’esportazione. | Tutto ciò che è contrassegnato, ognuno come dice la sua scheda Esporta. Vedi [Contrassegnare per l’esportazione](/docs/export.html#marking). |
| {Tutte (4)} | Le tavole selezionate non sono già tutte. | Ogni tavola del design. |

Le tavole nascoste e i livelli nascosti restano fuori, qualsiasi cosa tu scelga. Con {5 contrassegnati} scelto, {Formato} e {Scala} si fanno da parte, perché ogni contrassegno dice i suoi.

## Formato {#formats}

| Formato | Fatto di | Sfondo | Note |
| --- | --- | --- | --- |
| PNG | Pixel | Le parti trasparenti restano trasparenti | Non perde nulla. |
| JPEG | Pixel | Su bianco | Più leggero; regolato da {Qualità}. |
| WebP | Pixel | Le parti trasparenti restano trasparenti | Più leggero; regolato da {Qualità}, e all’impostazione più alta non perde nulla. Al massimo 16.383 pixel per lato. |
| AVIF | Pixel | Le parti trasparenti restano trasparenti | Più leggero; regolato da {Qualità}. Proposto quando il tuo Mac sa scriverlo. |
| SVG | Forme, testo e sfumature | Trasparente | Un file per ogni cosa. Resta nitido a qualsiasi dimensione e si può modificare in altre app. |
| PDF | Forme e testo | Trasparente | Un unico file per tutto, una pagina per cosa, nitido a qualsiasi dimensione. |

Se il formato che hai usato l’ultima volta non si può scrivere su questo Mac, la finestra usa PNG.

### SVG e PDF nel dettaglio {#vector}

Un **SVG** viene scritto il più vicino possibile all’aspetto del design che l’SVG permette, e come l’SVG lo prevede, così resta modificabile: rettangoli, ellissi e tracciati; testo che resta testo, riga per riga dove Bezzle lo impagina, nei suoi font, con le parole di stile diverso in span propri e i segni degli elenchi prima delle loro voci; parole lungo una curva come lettere disposte lungo di essa; sfumature; bordi interni ed esterni; ombre e sfocature come filtri SVG; immagini incluse nel file. Ogni livello tiene il suo nome come id. Due cose che l’SVG non sa fare arrivano come immagini: una sfocatura dello sfondo (un’immagine di ciò che si vede attraverso) e un livello ruotato in profondità. Per i font, il file chiede prima la famiglia che il design usa, poi lo stile disegnato qui, poi qualcosa di simile che hanno tutti.

Un **PDF** ha una pagina per ogni cosa esportata, ogni pagina grande quanto la cosa in punti. Testo e forme restano testo e forme. Un PDF di più cose prende il nome del design; un PDF di una cosa sola, come un carosello con una pagina per slide, prende il nome di quella cosa.

## Scala {#scale}

Per PNG, JPEG, WebP e AVIF, {Scala} imposta quanti pixel vanno in ogni punto del design: {1×}, {2×} o {3×}. Una tavola larga 390 punti è larga 1.170 pixel a 3×. La finestra parte da 2×.

I file PNG e JPEG sono contrassegnati con la loro risoluzione, 72 punti per pollice a 1× e il doppio a 2×, così le app che la leggono sanno quanti pixel fanno un punto.

I caroselli hanno una scala propria, che parte da 1×: le loro slide sono create nei pixel che le piattaforme accettano, quindi 1× è già la misura da pubblicare. Quando tutto ciò che esce sono slide, {Scala} mostra e cambia quella.

Per qualsiasi altra misura, come 1,5×, o una larghezza o un’altezza esatta in pixel, contrassegna invece il livello per l’esportazione: le sue dimensioni possono essere qualsiasi (vedi [Contrassegnare per l’esportazione](/docs/export.html#marking)).

## Qualità {#quality}

Per JPEG, WebP e AVIF, {Qualità} imposta quanta parte dell’immagine viene conservata, rispetto a quanto è leggero il file: {60%}, {80%}, {90%} o {100%}. Per WebP, la scelta più alta è {Senza perdita}. Quando esporti ciò che è contrassegnato, la scelta compare ogni volta che uno di quei file è con perdita, e la sua scelta più alta è {Massima}, la migliore di ogni formato. La finestra parte da 90%, e il pulsante {Esporta…} di una scheda Esporta usa la qualità scelta qui l’ultima volta.

## Il riepilogo {#summary}

Sotto le scelte, una frase dice cosa verrà scritto, così non ci sono sorprese:

- “Home a 1170 × 2532 pixel.”
- “Icona a 96 × 96 pixel, su sfondo trasparente.” (Un JPEG dice “su sfondo bianco”.)
- “Le 5 slide di Lancio a 1080 × 1350 pixel, in file separati.”
- “I 12 post di Saldi a 2160 × 2700 pixel, in file separati.”
- “3 tavole da disegno in un unico PDF, su pagine separate, con testo e forme nitidi a qualsiasi dimensione.”
- “Home in SVG: forme, testo e sfumature restano modificabili; le sfocature dello sfondo diventano immagini.”
- “Come contrassegnato: Icona.png, Icona@2x.png e Icona@3x.png.”

Le misure in pixel sono indicate per una cosa sola, e per più tavole, slide o post della stessa misura.

## Dove vanno i file {#where}

::: steps
1. **Fai clic su {Esporta…}.** Una finestra per scegliere la cartella chiede “Scegli dove salvare i file esportati.” Si apre nella cartella in cui hai esportato l’ultima volta, e lì puoi creare una nuova cartella.
2. **Fai clic su {Esporta qui}.** Bezzle scrive i file uno alla volta, mentre il pulsante dice {Esportazione…} e si riempie man mano.
3. **Guardali.** La finestra dice dove sono andati, “Salvato in Assets.”, o il nome del file stesso quando ce n’è uno solo, con accanto {Mostra nel Finder}.
:::

Quando in quella cartella ci sono già file con gli stessi nomi, Bezzle chiede prima: “In Assets esiste già un file chiamato Icona@2x.png.” oppure “3 dei file sono già in Assets.”

- {Sostituisci} li sovrascrive.
- {Mantieni entrambi} li tiene e dà un numero ai nuovi file, come “Card 2.png”.
- {Annulla} non scrive nulla.

Se cambi una scelta mentre la domanda è aperta, la domanda sparisce, perché riguardava altri file.

Se un file non si può creare, la finestra lo dice in rosso: “Non è stato possibile creare un file.” oppure “Non è stato possibile creare 3 file.” Quando si tratta di WebP, aggiunge: “Un WebP misura al massimo 16383 pixel per lato.” Scegli una scala più piccola o un altro formato.

## Come vengono chiamati i file {#names}

| Cosa esce | Nome |
| --- | --- |
| Una tavola o un livello | Il suo nome, poi la scala: niente a 1×, `@2x` a 2×, `@3x` a 3×. “Home@2x.png” |
| Una slide di un carosello | Il nome del carosello e il numero della slide. “Lancio 01.png”, “Lancio 02.png” |
| Un post di una pila | Il nome della pila, il numero del post, e ciò che il post dice per primo: la prima riga del suo testo più grande, fino a 40 caratteri. “Saldi 03 Cappelli.png” |
| Un SVG | Il suo nome, senza scala. “Logo.svg” |
| Un PDF di più cose | Il nome del design. |

I numeri hanno almeno due cifre, e tante quante ne servono all’ultimo, così i file si ordinano correttamente nel Finder.

- **Una `/` in un nome** mette il file in una cartella con il nome che la precede: un livello chiamato “icone/home” esce come “home.png” in una cartella “icone”, creata se non c’è. Un `:` diventa un `-`. Niente in un nome può uscire dalla cartella che hai scelto.
- **Due file della stessa esportazione non finiscono mai con lo stesso nome.** Il secondo diventa “Card 2”, e così via.

## Livelli da soli {#layers}

Un livello che non è una tavola esce grande solo quanto ciò che dipinge: la sua ombra, la sua sfocatura e tutto il resto che disegna sono inclusi, e il resto viene rifilato. Non poggia su nulla, quindi ciò che ha intorno resta trasparente (su bianco in un JPEG). Il suo angolo in alto a sinistra cade su un pixel intero, così i suoi bordi escono nitidi.

Un gruppo esce come un’unica immagine di tutto ciò che contiene. Un livello con una sfocatura dello sfondo sfoca ciò che gli sta dietro sulla sua tavola, come sulla tela; in una pila, ciò che gli sta dietro sul suo post.

## Tavole, caroselli e pile {#boards}

Una **tavola** esce intera, alla sua misura.

Un **carosello** è una tavola di slide affiancate, progettate come un tutt’uno, così ciò che passa da una slide alla successiva resta allineato oltre il taglio. Esce come un’immagine per slide, ognuna con il suo numero nel nome. Come unico PDF, ha una pagina per slide.

Una **pila** contiene molti post su una sola tavola. Esportata come tavola, o con {Tutte (4)}, esce come un file per post. Con una pila selezionata, la finestra propone anche {Questo post}, solo per il post davanti, accanto a {Tutti i 12 post}. Una pila contrassegnata per l’esportazione esce con tutti i post, non solo con quello davanti. Vedi [Pile](/docs/decks.html).

## Contrassegnare per l’esportazione {#marking}

Contrassegnare un livello o una tavola dice quali file diventa ogni volta che si esporta ciò che è contrassegnato: per esempio un’icona in PNG a 1×, 2× e 3× e in SVG. I contrassegni vengono salvati con il design.

::: steps
1. **Seleziona il livello o la tavola** mentre progetti.
2. **Fai clic su {Esporta}** tra i pulsanti tratteggiati in fondo all’ispettore. Il suo suggerimento dice “Contrassegna per l’esportazione”. Il livello viene contrassegnato come PNG a 1×, e la sua scheda {Esporta} si apre.
3. **Aggiungi i file che deve diventare** con il + sotto le righe, e imposta ogni riga.
:::

::: fields
- **Dimensione**: quanto è grande ogni file. Scrivi i pixel per punto, come `2`, `2x`, `2×`, `@2x` o `1,5x` (da 0,01× a 20×), o una larghezza o un’altezza esatta in pixel, come `512w` o `64h` (da 1 a 16.384). Una dimensione che Bezzle non sa leggere torna a com’era. Per SVG e PDF la dimensione resta tenue, perché non ne hanno.
- **Suffisso**: ciò che va dopo il nome del livello. Se lo lasci com’è, segue la dimensione: `@2x` a 2×, niente a 1× o per SVG e PDF, `-512w` per una larghezza. Scrivi il tuo, come `_large`. Una `/` al suo interno mette il file in una cartella.
- **Formato**: un menu dei formati che questo Mac sa scrivere.
- **−**: “Rimuovi questo file”. Rimuovere l’ultimo toglie il contrassegno dal livello.
- **+**: aggiunge la dimensione successiva nel formato dell’ultima riga, 2× dopo 1×, poi 3×; il suo suggerimento dice quale (“Aggiungi 2×”). Dopo un SVG o un PDF aggiunge un altro file di quel formato.
- **Esporta…**: scrive subito questi file, chiedendo dove, con le stesse domande della finestra Esporta.
- **I nomi dei file**: sotto le righe, i nomi dei file che verranno scritti, tutti fino a quattro, oppure i primi tre e quanti altri.
- **×**: “Rimuovi dall’esportazione”, nell’angolo della scheda quando è aperta.
:::

La riga della scheda chiusa riassume i suoi file, ogni formato una volta con le sue dimensioni: “PNG 1× 2× 3× · SVG”. Con più livelli selezionati, ogni modifica vale per tutti; quando sono contrassegnati in modo diverso, dice {Vari}.

Tutto ciò che è contrassegnato può poi uscire in una volta con la scelta {5 contrassegnati} nella finestra Esporta. In [modalità Ispeziona](/docs/inspect.html#design), senza nulla selezionato, una scheda mostra ciò che è contrassegnato, ogni cosa da trascinare fuori da sola. I file Sketch portano con sé i loro contrassegni di esportazione quando li [importi](/docs/import.html#sketch).

Ogni modifica è un passo di Annulla: {Contrassegna per l’esportazione}, {Aggiungi dimensione di esportazione}, {Modifica dimensione di esportazione}, {Modifica suffisso}, {Modifica formato di esportazione}, {Rimuovi dimensione di esportazione} e {Rimuovi dall’esportazione}.

## Copiare invece di esportare {#copying}

Per un’immagine veloce non serve esportare. In [modalità Ispeziona](/docs/inspect.html#assets), fai clic con il tasto destro su un livello e scegli {Copia come PNG} (a 2×) o {Copia come SVG}, oppure trascina l’immagine del livello fuori dal pannello nel Finder o nel codice, in PNG a 1×, 2× o 3×, in SVG o in PDF.

## Cosa viene ricordato {#remembered}

La finestra ricorda il formato, la scala, la scala per le slide dei caroselli, la qualità e la cartella in cui hai esportato l’ultima volta, da un’esportazione alla successiva e per ogni design. Ciò che un livello è contrassegnato a diventare viene salvato nel design stesso, quindi c’è per chiunque lo apra.

Anche un assistente IA collegato a Bezzle può esportare, negli stessi modi. Vedi [Assistenti IA](/docs/ai.html).
