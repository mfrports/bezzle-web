---
title: Importer des designs
nav: Importer
lede: Ouvre des fichiers Adobe XD, Figma, Sketch et Photoshop comme des designs Bezzle, avec leurs plans de travail, calques, masques, textes et images, ou importe n’importe quelle page web en calques, au besoin après t’être connecté et avoir cliqué jusqu’à elle dans le navigateur de Bezzle, et vois dans un court rapport ce qui s’affiche un peu différemment.
---

Tu n’as pas à tout recommencer pour travailler dans Bezzle. Un fichier Adobe XD, Figma, Sketch ou Photoshop arrive comme un nouveau design que tu modifies comme n’importe quel autre, et une page web arrive en calques, avec un plan de travail pour chaque largeur à laquelle tu la lis, comme nouveau design ou dans celui que tu as ouvert. Tout ce que Bezzle sait dessiner passe tel quel. Ce dont il ne peut que s’approcher est compté dans un rapport, pour que tu saches quoi vérifier.

## Les façons d’importer {#ways-in}

- **{Fichier › Importer depuis XD, Figma, Sketch ou Photoshop…}** ou {{⇧⌘I}} : une fenêtre qui ne montre que ces fichiers. Tu peux en choisir plusieurs à la fois. Son message dit : « Chaque fichier devient un nouveau design dans votre dossier Bezzle. Le fichier d’origine reste intact. »
- **{Fichier › Ouvrir…}** ou {{⌘O}} : ouvre aussi bien les designs Bezzle que ces fichiers. {Ouvrir…} en haut à droite de l’écran d’accueil fait de même.
- **Dépose les fichiers sur l’écran d’accueil.** La fenêtre affiche « Déposez pour ouvrir ».
- **Dépose-les sur l’icône de Bezzle** dans le Dock.
- **Dans le Finder,** choisis Ouvrir avec › Bezzle sur le fichier.
- **{Fichier › Importer depuis un site web…}** ou {{⌥⇧⌘I}}, ou {Depuis un site web…} sur l’écran d’accueil : importe une page web. Faire glisser un lien depuis un navigateur sur l’écran d’accueil ouvre la même fenêtre avec cette adresse. Voir [Pages web](/docs/import.html#websites).

| Depuis | Fichier | Avant de l’importer |
| --- | --- | --- |
| Adobe XD | `.xd` | Rien. |
| Figma | `.fig` | Dans Figma, utilise Save local copy pour obtenir un fichier `.fig`. |
| Sketch | `.sketch` | Enregistré par Sketch 43 ou ultérieur. |
| Photoshop | `.psd`, `.psb` | Rien. |

## Ce qui se passe {#what-happens}

Chaque fichier devient un **nouveau design** dans ton dossier de designs, nommé d’après le fichier (« Onboarding 2 » quand ce nom est déjà pris), et s’ouvre dans son propre onglet. Ses images sont copiées dans le design, qui n’a donc plus besoin de rien du fichier ensuite. Le fichier lui-même reste exactement tel qu’il était.

Ouvrir de nouveau le même fichier l’importe de nouveau, comme un autre nouveau design. Les changements que tu as faits dans le premier restent dans le premier.

Bezzle a un seul canevas : un fichier de plusieurs pages les dispose donc sur lui les unes sous les autres, la première là où elle était, chacune des autres 800 points sous la précédente, alignée sur son bord gauche. Le design s’ouvre avec un zoom qui montre tout.

Un document Photoshop peut prendre un moment, car les photos d’une maquette sont grandes. Pendant sa lecture, son onglet montre l’image propre au fichier, telle que la montre le Finder, qui se développe comme un tirage : pâle et floue d’abord, de plus en plus nette à mesure que ses calques sont lus, avec un fin trait qui indique l’avancée et le nom du calque en cours.

## Le rapport d’import {#report}

Quand un design est arrivé, une carte au pied du canevas dit comment cela s’est passé.

::: fields
- **Importé depuis Figma** : l’app, ou pour une page web, le site.
- **Combien** : « 4 plans de travail et 312 calques. »
- **Ce qu’il faut vérifier** : « Tout a été importé tel quel. », ou « Certains éléments s’affichent un peu différemment ici : » avec une ligne pour chaque chose qui a été approchée et le nombre de fois, la plus fréquente en premier. Les cinq premières sont affichées ; {3 autres…} montre le reste.
- **Polices** : « Polices absentes de ce Mac, remplacées par une autre : » et leurs noms. Installe-les et le texte s’affiche dans ces polices ; le design continue de les demander par leur nom.
- **Terminé** : range la carte.
:::

Les lignes sont écrites avec des mots simples, comme « Dégradés angulaires, rendus en radial » ou « Calques de réglage omis ». La section de chaque app, ci-dessous, liste ce que peut dire son rapport.

## Ce qui passe depuis XD, Figma et Sketch {#common}

- **Les plans de travail** restent des plans de travail, à leurs tailles et à leurs places, et les calques posés librement sur le canevas restent libres.
- **Les calques** gardent leurs noms, leur ordre et leurs groupes, et restent masqués ou verrouillés comme ils l’étaient. Les rectangles, les ellipses et les lignes restent ce qu’ils sont ; tout autre dessin devient un tracé. Un calque pivoté garde sa rotation ; un calque incliné ou étiré d’une façon qu’un cadre et une rotation ne savent pas exprimer devient un tracé de son contour.
- **Le texte** reste du texte modifiable, dans ses polices, ses tailles, ses couleurs et ses espacements, les mots stylés autrement le restant, et son dimensionnement ({Largeur automatique}, {Hauteur automatique} ou {Taille fixe}) tel qu’il était. Le San Francisco d’Apple devient la police {Système} de Bezzle.
- **Les masques** deviennent ceux de Bezzle : un groupe dont la première forme contient le reste, coupé à son contour (voir [Images et photos](/docs/pictures.html)). Un masque fait d’un texte ou d’une ligne découpe selon son cadre.
- **Les apparences** : couleurs, dégradés linéaires et radiaux, images, plusieurs remplissages sur un même calque, bordures, ombres (intérieures aussi), flous, opacité et modes de fusion.
- **Les grilles de mise en page et les repères** des plans de travail deviennent ceux de Bezzle (voir [Mise en page et tailles](/docs/layout.html)).
- **Les composants et les symboles** arrivent comme ce qu’ils montrent : un groupe des calques du composant principal avec les changements propres à chaque instance, textes et images compris. Ils ne sont pas liés entre eux dans Bezzle. Pour en refaire des composants, voir [Composants](/docs/components.html).

Ce qui ne passe pas : les liens entre écrans (redessine-les en [mode Prototype](/docs/prototype.html)), et les styles partagés, qui arrivent comme les apparences qu’ils donnent plutôt que comme des styles nommés.

## Adobe XD {#xd}

Un fichier XD arrive avec ses plans de travail et les calques de sa table de montage, les instances de composants comme ce qu’elles montrent, les masques, les grilles de mise en page (leurs colonnes) et les repères. Les grilles de répétition deviennent les [grilles de répétition](/docs/layout.html) de Bezzle, lues depuis le coin supérieur gauche, chaque cellule gardant ses propres textes et images ; une grille dont les cellules ne se ressemblent pas arrive comme un simple groupe. Le texte de zone garde son cadre ({Taille fixe}), le texte à hauteur automatique grandit avec ses mots, et le texte de point est en {Largeur automatique}.

Ce que peut dire le rapport :

- Grilles de répétition, importées comme groupes
- Instances de composants dont le composant principal est introuvable
- Masques introuvables
- Masques en texte ou en lignes, découpant selon leur cadre
- Formes composées sans contour
- Angles de polygones arrondis, rendus vifs
- Dégradés radiaux pivotés ou étirés
- Dégradés mesurés sur la zone de travail, placés selon le calque
- Dégradés sans couleurs
- Textes étirés, composés à leur taille affichée
- Textes inclinés, redressés
- Marges haute et basse des grilles de mise en page, ignorées
- Grilles carrées, ignorées
- Modes de fusion inconnus de Bezzle, rendus en Normal
- Effets inconnus de Bezzle
- Types de formes, de calques ou de remplissage inconnus de Bezzle
- Images sans fichier, ou absentes du fichier Adobe XD
- Plans de travail illisibles

## Figma {#figma}

Dans Figma, utilise Save local copy pour obtenir un fichier `.fig`, puis importe-le. Les cadres posés directement sur une page deviennent des plans de travail. Les cadres dans des cadres deviennent des groupes, coupés à leur cadre quand ils rognent leur contenu. Les sections donnent ce qu’elles contiennent à la page. Les pages sont disposées les unes sous les autres. Les instances arrivent comme ce qu’elles montrent, avec leurs remplacements et leurs propriétés de composant appliqués.

Les angles lisses, les flous progressifs qui grandissent à travers un calque, les flous d’arrière-plan, les grilles de mise en page, les repères des cadres posés sur la page et les listes dans le texte passent. Le texte garde sa façon de grandir : en largeur, en hauteur ou pas du tout.

Ce que peut dire le rapport :

- Pages, disposées sous la première
- Sections, retirées en gardant leur contenu
- Instances de composants dont le composant principal est introuvable
- Composants qui se contiennent eux-mêmes, laissés vides
- Instances mises à l’échelle en bloc, leur contenu en taille réelle
- Masques de luminance, découpant selon leur forme
- Masques alpha, découpant selon leur contour
- Masques en texte ou en lignes, découpant selon leur cadre
- Dégradés angulaires, rendus en radial
- Dégradés en losange, rendus en radial
- Dégradés sans couleurs
- Remplissages sous une image, ignorés
- Remplissages fusionnés avec ceux du dessous, simplement superposés
- Images recadrées, affichées en entier
- Images en mosaïque, remplissant leur calque une seule fois
- Images pivotées, affichées droites
- Images aux couleurs ajustées, affichées telles quelles
- Images transparentes, affichées opaques
- Plans de travail transparents, rendus opaques
- Ombres et flous sur les plans de travail, ignorés
- Flous progressifs partant d’un flou non nul, partant ici de zéro
- Bordures sur des angles arrondis, rendues comme des formes
- Bordures d’épaisseur différente selon le côté, rendues uniformes
- Textes avec bordure, affichés sans bordure
- Textes remplis d’un dégradé, dans sa première couleur
- Textes remplis d’une image, en couleur unie
- Textes à plusieurs interlignes ou espacements de paragraphe, espacés comme leur partie principale
- Textes avec des fonctions ou des axes de police dans une partie seulement, composés comme leur partie principale
- Textes étirés, composés à leur taille affichée
- Textes inclinés, redressés
- Grilles de mise en page sur des cadres dans des cadres, ignorées
- Grilles de mise en page supplémentaires du même type, ignorées
- Grilles carrées, ignorées
- Repères sur la zone de travail, ignorés
- Repères sur des cadres dans des cadres, ignorés
- Formes sans contour, ignorées
- Modes de fusion inconnus de Bezzle, rendus en Normal
- Effets inconnus de Bezzle
- Types de calques ou de remplissage inconnus de Bezzle
- Images sans fichier, ou absentes du fichier Figma

## Sketch {#sketch}

Un fichier Sketch arrive avec toutes ses pages, ses plans de travail et ses symboles principaux sous forme de plans de travail. Quand la page Symbols ne contient que des symboles principaux que montrent des instances sur les autres pages, elle est laissée de côté, car on n’y perd rien. Une instance de symbole est remise en page à sa propre taille comme le disent les réglages de redimensionnement de ses calques, avec ses remplacements : textes, symboles échangés, images, et styles de calque et de texte. La teinte d’un groupe colore ce qu’il contient. Les angles lisses, les grilles de mise en page et les repères des plans de travail passent.

**Les marquages d’export suivent :** les tailles, formats et suffixes d’export de chaque calque deviennent sa carte Exporter dans Bezzle, prêts à sortir (voir [Marquer pour l’export](/docs/export.html#marking)).

Ce que peut dire le rapport :

- Instances de symboles dont le symbole principal est introuvable
- Symboles qui se contiennent eux-mêmes, ignorés
- Remplacements de symboles inconnus de Bezzle, laissés comme dans le symbole principal
- Remplacements de symboles dans un ancien format, laissés comme dans le symbole principal
- Calques trop imbriqués ou trop nombreux, ignorés
- Calques de formes combinées qui ne sont pas des formes, ignorés
- Groupes teintés d’un dégradé ou d’une image, laissés sans teinte
- Masques alpha, découpant selon leur contour
- Masques en texte ou en lignes, découpant selon leur cadre
- Bordures et ombres intérieures des masques, dessinées par-dessus leur contenu
- Angles inversés, biseautés et droits, rendus arrondis
- Angles lissés sur les tracés, rendus arrondis
- Dégradés angulaires, rendus en linéaire
- Dégradés sans couleurs
- Remplissages de bruit, ignorés
- Remplissages sous une image, ignorés
- Remplissages avec leur propre mode de fusion, rendus en Normal
- Images atténuées dans leur remplissage, rendues opaques
- Images teintées, affichées dans leurs couleurs d’origine
- Images en mosaïque, rendues une seule fois pour remplir
- Images illisibles par Bezzle, affichées en gris
- Ombres de formes sans remplissage ni bordure, non projetées
- Flous de mouvement et de zoom, rendus en flou simple
- Pointes de flèche sur les lignes, omises
- Textes d’une ancienne version de Sketch, repris de leur nom de calque
- Textes avec bordure, rendus sans bordure
- Textes remplis d’un dégradé, dans sa première couleur
- Textes remplis d’une image, en couleur unie
- Textes aux paragraphes alignés différemment, alignés comme leur partie principale
- Textes à plusieurs interlignes ou espacements de paragraphe, espacés comme leur partie principale
- Textes avec des fonctions ou des axes de police dans une partie seulement, composés comme leur partie principale
- Textes étirés, composés à leur taille affichée
- Textes inclinés, redressés
- Textes retournés, remis dans le sens de lecture
- Grilles carrées, ignorées
- Repères sur la zone de travail, ignorés
- Modes de fusion inconnus de Bezzle, rendus en Normal
- Types de calques ou de remplissage inconnus de Bezzle
- Pages illisibles
- Images absentes du fichier Sketch

## Photoshop {#photoshop}

Bezzle lit les documents Photoshop en pensant aux maquettes : la photo d’un téléphone, d’un ordinateur portable ou d’une affiche, avec l’emplacement d’un design gardé comme objet dynamique. Chaque calque passe comme un calque à part entière, mélangé à ceux du dessous comme il l’était, si bien qu’une ombre ou un reflet peut encore être masqué ou modifié.

- **Les plans de travail** du document deviennent des plans de travail, avec leur couleur de fond. Un document sans plans de travail devient un seul plan de travail à sa taille, nommé d’après le fichier, et un fichier aplati est son unique image.
- **Les calques de pixels** deviennent des images, découpées par leurs masques, par le calque auquel ils sont écrêtés et par les groupes où ils se trouvent, avec leur opacité, leur opacité de fond et leur mode de fusion.
- **Les calques de remplissage d’une seule couleur** deviennent des formes, le contour de leur masque vectoriel ou tout le canevas.
- **Les objets dynamiques** deviennent l’écran d’une maquette : l’image qu’ils contiennent, épinglée par ses quatre coins là où l’objet dynamique s’affiche, vue sous le même angle. Dépose une image n’importe où par-dessus, même à travers le reflet et les ombres posés dessus, et l’image entre dans l’écran.
- **Les styles de calque** : les ombres portées et les ombres internes deviennent des ombres Bezzle, et un Contour une bordure (ou, sur un calque de pixels, une partie de ses pixels). Une Incrustation couleur ou une Incrustation en dégradé est intégrée aux pixels du calque.
- **Les calques de texte** arrivent comme des images de leurs lettres.

Les documents en couleurs RVB, CMJN, Niveaux de gris, Bichromie, Couleurs indexées, Bitmap et Multicanal peuvent être lus.

Ce que peut dire le rapport :

- Texte importé comme image de ses lettres
- Calques de réglage omis
- Objets dynamiques déformés importés comme images
- Objets dynamiques masqués ou écrêtés importés comme images
- Objets dynamiques impossibles à ouvrir importés comme images
- Masques vectoriels de groupes appliqués aux images qu’ils contiennent
- Masques vectoriels que Bezzle ne peut pas appliquer, omis
- Styles de calque des groupes omis
- Lueurs omises
- Biseautages et satins omis
- Incrustations de motif omises
- Dégradés de bruit omis
- Remplissages en motif omis
- Calques illisibles

## Pages web {#websites}

Bezzle peut importer n’importe quelle page web comme un design : il charge la page hors de vue, la fait défiler pour que tout se charge, et la décompose en calques. Un écran qui se trouve derrière une connexion, ou à un ou deux clics de toute adresse, tu l’ouvres dans [le navigateur de Bezzle](#web-browser) et tu l’importes tel qu’il s’affiche.

::: steps
1. **Choisis {Fichier › Importer depuis un site web…}** ({{⌥⇧⌘I}}). Si le presse-papiers contient une adresse web, elle est déjà remplie.
2. **Tape l’adresse** dans {Adresse}, par exemple `example.com`. Bezzle ajoute `https://` si tu l’omets. Une adresse `file:` d’une page sur ton Mac fonctionne aussi.
3. **Choisis les tailles** auxquelles la lire. Chacune devient un plan de travail à part, côte à côte.
4. **Choisis où elle va,** sous {Dans} : le design au premier plan, par son nom, ou {Nouveau design}. Voir [Dans le design que tu as ouvert](#web-into).
5. **Laisse {Masquer les bannières de cookies} activé** pour retirer les bannières de cookies et les voiles qu’elles posent sur la page. Il est activé au départ.
6. **Clique sur {Importer}** ou appuie sur {{Return}}. Un nouveau design s’ouvre dans son propre onglet ; dans un design ouvert, la vue va aux nouveaux plans de travail.
:::

| Taille | Largeur | Lue dans une fenêtre de |
| --- | --- | --- |
| {Bureau} | 1440 px | 1440 × 900 |
| {Tablette} | 768 px | 768 × 1024 |
| {Portable} | 390 px | 390 × 844, comme la lit un téléphone, en le signalant à la page |
| {Autre largeur} | N’importe laquelle, de 240 à 3840 px | Aussi haute qu’un écran de cette largeur ; lue comme sur un téléphone jusqu’à 500 px |

{Bureau} est choisi au départ. Choisis autant de tailles que tu veux, et les plans de travail sont nommés d’après elles (« Bureau », « Portable », « 1280 px »). Quand le site répond par une erreur, son code suit le nom, par exemple « Bureau (404) ».

Pendant l’import, le bouton {Importer} se remplit et une ligne en dessous dit ce que fait Bezzle : « Chargement de la page… », « Défilement de la page… », « Décomposition de la page… », « Conservation de ce que dessine WebGL… », « Récupération des images (12 sur 40)… », « Photographie de ce qui n’est pas une forme (2 sur 5)… » et « Disposition des calques… », chacune précédée du nom de la taille quand tu en as choisi plusieurs. {Annuler} l’arrête. Une longue page prend un moment.

### Dans le design que tu as ouvert {#web-into}

Quand un design que tu peux modifier est au premier plan au moment où tu ouvres la fenêtre d’import, {Dans} le propose par son nom à côté de {Nouveau design}, et il est choisi au départ. Depuis l’accueil, une page devient toujours un nouveau design.

Dans un design ouvert, la page arrive à côté de ce qui s’y trouve :

- **Ses plans de travail sont posés en rangée** 400 points à droite de tout ce qui est sur le canevas, leurs hauts au niveau du plan de travail le plus haut, et restent sélectionnés.
- **Chacun est nommé d’après la page :** son titre, ou sinon le chemin de son adresse, suivi de la taille quand ce n’est pas {Bureau}, par exemple « Tarifs (Portable) », et d’un numéro quand le design a déjà ce nom.
- **Ses images sont copiées dans le design,** comme pour un nouveau.
- **C’est une seule étape** dans {Édition › Annuler}, nommée {Importer depuis un site web}.
- **Le rapport** montre ce dont Bezzle n’a pu que s’approcher, comme pour un nouveau design.

Ainsi, les écrans d’un site ou d’une app web, lus l’un après l’autre, se rassemblent dans un seul design.

### Le navigateur de Bezzle {#web-browser}

Certains écrans n’ont pas d’adresse qu’un simple import pourrait charger : ceux qui sont derrière une connexion, une boîte de dialogue qui s’ouvre sur un clic, une liste après une recherche. Pour ceux-là, tape l’adresse du site dans la fenêtre d’import et clique sur {Ouvrir la page…} au lieu de {Importer}. Son info-bulle : « Connectez-vous ou cliquez jusqu’à l’écran voulu, puis importez-le tel quel. »

La page s’ouvre dans une fenêtre de navigateur propre à Bezzle. Connecte-toi, clique jusqu’où tu veux, tape, ouvre un menu, fais défiler une liste : quand la fenêtre montre l’écran que tu veux, clique sur {Importer}. Bezzle importe la page exactement comme elle s’affiche, menus ouverts et résultats compris, les boîtes qui défilent à l’intérieur défilées là où tu les as laissées, et laisse la page telle qu’elle était : tu peux donc passer à l’écran suivant et l’importer aussi.

::: fields
- **Retour**, **Suivant**, **Recharger** : comme dans n’importe quel navigateur.
- **Adresse** : où se trouve la page, avec un cadenas quand la connexion est sécurisée. Tape une autre adresse et appuie sur {{Return}} pour y aller.
- **Pages** : plusieurs pages du site à la fois, voir ci-dessous.
- **Bureau**, **Tablette**, **Portable** : la largeur à laquelle la page est mise en page, qui est celle du plan de travail qu’elle devient. La fenêtre s’ouvre à la plus large des tailles choisies dans la fenêtre d’import. Passer à {Portable} ou en revenir recharge la page, puisqu’un téléphone signale à la page qu’il en est un.
- **Importer** : importe la page comme elle s’affiche. Le bouton se remplit pendant que Bezzle travaille et indique {Importation…}, puis {Importé} un instant quand la page est arrivée.
:::

Sous le titre de la page, la fenêtre dit où vont ses pages : « Dans » et le nom du design, ou « Dans un nouveau design ». Un nouveau design est créé avec la première page que tu importes et s’ouvre derrière le navigateur ; les pages suivantes vont dans le même design, chacune comme un plan de travail à côté du précédent, comme [plus haut](#web-into).

**Les connexions sont gardées.** Ce à quoi tu te connectes dans le navigateur de Bezzle reste connecté d’un lancement de Bezzle à l’autre, et pour les imports simples aussi : une fois que tu t’es connecté à un site ici, {Importer} dans la fenêtre d’import lit ses pages comme tu les vois. Le navigateur garde ses cookies dans un espace à lui sur ton ordinateur, séparé de celui de Safari et de toute autre app.

### Plusieurs pages à la fois {#web-pages}

{Pages}, dans la barre du navigateur, liste des pages du site à importer ensemble : la page ouverte, puis {Visitées}, les pages où tu es allé dans cette fenêtre, et {Liens}, les pages vers lesquelles mène la page ouverte. Coche celles que tu veux, ou clique sur {Tout} à côté d’un groupe, qui indique alors {Aucun} ; seule la page ouverte est cochée au départ. {Importer 3 pages}, avec le nombre que tu as coché, les importe toutes dans un seul design, côte à côte, en une seule étape de {Édition › Annuler}.

La page ouverte est lue comme elle s’affiche. Les autres sont chargées l’une après l’autre hors de vue, connectées comme l’est le navigateur, à la taille choisie dans la barre. Une ligne dit où en est l’import, par exemple « Page 2 sur 5: Décomposition de la page… », chaque page recevant une coche une fois lue, et {Annuler} l’arrête, sans en importer aucune. Une page qui ne peut pas être lue est laissée de côté, et Bezzle dit combien : « 2 pages n’ont pas pu être lues. »

> [!windows]
> Bezzle pour Windows a la même fenêtre d’import et le même navigateur, avec {Ouvrir la page…}, {Pages} et les trois tailles. Il garde ses connexions dans un profil à lui, séparé de celui d’Edge.

### Ce qui passe {#web-layers}

- **Les boîtes** deviennent des formes, avec leurs remplissages, dégradés, bordures, angles et ombres.
- **Le texte** devient du texte dans ses polices, composé en lignes comme le navigateur l’a composé : un paragraphe renvoyé à la ligne dans sa boîte, ou un texte par ligne là où les mots contournent d’autres boîtes. Chaque police est la première que la page demande et que ton Mac possède, ou celle avec laquelle la page a dessiné, dans le style le plus proche en graisse et en inclinaison.
- **Les images** sont récupérées et placées comme la page les montre, et **les SVG** deviennent des tracés modifiables.
- **Les groupes** suivent la page : les calques sont groupés comme les éléments de la page se contiennent les uns les autres, dans l’ordre où le navigateur les peint. Ils sont nommés d’après ce qu’ils sont, comme {En-tête}, {Navigation}, {Section}, {Bouton}, {Lien}, {Élément de liste}, {Image}, {Champ} ou {Pied de page}, ou d’après la classe ou l’id de l’élément écrits en mots : « hero-banner » devient « Hero banner ».
- **Ce que WebGL dessine dans un élément canvas**, comme un fond animé, est gardé vivant sous forme de [remplissage par shader](#web-shaders) là où Bezzle peut le redessiner.
- **Ce qui ne peut pas être décomposé**, comme les polices d’icônes, les vidéos, les pages intégrées, les contrôles de formulaire et les autres dessins dans un élément canvas, est photographié et arrive comme une image.
- **La couleur propre de la page** devient celle du plan de travail. Les menus glissés hors de vue et les diapositives de carrousel situées au-delà du bord sont laissés de côté.

Chaque plan de travail est aussi haut que la page, jusqu’à 30 000 points. Le design est nommé d’après le titre de la page, ou d’après le site quand elle n’en a pas. Le rapport dit « Importé depuis » et le nom du site.

Ce que peut dire le rapport :

- Pages plus longues que ce que Bezzle lit, coupées en bas
- Pages défilant dans une boîte, dépliées sur toute leur hauteur
- Parties de la page qui ne pouvaient être que photographiées, en images
- Icônes de polices d’icônes, en images
- Vidéos, en image fixe
- Pages et médias intégrés, en images
- Dessins sur un canevas, en images
- Dessins WebGL que Bezzle ne peut pas redessiner, en images
- Vidéos dans des dessins WebGL, en images fixes
- Contrôles de formulaire, en images
- SVG avec texte, images ou filtres, en images
- Arrière-plans SVG, en images
- Boîtes masquées par une image, en images
- Boîtes avec filtres de couleur, en images
- Filtres de couleur, ignorés
- Filtres sur l’arrière-plan des boîtes, ignorés
- Formes de découpe des boîtes, ignorées
- Arrière-plans répétés, dessinés une fois
- Dégradés coniques et autres, ignorés
- Contours en dégradé, dans sa première couleur
- Bordures doubles, rainurées et biseautées, tracées pleines
- Bordures en tirets sur certains côtés seulement, tracées pleines
- Bordures différentes selon le côté d’une boîte arrondie, tracées droites
- Coins ovales, arrondis
- Transformations 3D, dessinées à plat
- Textes qui contournent d’autres boîtes, un texte par ligne
- Textes avec bordure, affichés sans bordure
- Lettres en exposant et en indice, posées sur la ligne
- Compteurs dans le texte généré, ignorés
- Images utilisées comme puces, ignorées

La page est chargée comme ton navigateur la chargerait. Voir [Fichiers, mises à jour et confidentialité](/docs/files.html).

### Fonds WebGL vivants {#web-shaders}

Beaucoup de pages dessinent un fond animé, une lueur ou un grain avec WebGL, dans un élément canvas. Une photographie n’en donnerait qu’une image fixe, qui devient floue quand tu l’agrandis. Bezzle garde donc ce que la page y a dessiné, ses shaders et ce qu’elle leur a transmis, et l’élément canvas arrive comme un calque dont le remplissage est dessiné par ces shaders : un remplissage par shader.

- **Net à toutes les tailles.** Le remplissage est redessiné à la taille et au zoom auxquels il s’affiche, quels qu’ils soient, sur le canevas et dans chaque export.
- **Immobile dans le design, en mouvement dans un film.** Le design en montre un seul instant. Dans [Animer](/docs/animate.html), il tourne pendant que le film est lu, et ses entrées peuvent recevoir des images clés.
- **Son temps t’appartient.** La carte {Remplissage} du calque règle à quelle vitesse il tourne et quel instant le design montre, et rend l’image fixe : voir [Remplissages par shader](/docs/looks.html#shader-fills).

::: mac
Un élément canvas qui dessine en plusieurs étapes reste vivant lui aussi, là où la page dessine d’abord dans des images à elle, puis les assemble :

- **Les lueurs et les flous** posés sur ce qui a été dessiné, comme le sont un halo ou un flou artistique.
- **Les traînées et les simulations,** où chaque image s’appuie sur la précédente : de la fumée, des ondulations, une nuée de particules.
- **Les scènes avec de la profondeur,** où ce qui est plus près cache ce qui est plus loin, et une même forme dessinée de nombreuses fois.
:::

Tous les éléments canvas WebGL ne peuvent pas être gardés. {mac:Une très grande scène, ou une scène dessinée par des moyens plus rares,}{win:Celui qui dessine d’abord dans des images à lui, comme le font les effets de rétroaction et les enchaînements de flous, ou qui utilise la profondeur ou l’instanciation,} arrive comme une image, comme cela a toujours été le cas, et le rapport indique « Dessins WebGL que Bezzle ne peut pas redessiner, en images ». Une vidéo montrée dans un dessin WebGL reste immobile sur l’image qu’elle montrait, et le rapport indique « Vidéos dans des dessins WebGL, en images fixes ». {mac:Un dessin que la page reconstruisait à chaque image, comme le font certains moteurs de sprites, est gardé sous la forme de sa dernière image, net mais immobile.} Un élément canvas dessiné sans WebGL est photographié lui aussi.

Un remplissage par shader emporte son image avec lui. Là où les shaders ne peuvent pas être dessinés, comme dans un Bezzle plus ancien ou dans un design vu [dans un navigateur](/docs/sharing.html#browser), le calque montre cette image, immobile. {mac:Un remplissage qui dessine en plusieurs étapes montre aussi son image dans Bezzle pour Windows, pour l’instant. Un Bezzle plus ancien qui enregistre de nouveau un tel design ne garde que l’image.}

> [!windows]
> Sur un Mac, Bezzle garde aussi un élément canvas qui dessine en plusieurs étapes : lueurs et flous, traînées et simulations, scènes avec de la profondeur. Bezzle pour Windows montre l’image d’un tel remplissage, immobile, dans le design et dans un film.

## Quand un fichier ne veut pas entrer {#errors}

L’onglet, ou la fenêtre d’import de page web, dit pourquoi :

| Message | Pourquoi |
| --- | --- |
| Ce n’est pas un fichier Adobe XD que Bezzle peut lire. | Ce n’est pas un fichier enregistré par XD, ou il est endommagé. |
| Ce n’est pas un fichier Figma que Bezzle peut lire. | Ce n’est pas une copie locale enregistrée par Figma, ou elle est endommagée. |
| Ce n’est pas un fichier Sketch que Bezzle peut lire. | Ce n’est pas un fichier enregistré par Sketch, ou il est endommagé. |
| Ce fichier a été enregistré par une version de Sketch antérieure à la 43, que Bezzle ne peut pas lire. Ouvrez-le dans une version plus récente de Sketch, enregistrez-le à nouveau, puis importez ce fichier. | Avant la version 43, Sketch gardait ses fichiers d’une autre façon. |
| Ce n’est pas un fichier Photoshop que Bezzle peut lire. | Ce n’est pas un document Photoshop. |
| Ce fichier Photoshop est endommagé. | Une partie du fichier n’a pas pu être lue. |
| Bezzle ne peut pas encore lire les fichiers Photoshop dans ce mode colorimétrique. | Le document est en couleurs Lab, ou dans un autre mode qui n’est pas listé plus haut. |
| Ce fichier Photoshop est compressé d’une façon que Bezzle ne sait pas encore lire. | Les pixels de ses calques sont compressés d’une façon que Bezzle ne lit pas. |
| Ce n’est pas une adresse web que Bezzle peut ouvrir. | Il faut un nom de site avec un point, comme `example.com`, et sans espaces. |
| Ce design peut seulement être consulté, rien ne peut donc y être importé. | Le design où la page devait aller a été partagé avec toi en lecture seule. |
| Le design dans lequel importer la page est fermé. | Le design où vont les pages du navigateur a été fermé entre-temps. Rouvre-le, ou repars de la fenêtre d’import. |
| Le navigateur n’a aucune page ouverte. | {Importer} dans le navigateur de Bezzle a besoin d’une page qui a fini de se charger. |
| Choisissez les pages à importer. | Rien n’est coché dans {Pages}. |
| Aucune des pages n’a pu être lue. | Aucune page cochée dans {Pages} n’a pu être chargée ou décomposée. |
| La page n’a pas pu être chargée : elle a mis trop de temps à répondre. | Au bout d’une demi-minute, la page ne s’était pas assez chargée pour être lue. |
| La page n’a pas pu être chargée : … | Le site n’a pas pu être joint, ou n’a pas répondu ; la raison suit. |
| La page n’a pas pu être lue : … | La page s’est chargée, mais n’a pas pu être décomposée ; la raison suit. |
| La page n’affiche rien à importer. | Il n’y avait rien à importer sur la page quand Bezzle l’a lue. |

Un assistant IA connecté à Bezzle peut aussi importer des fichiers et des pages web. Voir [Assistants IA](/docs/ai.html).
