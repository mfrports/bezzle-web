---
title: File, aggiornamenti e privacy
nav: File e privacy
lede: Dove sono conservati i tuoi design e cosa contiene ognuno, come si salvano da soli, come Bezzle si mantiene aggiornato, come vengono cifrati i design condivisi, e cosa fare quando qualcosa non funziona.
---

I tuoi design sono file sul tuo Mac. Non c’è un account né un cloud di Bezzle: un design vive nella tua cartella dei design, o dove lo tieni, e va sul server di Bezzle solo quando lo condividi tramite link, cifrato prima di partire.

## La cartella dei design {#designs-folder}

I design nuovi, i file che importi e i design che ti arrivano tramite link sono conservati nella tua cartella dei design: la cartella Bezzle nei tuoi Documenti, finché non ne scegli un’altra. La Home mostra ogni design che contiene, dal più recente, insieme ai design che hai aperto da qualsiasi altro posto.

Accanto a {I tuoi design} nella Home c’è un pulsante con il nome della cartella; puntandolo vedi il percorso completo della cartella. Fai clic per:

- **{Mostra nel Finder}**: apre la cartella nel Finder.
- **{Scegli una cartella…}**: ne sceglie un’altra, come fa {Bezzle › Cartella dei design…}.

### Scegliere un’altra cartella {#choose-folder}

::: steps
1. **Scegli {Bezzle › Cartella dei design…}.** Oppure {Scegli una cartella…} nella Home.
2. **Scegli una cartella.** La finestra dice “Scegli dove Bezzle conserva i tuoi design.” Puoi crearvi una nuova cartella. Fai clic su {Conserva i design qui}.
3. **Decidi cosa succede ai design che hai.** Se la vecchia cartella ne contiene, Bezzle chiede se spostare anche quelli: {Sposta}, {Lasciali lì} o {Annulla}.
:::

{Sposta} porta ogni design dalla vecchia cartella alla nuova, compresi quelli aperti in un pannello, e ognuno mantiene il suo posto nella Home; i design condivisi restano condivisi. Un design che non si può spostare resta dov’era. {Lasciali lì} li lascia tutti dove sono, e restano comunque nella Home, come i design aperti da altri posti. Da quel momento i design nuovi e i file importati vengono salvati nella nuova cartella, e Bezzle se la ricorda.

Scegli una cartella che contiene già dei design, e ognuno di essi compare nella Home. La Home elenca i design conservati nella cartella stessa; uno in una cartella al suo interno compare quando lo hai aperto.

Se Google Drive, Dropbox o iCloud Drive tengono la cartella dei design sincronizzata con altri Mac, chi condivide la cartella può aprire con te, nello stesso momento, ogni design che contiene (vedi [Cartelle condivise](/docs/sharing.html#folders)).

Se la cartella che hai scelto non si trova quando Bezzle si apre, perché il suo disco non è collegato o è finita nel Cestino, nel frattempo Bezzle conserva i tuoi design nella cartella Bezzle dei Documenti, e si ricorda la tua scelta: riapri Bezzle quando la cartella è di nuovo lì.

### Nella Home {#home}

Fai clic con il tasto destro su un design nella Home per {Apri}, {Mostra nel Finder}, {Rinomina}, {Duplica}, e {Sposta nel Cestino} per un design nella tua cartella dei design, oppure {Rimuovi dall’elenco} per uno conservato altrove, che lo toglie dalla Home e lascia il file dov’è. Il campo sopra i design li cerca per nome. Ogni scheda dice quando il design è cambiato l’ultima volta, e se è condiviso (vedi [Primi passi](/docs/start.html)).

Bezzle ricorda fino a 200 design aperti da fuori della cartella dei design; quando sono di più, quelli aperti da più tempo escono per primi dall’elenco. I loro file restano intatti.

## Cos’è un file di design {#design-file}

Un design è un file con estensione `.bezzle`. È un pacchetto: una cartella che il Finder mostra, e copia, come un unico file. Dentro c’è tutto ciò che serve al design, così un design copiato su un altro Mac, o inviato a qualcuno, è completo.

> [!windows]
> In Esplora file un design è quello che è dentro: una cartella il cui nome finisce con `.bezzle`, e aprirla lì apre la cartella. Apri i design dalla Home di Bezzle, o con {Apri…} ({{Ctrl+O}}), che sceglie una cartella così; i file di XD, Figma, Sketch e Photoshop entrano invece con {Importa…}.

| Dentro | Cosa contiene |
| --- | --- |
| Il design | Le sue tavole e i suoi livelli, stili, componenti, prototipo e note, e dove hai guardato per ultimo. |
| `images` | Ogni immagine inserita nel design, copiata dentro. |
| `versions` | Le versioni conservate del design (vedi [Versioni](/docs/notes.html#versions)). |
| `sharing` | Per un design condiviso: il suo link, e il registro di ogni Mac con le modifiche che ha fatto. |
| `QuickLook` | L’immagine che il Finder mostra per il file. |

Un’immagine che inserisci viene copiata nel design, quindi spostare, rinominare o eliminare in seguito il file originale non cambia nulla nel design. I design dei primi tempi di Bezzle, conservati come un unico file, restano tali finché non serve spazio per un’immagine, una versione o la condivisione, e allora diventano un pacchetto da soli. Si aprono anche i design con la vecchia estensione `.vellum`.

Scegli {Mostra contenuto pacchetto} nel Finder per guardarci dentro, ma non cambiare nulla lì: Bezzle legge e scrive questi file da solo.

> [!caution] Il file di un design condiviso contiene il suo link
> Il file di un design condiviso tramite link contiene il suo link, quindi chiunque riceva il file può unirsi al design condiviso. Per dare a qualcuno un design tutto suo, invia una copia fatta con {Archivio › Salva una copia} o {Duplica}, che non è mai condivisa.

## Salvare {#saving}

Non c’è un comando Salva. Un design si salva un attimo dopo ogni modifica, ben entro un secondo, e il punto in cui stai guardando entro due secondi. Il salvataggio avviene in sottofondo, un salvataggio dopo l’altro, così anche un design grande non ti fa mai aspettare.

- **Chiudere un pannello** ({Archivio › Chiudi pannello}, {{⌘W}}) salva il design, ne conserva una versione se è cambiato, e crea la sua immagine per il Finder.
- **{Archivio › Chiudi finestra}** ({{⇧⌘W}}) con un design in primo piano chiude ogni design, salvandoli tutti, e lascia la Home. Usato con la Home in primo piano, chiude Bezzle.
- **Uscire** aspetta che ogni design aperto sia sul disco. Se uno non si è potuto scrivere, Bezzle lo dice con “Impossibile salvare” seguito dal nome del design e dal motivo, e propone {Lascia Bezzle aperto} o {Esci comunque}.
- **{Archivio › Salva una copia}** ({{⇧⌘S}}) crea una copia del design com’è adesso, con il suo nome seguito da “copia”, nella tua cartella dei design, con le sue immagini, e la apre. La copia parte senza versioni e non è condivisa.
- **{Duplica}** nella Home crea una copia accanto all’originale, con le sue versioni, e mai condivisa. Non la apre.
- **{Archivio › Mostra nel Finder}** mostra il file del design.

Un design rinominato o spostato nel Finder mentre è aperto continua dove si trova adesso, dal momento in cui torni in Bezzle. Se il suo file sparisce proprio mentre Bezzle lo salva, Bezzle cerca dove è finito e lo salva lì, oppure lo riscrive dov’era, così nulla di ciò che hai fatto va perso.

Ogni modifica è anche un passo della cronologia di Annulla del design finché è aperto (vedi [Primi passi](/docs/start.html)), e le versioni arrivano più indietro (vedi [Note e versioni](/docs/notes.html#versions)).

## Anteprime nel Finder {#previews}

Il Finder mostra ogni design come un’immagine del design stesso, su un foglio della carta di Bezzle con l’angolo in alto a destra piegato, come è disegnata l’icona del design. L’immagine è conservata dentro il design, fino a 1.024 pixel sul lato più lungo, abbastanza per le icone più grandi del Finder su uno schermo Retina.

- **Un design con una sola tavola** mostra quella tavola da bordo a bordo. Una pagina molto alta ne mostra la parte superiore, e una striscia molto larga il suo inizio.
- **Un design con più tavole** mostra la sua tela sul foglio, da vicino, così le prime tavole si vedono grandi invece che tutte piccole.
- **Quando viene creata**: circa 20 secondi dopo che cambi un design, per quante modifiche arrivino nel frattempo; quando chiudi il suo pannello; e quando Bezzle si chiude. Un design nella Home senza un’immagine aggiornata, come uno cambiato altrove o creato da una versione precedente di Bezzle, ne riceve una in sottofondo.
- **L’icona al suo posto**: un design senza nulla sopra, o uno conservato come un unico file, mostra l’icona del design.

## Aprire e importare {#opening}

- **Fai doppio clic** su un design nel Finder, o lascialo cadere su Bezzle nel Dock. Si apre in un pannello tutto suo; se è già aperto, il suo pannello passa in primo piano.
- **{Archivio › Apri…}** ({{⌘O}}) apre i design di Bezzle e importa file di Adobe XD, Figma, Sketch e Photoshop. Puoi sceglierne più di uno insieme.
- **{Archivio › Importa da XD, Figma, Sketch o Photoshop…}** ({{⇧⌘I}}) offre solo file da importare. Ognuno diventa un nuovo design nella tua cartella dei design; il file stesso resta com’è.
- **{Archivio › Importa da un sito web…}** ({{⌥⇧⌘I}}) importa una pagina web come livelli.

Cosa arriva da ognuno, e il resoconto che elenca ciò che non è stato possibile importare, sono in [Importare i design](/docs/import.html).

macOS limita ogni app a ciò che può raggiungere. Bezzle può sempre raggiungere la sua cartella dei design, i tuoi Download e le tue Immagini (in lettura), e ogni design o cartella che apri o scegli in Bezzle, dal Finder, dalla finestra Apri o da quella di esportazione. Conserva il permesso per fino a 200 di questi, così un design aperto da un altro posto si riapre anche dopo che Bezzle si è chiuso.

## Aggiornamenti {#updates}

Bezzle si mantiene aggiornato da solo. Cerca una nuova versione ogni volta che si apre, e una volta al giorno mentre è in funzione. Quando esce una nuova versione, una finestra mostra cosa c’è di nuovo, e la installi subito o più tardi. Se lì scegli di installare gli aggiornamenti automaticamente, Bezzle scarica ogni nuova versione in sottofondo e la mette al suo posto la prossima volta che lo chiudi.

Per controllare subito, scegli {Bezzle › Verifica aggiornamenti…}, appena sotto {Informazioni su Bezzle}.

Ogni download è controllato da Apple, e ogni aggiornamento è firmato, quindi viene installata solo una versione fatta da chi crea Bezzle. Cercare un aggiornamento non invia altro che la versione che hai. Ogni versione e le sue novità sono nella pagina [Novità](/releases.html).

## Privacy {#privacy}

Bezzle non raccoglie alcun dato. Non ha account, statistiche, pubblicità né tracciamento di alcun tipo, e non invia nulla su di te o sui tuoi design a nessuno. Rimuovi sfondo funziona sul tuo Mac; le foto non vengono mai caricate. L’[informativa sulla privacy](/privacy.html) completa ha tutti i dettagli.

Bezzle si collega a internet solo:

- al **server di Bezzle presso Cloudflare**, per i design che condividi e, mentre altri hanno aperto con te un design condiviso, per inoltrare i vostri puntatori e le modifiche, tutto cifrato con una chiave che hanno solo le persone con il link;
- a una **pagina web che scegli di importare**, caricata come la caricherebbe il tuo browser;
- a **questo sito e a GitHub**, che conserva i download, per cercare una nuova versione.

Il server per gli assistenti IA ascolta solo sul tuo Mac e non è raggiungibile dalla rete; nulla va a un assistente finché non ne colleghi uno (vedi [Assistenti IA](/docs/ai.html#privacy)).

## Come viene cifrata la condivisione {#encryption}

Quando condividi un design, il tuo Mac crea un segreto per lui: 32 byte casuali, scritti come i 43 caratteri dopo `#2.` nel suo link. Il segreto non viene mai inviato al server di Bezzle né al sito. Un browser tiene per sé tutto ciò che sta dopo il `#` di un indirizzo, quindi la pagina dell’invito lo legge sul tuo Mac e lo passa direttamente a Bezzle, e nemmeno il sito lo vede.

Dal segreto, ogni Mac e browser che ha il link ricava le stesse chiavi:

- **il nome della stanza** sul server, che non dice nulla del segreto;
- **una chiave per leggere** la stanza e **una chiave per scriverci**, di cui il server conserva solo un’impronta;
- **la chiave di cifratura** per tutto ciò che c’è nel design;
- **una chiave per dare un nome alle immagini**, così il server vede solo un nome rimescolato per ogni immagine, mai il suo nome di file.

Tutto viene cifrato sul Mac prima di partire, con AES-256-GCM: il design, ogni modifica, ogni immagine, le versioni con nome, il nome del design e chi lo ha condiviso, e ogni messaggio dal vivo con il tuo puntatore e i tuoi trascinamenti. Ogni Mac cifra con una chiave propria per ogni sessione, ricavata dalla chiave del design, e ogni pezzo è sigillato al suo posto nella stanza, così nessuno può cambiare un pezzo, o farlo passare per un altro, senza che si veda.

Il server conserva solo ciò che non può leggere: pezzi cifrati, la loro dimensione e quando arrivano. Né chi crea Bezzle né Cloudflare possono leggere un design condiviso.

Altre due chiavi non finiscono mai nel link:

- **La chiave del proprietario**, creata dal Mac che ha condiviso il design e conservata solo lì. Solo lei può interrompere la condivisione del design, ed è l’unica che può dire come si chiama il design e chi lo ha condiviso.
- **La chiave di ogni Mac** per scrivere le sue modifiche, così i suoi registri sono solo suoi, e nessun altro può eliminarli o sovrascriverli.

{Interrompi condivisione…} elimina dal server il design e tutto ciò che contiene, e la sua stanza resta chiusa per sempre: il vecchio link non si potrà mai più usare.

Un design conservato in una cartella che Google Drive, Dropbox o iCloud Drive tengono sincronizzata va dove lo porta quel servizio, secondo la sua informativa sulla privacy. Solo ciò che passa dal vivo tra i Mac che lo hanno aperto, puntatori, trascinamenti e modifiche mentre vengono fatte, passa dal server di Bezzle, cifrato con una chiave conservata dentro il design, che hanno solo le persone che hanno la cartella.

## Dove sono conservate le cose {#storage}

| Cosa | Dove |
| --- | --- |
| I tuoi design | La tua cartella dei design, o dove li tieni. |
| Immagini, versioni e note | Dentro ogni design. |
| Un design condiviso tramite link | Su ogni Mac con cui è condiviso, e cifrato sul server di Bezzle finché non smette di essere condiviso. |
| Le immagini nella Home | Nella cartella della cache di Bezzle sul tuo Mac. |
| Impostazioni e ciò che Bezzle ricorda | Sul tuo Mac: la cartella dei design che hai scelto, i design che hai aperto da altri posti e il permesso di riaprirli, i design che hai condiviso e le chiavi per interromperne la condivisione, quali note hai letto, se il controllo IA è attivo, e le opzioni di ortografia. |

## Risoluzione dei problemi {#troubleshooting}

### Un link non si apre in Bezzle {#link-not-opening}

Apri il link in un browser: mostra la pagina dell’invito. Fai clic su {Apri in Bezzle}. Se non succede nulla, su questo Mac non c’è Bezzle 1.4 o successivo: scaricalo dal sito, oppure apri il Bezzle che hai e accetta l’aggiornamento che ti propone, poi fai di nuovo clic su {Apri in Bezzle}. Gli inviti fatti prima di Bezzle 1.4, tramite iCloud, non portano più a un design: chiedi un nuovo link. Senza un Mac, scegli {Guarda nel browser}.

### La Home dice “Impossibile aprire” {#could-not-open}

La scheda dice perché: il link non porta a nessun design, il design non è più condiviso, o Bezzle non è riuscito a raggiungere il suo server. Vedi [Aprire un design condiviso](/docs/sharing.html#arriving) per cosa significa ognuno.

### Un design non si può condividere {#share-fails}

“Impossibile condividere” seguito dal nome del design, con “Bezzle non è riuscito a connettersi. Controlla la connessione e riprova.”, vuol dire che il server di Bezzle non era raggiungibile. Riprova {Copia link} quando sei online. Un design che qualcun altro non condivide più non si può condividere di nuovo: fanne una copia tutta tua con {Salva una copia} e condividi quella. “Bezzle non è riuscito a interrompere la condivisione” dopo {Interrompi condivisione…} vuol dire anche questo che manca la connessione; riprova.

### Le modifiche degli altri non arrivano {#not-arriving}

Un triangolo di avviso sul pulsante {Condiviso} vuol dire che Bezzle non riesce a connettersi in questo momento; puntalo per leggerne il motivo. Le tue modifiche restano e partono appena possibile. Bezzle cerca le novità ogni 30 secondi e ogni volta che passa in primo piano, quindi fare clic in Bezzle controlla subito. Per un design in una cartella condivisa, verifica che il servizio della cartella sia in funzione e sincronizzato.

### Un design non è stato salvato {#not-saved}

Quando Bezzle dice che un design non si è potuto salvare, segue il motivo dato da macOS. Scegli {Lascia Bezzle aperto}, così nulla va perso, risolvi ciò che dice il motivo, e chiudi di nuovo Bezzle.

### Un design manca dalla Home {#missing-design}

La Home elenca i design nella tua cartella dei design e quelli che hai aperto da altri posti. Un design in una cartella dentro la cartella dei design compare quando lo apri, con {Archivio › Apri…}. Una cartella dei design su un disco non collegato fa mostrare invece la cartella Bezzle dei Documenti, finché non colleghi il disco e riapri Bezzle.

### Due copie di Bezzle {#two-copies}

Con due copie sullo stesso Mac, per esempio una in Download e una in Applicazioni, quella avviata per seconda passa i suoi design e i suoi link a quella già in funzione e si chiude. Tieni quella in Applicazioni e sposta l’altra nel Cestino. Vedi [Due copie di Bezzle su un Mac](/docs/sharing.html#two-copies).

### Il Finder mostra l’icona, non un’immagine {#no-preview}

Un design senza nulla sopra mostra l’icona, e così uno conservato come un unico file dai primi tempi di Bezzle, finché non diventa un pacchetto. Ogni altro riceve la sua immagine in sottofondo quando la Home lo mostra, o quando chiudi il suo pannello.

### Un assistente non raggiunge Bezzle {#ai-not-connecting}

Verifica che {Bezzle › Consenti controllo IA} sia attivo. Se il menu dice “Controllo IA disattivato: La porta 7412 è in uso”, un’altra app occupa la porta; chiudila, poi disattiva e riattiva {Consenti controllo IA}. Un assistente che non trova un file può aprire solo ciò che Bezzle può raggiungere (vedi [Aprire e importare](#opening)). Altro in [Assistenti IA](/docs/ai.html#allow).

### Ti serve ancora aiuto {#help}

Scrivici dalla pagina [Assistenza](/support.html). Indica cosa hai fatto e cosa ti aspettavi; leggiamo ogni messaggio.
