---
title: Prototypes
nav: Prototypes
lede: Relie des boutons à des écrans en tirant un fil de l’un à l’autre, laisse Bezzle déduire le mouvement de la place de tes écrans, donne des états aux composants, et parcours le tout dans l’appareil pour lequel il est fait.
---

Dans Bezzle, un prototype, c’est le design que tu as déjà, vu autrement. Il n’y a rien à régler pour chaque transition : tu relies un calque à l’écran auquel il mène, et Bezzle déduit comment l’écran suivant arrive d’après la place des deux sur le canevas et ce qu’ils ont en commun. Les composants montrent leur apparence au survol, enfoncée ou sélectionnée d’après le nom de leurs variantes. Quand tu le lis, l’écran se soulève du canevas et entre dans l’appareil auquel il est destiné, et tu cliques à travers comme quelqu’un toucherait la vraie app.

::: figure prototype
Le design vu comme un prototype : des écrans sur du papier millimétré, un fil de lumière de chaque calque relié vers l’écran qu’il ouvre, et le drapeau de départ sur le premier écran.
:::

## Le mode Prototype {#prototype-mode}

Chaque design peut se voir de trois façons, dans le sélecteur en haut à droite de sa fenêtre : {Design}, {Prototype} et {Inspecter}. Choisis {Prototype}, appuie sur {{⌃P}}, ou choisis {Fenêtre › Prototype}. L’info-bulle du sélecteur dit à quoi il sert : « Voir le design comme un prototype : ses écrans et les chemins entre eux. »

Quand le design devient un prototype :

- **Le canevas devient du papier millimétré.** Un fin quadrillage bleu dont une ligne sur cinq est plus marquée, fixé au canevas quand tu le déplaces. Les plans de travail y sont posés comme des écrans.
- **Les parcours s’allument.** Chaque lien est dessiné comme un fil terminé par une pointe de flèche, et les fils s’allument l’un après l’autre depuis l’écran où le prototype commence, comme un courant qui parcourt des fils électriques.
- **Les outils s’effacent.** Rien ne se dessine en mode Prototype, la barre d’outils se vide donc (les boutons Calques et Ressources restent). Les touches des outils de dessin n’ont aucun effet ici. La saisie de texte en cours se termine, l’outil revient à Sélection, et un tracé ou une image en cours de modification est relâché.
- **L’inspecteur montre le prototype.** Quand rien n’est choisi, il montre où le prototype commence et tous les chemins qui le parcourent ; quand un calque est choisi, où il mène ; quand un écran est choisi, la partie propre à l’écran.
- **Exporter… devient Lire.** Le bouton tout à droite de la barre du haut devient {Lire}, dans le bleu du crayon.
- **Les notes s’effacent.** Les notes en marge sont masquées pendant que tu prototypes et reviennent avec le design.

Appuie de nouveau sur {{⌃P}}, ou choisis {Design} dans le sélecteur, pour revenir au dessin. Un prototype en cours de lecture s’arrête aussitôt.

Seuls les plans de travail affichés sont des écrans. Un plan de travail masqué est laissé hors du prototype, tout comme les liens des calques masqués.

### Se déplacer {#moving-around}

Le mode Prototype n’a pas d’outils, le pointeur fait donc ce dont le prototype a besoin :

- **Fais glisser sur le papier vide** pour déplacer la vue. Le pointeur devient une main fermée. Maintenir {{Space}} en faisant glisser déplace la vue n’importe où, comme quand tu dessines. Le zoom fonctionne comme toujours.
- **Clique sur un calque** pour le choisir, comme un clic le choisit quand tu dessines : d’abord un groupe, et un double-clic descend d’un niveau à l’intérieur. Un calque qui mène déjà quelque part est choisi directement, à quelque profondeur qu’il se trouve, pour que tu puisses toujours atteindre un lien.
- **Un clic dans une copie d’un composant choisit la copie.** C’est la copie qui mène quelque part, si bien qu’un bouton fait d’un composant est relié en entier. Quand des copies se trouvent dans des copies, c’est la plus intérieure qui est choisie : un bouton dans un composant carte, c’est le bouton.
- **{{⇧}} clic** ajoute un calque ou un écran à ce qui est choisi, ou l’en retire.
- **Clique sur le fond d’un écran ou sur son nom** pour choisir l’écran.
- **Fais glisser un écran par son nom** pour le déplacer sur le canevas. Comme le mouvement se déduit de la place des écrans, déplacer un écran peut changer la façon dont il arrive.
- **Double-clique sur le nom ou le fond d’un écran** pour lire le prototype depuis cet écran.
- **Clique sur le papier vide** pour relâcher ce qui est choisi.

| Touche | En mode Prototype |
| --- | --- |
| {{⌫}} | Retire les liens des calques choisis. Les calques eux-mêmes restent. |
| {{Return}} | Lit le prototype, depuis l’écran choisi ou depuis là où il commence. |
| {{Esc}} | Lâche un fil en train d’être tiré, ferme une note en cours d’écriture, ou relâche ce qui est choisi. |
| {{Space}} | Maintiens et fais glisser pour déplacer la vue. |
| Touches fléchées, lettres des outils | Sans effet : rien ne se dessine ni ne se déplace ici. |

## Relier un calque à un écran {#linking}

Un lien dit où mène un calque quand on le touche. Tu en crées un en tirant un fil hors du calque et en le relâchant au-dessus d’un écran.

::: steps
1. **Pointe un bouton.** Il est entouré, et tant qu’il ne mène encore nulle part, une petite pastille ronde marquée d’un plus se tient sur son bord droit : l’endroit d’où sort le fil.
2. **Appuie et fais glisser.** Un fil sort du calque et suit le pointeur, en pendant un peu comme une cordelette tenue entre deux mains. Chaque écran vers lequel il pourrait mener se soulève légèrement, et un creux rond apparaît à gauche de l’écran du calque lui-même.
3. **Fais glisser au-dessus de l’écran qu’il doit ouvrir.** Cet écran attrape le fil : il s’allume tout autour, le fil se tend, et son extrémité vient se poser sur le bord de l’écran, là où le fil entrera. Sur un trackpad, tu sens un petit déclic.
4. **Relâche.** Le fil est noué. Il se pose avec une petite oscillation, une perle de lumière le parcourt, et un anneau de lumière s’élargit une fois autour de l’écran qu’il atteint.
:::

Un fil quitte le calque par le côté d’où tu le tires : tirer vers la gauche le fait sortir du côté gauche du calque. Un calque ne peut pas être relié à l’écran sur lequel il se trouve : cet écran n’attrape pas le fil. Relâche au-dessus du papier vide et le fil revient d’un coup dans son calque, sans que rien ne change.

Chaque calque a un seul lien. Tirer un nouveau fil d’un calque qui mène déjà quelque part et le relâcher au-dessus d’un autre écran l’envoie là à la place.

> [!tip] Dispose les écrans comme ils doivent bouger
> Bezzle déduit chaque transition du canevas. Place l’écran suivant d’un parcours à droite du précédent, et il glisse depuis la droite ; place un écran en dessous, et il monte d’en bas. Voir [Comment les écrans bougent](/docs/prototype.html#motion).

### Déplacer ou couper un fil {#rerouting}

- **Pour envoyer un lien ailleurs,** appuie sur son fil et fais glisser. Le fil se détache de l’écran vers lequel il allait, et tu peux le relâcher au-dessus d’un autre.
- **Pour couper un lien,** fais glisser son fil hors de son écran et relâche-le au-dessus du papier vide. Tant qu’il pend dans le vide, le fil devient rouge et pointillé, pour dire qu’il va être coupé.
- {{Esc}} pendant que tu tires lâche le fil sans rien changer.

### Revenir en arrière {#going-back}

Un calque peut aussi ramener à l’écran d’où l’on vient, comme le fait un bouton retour ou un bouton fermer. Pendant que tu tires un fil, un creux rond avec un crochet se tient juste à gauche de l’écran du calque, à la hauteur du calque. Relâche au-dessus du creux, et le calque ramène en arrière.

Un calque qui ramène en arrière est dessiné avec un court crochet pointillé qui s’enroule hors de son côté gauche, au lieu d’un fil. Quand le prototype est lu, il revient à l’écran qui a mené ici, de la façon dont cet écran est arrivé, jouée à l’envers.

### La carte Mène à {#goes-to-card}

Choisis un calque, et l’inspecteur ouvre sa carte {Mène à}. Elle fait tout ce que fait le tirage d’un fil, et un peu plus. Sa ligne repliée dit où mène le calque : le nom d’un écran, {Retour}, {Nulle part}, ou {Mixte} quand plusieurs calques sont choisis et qu’ils mènent à des endroits différents.

::: fields
- **Les écrans** : chaque autre écran sous forme de petite image avec son nom, trois par rangée. Clique sur l’un d’eux pour y envoyer le calque ; clique de nouveau sur celui qui est choisi pour retirer le lien. Pointe une image et le canevas dessine le fil pointillé que le calque prendrait pour y aller.
- **Retour** : le crochet rond après les écrans. Son info-bulle : « Revient à l’écran d’où l’on venait ». Clique de nouveau dessus pour le retirer.
- **La note** : une ligne où écrire, dans une écriture manuscrite, avec l’indication « Pourquoi, ou quand : après la connexion ». Affichée dès que le calque mène quelque part. Voir [Notes sur les fils](/docs/prototype.html#notes).
- **Le mouvement** : quatre choix, {Auto}, {Glisser}, {Fondu} et {Immédiat}, chacun une petite image animée de deux écrans qui se joue pendant que tu la pointes ; son nom est dans son info-bulle. Quand {Auto} est choisi, une ligne en dessous dit comment le canevas fait arriver l’écran. Voir [Comment les écrans bougent](/docs/prototype.html#motion).
- **Supprimer le lien** : le × dans le coin de la carte quand elle est ouverte.
:::

### Plusieurs calques à la fois {#several}

{{⇧}} clique sur plusieurs calques, puis clique sur un écran dans la carte {Mène à} : ils y mènent tous. Leurs notes et leur mouvement restent tels que chacun les avait. Quand les calques choisis ont le même lien, la même note et le même mouvement, la note et le mouvement de la carte s’appliquent à tous à la fois.

### Le menu {#menu}

Fais un clic droit sur un calque, un fil ou un écran pour un menu de ce qu’il peut faire :

| Élément | Ce qu’il fait |
| --- | --- |
| {Lire depuis ici} | Sur un écran : lit le prototype depuis cet écran. |
| {Commencer ici} | Sur un écran : le prototype commence sur lui. Coché, et plus proposé, sur un écran déjà marqué comme départ. |
| {Vers …} | Un pour chaque autre écran, par son nom : y envoie le calque. L’écran vers lequel il mène actuellement est coché. |
| {Revenir} | Sur un calque : il ramène à l’écran précédent. |
| {Écrire une note} | Écrit sur son fil. Affiché quand il mène quelque part. |
| {Supprimer le lien} | Retire le lien. Affiché quand il mène quelque part. |

### Retirer des liens {#removing}

Chacune de ces actions retire un lien et laisse le calque tel qu’il est : {{⌫}} quand le calque est choisi (le mode Prototype ne supprime jamais de calques), le × de la carte {Mène à}, {Supprimer le lien} dans le menu, un nouveau clic sur l’écran choisi dans la carte, ou couper le fil sur le canevas. Retirer un lien efface aussi sa note et son mouvement.

Si tu supprimes un écran, les liens qui y menaient ne mènent plus nulle part et leurs fils disparaissent.

## Notes sur les fils {#notes}

Une note dit pourquoi, ou quand, un calque mène là où il mène, avec tes propres mots : « après une connexion réussie », « seulement pour les nouveaux clients ». Elle s’adresse aux personnes qui lisent le prototype, et à un assistant IA qui le construit en code.

- **Double-clique sur un fil** pour écrire dessus, ou choisis {Écrire une note} dans son menu, ou tape dans la ligne de note de la carte {Mène à}. Sur le canevas, une petite étiquette en papier s’ouvre au milieu du fil, avec l’indication « Pourquoi, ou quand ».
- {{Return}} garde la note, tout comme un clic ailleurs. {{Esc}} la ferme sans changement. Vide la ligne pour retirer une note.
- La note pend à son fil comme une étiquette en papier, dans une écriture manuscrite, le fil restant visible en dessous. Une longue note est abrégée par des points de suspension sur le canevas, et gardée en entier.
- Un clic sur l’étiquette choisit son calque, comme un clic sur le fil.
- Les notes apparaissent aussi sous chaque chemin dans la liste de l’inspecteur, et quand le prototype est lu, la note du chemin que tu viens de prendre s’écrit à la main sous l’appareil.

## Comment les écrans bougent {#motion}

La façon dont un écran arrive se déduit du canevas, et le choix {Auto} est presque toujours le bon. Tu peux tout de même choisir un mouvement simple pour n’importe quel lien dans la carte {Mène à}.

| Mouvement | Ce qu’il fait |
| --- | --- |
| {Auto} | Déduit de la place des écrans et de ce qu’ils partagent (voir plus bas). C’est le réglage de départ de chaque lien. |
| {Glisser} | L’écran suivant glisse depuis le côté où il se trouve, le précédent lui cédant la place, quoi qu’ils partagent. |
| {Fondu} | L’écran précédent se fond dans le suivant. |
| {Immédiat} | L’écran suivant est là tout de suite. |

### Ce qu’Auto lit sur le canevas {#auto}

{Auto} regarde l’écran d’où part un lien et l’écran vers lequel il mène, et choisit l’une de trois façons :

- **Une feuille,** quand l’écran suivant n’est pas plus large que celui sur lequel il s’ouvre et qu’il est soit moins haut que 92 pour cent de sa hauteur, soit moins large que 92 pour cent de sa largeur. Il monte du bas par-dessus l’écran sur lequel il s’ouvre, qui s’assombrit derrière lui. La feuille se pose le long du pied de l’appareil, au milieu, ses angles supérieurs arrondis.
- **Un morphing,** quand les deux écrans sont pour l’essentiel le même écran, modifié : au moins 60 pour cent de leurs calques sont les mêmes calques par leur genre et leur nom (le premier « Title » avec le premier « Title », une copie d’un composant avec une copie du même), et certains d’entre eux ont bougé, changé de taille ou changé d’apparence. Ce qu’ils partagent se déplace vers sa nouvelle place et prend sa nouvelle apparence ; ce qui n’est que sur le premier s’estompe en s’éloignant ; ce qui n’est que sur le second apparaît en fondu, en glissant à sa place depuis le côté où se trouve l’écran ; et le fond change de couleur entre les deux. Duplique un écran et modifie-le : les deux passent de l’un à l’autre en morphing.
- **Une poussée,** sinon. L’écran suivant glisse depuis le côté où il se trouve, comme l’œil voyage entre eux sur le canevas : un écran à droite arrive de la droite, un écran à gauche de la gauche, un écran en dessous monte d’en bas, un écran au-dessus descend d’en haut. Quand un écran se trouve à la fois de côté et plus bas, c’est la direction dans laquelle il est le plus éloigné qui l’emporte, mesurée par rapport à la taille des écrans. L’écran précédent cède un peu vers l’autre côté et s’assombrit sous l’ombre du nouveau.

Tant que {Auto} est choisi, la carte {Mène à} dit ce qu’il a lu, avec l’une de ces phrases :

| La carte dit | Cela signifie |
| --- | --- |
| Glisse depuis la droite, comme il est placé sur la zone de travail. | Une poussée depuis la droite. |
| Glisse depuis la gauche, comme il est placé sur la zone de travail. | Une poussée depuis la gauche. |
| Monte d’en bas, comme il est placé sur la zone de travail. | Une poussée depuis le bas. |
| Descend d’en haut, comme il est placé sur la zone de travail. | Une poussée depuis le haut. |
| Ce que les deux écrans partagent se déplace ; le reste change autour. | Un morphing. |
| Plus petit que l’écran qu’il recouvre : monte par-dessus comme une feuille. | Une feuille. |

### Ce qui reste en place {#shared-layers}

Dans un glissement ou une poussée, les calques qui sont au même endroit et ont exactement la même apparence sur les deux écrans, comme une barre d’onglets, une barre d’état ou un titre, restent où ils sont pendant que le reste de l’écran glisse en dessous, comme les barres d’une vraie app. Cela se produit quand aucun des deux écrans n’a défilé.

### Durées {#timing}

Chaque mouvement est porté par un ressort : il démarre vite et se pose en douceur.

| Façon | Dure environ |
| --- | --- |
| Poussée ou glissement | 0,5 seconde |
| Morphing | 0,62 seconde |
| Feuille | 0,62 seconde, avec un léger rebond en haut à l’arrivée |
| Fondu | 0,34 seconde |
| Immédiat | Aucun temps |

Revenir en arrière joue à l’envers la façon dont l’écran est arrivé : une feuille redescend, un écran poussé ressort en glissant. Recommencer depuis le début passe au premier écran en fondu.

## Où le prototype commence {#start}

Un drapeau dépasse du côté gauche de l’écran où le prototype commence, près de son haut, avec le triangle de lecture dessus.

- **Fais glisser le drapeau** sur un autre écran pour commencer là. Un fantôme du drapeau sur l’écran sous le pointeur montre où il se posera.
- **Pointe un autre écran** et un fantôme pointillé du drapeau apparaît au même endroit sur cet écran. Clique sur le fantôme, et le drapeau s’y envole depuis là où il était.
- **Dans le menu** d’un écran, choisis {Commencer ici}.
- **Dans l’inspecteur,** quand rien n’est choisi, le menu {Départ} sous la carte de départ liste tous les écrans. Quand un écran est choisi, sa carte {Écran} a une case à cocher {Commence ici}.

Si aucun écran n’est marqué comme départ, le prototype commence sur le premier écran d’où part un lien et vers lequel aucun ne mène, ou sinon sur le premier écran qui existe. Décocher {Commence ici} laisse de nouveau Bezzle choisir de cette façon.

## Des écrans qui continuent tout seuls {#timed}

Un écran peut passer au suivant au bout d’un moment, sans toucher, comme un écran de lancement ou une confirmation. Choisis l’écran, et sa carte {Écran} s’ouvre. Sa ligne repliée fonctionne comme un cadran : fais glisser latéralement dessus pour régler combien de temps l’écran attend, la largeur de la carte couvrant toute la plage, de rien à 10 secondes. Le glissement s’enclenche à 0,5, 1, 1,5, 2, 3 et 5 secondes au passage, et le trackpad le fait sentir. Ramené à rien, l’écran attend de nouveau un toucher. Tant qu’un écran n’attend pas, une ligne sous sa carte dit : « Faites glisser la carte sur le côté et l’écran passe de lui-même au suivant, comme un écran de lancement. »

Dès qu’il attend, la carte ouverte montre {Puis passe de lui-même à}, avec chaque autre écran sous forme d’image à cliquer. Tu peux aussi tirer un fil depuis le fond même de l’écran vers l’écran auquel il passe : le fil d’un écran sort de son bord droit. L’écran ne continue tout seul qu’une fois qu’il a un temps d’attente.

Le temps est gardé au dixième de seconde, au moins 0,1 seconde. Sur le canevas, le fil de l’écran est pointillé et une petite horloge à côté de son départ indique combien de temps il attend (« 1,5 s »). La ligne repliée de la carte dit {Suite après 1,5 s} ; sinon, elle dit {Commence ici} sur l’écran de départ, ou combien de chemins y mènent (« 1 accès », « 3 accès »).

La carte {Écran} ouverte a aussi {Lire depuis ici}.

## Les états d’une copie {#states}

Une copie d’un composant peut changer d’apparence pendant qu’on l’utilise : plus claire quand le pointeur est dessus, plus foncée quand on appuie dessus, remplie une fois sélectionnée. Dans Bezzle, cela ne demande aucun réglage. Une variante d’un composant joue un état quand son nom le dit : une variante appelée « Hover » s’affiche quand le pointeur est sur une copie, une variante appelée « Pressed » tant qu’on appuie dessus, et ainsi de suite. La nommer suffit à le dire, aux personnes comme à un assistant qui construit le prototype en code. Pour créer des variantes, voir [Composants](/docs/components.html).

| État | Noms reconnus | Dans le prototype lu |
| --- | --- | --- |
| Survol | hover, hovered, hovering, mouseover, over, survol, survolé | S’affiche tant que le pointeur est dessus |
| Appuyé | pressed, press, down, tap, tapped, active, appuyé, pressé, enfoncé | S’affiche tant qu’on appuie dessus |
| Focalisé | focus, focused, focalisé | S’affiche une fois touché, comme un champ |
| Sélectionné | selected, on, checked, chosen, current, sélectionné, coché, actif | Un toucher l’active et le désactive |
| Désactivé | disabled, inactive, unavailable, désactivé, indisponible | N’accepte aucun toucher |
| Chargement | loading, busy, progress, spinner, wait, waiting, chargement | S’affiche un instant avant de continuer |
| Erreur | error, invalid, failed, failure, erreur, invalide | Pour le code, quand quelque chose échoue |
| Succès | success, done, valid, complete, completed, succès, réussi, valide | Pour le code, quand quelque chose a réussi |

Les noms allemands, français et italiens fonctionnent aussi, comme « Gedrückt », « Survolé » ou « Premuto ». Les majuscules et les accents ne font aucune différence. Le nom peut être le nom entier de la variante ou n’importe quel mot qu’il contient, comme « Button / Hover » ou « Primary pressed » ; quand plusieurs mots nomment des états, c’est le dernier qui l’emporte, si bien que « Selected hover » est un survol. La première variante d’un composant (appelée « Par défaut » jusqu’à ce que tu la renommes) n’est un état que si tu lui as donné le nom d’un état.

### La carte États {#states-card}

Choisis une copie d’un composant en mode Prototype, et une carte {États} apparaît sous {Mène à}. Sa ligne repliée liste les états qu’a le composant, ou dit {Aucun}.

::: fields
- **Les variantes** : chacune avec un point (bleu quand c’est un état), son nom, et en dessous ce qu’elle fait dans le prototype. La première variante dit {Au repos}.
- **Utiliser comme** : à côté de chaque variante sauf la première dont le nom ne dit aucun état, un menu des huit états. En choisir un renomme la variante d’après cet état.
- **Les états manquants** : des pastilles en pointillés pour {Survol}, {Appuyé}, {Sélectionné}, {Désactivé} et {Chargement} quand le composant n’a pas de variante pour eux. Un clic crée une nouvelle variante qui a l’apparence actuelle de la copie, la nomme d’après l’état, et l’affiche dans la copie, prête à être modifiée. L’info-bulle de la pastille dit ce que fera l’état.
:::

### Comment les copies se comportent à la lecture {#states-played}

- Le pointeur sur une copie qui a une variante {Survol} l’affiche ; appuyer sur une copie qui a une variante {Appuyé} affiche celle-ci jusqu’à ce que tu relâches.
- Un toucher sur une copie qui mène quelque part suit son lien. Si la copie a une variante {Chargement}, celle-ci s’affiche d’abord pendant 0,9 seconde, puis l’écran suivant arrive.
- Un toucher sur une copie qui a une variante {Sélectionné} et pas de lien l’active, et le toucher suivant la désactive, comme une case à cocher, un interrupteur ou un onglet. Une copie que tu as posée en montrant déjà {Sélectionné} se désactive vers la première variante du composant.
- Un toucher sur une copie qui a une variante {Focalisé} et pas de lien lui donne le focus. Une seule copie a le focus à la fois : le donner à une autre le retire à la première, comme pour des champs.
- Une copie qui montre {Désactivé} n’a ni apparence au survol ni apparence enfoncée, et n’accepte aucun toucher.
- {Erreur} et {Succès} ne sont pas joués. Ils disent quelle variante montrer quand quelque chose échoue ou réussit, pour la personne qui construit la vraie app.

## Quand rien n’est choisi {#overview}

Clique sur le papier vide, et l’inspecteur montre le prototype dans son ensemble, sur trois cartes.

::: fields
- **La carte de départ** : l’écran où le prototype commence, dans son appareil sur une petite scène éclairée, avec un bouton de lecture par-dessus. Clique dessus pour lire ; son info-bulle dit « Lire depuis » et le nom de l’écran. En dessous, le drapeau et le nom de l’écran, et s’il y a plus d’un écran, le menu {Départ} pour commencer ailleurs. Son info-bulle : « Où le prototype commence. Sur la zone de travail, faites glisser le drapeau sur un autre écran. »
- **Les chemins qui le parcourent** : chaque lien, comme une histoire. Chaque ligne indique le calque, un petit fil (ou un crochet pour un calque qui ramène en arrière) et l’endroit où il mène, avec en dessous l’écran où il se trouve et sa note dans une écriture manuscrite. Un écran qui continue tout seul montre combien de temps il attend. Un clic choisit ce calque et l’amène à l’écran. Jusqu’à 60 lignes. Quand il n’y a encore aucun lien, un petit dessin montre comment en créer un : « Tirez un fil d’un bouton vers un écran ».
- **Code** : les apparences nommées du design sous forme de tokens, le moyen de confier tout le prototype à Claude, et {Inspecter}. Voir ci-dessous.
:::

### Transmettre le prototype {#handing-on}

La carte {Code} compte les tokens du design (« 12 tokens ») : les couleurs, les typographies, les ombres et les angles auxquels tu as donné un nom. Ses trois pastilles les copient tous d’un coup, en {CSS}, en {SwiftUI} ou en {JSON} ; une coche indique quand c’est fait. Quand le design n’a encore aucun nom, les pastilles restent pâles, et leur info-bulle dit : « Donnez un nom à des couleurs, polices, ombres ou coins dans le design, et ils sortent ici comme tokens. » [Inspection et transmission](/docs/inspect.html#tokens) dit ce que contient chaque fichier.

{Le construire avec Claude} copie ce qu’il faut dire à Claude. Quand Bezzle est connecté comme serveur IA, Claude reçoit d’un coup chaque écran, chaque parcours, chaque état et chaque token, construit un prototype qui fonctionne sous la forme d’un seul fichier HTML avec ses images à côté, et peut réécrire dans le design ce qui change dans le code. Voici ce qu’il copie, avec le nom de ton design dedans :

```
Build a working prototype of my Bezzle design "Design name". Use the Bezzle MCP server: run its build_prototype prompt (or call get_prototype) for the screens, flows, component states, design tokens and assets. Make it one self-contained HTML file with its pictures beside it, that opens straight from the Finder: no server, no build step, nothing to install. Keep every element tagged with its Bezzle layer id, and when the prototype changes, write the change back into the design with Bezzle's tools.
```

Colle-le dans Claude Desktop ou dans n’importe quel assistant connecté à Bezzle. Pour en connecter un, voir [Assistants IA](/docs/ai.html).

{Inspecter} fait passer le canevas en [mode Inspecter](/docs/inspect.html), pour construire le design à la main, un calque après l’autre.

## Lire le prototype {#playing}

Chacune de ces actions lit le prototype :

- {Lire} tout à droite de la barre du haut, ou {Fenêtre › Lire le prototype}, ou {{⌘Return}}. La lecture part de l’écran choisi (ou de l’écran où se trouve un calque choisi), et sinon de là où le prototype commence. Cela fonctionne aussi depuis le mode Design.
- {{Return}} en mode Prototype.
- Un clic sur la carte de départ dans l’inspecteur.
- Un double-clic sur un écran ou sur son nom, {Lire depuis ici} dans le menu d’un écran, ou {Lire depuis ici} sur sa carte {Écran} : depuis cet écran.

La lecture demande au moins un plan de travail.

La fenêtre devient une scène éclairée sur le même papier millimétré. L’écran se soulève du canevas et se pose dans son appareil, et l’appareil apparaît autour de lui. Sous l’appareil se trouve le nom de l’écran, et au-dessus, la note du chemin que tu viens de prendre, écrite à la main.

### Cliquer à travers {#clicking-through}

- **Clique sur un calque qui mène quelque part** pour suivre son lien. Le pointeur devient une main qui pointe au-dessus de tout ce qui peut être touché.
- **Clique là où rien ne peut être touché,** et tout ce qui peut l’être sur l’écran s’allume en bleu un instant, pour que tu voies où aller.
- **Fais défiler** avec le trackpad ou la molette de la souris quand un écran est plus haut que l’appareil, comme une longue page. Chaque nouvel écran commence en haut.
- **Clique au-dessus d’une feuille,** sur l’écran assombri derrière elle, pour revenir en arrière, comme tu fermerais une feuille dans une app.
- **Les écrans qui continuent tout seuls** passent au suivant une fois leur temps écoulé, tant que tu restes dessus.

Les commandes en haut à droite de la scène, et leurs touches :

| Commande | Touche | Ce qu’elle fait |
| --- | --- | --- |
| {Retour} | {{←}} ou {{⌫}} | Revient à l’écran précédent, de la façon dont celui-ci est arrivé, jouée à l’envers. S’il n’y a nulle part où revenir, l’appareil secoue la tête. |
| {Depuis le début} | {{R}} | Revient au premier écran, l’état de chaque copie tel qu’au départ. |
| {Arrêter} | {{Esc}} | Termine la lecture. Cliquer sur la scène en dehors de l’appareil le fait aussi. |

Quand tu t’arrêtes, l’écran sur lequel tu es repart en volant vers sa place sur le canevas, ce qui l’amène à l’écran, et il reste choisi.

### L’appareil {#device}

Un écran est lu dans l’appareil pour lequel il est fait, choisi d’après sa taille :

- **Une taille des préréglages de plans de travail de Bezzle** se lit dans l’appareil de ce préréglage : un iPhone avec sa Dynamic Island, un téléphone Android, un iPad, un MacBook, un iMac ou un autre ordinateur de bureau, une fenêtre de navigateur, une Apple Watch, ou le cadre d’une publication, d’une story ou d’une bannière pour les réseaux.
- **La largeur d’un préréglage de téléphone, de tablette, de Mac, de web ou de montre, mais plus haut,** comme une longue page qui défile, se lit dans l’appareil de ce préréglage à la hauteur du préréglage, et défile.
- **Toute autre taille** se lit d’après sa forme : jusqu’à 460 points de large et au moins 1,3 fois plus haut que large, dans un téléphone ; jusqu’à 1 100 points de large et au moins 0,6 fois plus haut que large, dans une tablette ; plus de 1 100 points de large, dans une fenêtre de navigateur ; tout le reste, comme une carte. Un téléphone, une tablette ou un navigateur est aussi haut que le serait un tel écran, et un écran plus haut y défile.

Un écran plus large que son appareil est dessiné plus petit pour tenir dans sa largeur. L’appareil est rendu aussi grand que la fenêtre le permet, jusqu’à une fois et quart sa propre taille.

## Annuler, et les designs que tu ne fais que lire {#undo}

Tout ce que tu fais en mode Prototype est une étape de {Édition › Annuler}, nommée d’après ce qu’elle a fait : {Lier}, {Supprimer le lien}, {Écrire une note}, {Changer le mouvement}, {Continuer tout seul}, {Déplacer le départ} et {Déplacer l’écran}. Ajouter un état est une {Nouvelle variante}. La lecture ne change rien, elle ne laisse donc aucune étape.

Dans un design que quelqu’un a partagé avec toi en lecture seule, tu peux voir le prototype et le lire, mais pas tirer de fils ni changer les cartes. [Partager et travailler ensemble](/docs/sharing.html) en dit plus sur les designs partagés en lecture seule.
