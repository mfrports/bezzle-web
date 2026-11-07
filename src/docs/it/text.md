---
title: Testo
nav: Testo
lede: Componi parole in qualsiasi font del tuo Mac, da una singola etichetta a paragrafi ed elenchi, dai uno stile a singole lettere, piega il testo lungo una curva o una forma, e trasformalo in contorni.
---

Il testo in Bezzle si comporta come in Adobe XD: un clic crea una riga che cresce mentre scrivi, un trascinamento crea un riquadro che va a capo. Ogni testo ha nell’ispettore una scheda {Testo} per il suo carattere, il menu {Formato} dà uno stile a singole parole, e ciò che vedi mentre scrivi è esattamente ciò che viene disegnato ed esportato.

## Lo strumento Testo {#text-tool}

Premi {{T}}, o scegli {Testo} nella barra degli strumenti. Il puntatore diventa un cursore di testo.

### Un clic: testo a larghezza automatica {#click}

Fai clic in un punto qualsiasi e comincia a scrivere. Il testo è in {Larghezza automatica}: diventa largo quanto le sue parole, e le sue righe vanno a capo solo dove premi {{Return}}. Il clic segna dove comincia la linea di base della prima riga: alla sua estremità sinistra per un testo allineato a sinistra, al suo centro per un testo centrato, alla sua estremità destra per un testo allineato a destra.

### Un trascinamento: un riquadro che va a capo {#drag}

Trascina un riquadro e scrivici dentro. Il testo è in {Altezza automatica}: tiene la larghezza che hai trascinato, manda a capo le parole a quella larghezza e cresce in altezza a ogni riga. Un riquadro trascinato più stretto di 20 punti diventa invece un testo in {Larghezza automatica}.

### Lo strumento resta in mano {#tool-stays}

Dopo un testo, lo strumento Testo è ancora in mano: fai di nuovo clic per il successivo. Premi {{Esc}} per smettere di scrivere, e di nuovo {{Esc}} per posare lo strumento.

- **Un nuovo testo somiglia al testo selezionato.** Con un testo selezionato, il successivo che crei ne prende font, dimensione, spaziatura, allineamento e colore.
- **Un clic su un testo ti fa scrivere al suo interno**, con tutte le sue parole selezionate. Un trascinamento, sopra un testo o no, crea sempre un testo nuovo.
- **Le maniglie del testo selezionato** lo ridimensionano anche mentre hai in mano lo strumento Testo.

Un nuovo testo, senza nulla di selezionato a cui somigliare, è composto in SF Pro, il font del Mac, a 24 punti, in un nero morbido (`#1C1B19`), allineato a sinistra.

## Scrivere {#typing}

Per scrivere in un testo che c’è già:

- Fai doppio clic sul testo.
- Selezionalo e premi {{Return}}.
- Fai clic sul testo con lo strumento Testo.

All’inizio tutte le sue parole sono selezionate, quindi ciò che scrivi le sostituisce; fai clic o usa i tasti freccia per mettere il cursore dove vuoi. In un gruppo, il primo doppio clic entra nel gruppo, e il successivo comincia la scrittura.

Per smettere di scrivere, premi {{Esc}} o fai clic in qualsiasi altro punto della tela. Un testo che lasci vuoto viene tolto (tranne in una cella di una griglia di ripetizione o in un post di una pila, dove è il testo di quella cella o di quel post).

- **Annulla mentre scrivi** riporta indietro la scrittura passo dopo passo. Quando smetti, tutto il tempo in cui hai scritto diventa un solo passo nella cronologia del design, chiamato {Digitazione}, o {Aggiungi testo} per un testo nuovo.
- **Incollare** porta dentro solo le parole, con l’aspetto delle lettere che le circondano.
- **Niente cambia alle tue spalle.** Virgolette e trattini restano come li scrivi, e le parole non vengono corrette né sostituite automaticamente.
- **Le maniglie restano.** Il testo selezionato tiene le sue maniglie mentre scrivi: trascinane una per ridimensionare il riquadro, e la scrittura continua dov’era, con le stesse lettere selezionate.
- **Il testo sta fermo.** Comunque sia allineato, le lettere non saltano qua e là mentre scrivi. Un testo centrato in {Larghezza automatica} cresce dal suo centro, e un testo allineato a destra cresce verso sinistra.

In una pila, {{Tab}} passa allo stesso testo nel post successivo (vedi [Pile](/docs/decks.html)).

## Come si dimensionano i riquadri di testo {#sizing}

Ogni testo trova la sua dimensione in uno di tre modi. I tre pulsanti della scheda {Testo} passano dall’uno all’altro: {Larghezza automatica}, {Altezza automatica} e {Fissa}.

### Larghezza automatica {#auto-width}

Largo quanto le sue parole, alto quanto le sue righe. Ha una sola maniglia rotonda, in basso: trascinala per ingrandire o rimpicciolire le lettere, insieme allo spazio tra righe e paragrafi. Lo ruoti da appena fuori dai suoi angoli o da quella maniglia.

### Altezza automatica {#auto-height}

Una larghezza propria, e alto quanto le sue righe. Trascina un lato per mandare a capo le parole a un’altra larghezza. Trascina il bordo superiore, quello inferiore o un angolo, e il riquadro passa a dimensione {Fissa}.

### Dimensione fissa {#fixed-size}

Il riquadro ha la dimensione che gli dai, qualunque spazio occupino le sue parole. Le maniglie cambiano solo il riquadro, mai le lettere. Le sue righe possono stare in alto, al centro o in basso.

Quando un riquadro a dimensione {Fissa} è troppo piccolo per le sue parole, il resto resta nascosto oltre il bordo, e la sua maniglia inferiore diventa rossa. Fai doppio clic sulla maniglia inferiore di qualsiasi testo con una larghezza propria per adattare di nuovo il riquadro alle sue parole: passa ad {Altezza automatica}.

### Cambiare modo, e scrivere una dimensione {#switching-sizing}

| | Larghezza automatica | Altezza automatica | Dimensione fissa |
| --- | --- | --- | --- |
| Mentre scrivi | Si allarga, e cresce in altezza a ogni nuova riga | Va a capo alla sua larghezza, cresce in altezza | Resta com’è |
| Trascinando una maniglia | Le lettere crescono o si riducono con il riquadro | Un lato manda a capo; il bordo superiore, quello inferiore o un angolo lo portano a dimensione fissa | Cambia solo il riquadro |
| Scrivendo in {L} o {A} sulla scheda {Frame} | Le lettere crescono o si riducono, secondo l’altezza se è cambiata, altrimenti secondo la larghezza | Una larghezza manda a capo; un’altezza lo porta a dimensione fissa | Cambia solo il riquadro |

Porta a {Larghezza automatica} un testo che va a capo, e un a capo viene inserito ovunque una riga andava a capo, così appare esattamente come prima. Ridimensionato insieme ad altri livelli, un testo in {Larghezza automatica} cresce secondo l’altezza.

Ingrandire o rimpicciolire le lettere con il riquadro dà al testo un carattere tutto suo: se aveva uno stile di testo con nome, non lo ha più, e lo stile resta com’era ovunque altrove.

## La scheda Testo {#text-card}

Chiusa, la scheda {Testo} indica font e dimensione, come {SF Pro · 24 pt}, o {Vari font} quando i testi selezionati sono diversi. Trascina di lato sopra di essa per cambiare la dimensione, da 1 punto in su; il trascinamento si ferma a 12, 14, 16, 20, 24, 32, 48 e 64. Fai clic per aprirla. Le modifiche vanno a ogni testo selezionato.

::: fields
- **Font**: ogni famiglia di font del tuo Mac, prima SF Pro, ciascuna mostrata nelle sue lettere quando sa scrivere il proprio nome. Passa sopra una famiglia e la tela la prova (tranne mentre ci sono lettere selezionate, che mostrano il font quando lo scegli). Scegliere un’altra famiglia tiene lo stile più vicino a quello che avevi: lo stesso nome se esiste, altrimenti il peso più vicino con la stessa inclinazione.
- **Stile del font**: gli stili della famiglia, come {Regular}, {Medium Italic} o {Bold}. SF Pro ha nove pesi, da {Ultralight} a {Black}, ciascuno dritto e {Italic}.
- **Dimensione**: in punti, da 1 a 2.000.
- **Dimensioni predefinite**: 12, 14, 16, 20, 24, 32, 48 e 64 punti.
- **Allineamento**: {Allinea a sinistra}, {Centra}, {Allinea a destra} e {Giustifica}, che stende da un lato all’altro ogni riga tranne l’ultima di un paragrafo.
- **Sottolinea** ({{⌘U}}), **Barrato** ({{⇧⌘X}}): una linea sotto le lettere, o attraverso.
- **Elenco puntato** ({{⇧⌘8}}), **Elenco numerato** ({{⇧⌘7}}): vedi [Elenchi](/docs/text.html#lists).
- **Maiuscole e minuscole**: {Come digitato}, {Maiuscolo}, {Minuscolo}, {Iniziali maiuscole} o {Maiuscoletto}: come vengono composte le lettere, qualunque cosa sia stata digitata. Maiuscoletto usa i maiuscoletti del font quando li ha, altrimenti compone le minuscole come maiuscole più piccole. Mentre scrivi, vedi le lettere come le hai digitate.
- **Larghezza automatica**, **Altezza automatica**, **Fissa**: come il riquadro trova la sua dimensione (vedi [Come si dimensionano i riquadri di testo](/docs/text.html#sizing)).
- **Righe in alto**, **Righe al centro**, **Righe in basso**: dove stanno le righe nel riquadro. Sceglierne una porta il riquadro a dimensione {Fissa}, perché solo un riquadro così ha spazio in più.
- **Riga**: la distanza da una linea di base alla successiva, in punti. Finché non ne imposti una, mostra l’interlinea propria del font. Lo spazio in più si divide sopra e sotto le lettere, così restano al centro delle loro righe.
- **Lettere**: la spaziatura tra le lettere, in millesimi della dimensione del font, come la contano i type designer: 100 aggiunge un decimo della dimensione tra una lettera e l’altra. Da −500 a 2.000.
- **¶**: lo spazio dopo ogni paragrafo tranne l’ultimo, in punti.
- **Funzioni**: le funzioni OpenType del font (vedi [Funzioni OpenType](/docs/text.html#features)).
- **Font variabile**: per un font variabile, i suoi assi (vedi [Font variabili](/docs/text.html#variable-fonts)).
:::

I campi di dimensione e spaziatura accettano anche somme, e modifiche al valore proprio di ciascun testo come `+2` o `×1.5` (vedi [La tela](/docs/canvas.html)).

### Le lettere o l’intero testo {#letters-or-layer}

Mentre scrivi con alcune lettere selezionate, la scheda dice {Modifica i 5 caratteri selezionati}, e ciò che imposta sulle lettere va solo a quelle: font, stile del font, dimensione, spaziatura tra le lettere, sottolineatura, barrato ed elenchi. Il resto riguarda sempre l’intero testo: allineamento, maiuscole e minuscole, spaziatura tra righe e tra paragrafi, funzioni, assi del font variabile e come si dimensiona il riquadro.

Con il solo cursore mentre scrivi, font, stile del font, dimensione e spaziatura tra le lettere vanno all’intero testo, mentre sottolineatura, barrato ed elenchi vanno a ciò che scrivi dopo (un elenco al paragrafo in cui si trova il cursore). Con il testo soltanto selezionato, tutto va all’intero testo.

### Trovare un font {#font-menu}

Il menu dei font si apre sul font che hai. Comincia a scrivere per restringerlo: prima vengono i font il cui nome comincia con ciò che hai scritto, poi quelli con una parola che comincia così (`new` trova Times New Roman), poi tutti gli altri che lo contengono. Maiuscole, accenti e spazi non contano, quindi funziona anche `timesnew`. La corrispondenza migliore è evidenziata: {{Return}} la sceglie, i tasti freccia scorrono le altre, e la tela prova ciascuna mentre è evidenziata. {{⌫}} toglie una lettera, {{⌥⌫}} tutte, {{⌘V}} incolla un nome, e {{Esc}} cancella ciò che hai scritto prima di chiudere il menu.

Un testo il cui font non è su questo Mac viene disegnato in SF Pro.

### Funzioni OpenType {#features}

Il menu {Funzioni} elenca ciò che il font offre e nient’altro: {Legature}, {Legature rare}, {Alternative contestuali}, {Numeri in stile antico}, {Numeri allineati}, {Numeri tabulari}, {Numeri proporzionali}, {Zero barrato}, {Frazioni}, {Apice}, {Pedice}, {Ordinali}, {Forme per maiuscole}, {Alternative stilistiche}, {Lettere ornate} e {Forme per titoli}, poi i set stilistici e le varianti dei caratteri del font, con i nomi che il font stesso dà loro. Un segno di spunta mostra cosa è attivo; passa sopra una funzione per vedere il testo con quella funzione invertita, e fai clic per tenerla.

{Legature} e {Alternative contestuali} sono attive finché non le disattivi, come i font le intendono. Il titolo del menu conta le funzioni che hai impostato diversamente dal font, come {2 funzioni}. Un font che non ne ha dice {Nessuna funzione}.

### Font variabili {#variable-fonts}

Per un font variabile, come SF Pro, la scheda termina con una riga {Font variabile} che nomina i suoi assi, come peso e larghezza. Resta chiusa finché non ci fai clic, o finché un asse non viene impostato. Aperta, ogni asse ha un campo, tra il minimo e il massimo che il font consente.

## Testo formattato e il menu Formato {#format}

Qualsiasi lettera di un testo può apparire diversa dal resto: una parola in grassetto, un altro colore, una dimensione maggiore. Seleziona le lettere mentre scrivi, poi usa il menu {Formato}, i tasti o la scheda {Testo}.

| Comando | Tasti | Cosa fa |
| --- | --- | --- |
| {Formato › Spesso} | {{⌘B}} | Lo stile grassetto della famiglia, o di nuovo il normale |
| {Formato › Corsivo} | {{⌘I}} | Lo stile corsivo della famiglia allo stesso peso, o di nuovo dritto |
| {Formato › Sottolinea} | {{⌘U}} | Una linea sotto le lettere |
| {Formato › Barrato} | {{⇧⌘X}} | Una linea attraverso le lettere |
| {Formato › Più grande} | {{⇧⌘.}} | Un punto più grande |
| {Formato › Più piccolo} | {{⇧⌘,}} | Un punto più piccolo |
| {Formato › Elenco puntato} | {{⇧⌘8}} | Trasforma i paragrafi in un elenco puntato, o lo termina |
| {Formato › Elenco numerato} | {{⇧⌘7}} | Trasforma i paragrafi in un elenco numerato, o lo termina |

Cosa cambiano i comandi:

- **Lettere selezionate** mentre scrivi: quelle lettere.
- **Solo il cursore**: le lettere che scrivi dopo.
- **Un testo selezionato**, senza scriverci dentro: ogni sua lettera, e quelle di ogni altro testo selezionato.

Ogni comando attiva il suo effetto, a meno che tutte le lettere non lo abbiano già: allora lo disattiva. Grassetto e corsivo passano a un altro stile della stessa famiglia, quindi funzionano quando la famiglia ne ha uno: il grassetto prende lo stile più vicino a un peso grassetto, e toglierlo porta allo stile più vicino al normale. Più grande e Più piccolo cambiano ogni lettera di un punto, così le lettere con una dimensione propria restano altrettanto più grandi o più piccole del resto; nessuna lettera scende sotto 1 punto.

**Colore.** Il colore di un testo è sulla sua scheda {Riempimento}. Con lettere selezionate mentre scrivi, la scheda imposta un colore solo per quelle lettere. Il riempimento di un testo può essere anche una sfumatura o un’immagine, che si vede attraverso le lettere mentre restano parole in cui puoi scrivere: apri la scheda {Riempimento} e sceglila, o trascina un’immagine dal Finder sul testo. Dipingere di nuovo il testo dal menu del riempimento toglie i colori che le lettere avevano di proprio, così tutto il testo mostra la nuova pittura; le lettere che colori dopo tengono il loro colore sopra di essa. Vedi [Colore, bordi ed effetti](/docs/looks.html).

## Elenchi {#lists}

{Formato › Elenco puntato} ({{⇧⌘8}}) e {Formato › Elenco numerato} ({{⇧⌘7}}), o i due pulsanti degli elenchi sulla scheda {Testo}, trasformano i paragrafi in voci di un elenco. Un elenco è sempre fatto di paragrafi interi: quelli che la selezione tocca, o quello in cui si trova il cursore.

- Le voci puntate cominciano con •, quelle numerate con 1., 2., 3. e così via, contando le voci numerate che si susseguono.
- Ogni voce di un elenco comincia le sue parole nello stesso punto, così si allineano qualunque sia la dimensione dei segni; i segni prendono il font della loro voce.
- Premi {{Return}} alla fine di una voce per la successiva. Il suo segno compare subito, sulla riga vuota.
- Premi {{Return}} su una voce vuota, o {{⌫}} all’inizio di una voce, per terminare lì l’elenco.
- Scegli di nuovo lo stesso elenco per togliere i paragrafi dall’elenco.

## Stili di testo {#text-styles}

Un carattere può avere un nome, così che molti testi lo condividano e una sua modifica li cambi tutti. La scheda {Testo} aperta comincia con gli stili di testo del design, ciascuno scritto nel suo carattere, e un pulsante tratteggiato {+ Stile}:

- **Fai clic su uno stile** per darlo ai testi selezionati. Passaci sopra prima, per provarlo sulla tela.
- **{+ Stile}** dà un nome al carattere del testo selezionato. Bezzle propone un nome secondo la dimensione: {Display} da 48 punti, {Titolo} da 32, {Intestazione} da 24, {Sottotitolo} da 19, {Corpo del testo} da 15, {Piccolo} da 12, e {Didascalia} sotto. Premi {{Return}} per tenerlo, o scrivi il tuo.
- **Fai doppio clic sullo stile in uso** per rinominarlo; la sua {×} tiene l’aspetto senza il nome.
- Con più di sei stili, si vedono i primi cinque e un pulsante dice quanti altri ce ne sono; fai clic per vederli tutti, e su {Meno} per richiuderli.

Uno stile di testo contiene font, stile del font, dimensione, interlinea, spaziatura tra le lettere, maiuscole e minuscole, spaziatura tra i paragrafi, sottolineatura, barrato, funzioni e assi del font variabile. Allineamento, dimensionamento del riquadro e colore restano propri di ogni testo (anche i colori possono avere un nome). Una scheda {Testo} chiusa indica il nome dello stile in uso. Gli stili non vengono proposti mentre ci sono lettere selezionate. Altro sugli stili in [Componenti, stili e librerie](/docs/components.html).

## Testo lungo una curva {#curves}

Le parole possono correre lungo un arco tutto loro, o lungo il contorno di una forma, e restare parole in cui puoi scrivere. Su una curva, un testo è sempre una sola riga: gli a capo diventano spazi.

### Piegare il testo ad arco {#bending}

Seleziona un solo testo con lo strumento {Selezione} e avvicinaci il puntatore: una linea corre lungo la sua linea di base e prosegue oltre le estremità fino a una perlina su ciascun lato. Trascina una perlina attorno al centro delle parole:

- Portala in basso per inarcare le parole, e fin sotto il centro per chiuderle in un anello.
- Portala in alto per farle scendere a conca.
- La curvatura si ferma su dritto, semicerchio e anello, con uno scatto del trackpad. Tieni premuto {{⌘}} durante il trascinamento per superarli liberamente.

Il centro delle parole resta dov’è, e l’angolo si vede mentre trascini. {{Esc}} durante il trascinamento riporta tutto com’era. Le perline si vedono finché il testo è largo almeno 14 punti sullo schermo e non è bloccato, ruotato in profondità o appoggiato su una forma.

Puoi anche piegare un testo dritto dalla scheda tratteggiata {Curvatura} in fondo all’ispettore, che gli dà un {Arco}.

### La scheda Curvatura {#curve-card}

Un testo piegato ha una scheda {Curvatura}. Chiusa, indica quanta parte di un cerchio percorrono le parole, come {90°}, o {Anello}. Trascina di lato sopra di essa per piegarle da una conca piena, passando per il dritto, fino a un anello; si ferma sul semicerchio e sul cerchio pieno in entrambe le direzioni, e sul dritto.

::: fields
- **Preimpostazioni**: {Conca}, che scende di un quarto di cerchio, {Arco}, un quarto di cerchio verso l’alto, {Semicerchio} e {Anello}.
- **Gradi**: quanta parte di un cerchio percorrono le parole, da −360° (a conca) a 360°.
- **×**: {Raddrizza}, le parole di nuovo dritte. Lo stesso fa trascinare la scheda chiusa oltre la sua estremità sinistra, o {Oggetto › Raddrizza il testo}.
:::

L’arco è sempre lungo quanto le parole: se scrivi di più, cresce, e mantiene quanta parte del cerchio percorrono.

### Mettere il testo su una forma {#on-path}

Un testo può seguire il contorno di un rettangolo, di un’ellisse, di un tracciato o di una linea, e seguirlo ovunque la forma venga spostata, ruotata o rimodellata. Ci sono due modi:

- **Con il menu.** Seleziona il testo e la forma e scegli {Oggetto › Metti il testo sul tracciato}, che trovi anche nel menu del clic destro. Le parole vanno dove sono più vicine al contorno, dal lato in cui si trovano, leggibili dritte.
- **A mano.** Trascina il testo sul bordo della forma e tienilo lì un momento, senza lasciarlo. Una linea corre lungo il bordo fin dove arrivano le parole, il contorno si illumina, e le parole ci saltano sopra lettera per lettera. Sempre tenendo premuto, falle scorrere: seguono il puntatore, restano dal lato del bordo in cui si trova il puntatore, e si girano per essere leggibili dritte ovunque siano. Lascia andare per tenerle lì, o trascina ben lontano e si staccano di nuovo, dritte.

Il testo e la forma entrano in un gruppo tutto loro, chiamato *Testo su tracciato 1*, *Testo su tracciato 2* e così via, con la forma per prima, così ciò che stava sopra la forma ci sta ancora. Più testi possono seguire la stessa forma.

Una forma non può portare testo quando è bloccata, ruotata in profondità, in una griglia di ripetizione, o quando è la forma su cui una maschera ritaglia i suoi livelli. Il testo non può essere bloccato né stare in una griglia di ripetizione.

### Scorrere lungo il contorno e staccarsi {#sliding}

Trascina un testo che segue una forma, e scorre lungo il contorno dietro al puntatore, tenuto dal punto in cui l’hai preso. Allontanalo bene dal contorno, circa due volte e mezzo la dimensione del suo carattere, e si stacca, dritto e leggibile, mentre il trascinamento continua a spostarlo.

Su un contorno aperto, le parole sono tenute dall’inizio, dal centro o dalla fine, secondo l’allineamento del testo; su un contorno chiuso, e su un arco, dal centro. Se scrivi di più, crescono da lì.

### La scheda Sul tracciato {#on-path-card}

Un testo che segue una forma ha una scheda {Sul tracciato} al posto di {Curvatura}. Chiusa, nomina la forma.

::: fields
- **Trascinamento laterale** sulla scheda chiusa: fa scorrere le parole lungo il contorno, dal suo inizio alla sua fine, fermandosi a ogni quarto.
- **Dall’altro lato**: il pulsante nella riga della scheda chiusa sposta le parole dall’altro lato del contorno, sempre leggibili dritte.
- **×**: {Togli dal tracciato}. Lo stesso fanno trascinare la scheda oltre la sua estremità sinistra, {Oggetto › Raddrizza il testo}, o {Togli il testo dal tracciato} nel menu del clic destro. Il testo va appena sopra il gruppo, di nuovo dritto; un gruppo rimasto con la sola forma torna a essere quella forma.
:::

Se la forma viene eliminata, il testo mantiene la curva che aveva.

### Scrivere e ridimensionare un testo curvo {#curved-typing}

Scrivi in un testo curvo come in qualsiasi altro. Mentre scrivi, le sue parole sono distese dritte, nella direzione che la curva ha nel punto da cui vengono disposte; quando smetti, ogni lettera torna con un balzo al suo posto sulla curva. Le lettere raggiungono i loro nuovi posti allo stesso modo ogni volta che si muovono non insieme all’intero testo: quando viene piegato, messo su una forma, tolto da una forma, o quando annulli.

Ogni maniglia di un testo curvo ingrandisce o rimpicciolisce le sue lettere, come fa l’unica maniglia di un testo in {Larghezza automatica}.

## Testo come contorni {#outlines}

{Oggetto › Converti in tracciato} ({{⌘8}}), anche nel menu del clic destro, trasforma i testi selezionati nei contorni delle loro lettere, con lo stesso identico aspetto. Puoi poi modificarli punto per punto, combinarli con forme o tagliarli con il Taglierino (vedi [Forme, tracciati e penna](/docs/shapes.html)).

- Un testo di un solo colore diventa un tracciato, riempito come era il testo: una sfumatura o un’immagine resta dove stava.
- Un testo con lettere di colori propri diventa un gruppo con un tracciato per ogni colore, quello del testo dietro a tutti, ciascuno chiamato con le sue parole.
- Tutto ciò che il testo disegna viene con lui: sottolineature, linee attraverso le lettere e segni degli elenchi. Un testo su una curva viene convertito così come corre.
- Mantiene nome, posizione e rotazione del testo, la sua opacità, il metodo di fusione, le ombre e la sfocatura. La diffusione di un’ombra e la sfocatura di ciò che sta dietro, che un testo non mostra mai, vengono omesse.
- Un testo che è la forma di una maschera diventa un solo tracciato, qualunque colore abbiano le sue lettere.

Alcuni testi non possono diventare contorni: quelli bloccati, quelli fatti di soli spazi, e quelli in una cella di una griglia di ripetizione, in una copia di un componente o in una pila, perché le loro parole vanno con le altre celle, copie o post. Le lettere che sono immagini, come le emoji, non hanno contorni: Bezzle emette un suono, e un testo che le contiene resta testo. Per tornare indietro, usa Annulla.

## Ortografia {#spelling}

### Mentre scrivi {#spelling-typing}

Le parole scritte male vengono sottolineate mentre scrivi. Fai clic destro su una per le grafie che propone il Mac. Disattiva o attiva il controllo in {Modifica › Ortografia e grammatica › Controlla ortografia durante la digitazione}, e aggiungi la grammatica con {Controlla grammatica con ortografia}. Bezzle ricorda entrambe le scelte, per tutti i testi; all’inizio l’ortografia è attiva e la grammatica no.

### Controllare un intero design {#spelling-design}

{Modifica › Ortografia e grammatica › Controlla ortografia…} ({{⌘;}}) apre la barra di ricerca sopra la tela, impostata sull’ortografia. Percorre le parole errate del design in ordine di lettura, tavola per tavola e su ciascuna dall’alto in basso: ogni parola errata è segnata sulla tela con una linea ondulata, e quella scelta viene mostrata, con il suo testo selezionato.

::: fields
- **La parola**: la parola errata scelta, in rosso.
- **Scrittura corretta**: la grafia più probabile, pronta all’uso; scrivine un’altra se vuoi.
- **Suggerimenti**: ogni grafia che il Mac propone. Sceglierne una la mette subito al suo posto.
- **Modifica**: mette {Scrittura corretta} al posto della parola e passa alla successiva. {{Return}} nel campo fa lo stesso.
- **Ignora**: lascia la parola com’è, ovunque nel design finché resta aperto.
- **Impara**: aggiunge la parola al dizionario del Mac.
- **Precedente**, **Successivo**: le due frecce, per tornare indietro o andare avanti senza cambiare la parola.
- **Chiudi**: la ×, o {{Esc}}.
:::

La barra conta mentre procede, come {3 di 7}, e dice {Nessun errore} quando non ce ne sono. Ogni testo viene controllato nella lingua in cui è scritto. Vengono controllate solo le parole visibili: i livelli nascosti vengono saltati, e in una pila viene controllato ogni post. Ogni correzione è un passo di Annulla ({Correggi ortografia}).

Le icone a sinistra della barra passano dall’ortografia a {Trova e sostituisci parole} ({{⌘F}}) e viceversa, che trova e sostituisce parole in tutto il design (vedi [La tela](/docs/canvas.html)). Con lettere selezionate mentre scrivi, {{⌘F}} cerca proprio quelle.

## Le schede di un testo {#cards}

Un testo selezionato ha {Frame}, poi {Testo}, poi {Curvatura} o {Sul tracciato} quando corre lungo una curva, {Opacità} e {Riempimento} per il colore delle sue lettere, che un testo ha sempre. Seguono ombre, sfocatura, 3D ed esportazione, quando le ha. I testi non hanno bordi. Tra le schede tratteggiate in fondo, {Curvatura} viene per prima, per piegare il testo, poi {Ombra}, {Sfocatura}, {3D} e le altre. Vedi [Colore, bordi ed effetti](/docs/looks.html).

Riflettere un testo da solo non fa nulla, perché le parole si leggono sempre nel verso giusto; riflesso insieme ad altri livelli, si sposta nella sua posizione speculare.

## Scorciatoie {#shortcuts}

| Tasti | Cosa fanno |
| --- | --- |
| {{T}} | Strumento Testo |
| {{Return}} | Scrivi nel testo selezionato |
| {{Esc}} | Smetti di scrivere; di nuovo, posa lo strumento Testo |
| {{⌘B}}, {{⌘I}}, {{⌘U}} | Spesso (grassetto), Corsivo, Sottolinea |
| {{⇧⌘X}} | Barrato |
| {{⇧⌘.}}, {{⇧⌘,}} | Più grande, Più piccolo |
| {{⇧⌘8}}, {{⇧⌘7}} | Elenco puntato, Elenco numerato |
| {{⌘8}} | Converti in tracciato (testo come contorni) |
| {{⌘;}} | Controlla ortografia… |
| {{⌘F}} | Trova… |

Tutte le scorciatoie di Bezzle sono in [Scorciatoie da tastiera](/docs/shortcuts.html).
