---
title: Importare i design
nav: Importa
lede: Apri i file di Adobe XD, Figma, Sketch e Photoshop come design di Bezzle, con tavole, livelli, maschere, testi e immagini, oppure importa qualsiasi pagina web come livelli, e scopri in un breve resoconto cosa appare un po’ diverso.
---

Per lavorare in Bezzle non devi ricominciare da capo. Un file di Adobe XD, Figma, Sketch o Photoshop arriva come un nuovo design che puoi modificare come qualsiasi altro, e una pagina web arriva come livelli, con una tavola per ogni larghezza a cui la leggi. Tutto ciò che Bezzle sa disegnare arriva così com’è. Ciò a cui può solo avvicinarsi viene contato in un resoconto, così sai cosa controllare.

## Come importare {#ways-in}

- **{Archivio › Importa da XD, Figma, Sketch o Photoshop…}** o {{⇧⌘I}}: una finestra che mostra solo quei file. Puoi sceglierne diversi in una volta. Il suo messaggio dice: “Ogni file diventa un nuovo design nella tua cartella Bezzle. Il file originale resta com’è.”
- **{Archivio › Apri…}** o {{⌘O}}: apre sia i design di Bezzle sia questi file. Lo stesso fa {Apri…} in alto a destra nella schermata Home.
- **Trascina i file sulla schermata Home.** La finestra dice “Rilascia per aprire”.
- **Trascinali sull’icona di Bezzle** nel Dock.
- **Nel Finder,** scegli Apri con › Bezzle sul file.
- **{Archivio › Importa da un sito web…}** o {{⌥⇧⌘I}}, oppure {Da un sito web…} nella schermata Home: importa una pagina web. Trascinare un link da un browser sulla schermata Home apre la stessa finestra con quell’indirizzo. Vedi [Pagine web](/docs/import.html#websites).

| Da | File | Prima di importarlo |
| --- | --- | --- |
| Adobe XD | `.xd` | Niente. |
| Figma | `.fig` | In Figma, usa Save local copy per ottenere un file `.fig`. |
| Sketch | `.sketch` | Salvato con Sketch 43 o successivo. |
| Photoshop | `.psd`, `.psb` | Niente. |

## Cosa succede {#what-happens}

Ogni file diventa un **nuovo design** nella tua cartella dei design, con il nome del file (“Onboarding 2” quando quel nome è già preso), e si apre in un pannello tutto suo. Le sue immagini vengono copiate nel design, quindi in seguito non ha bisogno di nulla dal file. Il file stesso resta esattamente com’era.

Aprire di nuovo lo stesso file lo importa di nuovo, come un altro nuovo design. Le modifiche che hai fatto al primo restano nel primo.

Bezzle ha una sola tela, quindi un file con più pagine le dispone su di essa una sotto l’altra: la prima dov’era, ognuna delle altre 800 punti sotto la precedente, allineata a sinistra. Il design si apre con uno zoom che mostra tutto.

Un documento Photoshop può richiedere un momento, perché le foto di un mockup sono grandi. Mentre viene letto, il suo pannello mostra l’immagine del file stesso, come la mostra il Finder, che si sviluppa come una stampa: prima pallida e morbida, poi sempre più nitida man mano che i livelli vengono letti, con una linea sottile che indica a che punto è e il nome del livello che sta leggendo.

## Il resoconto dell’importazione {#report}

Quando un design è arrivato, una scheda in fondo alla tela dice com’è andata.

::: fields
- **Importato da Figma**: l’app o, per una pagina web, il sito.
- **Quanto**: “4 tavole da disegno e 312 livelli.”
- **Cosa controllare**: “È stato importato tutto così com’è.”, oppure “Alcune cose qui appaiono un po’ diverse:” con una riga per ogni cosa che è stata approssimata e quante volte, la più frequente per prima. Vengono mostrate le prime cinque; {Ancora 3…} mostra le altre.
- **Font**: “Font non presenti su questo Mac, mostrati con un altro:” e i loro nomi. Installali e il testo li usa; il design continua a chiederli per nome.
- **Fine**: chiude la scheda.
:::

Le righe sono scritte con parole semplici, come “Sfumature angolari, disegnate come radiali” o “Livelli di regolazione omessi”. La sezione di ogni app qui sotto elenca cosa può dire il suo resoconto.

## Cosa arriva da XD, Figma e Sketch {#common}

- **Le tavole** restano tavole, con le loro misure e posizioni, e i livelli sparsi sulla tela restano sparsi.
- **I livelli** mantengono i loro nomi, il loro ordine e i loro gruppi, e restano nascosti o bloccati come erano. Rettangoli, ellissi e linee restano ciò che sono; tutto il resto disegnato diventa un tracciato. Un livello ruotato mantiene la sua rotazione; uno inclinato o deformato in un modo che un riquadro e una rotazione non sanno esprimere diventa un tracciato del suo contorno.
- **Il testo** resta testo modificabile, nei suoi font, dimensioni, colori e spaziature, con le parole di stile diverso mantenute tali, e il dimensionamento del suo riquadro ({Larghezza automatica}, {Altezza automatica} o {Fissa}) com’era. Il San Francisco di Apple diventa il font {Sistema} di Bezzle.
- **Le maschere** diventano quelle di Bezzle: un gruppo la cui prima forma contiene il resto, tagliato lungo il suo contorno (vedi [Immagini e foto](/docs/pictures.html)). Una maschera fatta di testo o di una linea ritaglia secondo il suo riquadro.
- **L’aspetto**: colori, sfumature lineari e radiali, immagini, più riempimenti su un livello, bordi, ombre (anche interne), sfocature, opacità e metodi di fusione.
- **Le griglie di layout e le guide** sulle tavole diventano quelle di Bezzle (vedi [Layout e ogni misura](/docs/layout.html)).
- **Componenti e simboli** arrivano come ciò che mostrano: un gruppo dei livelli del master con le modifiche proprie di ogni istanza, testi e immagini compresi. In Bezzle non sono collegati tra loro. Per farli tornare componenti, vedi [Componenti](/docs/components.html).

Cosa non arriva: i collegamenti tra le schermate (disegnali di nuovo in [modalità Prototipo](/docs/prototype.html)), e gli stili condivisi, che arrivano come gli aspetti che danno e non come stili con un nome.

## Adobe XD {#xd}

Un file XD arriva con le sue tavole e i livelli del suo tavolo di montaggio, le istanze dei componenti come ciò che mostrano, maschere, griglie di layout (le loro colonne) e guide. Le griglie di ripetizione diventano [griglie di ripetizione](/docs/layout.html) di Bezzle, lette dall’alto a sinistra, con ogni cella che mantiene i suoi testi e le sue immagini; una le cui celle non sono uguali arriva come un semplice gruppo. Il testo in area mantiene il suo riquadro ({Fissa}), il testo ad altezza automatica cresce con le sue parole, e il testo a punto è {Larghezza automatica}.

Cosa può dire il resoconto:

- Griglie di ripetizione, importate come gruppi
- Istanze di componenti senza master
- Maschere che non è stato possibile trovare
- Maschere di testo o linee, che ritagliano secondo il loro riquadro
- Forme composte senza contorno
- Angoli arrotondati dei poligoni, disegnati vivi
- Sfumature radiali ruotate o deformate
- Sfumature misurate sull’area di lavoro, posizionate in base al livello
- Sfumature senza colori
- Testi deformati, impostati alla dimensione con cui appaiono
- Testi inclinati, raddrizzati
- Margini superiore e inferiore delle griglie di layout, omessi
- Griglie quadrate, omesse
- Metodi di fusione che Bezzle non conosce, resi come Normale
- Effetti che Bezzle non conosce
- Tipi di forma, livello o riempimento che Bezzle non conosce
- Immagini senza file, o mancanti nel file Adobe XD
- Tavole da disegno che non è stato possibile leggere

## Figma {#figma}

In Figma, usa Save local copy per ottenere un file `.fig`, poi importa quello. I frame che stanno direttamente su una pagina diventano tavole. I frame dentro altri frame diventano gruppi, tagliati lungo il loro frame quando ritagliano il contenuto. Le sezioni lasciano alla pagina ciò che contengono. Le pagine vengono disposte una sotto l’altra. Le istanze arrivano come ciò che mostrano, con i loro override e le proprietà dei componenti applicati.

Arrivano gli angoli morbidi, le sfocature progressive che crescono lungo un livello, le sfocature dello sfondo, le griglie di layout, le guide sui frame che stanno sulla pagina e gli elenchi nei testi. Il testo mantiene il modo in cui cresce: in larghezza, in altezza o per niente.

Cosa può dire il resoconto:

- Pagine, disposte sotto la prima
- Sezioni, tolte lasciando ciò che contengono
- Istanze di componenti senza master
- Componenti che contengono se stessi, lasciati vuoti all’interno
- Istanze ridimensionate in blocco, con il contenuto a grandezza piena
- Maschere di luminanza, che ritagliano secondo la loro forma
- Maschere alfa, che ritagliano secondo il loro contorno
- Maschere di testo o linee, che ritagliano secondo il loro riquadro
- Sfumature angolari, disegnate come radiali
- Sfumature a rombo, disegnate come radiali
- Sfumature senza colori
- Riempimenti sotto un’immagine, omessi
- Riempimenti fusi con quelli sottostanti, disegnati sopra di essi
- Immagini ritagliate, mostrate intere
- Immagini affiancate, che riempiono il livello una volta sola
- Immagini ruotate, mostrate dritte
- Immagini con colori regolati, mostrate così come sono
- Immagini trasparenti, mostrate opache
- Tavole da disegno trasparenti, disegnate opache
- Ombre e sfocature sulle tavole da disegno, omesse
- Sfocature progressive che partono già sfocate, fatte partire da zero
- Bordi su angoli arrotondati, disegnati come forme
- Bordi con spessore diverso su ogni lato, disegnati uguali
- Testi con un bordo, mostrati senza
- Testi riempiti con una sfumatura, nel suo primo colore
- Testi riempiti con un’immagine, in tinta unita
- Testi con più interlinee o spaziature tra paragrafi, spaziati come la loro parte principale
- Testi con funzioni o assi del font solo in una parte, composti come la loro parte principale
- Testi deformati, impostati alla dimensione con cui appaiono
- Testi inclinati, raddrizzati
- Griglie di layout su frame dentro altri frame, omesse
- Altre griglie di layout dello stesso tipo, omesse
- Griglie quadrate, omesse
- Guide sull’area di lavoro, omesse
- Guide su frame dentro altri frame, omesse
- Forme senza contorno, omesse
- Metodi di fusione che Bezzle non conosce, resi come Normale
- Effetti che Bezzle non conosce
- Tipi di livello o riempimento che Bezzle non conosce
- Immagini senza file, o mancanti nel file Figma

## Sketch {#sketch}

Un file Sketch arriva con ogni pagina, le sue tavole e i suoi master dei simboli come tavole. Quando la pagina Symbols contiene solo master che le istanze delle altre pagine mostrano, viene omessa, perché non si perde nulla. Un’istanza di simbolo viene impaginata di nuovo alla sua misura secondo le impostazioni di ridimensionamento dei suoi livelli, con i suoi override: testo, simboli sostituiti, immagini, e stili di livello e di testo. La tinta di un gruppo colora ciò che contiene. Arrivano gli angoli morbidi, le griglie di layout e le guide sulle tavole.

**I contrassegni di esportazione arrivano con il file:** le dimensioni, i formati e i suffissi di esportazione di ogni livello diventano la sua scheda Esporta in Bezzle, pronta per uscire (vedi [Contrassegnare per l’esportazione](/docs/export.html#marking)).

Cosa può dire il resoconto:

- Istanze di simboli senza master
- Simboli che contengono se stessi, omessi
- Override di simboli che Bezzle non conosce, lasciati come nel master
- Override di simboli in un formato precedente, lasciati come nel master
- Livelli annidati troppo in profondità o troppo numerosi, omessi
- Livelli che non sono forme dentro forme composte, omessi
- Gruppi con una tinta a sfumatura o immagine, lasciati senza tinta
- Maschere alfa, che ritagliano secondo il loro contorno
- Maschere di testo o linee, che ritagliano secondo il loro riquadro
- Bordi e ombre interne delle maschere, disegnati sopra ciò che contengono
- Angoli invertiti, smussati e squadrati, disegnati arrotondati
- Angoli morbidi sui tracciati, disegnati arrotondati
- Sfumature angolari, disegnate come lineari
- Sfumature senza colori
- Riempimenti con disturbo, omessi
- Riempimenti sotto un’immagine, omessi
- Riempimenti con un proprio metodo di fusione, resi come Normale
- Immagini sbiadite nel riempimento, disegnate opache
- Immagini con una tinta, mostrate nei loro colori
- Immagini affiancate, disegnate una volta sola per riempire
- Immagini che Bezzle non sa leggere, mostrate in grigio
- Ombre di forme senza riempimento né bordo, non proiettate
- Sfocature di movimento e zoom, rese come normali
- Punte di freccia sulle linee, omesse
- Testi di una versione di Sketch precedente, ricavati dai nomi dei livelli
- Testi con un bordo, disegnati senza
- Testi riempiti con una sfumatura, nel suo primo colore
- Testi riempiti con un’immagine, in tinta unita
- Testi con paragrafi allineati in modo diverso, allineati come la loro parte principale
- Testi con più interlinee o spaziature tra paragrafi, spaziati come la loro parte principale
- Testi con funzioni o assi del font solo in una parte, composti come la loro parte principale
- Testi deformati, impostati alla dimensione con cui appaiono
- Testi inclinati, raddrizzati
- Testi riflessi, resi nel verso di lettura normale
- Griglie quadrate, omesse
- Guide sull’area di lavoro, omesse
- Metodi di fusione che Bezzle non conosce, resi come Normale
- Tipi di livello o riempimento che Bezzle non conosce
- Pagine che non è stato possibile leggere
- Immagini mancanti nel file Sketch

## Photoshop {#photoshop}

Bezzle legge i documenti Photoshop pensando ai mockup: la foto di un telefono, di un portatile o di un poster, con il posto per un design tenuto come oggetto avanzato. Ogni livello arriva come un livello a sé, fuso con quelli sottostanti com’era, così un’ombra o un riflesso si possono ancora nascondere o cambiare.

- **Le tavole** del documento diventano tavole, con il loro colore di sfondo. Un documento senza tavole diventa una tavola della sua misura, con il nome del file, e un file unito è la sua unica immagine.
- **I livelli di pixel** diventano immagini, tagliati dalle loro maschere, dal livello a cui sono agganciati come maschera di ritaglio e dai gruppi in cui si trovano, con la loro opacità, l’opacità del riempimento e il metodo di fusione.
- **I livelli di riempimento a tinta unita** diventano forme, con il contorno della loro maschera vettoriale o l’intera area del documento.
- **Gli oggetti avanzati** diventano lo schermo di un mockup: l’immagine che contengono, fissata per i suoi quattro angoli dove si vede l’oggetto avanzato, vista dalla stessa angolazione. Rilascia un’immagine in qualsiasi punto sopra di esso, anche attraverso i riflessi e le ombre che ci stanno sopra, e l’immagine entra nello schermo.
- **Gli stili di livello**: le ombre esterne e interne diventano ombre di Bezzle, e una Traccia un bordo (o, su un livello di pixel, parte dei suoi pixel). Una Sovrapposizione colore o una Sovrapposizione sfumatura viene incorporata nei pixel del livello.
- **I livelli di testo** arrivano come immagini delle loro lettere.

Si possono leggere documenti nei metodi colore RGB, CMYK, Scala di grigio, Due tonalità, Scala di colore, Bitmap e Multicanale.

Cosa può dire il resoconto:

- Testo importato come immagine delle sue lettere
- Livelli di regolazione omessi
- Oggetti avanzati distorti importati come immagini
- Oggetti avanzati con maschera o ritaglio importati come immagini
- Oggetti avanzati che non è stato possibile aprire importati come immagini
- Maschere vettoriali sui gruppi applicate alle immagini che contengono
- Maschere vettoriali che Bezzle non sa applicare, omesse
- Stili di livello sui gruppi omessi
- Bagliori omessi
- Smussi e satinature omessi
- Sovrapposizioni pattern omesse
- Sfumature di disturbo omesse
- Riempimenti pattern omessi
- Livelli che non è stato possibile leggere

## Pagine web {#websites}

Bezzle può importare qualsiasi pagina web come design: carica la pagina senza mostrarla, la scorre tutta perché si carichi ogni cosa, e la scompone in livelli.

::: steps
1. **Scegli {Archivio › Importa da un sito web…}** ({{⌥⇧⌘I}}). Se negli appunti c’è un indirizzo web, è già inserito.
2. **Scrivi l’indirizzo** in {Indirizzo}, per esempio `example.com`. Bezzle aggiunge `https://` se lo ometti. Funziona anche un indirizzo `file:` di una pagina sul tuo Mac.
3. **Scegli le misure** a cui leggerla. Ognuna diventa una tavola a sé, affiancate.
4. **Lascia attivo {Nascondi i banner dei cookie}** per togliere i banner dei cookie e i veli che stendono sulla pagina. All’inizio è attivo.
5. **Fai clic su {Importa}** o premi {{Return}}. Il nuovo design si apre in un pannello tutto suo.
:::

| Misura | Larghezza | Letta in una finestra di |
| --- | --- | --- |
| {Desktop} | 1440 px | 1440 × 900 |
| {Tablet} | 768 px | 768 × 1024 |
| {Cellulare} | 390 px | 390 × 844, come la legge un telefono, e lo dice alla pagina |
| {Altra larghezza} | Qualsiasi, da 240 a 3840 px | Alta quanto uno schermo di quella larghezza; letta come da un telefono fino a 500 px |

All’inizio è scelto {Desktop}. Scegli tutte le misure che vuoi, e le tavole prendono il loro nome (“Desktop”, “Cellulare”, “1280 px”). Quando il sito risponde con un errore, il suo codice segue il nome, come “Desktop (404)”.

Mentre lavora, il pulsante {Importa} si riempie e una riga sotto dice cosa sta facendo Bezzle: “Caricamento della pagina…”, “Scorrimento della pagina…”, “Scomposizione della pagina…”, “Recupero delle immagini (12 di 40)…”, “Fotografia di ciò che non è una forma (2 di 5)…” e “Disposizione dei livelli…”, ognuna preceduta dal nome della misura quando ne hai scelte diverse. {Annulla} la ferma. Una pagina lunga richiede un po’ di tempo.

### Cosa arriva {#web-layers}

- **I riquadri** diventano forme, con i loro riempimenti, sfumature, bordi, angoli e ombre.
- **Il testo** diventa testo nei suoi font, disposto in righe come l’ha disposto il browser: un paragrafo che va a capo nel suo riquadro, oppure un testo per riga dove le parole scorrono attorno ad altri riquadri. Ogni font è il primo tra quelli richiesti dalla pagina che il tuo Mac ha, oppure quello con cui la pagina ha disegnato, nello stile più vicino per peso e inclinazione.
- **Le immagini** vengono scaricate e posizionate come le mostra la pagina, e gli **SVG** diventano tracciati che puoi modificare.
- **I gruppi** seguono la pagina: i livelli sono raggruppati come gli elementi della pagina si contengono l’un l’altro, nell’ordine in cui il browser li dipinge. Prendono il nome da ciò che sono, come {Intestazione}, {Navigazione}, {Sezione}, {Pulsante}, {Link}, {Elemento di elenco}, {Immagine}, {Campo} o {Piè di pagina}, oppure dalla classe o dall’id dell’elemento scritti come parole: “hero-banner” diventa “Hero banner”.
- **Ciò che non si può scomporre**, come i font di icone, i video, le pagine incorporate, i controlli dei moduli e i disegni su canvas, viene fotografato e arriva come immagine.
- **Il colore della pagina stessa** diventa quello della tavola. I menu nascosti fuori vista e le slide dei caroselli che stanno oltre il bordo vengono omessi.

Ogni tavola è alta quanto la pagina, fino a 30.000 punti. Il design prende il nome dal titolo della pagina, o dal sito quando non ne ha uno. Il resoconto dice “Importato da” e il nome del sito.

Cosa può dire il resoconto:

- Pagine più lunghe di quanto Bezzle legge, tagliate in fondo
- Pagine che scorrono in un riquadro, distese a tutta altezza
- Parti della pagina che si potevano solo fotografare, come immagini
- Icone da font di icone, come immagini
- Video, come fotogramma fisso
- Pagine e contenuti multimediali incorporati, come immagini
- Disegni su un canvas, come immagini
- Controlli dei moduli, come immagini
- SVG con testo, immagini o filtri, come immagini
- Sfondi SVG, come immagini
- Riquadri mascherati da un’immagine, come immagini
- Riquadri con filtri di colore, come immagini
- Filtri di colore, omessi
- Filtri su ciò che sta dietro ai riquadri, omessi
- Forme di ritaglio dei riquadri, omesse
- Sfondi ripetuti, disegnati una volta
- Sfumature coniche e altre, omesse
- Contorni con sfumatura, nel suo primo colore
- Bordi doppi, scanalati e smussati, disegnati continui
- Bordi tratteggiati solo su alcuni lati, disegnati continui
- Bordi diversi per lato su un riquadro arrotondato, disegnati diritti
- Angoli ovali, resi rotondi
- Trasformazioni 3D, disegnate in piano
- Testi che scorrono attorno ad altri riquadri, un testo per riga
- Testi con un bordo, mostrati senza
- Lettere in apice e pedice, poste sulla riga
- Contatori nel testo generato, omessi
- Immagini come punti elenco, omesse

La pagina viene caricata come la caricherebbe il tuo browser. Vedi [File, aggiornamenti e privacy](/docs/files.html).

## Quando un file non si importa {#errors}

Il pannello, o la finestra della pagina web, dice perché:

| Messaggio | Perché |
| --- | --- |
| Questo non è un file Adobe XD leggibile da Bezzle. | Non è un file salvato da XD, oppure è danneggiato. |
| Questo non è un file Figma leggibile da Bezzle. | Non è una copia locale salvata da Figma, oppure è danneggiata. |
| Questo non è un file Sketch leggibile da Bezzle. | Non è un file salvato da Sketch, oppure è danneggiato. |
| Questo file è stato salvato con una versione di Sketch precedente alla 43, che Bezzle non può leggere. Aprilo in una versione più recente di Sketch, salvalo di nuovo e importa quello. | Prima della versione 43, Sketch salvava i suoi file in un altro modo. |
| Questo non è un file Photoshop leggibile da Bezzle. | Non è un documento Photoshop. |
| Questo file Photoshop è danneggiato. | Non è stato possibile leggere una parte del file. |
| Bezzle non sa ancora leggere i file Photoshop in questo metodo colore. | Il documento è in colore Lab, o in un altro metodo non elencato sopra. |
| Questo file Photoshop è compresso in un modo che Bezzle non sa ancora leggere. | I pixel dei suoi livelli sono compressi in un modo che Bezzle non legge. |
| Non è un indirizzo web che Bezzle può aprire. | Serve il nome di un sito con un punto, come `example.com`, e senza spazi. |
| Impossibile caricare la pagina: ha impiegato troppo tempo a rispondere. | Dopo mezzo minuto la pagina non si era caricata abbastanza da poter essere letta. |
| Impossibile caricare la pagina: … | Non è stato possibile raggiungere il sito, o non ha risposto; segue il motivo. |
| Impossibile leggere la pagina: … | La pagina si è caricata, ma non è stato possibile scomporla; segue il motivo. |
| La pagina non mostra nulla da importare. | Quando Bezzle l’ha letta, sulla pagina non c’era nulla da importare. |

Anche un assistente IA collegato a Bezzle può importare file e pagine web. Vedi [Assistenti IA](/docs/ai.html).
