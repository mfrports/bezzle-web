---
title: Chiaro e scuro
nav: Chiaro e scuro
lede: Mostra qualsiasi tavola in scuro con un clic. Bezzle dà un nome ai suoi colori e disegna per ognuno un aspetto scuro, che puoi rifinire a mano, mentre ogni tavola chiara resta com’è.
---

In Bezzle un aspetto scuro non è un secondo design da tenere al passo. È la stessa tavola, mostrata in scuro: ogni suo colore ha un nome, e ogni nome ha un aspetto alla luce e un aspetto al buio. Cambia l’aspetto chiaro di un colore e il suo aspetto scuro lo segue da solo, finché non imposti l’aspetto scuro a mano. Così un design può essere chiaro e scuro insieme, e restare un solo design.

::: figure dark
Un clic disegna l’aspetto scuro di una tavola, colore per colore.
:::

## Rendere scura una tavola {#make-dark}

::: steps
1. **Seleziona una sola tavola da disegno.**
2. **Punta il pulsante tratteggiato {Scuro}** in fondo all’ispettore ({Mostra questa tavola da disegno in scuro}). La tela mostra tutta la tavola in scuro prima che cambi qualcosa.
3. **Fai clic.** L’aspetto scuro si stende sulla tavola a partire dal suo angolo in alto a destra, e il trackpad dà un colpetto. Si apre la scheda Scuro.
:::

Subito dopo, accanto alla tavola compare un avviso che propone {Una chiara accanto}, con {Aggiungi}, per mettere una copia chiara vicino a quella scura (vedi [Chiaro e scuro affiancati](#side-by-side)). Scompare dopo circa otto secondi.

Rendere scura una tavola è un solo passo in Annulla. Una tavola bloccata non si può rendere scura.

## Come nasce l’aspetto scuro {#how-it-works}

### Ogni colore riceve un nome {#naming}

Quando rendi scura una tavola, ogni suo colore che non ha ancora un nome ne riceve prima uno: lo sfondo della tavola stessa, ogni riempimento attivo, il colore di ogni bordo attivo, e il colore delle lettere di ogni testo. Ognuno diventa uno [stile](/docs/components.html#styles) chiamato come Bezzle chiama qualsiasi colore (`Bianco`, `Grigio chiaro`, `Blu`, `Verde scuro`), con un numero quando il nome è già preso (`Blu 2`). Una sfumatura diventa uno stile chiamato `Sfumatura`.

Lo stesso colore, usato nello stesso modo, su ogni tavola chiara del design prende subito lo stesso nome. È questo che tiene insieme chiaro e scuro: cambia `Blu` su una tavola chiara e cambia anche su quella scura, nel suo aspetto scuro.

### Come ogni colore diventa scuro {#darkening}

Ogni colore con un nome viene scurito per conto suo, secondo quanto appare chiaro all’occhio e non secondo i suoi numeri:

- **I fondi pallidi diventano profondi**, e mantengono l’ordine in cui stanno l’uno sull’altro: una scheda resta più chiara della pagina su cui sta. I fondi pallidi molto colorati mantengono solo un accenno della loro tinta, così non brillano al buio.
- **Gli inchiostri scuri diventano pallidi**: più un inchiostro è scuro, più diventa pallido.
- **I colori intermedi si schiariscono un poco**, per leggersi bene sullo scuro, e mantengono quasi tutto il loro colore.
- **Le sfumature** diventano scure colore per colore.
- **Le ombre si fanno più profonde**: un’ombra con un nome diventa nera e più forte al buio.
- **I caratteri e gli angoli** restano come sono.

### Parole che mantengono il loro colore {#words-keep}

Bezzle guarda su cosa sta ogni testo, così come sarà al buio. Dove il colore del testo si legge meglio mantenuto com’è che scurito, lo mantiene: parole bianche su un pulsante blu restano bianche, mentre parole nere su una pagina bianca diventano pallide. Un colore che si mantiene è uno stile distinto dallo stesso colore che si scurisce, così il bianco su un pulsante e il bianco come fondo di una pagina possono andare ognuno per la sua strada.

### Cosa resta com’è {#unchanged}

- **Le immagini** non vengono mai cambiate.
- **Le ombre senza nome** restano come sono. Dai un nome a un’ombra (vedi [dare un nome a un aspetto](/docs/components.html#name-look)) per darle un aspetto scuro.
- **Le tavole chiare** mantengono esattamente il loro aspetto chiaro. I loro colori possono prendere i nuovi nomi, ma niente del loro aspetto cambia.

## La scheda Scuro {#dark-card}

Una tavola che è stata resa scura mantiene una scheda Scuro. Si chiama {Scuro} mentre la tavola è mostrata in scuro e {Chiaro} mentre è mostrata in chiaro.

::: fields
- **Sole e luna** (sulla riga chiusa): passano la tavola dal chiaro allo scuro e viceversa con un clic. Il cambio si stende sulla tavola ogni volta. Mostrata in chiaro, la tavola mantiene la scheda, così il suo aspetto scuro è sempre a un clic di distanza.
- **Riepilogo**: quanti degli stili sulla tavola hai regolato a mano per lo scuro, per esempio `2 su 9 modificati`. Non compare niente finché non ne regoli uno.
- {Versione chiara accanto}: aggiunge accanto alla tavola una sua copia chiara.
- La **×** ({Senza aspetto scuro}): rende la tavola chiara per sempre, senza più l’interruttore per lo scuro; se era mostrata in scuro, diventa chiara. I suoi stili restano come sono, aspetti scuri compresi, per le altre tavole che li usano.
:::

## Rifinire l’aspetto scuro {#fine-tune}

L’aspetto scuro di un colore si crea da solo, finché non lo crei tu a mano. Ci sono due modi.

- **Sulla tavola scura.** Seleziona un livello qualsiasi su di essa e cambia il suo riempimento, il colore del suo bordo o delle sue lettere, o un’ombra con un nome. Siccome l’aspetto ha un nome, stai cambiando l’aspetto scuro dello stile: ogni livello con quello stile su ogni tavola scura segue, e le tavole chiare restano come sono. Da quel momento quell’aspetto scuro è tuo.
- **Nel kit di stili.** Fai clic su una parte vuota della tela per vedere gli stili del design. Fai clic su un colore o su un’ombra, e scegli il sole o la luna sopra i suoi controlli per cambiarne l’aspetto chiaro o l’aspetto scuro. Mentre modifichi un aspetto scuro fatto a mano, {Automatico} lo fa tornare scuro da solo, a partire dal suo aspetto chiaro. Vedi [il kit di stili](/docs/components.html#style-kit).

Finché il design ha qualcosa di scuro, ogni colore nel kit di stili mostra sul suo campione entrambi i suoi aspetti: quello chiaro e, accanto, quello scuro con una piccola luna.

Cambia l’aspetto chiaro di uno stile su una tavola chiara, e un aspetto scuro che non hai impostato a mano lo segue, scurito di nuovo da solo. Un aspetto scuro che hai impostato a mano resta come l’hai fatto.

## Chiaro e scuro affiancati {#side-by-side}

Per mostrare un design in chiaro e in scuro uno accanto all’altro, fai clic su {Versione chiara accanto} nella scheda Scuro, o su {Aggiungi} nell’avviso che compare subito dopo aver reso scura una tavola. Bezzle aggiunge una copia chiara che prende il nome della tavola (`Home chiaro`), senza interruttore per lo scuro, 80 punti a destra dell’ultima tavola della sua fila.

Le due sono lo stesso design, unite dai loro stili: cambia un colore con un nome su una delle due e seguono entrambe, ognuna nel suo aspetto. Ciò che non ha un nome, come le parole che scrivi e i livelli che aggiungi, appartiene solo a ciascuna tavola.

## Stili in entrambi gli aspetti {#styles-both}

- **Dare un nome a un aspetto su una tavola scura** crea uno stile i cui aspetti chiaro e scuro sono uguali: dare un nome non cambia mai ciò che vedi. Il suo aspetto scuro è allora tuo, quindi resta com’è quando cambi l’aspetto chiaro, finché non fai clic su {Automatico} nel kit di stili.
- **Usare uno stile** dà a ogni livello l’aspetto della tavola su cui si trova: l’aspetto scuro su una tavola scura, quello chiaro altrove.
- **Spostare un livello** da una tavola chiara a una scura, o viceversa, mostra il suo altro aspetto.
- **Le copie dei componenti** su una tavola scura mostrano gli aspetti scuri dei loro stili, mentre il componente stesso resta in chiaro.
- **Gli stili presi da un altro design** portano con sé i loro aspetti scuri. Vedi [librerie](/docs/components.html#libraries).

## Parti, esportazioni e codice {#parts-export-code}

- **Le parti dei kit e le icone** arrivano scure su una tavola il cui colore è scuro, e il pannello Risorse le disegna scure mentre guardi una tavola così. Vedi [il pannello Risorse](/docs/components.html#resources-panel).
- **Le esportazioni** mostrano una tavola come la vedi: una tavola scura esce scura. Vedi [Esportazione](/docs/export.html#boards).
- **Il codice**: dovunque il design abbia una tavola scura o un aspetto scuro fatto a mano, i token copiati dalla scheda Codice portano entrambi gli aspetti: il CSS mette i colori scuri sotto `@media (prefers-color-scheme: dark)`, SwiftUI dà a ognuno di quei colori un valore chiaro e uno scuro, e il JSON aggiunge a ogni token il valore scuro. Vedi [token di design](/docs/inspect.html#tokens).

Avanti: scopri di più sugli stili che fanno funzionare tutto questo in [Componenti, stili e librerie](/docs/components.html), o impila molti post su una sola tavola con le [pile](/docs/decks.html).
