---
title: Composants, styles et bibliothèques
nav: Composants et styles
lede: Conçois un élément une seule fois et utilise-le partout. Les copies d’un composant changent ensemble, les couleurs, textes, ombres et angles nommés restent les mêmes partout où ils servent, et chaque design peut prêter ses composants et ses styles à un autre.
---

Un design reste cohérent quand ses éléments ne sont faits qu’une fois. Bezzle a deux façons d’y arriver. Un **composant** est un élément entier, comme un bouton, une carte ou une barre de navigation, utilisé à de nombreux endroits : change n’importe quelle copie et toutes les copies suivent. Un **style** est une seule apparence à laquelle on a donné un nom, comme un bleu de marque, une typographie de titre ou une ombre douce : change-le n’importe où et il change partout. Ni l’un ni l’autre ne demande de préparation, et chaque design de ton écran d’accueil peut partager ses composants et ses styles avec les autres.

## Composants {#components}

Chaque endroit où un composant est utilisé est une copie, et aucune copie n’est l’original. Tout ce que tu changes dans une copie, son apparence, les calques qu’elle contient, leur place en elle, change dans toutes les autres copies pendant que tu travailles. Ce qu’une copie contient lui appartient : ses textes et ses images. La place d’une copie, sa taille, son angle de rotation et le fait qu’elle soit retournée lui appartiennent aussi.

Tu peux donc construire un écran avec dix copies d’un même bouton, donner à chacune son propre libellé, puis les arrondir toutes les dix en changeant l’une d’elles.

::: figure components
Change une copie, et toutes les copies suivent.
:::

Sur le canevas, une copie est entourée de violet plutôt que de bleu crayon, et dans la liste des calques elle porte une marque violette de quatre petits losanges. Quand une copie est sélectionnée, le nom de son composant se tient au-dessus de son coin supérieur gauche (avec la variante qu’elle montre, dès qu’il y en a plusieurs), et toutes les autres copies sont entourées d’un léger trait pointillé : tu vois ce qui va changer avant de changer quoi que ce soit.

### Créer un composant {#make-component}

::: steps
1. **Sélectionne ce dont le composant est fait.** Un groupe, ou plusieurs calques sur un même plan de travail (ou sur le canevas).
2. **Choisis {Objet › Créer un composant}** ({{⌥⌘K}}), ou fais un clic droit et choisis {Créer un composant}.
3. **Nomme-le.** La sélection est maintenant la première copie. Ouvre sa carte Composant pour donner au composant un nom bien à lui.
:::

Un groupe seul devient un composant tel qu’il est, où qu’il se trouve, même s’il est une cellule d’une grille de répétition. Tout le reste est d’abord mis dans un groupe. Le composant prend le nom du groupe ou du calque sélectionné, ou, pour plusieurs calques, `Composant 1`, `Composant 2` et ainsi de suite.

Tu ne peux pas faire un composant d’un plan de travail, d’un calque verrouillé, d’une copie elle-même, ni de calques situés dans une copie. Des copies d’autres composants peuvent entrer dans un nouveau composant, comme des boutons entrent dans une carte.

Juste après, Bezzle cherche dans le design des groupes qui se ressemblent : les mêmes calques, identiques en tout sauf leur place, leur taille, leurs textes et leurs images. S’il en trouve, un message sous la copie indique par exemple `3 autres sont identiques`, avec {Les lier}. Clique dessus, et ces groupes deviennent eux aussi des copies, chacun gardant ses propres textes et images. La proposition reste environ huit secondes.

### Placer d’autres copies {#placing-copies}

- **Duplique** une copie ({{⌘D}}), ou copie-la et colle-la : le résultat est une nouvelle copie.
- **Depuis le panneau Ressources** : les composants du design lui-même viennent en premier sur son étagère, chacun dessiné tel que serait une nouvelle copie, avec le nombre de copies que le design en compte. Clique sur l’un d’eux pour poser une copie au milieu du plan de travail visible, ou fais-le glisser sur le canevas. Voir [le panneau Ressources](#resources-panel).
- **Dans une grille de répétition ou une pile** : une copie répétée dans les cellules d’une grille, ou dans les publications d’une pile, est une copie du composant dans chaque cellule et chaque publication.

### Changer un composant {#changing}

Pour changer un composant, change n’importe laquelle de ses copies, comme tu changerais n’importe quel groupe : sélectionne un calque à l’intérieur et donne-lui un nouveau remplissage, déplace-le, redimensionne-le, ajoute un calque ou supprimes-en un. Quand le changement atteint les autres copies, une lumière part de la copie que tu as changée et parcourt le canevas, et chaque copie s’allume quand la lumière l’atteint, la plus proche en premier. Ce qui a suivi se montre, et rien d’autre.

Ce qu’une copie garde en propre, quoi que tu fasses aux autres :

- **Ses textes et ses images.** Tape un nouveau libellé dans un bouton et seul ce bouton l’affiche.
- **Sa place, sa taille, sa rotation et son retournement, en bloc.** Déplace ou redimensionne une copie et les autres restent où elles sont.
- **Tout ce que tu lui as dit de garder.** Voir [Ce qu’une copie garde en propre](#copy-own).

### Ce qui est proposé après un changement {#offers}

Après un changement dans une copie, un message apparaît à côté d’elle (ou en dessous, faute de place) avec un ou deux boutons, pour restreindre ce que le changement a atteint ou pour l’étendre. Il disparaît au bout d’environ huit secondes, ou dès que tu travailles sur autre chose.

| Tu as changé | Bezzle dit | Boutons |
| --- | --- | --- |
| L’apparence de quelque chose, dans une copie de la première variante | `Les 5 copies` | {Seulement celle-ci}, {Nouvelle variante} |
| L’apparence de quelque chose, dans une copie d’une autre variante | `Seulement` et le nom de la variante, par exemple `Seulement Variante 2` | {Seulement celle-ci}, {Dans toutes les variantes} |
| Les textes ou l’image d’un calque qui avait encore ceux du composant | `Seulement dans cette copie` | {Dans les 5} |
| Un nouveau composant, avec des groupes qui se ressemblent | `3 autres sont identiques` | {Les lier} |

- {Seulement celle-ci} garde le changement dans cette seule copie et remet toutes les autres comme elles étaient.
- {Nouvelle variante} fait de la copie, telle qu’elle est maintenant, une nouvelle variante du composant, et remet les autres copies comme avant.
- {Dans toutes les variantes} donne le changement à chaque variante, pas seulement à celle que montre cette copie.
- {Dans les 5} donne les nouveaux textes ou la nouvelle image à chaque copie, et au composant lui-même.

### Ce qu’une copie garde en propre {#copy-own}

Choisis {Seulement celle-ci} et les calques que tu as changés gardent ce que tu as changé, désormais, quoi que fassent les autres copies. Quand tu sélectionnes un tel calque, la carte {Seulement dans cette copie} liste ce qu’il garde (par exemple `remplissage, angles`) et propose {Suivre les autres}, qui lui fait de nouveau suivre le composant. La même chose se trouve dans le menu du clic droit sous le nom {Suivre les autres copies}.

Pour défaire d’un coup tout ce qu’une copie garde en propre, choisis {Objet › Comme les autres}, ou le bouton du même nom dans la carte Composant, ou dans le menu du clic droit. Ses textes et ses images restent ; tout le reste suit de nouveau le composant. La commande n’est disponible que lorsque la copie garde autre chose que ses textes et ses images.

Dans l’autre sens, fais un clic droit sur un texte ou une image à l’intérieur d’une copie et choisis {Identique dans chaque copie} pour donner ses mots ou son image à chaque copie du composant, et au composant lui-même.

### Comment les calques d’une copie s’ajustent à une nouvelle taille {#copy-resizing}

Quand tu rends une copie plus grande ou plus petite que son composant, Bezzle dispose ses calques d’après la place de chacun dans le composant, si bien qu’il n’y a rien à régler :

- Un calque qui couvre au moins la moitié de la copie, dans un sens où il peut s’étirer, s’étire avec elle.
- Un calque au milieu reste au milieu.
- Un calque situé à moins d’un quart du chemin depuis un bord reste à la même distance de ce bord.
- Tout autre calque garde sa part du chemin, comme les onglets d’une barre.

Un texte ne s’étire en largeur que lorsqu’il est réglé sur une largeur ([Hauteur automatique](/docs/text.html#auto-height) ou [Taille fixe](/docs/text.html#fixed-size)), et en hauteur seulement lorsqu’il est en Taille fixe ; les calques pivotés et les grilles de répétition sont déplacés, jamais étirés. Une copie d’un autre composant à l’intérieur de la copie est disposée par son propre composant.

Une copie grandit aussi autour de ses mots. Quand une forme un peu plus grande qu’un libellé l’entoure, comme un bouton entoure son texte, et que tu tapes un libellé plus long, la copie grandit d’autant : depuis la gauche pour des mots alignés à gauche, depuis la droite pour des mots alignés à droite, et autour du milieu pour des mots centrés ou placés au milieu de leur forme. Un champ ou une barre bien plus large que ce qui y est écrit reste tel quel.

### Variantes {#variants}

Un composant peut avoir des variantes : le même élément dans un autre état ou un autre style, comme un bouton principal, secondaire ou désactivé. Chaque variante a les mêmes calques, et chacune a l’apparence qu’elle veut. Une copie montre une variante, et tu peux la faire passer à une autre à tout moment ; ses textes et ses images suivent.

Il y a deux façons de créer une variante :

- **Avant de changer quoi que ce soit.** Sélectionne une copie et choisis {Objet › Nouvelle variante}, clique sur la tuile en pointillés {Nouvelle variante} dans la carte Composant, ou choisis {Nouvelle variante} dans le menu du clic droit. La copie montre maintenant une nouvelle variante, identique à ce qu’elle était. Modifie-la pour lui donner l’apparence de la variante : ce que tu y changes reste dans la nouvelle variante.
- **Après un changement.** Change une copie, et quand le message en dessous indique que le changement a atteint toutes les copies, clique là sur {Nouvelle variante}. La copie telle qu’elle est maintenant devient la nouvelle variante, et les autres copies reviennent comme elles étaient.

Faire passer une copie à une autre variante :

- **Dans la carte Composant** : les variantes sont des tuiles, trois par rangée, chacune dessinée comme cette copie le serait dans cette variante. Pointe une tuile pour voir la copie se transformer sur le canevas ; clique pour l’appliquer.
- **Sur le canevas** : dès qu’un composant a deux variantes ou plus, une rangée de variantes se tient à côté de la copie sélectionnée (ou en dessous, faute de place), terminée par un bouton rond qui crée une nouvelle variante. Pointe et clique comme dans la carte.
- **Dans le menu du clic droit** : chaque variante par son nom, celle qui est montrée cochée.

Quand une copie passe à une variante plus grande ou plus petite, elle grandit ou rétrécit d’autant à ses bords, en gardant ses propres mots.

Un changement fait dans une copie d’une variante reste dans cette variante, et les copies qui montrent d’autres variantes restent comme elles sont ; la proposition {Dans toutes les variantes} le donne à toutes. Un changement fait dans une copie de la première variante atteint chaque variante, sauf ce qu’une variante garde en propre.

La première variante s’appelle `Par défaut` et les autres `Variante 2`, `Variante 3` et ainsi de suite, jusqu’à ce que tu les nommes. Double-clique sur une tuile pour la renommer, ou fais un clic droit dessus pour {Renommer} et {Supprimer la variante}. La première variante ne peut pas être supprimée. Quand une variante est supprimée, ses copies montrent la première variante.

### La carte Composant {#component-card}

Sélectionne une copie, ou n’importe quel calque à l’intérieur, et la carte Composant apparaît.

::: fields
- **La ligne repliée** : la variante que montre la copie quand il y en a plusieurs, sinon le nom du composant. Avec plus d’une copie, des flèches ({La copie précédente}, {La copie suivante}) et `2 sur 7` parcourent toutes les copies dans l’ordre de lecture : plan de travail par plan de travail, puis depuis le haut, puis depuis la gauche. Chacune est sélectionnée et amenée à l’écran, et une pile passe à la publication qui la contient.
- **Nom** : le nom du composant. Le renommer renomme chaque copie qui porte encore son nom.
- {De « Design System »} : affiché quand le composant a été pris dans un autre design, avec le nom de ce design.
- **Variantes** : les tuiles décrites dans [Variantes](#variants), celle que montre la copie cerclée de violet, et la tuile en pointillés {Nouvelle variante}.
- {Comme les autres} : affiché quand la copie garde quelque chose en propre en plus de ses textes et de ses images.
- Le **×** ({Délier du composant}) : affiché quand c’est la copie elle-même qui est sélectionnée, et non un calque qu’elle contient. Il délie la copie.
:::

Pointer la carte entoure toutes les copies sur le canevas.

### Des composants dans des composants {#nested}

Une copie peut contenir des copies d’autres composants, comme une carte contient des boutons. Change un bouton dans une carte et tu changes le composant bouton : tous les boutons suivent, dans chaque carte et seuls. La place du bouton dans la carte, sa taille et la variante qu’il montre appartiennent à la carte.

Un composant ne peut jamais contenir une copie de lui-même, à quelque profondeur que ce soit : Bezzle délie tout ce qui en créerait une.

### Délier et supprimer {#unlink}

{Objet › Délier la copie}, ou {Délier la copie} dans le menu du clic droit, ou le × de la carte Composant, fait des copies sélectionnées des groupes comme les autres. Elles gardent leur apparence et ne changent plus avec le composant. Les copies d’autres composants qu’elles contiennent restent des copies des leurs.

Pour supprimer un composant lui-même, fais un clic droit dessus sur l’étagère du panneau Ressources et choisis {Supprimer le composant}. Il quitte le design, et chacune de ses copies reste, comme un groupe ordinaire.

## Styles {#styles}

Un style est une apparence à laquelle le design a donné un nom. Il y en a quatre sortes :

| Sorte | Ce qu’il contient | Où il va |
| --- | --- | --- |
| Couleur | Une couleur, ou les couleurs d’un dégradé | N’importe quel remplissage, la couleur d’une bordure, la couleur des lettres, l’arrière-plan d’un plan de travail |
| Typographie | Police, style, taille, interligne et approche, espacement des paragraphes, casse, soulignement, barré, fonctions OpenType et axes | Un calque de texte |
| Ombre | Couleur, X, Y, flou, étendue, et si elle tombe à l’intérieur | N’importe quelle ombre |
| Angles | Un même rayon pour les quatre angles, et la douceur avec laquelle ils rejoignent les côtés | Un rectangle |

Un style ne contient que l’apparence. Chaque calque garde ce qui lui appartient : si un remplissage ou une ombre est activé, où un dégradé le traverse, où ses mots se placent dans leur cadre et comment ce cadre trouve sa taille. Un style de couleur ne peut pas aller sur un remplissage qui montre une image.

Partout où un style est utilisé, il est le même, et le changer n’importe où, sur n’importe quel calque qui l’a ou dans la liste des styles du design, c’est le changer partout.

### Nommer une apparence {#name-look}

::: steps
1. **Sélectionne un calque** et ouvre la carte de l’apparence que tu veux nommer : un remplissage, une bordure, une ombre, la carte Texte, la carte Angles, ou l’Arrière-plan d’un plan de travail.
2. **Clique sur la pastille en pointillés {+ Style}** en haut de la carte. Elle devient un champ, avec un nom déjà dedans.
3. **Tape un nom, ou garde celui qui est proposé, et appuie sur {{Return}}.** {{Esc}} laisse l’apparence sans nom. Cliquer ailleurs garde un nom que tu as tapé, et abandonne celui qui était proposé si tu l’as laissé tel quel.
:::

Le nom proposé dit ce qu’est l’apparence : le nom courant d’une couleur (`Bleu`, `Gris clair`, `Ivoire`, `Vert foncé`), `Dégradé`, l’usage le plus fréquent d’une taille de texte (`Affichage` à partir de 48 points, puis `Titre`, `Intertitre`, `Sous-titre`, `Corps de texte`, `Petit`, et `Légende` en dessous de 12), le nom d’un préréglage d’ombre ou d’angles auquel elle correspond (`Douce`, `Surélevée`), ou sinon `Ombre` ou `Coins 10`. Si un autre style de la même sorte porte déjà ce nom, un numéro suit (`Bleu 2`). Les noms comptent au plus 60 caractères.

Les calques sélectionnés prennent le nom. Si d’autres calques du design ont la même apparence, un message propose de les nommer aussi, par exemple `4 autres calques sont identiques`, avec {Les nommer aussi}.

Une fois l’apparence nommée, la ligne repliée de la carte montre le nom en bleu crayon après un petit losange, à la place des valeurs, et l’aperçu de la carte est cerclé.

### Utiliser un style {#use-style}

Une carte ouverte propose d’abord les styles de sa sorte que le design possède, sous forme de pastilles. Pointe une pastille pour la voir sur la sélection, et pour entourer chaque calque qui l’utilise déjà ; clique dessus pour la donner à la sélection. Quand un design a plus de six styles de la même sorte, la carte montre les cinq premiers et une pastille avec le nombre de ceux qui restent ; clique dessus pour les voir tous, et sur {Moins} pour les replier.

Donner un style de typographie à un texte le donne au texte entier : les lettres que tu avais mises à part dans une autre police ou une autre taille suivent de nouveau le style.

La pastille du style qu’a la sélection est remplie de bleu crayon. Double-clique dessus pour renommer le style. Son petit × ({Garder l’apparence, sans son nom}) garde l’apparence sur la sélection mais lui retire le nom.

### Changer un style {#change-style}

Il y a deux façons de changer un style, et toutes deux changent chaque calque qui l’utilise.

- **Par n’importe quel calque qui l’a.** Change le remplissage, la typographie, l’ombre ou les angles d’un calque qui porte le nom d’un style, et le style change, avec chaque autre calque qui l’a. Le changement se propage sur eux comme une lumière, depuis l’endroit où tu l’as fait. Un message indique alors par exemple `Aussi sur 12 autres calques`, avec {Ici seulement} : clique dessus pour garder le changement sur les seuls calques sélectionnés, qui perdent alors le nom, et pour remettre le style comme il était.
- **Dans le kit de styles**, sans rien de sélectionné (voir ci-dessous).

Un rectangle dont tu rends les angles différents les uns des autres a des angles bien à lui : il quitte son style d’angles.

### Le kit de styles {#style-kit}

Clique sur une partie vide du canevas pour que rien ne soit sélectionné, et l’inspecteur montre les styles du design, une carte pour chaque sorte présente, au-dessus de la liste des outils (avec l’outil Plan de travail en main, il montre à la place des tailles de plan de travail) :

- **Couleurs** sous forme de nuanciers, trois par rangée, avec le nom et le code hexadécimal (ou `Dégradé`) sur la bande du bas.
- **Typographie** composée en elle-même, avec sa taille.
- **Ombres** et **angles** sous forme de petites tuiles, quatre par rangée.

Pointe un style pour le soulever, entourer chaque calque qui l’utilise et voir combien il y en a. Clique dessus pour l’ouvrir et le changer :

::: fields
- **Nom** : renomme-le. {{Return}} garde le nouveau nom.
- Le **×** ({Supprimer le style}) : retire le style.
- **Clair et sombre** : un soleil et une lune pour choisir l’apparence que tu changes, pour les couleurs et les ombres, tant que le design a quelque chose de sombre. {Automatique} fait de nouveau suivre l’apparence claire à l’apparence sombre. Voir [Clair et sombre](/docs/dark.html).
- **Une couleur** : le sélecteur de couleur. Un style de dégradé est montré, mais se change par un calque qui l’a.
- **Une typographie** : le menu des polices (tape pour trouver une police), le style, la taille (de 1 à 2 000 pt), l’espacement **Ligne** (de 0 à 4 000) et l’espacement **Lettre** (de −500 à 2 000).
- **Une ombre** : sa couleur, **X** et **Y** (de −1 000 à 1 000), **F** pour le flou (de 0 à 1 000) et **Étendue** (de −1 000 à 1 000).
- **Angles** : {Rond} ou {Superellipse}, et **R**, le rayon (de 0 à 10 000).
:::

Chaque changement va à chaque calque qui a le style, au moment où tu le fais.

### Des apparences trouvées sans nom {#found-looks}

Après les styles de chaque carte du kit attendent, en pointillés, les apparences que deux calques ou plus partagent sans nom, les plus utilisées en premier : jusqu’à huit couleurs et jusqu’à quatre de chacune des autres sortes. Chacune indique combien de calques l’ont (`×6`). Pointe-en une pour entourer ces calques ; clique dessus pour la nommer, et chacun de ces calques prend le nom d’un coup. Le nouveau style s’ouvre avec son nom prêt à être tapé.

Un design n’a jamais besoin d’être préparé pour tout cela : nomme ce que tu vois se répéter, quand tu le vois.

### Retirer un style ou son nom {#remove-style}

- **Le × sur la pastille d’un style**, dans une carte : les calques sélectionnés gardent leur apparence, sans le nom.
- **{Supprimer le style}** dans le kit de styles : le style s’en va, et chaque calque qui l’utilisait garde son apparence, sans aucun nom.

### Les styles en code {#tokens}

Quand rien n’est sélectionné en mode Prototype ou en [mode Inspecter](/docs/inspect.html#tokens), la carte **Code** compte les styles du design comme des tokens et les copie d’un clic en {CSS} (des propriétés personnalisées comme `--color-brand-blue`, avec une classe pour chaque typographie), en {SwiftUI} (des constantes) ou en {JSON} (le format de design tokens du W3C). L’apparence sombre de chaque style suit partout où le design en a une.

## Bibliothèques {#libraries}

Chaque design est une bibliothèque pour tous les autres, sans rien à préparer ni à publier. Ses composants et ses styles peuvent être pris dans n’importe quel autre design depuis le panneau Ressources, et ils suivent quand tu colles ses calques dans un autre design.

Une fois pris, un composant ou un style appartient à l’autre design, qui l’utilise et le change comme n’importe lequel des siens. Il se souvient seulement d’où il vient et de ce qu’il y était alors. Rien ne change jamais un autre design tout seul.

### Prendre dans un autre design {#taking}

::: steps
1. **Ouvre le panneau Ressources** ({Afficher les ressources} dans la barre des menus, {{⇧⌘Y}}).
2. **Clique sur l’autre design** sur l’étagère. Les designs de ton écran d’accueil qui ont leurs propres composants ou styles y sont listés, chacun avec quelques-uns de ses composants et ses couleurs sur sa couverture, et le nombre de choses qu’il contient.
3. **Prends ce dont tu as besoin.** Ses styles viennent en premier, deux par deux, puis ses composants.
:::

- **Un composant** : clique dessus pour poser une copie au milieu du plan de travail visible, ou fais-le glisser sur le canevas. Il emporte les composants dont il contient des copies et les styles qu’il utilise, et ses images sont copiées dans ton design. Une fois pris, il porte le losange des composants, et le prendre de nouveau crée une autre copie du composant qui est désormais celui de ton design.
- **Un style** : pointe-le pour le voir sur la sélection ; clique pour le donner à la sélection, ce qui le fait entrer dans ton design. Il va là où est la carte ouverte, si elle est de sa sorte, sinon sur le premier remplissage (les lettres d’un texte), la typographie, la première ombre ou les angles, et ce remplissage ou cette ombre est activé. Quand rien n’est sélectionné, un clic fait seulement entrer le style, pour que tu l’utilises parmi tes propres styles. Les styles déjà pris portent un point.

Sur la page d’un design, le champ de recherche en haut du panneau trouve ses composants et ses styles par leur nom.

Quand tu colles des calques copiés depuis un autre design, les composants et les styles qu’ils utilisent viennent avec eux. Un style que ton design a déjà reste comme il est, et les calques collés prennent son apparence ; un style de la même sorte et du même nom remplace celui que ton design n’a pas ; tout le reste suit.

### Quand l’autre design change {#library-updates}

Quand quelque chose que tu as pris a changé dans le design d’où il vient, Bezzle te le dit en haut du canevas quand tu ouvres ton design, ou quand l’autre design est enregistré : par exemple `Nouveau dans « Design System » : Button, Primary +2`, avec {Mettre à jour}.

- Pointe {Mettre à jour} pour voir ton design mis à jour, avec chaque copie et chaque calque qui changerait entourés.
- Clique sur {Mettre à jour} pour prendre le changement. Chaque copie des composants suit, et chaque calque qui porte le nom des styles, tandis que chaque copie garde ce qui lui appartient. Une seule étape d’annulation.
- Clique sur le × ({Plus tard}) pour laisser les choses comme elles sont. La proposition ne revient que lorsqu’il y a du plus récent.

La même proposition se trouve en haut de la page de ce design dans le panneau Ressources, pour le jour où tu l’auras mise de côté, et sa carte sur l’étagère est marquée. Les changements que tu as faits dans ton seul design ne sont jamais des nouveautés.

## Le panneau Ressources {#resources-panel}

Le panneau Ressources prend la place de la liste des calques. Ouvre-le avec le bouton Ressources de la barre d’outils, ou {Afficher les ressources} dans la barre des menus ({{⇧⌘Y}}) ; la même commande ({Masquer les ressources}) le range et ramène la liste des calques si elle était sortie. Son étagère contient, de haut en bas :

1. **Les composants du design lui-même**, avec le nombre de copies de chacun. Fais un clic droit sur l’un d’eux pour {Supprimer le composant}.
2. **Les autres designs** qui ont leurs propres composants ou styles.
3. **Les kits** : {Kit d’interface Bezzle}, {iOS}, {macOS} et {Android}, chacun en sections comme Barres, Boutons, Commandes et Champs de texte.
4. **Les jeux d’icônes** : Lucide, Phosphor et Material Symbols.

Clique sur n’importe lequel pour ouvrir sa page ; clique sur {Ressources} en haut pour revenir. Tape dans {Rechercher} sur l’étagère pour trouver, dans toutes les bibliothèques, les composants des autres designs par leur nom, les éléments des kits et les meilleures icônes de chaque jeu (avec un nombre qui les ouvre toutes) ; sur une page, la recherche s’en tient à cette page. {{Esc}} efface la recherche.

### Éléments des kits {#kit-parts}

Chaque élément est dessiné tel qu’il arrivera, clair ou sombre selon le plan de travail sur lequel il irait. Clique sur un élément pour l’ajouter au plan de travail visible, ou fais-le glisser : le vrai élément suit le pointeur à sa taille, le plan de travail où il ira est entouré, et une étiquette dit ce que fera le relâchement.

- **Les barres** (barres d’état, barres de navigation, barres d’onglets, barres d’outils) se placent le long du bord supérieur ou inférieur du plan de travail, aussi larges que lui, sous ou sur ce qui longe déjà ce bord : une barre d’état d’abord, puis une barre de navigation en dessous. L’étiquette indique `En haut de iPhone 18 Pro`.
- **Les listes, les champs et les curseurs** s’étirent sur la largeur du plan de travail, avec une marge de chaque côté, quelle que soit la hauteur où tu relâches : `Sur toute la largeur de iPhone 18 Pro`.
- **Tout le reste** arrive là où tu relâches, tel qu’il a été fait.

Les éléments ne s’étirent que sur un plan de travail à peu près aussi large que celui pour lequel ils ont été faits ; sur un plan de travail beaucoup plus large, ils arrivent tels quels. Un élément arrive sombre quand la couleur du plan de travail lui-même est sombre.

Un élément de kit est un composant. La première fois que tu en ajoutes un à un design, il devient un composant du design, et chaque fois ensuite, c’en est une nouvelle copie, telle que ton design l’a à ce moment-là. Change donc une barre d’onglets et toutes les barres d’onglets suivent. Les apparences claire et sombre d’un élément sont deux composants.

### Icônes {#icons}

La page d’un jeu d’icônes montre une bande de styles en haut et toutes les icônes en dessous, six par rangée. Lucide est dessiné au trait, à l’épaisseur de ton choix ({Fin}, {Léger}, {Normal}, {Gras}, {Extra-gras}) ; Phosphor existe en {Fin}, {Léger}, {Normal}, {Gras} et {Plein} ; Material Symbols en {Contour} et {Plein}. Le style que tu choisis est mémorisé pour chaque jeu.

Clique sur une icône pour l’ajouter, en carré de 24 points, au plan de travail visible, ou fais-la glisser sur le canevas. Elle arrive presque noire, ou presque blanche sur un plan de travail sombre. Relâche-la au-dessus d’une icône déjà présente et la nouvelle prend sa place, en gardant la couleur et la taille de cette icône ; l’étiquette indique `Remplacer` et le nom de l’ancienne icône. Une icône arrive comme un tracé que tu peux modifier comme n’importe quel autre ; voir [Modifier les points](/docs/shapes.html#editing-points).

## Commandes et touches {#commands}

| Commande | Où | Touches |
| --- | --- | --- |
| Créer un composant | {Objet › Créer un composant} | {{⌥⌘K}} |
| Nouvelle variante à partir de la copie sélectionnée | {Objet › Nouvelle variante} | |
| Faire de nouveau suivre son composant à une copie | {Objet › Comme les autres} | |
| Faire d’une copie un simple groupe | {Objet › Délier la copie} | |
| Une autre copie | {Édition › Dupliquer} | {{⌘D}} |
| Afficher ou masquer le panneau Ressources | {Afficher les ressources} dans la barre des menus | {{⇧⌘Y}} |

Ensuite : vois comment les styles prennent une apparence sombre bien à eux dans [Clair et sombre](/docs/dark.html), ou donne des états à une copie pour un prototype dans [Les états d’une copie](/docs/prototype.html#states).
