---
title: Le canevas
nav: Le canevas
lede: Déplace-toi dans ton design, choisis ce sur quoi tu veux travailler, puis déplace-le, dimensionne-le et fais-le pivoter avec précision, avec des règles, des repères et le magnétisme pour tout aligner. Les plans de travail, leurs tailles et leurs noms sont ici aussi.
---

Le canevas est la table au milieu de la fenêtre. Tes plans de travail y sont posés, chacun avec son nom au-dessus de son coin supérieur gauche, et les calques sont posés sur les plans de travail ou libres sur le canevas, à côté. Tout ce qui est décrit sur cette page se fait avec l’outil {Sélection} ({{V}}) en main, sauf mention contraire.

## Se déplacer {#moving-around}

### Zoomer {#zoom}

Le zoom va de 2 % à 6400 %. Le nombre dans la barre du haut l’indique ; clique dessus pour un menu avec les commandes de zoom, quatre zooms fixes et les aides au dessin.

| Pour | Fais ceci |
|---|---|
| Zoomer ou dézoomer là où se trouve le pointeur | Pince sur le trackpad, ou fais défiler en maintenant {{⌘}}, {{⌥}} ou {{⌃}} |
| Zoomer ou dézoomer d’un cran | {Zoom avant} {{⌘=}}, {Zoom arrière} {{⌘-}} |
| Voir tout le design | {Ajuster à la fenêtre} {{⌘0}} |
| Le voir à sa taille réelle | {Taille réelle} {{⌘1}} |
| Remplir la vue avec la sélection | {Zoom sur la sélection} {{⌘2}} |
| Passer à 100 % là où se trouve le pointeur, ou revenir à l’ensemble | Touche deux fois le trackpad avec deux doigts |
| Passer à 50 %, 100 %, 200 % ou 400 % | Choisis-le dans le menu du zoom de la barre du haut |

{Zoom avant} et {Zoom arrière} avancent sur une échelle de nombres ronds, en gardant le milieu de la vue là où il est : 2, 5, 10, 12,5, 25, 33,3, 50, 66,7, 100, 150, 200, 300, 400, 600, 800, 1200, 1600, 2400, 3200, 4800 et 6400 %. {Ajuster à la fenêtre} montre tout le design avec une marge autour, mais jamais à plus de 100 %, pour qu’un petit design ne soit pas agrandi. {Zoom sur la sélection} laisse une marge de 80 points et ne va pas au-delà de 800 % ; sans sélection, il ajuste tout le design.

Un double toucher à deux doigts, à n’importe quel zoom sauf 100 %, passe à 100 % autour du pointeur ; à 100 %, il montre tout le design.

### Faire défiler la vue {#pan}

- **Fais défiler** avec deux doigts sur le trackpad, ou avec la molette d’une souris. Avec une souris, maintiens {{⇧}} pour défiler latéralement.
- **Maintiens {{Space}}** et fais glisser, avec n’importe quel outil : le pointeur devient une main. Relâche la barre d’espace et l’outil que tu avais revient.
- **Fais glisser avec le bouton du milieu** d’une souris (en appuyant sur la molette), avec n’importe quel outil.

Bezzle garde avec le design l’endroit que tu regardais, pour qu’il s’y ouvre la fois suivante. Quand tu agrandis ou réduis la fenêtre, la vue garde son milieu.

## Sélectionner {#selecting}

### Cliquer {#click}

Pointe quelque chose et il est entouré de bleu crayon, pour que tu voies ce qu’un clic va choisir (une copie d’un composant est entourée de violet). Clique pour le sélectionner. Un clic choisit le calque le plus en avant sous le pointeur, à 4 points près à l’écran :

- **Sur un plan de travail**, un clic choisit ce qui est posé dessus. Son espace vide ne choisit rien, et cache ce qui se trouve sous le plan de travail à cet endroit.
- **Sur le canevas**, à côté des plans de travail, un clic choisit un calque libre.
- **Un plan de travail lui-même** se choisit en cliquant sur son nom, au-dessus de son coin supérieur gauche.
- **Les calques masqués et verrouillés** ne sont jamais choisis sur le canevas. Choisis-les dans la liste des calques (voir [Verrouiller et Masquer](#lock-hide)).

Fais un {{⇧}}-clic sur un calque, ou sur le nom d’un plan de travail, pour l’ajouter à la sélection, ou pour l’en retirer s’il est déjà sélectionné. Un clic sur un endroit vide ne sélectionne rien.

Un calque sélectionné a son contour et ses poignées. Plusieurs calques ont chacun leur contour et un cadre en pointillés autour de tous, avec les poignées sur ce cadre ; un glissement n’importe où à l’intérieur du cadre les déplace tous, même depuis un endroit vide entre eux.

### Dans les groupes et sur les calques {#double-click}

Un clic sur un groupe choisit tout le groupe. Un double-clic entre dedans et choisit le calque sous le pointeur, et chaque clic rapide qui suit descend d’un niveau de plus, quelle que soit la vitesse des clics. Une fois que tu as choisi quelque chose dans un groupe, les clics cherchent d’abord dans ce groupe : tu peux donc continuer à choisir ses calques d’un simple clic, tant que rien d’autre ne les recouvre à cet endroit.

Un double-clic fait aussi ce à quoi sert le calque :

::: fields
- **Texte** : commence la saisie. Voir [Taper du texte](/docs/text.html#typing).
- **Un calque rempli d’une image** : place l’image à l’intérieur, pour la déplacer et la mettre à l’échelle. Voir [Placer une image](/docs/pictures.html#placing).
- **Un tracé** : montre ses points pour les modifier. Voir [Modifier les points](/docs/shapes.html#editing-points).
- **Un rectangle, une ellipse ou une ligne** : montre aussi ses points. C’est un tracé pendant que tu les modifies, et il redevient la forme d’origine si tu laisses son contour tel qu’il était.
- **Le nom d’un plan de travail** : le renomme, sur place (voir [Nommer un plan de travail](#naming)).
:::

{{Return}} fait de même pour un seul texte, tracé, masque ou image sélectionné : commence la saisie, montre les points, choisit ce que contient le masque ou place l’image.

### Tracer un rectangle de sélection {#marquee}

Fais glisser depuis un endroit vide pour tracer un rectangle : tout ce qu’il touche est sélectionné au fur et à mesure.

- **Commencé sur un plan de travail**, le rectangle choisit ce qui est posé sur ce plan de travail et le touche.
- **Commencé sur le canevas**, il choisit les calques libres qu’il touche et les plans de travail qu’il contient entièrement.
- **Avec {{⇧}}**, ce que le rectangle choisit s’ajoute à ce qui était sélectionné avant.

Les calques masqués et verrouillés sont laissés de côté.

### Tout sélectionner {#select-all}

{Édition › Tout sélectionner} ({{⌘A}}) choisit, en plus de la sélection, tout ce qui se trouve avec elle : chaque calque du même plan de travail, ou du même groupe. Sans sélection, il choisit tout ce qui est sur le plan de travail le plus visible ; quand aucun plan de travail n’est visible, ou qu’il est vide, chaque plan de travail et chaque calque libre du canevas. Les calques masqués et verrouillés sont laissés de côté.

### Ressortir avec Échap {#escape}

{{Esc}} agit de l’intérieur vers l’extérieur. Un glissement en cours est annulé, et tout revient là où c’était quand il a commencé. Sinon, un outil autre que {Sélection} est posé ; un calque sélectionné seul cède la place au groupe ou au plan de travail où il se trouve ; et tout le reste est relâché. Appuie plusieurs fois pour ressortir entièrement d’un groupe profond.

## Déplacer et décaler {#moving}

### Faire glisser {#drag}

Fais glisser un calque sélectionné, ou appuie sur un calque et fais glisser aussitôt, pour le déplacer. Un glissement commence une fois que le pointeur a parcouru 3 points, pour qu’un clic ne déplace jamais rien par accident. Pendant le déplacement, le calque se cale sur ce qui l’entoure (voir [Magnétisme](#snapping)) et tombe sur des points entiers.

| À maintenir en faisant glisser | Ce que ça fait |
|---|---|
| {{⇧}} | Garde le déplacement bien horizontal ou bien vertical, selon la direction où il est allé le plus loin. |
| {{⌥}} | Laisse l’original où il était et déplace une copie. La copie se cale sur l’original. |
| {{⌘}} | Rien ne se cale. |

Maintiens {{⌥}} au moment d’appuyer pour faire glisser une copie ; {{⇧}} et {{⌘}} agissent dès que tu les enfonces pendant le glissement, et le changement se voit aussitôt. {{Esc}} pendant le glissement remet tout en place, copie comprise. Quand tu relâches, un calque dont le milieu est au-dessus d’un plan de travail va sur ce plan de travail, et un calque sorti de tous les plans de travail est posé sur le canevas, en gardant dans les deux cas sa place à l’écran. Un calque dans un groupe reste dans son groupe. Les calques verrouillés de la sélection restent où ils sont.

Fais glisser quelque chose au-dessus d’une forme et tiens-le immobile un instant : la forme s’ouvre et le prend comme masque (voir [Créer un masque](/docs/pictures.html#making-a-mask)). Tenu immobile sur le bord d’une forme, un texte s’y accroche et court le long de celui-ci (voir [Placer du texte sur une forme](/docs/text.html#on-path)).

### Décaler au clavier {#nudge}

Les touches fléchées déplacent la sélection de 1 point, ou de 10 avec {{⇧}}. Chaque appui est une étape d’annulation à part. Les calques verrouillés restent où ils sont.

### Dupliquer, copier et coller {#duplicate}

{Édition › Dupliquer} ({{⌘D}}) pose une copie de chaque calque sélectionné juste au-dessus de lui, 10 points à droite et 10 plus bas, et sélectionne les copies. La copie d’un plan de travail va à côté de lui, 80 points à sa droite. Dans une pile, le même calque est copié dans chaque publication, chacune gardant ses propres mots.

{Édition › Copier} ({{⌘C}}), {Couper} ({{⌘X}}) et {Coller} ({{⌘V}}) fonctionnent dans un design et d’un design à l’autre. Les calques collés reviennent là d’où ils ont été copiés quand cet endroit est visible, ou au milieu de la vue sinon ; collés par-dessus leurs originaux, ils sont décalés de 10 points vers la droite et vers le bas pour que tu les voies. Chacun va sur le plan de travail où tombe son milieu, sinon sur le plan de travail visible s’il le chevauche, sinon sur le canevas. Les composants et les styles qu’ils utilisent les accompagnent quand ils sont nouveaux dans ce design. Le texte copié part aussi en mots simples, pour les autres apps ; des mots simples collés dans Bezzle deviennent un nouveau texte, aussi large que ses mots, ou qui passe à la ligne quand il a plus de soixante lettres.

## Redimensionner et faire pivoter {#sizing}

### Poignées {#handles}

Un calque sélectionné a huit poignées carrées : une à chaque coin et une au milieu de chaque côté. Quand le calque mesure moins de 28 points de large à l’écran, les poignées du milieu de ses bords haut et bas s’effacent, et quand il mesure moins de 28 points de haut, celles du milieu de ses côtés, pour que les poignées ne s’entassent pas. Certains calques ont leurs propres poignées : un texte aussi large que ses mots a une poignée ronde en bas, une ligne une poignée ronde à chaque extrémité, une grille de répétition ses propres poignées pour la répéter. Les calques verrouillés n’en ont aucune.

### Redimensionner {#resize}

Fais glisser une poignée pour redimensionner. Le coin ou le côté opposé reste où il est, et la taille s’affiche dans une étiquette bleu crayon sous le calque au fur et à mesure.

| À maintenir en redimensionnant | Ce que ça fait |
|---|---|
| {{⇧}} | Garde les proportions. |
| {{⌥}} | Redimensionne à partir du milieu, des deux côtés à la fois. Rien ne se cale pendant ce temps. |
| {{⌘}} | Rien ne se cale. |

Les bords qui bougent se calent sur ce qui les entoure, et la taille tombe sur des points entiers. Avec les proportions gardées, le bord qui se cale fixe la taille et l’autre côté suit, pour que la forme ne se déforme jamais. Un calque que tu as fait pivoter se redimensionne le long de ses propres côtés, et ne se cale pas.

Avec plusieurs calques sélectionnés, c’est le cadre qui les entoure qui se redimensionne, et chaque calque garde sa place à l’intérieur. Un groupe étire ce qu’il contient. Un texte agrandit ses lettres ou fait passer ses mots à la ligne, selon son réglage (voir [Comment les cadres de texte prennent leur taille](/docs/text.html#sizing)). Un plan de travail recompose son design pour sa nouvelle taille, sauf si tu désactives cela (voir [Déplacer et redimensionner des plans de travail](#artboard-resize)).

### Faire pivoter {#rotate}

Pointe juste à l’extérieur d’un coin, entre 5 et 20 points de celui-ci à l’écran : le pointeur devient une flèche courbe. Fais glisser pour faire pivoter la sélection autour du milieu de son cadre. L’angle s’affiche dans l’étiquette au fur et à mesure. Maintiens {{⇧}} pour pivoter par pas de 15°, comptés à partir d’une rotation nulle, pour que l’angle tombe toujours sur un multiple de 15°. Plusieurs calques pivotent ensemble autour du milieu du cadre qui les entoure tous. Les plans de travail ne pivotent pas.

Pour taper un angle exact, utilise le champ {↻} de la carte {Cadre}, de −360° à 360°.

### D’autres prises {#more-grips}

Près de la sélection, le pointeur peut saisir encore quelques éléments. Chacun est expliqué là où il a sa place :

- **Les pastilles à l’intérieur des angles d’un rectangle** les arrondissent. Voir [Angles](/docs/shapes.html#corner-dots).
- **L’ombre**, là où elle tombe hors du calque, déplace la lumière ; {{⇧}} la garde droite. Voir [Déplacer une ombre](/docs/looks.html#shadow-on-canvas).
- **Juste à l’extérieur du milieu d’un côté**, un glissement fait pivoter le calque en profondeur. Voir [Tourner en profondeur](/docs/looks.html#depth-on-canvas).
- **Les extrémités d’une ligne** se déplacent une à la fois. Voir [Lignes](/docs/shapes.html#lines).
- **Les perles aux extrémités d’un texte** courbent ses mots. Voir [Courber le texte en arc](/docs/text.html#bending).

## Champs numériques {#number-fields}

Chaque nombre de l’inspecteur est un champ sur lequel tu peux faire glisser ou dans lequel tu peux taper. Un tiret (`–`) signifie que les calques sélectionnés diffèrent.

### Faire glisser un nombre {#scrub}

Fais glisser latéralement n’importe où sur un champ pour le changer. De légères graduations le long de sa base, comme celles d’un mètre ruban, montrent qu’on peut le faire glisser, et elles défilent avec ta main. Le pointeur reste immobile au-dessus du champ pendant que tu fais glisser, pour que tu puisses aller aussi loin que tu veux sans sortir de l’écran.

- **{{⌥}}** va dix fois moins vite, pour les réglages fins.
- **{{⇧}}** va dix fois plus vite, par dizaines entières. Le trackpad donne un petit retour à chaque dizaine.
- **À une limite**, le nombre s’arrête, cède un peu dans le sens où tu tires, et le trackpad donne un petit retour.
- **{{Esc}}** pendant le glissement remet le nombre tel qu’il était.

Tu peux commencer à faire glisser même pendant que tu tapes dans le champ : ce que tu as tapé est gardé, et le glissement part de là. Tout le glissement forme une seule étape d’annulation. Quand les calques sélectionnés diffèrent, un glissement change chacun à partir de sa propre valeur.

### Taper des nombres et des calculs {#math}

Clique sur un champ pour taper dedans ; {{Return}} ou un clic n’importe où ailleurs garde ce que tu as tapé, et {{Esc}} laisse le nombre tel qu’il était. Pendant la saisie, un clic place le curseur là où tu cliques et un double-clic sélectionne tout le nombre. {{↑}} et {{↓}} augmentent et diminuent le nombre (de 1 dans la plupart des champs), dix fois plus avec {{⇧}}.

Un champ accepte plus qu’un simple nombre :

| Tape | Ce qui se passe |
|---|---|
| `120/3` | Un calcul, effectué comme sur une calculatrice : × et ÷ avant + et −, et les parenthèses, comme `(100+20)/3`. |
| `+10` | Ajoute 10 à la valeur actuelle. |
| `-10` | Dans un champ qui ne peut pas descendre sous zéro, comme une largeur, retire 10. Dans un champ qui le peut, comme une position, c’est le nombre −10. |
| `+-10` | Retire 10 dans un champ qui peut descendre sous zéro, comme une position. |
| `×2`, `x2` ou `*2` | Double la valeur. |
| `/2` ou `÷2` | Divise la valeur par deux. |
| `+10%` | L’augmente de 10 %. |
| `-10%` | La réduit de 10 %, dans un champ qui ne peut pas descendre sous zéro. |
| `50%` | Dans {X}, {Y}, {L} ou {H} : la moitié du plan de travail (ou du groupe) où se trouve le calque. Ailleurs : la moitié de la valeur elle-même. |
| `12,5` | Pareil que `12.5`. Les espaces sont ignorés. |

Dans les champs des calques sélectionnés, une modification comme `+10`, `×2` ou `50%` s’applique à la valeur propre de chaque calque : `+10` dans {X} déplace donc chaque calque de 10 points vers la droite, où qu’il soit, et `50%` dans {L} rend chacun moitié moins large que son propre plan de travail. L’unité d’un champ, comme `pt` ou `°`, peut être tapée avec le nombre et elle est ignorée. Dans un champ mesuré en pourcentage, comme {Opacité}, `%` n’est que son unité : `50%` y signifie 50. Les valeurs hors de la plage d’un champ y sont ramenées, et tout ce que Bezzle ne sait pas lire laisse le nombre tel qu’il était.

::: demo numbers
:::

### La carte Cadre {#frame-card}

La carte {Cadre} est la première carte de toute sélection, et elle est ouverte au départ. Repliée, elle indique la largeur et la hauteur, la position du calque et sa rotation, par exemple `120 × 48 · 24, 300 · ↻ 15°`.

::: fields
- **L**, **H** : la largeur et la hauteur, de 0 à 100 000 points.
- **Cadenas** : entre {L} et {H}. Fermé, la largeur et la hauteur changent ensemble, en gardant les proportions. Il se rouvre quand tu sélectionnes autre chose.
- **X**, **Y** : la position du coin supérieur gauche du calque, mesurée depuis le coin supérieur gauche du plan de travail (ou du groupe) où il se trouve ; pour un plan de travail ou un calque libre, sa place sur le canevas. Pour plusieurs calques, le cadre qui les entoure tous. De −100 000 à 100 000.
- **↻** : la rotation, en degrés, de −360 à 360. Les plans de travail n’en ont pas.
- **Retourner horizontalement**, **Retourner verticalement** : retournent la sélection en miroir sur place, comme {Objet › Retourner horizontalement} et {Objet › Retourner verticalement}. Voir [Retourner](/docs/shapes.html#flip).
- **Le plan de travail en petit** : pour un calque sur un plan de travail, une image du plan de travail avec le calque dessus. Fais glisser le calque là pour le placer ; il marque un arrêt sur les bords et le milieu du plan de travail, avec un petit retour du trackpad.
:::

Fais glisser latéralement sur la carte repliée pour mettre la sélection à l’échelle, en gardant ses proportions. La largeur de la carte va de 1 point jusqu’au double de la largeur de la sélection, ou une fois et demie la largeur du plan de travail, ou 100 points, selon ce qui est le plus grand, et le glissement marque un arrêt au quart, au tiers, à la moitié et à la totalité de la largeur du plan de travail. Cela vaut pour les calques non verrouillés, pas pour les plans de travail.

## Règles {#rulers}

Les règles courent le long du haut et de la gauche du canevas, sur 20 points d’épaisseur. Affiche-les ou masque-les avec {Règles} ({{⌃R}}) ; elles sont les mêmes dans tous les designs, et Bezzle les garde comme tu les as laissées d’un lancement à l’autre.

Elles comptent depuis le coin supérieur gauche du plan de travail sur lequel tu travailles : celui où se trouve la sélection, sinon celui que le pointeur a survolé en dernier, sinon le plus visible. Ce plan de travail se voit le long des règles sous forme d’une bande plus claire, et quand tu passes à un autre, la graduation glisse jusqu’à lui, nombres compris. Tu y vois aussi :

- **La sélection** sous forme d’une bande, avec la position de ses bords dans des étiquettes bleu crayon.
- **Le pointeur**, sous forme d’un trait fin sur chaque règle.
- **Les repères du plan de travail**, sous forme de petits onglets pointés vers eux.
- **Les colonnes et les rangées de sa grille de mise en page**, en rouge pâle le long de la bande, tant que les grilles de mise en page sont affichées.

Les nombres s’adaptent au zoom : des nombres entiers par pas de 1, 2, 5, 10, 20, 50 et ainsi de suite, les nombres intermédiaires apparaissant en fondu à mesure que tu te rapproches.

Le coin où les règles se rejoignent contient une équerre. Clique dessus, ou fais un clic droit sur l’une ou l’autre règle, pour le menu des aides au dessin : {Règles} ({{⌃R}}), {Repères} ({{⌃,}}), {Grilles de mise en page} ({{⌃G}}), {Verrouiller les repères}, et {Supprimer les repères}, qui retire tous les repères du plan de travail où se trouve la sélection, sinon du plus visible. Le même menu se trouve au bas du menu du zoom de la barre du haut, et les quatre premières commandes sont aussi dans la barre des menus. Rien ne se cale non plus sur ce qui est masqué : seul ce qui est affiché compte pour le magnétisme.

## Repères {#guides}

Un repère est une ligne qui traverse un plan de travail d’un bord à l’autre, pour aligner des choses dessus. Chaque plan de travail a ses propres repères, et ils s’affichent tant que {Repères} ({{⌃,}}) est activé.

### Poser des repères {#add-guides}

- **Tire-en un** d’une règle, avec n’importe quel outil : de la règle du haut sort un repère horizontal, de la règle de gauche un repère vertical. Il se déroule sur le plan de travail sous le pointeur à mesure que tu l’amènes.
- **Clique sur une règle** pour poser un repère à cet endroit précis, en travers de la règle : un clic sur la règle du haut pose un repère vertical à cet endroit, sur le plan de travail que mesurent les règles.
- **Fais glisser depuis le coin** où les règles se rejoignent, et deux repères sortent à la fois, un dans chaque sens, croisés sous le pointeur.
- **{Repères aux marges}**, sur la carte {Grille de mise en page} d’un plan de travail, pose des repères là où ses colonnes et ses rangées commencent et finissent, pour s’y tenir une fois la grille masquée. Voir [La carte Grille de mise en page](/docs/layout.html#layout-grid-card).

Poser un repère active {Repères}, s’il était désactivé.

### Déplacer des repères {#move-guides}

Fais glisser un repère par sa ligne avec l’outil {Sélection}, ou par son onglet sur la règle avec n’importe quel outil. Là où un calque se trouve sur le repère (un calque que le repère traverse, pas une image ou une couleur posée sous toute la page), appuyer à cet endroit prend plutôt le calque ; laisse le pointeur sur le repère à cet endroit et son onglet s’allume sur la règle, pour montrer où le saisir. Un clic sur un repère sans glisser est un clic sur ce qui se trouve dessous.

Pendant que tu fais glisser, les distances du repère aux deux bords du plan de travail s’affichent comme des lignes de cote de dessinateur, et il se cale sur les bords et le milieu du plan de travail, sur chaque diapositive d’un carrousel, sur les bords et les milieux de ce qui est posé sur le plan de travail, et sur les colonnes, les rangées et les lignes de base de la grille de mise en page tant qu’elles sont affichées, à 6 points près à l’écran, avec chaque fois un petit retour du trackpad.

| À maintenir en faisant glisser un repère | Ce que ça fait |
|---|---|
| {{⇧}} | Le garde sur des dizaines entières depuis le bord le plus proche. |
| {{⌥}} | Laisse le repère où il était et fait glisser une copie (quand tu le fais glisser par sa ligne). |
| {{⌘}} | Rien ne se cale ; il tombe sur des points entiers. |

### Retirer des repères {#remove-guides}

Fais glisser un repère hors de son plan de travail, ou ramène-le sur la règle : il passe en pointillés et affiche {Relâchez pour retirer} ; relâche, et il disparaît. Un clic droit sur un repère propose {Supprimer le repère}, {Supprimer les repères} (tous les repères de ce plan de travail) et {Verrouiller les repères}. {Supprimer les repères} se trouve aussi dans le menu des aides au dessin.

### Les repères quand le plan de travail change de taille {#guides-resize}

Chaque repère garde sa distance au bord le plus proche, ou reste au milieu s’il y est, pour qu’un repère à 16 points du bord droit reste à 16 points de lui quand le plan de travail grandit. Un plan de travail sélectionné qui a des repères a une carte {Repères} dans l’inspecteur : ouvre-la pour voir chaque repère, à quelle distance il est de son bord, quel bord c’est ({À gauche}, {Au centre} ou {À droite} pour un repère vertical, {En haut}, {Au milieu} ou {En bas} pour un repère horizontal), et une croix pour le retirer. Change le nombre pour déplacer le repère, ou le bord pour le rattacher à un autre sans le déplacer. L’interrupteur {Verrouiller les repères} de la carte est le même que {Verrouiller les repères} du menu, et la croix en haut de la carte ouverte retire tous les repères.

{Verrouiller les repères} garde chaque repère là où il est : le pointeur les traverse jusqu’à ce qui se trouve dessous. Les repères ne s’affichent que sur les plans de travail d’au moins 24 points de large à l’écran.

## Magnétisme {#snapping}

### Ce sur quoi tout se cale {#targets}

Pendant que tu déplaces quelque chose, ses bords et son milieu se calent sur ce qui l’entoure (pendant que tu le redimensionnes, les bords qui bougent), à 5 points près à l’écran, et une ligne bleu crayon montre avec quoi il s’aligne, jusqu’à l’élément le plus éloigné qui partage cette ligne. Il se cale sur :

- **Le plan de travail** où il se trouve : ses bords et son milieu, et sur un carrousel, les bords et le milieu de chaque diapositive.
- **Ses voisins** : les bords et les milieux des autres calques posés avec lui sur le même plan de travail, ou dans le même groupe ; dans un groupe, le plan de travail qui l’entoure aussi.
- **Les repères du plan de travail**, tant que les repères sont affichés.
- **Les colonnes et les rangées de la grille de mise en page**, par leurs bords, tant que les grilles de mise en page sont affichées ; et la première ligne d’un texte sur les lignes de base de la grille.

Un élément libre sur le canevas se cale sur les plans de travail et les autres calques libres qui l’entourent, et sur les calques d’un plan de travail sur lequel il est en train de passer. Les plans de travail se calent les uns sur les autres de la même façon.

Pendant que tu dessines un nouveau calque, le point de départ et le coin que tu fais glisser se calent sur les bords et les milieux des plans de travail, sur les calques libres, et sur les repères et la grille de mise en page du plan de travail où tu dessines.

### Écarts égaux {#gaps}

Un calque en mouvement se cale aussi sur des espacements égaux : à mi-chemin entre ses deux voisins, ou en laissant à côté de lui le même écart qu’entre deux de ses voisins, dans sa propre rangée ou, au détour d’un coin, en dessous de l’un d’eux. Quand il le fait, chaque écart égal se remplit de fines hachures, comme si le même carreau était posé à nouveau, et porte sa largeur : sur une étiquette pleine pour l’écart à côté de ce que tu déplaces, sur une étiquette en contour pour les écarts auxquels il correspond. Les écarts s’ouvrent l’un après l’autre, du plus proche de ce que tu déplaces vers l’extérieur, et le trackpad donne un petit retour chaque fois qu’ils se calent. Un écart égal ne se cale que lorsqu’il est plus proche que tout bord. Quand plus de 400 calques se trouvent avec ce que tu déplaces, les écarts ne sont pas mesurés.

### Désactiver le magnétisme {#no-snap}

Maintiens {{⌘}} pendant que tu fais glisser, redimensionnes ou dessines, et rien ne se cale. Redimensionner à partir du milieu avec {{⌥}} ne se cale pas non plus. Masquer les repères ou les grilles de mise en page empêche que quoi que ce soit s’y cale ; rien ne se cale jamais sur les règles elles-mêmes.

## Aligner et Répartir {#align}

{Objet › Aligner} aligne la sélection : {À gauche}, {Au centre} et {À droite} alignent leurs bords gauches, leurs milieux ou leurs bords droits ; {En haut}, {Au milieu} et {En bas} leurs hauts, leurs milieux ou leurs bas. Plusieurs calques s’alignent sur le cadre qui les entoure tous ; un seul calque s’aligne sur le plan de travail où il se trouve. Les calques pivotés s’alignent selon l’étendue qu’ils couvrent, une fois pivotés.

{Objet › Répartir › Horizontalement} et {Verticalement} espacent régulièrement trois calques ou plus entre les deux plus extérieurs, qui restent où ils sont.

Avec plusieurs calques sélectionnés, la carte {Disposer}, en haut de l’inspecteur, propose les mêmes commandes sous forme de boutons : {Aligner à gauche}, {Aligner les centres}, {Aligner à droite}, {Aligner en haut}, {Aligner au milieu}, {Aligner en bas}, et pour trois calques ou plus, {Répartir horizontalement} et {Répartir verticalement}. Pour les formes, elle a aussi {Réunir} et les autres façons de les combiner, et {Construire}. Voir [Combiner des formes](/docs/shapes.html#combining).

Les calques verrouillés restent où ils sont quand tu alignes ou répartis.

## Premier plan et arrière-plan {#order}

Les calques sont posés les uns sur les autres, et la liste des calques les montre du premier plan vers l’arrière. Pour changer l’ordre :

| Commande | Raccourci | Ce qu’elle fait |
|---|---|---|
| {Objet › Mettre au premier plan} | {{⇧⌘]}} | Devant tout ce qui est à côté. |
| {Objet › Avancer} | {{⌘]}} | D’un cran vers l’avant. |
| {Objet › Reculer} | {{⌘[}} | D’un cran vers l’arrière. |
| {Objet › Mettre à l’arrière-plan} | {{⇧⌘[}} | Derrière tout ce qui est à côté. |

Chaque calque se déplace parmi les calques avec lesquels il se trouve, sur le même plan de travail ou dans le même groupe, sans jamais en sortir. Pour faire passer un calque dans un autre groupe ou sur un autre plan de travail, fais-le glisser jusque-là dans la liste des calques.

## Grouper {#group}

{Objet › Grouper} ({{⌘G}}) met les calques sélectionnés dans un nouveau groupe, nommé {Groupe 1}, {Groupe 2} et ainsi de suite, et le sélectionne. Chaque calque reste où il est et dans le même ordre, et le groupe se place là où était le plus en avant d’entre eux. Des calques peuvent être groupés quand ils sont tous sur le même plan de travail, ou tous sur le canevas ; les plans de travail, et les calques à l’intérieur d’une grille de répétition, ne le peuvent pas.

{Objet › Dissocier} ({{⇧⌘G}}) défait les groupes sélectionnés : ce que contenait chacun prend sa place, là où il était, et est sélectionné. Une grille de répétition a {Dissocier la grille} ({{⇧⌘R}}) à la place.

Un groupe s’ajuste autour de ce qu’il contient quand cela change. Redimensionne un groupe et ce qu’il contient s’étire avec lui. Pour travailler sur un calque à l’intérieur, double-clique (voir [Dans les groupes et sur les calques](#double-click)).

## Verrouiller et Masquer {#lock-hide}

{Objet › Verrouiller} ({{⌘L}}) verrouille la sélection ; quand tous les calques sélectionnés sont verrouillés, la même commande devient {Déverrouiller}. Un calque verrouillé ne bouge pas : il ne peut être ni choisi ni déplacé sur le canevas, n’a pas de poignées, est laissé de côté par {Tout sélectionner} et par le rectangle de sélection, reste où il est quand tu alignes, répartis ou décales, et n’est pas copié par {Dupliquer}. Choisis-le dans la liste des calques, où il a un cadenas à côté de son nom ; clique sur le cadenas pour le déverrouiller.

{Objet › Masquer} ({{⇧⌘H}}) masque la sélection. Un calque masqué n’est pas dessiné, rien ne se cale sur lui, et {Rechercher} ne regarde pas dedans. Il ne peut être choisi que dans la liste des calques, où son œil est barré : clique sur l’œil, ou fais un clic droit et choisis {Afficher}. {Objet › Tout afficher} affiche d’un coup tous les calques masqués du design.

## Rechercher et remplacer {#find}

{Édition › Rechercher › Rechercher…} ({{⌘F}}) ouvre la barre de recherche en haut du canevas, pour chercher des mots dans tous les textes du design et en mettre d’autres à leur place. Si tu as sélectionné des lettres pendant la saisie, c’est elles qu’elle cherche.

::: fields
- **Rechercher et remplacer des mots**, **Vérifier l’orthographe** : les deux façons dont la barre fonctionne, à sa gauche. L’orthographe est expliquée sur [Texte](/docs/text.html#spelling-design).
- **Rechercher** : les mots à chercher. Chaque endroit où ils sont trouvés est éclairé sur le canevas comme au surligneur, celui qui est désigné plus vivement et entouré. {{Return}} passe au suivant, {{⇧Return}} au précédent.
- **Compteur** : combien d’occurrences ont été trouvées, et laquelle est désignée, par exemple `3 sur 12`, ou {Introuvable}.
- **Précédent**, **Suivant** : les flèches, comme {{⇧Return}} et {{Return}}. Aller à une occurrence sélectionne son texte et l’amène dans la vue.
- **Fermer** : la croix, ou {{Esc}}.
- **Respecter la casse** : ne trouve que les mots avec les mêmes majuscules.
- **Mots entiers uniquement** : passe les mots trouvés à l’intérieur de mots plus longs.
- **Remplacer par** : les mots à mettre à leur place. {{Return}} ici remplace.
- **Remplacer** : les met à la place de l’occurrence désignée, et passe à la suivante.
- **Tout** : remplace tout ce qui a été trouvé, en une seule étape, et dit combien de fois.
:::

Bezzle parcourt tous les textes visibles, dans l’ordre de lecture : plan de travail par plan de travail, du haut du canevas vers le bas et depuis la gauche, et sur chaque plan de travail du haut vers le bas et depuis la gauche ; dans une pile, chaque publication à son tour. Les textes masqués sont laissés de côté. Le premier {Suivant} part du texte sélectionné, s’il y en a un. {Édition › Rechercher › Rechercher le suivant} et {Rechercher le précédent} font la même chose que les flèches tant que la barre est ouverte.

## Plans de travail {#artboards}

Un plan de travail est un écran, une page ou une publication : une feuille sur le canevas avec des calques dessus. Un design peut en avoir autant que tu veux.

### En dessiner un {#artboard-tool}

Appuie sur {{A}} pour l’outil Plan de travail et fais glisser n’importe où sur le canevas : le nouveau plan de travail est aussi grand que ton glissement, et ses bords se calent sur les plans de travail alentour. {{⇧}} le garde carré, {{⌥}} le dessine à partir du milieu, {{⌘}} l’empêche de se caler. Un clic sans glisser crée un plan de travail de la taille du dernier préréglage que tu as ajouté, ou de 402 sur 874 points, son coin supérieur gauche là où tu as cliqué. Les nouveaux plans de travail s’appellent {Plan de travail}, {Plan de travail 2} et ainsi de suite, et une fois l’un d’eux posé, tu as de nouveau l’outil {Sélection} en main.

### Tailles et préréglages {#presets}

Tant que l’outil Plan de travail est en main, ou tant qu’un design n’a aucun plan de travail et que rien n’est sélectionné, l’inspecteur liste toutes les tailles existantes, sous {Plans de travail}. Clique sur l’une pour ajouter un plan de travail de cette taille, 80 points à droite des autres, aligné sur le haut du plus haut d’entre eux ; la vue se déplace pour le montrer, et l’outil {Sélection} revient. Le premier plan de travail d’un design prend le nom de sa taille.

Les appareils sont en points, comme leurs écrans sont dessinés ; les formats des plateformes en pixels, comme elles les demandent ; et le papier en points, comme dans un PDF.

| Famille | Tailles |
|---|---|
| {iPhone} | iPhone Duo, ouvert 890 × 626 · iPhone Duo, fermé 466 × 678 · iPhone 18 Pro Max 440 × 956 · iPhone 18 Pro 402 × 874 · iPhone Air 420 × 912 · iPhone 17 402 × 874 · iPhone 17e 390 × 844 · iPhone 16 393 × 852 |
| {Android} | Samsung Galaxy S26 Ultra 384 × 832 · Samsung Galaxy S26 360 × 780 · Google Pixel 11 Pro XL 448 × 997 · Google Pixel 11 412 × 923 |
| {iPad} | iPad Pro 13″ 1032 × 1376 · iPad Pro 11″ 834 × 1210 · iPad Air 13″ 1024 × 1366 · iPad Air 11″ 820 × 1180 · iPad 820 × 1180 · iPad mini 744 × 1133 |
| {Mac} | MacBook Air 13″ 1470 × 956 · MacBook Air 15″ 1710 × 1112 · MacBook Pro 14″ 1512 × 982 · MacBook Pro 16″ 1728 × 1117 · iMac 24″ 2240 × 1260 · Studio Display 2560 × 1440 |
| {Web} | Bureau 1920 × 1080 · Portable 1440 × 900 · Petit portable 1280 × 832 · Tablette web 768 × 1024 |
| {Apple Watch} | Apple Watch 46 mm 208 × 248 · Apple Watch 42 mm 187 × 223 · Apple Watch Ultra 3 211 × 257 |
| {Instagram} | Post Instagram, 4:5 1080 × 1350 · Post Instagram, carré 1080 × 1080 · Post Instagram, paysage 1080 × 566 · Story et Reel Instagram 1080 × 1920 |
| {TikTok} | Vidéo TikTok 1080 × 1920 |
| {YouTube} | Miniature YouTube 1280 × 720 · YouTube Shorts 1080 × 1920 · Bannière YouTube 2560 × 1440 |
| {Facebook} | Publication Facebook 1080 × 1350 · Lien Facebook 1200 × 630 · Story Facebook 1080 × 1920 · Couverture Facebook 851 × 315 |
| {LinkedIn} | Post LinkedIn 1200 × 627 · Post LinkedIn, carré 1080 × 1080 · Bannière LinkedIn 1584 × 396 |
| {X} | Post X 1600 × 900 · En-tête X 1500 × 500 |
| {Pinterest} | Épingle Pinterest 1000 × 1500 |
| {Impression} | Carte de visite 241 × 156 · Carte postale 298 × 420 · A5 420 × 595 · A4 595 × 842 · A3 842 × 1191 · US Letter 612 × 792 · US Legal 612 × 1008 |
| {Diapositives} | Diapositive 1920 × 1080 · Diapositive, 4:3 1024 × 768 |

Les mêmes tailles commencent un nouveau design depuis l’écran d’accueil (voir [Premiers pas](/docs/start.html#start-a-design)).

### Carrousels {#carousels}

Au bas de la liste, les {Carrousels} sont des diapositives côte à côte sur un même plan de travail, conçues d’un seul tenant pour que ce qui passe d’une diapositive à la suivante s’aligne par-dessus la coupe, et exportées chacune en image. Chacun commence avec trois diapositives, et ils s’appellent {Carrousel}, {Carrousel 2} et ainsi de suite :

| Format | Diapositive | Pour |
|---|---|---|
| {Portrait 4:5} | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| {Carré 1:1} | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| {Vertical 3:4} | 1080 × 1440 | Instagram |
| {Story 9:16} | 1080 × 1920 | TikTok |

Un carrousel a toujours une largeur d’un nombre entier de diapositives, de 1 à 20, et le numéro de chaque diapositive s’affiche au-dessus de son coin supérieur droit. Tire son côté gauche ou droit pour ajouter ou retirer des diapositives entières ; tire son haut ou son bas pour changer la hauteur des diapositives, qui marque un arrêt sur les proportions de chaque format (sauf si tu maintiens {{⌥}} ou {{⌘}}). L’étiquette indique combien il y a de diapositives et, pendant que tu tires le haut ou le bas, ce que sont maintenant les diapositives, par exemple `4 diapositives · Portrait 4:5`, ou leur taille. Le magnétisme et les repères se calent sur les bords et le milieu de chaque diapositive. Les calques au-delà de la dernière diapositive restent où ils sont, hors de vue, jusqu’à ce que le carrousel grandisse de nouveau.

La carte {Carrousel} d’un carrousel sélectionné a son {Format} (ou {Plan de travail simple}, pour en refaire un plan de travail ordinaire), les champs {L} et {H} des diapositives, et {Diapositives}, avec un moins et un plus pour en retirer une ou en ajouter une à droite.

### Nommer un plan de travail {#naming}

Le nom d’un plan de travail s’affiche au-dessus de son coin supérieur gauche, en bleu crayon quand il est sélectionné ou pointé, et il est masqué quand le plan de travail mesure moins de 30 points de large à l’écran. Clique sur le nom pour sélectionner le plan de travail ; fais un {{⇧}}-clic pour l’ajouter à la sélection.

Double-clique sur le nom pour renommer le plan de travail sur place : un champ prend sa place avec tout le nom sélectionné, pour que tu tapes par-dessus. {{Return}}, {{Tab}} ou un clic n’importe où ailleurs garde ce que tu as tapé ; {{Esc}} laisse le nom tel qu’il était. Tu peux aussi renommer un plan de travail dans la liste des calques.

### Déplacer et redimensionner des plans de travail {#artboard-resize}

Fais glisser un plan de travail par son nom pour le déplacer, avec tout ce qu’il porte ; il se cale sur les plans de travail alentour, {{⇧}} le garde droit et {{⌥}} fait glisser une copie. Un glissement sur l’espace vide d’un plan de travail trace à la place un rectangle de sélection : c’est donc par son nom que tu le saisis. Une fois sélectionné, les touches fléchées et les champs {X} et {Y} le déplacent aussi.

Fais glisser les poignées d’un plan de travail sélectionné pour le redimensionner. Tant que {Adapter la mise en page} est activé, comme au départ, Bezzle recompose le design pour chaque taille que le glissement atteint : voir [Redimensionner un plan de travail](/docs/layout.html#resize-artboard) et [Garder les calques en place](/docs/layout.html#adapt-off). Quand c’est désactivé, ou sur un plan de travail vide, les calques restent où ils sont sur le canevas pendant que ses bords bougent. Les plans de travail ne pivotent pas et ne se retournent pas, n’entrent jamais dans un groupe et sont toujours posés sur le canevas lui-même. Supprimer un plan de travail supprime tout ce qu’il porte.

### La carte Plan de travail {#artboard-card}

Un plan de travail sélectionné a sa carte {Cadre}, puis :

::: fields
- **Taille** : un menu de toutes les tailles par famille, avec la taille actuelle cochée. Pointe une taille pour voir le plan de travail la prendre sur le canevas, son design recomposé pour elle ; clique pour la garder. En dessous, {Carrousel, Portrait 4:5} et les autres formats en font un carrousel, ses calques restant où ils sont dessus. Repliée, la carte indique le nom de la taille, ou {Sur mesure}.
- **Adapter la mise en page** : activé, redimensionner le plan de travail recompose son design ; désactivé, ses calques restent en place.
- **Rogner le contenu** : activé, comme au départ, ce qui dépasse les bords du plan de travail est coupé. Désactivé, cela s’affiche, et tu peux le choisir à cet endroit.
:::

En dessous viennent la carte {Arrière-plan}, pour le remplissage propre du plan de travail, et des cartes pour tout ce qu’il a d’autre : une {Grille de mise en page}, des {Repères}, une apparence sombre, les publications d’une pile. Les propositions en pointillés, en bas, ajoutent ce qu’il n’a pas encore : {Grille de mise en page}, {Sombre} et {Exporter}, qui le marque pour l’export. Voir [Grilles de mise en page](/docs/layout.html#layout-grids), [Clair et sombre](/docs/dark.html#make-dark), [Piles](/docs/decks.html#what-a-deck-is) et [Marquer pour l’export](/docs/export.html#marking).
