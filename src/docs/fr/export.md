---
title: Exporter
nav: Exporter
lede: Exporte des plans de travail, des calques seuls, des carrousels et des piles en PNG, JPEG, WebP, AVIF, SVG ou PDF, à la taille qu’il te faut, et marque des calques pour qu’ils sortent toujours de la même façon.
---

Tout ce que tu crées dans Bezzle peut en sortir sous forme de fichier : un écran pour une revue, une icône en trois tailles pour une app, chaque publication d’une pile pour un calendrier de réseaux sociaux, un design entier en un seul PDF. Il y a deux façons d’exporter. La **fenêtre d’export** exporte tout de suite ce que tu y choisis. Le **marquage pour l’export** enregistre sur un calque ou un plan de travail les fichiers qu’il doit devenir, pour que le même ensemble sorte à chaque fois d’un seul clic.

## Ouvrir l’export {#opening}

Choisis {Fichier › Exporter…} ou appuie sur {{⌘E}}, ou clique sur {Exporter…} à droite de la barre du haut pendant que tu dessines. (En mode Prototype et en mode Inspecter, ce bouton est {Lire} ; {{⌘E}} fonctionne toujours.) La fenêtre d’export s’ouvre par-dessus la fenêtre. Ferme-la avec le × dans son coin, avec {{Esc}}, ou en cliquant en dehors.

Dans un design qui n’a rien à exporter, la fenêtre dit : « Il n’y a encore rien à exporter. Dessinez un plan de travail avec A. »

La fenêtre contient, de haut en bas : ce qu’il faut exporter, le {Format}, l’{Échelle}, la {Qualité} quand elle compte, une phrase qui dit exactement ce qui sera écrit, et {Exporter…}.

## Ce qu’il faut exporter {#what}

En haut de la fenêtre se trouvent les choix qui ont du sens pour ce que tu as choisi. Le plus précis vient en premier et est choisi au départ : avec un calque choisi, la fenêtre est prête à exporter ce calque. Quand un seul choix a du sens, il n’y a pas de rangée de choix.

| Choix | Proposé quand | Ce qui sort |
| --- | --- | --- |
| {Ce calque}, {Ce groupe}, {3 calques} | Tu as choisi des calques qui ne sont pas des plans de travail. | Chaque calque choisi seul, seulement aussi grand qu’il est. Voir [Les calques seuls](/docs/export.html#layers). |
| {Cette publication} | Tu as choisi une pile qui a plus d’une publication, ou quelque chose dessus. | La publication du dessus. |
| {Son plan de travail}, {3 plans de travail}, {Toutes les 12} | Tu as choisi des plans de travail, ou des calques qui s’y trouvent, et ce ne sont pas tous les plans de travail du design, ou des calques sont choisis aussi. | Les plans de travail où se trouvent les calques choisis, ou les plans de travail choisis. Pour une pile, chaque publication. |
| {5 marqués} | Quelque chose dans le design est marqué pour l’export. | Tout ce qui est marqué, chacun comme le dit sa carte Exporter. Voir [Marquer pour l’export](/docs/export.html#marking). |
| {Tous les 4} | Les plans de travail choisis ne sont pas déjà tous les plans de travail. | Chaque plan de travail du design. |

Les plans de travail masqués et les calques masqués sont laissés de côté, quel que soit ton choix. Quand {5 marqués} est choisi, {Format} et {Échelle} s’effacent, puisque chaque marquage dit les siens.

## Format {#formats}

| Format | Fait de | Arrière-plan | À savoir |
| --- | --- | --- | --- |
| PNG | Pixels | Les parties transparentes restent transparentes | Ne perd rien. |
| JPEG | Pixels | Sur fond blanc | Plus léger ; réglé par la {Qualité}. |
| WebP | Pixels | Les parties transparentes restent transparentes | Plus léger ; réglé par la {Qualité}, et au réglage le plus haut, ne perd rien. Au plus 16 383 pixels de côté. |
| AVIF | Pixels | Les parties transparentes restent transparentes | Plus léger ; réglé par la {Qualité}. Proposé quand ton Mac sait l’écrire. |
| SVG | Formes, texte et dégradés | Transparent | Un fichier pour chaque chose. Reste net à toutes les tailles et se modifie dans d’autres apps. |
| PDF | Formes et texte | Transparent | Un seul fichier pour tout, une page pour chaque chose, net à toutes les tailles. |

Si le format que tu as utilisé la dernière fois ne peut pas être écrit sur ce Mac, la fenêtre utilise le PNG.

### Le SVG et le PDF en détail {#vector}

Un **SVG** est écrit aussi près de l’apparence du design que le SVG le permet, et comme le SVG l’entend, pour qu’il reste modifiable : rectangles, ellipses et tracés ; du texte qui reste du texte, ligne par ligne là où Bezzle le compose, dans ses polices, avec les mots stylés autrement dans leurs propres spans et les puces avant leurs éléments ; des mots le long d’une courbe sous forme de lettres posées sur elle ; des dégradés ; des bordures intérieures et extérieures ; des ombres et des flous sous forme de filtres SVG ; des images contenues dans le fichier. Chaque calque garde son nom comme id. Deux choses que le SVG ne sait pas faire arrivent sous forme d’images : un flou d’arrière-plan (une image de ce qui transparaît) et un calque pivoté en profondeur. Pour les polices, le fichier demande d’abord la famille qu’utilise le design, puis le style dessiné ici, puis quelque chose d’approchant que tout le monde a.

Un **PDF** a une page pour chaque chose exportée, chaque page aussi grande que la chose, en points. Le texte et les formes restent du texte et des formes. Un PDF de plusieurs choses porte le nom du design ; un PDF d’une seule chose, comme un carrousel avec une page par diapositive, porte le nom de celle-ci.

## Échelle {#scale}

Pour le PNG, le JPEG, le WebP et l’AVIF, l’{Échelle} règle combien de pixels entrent dans chaque point du design : {1×}, {2×} ou {3×}. Un plan de travail de 390 points de large fait 1 170 pixels de large à 3×. La fenêtre commence à 2×.

Les fichiers PNG et JPEG sont marqués de leur résolution, 72 points par pouce à 1× et le double à 2×, pour que les apps qui la lisent sachent combien de pixels font un point.

Les carrousels gardent une échelle à eux, qui commence à 1× : leurs diapositives sont faites dans les pixels qu’acceptent les plateformes, si bien que 1× est déjà la bonne taille pour publier. Quand tout ce qui sort est fait de diapositives, l’{Échelle} montre et change celle-là.

Pour toute autre taille, comme 1,5×, ou une largeur ou une hauteur exacte en pixels, marque plutôt le calque pour l’export : ses tailles peuvent être n’importe lesquelles (voir [Marquer pour l’export](/docs/export.html#marking)).

## Qualité {#quality}

Pour le JPEG, le WebP et l’AVIF, la {Qualité} règle quelle part de l’image est gardée, face à la légèreté du fichier : {60%}, {80%}, {90%} ou {100%}. Pour le WebP, le choix le plus haut est {Sans perte}. Quand tu exportes ce qui est marqué, le choix s’affiche dès que l’un de ces fichiers est avec perte, et son choix le plus haut est {Maximale}, le meilleur de chaque format. La fenêtre commence à 90 %, et le bouton {Exporter…} d’une carte Exporter utilise la dernière qualité choisie ici.

## Le résumé {#summary}

Sous les choix, une phrase dit ce qui sera écrit, pour qu’il n’y ait pas de surprise :

- « Home en 1170 × 2532 pixels. »
- « Icon en 96 × 96 pixels, sur fond transparent. » (Un JPEG dit « sur fond blanc ».)
- « Les 5 diapositives de Launch en 1080 × 1350 pixels, en fichiers séparés. »
- « Les 12 publications de Sale en 2160 × 2700 pixels, en fichiers séparés. »
- « 3 plans de travail en un seul PDF, sur des pages séparées, avec un texte et des formes qui restent nets à toute taille. »
- « Home en SVG : formes, texte et dégradés restent modifiables ; les flous d’arrière-plan deviennent des images. »
- « Comme marqué : Icon.png, Icon@2x.png et Icon@3x.png. »

Les tailles en pixels sont données pour une seule chose, et pour plusieurs plans de travail, diapositives ou publications de même taille.

## Où vont les fichiers {#where}

::: steps
1. **Clique sur {Exporter…}.** Une fenêtre de dossier demande « Choisissez où placer les fichiers exportés. » Elle s’ouvre dans le dossier où tu as exporté la dernière fois, et tu peux y créer un nouveau dossier.
2. **Clique sur {Exporter ici}.** Bezzle écrit les fichiers un par un, le bouton affichant {Exportation…} et se remplissant au fur et à mesure.
3. **Regarde-les.** La fenêtre dit où ils sont allés, « Enregistré dans Assets. », ou le nom du fichier lui-même quand il n’y en a qu’un, avec {Afficher dans le Finder} à côté.
:::

Quand des fichiers de mêmes noms se trouvent déjà dans ce dossier, Bezzle demande d’abord : « Le dossier Assets contient déjà un fichier nommé Icon@2x.png. » ou « 3 des fichiers se trouvent déjà dans Assets. »

- {Remplacer} écrit par-dessus.
- {Garder les deux} les garde et donne un numéro aux nouveaux fichiers, par exemple « Card 2.png ».
- {Annuler} n’écrit rien.

Si tu changes un choix pendant que la question est ouverte, elle disparaît, puisqu’elle portait sur d’autres fichiers.

Si un fichier ne peut pas être créé, la fenêtre le dit en rouge : « Un fichier n’a pas pu être créé. » ou « 3 fichiers n’ont pas pu être créés. » Quand il s’agit de WebP, elle ajoute : « Un WebP fait au plus 16383 pixels de côté. » Choisis une échelle plus petite ou un autre format.

## Comment les fichiers sont nommés {#names}

| Ce qui sort | Nommé |
| --- | --- |
| Un plan de travail ou un calque | Son nom, puis l’échelle : rien à 1×, `@2x` à 2×, `@3x` à 3×. « Home@2x.png » |
| Une diapositive d’un carrousel | Le nom du carrousel et le numéro de la diapositive. « Launch 01.png », « Launch 02.png » |
| Une publication d’une pile | Le nom de la pile, le numéro de la publication, et ce que la publication dit en premier : la première ligne de ses plus grands mots, jusqu’à 40 caractères. « Sale 03 Hats.png » |
| Un SVG | Son nom, sans échelle. « Logo.svg » |
| Un PDF de plusieurs choses | Le nom du design. |

Les numéros ont au moins deux chiffres, et autant qu’il en faut au dernier, pour que les fichiers se trient dans l’ordre dans le Finder.

- **Un `/` dans un nom** place le fichier dans un dossier portant le nom qui le précède : un calque appelé « icons/home » sort en « home.png » dans un dossier « icons », créé s’il n’existe pas. Un `:` devient un `-`. Rien dans un nom ne peut sortir du dossier que tu as choisi.
- **Deux fichiers d’un même export ne tombent jamais sur le même nom.** Le second devient « Card 2 », et ainsi de suite.

## Les calques seuls {#layers}

Un calque qui n’est pas un plan de travail ne sort qu’aussi grand que ce qu’il peint : son ombre, son flou et tout ce qu’il dessine d’autre sont inclus, et le reste est rogné. Il ne repose sur rien, si bien que ce qui l’entoure reste transparent (sur fond blanc dans un JPEG). Son coin supérieur gauche tombe sur un pixel entier, pour que ses bords sortent nets.

Un groupe sort en une seule image de tout ce qu’il contient. Un calque qui a un flou d’arrière-plan floute ce qui se trouve derrière lui sur son plan de travail, comme sur le canevas ; sur une pile, ce qui se trouve derrière lui sur sa propre publication.

## Plans de travail, carrousels et piles {#boards}

Un **plan de travail** sort entier, à sa propre taille.

Un **carrousel** est un plan de travail fait de diapositives côte à côte, conçues d’un seul tenant, pour que ce qui passe d’une diapositive à la suivante reste aligné de part et d’autre de la coupe. Il sort en une image par diapositive, chacune nommée avec son numéro. En un seul PDF, c’est une page par diapositive.

Une **pile** contient de nombreuses publications sur un seul plan de travail. Exportée comme plan de travail, ou avec {Tous les 4}, elle sort en un fichier par publication. Quand une pile est choisie, la fenêtre propose aussi {Cette publication}, pour la seule publication du dessus, à côté de {Toutes les 12}. Une pile marquée pour l’export sort avec toutes ses publications, pas seulement celle du dessus. Voir [Piles](/docs/decks.html).

## Marquer pour l’export {#marking}

Marquer un calque ou un plan de travail dit quels fichiers il devient chaque fois que ce qui est marqué est exporté : par exemple une icône en PNG à 1×, 2× et 3× et en SVG. Les marquages sont enregistrés avec le design.

::: steps
1. **Choisis le calque ou le plan de travail** pendant que tu dessines.
2. **Clique sur {Exporter}** parmi les pastilles en pointillés en bas de l’inspecteur. Son info-bulle dit « Marquer pour l’export ». Le calque est marqué en PNG à 1×, et sa carte {Exporter} s’ouvre.
3. **Ajoute les fichiers qu’il doit devenir** avec le + sous les rangées, et règle chaque rangée.
:::

::: fields
- **Taille** : la taille de chaque fichier. Tape des pixels par point, comme `2`, `2x`, `2×`, `@2x` ou `1,5x` (de 0,01× à 20×), ou une largeur ou une hauteur exacte en pixels, comme `512w` ou `64h` (de 1 à 16 384). Une taille que Bezzle ne sait pas lire revient à ce qu’elle était. Pour le SVG et le PDF, la taille reste pâle, puisqu’ils n’en ont pas.
- **Suffixe** : ce qui vient après le nom du calque. Laissé tel quel, il suit la taille : `@2x` à 2×, rien à 1× ou pour le SVG et le PDF, `-512w` pour une largeur. Tape le tien, comme `_large`. Un `/` dedans place le fichier dans un dossier.
- **Format** : un menu des formats que ce Mac sait écrire.
- **−** : « Supprimer ce fichier ». Supprimer le dernier retire le marquage du calque.
- **+** : ajoute la taille suivante dans le format de la dernière rangée, 2× après 1×, puis 3× ; son info-bulle dit laquelle (« Ajouter 2× »). Après un SVG ou un PDF, il ajoute un autre fichier de ce format.
- **Exporter…** : écrit ces fichiers tout de suite, en demandant où, avec les mêmes questions que la fenêtre d’export.
- **Les noms de fichiers** : sous les rangées, les noms des fichiers qui seront écrits, tous jusqu’à quatre, ou les trois premiers et le nombre des autres.
- **×** : « Retirer de l’export », dans le coin de la carte quand elle est ouverte.
:::

La ligne repliée de la carte résume ses fichiers, chaque format une seule fois avec ses tailles : « PNG 1× 2× 3× · SVG ». Quand plusieurs calques sont choisis, chaque changement s’applique à tous ; quand ils sont marqués différemment, elle dit {Plusieurs}.

Tout ce qui est marqué peut ensuite sortir d’un coup avec le choix {5 marqués} de la fenêtre d’export. En [mode Inspecter](/docs/inspect.html#design), quand rien n’est choisi, une carte montre ce qui est marqué, chaque élément à faire glisser dehors séparément. Les fichiers Sketch apportent leurs marquages d’export quand tu [les importes](/docs/import.html#sketch).

Chaque changement est une étape d’annulation : {Marquer pour l’export}, {Ajouter une taille d’export}, {Modifier la taille d’export}, {Modifier le suffixe}, {Modifier le format d’export}, {Supprimer la taille d’export} et {Retirer de l’export}.

## Copier au lieu d’exporter {#copying}

Pour une image rapide, pas besoin d’exporter. En [mode Inspecter](/docs/inspect.html#assets), fais un clic droit sur un calque et choisis {Copier en PNG} (à 2×) ou {Copier en SVG}, ou fais glisser l’image du calque hors du panneau vers le Finder ou dans du code, en PNG à 1×, 2× ou 3×, en SVG ou en PDF.

## Ce qui est mémorisé {#remembered}

La fenêtre d’export mémorise le format, l’échelle, l’échelle des diapositives de carrousel, la qualité et le dossier où tu as exporté la dernière fois, d’un export à l’autre et pour tous les designs. Ce qu’un calque est marqué pour devenir est enregistré dans le design lui-même : c’est donc là pour chaque personne qui l’ouvre.

Un assistant IA connecté à Bezzle peut aussi exporter, de la même façon. Voir [Assistants IA](/docs/ai.html).
