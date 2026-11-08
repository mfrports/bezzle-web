---
title: Images et photos
nav: Images et photos
lede: Fais entrer des photos, place-les dans n’importe quelle forme, garde des calques dans un masque, développe la lumière et la couleur d’une photo, et détache son sujet de l’arrière-plan, sans jamais toucher à l’original.
---

Dans Bezzle, une image est toujours quelque chose dont un calque est rempli : un rectangle, une ellipse ou un tracé qui montre une photo, les lettres d’un texte, une bordure, ou l’arrière-plan d’un plan de travail. Tout ce qu’une forme peut faire, une image le peut donc aussi : angles arrondis, bordures, ombres, flous, 3D. L’image elle-même est copiée dans le design et n’est jamais modifiée. Sa place dans son cadre, son développement et la suppression éventuelle de son arrière-plan sont tous gardés à côté d’elle, pour que tu puisses toujours revenir en arrière.

## Faire entrer des images {#bringing-in}

### Glisser depuis le Finder {#dropping}

Fais glisser un ou plusieurs fichiers image, ou un dossier qui en contient, depuis le Finder sur le canevas. Avant que tu relâches, le canevas montre ce qui va se passer : sur une forme, l’image s’y montre déjà, recadrée comme elle le sera, et le contour de la forme s’illumine ; partout ailleurs, chaque image se montre en transparence là où elle se placerait, le plan de travail qui l’accueillerait étant entouré d’un contour. Une étiquette en dessous dit ce que fera le relâchement.

| Relâcher sur | Ce qui se passe | L’étiquette indique, par exemple |
|---|---|---|
| Une forme ou un texte | L’image la remplit ; les lettres d’un texte la montrent. Une image déjà présente est remplacée. | {Remplir Rectangle}, {Remplacer l’image de Rectangle} |
| Une forme dans une grille de répétition, avec plusieurs images | La copie de la forme dans chaque cellule reçoit l’image suivante, en recommençant au début quand il y a moins d’images que de cellules. | {6 images dans 6 cellules} |
| Une forme ou un texte sur un plan de travail, avec plusieurs images | Une publication par image : le plan de travail devient une pile, et gagne autant de publications qu’il lui faut (voir [Piles](/docs/decks.html)). | {4 images dans 4 publications} |
| L’écran d’une maquette | L’image va dans l’écran, même là où un reflet ou une ombre le recouvre (voir [Écrans de maquettes](#mockups)). | {Remplir Écran} |
| N’importe où ailleurs | Chaque image devient un calque à part, sur le plan de travail sous le pointeur ou sur le canevas. | « Ajouter à » et le nom du plan de travail, ou {Ajouter 3 images à la zone de travail} |

Une image qui devient un calque à part est un rectangle nommé d’après son fichier, rempli de l’image. Elle arrive à raison d’un point par pixel, mais jamais à plus de 60 % de la largeur ou de la hauteur du plan de travail (480 sur 480 points sur le canevas hors d’un plan de travail), en gardant ses proportions, centrée là où tu relâches. Plusieurs images se déploient en éventail, chacune 24 points à droite et en dessous de la précédente. Une photo prise de côté arrive à l’endroit.

Bezzle accepte les fichiers PNG, JPEG, HEIC et HEIF, GIF, TIFF, WebP et BMP. Un dossier fait entrer les images qu’il contient, dans l’ordre de leurs noms. Un calque verrouillé est ignoré, comme s’il n’y avait rien, et rien ne peut être déposé dans un design qui ne peut qu’être regardé.

> [!windows]
> Bezzle pour Windows accepte les images PNG, JPEG, WebP et AVIF ; pas encore HEIC, HEIF, GIF, TIFF ni BMP.

### Depuis le menu de remplissage {#from-the-fill-menu}

N’importe quelle forme peut recevoir une image à la place de sa couleur : ouvre la pastille de son remplissage sur la carte {Remplissage} et choisis {Image}, puis choisis le fichier. Une fois qu’une image est là, le même menu propose {Choisir une autre image…} pour la remplacer. Tu peux aussi déposer un fichier image depuis le Finder directement sur la pastille d’un remplissage ou d’une bordure. Seul le premier remplissage d’un calque peut être une image, ainsi que n’importe laquelle de ses bordures (voir [Couleur, bordures et effets](/docs/looks.html#fill-menu)).

### Beaucoup d’images à la fois {#many-pictures}

Pour remplir d’un coup chaque cellule d’une grille de répétition, dépose plusieurs images sur une forme qu’elle contient, ou utilise le menu {Images} de la carte {Grille de répétition}, qui propose {Choisir des images…} pour un ensemble d’images ou un dossier, une image par cellule (voir [Mise en page et toutes les tailles](/docs/layout.html)). Pour faire une publication de chaque image, dépose-les sur une forme d’un plan de travail (voir [Piles](/docs/decks.html)).

### Écrans de maquettes {#mockups}

Une maquette Photoshop, comme la photo d’un téléphone, d’un ordinateur portable ou d’une affiche, arrive dans Bezzle avec l’emplacement prévu pour un design gardé comme un écran : une image fixée par ses coins là où se trouvait l’objet dynamique de la maquette, vue sous le même angle (voir [Importer des designs](/docs/import.html)). Dépose une image n’importe où sur l’écran, même sur les reflets et les ombres qui le recouvrent, et elle va dans l’écran sous cet angle. La façon dont un calque fixé par ses coins peut être remodelé est expliquée dans [Couleur, bordures et effets](/docs/looks.html#pinned-corners).

## Placer une image dans son cadre {#placing}

Une image remplit son calque comme une photo remplit un cadre : elle le couvre entièrement, et ce qui dépasse le contour du calque est rogné. Pour choisir la partie qui se voit, place-la.

::: steps
1. **Commence le placement.** Double-clique sur le calque, ou sélectionne-le et appuie sur {{Return}}, ou choisis {Placer l’image} dans son menu contextuel. L’image entière se montre, estompée là où elle dépasse le contour, avec des traits de coupe à ses coins et le contour du calque dessiné par-dessus.
2. **Fais glisser l’image** pour la déplacer dans son cadre. Son milieu se cale sur celui du calque quand il s’en approche à moins de 5 points à l’écran, et un repère s’affiche au milieu.
3. **Fais glisser un coin** pour l’agrandir ou la réduire, par rapport au coin opposé. Une étiquette affiche sa taille, en proportion de la taille qui couvre juste le calque.
4. **Termine.** Appuie sur {{Return}} ou {{Esc}}, double-clique sur l’image, clique n’importe où ailleurs, ou choisis {Terminer le placement de l’image}.
:::

| Pendant le placement | Effet |
|---|---|
| {{⇧}} en faisant glisser l’image | Garde le déplacement bien horizontal ou bien vertical |
| {{⌘}} en faisant glisser l’image | La déplace librement, sans se caler sur le milieu |
| {{⌥}} en faisant glisser un coin | La redimensionne par rapport à son milieu |
| {{←}} {{→}} {{↑}} {{↓}} | La déplace de 1 point horizontalement ou verticalement à l’écran, quelle que soit l’orientation du calque |
| {{⇧}} avec les touches fléchées | La déplace de 10 points |
| {{Esc}} pendant un glissement | Remet l’image là où le glissement a commencé |

L’image garde ses proportions, et couvre toujours le calque, de sorte qu’aucun bord du calque n’apparaît jamais. Tire-la trop loin, ou rends-la plus petite qu’il ne faut pour couvrir, et elle cède un peu, comme un élastique ; relâche, et elle revient à la position la plus proche où elle couvre. Sa position est gardée en proportion du calque, si bien qu’elle reste en place quand tu redimensionnes le calque plus tard. Une image venue d’une autre app, montrée entière ou comprimée à la taille de son calque, couvre le calque dès ton premier déplacement.

Pendant que tu places une image, la carte {Remplissage} s’ouvre et dit ce que tu peux faire. Sur un tracé rempli d’une image, {{Return}} place l’image au lieu d’ouvrir ses points ; pour ceux-ci, choisis {Modifier les points} dans son menu contextuel. Retourner un calque retourne son image avec lui.

## Masques {#masks}

Un masque est une forme qui contient d’autres calques, comme une forme contient une image : quels que soient ces calques (photos, texte, groupes, autres formes), ils ne se montrent qu’à l’intérieur du contour de la forme. La forme est dessinée telle qu’elle est : son remplissage et son ombre se trouvent sous ce qu’elle contient, et sa bordure par-dessus, comme un cadre, avec son éventuelle ombre intérieure. Dans la liste des calques, un masque est un groupe, nommé {Masque 1}, {Masque 2} et ainsi de suite, sa forme tout en bas. Il est aussi grand que sa forme, de sorte que ses poignées entourent ce qui se voit.

### Créer un masque {#making-a-mask}

Il y a trois façons de faire, et chacune montre le résultat avant que tu le valides :

- **Depuis le menu.** Sélectionne une forme et les calques qu’elle doit contenir, et choisis {Objet › Masquer} ({{⌃⌘M}}), ou {Masquer} dans le menu contextuel. Pointer l’entrée du menu contextuel montre le masque créé sur le canevas, et ce qu’il rognerait s’estompe.
- **Depuis le mot proposé.** Quand tu sélectionnes une forme et des calques qui la chevauchent tous, certains la dépassant, une petite étiquette {Masquer} apparaît juste au-dessus d’eux sur le canevas. Pointe-la pour voir le masque, clique dessus pour le créer. Elle apparaît aussi après que tu as dessiné, déplacé ou redimensionné une forme de sorte qu’au moins la moitié de celle-ci se trouve sur une image qui la dépasse, par exemple quand tu dessines un cadre sur une photo ; elle disparaît dès que quoi que ce soit d’autre change.
- **En tenant quelque chose au-dessus d’une forme.** Fais glisser des calques sur une forme et reste immobile environ une seconde. Une ligne fait le tour du contour de la forme ; une fois la boucle fermée, la forme s’ouvre avec un petit retour du trackpad et s’illumine, et ce que tu tiens est aussitôt rogné à son contour, ce qui dépasse s’estompant en fantôme. Continue à faire glisser à l’intérieur de la forme pour choisir la partie qui se voit, et relâche : c’est dedans. Sors de la forme avant de relâcher, et elle se referme, et ne se rouvre pas pendant le même glissement.

Parmi les calques sélectionnés, celui qui contient les autres est un masque qui s’y trouve, sinon la forme la plus en avant qui ne montre pas d’image (comme une forme dessinée sur une photo, ou placée dessous), sinon la forme la plus en avant. Seuls les rectangles, les ellipses et les tracés peuvent contenir des calques, et seulement tant qu’ils sont à plat dans la page, non tournés en profondeur. Ce qu’ils contiennent doit les chevaucher, et les calques doivent se trouver sur le même plan de travail, hors d’une grille de répétition, et ne pas être verrouillés. Une forme qui entoure entièrement ce que tu tiens ne changerait rien, elle ne s’ouvre donc jamais. Le nouveau masque prend la place de la forme parmi les calques, de sorte que ce qui se trouvait au-dessus de la forme s’y trouve toujours.

### Travailler à l’intérieur d’un masque {#inside-a-mask}

- **Sélectionne ce qu’il contient** : double-clique pour entrer dans le masque, comme dans n’importe quel groupe, ou sélectionne le masque et appuie sur {{Return}} pour sélectionner tout ce qu’il contient.
- **Déplace ce qu’il contient** : fais-le glisser, et la partie qui se voit change. Tant qu’un calque à l’intérieur d’un masque est sélectionné, sa partie qui dépasse la forme se montre en fantôme estompé, pour que tu puisses aussi le saisir à cet endroit.
- **Ajoute d’autres calques** : tiens un autre calque au-dessus du masque, comme plus haut ; il entre par-dessus ce que le masque contient déjà.
- **Sors un calque** : fais-le glisser entièrement hors de la forme et relâche, ou choisis {Sortir du masque} dans son menu contextuel. Il ressort juste au-dessus du masque.
- **Change la forme** : sélectionne-la et redimensionne-la, remodèle-la ou change son apparence comme n’importe quelle forme. Ce qu’elle contient est rogné à son nouveau contour.

### La carte Masque {#mask-card}

Quand un masque est sélectionné, l’inspecteur montre une carte {Masque} qui nomme le genre de forme qui contient ({Rectangle}, {Ellipse} ou {Tracé}), avec un bouton {Libérer}. Quand un calque à l’intérieur d’un masque est sélectionné, la carte {Masque} nomme la forme dans laquelle il se trouve, avec un bouton {Sortir}.

### Libérer un masque {#releasing}

{Objet › Libérer le masque} ({{⌃⇧⌘M}}), {Libérer} sur la carte Masque, ou {Libérer le masque} dans le menu contextuel défait un masque : la forme et ce qu’elle contenait restent où ils sont, la forme en dessous, tous sélectionnés, et ce qui était rogné se montre de nouveau en entier. Cela fonctionne quand le masque ou n’importe quel calque qu’il contient est sélectionné. Un masque se défait aussi de lui-même quand sa forme est supprimée, ou quand il ne contient plus rien.

Les masques venus d’autres apps, où la forme qui rogne ne se voit pas, continuent de rogner ce qu’ils contiennent comme ils le faisaient là-bas.

## Développer une photo {#photo-card}

La carte {Photo} développe une image comme le ferait une chambre noire : sa lumière, ses couleurs et son détail. Elle s’affiche pour tout calque rempli d’une image, pour un plan de travail dont l’arrière-plan est une image, et pour un texte dont les lettres en montrent une. Rien de ce que tu fais ici ne modifie l’image elle-même : chaque réglage est un écart par rapport à la photo telle qu’elle a été prise, gardé avec le calque, et le remettre à 0 rend la photo telle qu’elle était.

### La carte repliée {#photo-folded}

Repliée, la carte montre les tons de l’image en petit et dit ce qui a été fait, en un ou deux mots pour sa lumière, sa couleur et son détail, par exemple {Plus clair} · {Plus chaud} · {Plus net}. Une image intacte indique {Original}.

::: fields
- **Le glissement** : sur la carte repliée, l’ampleur du développement, de rien jusqu’au double, avec un arrêt sur ce qu’il y avait. Sur une image intacte, le glissement va de rien vers ce qui conviendrait le mieux à la photo.
- **La baguette** : {Développer la photo au mieux}. Un clic calcule ce dont la photo a besoin, et le canevas y glisse en douceur : ses tons moyens ramenés à un gris moyen, ses extrémités à juste avant le noir et le blanc, de la lumière apportée aux ombres profondes et retirée des ciels clairs, une dominante de couleur en grande partie supprimée, et un peu plus de vie dans ses couleurs. C’est une seule étape d’annulation (Développer automatiquement).
- **Le ×** : {Revenir à l’original}, qui remet chaque réglage à 0 (Réinitialiser la photo), comme le fait de tirer la carte repliée au-delà de zéro. Les deux sont là une fois la photo développée.
:::

Les mots que la carte peut employer : pour la lumière, {Plus clair}, {Plus sombre}, {Plus contrasté}, {Moins contrasté} ou {Lumière ajustée} ; pour la couleur, {Plus chaud}, {Plus froid}, {Plus riche}, {Atténué}, {Plus rosé}, {Plus vert} ou {Couleurs ajustées} ; pour le détail, {Plus limpide}, {Plus voilé}, {Plus net} ou {Plus doux}.

### Les tons {#tones}

Ouvre la carte et les tons propres de l’image s’étendent en haut, sombres à gauche et clairs à droite, comme un paysage, avec le rouge, le vert et le bleu tracés par-dessus. Le paysage est divisé en cinq parties : les noirs (le huitième le plus sombre), les ombres, le milieu, les hautes lumières et les blancs (le huitième le plus clair). Pointe l’une d’elles pour voir son nom et sa valeur ; fais glisser latéralement dedans pour changer ce réglage, {Noirs}, {Ombres}, {Exposition}, {Hautes lumières} ou {Blancs}, et le paysage suit, son ancienne forme restant visible en transparence pendant que tu fais glisser. Un point sous une partie la marque comme modifiée, et une petite marque dans un coin supérieur signale quand une partie de l’image est perdue dans le noir pur, ou dans le blanc pur.

### Lumière, couleur et détail {#settings}

Sous les tons, choisis {Lumière}, {Couleur} ou {Détail}. Chaque réglage est une ligne : fais glisser latéralement n’importe où sur la ligne pour le régler, le repère en dessous suivant ton pointeur. La ligne marque un arrêt à 0, avec un petit retour du trackpad ; maintiens {{⌥}} pour aller quatre fois moins vite ; double-clique dessus pour la remettre à 0. Une modification est une seule étape d’annulation, nommée d’après le réglage.

| Réglage | Plage | Ce qu’il fait |
|---|---|---|
| {Exposition} | −4 à 4 IL, au centième | Toute la lumière de l’image. Ce qu’elle pousse au-delà du blanc est ramené en douceur. |
| {Contraste} | −100 à 100 | Écarte les tons les uns des autres, ou les rapproche, autour du gris moyen. |
| {Hautes lumières} | −100 à 100 | Éclaircit ou assombrit les tons clairs : en dessous de 0, fait revenir un ciel clair. |
| {Ombres} | −100 à 100 | Éclaircit ou assombrit les tons sombres : au-dessus de 0, y fait entrer de la lumière. |
| {Blancs} | −100 à 100 | Déplace les tons les plus clairs. |
| {Noirs} | −100 à 100 | Déplace les tons les plus sombres. |
| {Température} | −100 à 100 | Plus chaud au-dessus de 0, plus froid en dessous, comme si la photo avait été éclairée par une lumière du jour d’une autre couleur, d’environ 4 000 à 17 000 kelvins. |
| {Teinte} | −100 à 100 | Vers le magenta au-dessus de 0, vers le vert en dessous. |
| {Vibrance} | −100 à 100 | Plus de couleur, surtout là où il y en a le moins et moins sur la peau ; en dessous de 0, moins de couleur, le moins sur les couleurs les plus fortes. |
| {Saturation} | −100 à 100 | Plus ou moins de chaque couleur, de la même façon. |
| {Clarté} | −100 à 100 | Le contraste local, surtout dans les tons moyens, pour un rendu plus net ou plus doux. |
| {Texture} | −100 à 100 | Le détail fin, à l’échelle de la peau, de l’écorce et du tissu, sans jamais pousser les ombres profondes au noir ni les ciels clairs au blanc. |
| {Correction du voile} | −100 à 100 | Retire le voile là où même les couleurs les plus sombres sont loin du noir ; en dessous de 0, pose un voile, surtout là où il y en a déjà le plus, comme au loin. |
| {Netteté} | 0 à 100 | Des contours plus nets, en luminosité seulement, pour qu’ils ne prennent pas de franges colorées. |

Les tons gardent leur ordre quelle que soit la combinaison de réglages, de sorte qu’une partie plus claire de la photo ne devient jamais plus sombre qu’une partie plus sombre. {Température}, {Teinte}, {Vibrance} et {Saturation} dessinent le long de leurs lignes les couleurs entre lesquelles elles vont. Le détail se juge mieux de près : zoome sur la photo, comme la carte le suggère.

### Les couleurs une par une {#colour-wheel}

Sous les lignes de {Couleur} se trouve un anneau de huit couleurs autour d’un nuage doux des couleurs que l’image contient, les plus fortes le plus à l’extérieur : {Rouge}, {Orange}, {Jaune}, {Vert}, {Turquoise}, {Bleu}, {Violet} et {Magenta}. Chacune est une perle qui ne change que cette couleur dans la photo :

- **Fais glisser une perle autour de l’anneau** pour faire tourner sa teinte vers la couleur suivante ou vers la précédente, jusqu’à 30° dans chaque sens.
- **Fais-la glisser vers l’extérieur ou vers l’intérieur** pour plus ou moins de cette couleur. Le sens dans lequel part le glissement décide lequel des deux il fait.
- **Maintiens {{⌥}} et fais glisser vers le haut ou vers le bas** pour rendre cette couleur plus claire ou plus sombre.
- **Clique sur une perle** pour la choisir : ses lignes {Teinte}, {Saturation} et {Luminance} s’affichent sous l’anneau, chacune de −100 à 100, pour un réglage précis.

Une perle déplacée garde un fil en pointillés jusqu’à sa position de repos, et marque un arrêt à cette position quand elle la croise. Une couleur qui se trouve entre deux des huit appartient aux deux, si bien qu’elle change en douceur, quelle que soit celle que tu déplaces.

### Ajuster sur la photo elle-même {#on-the-photo}

Le bouton cible à côté de {Lumière}, {Couleur} et {Détail}, {Ajuster sur la photo}, fait de la photo elle-même le réglage tant que la carte est ouverte. Pointe la photo, et un anneau et une petite étiquette montrent la couleur sous le pointeur et ce qu’un glissement à cet endroit changerait.

- **Lumière** : fais glisser vers le haut sur la photo pour éclaircir le ton sous le pointeur, vers le bas pour l’assombrir, que ce soit un noir, une ombre, le milieu, une haute lumière ou un blanc.
- **Couleur** : fais glisser vers le haut pour plus de la couleur sous le pointeur, vers le bas pour moins, ou latéralement pour faire tourner sa teinte. Sur quelque chose qui n’a presque pas de couleur, comme une chemise blanche ou un mur gris, fais glisser latéralement pour réchauffer ou refroidir la lumière, ou vers le haut et le bas pour la teinter vers le magenta ou le vert ; ou clique simplement dessus ({Cliquer pour neutraliser}) pour en faire un gris neutre, ce qui règle la balance des blancs de toute la photo.

Maintiens {{⌥}} pour aller quatre fois moins vite. {{Esc}} annule un glissement en cours ou, entre deux glissements, rend la photo, comme le fait un nouveau clic sur le bouton cible ou la fermeture de la carte. Le détail ne peut pas être ajusté sur la photo. Tant que la cible est activée, faire glisser sur la photo la modifie au lieu de déplacer le calque.

### Voir l’original, et voir une seule partie {#compare}

Maintiens le bouton à côté de la cible, {Maintenez pour voir l’original}, pour voir la photo telle qu’elle a été prise aussi longtemps que tu le maintiens. Maintiens {{⌥}} en pointant {Hautes lumières}, {Ombres}, {Blancs} ou {Noirs}, dans les tons ou sur leurs lignes, ou l’une des huit couleurs, sur sa perle ou sur ses lignes, et le canevas ne montre que l’endroit où cela se trouve dans la photo : pour un ton, le reste devient gris et terne ; pour une couleur, le reste perd sa couleur. Quand la cible est activée, {{⌥}} montre la même chose pour ce qui se trouve sous le pointeur sur la photo.

Avec plusieurs images sélectionnées, la carte les change toutes, chacune à partir de ses propres réglages, et indique {Plusieurs} là où elles diffèrent. La baguette calcule ce qui convient à chacune. Une image développée l’est partout où elle se montre : sur le canevas, dans les vignettes de l’écran d’accueil et dans chaque export.

## Supprimer l’arrière-plan {#remove-background}

Supprimer l’arrière-plan détache le sujet d’une photo de son arrière-plan, personnes, animaux et produits, cheveux compris, et le laisse posé sur ce qui se trouve derrière lui dans ton design. Tout se fait sur ton Mac avec le framework Vision d’Apple ; les photos ne sont jamais envoyées. La photo d’origine est toujours conservée, pour que tu puisses retrouver son arrière-plan à tout moment.

> [!windows]
> Bezzle pour Windows ne sait pas encore supprimer l’arrière-plan d’une image : {Sujet seul} et {Supprimer l’arrière-plan} n’y sont pas.

::: figure cutout
Le sujet d’une photo détaché de son arrière-plan, posé sur le design qui se trouve derrière lui.
:::

::: steps
1. **Sélectionne un calque rempli d’une photo.** Ou plusieurs : chacun est détouré.
2. **Choisis {Sujet seul}** sur sa carte {Remplissage}, ou {Objet › Supprimer l’arrière-plan}, ou {Supprimer l’arrière-plan} dans son menu contextuel.
3. **Regarde-le travailler.** {Sujet seul} se remplit à mesure que le travail avance. Sur le canevas, une ligne balaie la photo pendant que Bezzle cherche ; le sujet est tracé dès qu’il est trouvé, et le reste s’efface ; quand le détourage est prêt, l’arrière-plan fond à partir du sujet vers l’extérieur.
:::

Le sujet est trouvé sur la photo ramenée à environ 2 000 pixels de large, puis son bord est dessiné à la taille propre de la photo, à partir de ses propres pixels, si bien que rien d’une grande photo n’est perdu. Les cheveux ressortent mèche par mèche, et la couleur de l’ancien arrière-plan est retirée du bord transparent, pour qu’aucune frange n’en reste visible sur ce sur quoi le sujet est désormais posé. Une photo qui remplit plusieurs des calques sélectionnés n’est détourée qu’une fois. Supprimer l’arrière-plan est une seule étape dans {Édition › Annuler}.

### Choisir les sujets qui restent {#picking-subjects}

Au départ, tout ce qui se détache dans la photo reste. Pour n’en garder qu’une partie, double-clique sur l’image détourée pour la placer. L’arrière-plan se montre en transparence à l’intérieur du calque, pour que tu voies ce qui a été écarté, et les sujets gardés sont tracés. Chaque sujet s’éclaire sous le pointeur : clique sur un sujet pour l’écarter, ou sur un sujet écarté pour le garder, et la photo est détourée de nouveau avec ceux-là seulement. Le dernier sujet n’est jamais écarté. Un clic attend un instant, pour qu’un double-clic puisse terminer le placement à la place. Pendant le placement, tu peux toujours faire glisser l’image ou un coin, comme d’habitude.

### Ce qu’un détourage fait au calque {#cutout-looks}

Une image détourée se comporte comme son sujet, et non comme son rectangle :

- **Les bordures** font le tour du sujet, comme le bord d’un autocollant.
- **Les ombres** sont projetées par le seul sujet, et l’étendue d’une ombre agrandit son contour.
- **Les remplissages au-dessus de l’image** colorent le seul sujet.
- **Les clics** en dehors du sujet passent à ce qui se trouve dessous.
- **Le développement** fonctionne sur le détourage comme sur n’importe quelle photo.

### Retrouver l’arrière-plan {#restore-background}

Choisis {Image entière} sur la carte Remplissage, ou {Objet › Restaurer l’arrière-plan}, ou {Restaurer l’arrière-plan} dans le menu contextuel, et la photo se montre de nouveau en entier. Le détourage est gardé dans le design, de sorte que choisir de nouveau {Sujet seul} le montre aussitôt, sans détourer la photo une nouvelle fois. Il garde tout ce qui se détache, comme au départ ; un choix de sujets que tu avais fait revient lui aussi aussitôt quand tu le refais.

Quand tu partages un design, ses détourages partent avec lui ; tant que l’un d’eux n’est pas arrivé, les autres voient la photo entière.

### Quand ce n’est pas possible {#cutout-trouble}

Supprimer l’arrière-plan fonctionne sur les calques remplis d’une image qui ne sont pas verrouillés, pas sur l’arrière-plan d’un plan de travail, et pour un détourage à la fois : la commande du menu est indisponible tant qu’un détourage est en cours. Quand une image ne peut pas être détourée, une ligne sous {Image entière} et {Sujet seul} dit pourquoi, pendant quelques secondes :

| La ligne indique | Parce que |
|---|---|
| Seul un calque rempli d’une image a un arrière-plan à supprimer. | Aucun des calques sélectionnés ne montre d’image. |
| Ce design est en lecture seule. | Le design ne peut qu’être regardé. |
| Rien dans l’image ne se détache de son arrière-plan. | Aucun sujet n’a été trouvé, comme dans un paysage ou un motif. |
| Rien ne se détache à l’endroit choisi dans l’image. | Le sujet sur lequel tu as cliqué pour le garder n’est pas un sujet que Bezzle peut trouver. |
| L’image n’a pas pu être lue. | Le fichier image est endommagé ou manquant. |
| L’image n’a pas pu être détourée. | Quelque chose d’autre l’en a empêché. |

## Commandes {#commands}

| Commande | Où | Touches |
|---|---|---|
| {Placer l’image}, {Terminer le placement de l’image} | Menu contextuel, ou double-clic sur le calque | {{Return}} |
| {Supprimer l’arrière-plan} | Menu Objet, menu contextuel, {Sujet seul} sur la carte Remplissage | |
| {Restaurer l’arrière-plan} | Menu Objet, menu contextuel, {Image entière} sur la carte Remplissage | |
| {Masquer} | Menu Objet, menu contextuel | {{⌃⌘M}} |
| {Libérer le masque} | Menu Objet, menu contextuel, {Libérer} sur la carte Masque | {{⌃⇧⌘M}} |
| {Sortir du masque} | Menu contextuel, {Sortir} sur la carte Masque | |
