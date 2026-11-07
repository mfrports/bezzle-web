---
title: Grilles de mise en page, grilles de répétition et toutes les tailles
nav: Mise en page et tailles
lede: Compose tes plans de travail sur des colonnes, des lignes et des lignes de base, répète un design dans une grille de cellules qui restent semblables, et donne une nouvelle taille à n’importe quel plan de travail pendant que son design se recompose.
---

Dans Bezzle, trois choses s’occupent de la structure pour toi. Une **grille de mise en page** est l’ensemble des colonnes, des lignes et des lignes de base sur lequel un plan de travail est composé. Une **grille de répétition** est un même design répété en colonnes et en lignes, où changer une cellule revient à les changer toutes. Et chaque plan de travail **s’adapte** : donne-lui une nouvelle taille, et Bezzle lit son design comme le ferait un designer et le recompose, sans contraintes à définir au préalable.

## Grilles de mise en page {#layout-grids}

Une grille de mise en page appartient à un seul plan de travail. Elle peut avoir des colonnes côte à côte sur sa largeur, des lignes les unes sous les autres sur sa hauteur, et des lignes de base sur lesquelles le texte se pose, dans n’importe quelle combinaison. La grille n’est dessinée par-dessus le plan de travail que sur le canevas : elle n’est jamais exportée et ne fait jamais partie d’une image ni d’un PDF. Ses colonnes et ses lignes s’étirent entre les marges, elles suivent donc le plan de travail chaque fois qu’il grandit ou rétrécit.

Sur le canevas, les colonnes et les lignes sont teintées du rouge d’une marge de cahier, et les lignes de base sont tracées dans le bleu pâle du papier ligné. Au repos, elles restent discrètes. Quand tu déplaces, redimensionnes ou dessines quelque chose sur le plan de travail, elles ressortent, et les colonnes que l’objet couvre s’allument.

### Ajouter une grille de mise en page {#add-layout-grid}

::: steps
1. **Sélectionne un seul plan de travail.** Clique sur son nom sur le canevas, ou sur sa ligne dans la liste des calques.
2. **Pointe la carte en pointillés {Grille de mise en page}** en bas de l’inspecteur. Le canevas montre la grille que Bezzle propose pour la taille du plan de travail, avant que rien ne soit ajouté.
3. **Clique dessus.** La grille est ajoutée et sa carte s’ouvre. Si les grilles de mise en page étaient masquées, elles sont de nouveau affichées.
:::

La grille que Bezzle propose dépend de la largeur du plan de travail :

| Largeur du plan de travail | Colonnes | Gouttière | Marge |
| --- | --- | --- | --- |
| Moins de 600 (un téléphone) | 4 | 16 | 16 |
| De 600 à 1 199 (une tablette ou une publication) | 8 | 24 | 4 % de la largeur, par pas de 8, au moins 24 |
| 1 200 et plus (un ordinateur) | 12 | 24 | 5,5 % de la largeur, par pas de 8, au moins 32 |

Sur un carrousel, la grille est calculée pour une diapositive et se répète sur chaque diapositive (voir [Carrousels](#carousels)).

### La carte Grille de mise en page {#layout-grid-card}

Repliée, la carte dit de quoi la grille est faite : `12 colonnes`, `4 × 6` pour des colonnes et des lignes, ou `Ligne de base 8` quand elle n’a que des lignes de base.

Fais glisser latéralement sur la carte repliée pour changer le nombre le plus important sans l’ouvrir. Avec des colonnes, le glissement règle leur nombre, de 1 à 24, et s’enclenche à 2, 3, 4, 6, 8, 12, 16 et 24 au passage (le trackpad le fait sentir). Sans colonnes, il règle les lignes, de 1 à 24, avec des arrêts à 2, 3, 4, 6, 8 et 12. Avec seulement des lignes de base, il règle leur pas, de 2 à 32, avec des arrêts à 4, 6, 8, 12, 16 et 24. Tire assez loin au-delà du bord gauche et la carte affiche {Relâchez pour retirer} : relâche, et la grille disparaît.

Ouvre la carte d’un clic. Ses trois tuiles, {Colonnes}, {Lignes} et {Lignes de base}, activent et désactivent chaque partie, et chaque partie active montre ses valeurs en dessous.

::: fields
- **Colonnes**, **Lignes** (tuiles) : activent ou désactivent les colonnes ou les lignes. Les lignes arrivent en nombre suffisant pour former des cases carrées avec les colonnes, avec la gouttière et la marge des colonnes, jusqu’à 24.
- **Lignes de base** (tuile) : active les lignes de base, espacées de 4 sur un plan de travail de moins de 600 de large, sinon de 8.
- **Colonnes**, **Lignes** (rangées de la carte) : les boutons moins et plus en retirent ou en ajoutent une ; le champ accepte tout nombre de 1 à 48.
- **Gouttière** : l’espace entre une colonne (ou une ligne) et la suivante, en points, 0 ou plus, en points entiers.
- **Marge** : l’espace avant la première colonne et après la dernière, le même aux deux bouts, 0 ou plus.
- **Ligne de base** : la distance d’une ligne de base à la suivante, de 2 à 200, par demi-points.
- **Décalage** : à quelle distance du haut les lignes de base commencent, en points entiers.
- {Repères aux marges} : place des repères là où les colonnes et les lignes commencent et finissent, pour t’y tenir une fois la grille masquée. Les repères déjà présents ne sont pas ajoutés deux fois. Voir [les repères](/docs/canvas.html#guides).
- Le **×** de la carte ouverte ({Supprimer la grille de mise en page}) : retire toute la grille.
:::

Les colonnes et les lignes remplissent toujours ce que les marges laissent : leur propre largeur découle donc du nombre, de la gouttière et de la marge. Si les gouttières et les marges prennent plus de place que le plan de travail n’en a, les colonnes se réduisent à rien plutôt que de se chevaucher. Une grille dont toutes les parties sont désactivées est supprimée.

### Faire glisser la grille sur le canevas {#drag-grid}

Tant que la carte Grille de mise en page est ouverte et que le plan de travail est seul sélectionné, tu peux modifier la grille directement sur le plan de travail. Chaque colonne est numérotée le long de son bord supérieur, et la partie qui se trouve sous le pointeur est hachurée.

- **Gouttières.** Fais glisser n’importe quelle gouttière. Tirée loin de son milieu, chaque gouttière s’ouvre ; poussée vers lui, chaque gouttière se referme, comme si l’on écartait l’intervalle des deux côtés à la fois.
- **Marges.** Fais glisser la marge à l’un ou l’autre bout. Elle suit le pointeur, et l’autre bout prend la même marge.
- **Lignes de base.** Fais glisser n’importe quelle ligne de base sauf la première, qui reste en place. Le pas suit la ligne que tu tiens. Les lignes de base ne se saisissent que lorsqu’elles sont à au moins 9 points les unes des autres à l’écran : zoome pour atteindre celles qui sont serrées.

Une étiquette à côté du plan de travail indique `Gouttière 24`, `Marge 32` ou `Ligne de base 8` pendant que tu fais glisser. Chaque glissement est une seule étape d’annulation, et {{Esc}} l’annule avant que tu relâches.

### Ce qui se cale sur la grille {#snapping-to-grid}

Tout ce que tu déplaces, redimensionnes ou dessines sur un plan de travail se cale sur les bords de ses colonnes et de ses lignes, comme sur les repères et sur les autres calques. Un texte seul que tu déplaces se cale aussi sur les lignes de base par sa première ligne, chaque fois qu’une ligne de base est plus proche que n’importe quel bord. Une étiquette dans une pastille rouge indique sur combien de colonnes le calque s’étend quand ses deux bords tombent sur des bords de colonnes, par exemple `3 colonnes`.

Une grille masquée ne dessine rien et rien ne se cale sur elle : seul ce qui se voit sert au calage.

### Afficher et masquer les grilles de mise en page {#show-hide-grids}

{Grilles de mise en page} ({{⌃G}}) dans la barre des menus, à côté de {Règles} et de {Repères}, affiche ou masque toutes les grilles de mise en page à la fois. Le même interrupteur se trouve dans le menu du coin des règles et dans le menu du zoom. Le choix vaut pour toutes les fenêtres et reste mémorisé la prochaine fois que tu ouvres Bezzle ; il ne change que ce que tu vois, pas le design.

En [mode Inspecter](/docs/inspect.html#inspect-mode), un plan de travail sélectionné présente sa grille aux développeurs : les colonnes par leur nombre et leur largeur, avec la gouttière et la marge, les lignes de la même façon, et le pas des lignes de base, chaque valeur prête à copier.

## Grilles de répétition {#repeat-grids}

Une grille de répétition, c’est un calque, ou quelques-uns réunis en groupe, conçu une seule fois et répété en colonnes sur la largeur et en lignes sur la hauteur, toujours au même espacement. Chaque cellule est une copie de la première. Tout ce que tu changes dans une cellule, son apparence, sa taille et sa place, un calque ajouté ou retiré, change dans toutes les cellules pendant que tu le fais. Ce que chaque cellule contient lui appartient : ses textes et ses images. Les grilles de répétition sont ainsi le moyen le plus rapide de construire une liste, une galerie, un menu ou un tableau de cartes.

Au bout du compte, une grille de répétition est un groupe comme un autre : elle se dessine, s’exporte et se partage comme un groupe.

### Créer une grille de répétition {#make-repeat-grid}

::: steps
1. **Conçois une cellule.** Une carte, une ligne de liste, une vignette avec sa légende.
2. **Sélectionne-la.** Un seul calque devient la cellule elle-même ; plusieurs sont d’abord réunis dans un groupe.
3. **Choisis {Objet › Créer une grille de répétition}** ({{⌘R}}), ou clique sur la carte en pointillés {Répétition} en bas de l’inspecteur, ou fais un clic droit et choisis {Créer une grille de répétition}.
4. **Étire-la.** La grille commence avec une seule cellule. Fais glisser la poignée de son bord droit pour plus de colonnes, ou celle de son bord inférieur pour plus de lignes.
:::

Ce que tu sélectionnes doit se trouver ensemble dans un même plan de travail, un même groupe ou sur le canevas, et rien ne doit être verrouillé, ni être un plan de travail ou une grille de répétition. Une cellule de grille ne peut pas elle-même devenir une grille, mais quand une cellule est un groupe de plusieurs calques, les calques qu’elle contient le peuvent, ce qui met une grille dans une grille.

La nouvelle grille s’appelle `Grille de répétition 1`, `Grille de répétition 2` et ainsi de suite, et prend la place de ta sélection parmi les calques. Ses espacements commencent à environ un huitième du petit côté de la cellule, par pas de 4, jamais moins de 4 ni plus de 32.

### Étirer les colonnes et les lignes {#grid-handles}

Quand une grille de répétition est sélectionnée et que tu as l’outil Sélection en main, trois poignées bleu crayon s’y trouvent : une au milieu de son bord droit pour les colonnes, une au milieu de son bord inférieur pour les lignes, et une ronde au coin inférieur droit pour les deux à la fois.

Pendant que tu fais glisser, une nouvelle cellule arrive dès que le pointeur dépasse le milieu de l’endroit où elle sera, et son contour se dessine plus nettement à mesure que tu t’en approches. Reviens en arrière pour retirer des cellules. Une étiquette indique la taille au fur et à mesure, par exemple `3 × 4 · 12 cellules`. Une grille peut avoir de 1 à 100 colonnes et de 1 à 100 lignes. {{Esc}} annule le glissement.

Quand tu ajoutes des cellules, les nouvelles prennent leurs textes et leurs images dans les cellules que tu as déjà. Les nombres continuent : si tes cellules disent `Étape 1` et `Étape 2`, les suivantes disent `Étape 3` et `Étape 4`, et `07`, `08` se poursuivent en `09`, `10`, avec le même nombre de chiffres. Tout le reste se répète, en boucle.

### Espacer les cellules {#grid-gaps}

Pointe entre deux cellules et l’espacement s’allume. Fais-le glisser pour espacer les cellules : la cellule qui suit l’espacement que tu tiens reste sous le pointeur, et tous les espacements qui le précèdent bougent de la même façon. Maintiens {{⇧}} pour changer ensemble les espacements horizontaux et verticaux. L’étiquette indique `Espacement 20`, ou `Espacements 20` avec {{⇧}}.

Dans la carte Grille de répétition, les espacements acceptent tout nombre de −1 000 à 10 000. En dessous de zéro, les cellules se chevauchent.

### Faire pivoter et retourner une grille {#turn-grid}

Juste à l’extérieur de n’importe quel coin d’une grille sélectionnée, le pointeur la fait pivoter d’un bloc, comme n’importe quel calque. Maintiens {{⇧}} pour pivoter par pas de 15°. Les lignes suivent alors l’orientation de la grille, et les poignées et les espacements aussi. {Objet › Retourner horizontalement} et {Objet › Retourner verticalement} retournent aussi la grille d’un bloc : chaque cellule garde ce qu’elle contient.

### La carte Grille de répétition {#repeat-grid-card}

Sélectionne la grille pour voir sa carte. Repliée, elle indique sa taille, par exemple `3 × 4`. Ouverte, elle contient :

::: fields
- **Le champ de cellules** : douze carrés en largeur et cinq en hauteur. Pointe un carré et la grille montre autant de colonnes et de lignes sur le canevas, avec la taille à côté (`5 × 2 · 10 cellules`) et {Cliquez pour appliquer}. Clique pour donner cette taille à la grille.
- **Colonnes**, **Lignes** : des boutons moins et plus ({Une colonne de moins}, {Une colonne de plus}) et un champ, de 1 à 100.
- **Espacements** : **↔** pour l’espacement entre les colonnes, **↕** pour l’espacement entre les lignes, de −1 000 à 10 000.
- **Contenu** : chaque texte de la première cellule, et chaque forme qui y contient ou peut contenir une image, avec un menu, {Textes} ou {Images}, pour remplir ce calque dans chaque cellule (voir [Remplir les cellules](#fill-cells)).
- {Importer des données…} : remplit les calques de texte de la grille à partir d’un fichier texte ou CSV.
- {Dissocier la grille} : fait de la grille un groupe de ses cellules, chacune devenant un calque à part entière ({{⇧⌘R}}).
:::

Une légende te rappelle les poignées : tire les poignées de ses bords droit et inférieur, et fais glisser entre deux cellules pour les espacer ; {{⇧}} les espace dans les deux sens.

Tapée dans la carte Cadre, une nouvelle largeur ou hauteur étire toute la grille, avec ses cellules et ses espacements.

### Changer une cellule les change toutes {#cells-alike}

Sélectionne n’importe quel calque dans n’importe quelle cellule et modifie-le : son remplissage, sa bordure, sa typographie, sa position, sa taille. Chaque cellule suit pendant que tu travailles. Ajoute un calque à une cellule, ou supprimes-en un, et chaque cellule le gagne ou le perd. Tant qu’un calque d’une cellule est sélectionné, le même calque est entouré d’un trait pointillé dans toutes les autres cellules : tu vois tout de suite jusqu’où un changement ira.

La carte {Dans une grille de répétition} te dit dans quelle cellule tu es (`Cellule 5 sur 12`) et ce qui est partagé : tout ce que tu y changes change dans toutes les cellules, sauf les mots d’un texte et l’image d’une forme, que chaque cellule a en propre. {Sélectionner la grille} sélectionne la grille elle-même.

La liste des calques ne montre que la première cellule d’une grille, puisque toutes les autres la suivent.

### Remplir les cellules de textes et d’images {#fill-cells}

Chaque calque de texte de la cellule, et chaque forme qui contient ou peut contenir une image, peut être rempli dans toutes les cellules à la fois. Une forme aussi grande que la cellule entière compte comme le fond de la cellule, pas comme un emplacement pour une image, sauf si elle en montre déjà une.

Pour un texte, le menu {Textes} (dans la carte Grille de répétition) ou {Remplir les cellules} (dans la carte d’un texte situé dans une cellule) propose :

- **Des textes d’exemple** : {Nombres}, {Noms}, {Prénoms}, {Villes}, {Pays}, {Intitulés de poste}, {Entreprises}, {Adresses e-mail}, {Prix}, {Dates}, {Heures}, {Titres} et {Phrases}. Chaque élément montre deux exemples, et le pointer affiche les textes dans chaque cellule du canevas avant que tu choisisses. Les prix, les dates et les heures sont écrits comme ton Mac les écrit. Les nombres gardent les mots qui entourent un nombre déjà présent.
- {À partir d’un fichier…} : un fichier texte avec une ligne par cellule, ou un fichier CSV dont les colonnes vont aux calques de texte qui portent leur nom.

Pour une forme, {Choisir des images…} prend des images ou un dossier d’images : chaque cellule reçoit la suivante, dans l’ordre du Finder par nom, et la série recommence s’il y a moins d’images que de cellules. Les images PNG, JPEG, HEIC, GIF, TIFF, WebP et BMP sont acceptées, et chacune est copiée dans le design.

Les deux menus se terminent par {Mélanger}, qui redistribue les textes ou les images entre les cellules sans jamais les laisser comme ils étaient, et par {Comme la première cellule} (ou {Comme cette cellule}, depuis la carte d’une cellule), qui donne à chaque cellule les mêmes textes ou la même image. Un clic droit sur un texte ou une image dans une cellule propose aussi {Identique dans chaque cellule} et {Mélanger les cellules}.

Tu peux aussi faire glisser des fichiers directement sur la grille :

- **Un fichier texte ou CSV, ou des mots venus d’une autre app**, déposés sur la grille : une ligne par cellule. Avec un tableau dont la première ligne nomme les colonnes (séparées par des virgules, des points-virgules ou des tabulations), chaque colonne va au calque de texte du même nom, sans tenir compte des majuscules, et les colonnes restantes vont aux calques de texte restants, dans l’ordre de lecture. Pendant que tu le tiens au-dessus de la grille, une étiquette dit ce qu’il va faire, par exemple `2 colonnes dans 12 cellules`.
- **Plusieurs images, ou un dossier**, déposés sur une forme d’une cellule : une image par cellule, en boucle.

### Dissocier une grille {#ungroup-grid}

{Objet › Dissocier la grille} ({{⇧⌘R}}), ou {Dissocier la grille} dans la carte ou dans le menu du clic droit, fait de la grille un simple groupe des cellules qu’elle contient. Dès lors, chaque cellule est un calque à part entière, et en changer une ne change plus les autres.

## Des tailles qui se recomposent {#adapt}

Donne une nouvelle taille à un plan de travail, et son design est remis en page pour cette taille, en pensant au design plutôt qu’en épinglant chaque calque à un bord. Une affiche rendue carrée pour Instagram garde son poids sur la page ; un écran de téléphone devenu tablette garde son texte à la taille où il se lit, et gagne de la place. Il n’y a aucune contrainte à définir : Bezzle déduit de la place des éléments ce qui doit s’étirer, ce qui doit rester contre un bord et ce qui va ensemble.

::: figure adapt
Fais glisser un plan de travail à une nouvelle taille, et son design se recompose.
:::

### Comment Bezzle lit un design {#how-it-reads}

Avant de remettre un design en page, Bezzle le lit :

- **Fonds.** Une forme ou une image qui couvre presque tout le plan de travail (85 % ou plus) est son fond, et continue de le couvrir à toutes les tailles.
- **Fonds perdus.** Un calque qui sort par un bord ou un coin, sans traverser toute la page, continue de sortir par ce même bord ou ce même coin.
- **Bandeaux.** Une barre le long d’un bord qui va d’un bout à l’autre, avec d’autres calques posés dessus, leur sert de support : elle va d’un bout à l’autre à toutes les tailles.
- **Blocs.** Tout le reste est lu comme des blocs : un calque seul, quelques-uns qui se chevauchent et vont donc ensemble, ou une forme qui en contient d’autres, qui est un petit design à elle seule. Un grand groupe qui contient du texte parmi d’autres calques, sans support propre, est ouvert et lu comme une partie de la page ; un logo, une carte ou un dessin avec une étiquette reste un seul bloc.
- **Rangées et colonnes.** Les blocs sont séparés le long du plus large espace vide entre eux, encore et encore, en rangées de colonnes de rangées.
- **Espacements.** Un espacement est *serré* quand il lie deux blocs (un titre et la ligne en dessous) et *aéré* quand il laisse respirer, nettement plus large que le plus étroit et une bonne part de la longueur.
- **Places.** Dans sa rangée ou sa colonne, chaque bloc reste du côté dont il est proche, au milieu, ou des deux côtés.

Les calques masqués, et ceux qui sont à plus de moitié hors du plan de travail, ne sont pas lus comme des blocs : ils gardent leur place par rapport aux bords.

### Écrans et compositions {#interface-composition}

Bezzle remet un design en page de l’une de deux façons.

- **Comme une composition**, pour les publications, l’impression et les diapositives : tout le design grandit ou rétrécit avec la page, texte compris, et garde ainsi la part de la page qu’il couvre.
- **Comme une interface**, pour les écrans et les pages web : le texte reste à la taille où il se lit, et le design gagne ou cède de la place. Sur un écran plus étroit, les marges latérales se resserrent aussi.

Bezzle les distingue par la taille : la taille actuelle du plan de travail quand c’est l’un des préréglages, sinon la taille qu’on lui donne. Une taille des préréglages {Appareils} (iPhone, Android, iPad, Mac, Web, Apple Watch) donne une interface ; une taille des préréglages {Réseaux sociaux} ou {Impression et diapositives} donne une composition. À toute autre taille, un plan de travail au moins 1,9 fois plus haut que large est une interface (une longue page web) ; sinon, Bezzle regarde le texte : un petit texte par rapport à la page se lit comme un écran, un texte dessiné à l’échelle de la page se lit comme une affiche.

### Ce qui s’étire et ce qui se réorganise {#rearranging}

À la nouvelle taille, le design devient aussi grand qu’il lui convient tout en tenant dans la page. Les espacements serrés gardent leur proportion ; la place qui reste va aux espacements aérés, ou autour d’un bloc qui se tient seul. Ce qui peut s’étirer s’étire :

- Les barres et les panneaux vont d’un bord à l’autre.
- Un texte réglé sur une largeur (Hauteur automatique ou Taille fixe) revient à la ligne selon sa nouvelle largeur, et un texte aussi large que ses mots grandit et rétrécit d’un bloc. Sur une page, une colonne de texte ne s’élargit que jusqu’à un certain point, pour que ses lignes gardent une longueur agréable à lire.
- Les formes simples prennent n’importe quelle taille, et les filets s’allongent dans leur sens.
- Une image est recadrée autour de ce qu’elle montre. Bezzle examine chaque image sur ton Mac pour trouver ce qui attire l’œil, et un détourage (une image à fond transparent) est placé d’après son sujet.

Là où le design ne tient plus tel qu’il est, il est réorganisé. Une image au-dessus de son texte passe à côté sur un format large, et revient au-dessus sur un format haut. Des cartes en rangée passent à la ligne pour former une grille de plusieurs rangées, les cellules s’élargissant pour remplir la rangée quand elles le peuvent, et Bezzle préfère ne pas laisser une dernière rangée avec moins de la moitié de ses cellules. Il ne change la disposition que lorsqu’une autre convient nettement mieux à la taille, si bien qu’un glissement d’avant en arrière ne papillote pas entre deux dispositions.

### Redimensionner un plan de travail {#resize-artboard}

Chaque façon de donner une taille à un plan de travail remet son design en page :

- **En faisant glisser** une poignée de bord ou de coin sur le canevas. Maintiens {{⇧}} pour garder les proportions et {{⌥}} pour redimensionner depuis le centre, comme pour n’importe quel calque.
- **En tapant** une largeur ou une hauteur dans la carte Cadre.
- **En choisissant une taille** dans {Taille}, sur la carte Plan de travail. Pointer une taille dans le menu montre le plan de travail à cette taille sur le canevas, son design déjà remis en page, avant que tu choisisses. (Les préréglages sont listés dans [Tailles et préréglages](/docs/canvas.html#presets).)

Pendant que tu fais glisser un bord, Bezzle montre discrètement ce qu’il a compris du design : chaque bloc entouré d’un contour, chaque espacement aéré sous la forme d’un ressort qui s’étire et se comprime selon la place qu’il reçoit, et chaque espacement serré sous la forme d’une agrafe qui tient deux blocs ensemble. Quand le design est disposé autrement, les contours pulsent et le trackpad donne un léger coup. Quand une disposition change, ou que le plan de travail prend une taille que tu as choisie, chaque calque voyage jusqu’à sa nouvelle place, les plus proches un instant avant les plus lointains ; rien ne saute.

Un redimensionnement est une seule étape d’annulation, quelle que soit la durée du glissement.

### Revenir à une taille {#remembered}

Le même design à la même taille est toujours le même design : rien ne bouge tant que la taille ne bouge pas. Et revenir à la taille à laquelle un design a été fait le rend exactement tel qu’il était. Tant que tu laisses un plan de travail tel qu’il a été remis en page, sa taille suivante est composée à partir du design tel que tu l’as fait, et non de la dernière étape en chemin : essayer des tailles dans un sens puis dans l’autre n’use donc jamais le design.

Bezzle s’en souvient pour les 64 plans de travail que tu as redimensionnés le plus récemment, tant qu’il est ouvert. Dès que tu changes quelque chose sur un plan de travail redimensionné, c’est le design tel qu’il est alors qui sert de point de départ à la taille suivante.

### Garder les calques en place {#adapt-off}

{Adapter la mise en page}, dans la carte Plan de travail, est activé au départ pour chaque plan de travail. Désactive-le quand un plan de travail doit seulement prendre une nouvelle taille. Ses calques restent alors où ils sont : faire glisser son bord gauche ou supérieur les laisse à leur place sur le canevas, et une taille tapée ou choisie les garde à leur place par rapport à son coin supérieur gauche. Réactive l’interrupteur pour que la taille suivante soit remise en page. {Rogner le contenu}, juste à côté, décide si ce qui dépasse du bord est coupé.

### À l’intérieur des copies de composants {#inside-copies}

Une copie d’un composant est remise en page selon ses propres règles quand tu l’agrandis ou la réduis : un calque qui couvre la plus grande partie de la copie s’étire avec elle, un calque placé en son milieu reste au milieu, un calque proche d’un bord reste à la même distance de ce bord, et un bouton grandit autour de son libellé. [Composants](/docs/components.html#copy-resizing) l’explique en détail.

## Carrousels {#carousels}

Un carrousel est un plan de travail fait de diapositives côte à côte, conçues d’un seul tenant, pour que ce qui passe d’une diapositive à la suivante reste aligné de part et d’autre de la coupe. Il fait toujours un nombre entier de diapositives de large et une diapositive de haut, et il est exporté en une image par diapositive. [La page sur le canevas](/docs/canvas.html#carousels) montre l’allure et le comportement des carrousels sur le canevas.

Pour en créer un, choisis un format de carrousel à la fin du menu {Taille} de la carte Plan de travail. Un nouveau carrousel commence avec 3 diapositives, ou plus si le plan de travail est déjà plus large que cela. Sa carte s’appelle alors {Carrousel} :

::: fields
- **Format** : {Portrait 4:5}, {Carré 1:1}, {Vertical 3:4} ou {Story 9:16}, ou {Plan de travail simple} pour en refaire un plan de travail ordinaire.
- **L**, **H** : la taille de chaque diapositive, en pixels entiers, pour des proportions qu’aucun des formats n’a.
- **Diapositives** : des boutons moins et plus et un champ, de 1 à 20, autant qu’Instagram en accepte. Les diapositives sont ajoutées et retirées à droite.
:::

| Format | Taille d’une diapositive | Pour |
| --- | --- | --- |
| Portrait 4:5 | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| Carré 1:1 | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| Vertical 3:4 | 1080 × 1440 | Instagram |
| Story 9:16 | 1080 × 1920 | TikTok |

Faire glisser le côté d’un carrousel ajoute ou retire des diapositives entières, une de plus dès que le pointeur dépasse la moitié de la suivante. Faire glisser son haut ou son bas règle la hauteur des diapositives, qui se cale sur les proportions de chaque format. Un carrousel n’est jamais remis en page : ses calques restent où ils sont, et ceux qui dépassent la dernière diapositive restent aussi, hors de vue, jusqu’à ce qu’il s’agrandisse de nouveau. Ce que tu déplaces se cale sur les bords et les milieux de ses diapositives, et une grille de mise en page se répète sur chaque diapositive.

## Commandes et touches {#commands}

| Commande | Où | Touches |
| --- | --- | --- |
| Afficher ou masquer les grilles de mise en page | {Grilles de mise en page} dans la barre des menus | {{⌃G}} |
| Créer une grille de répétition | {Objet › Créer une grille de répétition} | {{⌘R}} |
| Dissocier une grille de répétition | {Objet › Dissocier la grille} | {{⇧⌘R}} |
| Espacer les cellules dans les deux sens | Faire glisser un espacement avec | {{⇧}} |
| Faire pivoter une grille par pas de 15° | Faire glisser hors d’un coin avec | {{⇧}} |
| Annuler un glissement | Pendant le glissement | {{Esc}} |

Ensuite : crée des éléments qui se répètent dans tout un design avec [les composants et les styles](/docs/components.html), ou empile de nombreuses publications sur un seul plan de travail avec [les piles](/docs/decks.html).
