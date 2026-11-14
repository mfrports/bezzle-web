---
title: Anima
nav: Anima
lede: Fai muovere un design. Metti in posa i suoi livelli lungo una timeline, assegna loro movimenti già pronti, fai volare una camera sulla tavola da disegno in 2D e in 3D, e salva il film come video, mentre il design resta esattamente com’è.
---

Anima è un quarto modo di vedere un design, accanto a Design, Prototipo e Ispeziona. Ogni tavola da disegno può avere un film: i suoi livelli entrano, si spostano, crescono, ruotano e svaniscono nel tempo, e una camera guarda il tutto, più da vicino, ruotata o da un’angolazione. Il film lo fai mettendo in posa. Porta la testina di riproduzione su un momento, poi sposta o ruota un livello direttamente sulla tela, e Bezzle lo tiene come fotogramma chiave. Tra un fotogramma chiave e l’altro, il movimento lo ricava Bezzle.

Il design non cambia mai mentre animi. Un fotogramma chiave è tenuto come un cambiamento rispetto al design: tanto più a destra di dove sta il livello, tanto più grande di com’è. Se più tardi cambi il design, il film lo segue.

## La modalità Anima {#animate-mode}

Scegli {Anima} nel selettore in alto a destra della finestra, premi {{⌃A}} o scegli {Finestra › Anima}. Il suggerimento del selettore dice a cosa serve: “Anima il design: i suoi livelli e una camera, posa dopo posa lungo una timeline”.

Quando il design passa ad Anima:

- **La tela diventa carta millimetrata,** come in Prototipo, e gli strumenti si fanno da parte: qui non si disegna nulla, quindi la barra degli strumenti si svuota e i tasti degli strumenti di disegno non fanno nulla.
- **Una sola tavola porta il film.** Mostra il film alla testina di riproduzione, attraverso la sua camera. La vista scivola finché questa tavola sta per intero sopra la timeline.
- **Compare la timeline** su una scheda in fondo alla tela. Vedi [La timeline](#timeline).
- **L’ispettore mostra il film:** {Movimenti} e {Film} senza nulla selezionato, anche {Posa} con dei livelli selezionati, {Camera} con la camera selezionata.
- **Esporta… diventa Riproduci.** Il pulsante all’estrema destra della barra superiore riproduce il film, e mentre il film va dice {Pausa}.

Premi di nuovo {{⌃A}}, o scegli {Design} nel selettore, per tornare a disegnare. Il design è lì come l’hai lasciato.

### Quale tavola {#film-board}

Ogni tavola ha un film tutto suo. Anima passa alla tavola di ciò che è selezionato, altrimenti resta sul film che ha mostrato per ultimo, altrimenti prende la tavola più in vista. Per lavorare al film di un’altra tavola, fai clic sul nome di quella tavola, o su un suo punto vuoto.

### Selezionare e muoversi {#picking}

- **Fai clic su un livello** per selezionarlo, come un clic lo seleziona quando progetti: prima un gruppo, e un doppio clic entra di un livello al suo interno. {{⌘}} clic seleziona il livello più in alto sotto il puntatore, a qualsiasi profondità si trovi.
- **{{⇧}} clic** aggiunge un livello a ciò che è selezionato, o lo toglie.
- **Trascina da un punto vuoto** della tavola o della carta lì accanto per tirare un riquadro intorno a dei livelli: ogni livello che il riquadro tocca viene selezionato.
- **Fai clic su un nome nella timeline** per selezionare quel livello; {{⇧}} clic lo aggiunge.
- **Tieni premuto {{Space}} e trascina** per spostare la vista. Lo zoom funziona come sempre.
- **Premi su un film in riproduzione** e si ferma, così puoi mettere in posa.

I livelli nascosti e quelli bloccati non si selezionano sulla tela.

## Mettere in posa un livello {#posing}

Seleziona un livello, porta la testina di riproduzione su un momento (vedi [La testina di riproduzione](#playhead)) e cambia il livello sulla tela, con le maniglie che la tela ha ovunque. Ogni cambiamento è un fotogramma chiave alla testina di riproduzione, creato senza chiedere.

| Posa | Sulla tela | Tenendo premuto un tasto |
| --- | --- | --- |
| {Spostamento} | Trascina il livello. Si aggancia al suo posto nel design. | {{⇧}} lo tiene nella direzione in cui è andato di più; {{⌘}} lo libera dagli agganci |
| {Scala} | Trascina un angolo per ingrandire o rimpicciolire il livello intorno al suo centro, o il centro di un lato per una sola direzione. Si aggancia al 100%. | {{⌘}} lo libera |
| {Rotazione} | Trascina partendo appena fuori da un angolo. I giri si sommano, quindi due giri interi fanno 720°. | {{⇧}} per passi di 15° |
| {Inclinazione} | Trascina partendo appena fuori dal centro del lato superiore o inferiore: il livello si inclina all’indietro o in avanti in profondità. Si aggancia quando è in piano. | {{⇧}} per passi di 15° |
| {Giro} | Trascina partendo appena fuori dal centro del lato sinistro o destro: il livello gira in profondità. | {{⇧}} per passi di 15° |
| {Sollevamento} | Mentre sposti il livello, tieni premuto {{⌃|Alt}} e trascina verso l’alto per avvicinarlo, verso il basso per allontanarlo. Si aggancia alla pagina. | {{⇧}} per passi di dieci punti |

{Opacità} e {Sfocatura} non hanno una maniglia sulla tela: impostale nella [scheda Posa](#pose-card), o dai al livello un [movimento](#moves).

I tasti freccia spostano ciò che è selezionato di 1 punto, o di 10 con {{⇧}}. Più livelli selezionati vengono messi in posa insieme.

{Inclinazione} e {Giro} scritti nella [scheda Posa](#pose-card) per più livelli che stanno insieme li mettono in posa come [un corpo solo](/docs/looks.html#depth-body) alla testina di riproduzione, con un fotogramma chiave per l’inclinazione e il giro di ogni livello, e per il suo posto, il suo sollevamento e la sua rotazione dove cambiano. Le maniglie sulla tela inclinano o girano un livello alla volta. Tra un fotogramma chiave e l’altro ogni numero va per conto suo, quindi lì un corpo è rigido solo quasi del tutto: raggruppa i livelli perché restino una cosa sola dall’inizio alla fine.

> [!windows] Alt per la profondità
> In Bezzle per Windows, premi {{Alt}} a trascinamento avviato per sollevare il livello. Tenuto premuto già quando premi, Alt fa quello che fa ovunque.

### La prima posa è un movimento intero {#first-pose}

Un livello che non ha ancora fotogrammi chiave non ha niente da cui partire. Per questo la prima posa che gli dai arriva in compagnia del design, e un solo trascinamento è un movimento intero:

- **Messo in posa all’inizio del film,** il livello parte da dove l’hai messo e vola a casa, al suo posto nel design, in mezzo secondo. È così che qualcosa entra: all’inizio tiralo via di lato, e arriva.
- **Messo in posa più tardi,** il livello riceve all’inizio un fotogramma chiave com’è nel design, e parte da casa per andare dove l’hai messo, arrivandoci alla testina di riproduzione.

Bezzle poi riproduce una volta il nuovo movimento e riporta indietro la testina di riproduzione, così vedi cosa hai fatto. Se lasci andare il livello al suo posto nel design, non viene tenuto niente.

### La strada che fa un livello {#way}

Un livello selezionato che si sposta mostra la sua strada sulla tavola: una linea sottile con una tacca a intervalli di tempo uguali, per cui tacche fitte vogliono dire che lì va piano, e una perla a ogni fotogramma chiave di {Spostamento}, vuota dove il livello è a casa. Trascina una perla per spostare il luogo di quel fotogramma chiave; la testina di riproduzione va al fotogramma chiave appena lo prendi.

### La scheda Posa {#pose-card}

Con dei livelli selezionati, la scheda {Posa} mostra in numeri la loro posa alla testina di riproduzione. La riga della scheda dice il momento, in secondi.

::: fields
- **Spostamento**: {X} e {Y}, punti dal posto del livello nel design.
- **Scala**: percentuale della sua dimensione nel design, da 0,1 a 10.000.
- **Rotazione**: gradi, da −3.600 a 3.600, così un livello può fare dieci giri interi.
- **Opacità**: quanto se ne vede, dallo 0 al 100%.
- **Sfocatura**: da 0 a 200.
- **Sollevamento**: punti sopra la pagina, o sotto la pagina quando è meno di 0, da −4.000 a 4.000.
- **Inclinazione**, **Giro**: gradi in profondità, da −360 a 360.
- **Tratto** e **Forma**: per linee e forme, vedi [Linee e forme](#shapes).
:::

Scrivere un numero, o trascinare sul suo campo, mette in posa il livello come fa un trascinamento sulla tela. Con più livelli selezionati, un campo mostra il numero che hanno in comune, o un trattino dove sono diversi.

Una perla accanto a ogni riga è il fotogramma chiave di quella proprietà alla testina di riproduzione:

| La perla | Significa | Un clic |
| --- | --- | --- |
| Tenue | Questa proprietà non cambia mai nel film. | Imposta qui un fotogramma chiave, che la tiene com’è. Il suo suggerimento: “Imposta un fotogramma chiave qui”. |
| Un anello | Cambia nel film, ma in questo momento non ha un fotogramma chiave. | Imposta qui un fotogramma chiave, sul valore a cui è arrivata. |
| Piena | Qui c’è un fotogramma chiave. | Toglie il fotogramma chiave. Il suo suggerimento: “Qui c’è un fotogramma chiave. Fai clic per toglierlo.” |

### Tenere e rimuovere {#keys}

- **Tieni qui** imposta un fotogramma chiave alla testina di riproduzione per ciò che è selezionato, tenendo tutto com’è in quel momento, così ciò che viene dopo parte da lì. Premi {{K}}, fai clic sulla perla nell’intestazione della timeline, o scegli {Tieni qui} dal menu contestuale sulla tela.
- **{{⌫}}** toglie i fotogrammi chiave selezionati nella timeline, altrimenti i fotogrammi chiave alla testina di riproduzione di ciò che è selezionato. In Anima non elimina mai un livello.
- **{Rimuovi fotogramma chiave}**, **{Rimuovi movimento}** e, senza nulla selezionato, **{Rimuovi tutto il movimento}** sono nel menu contestuale sulla tela, con {Tieni qui}, i sette [andamenti](#pace) e {Riproduci}.

I comandi che agiscono sui livelli restano attivi, come {Modifica › Duplica} e il menu Oggetto. Tagliare, incollare ed eliminare appartengono al film.

## Movimenti {#moves}

La scheda {Movimenti} dà a ciò che è selezionato un modo già pronto di entrare o uscire, con un clic. La sua riga dice a chi tocca: il nome di un livello, “3 livelli”, o {Tutto} quando non è selezionato nulla, cioè ogni livello della tavola che non è nascosto o bloccato.

Scegli {Entra} o {Esce}, poi fai clic su uno dei nove pulsanti. Ognuno riproduce sé stesso in piccolo mentre lo punti.

| Movimento | In entrata | Dura |
| --- | --- | --- |
| {Dissolvenza} | Compare in dissolvenza. | 0,4 s |
| {Salita} | Sale di 28 punti fino al suo posto mentre compare in dissolvenza. | 0,5 s |
| {Caduta} | Cade da 36 punti più in alto, comparendo in dissolvenza, e atterra con una molla. | 0,6 s |
| {Scorri} | Entra scorrendo da oltre il lato più vicino della tavola. | 0,5 s |
| {Pop} | Cresce dal 60% mentre compare in dissolvenza, con una molla. | 0,6 s |
| {Zoom} | Scende dal 135% mentre compare in dissolvenza. | 0,5 s |
| {Ribalta} | Si rialza da coricato all’indietro, a 80° in profondità, comparendo in dissolvenza, con una piccola molla. | 0,6 s |
| {Fuoco} | Esce da una sfocatura mentre compare in dissolvenza. | 0,5 s |
| {Disegno} | Il suo contorno viene tracciato, come da una mano. Un livello senza un contorno da tracciare compare in dissolvenza. | 0,9 s |

Un movimento comincia alla testina di riproduzione. In entrata, il livello si posa al suo posto; con {Esce}, lo stesso movimento va al contrario, dal design all’uscita, prendendo velocità. I fotogrammi chiave dello stesso tipo che il livello aveva già in quel tempo lasciano il posto al movimento. Bezzle poi lo riproduce una volta.

**Uno dopo l’altro** imposta quanto aspetta ogni livello dopo quello precedente, da 0 a 1 secondo, quando un movimento va a più livelli: 0,06 secondi per cominciare. Vanno nell’ordine in cui si legge la tavola, dall’alto verso il basso e in orizzontale.

Un movimento è fatto di normali fotogrammi chiave. Dopo puoi spostarli, cambiarne l’andamento o continuare a mettere in posa il livello da lì, come con tutti gli altri.

## La camera {#camera}

Ogni film è visto attraverso una camera. A riposo guarda dritto dall’alto tutta la tavola, e il film mostra ciò che mostra il design. Dalle dei fotogrammi chiave, e si avvicina, attraversa la tavola, ruota su sé stessa o guarda la scena da un’angolazione.

Seleziona la camera dalla piccola camera sopra l’angolo in alto a destra della tavola, o dalla sua linea nella timeline, la prima. Fai di nuovo clic per lasciarla andare. Mentre la camera è selezionata, è la tavola stessa la cosa che hai in mano.

### La camera sulla tela {#camera-canvas}

| La camera | Sulla tela |
| --- | --- |
| {Mira} | Trascina l’immagine: il punto sotto il puntatore gli resta sotto. Si aggancia al centro della tavola. {{⇧}} tiene una sola direzione. |
| {Zoom} | Trascina un angolo. Si aggancia a 1×. |
| {Rollio} | Trascina partendo appena fuori da un angolo. |
| {Inclinazione}, {Giro} | Trascina partendo appena fuori dal centro di un lato: la scena si inclina all’indietro, o gira, sotto la camera. |

{mac:Su un trackpad, pizzica per fare lo zoom della camera e ruota due dita per darle il rollio.}{win:Su un touchpad, pizzica sopra il film per fare lo zoom della camera. Ruotare due dita non le dà il rollio: Windows non segnala a un’app nessun gesto del genere.}

Con la camera selezionata, i tasti freccia spostano il punto che guarda. Un clic su un livello seleziona il livello, e lascia andare la camera.

Una camera messa in posa per la prima volta all’inizio del film vola fino a vedere tutta la tavola, lungo la durata del film; messa in posa per la prima volta più tardi, vola lì partendo da tutta la tavola. Come per la [prima posa](#first-pose) di un livello, un solo trascinamento è un volo intero.

### La scheda Camera {#camera-card}

La riga della scheda dice quanto è vicina la camera, per esempio `×1.5`.

::: fields
- **Il riquadro**: trascinaci dentro per inclinare la scena all’indietro e farla girare sotto la camera. Si aggancia quando guarda dritto dall’alto; {{⇧}} va a passi di 15°. Fai doppio clic sul riquadro per tornare a guardare dritto dall’alto. {mac:Finché la camera sfoca, una linea punteggiata sul riquadro mostra dove la tavola è a fuoco. }Il suo suggerimento: “Trascina per inclinare la scena all’indietro e farla ruotare sotto la camera. Fai doppio clic per guardare dritto dall’alto.”
- **Zoom**: da 0,1× a 16×.
- **Mira**: {X} e {Y}, punti dal centro della tavola.
- **Rollio**: gradi.
- **Inclinazione**, **Giro**: gradi, da −80 a 80.
- **Mostra tutta la tavola da disegno**: rimette la camera a riposo alla testina di riproduzione: tutta la tavola, dritto dall’alto{mac:, lasciando com’erano messa a fuoco e sfocatura}.
:::

Ogni riga ha la sua perla del fotogramma chiave, come nella [scheda Posa](#pose-card). {mac:Sotto {Mostra tutta la tavola da disegno}, {Messa a fuoco} e {Sfocatura} regolano la [messa a fuoco](#camera-focus) della camera.}

### Fai volare qui la camera {#fly}

Con dei livelli selezionati, {Fai volare qui la camera} manda la camera a guardarli dalla testina di riproduzione in poi: tanto vicino da mostrarli interi con un terzo di spazio in più intorno, mai più indietro di tutta la tavola e mai più vicino di 8×. Il suo rollio, la sua inclinazione e il suo giro restano come sono. Bezzle mostra il volo una volta. Il suo suggerimento: “Dalla testina di riproduzione in poi la camera guarda la selezione, e ci vola da dove si trovava prima”.

### La profondità sotto la camera {#camera-depth}

La camera sta a riposo nel punto da cui la scena della tavola è vista nel design (vedi [Una tavola è una scena](/docs/looks.html#perspective)), quindi un film con la camera a riposo ha l’aspetto del design. Inclina o gira la camera, e i livelli tenuti sopra la pagina mostrano quanto stanno in alto, con i più vicini che passano davanti ai più lontani mentre la camera si muove. I fotogrammi chiave di {Sollevamento} alzano un livello dalla pagina nel tempo.

Ciò che si vede oltre i bordi della tavola quando la camera li inquadra è il {Fondale} del film, nella [scheda Film](#film-card).

### La messa a fuoco della camera {#camera-focus}

::: mac
Una camera può essere a fuoco a una distanza e sfocare ciò che sta più vicino o più lontano, come fa un obiettivo: una scheda sollevata verso l’occhio diventa morbida mentre la pagina resta nitida, oppure la messa a fuoco passa dal fondo di una scena al suo davanti. Due numeri in fondo alla [scheda Camera](#camera-card) la regolano:

- **Sfocatura**: quanto sfoca la camera, in punti di sfocatura per ogni cento punti di distanza dalla messa a fuoco, da 0 a 100. A 0, come all’inizio di ogni film, niente è sfocato. Una scheda a cento punti di distanza, sotto una {Sfocatura} di 4, è sfocata quanto la renderebbe la sua stessa {Sfocatura} di 4, e niente viene sfocato di più di 200 punti. Il suo suggerimento: “Punti di sfocatura per ogni cento punti di distanza dalla messa a fuoco”.
- **Messa a fuoco**: ciò che è nitido, in punti più vicino all’occhio del punto che la camera guarda; sotto 0, più lontano. A 0 la pagina è nitida dove guarda la camera. La messa a fuoco segue la camera, quindi una camera che si avvicina resta a fuoco su ciò che guarda. Il suo suggerimento: “La camera è a fuoco a questi punti più vicino rispetto a dove guarda. Sotto 0, più lontano.”

Entrambi ricevono fotogrammi chiave come gli altri numeri della camera, ognuno con la sua perla del fotogramma chiave, e la linea della camera nella timeline, aperta, ha una linea per ciascuno. Una tavola che la camera vede di sbieco è nitida lungo una linea e più morbida da entrambe le parti; finché la camera sfoca, quella linea è punteggiata sul riquadro della scheda.

Con dei livelli selezionati, in un film con profondità (un livello sollevato, inclinato o girato, o la camera inclinata o girata), una scheda sotto {Fai volare qui la camera} offre {Metti a fuoco qui}. Imposta alla testina di riproduzione un fotogramma chiave della messa a fuoco dove stanno allora i livelli selezionati, a metà tra il più vicino e il più lontano se sono più d’uno, e Bezzle mostra una volta il cambio di fuoco. Se alla testina di riproduzione la camera non sfoca nulla, riceve anche una {Sfocatura} di 4; una camera che non ha mai sfocato ne riceve un solo fotogramma chiave, che vale per tutto il film, così che da lì in poi si muove solo la messa a fuoco. Per spostare la messa a fuoco da una scheda sul fondo a una davanti, seleziona quella sul fondo e fai clic su {Metti a fuoco qui}, poi porta più avanti la testina di riproduzione e fai lo stesso con quella davanti. Il suo suggerimento: “Dalla testina di riproduzione in poi la camera mette a fuoco la selezione, e ciò che sta più vicino o più lontano appare sfocato”.

La tela, [Salva come video](#movie) e i momenti che disegna un assistente mostrano la stessa sfocatura. {Mostra tutta la tavola da disegno} lascia messa a fuoco e sfocatura come sono. Bezzle 1.7 e le versioni precedenti conservano entrambi i tipi di fotogrammi chiave e mostrano il film senza la sfocatura.
:::

> [!windows]
> Bezzle per Windows conserva i fotogrammi chiave di {Messa a fuoco} e {Sfocatura} della camera e ne mostra le linee nella timeline, ma riproduce un film così nitido ovunque: la sua [scheda Camera](#camera-card) non ha ancora righe per loro, né {Metti a fuoco qui}.

## Linee e forme {#shapes}

Rettangoli, ellissi, linee e tracciati hanno due righe in più nella scheda {Posa}.

### Tratto {#draw}

{Tratto} è quanta parte del contorno è tracciata, da una percentuale a un’altra: `0% → 100%` è tutto, `0% → 0%` niente. Porta il secondo numero da 0 a 100 con dei fotogrammi chiave, e la linea si traccia da sola; fai lo stesso con il primo subito dopo, e viene tolta di nuovo a partire dal suo inizio, come una linea che viene cancellata. Il pulsante {Disegno} della scheda [Movimenti](#moves) fa la prima di queste cose con un clic.

### Forma {#shape}

{Forma} sposta i punti stessi della forma alla testina di riproduzione, così un contorno diventa un altro nel tempo. Fai clic su {Modifica punti} lì accanto, o fai doppio clic su una forma selezionata da sola: i suoi punti ti vengono in mano, come quando modifichi un tracciato nel design. Trascina i punti, o le loro maniglie; i tasti freccia spostano quelli selezionati. Ogni cambiamento è un fotogramma chiave di {Forma} alla testina di riproduzione. {Fine}, {{Return}}, {{Esc}} o un doppio clic lontano dai punti li posa. Il suggerimento del pulsante: “Sposta i suoi punti nell’area di lavoro per dargli un’altra forma alla testina di riproduzione”.

I fotogrammi chiave di {Forma} seguono il design. Ridimensiona il livello nel design, e ciò che i suoi fotogrammi chiave fanno al suo contorno cresce con lui. Dai a un rettangolo altri angoli, e i suoi fotogrammi chiave rimodellano il nuovo contorno come rimodellavano quello vecchio. Rifletti il livello, e i suoi fotogrammi chiave vengono riflessi con lui. Ognuna di queste cose avviene in un solo passo, insieme alla modifica che l’ha provocata.

Con i suoi punti in mano, una forma può anche ricevere più punti o meno, come nel design: fai clic sul contorno per aggiungere lì un punto, e premi {{⌫}} per togliere quelli selezionati. Questo cambia il contorno solo alla testina di riproduzione, mai quello del design. Il fotogramma chiave tiene allora un contorno tutto suo, e tra due fotogrammi chiave con punti diversi Bezzle accoppia i punti da solo, in modo che ognuno faccia meno strada possibile.

{Da…}, accanto a {Modifica punti}, dà alla forma il contorno di un’altra forma alla testina di riproduzione, così una stella diventa un cerchio: seleziona la stella, porta la testina di riproduzione più avanti, fai clic su {Da…} e scegli il cerchio. Il menu elenca per nome le altre forme sulla tavola del film, a partire da quella più in primo piano, e ognuna {mac:viene mostrata sulla tela}{win:si illumina nell’elenco dei livelli} mentre punti il suo nome. Il contorno arriva grande e ruotato come l’altra forma sta sulla tavola, intorno al centro della forma che lo riceve. Il suggerimento del pulsante: “Dagli il contorno di un’altra forma alla testina di riproduzione”. Resta tenue quando la tavola non ha altre forme, o quando sono selezionati più livelli.

Bezzle 1.7 e le versioni precedenti mostrano il contorno del design in un fotogramma chiave che ne tiene uno con punti diversi, e conservano il fotogramma chiave.

{Modifica punti} vale per un livello alla volta.

## Riempimenti shader {#shader-inputs}

Un livello riempito dagli shader di una pagina web (vedi [Riempimenti shader](/docs/looks.html#shader-fills)) si muove mentre il film viene riprodotto, a partire dal suo {Istante} e alla sua {Velocità}. Con un livello così selezionato, una scheda {Shader} elenca gli input che i suoi shader prendono, ciascuno con il nome che gli ha dato la pagina e ciascuno con una perla del fotogramma chiave: un campo colore per un input che è un colore, campi numerici per gli altri. Dai dei fotogrammi chiave a un input, e il riempimento cambia lungo il film come dici tu: un bagliore che si fa più luminoso, un motivo che cambia i suoi colori.

::: mac
Un riempimento che si costruisce sui propri fotogrammi precedenti, come delle scie o una simulazione, viene portato avanti a passi da dove si trovava la pagina quando è arrivata, ogni passo con i suoi input come li ha il film nel momento di quel passo. Così un momento del film mostra sempre la stessa immagine, comunque ci sia arrivata la testina di riproduzione. La riproduzione disegna un passo per immagine; un salto molto in avanti disegna prima ogni passo intermedio, e può volerci un attimo. Dopo 36.000 passi, dieci minuti di una pagina che disegnava sessanta volte al secondo, un riempimento così resta fermo.
:::

> [!windows]
> In Bezzle per Windows, un riempimento shader che disegna in più passaggi mostra in un film la sua immagine, ferma: vedi [Riempimenti shader](/docs/looks.html#shader-fills).

## Colori, bordi, angoli e ombre {#looks}

::: mac
Anche l’aspetto di un livello può cambiare lungo un film: un pulsante passa dal grigio al suo colore d’accento, l’ombra di una card si fa più profonda mentre si solleva, gli angoli di un quadrato si arrotondano. Con dei livelli selezionati, le schede che il design ha per il loro aspetto, {Angoli}, {Riempimento}, {Bordo} e {Ombra}, stanno sotto la scheda {Posa} e mostrano i livelli con l’aspetto che hanno alla testina di riproduzione. Cambia qualcosa su una di loro, trascinando sulla sua riga, nel menu del riempimento o scrivendo, e il cambiamento è un fotogramma chiave alla testina di riproduzione, come trascinare un livello dà un fotogramma chiave a {Spostamento}. Il design mantiene il suo aspetto.

- **Riempimento**: il suo colore, o i colori della sua sfumatura e il punto in cui ognuno sta lungo di essa. Il colore di un testo riceve fotogrammi chiave allo stesso modo, e copre i colori che le sue lettere hanno per conto loro.
- **Bordo**: il suo colore o i colori della sua sfumatura, e il suo spessore. Una linea ha per questo la sua scheda {Linea}.
- **Angoli**: i quattro angoli di un rettangolo, ognuno per conto suo.
- **Ombra**: il suo colore, la sua posizione, la sua sfocatura e la sua diffusione.

Un livello con più riempimenti, bordi od ombre ha una scheda per ciascuno, come nel design. Come per [la prima posa](#first-pose), il primo fotogramma chiave di un aspetto arriva in compagnia del design, quindi un solo cambiamento è un movimento intero. Tra due fotogrammi chiave, i colori si mescolano in modo uniforme per l’occhio.

Ogni scheda ha una perla per il suo fotogramma chiave alla testina di riproduzione, come le righe della [scheda Posa](#pose-card): tenue finché l’aspetto non cambia mai nel film, un anello dove cambia ma in questo momento non ha un fotogramma chiave, piena su un fotogramma chiave. Un clic imposta lì un fotogramma chiave che tiene l’aspetto com’è, oppure toglie il fotogramma chiave.

Sulla tela, un rettangolo selezionato mostra i puntini dentro i suoi angoli mentre lo punti, come nel design (vedi [Arrotondare un rettangolo sulla tela](/docs/shapes.html#corner-dots)). Trascinane uno per arrotondare tutti gli angoli alla testina di riproduzione, o tieni premuto {{⌥}} per quel solo angolo. I puntini compaiono per un solo rettangolo selezionato, largo e alto almeno 48 punti sullo schermo. Un rettangolo dentro un gruppo che il film disegna come una cosa sola, come un gruppo con fotogrammi chiave propri, una maschera o un gruppo sbiadito, non ne mostra: lo arrotonda la sua scheda {Angoli}.

Un fotogramma chiave cambia un colore in un colore e i colori di una sfumatura in altrettanti. Ciò di cui è fatto l’aspetto resta quello del design, e in Anima non è sulle schede:

- **Con cosa è colorato un livello**: un colore, una sfumatura, un’immagine o uno shader, quanti colori ha una sfumatura, e la sua linea attraverso il livello.
- **Quali aspetti ha**: aggiungere un riempimento, un bordo o un’ombra, toglierne uno, disattivarne uno, e il loro ordine.
- **Il resto di un aspetto**: gli stili, i metodi di fusione, i tratteggi, da che parte del contorno sta un bordo, se un’ombra cade all’interno o all’esterno, e gli angoli morbidi.

Cambia una qualsiasi di queste cose in Design, e il film prosegue da lì. Un colore che hai scelto in un fotogramma chiave resta quel colore, qualunque cosa faccia poi il design: è un colore a sé, non uno con un nome, e non cambia con una tavola scura. Uno spessore, un angolo, la posizione, la sfocatura e la diffusione di un’ombra e la posizione di un colore di una sfumatura sono tenuti come differenza rispetto a quelli del design, e così lo seguono. I fotogrammi chiave che Bezzle ha messo per fare compagnia seguono il design in tutto.

- **I fotogrammi chiave per ciò che il design non ha più** non cambiano niente: un riempimento che è stato tolto, un colore diventato una sfumatura, una sfumatura a cui sono stati dati più o meno colori. Aspettano, tenui sulla timeline, finché il design non lo ha di nuovo.
- **Un rettangolo la cui {Forma} ha fotogrammi chiave** mantiene gli angoli del design dall’inizio alla fine. In Anima non ha una scheda {Angoli} né puntini, e i fotogrammi chiave di {Angoli} che aveva prima aspettano allo stesso modo.
- **Puntare un preset** non lo prova sul film, come lo prova invece sul design.

Nella timeline, la linea di un livello aperta dalla sua freccetta ha una linea per ogni aspetto con fotogrammi chiave: {Riempimento}, {Sfumatura}, {Bordo}, {Sfumatura del bordo}, {Peso del bordo}, {Ombra} e {Angoli}, o, se il livello è una linea, {Linea}, {Sfumatura della linea} e {Peso della linea}. Di più riempimenti, bordi od ombre, il secondo dal basso e quelli sopra portano il loro numero, come {Riempimento 2}. I loro fotogrammi chiave si trascinano, ricevono un andamento e si rimuovono come tutti gli altri, e un [riquadro sopra dei fotogrammi chiave](#keys-box) prende ognuno sulla sua linea. {Tieni qui} tiene gli aspetti che hanno già fotogrammi chiave, {{⌥←}} e {{⌥→}} si fermano sui loro fotogrammi chiave, e {Rimuovi movimento} li toglie con il resto.

Bezzle 1.7 e le versioni precedenti mostrano l’aspetto del design dall’inizio alla fine, e conservano i fotogrammi chiave.
:::

> [!windows]
> In Bezzle per Windows, per ora solo un assistente IA può dare fotogrammi chiave a un aspetto (vedi [Assistenti IA](/docs/ai.html#tools-animate)): lì Anima non ha schede, perle né puntini negli angoli per l’aspetto. Un film con aspetti che hanno fotogrammi chiave si riproduce lì come su un Mac. La timeline ha una linea per ogni aspetto con fotogrammi chiave, i cui fotogrammi chiave si trascinano, ricevono un andamento e si rimuovono senza toccare gli altri, e {Tieni qui} tiene anche quegli aspetti.

## La timeline {#timeline}

La timeline è una scheda in fondo alla tela: un righello dei secondi sopra un foglio rigato, con una linea per la camera per prima e poi una per ogni livello che si muove, a partire da quello più in primo piano. Mostra da quattro a sette linee e scorre quando ce ne sono di più.

Lungo il suo bordo superiore, da sinistra: il pulsante di riproduzione, l’orologio con il momento della testina di riproduzione in secondi, la perla {Tieni qui}, i sette [andamenti](#pace), e un pulsante rotondo che dice se il film viene riprodotto in ciclo o una volta sola.

### La testina di riproduzione {#playhead}

- **Premi o trascina sul righello** per portare lì la testina di riproduzione{mac:, o trascinala per la sua linea, che scende lungo il foglio. Anche un clic su un punto vuoto del foglio la porta lì}{win:, o su un punto vuoto del foglio}. La tavola mostra quel momento. La testina si aggancia ai fotogrammi chiave quando ci passa sopra, e per il resto va a ventesimi di secondo; {{⌥}} la rende più fine, a centesimi, e {{⌘}} la libera.
- **{{←}} e {{→}}** vanno indietro o avanti di un’immagine, cioè di un sessantesimo di secondo, quando non è selezionato nulla, di dieci con {{⇧}}. {{,}} e {{.}} fanno lo stesso qualunque cosa sia selezionata.
- **{{⌥←}} e {{⌥→}}** vanno al fotogramma chiave precedente o successivo.
- **{{Home}} e {{End}}** vanno all’inizio e alla fine del film.

### Linee e perle {#lines}

Ogni fotogramma chiave è una perla sulla sua linea. Una perla è piena dove il livello è lontano dal design e vuota dove è come nel design, così una linea si legge per quello che fa: fuori, e di nuovo a casa. Una perla è grigia dove l’ha messa Bezzle per fare compagnia e tu non l’hai toccata.

- **Fai clic su una perla** per selezionare il suo fotogramma chiave; la testina di riproduzione va lì. {{⇧}} clic ne seleziona di più, o di meno.
- **Trascina una perla** per spostare il suo fotogramma chiave nel tempo. Si aggancia agli altri fotogrammi chiave e alla testina di riproduzione, e per il resto va a ventesimi di secondo, a centesimi con {{⌥}}.
- **Trascina la fascia di una linea,** tra le sue perle, per spostare l’intero movimento.
- **Fai doppio clic su una linea** per impostare lì un fotogramma chiave.
- **Apri una linea** dalla sua freccetta per vedere una linea per ogni cosa che cambia: {Spostamento}, {Scala}, {Opacità} e così via, e ogni input di uno shader, e ogni [aspetto](#looks) con fotogrammi chiave. Lì l’andamento tra due fotogrammi chiave è disegnato come una curva.
- **Fai clic destro su una perla** per gli andamenti e {Rimuovi fotogramma chiave}; **fai clic destro su una linea** per {Aggiungi fotogramma chiave qui} e {Rimuovi movimento}, o {Rimuovi il movimento della camera}.

### Più fotogrammi chiave in una volta {#keys-box}

::: mac
Trascina da un punto vuoto del foglio, fuori dalle perle e dalle fasce, per tirare un riquadro sopra dei fotogrammi chiave. Ogni fotogramma chiave che il riquadro tocca viene selezionato man mano che il riquadro cresce. Con i fotogrammi chiave vengono selezionati i loro livelli, o la camera dove vengono presi solo i suoi fotogrammi chiave. Sulla linea di un livello una perla sta per tutti i fotogrammi chiave del livello in quel momento; su una linea aperta, per il fotogramma chiave di quella sola cosa.

- **{{⇧}}** aggiunge a ciò che è selezionato: il riquadro seleziona i fotogrammi chiave che prende e che non erano selezionati, e lascia andare quelli che lo erano.
- **{{Esc}}** mentre trascini riporta ciò che era selezionato prima.
- **Oltre il bordo** di una timeline [guardata più da vicino](#timeline-zoom), il foglio scorre piano sotto il riquadro, e il riquadro tiene ciò che ha preso, anche fuori vista.

I fotogrammi chiave selezionati vanno poi insieme: trascinane uno qualsiasi per spostarli tutti nel tempo, scegli un [andamento](#pace) per tutti, o premi {{⌫}} per toglierli. Un clic su un punto vuoto li lascia andare e porta lì la testina di riproduzione; tenendo premuto {{⇧}} non cambia niente.
:::

> [!windows]
> Bezzle per Windows non ha ancora il riquadro sopra i fotogrammi chiave. Lì, {{⇧}} clic seleziona più fotogrammi chiave, e un trascinamento da un punto vuoto del foglio sposta la testina di riproduzione.

### Andamento {#pace}

L’andamento è il modo in cui un livello viaggia verso un fotogramma chiave: in modo uniforme, dolcemente, con una molla. Appartiene al fotogramma chiave a cui arriva. Scegli uno dei sette pulsanti nell’intestazione della timeline, o in un menu contestuale, per i fotogrammi chiave selezionati nella timeline, altrimenti per i fotogrammi chiave alla testina di riproduzione di ciò che è selezionato. I pulsanti restano tenui finché non c’è un fotogramma chiave a cui dare un andamento.

| Andamento | Come arriva |
| --- | --- |
| {Auto} | Si ricava dai fotogrammi chiave intorno: scorre attraverso un fotogramma chiave oltre il quale il movimento prosegue, e si ferma dove il movimento finisce o torna indietro. Ogni fotogramma chiave comincia così. |
| {Morbido} | Parte dolcemente e arriva dolcemente. |
| {Prende velocità} | Parte dolcemente e arriva a tutta velocità. |
| {Si posa} | Parte a tutta velocità e arriva dolcemente. |
| {Uniforme} | La stessa velocità per tutto il tragitto. |
| {Molla} | Va un po’ oltre il fotogramma chiave e poi ci si ferma sopra. |
| {Fermo} | Resta com’era fino al fotogramma chiave, poi è lì di colpo. |

**Rimbalzo** è di quanto una molla supera il suo fotogramma chiave prima di fermarsi, da 0 a 100%. Una molla ha il 30% finché non dici altro. Quando tra i fotogrammi chiave che hai in mano ci sono delle molle, l’intestazione della timeline mostra {Rimbalzo} con il suo numero accanto agli andamenti: trascinaci sopra, scrivi, o cambialo a passi con i tasti freccia. Il suo suggerimento: “Di quanto una molla supera il suo fotogramma chiave prima di fermarsi”. La piccola curva del pulsante {Molla} scelto mostra fin dove andranno le molle. {mac:Oppure trascina di lato quel pulsante, come una manopola: passando si ferma un attimo al 30%. Il suo suggerimento: “Molla. Trascina di lato per regolarne il rimbalzo.”}

Ogni molla che hai in mano riceve lo stesso rimbalzo, in un solo passo di {Modifica › Annulla}{mac:, con il nome {Rimbalzo}}; i fotogrammi chiave con un altro andamento restano come sono. Scegliere {Molla} per dei fotogrammi chiave mantiene il rimbalzo che ha una molla tra loro, e lo dà agli altri. Su una timeline stretta {mac:il numero si fa da parte, e il rimbalzo si regola solo con il pulsante}{win:il numero resta senza il suo nome}.

### Dove finisce il film {#film-end}

Una bandierina sul righello segna la fine del film. Un film dura quanto i suoi fotogrammi chiave: finisce al mezzo secondo successivo all’ultimo, e dura almeno 2 secondi. La bandierina è vuota finché segue i fotogrammi chiave.

Trascina la bandierina per impostare tu la durata. Si aggancia all’ultimo fotogramma chiave, e per il resto va a quarti di secondo. Una volta impostata la durata, la bandierina è piena, e oltre la bandierina il foglio è ombreggiato: i fotogrammi chiave che stanno là fuori restano, ma non vengono riprodotti. Fai doppio clic sulla bandierina perché torni a seguire i fotogrammi chiave. Il suo suggerimento: “Qui finisce il film. Trascina per impostarne la durata; fai doppio clic perché segua i fotogrammi chiave.”

### Guardare più da vicino {#timeline-zoom}

All’inizio la timeline mostra tutto il film. Per lavorare a un breve tratto di un film lungo, guardalo più da vicino:

::: mac
- **Pizzica** sopra le linee della timeline. Guarda più da vicino intorno al momento sotto il puntatore, che resta dov’è. Pizzicando per allontanarti, si aggancia a tutto il film, e il trackpad dà uno scatto.
- **Muovi due dita di lato** per spostarti lungo il film. Continua per inerzia, come una pagina che scorri, e si ferma alle estremità del film. In su e in giù scorrono le linee, come sempre.
- **Tocca due volte con due dita** per rivedere subito tutto il film, oppure, da tutto il film, per guardare quattro volte più da vicino.
- **Con un mouse,** gira la rotella tenendo premuto {{⌘}}, {{⌥}} o {{⌃}} per guardare più da vicino, come sulla tela, e tenendo premuto {{⇧}} per spostarti lungo il film.

Un pizzico o due dita che cominciano sopra le linee sono della timeline finché non le sollevi. Cominciati in qualsiasi altro punto, sono della tela.
:::

::: win
- **Gira la rotella tenendo premuto {{Ctrl}}** sopra le linee della timeline o sul suo righello, oppure pizzica lì su un touchpad. Guarda più da vicino intorno al momento sotto il puntatore, che resta dov’è, come la tela quando fai lo zoom. Allontanandoti, si ferma a tutto il film.
- **Gira la rotella tenendo premuto {{Shift}},** o di lato, per spostarti lungo il film. Si ferma alle estremità del film. In su e in giù scorrono le linee, come sempre.
- **Fai doppio clic sul tratto sotto le linee** per rivedere subito tutto il film.
:::

Il righello si infittisce man mano che ti avvicini, da un numero ogni minuto fino a uno ogni ventesimo di secondo, con un tratto per ogni centesimo. Al massimo, un centesimo di secondo è largo una dozzina di punti. Un tratto sotto le linee mostra quale parte del film è in vista.

- **La testina di riproduzione resta in vista.** Mandala a un momento fuori vista, e la timeline ci va con lei. Un film che, riprodotto, esce dalla parte in vista volta pagina.
- **Un trascinamento va oltre il bordo.** Trascina la testina di riproduzione, una perla, la fascia di una linea o la fine del film oltre una delle due estremità di ciò che si vede, e il foglio scorre piano sotto, più in fretta quanto più in fuori lo tieni.

Quanto guardi da vicino è una cosa solo tua: non fa parte del design e non è un passo in {Modifica › Annulla}. Il film di un’altra tavola si vede dapprima per intero.

## Riprodurre il film {#playing}

| Per | Fai così |
| --- | --- |
| Riprodurre, o fermare | Premi e rilascia {{Space}}, fai clic sul pulsante di riproduzione nella timeline, o su {Riproduci} in alto a destra della finestra |
| Riprodurre dall’inizio | {{Return}}, o {Finestra › Riproduci il film} ({{⌘Return}}) |
| Fermare | {{Esc}} |

Il film viene riprodotto dove si trova, sulla sua tavola, in ciclo o una volta sola, come dicono il pulsante rotondo nell’intestazione della timeline e la [scheda Film](#film-card). Mentre sei in Anima, {Finestra › Riproduci il film} prende il posto di {Riproduci il prototipo}.

## La scheda Film {#film-card}

La scheda {Film} è nell’ispettore qualunque cosa sia selezionata. La sua riga dice quanto dura il film.

::: fields
- **Durata**: secondi, da 0,25 a 600, a quarti di secondo. Impostarla fissa la fine del film, come fa trascinare la bandierina; allora lì accanto compare {Segui i fotogrammi chiave}, che lascia di nuovo durare il film quanto i suoi fotogrammi chiave.
- **In ciclo**, **Una volta**: se il film ricomincia quando arriva alla fine, o si ferma lì.
- **Fondale**: il colore che si vede oltre i bordi della tavola quando la camera li inquadra. Chiaro sotto una tavola chiara e scuro sotto una scura, finché non scegli tu.
- **1×**, **2×**, **3×**: quanti pixel ha un video per ogni punto della tavola.
- **30**, **60**: le immagini al secondo del video.
- **Salva come video…**: vedi sotto. La riga sopra dice come sarà il video, per esempio “2880 × 1800 pixel, 60 al secondo”.
:::

## Salva come video {#movie}

{Salva come video…} nella scheda {Film} salva il film come video MP4{win:, in H.264, che si riproduce ovunque}. Scegli dove tenerlo; il pulsante si riempie man mano che il video viene creato, e intanto dice {Interrompi salvataggio}. Quando ha finito, Bezzle mostra il video {mac:nel Finder}{win:in Esplora file}.

::: mac
Sotto la dimensione e le immagini al secondo, la scheda {Film} ha il tipo di video: {H.264} o {HEVC 10 bit}. H.264 si vede ovunque, ed è ciò che un video è finché non scegli tu. Una sfumatura scura e ampia, un’ombra morbida o una dissolvenza lenta possono mostrarvi delle bande, perché ognuno dei suoi colori ha 256 gradini; HEVC a 10 bit ha gradini grandi un quarto e li mantiene uniformi, e si vede sui dispositivi Apple e nella maggior parte dei browser. Il suggerimento dice lo stesso: “H.264 si vede ovunque. HEVC a 10 bit mantiene uniformi le sfumature delicate, le ombre morbide e le dissolvenze lente, dove H.264 mostra bande, e si vede sui dispositivi Apple e nella maggior parte dei browser.” Bezzle ricorda la scelta, come ricorda la dimensione e le immagini al secondo.

Su un Mac che non può creare un video così, Bezzle dice “Questo Mac non può salvare un video di questo tipo.” e “Salvalo invece come H.264.”
:::

- **Nitido come il design.** Ogni immagine del video è disegnata dal design stesso alla dimensione del video, così testo e forme restano nitidi per quanto vicino arrivi la camera.
- **Fino a 4K.** Il lato più lungo del video è al massimo di 3.840 pixel. Una tavola grande a 3× riceve tanti pixel quanti ne stanno in quel limite.
- **Fino a un’ora.** Un film più lungo non viene salvato: “Questo film è troppo lungo per essere salvato come video. Un video dura al massimo un’ora. Dai al film una durata più breve oppure togli i fotogrammi chiave successivi.”
- **Fatto per ripetersi.** Un film che viene riprodotto in ciclo è salvato senza la sua ultima immagine, che è di nuovo la prima, così il video si ripete senza scatti. Un film che viene riprodotto una volta sola finisce sul suo ultimo momento.
- **Intero o niente.** Il video viene scritto a parte e messo al suo posto solo quando è intero. Se interrompi il salvataggio, non resta niente.

## I tasti in Anima {#keyboard}

| Tasto | Cosa fa |
| --- | --- |
| {{⌃A}} | {Anima}, e ritorno a Design |
| {{Space}} | Premuto e rilasciato: riproduce il film, o lo ferma. Tenuto premuto con un trascinamento: sposta la vista |
| {{Return}} | Riproduce dall’inizio; con i punti di una forma in mano, li posa |
| {{⌘Return}} | {Riproduci il film} |
| {{K}} | {Tieni qui} |
| {{⌫}} | Rimuove i fotogrammi chiave selezionati, o i fotogrammi chiave alla testina di riproduzione di ciò che è selezionato; con i punti di una forma in mano, i punti selezionati |
| {{←}} {{→}} {{↑}} {{↓}} | Spostano ciò che è selezionato di 1 punto, di 10 con {{⇧}}; con la camera selezionata, il punto che guarda. Senza nulla selezionato, {{←}} e {{→}} vanno indietro o avanti di un’immagine |
| {{,}} {{.}} | Un’immagine indietro o avanti, dieci con {{⇧}} |
| {{⌥←}} {{⌥→}} | Al fotogramma chiave precedente o successivo |
| {{Home}} {{End}} | All’inizio o alla fine del film |
| {{Esc}} | Annulla un trascinamento in corso; altrimenti ferma il film, lascia andare i fotogrammi chiave selezionati, poi la camera, poi ciò che è selezionato |

## Annullare, condividere e assistenti {#together}

Ogni posa, ogni movimento e ogni cambio di andamento è un passo in {Modifica › Annulla}, con il nome di ciò che ha fatto, come {Sposta fotogramma chiave}, {Modifica andamento}, {Rimuovi movimento} o {Durata del film}. Riprodurre non cambia niente, quindi non lascia nessun passo.

Un film fa parte del suo design ed è condiviso con lui. I suoi fotogrammi chiave sono condivisi uno per uno, quindi due persone che danno fotogrammi chiave allo stesso livello nello stesso momento tengono entrambe i propri. In un design condiviso con te in sola lettura, puoi riprodurre il film ma non cambiarlo. Chi non ha Bezzle può riprodurlo in un browser, dal link del design: vedi [In un browser](/docs/sharing.html#browser).

Un assistente IA collegato a Bezzle può leggere un film e scriverne uno: vedi [Assistenti IA](/docs/ai.html).

> [!windows] Anima su Windows
> Bezzle per Windows ha Anima con lo stesso pannello, la stessa timeline, gli stessi movimenti, la stessa camera e lo stesso video. Ciò che per ora è diverso è detto dove capita: lì solo un assistente dà fotogrammi chiave a un aspetto, la [messa a fuoco](#camera-focus) della camera non sfoca nulla, la timeline non ha il riquadro sopra i fotogrammi chiave, il pulsante {Molla} non è una manopola, ruotare due dita su un touchpad non dà il rollio alla camera, e un video è solo in H.264. E dove la camera si avvicina, Bezzle per Windows disegna più nitido ciò che vede solo quando il film è fermo, mentre un Mac lo fa durante la riproduzione.
