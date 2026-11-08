---
title: Formes, tracés et Plume
nav: Formes et tracés
lede: Dessine des rectangles, des ellipses, des lignes et tes propres tracés, façonne chaque angle et chaque point à la main, et découpe, réunis et vectorise des formes pour en faire de nouvelles.
---

Bezzle a trois outils de dessin pour les formes que tu utilises le plus, une plume pour n’importe quel contour, et un ensemble d’outils de tracé qui font de nouvelles formes à partir de celles que tu as : Réunir et les autres façons de combiner, la construction avec les morceaux que forment des formes qui se chevauchent, le Cutter, le décalage d’un contour vers l’extérieur ou vers l’intérieur, et la transformation d’une bordure en forme. Tout ce qu’ils créent est un calque ordinaire qui garde l’apparence de la forme dont il vient, et chaque étape peut être annulée.

## Dessiner des formes {#drawing}

### Rectangle, Ellipse et Ligne {#basic-shapes}

Choisis un outil dans la barre d’outils, ou appuie sur sa touche : {{R}} pour {Rectangle}, {{E}} pour {Ellipse}, {{L}} pour {Ligne}. Puis fais glisser sur le canevas. La taille s’affiche à côté de la forme pendant que tu fais glisser (sa longueur, pour une ligne), et les coins où tu commences et où tu finis se calent sur les bords et le milieu du plan de travail, ainsi que sur ses repères et sa grille de mise en page quand ils sont affichés.

Un clic sans glisser crée une forme d’une taille raisonnable : un rectangle ou une ellipse de 100 sur 100 points, son coin supérieur gauche là où tu as cliqué, ou une ligne de 100 points de long qui part vers la droite. Une fois la forme posée, tu as de nouveau l’outil {Sélection} en main, pour la déplacer ou la redimensionner tout de suite.

Une forme va sur le plan de travail où tu l’as commencée, ou sur le canevas à côté des plans de travail quand tu commences en dehors. Les nouveaux rectangles et les nouvelles ellipses sont remplis d’un gris clair et chaud (`#D1CFC9`) ; une nouvelle ligne est un trait de 1 point d’un gris foncé (`#706E69`). Change l’un et l’autre sur leurs cartes dans l’inspecteur (voir [Couleur, bordures et effets](/docs/looks.html)). Dessine une forme sur une image et Bezzle propose de masquer l’image avec elle (voir [Images et photos](/docs/pictures.html)).

| À maintenir en faisant glisser | Rectangle et Ellipse | Ligne |
| --- | --- | --- |
| {{⇧}} | Un carré, ou un cercle | Reste par pas de 45° |
| {{⌥}} | Dessine à partir du milieu | Rien |
| {{⇧}} et {{⌥}} | Un carré ou un cercle à partir du milieu | Pas de 45° |
| {{⌘}} | Rien ne se cale | Rien ne se cale |

Avec {{⇧}}, un carré se cale toujours par celui de ses bords mobiles qui arrive le plus près de quelque chose, et l’autre bord suit, pour qu’il reste carré.

> [!windows]
> Dans Bezzle pour Windows, une forme ne se cale sur rien pendant que tu la dessines, et {{Alt}} ne la dessine pas encore à partir du milieu : {{Shift}} fait un carré, un cercle ou une ligne par pas de 45°.

### Lignes {#lines}

Une ligne sélectionnée n’a pas de poignées de cadre : elle a à la place une poignée ronde à chaque extrémité. Fais glisser une extrémité pour la déplacer pendant que l’autre reste en place ; {{⇧}} garde la ligne par pas de 45°, et l’extrémité se cale sur ce qui l’entoure, sauf si tu maintiens {{⇧}} ou {{⌘}}. Les extrémités tombent sur des points entiers, et la longueur s’affiche pendant que tu fais glisser. Une ligne que tu as fait pivoter est redressée en ses deux extrémités dès que tu en saisis une, pour que les extrémités puissent aller n’importe où.

Une ligne n’a pas de remplissage : son trait est sa carte {Ligne}, qui fonctionne comme une bordure. Une ligne peut porter du texte (voir [Texte le long d’une courbe](/docs/text.html#curves)), devenir un tracé et être retournée. Elle ne peut être ni combinée ni coupée au Cutter, car elle n’enferme aucune surface ; pour faire de son trait une forme qui le peut, utilise [Vectoriser la bordure](/docs/shapes.html#outline-border).

## Angles {#corners}

### Arrondir un rectangle sur le canevas {#corner-dots}

Sélectionne un rectangle et pointe-le : une petite pastille apparaît à l’intérieur de chaque angle, sur la diagonale, aussi loin vers l’intérieur que cet angle est arrondi, et jamais plus près de l’angle que 10 points à l’écran. Fais glisser une pastille vers le milieu pour arrondir tous les angles de la même façon, et ramène-la vers l’extérieur pour les rendre de nouveau droits. Maintiens {{⌥}}, avant ou pendant le glissement, pour n’arrondir que l’angle que tu fais glisser. Le rayon s’affiche au fur et à mesure, et ne dépasse jamais la moitié du côté le plus court.

Les pastilles s’affichent tant que le rectangle mesure au moins 48 points de large et de haut à l’écran ; zoome sur un petit rectangle pour les faire apparaître.

### La carte Angles {#corners-card}

Chaque rectangle sélectionné a une carte {Angles}. Repliée, elle dit à quel point les angles sont arrondis, par exemple {Doux · 12}, {Pilule} ou {Superellipse · Rond · 24}. Fais glisser latéralement sur la carte repliée pour les arrondir, des angles droits jusqu’à la pilule ; le glissement marque un arrêt à 0, 4, 12, 24 et à la pilule. Clique sur la carte pour l’ouvrir :

::: fields
- **Préréglages** : {Droit} (0), {Légèrement arrondi} (4), {Doux} (12), {Rond} (24) et {Pilule}, qui arrondit entièrement les petits côtés. Pointe l’un d’eux pour l’essayer sur le canevas avant de cliquer.
- **R** : le rayon de chaque angle, en points. Le champ reste vide tant que les angles diffèrent. Une valeur que tu tapes arrondit les quatre de la même façon ; faire glisser sur le champ, ou taper une modification comme `+2`, change chaque angle à partir de son propre rayon.
- **Rond**, **Superellipse** : des angles ronds simples, en quart de cercle, ou des superellipses, dont les angles se fondent en douceur dans les côtés, de sorte que la courbure arrive progressivement au lieu de tomber d’un coup, comme iOS dessine les icônes de ses apps.
- **Lissage** : le champ en % à côté, de 0 à 100 %. {Superellipse} commence à 80 %, un peu plus lisse que les 60 % avec lesquels iOS dessine ses icônes ; à 0, les angles redeviennent des angles ronds simples.
:::

Les angles peuvent aussi porter un nom, pour être utilisés sur d’autres calques et changés partout d’un coup ; la carte ouverte propose d’abord les styles d’angles du design (voir [Composants, styles et bibliothèques](/docs/components.html)).

::: demo corners
:::

### Les angles d’un tracé {#path-corners}

Les tracés ont aussi des angles. Pointe un tracé sélectionné et une pastille apparaît à l’intérieur de chacun de ses angles : chaque point où le contour tourne brusquement, et chaque arrondi entre deux côtés droits. Fais glisser une pastille vers l’intérieur pour arrondir tous les angles du tracé de la même façon, ou maintiens {{⌥}} pour n’arrondir que celui-là ; ramène-la vers l’extérieur pour rendre l’angle de nouveau vif. Un arrondi ne prend jamais plus d’un côté qu’il n’y en a, et seulement la moitié là où l’angle à son autre extrémité est arrondi lui aussi.

Un arrondi fait de cette façon, ou tout arrondi entre deux côtés droits (comme les angles d’un rectangle arrondi que tu as converti en tracé), garde sa pastille, pour que tu puisses le rendre plus rond ou plus vif plus tard. Les pastilles s’affichent tant que le plus long côté du tracé mesure au moins 40 points à l’écran et que le tracé n’a pas plus de 64 angles.

## La Plume {#pen}

La {Plume} ({{P}}) dessine un tracé point par point : un clic pose un angle, un glissement tire une courbe hors du point. Un nouveau tracé n’a pas de remplissage et a un trait de 1 point gris foncé ; ajoute un remplissage depuis la carte {Remplissage} en pointillés, en bas de l’inspecteur, quand tu en veux un.

::: steps
1. **Appuie sur {{P}}.** Le pointeur devient une plume.
2. **Clique là où commence le tracé.** Rien n’est encore ajouté aux calques : le tracé devient un calque avec son deuxième point, sur le plan de travail où le premier point a été posé.
3. **Clique pour chaque angle, ou fais glisser pour une courbe.** Une courbe suit le pointeur depuis le point le plus récent pour montrer où irait la partie suivante.
4. **Termine.** Clique de nouveau sur le premier point pour fermer la forme, ou appuie sur {{Return}} ou {{Esc}} pour la laisser ouverte. Dans les deux cas, le tracé reste sélectionné et tu as de nouveau l’outil {Sélection} en main.
:::

### Courbes et poignées pendant le dessin {#pen-curves}

Faire glisser en posant un point en tire les poignées : la poignée sortante suit le pointeur, et la poignée entrante en est le reflet, pour que le contour passe en douceur par le point.

- **{{⌥}} pendant le glissement** laisse la poignée entrante où elle est (ou sans poignée, si tu maintiens la touche dès le départ), pour que le tracé fasse un coude au point au lieu de le traverser.
- **{{⇧}} pendant le glissement** garde la poignée par pas de 45°.
- **Clique de nouveau sur le point le plus récent** pour retirer sa poignée sortante, pour que la partie suivante en parte en ligne droite. Fais plutôt glisser depuis ce point pour en tirer une nouvelle poignée sortante, seule, pour un virage vif après une courbe.
- **Fais glisser sur le premier point** en fermant le tracé pour façonner la courbe qui y revient. Le premier point devient lisse avec elle ; maintiens {{⌥}} pour laisser la première courbe telle qu’elle était.

{{⇧}} et {{⌥}} agissent dès que tu appuies dessus, sans attendre que le pointeur bouge.

### Placer les points avec précision {#pen-snapping}

Un point se cale, à 5 points près à l’écran, sur les bords et les milieux de ce qui l’entoure, sur les repères et les grilles de mise en page, et sur les points du tracé lui-même. Là où rien ne le retient, il tombe sur des points entiers et, quand tu zoomes, sur des demis, des quarts, des dixièmes et plus fin encore, de sorte qu’un pas ne fait jamais plus de deux points à l’écran.

- **{{⇧}}** place le point suivant par pas de 45° à partir du précédent.
- **{{⌘}}** laisse le point aller n’importe où : rien ne se cale, et il tombe au centième de point.

### Reprendre des points {#pen-undo}

Pendant que tu dessines, {{⌫}} reprend le point le plus récent ; quand il ne reste que deux points, le tracé disparaît et son premier point attend le clic suivant. {{Esc}} pendant un glissement reprend le point que tu es en train de poser. Chaque point est une étape d’annulation à lui seul, donc {{⌘Z}} fonctionne aussi.

### La Plume sur un tracé sélectionné {#pen-on-paths}

Avec la Plume en main et un tracé sélectionné, ses points s’affichent, et le pointeur indique ce que ferait un clic :

| Pointer | Un clic |
| --- | --- |
| Une extrémité ouverte du tracé | Continue le dessin depuis cette extrémité |
| Tout autre point | Retire ce point |
| Le contour entre deux points | Y ajoute un point, sans changer la forme |
| N’importe où ailleurs | Commence un nouveau tracé |

Pendant que tu dessines, pointer le premier point affiche un anneau autour de lui : un clic à cet endroit ferme le tracé. Pointer le point le plus récent montre qu’un clic retire sa poignée.

## Modifier les points {#editing-points}

### Commencer et arrêter {#start-editing}

Les points de n’importe quel tracé peuvent être déplacés, ajoutés et retirés. Pour commencer, fais l’une de ces choses :

- Double-clique sur un tracé.
- Sélectionne un tracé et appuie sur {{Return}}.
- Clique sur {Modifier les points} sur sa carte {Tracé}, ou choisis {Modifier les points} quand tu cliques dessus avec le bouton droit.

Double-clique aussi sur un rectangle, une ellipse ou une ligne pour modifier ses points. C’est un tracé pendant que tu les modifies ; laisse-le inchangé et il redevient la forme qu’il était, angles compris. Change son contour, et il reste un tracé.

Un tracé ou une forme remplis d’une image placent l’image quand tu double-cliques dessus (voir [Images et photos](/docs/pictures.html)). Pour les points d’un tracé, utilise {Modifier les points} ; convertis d’abord une forme en tracé.

Pour arrêter, appuie sur {{Esc}} ou {{Return}}, clique sur {Terminé} sur la carte {Tracé}, double-clique n’importe où hors des points, ou clique sur un endroit vide du canevas. Cliquer sur un autre calque arrête la modification et sélectionne ce calque.

### Choisir et déplacer des points {#moving-points}

- **Clique sur un point** pour le choisir. Un clic avec {{⇧}} ajoute un point à ceux qui sont choisis, ou l’en retire.
- **Fais glisser autour de points**, en commençant sur un endroit vide du canevas ou à l’intérieur du tracé, loin de son contour, pour choisir ceux qui se trouvent dans le cadre ; maintiens {{⇧}} pour les ajouter à ceux qui sont choisis. {{⌘A}} choisit tous les points.
- **Fais glisser un point choisi** pour déplacer ensemble tous les points choisis. {{⇧}} garde le déplacement horizontal ou vertical ; le point que tu tiens se cale sur les autres points du tracé et sur ce qui l’entoure, et {{⌘}} désactive le calage. Les points tombent sur des points entiers, ou sur des pas plus fins quand tu as zoomé, comme avec la Plume.
- **Les touches fléchées** déplacent les points choisis de 1 point, ou de 10 avec {{⇧}}. Sans point choisi, elles déplacent tout le tracé.
- **{{⌫}}** retire les points choisis et relie les points de part et d’autre. Une partie du tracé à laquelle il reste moins de deux points disparaît, et un tracé sans plus aucun point disparaît entièrement.

### Poignées, points lisses et angles {#handles}

Les poignées des points choisis s’affichent, ainsi que celles des points voisins qui tirent les courbes vers eux. Fais glisser une poignée pour remodeler sa courbe :

- Sur un point lisse, l’autre poignée tourne avec elle et garde sa propre longueur, pour que le contour reste lisse.
- Maintiens {{⌥}} pour déplacer une poignée seule, en laissant un coude au point.
- {{⇧}} garde la poignée par pas de 45°.

**Double-clique sur un point** pour le faire passer d’un angle vif à un point lisse, et inversement. Un angle perd ses poignées, de sorte que les lignes de part et d’autre y arrivent droites. Un point lisse reçoit des poignées alignées sur une même droite : dans l’axe des poignées qu’il a déjà, en gardant leur longueur, ou, pour un point sans poignées, dans la direction qui va du point précédent au point suivant, chaque poignée faisant un tiers du chemin jusqu’à son voisin.

### Ajouter des points {#adding-points}

Pointe le contour entre deux points : un point pâle montre où un clic en ajouterait un. Clique pour l’ajouter à cet endroit ; la forme ne change pas, car les courbes de part et d’autre se raccourcissent pour s’ajuster. Garde le bouton enfoncé et fais glisser pour déplacer le nouveau point tout de suite.

### La carte Tracé {#path-card}

Un tracé sélectionné a une carte {Tracé}. Repliée, elle indique {Ouvert} ou {Fermé}, et {Édition des points} pendant que tu les modifies.

::: fields
- **Ouvert**, **Fermé** : ferme chaque tracé sélectionné par une ligne qui va de son dernier point à son premier, ou l’ouvre à cet endroit.
- **Chevauchements** : affiché quand le tracé a un remplissage. Là où le contour se croise lui-même, ou là où une partie se trouve à l’intérieur d’une autre, {Remplir} remplit ces zones, et {Évider} les laisse vides, comme un trou.
- **Modifier les points**, **Terminé** : commence ou arrête la modification des points de l’unique tracé sélectionné ({{Return}}).
- **X**, **Y** : pendant que tu modifies des points et que certains sont choisis, leur position, mesurée depuis le coin supérieur gauche du plan de travail ou du groupe où se trouve le tracé. Avec plusieurs points choisis, le champ est vide sauf s’ils ont la même valeur. Une valeur que tu tapes y amène chaque point choisi, ce qui les aligne ; une modification comme `+10` déplace chacun d’autant.
- **Angle**, **Lisse** : fait des points choisis des angles vifs ou des points lisses.
:::

Sans point choisi, la carte dit ce que tu peux faire : faire glisser un point ou ses poignées, cliquer sur le contour pour ajouter un point, et double-cliquer sur un point pour le rendre lisse ou anguleux.

## Convertir en tracé {#convert-to-path}

{Objet › Convertir en tracé} ({{⌘8}}) transforme les rectangles, les ellipses et les lignes sélectionnés en tracés, pour que leurs points puissent être modifiés pour de bon. Le contour reste exactement tel qu’il était, angles ronds ou en superellipse compris ; c’est la carte {Angles} qui disparaît, car les angles d’un tracé sont ses propres points. Les textes deviennent les contours de leurs lettres (voir [Texte vectorisé](/docs/text.html#outlines)). Les calques verrouillés restent tels quels.

Tu n’en as pas besoin pour ajuster une forme une seule fois : double-cliquer sur un rectangle, une ellipse ou une ligne ouvre ses points tels qu’ils sont.

## Combiner des formes {#combining}

### Réunir, Soustraire, Intersection et Exclure le chevauchement {#boolean}

Sélectionne deux formes ou plus (rectangles, ellipses ou tracés, aucun verrouillé, et rien d’autre) et choisis l’une de ces commandes dans le menu {Objet}, ou clique sur son bouton sur la carte {Disposer}, qui s’affiche quand plusieurs calques sont sélectionnés :

| Commande | Touches | Ce qui reste |
| --- | --- | --- |
| {Réunir} | {{⌥⌘U}} | Toutes les formes, en un seul contour |
| {Soustraire} | {{⌥⌘S}} | La forme à l’arrière, moins chaque forme placée devant elle |
| {Intersection} | {{⌥⌘I}} | Seulement ce que toutes les formes ont en commun |
| {Exclure le chevauchement} | {{⌥⌘X}} | Seulement là où se trouve un nombre impair de formes : là où deux se chevauchent est évidé |

Le résultat est un seul tracé. Il prend l’apparence de la forme à l’arrière (ses remplissages, bordures, ombres et le reste, un dégradé restant là où il était) et se place juste au-dessus de la plus en avant des formes, de sorte que ce qui se trouvait par-dessus s’y trouve toujours. Il est sélectionné ensuite. Quand il ne resterait rien, par exemple quand tu fais l’intersection de formes qui ne se chevauchent pas, Bezzle émet un bip et rien ne change.

Les textes ne peuvent pas être combinés tels quels : convertis-les d’abord en tracés, et un texte d’une seule couleur devient un tracé unique qui se combine comme n’importe quel autre. Le trait d’une ligne se combine une fois que [Vectoriser la bordure](/docs/shapes.html#outline-border) en a fait une forme.

::: demo combine
:::

### Construire avec les morceaux {#build}

Des formes qui se chevauchent se découpent mutuellement en morceaux. La construction te laisse choisir à la main ceux que tu veux : en réunir certains, faire des autres des formes à part, effacer le reste.

::: steps
1. **Sélectionne deux formes ou plus** (rectangles, ellipses ou tracés).
2. **Choisis {Objet › Construire avec les morceaux}** ({{⌥⌘B}}), ou clique sur le bouton de construction, au bout des boutons de combinaison sur la carte {Disposer}. Chaque morceau est entouré d’un contour en tirets ; celui qui se trouve sous le pointeur s’éclaire, et la carte {Disposer} s’ouvre avec un rappel de ce qu’il faut faire.
3. **Clique sur un morceau** pour en faire une forme à part, retirée de chaque forme dont il faisait partie.
4. **Fais glisser sur des morceaux** pour réunir en une seule forme chaque morceau que touche le glissement. Quelle que soit ta vitesse, chaque morceau sur le chemin compte.
5. **Maintiens {{⌥}}** en cliquant ou en faisant glisser pour effacer des morceaux à la place. Les morceaux et la traînée deviennent rouges.
6. **Appuie sur {{Return}} ou {{Esc}}**, clique en dehors des morceaux, ou choisis {Objet › Terminer la construction} pour finir.
:::

Une forme réunie a l’apparence de la forme la plus en avant sur le premier morceau que tu as touché, et se place au-dessus de la plus en avant des formes dont elle a pris des morceaux. Ces formes gardent le reste d’elles-mêmes, et disparaissent quand il n’en reste rien. Cliquer sur un morceau qui est déjà à lui seul une forme entière ne change rien. Tu peux continuer à construire après chaque clic ou glissement ; chacun est une étape d’annulation ({Réunir des morceaux} ou {Effacer des morceaux}). {{Esc}} pendant un glissement abandonne ce glissement sans rien construire.

La construction se termine aussi quand tu sélectionnes autre chose ou que tu prends un autre outil.

## Le Cutter {#knife}

Le {Cutter} ({{K}}) découpe des formes en morceaux le long d’une ligne que tu traces à travers elles. La lame s’affiche comme une ligne rouge en tirets. Chaque morceau a l’apparence de la forme et se trouve là où elle était, à sa place parmi les calques, et les morceaux sont sélectionnés après la découpe. Le Cutter reste en main pour la découpe suivante ; appuie sur {{V}} ou {{Esc}} pour le poser.

### Découper d’un glissement {#knife-drag}

Fais glisser à travers les formes : la découpe suit le chemin du pointeur, lissé. Maintiens {{⇧}} pour découper plutôt en ligne droite depuis ton point de départ. {{Esc}} avant de relâcher annule la découpe.

### Découper point par point {#knife-points}

Clique au lieu de faire glisser, et tu poses une ligne de découpe point par point, comme avec la Plume :

- Chaque clic ajoute un point ; un glissement pendant le clic en tire une courbe.
- {{⇧}} garde chaque segment par pas de 45°.
- {{Return}}, un double-clic ou un clic sur le premier point effectue la découpe. Cliquer sur le premier point ferme la ligne en boucle, ce qui découpe ce qu’elle entoure.
- {{⌫}} reprend le point le plus récent, et {{Esc}} abandonne la ligne.

### Ce que coupe le Cutter {#knife-cuts}

La découpe sépare les formes sélectionnées qu’elle traverse de part en part. Si elle n’en traverse aucune, elle sépare chaque forme qu’elle traverse parmi celles qui sont affichées et non verrouillées. Elle fonctionne sur les rectangles, les ellipses et les tracés. Ses extrémités vont un peu plus loin que tu ne les as tracées, de sorte qu’une ligne qui commence ou s’arrête juste à l’intérieur d’une forme la sépare quand même, et là où la ligne entre dans une forme et s’arrête à l’intérieur, la fente se referme. Si rien n’est découpé, Bezzle émet un bip.

Découpe la forme d’un masque, et tu obtiens un masque pour chaque morceau, chacun montrant toujours ce qu’il montrait à cet endroit, comme une image encadrée qu’on couperait avec son cadre.

## Décaler vers l’extérieur et vers l’intérieur {#outset}

Maintiens {{⌥}} et pointe le bord d’un rectangle, d’une ellipse ou d’un tracé sélectionné (un tracé fermé, ou qui a un remplissage) : le bord s’éclaire et le pointeur affiche une double flèche qui le traverse. Fais glisser vers l’extérieur pour créer une copie de la forme agrandie tout autour, placée derrière elle ; fais glisser vers l’intérieur pour une copie réduite tout autour, placée devant elle. La copie s’étend aussi loin du bord que se trouve le pointeur, la distance s’affiche pendant que tu fais glisser, et ses angles restent vifs. Maintiens {{⇧}} pour des angles ronds.

La copie a l’apparence de la forme et porte son nom, par exemple *Ellipse 1 (extérieur)* ou *Ellipse 1 (intérieur)* ; elle est sélectionnée quand tu relâches. {{Esc}} pendant le glissement l’annule. La forme doit mesurer au moins 16 points de large et de haut à l’écran.

> [!note] Option sur le bord, Option ailleurs
> En maintenant {{⌥}}, un glissement qui commence sur le bord de la forme sélectionnée crée un décalage vers l’extérieur ou vers l’intérieur. Un glissement qui commence n’importe où ailleurs sur elle en éloigne une copie, comme pour n’importe quel calque (voir [Le canevas](/docs/canvas.html)).

## Vectoriser la bordure {#outline-border}

{Objet › Vectoriser la bordure} ({{⌥⌘O}}) transforme la bordure de chaque forme ou ligne sélectionnée en une forme à part, remplie de la couleur, du dégradé ou de l’image de la bordure exactement comme elle était dessinée : à l’intérieur, centrée ou à l’extérieur, en tirets ou non. Contrairement à une bordure, qui garde son épaisseur quelle que soit la taille du calque, la nouvelle forme grandit et rétrécit comme n’importe quelle forme.

- Un calque qui a un remplissage le garde, et la forme de la bordure se place juste au-dessus, nommée d’après lui, par exemple *Rectangle 1 (bordure)*. Les ombres du calque restent sur le calque.
- Un calque qui n’était que bordure, comme une ligne ou une forme sans remplissage, devient la forme elle-même.
- Un calque qui a plusieurs bordures reçoit une forme pour chacune, l’une sur l’autre, comme elles étaient dessinées.

Cela fonctionne sur les rectangles, les ellipses, les tracés et les lignes dont la bordure est plus épaisse que 0, sauf s’ils sont verrouillés. Les nouvelles formes sont sélectionnées ensuite.

## Retourner {#flip}

{Objet › Retourner horizontalement} et {Objet › Retourner verticalement}, ou les deux boutons de retournement à côté du champ de rotation sur la carte {Cadre}, mettent la sélection en miroir là où elle est : un calque seul autour de son propre milieu, plusieurs autour du milieu du cadre qui les entoure tous. Le contour d’un tracé est retourné, les angles d’un rectangle changent de côté, une ligne penche dans l’autre sens, un calque pivoté tourne dans l’autre sens, et les dégradés et les images sont mis en miroir avec lui. Un groupe retourne ce qu’il contient.

Les plans de travail et les calques verrouillés restent tels quels. Les mots se lisent toujours à l’endroit, si bien qu’un texte seul ne se retourne pas ; avec d’autres calques, il va à sa place en miroir.

## Les cartes d’une forme {#cards}

Ce que l’inspecteur montre pour la sélection dépend de ce qu’elle est :

- **Rectangle** : {Cadre}, {Angles}, {Opacité}, puis ses remplissages, bordures, ombres, flou, 3D et export.
- **Ellipse** : la même chose, sans {Angles}.
- **Tracé** : {Cadre}, {Tracé}, {Opacité}, puis ses apparences, comme pour un rectangle.
- **Ligne** : {Cadre}, {Opacité}, {Ligne} à la place du remplissage et de la bordure, puis les ombres (en dessous seulement), le flou, la 3D et l’export.
- **Plusieurs calques** : {Disposer} vient en premier, avec les boutons qui les alignent et les espacent ; quand ce sont tous des formes, aussi les boutons de combinaison et le bouton de construction.

Les cartes des apparences qu’une forme n’a pas encore attendent en bas, en pointillés, à un clic. Voir [Couleur, bordures et effets](/docs/looks.html) pour toutes ces cartes.

## Raccourcis {#shortcuts}

| Touches | Ce qu’elles font |
| --- | --- |
| {{R}}, {{E}}, {{L}} | Rectangle, Ellipse, Ligne |
| {{P}} | Plume |
| {{K}} | Cutter |
| {{V}} | Sélection |
| {{Return}} | Modifier les points du tracé sélectionné ; avec la Plume, terminer le tracé |
| {{Esc}} | Arrêter de dessiner ou de modifier les points ; poser l’outil |
| {{⌫}} | Reprendre le point le plus récent (Plume, Cutter) ; supprimer les points choisis |
| {{⌘A}} | Choisir tous les points, pendant la modification des points |
| {{⌘8}} | Convertir en tracé |
| {{⌥⌘U}} | Réunir |
| {{⌥⌘S}} | Soustraire |
| {{⌥⌘I}} | Intersection |
| {{⌥⌘X}} | Exclure le chevauchement |
| {{⌥⌘B}} | Construire avec les morceaux, et Terminer la construction |
| {{⌥⌘O}} | Vectoriser la bordure |

Tous les raccourcis de Bezzle sont sur la page [Raccourcis clavier](/docs/shortcuts.html).
