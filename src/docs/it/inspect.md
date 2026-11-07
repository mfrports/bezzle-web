---
title: Ispezione e consegna
nav: Ispeziona
lede: Leggi il design come serve a chi lo costruisce: misure e distanze misurate sulla tela, ogni aspetto con il nome che gli dà il tuo design, il livello in CSS o SwiftUI, e le sue immagini da trascinare fuori come file.
---

La modalità Ispeziona è per le persone che costruiscono ciò che progetti, e per te quando controlli il tuo lavoro. Legge il design e non lo cambia mai, quindi niente può essere spostato o eliminato per sbaglio. Passa il puntatore su qualsiasi cosa per misurarla, fai clic per vederne le specifiche, e fai clic su un valore qualsiasi per copiarlo.

::: figure inspect
Il design ispezionato: il pulsante selezionato con larghezza e altezza, in rosa le distanze da ciò su cui sta il puntatore, e nel pannello le sue specifiche e il suo codice.
:::

## La modalità Ispeziona {#inspect-mode}

Scegli {Ispeziona} nel selettore in alto a destra della finestra, premi {{⌃I}} o scegli {Finestra › Ispeziona}. In modalità Prototipo, il pulsante {Ispeziona} nella scheda {Codice} fa lo stesso. Il suggerimento del selettore: “Ispeziona il design come verrà costruito: misure, distanze, aspetto e codice”.

Il design viene ispezionato sulla carta millimetrata del prototipo. Se arrivi dal prototipo, i suoi fili sfumano mentre compaiono le misure; se arrivi da Design, restano nascosti. Gli strumenti si fanno da parte, come in [modalità Prototipo](/docs/prototype.html#prototype-mode), e il pulsante a destra della barra superiore è {Riproduci}.

- **Legge soltanto.** {{⌫}} non fa nulla, e {Taglia}, {Incolla} ed {Elimina} nel menu Modifica sono disattivati. Niente sulla tela si sposta quando trascini.
- **Una cosa alla volta.** Se erano selezionati più livelli, resta selezionato solo il primo.
- **Design che puoi solo leggere.** Un design che qualcuno ha condiviso con te in sola lettura si può comunque ispezionare per intero, compresi valori, codice e risorse. Vedi [Condivisione](/docs/sharing.html).

Per uscire, premi di nuovo {{⌃I}}, che torna al prototipo, o scegli {Design} nel selettore. Anche {{⌃P}} torna direttamente a Design.

## Selezionare {#picking}

Il puntatore trova la cosa più piccola che ha sotto: un livello, a qualsiasi profondità si trovi in gruppi e copie di componenti; la schermata stessa dove non c’è altro; o una schermata dal suo nome sopra l’angolo in alto a sinistra. Si possono ispezionare anche i livelli sparsi sulla tela, fuori da qualsiasi tavola.

- **Fai clic** per selezionare ciò che il puntatore trova.
- **Fai di nuovo clic** su ciò che è selezionato, o su qualsiasi cosa al suo interno, per selezionare la cosa che lo contiene: il gruppo in cui si trova, poi il gruppo che contiene quello, e così via fino alla schermata. Un altro clic torna dentro, alla cosa più piccola.
- **{{Esc}}** seleziona anch’esso la cosa che contiene la selezione. Con la schermata selezionata, deseleziona.
- **Fai clic sulla carta vuota** per deselezionare.
- **Trascina ovunque** per spostare la vista, come una mano sposta un foglio di carta. Una pressione senza movimento è un clic. Funziona anche tenere premuto {{Space}} e trascinare.

Nel pannello, i nomi sopra il nome del livello selezionato sono i gruppi e la schermata in cui si trova: fai clic su uno per selezionarlo.

## Misurare {#measuring}

Le misure sono disegnate sulla tela come in un disegno tecnico, e ognuna cresce dal suo centro quando cambia ciò che viene mostrato. Ogni distanza è misurata tra i riquadri dritti in cui sono disegnati i livelli, in punti, con un decimale.

- **Senza nulla selezionato,** ciò su cui sta il puntatore è contornato a matita, con larghezza e altezza sotto (“320 × 48”).
- **Il livello selezionato** è contornato, con la larghezza su una linea lungo il bordo superiore e l’altezza su una linea lungo il bordo destro, ognuna con una tacca a ciascuna estremità e il numero su una piccola pillola. Un livello ruotato viene misurato con la sua larghezza e altezza, non con il riquadro che occupa.
- **Passa il puntatore su un altro livello,** e le distanze dal livello selezionato a quello vengono disegnate in rosa, il colore che la tela dà agli spazi, con l’altro livello contornato in rosa. Dove i due si fronteggiano attraverso uno spazio, lo spazio è ombreggiato con un fine tratteggio rosa.
- **Passa il puntatore sul livello selezionato stesso,** e Bezzle misura a che distanza si trova all’interno di ciò che lo contiene: la cosa che lo contiene, quella che un clic selezionerebbe, contornata a tratteggio con il suo nome sopra l’angolo in alto a sinistra.
- **Con una schermata selezionata,** passare il puntatore su un suo livello misura da quel livello ai bordi della schermata.

Le distanze mostrate dipendono da come sono disposti i due riquadri:

| Come sono disposti | Cosa viene misurato |
| --- | --- |
| Uno dentro l’altro | Da ciascuno dei quattro lati del riquadro interno dritto fino al lato del riquadro esterno, passando per il centro del riquadro interno. |
| Separati, uno di fronte all’altro | Lo spazio tra i lati che si fronteggiano, passando per il centro della parte in cui si sovrappongono. Dove non si sovrappongono affatto, la linea corre all’altezza del centro del livello selezionato, e una linea tratteggiata prosegue per mostrare dove incontra il bordo dell’altro livello. I riquadri separati in entrambe le direzioni hanno una distanza in orizzontale e una in verticale. |
| In parte sovrapposti | La distanza tra ciascun lato dell’uno e lo stesso lato dell’altro. |

Una linea troppo corta per contenere il suo numero ha il numero accanto.

## Il pannello di un livello selezionato {#layer-panel}

Seleziona un livello e il pannello mostra, dall’alto, dove si trova, il suo riquadro, il suo testo (per i testi), il suo aspetto, la griglia di layout (per una schermata), il suo codice, e il livello come file. Ogni numero e nome che contiene si copia con un clic (vedi [Copiare i valori](/docs/inspect.html#copying)).

::: fields
- **Dove si trova**: fino a tre dei gruppi e della schermata che contengono il livello, separati da ›, con … quando ce ne sono di più; un clic su uno lo seleziona. Sotto, il nome e il tipo del livello, o {Componente} per una copia di un componente. Per una copia, o per un livello al suo interno, un’etichetta mostra il nome del componente e la variante mostrata; un clic sull’etichetta seleziona la copia.
- **Il riquadro**: disegnato come lo disegnano gli strumenti di un browser. Il livello è un riquadro a matita con larghezza × altezza al centro, dentro un riquadro tratteggiato che porta il nome di ciò che lo contiene, con in rosa la distanza da ciascun suo lato a quello del contenitore. Una distanza sotto lo zero, dove il livello sporge, è mostrata in rosso. Sotto, {X} e {Y}, la posizione del livello sulla sua schermata, e di quanti gradi è ruotato, quando lo è.
- **Testo**, per i testi: un campione “Ag” nello stile del font, la famiglia ({Sistema} per il font del Mac), lo stile con il suo peso come lo conta il CSS (“Semibold · 600”), e il nome del suo stile di testo quando ne ha uno. Poi {Dimensione}; {Interlinea}, oppure {Auto} con accanto l’interlinea propria del font; {Spaziatura lettere} in punti e in percentuale, quando non è 0; {Allinea} quando non è a sinistra; {Maiuscole} quando è impostato; {Colore}, o il tipo di sfumatura. Poi le parole stesse, copiate per intero con un clic e, quando alcune parole sono impostate in modo diverso, fino a sei righe che dicono come, ognuna con le parole che lo hanno.
- **Aspetto**: una riga per ogni {Riempimento} (il suo colore, la sfumatura o l’immagine, quello più in alto per primo), {Bordo} (spessore, {All’interno}, {Al centro} o {All’esterno}, e colore), {Angoli} (un raggio, o quattro quando sono diversi), {Ombra} (x, y, sfocatura e diffusione, il suo colore, e {All’interno} per un’ombra interna), {Opacità} in percentuale, {Fusione} e {Sfocatura} (il suo raggio, e {Dietro} per una sfocatura dello sfondo). Viene elencato solo ciò che il livello ha. Ogni aspetto che nel design ha un nome porta il nome come etichetta.
- **Griglia di layout**, per una schermata che ne ha una: {Colonne} e {Righe} come numero × la misura di ciascuna, con {Spaziatura} e {Margine}, e {Linea di base}.
- **Codice**: il livello in {CSS} o {SwiftUI}, scelto con il piccolo selettore accanto al titolo, con {Copia CSS} o {Copia SwiftUI} sotto. Il codice si può scorrere di lato e il suo testo si può selezionare. Vedi [Codice](/docs/inspect.html#code).
- **Il livello come file**: la sua immagine su una scacchiera, da trascinare fuori, con {PNG}, {SVG} e {PDF}, le dimensioni {1×}, {2×} e {3×} per il PNG, e {Copia}. Vedi [Risorse](/docs/inspect.html#assets).
:::

## Copiare i valori {#copying}

Fai clic su un valore qualsiasi nel pannello per copiarlo: un numero, un colore, un font, un nome. Si illumina mentre ci passi sopra, e una spunta compare per un momento quando è copiato. Il suo suggerimento mostra esattamente cosa verrà copiato.

I valori vengono copiati come li scrive il codice che hai scelto nella scheda {Codice}, e quella scelta viene ricordata:

| Valore | Con CSS scelto | Con SwiftUI scelto |
| --- | --- | --- |
| Un colore | `#3366FF`, o `rgba()` quando è trasparente | `Color(red: 0.2, green: 0.4, blue: 1)`, con `.opacity()` quando è trasparente |
| Una dimensione del testo, un’interlinea o degli angoli | Con px: `16px` | Il numero: `16` |
| Spaziatura tra le lettere | In em: `0.02em` | In punti |
| Una famiglia di font | La serie di font CSS | Il nome della famiglia |
| Una sfumatura, un’immagine o un’ombra | Come la scrive il CSS | Come la scrive SwiftUI |
| L’etichetta di un aspetto con nome | La sua proprietà personalizzata: `var(--color-brand-blue)` | Il suo token: `Tokens.Colors.brandBlue` |

Le misure e le distanze del riquadro vengono copiate come semplici numeri.

## Codice {#code}

La scheda {Codice} scrive il livello selezionato in CSS o SwiftUI, con gli aspetti chiamati con i nomi che il tuo design dà loro: ovunque un aspetto ha un nome, il codice usa il suo token, e in CSS il valore semplice sta accanto in un commento. Nella scheda, i commenti sono tenui, le proprietà più discrete e i token nel blu della matita.

Un gruppo porta con sé ciò che contiene, con ogni livello posizionato dove si trova, fino a tre livelli di profondità e 16 livelli in tutto; un commento dice quanti altri ce ne sono (`and 4 more layers`, in inglese come il codice). Una schermata viene scritta come un riquadro a sé: la sua misura, lo sfondo, gli angoli e il ritaglio.

### CSS {#css}

La classe della regola è il nome del livello, in minuscolo con i trattini: un livello chiamato “Sign in button” diventa `.sign-in-button`. Dice:

- **Misura**: `width` e `height`. Il testo con {Larghezza automatica} è `white-space: nowrap`, il testo con {Altezza automatica} imposta solo la larghezza, e il testo con {Fissa} entrambe. Una linea è larga quanto la sua lunghezza e alta 0, disegnata con `border-top`. Un livello ruotato riceve `transform: rotate()`.
- **Riempimenti**: `background`, quello più in alto per primo: colori, `linear-gradient()` e `radial-gradient()`, e immagini come `url()` con `cover`, `contain` o `100% 100%` a seconda che l’immagine riempia, si adatti o si allunghi. Il testo prende il suo colore come `color`, e una sfumatura attraverso `background-clip: text`.
- **Bordi**: uno all’interno è `border` con `box-sizing: border-box`; uno centrato è un `outline` spostato verso l’interno di metà del suo spessore; uno all’esterno è un `outline`. I bordi tratteggiati sono `dashed`. Il testo usa `-webkit-text-stroke`.
- **Angoli**: `border-radius`, con quattro valori quando sono diversi, e `50%` per un’ellisse.
- **Effetti**: `box-shadow` (`text-shadow` per il testo), `opacity`, `mix-blend-mode`, `filter: blur()` o, per una sfocatura dello sfondo, `backdrop-filter: blur()`, e `overflow: hidden` per una schermata che ritaglia e per una maschera.
- **Testo**: `font-family`, `font-size`, `font-weight`, `font-style`, `line-height` quando è impostata, `letter-spacing`, `text-align`, `text-transform` o il maiuscoletto, `text-decoration`, e un commento per lo spazio dopo i paragrafi.
- **Ciò che un gruppo contiene**: il gruppo è `position: relative`, e ogni livello al suo interno una regola a sé, `position: absolute` con `left` e `top`.

### SwiftUI {#swiftui}

- **Il testo** è `Text("…")` con il suo font (`.system(size:weight:)` per il font del Mac, `.custom()` per gli altri), la spaziatura tra le lettere, l’interlinea, il colore, l’allineamento, le maiuscole, la sottolineatura e il barrato, e un frame che dipende da come si dimensiona il suo riquadro. Uno stile di testo con un nome è `.typeToken()`.
- **Rettangoli ed ellissi** sono `Rectangle()`, `RoundedRectangle()`, `Capsule()`, `Circle()`, `Ellipse()` o `UnevenRoundedRectangle()`, con gli angoli morbidi come `.continuous`, riempiti con il loro colore o la loro sfumatura, e i bordi come overlay. Un rettangolo riempito con un’immagine è `Image()` ritagliata sulla sua forma.
- **I gruppi** sono uno `ZStack` della loro misura, con ogni livello portato al suo posto con `.offset()`. Una schermata è uno `ZStack` della sua misura, con un commento che dice quanti livelli contiene. Schermate e maschere sono `.clipped()`.
- **Le linee** sono un sottile `Rectangle()`, ruotato secondo il loro angolo.
- **I tracciati** sono un `Image()` che porta il nome del livello, con un commento che invita a esportare il disegno in SVG o PDF.
- **Effetti**: ombre come `.shadow()` o `.shadowToken()`, un commento per un’ombra interna, `.opacity()`, `.blendMode()`, `.blur()`, e per una sfocatura dello sfondo `.ultraThinMaterial` con un commento che dice di quanto.

`.typeToken()`, `.shadowToken()` e i nomi `Tokens` vengono dal file di token SwiftUI (vedi sotto).

## Risorse {#assets}

L’ultima scheda è il livello selezionato come file, per un’icona, un’illustrazione o una foto che servono alla costruzione.

::: fields
- **L’immagine**: il livello come è disegnato, alla sua misura o più piccolo per starci, su una scacchiera; su una scacchiera scura quando il livello stesso è chiaro. Trascinala nel Finder, o nel codice, e lì diventa un file, con il nome del livello, seguito da `@2x` o `@3x` a quelle dimensioni.
- **PNG**, **SVG**, **PDF**: il formato del file. SVG e PDF restano nitidi a qualsiasi dimensione.
- **1×**, **2×**, **3×**: per il PNG, quanti pixel per punto.
- **Copia**: mette il file negli appunti. Un PNG si incolla come immagine; un SVG si incolla come immagine dove può andare un’immagine, e come testo nel codice; un PDF come PDF.
:::

Il formato e la dimensione che scegli vengono ricordati; all’inizio sono PNG a 2×. Il suggerimento dell’immagine dice cosa otterrai (“PNG @2x”). Un livello esce grande solo quanto ciò che dipinge, ombra compresa, su un fondo vuoto, come quando lo [esporti](/docs/export.html#layers).

## Il design nel suo insieme {#design}

Senza nulla selezionato, il pannello mostra di cosa è fatto l’intero design.

::: fields
- **Colori**: i colori a cui hai dato un nome, ciascuno con il suo nome, poi fino ad altri dieci tra quelli più usati dai livelli per riempimenti, bordi e testi, con il loro valore (e la loro opacità quando sono trasparenti). Un clic copia il token di un colore con nome, o il valore di un altro colore.
- **Testo**: ogni stile di testo a cui hai dato un nome, come un campione di se stesso con famiglia, stile, dimensione e interlinea, poi fino ad altri sei modi in cui il testo è impostato più spesso. Un clic copia il token dello stile, o il testo come codice.
- **Codice**: i token del design e {Costruiscilo con Claude}, come in [modalità Prototipo](/docs/prototype.html#handing-on).
- **Contrassegnati per l’esportazione**: fino a 24 livelli contrassegnati per l’esportazione (qui le tavole sono escluse), ognuno come una piccola immagine da trascinare fuori come il primo file prodotto dalla sua [scheda Esporta](/docs/export.html#marking). Un clic su uno lo seleziona. {Esporta…} apre la finestra Esporta.
:::

Le schede senza nulla da mostrare vengono omesse.

## Design token {#tokens}

I pulsanti {CSS}, {SwiftUI} e {JSON} nella scheda {Codice} copiano in una volta tutti gli aspetti con un nome del design, come un file da incollare nel progetto. Dai un nome a colori, testi, ombre e angoli nel design (vedi [Componenti, stili e librerie](/docs/components.html)), e arrivano qui. Due aspetti dello stesso tipo con lo stesso nome diventano “Blu” e “Blu 2”. Quando il design ha tavole scure, o un aspetto ha una versione scura, il valore scuro di ogni aspetto lo accompagna (vedi [Chiaro e scuro](/docs/dark.html)).

| Formato | Cosa contiene |
| --- | --- |
| CSS | Proprietà personalizzate su `:root`, raggruppate come Colors, Type, Shadows e Corners: `--color-…`, `--gradient-…`, `--font-…-family`, `-size`, `-weight`, `-line-height` e `-letter-spacing`, `--shadow-…` e `--radius-…`. I valori scuri in `@media (prefers-color-scheme: dark)`. Una classe `.text-…` per ogni stile di testo. |
| SwiftUI | Un `enum Tokens` con `Colors`, `Gradients`, `Typography`, `Shadows` e `Corners`. Un colore con un valore scuro è `Color(light:dark:)`, con la piccola estensione che lo crea. Gli stili di testo e le ombre arrivano con `TypeToken` e `ShadowToken` e i modificatori `.typeToken()` e `.shadowToken()`. |
| JSON | Il formato del W3C Design Tokens Community Group, nei gruppi `color`, `typography`, `shadow` e `radius`, ognuno con il suo `$type`, il suo `$value` e il nome come `$description`. Un valore scuro sta sotto `$extensions` come `com.bezzle.dark`. |

I nomi sono scritti come li scrive il codice: “Brand blue” è `brand-blue` in CSS e JSON e `brandBlue` in Swift. Finché il design non ha ancora nomi, i pulsanti restano tenui e non copiano nulla.

## Il menu {#menu}

Fai clic con il tasto destro su qualsiasi cosa sulla tela per il suo menu. Seleziona ciò che sta sotto il puntatore, a meno che non si trovi dentro ciò che è già selezionato, che allora resta selezionato.

| Voce | Copia |
| --- | --- |
| {Copia CSS} | Il livello in CSS, come lo scrive la scheda {Codice}. |
| {Copia SwiftUI} | Il livello in SwiftUI. |
| {Copia come PNG} | Il livello come immagine, a 2×. |
| {Copia come SVG} | Il livello in SVG, come immagine e come testo. |
| {Copia nome} | Il nome del livello. |
| {Copia testo} | Per un testo: le sue parole. |

## Tasti {#keys}

| Tasto | In modalità Ispeziona |
| --- | --- |
| {{⌃I}} | Torna al prototipo. |
| {{⌃P}} | Torna a Design. |
| {{Esc}} | Seleziona la cosa che contiene la selezione; dalla schermata, deseleziona. |
| {{Space}} | Tienilo premuto e trascina per spostare la vista. |
| {{⌘Return}} o {{Return}} | Riproduce il prototipo. |
| {{⌫}} | Non fa nulla: Ispeziona non cambia niente. |

Un assistente IA collegato a Bezzle può leggere le stesse misure, specifiche e codice. Vedi [Assistenti IA](/docs/ai.html).
