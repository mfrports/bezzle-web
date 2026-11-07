---
title: Componenti, stili e librerie
nav: Componenti e stili
lede: Progetta una parte una volta sola e usala ovunque. Le copie di un componente cambiano insieme, colori, testi, ombre e angoli con un nome restano uguali ovunque li usi, e ogni design può prestare i suoi componenti e stili a un altro.
---

Un design resta coerente quando le sue parti vengono create una volta sola. Bezzle ha due modi per farlo. Un **componente** è una parte intera, come un pulsante, una card o una barra di navigazione, usata in molti punti: cambi una copia qualsiasi e tutte le copie seguono. Uno **stile** è un singolo aspetto a cui hai dato un nome, come un blu del marchio, un carattere per i titoli o un’ombra morbida: lo cambi in un punto e cambia ovunque. Nessuno dei due va configurato, e ogni design della tua schermata Home può condividere i suoi componenti e stili con gli altri.

## Componenti {#components}

Ogni punto in cui un componente è usato è una copia, e nessuna copia è l’originale. Qualsiasi cosa cambi in una copia, il suo aspetto, i livelli che contiene, la loro posizione al suo interno, cambia in tutte le altre copie mentre lavori. Ciò che una copia contiene è solo suo: i suoi testi e le sue immagini. Sono suoi anche la posizione della copia, la sua grandezza, quanto è ruotata e se è riflessa.

Così puoi costruire una schermata con dieci copie di un pulsante, dare a ciascuna la sua etichetta, e poi rendere tutte e dieci più arrotondate cambiandone una qualsiasi.

::: figure components
Cambi una copia, e tutte le copie seguono.
:::

Sulla tela una copia è contornata in viola invece che in blu matita, e nell’elenco dei livelli ha un segno viola di quattro piccoli rombi. Con una copia selezionata, il nome del suo componente compare sopra il suo angolo in alto a sinistra (insieme alla variante che mostra, quando ce ne sono diverse), e ogni altra copia è contornata da una tenue linea tratteggiata, così vedi cosa cambierà prima di cambiare qualsiasi cosa.

### Creare un componente {#make-component}

::: steps
1. **Seleziona ciò di cui è fatto il componente.** Un gruppo, o più livelli su una tavola (o sulla tela).
2. **Scegli {Oggetto › Crea componente}** ({{⌥⌘K}}), oppure fai clic con il tasto destro e scegli {Crea componente}.
3. **Dagli un nome.** La selezione ora è la prima copia. Apri la sua scheda Componente per dare al componente un nome tutto suo.
:::

Un singolo gruppo diventa un componente così com’è, ovunque si trovi, anche come cella di una griglia di ripetizione. Qualsiasi altra cosa viene prima messa in un gruppo. Il componente prende il nome del gruppo o del livello che hai selezionato, oppure, per più livelli, `Componente 1`, `Componente 2` e così via.

Non puoi creare un componente da una tavola, da un livello bloccato, da una copia stessa o da livelli dentro una copia. Le copie di altri componenti possono entrare in uno nuovo, come i pulsanti entrano in una card.

Subito dopo, Bezzle cerca nel design i gruppi che hanno lo stesso aspetto: gli stessi livelli, uguali in tutto tranne la posizione, la grandezza, i testi e le immagini. Se ne trova, una scritta sotto la copia dice per esempio `Altri 3 sono identici`, con {Collegali}. Fai clic e anche quei gruppi diventano copie, ognuna con i suoi testi e le sue immagini. La proposta resta per circa otto secondi.

### Aggiungere altre copie {#placing-copies}

- **Duplica** una copia ({{⌘D}}), oppure copiala e incollala: il risultato è un’altra copia.
- **Dal pannello Risorse**: i componenti del design stesso vengono per primi sul suo scaffale, ognuno disegnato come apparirebbe una nuova copia, con il numero di copie presenti nel design. Fai clic su uno per mettere una copia al centro della tavola in vista, o trascinalo sulla tela. Vedi [il pannello Risorse](#resources-panel).
- **In una griglia di ripetizione o in una pila**: una copia ripetuta nelle celle di una griglia, o nei post di una pila, è una copia del componente in ogni cella e in ogni post.

### Cambiare un componente {#changing}

Per cambiare un componente, cambia una qualsiasi delle sue copie, come cambieresti un gruppo qualsiasi: seleziona un livello al suo interno e dagli un nuovo riempimento, spostalo, ridimensionalo, aggiungi un livello o eliminane uno. Quando la modifica raggiunge le altre copie, una luce parte dalla copia che hai cambiato e attraversa la tela, e ogni copia si illumina quando la luce la raggiunge, la più vicina per prima. Si vede ciò che ha seguito, e nient’altro.

Ciò che una copia tiene per sé, qualsiasi cosa tu faccia alle altre:

- **I suoi testi e le sue immagini.** Scrivi una nuova etichetta in un pulsante e solo quel pulsante la mostra.
- **La sua posizione, grandezza, rotazione e riflessione nel complesso.** Sposta o ridimensiona una copia e le altre restano dove sono.
- **Tutto ciò che le hai detto di tenere.** Vedi [Ciò che una copia tiene per sé](#copy-own).

### Cosa viene proposto dopo una modifica {#offers}

Dopo una modifica a una copia, accanto a essa (o sotto, se non c’è spazio) compare una scritta con uno o due pulsanti, per restringere ciò che la modifica ha raggiunto o per estenderlo. Sparisce dopo circa otto secondi, o appena lavori su qualcos’altro.

| Hai cambiato | Bezzle dice | Pulsanti |
| --- | --- | --- |
| L’aspetto di qualcosa, in una copia della prima variante | `Tutte le 5 copie` | {Solo questa copia}, {Nuova variante} |
| L’aspetto di qualcosa, in una copia di un’altra variante | `Solo` e il nome della variante, come `Solo Variante 2` | {Solo questa copia}, {In tutte le varianti} |
| I testi o l’immagine di un livello che aveva ancora quelli del componente | `Solo in questa copia` | {In tutte le 5} |
| Un nuovo componente, con gruppi che hanno lo stesso aspetto | `Altri 3 sono identici` | {Collegali} |

- {Solo questa copia} tiene la modifica solo in questa copia e riporta tutte le altre copie com’erano.
- {Nuova variante} trasforma la copia, così com’è ora, in una nuova variante del componente, e riporta indietro le altre copie.
- {In tutte le varianti} porta la modifica in ogni variante, non solo in quella che questa copia mostra.
- {In tutte le 5} dà i nuovi testi o la nuova immagine a ogni copia, e al componente stesso.

### Ciò che una copia tiene per sé {#copy-own}

Scegli {Solo questa copia} e i livelli che hai cambiato tengono ciò che hai cambiato, da quel momento in poi, qualsiasi cosa facciano le altre copie. Quando selezioni un livello così, la scheda {Solo in questa copia} elenca ciò che tiene (per esempio `riempimento, angoli`) e offre {Segui gli altri}, che gli fa seguire di nuovo il componente. La stessa cosa si trova nel menu del tasto destro come {Segui le altre copie}.

Per annullare in una volta tutto ciò che una copia tiene per sé, scegli {Oggetto › Come le altre}, oppure il pulsante con lo stesso nome nella scheda Componente o nel menu del tasto destro. I suoi testi e le sue immagini restano; tutto il resto segue di nuovo il componente. Il comando è disponibile solo quando la copia tiene per sé qualcosa oltre ai testi e alle immagini.

Al contrario, fai clic con il tasto destro su un testo o un’immagine dentro una copia e scegli {Uguale in ogni copia} per dare i suoi testi o la sua immagine a ogni copia del componente, e al componente stesso.

### Come i livelli di una copia si adattano a una nuova misura {#copy-resizing}

Quando rendi una copia più grande o più piccola del suo componente, Bezzle dispone i suoi livelli in base a dove ognuno si trova nel componente, quindi non c’è nulla da impostare:

- Un livello che occupa almeno metà della copia, in una direzione in cui può allungarsi, si allunga con lei.
- Un livello al centro resta al centro.
- Un livello che sta entro un quarto della distanza da un bordo resta alla stessa distanza da quel bordo.
- Ogni altro livello mantiene la sua posizione in proporzione, come le schede di una barra.

Il testo si allunga in larghezza solo quando è impostato a una larghezza ([Altezza automatica](/docs/text.html#auto-height) o [Fissa](/docs/text.html#fixed-size)), e in altezza solo quando è Fissa; i livelli ruotati e le griglie di ripetizione vengono spostati, mai allungati. Una copia di un altro componente dentro la copia viene disposta dal suo componente.

Una copia cresce anche intorno ai suoi testi. Quando una forma un po’ più grande di un’etichetta la circonda, come un pulsante circonda il suo testo, e scrivi un’etichetta più lunga, la copia cresce di altrettanto: da sinistra per testi allineati a sinistra, da destra per testi allineati a destra, e attorno al centro per quelli centrati o per i testi al centro della loro forma. Un campo o una barra molto più larghi di ciò che c’è scritto restano come sono.

### Varianti {#variants}

Un componente può avere varianti: la stessa parte in un altro stato o stile, come un pulsante principale, secondario o disattivato. Ogni variante ha gli stessi livelli, e ognuna ha l’aspetto che vuole. Una copia mostra una variante, e puoi passarla a un’altra in qualsiasi momento; i suoi testi e le sue immagini la seguono.

Ci sono due modi per creare una variante:

- **Prima di cambiare qualcosa.** Seleziona una copia e scegli {Oggetto › Nuova variante}, fai clic sul riquadro tratteggiato {Nuova variante} nella scheda Componente, o scegli {Nuova variante} nel menu del tasto destro. Ora la copia mostra una nuova variante, uguale a com’era. Cambiala come deve apparire la variante: ciò che cambi in essa resta nella nuova variante.
- **Dopo una modifica.** Cambia una copia e, quando la scritta sotto dice che la modifica ha raggiunto tutte le copie, fai clic lì su {Nuova variante}. La copia così com’è ora diventa la nuova variante, e le altre copie tornano com’erano.

Per passare una copia a un’altra variante:

- **Nella scheda Componente**: le varianti sono riquadri, tre per riga, ognuno disegnato come apparirebbe questa copia in quella variante. Passa il puntatore su un riquadro per vedere la copia trasformarsi sulla tela; fai clic per applicarla.
- **Sulla tela**: quando un componente ha due o più varianti, una fila di varianti compare accanto alla copia selezionata (o sotto, se non c’è spazio), e termina con un pulsante rotondo che crea una nuova variante. Passa il puntatore e fai clic come nella scheda.
- **Nel menu del tasto destro**: ogni variante per nome, con un segno di spunta accanto a quella mostrata.

Quando una copia passa a una variante più grande o più piccola, cresce o si riduce ai bordi di altrettanto, mantenendo i suoi testi.

Una modifica fatta in una copia di una variante resta in quella variante, e le copie che mostrano altre varianti restano come sono; la proposta {In tutte le varianti} la porta in tutte. Una modifica fatta in una copia della prima variante raggiunge tutte le varianti, tranne ciò che una variante tiene per sé.

La prima variante si chiama `Predefinita` e le altre `Variante 2`, `Variante 3` e così via, finché non dai loro un nome. Fai doppio clic su un riquadro per rinominarlo, o fai clic con il tasto destro per {Rinomina} ed {Elimina variante}. La prima variante non si può eliminare. Quando una variante viene eliminata, le sue copie mostrano la prima variante.

### La scheda Componente {#component-card}

Seleziona una copia, o un livello qualsiasi al suo interno, e compare la scheda Componente.

::: fields
- **La riga della scheda chiusa**: la variante che la copia mostra quando ce ne sono diverse, altrimenti il nome del componente. Con più di una copia, le frecce ({La copia precedente}, {La copia successiva}) e `2 di 7` passano in rassegna tutte le copie in ordine di lettura: tavola per tavola, poi dall’alto, poi da sinistra. Ognuna viene selezionata e portata in vista, e una pila viene girata sul post che la contiene.
- **Nome**: come si chiama il componente. Rinominarlo rinomina ogni copia che porta ancora il suo nome.
- {Da “Design System”}: compare quando il componente è stato preso da un altro design, con il nome di quel design.
- **Varianti**: i riquadri descritti in [Varianti](#variants), con quello mostrato dalla copia cerchiato in viola, e il riquadro tratteggiato {Nuova variante}.
- {Come le altre}: compare quando la copia tiene per sé qualcosa oltre ai testi e alle immagini.
- La **×** ({Scollega dal componente}): compare quando è selezionata la copia stessa, non un livello al suo interno. Scollega la copia.
:::

Se passi il puntatore sulla scheda, ogni copia sulla tela viene contornata.

### Componenti dentro componenti {#nested}

Una copia può contenere copie di altri componenti, come una card contiene dei pulsanti. Cambia un pulsante dentro una card e cambi il componente pulsante, quindi tutti i pulsanti seguono, in ogni card e anche da soli. La posizione del pulsante nella card, la sua grandezza e la variante che mostra appartengono alla card.

Un componente non può mai contenere una copia di se stesso, a nessuna profondità: Bezzle scollega tutto ciò che la creerebbe.

### Scollegare ed eliminare {#unlink}

{Oggetto › Scollega copia}, oppure {Scollega copia} nel menu del tasto destro, oppure la × nella scheda Componente, trasforma le copie selezionate in gruppi come tutti gli altri. Hanno l’aspetto di prima e non cambiano più con il componente. Le copie di altri componenti al loro interno restano copie dei loro componenti.

Per eliminare il componente stesso, fai clic con il tasto destro su di esso nello scaffale del pannello Risorse e scegli {Elimina componente}. Lascia il design, e ogni sua copia resta, come un gruppo qualsiasi.

## Stili {#styles}

Uno stile è un aspetto a cui il design ha dato un nome. Ce ne sono di quattro tipi:

| Tipo | Cosa contiene | Dove si usa |
| --- | --- | --- |
| Colore | Un colore, o i colori di una sfumatura | Qualsiasi riempimento, il colore di un bordo, il colore delle lettere, lo sfondo di una tavola |
| Testo | Font, stile del font, dimensione, interlinea e spaziatura tra le lettere, spaziatura tra i paragrafi, maiuscole e minuscole, sottolineatura, barrato, funzioni e assi del font | Un livello di testo |
| Ombra | Colore, X, Y, sfocatura, diffusione, e se cade all’interno | Qualsiasi ombra |
| Angoli | Un raggio per tutti e quattro gli angoli, e quanto dolcemente si raccordano ai lati | Un rettangolo |

Uno stile contiene solo l’aspetto. Ogni livello tiene ciò che è suo: se un riempimento o un’ombra è attivo, dove passa una sfumatura sul livello, dove stanno i suoi testi nel riquadro e come il riquadro trova la sua misura. Uno stile di colore non può andare su un riempimento che mostra un’immagine.

Ovunque sia usato, uno stile è lo stesso, e una sua modifica in qualsiasi punto, su un livello che lo ha o nell’elenco degli stili del design, è una modifica ovunque.

### Dare un nome a un aspetto {#name-look}

::: steps
1. **Seleziona un livello** e apri la scheda dell’aspetto a cui vuoi dare un nome: un riempimento, un bordo, un’ombra, la scheda Testo, la scheda Angoli o lo Sfondo di una tavola.
2. **Fai clic sul pulsante tratteggiato {+ Stile}** in cima alla scheda. Diventa un campo con già un nome dentro.
3. **Scrivi un nome, o tieni quello proposto, e premi {{Return}}.** {{Esc}} lascia l’aspetto senza nome. Un clic altrove tiene il nome che hai scritto, e rinuncia a quello proposto se l’hai lasciato com’era.
:::

Il nome proposto dice cos’è l’aspetto: il nome comune di un colore (`Blu`, `Grigio chiaro`, `Avorio`, `Verde scuro`), `Sfumatura`, l’uso più frequente di una dimensione del testo (`Display` da 48 punti, poi `Titolo`, `Intestazione`, `Sottotitolo`, `Corpo del testo`, `Piccolo`, e `Didascalia` sotto 12), il nome di un preset di ombra o di angoli a cui corrisponde (`Morbida`, `Sollevata`), altrimenti `Ombra` o `Angoli 10`. Se un altro stile dello stesso tipo ha già quel nome, segue un numero (`Blu 2`). I nomi hanno al massimo 60 caratteri.

I livelli selezionati prendono il nome. Se nel design ci sono altri livelli con lo stesso aspetto, una scritta propone di dare il nome anche a loro, per esempio `Altri 4 livelli sono uguali`, con {Assegna anche a loro}.

Una volta dato il nome, la riga della scheda chiusa mostra il nome in blu matita dopo un piccolo rombo, al posto dei numeri, e l’immagine della scheda è cerchiata.

### Usare uno stile {#use-style}

Una scheda aperta propone per primi gli stili del design del suo tipo, come pulsanti. Passa il puntatore su uno per vederlo sulla selezione e per contornare ogni livello che già lo usa; fai clic per darlo alla selezione. Quando un design ha più di sei stili di un tipo, la scheda mostra i primi cinque e un pulsante con il numero degli altri; fai clic per vederli tutti, e su {Meno} per richiuderli.

Dare uno stile di testo a un testo lo applica all’intero testo: le lettere che avevi impostato a parte in un altro font o in un’altra dimensione seguono di nuovo lo stile.

Il pulsante dello stile che la selezione ha è riempito di blu matita. Fai doppio clic per rinominare lo stile. La sua piccola × ({Mantieni l’aspetto, senza il nome}) tiene l’aspetto sulla selezione ma toglie il nome.

### Cambiare uno stile {#change-style}

Ci sono due modi per cambiare uno stile, ed entrambi cambiano ogni livello che lo usa.

- **Attraverso un livello qualsiasi che lo ha.** Cambia il riempimento, il testo, l’ombra o gli angoli di un livello che porta il nome di uno stile, e cambiano lo stile e ogni altro livello che lo ha. La modifica si propaga su di essi come una luce, dal punto in cui l’hai fatta. Poi una scritta dice per esempio `Anche su altri 12 livelli`, con {Solo qui}: fai clic per tenere la modifica solo sui livelli selezionati, che allora perdono il nome, e per riportare lo stile com’era.
- **Nel kit di stili**, con nulla selezionato (vedi sotto).

Un rettangolo a cui dai angoli diversi tra loro ha angoli tutti suoi: lascia il suo stile di angoli.

### Il kit di stili {#style-kit}

Fai clic su un punto vuoto della tela, così che nulla sia selezionato, e l’ispettore mostra gli stili del design, una scheda per ogni tipo presente, sopra l’elenco degli strumenti (con in mano lo strumento Tavola da disegno mostra invece le misure delle tavole):

- **Colori** come campioni di colore, tre per riga, con il nome e il codice esadecimale (o `Sfumatura`) sulla striscia sotto.
- **Testi** scritti nel loro stesso carattere, con la loro dimensione.
- **Ombre** e **angoli** come piccoli riquadri, quattro per riga.

Passa il puntatore su uno stile per sollevarlo, contornare ogni livello che lo usa e vedere quanti sono. Fai clic per aprirlo e cambiarlo:

::: fields
- **Nome**: per rinominarlo. {{Return}} tiene il nuovo nome.
- La **×** ({Rimuovi stile}): toglie lo stile.
- **Chiaro e scuro**: un sole e una luna per scegliere quale aspetto cambi, per colori e ombre, finché il design ha qualcosa di scuro. {Automatico} fa di nuovo seguire all’aspetto scuro quello chiaro. Vedi [Chiaro e scuro](/docs/dark.html).
- **Un colore**: il selettore colore. Uno stile di sfumatura viene mostrato, ma si cambia attraverso un livello che lo ha.
- **Un testo**: il menu dei font (scrivi per trovare un font), lo stile del font, la dimensione (da 1 a 2.000 pt), la spaziatura **Riga** (da 0 a 4.000) e la spaziatura **Lettere** (da −500 a 2.000).
- **Un’ombra**: il suo colore, **X** e **Y** (da −1.000 a 1.000), **S** per la sfocatura (da 0 a 1.000) e **Diffusione** (da −1.000 a 1.000).
- **Angoli**: {Tondi} o {Squircle}, e **R**, il raggio (da 0 a 10.000).
:::

Ogni modifica va a ogni livello che ha lo stile, mentre la fai.

### Aspetti trovati senza nome {#found-looks}

Dopo gli stili, in ogni scheda del kit aspettano, tratteggiati, gli aspetti che due o più livelli hanno in comune senza un nome, i più usati per primi: fino a otto colori e fino a quattro per ciascun altro tipo. Ognuno dice quanti livelli lo hanno (`×6`). Passa il puntatore su uno per contornare quei livelli; fai clic per dargli un nome, e tutti quei livelli prendono subito il nome. Il nuovo stile si apre con il nome pronto da scrivere.

Un design non ha mai bisogno di essere preparato per tutto questo: dai un nome a ciò che vedi ripetuto, quando lo vedi.

### Rimuovere uno stile o il suo nome {#remove-style}

- **La × sul pulsante di uno stile** in una scheda: i livelli selezionati tengono il loro aspetto, senza il nome.
- **{Rimuovi stile}** nel kit di stili: lo stile se ne va, e ogni livello che lo usava mantiene l’aspetto che ha, senza alcun nome.

### Gli stili come codice {#tokens}

Con nulla selezionato in modalità Prototipo o [Ispeziona](/docs/inspect.html#tokens), la scheda **Codice** conta gli stili del design come token e li copia con un clic in {CSS} (proprietà personalizzate come `--color-brand-blue`, con una classe per ogni testo), {SwiftUI} (costanti) o {JSON} (il formato dei design token del W3C). L’aspetto scuro di ogni stile viene incluso ovunque il design ne abbia uno.

## Librerie {#libraries}

Ogni design è una libreria per tutti gli altri, senza nulla da configurare o pubblicare. I suoi componenti e stili si possono portare in qualsiasi altro design dal pannello Risorse, e arrivano con i suoi livelli quando li incolli in un altro design.

Una volta portato dentro, un componente o uno stile diventa dell’altro design, usato e cambiato lì come uno qualsiasi dei suoi. Ricorda solo da dove viene e com’era lì in quel momento. Niente cambia mai un altro design da solo.

### Prendere da un altro design {#taking}

::: steps
1. **Apri il pannello Risorse** ({Mostra risorse} nella barra dei menu, {{⇧⌘Y}}).
2. **Fai clic sull’altro design** nello scaffale. Vengono elencati i design della tua schermata Home che hanno componenti o stili propri, ognuno con alcuni dei suoi componenti e i suoi colori sulla copertina, e il numero di cose che contiene.
3. **Prendi ciò che ti serve.** Prima vengono i suoi stili, a due a due, poi i suoi componenti.
:::

- **Un componente**: fai clic per mettere una copia al centro della tavola in vista, o trascinalo sulla tela. Porta con sé i componenti di cui contiene copie e gli stili che usa, e le sue immagini vengono copiate nel tuo design. Una volta preso, è contrassegnato con il rombo dei componenti, e prenderlo di nuovo crea un’altra copia di quello che ora appartiene al tuo design.
- **Uno stile**: passa il puntatore per vederlo sulla selezione; fai clic per darlo alla selezione, e così entra nel tuo design. Va dove si trova la scheda aperta, se quella scheda è del suo tipo, altrimenti sul primo riempimento (le lettere di un testo), sul testo, sulla prima ombra o sugli angoli, e quel riempimento o quell’ombra viene attivato. Con nulla selezionato, un clic porta soltanto lo stile nel design, da usare poi tra i tuoi stili. Gli stili già presi mostrano un punto.

Nella pagina di un design, il campo di ricerca in cima al pannello trova per nome i suoi componenti e stili.

Quando incolli livelli copiati da un altro design, i componenti e gli stili che usano arrivano con loro. Uno stile che il tuo design ha già resta com’è, e i livelli incollati prendono il suo aspetto; uno stile dello stesso tipo e con lo stesso nome prende il posto di uno che il tuo design non ha; tutto il resto arriva insieme ai livelli.

### Quando l’altro design cambia {#library-updates}

Quando qualcosa che hai preso è cambiato nel design da cui viene, Bezzle te lo dice in cima alla tela quando apri il tuo design, o quando l’altro design viene salvato: per esempio `Novità in “Design System”: Pulsante, Principale +2`, con {Aggiorna}.

- Passa il puntatore su {Aggiorna} per vedere il tuo design aggiornato, con ogni copia e ogni livello che cambierebbe contornati.
- Fai clic su {Aggiorna} per accettare la modifica. Ogni copia dei componenti segue, e ogni livello che porta il nome degli stili, mentre ogni copia tiene ciò che è suo. Un solo passo di Annulla.
- Fai clic sulla × ({Non ora}) per lasciare tutto com’è. La proposta torna solo quando c’è qualcosa di più recente.

La stessa proposta si trova in cima alla pagina di quel design nel pannello Risorse, per quando l’hai messa da parte, e la sua scheda nello scaffale è contrassegnata. Le modifiche che hai fatto solo nel tuo design non sono mai una novità.

## Il pannello Risorse {#resources-panel}

Il pannello Risorse prende il posto dell’elenco dei livelli. Aprilo con il pulsante Risorse sulla barra degli strumenti, o con {Mostra risorse} nella barra dei menu ({{⇧⌘Y}}); lo stesso comando di nuovo ({Nascondi risorse}) lo chiude e riporta l’elenco dei livelli, se era aperto. Il suo scaffale contiene, dall’alto:

1. **I componenti del design stesso**, con il numero di copie di ciascuno. Fai clic con il tasto destro su uno per {Elimina componente}.
2. **Altri design** con componenti o stili propri.
3. **I kit**: {Kit UI Bezzle}, {iOS}, {macOS} e {Android}, ognuno in sezioni come Barre, Pulsanti, Controlli e Campi di testo.
4. **I set di icone**: Lucide, Phosphor e Material Symbols.

Fai clic su uno qualsiasi per aprire la sua pagina; fai clic su {Risorse} in cima per tornare indietro. Scrivi in {Cerca} nello scaffale per trovare, in tutte le librerie, i componenti degli altri design per nome, le parti dei kit e le icone più adatte di ogni set (con un conteggio che le apre tutte); in una pagina, la ricerca resta dentro quella pagina. {{Esc}} cancella la ricerca.

### Le parti dei kit {#kit-parts}

Ogni parte è disegnata come verrà fuori, chiara o scura come la tavola su cui andrebbe. Fai clic su una parte per aggiungerla alla tavola in vista, o trascinala: la parte vera segue il puntatore alla sua misura, la tavola su cui andrà è contornata, e un’etichetta dice cosa succede quando lasci andare.

- **Le barre** (barre di stato, barre di navigazione, barre dei pannelli, barre degli strumenti) si sistemano lungo il bordo superiore o inferiore della tavola, larghe quanto lei, sotto o sopra ciò che sta già lungo quel bordo: prima una barra di stato, poi una barra di navigazione sotto. L’etichetta dice `In alto su iPhone 18 Pro`.
- **Elenchi, campi e cursori** si allungano su tutta la tavola, con un margine su entrambi i lati, all’altezza in cui lasci andare: `Su tutta la larghezza di iPhone 18 Pro`.
- **Tutto il resto** arriva dove lasci andare, così come è stato creato.

Le parti si allungano solo su una tavola larga più o meno quanto quella per cui sono state create; su una molto più larga arrivano così come sono. Una parte arriva scura quando il colore della tavola stessa è scuro.

Una parte di un kit è un componente. La prima volta che ne aggiungi una a un design diventa un componente del design, e ogni volta successiva è un’altra copia di quel componente, così come il tuo design lo ha in quel momento. Quindi cambi una barra dei pannelli e tutte le barre dei pannelli seguono. L’aspetto chiaro e quello scuro di una parte sono due componenti.

### Icone {#icons}

La pagina di un set di icone mostra in cima una striscia di stili e sotto tutte le icone, sei per riga. Lucide è disegnato a linee con lo spessore che scegli ({Sottile}, {Leggero}, {Normale}, {Grassetto}, {Nerissimo}); Phosphor è disponibile in {Sottile}, {Leggero}, {Normale}, {Grassetto} e {Pieno}; Material Symbols in {Contorno} e {Pieno}. Lo stile che scegli viene ricordato per ogni set.

Fai clic su un’icona per aggiungerla, quadrata di 24 punti, alla tavola in vista, o trascinala sulla tela. Arriva quasi nera, o quasi bianca su una tavola scura. Lasciala andare sopra un’icona già presente e la nuova prende il suo posto, mantenendo il colore e la misura di quell’icona; l’etichetta dice `Sostituisci` e il nome della vecchia icona. Un’icona arriva come un tracciato che puoi modificare come qualsiasi altro; vedi [modificare i punti](/docs/shapes.html#editing-points).

## Comandi e tasti {#commands}

| Comando | Dove | Tasti |
| --- | --- | --- |
| Creare un componente | {Oggetto › Crea componente} | {{⌥⌘K}} |
| Nuova variante dalla copia selezionata | {Oggetto › Nuova variante} | |
| Far seguire di nuovo a una copia il suo componente | {Oggetto › Come le altre} | |
| Trasformare una copia in un semplice gruppo | {Oggetto › Scollega copia} | |
| Un’altra copia | {Modifica › Duplica} | {{⌘D}} |
| Mostrare o nascondere il pannello Risorse | {Mostra risorse} nella barra dei menu | {{⇧⌘Y}} |

E poi: scopri come gli stili prendono un aspetto scuro tutto loro in [Chiaro e scuro](/docs/dark.html), o dai a una copia degli stati per un prototipo in [Gli stati di una copia](/docs/prototype.html#states).
