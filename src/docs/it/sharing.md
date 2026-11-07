---
title: Condivisione e lavoro insieme
nav: Condivisione
lede: Condividi un design tramite link, o tienilo in una cartella che Google Drive, Dropbox o iCloud Drive mantengono sincronizzata, e lavoraci con altri nello stesso momento. Le modifiche di tutti si uniscono, così niente di ciò che fa qualcuno va perso.
---

Ci sono due modi di lavorare a un design con altre persone, e si possono usare insieme. **Tramite link**: copi un link, lo invii come preferisci, e chi lo apre lavora al design con te in Bezzle sul suo Mac, oppure lo segue in un browser. Nessuno ha bisogno di un account di alcun tipo, e il design viene cifrato sul tuo Mac prima di arrivare al server di Bezzle. **Tramite una cartella condivisa**: un design tenuto in una cartella che Google Drive, Dropbox, iCloud Drive o un server mantengono sincronizzata può essere aperto su più Mac nello stesso momento, e ognuno scrive solo le proprie modifiche.

In entrambi i casi vi vedete lavorare: il puntatore di ognuno in una matita colorata tutta sua, ciò che guarda e ciò che tiene in mano, i suoi trascinamenti mentre li fa. Le modifiche si uniscono proprietà per proprietà, anche le note a margine e le versioni con nome sono condivise, e Annulla riprende sempre e soltanto i tuoi passi.

::: figure together
Due persone al lavoro in un design condiviso, ognuna con la sua matita, e le loro note a margine.
:::

## Condividere tramite link {#by-link}

::: steps
1. **Fai clic su {Condividi…}.** Si trova a destra nella barra in cima alla finestra del design. Si apre un menu con {Copia link} e il promemoria che chiunque abbia il link può lavorare al design.
2. **Scegli {Copia link}.** La prima volta, tutto il contenuto del design viene caricato sul server prima che il link ti venga consegnato: il pulsante mostra “Preparazione…”, poi conta le immagini man mano che partono, “Caricamento 3 di 12”.
3. **Incolla il link dove vuoi.** Appena è copiato, il pulsante mostra per un attimo un segno di spunta. Incolla il link in una mail, in una chat o in un messaggio.
:::

Il link ha questo aspetto, con 43 tra lettere, cifre e i caratteri `-` e `_` dopo il `2.`:

```
https://bezzle.ch/open.html#2.<secret>
```

Tutto ciò che segue il `#` è il segreto del design, la sua chiave. Un browser non invia mai quella parte di un indirizzo a nessun server, quindi nemmeno il sito la vede. I link creati prima che il sito si trasferisse, che iniziano con `https://mfrports.github.io/bezzle-web/`, continuano a funzionare.

Una volta condiviso il design, il pulsante diventa {Condiviso}, e anche un’etichetta accanto allo zoom dice {Condiviso} (se ci passi sopra con il puntatore, spiega che le modifiche di tutti arrivano mentre vengono fatte). {Copia link} ti ridà lo stesso link ogni volta che ti serve. Chiunque abbia il design può copiarne il link allo stesso modo e passarlo ad altri, perché è lo stesso design per tutti.

Cosa viene caricato: l’intero design, ogni immagine che contiene e le versioni a cui dai un nome mentre è condiviso (vedi [Le versioni in un design condiviso](/docs/notes.html#shared-versions)). Resta sul server, cifrato, così gli altri possono continuare a lavorare anche quando il tuo Mac è spento. Prima che parta, il design viene salvato, e un design tenuto come file singolo, dai primi tempi di Bezzle, diventa un pacchetto, perché la condivisione ha bisogno di spazio al suo interno (vedi [Che cos’è un file di design](/docs/files.html#design-file)).

> [!caution] Il link è la chiave
> Chiunque abbia il link può aprire il design e modificarlo. Invialo solo alle persone che vuoi nel design. Per chiudere la condivisione, vedi [Interrompi condivisione](#stop-sharing).

## Aprire un design condiviso {#opening-a-link}

### La pagina di invito {#invitation}

Un link apre nel browser la pagina di invito di Bezzle, che dice che un design ti aspetta. Offre due pulsanti:

- **{Apri in Bezzle}** passa il link a Bezzle su questo Mac, come `bezzle://share/2.<secret>`.
- **{Guarda nel browser}** apre il design nel browser, per chi non ha un Mac (vedi [In un browser](#browser)).

Se con {Apri in Bezzle} non succede nulla, la pagina spiega cosa fare: procurati Bezzle 1.4 o successivo, gratis dal sito (se ce l’hai già, aprilo e accetta l’aggiornamento che ti propone), poi torna sulla pagina e fai di nuovo clic su {Apri in Bezzle}. Un link che per strada ha perso il suo segreto mostra “Questo link è incompleto. Chiedi un nuovo invito.”

### In Bezzle {#arriving}

Bezzle porta in primo piano la sua Home, dove la scheda del design ne mostra l’arrivo: il suo nome e “In arrivo da” seguito dal nome di chi l’ha condiviso. Appena è arrivato, si apre in un pannello tutto suo. Le immagini seguono man mano che il design le mostra, quindi al primo sguardo alcune possono essere ancora per strada (vedi [Immagini in arrivo](#pictures-arriving)).

Il design viene conservato nella tua cartella dei design con il nome con cui è stato condiviso, o “Design condiviso” se non ne ha uno, con un numero aggiunto se quel nome è già preso. Da quel momento è un design della tua Home come tutti gli altri, contrassegnato da “Condiviso da” e dal nome del suo proprietario. Se riapri lo stesso link più tardi, il design semplicemente si apre.

Quando un link non si può aprire, la Home ne spiega il motivo su una scheda a parte, “Impossibile aprire”, che chiudi con la sua ✕:

| Messaggio | Cosa significa |
| --- | --- |
| “Questo link non porta a nessun design.” | Il link non è un link di Bezzle, è danneggiato, oppure il suo design non è sul server. |
| “Questo design non è più condiviso.” | Il proprietario ne ha interrotto la condivisione, quindi il link non porta più da nessuna parte. |
| “Bezzle non è riuscito a raggiungere il design. Controlla la connessione e apri di nuovo il link.” | Bezzle non è riuscito a raggiungere il suo server. Riapri il link quando sei di nuovo online. |

Un design che qualcuno ha condiviso con te mantiene il nome con cui è stato condiviso: {Rinomina} è disattivato per quel design, nella Home e nel suo pannello, così resta quello che tutti conoscono.

### Chi sei per gli altri {#names}

Non ci sono account. Gli altri ti vedono con il nome del tuo account utente su questo Mac, nella sua forma breve, e tu vedi loro con il loro. Lo stesso nome firma le note che scrivi e le versioni a cui dai un nome.

## Lavorare nello stesso momento {#live}

Mentre altri hanno il design aperto con te, Bezzle passa loro il tuo puntatore, la tua vista e le tue modifiche, e a te i loro, un attimo dopo che accadono. Tutto viene cifrato con la chiave del design prima di lasciare il Mac. Qui un design condiviso tramite link e un design in una cartella condivisa funzionano allo stesso modo.

### Chi c’è {#who}

Le persone nel design con te compaiono a destra nella barra in alto, ognuna come un gettone: la sua iniziale su un cerchio del colore della sua matita. Prendono il posto dell’etichetta {Condiviso} finché c’è qualcuno.

- **Al lavoro**: un anello intorno al gettone appare e scompare mentre la persona sposta livelli, scrive o disegna.
- **Assente**: il gettone si attenua mentre la persona è in un’altra app o in un’altra finestra, o quando non si hanno sue notizie da 25 secondi. Torna luminoso appena rientra.
- **Con il puntatore sopra**: il suo nome compare sotto il gettone, con l’ora del luogo in cui si trova quando non è la stessa di qui.
- **Uscita**: la persona lascia la barra quando chiude il design, o dopo cinque minuti senza sue notizie.

La matita del tuo Mac è blu. Tutti gli altri disegnano in uno di altri otto colori: vermiglio, ocra, viridiano, rosa, verde acqua, seppia, oliva e prugna. Ogni persona mantiene lo stesso colore su ogni Mac del design, e due persone non condividono mai lo stesso colore finché ce ne sono abbastanza per tutti. Chi segue in un browser non compare tra i gettoni.

### Sulla tela {#on-canvas}

Ogni persona compare nel suo colore, con gli stessi segni che Bezzle disegna in blu per te:

- **La sua mano**: il suo puntatore, con la forma dello strumento che tiene: una freccia, un cursore di testo, un mirino mentre disegna una forma o una tavola da disegno, un pennino. Ha un bordo bianco perché si legga su qualsiasi sfondo, e scivola come farebbe una mano invece di saltare come fa la rete.
- **Il suo nome**: su una piccola etichetta accanto alla mano quando comincia a muoversi, mentre lavora, o quando la sua mano si avvicina alla tua.
- **Dove guarda**: una morbida pozza di luce nel suo colore sul tavolo, intorno alle tavole che ha in vista.
- **Cosa tiene in mano**: la sua selezione, contornata con la sua matita, con la sua iniziale su una bandierina all’angolo.
- **Cosa trascina**: i livelli che trascina o ridimensiona si muovono sulla tua tela mentre lo fa, prima che arrivi la modifica stessa, e si fermano dove li lascia.
- **Cosa ha cambiato**: ogni livello che qualcuno modifica si illumina per un attimo nel suo colore quando arriva la modifica.

### Raggiungere qualcuno {#follow}

Fai clic sul gettone di una persona nella barra in alto e la tua vista vola su ciò che sta guardando, allontanandosi, spostandosi e riavvicinandosi così non perdi l’orientamento, poi la accompagna mentre si muove. Finché la segui, negli angoli della tua tela compaiono crocini di taglio nel suo colore, con il suo nome in basso. Sposta tu la vista, o fai di nuovo clic sul suo gettone, e la vista torna tua.

Chi lavora fuori dalla tua vista sta sul bordo della tela come un gettone che punta nella sua direzione, e scorre lungo il bordo quando uno di voi due si sposta. Passaci sopra con il puntatore per vedere il suo nome, e fai clic per volare lì e seguirlo.

### Indicare qualcosa {#wink}

Per dire “guarda qui”, scuoti il puntatore: avanti e indietro velocemente, cambiando direzione quattro volte o più entro 0,7 secondi, almeno 16 punti per volta. Intorno al punto viene tracciato un cerchio con la tua matita, come si cerchia qualcosa su una stampa, su ogni tela del design, e svanisce dopo un paio di secondi. Per chi ha quel punto fuori vista, il cerchio circonda invece il tuo gettone sul bordo della sua tela, e un clic sul gettone lo porta in volo sul punto. Una scossa conta al massimo una volta ogni 1,2 secondi.

### Immagini in arrivo {#pictures-arriving}

Un’immagine che qualcuno posiziona arriva agli altri in due passi. Appena è posizionata, una minuscola anteprima va a tutti nel design, larga qualche decina di pixel, mostrata morbida e sfocata dove sarà l’immagine. L’immagine vera e propria segue dal server, e mentre è in viaggio si sviluppa come una fotografia, lattiginosa e granulosa, con i colori che arrivano piano; senza anteprima parte come carta fotografica non ancora esposta. Quando è arrivata, viene messa a fuoco.

### In sottofondo {#background}

Mentre altri sono nel design con te, Bezzle impedisce a macOS di rallentarlo quando è in sottofondo, così gli altri continuano a vederti invece di pensare che te ne sia andato. Il tuo Mac può comunque andare in stop. La connessione si gestisce da sola: si accorge quando cade, per esempio dopo un cambio di rete Wi-Fi, riprova ogni volta un po’ più tardi, e si ricollega subito quando il Mac si riattiva.

## Come si uniscono le modifiche {#merging}

Ogni copia di un design condiviso scrive solo modifiche proprie, e mai sopra quelle degli altri. Ogni copia riceve le modifiche di tutti e le unisce nello stesso design, in qualunque ordine arrivino e per quanto in ritardo. Così nessuna modifica va mai persa o sovrascritta.

Le modifiche si uniscono proprietà per proprietà:

- **Livelli diversi, o proprietà diverse di uno stesso livello**: si tengono tutte. Se cambi il riempimento di un pulsante mentre qualcuno lo sposta, il pulsante finisce con il tuo riempimento nel punto in cui l’ha messo l’altro.
- **La stessa proprietà dello stesso livello**: si tiene la modifica più recente, su ogni Mac allo stesso modo. Posizione e dimensione di un livello contano come una sola proprietà, il suo testo come un’altra.
- **Un livello eliminato**: se qualcuno l’ha modificato, o ha modificato qualcosa al suo interno, dopo che era stato eliminato e prima di venirlo a sapere, il livello torna insieme a ciò che lo contiene, così il suo lavoro non va perso.
- **Due livelli messi l’uno dentro l’altro nello stesso momento**: il più vecchio dei due spostamenti cede, e quel livello va sulla tela.
- **Stili e note**: si uniscono allo stesso modo, ogni proprietà per conto suo. Una risposta a una nota, una modifica al suo testo e il filo segnato come fatto, da tre persone nello stesso momento, si tengono tutti.

Alcune cose sono solo tue: dove guardi e da quanto vicino, cosa hai selezionato e quale post di una pila hai davanti.

Mentre trascini qualcosa, le modifiche degli altri aspettano che tu lasci andare, così niente salta sotto la tua mano; mentre scrivi, arrivano come sempre. Non sono mai passi della tua cronologia di Annulla: Annulla riprende solo ciò che hai fatto tu, e lascia come sono le modifiche di tutti gli altri, anche quando sono arrivate dopo.

### Quando partono le modifiche {#timing}

Alle persone nel design con te, una modifica arriva subito; un trascinamento parte quando lasci andare, mentre durante il trascinamento i livelli si muovono già sulla loro tela. Al server arriva entro un paio di secondi, insieme a tutto ciò che fai nel frattempo. Un design condiviso cerca anche le novità ogni volta che il server segnala che c’è qualcosa, in ogni caso ogni 30 secondi, e ogni volta che Bezzle torna in primo piano.

Senza connessione, continui a lavorare come sempre. Il pulsante Condividi mostra un triangolo di avviso, e passandoci sopra con il puntatore dice “Bezzle non riesce a connettersi ora. Le tue modifiche restano e partono appena possibile.” Un design condiviso si apre sempre com’era l’ultima volta che è stato condiviso, anche senza rete, perché tutto ciò che gli serve è conservato nel suo file.

## Interrompi condivisione e sola lettura {#stop-sharing}

Solo il Mac che ha condiviso un design può interromperne la condivisione. Scegli {Condividi…} › {Interrompi condivisione…}. Bezzle chiede prima conferma: il link smette di funzionare, e chi ha il design lo conserva com’è ora, in sola lettura. Fai clic su {Interrompi condivisione} per procedere.

Il design viene poi eliminato dal server, con tutto ciò che contiene, e il link non funzionerà mai più. Sul tuo Mac il design continua come un design tutto tuo.

La copia di tutti gli altri resta com’era l’ultima volta, contrassegnata da “Non più condiviso” con un lucchetto. Se ci passi sopra con il puntatore, l’etichetta dice: “Sola lettura: questo design non è più condiviso con te. Salvane una copia per continuare a lavorarci.” In un design così:

- Non si può cambiare niente. L’ispettore è attenuato, anche se {Ispeziona} misura ancora tutto e ne mostra il codice.
- Il pulsante Condividi diventa {Salva una copia} ({{⇧⌘S}}), che ne ricava un design tutto tuo, con il suo nome seguito da “copia”, nella tua cartella dei design, e lo apre.
- Le note si possono leggere e copiare, ma non scrivere, rispondere o segnare come fatte; le versioni si possono guardare, ma non nominare né ripristinare.

Per dare a un design un nuovo link, interrompine la condivisione, poi scegli di nuovo {Copia link}: il design riceve un nuovo posto sul server e un nuovo segreto, e il vecchio link resta morto.

### Spostare un design condiviso nel Cestino {#trash}

Spostare nel Cestino un design che hai condiviso ne interrompe anche la condivisione, quindi Bezzle chiede prima: “Spostare “…” nel Cestino e interrompere la condivisione?”, con {Sposta nel Cestino} e {Annulla}. Se in quel momento il server non è raggiungibile, Bezzle riprova ogni volta che torna in primo piano, finché non ci riesce. Togliere dalla Home un design tenuto fuori dalla tua cartella dei design ({Rimuovi dall’elenco}) lascia com’erano il suo file e la sua condivisione.

> [!note] Design condivisi un tempo tramite iCloud
> Le versioni di Bezzle prima della 1.4 condividevano i design tramite iCloud. Quei design non vengono più sincronizzati. I tuoi tornano a essere solo tuoi: condividili tramite link per continuare a lavorarci insieme. Quelli che altri hanno condiviso con te restano come erano l’ultima volta, in sola lettura, e {Salva una copia} te ne conserva una.

## Copie di un design condiviso {#copies}

Una copia è sempre un design a sé, mai condiviso:

- **{Duplica}** nella Home, e {Archivio › Salva una copia}, creano copie non condivise.
- **Una copia fatta nel Finder** di un design condiviso tramite link diventa un design a sé sul tuo Mac, purché l’originale sia ancora lì.

> [!caution] Inviare il file significa inviare la chiave
> Il file di un design condiviso contiene il suo link, perché chiunque abbia il design ha anche il link. Se invii a qualcuno il file stesso, con quello può unirsi al design condiviso. Per dare a qualcuno un design senza farlo entrare, invia una copia fatta con {Salva una copia} o {Duplica}.

## In un browser {#browser}

{Guarda nel browser} nella pagina di invito apre il design sul sito di Bezzle, disegnato dallo stesso codice che lo disegna su un Mac. È pensato per chi non ha un Mac, soprattutto su Windows, e vuole vedere un design che qualcuno ha condiviso con lui.

- **Il nome** del design e chi l’ha condiviso sono in alto, con lo stato della connessione: “Dal vivo”, “Connessione…”, “Riconnessione…”, “Non più condiviso” o “Offline”.
- **Le tavole** sono elencate a sinistra (in alto, su uno schermo stretto). Fai clic su una per vederla.
- **Le modifiche** degli altri arrivano mentre vengono fatte, e la tavola viene ridisegnata. Le immagini vengono scaricate man mano che la tavola le mostra.

Il browser mostra il design ma non lo modifica, e le persone nel design non vedono un puntatore per chi guarda da un browser. I font che appartengono al Mac, come SF Pro, vengono disegnati con alternative libere molto simili (SF Pro con Inter, per esempio), quindi il testo può cadere in modo leggermente diverso che su un Mac. La prima visita richiede un momento, perché la pagina carica circa 22 MB.

## Cartelle condivise {#folders}

Un design tenuto in una cartella che più computer mantengono sincronizzata può essere aperto su tutti nello stesso momento: Google Drive, Dropbox, OneDrive, Box, iCloud Drive, o una cartella su un server. Metti lì il design, spostandolo nel Finder o scegliendo una cartella del genere come cartella dei design ([La cartella dei design](/docs/files.html#designs-folder)), e aprilo su ogni Mac.

Ogni Mac scrive allora le sue modifiche in file propri dentro il design e legge quelli di tutti gli altri, così niente viene mai sovrascritto, per quante persone lo abbiano aperto. Le modifiche si uniscono esattamente come in un design condiviso tramite link, e vi vedete lavorare allo stesso modo: puntatori, viste, trascinamenti e modifiche, mentre vengono fatti, passano dal server di Bezzle, cifrati con una chiave che hanno solo quelli che hanno la cartella, conservata dentro il design, mentre è la cartella stessa a conservare il design.

- **L’etichetta** accanto allo zoom dice “Condiviso in” e il nome del servizio, per esempio “Condiviso in Google Drive”, appena nel design c’è il lavoro di qualcun altro. I tuoi Mac, con lo stesso nome, contano come te.
- **Restare aggiornati**: Bezzle legge le novità ogni volta che il servizio cambia dei file nel design, e in ogni caso ogni 20 secondi (ogni 5 secondi nella cartella di un server, che non sempre segnala quando qualcosa è cambiato). Un file che il servizio tiene solo online viene scaricato nel momento in cui Bezzle lo legge.
- **Rinominato o spostato** da qualcun altro mentre lo hai aperto, il design continua dove si trova ora, così continuate tutti a lavorare nello stesso design.
- **Una copia** fatta nel Finder è un design a sé, con una sua stanza dal vivo.
- **Anche tramite link**: un design in una cartella condivisa può essere condiviso anche tramite link con qualcuno fuori dalla cartella.

Un design in una cartella sincronizzata va dove lo porta quel servizio, secondo la sua informativa sulla privacy.

## Due copie di Bezzle su un Mac {#two-copies}

Con due copie di Bezzle su un Mac, per esempio una in Download e una in Applicazioni, ne è aperta solo una alla volta. Se avvii la seconda mentre la prima è aperta, con un doppio clic o aprendo un link o un design, la seconda passa ciò con cui è stata aperta a quella già in esecuzione, la porta in primo piano ed esce pochi secondi dopo. Così due copie non salvano mai gli stessi design l’una sopra l’altra. Entrambe le copie hanno gli stessi design e la stessa condivisione, perché sono la stessa app.

## Limiti {#limits}

| Cosa | Limite |
| --- | --- |
| Un design condiviso sul server | 2 GB, tutto il contenuto insieme |
| Una singola immagine | circa 32 MB; un file immagine più grande resta sul tuo Mac, e gli altri non lo ricevono |
| Colori delle matite | otto oltre al tuo blu; con più persone, i colori si ripetono |

Per come funziona la cifratura e cosa il server può e non può vedere, vedi [Come viene cifrata la condivisione](/docs/files.html#encryption). Le note e le versioni in un design condiviso sono spiegate in [Note e versioni](/docs/notes.html#shared-notes).
