---
title: Inspection et transmission
nav: Inspecter
lede: Lis le design comme en a besoin la personne qui le construit : tailles et distances mesurées sur le canevas, chaque apparence sous le nom que lui donne ton design, le calque en CSS ou en SwiftUI, et ses images à faire glisser dehors sous forme de fichiers.
---

Le mode Inspecter est fait pour les personnes qui construisent ce que tu dessines, et pour toi quand tu vérifies ton propre travail. Il lit le design et ne le change jamais : rien ne peut être déplacé ou supprimé par accident. Pointe n’importe quoi pour le mesurer, clique pour voir ses caractéristiques, et clique sur n’importe quelle valeur pour la copier.

::: figure inspect
Le design inspecté : le bouton choisi avec sa largeur et sa hauteur, les distances jusqu’à ce que pointe le pointeur en rose, et ses caractéristiques et son code dans le panneau.
:::

## Le mode Inspecter {#inspect-mode}

Choisis {Inspecter} dans le sélecteur en haut à droite de la fenêtre, appuie sur {{⌃I}}, ou choisis {Fenêtre › Inspecter}. En mode Prototype, le bouton {Inspecter} de la carte {Code} fait la même chose. L’info-bulle du sélecteur : « Inspecter le design tel qu’il sera construit : tailles, distances, apparences et code. »

Le design est inspecté sur le papier millimétré du prototype. Si tu viens du prototype, ses fils s’estompent à mesure que les mesures arrivent ; si tu viens du mode Design, ils restent absents. Les outils s’effacent, comme en [mode Prototype](/docs/prototype.html#prototype-mode), et le bouton à droite de la barre du haut est {Lire}.

- **Il ne fait que lire.** {{⌫}} n’a aucun effet, et {Couper}, {Coller} et {Supprimer} sont désactivés dans le menu Édition. Rien ne bouge sur le canevas quand tu fais glisser.
- **Une chose à la fois.** Si plusieurs calques étaient choisis, seul le premier reste choisi.
- **Les designs que tu ne peux que lire.** Un design que quelqu’un a partagé avec toi en lecture seule peut quand même être inspecté en entier, valeurs, code et éléments graphiques compris. Voir [Partager et travailler ensemble](/docs/sharing.html).

Pour en sortir, appuie de nouveau sur {{⌃I}}, ce qui ramène au prototype, ou choisis {Design} dans le sélecteur. {{⌃P}} ramène aussi directement au mode Design.

## Choisir {#picking}

Le pointeur trouve la plus petite chose qui se trouve sous lui : un calque, à quelque profondeur qu’il soit dans des groupes et des copies de composants ; l’écran lui-même là où il n’y a rien d’autre ; ou un écran par son nom, au-dessus de son coin supérieur gauche. Les calques posés librement sur le canevas, hors de tout plan de travail, peuvent aussi être inspectés.

- **Clique** pour choisir ce que le pointeur trouve.
- **Clique de nouveau** sur ce qui est choisi, ou sur n’importe quoi à l’intérieur, pour choisir le niveau au-dessus : le groupe où il se trouve, puis le groupe qui contient celui-ci, et ainsi de suite jusqu’à l’écran. Un clic de plus revient à la plus petite chose.
- **{{Esc}}** choisit aussi le niveau au-dessus. Quand l’écran est choisi, il le relâche.
- **Clique sur le papier vide** pour relâcher ce qui est choisi.
- **Fais glisser n’importe où** pour déplacer la vue, comme une main fait glisser une feuille de papier. Un appui sans mouvement est un clic. Maintenir {{Space}} en faisant glisser fonctionne aussi.

Dans le panneau, les noms au-dessus du nom du calque choisi sont les groupes et l’écran où il se trouve : clique sur l’un d’eux pour le choisir.

## Mesurer {#measuring}

Les mesures sont dessinées sur le canevas comme sur un dessin technique, chacune grandissant depuis son milieu quand ce qui est montré change. Chaque distance se mesure entre les cadres droits dans lesquels les calques sont dessinés, en points, à une décimale près.

- **Quand rien n’est choisi,** ce sur quoi se trouve le pointeur est entouré au crayon, avec sa largeur et sa hauteur en dessous (« 320 × 48 »).
- **Le calque choisi** est entouré, avec sa largeur sur une ligne le long de son haut et sa hauteur sur une ligne le long de son côté droit, chacune avec un trait à chaque bout et le nombre dans une petite pastille. Un calque pivoté est mesuré par sa propre largeur et sa propre hauteur, pas par le cadre qu’il couvre.
- **Pointe un autre calque,** et les distances entre le calque choisi et lui sont dessinées en rose, la couleur que le canevas donne aux écarts, l’autre calque étant entouré de rose. Là où les deux se font face de part et d’autre d’un écart, l’écart est rempli de fines hachures roses.
- **Pointe le calque choisi lui-même,** et Bezzle mesure où il se trouve à l’intérieur de ce qui le contient : le niveau au-dessus, celui qu’un clic choisirait, entouré en pointillés avec son nom au-dessus de son coin supérieur gauche.
- **Quand un écran est choisi,** pointer un calque de cet écran mesure les distances de ce calque aux bords de l’écran.

Les distances montrées dépendent de la façon dont les deux cadres se placent :

| Comment ils se placent | Ce qui est mesuré |
| --- | --- |
| L’un dans l’autre | De chacun des quatre côtés du cadre intérieur, tout droit jusqu’au côté du cadre extérieur, en passant par le milieu du cadre intérieur. |
| Séparés, face à face | L’écart entre les côtés qui se font face, en passant par le milieu de la zone où ils se chevauchent. Là où ils ne se chevauchent pas du tout, la ligne passe à la hauteur du milieu du calque choisi, et une ligne pointillée la prolonge pour montrer où elle rejoint le bord de l’autre calque. Des cadres séparés dans les deux sens reçoivent une distance horizontale et une verticale. |
| En partie l’un sur l’autre | La distance entre chaque côté de l’un et le même côté de l’autre. |

Une ligne trop courte pour contenir son nombre l’affiche à côté.

## Le panneau d’un calque choisi {#layer-panel}

Choisis un calque et le panneau montre, de haut en bas, où il se trouve, son cadre, sa typographie (pour un texte), ses apparences, la grille de mise en page (pour un écran), son code, et le calque sous forme de fichier. Chaque nombre et chaque nom qu’il contient se copie d’un clic (voir [Copier des valeurs](/docs/inspect.html#copying)).

::: fields
- **Où il se trouve** : jusqu’à trois des groupes et de l’écran qui contiennent le calque, séparés par ›, avec … quand il y en a davantage ; un clic sur l’un d’eux le choisit. En dessous, le nom et le genre du calque, ou {Composant} pour une copie de composant. Pour une copie, ou un calque à l’intérieur d’une copie, une étiquette montre le nom du composant et la variante affichée ; un clic dessus choisit la copie.
- **Le cadre** : dessiné comme le dessinent les outils d’un navigateur. Le calque est un cadre au crayon avec sa largeur × sa hauteur au milieu, à l’intérieur d’un cadre pointillé nommé d’après ce qui le contient, avec en rose la distance de chacun de ses côtés à ceux de ce cadre. Une distance négative, là où le calque dépasse, est montrée en rouge. En dessous, {X} et {Y}, la position du calque sur son écran, et son angle de rotation, en degrés, quand il est pivoté.
- **Typographie**, pour un texte : un échantillon « Ag » dans le style de police, la famille ({Système} pour la police propre du Mac), le style avec sa graisse telle que la compte le CSS (« Semibold · 600 »), et le nom de son style de texte quand il en a un. Puis {Taille} ; {Interligne}, ou {Auto} avec l’interligne propre à la police à côté ; {Approche} en points et en pourcentage, quand elle n’est pas à 0 ; {Aligner} quand l’alignement n’est pas à gauche ; {Casse} quand une casse est réglée ; {Couleur}, ou le genre de dégradé. Puis les mots eux-mêmes, copiés en entier d’un clic, et, quand certains mots sont composés autrement, jusqu’à six lignes qui disent comment, chacune avec les mots concernés.
- **Apparences** : une ligne pour chaque {Remplissage} (sa couleur, son dégradé ou son image, celui du dessus en premier), {Bordure} (épaisseur, {Intérieure}, {Au centre} ou {Extérieure}, et couleur), {Angles} (un rayon, ou quatre quand ils diffèrent), {Ombre} (x, y, flou et étendue, sa couleur, et {Intérieure} pour une ombre intérieure), {Opacité} en pourcentage, {Fusion}, et {Flou} (son rayon, et {Derrière} pour un flou d’arrière-plan). Seul ce que le calque possède est listé. Chaque apparence qui a un nom dans le design porte ce nom sous forme d’étiquette.
- **Grille de mise en page**, pour un écran qui en a une : {Colonnes} et {Lignes} sous la forme nombre × taille de chacune, avec {Gouttière} et {Marge}, et {Ligne de base}.
- **Code** : le calque en {CSS} ou en {SwiftUI}, choisi dans le petit sélecteur à côté de son titre, avec {Copier le CSS} ou {Copier le SwiftUI} en dessous. Le code défile latéralement et son texte peut être sélectionné. Voir [Code](/docs/inspect.html#code).
- **Le calque sous forme de fichier** : son image sur un damier, à faire glisser dehors, avec {PNG}, {SVG} et {PDF}, les tailles {1×}, {2×} et {3×} pour le PNG, et {Copier}. Voir [Éléments graphiques](/docs/inspect.html#assets).
:::

## Copier des valeurs {#copying}

Clique sur n’importe quelle valeur du panneau pour la copier : un nombre, une couleur, une police, un nom. Elle s’éclaire quand tu la pointes, et une coche s’affiche un instant une fois qu’elle est copiée. Son info-bulle montre exactement ce qui sera copié.

Les valeurs sont copiées telles que les écrit le code choisi dans la carte {Code}, et ce choix est mémorisé :

| Valeur | Avec CSS choisi | Avec SwiftUI choisi |
| --- | --- | --- |
| Une couleur | `#3366FF`, ou `rgba()` quand elle est transparente | `Color(red: 0.2, green: 0.4, blue: 1)`, avec `.opacity()` quand elle est transparente |
| Une taille de texte, un interligne ou des angles | Avec px : `16px` | Le nombre : `16` |
| L’approche | En em : `0.02em` | En points |
| Une famille de police | La pile de polices CSS | Le nom de la famille |
| Un dégradé, une image ou une ombre | Comme l’écrit le CSS | Comme l’écrit SwiftUI |
| L’étiquette d’une apparence nommée | Sa propriété personnalisée : `var(--color-brand-blue)` | Son token : `Tokens.Colors.brandBlue` |

Les tailles et les distances du cadre sont copiées comme de simples nombres.

## Code {#code}

La carte {Code} écrit le calque choisi en CSS ou en SwiftUI, avec ses apparences sous les noms que leur donne ton design : partout où une apparence a un nom, le code utilise son token, et en CSS la valeur brute figure à côté dans un commentaire. Dans la carte, les commentaires sont pâles, les propriétés plus discrètes et les tokens dans le bleu du crayon.

Un groupe emporte ce qu’il contient, chaque calque placé là où il se trouve, jusqu’à trois niveaux de profondeur et 16 calques en tout ; un commentaire dit combien il en reste (« and 4 more layers »). Un écran est écrit comme son propre cadre : sa taille, son arrière-plan, ses angles et son rognage.

### CSS {#css}

La classe de la règle est le nom du calque, en minuscules avec des tirets : un calque appelé « Sign in button » devient `.sign-in-button`. Elle indique :

- **Taille** : `width` et `height`. Un texte en {Largeur automatique} est `white-space: nowrap`, un texte en {Hauteur automatique} ne règle que sa largeur, et un texte en {Taille fixe} les deux. Une ligne a sa longueur pour largeur et 0 de hauteur, tracée avec `border-top`. Un calque pivoté reçoit `transform: rotate()`.
- **Remplissages** : `background`, celui du dessus en premier : couleurs, `linear-gradient()` et `radial-gradient()`, et images en `url()` avec `cover`, `contain` ou `100% 100%` selon que l’image remplit, s’ajuste ou s’étire. Un texte prend sa couleur en `color`, et un dégradé par `background-clip: text`.
- **Bordures** : une bordure intérieure est un `border` avec `box-sizing: border-box` ; une bordure centrée est un `outline` rentré de la moitié de son épaisseur ; une bordure extérieure est un `outline`. Les bordures pointillées sont `dashed`. Un texte utilise `-webkit-text-stroke`.
- **Angles** : `border-radius`, avec quatre valeurs quand ils diffèrent, et `50%` pour une ellipse.
- **Effets** : `box-shadow` (`text-shadow` pour un texte), `opacity`, `mix-blend-mode`, `filter: blur()` ou, pour un flou d’arrière-plan, `backdrop-filter: blur()`, et `overflow: hidden` pour un écran qui rogne et pour un masque.
- **Typographie** : `font-family`, `font-size`, `font-weight`, `font-style`, `line-height` quand il est réglé, `letter-spacing`, `text-align`, `text-transform` ou les petites capitales, `text-decoration`, et un commentaire pour l’espace après les paragraphes.
- **Ce que contient un groupe** : le groupe est `position: relative`, et chacun de ses calques une règle à part, `position: absolute` avec `left` et `top`.

### SwiftUI {#swiftui}

- **Un texte** est un `Text("…")` avec sa police (`.system(size:weight:)` pour la police du Mac, `.custom()` pour les autres), son approche, son interligne, sa couleur, son alignement, sa casse, son soulignement et son barré, et un cadre selon la façon dont il se dimensionne. Un style de texte qui a un nom est `.typeToken()`.
- **Les rectangles et les ellipses** sont `Rectangle()`, `RoundedRectangle()`, `Capsule()`, `Circle()`, `Ellipse()` ou `UnevenRoundedRectangle()`, les angles lisses en `.continuous`, remplis de leur couleur ou de leur dégradé, les bordures en superpositions. Un rectangle rempli d’une image est une `Image()` rognée à sa forme.
- **Les groupes** sont un `ZStack` à leur taille, chaque calque mis en place avec `.offset()`. Un écran est un `ZStack` à sa taille, avec un commentaire qui dit combien de calques il contient. Les écrans et les masques sont `.clipped()`.
- **Les lignes** sont un fin `Rectangle()`, pivoté selon leur angle.
- **Les tracés** sont une `Image()` nommée d’après le calque, avec un commentaire invitant à exporter le dessin en SVG ou en PDF.
- **Effets** : les ombres en `.shadow()` ou `.shadowToken()`, un commentaire pour une ombre intérieure, `.opacity()`, `.blendMode()`, `.blur()`, et pour un flou d’arrière-plan `.ultraThinMaterial` avec un commentaire qui dit de combien.

`.typeToken()`, `.shadowToken()` et les noms `Tokens` viennent du fichier de tokens SwiftUI (voir plus bas).

## Éléments graphiques {#assets}

La dernière carte est le calque choisi sous forme de fichier, pour une icône, une illustration ou une photo dont la construction a besoin.

::: fields
- **L’image** : le calque tel qu’il est dessiné, à sa propre taille ou plus petit pour tenir, sur un damier ; sur un damier sombre quand le calque lui-même est clair. Fais-le glisser dans le Finder, ou dans du code, et il y devient un fichier, nommé d’après le calque, avec `@2x` ou `@3x` après le nom à ces tailles.
- **PNG**, **SVG**, **PDF** : le format du fichier. SVG et PDF restent nets à toutes les tailles.
- **1×**, **2×**, **3×** : pour le PNG, combien de pixels par point.
- **Copier** : met le fichier dans le presse-papiers. Un PNG se colle comme une image ; un SVG se colle comme une image là où une image peut aller, et comme son texte dans du code ; un PDF comme un PDF.
:::

Le format et la taille que tu choisis sont mémorisés ; au départ, c’est PNG à 2×. L’info-bulle de l’image dit ce que tu obtiendras (« PNG @2x »). Un calque ne sort que de la taille de ce qu’il peint, ombre comprise, sur un fond vide, comme quand tu l’[exportes](/docs/export.html#layers).

## Le design dans son ensemble {#design}

Quand rien n’est choisi, le panneau montre de quoi est fait tout le design.

::: fields
- **Couleurs** : les couleurs que tu as nommées, chacune sous son nom, puis jusqu’à dix autres parmi celles qui remplissent, bordent et colorent le plus les calques, par leur valeur (avec leur opacité quand elles sont transparentes). Un clic copie le token d’une couleur nommée, ou la valeur d’une autre couleur.
- **Typographie** : chaque style de texte que tu as nommé, sous forme d’échantillon de lui-même avec sa famille, son style, sa taille et son interligne, puis jusqu’à six autres façons dont le texte est le plus souvent composé. Un clic copie le token du style, ou la typographie sous forme de code.
- **Code** : les tokens du design et {Le construire avec Claude}, comme en [mode Prototype](/docs/prototype.html#handing-on).
- **Marqué pour l’export** : jusqu’à 24 calques marqués pour l’export (les plans de travail sont laissés de côté ici), chacun sous forme de petite image à faire glisser dehors en tant que premier fichier que produit sa [carte Exporter](/docs/export.html#marking). Un clic sur l’un d’eux le choisit. {Exporter…} ouvre la fenêtre d’export.
:::

Les cartes qui n’ont rien à montrer sont omises.

## Design tokens {#tokens}

Les pastilles {CSS}, {SwiftUI} et {JSON} de la carte {Code} copient d’un coup toutes les apparences nommées du design, sous forme de fichier à coller dans le projet. Nomme des couleurs, des typographies, des ombres et des angles dans le design (voir [Composants, styles et bibliothèques](/docs/components.html)), et ils sortent ici. Deux apparences d’une même sorte avec le même nom deviennent « Bleu » et « Bleu 2 ». Quand le design a des plans de travail sombres, ou qu’une apparence a une version sombre, la valeur sombre de chaque apparence l’accompagne (voir [Clair et sombre](/docs/dark.html)).

| Format | Ce qu’il contient |
| --- | --- |
| CSS | Des propriétés personnalisées sur `:root`, regroupées en couleurs, typographie, ombres et angles : `--color-…`, `--gradient-…`, `--font-…-family`, `-size`, `-weight`, `-line-height` et `-letter-spacing`, `--shadow-…` et `--radius-…`. Les valeurs sombres dans `@media (prefers-color-scheme: dark)`. Une classe `.text-…` pour chaque style de texte. |
| SwiftUI | Un `enum Tokens` avec `Colors`, `Gradients`, `Typography`, `Shadows` et `Corners`. Une couleur qui a une valeur sombre est un `Color(light:dark:)`, avec la petite extension qui le permet. Les styles de texte et les ombres viennent avec `TypeToken` et `ShadowToken` et les modificateurs `.typeToken()` et `.shadowToken()`. |
| JSON | Le format du W3C Design Tokens Community Group, dans les groupes `color`, `typography`, `shadow` et `radius`, chacun avec son `$type`, sa `$value` et le nom en `$description`. Une valeur sombre se trouve sous `$extensions` en tant que `com.bezzle.dark`. |

Les noms sont écrits comme le code les écrit : « Brand blue » devient `brand-blue` en CSS et en JSON, et `brandBlue` en Swift. Tant que le design n’a encore aucun nom, les pastilles restent pâles et ne copient rien.

## Le menu {#menu}

Fais un clic droit sur n’importe quoi sur le canevas pour son menu. Il choisit ce qui est sous le pointeur, sauf si cela se trouve à l’intérieur de ce qui est déjà choisi, qui reste alors choisi.

| Élément | Copie |
| --- | --- |
| {Copier le CSS} | Le calque en CSS, tel que l’écrit la carte {Code}. |
| {Copier le SwiftUI} | Le calque en SwiftUI. |
| {Copier en PNG} | Le calque sous forme d’image, à 2×. |
| {Copier en SVG} | Le calque en SVG, comme image et comme texte. |
| {Copier le nom} | Le nom du calque. |
| {Copier le texte} | Pour un texte : ses mots. |

## Touches {#keys}

| Touche | En mode Inspecter |
| --- | --- |
| {{⌃I}} | Revient au prototype. |
| {{⌃P}} | Revient au mode Design. |
| {{Esc}} | Choisit le niveau au-dessus ; depuis l’écran, relâche la sélection. |
| {{Space}} | Maintiens et fais glisser pour déplacer la vue. |
| {{⌘Return}} ou {{Return}} | Lit le prototype. |
| {{⌫}} | Sans effet : le mode Inspecter ne change rien. |

Un assistant IA connecté à Bezzle peut lire les mêmes mesures, les mêmes caractéristiques et le même code. Voir [Assistants IA](/docs/ai.html).
