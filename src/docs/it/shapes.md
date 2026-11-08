---
title: Forme, tracciati e penna
nav: Forme e tracciati
lede: Disegna rettangoli, ellissi, linee e tracciati tuoi, modella a mano ogni angolo e ogni punto, e taglia, unisci e trasforma in contorni le forme per crearne di nuove.
---

Bezzle ha tre strumenti di disegno per le forme che usi di più, una penna per qualsiasi contorno, e una serie di strumenti per i tracciati che creano forme nuove da quelle che hai già: Unisci e gli altri modi di combinarle, la costruzione con i pezzi che nascono dalle forme sovrapposte, il Taglierino, l’espansione e la contrazione di un contorno, e la trasformazione di un bordo in forma. Tutto ciò che creano è un livello normale che mantiene l’aspetto della forma da cui nasce, e ogni passo si può annullare.

## Disegnare le forme {#drawing}

### Rettangolo, Ellisse e Linea {#basic-shapes}

Scegli uno strumento nella barra degli strumenti, o premi il suo tasto: {{R}} per {Rettangolo}, {{E}} per {Ellisse}, {{L}} per {Linea}. Poi trascina sulla tela. Mentre trascini, la dimensione compare accanto alla forma (la lunghezza, per una linea), e gli angoli da cui parti e a cui arrivi si agganciano ai bordi e al centro della tavola da disegno, e alle sue guide e alla sua griglia di layout quando sono visibili.

Un clic senza trascinare crea qualcosa di una misura sensata: un rettangolo o un’ellisse di 100 per 100 punti con l’angolo in alto a sinistra dove hai fatto clic, o una linea lunga 100 punti che va verso destra. Appena la forma è posata, hai di nuovo in mano lo strumento {Selezione}, così puoi spostarla o ridimensionarla subito.

Una forma va sulla tavola su cui l’hai cominciata, o sulla tela accanto alle tavole quando cominci fuori da esse. I nuovi rettangoli e le nuove ellissi sono riempiti di un grigio chiaro caldo (`#D1CFC9`); una nuova linea è un tratto di 1 punto in grigio scuro (`#706E69`). Puoi cambiarli entrambi nelle loro schede dell’ispettore (vedi [Colore, bordi ed effetti](/docs/looks.html)). Se disegni una forma sopra un’immagine, Bezzle ti propone di usarla come maschera per l’immagine (vedi [Immagini e foto](/docs/pictures.html)).

| Tieni premuto mentre trascini | Rettangolo ed Ellisse | Linea |
| --- | --- | --- |
| {{⇧}} | Un quadrato, o un cerchio | Procede a passi di 45° |
| {{⌥}} | Disegna a partire dal centro | Niente |
| {{⇧}} e {{⌥}} | Un quadrato o un cerchio dal centro | Passi di 45° |
| {{⌘}} | Niente si aggancia | Niente si aggancia |

Con {{⇧}} premuto, un quadrato si aggancia comunque con quello dei suoi bordi in movimento che arriva più vicino a qualcosa, e l’altro bordo lo segue, così resta quadrato.

> [!windows]
> In Bezzle per Windows una forma non si aggancia a niente mentre la disegni, e {{Alt}} non la disegna ancora dal centro: {{Shift}} fa un quadrato, un cerchio o una linea a passi di 45°.

### Le linee {#lines}

Una linea selezionata non ha le maniglie del riquadro: ha invece una maniglia rotonda a ogni estremità. Trascina un’estremità per spostarla mentre l’altra resta ferma; {{⇧}} mantiene la linea a passi di 45°, e l’estremità si aggancia a ciò che ha intorno, a meno che tu non tenga premuto {{⇧}} o {{⌘}}. Le estremità cadono su punti interi, e la lunghezza compare mentre trascini. Una linea che hai ruotato viene raddrizzata nelle sue due estremità appena ne afferri una, così le estremità possono andare ovunque.

Una linea non ha riempimento: il suo tratto è la sua scheda {Linea}, che funziona come un bordo. Una linea può portare del testo lungo il suo percorso (vedi [Testo lungo una curva](/docs/text.html#curves)), diventare un tracciato ed essere riflessa. Non può essere combinata né tagliata con il Taglierino, perché non racchiude alcuna area; per fare del suo tratto una forma che lo possa, usa [Converti bordo in forma](/docs/shapes.html#outline-border).

## Angoli {#corners}

### Arrotondare un rettangolo sulla tela {#corner-dots}

Seleziona un rettangolo e passaci sopra con il puntatore: dentro ogni angolo compare un puntino, lungo la diagonale, tanto più all’interno quanto più quell’angolo è arrotondato, e mai più vicino all’angolo di 10 punti sullo schermo. Trascina un puntino verso il centro per arrotondare tutti gli angoli allo stesso modo, e di nuovo verso l’esterno per renderli squadrati. Tieni premuto {{⌥}}, prima o durante il trascinamento, per arrotondare solo l’angolo che stai trascinando. Il raggio compare mentre procedi, e non va oltre la metà del lato più corto.

I puntini compaiono finché il rettangolo è largo e alto almeno 48 punti sullo schermo; ingrandisci la vista su un rettangolo piccolo per vederli.

### La scheda Angoli {#corners-card}

Ogni rettangolo selezionato ha una scheda {Angoli}. Chiusa, dice quanto sono arrotondati gli angoli, per esempio {Morbidi · 12}, {Pillola} o {Squircle · Tondi · 24}. Trascina di lato sulla scheda chiusa per arrotondarli da squadrati fino a una pillola; il trascinamento si ferma un attimo a 0, 4, 12, 24 e alla pillola. Fai clic sulla scheda per aprirla:

::: fields
- **Preset**: {Squadrati} (0), {Leggermente arrotondati} (4), {Morbidi} (12), {Tondi} (24) e {Pillola}, che arrotonda completamente i lati corti. Passa con il puntatore su uno di essi per provarlo sulla tela prima di fare clic.
- **R**: il raggio di ogni angolo, in punti. Resta vuoto finché gli angoli sono diversi. Un valore che scrivi arrotonda tutti e quattro allo stesso modo; trascinare sul campo, o scrivere una variazione come `+2`, cambia ogni angolo a partire dal suo raggio.
- **Tondi**, **Squircle**: angoli tondi semplici, un quarto di cerchio, oppure squircle, i cui angoli si raccordano dolcemente ai lati, così la curva arriva gradualmente invece che tutta in una volta, come iOS disegna le icone delle sue app.
- **Morbidezza**: il campo in % accanto, da 0 a 100%. {Squircle} parte da 80%, un po’ più morbido del 60% con cui iOS disegna le sue icone; a 0 gli angoli tornano tondi semplici.
:::

Gli angoli possono anche avere un nome, per usarli su altri livelli e cambiarli ovunque in una volta; la scheda aperta propone per primi gli stili di angolo del design (vedi [Componenti, stili e librerie](/docs/components.html)).

::: demo corners
:::

### Gli angoli di un tracciato {#path-corners}

Anche i tracciati hanno angoli. Passa con il puntatore su un tracciato selezionato e dentro ognuno dei suoi angoli compare un puntino: in ogni punto in cui il contorno gira bruscamente, e in ogni arrotondamento tra due lati dritti. Trascina un puntino verso l’interno per arrotondare allo stesso modo tutti gli angoli del tracciato, o tieni premuto {{⌥}} per arrotondare solo quello; trascinalo di nuovo verso l’esterno per rendere l’angolo di nuovo vivo. Un arrotondamento non prende mai più lato di quanto ce ne sia, e solo metà quando anche l’angolo all’altra estremità è arrotondato.

Un arrotondamento fatto così, o qualsiasi arrotondamento tra due lati dritti (come gli angoli di un rettangolo arrotondato che hai convertito in tracciato), mantiene il suo puntino, così puoi renderlo più tondo o più vivo in seguito. I puntini compaiono finché il lato più lungo del tracciato misura almeno 40 punti sullo schermo, e il tracciato non ha più di 64 angoli.

## La penna {#pen}

La {Penna} ({{P}}) disegna un tracciato un punto alla volta: un clic posa un angolo, un trascinamento tira fuori una curva dal punto. Un nuovo tracciato non ha riempimento e ha un tratto di 1 punto in grigio scuro; aggiungi un riempimento dalla scheda tratteggiata {Riempimento} in fondo all’ispettore quando ne vuoi uno.

::: steps
1. **Premi {{P}}.** Il puntatore diventa una penna.
2. **Fai clic dove comincia il tracciato.** Ai livelli non si aggiunge ancora nulla: il tracciato diventa un livello con il suo secondo punto, sulla tavola su cui hai posato il primo punto.
3. **Fai clic per ogni angolo, o trascina per una curva.** Una curva segue il puntatore dal punto più recente per mostrare dove andrebbe la parte successiva.
4. **Concludi.** Fai di nuovo clic sul primo punto per chiudere la forma, o premi {{Return}} o {{Esc}} per lasciarla aperta. In entrambi i casi il tracciato resta selezionato e hai di nuovo in mano lo strumento {Selezione}.
:::

### Curve e maniglie mentre disegni {#pen-curves}

Trascinare mentre posi un punto ne tira fuori le maniglie: la maniglia in uscita segue il puntatore, e quella in entrata la rispecchia, così il contorno passa per il punto senza spezzarsi.

- **{{⌥}} mentre trascini** lascia dov’è la maniglia in entrata (o la lascia assente, se lo tieni premuto fin dall’inizio), così il tracciato fa un angolo nel punto invece di attraversarlo.
- **{{⇧}} mentre trascini** mantiene la maniglia a passi di 45°.
- **Fai di nuovo clic sul punto più recente** per togliergli la maniglia in uscita, così la parte successiva ne esce dritta. Trascina invece a partire da esso per tirarne fuori una nuova maniglia in uscita, da sola, per una svolta netta dopo una curva.
- **Trascina sul primo punto** mentre chiudi il tracciato per modellare la curva che vi ritorna. Il primo punto diventa smussato con essa; tieni premuto {{⌥}} per lasciare la prima curva com’era.

{{⇧}} e {{⌥}} agiscono appena li premi, senza aspettare che il puntatore si muova.

### Posare i punti con precisione {#pen-snapping}

Un punto si aggancia, entro 5 punti sullo schermo, ai bordi e ai centri di ciò che ha intorno, alle guide e alle griglie di layout, e ai punti del tracciato stesso. Dove niente lo trattiene, cade su punti interi e, quando ingrandisci la vista, su metà, quarti, decimi e frazioni più fini, così che un passo non superi mai i due punti sullo schermo.

- **{{⇧}}** posa il punto successivo a passi di 45° rispetto all’ultimo.
- **{{⌘}}** lascia andare il punto ovunque: niente si aggancia, e cade sui centesimi di punto.

### Togliere i punti {#pen-undo}

Mentre disegni, {{⌫}} toglie il punto più recente; quando restano solo due punti, il tracciato sparisce e il suo primo punto aspetta il clic successivo. {{Esc}} durante un trascinamento toglie il punto che stai posando. Ogni punto è un passo di Annulla a sé, quindi funziona anche {{⌘Z}}.

### La penna su un tracciato selezionato {#pen-on-paths}

Con la penna in mano e un tracciato selezionato, i suoi punti compaiono, e il puntatore indica cosa farebbe un clic:

| Punta su | Un clic |
| --- | --- |
| Un’estremità aperta del tracciato | Continua a disegnare da quell’estremità |
| Qualsiasi altro punto | Toglie quel punto |
| Il contorno tra due punti | Vi aggiunge un punto, senza cambiare la forma |
| Altrove | Comincia un nuovo tracciato |

Mentre disegni, se punti sul primo punto compare un anello intorno: un clic lì chiude il tracciato. Se punti sul punto più recente, vedi che un clic gli toglie la maniglia.

## Modificare i punti {#editing-points}

### Cominciare e finire {#start-editing}

I punti di qualsiasi tracciato si possono spostare, aggiungere e togliere. Per cominciare, fai una di queste cose:

- Fai doppio clic su un tracciato.
- Seleziona un tracciato e premi {{Return}}.
- Fai clic su {Modifica punti} nella sua scheda {Tracciato}, o scegli {Modifica punti} quando fai clic sul tracciato con il tasto destro.

Fai doppio clic su un rettangolo, un’ellisse o una linea per modificarne i punti. Mentre li modifichi è un tracciato; se lo lasci invariato, torna a essere la forma che era, con i suoi angoli e tutto il resto. Se ne cambi il contorno, resta un tracciato.

Un tracciato o una forma riempiti con un’immagine, con un doppio clic, ti fanno posizionare l’immagine (vedi [Immagini e foto](/docs/pictures.html)). Per i punti di un tracciato, usa {Modifica punti}; una forma, convertila prima in tracciato.

Per finire, premi {{Esc}} o {{Return}}, fai clic su {Fine} nella scheda {Tracciato}, fai doppio clic ovunque fuori dai punti, o fai clic su una parte vuota della tela. Un clic su un altro livello termina la modifica e seleziona quel livello.

### Scegliere e spostare i punti {#moving-points}

- **Fai clic su un punto** per sceglierlo. {{⇧}} e clic aggiunge un punto a quelli scelti, o lo toglie da essi.
- **Trascina intorno ai punti**, partendo da una parte vuota della tela o dall’interno del tracciato lontano dal suo contorno, per scegliere quelli dentro il riquadro; tieni premuto {{⇧}} per aggiungerli a quelli scelti. {{⌘A}} sceglie tutti i punti.
- **Trascina un punto scelto** per spostare insieme tutti i punti scelti. {{⇧}} mantiene lo spostamento in orizzontale o in verticale; il punto che tieni si aggancia agli altri punti del tracciato e a ciò che ha intorno, e {{⌘}} disattiva l’aggancio. I punti cadono su punti interi, o su passi più fini quando hai ingrandito la vista, come con la penna.
- **I tasti freccia** spostano i punti scelti di 1 punto, o di 10 con {{⇧}}. Se non è scelto alcun punto, spostano l’intero tracciato.
- **{{⌫}}** toglie i punti scelti e collega i punti ai due lati. Una parte del tracciato che resta con meno di due punti sparisce, e un tracciato senza più punti sparisce del tutto.

### Maniglie, punti smussati e angoli {#handles}

Compaiono le maniglie dei punti scelti, e quelle dei punti vicini che tirano le curve verso di essi. Trascina una maniglia per rimodellare la sua curva:

- Su un punto smussato, l’altra maniglia ruota insieme e mantiene la propria lunghezza, così il contorno resta continuo.
- Tieni premuto {{⌥}} per spostare una maniglia da sola, lasciando un angolo nel punto.
- {{⇧}} mantiene la maniglia a passi di 45°.

**Fai doppio clic su un punto** per passare da un angolo vivo a un punto smussato e viceversa. Un angolo perde le sue maniglie, così le linee ai due lati vi arrivano dritte. Un punto smussato ha le maniglie allineate su una sola retta: lungo le maniglie che ha, mantenendone la lunghezza, oppure, per un punto senza maniglie, lungo la direzione che va dal punto precedente al successivo, con ogni maniglia lunga un terzo della distanza dal suo vicino.

### Aggiungere punti {#adding-points}

Punta sul contorno tra due punti: un punto tenue mostra dove un clic ne aggiungerebbe uno. Fai clic per aggiungerlo lì; la forma non cambia, perché le curve ai due lati si accorciano per adattarsi. Tieni premuto il pulsante del mouse e trascina per spostare subito il nuovo punto.

### La scheda Tracciato {#path-card}

Un tracciato selezionato ha una scheda {Tracciato}. Quando la scheda è chiusa, dice se il tracciato è {Aperto} o {Chiuso}, e {Modifica dei punti} mentre ne modifichi i punti.

::: fields
- **Aperto**, **Chiuso**: chiude ogni tracciato selezionato con una linea dal suo ultimo punto al primo, o lo apre in quel punto.
- **Sovrapposizioni**: compare quando il tracciato ha un riempimento. Dove il contorno incrocia sé stesso, o una parte sta dentro un’altra, {Riempi} riempie quelle zone, e {Ritaglia} le lascia vuote, come un foro.
- **Modifica punti**, **Fine**: comincia o termina la modifica dei punti dell’unico tracciato selezionato ({{Return}}).
- **X**, **Y**: mentre modifichi i punti e alcuni sono scelti, dove si trovano, misurati dall’angolo in alto a sinistra della tavola o del gruppo che contiene il tracciato. Con più punti scelti, il campo è vuoto se non hanno tutti lo stesso valore. Un valore che scrivi sposta lì tutti i punti scelti, e così li allinea; una variazione come `+10` sposta ognuno di quella quantità.
- **Angolo**, **Smussato**: rende i punti scelti angoli vivi o punti smussati.
:::

Se non è scelto alcun punto, la scheda dice cosa puoi fare: trascinare un punto o le sue maniglie, fare clic sul contorno per aggiungere un punto, e fare doppio clic su un punto per renderlo smussato o d’angolo.

## Converti in tracciato {#convert-to-path}

{Oggetto › Converti in tracciato} ({{⌘8}}) trasforma in tracciati i rettangoli, le ellissi e le linee selezionati, così i loro punti si possono modificare per sempre. Il contorno resta esattamente com’era, angoli tondi o squircle compresi; è la scheda {Angoli} a sparire, perché gli angoli di un tracciato sono i suoi punti. I testi diventano i contorni delle loro lettere (vedi [Testo in contorni](/docs/text.html#outlines)). I livelli bloccati restano come sono.

Non ti serve solo per ritoccare una forma una volta: un doppio clic su un rettangolo, un’ellisse o una linea ne apre i punti così come sono.

## Combinare le forme {#combining}

### Unisci, Sottrai, Interseca ed Escludi sovrapposizione {#boolean}

Seleziona due o più forme (rettangoli, ellissi o tracciati, nessuno bloccato, e nient’altro) e scegli uno di questi comandi dal menu {Oggetto}, o fai clic sul suo pulsante nella scheda {Disponi} che compare quando sono selezionati più livelli:

| Comando | Tasti | Cosa resta |
| --- | --- | --- |
| {Unisci} | {{⌥⌘U}} | Tutte le forme, in un unico contorno |
| {Sottrai} | {{⌥⌘S}} | La forma più indietro, meno ogni forma che le sta davanti |
| {Interseca} | {{⌥⌘I}} | Solo dove tutte le forme si sovrappongono |
| {Escludi sovrapposizione} | {{⌥⌘X}} | Solo dove c’è un numero dispari di forme, quindi dove due si sovrappongono viene ritagliato |

Il risultato è un unico tracciato. Prende l’aspetto della forma più indietro (i suoi riempimenti, bordi, ombre e il resto, con una sfumatura che resta dov’era) e si trova appena sopra la forma più avanti, così ciò che stava sopra le forme ci sta ancora. Dopo resta selezionato. Quando non resterebbe nulla, come quando intersechi forme che non si sovrappongono, Bezzle emette un segnale acustico e nulla cambia.

I testi non si possono combinare così come sono: convertili prima in tracciati, e un testo di un solo colore diventa un unico tracciato che si combina come qualsiasi altro. Il tratto di una linea si combina una volta che [Converti bordo in forma](/docs/shapes.html#outline-border) l’ha reso una forma.

::: demo combine
:::

### Costruisci con i pezzi {#build}

Le forme sovrapposte si tagliano a vicenda in pezzi. La costruzione ti permette di scegliere a mano quali vuoi: unirne alcuni, fare di altri forme a sé, cancellare il resto.

::: steps
1. **Seleziona due o più forme** (rettangoli, ellissi o tracciati).
2. **Scegli {Oggetto › Costruisci con i pezzi}** ({{⌥⌘B}}), o fai clic sul pulsante di costruzione alla fine dei pulsanti per combinare nella scheda {Disponi}. Ogni pezzo ha un contorno tratteggiato; quello sotto il puntatore si illumina, e la scheda {Disponi} si apre con un promemoria di cosa fare.
3. **Fai clic su un pezzo** per farne una forma a sé, tolta da ogni forma di cui faceva parte.
4. **Trascina sui pezzi** per unire in una sola forma tutti i pezzi che il trascinamento tocca. Per quanto veloce trascini, conta ogni pezzo lungo il percorso.
5. **Tieni premuto {{⌥}}** mentre fai clic o trascini per cancellare invece i pezzi. I pezzi e la scia diventano rossi.
6. **Premi {{Return}} o {{Esc}}**, fai clic lontano dai pezzi, o scegli {Oggetto › Fine costruzione} per finire.
:::

Una forma unita ha l’aspetto della forma più avanti sopra il primo pezzo che hai toccato, e si trova sopra la più avanti delle forme da cui ha preso i pezzi. Quelle forme tengono il resto di sé, e spariscono quando non ne resta nulla. Un clic su un pezzo che è già da solo una forma intera non cambia nulla. Puoi continuare a costruire dopo ogni clic o trascinamento; ognuno è un passo di Annulla ({Unisci pezzi} o {Cancella pezzi}). {{Esc}} durante un trascinamento lascia perdere quel trascinamento senza costruire.

La costruzione finisce anche quando selezioni qualcos’altro o scegli un altro strumento.

## Il Taglierino {#knife}

Il {Taglierino} ({{K}}) taglia le forme in pezzi lungo una linea che disegni attraverso di esse. La lama compare come una linea rossa tratteggiata. Ogni pezzo ha l’aspetto che aveva la forma e sta dove stava lei, al suo posto tra i livelli, e dopo il taglio i pezzi sono selezionati. Il Taglierino ti resta in mano per il taglio successivo; premi {{V}} o {{Esc}} per posarlo.

### Tagliare trascinando {#knife-drag}

Trascina attraverso le forme: il taglio segue il percorso del puntatore, ammorbidito. Tieni premuto {{⇧}} per tagliare invece in linea retta dal punto in cui hai cominciato. {{Esc}} prima di rilasciare annulla il taglio.

### Tagliare punto per punto {#knife-points}

Fai clic invece di trascinare, e posi una linea di taglio un punto alla volta, come con la penna:

- Ogni clic aggiunge un punto; trascinare mentre fai clic ne tira fuori una curva.
- {{⇧}} mantiene ogni tratto a passi di 45°.
- {{Return}}, un doppio clic o un clic sul primo punto esegue il taglio. Un clic sul primo punto chiude la linea ad anello, che ritaglia ciò che racchiude.
- {{⌫}} toglie il punto più recente, e {{Esc}} lascia perdere la linea.

### Cosa taglia il Taglierino {#knife-cuts}

Il taglio divide le forme selezionate che attraversa da parte a parte. Se non ne attraversa nessuna, divide ogni forma che attraversa tra quelle visibili e non bloccate. Funziona su rettangoli, ellissi e tracciati. Le sue estremità arrivano un po’ più in là di dove le hai disegnate, così una linea che comincia o finisce appena dentro una forma la divide comunque, e dove la linea entra in una forma e si ferma all’interno, la fessura si richiude. Se non viene tagliato nulla, Bezzle emette un segnale acustico.

Taglia la forma di una maschera, e ottieni una maschera per ogni pezzo, ognuna con ciò che mostrava lì, come una foto incorniciata tagliata insieme alla cornice.

## Espandere e contrarre {#outset}

Tieni premuto {{⌥}} e punta sul bordo di un rettangolo, un’ellisse o un tracciato selezionati (un tracciato chiuso, o con un riempimento): il bordo si illumina e il puntatore mostra una freccia a due punte che lo attraversa. Trascina verso l’esterno per creare una copia della forma ingrandita tutt’intorno, posta dietro di essa; trascina verso l’interno per una copia ridotta tutt’intorno, posta davanti. La copia arriva tanto lontano dal bordo quanto il puntatore, la distanza compare mentre trascini, e i suoi angoli restano vivi. Tieni premuto {{⇧}} per angoli tondi.

La copia ha l’aspetto della forma e prende il suo nome, per esempio *Espansione di Ellisse 1* o *Contrazione di Ellisse 1*; viene selezionata quando rilasci. {{Esc}} durante il trascinamento la annulla. La forma deve essere larga e alta almeno 16 punti sullo schermo.

> [!note] Opzione sul bordo, Opzione altrove
> Con {{⌥}} premuto, un trascinamento che comincia sul bordo della forma selezionata crea un’espansione o una contrazione. Un trascinamento che comincia in qualsiasi altro punto della forma sposta via una copia, come per qualsiasi livello (vedi [La tela](/docs/canvas.html)).

## Converti bordo in forma {#outline-border}

{Oggetto › Converti bordo in forma} ({{⌥⌘O}}) trasforma il bordo di ogni forma o linea selezionata in una forma a sé, riempita con il colore, la sfumatura o l’immagine del bordo esattamente come era disegnato: all’interno, centrato o all’esterno, tratteggiato o no. A differenza di un bordo, che mantiene il suo spessore per quanto grande diventi il livello, la nuova forma cresce e si riduce come qualsiasi forma.

- Un livello con un riempimento mantiene il riempimento, e la forma del bordo va appena sopra, con il suo nome, per esempio *Bordo di Rettangolo 1*. Le ombre del livello restano sul livello.
- Un livello che era solo bordo, come una linea o una forma senza riempimento, diventa esso stesso la forma.
- Un livello con più bordi ottiene una forma per ognuno, una sopra l’altra come erano disegnati.

Funziona su rettangoli, ellissi, tracciati e linee con un bordo più spesso di 0, a meno che non siano bloccati. Dopo, le nuove forme sono selezionate.

## Riflettere {#flip}

{Oggetto › Rifletti orizzontalmente} e {Oggetto › Rifletti verticalmente}, o i due pulsanti di riflessione accanto al campo della rotazione nella scheda {Frame}, specchiano la selezione dove si trova: un singolo livello rispetto al proprio centro, più livelli rispetto al centro del riquadro che li contiene tutti. Il contorno di un tracciato viene capovolto, gli angoli di un rettangolo si scambiano di lato, una linea si inclina dall’altra parte, un livello ruotato ruota nel verso opposto, e sfumature e immagini vengono specchiate insieme. Un gruppo riflette ciò che contiene.

Le tavole da disegno e i livelli bloccati restano come sono. Le parole si leggono sempre nel verso giusto, quindi un testo da solo non si riflette; insieme ad altri livelli, si sposta nella sua posizione speculare.

## Le schede di una forma {#cards}

Ciò che l’ispettore mostra per la selezione dipende da cosa è:

- **Rettangolo**: {Frame}, {Angoli}, {Opacità}, poi i suoi riempimenti, bordi, ombre, sfocatura, 3D ed esportazione.
- **Ellisse**: le stesse, senza {Angoli}.
- **Tracciato**: {Frame}, {Tracciato}, {Opacità}, poi i suoi aspetti come per un rettangolo.
- **Linea**: {Frame}, {Opacità}, {Linea} al posto di riempimento e bordo, poi ombre (solo sotto la linea), sfocatura, 3D ed esportazione.
- **Più livelli**: per prima viene {Disponi}, con i pulsanti che li allineano e li distribuiscono; quando sono tutti forme, anche i pulsanti per combinare e il pulsante di costruzione.

Le schede degli aspetti che una forma non ha ancora aspettano in fondo come schede tratteggiate, a un clic di distanza. Le trovi tutte in [Colore, bordi ed effetti](/docs/looks.html).

## Scorciatoie {#shortcuts}

| Tasti | Cosa fanno |
| --- | --- |
| {{R}}, {{E}}, {{L}} | Rettangolo, Ellisse, Linea |
| {{P}} | Penna |
| {{K}} | Taglierino |
| {{V}} | Selezione |
| {{Return}} | Modifica i punti del tracciato selezionato; con la penna, termina il tracciato |
| {{Esc}} | Smetti di disegnare o di modificare i punti; posa lo strumento |
| {{⌫}} | Togli il punto più recente (penna, Taglierino); elimina i punti scelti |
| {{⌘A}} | Scegli tutti i punti, mentre modifichi i punti |
| {{⌘8}} | Converti in tracciato |
| {{⌥⌘U}} | Unisci |
| {{⌥⌘S}} | Sottrai |
| {{⌥⌘I}} | Interseca |
| {{⌥⌘X}} | Escludi sovrapposizione |
| {{⌥⌘B}} | Costruisci con i pezzi, e Fine costruzione |
| {{⌥⌘O}} | Converti bordo in forma |

Tutte le scorciatoie di Bezzle sono in [Scorciatoie da tastiera](/docs/shortcuts.html).
