---
title: Griglie di layout, griglie di ripetizione e ogni misura
nav: Layout e misure
lede: Imposta le tavole su colonne, righe e linee di base, ripeti un design in una griglia di celle che restano uguali, e dai a qualsiasi tavola una nuova misura mentre il suo design si ricompone da solo.
---

In Bezzle tre cose si occupano della struttura al posto tuo. Una **griglia di layout** è l’insieme di colonne, righe e linee di base su cui è impostata una tavola. Una **griglia di ripetizione** è un design ripetuto in colonne e righe, dove una modifica a una cella qualsiasi è una modifica a tutte. E ogni tavola **si adatta**: dalle una nuova misura e Bezzle legge il suo design come farebbe un designer e lo ricompone, senza vincoli da impostare prima.

## Griglie di layout {#layout-grids}

Una griglia di layout appartiene a una sola tavola. Può avere colonne affiancate da un lato all’altro, righe una sotto l’altra dall’alto in basso e linee di base su cui poggia il testo, in qualsiasi combinazione. La griglia è disegnata sopra la tavola solo sulla tela: non viene mai esportata e non fa mai parte di un’immagine o di un PDF. Le sue colonne e righe si estendono tra i margini, quindi seguono la tavola ogni volta che si allarga o si restringe.

Sulla tela, colonne e righe hanno una velatura rossa, come il margine di un quaderno, e le linee di base sono tracciate nell’azzurro pallido della carta a righe. A riposo restano tenui. Mentre sposti, ridimensioni o disegni qualcosa sulla tavola si fanno più evidenti, e le colonne che l’oggetto copre si illuminano.

### Aggiungere una griglia di layout {#add-layout-grid}

::: steps
1. **Seleziona una sola tavola.** Fai clic sul suo nome sulla tela, o sulla sua riga nell’elenco dei livelli.
2. **Passa il puntatore sulla scheda tratteggiata {Griglia di layout}** in fondo all’ispettore. La tela mostra la griglia che Bezzle suggerisce per la misura della tavola, prima che venga aggiunto qualcosa.
3. **Fai clic.** La griglia viene aggiunta e la sua scheda si apre. Se le griglie di layout erano nascoste, vengono mostrate di nuovo.
:::

La griglia che Bezzle suggerisce dipende dalla larghezza della tavola:

| Larghezza della tavola | Colonne | Spaziatura | Margine |
| --- | --- | --- | --- |
| Meno di 600 (un telefono) | 4 | 16 | 16 |
| Da 600 a 1.199 (un tablet o un post) | 8 | 24 | 4% della larghezza, a passi di 8, almeno 24 |
| 1.200 e oltre (un desktop) | 12 | 24 | 5,5% della larghezza, a passi di 8, almeno 32 |

In un carosello, la griglia è calcolata per una slide e si ripete su ogni slide (vedi [Caroselli](#carousels)).

### La scheda Griglia di layout {#layout-grid-card}

Chiusa, la scheda dice di cosa è fatta la griglia: `12 colonne`, `4 × 6` per colonne e righe, o `Linea di base 8` quando ha solo linee di base.

Trascina di lato sulla scheda chiusa per cambiare il numero più importante senza aprirla. Con le colonne, il trascinamento ne imposta il numero, da 1 a 24, e scatta in posizione su 2, 3, 4, 6, 8, 12, 16 e 24 quando ci passa sopra (lì il trackpad dà un piccolo scatto). Senza colonne imposta le righe, da 1 a 24, fermandosi su 2, 3, 4, 6, 8 e 12. Con le sole linee di base ne imposta il passo, da 2 a 32, fermandosi su 4, 6, 8, 12, 16 e 24. Tira abbastanza oltre l’estremità sinistra e la scheda dice {Rilascia per rimuovere}: lascia andare e la griglia sparisce.

Apri la scheda con un clic. I suoi tre riquadri, {Colonne}, {Righe} e {Linee di base}, attivano e disattivano ciascuna parte, e ogni parte attiva mostra i suoi numeri qui sotto.

::: fields
- **Colonne**, **Righe** (riquadri): attivano e disattivano colonne o righe. Le righe arrivano nel numero che forma campi quadrati con le colonne, con la spaziatura e il margine delle colonne, fino a 24.
- **Linee di base** (riquadro): attiva le linee di base, a 4 di distanza su una tavola più stretta di 600, altrimenti a 8.
- **Colonne**, **Righe** (righe della scheda): i pulsanti meno e più ne tolgono o ne aggiungono una; il campo accetta qualsiasi numero da 1 a 48.
- **Spaziatura**: lo spazio tra una colonna (o una riga) e la successiva, in punti, 0 o più, in punti interi.
- **Margine**: lo spazio prima della prima colonna e dopo l’ultima, uguale alle due estremità, 0 o più.
- **Linea di base**: la distanza tra una linea di base e la successiva, da 2 a 200, in mezzi punti.
- **Scostamento**: a quale distanza dal bordo superiore iniziano le linee di base, in punti interi.
- {Guide ai margini}: mette delle guide dove le colonne e le righe iniziano e finiscono, da seguire anche quando la griglia è nascosta. Le guide già presenti non vengono aggiunte due volte. Vedi [guide](/docs/canvas.html#guides).
- La **×** sulla scheda aperta ({Rimuovi griglia di layout}): toglie l’intera griglia.
:::

Colonne e righe riempiono sempre lo spazio che i margini lasciano, quindi la loro larghezza deriva dal numero, dalla spaziatura e dal margine. Se spaziature e margini occupano più spazio di quanto la tavola ne abbia, le colonne si riducono a nulla invece di sovrapporsi. Una griglia con tutte le parti disattivate viene rimossa.

### Trascinare la griglia sulla tela {#drag-grid}

Mentre la scheda Griglia di layout è aperta e la tavola è l’unica cosa selezionata, puoi cambiare la griglia direttamente sulla tavola. Ogni colonna è numerata lungo il bordo superiore, e la parte sotto il puntatore appare tratteggiata.

- **Spaziature.** Trascina una spaziatura qualsiasi. Se la tiri lontano dal suo centro, tutte le spaziature si aprono; se la spingi verso il centro, tutte si chiudono, come se lo spazio venisse aperto da entrambi i lati insieme.
- **Margini.** Trascina il margine a una delle due estremità. Segue il puntatore, e l’altra estremità prende lo stesso margine.
- **Linee di base.** Trascina una linea di base qualsiasi tranne la prima, che resta dov’è. Il passo segue la linea che tieni. Le linee di base si possono afferrare solo quando sullo schermo distano almeno 9 punti, quindi ingrandisci per raggiungere quelle vicine.

Mentre trascini, un’etichetta accanto alla tavola dice `Spaziatura 24`, `Margine 32` o `Linea di base 8`. Ogni trascinamento è un solo passo di Annulla, e {{Esc}} lo annulla prima che tu lasci andare.

### Cosa si aggancia alla griglia {#snapping-to-grid}

Tutto ciò che sposti, ridimensioni o disegni su una tavola si aggancia ai bordi delle sue colonne e righe, come si aggancia alle guide e agli altri livelli. Un singolo testo che stai spostando si aggancia anche alle linee di base con la sua prima riga, ogni volta che una linea di base è più vicina di qualsiasi bordo. Quando entrambi i bordi di un livello cadono su bordi di colonna, un’etichetta in una pillola rossa dice quante colonne occupa, per esempio `3 colonne`.

Una griglia nascosta non disegna nulla e niente vi si aggancia: ciò che vedi è ciò che aggancia.

### Mostrare e nascondere le griglie di layout {#show-hide-grids}

{Griglie di layout} ({{⌃G}}) nella barra dei menu, accanto a {Righelli} e {Guide}, mostra o nasconde tutte le griglie di layout in una volta. Lo stesso interruttore si trova nel menu dell’angolo dei righelli e nel menu dello zoom. La scelta vale in ogni finestra e viene ricordata la prossima volta che apri Bezzle; cambia solo ciò che vedi, non il design.

In [modalità Ispeziona](/docs/inspect.html#inspect-mode), una tavola selezionata elenca la sua griglia per chi sviluppa: le colonne con il loro numero e la loro larghezza, con spaziatura e margine, le righe allo stesso modo, e il passo delle linee di base, ogni valore pronto da copiare.

## Griglie di ripetizione {#repeat-grids}

Una griglia di ripetizione è un livello, o alcuni raggruppati, progettato una volta e ripetuto in colonne da sinistra a destra e in righe dall’alto in basso, sempre alla stessa distanza. Ogni cella è una copia della prima. Qualsiasi cosa cambi in una cella, il suo aspetto, la sua misura e posizione, un livello aggiunto o tolto, cambia in ogni cella mentre lo fai. Ciò che ogni cella contiene è solo suo: i suoi testi e le sue immagini. Per questo le griglie di ripetizione sono il modo più rapido per costruire un elenco, una galleria, un menu o una serie di card.

Alla fine, una griglia di ripetizione è un gruppo come un altro: si disegna, si esporta e si condivide come un gruppo.

### Creare una griglia di ripetizione {#make-repeat-grid}

::: steps
1. **Progetta una cella.** Una card, una riga di un elenco, una miniatura con la didascalia.
2. **Selezionala.** Un solo livello diventa la cella stessa; più livelli vengono prima messi in un gruppo.
3. **Scegli {Oggetto › Crea griglia di ripetizione}** ({{⌘R}}), oppure fai clic sulla scheda tratteggiata {Ripetizione} in fondo all’ispettore, oppure fai clic con il tasto destro e scegli {Crea griglia di ripetizione}.
4. **Allargala.** La griglia inizia con una cella. Trascina la maniglia sul bordo destro per avere più colonne, o quella sul bordo inferiore per avere più righe.
:::

Ciò che selezioni deve trovarsi tutto nella stessa tavola, nello stesso gruppo o sulla tela, e nessuna sua parte può essere bloccata, né essere una tavola o una griglia di ripetizione. Una cella di una griglia non può diventare a sua volta una griglia, ma quando una cella è un gruppo di più livelli, i livelli al suo interno possono farlo, e così ottieni una griglia dentro una griglia.

La nuova griglia si chiama `Griglia di ripetizione 1`, `Griglia di ripetizione 2` e così via, e prende il posto di ciò che hai selezionato tra i livelli. Le sue spaziature partono da circa un ottavo del lato più corto della cella, a passi di 4, mai meno di 4 né più di 32.

### Allargare colonne e righe {#grid-handles}

Con una griglia di ripetizione selezionata e lo strumento Selezione in mano, sulla griglia compaiono tre maniglie color blu matita: una a metà del bordo destro per le colonne, una a metà del bordo inferiore per le righe, e una rotonda nell’angolo in basso a destra per entrambe insieme.

Mentre trascini, una nuova cella arriva quando il puntatore supera la metà dello spazio in cui starà, e il suo contorno si fa più netto man mano che ti avvicini. Trascina indietro per togliere celle. Un’etichetta indica la misura mentre procedi, per esempio `3 × 4 · 12 celle`. Una griglia può avere da 1 a 100 colonne e da 1 a 100 righe. {{Esc}} annulla il trascinamento.

Quando aggiungi celle, le nuove prendono testi e immagini dalle celle che hai già. I numeri proseguono: se le tue celle dicono `Passo 1` e `Passo 2`, le successive dicono `Passo 3` e `Passo 4`, e `07`, `08` continuano con `09`, `10`, con lo stesso numero di cifre. Tutto il resto si ripete, a giro.

### Distanziare le celle {#grid-gaps}

Passa il puntatore tra due celle e la spaziatura si illumina. Trascinala per distanziare le celle: la cella dopo la spaziatura che tieni resta sotto il puntatore, e ogni spaziatura prima di essa si muove allo stesso modo. Tieni premuto {{⇧}} per cambiare insieme le spaziature orizzontali e verticali. L’etichetta dice `Spaziatura 20`, o `Spaziature 20` con {{⇧}}.

Nella scheda Griglia di ripetizione, le spaziature accettano qualsiasi numero da −1.000 a 10.000. Sotto lo zero, le celle si sovrappongono.

### Ruotare e riflettere una griglia {#turn-grid}

Appena fuori da un angolo qualsiasi di una griglia selezionata, il puntatore la ruota tutta insieme, come ruota qualsiasi livello. Tieni premuto {{⇧}} per ruotare a passi di 15°. Le righe seguono allora il verso in cui è ruotata la griglia, e maniglie e spaziature le seguono. Anche {Oggetto › Rifletti orizzontalmente} e {Oggetto › Rifletti verticalmente} riflettono la griglia tutta insieme: ogni cella tiene ciò che contiene.

### La scheda Griglia di ripetizione {#repeat-grid-card}

Seleziona la griglia per vedere la sua scheda. Chiusa, indica la misura della griglia, come `3 × 4`. Aperta, contiene:

::: fields
- **Il campo delle celle**: dodici quadratini in orizzontale e cinque in verticale. Passa il puntatore su un quadratino e la griglia mostra sulla tela quel numero di colonne e righe, con la misura accanto (`5 × 2 · 10 celle`) e {Fai clic per applicare}. Fai clic per dare alla griglia quella misura.
- **Colonne**, **Righe**: pulsanti meno e più ({Una colonna in meno}, {Una colonna in più}) e un campo, da 1 a 100.
- **Spaziatura**: **↔** per la spaziatura tra le colonne, **↕** per quella tra le righe, da −1.000 a 10.000.
- **Contenuto**: ogni testo della prima cella, e ogni forma che contiene o può contenere un’immagine, con un menu, {Testi} o {Immagini}, per riempire quel livello in ogni cella (vedi [Riempire le celle](#fill-cells)).
- {Importa dati…}: riempie i livelli di testo della griglia da un file di testo o CSV.
- {Separa griglia}: trasforma la griglia in un gruppo delle sue celle, ognuna un livello a sé ({{⇧⌘R}}).
:::

Una didascalia ti ricorda le maniglie: tira le maniglie sul bordo destro e su quello inferiore, e trascina tra due celle per distanziarle; con {{⇧}} le distanzi in entrambe le direzioni.

Una nuova larghezza o altezza digitata nella scheda Frame allunga l’intera griglia, insieme alle sue celle e alle sue spaziature.

### Cambi una cella, cambiano tutte {#cells-alike}

Seleziona un livello qualsiasi dentro una cella qualsiasi e cambialo: il riempimento, il bordo, il carattere, la posizione, la grandezza. Ogni cella segue mentre lavori. Aggiungi un livello a una cella, o eliminane uno, e ogni cella lo acquista o lo perde. Mentre un livello di una cella è selezionato, lo stesso livello in tutte le altre celle è contornato da una linea tratteggiata, così vedi subito fin dove arriverà una modifica.

La scheda {In una griglia di ripetizione} ti dice in quale cella sei (`Cella 5 di 12`) e cosa è condiviso: tutto ciò che cambi lì cambia in tutte le celle, tranne le parole di un testo e l’immagine di una forma, che ogni cella ha per sé. {Seleziona griglia} seleziona la griglia stessa.

L’elenco dei livelli mostra solo la prima cella di una griglia, perché ogni altra cella la segue.

### Riempire le celle con testi e immagini {#fill-cells}

Ogni livello di testo della cella, e ogni forma che contiene o può contenere un’immagine, si può riempire in tutte le celle in una volta. Una forma grande quanto l’intera cella conta come lo sfondo della cella, non come un posto per un’immagine, a meno che non ne mostri già una.

Per un testo, il menu {Testi} (nella scheda Griglia di ripetizione) o {Riempi celle} (nella scheda di un testo dentro una cella) offre:

- **Testi di esempio**: {Numeri}, {Nomi e cognomi}, {Nomi}, {Città}, {Paesi}, {Professioni}, {Aziende}, {Indirizzi email}, {Prezzi}, {Date}, {Orari}, {Titoli} e {Frasi}. Ogni voce mostra due esempi, e se ci passi sopra vedi i testi in ogni cella sulla tela prima di scegliere. Prezzi, date e orari sono scritti come li scrive il tuo Mac. {Numeri} mantiene le parole intorno a un numero già presente.
- {Da un file…}: un file di testo con una riga per cella, o un file CSV le cui colonne vanno ai livelli di testo con lo stesso nome.

Per una forma, {Scegli immagini…} prende delle immagini o una cartella che le contiene: ogni cella riceve la successiva, nell’ordine per nome del Finder, e si ricomincia da capo se le immagini sono meno delle celle. Sono accettate immagini PNG, JPEG, HEIC, GIF, TIFF, WebP e BMP, e ognuna viene copiata nel design.

> [!windows]
> In Bezzle per Windows, le immagini per le celle sono file PNG, JPEG, WebP o AVIF.

Entrambi i menu finiscono con {Mescola}, che rimescola quale cella contiene quali testi o quale immagine, senza mai lasciarli come erano, e con {Come la prima cella} (o {Come questa cella}, dalla scheda di una cella), che dà a ogni cella gli stessi testi o la stessa immagine. Facendo clic con il tasto destro su un testo o su un’immagine in una cella trovi anche {Uguale in ogni cella} e {Mescola celle}.

Puoi anche trascinare dei file direttamente sulla griglia:

- **Un file di testo o CSV, o del testo da un’altra app**, rilasciato sulla griglia: una riga per cella. Con una tabella la cui prima riga dà il nome alle colonne (separate da virgole, punti e virgola o tabulazioni), ogni colonna va al livello di testo con lo stesso nome, senza badare a maiuscole e minuscole, e le colonne rimanenti vanno ai livelli di testo rimanenti in ordine di lettura. Mentre lo tieni sopra la griglia, un’etichetta dice cosa farà, per esempio `2 colonne in 12 celle`.
- **Più immagini, o una cartella**, rilasciate su una forma in una cella: un’immagine per cella, ricominciando da capo.

### Separare una griglia {#ungroup-grid}

{Oggetto › Separa griglia} ({{⇧⌘R}}), o {Separa griglia} nella scheda o nel menu del tasto destro, trasforma la griglia in un semplice gruppo delle celle che ha. Da quel momento ogni cella è un livello a sé, e cambiarne una non cambia più le altre.

## Misure che si ricompongono da sole {#adapt}

Dai a una tavola una nuova misura e il suo design viene impaginato di nuovo per quella misura, pensando al design nel suo insieme invece di fissare ogni livello a un bordo. Un poster reso quadrato per Instagram mantiene il suo peso sulla pagina; la schermata di un telefono trasformata in quella di un tablet mantiene il testo alla dimensione in cui si legge e guadagna spazio. Non ci sono vincoli da impostare: Bezzle capisce dalla posizione delle cose cosa deve allungarsi, cosa deve restare vicino a un bordo e cosa va insieme.

::: figure adapt
Trascina una tavola a una nuova misura e il suo design si ricompone da solo.
:::

### Come Bezzle legge un design {#how-it-reads}

Prima di impaginare di nuovo un design, Bezzle lo legge:

- **Fondali.** Una forma o un’immagine che copre quasi tutta la tavola (l’85% o più) è il suo sfondo, e continua a coprirla a qualsiasi misura.
- **Al vivo.** Un livello che esce da un bordo o da un angolo, senza attraversare tutta la tavola, resta al vivo sullo stesso bordo o angolo.
- **Fasce.** Una barra lungo un bordo che attraversa tutta la tavola, con altri livelli sopra, fa da base per loro: la attraversa a qualsiasi misura.
- **Blocchi.** Tutto il resto viene letto come blocchi: un livello da solo, alcuni che si sovrappongono e quindi vanno insieme, o una forma che ne contiene altri, che è un piccolo design a sé. Un gruppo grande che contiene testi tra altri livelli, senza una base propria, viene aperto e letto come parte della pagina; un logo, una card o un disegno con un’etichetta resta un unico blocco.
- **Righe e colonne.** I blocchi vengono separati lungo lo spazio vuoto più ampio tra loro, ancora e ancora, in righe di colonne di righe.
- **Spazi.** Uno spazio è *stretto* quando lega due blocchi (un titolo e la riga sotto) e *largo* quando serve a dare respiro: chiaramente più ampio del più stretto e una buona parte della lunghezza.
- **Posizioni.** Nella sua riga o colonna, ogni blocco resta dal lato a cui è vicino, al centro, o su entrambi i lati.

I livelli nascosti, e quelli che stanno per più di metà fuori dalla tavola, non vengono letti come blocchi: mantengono la loro posizione rispetto ai bordi.

### Schermate e composizioni {#interface-composition}

Bezzle impagina un design in uno di due modi.

- **Come composizione**, per post, stampa e diapositive: l’intero design cresce o si riduce con la pagina, testo compreso, così mantiene la parte di pagina che occupa.
- **Come interfaccia**, per schermate e pagine web: il testo resta alla dimensione in cui si legge, e il design guadagna spazio o lo cede. Su uno schermo più stretto si restringono anche i margini laterali.

Bezzle li distingue dalla misura: quella attuale della tavola quando è uno dei preset, altrimenti quella che le viene data. Una misura dei preset {Dispositivi} (iPhone, Android, iPad, Mac, Web, Apple Watch) dà un’interfaccia; una dei preset {Social media} o {Stampa e diapositive} dà una composizione. A qualsiasi altra misura, una tavola alta almeno 1,9 volte la sua larghezza è un’interfaccia (una pagina web lunga); altrimenti Bezzle guarda il testo: un testo piccolo rispetto alla pagina si legge come una schermata, un testo disegnato a misura di pagina si legge come un poster.

### Cosa si allunga e cosa si riorganizza {#rearranging}

Alla nuova misura, il design diventa grande quanto gli si addice, senza uscire dalla tavola. Gli spazi stretti mantengono la loro proporzione; lo spazio che avanza va agli spazi larghi, o intorno a un blocco che sta da solo. Ciò che può allungarsi, si allunga:

- Barre e pannelli vanno da un bordo all’altro.
- Il testo impostato a una larghezza (Altezza automatica o Fissa) va a capo alla nuova larghezza, e il testo largo quanto le sue parole cresce e si riduce tutto insieme. Su una pagina, una colonna di testo si allarga solo fino a un certo punto, così le sue righe mantengono una lunghezza comoda da leggere.
- Le forme semplici prendono qualsiasi misura, e i filetti si allungano nel senso della loro lunghezza.
- Un’immagine viene ritagliata di nuovo intorno a ciò che mostra. Bezzle esamina ogni immagine sul tuo Mac per trovare ciò che attira lo sguardo, e uno scontorno (un’immagine con lo sfondo trasparente) viene posizionato in base al suo soggetto.

Dove il design non ci sta più così com’è, viene riorganizzato. Un’immagine sopra i suoi testi si sposta accanto a loro in un formato largo e torna sopra in uno alto. Le card in fila vanno a capo in una griglia con più righe, con le celle che si allargano per riempire la riga dove possono, e Bezzle preferisce non lasciare un’ultima riga con meno della metà delle celle. Cambia la disposizione solo quando un’altra si adatta chiaramente meglio alla misura, così un trascinamento avanti e indietro non fa saltare il design tra due disposizioni.

### Ridimensionare una tavola {#resize-artboard}

Ogni modo di dare una misura a una tavola impagina di nuovo il suo design:

- **Trascinando** un bordo o una maniglia d’angolo sulla tela. Tieni premuto {{⇧}} per mantenere le proporzioni e {{⌥}} per ridimensionare dal centro, come con qualsiasi livello.
- **Digitando** una larghezza o un’altezza nella scheda Frame.
- **Scegliendo una misura** da {Dimensione} nella scheda Tavola da disegno. Se passi il puntatore su una misura del menu, la tela mostra la tavola a quella misura, con il design già impaginato, prima che tu scelga. (I preset sono elencati in [misure e preset](/docs/canvas.html#presets).)

Mentre trascini un bordo, Bezzle mostra in modo tenue ciò che ha capito del design: ogni blocco contornato, ogni spazio largo come una molla che si allunga e si comprime con lo spazio che riceve, e ogni spazio stretto come una graffetta che tiene uniti due blocchi. Quando il design viene disposto in un altro modo, i contorni pulsano e il trackpad dà un colpetto. Quando una disposizione cambia, o la tavola prende una misura che hai scelto, ogni livello si sposta verso il suo nuovo posto, quelli più vicini un attimo prima di quelli più lontani; niente salta.

Un ridimensionamento è un solo passo di Annulla, per quanto lungo sia il trascinamento.

### Tornare a una misura {#remembered}

Lo stesso design alla stessa misura è sempre lo stesso design: niente si muove finché non cambia la misura. E tornare alla misura in cui un design è stato creato te lo restituisce esattamente com’era. Finché lasci una tavola come è stata impaginata, la misura successiva viene impaginata partendo dal design come l’hai creato, non dall’ultimo passo intermedio, così provare misure avanti e indietro non consuma mai il design.

Bezzle se lo ricorda per le 64 tavole che hai ridimensionato più di recente, finché resta aperto. Appena cambi qualcosa su una tavola ridimensionata, il punto di partenza per la misura successiva diventa il design com’è ora.

### Tenere i livelli al loro posto {#adapt-off}

{Adatta il layout} nella scheda Tavola da disegno all’inizio è attivo per ogni tavola. Disattivalo quando una tavola deve solo prendere una nuova misura. I suoi livelli restano allora dove sono: trascinare il bordo sinistro o superiore li lascia dove sono sulla tela, e una misura digitata o scelta li tiene dove sono rispetto all’angolo in alto a sinistra. Riattiva l’interruttore perché la misura successiva venga impaginata. {Ritaglia contenuto}, lì accanto, decide se ciò che va oltre il bordo viene tagliato.

### Dentro le copie dei componenti {#inside-copies}

Una copia di un componente viene impaginata secondo regole proprie quando la ingrandisci o la rimpicciolisci: un livello che occupa la maggior parte della copia si allunga con lei, uno al centro resta al centro, uno vicino a un bordo resta alla stessa distanza da quel bordo, e un pulsante cresce intorno alla sua etichetta. [Componenti](/docs/components.html#copy-resizing) lo spiega per intero.

## Caroselli {#carousels}

Un carosello è una tavola di slide affiancate, progettate come un tutt’uno, così ciò che passa da una slide alla successiva resta allineato oltre il taglio. È sempre largo un numero intero di slide e alto una slide, e viene esportato come un’immagine per slide. [La pagina sulla tela](/docs/canvas.html#carousels) mostra come appaiono e si comportano i caroselli sulla tela.

Per crearne uno, scegli un formato carosello in fondo al menu {Dimensione} nella scheda Tavola da disegno. Un nuovo carosello inizia con 3 slide, o più se la tavola è già più larga. La sua scheda si chiama allora {Carosello}:

::: fields
- **Formato**: {Verticale 4:5}, {Quadrato 1:1}, {Alto 3:4} o {Storia 9:16}, oppure {Tavola da disegno semplice} per farlo tornare una tavola normale.
- **L**, **A**: la misura di ogni slide, in pixel interi, per proporzioni che nessuno dei formati ha.
- **Slide**: pulsanti meno e più e un campo, da 1 a 20, quante ne accetta Instagram. Le slide vengono aggiunte e tolte a destra.
:::

| Formato | Misura della slide | Per |
| --- | --- | --- |
| Verticale 4:5 | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| Quadrato 1:1 | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| Alto 3:4 | 1080 × 1440 | Instagram |
| Storia 9:16 | 1080 × 1920 | TikTok |

Trascinare il lato di un carosello aggiunge o toglie slide intere, una in più quando il puntatore supera la metà della successiva. Trascinare il bordo superiore o inferiore imposta l’altezza delle slide, che si aggancia alle proporzioni di ogni formato. Un carosello non viene mai impaginato di nuovo: i suoi livelli restano dove sono, e restano anche quelli oltre l’ultima slide, fuori vista, finché il carosello non si allarga di nuovo. I bordi e i centri delle sue slide agganciano ciò che sposti, e una griglia di layout si ripete su ogni slide.

## Comandi e tasti {#commands}

| Comando | Dove | Tasti |
| --- | --- | --- |
| Mostrare o nascondere le griglie di layout | {Griglie di layout} nella barra dei menu | {{⌃G}} |
| Creare una griglia di ripetizione | {Oggetto › Crea griglia di ripetizione} | {{⌘R}} |
| Separare una griglia di ripetizione | {Oggetto › Separa griglia} | {{⇧⌘R}} |
| Distanziare le celle in entrambe le direzioni | Trascina una spaziatura con | {{⇧}} |
| Ruotare una griglia a passi di 15° | Trascina appena fuori da un angolo con | {{⇧}} |
| Annullare un trascinamento | Mentre trascini | {{Esc}} |

E poi: crea parti che si ripetono in tutto un design con [componenti e stili](/docs/components.html), o impila molti post su una tavola con le [pile](/docs/decks.html).
