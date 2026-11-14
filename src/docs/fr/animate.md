---
title: Animer
nav: Animer
lede: Mets un design en mouvement. Pose ses calques le long d’une timeline, donne-leur des mouvements tout prêts, fais voler une caméra au-dessus du plan de travail en 2D et en 3D, et enregistre le film en vidéo, pendant que le design lui-même reste exactement tel qu’il est.
---

Animer est une quatrième façon de voir un design, à côté de Design, Prototype et Inspecter. Chaque plan de travail peut avoir un film : ses calques arrivent, se déplacent, grandissent, tournent et s’estompent avec le temps, et une caméra regarde le tout, de plus près, en roulis ou de biais. Tu fais le film en posant. Place la tête de lecture à un instant, puis déplace ou tourne un calque directement sur le canevas, et Bezzle garde cela comme une image clé. Entre les images clés, il calcule le mouvement.

Le design ne change jamais pendant que tu animes. Une image clé est gardée comme un écart par rapport au design : à telle distance à droite de l’endroit où se trouve le calque, tant de fois plus grand qu’il ne l’est. Modifie le design plus tard, et le film le suit.

::: figure animate
Une affiche devenue film : la caméra regarde le plan de travail de biais, et la timeline a une ligne pour elle et pour chaque calque qui bouge.
:::

## Le mode Animer {#animate-mode}

Choisis {Animer} dans le sélecteur en haut à droite de la fenêtre, appuie sur {{⌃A}}, ou choisis {Fenêtre › Animer}. L’info-bulle du sélecteur dit à quoi il sert : « Animer le design : ses calques et une caméra, pose après pose le long d’une timeline ».

Quand le design passe en mode Animer :

- **Le canevas devient du papier millimétré,** comme en mode Prototype, et les outils s’effacent : rien ne se dessine ici, la barre d’outils se vide donc et les touches des outils de dessin n’ont aucun effet.
- **Un plan de travail porte le film.** Il montre le film à la tête de lecture, à travers sa caméra. La vue glisse pour que ce plan de travail se trouve en entier au-dessus de la timeline.
- **La timeline monte** sur une carte au pied du canevas. Voir [La timeline](#timeline).
- **L’inspecteur montre le film :** {Mouvements} et {Film} quand rien n’est choisi, {Pose} en plus quand des calques sont choisis, {Caméra} quand la caméra est choisie.
- **Exporter… devient Lire.** Le bouton tout à droite de la barre du haut lit le film, et indique {Pause} pendant la lecture.

Appuie de nouveau sur {{⌃A}}, ou choisis {Design} dans le sélecteur, pour revenir au dessin. Le design est là comme tu l’as laissé.

### Quel plan de travail {#film-board}

Chaque plan de travail a son propre film. Animer se tourne vers le plan de travail de ce qui est sélectionné, sinon reste sur le film qu’il montrait en dernier, sinon prend le plan de travail le plus visible. Pour travailler sur le film d’un autre plan de travail, clique sur le nom de ce plan de travail, ou sur un endroit vide de celui-ci.

### Choisir et se déplacer {#picking}

- **Clique sur un calque** pour le choisir, comme un clic le choisit quand tu dessines : d’abord un groupe, et un double-clic descend d’un niveau à l’intérieur. Un {{⌘}} clic choisit le calque le plus en avant sous le pointeur, à quelque profondeur qu’il se trouve.
- **{{⇧}} clic** ajoute un calque à ce qui est choisi, ou l’en retire.
- **Fais glisser depuis un endroit vide** du plan de travail ou du papier à côté pour tracer un rectangle autour de calques : chaque calque qu’il touche est choisi.
- **Clique sur un nom dans la timeline** pour choisir ce calque ; un {{⇧}} clic l’ajoute.
- **Maintiens {{Space}} et fais glisser** pour déplacer la vue. Le zoom fonctionne comme toujours.
- **Appuie sur un film en cours de lecture** et il s’arrête, pour que tu puisses poser.

Les calques masqués et verrouillés ne se choisissent pas sur le canevas.

## Poser un calque {#posing}

Choisis un calque, place la tête de lecture à un instant (voir [La tête de lecture](#playhead)), et change le calque sur le canevas, avec les prises que le canevas a partout. Chaque changement est une image clé à la tête de lecture, créée sans rien demander.

| Pose | Sur le canevas | En maintenant une touche |
| --- | --- | --- |
| {Décalage} | Fais glisser le calque. Il se cale sur la place que le design lui donne. | {{⇧}} s’en tient à la direction où il est surtout allé ; {{⌘}} l’empêche de se caler |
| {Échelle} | Fais glisser un coin pour l’agrandir ou le réduire autour de son milieu, ou le milieu d’un côté pour un seul sens. Il se cale sur 100 %. | {{⌘}} l’empêche de se caler |
| {Rotation} | Fais glisser depuis juste à l’extérieur d’un coin. Les tours s’additionnent : deux tours font 720°. | {{⇧}} pour des pas de 15° |
| {Inclinaison} | Fais glisser depuis juste à l’extérieur du milieu du côté haut ou bas : le calque s’incline vers l’arrière ou vers l’avant en profondeur. Il se cale à plat. | {{⇧}} pour des pas de 15° |
| {Pivot} | Fais glisser depuis juste à l’extérieur du milieu du côté gauche ou droit : le calque pivote en profondeur. | {{⇧}} pour des pas de 15° |
| {Élévation} | Pendant que tu déplaces le calque, maintiens {{⌃|Alt}} et fais glisser vers le haut pour le rapprocher, vers le bas pour l’éloigner. Il se cale sur la page. | {{⇧}} pour des pas de dix points |

{Opacité} et {Flou} n’ont pas de poignée sur le canevas : règle-les sur la [carte Pose](#pose-card), ou donne au calque un [mouvement](#moves).

Les touches fléchées déplacent ce qui est choisi de 1 point, ou de 10 avec {{⇧}}. Plusieurs calques choisis sont posés ensemble.

{Inclinaison} et {Pivot} tapés sur la [carte Pose](#pose-card) pour plusieurs calques qui se trouvent ensemble les posent comme [un seul corps](/docs/looks.html#depth-body) à la tête de lecture, avec une image clé pour l’inclinaison et le pivot de chaque calque, et pour sa place, son élévation et sa rotation là où elles changent. Les poignées sur le canevas inclinent ou font pivoter un seul calque à la fois. Entre les images clés, chaque nombre va son propre chemin, si bien qu’un corps n’y est que presque rigide : groupe les calques pour qu’ils restent une seule chose d’un bout à l’autre.

> [!windows] Alt pour la profondeur
> Dans Bezzle pour Windows, appuie sur {{Alt}} une fois le glissement commencé pour élever le calque. Maintenue au moment d’appuyer, Alt fait ce qu’elle fait partout.

### La première pose est un mouvement entier {#first-pose}

Un calque qui n’a pas encore d’image clé n’a rien d’où partir. La première pose que tu lui donnes vient donc avec le design pour compagnie, et un seul glissement fait un mouvement entier :

- **Posé au début du film,** le calque part de là où tu l’as mis et rentre chez lui en volant, là où le design le place, en une demi-seconde. C’est ainsi que quelque chose arrive : tire-le sur le côté au début, et il arrive.
- **Posé plus tard,** le calque reçoit au début une image clé tel que le design le montre, et quitte sa place pour aller là où tu l’as mis, où il arrive à la tête de lecture.

Bezzle lit ensuite une fois le nouveau mouvement et ramène la tête de lecture, pour que tu voies ce que tu as fait. Relâche le calque là où le design le place, et rien n’est gardé.

### Le chemin que prend un calque {#way}

Un calque choisi qui se déplace montre son chemin sur le plan de travail : une ligne fine avec une graduation à intervalles de temps égaux, si bien que des graduations serrées signifient qu’il va lentement à cet endroit, et une perle à chaque image clé de {Décalage}, creuse là où le calque est chez lui. Fais glisser une perle pour déplacer l’endroit de cette image clé ; la tête de lecture va à l’image clé dès que tu la saisis.

### La carte Pose {#pose-card}

Quand des calques sont choisis, la carte {Pose} montre leur pose à la tête de lecture, au chiffre près. La ligne de la carte indique l’instant, en secondes.

::: fields
- **Décalage** : {X} et {Y}, en points depuis l’endroit où le design place le calque.
- **Échelle** : en pour cent de sa taille dans le design, de 0,1 à 10 000.
- **Rotation** : en degrés, de −3 600 à 3 600, si bien qu’un calque peut faire dix tours sur lui-même.
- **Opacité** : combien il se voit, de 0 à 100 %.
- **Flou** : de 0 à 200.
- **Élévation** : en points au-dessus de la page, ou sous la page en dessous de 0, de −4 000 à 4 000.
- **Inclinaison**, **Pivot** : en degrés en profondeur, de −360 à 360.
- **Tracé** et **Forme** : pour les lignes et les formes, voir [Lignes et formes](#shapes).
:::

Taper un nombre, ou faire glisser sur son champ, pose le calque comme le fait un glissement sur le canevas. Avec plusieurs calques choisis, un champ montre le nombre qu’ils ont en commun, ou un tiret là où ils diffèrent.

Une perle à côté de chaque ligne est l’image clé de cette propriété à la tête de lecture :

| La perle | Signifie | Un clic |
| --- | --- | --- |
| Pâle | Cela ne change jamais dans le film. | Pose une image clé ici, en tenant la valeur telle qu’elle est. Son info-bulle : « Poser une image clé ici ». |
| Un anneau | Cela change dans le film, mais n’a pas d’image clé à cet instant. | Pose une image clé ici, à la valeur atteinte. |
| Pleine | Une image clé ici. | Retire l’image clé. Son info-bulle : « Une image clé ici. Cliquez pour la retirer. » |

### Tenir et supprimer {#keys}

- **Tenir ici** pose une image clé à la tête de lecture pour ce qui est choisi, en tenant tout tel que c’est à cet instant, pour que ce qui vient après parte de là. Appuie sur {{K}}, clique sur la perle dans l’en-tête de la timeline, ou choisis {Tenir ici} dans le menu contextuel du canevas.
- **{{⌫}}** retire les images clés choisies dans la timeline, sinon les images clés à la tête de lecture de ce qui est choisi. En mode Animer, cette touche ne supprime jamais de calque.
- **{Supprimer l’image clé}**, **{Supprimer le mouvement}** et, quand rien n’est choisi, **{Supprimer tout le mouvement}** sont dans le menu contextuel du canevas, avec {Tenir ici}, les sept [allures](#pace) et {Lire}.

Les commandes qui agissent sur les calques restent actives, comme {Édition › Dupliquer} et le menu Objet. Couper, coller et supprimer s’appliquent au film.

## Mouvements {#moves}

La carte {Mouvements} donne à ce qui est choisi une façon toute prête d’arriver ou de partir, en un clic. Sa ligne dit qui la reçoit : le nom d’un calque, « 3 calques », ou {Tout} quand rien n’est choisi, c’est-à-dire tous les calques du plan de travail qui ne sont ni masqués ni verrouillés.

Choisis {Arrive} ou {Part}, puis clique sur l’une des neuf puces. Chacune se joue en petit pendant que tu la pointes.

| Mouvement | À l’arrivée | Dure |
| --- | --- | --- |
| {Fondu} | Apparaît en fondu. | 0,4 s |
| {Montée} | Monte de 28 points jusqu’à sa place en apparaissant en fondu. | 0,5 s |
| {Chute} | Tombe de 36 points plus haut, en fondu, et se pose avec un ressort. | 0,6 s |
| {Glisser} | Glisse depuis au-delà du côté le plus proche du plan de travail. | 0,5 s |
| {Pop} | Grandit à partir de 60 % en apparaissant en fondu, avec un ressort. | 0,6 s |
| {Zoom} | Redescend de 135 % en apparaissant en fondu. | 0,5 s |
| {Bascule} | Se redresse depuis une position couchée vers l’arrière, à 80° en profondeur, en fondu, avec un petit ressort. | 0,6 s |
| {Netteté} | Sort d’un flou en apparaissant en fondu. | 0,5 s |
| {Dessin} | Son contour se dessine, comme à la main. Un calque sans contour à dessiner apparaît en fondu. | 0,9 s |

Un mouvement commence à la tête de lecture. À l’arrivée, le calque se pose à sa place ; avec {Part}, le même mouvement se joue dans l’autre sens, du design vers l’ailleurs, en prenant de la vitesse. Les images clés du même genre que le calque avait déjà dans cet intervalle cèdent la place au mouvement. Bezzle le lit ensuite une fois.

**L’un après l’autre** règle combien de temps chaque calque attend après le précédent, de 0 à 1 seconde, quand plusieurs reçoivent un mouvement : 0,06 seconde au départ. Ils partent dans l’ordre où se lit le plan de travail, du haut vers le bas et dans la largeur.

Un mouvement est fait d’images clés ordinaires. Ensuite, déplace-les, change leur allure ou continue de poser le calque à partir de là, comme pour n’importe quelles autres.

## La caméra {#camera}

Chaque film est vu à travers une caméra. Au repos, elle regarde tout le plan de travail à la verticale, et le film montre ce que montre le design. Donne-lui des images clés, et elle s’approche, parcourt le plan de travail, fait un roulis ou regarde la scène de biais.

Choisis la caméra par la petite caméra au-dessus du coin supérieur droit du plan de travail, ou par sa ligne dans la timeline, la première. Clique de nouveau dessus pour la lâcher. Tant que la caméra est choisie, c’est le plan de travail lui-même que tu as en main.

### La caméra sur le canevas {#camera-canvas}

| La caméra | Sur le canevas |
| --- | --- |
| {Visée} | Fais glisser l’image : le point sous le pointeur reste sous lui. Elle se cale sur le milieu du plan de travail. {{⇧}} s’en tient à un seul sens. |
| {Zoom} | Fais glisser un coin. Il se cale sur 1×. |
| {Roulis} | Fais glisser depuis juste à l’extérieur d’un coin. |
| {Inclinaison}, {Pivot} | Fais glisser depuis juste à l’extérieur du milieu d’un côté : la scène s’incline vers l’arrière, ou pivote, sous la caméra. |

{mac:Sur un trackpad, pince pour zoomer la caméra et fais tourner deux doigts pour lui donner du roulis.}{win:Sur un pavé tactile, pince au-dessus du film pour zoomer la caméra. Faire tourner deux doigts ne lui donne pas de roulis : Windows ne signale aucun geste de ce genre à une app.}

Quand la caméra est choisie, les touches fléchées déplacent l’endroit qu’elle regarde. Un clic sur un calque choisit le calque, et lâche la caméra.

Une caméra posée pour la première fois au début du film vole jusqu’au plan de travail entier sur la durée du film ; posée pour la première fois plus tard, elle vole jusqu’à sa pose depuis le plan de travail entier. Comme pour la [première pose](#first-pose) d’un calque, un seul glissement fait un vol entier.

### La carte Caméra {#camera-card}

La ligne de la carte indique à quel point la caméra est proche, par exemple `×1.5`.

::: fields
- **Le pavé** : fais glisser dedans pour incliner la scène vers l’arrière et la faire pivoter sous la caméra. Il se cale sur la verticale ; {{⇧}} va par pas de 15°. Double-clique dessus pour regarder de nouveau à la verticale. {mac:Tant que la caméra floute, une ligne pointillée sur le pavé montre où le plan de travail est net. }Son info-bulle : « Faites glisser pour basculer la scène vers l’arrière et la faire tourner sous la caméra. Double-cliquez pour regarder à la verticale. »
- **Zoom** : de 0,1× à 16×.
- **Visée** : {X} et {Y}, en points depuis le milieu du plan de travail.
- **Roulis** : en degrés.
- **Inclinaison**, **Pivot** : en degrés, de −80 à 80.
- **Voir tout le plan de travail** : remet la caméra au repos à la tête de lecture : tout le plan de travail, à la verticale{mac:, sans toucher à la mise au point ni au flou}.
:::

Chaque ligne a sa perle d’image clé, comme sur la [carte Pose](#pose-card). {mac:Sous {Voir tout le plan de travail}, {Mise au point} et {Flou} règlent la [mise au point](#camera-focus) de la caméra.}

### Faire voler la caméra ici {#fly}

Quand des calques sont choisis, {Faire voler la caméra ici} envoie la caméra les regarder à partir de la tête de lecture : d’aussi près qu’il faut pour les montrer en entier avec un tiers de place en plus autour d’eux, jamais de plus loin que le plan de travail entier et jamais de plus près que 8×. Son roulis, son inclinaison et son pivot restent tels qu’ils sont. Bezzle montre le vol une fois. Son info-bulle : « À partir de la tête de lecture, la caméra regarde la sélection, et y vole depuis là où elle était ».

### La profondeur sous la caméra {#camera-depth}

La caméra repose là d’où la scène du plan de travail est vue dans le design (voir [Un plan de travail est une scène](/docs/looks.html#perspective)), si bien qu’un film dont la caméra est au repos a le même aspect que le design. Incline la caméra ou fais-la pivoter, et les calques tenus au-dessus de la page montrent leur hauteur, les plus proches passant devant les plus éloignés quand la caméra bouge. Des images clés d’{Élévation} soulèvent un calque de la page avec le temps.

Ce qui se voit au-delà des bords du plan de travail quand la caméra les voit, c’est le {Fond} du film, sur la [carte Film](#film-card).

### La mise au point de la caméra {#camera-focus}

::: mac
Une caméra peut être nette à une distance et flouter ce qui se trouve plus près ou plus loin, comme un objectif : une carte élevée vers l’œil devient floue tandis que la page reste nette, ou la mise au point passe du fond d’une scène à son avant. Deux nombres au pied de la [carte Caméra](#camera-card) la règlent :

- **Flou** : combien la caméra floute, en points de flou pour chaque centaine de points qui sépare une chose de la mise au point, de 0 à 100. À 0, comme au début de chaque film, rien n’est flou. Une carte à cent points de là, sous un {Flou} de 4, est aussi floue que son propre {Flou} de 4 la rendrait, et rien n’est flouté de plus de 200 points. Son info-bulle : « Points de flou pour chaque centaine de points qui sépare une chose de la mise au point ».
- **Mise au point** : ce qui est net, en points plus près de l’œil que l’endroit que regarde la caméra ; en dessous de 0, plus loin. À 0, la page est nette là où regarde la caméra. La mise au point suit la caméra, si bien qu’une caméra qui s’approche reste nette sur ce qu’elle regarde. Son info-bulle : « La caméra est nette à ce nombre de points en avant de l’endroit qu’elle regarde. En dessous de 0, plus loin. »

Les deux reçoivent des images clés comme les autres nombres de la caméra, chacun avec sa perle d’image clé, et la ligne de la caméra dans la timeline, une fois ouverte, a une ligne pour chacun. Un plan de travail que la caméra voit de biais est net le long d’une ligne et plus doux de part et d’autre ; tant que la caméra floute, cette ligne est pointillée sur le pavé de la carte.

Quand des calques sont choisis, dans un film qui a de la profondeur (un calque élevé, incliné ou pivoté, ou la caméra inclinée ou pivotée), une carte sous {Faire voler la caméra ici} propose {Faire la mise au point ici}. Elle pose à la tête de lecture une image clé de la mise au point là où se trouvent alors les calques choisis, à mi-chemin entre le plus proche et le plus éloigné s’il y en a plusieurs, et Bezzle montre le changement de netteté une fois. Si la caméra ne floute rien à la tête de lecture, elle reçoit aussi un {Flou} de 4 ; une caméra qui n’a jamais flouté en reçoit une seule image clé, qui vaut pour tout le film, si bien qu’ensuite seule la mise au point bouge. Pour faire passer la mise au point d’une carte au fond à une carte devant, choisis celle du fond et clique sur {Faire la mise au point ici}, puis place la tête de lecture plus loin et fais de même avec celle de devant. Son info-bulle : « À partir de la tête de lecture, la caméra fait la mise au point sur la sélection, et ce qui se trouve plus près ou plus loin devient flou ».

Le canevas, [Enregistrer en vidéo](#movie) et les instants que dessine un assistant montrent le même flou. {Voir tout le plan de travail} laisse la mise au point et le flou tels qu’ils sont. Bezzle 1.7 et les versions antérieures gardent les deux sortes d’images clés et montrent le film sans le flou.
:::

> [!windows]
> Bezzle pour Windows garde les images clés de {Mise au point} et de {Flou} de la caméra et montre leurs lignes dans la timeline, mais lit un tel film net partout : sa [carte Caméra](#camera-card) n’a pas encore de lignes pour eux, ni {Faire la mise au point ici}.

## Lignes et formes {#shapes}

Les rectangles, les ellipses, les lignes et les tracés ont deux lignes de plus sur la carte {Pose}.

### Tracé {#draw}

{Tracé} est la part du contour qui est dessinée, d’un pourcentage à un autre : `0% → 100%`, c’est tout le contour, `0% → 0%`, rien. Donne au second nombre des images clés de 0 à 100, et la ligne se dessine d’elle-même ; donne ensuite des images clés au premier, et elle est retirée depuis son début, comme une ligne qu’on efface. La puce {Dessin} de la carte [Mouvements](#moves) fait la première de ces deux choses en un clic.

### Forme {#shape}

{Forme} déplace les points mêmes de la forme à la tête de lecture, si bien qu’un contour devient un autre avec le temps. Clique sur {Modifier les points} à côté, ou double-clique sur une forme choisie seule : ses points te viennent en main, comme quand tu modifies un tracé dans le design. Fais-les glisser, ou leurs poignées ; les touches fléchées déplacent ceux qui sont choisis. Chaque changement est une image clé de {Forme} à la tête de lecture. {Terminé}, {{Return}}, {{Esc}} ou un double-clic à l’écart des points les repose. L’info-bulle de la puce : « Déplacez ses points sur la zone de travail pour lui donner une autre forme à la tête de lecture ».

Les images clés de {Forme} suivent le design. Redimensionne le calque dans le design, et ce que ses images clés font à son contour grandit avec lui. Donne d’autres angles à un rectangle, et ses images clés remodèlent le nouveau contour comme elles remodelaient l’ancien. Retourne le calque, et ses images clés sont retournées avec lui. Chacune de ces choses se fait en une seule étape avec la modification qui l’a provoquée.

Avec ses points en main, une forme peut aussi recevoir plus de points ou moins, comme dans le design : clique sur le contour pour y ajouter un point, et appuie sur {{⌫}} pour retirer ceux qui sont choisis. Cela change le contour à la tête de lecture seulement, jamais celui du design. L’image clé garde alors un contour à elle, et entre deux images clés qui n’ont pas les mêmes points, Bezzle apparie lui-même les points, de façon que chacun aille le moins loin possible.

{De…}, à côté de {Modifier les points}, donne à la forme le contour d’une autre forme à la tête de lecture, si bien qu’une étoile devient un cercle : choisis l’étoile, place la tête de lecture plus loin, clique sur {De…} et choisis le cercle. Le menu nomme les autres formes du plan de travail du film, la plus en avant en premier, et chacune {mac:est montrée sur le canevas}{win:s’allume dans la liste des calques} pendant que tu pointes son nom. Le contour arrive aussi grand et aussi tourné que l’autre forme l’est sur le plan de travail, autour du milieu de la forme qui le reçoit. L’info-bulle de la puce : « Donnez-lui le contour d’une autre forme à la tête de lecture ». Elle reste pâle quand le plan de travail n’a pas d’autre forme, ou que plusieurs calques sont choisis.

Bezzle 1.7 et les versions antérieures montrent le contour propre au design à une image clé qui en garde un avec d’autres points, et gardent l’image clé.

{Modifier les points} vaut pour un seul calque à la fois.

## Remplissages par shader {#shader-inputs}

Un calque rempli par les shaders d’une page web (voir [Remplissages par shader](/docs/looks.html#shader-fills)) tourne pendant que le film est lu, à partir de son {Instant} et à sa {Vitesse}. Quand un tel calque est choisi, une carte {Shader} liste les entrées que prennent ses shaders, chacune sous le nom que la page lui a donné et chacune avec une perle d’image clé : un champ de couleur pour une entrée qui est une couleur, des champs numériques pour les autres. Donne des images clés à une entrée, et le remplissage change au fil du film comme tu le décides : une lueur qui gagne en éclat, un motif qui change de couleurs.

::: mac
Un remplissage qui s’appuie sur ses propres images précédentes, comme des traînées ou une simulation, est joué vers l’avant par pas depuis là où en était la page quand il est arrivé, chaque pas avec ses entrées telles que le film les a à l’instant de ce pas. Ainsi, un instant du film montre toujours la même image, quelle que soit la façon dont la tête de lecture y est arrivée. La lecture dessine un pas par image ; un saut loin en avant dessine d’abord chaque pas intermédiaire, ce qui peut prendre un moment. Après 36 000 pas, dix minutes d’une page qui dessinait soixante fois par seconde, un tel remplissage reste immobile.
:::

> [!windows]
> Dans Bezzle pour Windows, un remplissage par shader qui dessine en plusieurs étapes montre son image dans un film, immobile : voir [Remplissages par shader](/docs/looks.html#shader-fills).

## Couleurs, bordures, angles et ombres {#looks}

::: mac
L’apparence d’un calque peut elle aussi changer au fil d’un film : un bouton passe du gris à sa couleur d’accent, l’ombre d’une carte s’accentue quand elle se soulève, les angles d’un carré s’arrondissent. Quand des calques sont choisis, les cartes que le design a pour leur apparence, {Angles}, {Remplissage}, {Bordure} et {Ombre}, se tiennent sous la carte {Pose} et montrent les calques tels qu’ils apparaissent à la tête de lecture. Change quelque chose sur l’une d’elles, en faisant glisser sur sa ligne, dans le menu de remplissage ou en tapant, et le changement est une image clé à la tête de lecture, comme faire glisser un calque donne une image clé à {Décalage}. Le design garde sa propre apparence.

- **Remplissage** : sa couleur, ou les couleurs de son dégradé et l’endroit où chacune se trouve le long de celui-ci. La couleur d’un texte reçoit des images clés de la même façon, et recouvre les couleurs que ses lettres ont en propre.
- **Bordure** : sa couleur ou les couleurs de son dégradé, et son épaisseur. Une ligne a sa carte {Ligne} pour cela.
- **Angles** : les quatre angles d’un rectangle, chacun séparément.
- **Ombre** : sa couleur, sa place, son flou et son étendue.

Un calque qui a plusieurs remplissages, bordures ou ombres a une carte pour chacun, comme dans le design. Comme pour [la première pose](#first-pose), la première image clé d’une apparence vient avec le design pour compagnie, si bien qu’un seul changement fait un mouvement entier. Entre deux images clés, les couleurs se mélangent de façon régulière pour l’œil.

Chaque carte a une perle pour son image clé à la tête de lecture, comme les lignes de la [carte Pose](#pose-card) : pâle tant que l’apparence ne change jamais dans le film, un anneau là où elle change mais n’a pas d’image clé à cet instant, pleine sur une image clé. Un clic y pose une image clé qui tient l’apparence telle qu’elle est, ou retire l’image clé.

Sur le canevas, un rectangle choisi montre les pastilles à l’intérieur de ses angles pendant que tu le pointes, comme dans le design (voir [Arrondir un rectangle sur le canevas](/docs/shapes.html#corner-dots)). Fais-en glisser une pour arrondir tous les angles à la tête de lecture, ou maintiens {{⌥}} pour cet angle seul. Les pastilles s’affichent pour un seul rectangle choisi qui mesure au moins 48 points de large et de haut à l’écran. Un rectangle à l’intérieur d’un groupe que le film dessine comme une seule chose, par exemple un groupe avec des images clés à lui, un masque ou un groupe estompé, n’en montre aucune : sa carte {Angles} l’arrondit.

Une image clé change une couleur en une couleur, et les couleurs d’un dégradé en autant de couleurs. Ce dont l’apparence est faite reste tel que le design l’a, et n’est pas sur les cartes en mode Animer :

- **Ce avec quoi un calque est peint** : une seule couleur, un dégradé, une image ou un shader, combien de couleurs a un dégradé, et la ligne qu’il suit sur le calque.
- **Quelles apparences il a** : ajouter un remplissage, une bordure ou une ombre, en retirer, en désactiver, et leur ordre.
- **Le reste d’une apparence** : les styles, les modes de fusion, les tirets, la position d’une bordure, le fait qu’une ombre tombe à l’intérieur ou à l’extérieur, et les angles lisses.

Change l’une de ces choses en Design, et le film continue à partir de là. Une couleur que tu as choisie à une image clé reste cette couleur, quoi que fasse le design par la suite : c’est une couleur à elle, pas une couleur nommée, et elle ne passe pas en sombre avec un plan de travail sombre. Une épaisseur, un angle, la place, le flou et l’étendue d’une ombre et la place d’une couleur d’un dégradé sont gardés sous la forme de leur écart par rapport à ceux du design, et l’accompagnent donc. Les images clés que Bezzle a posées pour compagnie suivent le design en tout.

- **Les images clés de ce que le design n’a plus** ne changent rien : un remplissage qui a été retiré, une couleur devenue un dégradé, un dégradé qui a reçu plus ou moins de couleurs. Elles attendent, pâles sur la timeline, jusqu’à ce que le design l’ait de nouveau.
- **Un rectangle dont {Forme} a des images clés** garde les angles du design d’un bout à l’autre. Il n’a ni carte {Angles} ni pastilles en mode Animer, et les images clés de {Angles} qu’il avait avant attendent de la même façon.
- **Pointer un préréglage** ne l’essaie pas sur le film, contrairement au design.

Dans la timeline, la ligne d’un calque ouverte par son chevron a une ligne pour chaque apparence qui a des images clés : {Remplissage}, {Dégradé}, {Bordure}, {Dégradé de bordure}, {Taille de bordure}, {Ombre} et {Angles}, ou, quand le calque est une ligne, {Ligne}, {Dégradé de ligne} et {Taille de ligne}. De plusieurs remplissages, bordures ou ombres, le deuxième à partir du bas et ceux du dessus portent leur numéro, par exemple {Remplissage 2}. Leurs images clés se font glisser, reçoivent une allure et se retirent comme toutes les autres, et un [rectangle sur des images clés](#keys-box) prend chacune sur sa propre ligne. {Tenir ici} tient les apparences qui ont déjà des images clés, {{⌥←}} et {{⌥→}} s’arrêtent à leurs images clés, et {Supprimer le mouvement} les emporte avec le reste.

Bezzle 1.7 et les versions antérieures montrent l’apparence du design d’un bout à l’autre, et gardent les images clés.
:::

> [!windows]
> Dans Bezzle pour Windows, seul un assistant IA peut donner des images clés à une apparence pour l’instant (voir [Assistants IA](/docs/ai.html#tools-animate)) : Animer n’y a ni cartes, ni perles, ni pastilles d’angle pour les apparences. Un film dont les apparences ont des images clés s’y lit comme sur un Mac. La timeline a une ligne pour chaque apparence qui a des images clés, dont les images clés se font glisser, reçoivent une allure et se retirent sans toucher aux autres, et {Tenir ici} tient aussi ces apparences.

## La timeline {#timeline}

La timeline est une carte au pied du canevas : une règle des secondes au-dessus d’une feuille lignée, avec d’abord une ligne pour la caméra, puis une pour chaque calque qui bouge, le plus en avant en premier. Elle montre de quatre à sept lignes et défile quand il y en a davantage.

En haut, depuis la gauche : le bouton de lecture, l’horloge avec l’instant de la tête de lecture en secondes, la perle {Tenir ici}, les sept [allures](#pace), et un bouton rond qui dit si le film est lu en boucle ou une fois.

### La tête de lecture {#playhead}

- **Appuie ou fais glisser sur la règle** pour y placer la tête de lecture{mac:, ou fais-la glisser par sa propre ligne, qui descend à travers la feuille. Un clic sur un endroit vide de la feuille l’y place aussi}{win:, ou sur un endroit vide de la feuille}. Le plan de travail montre cet instant. La tête de lecture se cale sur les images clés au passage, et va sinon par vingtièmes de seconde ; {{⌥}} la rend plus fine, par centièmes, et {{⌘}} la libère.
- **{{←}} et {{→}}** reculent ou avancent d’une image, un soixantième de seconde, quand rien n’est choisi, de dix avec {{⇧}}. {{,}} et {{.}} font de même quel que soit ce qui est choisi.
- **{{⌥←}} et {{⌥→}}** vont à l’image clé précédente ou suivante.
- **{{Home}} et {{End}}** vont au début et à la fin du film.

### Lignes et perles {#lines}

Chaque image clé est une perle sur sa ligne. Une perle est pleine là où le calque s’écarte du design et creuse là où il est tel que dans le design, si bien qu’une ligne se lit comme ce qu’elle fait : s’en aller, et rentrer. Une perle est grise là où Bezzle l’a posée pour compagnie et où tu n’y as pas touché.

- **Clique sur une perle** pour choisir son image clé ; la tête de lecture y va. Un {{⇧}} clic en choisit davantage, ou moins.
- **Fais glisser une perle** pour déplacer son image clé dans le temps. Elle se cale sur les autres images clés et sur la tête de lecture, et va sinon par vingtièmes de seconde, par centièmes avec {{⌥}}.
- **Fais glisser la bande d’une ligne,** entre ses perles, pour déplacer tout le mouvement.
- **Double-clique sur une ligne** pour y poser une image clé.
- **Ouvre une ligne** par son chevron pour voir une ligne pour chaque chose qui change : {Décalage}, {Échelle}, {Opacité} et ainsi de suite, et chaque entrée d’un shader, et chaque [apparence](#looks) qui a des images clés. L’allure entre deux images clés y est dessinée sous forme de courbe.
- **Fais un clic droit sur une perle** pour les allures et {Supprimer l’image clé} ; **fais un clic droit sur une ligne** pour {Ajouter une image clé ici} et {Supprimer le mouvement}, ou {Supprimer le mouvement de la caméra}.

### Plusieurs images clés à la fois {#keys-box}

::: mac
Fais glisser depuis un endroit vide de la feuille, à l’écart des perles et des bandes, pour tracer un rectangle sur des images clés. Chaque image clé qu’il touche est choisie à mesure que le rectangle grandit. Avec les images clés, leurs calques sont choisis, ou la caméra là où seules ses images clés sont prises. Sur la ligne d’un calque, une perle vaut pour toutes les images clés du calque à cet instant ; sur une ligne ouverte, pour l’image clé de cette seule chose.

- **{{⇧}}** ajoute à ce qui est choisi : le rectangle choisit les images clés qu’il prend et qui n’étaient pas choisies, et lâche celles qui l’étaient.
- **{{Esc}}** pendant le glissement rend ce qui était choisi avant.
- **Au-delà du bord** d’une timeline [regardée de plus près](#timeline-zoom), la feuille avance doucement sous le rectangle, et le rectangle garde ce qu’il a pris et qui n’est plus en vue.

Les images clés choisies vont alors ensemble : fais glisser n’importe laquelle pour les déplacer toutes dans le temps, choisis une [allure](#pace) pour toutes, ou appuie sur {{⌫}} pour les retirer. Un clic sur un endroit vide les lâche et y place la tête de lecture ; avec {{⇧}} maintenue, il ne change rien.
:::

> [!windows]
> Bezzle pour Windows n’a pas encore de rectangle sur les images clés. Là, un {{⇧}} clic choisit plusieurs images clés, et un glissement depuis un endroit vide de la feuille déplace la tête de lecture.

### Allure {#pace}

L’allure est la façon dont un calque va vers une image clé : régulièrement, en douceur, avec un ressort. Elle appartient à l’image clé à laquelle il arrive. Choisis l’une des sept puces dans l’en-tête de la timeline, ou dans un menu contextuel, pour les images clés choisies dans la timeline, sinon pour les images clés à la tête de lecture de ce qui est choisi. Les puces restent pâles tant qu’il n’y a aucune image clé à laquelle donner une allure.

| Allure | Comment il arrive |
| --- | --- |
| {Auto} | Lue d’après les images clés qui l’entourent : le mouvement traverse sans s’arrêter une image clé au-delà de laquelle il continue, et s’arrête là où il finit ou fait demi-tour. Chaque image clé commence avec elle. |
| {Doux} | Part en douceur et arrive en douceur. |
| {Prend de la vitesse} | Part en douceur et arrive à pleine vitesse. |
| {Se pose} | Part à pleine vitesse et arrive en douceur. |
| {Régulier} | La même vitesse tout du long. |
| {Ressort} | Dépasse un peu l’image clé et vient se poser dessus. |
| {Maintien} | Reste comme c’était jusqu’à l’image clé, puis y est d’un coup. |

**Le rebond** dit de combien un ressort dépasse son image clé avant de se poser, de 0 à 100 %. Un ressort a 30 % tant que tu ne dis pas autre chose. Quand il y a des ressorts parmi les images clés en main, l’en-tête de la timeline montre {Rebond} avec son nombre à côté des allures : fais glisser dessus, tape, ou change-le pas à pas avec les touches fléchées. Son info-bulle : « De combien un ressort dépasse son image clé avant de se poser ». La petite courbe de la puce {Ressort} choisie montre jusqu’où iront les ressorts. {mac:Ou fais glisser cette puce latéralement, comme un cadran : elle marque un arrêt à 30 % au passage. Son info-bulle : « Ressort. Faites glisser latéralement pour régler son rebond. »}

Chaque ressort en main reçoit le même rebond, en une seule étape de {Édition › Annuler}{mac:, nommée {Rebond}} ; les images clés d’une autre allure restent telles qu’elles sont. Choisir {Ressort} pour des images clés garde le rebond qu’a un ressort parmi elles, et le donne aux autres. Sur une timeline étroite, {mac:le nombre cède la place, et la puce seule règle le rebond}{win:le nombre reste sans son nom}.

### Où finit le film {#film-end}

Un drapeau sur la règle marque la fin du film. Un film dure aussi longtemps que ses images clés : il finit à la demi-seconde qui suit la dernière, et dure au moins 2 secondes. Le drapeau est creux tant qu’il suit les images clés.

Fais glisser le drapeau pour régler toi-même la durée. Il se cale sur la dernière image clé, et va sinon par quarts de seconde. Une fois réglé, le drapeau est plein, et la feuille est ombrée au-delà : les images clés qui s’y trouvent sont gardées mais ne sont pas lues. Double-clique sur le drapeau pour qu’il suive de nouveau les images clés. Son info-bulle : « Fin du film. Faites glisser pour régler sa durée ; double-cliquez pour qu’il suive les images clés. »

### Regarder de plus près {#timeline-zoom}

La timeline montre d’abord le film entier. Pour travailler sur un court passage d’un long film, regarde-le de plus près :

::: mac
- **Pince** au-dessus des lignes de la timeline. Elle se rapproche autour de l’instant sous le pointeur, instant qui reste où il est. Quand tu reviens en arrière en pinçant, elle se cale sur le film entier, avec un petit retour du trackpad.
- **Déplace deux doigts latéralement** pour avancer le long du film. Le mouvement continue sur sa lancée comme une page qu’on fait défiler, et s’arrête aux extrémités du film. Vers le haut et vers le bas, les lignes défilent, comme toujours.
- **Touche deux fois avec deux doigts** pour revoir d’un coup le film entier ou, depuis le film entier, pour regarder quatre fois plus près.
- **Avec une souris,** tourne la molette en maintenant {{⌘}}, {{⌥}} ou {{⌃}} pour regarder de plus près, comme sur le canevas, et en maintenant {{⇧}} pour avancer le long du film.

Un pincement ou deux doigts qui commencent au-dessus des lignes appartiennent à la timeline jusqu’à ce que tu les lèves. Commencés ailleurs, ils appartiennent au canevas.
:::

::: win
- **Tourne la molette en maintenant {{Ctrl}}** au-dessus des lignes de la timeline ou de sa règle, ou pince à cet endroit sur un pavé tactile. Elle se rapproche autour de l’instant sous le pointeur, instant qui reste où il est, comme le canevas quand il zoome. Quand tu t’éloignes, elle s’arrête au film entier.
- **Tourne la molette en maintenant {{Shift}},** ou latéralement, pour avancer le long du film. Elle s’arrête aux extrémités du film. Vers le haut et vers le bas, les lignes défilent, comme toujours.
- **Double-clique sur le trait sous les lignes** pour revoir d’un coup le film entier.
:::

La règle se garnit à mesure que tu t’approches, d’un nombre par minute jusqu’à un nombre tous les vingtièmes de seconde, avec un trait pour chaque centième. Au plus près, un centième de seconde fait une douzaine de points de large. Un trait sous les lignes montre quelle partie du film est en vue.

- **La tête de lecture reste en vue.** Envoie-la à un instant hors de vue, et la timeline y va avec elle. Un film dont la lecture sort de la partie en vue tourne la page.
- **Un glissement va au-delà du bord.** Fais glisser la tête de lecture, une perle, la bande d’une ligne ou la fin du film au-delà de l’un ou l’autre bout de ce qui se voit, et la feuille avance doucement dessous, d’autant plus vite que tu la tiens loin au-dehors.

Ce rapprochement ne concerne que toi : il ne fait pas partie du design et n’est pas une étape dans {Édition › Annuler}. Le film d’un autre plan de travail est d’abord vu en entier.

## Lire le film {#playing}

| Pour | Fais ceci |
| --- | --- |
| Lire, ou arrêter | Appuie brièvement sur {{Space}}, clique sur le bouton de lecture de la timeline, ou sur {Lire} en haut à droite de la fenêtre |
| Lire depuis le début | {{Return}}, ou {Fenêtre › Lire le film} ({{⌘Return}}) |
| Arrêter | {{Esc}} |

Le film est lu là où il se trouve, sur son plan de travail, en boucle ou une fois, comme le disent le bouton rond dans l’en-tête de la timeline et la [carte Film](#film-card). Tant que tu es en mode Animer, {Fenêtre › Lire le film} prend la place de {Lire le prototype}.

## La carte Film {#film-card}

La carte {Film} est dans l’inspecteur quel que soit ce qui est choisi. Sa ligne indique la durée du film.

::: fields
- **Durée** : en secondes, de 0,25 à 600, par quarts de seconde. La régler fixe la fin du film, comme le fait de faire glisser le drapeau ; {Suivre les images clés} apparaît alors à côté, et laisse de nouveau le film durer aussi longtemps que ses images clés.
- **En boucle**, **Une fois** : si le film recommence quand il atteint sa fin, ou s’y arrête.
- **Fond** : la couleur qui se voit au-delà des bords du plan de travail quand la caméra les voit. Clair sous un plan de travail clair et sombre sous un plan de travail sombre, jusqu’à ce que tu choisisses.
- **1×**, **2×**, **3×** : combien de pixels une vidéo a pour chaque point du plan de travail.
- **30**, **60** : les images par seconde de la vidéo.
- **Enregistrer en vidéo…** : voir ci-dessous. La ligne au-dessus dit ce que sera la vidéo, par exemple « 2880 × 1800 pixels, 60 par seconde ».
:::

## Enregistrer en vidéo {#movie}

{Enregistrer en vidéo…} sur la carte {Film} enregistre le film en vidéo MP4{win:, en H.264, qui se lit partout}. Choisis où la garder ; le bouton se remplit à mesure que la vidéo se fait, et indique {Arrêter l’enregistrement} pendant ce temps. Quand c’est fini, Bezzle montre la vidéo {mac:dans le Finder}{win:dans l’Explorateur}.

::: mac
Sous la taille et les images par seconde, la carte {Film} a le type de vidéo : {H.264} ou {HEVC 10 bits}. H.264 se lit partout, et c’est ce qu’est une vidéo tant que tu n’as pas choisi. Un large dégradé sombre, une ombre diffuse ou un fondu lent peuvent y montrer des bandes, puisque chacune de ses couleurs a 256 paliers ; HEVC en 10 bits a des paliers quatre fois plus petits et les garde lisses, et se lit sur les appareils Apple et dans la plupart des navigateurs. L’info-bulle le dit aussi : « H.264 se lit partout. HEVC en 10 bits garde lisses les dégradés doux, les ombres diffuses et les fondus lents, là où H.264 montre des bandes, et se lit sur les appareils Apple et dans la plupart des navigateurs. » Bezzle se souvient du choix, comme il se souvient de la taille et des images par seconde.

Sur un Mac qui ne peut pas faire une telle vidéo, Bezzle dit « Ce Mac ne peut pas enregistrer une vidéo de ce type. » et « Enregistrez-la plutôt en H.264. »
:::

- **Aussi nette que le design.** Chaque image de la vidéo est dessinée à partir du design lui-même à la taille de la vidéo, si bien que le texte et les formes restent nets, si près que vienne la caméra.
- **Jusqu’à la 4K.** Le côté le plus long de la vidéo fait 3 840 pixels au plus. Un grand plan de travail à 3× reçoit autant de pixels qu’il en tient dans cette limite.
- **Jusqu’à une heure.** Un film plus long n’est pas enregistré : « Ce film est trop long pour être enregistré en vidéo. Une vidéo dure une heure au plus. Donnez au film une durée plus courte ou supprimez les images clés qui viennent plus tard. »
- **Faite pour tourner en boucle.** Un film lu en boucle est enregistré sans sa dernière image, qui est de nouveau la première, si bien que la vidéo boucle sans à-coup. Un film lu une fois finit sur son dernier instant.
- **Entière ou pas du tout.** La vidéo est écrite à part et n’est mise à sa place qu’une fois entière. Arrête l’enregistrement, et rien ne reste.

## Les touches en mode Animer {#keyboard}

| Touche | Ce qu’elle fait |
| --- | --- |
| {{⌃A}} | {Animer}, et retour à Design |
| {{Space}} | Appui bref : lit le film, ou l’arrête. Maintenue pendant un glissement : déplace la vue |
| {{Return}} | Lit depuis le début ; avec les points d’une forme en main, les repose |
| {{⌘Return}} | {Lire le film} |
| {{K}} | {Tenir ici} |
| {{⌫}} | Supprime les images clés choisies, ou les images clés à la tête de lecture de ce qui est choisi ; avec les points d’une forme en main, les points choisis |
| {{←}} {{→}} {{↑}} {{↓}} | Déplacent ce qui est choisi de 1 point, de 10 avec {{⇧}} ; quand la caméra est choisie, l’endroit qu’elle regarde. Quand rien n’est choisi, {{←}} et {{→}} reculent ou avancent d’une image |
| {{,}} {{.}} | Une image en arrière ou en avant, dix avec {{⇧}} |
| {{⌥←}} {{⌥→}} | À l’image clé précédente ou suivante |
| {{Home}} {{End}} | Au début ou à la fin du film |
| {{Esc}} | Annule un glissement en cours ; sinon arrête le film, lâche les images clés choisies, puis la caméra, puis ce qui est choisi |

## Annuler, partager et les assistants {#together}

Chaque pose, chaque mouvement et chaque changement d’allure est une étape dans {Édition › Annuler}, nommée d’après ce qu’elle a fait, par exemple {Déplacer l’image clé}, {Modifier l’allure}, {Supprimer le mouvement} ou {Durée du film}. La lecture ne change rien, elle ne laisse donc aucune étape.

Un film fait partie de son design et se partage avec lui. Ses images clés sont partagées une à une, si bien que deux personnes qui posent des images clés sur le même calque en même temps gardent chacune les leurs. Dans un design partagé avec toi en lecture seule, tu peux lire le film, mais pas le modifier. Quelqu’un qui n’a pas Bezzle peut le lire dans un navigateur, depuis le lien du design : voir [Dans un navigateur](/docs/sharing.html#browser).

Un assistant IA connecté à Bezzle peut lire un film et en écrire un : voir [Assistants IA](/docs/ai.html).

> [!windows] Animer sous Windows
> Bezzle pour Windows a Animer avec le même panneau, la même timeline, les mêmes mouvements, la même caméra et la même vidéo. Ce qui diffère pour l’instant est dit là où cela se présente : seul un assistant y donne des images clés à une apparence, la [mise au point](#camera-focus) de la caméra ne floute rien, la timeline n’a pas de rectangle sur les images clés, la puce {Ressort} n’est pas un cadran, faire tourner deux doigts sur un pavé tactile ne donne pas de roulis à la caméra, et une vidéo est en H.264 seulement. Et là où la caméra s’approche, Bezzle pour Windows dessine plus net ce qu’elle voit une fois le film à l’arrêt, là où un Mac le fait pendant la lecture.
