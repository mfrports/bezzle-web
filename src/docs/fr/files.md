---
title: Fichiers, mises à jour et confidentialité
nav: Fichiers et confidentialité
lede: Où tes designs sont gardés et ce que contient un design, comment ils s’enregistrent tout seuls, comment Bezzle se tient à jour, comment les designs partagés sont chiffrés, et que faire quand quelque chose ne marche pas.
---

Tes designs sont des fichiers sur ton Mac. Il n’y a ni compte ni cloud propre à Bezzle : un design vit dans ton dossier de designs, ou là où tu le ranges, et ne va sur le serveur de Bezzle que quand tu le partages par lien, chiffré avant de partir.

## Le dossier de designs {#designs-folder}

Les nouveaux designs, les fichiers que tu importes et les designs qui te parviennent par lien sont gardés dans ton dossier de designs : le dossier Bezzle de tes Documents, tant que tu n’en choisis pas un autre. L’écran d’accueil montre chaque design qu’il contient, du plus récent au plus ancien, avec les designs que tu as ouverts depuis n’importe où ailleurs.

À côté de {Vos designs} sur l’écran d’accueil se trouve un bouton portant le nom du dossier ; le pointer montre le chemin complet du dossier. Clique dessus pour :

- **{Afficher dans le Finder}** : ouvre le dossier dans le Finder.
- **{Choisir un dossier…}** : en choisit un autre, comme {Bezzle › Dossier des designs…}.

### Choisir un autre dossier {#choose-folder}

::: steps
1. **Choisis {Bezzle › Dossier des designs…}.** Ou {Choisir un dossier…} sur l’écran d’accueil.
2. **Choisis un dossier.** Le panneau indique « Choisissez où Bezzle conserve vos designs. » Tu peux y créer un nouveau dossier. Clique sur {Conserver les designs ici}.
3. **Dis ce que deviennent les designs que tu as.** Si l’ancien dossier en contient, Bezzle demande s’il faut les déplacer aussi : {Déplacer}, {Les laisser} ou {Annuler}.
:::

{Déplacer} fait passer chaque design de l’ancien dossier dans le nouveau, y compris ceux qui sont ouverts dans un onglet, chacun gardant sa place sur l’écran d’accueil ; les designs partagés restent partagés. Un design qui ne peut pas être déplacé reste là où il était. {Les laisser} les laisse tous là où ils sont, et ils restent tout de même sur l’écran d’accueil, comme les designs ouverts depuis ailleurs. Dès lors, les nouveaux designs et les fichiers importés sont enregistrés dans le nouveau dossier, et Bezzle s’en souvient.

Choisis un dossier qui contient déjà des designs, et chacun d’eux apparaît sur l’écran d’accueil. L’écran d’accueil liste les designs gardés dans le dossier lui-même ; un design rangé dans un sous-dossier apparaît une fois que tu l’as ouvert.

Un dossier de designs que Google Drive, Dropbox ou iCloud Drive synchronise avec d’autres Mac fait de chaque design qu’il contient un design que les personnes qui partagent le dossier peuvent ouvrir avec toi en même temps (voir [Dossiers partagés](/docs/sharing.html#folders)).

Si le dossier que tu as choisi est introuvable quand Bezzle s’ouvre, parce que son disque n’est pas branché ou qu’il est parti à la Corbeille, Bezzle garde entre-temps tes designs dans le dossier Bezzle des Documents, et se souvient de ton choix : rouvre Bezzle une fois le dossier revenu.

### Sur l’écran d’accueil {#home}

Clique avec le bouton droit sur un design de l’écran d’accueil pour {Ouvrir}, {Afficher dans le Finder}, {Renommer}, {Dupliquer}, et {Placer dans la corbeille} pour un design de ton dossier de designs, ou {Retirer de la liste} pour un design gardé ailleurs, ce qui le retire de l’écran d’accueil et laisse le fichier là où il est. Le champ au-dessus des designs les recherche par nom. Chaque carte indique quand le design a changé pour la dernière fois, et s’il est partagé (voir [Premiers pas](/docs/start.html)).

Bezzle se souvient de 200 designs au plus ouverts hors du dossier de designs ; au-delà, ceux qui ont été ouverts il y a le plus longtemps quittent la liste en premier. Leurs fichiers ne sont pas touchés.

## Ce qu’est un fichier de design {#design-file}

Un design est un fichier avec l’extension `.bezzle`. C’est un paquet : un dossier que le Finder montre, et copie, comme un seul fichier. Il contient tout ce dont le design a besoin, si bien qu’un design copié sur un autre Mac, ou envoyé à quelqu’un, est complet.

> [!windows]
> Dans l’Explorateur, un design est ce qu’il est à l’intérieur : un dossier dont le nom finit par `.bezzle`, qui montre l’image du design, comme le Finder sur Mac. Un double clic ouvre le dossier ; pour ouvrir le design, fais un clic droit dessus et choisis {Afficher d’autres options} › {Ouvrir dans Bezzle}, ou ouvre-le depuis l’accueil de Bezzle ou avec {Ouvrir…} ({{Ctrl+O}}), qui choisit un tel dossier. Les fichiers de XD, Figma, Sketch et Photoshop entrent plutôt par {Importer…}.

| À l’intérieur | Ce qu’il contient |
| --- | --- |
| Le design | Ses plans de travail et ses calques, ses styles, ses composants, son prototype et ses notes, et l’endroit que tu regardais en dernier. |
| `images` | Chaque image placée dans le design, copiée dedans. |
| `versions` | Les versions gardées du design (voir [Versions](/docs/notes.html#versions)). |
| `sharing` | Pour un design partagé : son lien, et le registre propre à chaque Mac des modifications qu’il a faites. |
| `QuickLook` | L’image que le Finder montre pour le fichier. |

Une image que tu places est copiée dans le design, de sorte que déplacer, renommer ou supprimer ensuite le fichier d’origine n’y change rien. Les designs des débuts de Bezzle, gardés en un seul fichier, le restent jusqu’à ce qu’ils aient besoin de place pour une image, une version ou le partage, et deviennent alors d’eux-mêmes un paquet. Les designs qui portent l’ancienne extension `.vellum` s’ouvrent aussi.

Choisis {Afficher le contenu du paquet} dans le Finder pour regarder à l’intérieur, mais n’y change rien : Bezzle lit et écrit ces fichiers lui-même.

> [!caution] Le fichier d’un design partagé contient son lien
> Le fichier d’un design partagé par lien contient son lien, si bien que quiconque reçoit le fichier peut rejoindre le design partagé. Pour donner à quelqu’un un design à lui, envoie une copie faite avec {Fichier › Enregistrer une copie} ou {Dupliquer}, qui n’est jamais partagée.

## L’enregistrement {#saving}

Il n’y a pas de commande Enregistrer. Un design est enregistré un instant après chaque modification que tu fais, bien en moins d’une seconde, et l’endroit que tu y regardes en moins de deux secondes. L’enregistrement se fait en arrière-plan, un enregistrement après l’autre, si bien que même un grand design ne te retient jamais.

- **Fermer un onglet** ({Fichier › Fermer l’onglet}, {{⌘W}}) enregistre le design, en garde une version s’il a changé, et crée son image pour le Finder.
- **{Fichier › Fermer la fenêtre}** ({{⇧⌘W}}), avec un design au premier plan, ferme tous les designs, chacun enregistré, et laisse l’écran d’accueil. Choisie avec l’écran d’accueil au premier plan, la commande quitte Bezzle.
- **Quitter** attend que chaque design ouvert soit sur le disque. Si l’un d’eux n’a pas pu être écrit, Bezzle le dit, « « … » n’a pas pu être enregistré. », avec la raison, et propose {Garder Bezzle ouvert} ou {Quitter quand même}.
- **{Fichier › Enregistrer une copie}** ({{⇧⌘S}}) crée une copie du design tel qu’il est maintenant, nommée d’après lui avec « copie », dans ton dossier de designs, avec ses images, et l’ouvre. La copie commence sans aucune version et n’est pas partagée.
- **{Dupliquer}** sur l’écran d’accueil crée une copie à côté de l’original, avec ses versions, et jamais partagée. Elle ne s’ouvre pas.
- **{Fichier › Afficher dans le Finder}** montre le fichier du design.

Un design renommé ou déplacé dans le Finder pendant qu’il est ouvert continue là où il est maintenant, dès que tu reviens dans Bezzle. Si son fichier venait à disparaître au moment même où Bezzle l’enregistre, Bezzle cherche où il est passé et l’enregistre là, ou sinon le réécrit là où il était, pour que rien de ce que tu as fait ne soit perdu.

Chaque modification est aussi une étape de l’historique d’annulation du design tant qu’il est ouvert (voir [Premiers pas](/docs/start.html)), et les versions remontent plus loin (voir [Notes et versions](/docs/notes.html#versions)).

## Les aperçus du Finder {#previews}

Le Finder montre chaque design sous forme d’une image de celui-ci, sur une feuille du papier de Bezzle au coin supérieur droit corné, comme est dessinée l’icône des designs. L’image est gardée dans le design, avec jusqu’à 1 024 pixels sur son plus long côté, assez pour les plus grandes icônes du Finder sur un écran Retina.

- **Un design d’un seul plan de travail** montre ce plan de travail bord à bord. Une page très haute montre son haut, et une bande très large son début.
- **Un design de plusieurs plans de travail** montre son canevas sur le papier, de près, pour que les premiers plans de travail apparaissent en grand plutôt que tous en petit.
- **Quand elle est créée** : environ 20 secondes après une modification du design, quel que soit le nombre de modifications entre-temps ; quand tu fermes son onglet ; et quand Bezzle quitte. Un design de l’écran d’accueil sans image à jour, comme un design modifié ailleurs ou créé par une version antérieure de Bezzle, en reçoit une en arrière-plan.
- **L’icône à la place** : un design sans rien dessus, ou gardé en un seul fichier, montre l’icône des designs.

## Ouvrir et importer {#opening}

- **Double-clique** sur un design dans le Finder, ou dépose-le sur Bezzle dans le Dock. Il s’ouvre dans son propre onglet ; un design déjà ouvert fait passer son onglet au premier plan.
- **{Fichier › Ouvrir…}** ({{⌘O}}) ouvre les designs Bezzle et fait entrer les fichiers Adobe XD, Figma, Sketch et Photoshop. Tu peux en choisir plusieurs à la fois.
- **{Fichier › Importer depuis XD, Figma, Sketch ou Photoshop…}** ({{⇧⌘I}}) ne propose que des fichiers à faire entrer. Chacun devient un nouveau design dans ton dossier de designs ; le fichier lui-même reste tel quel.
- **{Fichier › Importer depuis un site web…}** ({{⌥⇧⌘I}}) fait entrer une page web sous forme de calques.

Ce qui est repris de chacun, et le rapport qui liste ce qui n’a pas pu l’être, sont expliqués dans [Importer des designs](/docs/import.html).

macOS limite chaque app à ce qu’elle a le droit d’atteindre. Bezzle peut toujours atteindre son dossier de designs, tes Téléchargements et tes Images (en lecture), et tout design ou dossier que tu y ouvres ou y choisis, depuis le Finder, la fenêtre d’ouverture ou le panneau d’export. Il garde l’autorisation pour 200 d’entre eux au plus, de sorte qu’un design ouvert depuis ailleurs se rouvre après que Bezzle a quitté.

## Mises à jour {#updates}

Bezzle se tient à jour tout seul. Il cherche une nouvelle version à chaque ouverture, et une fois par jour pendant qu’il tourne. Quand une nouvelle version est disponible, une fenêtre montre ses nouveautés, et tu l’installes tout de suite ou plus tard. Si tu choisis à cet endroit d’installer les mises à jour automatiquement, Bezzle télécharge chaque nouvelle version en arrière-plan et la met en place la prochaine fois que tu quittes.

Pour vérifier tout de suite, choisis {Bezzle › Rechercher des mises à jour…}, juste sous {À propos de Bezzle}.

Chaque téléchargement est vérifié par Apple, et chaque mise à jour est signée, si bien que seule une version faite par l’auteur de Bezzle est jamais installée. Chercher une mise à jour n’envoie rien d’autre que ta version. Chaque version et ce qui y a changé figurent sur la page [Nouveautés](/releases.html).

> [!windows] Mises à jour sous Windows
> Bezzle pour Windows cherche une nouvelle version de la même façon, à chaque ouverture et une fois par jour, et montre les nouveautés dans une fenêtre à lui : {Installer la mise à jour}, {Me le rappeler ultérieurement} ou {Ignorer cette version}. Pour l’installer, Bezzle enregistre tous les designs et se ferme, la nouvelle version est mise en place, et Bezzle se rouvre. {Rechercher des mises à jour…} est dans le menu Bezzle, juste sous {À propos de Bezzle}. Windows pose une question avant de lancer le programme d’installation que tu télécharges depuis le site, parce qu’il n’est pas signé avec un certificat payant (voir [Télécharger](/download.html)) ; les mises à jour arrivent depuis Bezzle sans cette question, et chacune est signée et vérifiée avant d’être installée.

## Confidentialité {#privacy}

Bezzle ne collecte aucune donnée. Il n’a ni compte, ni statistiques, ni publicité, ni pistage d’aucune sorte, et n’envoie rien sur toi ou tes designs à qui que ce soit. La suppression de l’arrière-plan se fait sur ton Mac ; les photos ne sont jamais envoyées. La [politique de confidentialité](/privacy.html) complète donne les détails.

Bezzle ne se connecte à internet que :

- au **serveur de Bezzle chez Cloudflare**, pour les designs que tu partages et, tant que d’autres ont un design partagé ouvert avec toi, pour transmettre tes pointeurs et tes modifications, le tout chiffré avec une clé que seules les personnes ayant le lien possèdent ;
- à une **page web que tu choisis de faire entrer**, chargée comme ton navigateur la chargerait ;
- à **ce site web et à GitHub**, qui garde les téléchargements, pour chercher une nouvelle version.

Le serveur pour assistants IA n’écoute que sur ton Mac et n’est pas joignable depuis le réseau ; rien ne part vers un assistant tant que tu n’en connectes pas (voir [Assistants IA](/docs/ai.html#privacy)).

> [!windows] Confidentialité sous Windows
> Bezzle pour Windows n’envoie rien non plus sur toi ou tes designs, et la suppression de l’arrière-plan se fait sur le PC lui-même. Quand elle passe par la carte graphique, elle utilise DirectML de Microsoft, qui peut envoyer à Microsoft des informations sur son utilisation, comme le dit sa licence.

## Comment le partage est chiffré {#encryption}

Quand tu partages un design, ton Mac crée un secret pour lui : 32 octets aléatoires, écrits sous forme des 43 caractères qui suivent `#2.` dans son lien. Le secret n’est jamais envoyé au serveur de Bezzle ni au site web. Un navigateur garde pour lui tout ce qui suit le `#` d’une adresse, si bien que la page d’invitation le lit sur ton Mac et le remet directement à Bezzle, et que même le site web ne le voit pas.

À partir du secret, chaque Mac et chaque navigateur qui ont le lien calculent les mêmes clés :

- **le nom de la salle** sur le serveur, qui ne dit rien du secret ;
- **une clé pour lire** la salle et **une clé pour y écrire**, dont le serveur ne garde qu’une empreinte ;
- **la clé de chiffrement** de tout ce que contient le design ;
- **une clé pour nommer les images**, pour que le serveur ne voie qu’un nom brouillé pour chaque image, jamais son nom de fichier.

Tout est chiffré sur le Mac avant de le quitter, avec AES-256-GCM : le design, chaque modification, chaque image, les versions nommées, le nom du design et la personne qui l’a partagé, et chaque message en direct avec ton pointeur et tes glissements. Chaque Mac chiffre avec une clé à lui pour chaque session, dérivée de la clé du design, et chaque morceau est scellé à sa place dans la salle, si bien que personne ne peut modifier un morceau, ou le faire passer pour un autre, sans que cela se voie.

Le serveur ne garde que ce qu’il ne peut pas lire : des morceaux chiffrés, leur taille et le moment où ils arrivent. Ni l’auteur de Bezzle ni Cloudflare ne peuvent lire un design partagé.

Deux autres clés ne vont jamais dans le lien :

- **La clé du propriétaire**, créée par le Mac qui a partagé le design et gardée sur lui seul. Elle seule peut arrêter le partage du design, et c’est la seule qui peut dire comment s’appelle le design et qui l’a partagé.
- **La clé propre à chaque Mac** pour écrire ses modifications, pour que ses registres n’appartiennent qu’à lui et que personne d’autre ne puisse les supprimer ni les écraser.

{Arrêter le partage…} supprime du serveur le design et tout ce qu’il contient, et sa salle disparaît pour de bon : l’ancien lien ne pourra plus jamais servir.

Un design gardé dans un dossier que Google Drive, Dropbox ou iCloud Drive synchronise va là où ce service l’emmène, selon sa propre politique de confidentialité. Seul ce qui passe en direct entre les Mac qui l’ont ouvert, pointeurs, glissements et modifications au moment où ils se font, transite par le serveur de Bezzle, chiffré avec une clé gardée à l’intérieur du design, que seuls ceux qui ont le dossier possèdent.

## Où les choses sont gardées {#storage}

| Quoi | Où |
| --- | --- |
| Tes designs | Ton dossier de designs, ou là où tu les ranges. |
| Images, versions et notes | À l’intérieur de chaque design. |
| Un design partagé par lien | Sur chaque Mac avec lequel il est partagé, et chiffré sur le serveur de Bezzle jusqu’à ce qu’il ne soit plus partagé. |
| Les images de l’écran d’accueil | Dans le dossier des caches de Bezzle sur ton Mac. |
| Les réglages et ce dont Bezzle se souvient | Sur ton Mac : le dossier de designs que tu as choisi, les designs que tu as ouverts depuis ailleurs et l’autorisation de les rouvrir, les designs que tu as partagés et les clés pour en arrêter le partage, les notes que tu as lues, si le contrôle par IA est activé, et les options d’orthographe. |

## Dépannage {#troubleshooting}

### Un lien ne s’ouvre pas dans Bezzle {#link-not-opening}

Ouvre le lien dans un navigateur : il montre la page d’invitation. Clique sur {Ouvrir dans Bezzle}. Si rien ne se passe, Bezzle 1.4 ou ultérieur n’est pas sur ce Mac : télécharge-le depuis le site web, ou ouvre le Bezzle que tu as et accepte la mise à jour qu’il propose, puis clique de nouveau sur {Ouvrir dans Bezzle}. Les invitations créées avant Bezzle 1.4, par iCloud, ne mènent plus à aucun design : demande un nouveau lien. Sans Mac, choisis {Voir dans le navigateur}.

### L’écran d’accueil indique « Ouverture impossible » {#could-not-open}

La carte dit pourquoi : le lien ne mène à aucun design, le design n’est plus partagé, ou Bezzle n’a pas pu joindre son serveur. Voir [Ouvrir un design partagé](/docs/sharing.html#arriving) pour ce que signifie chaque cas.

### Un design ne peut pas être partagé {#share-fails}

« « … » n’a pas pu être partagé » avec « Bezzle n’a pas pu se connecter. Vérifiez la connexion et réessayez. » signifie que le serveur de Bezzle n’a pas pu être joint. Réessaie {Copier le lien} une fois que tu es en ligne. Un design que quelqu’un d’autre ne partage plus ne peut pas être partagé de nouveau : fais-en une copie à toi avec {Enregistrer une copie} et partage celle-ci. « Bezzle n’a pas pu arrêter le partage de « … » » après {Arrêter le partage…} signifie aussi qu’il n’y a pas de connexion ; réessaie.

### Les modifications des autres n’arrivent pas {#not-arriving}

Un triangle d’avertissement sur le bouton {Partagé} signifie que Bezzle ne peut pas se connecter pour l’instant ; pointe-le pour lire pourquoi. Tes modifications sont conservées et partiront dès que possible. Bezzle cherche ce qui est nouveau toutes les 30 secondes et chaque fois qu’il passe au premier plan, si bien que cliquer dans Bezzle vérifie aussitôt. Pour un design dans un dossier partagé, vérifie que le service du dossier fonctionne et est à jour.

### Un design n’a pas pu être enregistré {#not-saved}

Quand Bezzle dit qu’un design n’a pas pu être enregistré, la raison donnée par macOS suit. Choisis {Garder Bezzle ouvert}, pour que rien ne soit perdu, corrige ce que la raison indique, et quitte de nouveau.

### Un design manque sur l’écran d’accueil {#missing-design}

L’écran d’accueil liste les designs de ton dossier de designs et ceux que tu as ouverts depuis ailleurs. Un design rangé dans un sous-dossier du dossier de designs apparaît une fois que tu l’ouvres, avec {Fichier › Ouvrir…}. Un dossier de designs sur un disque qui n’est pas branché laisse place au dossier Bezzle des Documents, jusqu’à ce que tu branches le disque et rouvres Bezzle.

### Deux copies de Bezzle {#two-copies}

Avec deux copies sur un même Mac, par exemple l’une dans Téléchargements et l’autre dans Applications, celle qui est lancée en second transmet ses designs et ses liens à celle qui tourne déjà et quitte. Garde celle d’Applications et place l’autre dans la Corbeille. Voir [Deux copies de Bezzle sur un même Mac](/docs/sharing.html#two-copies).

### Le Finder montre l’icône, pas une image {#no-preview}

Un design sans rien dessus montre l’icône, de même qu’un design gardé en un seul fichier depuis les débuts de Bezzle, jusqu’à ce qu’il devienne un paquet. Tout autre design reçoit son image en arrière-plan dès que l’écran d’accueil le montre, ou quand tu fermes son onglet.

### Un assistant ne parvient pas à joindre Bezzle {#ai-not-connecting}

Vérifie que {Bezzle › Autoriser le contrôle par IA} est activé. Si le menu indique « Le contrôle par IA est désactivé : Le port 7412 est déjà utilisé », une autre app occupe le port ; quitte-la, puis désactive et réactive {Autoriser le contrôle par IA}. Un assistant qui ne trouve pas un fichier ne peut ouvrir que ce que Bezzle a le droit d’atteindre (voir [Ouvrir et importer](#opening)). Plus d’informations dans [Assistants IA](/docs/ai.html#allow).

### Toujours bloqué {#help}

Écris-nous depuis la page [Assistance](/support.html). Dis ce que tu as fait et ce que tu attendais ; chaque message est lu.
