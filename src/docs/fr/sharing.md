---
title: Partager et travailler ensemble
nav: Partager
lede: Partage un design par lien, ou garde-le dans un dossier que Google Drive, Dropbox ou iCloud Drive synchronise, et travailles-y avec d’autres au même moment. Les modifications de chacun se fusionnent, si bien que rien de ce que fait quelqu’un n’est perdu.
---

Il y a deux façons de travailler sur un design avec d’autres personnes, et elles peuvent s’utiliser ensemble. **Par lien** : tu copies un lien, tu l’envoies comme tu veux, et la personne qui l’ouvre travaille avec toi sur le design dans Bezzle sur son Mac, ou le suit dans un navigateur. Personne n’a besoin d’un compte d’aucune sorte, et le design est chiffré sur ton Mac avant de partir vers le serveur de Bezzle. **Par un dossier partagé** : un design gardé dans un dossier que Google Drive, Dropbox, iCloud Drive ou un serveur synchronise peut être ouvert sur plusieurs Mac à la fois, chacun n’écrivant que ses propres modifications.

Dans les deux cas, vous vous voyez travailler : le pointeur de chacun avec son propre crayon de couleur, ce qu’il regarde et ce qu’il tient, ses glissements pendant qu’il les fait. Les modifications se fusionnent propriété par propriété, les notes dans la marge et les versions nommées sont partagées aussi, et Annuler ne reprend jamais que tes propres étapes.

::: figure together
Deux personnes au travail dans un design partagé, chacune avec son propre crayon, et leurs notes dans la marge.
:::

## Partager par lien {#by-link}

::: steps
1. **Clique sur {Partager…}.** Il se trouve à droite de la barre en haut de la fenêtre du design. Un menu s’ouvre avec {Copier le lien} et le rappel que toute personne ayant le lien peut travailler sur le design.
2. **Choisis {Copier le lien}.** La première fois, tout ce que contient le design part vers le serveur avant que le lien soit remis : le bouton affiche « Préparation… », puis compte les images à mesure qu’elles partent, « Envoi : 3 sur 12 ».
3. **Colle le lien où tu veux.** Une fois le lien copié, le bouton affiche une coche un instant. Colle le lien dans n’importe quel e-mail, chat ou message.
:::

Le lien ressemble à ceci, avec 43 lettres, chiffres et caractères `-` et `_` après le `2.` :

```
https://bezzle.ch/open.html#2.<secret>
```

Tout ce qui suit le `#` est le secret du design, sa clé. Un navigateur n’envoie jamais cette partie d’une adresse à aucun serveur, si bien que même le site web ne la voit pas. Les liens créés avant que le site web ne déménage, qui commencent par `https://mfrports.github.io/bezzle-web/`, continuent de fonctionner.

Une fois le design partagé, le bouton indique {Partagé}, et une étiquette à côté du zoom indique aussi {Partagé} (quand tu la pointes, elle dit que les modifications de chacun arrivent au moment où elles sont faites). {Copier le lien} redonne le même lien chaque fois que tu en as besoin. Toute personne qui a le design peut copier son lien de la même façon et le transmettre, car c’est le même design pour tout le monde.

Ce qui part : le design entier, chaque image qu’il contient, et les versions que tu nommes pendant qu’il est partagé (voir [Versions dans un design partagé](/docs/notes.html#shared-versions)). Il reste sur le serveur, chiffré, pour que les autres puissent continuer à travailler pendant que ton Mac est éteint. Avant qu’il parte, le design est enregistré, et un design gardé en un seul fichier, comme aux débuts de Bezzle, devient un paquet, car le partage a besoin de place à l’intérieur (voir [Ce qu’est un fichier de design](/docs/files.html#design-file)).

> [!caution] Le lien est la clé
> Toute personne ayant le lien peut ouvrir le design et le modifier. Ne l’envoie qu’aux personnes que tu veux dans le design. Pour y mettre fin, voir [Arrêter le partage](#stop-sharing).

## Ouvrir un design partagé {#opening-a-link}

### La page d’invitation {#invitation}

Un lien ouvre dans le navigateur la page d’invitation de Bezzle, qui dit qu’un design t’attend. Elle propose deux boutons :

- **{Ouvrir dans Bezzle}** transmet le lien à Bezzle sur ce Mac, sous la forme `bezzle://share/2.<secret>`.
- **{Voir dans le navigateur}** ouvre le design dans le navigateur, pour quelqu’un qui n’a pas de Mac (voir [Dans un navigateur](#browser)).

Si rien ne se passe avec {Ouvrir dans Bezzle}, la page explique quoi faire : installer Bezzle 1.4 ou ultérieur, gratuit sur le site web (si tu l’as déjà, ouvre-le et accepte la mise à jour qu’il propose), puis revenir sur la page et cliquer de nouveau sur {Ouvrir dans Bezzle}. Un lien qui a perdu son secret en chemin affiche « Ce lien est incomplet. Demande une nouvelle invitation. »

### Dans Bezzle {#arriving}

Bezzle fait passer son écran d’accueil au premier plan, où une carte du design le montre en train d’arriver : son nom, et « Envoyé par » suivi du nom de la personne qui l’a partagé. Dès qu’il est là, il s’ouvre dans son propre onglet. Les images suivent à mesure que le design les montre, si bien qu’au premier coup d’œil, quelques-unes peuvent être encore en route (voir [Images en route](#pictures-arriving)).

Le design est gardé dans ton dossier de designs sous le nom avec lequel il a été partagé, ou « Design partagé » s’il n’en a pas, avec un numéro ajouté si ce nom est déjà pris. Dès lors, c’est un design de ton écran d’accueil comme un autre, marqué « Partagé par » et le nom de son propriétaire. Ouvrir plus tard le même lien l’ouvre simplement.

Quand un lien ne peut pas être ouvert, l’écran d’accueil dit pourquoi sur une carte à part, « Ouverture impossible », que tu fermes avec son ✕ :

| Message | Ce qu’il signifie |
| --- | --- |
| « Ce lien ne mène à aucun design. » | Le lien n’est pas un lien Bezzle, il est abîmé, ou son design n’est pas sur le serveur. |
| « Ce design n’est plus partagé. » | Son propriétaire a arrêté de le partager, le lien ne mène donc plus nulle part. |
| « Bezzle n’a pas pu atteindre le design. Vérifiez la connexion et ouvrez à nouveau le lien. » | Bezzle n’a pas pu joindre son serveur. Ouvre de nouveau le lien une fois que tu es en ligne. |

Un design que quelqu’un a partagé avec toi garde le nom sous lequel il a été partagé : {Renommer} est désactivé pour lui, sur l’écran d’accueil et dans son onglet, pour qu’il reste celui que tout le monde connaît.

### Qui tu es pour les autres {#names}

Il n’y a pas de comptes. Les autres te voient sous le nom de ton compte d’utilisateur sur ce Mac, dans sa forme courte, et tu les vois sous le leur. Le même nom signe les notes que tu écris et les versions que tu nommes.

## Travailler au même moment {#live}

Pendant que d’autres ont le design ouvert avec toi, Bezzle leur transmet ton pointeur, ta vue et tes modifications, et te transmet les leurs, un instant après qu’ils se produisent. Tout cela est chiffré avec la clé du design avant de quitter le Mac. Un design partagé par lien et un design dans un dossier partagé fonctionnent ici de la même façon.

### Qui est là {#who}

Les personnes qui sont dans le design avec toi s’affichent à droite de la barre du haut, chacune sous forme de jeton : son initiale sur un cercle de la couleur de son crayon. Ils prennent la place de l’étiquette {Partagé} tant que quelqu’un est là.

- **Au travail** : un anneau autour du jeton apparaît et disparaît pendant que la personne déplace des calques, tape ou dessine.
- **Absent** : le jeton est estompé tant que la personne est dans une autre app ou une autre fenêtre, ou quand on n’a rien reçu d’elle depuis 25 secondes. Il s’éclaire dès qu’elle revient.
- **Pointé** : son nom s’affiche sous le jeton, avec l’heure qu’il est chez elle quand ce n’est pas l’heure d’ici.
- **Parti** : la personne quitte la barre quand elle ferme le design, ou après cinq minutes sans nouvelles d’elle.

Le crayon de ton propre Mac est bleu. Tous les autres dessinent dans l’une de huit autres couleurs : vermillon, ocre, viridian, rose, bleu canard, sépia, olive et prune. Chaque personne garde la même couleur sur chaque Mac du design, et deux personnes n’en partagent jamais une tant qu’il y en a assez pour tout le monde. Quelqu’un qui suit dans un navigateur n’apparaît pas parmi les jetons.

### Sur le canevas {#on-canvas}

Chaque personne s’affiche dans sa propre couleur, avec les marques que Bezzle dessine en bleu pour toi :

- **Sa main** : son pointeur, qui a la forme de l’outil qu’elle tient : une flèche, un curseur de texte, une croix pendant qu’elle dessine une forme ou un plan de travail, une plume. Il est bordé de blanc pour se lire sur n’importe quoi, et il glisse comme une main le ferait au lieu de sauter au rythme du réseau.
- **Son nom** : sur une petite étiquette à côté de la main quand elle se met à bouger, pendant qu’elle travaille, ou quand sa main s’approche de la tienne.
- **Ce qu’elle regarde** : une douce flaque de lumière de sa couleur sur la table, autour des plans de travail qu’elle a sous les yeux.
- **Ce qu’elle tient** : sa sélection, entourée de son crayon, avec son initiale sur un fanion à son coin.
- **Ce qu’elle fait glisser** : les calques qu’elle fait glisser ou redimensionne bougent sur ton canevas pendant qu’elle le fait, avant même que la modification arrive, et se posent là où elle relâche.
- **Ce qu’elle a changé** : chaque calque que quelqu’un modifie s’éclaire un instant de sa couleur quand la modification arrive.

### Aller voir quelqu’un {#follow}

Clique sur le jeton d’une personne dans la barre du haut et ta vue s’envole vers ce qu’elle regarde, en reculant, en traversant puis en se rapprochant, pour que tu gardes tes repères, puis l’accompagne quand elle se déplace. Des traits de coupe de sa couleur se tiennent aux coins de ton canevas, avec son nom en bas, tant que tu la suis. Déplace la vue toi-même, ou clique de nouveau sur son jeton, et la vue redevient la tienne.

Quelqu’un qui travaille hors de ta vue se tient au bord du canevas sous forme de jeton pointé dans sa direction, qui glisse le long du bord quand l’un de vous deux bouge. Pointe-le pour voir son nom, et clique dessus pour t’envoler là-bas et la suivre.

### Montrer quelque chose {#wink}

Pour dire « regarde ici », secoue le pointeur : d’avant en arrière, rapidement, en changeant de sens au moins quatre fois en 0,7 seconde, d’au moins 16 points dans chaque sens. Une boucle est dessinée autour de l’endroit avec ton crayon, comme on entoure quelque chose sur une épreuve imprimée, sur chaque canevas du design, et s’estompe après quelques secondes. Pour quelqu’un qui n’a pas cet endroit sous les yeux, la boucle entoure à la place ton jeton au bord de son canevas, et un clic dessus l’emmène à cet endroit. Une secousse compte au plus une fois toutes les 1,2 seconde.

### Images en route {#pictures-arriving}

Une image que quelqu’un place parvient aux autres en deux temps. Au moment où elle est placée, un tout petit aperçu, de quelques dizaines de pixels de large, part vers tous ceux qui sont dans le design, et se montre doux et flou là où l’image se trouvera. L’image elle-même suit depuis le serveur et, pendant qu’elle est en route, elle se révèle comme une photographie, laiteuse et granuleuse, ses couleurs venant lentement ; sans aperçu, elle commence comme un papier non exposé. Une fois arrivée, elle devient nette.

> [!windows]
> Bezzle pour Windows fait aussi des aperçus et les montre, dans les deux sens avec un Mac : une image en route y est son aperçu, doux et flou, jusqu’à ce qu’elle arrive. Elle ne s’y révèle pas encore comme une photographie.

### En arrière-plan {#background}

Pendant que d’autres sont dans le design avec toi, Bezzle empêche macOS de le ralentir quand il est en arrière-plan, pour qu’ils continuent de te voir au lieu de croire que tu es parti. Ton Mac peut toujours se mettre en veille. La connexion se gère toute seule : elle remarque quand elle tombe, par exemple après un changement de Wi-Fi, réessaie un peu plus tard à chaque fois, et se reconnecte aussitôt quand le Mac se réveille.

## Comment les modifications se fusionnent {#merging}

Chaque copie d’un design partagé n’écrit que ses propres modifications, et jamais par-dessus celles des autres. Chaque copie reçoit les modifications de tout le monde et les fusionne, dans n’importe quel ordre et avec n’importe quel retard, en un même design. Ainsi, aucune modification n’est jamais perdue ni écrasée.

Les modifications se fusionnent propriété par propriété :

- **Des calques différents, ou des propriétés différentes d’un même calque** : tout est gardé. Si tu changes le remplissage d’un bouton pendant que quelqu’un le déplace, il finit avec ton remplissage là où l’autre l’a mis.
- **La même propriété du même calque** : la modification la plus récente est gardée, sur chaque Mac de la même façon. La position et la taille d’un calque comptent pour une seule propriété, ses mots pour une autre.
- **Un calque supprimé** : si quelqu’un l’a modifié, ou a modifié quelque chose qu’il contient, après sa suppression et avant de l’apprendre, il revient avec ce qui le contient, pour que son travail ne soit pas perdu.
- **Deux calques mis l’un dans l’autre en même temps** : le plus ancien des deux déplacements cède, et ce calque va sur le canevas.
- **Styles et notes** : fusionnés de la même façon, chaque propriété séparément. Une réponse à une note, une modification de ses mots et le fil marqué comme terminé, faits en même temps par trois personnes, sont tous gardés.

Certaines choses n’appartiennent qu’à toi : ce que tu regardes et de quelle distance, ce que tu as sélectionné, et quelle publication d’une pile est devant pour toi.

Pendant que tu fais glisser quelque chose, les modifications des autres attendent que tu relâches, pour que rien ne saute sous ta main ; pendant que tu tapes, elles arrivent normalement. Elles ne sont jamais des étapes de ton historique d’annulation : Annuler ne reprend que ce que tu as fait, et laisse les modifications de tous les autres telles qu’elles sont, même quand elles sont venues après.

### Quand les modifications partent {#timing}

Vers les personnes qui sont dans le design avec toi, une modification part aussitôt ; un glissement part quand tu relâches, les calques bougeant sur leur canevas pendant que tu fais glisser. Vers le serveur, elle part dans les deux secondes environ, avec tout ce que tu fais entre-temps. Un design partagé cherche aussi ce qui est nouveau chaque fois que le serveur signale qu’il y a quelque chose, toutes les 30 secondes de toute façon, et chaque fois que Bezzle passe au premier plan.

Sans connexion, tu continues à travailler comme d’habitude. Le bouton de partage affiche un triangle d’avertissement, et le pointer indique « Bezzle ne peut pas se connecter pour l’instant. Vos modifications sont conservées et partiront dès que possible. » Un design partagé s’ouvre toujours tel qu’il a été partagé la dernière fois, même sans réseau, car tout ce dont il a besoin est gardé dans son fichier.

## Arrêter le partage, et lecture seule {#stop-sharing}

Seul le Mac qui a partagé un design peut en arrêter le partage. Choisis {Partager…} › {Arrêter le partage…}. Bezzle demande d’abord : le lien ne fonctionnera plus, et toutes les personnes qui ont le design le gardent tel qu’il est maintenant, en lecture seule. Clique sur {Arrêter le partage} pour continuer.

Le design est alors supprimé du serveur, avec tout ce qu’il contient, et le lien ne fonctionne plus jamais. Sur ton Mac, le design continue comme un design à toi.

La copie de tous les autres reste telle qu’elle était en dernier, marquée « Plus partagé » avec un cadenas. Quand on la pointe, l’étiquette indique : « Lecture seule : ce design n’est plus partagé avec vous. Enregistrez une copie pour continuer à y travailler. » Dans un tel design :

- Rien ne peut être modifié. L’inspecteur est estompé, mais {Inspecter} mesure toujours tout et montre son code.
- Le bouton de partage devient {Enregistrer une copie} ({{⇧⌘S}}), qui en fait un design à toi, nommé d’après lui avec « copie », dans ton dossier de designs, et l’ouvre.
- Les notes peuvent être lues et copiées, mais pas écrites, ni recevoir de réponse, ni être marquées comme terminées ; les versions peuvent être consultées, mais pas nommées, et on ne peut pas y revenir.

Pour donner un nouveau lien à un design, arrête de le partager, puis choisis de nouveau {Copier le lien} : il reçoit une nouvelle place sur le serveur et un nouveau secret, et l’ancien lien reste mort.

### Placer un design partagé dans la Corbeille {#trash}

Placer dans la Corbeille un design que tu as partagé en arrête aussi le partage, Bezzle demande donc d’abord : « Placer « … » dans la corbeille et arrêter de le partager ? », avec {Placer dans la corbeille} et {Annuler}. Si le serveur est injoignable à ce moment-là, Bezzle réessaie chaque fois qu’il passe au premier plan, jusqu’à y parvenir. Retirer de l’écran d’accueil un design gardé hors de ton dossier de designs ({Retirer de la liste}) laisse son fichier et son partage tels qu’ils sont.

> [!note] Les designs autrefois partagés par iCloud
> Avant la 1.4, Bezzle partageait les designs par iCloud. Ces designs ne sont plus synchronisés. Les tiens sont de nouveau à toi : partage-les par lien pour continuer à y travailler ensemble. Ceux que d’autres ont partagés avec toi restent tels qu’ils étaient en dernier, en lecture seule, et {Enregistrer une copie} t’en garde un exemplaire.

## Copies d’un design partagé {#copies}

Une copie est toujours un design à part, jamais partagé :

- **{Dupliquer}** sur l’écran d’accueil, et {Fichier › Enregistrer une copie}, créent des copies qui ne sont pas partagées.
- **Une copie faite dans le Finder** d’un design partagé par lien devient un design à part sur ton Mac, tant que l’original est toujours là.

> [!caution] Envoyer le fichier, c’est envoyer la clé
> Le fichier d’un design partagé contient son lien, puisque toute personne qui a le design a le lien. Envoie à quelqu’un le fichier lui-même, et cette personne peut rejoindre le design partagé avec. Pour donner un design à quelqu’un sans le laisser entrer, envoie une copie faite avec {Enregistrer une copie} ou {Dupliquer}.

## Dans un navigateur {#browser}

{Voir dans le navigateur} sur la page d’invitation ouvre le design sur le site web de Bezzle, dessiné par le même code que celui qui le dessine sur un Mac. C’est pour les personnes sans Mac, sous Windows surtout, qui veulent voir un design que quelqu’un a partagé avec elles.

- **Son nom** et la personne qui l’a partagé sont en haut, avec l’état de la connexion : « En direct », « Connexion… », « Reconnexion… », « N’est plus partagé » ou « Hors ligne ».
- **Ses plans de travail** sont listés à gauche (en haut sur un écran étroit). Clique sur l’un d’eux pour le voir.
- **Les modifications** que font les autres arrivent au moment où elles sont faites, et le plan de travail est redessiné. Les images sont récupérées à mesure que le plan de travail les montre.

Le navigateur montre le design ; il ne le modifie pas, et les personnes qui y sont ne voient pas de pointeur pour quelqu’un qui regarde dans un navigateur. Les polices propres au Mac, comme SF Pro, sont dessinées avec des polices libres très proches (SF Pro en Inter, par exemple), de sorte que les mots peuvent se placer un peu autrement que sur un Mac. La première visite prend un instant, car la page charge environ 22 Mo.

## Dossiers partagés {#folders}

Un design gardé dans un dossier que plusieurs ordinateurs synchronisent peut être ouvert sur tous à la fois : Google Drive, Dropbox, OneDrive, Box, iCloud Drive, ou un dossier sur un serveur. Mets-y le design, en le déplaçant dans le Finder ou en choisissant un tel dossier comme dossier de designs ([Le dossier de designs](/docs/files.html#designs-folder)), et ouvre-le sur chaque Mac.

Chaque Mac écrit alors ses modifications dans ses propres fichiers à l’intérieur du design et lit ceux de tous les autres, si bien que rien n’est jamais écrasé, quel que soit le nombre de personnes qui l’ont ouvert. Les modifications se fusionnent exactement comme dans un design partagé par lien, et vous vous voyez travailler de la même façon : pointeurs, vues, glissements et modifications passent au moment où ils se font par le serveur de Bezzle, chiffrés avec une clé que seuls ceux qui ont le dossier possèdent, gardée à l’intérieur du design, tandis que le dossier lui-même garde le design.

- **L’étiquette** à côté du zoom indique « Partagé dans » et le nom du service, par exemple « Partagé dans Google Drive », dès que le travail de quelqu’un d’autre est dans le design. Tes propres Mac, sous le même nom, comptent comme toi.
- **Rester à jour** : Bezzle lit ce qui est nouveau chaque fois que le service change des fichiers dans le design, et toutes les 20 secondes de toute façon (toutes les 5 secondes dans le dossier d’un serveur, qui ne signale pas toujours qu’une chose a changé). Un fichier que le service ne garde qu’en ligne est téléchargé quand Bezzle le lit.
- **Renommé ou déplacé** par quelqu’un d’autre pendant que tu l’as ouvert, le design continue là où il est maintenant, pour que vous continuiez tous à travailler dans le même design.
- **Une copie** faite dans le Finder est un design à part, avec sa propre salle en direct.
- **Par lien aussi** : un design dans un dossier partagé peut aussi être partagé par lien avec quelqu’un d’extérieur au dossier.

Un design dans un dossier synchronisé va là où ce service l’emmène, selon sa propre politique de confidentialité.

## Deux copies de Bezzle sur un même Mac {#two-copies}

Avec deux copies de Bezzle sur un Mac, l’une dans Téléchargements et l’autre dans Applications par exemple, une seule fonctionne à la fois. Lance la seconde pendant que la première tourne, par un double-clic ou en ouvrant un lien ou un design, et elle transmet ce avec quoi elle a été ouverte à celle qui tourne déjà, fait passer celle-ci au premier plan et quitte quelques secondes plus tard. Ainsi, deux copies n’enregistrent jamais les mêmes designs l’une par-dessus l’autre. Les deux copies gardent les mêmes designs et le même partage, car c’est la même app.

## Limites {#limits}

| Quoi | Limite |
| --- | --- |
| Un design partagé sur le serveur | 2 Go, tout son contenu compris |
| Une image | environ 32 Mo ; un fichier image plus gros reste sur ton Mac, et les autres ne le reçoivent pas |
| Couleurs de crayon | huit en plus de ton bleu ; au-delà, les couleurs se répètent |

Pour savoir comment fonctionne le chiffrement et ce que le serveur peut voir ou non, voir [Comment le partage est chiffré](/docs/files.html#encryption). Les notes et les versions dans un design partagé sont expliquées dans [Notes et versions](/docs/notes.html#shared-notes).
