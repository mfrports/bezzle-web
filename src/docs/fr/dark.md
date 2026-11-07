---
title: Clair et sombre
nav: Clair et sombre
lede: Affiche n’importe quel plan de travail en sombre en un clic. Bezzle nomme ses couleurs et dessine une apparence sombre pour chacune, que tu peux ajuster à la main, pendant que chaque plan de travail clair reste tel qu’il est.
---

Une apparence sombre dans Bezzle n’est pas un second design à tenir à jour en parallèle. C’est le même plan de travail, affiché en sombre : chaque couleur qu’il porte a un nom, et chaque nom a une apparence claire et une apparence sombre. Change l’apparence claire d’une couleur et son apparence sombre suit d’elle-même, jusqu’à ce que tu règles l’apparence sombre à la main. Un design peut donc être clair et sombre à la fois, et reste un seul design.

::: figure dark
Un clic dessine l’apparence sombre d’un plan de travail, couleur par couleur.
:::

## Rendre un plan de travail sombre {#make-dark}

::: steps
1. **Sélectionne un seul plan de travail.**
2. **Pointe la carte {Sombre} en pointillés** en bas de l’inspecteur ({Afficher ce plan de travail en sombre}). Le canevas montre tout le plan de travail en sombre avant que quoi que ce soit change.
3. **Clique dessus.** L’apparence sombre se répand sur le plan de travail depuis son coin supérieur droit, et le trackpad donne une petite tape. La carte Sombre s’ouvre.
:::

Juste après, un mot à côté du plan de travail propose {Une version claire à côté}, avec {Ajouter}, pour qu’une copie claire vienne se placer à côté de la sombre (voir [Clair et sombre côte à côte](#side-by-side)). Il disparaît au bout d’environ huit secondes.

Rendre un plan de travail sombre forme une seule étape d’annulation. Un plan de travail verrouillé ne peut pas être rendu sombre.

## Comment l’apparence sombre est faite {#how-it-works}

### Chaque couleur reçoit un nom {#naming}

Quand tu rends un plan de travail sombre, chaque couleur qu’il porte et qui n’a pas encore de nom en reçoit d’abord un : l’arrière-plan du plan de travail lui-même, chaque remplissage activé, la couleur de chaque bordure activée, et la couleur des lettres de chaque texte. Chacune devient un [style](/docs/components.html#styles) nommé comme Bezzle nomme toute couleur (`Blanc`, `Gris clair`, `Bleu`, `Vert foncé`), avec un numéro quand le nom est pris (`Bleu 2`). Un dégradé devient un style appelé `Dégradé`.

La même couleur, utilisée de la même façon, sur chaque plan de travail clair du design prend aussitôt le même nom. C’est ce qui garde clair et sombre ensemble : change `Bleu` sur un plan de travail clair et il change aussi sur le plan de travail sombre, dans son apparence sombre.

### Comment chaque couleur passe au sombre {#darkening}

Chaque couleur nommée est rendue sombre à part, d’après la clarté qu’elle a pour l’œil plutôt que d’après ses chiffres :

- **Les fonds pâles deviennent profonds**, et gardent leur ordre de superposition : une carte reste plus claire que la page sur laquelle elle est posée. Les fonds pâles très colorés ne gardent qu’une trace de leur teinte, pour ne pas luire dans le noir.
- **Les encres foncées deviennent pâles** : plus une encre est foncée, plus elle devient pâle.
- **Les couleurs intermédiaires s’éclaircissent un peu**, pour se lire sur le sombre, et gardent presque toute leur couleur.
- **Les dégradés** passent au sombre couleur par couleur.
- **Les ombres s’intensifient** : une ombre nommée devient noire et plus forte dans le sombre.
- **Le texte et les angles** restent tels qu’ils sont.

### Des mots qui gardent leur couleur {#words-keep}

Bezzle regarde sur quoi chaque texte est posé, tel que ce sera dans le sombre. Là où la couleur du texte se lit mieux gardée telle quelle que rendue sombre, il la garde : des mots blancs sur un bouton bleu restent blancs, tandis que des mots noirs sur une page blanche deviennent pâles. Une couleur qui se garde est un style distinct de la même couleur qui passe au sombre, pour que le blanc d’un bouton et le blanc qui sert de fond à une page puissent suivre chacun leur chemin.

### Ce qui reste tel quel {#unchanged}

- **Les images** ne sont jamais modifiées.
- **Les ombres sans nom** restent telles qu’elles sont. Nomme une ombre (voir [nommer une apparence](/docs/components.html#name-look)) pour lui donner une apparence sombre.
- **Les plans de travail clairs** gardent exactement leur apparence claire. Leurs couleurs peuvent prendre les nouveaux noms, mais rien de leur apparence ne change.

## La carte Sombre {#dark-card}

Un plan de travail qui a été rendu sombre garde une carte Sombre. Elle s’appelle {Sombre} tant que le plan de travail s’affiche en sombre, et {Clair} tant qu’il s’affiche en clair.

::: fields
- **Soleil et lune** (sur la ligne de la carte repliée) : font passer le plan de travail du clair au sombre et inversement en un clic. Le changement se répand sur lui à chaque fois. Affiché en clair, le plan de travail garde la carte, son apparence sombre reste donc toujours à un clic.
- **Résumé** : combien des styles du plan de travail tu as ajustés à la main dans le sombre, par exemple `2 sur 9 ajustés`. Rien ne s’affiche tant que tu n’en as ajusté aucun.
- {Version claire à côté} : ajoute à côté une copie claire du plan de travail.
- Le **×** ({Sans apparence sombre}) : rend le plan de travail clair pour de bon, sans plus de bascule vers le sombre ; s’il s’affichait en sombre, il passe au clair. Ses styles restent tels qu’ils sont, apparences sombres comprises, pour les autres plans de travail qui les utilisent.
:::

## Ajuster l’apparence sombre {#fine-tune}

L’apparence sombre d’une couleur se fait d’elle-même jusqu’à ce que tu la fasses à la main. Il y a deux façons.

- **Sur le plan de travail sombre.** Sélectionne n’importe quel calque qu’il porte et change son remplissage, la couleur de sa bordure ou de ses lettres, ou une ombre nommée. Comme l’apparence a un nom, tu changes l’apparence sombre du style : chaque calque qui a ce style sur chaque plan de travail sombre suit, et les plans de travail clairs restent tels qu’ils sont. À partir de là, cette apparence sombre est la tienne.
- **Dans le kit de styles.** Clique sur une partie vide du canevas pour voir les styles du design. Clique sur une couleur ou une ombre, et choisis le soleil ou la lune au-dessus de ses réglages pour changer son apparence claire ou son apparence sombre. Pendant que tu modifies une apparence sombre faite à la main, {Automatique} la rend de nouveau sombre d’elle-même, d’après son apparence claire. Voir [le kit de styles](/docs/components.html#style-kit).

Tant que le design a quoi que ce soit de sombre, chaque couleur du kit de styles montre ses deux apparences sur sa pastille : la claire, et la sombre à côté, avec une petite lune.

Change l’apparence claire d’un style sur un plan de travail clair, et une apparence sombre que tu n’as pas réglée à la main la suit, rendue sombre de nouveau d’elle-même. Une apparence sombre réglée à la main reste telle que tu l’as faite.

## Clair et sombre côte à côte {#side-by-side}

Pour montrer un design en clair et en sombre l’un à côté de l’autre, clique sur {Version claire à côté} dans la carte Sombre, ou sur {Ajouter} dans la proposition qui suit juste le passage d’un plan de travail au sombre. Bezzle ajoute une copie claire nommée d’après le plan de travail (`Accueil clair`), sans bascule vers le sombre, 80 points à droite du dernier plan de travail de sa rangée.

Les deux sont le même design, liés par leurs styles : change une couleur nommée sur l’un ou l’autre et les deux suivent, chacun dans sa propre apparence. Ce qui n’a pas de nom, comme les mots que tu tapes et les calques que tu ajoutes, appartient à chaque plan de travail seul.

## Les styles dans les deux apparences {#styles-both}

- **Nommer une apparence sur un plan de travail sombre** crée un style dont l’apparence claire et l’apparence sombre sont identiques : nommer ne change jamais ce que tu vois. Son apparence sombre est alors la sienne propre, elle reste donc telle qu’elle est quand tu changes l’apparence claire, jusqu’à ce que tu cliques sur {Automatique} dans le kit de styles.
- **Utiliser un style** donne à chaque calque l’apparence du plan de travail où il se trouve : l’apparence sombre sur un plan de travail sombre, l’apparence claire ailleurs.
- **Déplacer un calque** d’un plan de travail clair vers un sombre, ou inversement, montre son autre apparence.
- **Les copies de composants** sur un plan de travail sombre montrent les apparences sombres de leurs styles, tandis que le composant lui-même est gardé en clair.
- **Les styles pris dans un autre design** apportent leurs apparences sombres avec eux. Voir [les bibliothèques](/docs/components.html#libraries).

## Éléments, exports et code {#parts-export-code}

- **Les éléments des kits et les icônes** arrivent en sombre sur un plan de travail dont la couleur est sombre, et le panneau Ressources les dessine en sombre pendant que tu regardes un tel plan de travail. Voir [le panneau Ressources](/docs/components.html#resources-panel).
- **Les exports** montrent un plan de travail tel que tu le vois : un plan de travail sombre sort en sombre. Voir [Exporter](/docs/export.html#boards).
- **Code** : partout où le design a un plan de travail sombre ou une apparence sombre faite à la main, les tokens copiés depuis la carte Code portent les deux apparences : le CSS met les couleurs sombres sous `@media (prefers-color-scheme: dark)`, le SwiftUI donne à chacune de ces couleurs une valeur claire et une valeur sombre, et le JSON ajoute la valeur sombre à chaque token. Voir [les design tokens](/docs/inspect.html#tokens).

Ensuite : découvre les styles qui font fonctionner tout cela dans [Composants, styles et bibliothèques](/docs/components.html), ou empile de nombreuses publications sur un seul plan de travail avec les [piles](/docs/decks.html).
