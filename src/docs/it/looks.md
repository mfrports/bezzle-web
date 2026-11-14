---
title: Colore, bordi ed effetti
nav: Colore ed effetti
lede: Riempi i livelli di colori, sfumature e immagini, dai loro bordi, ombre, sfocature e profondità, e regola ognuno con precisione, sulla sua scheda o direttamente sulla tela.
---

L’aspetto di un livello selezionato sta nelle schede dell’ispettore, una scheda per ogni cosa che ha: {Opacità}, {Riempimento}, {Bordo}, {Ombra}, {Sfocatura} e {3D}, più {Angoli} su un rettangolo e {Foto} su un’immagine. Ciò che non ha ancora aspetta sotto le schede, in pulsanti tratteggiati. Questa pagina passa in rassegna ognuna di queste schede, il menu del riempimento con le sue sfumature, e le maniglie e le manopole che mettono sulla tela.

::: mac
In Anima, le schede {Angoli}, {Riempimento}, {Bordo} e {Ombra} cambiano l’aspetto di un livello lungo un film: vedi [Colori, bordi, angoli e ombre](/docs/animate.html#looks).
:::

## Come funzionano le schede dell’aspetto {#look-cards}

Chiusa, una scheda è una sola riga: una piccola anteprima dal vivo di ciò che contiene, il suo nome e il valore a cui arriva, come `#D1CFC9 · 50%` per un riempimento o {Morbida} per un’ombra. Tutto ciò che c’è su una scheda si raggiunge in più modi, da un rapido trascinamento ai numeri esatti.

- **Fai clic sulla riga** per aprire la scheda, e di nuovo per chiuderla. Aprire una scheda chiude quella che era aperta.
- **Trascina di lato sulla riga** per regolare la cosa principale della scheda: quanto si vede un riempimento, quanto è spesso un bordo, quanto un’ombra solleva il livello, quanto è forte una sfocatura, quanto un livello è inclinato in profondità. La larghezza della scheda è l’intera gamma. La riga si riempie da sinistra fin dove arriva il valore, il puntatore mostra che si può trascinare, e il trascinamento si ferma un attimo su ogni preset lungo il percorso, con uno scatto del trackpad e una tacca più alta lungo il fondo della scheda. Oltre i due estremi la scheda cede un poco.
- **Tira oltre lo zero** per togliere la cosa, sulle schede che possono perderla. Continua a trascinare verso sinistra oltre l’inizio della gamma: la scheda si inclina e dice {Rilascia per rimuovere}; lascia andare, e sparisce in un solo passo. Torna indietro prima di lasciare per tenerla.
- **La ×** su una scheda aperta toglie ciò che mostra, e **il +** accanto ne aggiunge sopra un altro dello stesso tipo: un altro riempimento, bordo od ombra. Passando sul + vedi sulla tela cosa aggiungerebbe.
- **I preset** stanno in una fila di piccole anteprime, ognuna con il suo nome quando la punti. Puntarne una la mostra anche subito sulla tela, un clic la applica, e quella in uso è in rilievo.
- **I numeri esatti** vengono per ultimi, in campi che funzionano come tutti i campi numerici di Bezzle: trascina sopra di loro, cambiali a passi con i tasti freccia, o scrivi somme e variazioni come `+2` (vedi [Campi numerici](/docs/canvas.html)).

I pulsanti tratteggiati sotto le schede ({Riempimento}, {Bordo}, {Ombra}, {Ombra interna}, {Sfocatura}, {3D}, e altri come {Esporta}) offrono ciò che la selezione potrebbe avere. Passando su un pulsante lo vedi sulla tela; un clic lo aggiunge, già regolato su qualcosa che sta bene, e ne apre la scheda. Passando su una scheda qualsiasi, sulla tela si evidenzia la parte del livello che cambia: il riempimento, il bordo, dove cade l’ombra, l’area sfocata.

Con più livelli selezionati, una scheda mostra ciò che hanno in comune, e {Vari} dove sono diversi. Una modifica vale per tutti; una variazione scritta come `+2` cambia ogni livello a partire dal suo valore. Ogni trascinamento, su una scheda o sulla tela, è un passo di {Modifica › Annulla}, con il nome di ciò che ha fatto, come Modifica ombra o Modella sfumatura.

### Pile di riempimenti, bordi e ombre {#piles}

Un livello può avere più riempimenti, bordi e ombre. Ognuno ha una scheda propria, e le schede dello stesso tipo stanno vicine in una pila, la più alta per prima. Trascina in su o in giù una scheda della pila per prenderla e metterla in un altro posto; le altre si spostano per farle spazio, e quando lasci andare si riordinano in un solo passo (Riordina riempimenti, Riordina bordi, Riordina ombre). Un’immagine resta sempre il riempimento più in basso, quindi niente può finirle sotto.

### Quali livelli hanno quali schede {#which-cards}

| Livello | Riempimento | Bordo | Ombra sotto | Ombra interna | Diffusione | Sfocatura dello sfondo |
|---|---|---|---|---|---|---|
| Rettangolo, ellisse, tracciato | Quanti vuoi | Quanti vuoi | Sì | Sì | Sì | Sì |
| Testo | Uno, per le lettere | No | Sì | Sì | No | No |
| Linea | No | I suoi tratti, sulle schede {Linea} | Sì | No | Sì | No |
| Gruppo | No | No | Sì | Sì | No | No |
| Tavola da disegno | Il suo {Sfondo} | No | No | No | No | No |

{Opacità}, una sfocatura del livello stesso e {3D} ci sono per ogni livello tranne la tavola da disegno, che è la pagina stessa.

## Colori {#colors}

### Il campo del colore {#color-field}

Ovunque Bezzle chieda un colore, mostra la stessa riga:

::: fields
- **Il campione**: il colore sopra una scacchiera, così vedi quanto è trasparente. Fai clic per aprire il selettore colore; su un riempimento o un bordo apre invece il [menu del riempimento](#fill-menu). Un campione sfumato di grigio da un angolo all’altro vuol dire che i livelli selezionati sono diversi.
- **Il campo esadecimale**: il colore in sei cifre esadecimali dopo il `#`. Scrivine sei, o tre che valgono per sei (`F60` è `FF6600`), con o senza `#`, e premi {{Return}} o fai clic altrove. La trasparenza resta com’era. Mostra un trattino quando i livelli sono diversi.
- **La percentuale**: compare accanto al valore esadecimale quando il colore è meno che pieno al 100%.
- **I colori del design**: sulle schede {Riempimento} e {Bordo}, fino a quattro dei colori che il design usa già, come pallini in fondo alla riga, escluso il colore che il livello ha adesso. Passa su uno per vederlo sulla tela, fai clic per usarlo; mantiene la trasparenza che avevi.
:::

### Il selettore colore {#color-picker}

::: fields
- **Il quadrato**: la saturazione da sinistra a destra, la luminosità dall’alto in basso. Trascina in un punto qualsiasi.
- **La barra della tonalità**: il colore lungo la ruota. Un grigio non ha una tonalità propria, quindi la barra resta dov’era quando ne scegli uno.
- **La barra della trasparenza**: da trasparente a pieno, sopra una scacchiera, a percentuali intere.
- **Il campo esadecimale** e **la percentuale** sotto di esse.
- **Il contagocce**: {Preleva un colore dallo schermo} preleva qualsiasi colore in qualsiasi punto dello schermo, in qualsiasi app. Mantiene la trasparenza che avevi.
- **In questo design**: fino a 18 dei colori che il design usa, i più usati per primi. Fai clic su uno per usarlo.
:::

Un trascinamento nel selettore è un solo passo di Annulla, per quanto duri. I colori che un design usa, qui e accanto ai campi del colore, sono i colori dei riempimenti e dei bordi di tutti i suoi livelli, senza la loro trasparenza, contati su tutte le tavole; gli sfondi delle tavole e le ombre restano fuori.

## Riempimenti {#fills}

### La scheda Riempimento {#fill-card}

Un riempimento colora l’interno di una forma, o le lettere di un testo. Chiusa, la scheda dice cos’è: il valore esadecimale e la trasparenza di un colore, {Lineare} o {Radiale} per una sfumatura, {Foto} per un’immagine, {Shader} per un [riempimento shader](#shader-fills), e il metodo di fusione quando c’è.

::: fields
- **Il trascinamento**: per un colore, quanto se ne vede, da 0 a 100%, con una sosta al 100%. Oltre lo zero, il riempimento sparisce.
- **Il colore o il riempimento**: il [campo del colore](#color-field) per un colore. Per una sfumatura o un’immagine, un campione e il suo nome ({Sfumatura lineare}, {Sfumatura radiale}, {Foto}); fai clic su uno dei due per aprire il [menu del riempimento](#fill-menu).
- **Immagine intera**, **Solo soggetto**: su un riempimento che è un’immagine, se si vede intera o senza il suo sfondo (vedi [Rimuovi sfondo](/docs/pictures.html#remove-background)).
- **Velocità**, **Istante**, **Usa l’immagine**: su un riempimento disegnato dagli shader di una pagina web (vedi [Riempimenti shader](#shader-fills)).
- **Fusione**: sul primo riempimento di una forma, come il livello si mescola con ciò che sta sotto (vedi [Metodi di fusione](#blend)).
:::

Rettangoli, ellissi e tracciati nuovi sono riempiti di un grigio chiaro caldo, `#D1CFC9`; il testo nuovo è `#1C1B19`; una tavola nuova è bianca.

La × o una tirata oltre lo zero tolgono un riempimento. Quando è l’unico, viene solo disattivato: il pulsante tratteggiato {Riempimento} lo riporta con il colore che aveva. Togliere l’ultimo riempimento toglie anche il metodo di fusione, che va con lui.

### Più di un riempimento {#more-fills}

Il + su una scheda Riempimento aperta stende un altro riempimento sopra gli altri: una sfumatura da niente in alto a nero al 50% in basso, quella che serve alle parole sopra una foto, facile da vedere sopra qualsiasi cosa e pronta da trasformare in ciò che ti serve. I riempimenti si dipingono uno sopra l’altro, il primo in basso, ognuno dentro il contorno del livello. Solo il primo riempimento può essere un’immagine, e sopra un’immagine a cui è stato tolto lo sfondo, i riempimenti superiori colorano solo il soggetto.

### Riempimenti di testi e tavole {#text-and-artboard-fills}

Un testo ha un solo riempimento, per le sue lettere: un colore, una sfumatura o un’immagine, steso su tutto il riquadro del testo. Non si può togliere, e un testo non ha metodo di fusione né un secondo riempimento. Le lettere che selezioni mentre scrivi prendono un colore proprio; ricolorare tutto il testo toglie quei colori, così tutto mostra il nuovo colore (vedi [Testo](/docs/text.html)).

Il riempimento di una tavola è la sua scheda {Sfondo}: un colore, una sfumatura o un’immagine, senza trascinamento e senza metodo di fusione. Una tavola con un’immagine come sfondo riceve anche una [scheda Foto](/docs/pictures.html#photo-card).

### Riempimenti shader {#shader-fills}

Un riempimento shader è ciò che una pagina web ha disegnato con WebGL, tenuto vivo: gli shader stessi della pagina disegnano il riempimento del livello, nitido a ogni misura. Arriva in un design insieme alla pagina (vedi [Sfondi WebGL vivi](/docs/import.html#web-shaders)); in Bezzle non si può creare. Chiusa, la sua scheda {Riempimento} dice {Shader}, oppure {Shader, animato} quando cambia nel tempo.

::: fields
- **Velocità**: quanto veloce scorre il suo tempo, da −10 a 10 volte. 1 è come lo faceva scorrere la pagina, 0 lo tiene fermo, e sotto lo 0 scorre all’indietro.
- **Istante**: il secondo del suo tempo che il design mostra, dove 0 è l’istante in cui è arrivato. Un film lo fa partire da qui.
- **Usa l’immagine**: toglie gli shader e lascia l’immagine ferma con cui il canvas è arrivato. Il suo suggerimento: “Mostra l’immagine con cui è arrivato, ferma, al posto di ciò che disegnano i suoi shader.” È un solo passo in {Modifica › Annulla}, che riporta gli shader.
:::

Una modifica a uno dei due numeri è un passo con il nome {Modifica shader}. Il design mostra il riempimento al suo {Istante}, fermo; si muove mentre un film viene riprodotto in [Anima](/docs/animate.html), dove anche ognuno dei suoi input si può cambiare nel tempo.

::: mac
Alcuni riempimenti shader si costruiscono sui propri fotogrammi precedenti: scie, increspature, una simulazione. Il design mostra un riempimento così come la pagina lo avrebbe disegnato subito dopo, e {Istante} lo porta avanti da lì a passi, con la stessa frequenza con cui disegnava la pagina. Un istante mostra sempre la stessa immagine, comunque tu ci arrivi.
:::

> [!windows]
> Un riempimento shader che disegna in più passaggi (vedi [Sfondi WebGL vivi](/docs/import.html#web-shaders)) su un Mac resta vivo. Bezzle per Windows mostra la sua immagine, ferma, nel design e in un film.

## Il menu del riempimento {#fill-menu}

Il menu del riempimento si apre dal campione di un riempimento o di un bordo. In alto scegli con cosa colorarlo:

- **Pieno**: un colore, scelto come qualsiasi colore.
- **Lineare**: colori che sfumano lungo una linea.
- **Radiale**: colori che si allargano da un punto.
- **Foto**: offerta per il primo riempimento di un livello e per ogni bordo, e sempre quando c’è già un’immagine.

Una sfumatura nuova parte dal colore che c’era: da quel colore a una sua tonalità, più scura quando il colore è chiaro e più chiara quando è scuro, dritta dall’alto in basso del livello. Su una linea va da un capo all’altro, a partire da dove la linea comincia. Una sfumatura radiale parte dal centro del livello e arriva ai suoi lati: un cerchio in un livello quadrato, un’ellisse larga in uno largo. Passare da {Lineare} a {Radiale} e viceversa mantiene i colori, e tornare a {Pieno} mantiene il primo.

{Foto} chiede un file immagine; se annulli, il riempimento resta com’era. Finché un’immagine riempie il livello, il menu lo dice e offre {Scegli un’altra immagine…}; scegliere {Pieno}, {Lineare} o {Radiale} colora invece il livello in quel modo. Puoi anche trascinare un file immagine dal Finder sul campione di un riempimento o di un bordo: il campione si evidenzia, e quando lasci andare colora con quell’immagine. Altro sulle immagini in [Immagini e foto](/docs/pictures.html).

### La barra della sfumatura {#gradient-bar}

Per una sfumatura, il menu dispone i suoi colori lungo una barra, ogni colore come un piccolo campione, con il selettore colore sotto la barra per quello scelto.

::: fields
- **Scegliere un colore**: fai clic sul suo campione sulla barra. Viene cerchiato, e il selettore sotto lo cambia.
- **Spostare un colore**: trascina il suo campione lungo la barra. Può superare gli altri; resta quello scelto.
- **Aggiungere un colore**: fai clic sulla barra dove lo vuoi. Arriva con il colore che la sfumatura ha già in quel punto, quindi non cambia niente finché non ne scegli un altro.
- **Togliere un colore**: trascina il suo campione in su o in giù fuori dalla barra e lascia andare, o premi {{⌫}}. Una sfumatura tiene almeno due colori; quando ne restano due, il Mac emette un suono.
:::

Finché il menu del riempimento è aperto su una sfumatura, {{⌫}} toglie il colore scelto, mai il livello, così un gesto sbagliato non può eliminare ciò su cui stai lavorando. Ogni colore può essere trasparente, con la barra della trasparenza del selettore.

### Le maniglie della sfumatura sulla tela {#gradient-handles}

Finché il menu del riempimento è aperto su una sfumatura e un solo livello è selezionato, le maniglie della sfumatura stanno sopra il livello sulla tela. Fare clic su di esse lascia aperto il menu, così puoi passare dall’uno alle altre.

Una sfumatura lineare mostra la linea lungo cui corre, il primo colore a un capo e l’ultimo all’altro:

- **Trascina un capo** per ruotare la sfumatura e allungarla. Tieni premuto {{⇧}} per tenere la linea a passi di 15°.
- **Fai clic su un capo** per sceglierne il colore nel menu.
- **I colori intermedi** sono punti più piccoli sulla linea. Fai clic su uno per sceglierlo, trascinalo lungo la linea per spostarlo, o trascinalo via dalla linea e lascia andare per toglierlo.
- **Fai clic sulla linea** per aggiungervi un colore.

Una sfumatura radiale mostra il suo centro, una linea fino alla fine del raggio e un anello tratteggiato fin dove si allarga:

- **Trascina il centro** per spostare la sfumatura.
- **Trascina la fine del raggio** per ruotarla e allungarla, con {{⇧}} per passi di 15°.
- **Trascina il rombo sull’anello**, perpendicolare al raggio, per rendere la sfumatura più larga o più stretta.
- **Trascina il rombo all’angolo**, oltre l’anello, per ridimensionarla nelle due direzioni insieme, come ridimensioni un livello dal suo angolo; tieni premuto {{⇧}} per mantenerne la forma. Puntandolo vedi i due lati del quadrato in cui sta l’anello.
- I colori intermedi, e i clic sulla linea, funzionano come per una sfumatura lineare.

Una sfumatura è collocata nel riquadro del livello stesso, quindi si allunga, ruota e si riflette con il livello. Prima del primo colore e dopo l’ultimo, quei colori proseguono fino ai bordi; fuori dall’anello di una sfumatura radiale, l’ultimo colore riempie il resto.

### Metodi di fusione {#blend}

Il menu {Fusione} sulla prima scheda Riempimento di una forma stabilisce come l’intero livello, riempimenti, bordi e ombre insieme, si mescola con ciò che sta sotto. Passa su un metodo nel menu per vederlo sulla tela prima di sceglierlo. Il menu raccoglie i metodi in sei gruppi:

- {Normale}, il livello disegnato così com’è sopra ciò che sta sotto.
- {Scurisci}, {Moltiplica}, {Brucia colore}, {Brucia lineare}: più scuro.
- {Schiarisci}, {Scolora}, {Colore scherma}, {Scherma lineare}: più chiaro.
- {Sovrapponi}, {Luce soffusa}, {Luce intensa}: più contrasto.
- {Differenza}, {Esclusione}: l’uno sottratto all’altro.
- {Tonalità}, {Saturazione}, {Colore}, {Luminosità}: una parte del colore dal livello, il resto da ciò che sta sotto.

{Brucia lineare} e {Scherma lineare} sono i metodi che Photoshop chiama Brucia lineare e Scherma lineare (aggiungi). Il testo non ha metodo di fusione.

## Bordi {#borders}

Un bordo corre lungo il contorno di una forma. Chiusa, la scheda dice quanto è spesso, dove sta, se è tratteggiato e se è colorato con una sfumatura o un’immagine, come `2 pt · All’esterno · Tratteggiato`.

::: fields
- **Il trascinamento**: lo spessore, da 0 a 12 punti (o fino al valore attuale, quando è più spesso), a mezzi punti, con una sosta a 1, 2 e 4. Oltre lo zero, il bordo sparisce.
- **Sottile**, **Medio**, **Spesso**, **Tratteggiato**: 1, 2 e 4 punti, continuo; oppure tratteggiato allo spessore che ha, ogni tratto lungo il doppio dello spessore (almeno 4 punti) e ogni vuoto altrettanto.
- **Il colore**: un colore, oppure una sfumatura o un’immagine scelte nel [menu del riempimento](#fill-menu), come per un riempimento.
- **Peso**: lo spessore in punti, da 0 a 1000.
- **Tratto**, **Vuoto**: la lunghezza di ogni tratto e di ogni vuoto tra i tratti, in punti. Un tratto di 0 disegna una linea continua. Scrivere un tratto mentre il vuoto è 0 rende il vuoto altrettanto lungo.
- **All’interno**, **Centrato sul contorno**, **All’esterno**: dove sta il bordo rispetto al contorno, in tre piccole anteprime.
:::

Un bordo all’interno sta tutto dentro il contorno, quindi il livello non va oltre il suo riquadro; uno centrato sta metà dentro e metà fuori; uno all’esterno sta tutto oltre. Su un tracciato non chiuso, il bordo sta sempre a cavallo della linea, qualunque posizione indichi. I tratteggi hanno estremità piatte; un bordo continuo su un tracciato aperto le ha arrotondate.

Una sfumatura su un bordo è collocata nel riquadro del livello come quella di un riempimento. Un’immagine su un bordo copre tutto ciò che il bordo può raggiungere: il riquadro del livello e, oltre, fin dove il bordo sta all’esterno.

Il pulsante tratteggiato {Bordo} aggiunge un bordo interno di 1 punto, in `#706E69` la prima volta, oppure com’era il bordo prima che fosse tolto. Il + su una scheda Bordo aperta ne disegna un altro sopra: un anello del colore del bordo superiore, più tenue, di almeno 2 punti, dall’altra parte del contorno (all’esterno quando quello superiore è all’interno o centrato, all’interno quando è all’esterno), così si vedono entrambi.

Intorno a un’immagine a cui è stato tolto lo sfondo, un bordo segue il contorno del soggetto, come il bordo di un adesivo. Per trasformare un bordo in una forma a sé, usa [Converti bordo in forma](/docs/shapes.html#outline-border).

### I tratti di una linea {#line-strokes}

Una linea è tutta bordo: i suoi tratti stanno sulle schede {Linea}. Funzionano come i bordi, senza posizione, perché una linea non ha un interno; un tratto non è mai più sottile di 0,5 punti, e il primo tratto di una linea non si può togliere. Il + su una scheda Linea aggiunge un tratto più fine lungo il centro di quello superiore, largo circa un terzo, bianco sopra una linea scura e nero sopra una chiara. Una linea nuova ha un tratto di 1 punto in `#706E69`.

## Ombre {#shadows}

Un’ombra cade sotto un livello e oltre i suoi bordi, oppure al suo interno, come se il livello fosse premuto nella pagina. Chiusa, la scheda si chiama {Ombra} o {Ombra interna} e indica il preset, o dà i numeri, come `Y 4 · S 12`.

::: fields
- **Il trascinamento**: quanto l’ombra solleva il livello, da niente attraverso ogni preset fino a {Fluttuante}, fondendo due preset nei punti intermedi. Mantiene il colore dell’ombra, quanto cade di lato e se cade all’interno.
- **All’esterno**, **All’interno**: sotto il livello, o dentro. Una linea non ha un interno, quindi le ombre di una linea cadono sempre sotto. Un preset diventa quello corrispondente dall’altra parte ({Morbida} diventa {Premuta}); un’ombra regolata a mano mantiene i suoi numeri.
- **I preset**: quattro sotto il livello, quattro all’interno (sotto).
- **Il colore**: il colore e la trasparenza dell’ombra. I preset regolano la trasparenza e mantengono il colore.
- **X**, **Y**: di quanto l’ombra cade a destra e in basso, in punti, da −1000 a 1000.
- **S**: quanto è morbida, la sua sfocatura, da 0 a 1000.
- **Diffusione**: su rettangoli, ellissi, tracciati e linee, di quanto l’ombra è proiettata più grande del livello (sotto).
:::

| Sotto il livello | Y | Sfocatura | Opacità | All’interno del livello | Y | Sfocatura | Opacità |
|---|---|---|---|---|---|---|---|
| {Leggera} | 1 | 3 | 14% | {Incisa} | 1 | 2 | 14% |
| {Morbida} | 4 | 12 | 14% | {Premuta} | 2 | 6 | 16% |
| {Sollevata} | 10 | 28 | 18% | {Incassata} | 4 | 12 | 20% |
| {Fluttuante} | 24 | 56 | 22% | {Profonda} | 8 | 24 | 26% |

Ogni preset cade dritto in basso, senza X e senza diffusione. Il pulsante tratteggiato {Ombra} aggiunge {Morbida} sotto il livello. Quando un livello ha già un’ombra sotto, il pulsante offre invece {Ombra interna}, che aggiunge {Premuta}. Il + su una scheda Ombra aperta ne aggiunge un’altra dalla stessa parte: sotto il livello, una {Leggera} ravvicinata che lo appoggia sulla pagina, cosa che un’ombra morbida lontana non sa fare da sola; all’interno, una sottile linea {Incisa} lungo il bordo superiore.

### Spostare un’ombra sulla tela {#shadow-on-canvas}

Con un solo livello selezionato, punta la sua ombra dove si vede fuori dal livello: il puntatore diventa una mano e il contorno dell’ombra appare tratteggiato. Trascinala dove deve cadere; un’etichetta ne mostra X e Y mentre la sposti, e {{⇧}} tiene il trascinamento dritto in orizzontale o in verticale. Il trascinamento sposta l’ombra la cui scheda è aperta, altrimenti la prima sotto il livello. Un clic senza trascinare seleziona ciò che sta sotto il puntatore, come ovunque. Funziona per ogni livello tranne una linea, purché non sia bloccato né ruotato in profondità.

### Diffusione {#spread}

La diffusione proietta l’ombra dal contorno del livello allargato tutt’intorno di tanti punti, o ristretto sotto lo 0. Gli angoli vivi restano vivi e quelli arrotondati si arrotondano di più. All’interno del livello, la diffusione restringe la cavità intorno a cui l’ombra è proiettata, così l’ombra arriva più dentro. La diffusione di una linea rende più spesso il tratto che proietta, e quella di un’immagine scontornata allarga il contorno del soggetto. Testi e gruppi non hanno diffusione.

### Come cadono le ombre {#shadow-light}

La luce sta sopra la pagina, quindi un’ombra cade nello stesso modo comunque il suo livello sia ruotato. Più ombre vengono proiettate ognuna per conto suo, la prima in basso. Le ombre interne stanno sopra i riempimenti e sotto i bordi, come una cavità sta dentro il suo orlo. Le ombre di un testo o di un gruppo sono proiettate da ciò che disegna: le lettere, o i livelli che contiene. Un’immagine a cui è stato tolto lo sfondo proietta le ombre solo dal soggetto.

## Sfocatura {#blur}

Una sfocatura ammorbidisce il livello stesso, o ciò che gli sta dietro, come fa il vetro smerigliato. Chiusa, la scheda dice quanto, con il nome del preset e il numero, con {Sfondo} per una sfocatura di ciò che sta dietro e {Progressiva} per una che cresce lungo il livello.

::: fields
- **Il trascinamento**: quanto, da 0 a 40 (o fino al valore attuale, quando è di più), con una sosta su ogni preset. Oltre lo zero, la sfocatura sparisce.
- **Il livello**, **Lo sfondo**: se viene sfocato il livello stesso o ciò che gli sta dietro, visto attraverso il suo contorno. Solo rettangoli, ellissi e tracciati possono sfocare ciò che sta dietro.
- **Lieve**, **Morbida**, **Forte**, **Intensa**: sfocature di 3, 8, 16 e 32.
- **Uniforme**, **Progressiva**: sfocato in modo uniforme, o che cresce da nitido a sfocato lungo il livello (sotto).
- **Quantità**: quanto, da 0 a 500. Si misura come Adobe XD misura le sue sfocature, così un design portato da XD appare com’era.
- **Luce**: per una sfocatura dello sfondo, da −100% a 100%: sopra lo 0 schiarisce ciò che si vede attraverso, sotto lo 0 lo scurisce.
- **Riempimento**: per una sfocatura dello sfondo, quanto dei riempimenti del livello sta sopra la sfocatura, da 0 a 100%.
:::

Una sfocatura del livello sfoca tutto ciò che disegna, anche la sua ombra. Una sfocatura dello sfondo mostra, sfocato e dentro il contorno del livello, ciò che sta dietro il livello sulla sua tavola; su una tavola che ritaglia il contenuto, ciò che sta sul bordo della tavola prosegue verso l’esterno, così la sfocatura non sbiadisce lì. Il suo {Riempimento} parte da 0%, quindi all’inizio si vede solo il vetro smerigliato: alza {Riempimento} per stendere sopra il colore del livello, come un vetro colorato.

Il pulsante tratteggiato {Sfocatura} aggiunge {Morbida} al livello stesso. Passare a {Lo sfondo} mantiene la quantità.

### Una sfocatura progressiva {#growing-blur}

{Progressiva} rende la sfocatura nitida in un punto e piena in un altro, e oltre l’uno e l’altro resta com’è. Parte nitida sul terzo superiore del livello e sfoca verso il bordo inferiore. Un riquadro sotto l’interruttore mostra il livello in piccolo, con i suoi segni sfocati come lo sarà il livello, un anello dove è nitida e un punto dove la sfocatura è piena:

- **Trascina l’anello o il punto** per spostarlo.
- **Trascina in un altro punto del riquadro** per ridisegnare la sfocatura, a partire da dove hai cominciato a premere.
- Tieni premuto {{⇧}} per tenerla a passi di 45°.
- **Fai doppio clic sul riquadro** per sfocare di nuovo verso il basso.

I quattro preset accanto, {Verso il basso}, {Verso l’alto}, {Verso sinistra} e {Verso destra}, sfocano verso un bordo. L’anello e il punto possono stare fino a un quarto del livello oltre i suoi lati, e sono collocati nel riquadro del livello stesso, quindi la sfocatura si allunga e ruota con lui. I livelli sulla tela seguono il riquadro mentre trascini.

## Opacità {#opacity}

La scheda {Opacità} sbiadisce l’intero livello: riempimenti, bordi e ombre insieme, come un tutt’uno. Trascina sopra di essa da 0 a 100%, con una sosta a ogni quarto; scegli uno dei quattro quarti, 25%, 50%, 75% e 100%, disegnati come anelli riempiti fino a quel punto; o scrivi una percentuale nel suo campo. L’opacità non si può togliere, solo riportare al 100%.

La trasparenza di un riempimento, regolata sulla sua scheda Riempimento o nel selettore, è un’altra cosa: rende trasparente quel solo colore e lascia il bordo e l’ombra come sono.

## Angoli {#corners}

La scheda {Angoli} di un rettangolo ne arrotonda gli angoli, da vivi fino a una pillola, come archi semplici o come squircle, e i punti dentro gli angoli di un rettangolo selezionato li arrotondano direttamente sulla tela. Entrambi sono descritti in [Forme, tracciati e penna](/docs/shapes.html#corners).

## 3D: profondità e prospettiva {#depth}

{3D} solleva un livello dalla pagina, come tieni in mano un biglietto per guardarlo: inclinato indietro o in avanti, girato di lato, avvicinato o allontanato, in vera prospettiva. Funziona su ogni livello tranne una tavola da disegno: forme, testo, immagini e gruppi interi.

Una tavola da disegno è la pagina, e tutto ciò che ci sta sopra è un’unica scena: tutti i suoi livelli sono visti dallo stesso punto, e un livello tenuto più vicino copre uno tenuto più lontano. Vedi [Una tavola è una scena](#perspective).

### La scheda 3D {#depth-card}

Il pulsante tratteggiato {3D} solleva un poco il livello, girato verso sinistra: inclinato di 16° e girato di −22°. Chiusa, la scheda dà i due angoli, come `16°, −22°`, oppure dice {Angoli fissati} per un livello [fissato per gli angoli](#pinned-corners).

::: fields
- **Il trascinamento**: inclina di più il livello, da piano fino a 60°, nella direzione in cui è già girato; da piano, nella direzione in cui lo gira il pulsante. Oltre lo zero, il 3D sparisce.
- **Il riquadro**: un piccolo biglietto che guarda ovunque punti. Al centro è di fronte, in piano nella pagina; l’anello tratteggiato intorno è di taglio. Trascina in un punto qualsiasi per orientare lì il livello, o trascina la manopola senza che salti. I livelli sulla tela ruotano con lui mentre procedi. Tieni premuto {{⇧}} per passi di 15°, e fai doppio clic sul riquadro per rimettere il livello in piano. Il riquadro non gira un livello oltre 85°, poco prima che sia di taglio.
- **X**: i gradi di cui il livello è inclinato indietro intorno al suo centro, con la parte alta che si allontana sopra lo 0, da −180° a 180°.
- **Y**: i gradi di cui è girato di lato, con il lato destro che si allontana sopra lo 0, da −180° a 180°.
- **Z**: i punti di cui è avvicinato, o allontanato sotto lo 0, da −10.000 a 10.000.
:::

La piccola anteprima sulla scheda chiusa è la rotazione del livello stesso: illuminata dall’alto, più scura man mano che la faccia si gira, e grigia quando ne vedi il retro. La × toglie il 3D e rimette il livello in piano e dritto.

### Ruotare in profondità sulla tela {#depth-on-canvas}

Un livello ruotato in profondità mostra una manopola su un breve stelo che parte dal suo centro, rivolta dove è rivolta la sua faccia. Compare quando un solo livello è selezionato con lo strumento {Selezione}, il livello non è bloccato ed è largo almeno 40 punti sullo schermo.

- **Trascina la manopola** per orientare la faccia: la segue, come una testa si gira dove viene guidato il naso. Punta prima la manopola e un anello tratteggiato mostra dove la faccia si vedrebbe di taglio.
- **Tieni premuto {{⌥}}** mentre trascini la manopola per avvicinare invece il livello, trascinando in su, o allontanarlo, trascinando in giù. Qualsiasi livello si può avvicinare o allontanare così mentre lo sposti: vedi [Avvicinare e allontanare mentre sposti](#depth-push).
- **Tieni premuto {{⇧}}** per passi di 15°. Passando per la posizione di fronte, il livello si assesta in piano.
- **Fai doppio clic sulla manopola** per rimettere il livello in piano.

Appena fuori dal centro di un lato qualsiasi della selezione, il puntatore mostra che ruota le cose in profondità. Trascina lì per ruotare tutto ciò che è selezionato, in piano o no, come una palla gira sotto la mano: la faccia va dove va il puntatore, e puoi continuare oltre la posizione di taglio. I livelli che stanno insieme ruotano come [un corpo solo](#depth-body); i livelli che stanno separati ruotano allo stesso modo, ognuno intorno al proprio centro. Tieni premuto {{⇧}} per ruotare intorno a un solo asse, a passi di 15°, e premi {{Esc}} per rimettere tutto com’era. Un clic lì senza trascinare seleziona ciò che sta sotto il puntatore. Mentre ruoti, un’etichetta mostra gli angoli, come `X 16°  Y −22°`, la vicinanza, o quanti livelli stanno ruotando.

Le maniglie di un livello ruotato in profondità lo ridimensionano ancora: la tirata è misurata sul livello come starebbe in piano, quindi cresce lungo i suoi lati.

### Più livelli, un corpo solo {#depth-body}

Più livelli selezionati che stanno insieme, su una tavola o in un gruppo su di essa, ruotano in profondità come un corpo solo: una card con il suo pulsante e le sue parole, le facce di una scatola. Girano intorno al centro del riquadro che li contiene tutti, e ognuno finisce dove sarebbe la faccia di un corpo vero: spostato, più in alto o più in basso, e rivolto da un’altra parte. Ruotali partendo appena fuori da un lato della selezione, come [sopra](#depth-on-canvas), e il corpo ruota intorno a quel centro, da dove stava quando è cominciato il trascinamento.

Le facce di un corpo mantengono il loro ordine. I livelli ruotati in modo da essere rivolti dalla stessa parte si coprono l’un l’altro come fanno le facce parallele, a seconda di quanto ognuno sta davanti, così un pulsante resta sulla sua card quando tutti e due vengono girati, anche se allora il suo centro sta più in basso di quello della card.

Del corpo non resta niente nel design: ogni livello tiene il posto in cui sta e il modo in cui è ruotato. Seleziona di nuovo gli stessi livelli per continuare a ruotarli, o raggruppali per farne una cosa sola per sempre. I livelli che non stanno su nessuna tavola, o che stanno uno in ciascuno di più gruppi, ruotano ognuno intorno al proprio centro.

La scheda {3D} legge un corpo dalla sua faccia più grande:

- **Chiusa,** la scheda dà gli angoli di quella faccia, e la sua piccola anteprima e il suo riquadro mostrano la rotazione di quella faccia.
- **Il trascinamento, il riquadro, {X} e {Y}** ruotano l’intero corpo: la faccia più grande va dove la orienti, e il resto va con lei.
- **{Z}** solleva l’intero corpo di quanto si muove la sua faccia più grande.
- **Un doppio clic sul riquadro** rimette il corpo in piano, dov’era prima di essere ruotato. La × fa lo stesso prima di togliere il 3D.
- **Il pulsante tratteggiato {3D}** solleva più livelli come un corpo solo.

Ognuno è un solo passo in {Modifica › Annulla}.

### Avvicinare e allontanare mentre sposti {#depth-push}

Qualsiasi livello si può avvicinare o allontanare mentre lo sposti, ruotato o no. Comincia a spostare i livelli selezionati con lo strumento {Selezione}, poi tieni premuto {{⌃|Alt}}: il puntatore diventa una freccia in su e in giù, e ora trascinando in su avvicini i livelli, trascinando in giù li allontani, un punto di altezza per ogni punto percorso dal puntatore. Sulla pagina restano dove sono. Lascia il tasto e il trascinamento riprende a spostarli sulla pagina da dove si trova il puntatore, così niente salta, per quante volte tu prema il tasto durante un solo trascinamento.

- **Un’etichetta** mostra l’altezza mentre procedi, come `Z 40`: i punti sopra la pagina, oppure sotto di essa quando il numero è sotto lo 0. Con più livelli tenuti ad altezze diverse, mostra di quanto si sono spostati tutti, come `+40`.
- **L’altezza si ferma un attimo** sulla pagina, che è 0, e sulle altezze dei livelli che stanno accanto a quelli che sposti, così è facile portare i livelli alla stessa altezza.
- **Tieni premuto {{⇧}}** per passi di dieci punti.

Uno spostamento che ha cambiato solo l’altezza è {Sposta in profondità} in {Modifica › Annulla}. L’altezza è il valore {Z} della [scheda 3D](#depth-card) del livello, dove puoi anche scriverla. Un livello che è solo tenuto a un’altezza, senza essere ruotato, non mostra la manopola.

> [!windows] Alt, a trascinamento avviato
> Premi {{Alt}} dopo che il trascinamento è cominciato. Se lo tieni premuto già quando premi, Alt sposta una copia, come fa sempre.

### Una tavola è una scena {#perspective}

Tutto ciò che sta su una tavola è visto da un solo punto: dritto davanti al centro della tavola, a una distanza doppia del suo lato più lungo, e mai più vicino di 600 punti. Così i livelli che ci stanno sopra hanno un unico punto di fuga, come le cose su un tavolo:

- **Un livello avvicinato** si ingrandisce, e intanto si sposta dal centro della tavola verso l’esterno. Uno allontanato rimpicciolisce verso il centro.
- **I livelli ruotati allo stesso modo** pendono verso lo stesso punto, quindi la stessa rotazione appare diversa a sinistra di una tavola rispetto a destra.
- **Ciò che è più vicino copre ciò che è più lontano,** qualunque sia l’ordine nell’elenco dei livelli. I livelli tenuti alla stessa altezza mantengono l’ordine dell’elenco, quindi un design in cui niente è stato avvicinato o allontanato si disegna come si è sempre disegnato.
- **Un gruppo è un solo biglietto nella scena.** Ciò che contiene è ordinato al suo interno, per altezza e poi secondo l’elenco, e il gruppo nel suo insieme prende posto tra i livelli che ha intorno, a meno che non [mantenga la profondità dei suoi livelli](#keeps-depth).
- **Lo sfondo della tavola è la pagina.** Un livello allontanato fin sotto la pagina non ne viene nascosto: si vede sulla pagina, più piccolo, sotto tutto ciò che è tenuto più in alto.

Un livello che non sta su nessuna tavola è visto per conto suo, dritto davanti al proprio centro, come lo vede la prospettiva CSS di un browser: il suo centro resta dov’è, ed è visto da una distanza doppia della sua grandezza, mai da più vicino di 600 punti.

Avvicinare un livello si ferma al 40% della distanza dall’occhio, così nessuna sua parte arriva mai all’occhio.

Un’ombra sotto un livello in profondità cade dalla forma che il livello disegna sulla pagina, con la luce sopra la pagina come sempre. Un’ombra interna fa parte della sua faccia, e ruota con lei. Un gruppo ruotato in profondità ruota tutto ciò che contiene. Una forma ruotata in profondità non può contenere livelli come [maschera](/docs/pictures.html#masks).

In [Anima](/docs/animate.html#camera-depth), la camera del film sta a riposo dove si trova quest’occhio, quindi un film ha l’aspetto del design finché la sua camera non si muove. Lì, {{⌃|Alt}} tenuto premuto mentre sposti un livello lo solleva nel tempo.

### Guardare di lato {#depth-look}

Mentre progetti, puoi guardare una tavola di lato, per vedere quanto sta in alto ogni livello. Tieni premuto {{⌃|Alt}} e trascina da un punto vuoto accanto ai livelli: ciò che è staccato dalla pagina va con il puntatore, come se prendessi la scena e la girassi, fino a 60° di lato, in su o in giù. Vicino alla vista di fronte, lo sguardo si aggancia lì. Un’etichetta mostra da che parte guardi e di quanto, come `→ 20°  ↓ 10°`. Tieni premuto {{⇧}} per passi di 5°.

La pagina non viene ruotata. Si muove solo l’occhio, come quando sposti la testa davanti a una finestra, quindi la tavola e tutto ciò che vi sta in piano restano dove sono, e ogni strumento funziona come sempre. Ciò che è staccato dalla pagina si vede dove lo vede l’occhio spostato, con un paletto sotto ognuno dei suoi angoli, fin giù dove starebbe in piano. Quando alcuni di quei livelli sono selezionati, solo loro hanno i paletti.

Per guardare di nuovo di fronte, fai clic su {Guarda di fronte} accanto all’angolo in alto a destra della tavola, fai clic su un punto vuoto tenendo premuto {{⌃|Alt}}, o premi {{Esc}} senza nulla selezionato. {{Esc}} durante il trascinamento rimette lo sguardo com’era.

Lo sguardo è un modo di vedere e non fa mai parte del design: non viene salvato, e non è un passo in {Modifica › Annulla}. Ogni tavola ha il suo. Finisce quando passi a Prototipo, Ispeziona o Anima, e le esportazioni, i video, le miniature e le immagini chieste da un assistente IA sono sempre di fronte. La scheda {3D} te lo ricorda: “Tenendo premuto {mac:Ctrl}{win:Alt} e trascinando accanto ai livelli, guardi una tavola da disegno di lato.”

> [!windows]
> In Bezzle per Windows, uno sguardo di lato non si può cominciare in un design in sola lettura, o mentre guardi indietro alle sue versioni.

### Gruppi che mantengono la profondità dei loro livelli {#keeps-depth}

Un gruppo è un solo biglietto nella scena: ciò che contiene viene disegnato sul biglietto, e poi il biglietto viene ruotato e messo al suo posto. La scheda {3D} di un gruppo ha un interruttore sotto i suoi numeri, {I livelli mantengono la profondità}. Quando è attivo, ciò che il gruppo contiene sta nella scena della tavola livello per livello, dove lo mettono la rotazione e l’altezza del gruppo, ed è ordinato tra tutto ciò che sta accanto al gruppo: un livello più vicino ne copre uno più lontano anche oltre il confine del gruppo. È ciò che fa `transform-style: preserve-3d` in CSS, ed è ciò che [Ispeziona](/docs/inspect.html#css) scrive per un gruppo così.

- **Un solo biglietto comunque,** come in CSS, quando si fa qualcosa al gruppo nel suo insieme: una maschera, un’opacità sotto il 100%, una sfocatura, un’ombra o un metodo di fusione. Lo stesso vale per una griglia di ripetizione, per un gruppo fissato per gli angoli e per un gruppo che ha direttamente al suo interno una sfocatura dello sfondo.
- **Fuori da ogni tavola** non c’è una scena, e il gruppo è un biglietto.
- **Un clic** su un livello al suo interno seleziona il gruppo, e un doppio clic il livello, come in ogni gruppo.
- **In un film,** un gruppo così si scompone nei suoi livelli finché non ha fotogrammi chiave propri, così la camera vede tra l’uno e l’altro mentre si muove. Con fotogrammi chiave propri è un solo biglietto.
- **Esportato come SVG,** un gruppo di questo tipo ruotato o sollevato viene scritto come un’unica immagine, giusto al suo interno ma non ordinato tra i livelli che ha accanto. PNG, JPEG, PDF e video lo mostrano come lo mostra la tela.
- **Una versione precedente di Bezzle** legge il gruppo come un solo biglietto.

Attivare l’interruttore è {Mantieni i livelli in profondità} in {Modifica › Annulla}, e disattivarlo {Disegna come un’unica scheda}.

### Angoli fissati {#pinned-corners}

Un livello si può anche fissare per gli angoli, come un’immagine stesa su uno schermo visto di sbieco in una foto. Gli schermi di un mockup di Photoshop arrivano così (vedi [Importare i design](/docs/import.html)), e un’immagine lasciata cadere su uno di essi entra con l’angolazione dello schermo. Finché un livello fissato non è anche ruotato, trascina una delle sue maniglie d’angolo per spostare quell’angolo dove vuoi, o la maniglia di un lato per spostare con lei i due angoli di quel lato; una tirata che piegherebbe il livello su sé stesso non viene accettata. Togliere il 3D lo rimette dritto.

## Cosa si disegna sopra cosa {#drawing-order}

Un livello si disegna in quest’ordine, dal basso verso l’alto:

1. Le ombre sotto di lui, ognuna per conto suo, la prima in basso.
2. Una sfocatura di ciò che gli sta dietro, quando ce l’ha, poi i suoi riempimenti, il primo in basso.
3. Le ombre interne.
4. I bordi, il primo in basso.

Opacità e metodo di fusione si applicano poi a tutto come un tutt’uno, quindi un riempimento e il suo bordo sbiadiscono insieme e proiettano un’unica ombra. Una sfocatura del livello lo sfoca tutto, e un livello in profondità si disegna in questo modo in piano, poi viene ruotato al suo posto. La tela, le miniature della Home e ogni esportazione si disegnano allo stesso modo, quindi coincidono al punto.

I livelli che stanno insieme si disegnano uno sopra l’altro come li mostra l’elenco dei livelli, quello più in alto nell’elenco sopra gli altri. Su una tavola, un livello tenuto più vicino di quelli con cui sta si disegna comunque sopra di loro, e uno tenuto più lontano sotto di loro (vedi [Una tavola è una scena](#perspective)).

## Aspetti con un nome {#styles}

Quando il design ha stili di un certo tipo, le schede {Riempimento}, {Bordo} e {Ombra} aperte li offrono per primi, e una scheda che mostra uno stile ne dice il nome invece dei numeri. Gli stili sono colori, ombre, testo e angoli con un nome, uguali ovunque siano usati, e un aspetto con un nome può avere un proprio aspetto scuro. Vedi [Componenti, stili e librerie](/docs/components.html) e [Chiaro e scuro](/docs/dark.html).
