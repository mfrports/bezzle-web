---
title: Couleur, bordures et effets
nav: Couleur et effets
lede: Remplis les calques de couleurs, de dégradés et d’images, donne-leur des bordures, des ombres, des flous et de la profondeur, et règle chacun avec précision, sur sa carte ou directement sur le canevas.
---

L’apparence d’un calque sélectionné se trouve sur des cartes dans l’inspecteur, une carte pour chaque chose qu’il a : {Opacité}, {Remplissage}, {Bordure}, {Ombre}, {Flou} et {3D}, avec {Angles} sur un rectangle et {Photo} sur une image. Ce qu’il n’a pas encore attend en dessous, sous forme de puces en pointillés. Cette page passe en revue chacune de ces cartes, le menu de remplissage avec ses dégradés, et les poignées et boutons qu’elles placent sur le canevas.

## Comment fonctionnent les cartes d’apparence {#look-cards}

Repliée, une carte tient sur une seule ligne : une petite image vivante de ce qu’elle contient, son nom, et ce que cela donne, par exemple `#D1CFC9 · 50%` pour un remplissage ou {Douce} pour une ombre. Tout ce qui est sur une carte s’atteint de plusieurs façons, d’un glissement rapide jusqu’aux valeurs exactes.

- **Clique sur la ligne** pour ouvrir la carte, et de nouveau pour la replier. Ouvrir une carte replie celle qui était ouverte.
- **Fais glisser latéralement sur la ligne** pour régler ce que la carte a de principal : combien un remplissage se voit, l’épaisseur d’une bordure, la hauteur à laquelle une ombre soulève le calque, la force d’un flou, l’inclinaison d’un calque en profondeur. La largeur de la carte représente toute la plage. La ligne se remplit depuis la gauche à proportion de la valeur, le pointeur montre qu’elle peut être glissée, et le glissement marque un arrêt à chaque préréglage en chemin, avec un petit retour du trackpad et une encoche plus haute au pied de la carte. Au-delà de chaque extrémité, la carte cède un peu.
- **Tire au-delà de zéro** pour retirer l’élément, sur les cartes qui peuvent le perdre. Continue à faire glisser vers la gauche au-delà du début de la plage : la carte s’incline et indique {Relâchez pour retirer} ; relâche, et l’élément disparaît en une seule étape. Reviens en arrière avant de relâcher pour le garder.
- **Le ×** d’une carte ouverte retire ce qu’elle montre, et **le +** à côté en ajoute un autre du même genre par-dessus : un autre remplissage, une autre bordure ou une autre ombre. Pointer le + montre sur le canevas ce qu’il ajouterait.
- **Les préréglages** se trouvent dans une bande de petites images, chacune nommée quand tu la pointes. Pointer l’une d’elles la montre aussi tout de suite sur le canevas, un clic l’applique, et celle qui est utilisée est en relief.
- **Les valeurs exactes** viennent en dernier, dans des champs qui fonctionnent comme tous les champs numériques de Bezzle : fais glisser sur eux, fais-les avancer avec les touches fléchées, ou tape des calculs et des modifications comme `+2` (voir [Champs numériques](/docs/canvas.html)).

Les puces en pointillés sous les cartes ({Remplissage}, {Bordure}, {Ombre}, {Ombre intérieure}, {Flou}, {3D}, et d’autres comme {Exporter}) proposent ce que la sélection pourrait avoir. Pointer une puce la montre sur le canevas ; un clic l’ajoute, déjà réglée sur quelque chose qui a bonne allure, et ouvre sa carte. Pointer n’importe quelle carte entoure sur le canevas la partie du calque qu’elle change : le remplissage, le bord, l’endroit où tombe l’ombre, la zone floutée.

Avec plusieurs calques sélectionnés, une carte montre ce qu’ils ont en commun, et {Plusieurs} là où ils diffèrent. Une modification s’applique à tous ; une modification tapée comme `+2` change chaque calque à partir de sa propre valeur. Chaque glissement, sur une carte ou sur le canevas, est une étape dans {Édition › Annuler}, nommée d’après ce qu’il a fait, par exemple Modifier l’ombre ou Ajuster le dégradé.

### Piles de remplissages, de bordures et d’ombres {#piles}

Un calque peut avoir plusieurs remplissages, bordures et ombres. Chacun a sa propre carte, et les cartes d’un même genre se serrent les unes contre les autres en pile, celle du dessus en premier. Fais glisser une carte d’une pile vers le haut ou vers le bas pour la prendre et la poser ailleurs ; les autres s’écartent pour lui faire de la place, et relâcher les réempile en une seule étape (Réordonner les remplissages, Réordonner les bordures, Réordonner les ombres). Une image reste toujours le remplissage du bas, si bien que rien ne peut passer sous elle.

### Quels calques ont quelles cartes {#which-cards}

| Calque | Remplissage | Bordure | Ombre dessous | Ombre intérieure | Étendue | Flou de l’arrière-plan |
|---|---|---|---|---|---|---|
| Rectangle, ellipse, tracé | Autant que tu veux | Autant que tu veux | Oui | Oui | Oui | Oui |
| Texte | Un seul, pour ses lettres | Non | Oui | Oui | Non | Non |
| Ligne | Non | Ses traits, sur des cartes {Ligne} | Oui | Non | Oui | Non |
| Groupe | Non | Non | Oui | Oui | Non | Non |
| Plan de travail | Son {Arrière-plan} | Non | Non | Non | Non | Non |

{Opacité}, un flou du calque lui-même et {3D} existent pour chaque calque, sauf pour un plan de travail, qui est la page elle-même.

## Couleurs {#colors}

### Le champ de couleur {#color-field}

Partout où Bezzle demande une couleur, il montre la même ligne :

::: fields
- **La pastille** : la couleur sur un damier, pour que tu voies à quel point elle est transparente. Clique dessus pour ouvrir le sélecteur de couleur ; sur un remplissage ou une bordure, elle ouvre à la place le [menu de remplissage](#fill-menu). Une pastille grisée en diagonale d’un coin à l’autre signifie que les calques sélectionnés diffèrent.
- **Le champ hexadécimal** : la couleur en six chiffres hexadécimaux après le `#`. Tapes-en six, ou trois qui en valent six (`F60` vaut `FF6600`), avec ou sans le `#`, et appuie sur {{Return}} ou clique ailleurs. La transparence reste telle qu’elle était. Le champ affiche un tiret tant que les calques diffèrent.
- **Le pourcentage** : affiché à côté de la valeur hexadécimale quand la couleur est opaque à moins de 100 %.
- **Les couleurs du design** : sur les cartes {Remplissage} et {Bordure}, jusqu’à quatre des couleurs que le design utilise déjà, en pastilles au bout de la ligne, sans la couleur que le calque a maintenant. Pointe-en une pour la voir sur le canevas, clique pour l’utiliser ; elle garde la transparence que tu avais.
:::

### Le sélecteur de couleur {#color-picker}

::: fields
- **Le carré** : la saturation de gauche à droite, la luminosité de haut en bas. Fais glisser n’importe où dedans.
- **La bande de teinte** : la couleur sur le tour du cercle chromatique. Un gris n’a pas de teinte à lui, la bande reste donc où elle était quand tu en choisis un.
- **La bande de transparence** : de transparent à opaque, sur un damier, par pourcentages entiers.
- **Le champ hexadécimal** et **le pourcentage**, en dessous.
- **La pipette** : {Prélever une couleur à l’écran} prélève n’importe quelle couleur n’importe où sur ton écran, dans n’importe quelle app. Elle garde la transparence que tu avais.
- **Dans ce design** : jusqu’à 18 des couleurs que le design utilise, les plus utilisées en premier. Clique sur l’une d’elles pour l’utiliser.
:::

Un glissement dans le sélecteur forme une seule étape d’annulation, quelle que soit sa durée. Les couleurs qu’utilise un design, ici et à côté des champs de couleur, sont les couleurs de remplissage et de bordure de tous ses calques, sans leur transparence, comptées sur tous les plans de travail ; les arrière-plans des plans de travail et les ombres sont laissés de côté.

## Remplissages {#fills}

### La carte Remplissage {#fill-card}

Un remplissage peint l’intérieur d’une forme, ou les lettres d’un texte. Repliée, la carte dit ce qu’il est : la valeur hexadécimale et la transparence d’une couleur, {Linéaire} ou {Radial} pour un dégradé, {Image} pour une image, et le mode de fusion quand il y en a un.

::: fields
- **Le glissement** : pour une couleur, combien elle se voit, de 0 à 100 %, avec un arrêt à 100 %. Au-delà de zéro, le remplissage disparaît.
- **La couleur ou le remplissage** : le [champ de couleur](#color-field) pour une couleur. Pour un dégradé ou une image, une pastille et son nom ({Dégradé linéaire}, {Dégradé radial}, {Image}) ; clique sur l’un ou l’autre pour ouvrir le [menu de remplissage](#fill-menu).
- **Image entière**, **Sujet seul** : sur un remplissage qui est une image, si elle se montre entière ou sans son arrière-plan (voir [Supprimer l’arrière-plan](/docs/pictures.html#remove-background)).
- **Fusion** : sur le premier remplissage d’une forme, comment le calque se mélange à ce qui se trouve dessous (voir [Modes de fusion](#blend)).
:::

Les nouveaux rectangles, ellipses et tracés sont remplis d’un gris clair et chaud, `#D1CFC9` ; un nouveau texte est en `#1C1B19` ; un nouveau plan de travail est blanc.

Le × ou un glissement au-delà de zéro retire un remplissage. Quand c’est le seul, il est seulement désactivé : la puce {Remplissage} en pointillés le fait revenir avec la couleur qu’il avait. Retirer le dernier remplissage retire aussi le mode de fusion, qui va avec lui.

### Plus d’un remplissage {#more-fills}

Le + d’une carte Remplissage ouverte pose un autre remplissage par-dessus les autres : un dégradé qui va de rien en haut à du noir à 50 % en bas, celui qu’il faut sous des mots posés sur une photo, et facile à voir sur n’importe quoi, prêt à devenir ce dont tu as besoin. Les remplissages sont peints les uns sur les autres, le premier en bas, chacun à l’intérieur du contour du calque. Seul le premier remplissage peut être une image et, sur une image dont l’arrière-plan a été supprimé, les remplissages au-dessus colorent seulement le sujet.

### Remplissages des textes et des plans de travail {#text-and-artboard-fills}

Un texte a un seul remplissage, pour ses lettres : une couleur, un dégradé ou une image, étendu sur tout le cadre du texte. Il ne peut pas être retiré, et un texte n’a ni mode de fusion ni second remplissage. Les lettres que tu sélectionnes pendant la saisie prennent une couleur à elles ; repeindre tout le texte retire ces couleurs, pour que tout le texte montre la nouvelle peinture (voir [Texte](/docs/text.html)).

Le remplissage d’un plan de travail est sa carte {Arrière-plan} : une couleur, un dégradé ou une image, sans glissement et sans mode de fusion. Un plan de travail dont l’arrière-plan est une image reçoit aussi une [carte Photo](/docs/pictures.html#photo-card).

## Le menu de remplissage {#fill-menu}

Le menu de remplissage s’ouvre depuis la pastille d’un remplissage ou d’une bordure. En haut, choisis ce qui le peint :

- **Uni** : une seule couleur, choisie comme n’importe quelle couleur.
- **Linéaire** : des couleurs qui se fondent le long d’une ligne.
- **Radial** : des couleurs qui se répandent à partir d’un point.
- **Image** : proposé pour le premier remplissage d’un calque et pour n’importe quelle bordure, et toujours tant qu’une image est là.

Un nouveau dégradé part de la couleur qu’il y avait : d’elle vers une nuance d’elle-même, plus foncée quand la couleur est claire et plus claire quand elle est foncée, du haut vers le bas du calque. Sur une ligne, il va d’une extrémité de la ligne à l’autre, en partant de là où la ligne commence. Un dégradé radial part du milieu du calque et s’étend jusqu’à ses côtés : un cercle dans un calque carré, une ellipse large dans un calque large. Passer de {Linéaire} à {Radial} garde les couleurs, et revenir à {Uni} garde la première d’entre elles.

{Image} demande un fichier image ; si tu annules, le remplissage reste tel qu’il était. Tant qu’une image remplit le calque, le menu l’indique et propose {Choisir une autre image…} ; choisir {Uni}, {Linéaire} ou {Radial} peint le calque avec cela à la place. Tu peux aussi faire glisser un fichier image depuis le Finder sur la pastille d’un remplissage ou d’une bordure : elle s’entoure d’un contour, et relâcher peint avec cette image. Plus sur les images dans [Images et photos](/docs/pictures.html).

### La barre de dégradé {#gradient-bar}

Pour un dégradé, le menu dispose ses couleurs le long d’une barre, chaque couleur étant une petite pastille, avec le sélecteur de couleur sous la barre pour celle qui est choisie.

::: fields
- **Choisir une couleur** : clique sur sa pastille sur la barre. Elle est entourée d’un anneau, et le sélecteur en dessous la modifie.
- **Déplacer une couleur** : fais glisser sa pastille le long de la barre. Elle peut dépasser les autres ; elle reste celle qui est choisie.
- **Ajouter une couleur** : clique sur la barre là où tu la veux. Elle arrive dans la couleur que le dégradé a déjà à cet endroit, si bien que rien ne change tant que tu n’en choisis pas une autre.
- **Retirer une couleur** : fais glisser sa pastille vers le haut ou vers le bas hors de la barre et relâche, ou appuie sur {{⌫}}. Un dégradé garde au moins deux couleurs ; quand il n’en reste que deux, le Mac émet un bip.
:::

Tant que le menu de remplissage est ouvert sur un dégradé, {{⌫}} retire la couleur choisie, jamais le calque, de sorte qu’un geste malheureux ne peut pas supprimer ce sur quoi tu travailles. Chaque couleur peut être transparente, avec la bande de transparence du sélecteur.

### Les poignées du dégradé sur le canevas {#gradient-handles}

Tant que le menu de remplissage est ouvert sur un dégradé et qu’un seul calque est sélectionné, les poignées du dégradé se trouvent sur le calque, sur le canevas. Cliquer dessus laisse le menu ouvert, pour que tu puisses passer de l’un à l’autre.

Un dégradé linéaire montre la ligne qu’il suit, sa première couleur à une extrémité et sa dernière à l’autre :

- **Fais glisser une extrémité** pour faire tourner le dégradé et l’étirer. Maintiens {{⇧}} pour garder la ligne par pas de 15°.
- **Clique sur une extrémité** pour choisir sa couleur dans le menu.
- **Les couleurs intermédiaires** sont des points plus petits sur la ligne. Clique sur l’un d’eux pour le choisir, fais-le glisser le long de la ligne pour le déplacer, ou éloigne-le de la ligne et relâche pour le retirer.
- **Clique sur la ligne** pour y ajouter une couleur.

Un dégradé radial montre son centre, une ligne jusqu’au bout de son rayon, et un anneau en tirets jusqu’où il s’étend :

- **Fais glisser le centre** pour déplacer le dégradé.
- **Fais glisser le bout du rayon** pour le faire tourner et l’étirer, avec {{⇧}} pour des pas de 15°.
- **Fais glisser le losange sur l’anneau**, perpendiculaire au rayon, pour rendre le dégradé plus large ou plus étroit.
- **Fais glisser le losange dans le coin**, au-delà de l’anneau, pour le dimensionner dans les deux sens à la fois, comme tu dimensionnes un calque par son coin ; maintiens {{⇧}} pour garder ses proportions. Le pointer dessine deux côtés du carré dans lequel s’inscrit l’anneau.
- Les couleurs intermédiaires, et les clics sur la ligne, fonctionnent comme pour un dégradé linéaire.

Un dégradé est placé dans le cadre propre du calque, si bien qu’il s’étire, tourne et se retourne avec le calque. Avant sa première couleur et après sa dernière, ces couleurs se prolongent jusqu’aux bords ; hors de l’anneau d’un dégradé radial, la dernière couleur remplit le reste.

### Modes de fusion {#blend}

Le menu {Fusion} de la première carte Remplissage d’une forme règle comment le calque entier, remplissages, bordures et ombres ensemble, se mélange à ce qui se trouve dessous. Pointe un mode dans le menu pour le voir sur le canevas avant de le choisir. Le menu range les modes en six groupes :

- {Normal}, le calque dessiné tel quel sur ce qui est dessous.
- {Obscurcir}, {Produit}, {Densité couleur +}, {Densité linéaire +} : plus sombre.
- {Éclaircir}, {Superposition}, {Densité couleur -}, {Densité linéaire -} : plus clair.
- {Incrustation}, {Lumière tamisée}, {Lumière crue} : plus de contraste.
- {Différence}, {Exclusion} : l’un retranché de l’autre.
- {Teinte}, {Saturation}, {Couleur}, {Luminosité} : une composante de la couleur vient du calque, le reste de ce qui est dessous.

{Densité linéaire +} et {Densité linéaire -} sont les mêmes modes que dans Photoshop, où le second porte en plus la mention « (Ajout) ». Le texte n’a pas de mode de fusion.

## Bordures {#borders}

Une bordure suit le contour d’une forme. Repliée, la carte indique son épaisseur, sa position, si elle est en tirets et si elle est peinte d’un dégradé ou d’une image, par exemple `2 pt · Extérieure · En tirets`.

::: fields
- **Le glissement** : l’épaisseur, de 0 à 12 points (ou jusqu’à sa valeur, quand elle est plus épaisse), par demi-points, avec des arrêts à 1, 2 et 4. Au-delà de zéro, la bordure disparaît.
- **Fine**, **Moyenne**, **Épaisse**, **En tirets** : 1, 2 et 4 points, en trait plein ; ou en tirets à l’épaisseur qu’elle a, chaque tiret faisant deux fois l’épaisseur (au moins 4 points) et chaque écart autant.
- **La couleur** : une couleur, ou un dégradé ou une image choisis dans le [menu de remplissage](#fill-menu), comme pour un remplissage.
- **Taille** : l’épaisseur en points, de 0 à 1000.
- **Tiret**, **Écart** : la longueur de chaque tiret et de chaque écart entre eux, en points. Un tiret de 0 dessine un trait plein. Taper un tiret quand l’écart est à 0 donne à l’écart la même longueur.
- **Intérieure**, **Centrée sur le bord**, **Extérieure** : où se place la bordure par rapport au contour, en trois petites images.
:::

Une bordure intérieure se trouve entièrement à l’intérieur du contour, de sorte que le calque ne dépasse pas son cadre ; une bordure centrée est moitié dedans, moitié dehors ; une bordure extérieure se trouve entièrement au-delà. Sur un tracé qui n’est pas fermé, la bordure est toujours à cheval sur la ligne, quelle que soit sa position. Les tirets ont des extrémités plates ; une bordure pleine sur un tracé ouvert a des extrémités rondes.

Un dégradé sur une bordure est placé dans le cadre du calque, comme celui d’un remplissage. Une image sur une bordure couvre tout ce que la bordure peut atteindre : le cadre du calque, et au-delà autant que la bordure dépasse à l’extérieur.

La puce {Bordure} en pointillés ajoute une bordure intérieure de 1 point, en `#706E69` la première fois, ou telle que la bordure était avant d’être retirée. Le + d’une carte Bordure ouverte en dessine une autre par-dessus : un anneau de la couleur de la bordure du dessus, plus pâle, d’au moins 2 points, de l’autre côté du bord (à l’extérieur quand celle du dessus est intérieure ou centrée, à l’intérieur quand elle est extérieure), pour que les deux se voient.

Autour d’une image dont l’arrière-plan a été supprimé, une bordure suit le contour du sujet, comme le bord d’un autocollant. Pour transformer une bordure en une forme à part, utilise [Vectoriser la bordure](/docs/shapes.html#outline-border).

### Les traits d’une ligne {#line-strokes}

Une ligne n’est que bordure : ses traits sont sur des cartes {Ligne}. Ils fonctionnent comme des bordures, sans position, puisqu’une ligne n’a pas d’intérieur ; un trait n’est jamais plus fin que 0,5 point, et le premier trait d’une ligne ne peut pas être retiré. Le + d’une carte Ligne ajoute un trait plus fin au milieu de celui du dessus, environ trois fois moins large, blanc sur une ligne foncée et noir sur une ligne claire. Une nouvelle ligne a un trait de 1 point en `#706E69`.

## Ombres {#shadows}

Une ombre tombe sous un calque et au-delà, ou à l’intérieur, comme si le calque était enfoncé dans la page. Repliée, la carte s’appelle {Ombre} ou {Ombre intérieure} et nomme le préréglage, ou donne les valeurs, par exemple `Y 4 · F 12`.

::: fields
- **Le glissement** : la hauteur à laquelle l’ombre soulève le calque, de rien jusqu’à {Flottante} en passant par chaque préréglage, en mêlant deux préréglages entre eux. Il garde la couleur de l’ombre, son décalage latéral, et si elle tombe à l’intérieur.
- **Extérieure**, **Intérieure** : sous le calque, ou à l’intérieur. Une ligne n’a pas d’intérieur, les ombres d’une ligne tombent donc toujours dessous. Un préréglage devient celui qui lui fait face ({Douce} devient {Enfoncée}) ; une ombre réglée à la main garde ses valeurs.
- **Les préréglages** : quatre sous le calque, quatre à l’intérieur (ci-dessous).
- **La couleur** : la couleur et la transparence de l’ombre. Les préréglages règlent la transparence et gardent la couleur.
- **X**, **Y** : de combien l’ombre tombe vers la droite et vers le bas, en points, de −1000 à 1000.
- **F** : sa douceur, son flou, de 0 à 1000.
- **Étendue** : sur les rectangles, les ellipses, les tracés et les lignes, de combien l’ombre projetée est plus grande que le calque (ci-dessous).
:::

| Sous le calque | Y | Flou | Opacité | À l’intérieur du calque | Y | Flou | Opacité |
|---|---|---|---|---|---|---|---|
| {Subtile} | 1 | 3 | 14 % | {Gravée} | 1 | 2 | 14 % |
| {Douce} | 4 | 12 | 14 % | {Enfoncée} | 2 | 6 | 16 % |
| {Surélevée} | 10 | 28 | 18 % | {Creusée} | 4 | 12 | 20 % |
| {Flottante} | 24 | 56 | 22 % | {Profonde} | 8 | 24 | 26 % |

Chaque préréglage tombe droit vers le bas, sans X et sans étendue. La puce {Ombre} en pointillés ajoute {Douce} sous le calque. Une fois qu’un calque a une ombre dessous, la puce propose {Ombre intérieure} à la place, qui ajoute {Enfoncée}. Le + d’une carte Ombre ouverte en ajoute une autre du même côté : sous le calque, une ombre {Subtile} toute proche qui le pose sur la page, ce qu’une ombre douce tombant loin dessous ne peut pas faire seule ; à l’intérieur, une fine ligne {Gravée} le long du bord supérieur.

### Déplacer une ombre sur le canevas {#shadow-on-canvas}

Avec un seul calque sélectionné, pointe son ombre là où elle se voit hors du calque : le pointeur devient une main et le contour de l’ombre est dessiné en tirets. Fais-la glisser là où elle doit tomber ; une étiquette affiche ses valeurs X et Y au fur et à mesure, et {{⇧}} garde le glissement bien horizontal ou bien vertical. Le glissement déplace l’ombre dont la carte est ouverte, sinon la première sous le calque. Un clic à cet endroit sans glisser sélectionne ce qui se trouve sous le pointeur, comme partout ailleurs. Cela fonctionne pour tout calque sauf une ligne, tant qu’il n’est ni verrouillé ni tourné en profondeur.

### Étendue {#spread}

Une étendue projette l’ombre depuis le contour du calque agrandi tout autour d’autant de points, ou réduit en dessous de 0. Les angles droits restent droits et les angles ronds s’arrondissent davantage. À l’intérieur du calque, une étendue rétrécit le creux autour duquel l’ombre est projetée, de sorte que l’ombre va plus loin vers l’intérieur. L’étendue d’une ligne épaissit le trait qu’elle projette, et l’étendue d’une image détourée agrandit le contour de son sujet. Les textes et les groupes n’ont pas d’étendue.

### Comment tombent les ombres {#shadow-light}

La lumière est au-dessus de la page, de sorte qu’une ombre tombe de la même façon quelle que soit la rotation de son calque. Plusieurs ombres sont projetées chacune séparément, la première en bas. Les ombres intérieures se trouvent au-dessus des remplissages et sous les bordures, comme un creux se trouve à l’intérieur de son rebord. Les ombres d’un texte ou d’un groupe sont projetées par ce qu’il dessine : les lettres, ou les calques qu’il contient. Une image dont l’arrière-plan a été supprimé projette ses ombres depuis son seul sujet.

## Flou {#blur}

Un flou adoucit le calque lui-même, ou ce qui se trouve derrière lui, comme le fait un verre dépoli. Repliée, la carte indique son intensité, par le nom du préréglage et un nombre, avec {Arrière-plan} pour un flou de ce qui est derrière et {Progressif} pour un flou qui augmente à travers le calque.

::: fields
- **Le glissement** : l’intensité, de 0 à 40 (ou jusqu’à sa valeur, quand elle est plus forte), avec un arrêt à chaque préréglage. Au-delà de zéro, le flou disparaît.
- **Le calque**, **L’arrière-plan** : si c’est le calque lui-même qui est flouté, ou ce qui se trouve derrière lui, vu à travers son contour. Seuls les rectangles, les ellipses et les tracés peuvent flouter ce qui est derrière eux.
- **Léger**, **Doux**, **Fort**, **Intense** : des flous de 3, 8, 16 et 32.
- **Uniforme**, **Progressif** : flouté de façon égale, ou de plus en plus, de net à flou, à travers le calque (ci-dessous).
- **Intensité** : de combien, de 0 à 500. Elle est mesurée comme Adobe XD mesure ses flous, de sorte qu’un design venu de XD garde son allure.
- **Luminosité** : pour un flou de l’arrière-plan, de −100 % à 100 % : au-dessus de 0, elle éclaircit ce qui transparaît, en dessous de 0, elle l’assombrit.
- **Remplissage** : pour un flou de l’arrière-plan, quelle part des remplissages propres du calque se pose sur le flou, de 0 à 100 %.
:::

Un flou du calque floute tout ce qu’il dessine, son ombre aussi. Un flou de l’arrière-plan montre ce qui se trouve derrière le calque sur son plan de travail, flouté, à l’intérieur du contour du calque ; sur un plan de travail qui rogne son contenu, ce qui se trouve au bord du plan de travail se prolonge vers l’extérieur, pour que le flou ne s’estompe pas à cet endroit. Son {Remplissage} commence à 0 %, de sorte qu’au début seul le verre dépoli se voit : monte {Remplissage} pour poser la couleur propre du calque par-dessus, comme une vitre teintée.

La puce {Flou} en pointillés ajoute {Doux} au calque lui-même. Passer à {L’arrière-plan} garde l’intensité.

### Un flou progressif {#growing-blur}

{Progressif} rend le flou net à un endroit et flou de toute son intensité à un autre, et le laisse tel quel au-delà de l’un et de l’autre. Au départ, il est net sur le tiers supérieur du calque et devient flou vers son bord inférieur. Un pavé sous le sélecteur montre le calque en petit, ses repères floutés comme le calque le sera, avec un anneau là où il est net et un point là où le flou est complet :

- **Fais glisser l’anneau ou le point** pour le déplacer.
- **Fais glisser n’importe où ailleurs sur le pavé** pour redessiner le flou, à partir de l’endroit où tu as appuyé.
- Maintiens {{⇧}} pour rester par pas de 45°.
- **Double-clique sur le pavé** pour flouter de nouveau vers le bas.

Les quatre préréglages à côté, {Vers le bas}, {Vers le haut}, {Vers la gauche} et {Vers la droite}, floutent vers un bord. L’anneau et le point peuvent se trouver jusqu’à un quart du calque au-delà de ses côtés, et ils sont placés dans le cadre propre du calque, de sorte que le flou s’étire et tourne avec lui. Les calques sur le canevas suivent le pavé pendant que tu fais glisser.

## Opacité {#opacity}

La carte {Opacité} estompe le calque entier : ses remplissages, ses bordures et ses ombres ensemble, d’un seul tenant. Fais glisser dessus de 0 à 100 %, avec un arrêt à chaque quart ; choisis l’un des quatre quarts, 25 %, 50 %, 75 % et 100 %, dessinés comme des anneaux remplis d’autant ; ou tape un pourcentage dans son champ. L’opacité ne peut pas être retirée, seulement remise à 100 %.

La transparence propre d’un remplissage, réglée sur sa carte Remplissage ou dans le sélecteur, est autre chose : elle rend cette seule couleur transparente et laisse la bordure et l’ombre telles qu’elles sont.

## Angles {#corners}

La carte {Angles} d’un rectangle arrondit ses angles, des angles droits jusqu’à la pilule, en arcs simples ou en superellipses, et les pastilles à l’intérieur des angles d’un rectangle sélectionné les arrondissent directement sur le canevas. Les deux sont décrites dans [Formes, tracés et Plume](/docs/shapes.html#corners).

## 3D : profondeur et perspective {#depth}

{3D} soulève un calque de la page, comme tu tiens une carte pour la regarder : incliné vers l’arrière ou vers l’avant, tourné sur le côté, et rapproché ou éloigné, en vraie perspective. Cela fonctionne sur tout calque sauf un plan de travail : formes, texte, images et groupes entiers.

### La carte 3D {#depth-card}

La puce {3D} en pointillés soulève un peu le calque, tourné vers la gauche : incliné de 16° et tourné de −22°. Repliée, la carte donne les deux angles, par exemple `16°, −22°`, ou indique {Coins fixés} pour un calque [fixé par ses coins](#pinned-corners).

::: fields
- **Le glissement** : incline davantage le calque, de à plat jusqu’à 60°, dans le sens où il est déjà tourné ; depuis la position à plat, dans le sens où la puce le tourne. Au-delà de zéro, la 3D disparaît.
- **Le pavé** : une petite carte qui se tourne vers l’endroit que tu pointes. Son milieu est de face, à plat dans la page ; l’anneau en tirets qui l’entoure est de profil. Fais glisser n’importe où dedans pour orienter le calque vers cet endroit, ou fais glisser le bouton sans qu’il saute. Les calques sur le canevas tournent avec lui au fur et à mesure. Maintiens {{⇧}} pour des pas de 15°, et double-clique sur le pavé pour remettre le calque à plat. Le pavé ne tourne pas un calque au-delà de 85°, juste avant le profil.
- **X** : les degrés dont le calque est incliné vers l’arrière autour de son milieu, son haut s’éloignant au-dessus de 0, de −180° à 180°.
- **Y** : les degrés dont il est tourné sur le côté, son côté droit s’éloignant au-dessus de 0, de −180° à 180°.
- **Z** : les points dont il est rapproché, ou éloigné en dessous de 0, de −10 000 à 10 000.
:::

La petite image de la carte repliée montre la rotation propre du calque : éclairé d’en haut, plus sombre à mesure que sa face se détourne, et gris dès que tu vois son dos. Le × retire la 3D et remet le calque à plat et d’équerre.

### Tourner en profondeur sur le canevas {#depth-on-canvas}

Un calque tourné en profondeur montre un bouton au bout d’une courte tige partant de son milieu, qui pointe dans la direction où regarde sa face. Il s’affiche quand un seul calque est sélectionné avec l’outil {Sélection}, que le calque n’est pas verrouillé, et qu’il mesure au moins 40 points de large à l’écran.

- **Fais glisser le bouton** pour orienter la face : elle suit le bouton, comme une tête se tourne là où on la mène par le bout du nez. Pointe d’abord le bouton, et un anneau en tirets montre où la face serait vue de profil.
- **Maintiens {{⌥}}** en faisant glisser le bouton pour rapprocher le calque à la place, en faisant glisser vers le haut, ou l’éloigner, en faisant glisser vers le bas.
- **Maintiens {{⇧}}** pour des pas de 15°. En passant de face, le calque se pose à plat.
- **Double-clique sur le bouton** pour remettre le calque à plat.

Juste à l’extérieur du milieu de n’importe quel côté de la sélection, le pointeur montre qu’il tourne les choses en profondeur. Fais glisser à cet endroit pour tourner tout ce qui est sélectionné, à plat ou non, comme une boule tourne sous ta main : sa face va vers où va le pointeur, et tu peux continuer au-delà du profil. Chaque calque sélectionné tourne de la même façon, chacun autour de son propre milieu. Maintiens {{⇧}} pour tourner autour d’un seul axe, par pas de 15°, et appuie sur {{Esc}} pour tout remettre comme c’était. Un clic à cet endroit sans glisser sélectionne ce qui se trouve sous le pointeur. Pendant que tu tournes, une étiquette affiche les angles, par exemple `X 16°  Y −22°`, la distance, ou combien de calques tournent.

Les poignées d’un calque tourné en profondeur le redimensionnent toujours : la traction est mesurée sur le calque tel qu’il serait à plat, de sorte qu’il grandit le long de ses propres côtés.

### Comment fonctionne la perspective {#perspective}

Un calque tourné en profondeur est vu depuis un point situé juste devant son propre milieu, comme le voit la perspective CSS d’un navigateur, si bien que son milieu reste en place et qu’il a la même allure où qu’il se trouve sur le plan de travail. Il est vu d’une distance égale à deux fois sa taille, et jamais de plus près que 600 points, de sorte qu’un petit calque montre autant de profondeur qu’un grand et qu’un petit élément n’est pas déformé. Le rapprocher avec Z s’arrête à 40 % de cette distance, pour qu’aucune partie n’atteigne jamais l’œil.

Une ombre sous un calque en profondeur tombe depuis la forme que le calque dessine sur la page, avec la lumière au-dessus de la page comme toujours. Une ombre intérieure fait partie de sa face, et tourne avec elle. Un groupe tourné en profondeur fait tourner tout ce qu’il contient. Une forme tournée en profondeur ne peut pas contenir de calques en tant que [masque](/docs/pictures.html#masks).

### Coins fixés {#pinned-corners}

Un calque peut aussi être fixé par ses coins, comme une image posée sur un écran vu en biais dans une photo. Les écrans d’une maquette Photoshop arrivent de cette façon (voir [Importer des designs](/docs/import.html)), et une image déposée sur l’un d’eux s’y place selon l’angle de l’écran. Tant qu’un calque fixé n’est pas aussi tourné, fais glisser l’une de ses poignées d’angle pour amener ce coin où tu veux, ou la poignée d’un côté pour déplacer avec elle les deux coins de ce côté ; une traction qui replierait le calque sur lui-même n’est pas prise en compte. Retirer la 3D le remet d’équerre.

## Ce qui est dessiné par-dessus quoi {#drawing-order}

Un calque est dessiné dans cet ordre, de bas en haut :

1. Ses ombres dessous, chacune séparément, la première en bas.
2. Un flou de ce qui est derrière lui, s’il en a un, puis ses remplissages, le premier en bas.
3. Ses ombres intérieures.
4. Ses bordures, la première en bas.

L’opacité et le mode de fusion s’appliquent ensuite à l’ensemble d’un seul tenant, de sorte qu’un remplissage et sa bordure s’estompent ensemble et projettent une seule ombre. Un flou du calque floute l’ensemble, et un calque en profondeur est dessiné ainsi à plat, puis tourné à sa place. Le canevas, les vignettes de l’écran d’accueil et chaque export sont dessinés de la même façon, si bien qu’ils concordent au point près.

## Des apparences avec un nom {#styles}

Quand le design a des styles d’un genre, les cartes {Remplissage}, {Bordure} et {Ombre} ouvertes les proposent d’abord, et une carte qui montre un style indique son nom au lieu de ses valeurs. Les styles sont des couleurs, des ombres, des typographies et des angles qui portent un nom, les mêmes partout où ils sont utilisés, et une apparence nommée peut avoir sa propre apparence sombre. Voir [Composants, styles et bibliothèques](/docs/components.html) et [Clair et sombre](/docs/dark.html).
