---
title: Prototipi
nav: Prototipi
lede: Collega i pulsanti alle schermate tirando un filo dall’uno all’altra, lascia che Bezzle ricavi il movimento da come sono disposte le tue schermate, dai degli stati ai componenti, e prova tutto nel dispositivo per cui è fatto.
---

In Bezzle un prototipo è il design che hai già, visto in un altro modo. Non c’è nulla da impostare per ogni transizione: colleghi un livello alla schermata a cui porta, e Bezzle capisce come entra la schermata successiva da come le due sono disposte sulla tela e da ciò che hanno in comune. I componenti mostrano il loro aspetto al passaggio del puntatore, premuti e selezionati in base ai nomi delle loro varianti. Quando lo riproduci, la schermata si solleva dalla tela ed entra nel dispositivo a cui è destinata, e la attraversi a clic come qualcuno toccherebbe l’app vera.

::: figure prototype
Il design visto come prototipo: schermate su carta millimetrata, un filo di luce da ogni livello collegato alla schermata che apre, e la bandierina di inizio sulla prima schermata.
:::

## La modalità Prototipo {#prototype-mode}

Ogni design si può vedere in tre modi, con il selettore in alto a destra della sua finestra: {Design}, {Prototipo} e {Ispeziona}. Scegli {Prototipo}, premi {{⌃P}} o scegli {Finestra › Prototipo}. Il suggerimento del selettore dice a cosa serve: “Vedi il design come prototipo: le sue schermate e i percorsi tra loro”.

Quando il design diventa un prototipo:

- **La tela diventa carta millimetrata.** Una fine quadrettatura blu con una linea più marcata ogni cinque, fissata alla tela mentre la sposti. Le tavole vi stanno sopra come schermate.
- **I flussi si illuminano.** Ogni collegamento è disegnato come un filo con una punta di freccia, e i fili si illuminano uno dopo l’altro a partire dalla schermata in cui inizia il prototipo, come una corrente che scorre lungo dei cavi.
- **Gli strumenti si fanno da parte.** In modalità Prototipo non si disegna nulla, quindi la barra degli strumenti si svuota (restano i pulsanti Livelli e Risorse). I tasti degli strumenti di disegno qui non fanno nulla. Un testo che stavi scrivendo viene concluso, lo strumento torna a Selezione, e un tracciato o un’immagine in modifica vengono lasciati.
- **L’ispettore mostra il prototipo.** Senza nulla selezionato mostra dove inizia il prototipo e ogni percorso che lo attraversa; con un livello selezionato, dove porta; con una schermata selezionata, la parte che riguarda la schermata.
- **Esporta… diventa Riproduci.** Il pulsante all’estrema destra della barra superiore diventa {Riproduci}, nel blu della matita.
- **Le note si fanno da parte.** Le note a margine sono nascoste mentre lavori al prototipo e tornano con il design.

Premi di nuovo {{⌃P}}, o scegli {Design} nel selettore, per tornare a disegnare. Un prototipo in riproduzione si ferma subito.

Sono schermate solo le tavole visibili. Una tavola nascosta resta fuori dal prototipo, e così i collegamenti su livelli nascosti.

### Muoversi {#moving-around}

La modalità Prototipo non ha strumenti, quindi il puntatore fa ciò che serve al prototipo:

- **Trascina sulla carta vuota** per spostare la vista. Il puntatore diventa una mano chiusa. Tenendo premuto {{Space}} e trascinando sposti la vista ovunque, come quando progetti. Lo zoom funziona come sempre.
- **Fai clic su un livello** per selezionarlo, come un clic lo seleziona quando progetti: prima un gruppo, e un doppio clic entra di un livello al suo interno. Un livello che porta già da qualche parte viene selezionato direttamente, a qualsiasi profondità si trovi, così puoi sempre raggiungere un collegamento.
- **Un clic dentro una copia di un componente seleziona la copia.** È la copia a portare da qualche parte, quindi un pulsante fatto da un componente viene collegato per intero. Quando ci sono copie dentro copie, viene selezionata la più interna: un pulsante dentro un componente card è il pulsante.
- **{{⇧}} clic** aggiunge un livello o una schermata a ciò che è selezionato, o lo toglie.
- **Fai clic sullo sfondo di una schermata o sul suo nome** per selezionare la schermata.
- **Trascina una schermata per il suo nome** per spostarla sulla tela. Dato che il movimento si ricava dalla disposizione delle schermate, spostare una schermata può cambiare il modo in cui entra.
- **Fai doppio clic sul nome o sullo sfondo di una schermata** per riprodurre il prototipo da quella schermata.
- **Fai clic sulla carta vuota** per deselezionare.

| Tasto | In modalità Prototipo |
| --- | --- |
| {{⌫}} | Rimuove i collegamenti dei livelli selezionati. I livelli stessi restano. |
| {{Return}} | Riproduce il prototipo, dalla schermata selezionata o da dove inizia. |
| {{Esc}} | Lascia un filo che stai tirando, chiude una nota che stai scrivendo, o deseleziona. |
| {{Space}} | Tienilo premuto e trascina per spostare la vista. |
| Tasti freccia, lettere degli strumenti | Non fanno nulla: qui non si disegna né si sposta niente. |

## Collegare un livello a una schermata {#linking}

Un collegamento dice dove porta un livello quando viene toccato. Ne crei uno tirando un filo fuori dal livello e lasciandolo andare sopra una schermata.

::: steps
1. **Passa il puntatore su un pulsante.** Viene contornato e, finché non porta ancora da nessuna parte, sul suo bordo destro compare un piccolo pomello rotondo con un più: il punto da cui esce il filo.
2. **Premi e trascina.** Un filo esce dal livello e segue il puntatore, incurvandosi un po’ come una corda tenuta tra due mani. Ogni schermata a cui potrebbe portare si solleva leggermente, e un incavo rotondo compare a sinistra della schermata del livello.
3. **Trascina sopra la schermata che deve aprire.** Quella schermata afferra il filo: si illumina tutt’intorno, il filo si tende e la sua estremità si posa sul bordo della schermata, dove il filo entrerà. Sul trackpad senti uno scatto.
4. **Lascia andare.** Il filo è annodato. Si assesta con una piccola oscillazione, una perla di luce lo percorre, e la schermata che raggiunge risuona una volta.
:::

Un filo lascia il livello dal lato da cui lo tiri, quindi se tiri verso sinistra esce dal lato sinistro del livello. Un livello non può essere collegato alla schermata su cui si trova: quella schermata non afferra il filo. Lascia andare sopra la carta vuota e il filo torna di scatto nel suo livello, e non cambia nulla.

Ogni livello ha un solo collegamento. Se tiri un nuovo filo da un livello che porta già da qualche parte e lo lasci sopra un’altra schermata, il livello porta lì.

> [!tip] Disponi le schermate come devono muoversi
> Bezzle ricava ogni transizione dalla tela. Metti la schermata successiva di un flusso a destra di quella precedente ed entrerà scorrendo da destra; metti una schermata sotto, e salirà dal basso. Vedi [Come si muovono le schermate](/docs/prototype.html#motion).

### Spostare o tagliare un filo {#rerouting}

- **Per mandare un collegamento altrove,** premi sul suo filo e trascina. Il filo si stacca dalla schermata a cui portava, e puoi lasciarlo sopra un’altra.
- **Per tagliare un collegamento,** trascina il suo filo fuori dalla sua schermata e lascialo sopra la carta vuota. Mentre penzola libero, il filo diventa rosso e tratteggiato, per dire che verrà tagliato.
- {{Esc}} mentre tiri lascia andare senza cambiare nulla.

### Tornare indietro {#going-back}

Un livello può anche tornare alla schermata da cui sei arrivato, come fa un pulsante Indietro o un pulsante di chiusura. Mentre tiri un filo, un incavo rotondo con dentro un uncino sta appena a sinistra della schermata del livello, all’altezza del livello. Lascia andare sopra l’incavo, e il livello torna indietro.

Un livello che torna indietro è disegnato con un breve uncino tratteggiato che si arriccia fuori dal suo lato sinistro, invece di un filo. Quando il prototipo viene riprodotto, torna alla schermata che ha portato qui, nel modo in cui quella schermata era entrata, riprodotto al contrario.

### La scheda Porta a {#goes-to-card}

Seleziona un livello, e l’ispettore apre la sua scheda {Porta a}. Fa tutto ciò che fa tirare un filo, e qualcosa in più. La sua riga da chiusa dice dove porta il livello: il nome di una schermata, {Indietro}, {Da nessuna parte}, o {Misto} quando sono selezionati più livelli che portano in posti diversi.

::: fields
- **Le schermate**: ogni altra schermata come una piccola immagine con il suo nome, tre per riga. Fai clic su una per mandare lì il livello; fai di nuovo clic su quella scelta per togliere il collegamento. Passa il puntatore su un’immagine e la tela disegna il filo tratteggiato che il livello prenderebbe per arrivarci.
- **Indietro**: l’uncino rotondo dopo le schermate. Il suo suggerimento: “Torna alla schermata da cui si è arrivati”. Fai di nuovo clic per toglierlo.
- **La nota**: una riga su cui scrivere, in un carattere scritto a mano, con il suggerimento “Perché, o quando: dopo l’accesso”. Compare quando il livello porta da qualche parte. Vedi [Note sui fili](/docs/prototype.html#notes).
- **Il movimento**: quattro scelte, {Auto}, {Scorri}, {Dissolvenza} e {Immediato}, ognuna una piccola immagine animata di due schermate che si muove mentre ci passi sopra; il suo nome è nel suggerimento. Con {Auto} scelto, una riga sotto dice come la tela fa entrare la schermata. Vedi [Come si muovono le schermate](/docs/prototype.html#motion).
- **Rimuovi collegamento**: la × nell’angolo della scheda quando è aperta.
:::

### Più livelli insieme {#several}

Fai {{⇧}} clic su più livelli, poi fai clic su una schermata nella scheda {Porta a}: portano tutti lì. Le loro note e il loro movimento restano come li aveva ciascuno. Quando i livelli selezionati hanno lo stesso collegamento, la stessa nota e lo stesso movimento, la nota e il movimento della scheda valgono per tutti insieme.

### Il menu {#menu}

Fai clic con il tasto destro su un livello, un filo o una schermata per un menu di ciò che può fare:

| Voce | Cosa fa |
| --- | --- |
| {Riproduci da qui} | Su una schermata: riproduce il prototipo da lì. |
| {Inizia da qui} | Su una schermata: il prototipo inizia da lì. Spuntata, e non più proposta, su una schermata già indicata come inizio. |
| {Vai a …} | Una per ogni altra schermata, con il suo nome: manda lì il livello. La schermata a cui porta ora è spuntata. |
| {Torna indietro} | Su un livello: torna alla schermata precedente. |
| {Scrivi una nota} | Scrive sul suo filo. Compare quando porta da qualche parte. |
| {Rimuovi collegamento} | Toglie il collegamento. Compare quando porta da qualche parte. |

### Togliere i collegamenti {#removing}

Ognuno di questi toglie un collegamento e lascia il livello com’è: {{⌫}} con il livello selezionato (la modalità Prototipo non elimina mai i livelli), la × sulla scheda {Porta a}, {Rimuovi collegamento} nel menu, un nuovo clic sulla schermata scelta nella scheda, o il taglio del filo sulla tela. Rimuovere un collegamento cancella anche la sua nota e il suo movimento.

Se elimini una schermata, i collegamenti che portavano lì non portano più da nessuna parte e i loro fili spariscono.

## Note sui fili {#notes}

Una nota dice perché, o quando, un livello porta dove porta, con parole tue: “dopo un accesso riuscito”, “solo per i nuovi clienti”. È per le persone che leggono il prototipo, e per un assistente IA che lo costruisce in codice.

- **Fai doppio clic su un filo** per scriverci sopra, oppure scegli {Scrivi una nota} nel suo menu, oppure scrivi nella riga della nota della scheda {Porta a}. Sulla tela si apre un piccolo cartellino di carta a metà del filo, con il suggerimento “Perché, o quando”.
- {{Return}} tiene la nota, come un clic altrove. {{Esc}} la chiude senza modifiche. Svuota la riga per togliere una nota.
- La nota pende dal suo filo come un cartellino di carta, in un carattere scritto a mano, con il filo ancora visibile sotto. Una nota lunga sulla tela viene accorciata con i puntini di sospensione, e conservata per intero.
- Un clic sul cartellino seleziona il suo livello, come un clic sul filo.
- Le note compaiono anche sotto ogni percorso nell’elenco dell’ispettore, e quando il prototipo viene riprodotto, la nota del percorso appena preso viene scritta a mano sotto il dispositivo.

## Come si muovono le schermate {#motion}

Il modo in cui entra una schermata si ricava dalla tela, e la scelta {Auto} è quasi sempre giusta. Puoi comunque scegliere un movimento semplice per qualsiasi collegamento nella scheda {Porta a}.

| Movimento | Cosa fa |
| --- | --- |
| {Auto} | Ricavato dalla disposizione delle schermate e da ciò che condividono (vedi sotto). Ogni collegamento parte da qui. |
| {Scorri} | La schermata successiva entra scorrendo dal lato in cui si trova, mentre quella precedente cede il posto, qualsiasi cosa condividano. |
| {Dissolvenza} | La schermata precedente sfuma nella successiva. |
| {Immediato} | La schermata successiva c’è all’istante. |

### Cosa ricava Auto dalla tela {#auto}

{Auto} guarda la schermata da cui parte un collegamento e quella a cui porta, e sceglie uno di tre modi:

- **Un foglio,** quando la schermata successiva non è più larga di quella su cui si apre ed è più bassa del 92 per cento della sua altezza oppure più stretta del 92 per cento della sua larghezza. Sale dal basso sopra la schermata su cui si apre, che si scurisce dietro. Il foglio sta lungo il fondo del dispositivo, al centro, con gli angoli superiori arrotondati.
- **Una trasformazione,** quando le due schermate sono in gran parte la stessa schermata, cambiata: almeno il 60 per cento dei loro livelli sono gli stessi livelli per tipo e nome (il primo “Titolo” con il primo “Titolo”, una copia di un componente con una copia dello stesso), e alcuni di questi si sono spostati, hanno cambiato misura o aspetto. Ciò che condividono si sposta nel nuovo posto e prende il nuovo aspetto; ciò che c’è solo nella prima sfuma allontanandosi; ciò che c’è solo nella seconda compare in dissolvenza, scivolando al suo posto dal lato in cui si trova la schermata; e il colore dello sfondo passa dall’una all’altra. Duplica una schermata e cambiala, e le due si trasformano l’una nell’altra.
- **Una spinta,** in tutti gli altri casi. La schermata successiva entra scorrendo dal lato in cui si trova, come lo sguardo passa dall’una all’altra sulla tela: una a destra entra da destra, una a sinistra da sinistra, una sotto sale dal basso, una sopra scende dall’alto. Quando una schermata si trova sia di lato sia sotto o sopra, vince la direzione in cui è più lontana, misurata rispetto alla misura delle schermate. La schermata precedente si sposta un po’ dall’altra parte e si scurisce sotto l’ombra di quella nuova.

Mentre {Auto} è scelto, la scheda {Porta a} dice cosa ha ricavato, con una di queste frasi:

| La scheda dice | Significa |
| --- | --- |
| Scorre da destra, come è disposta sull’area di lavoro. | Una spinta da destra. |
| Scorre da sinistra, come è disposta sull’area di lavoro. | Una spinta da sinistra. |
| Sale dal basso, come è disposta sull’area di lavoro. | Una spinta dal basso. |
| Scende dall’alto, come è disposta sull’area di lavoro. | Una spinta dall’alto. |
| Ciò che le due schermate condividono si muove; il resto cambia intorno. | Una trasformazione. |
| Più piccola della schermata sotto: sale sopra come un foglio. | Un foglio. |

### Cosa resta fermo {#shared-layers}

In uno scorrimento o in una spinta, i livelli che stanno nello stesso punto e hanno esattamente lo stesso aspetto in entrambe le schermate, come una barra dei pannelli, una barra di stato o un titolo, restano dove sono mentre il resto della schermata scorre sotto di loro, come fanno le barre di un’app vera. Questo succede quando nessuna delle due schermate è scorsa.

### Tempi {#timing}

Ogni movimento è portato da una molla, quindi parte veloce e si assesta con dolcezza:

| Modo | Dura circa |
| --- | --- |
| Spinta o scorrimento | 0,5 secondi |
| Trasformazione | 0,62 secondi |
| Foglio | 0,62 secondi, con un piccolo rimbalzo in alto quando si posa |
| Dissolvenza | 0,34 secondi |
| Immediato | Nessun tempo |

Tornare indietro riproduce al contrario il modo in cui la schermata era entrata: un foglio scende via, una schermata spinta torna fuori scorrendo. Ricominciare dall’inizio passa alla prima schermata in dissolvenza.

## Dove inizia il prototipo {#start}

Una bandierina sporge dal lato sinistro della schermata in cui inizia il prototipo, vicino alla sua parte alta, con sopra il triangolo della riproduzione.

- **Trascina la bandierina** su un’altra schermata per iniziare da lì. Un’ombra della bandierina sulla schermata sotto il puntatore mostra dove arriverà.
- **Passa il puntatore su un’altra schermata** e un’ombra tratteggiata della bandierina compare nello stesso punto. Fai clic sull’ombra, e la bandierina vola lì da dov’era.
- **Nel menu** di una schermata, scegli {Inizia da qui}.
- **Nell’ispettore,** senza nulla selezionato, il menu {Inizio} sotto la scheda di inizio elenca ogni schermata. Con una schermata selezionata, la sua scheda {Schermata} ha una casella {Inizia qui}.

Se nessuna schermata è indicata come inizio, il prototipo inizia dalla prima schermata da cui parte un collegamento e a cui non ne arriva nessuno, oppure dalla prima schermata che c’è. Togliere la spunta da {Inizia qui} lascia di nuovo scegliere a Bezzle in questo modo.

## Schermate che proseguono da sole {#timed}

Una schermata può passare alla successiva dopo un po’, senza un tocco, come fa una schermata di avvio o una conferma. Seleziona la schermata, e si apre la sua scheda {Schermata}. La sua riga da chiusa funziona come una manopola: trascina di lato su di essa per impostare quanto aspetta la schermata, con la larghezza della scheda che copre l’intervallo intero, da niente a 10 secondi. Il trascinamento scatta su 0,5, 1, 1,5, 2, 3 e 5 secondi quando ci passa sopra, e lì il trackpad dà uno scatto. Riportata a zero, la schermata aspetta di nuovo un tocco. Finché una schermata non aspetta, una riga sotto la sua scheda dice: “Trascina la scheda di lato e la schermata prosegue da sola, come una schermata di avvio.”

Quando aspetta, la scheda aperta mostra {Poi prosegue da sola verso}, con ogni altra schermata come un’immagine da cliccare. Puoi anche tirare un filo dallo sfondo stesso della schermata alla schermata verso cui prosegue: il filo di una schermata esce dal suo bordo destro. Prosegue da sola solo quando ha un tempo di attesa.

Il tempo è preciso al decimo di secondo, minimo 0,1 secondi. Sulla tela, il filo della schermata è tratteggiato e un piccolo orologio accanto al suo inizio dice quanto aspetta (“1.5 s”). La riga della scheda chiusa dice {Avanti dopo 1.5 s}; altrimenti dice {Inizia qui} sulla schermata di inizio, o quanti percorsi vi arrivano (“1 accesso”, “3 accessi”).

La scheda {Schermata} aperta ha anche {Riproduci da qui}.

## Gli stati di una copia {#states}

Una copia di un componente può cambiare aspetto mentre la si usa: più chiara quando il puntatore è sopra, più scura mentre è premuta, piena quando è selezionata. In Bezzle questo non richiede alcuna impostazione. Una variante di un componente riproduce uno stato quando il suo nome lo dice: una variante chiamata “Hover” compare quando il puntatore è su una copia, una chiamata “Premuto” mentre è premuta, e così via. Il nome basta a dirlo, alle persone come a un assistente che costruisce il prototipo in codice. Per creare varianti, vedi [Componenti](/docs/components.html).

| Stato | Nomi con cui è riconosciuto | Nel prototipo riprodotto |
| --- | --- | --- |
| Hover | hover, hovered, hovering, mouseover, over | Compare quando il puntatore è sopra |
| Premuto | pressed, press, down, tap, tapped, active | Compare mentre è premuta |
| Focalizzato | focus, focused | Compare quando viene toccata, come un campo |
| Selezionato | selected, on, checked, chosen, current | Un tocco la attiva e la disattiva |
| Disattivato | disabled, inactive, unavailable | Non accetta tocchi |
| Caricamento | loading, busy, progress, spinner, wait, waiting | Compare per un momento prima di proseguire |
| Errore | error, invalid, failed, failure | Per il codice, da mostrare quando qualcosa non riesce |
| Successo | success, done, valid, complete, completed | Per il codice, da mostrare quando qualcosa è riuscito |

Funzionano anche i nomi in tedesco, francese e italiano, come “Gedrückt”, “Survolé” o “Premuto”. Maiuscole e accenti non fanno differenza. Il nome può essere l’intero nome della variante o una qualsiasi parola al suo interno, come “Button / Hover” o “Primary pressed”; quando più parole indicano stati, vince l’ultima, quindi “Selected hover” è un hover. La prima variante di un componente (chiamata “Predefinita” finché non la rinomini) è uno stato solo se le hai dato il nome di uno stato.

### La scheda Stati {#states-card}

Seleziona una copia di un componente in modalità Prototipo, e una scheda {Stati} compare sotto {Porta a}. La sua riga da chiusa elenca gli stati che il componente ha, oppure dice {Nessuno}.

::: fields
- **Le varianti**: ognuna con un punto (blu quando è uno stato), il suo nome, e sotto ciò che fa nel prototipo. La prima variante dice {A riposo}.
- **Usa come**: accanto a ogni variante tranne la prima il cui nome non indica uno stato, un menu degli otto stati. Sceglierne uno rinomina la variante con quello stato.
- **Gli stati mancanti**: pulsanti tratteggiati per {Hover}, {Premuto}, {Selezionato}, {Disattivato} e {Caricamento} quando il componente non ha una variante per loro. Un clic crea una nuova variante con l’aspetto che la copia ha ora, le dà il nome dello stato e la mostra nella copia, pronta da cambiare. Il suggerimento del pulsante dice cosa farà lo stato.
:::

### Come si comportano le copie in riproduzione {#states-played}

- Il puntatore su una copia con una variante {Hover} la mostra; premere una copia con una variante {Premuto} la mostra finché non lasci andare.
- Un tocco su una copia che porta da qualche parte segue il suo collegamento. Se la copia ha una variante {Caricamento}, questa compare prima per 0,9 secondi, poi entra la schermata successiva.
- Un tocco su una copia con una variante {Selezionato} e senza collegamento la attiva, e il tocco successivo la disattiva di nuovo, come una casella, un interruttore o un pannello. Una copia che hai messo già con {Selezionato} si disattiva passando alla prima variante del componente.
- Un tocco su una copia con una variante {Focalizzato} e senza collegamento le dà il focus. Solo una copia alla volta ha il focus: darlo a un’altra lo toglie alla prima, come fanno i campi.
- Una copia che mostra {Disattivato} non mostra aspetto hover né premuto e non accetta alcun tocco.
- {Errore} e {Successo} non vengono riprodotti. Dicono quale variante mostrare quando qualcosa non riesce o riesce, per chi costruisce l’app vera.

## Senza nulla selezionato {#overview}

Fai clic sulla carta vuota, e l’ispettore mostra il prototipo nel suo insieme, su tre schede.

::: fields
- **La scheda di inizio**: la schermata in cui inizia il prototipo, dentro il suo dispositivo su un piccolo palco illuminato, con sopra un pulsante di riproduzione. Fai clic per riprodurre; il suo suggerimento dice “Riproduci da” e il nome della schermata. Sotto, la bandierina e il nome della schermata e, con più di una schermata, il menu {Inizio} per iniziare altrove. Il suo suggerimento: “Dove inizia il prototipo. Sull’area di lavoro, trascina la bandierina su un’altra schermata.”
- **I percorsi**: ogni collegamento, come un racconto. Ogni riga dice il livello, un piccolo filo (o un uncino per uno che torna indietro) e dove porta, con sotto la schermata su cui si trova e la sua nota in un carattere scritto a mano. Una schermata che prosegue da sola mostra quanto aspetta. Un clic seleziona quel livello e lo porta in vista. Fino a 60 righe. Senza ancora collegamenti, un piccolo disegno mostra come se ne crea uno: “Tira un filo da un pulsante a una schermata”.
- **Codice**: gli aspetti con un nome del design come token, il modo per consegnare l’intero prototipo a Claude, e {Ispeziona}. Vedi sotto.
:::

### Consegnare il prototipo {#handing-on}

La scheda {Codice} conta i token del design (“12 token”): i colori, i testi, le ombre e gli angoli a cui hai dato un nome. I suoi tre pulsanti li copiano tutti in una volta, in {CSS}, {SwiftUI} o {JSON}; una spunta dice quando è fatto. Se il design non ha ancora nomi, i pulsanti restano tenui, e il loro suggerimento dice: “Dai un nome a colori, testo, ombre o angoli nel design, e qui escono come token.” [Ispezione e consegna](/docs/inspect.html#tokens) dice cosa contiene ogni file.

{Costruiscilo con Claude} copia cosa dire a Claude. Con Bezzle collegato come server IA, Claude riceve in una volta ogni schermata, flusso, stato e token, costruisce un prototipo funzionante come un unico file HTML con le sue immagini accanto, e può riscrivere nel design ciò che cambia nel codice. Questo è ciò che copia, con dentro il nome del tuo design (il testo è in inglese):

```
Build a working prototype of my Bezzle design "Design name". Use the Bezzle MCP server: run its build_prototype prompt (or call get_prototype) for the screens, flows, component states, design tokens and assets. Make it one self-contained HTML file with its pictures beside it, that opens straight from the Finder: no server, no build step, nothing to install. Keep every element tagged with its Bezzle layer id, and when the prototype changes, write the change back into the design with Bezzle's tools.
```

Incollalo in Claude Desktop o in qualsiasi assistente collegato a Bezzle. Per collegarne uno, vedi [Assistenti IA](/docs/ai.html).

{Ispeziona} porta la tela in [modalità Ispeziona](/docs/inspect.html), per costruire il design a mano, un livello alla volta.

## Riprodurre il prototipo {#playing}

Ognuno di questi riproduce il prototipo:

- {Riproduci} all’estrema destra della barra superiore, oppure {Finestra › Riproduci il prototipo}, oppure {{⌘Return}}. Riproduce dalla schermata selezionata (o dalla schermata su cui si trova un livello selezionato), altrimenti da dove inizia il prototipo. Funziona anche dalla modalità Design.
- {{Return}} in modalità Prototipo.
- Un clic sulla scheda di inizio nell’ispettore.
- Un doppio clic su una schermata o sul suo nome, {Riproduci da qui} nel menu di una schermata, o {Riproduci da qui} nella sua scheda {Schermata}: da quella schermata.

Per riprodurre serve almeno una tavola.

La finestra diventa un palco illuminato della stessa carta millimetrata. La schermata si solleva dalla tela e si posa nel suo dispositivo, e il dispositivo le compare intorno. Sotto il dispositivo c’è il nome della schermata e, sopra, la nota del percorso che hai appena preso, scritta a mano.

### Attraversarlo a clic {#clicking-through}

- **Fai clic su un livello che porta da qualche parte** per seguire il suo collegamento. Il puntatore diventa una mano che indica sopra tutto ciò che si può toccare.
- **Fai clic dove non c’è nulla da toccare,** e tutto ciò che sulla schermata si può toccare si illumina di blu per un momento, così vedi dove andare.
- **Scorri** con il trackpad o con la rotellina del mouse quando una schermata è più alta del dispositivo, come una pagina lunga. Ogni nuova schermata parte dall’alto.
- **Fai clic sopra un foglio,** sulla schermata scurita dietro, per tornare indietro, come chiuderesti un foglio in un’app.
- **Le schermate che proseguono da sole** passano oltre dopo il loro tempo, finché resti su di esse.

I controlli in alto a destra del palco, e i loro tasti:

| Controllo | Tasto | Cosa fa |
| --- | --- | --- |
| {Indietro} | {{←}} o {{⌫}} | Torna alla schermata precedente, nel modo in cui è entrata questa, riprodotto al contrario. Se non c’è dove tornare, il dispositivo scuote la testa. |
| {Dall’inizio} | {{R}} | Torna alla prima schermata, con lo stato di ogni copia com’era all’inizio. |
| {Interrompi} | {{Esc}} | Termina la riproduzione. Lo fa anche un clic sul palco fuori dal dispositivo. |

Quando ti fermi, la schermata su cui sei vola di nuovo al suo posto sulla tela, che così entra in vista, e resta selezionata.

### Il dispositivo {#device}

Una schermata viene riprodotta nel dispositivo per cui è fatta, scelto in base alla sua misura:

- **Una misura dei preset delle tavole di Bezzle** viene riprodotta nel dispositivo di quel preset: un iPhone con la sua Dynamic Island, un telefono Android, un iPad, un MacBook, un iMac o un altro computer desktop, una finestra del browser, un Apple Watch, o la cornice di un post, di una storia o di un banner social.
- **La larghezza di un preset di telefono, tablet, Mac, web o orologio, ma più alta,** come una lunga pagina da scorrere, viene riprodotta nel dispositivo di quel preset all’altezza del preset, e scorre.
- **Qualsiasi altra misura** si ricava dalla forma: fino a 460 punti di larghezza e alta almeno 1,3 volte tanto va in un telefono; fino a 1.100 punti di larghezza e alta almeno 0,6 volte tanto in un tablet; più larga di 1.100 punti in una finestra del browser; tutto il resto come una card. Un telefono, un tablet o un browser è alto quanto lo sarebbe una schermata del genere, e una schermata più alta vi scorre dentro.

Una schermata più larga del suo dispositivo viene disegnata più piccola, per starci in larghezza. Il dispositivo diventa grande quanto la finestra permette, fino a una volta e un quarto la sua misura.

## Annulla, e design che puoi solo leggere {#undo}

Tutto ciò che fai in modalità Prototipo è un passo di {Modifica › Annulla}, con il nome di ciò che ha fatto: {Collega}, {Rimuovi collegamento}, {Scrivi nota}, {Cambia movimento}, {Prosegui da sola}, {Sposta l’inizio} e {Sposta schermata}. Aggiungere uno stato è una {Nuova variante}. Riprodurre non cambia nulla, quindi non lascia alcun passo.

In un design che qualcuno ha condiviso con te in sola lettura, puoi vedere il prototipo e riprodurlo, ma non tirare fili né cambiare le schede. [Condivisione](/docs/sharing.html) dice di più sui design condivisi in sola lettura.
