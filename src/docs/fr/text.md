---
title: Texte
nav: Texte
lede: Compose des mots dans n’importe quelle police de ton Mac, d’une simple étiquette à des paragraphes et des listes, mets en forme des lettres isolées, courbe le texte le long d’un arc ou d’une forme, et vectorise-le.
---

Le texte dans Bezzle se comporte comme dans Adobe XD : un clic crée une ligne qui s’allonge pendant que tu tapes, un glissement crée un cadre où les lignes reviennent à la ligne. Chaque texte a une carte {Texte} dans l’inspecteur pour sa typographie, le menu {Format} met en forme des mots isolés, et ce que tu vois pendant que tu tapes est exactement ce qui est dessiné et exporté.

## L’outil Texte {#text-tool}

Appuie sur {{T}}, ou choisis {Texte} dans la barre d’outils. Le pointeur devient un curseur de texte.

### Un clic : un texte en Largeur automatique {#click}

Clique n’importe où et commence à taper. Le texte est en {Largeur automatique} : il s’élargit autant que ses mots, et ses lignes ne se coupent que là où tu appuies sur {{Return}}. Le clic marque le début de la ligne de base de la première ligne : son extrémité gauche pour un texte aligné à gauche, son milieu pour un texte centré, son extrémité droite pour un texte aligné à droite.

### Un glissement : un cadre où le texte revient à la ligne {#drag}

Trace un cadre et tape dedans. Le texte est en {Hauteur automatique} : il garde la largeur que tu as tracée, y fait revenir ses mots à la ligne, et grandit en hauteur à chaque ligne. Un cadre tracé plus étroit que 20 points devient à la place un texte en {Largeur automatique}.

### L’outil reste en main {#tool-stays}

Après un texte, tu as toujours l’outil Texte en main : clique de nouveau pour le suivant. Appuie sur {{Esc}} pour arrêter de taper, et de nouveau sur {{Esc}} pour poser l’outil.

- **Un nouveau texte ressemble au texte sélectionné.** Quand un texte est sélectionné, le suivant que tu crées prend sa police, sa taille, ses espacements, son alignement et sa couleur.
- **Un clic sur un texte permet d’y taper**, avec tous ses mots sélectionnés. Un glissement, sur un texte ou non, en crée toujours un nouveau.
- **Les poignées du texte sélectionné** le redimensionnent toujours quand l’outil Texte est en main.

Un nouveau texte, sans rien de sélectionné à imiter, est composé en SF Pro, la police du Mac, en 24 points, dans un noir doux (`#1C1B19`), aligné à gauche.

## Taper du texte {#typing}

Pour taper dans un texte qui existe déjà :

- Double-clique dessus.
- Sélectionne-le et appuie sur {{Return}}.
- Clique dessus avec l’outil Texte.

Tous ses mots sont d’abord sélectionnés, de sorte que ce que tu tapes les remplace ; clique ou utilise les touches fléchées pour placer le curseur où tu veux. Dans un groupe, le premier double-clic entre dans le groupe, et le suivant commence la saisie.

Pour arrêter de taper, appuie sur {{Esc}} ou clique n’importe où ailleurs sur le canevas. Un texte que tu laisses vide est retiré (sauf dans une cellule d’une grille de répétition ou dans une publication d’une pile, où ce sont les mots de cette cellule ou de cette publication).

- **Annuler pendant la saisie** reprend ce que tu as tapé étape par étape. Une fois que tu t’arrêtes, tout le temps de la saisie forme une seule étape dans l’historique du design, appelée {Saisir du texte}, ou {Ajouter du texte} pour un nouveau texte.
- **Coller** n’apporte que les mots, avec l’apparence des lettres qui les entourent.
- **Rien ne change dans ton dos.** Les guillemets et les tirets restent tels que tu les tapes, et les mots ne sont ni corrigés ni remplacés automatiquement.
- **Les poignées restent.** Le texte sélectionné garde ses poignées pendant que tu tapes : fais-en glisser une pour redimensionner le cadre, et la saisie continue là où elle en était, avec les mêmes lettres sélectionnées.
- **Le texte ne bouge pas.** Quel que soit son alignement, les lettres ne sautent pas pendant que tu tapes. Un texte centré en {Largeur automatique} s’élargit à partir de son milieu, et un texte aligné à droite s’élargit vers la gauche.

Dans une pile, {{Tab}} passe au même texte dans la publication suivante (voir [Piles](/docs/decks.html)).

## Comment les cadres de texte prennent leur taille {#sizing}

Chaque texte trouve sa taille de l’une de trois façons. Les trois boutons de la carte {Texte} passent de l’une à l’autre : {Largeur automatique}, {Hauteur automatique} et {Taille fixe}.

### Largeur automatique {#auto-width}

Aussi large que ses mots, aussi haut que ses lignes. Il a une seule poignée ronde, en bas : fais-la glisser pour agrandir ou réduire les lettres, et avec elles l’espacement entre les lignes et les paragraphes. Tu le fais pivoter juste à l’extérieur de ses coins ou de cette poignée.

### Hauteur automatique {#auto-height}

Une largeur à lui, et aussi haut que ses lignes. Fais glisser un côté pour faire revenir les mots à la ligne à une autre largeur. Fais glisser son haut, son bas ou un coin, et le cadre passe en {Taille fixe}.

### Taille fixe {#fixed-size}

Le cadre a la taille que tu lui donnes, quelle que soit la place que prennent ses mots. Les poignées ne changent que le cadre, jamais les lettres. Ses lignes peuvent se placer en haut, au milieu ou en bas du cadre.

Quand un cadre en {Taille fixe} est trop petit pour ses mots, le reste est masqué au-delà de son bord, et sa poignée du bas devient rouge. Double-clique sur la poignée du bas de n’importe quel texte qui a sa propre largeur pour ajuster de nouveau le cadre à ses mots : il passe en {Hauteur automatique}.

### Changer de mode, et taper une taille {#switching-sizing}

| | Largeur automatique | Hauteur automatique | Taille fixe |
| --- | --- | --- | --- |
| Pendant la saisie | S’élargit, et grandit en hauteur à chaque nouvelle ligne | Revient à la ligne à sa largeur, grandit en hauteur | Reste tel quel |
| En faisant glisser une poignée | Les lettres grandissent ou rétrécissent avec le cadre | Un côté fait revenir à la ligne ; le haut, le bas ou un coin le font passer en Taille fixe | Ne change que le cadre |
| En tapant dans {L} ou {H} sur la carte {Cadre} | Les lettres grandissent ou rétrécissent, selon la hauteur si elle a changé, sinon selon la largeur | Une largeur fait revenir à la ligne ; une hauteur le fait passer en Taille fixe | Ne change que le cadre |

Passe un texte qui revient à la ligne en {Largeur automatique}, et un saut de ligne est inséré partout où une ligne revenait à la ligne, pour qu’il garde exactement son allure. Redimensionné avec d’autres calques, un texte en {Largeur automatique} grandit selon la hauteur.

Agrandir ou réduire les lettres avec le cadre donne au texte une typographie qui lui est propre : s’il avait un style de texte nommé, il ne l’a plus, et le style reste tel qu’il était partout ailleurs.

## La carte Texte {#text-card}

Repliée, la carte {Texte} indique la police et la taille, par exemple {SF Pro · 24 pt}, ou {Plusieurs polices} quand les textes sélectionnés diffèrent. Fais glisser latéralement sur la carte pour changer la taille, à partir de 1 point ; le glissement marque un arrêt à 12, 14, 16, 20, 24, 32, 48 et 64. Clique dessus pour l’ouvrir. Les modifications s’appliquent à chaque texte sélectionné.

::: fields
- **Police** : chaque famille de polices de ton Mac, SF Pro en premier, chacune affichée dans ses propres lettres quand elle peut écrire son propre nom. Pointe-en une et le canevas l’essaie (sauf pendant que des lettres sont sélectionnées, qui montrent la police une fois que tu l’as choisie). Choisir une autre famille garde la variante la plus proche de celle que tu avais : le même nom si elle en a un, sinon la graisse la plus proche avec la même inclinaison.
- **Variante** : les variantes de la famille, comme {Regular}, {Medium Italic} ou {Bold}. SF Pro a neuf graisses, de {Ultralight} à {Black}, chacune droite et {Italic}.
- **Taille** : en points, de 1 à 2 000.
- **Tailles prédéfinies** : 12, 14, 16, 20, 24, 32, 48 et 64 points.
- **Alignement** : {Aligner à gauche}, {Centrer}, {Aligner à droite} et {Justifier}, qui étire chaque ligne d’un bord à l’autre, sauf la dernière d’un paragraphe.
- **Souligner** ({{⌘U}}), **Barrer** ({{⇧⌘X}}) : une ligne sous les lettres, ou à travers elles.
- **Liste à puces** ({{⇧⌘8}}), **Liste numérotée** ({{⇧⌘7}}) : voir [Listes](/docs/text.html#lists).
- **Casse** : {Telle que saisie}, {Majuscules}, {Minuscules}, {Initiales en majuscule} ou {Petites capitales} : comment les lettres sont composées, quoi qu’on ait tapé. Les petites capitales utilisent celles de la police quand elle en a, et sinon composent les minuscules en capitales plus petites. Pendant la saisie, tu vois les lettres telles que tu les as tapées.
- **Largeur automatique**, **Hauteur automatique**, **Taille fixe** : comment le cadre trouve sa taille (voir [Comment les cadres de texte prennent leur taille](/docs/text.html#sizing)).
- **Lignes en haut**, **Lignes au milieu**, **Lignes en bas** : où les lignes se placent dans le cadre. En choisir une fait passer le cadre en {Taille fixe}, car seul un tel cadre a de la place en trop.
- **Ligne** : la distance d’une ligne de base à la suivante, en points. Tant que tu n’en fixes pas, le champ montre la hauteur de ligne propre à la police. L’espace supplémentaire est réparti au-dessus et au-dessous des lettres, qui restent ainsi au milieu de leurs lignes.
- **Lettre** : l’espacement des lettres, en millièmes de la taille de la police, comme le comptent les dessinateurs de caractères : 100 ajoute un dixième de la taille entre les lettres. De −500 à 2 000.
- **¶** : l’espace après chaque paragraphe sauf le dernier, en points.
- **Fonctions** : les fonctions OpenType de la police (voir [Fonctions OpenType](/docs/text.html#features)).
- **Police variable** : pour une police variable, ses axes (voir [Polices variables](/docs/text.html#variable-fonts)).
:::

Les champs de taille et d’espacement acceptent aussi des calculs, et des modifications de la valeur propre à chaque texte comme `+2` ou `×1.5` (voir [Le canevas](/docs/canvas.html)).

### Des lettres ou tout le texte {#letters-or-layer}

Pendant que tu tapes avec des lettres sélectionnées, la carte indique {Modifie les 5 caractères sélectionnés}, et ce qu’elle règle au niveau des lettres ne s’applique qu’à ces lettres : la police, la variante, la taille, l’espacement des lettres, le soulignement, le barré et les listes. Le reste concerne toujours le texte entier : l’alignement, la casse, l’espacement des lignes et des paragraphes, les fonctions, les axes de la police variable et la façon dont le cadre prend sa taille.

Avec seulement le curseur pendant la saisie, la police, la variante, la taille et l’espacement des lettres s’appliquent au texte entier, tandis que le soulignement, le barré et les listes s’appliquent à ce que tu tapes ensuite (une liste au paragraphe où se trouve le curseur). Quand le texte est seulement sélectionné, tout s’applique au texte entier.

### Trouver une police {#font-menu}

Le menu des polices s’ouvre sur la police que tu as. Commence à taper pour réduire la liste : les polices dont le nom commence par ce que tu as tapé viennent en premier, puis celles dont un mot commence ainsi (`new` trouve Times New Roman), puis toute autre qui le contient. Les majuscules, les accents et les espaces ne comptent pas, donc `timesnew` fonctionne aussi. La meilleure correspondance est mise en évidence : {{Return}} la prend, les touches fléchées parcourent les autres, et le canevas essaie chacune à mesure qu’elle est mise en évidence. {{⌫}} efface une lettre, {{⌥⌫}} les efface toutes, {{⌘V}} colle un nom, et {{Esc}} efface ce que tu as tapé avant de fermer le menu.

Un texte dont la police n’est pas sur ce Mac est dessiné en SF Pro.

### Fonctions OpenType {#features}

Le menu {Fonctions} liste ce que la police propose, et rien d’autre : {Ligatures}, {Ligatures rares}, {Variantes contextuelles}, {Chiffres elzéviriens}, {Chiffres alignés}, {Chiffres tabulaires}, {Chiffres proportionnels}, {Zéro barré}, {Fractions}, {Exposant}, {Indice}, {Ordinaux}, {Formes sensibles à la casse}, {Variantes stylistiques}, {Lettres ornées} et {Formes de titrage}, puis les jeux stylistiques et les variantes de caractères de la police, sous les noms qu’elle leur donne. Une coche montre ce qui est activé ; pointe une fonction pour voir le texte avec elle inversée, et clique pour la garder.

{Ligatures} et {Variantes contextuelles} sont activées tant que tu ne les désactives pas, comme les polices le prévoient. Le titre du menu compte les fonctions que tu as réglées autrement que la police, par exemple {2 fonctions}. Une police qui n’en a aucune indique {Aucune fonction}.

### Polices variables {#variable-fonts}

Pour une police variable, comme SF Pro, la carte se termine par une ligne {Police variable} qui nomme ses axes, comme la graisse et la largeur. Elle reste repliée jusqu’à ce que tu cliques dessus, ou qu’un axe soit réglé. Ouverte, elle a un champ pour chaque axe, entre le minimum et le maximum que la police permet.

## Texte enrichi et menu Format {#format}

N’importe quelles lettres d’un texte peuvent avoir une autre apparence que le reste : un mot en gras, une autre couleur, une taille plus grande. Sélectionne-les pendant la saisie, puis utilise le menu {Format}, les touches ou la carte {Texte}.

| Commande | Touches | Ce qu’elle fait |
| --- | --- | --- |
| {Format › Épaisse} | {{⌘B}} | La variante grasse de la famille, ou retour à la variante normale |
| {Format › Italique} | {{⌘I}} | La variante italique de la famille dans la même graisse, ou de nouveau droite |
| {Format › Souligner} | {{⌘U}} | Une ligne sous les lettres |
| {Format › Barrer} | {{⇧⌘X}} | Une ligne à travers les lettres |
| {Format › Plus grand} | {{⇧⌘.}} | Un point de plus |
| {Format › Plus petit} | {{⇧⌘,}} | Un point de moins |
| {Format › Liste à puces} | {{⇧⌘8}} | Fait des paragraphes une liste à puces, ou la termine |
| {Format › Liste numérotée} | {{⇧⌘7}} | Fait des paragraphes une liste numérotée, ou la termine |

Ce que les commandes changent :

- **Des lettres sélectionnées** pendant la saisie : ces lettres.
- **Seulement le curseur** : les lettres que tu tapes ensuite.
- **Un texte sélectionné**, sans y taper : chacune de ses lettres, et celles de chaque autre texte sélectionné.

Chaque commande active son effet, sauf si toutes les lettres l’ont déjà : elle le désactive alors. Le gras et l’italique passent à une autre variante de la même famille, et fonctionnent donc quand la famille en a une : le gras prend la variante la plus proche d’une graisse grasse, et l’enlever passe à la variante la plus proche de la normale. Plus grand et Plus petit changent chaque lettre d’un point, de sorte que les lettres qui ont leur propre taille restent d’autant plus grandes ou plus petites que les autres ; aucune lettre ne descend sous 1 point.

**Couleur.** La couleur d’un texte est sur sa carte {Remplissage}. Avec des lettres sélectionnées pendant la saisie, la carte règle une couleur pour ces lettres seulement. Le remplissage propre d’un texte peut aussi être un dégradé ou une image, qui apparaît à travers ses lettres tandis qu’elles restent des mots dans lesquels tu peux taper : ouvre la carte {Remplissage} et choisis-le, ou dépose une image depuis le Finder sur le texte. Repeindre le texte depuis le menu de remplissage retire les couleurs propres des lettres, pour que tout le texte montre la nouvelle peinture ; les lettres que tu colores ensuite gardent leur couleur par-dessus. Voir [Couleur, bordures et effets](/docs/looks.html).

## Listes {#lists}

{Format › Liste à puces} ({{⇧⌘8}}) et {Format › Liste numérotée} ({{⇧⌘7}}), ou les deux boutons de liste de la carte {Texte}, font des paragraphes les éléments d’une liste. Une liste est toujours faite de paragraphes entiers : ceux que touche ta sélection, ou celui où se trouve le curseur.

- Les éléments à puces commencent par •, les éléments numérotés par 1., 2., 3. et ainsi de suite, en comptant les éléments numérotés qui se suivent.
- Chaque élément d’une liste commence ses mots au même endroit, pour qu’ils soient alignés quelle que soit la taille des marqueurs ; les marqueurs prennent la police de leur élément.
- Appuie sur {{Return}} à la fin d’un élément pour passer au suivant. Son marqueur s’affiche tout de suite, sur la ligne vide.
- Appuie sur {{Return}} sur un élément vide, ou sur {{⌫}} au début d’un élément, pour terminer la liste à cet endroit.
- Choisis de nouveau la même liste pour en sortir les paragraphes.

## Styles de texte {#text-styles}

Une typographie peut porter un nom, pour que de nombreux textes la partagent et qu’une modification de celle-ci les change tous. La carte {Texte} ouverte commence par les styles de texte du design, chacun écrit dans sa propre typographie, et une puce {+ Style} en pointillés :

- **Clique sur un style** pour le donner aux textes sélectionnés. Pointe-le d’abord pour l’essayer sur le canevas.
- **{+ Style}** nomme la typographie du texte sélectionné. Bezzle propose un nom selon sa taille : {Affichage} à partir de 48 points, {Titre} à partir de 32, {Intertitre} à partir de 24, {Sous-titre} à partir de 19, {Corps de texte} à partir de 15, {Petit} à partir de 12, et {Légende} en dessous. Appuie sur {{Return}} pour le garder, ou tape le tien.
- **Double-clique sur le style utilisé** pour le renommer ; son {×} garde l’apparence sans le nom.
- Avec plus de six styles, les cinq premiers s’affichent et une puce dit combien il y en a d’autres ; clique dessus pour les voir tous, et sur {Moins} pour les replier.

Un style de texte contient la police, la variante, la taille, l’espacement des lignes, l’espacement des lettres, la casse, l’espacement des paragraphes, le soulignement, le barré, les fonctions et les axes de police variable. L’alignement, la façon dont le cadre prend sa taille et la couleur restent propres à chaque texte (les couleurs peuvent avoir leurs propres noms). Une carte {Texte} repliée indique le nom du style utilisé. Les styles ne sont pas proposés pendant que des lettres sont sélectionnées. Plus sur les styles dans [Composants, styles et bibliothèques](/docs/components.html).

## Texte le long d’une courbe {#curves}

Les mots peuvent suivre un arc qui leur est propre, ou le contour d’une forme, et rester des mots dans lesquels tu peux taper. Sur une courbe, un texte est toujours une seule ligne : ses sauts de ligne deviennent des espaces.

### Courber le texte en arc {#bending}

Sélectionne un texte avec l’outil {Sélection} et pointe près de lui : une ligne suit sa ligne de base et se prolonge au-delà de ses extrémités jusqu’à une perle de chaque côté. Fais tourner une perle autour du milieu des mots :

- Fais-la descendre pour cintrer les mots en arc, et jusque sous le milieu pour les refermer en anneau.
- Fais-la monter pour qu’ils se creusent.
- La courbure marque un arrêt à plat, au demi-cercle et à l’anneau, avec un petit retour du trackpad. Maintiens {{⌘}} pendant le glissement pour passer outre librement.

Le milieu des mots reste en place, et l’angle s’affiche pendant que tu fais glisser. {{Esc}} pendant le glissement remet tout en place. Les perles s’affichent tant que le texte mesure au moins 14 points de large à l’écran et qu’il n’est ni verrouillé, ni tourné en profondeur, ni posé sur une forme.

Tu peux aussi courber un texte droit depuis la carte {Courbure} en pointillés en bas de l’inspecteur, qui lui donne un {Arc}.

### La carte Courbure {#curve-card}

Un texte courbé a une carte {Courbure}. Repliée, elle indique sur quelle part d’un cercle s’étendent les mots, par exemple {90°}, ou {Anneau}. Fais glisser latéralement sur la carte pour les courber, d’un creux complet à un anneau en passant par la ligne droite ; le glissement marque un arrêt au demi-cercle et au cercle complet dans chaque sens, et à plat.

::: fields
- **Préréglages** : {Creux}, qui se creuse d’un quart de cercle, {Arc}, un quart de cercle vers le haut, {Demi-cercle} et {Anneau}.
- **Degrés** : sur quelle part d’un cercle s’étendent les mots, de −360° (en creux) à 360°.
- **×** : {Redresser}, les mots de nouveau droits. Faire glisser la carte repliée au-delà de son extrémité gauche fait de même, comme {Objet › Redresser le texte}.
:::

L’arc est toujours aussi long que les mots : quand tu en tapes davantage, il s’allonge, et garde la part du cercle sur laquelle ils s’étendent.

### Placer du texte sur une forme {#on-path}

Un texte peut suivre le contour d’un rectangle, d’une ellipse, d’un tracé ou d’une ligne, et le suivre partout où la forme est déplacée, tournée ou remodelée. Il y a deux façons de faire :

- **Avec le menu.** Sélectionne le texte et la forme et choisis {Objet › Placer le texte sur le tracé}, aussi dans le menu du clic droit. Les mots se placent là où ils sont le plus près du contour, du côté où ils se trouvent, lisibles à l’endroit.
- **À la main.** Fais glisser le texte sur le bord de la forme et garde-le là un instant, sans relâcher. Une ligne s’étend le long du bord aussi loin que vont les mots, le contour s’éclaire, et les mots sautent dessus lettre par lettre. Sans relâcher, fais-les glisser le long du bord : ils suivent le pointeur, restent du côté du bord où se trouve le pointeur, et se retournent pour rester lisibles à l’endroit où qu’ils soient. Relâche pour les garder là, ou éloigne-les nettement et ils se détachent, de nouveau droits.

Le texte et la forme vont dans un groupe à eux, nommé *Texte sur tracé 1*, *Texte sur tracé 2* et ainsi de suite, la forme en premier, de sorte que ce qui se trouvait au-dessus de la forme y reste. D’autres textes peuvent suivre la même forme.

Une forme ne peut pas porter de texte quand elle est verrouillée, tournée en profondeur, dans une grille de répétition, ou quand c’est la forme selon laquelle un masque découpe ses calques. Le texte ne peut être ni verrouillé ni dans une grille de répétition.

### Glisser le long du contour, et s’en détacher {#sliding}

Fais glisser un texte posé sur une forme, et il glisse le long du contour derrière le pointeur, tenu là où tu l’as saisi. Éloigne-le nettement du contour, à environ deux fois et demie sa taille de caractères, et il s’en détache, droit et lisible à l’endroit, et le glissement continue de le déplacer.

Sur un contour ouvert, les mots sont tenus par leur début, leur milieu ou leur fin, selon l’alignement du texte ; sur un contour fermé, et sur un arc, par leur milieu. Quand tu en tapes davantage, ils s’étendent à partir de là.

### La carte Sur le tracé {#on-path-card}

Un texte posé sur une forme a une carte {Sur le tracé} à la place de {Courbure}. Repliée, elle nomme la forme.

::: fields
- **Glissement latéral** sur la carte repliée : fait glisser les mots autour du contour, de son début à sa fin, avec un arrêt à chaque quart.
- **De l’autre côté** : le bouton de la ligne repliée fait passer les mots de l’autre côté du contour, toujours lisibles à l’endroit.
- **×** : {Retirer du tracé}. Faire glisser la carte au-delà de son extrémité gauche fait de même, comme {Objet › Redresser le texte} ou {Retirer le texte du tracé} dans le menu du clic droit. Le texte se place juste au-dessus du groupe, de nouveau droit ; un groupe auquel il ne reste que sa forme redevient cette forme.
:::

Si la forme est supprimée, le texte garde la courbe qu’il avait.

### Taper et redimensionner un texte courbé {#curved-typing}

Tape dans un texte courbé comme dans n’importe quel autre. Pendant que tu tapes, ses mots sont mis à plat, dans l’axe de la courbe à l’endroit d’où ils sont placés ; quand tu t’arrêtes, chaque lettre reprend d’un bond sa place sur la courbe. Les lettres rejoignent de la même façon leur nouvelle place chaque fois qu’elles bougent autrement qu’avec le texte entier : quand il est courbé, posé sur une forme, détaché, ou quand tu annules.

Chaque poignée d’un texte courbé agrandit ou réduit ses lettres, comme le fait l’unique poignée d’un texte en {Largeur automatique}.

## Texte vectorisé {#outlines}

{Objet › Convertir en tracé} ({{⌘8}}), aussi dans le menu du clic droit, transforme les textes sélectionnés en contours de leurs lettres, avec exactement l’apparence qu’ils avaient. Tu peux alors les modifier point par point, les combiner avec des formes ou les découper au Cutter (voir [Formes, tracés et Plume](/docs/shapes.html)).

- Un texte d’une seule couleur devient un seul tracé, rempli comme l’était le texte : un dégradé ou une image restent là où ils étaient.
- Un texte dont les lettres ont leurs propres couleurs devient un groupe avec un tracé par couleur, celle du texte à l’arrière, chacun nommé d’après ses mots.
- Tout ce que le texte dessine suit : les soulignements, les barrés et les marqueurs de liste. Un texte sur une courbe est vectorisé tel qu’il la suit.
- Il garde le nom, la place et la rotation du texte, son opacité, son mode de fusion, ses ombres et son flou. L’étendue d’une ombre et le flou de l’arrière-plan, qu’un texte ne montre jamais, sont laissés de côté.
- Un texte qui est la forme d’un masque devient un seul tracé, quelles que soient les couleurs de ses lettres.

Certains textes ne peuvent pas être vectorisés : ceux qui sont verrouillés, ceux qui ne contiennent que des espaces, et ceux qui sont dans une cellule d’une grille de répétition, dans une copie d’un composant ou dans une pile, car leurs mots vont avec les autres cellules, copies ou publications. Les lettres qui sont des images, comme les emoji, n’ont pas de contours : Bezzle émet un bip, et un texte qui en contient reste du texte. Pour revenir en arrière, utilise Annuler.

## Orthographe {#spelling}

### Pendant la saisie {#spelling-typing}

Les mots mal orthographiés sont soulignés pendant que tu tapes. Clique sur l’un d’eux avec le bouton droit pour voir les orthographes que propose le Mac. Active ou désactive cette vérification dans {Édition › Orthographe et grammaire › Vérifier l’orthographe lors de la saisie}, et ajoute la grammaire avec {Vérifier la grammaire avec l’orthographe}. Bezzle se souvient des deux, pour tout le texte ; au départ, l’orthographe est activée et la grammaire désactivée.

### Vérifier tout un design {#spelling-design}

{Édition › Orthographe et grammaire › Vérifier l’orthographe…} ({{⌘;}}) ouvre la barre de recherche au-dessus du canevas, réglée sur l’orthographe. Elle parcourt les mots mal orthographiés du design dans l’ordre de lecture, plan de travail par plan de travail et, sur chacun, de haut en bas : chaque mot mal orthographié est marqué sur le canevas d’une ligne ondulée, et celui qui est sélectionné est montré, son texte sélectionné.

::: fields
- **Le mot** : le mot mal orthographié sélectionné, en rouge.
- **Orthographe correcte** : l’orthographe la plus probable, prête à l’emploi ; tapes-en une autre si tu veux.
- **Suggestions** : chaque orthographe que propose le Mac. En choisir une la met en place aussitôt.
- **Modifier** : met {Orthographe correcte} à la place du mot et passe au suivant. {{Return}} dans le champ fait de même.
- **Ignorer** : laisse le mot tel quel, partout dans le design tant qu’il est ouvert.
- **Apprendre** : ajoute le mot au dictionnaire du Mac.
- **Précédent**, **Suivant** : les deux flèches, pour reculer ou avancer sans changer le mot.
- **Fermer** : le ×, ou {{Esc}}.
:::

La barre compte au fur et à mesure, par exemple {3 sur 7}, et indique {Aucune faute} quand il n’y en a pas. Chaque texte est vérifié dans la langue dans laquelle il est écrit. Seuls les mots visibles sont vérifiés : les calques masqués sont passés, et dans une pile, chaque publication est vérifiée. Chaque correction est une étape d’annulation ({Corriger l’orthographe}).

Les icônes à gauche de la barre passent de l’orthographe à {Rechercher et remplacer des mots} ({{⌘F}}), qui trouve et remplace des mots dans tout le design (voir [Le canevas](/docs/canvas.html)). Avec des lettres sélectionnées pendant la saisie, {{⌘F}} les recherche.

## Les cartes d’un texte {#cards}

Un texte sélectionné a {Cadre}, puis {Texte}, puis {Courbure} ou {Sur le tracé} quand il suit une courbe, {Opacité} et {Remplissage} pour la couleur de ses lettres, qu’un texte a toujours. Les ombres, le flou, la 3D et l’export suivent quand il en a. Les textes n’ont pas de bordures. Parmi les cartes en pointillés en bas, {Courbure} vient en premier, pour courber le texte, puis {Ombre}, {Flou}, {3D} et les autres. Voir [Couleur, bordures et effets](/docs/looks.html).

Retourner un texte seul ne fait rien, car les mots se lisent toujours à l’endroit ; retourné avec d’autres calques, il va à sa place en miroir.

## Raccourcis {#shortcuts}

| Touches | Ce qu’elles font |
| --- | --- |
| {{T}} | Outil Texte |
| {{Return}} | Taper dans le texte sélectionné |
| {{Esc}} | Arrêter la saisie ; une seconde fois, poser l’outil Texte |
| {{⌘B}}, {{⌘I}}, {{⌘U}} | Épaisse, Italique, Souligner |
| {{⇧⌘X}} | Barrer |
| {{⇧⌘.}}, {{⇧⌘,}} | Plus grand, Plus petit |
| {{⇧⌘8}}, {{⇧⌘7}} | Liste à puces, Liste numérotée |
| {{⌘8}} | Convertir en tracé (texte vectorisé) |
| {{⌘;}} | Vérifier l’orthographe… |
| {{⌘F}} | Rechercher… |

Tous les raccourcis de Bezzle sont sur la page [Raccourcis clavier](/docs/shortcuts.html).
