---
title: Assistants IA
nav: Assistants IA
lede: Connecte Claude ou tout autre assistant qui parle MCP, et il crée avec toi dans Bezzle. Il construit des écrans, des piles et des prototypes, modifie ce qui est là et l’exporte, directement dans tes designs ouverts, et chaque modification qu’il fait est une étape que tu peux annuler.
---

Bezzle intègre un petit serveur pour les assistants IA, qui utilise le Model Context Protocol (MCP), le moyen par lequel des assistants comme Claude Desktop, Claude Code et Codex atteignent les apps dans lesquelles ils travaillent. Il fonctionne uniquement sur ton Mac, à l’adresse `http://127.0.0.1:7412/mcp`, et rien au-delà de ce Mac ne peut l’atteindre.

Un assistant travaille sur les designs ouverts dans la fenêtre de Bezzle, comme tu le ferais à la main. Ce qu’il fait apparaît sur le canevas au moment même où il le fait, chaque modification est une étape de l’historique d’annulation du design, et le design s’enregistre de lui-même un instant plus tard, comme pour toi. Il peut regarder ce qu’il a créé sous forme d’image, et corriger ce qui ne va pas.

::: figure ai
Demande cinq posts, et l’assistant crée la pile, place les photos, écrit les textes et les exporte, chaque étape pouvant être annulée.
:::

## Connecter Claude Desktop {#claude-desktop}

> [!windows]
> Bezzle pour Windows ne fait pas encore d’extension pour Claude Desktop. Son menu Bezzle a directement {Copier la commande Claude Code}, {Copier la commande Codex} et {Copier l’adresse du serveur}, décrits plus bas.

::: steps
1. **Choisis {Bezzle › Connecter un assistant IA › Ajouter à Claude Desktop…}.** La commande est là quand Claude Desktop est installé sur ce Mac. Bezzle crée une extension pour lui et l’ouvre dans Claude Desktop.
2. **Installe-la dans Claude Desktop.** Claude Desktop demande s’il doit installer l’extension Bezzle. Confirme.
3. **Demande quelque chose à Claude.** Claude dispose maintenant des outils de Bezzle. Bezzle n’a pas besoin d’être ouvert : quand Claude utilise l’un d’eux, Bezzle s’ouvre tout seul.
:::

Pour l’installer à la main, ou sur un autre Mac, choisis {Enregistrer l’extension Claude Desktop…} dans le même menu. Bezzle enregistre un fichier nommé `Bezzle.mcpb`, dans Téléchargements sauf si tu choisis un autre endroit, et le montre dans le Finder. Ouvre le fichier, ou fais-le glisser dans Paramètres › Extensions de Claude Desktop.

Tant que Bezzle est fermé, l’extension indique à Claude quels outils existent à partir d’une liste qu’elle emporte, établie par la copie de Bezzle qui a créé l’extension. Quand Claude utilise un outil, l’extension ouvre Bezzle et l’attend jusqu’à 20 secondes. Si Bezzle ne répond pas, Claude reçoit ce message, en anglais : « Bezzle didn't answer. Open Bezzle and check that Bezzle ▸ Allow AI Control is on, then try again. » (Bezzle n’a pas répondu : ouvre Bezzle, vérifie que Bezzle › Autoriser le contrôle par IA est activé, puis réessaie.) Une fois Bezzle ouvert, Claude reçoit les outils de Bezzle lui-même.

> [!tip] Après une mise à jour
> La liste d’outils propre à l’extension est celle du Bezzle qui l’a créée. Après une mise à jour de Bezzle, choisis de nouveau {Ajouter à Claude Desktop…}, pour que Claude connaisse chaque nouvel outil même quand Bezzle est fermé.

## Claude Code, Codex et autres assistants {#other-clients}

Le reste de {Bezzle › Connecter un assistant IA} copie ce dont les autres assistants ont besoin, prêt à coller :

| Commande du menu | Ce qu’elle copie |
| --- | --- |
| {Copier la commande Claude Code} | Une commande pour le Terminal qui ajoute Bezzle à Claude Code pour tous les projets. |
| {Copier la commande Codex} | Une commande pour le Terminal qui ajoute Bezzle à Codex, dans le terminal et dans l’app ChatGPT, qui partagent leurs serveurs. |
| {Copier l’adresse du serveur} | L’adresse du serveur, pour tout autre assistant qui se connecte à un serveur MCP en HTTP. |

La commande Claude Code :

```
claude mcp add --transport http --scope user bezzle http://127.0.0.1:7412/mcp
```

La commande Codex :

```
codex mcp add bezzle --url http://127.0.0.1:7412/mcp
```

L’adresse, pour tout le reste :

```
http://127.0.0.1:7412/mcp
```

Ces assistants se connectent à Bezzle pendant qu’il tourne : ouvre donc d’abord Bezzle. Le serveur parle le transport Streamable HTTP de MCP et répond en JSON simple.

## Autoriser le contrôle par IA {#allow}

{Bezzle › Autoriser le contrôle par IA} active et désactive le serveur. Il est activé tant que tu ne le désactives pas, et Bezzle se souvient de ton choix. Désactivé, le serveur s’arrête aussitôt, tout assistant connecté est coupé, et {Connecter un assistant IA} est grisé.

Si une autre app de ton Mac utilise déjà le port du serveur, le menu le signale sous la commande : « Le contrôle par IA est désactivé : Le port 7412 est déjà utilisé ». Quitte l’autre app, puis désactive et réactive {Autoriser le contrôle par IA}, ou rouvre Bezzle.

## Ce qu’un assistant peut faire {#tools}

Bezzle propose à un assistant 65 outils, chacun faisant une seule chose dans le design, comme le ferait un menu, une carte ou un geste. L’assistant lit leurs descriptions et les choisit lui-même ; tu demandes avec tes propres mots. Quand il se connecte, il apprend ce qu’est Bezzle : un canevas infini de plans de travail portant des calques, mesuré en points, des designs désignés par leur nom et des calques par leur identifiant ou leur nom, chaque modification étant une étape que tu peux annuler, et pas de commande Enregistrer, car les designs s’enregistrent tout seuls.

Les outils, par groupe, avec leur nom tel que l’assistant le voit :

### Designs {#tools-designs}

| Outil | Ce qu’il fait |
| --- | --- |
| `list_designs` | Liste les designs de l’écran d’accueil, du plus récent au plus ancien, et lesquels sont ouverts. |
| `create_design` | Crée un nouveau design dans ton dossier de designs et l’ouvre, avec un premier plan de travail selon un préréglage (comme un iPhone ou un post Instagram), un format de carrousel, ou une largeur et une hauteur, ou un canevas vide. |
| `open_design` | Ouvre un design dans un onglet, ou fait passer son onglet au premier plan. Un fichier Adobe XD, Figma (`.fig`), Sketch ou Photoshop arrive comme un nouveau design. |
| `import_website` | Fait entrer une page web comme nouveau design, comme le fait {Fichier › Importer depuis un site web…}, aux largeurs demandées, côte à côte, sans les bandeaux de cookies. |
| `close_design` | Ferme l’onglet d’un design. Il est enregistré, comme les designs le sont toujours. |
| `rename_design` | Donne un nouveau nom à un design. Pas à un design que quelqu’un a partagé avec toi, qui garde son nom. |
| `duplicate_design` | Crée une copie à côté, nommée d’après lui avec « copie », sans l’ouvrir. |
| `delete_design` | Place un design dans la Corbeille, ou le retire seulement de l’écran d’accueil s’il est gardé hors de ton dossier de designs. |

### Lire et regarder {#tools-reading}

| Outil | Ce qu’il fait |
| --- | --- |
| `get_design` | Ce que contient un design : ses plans de travail et ses calques sous forme d’arborescence, ce qui est sélectionné, le zoom, et ce qu’Annuler annulerait. |
| `find_layers` | Trouve des calques d’après une partie de leur nom, leur genre ou leurs mots. |
| `get_layers` | Tout sur certains calques : position, remplissage, bordure, ombre, angles, police, flou et le reste. |
| `render` | Dessine un plan de travail, un calque ou le design entier sous forme d’image, tel qu’il sera exporté, pour que l’assistant le regarde. Deux pixels par point, jusqu’à 1 568 pixels sur le plus long côté. |
| `list_fonts` | Liste les familles de polices de ton Mac, ou les variantes de l’une d’elles. |
| `select_layers` | Sélectionne des calques sur ton canevas, pour te montrer quelque chose ou pour agir dessus. |
| `view` | Zoome, ou amène un calque dans la vue. Ne change rien dans le design. |

### Créer et modifier des calques {#tools-layers}

| Outil | Ce qu’il fait |
| --- | --- |
| `add_layers` | Ajoute des plans de travail, des carrousels, des rectangles, des ellipses, des lignes, des textes, des tracés et des groupes, imbriqués, pour qu’un écran entier tienne en un seul appel et une seule étape d’annulation. Les nouveaux calques sont sélectionnés. |
| `update_layers` | Change n’importe quelles propriétés d’un calque ou de plusieurs, en une seule étape. |
| `delete_layers` | Supprime des calques, avec tout ce qu’ils contiennent. |
| `duplicate_layers` | Place une copie juste au-dessus de chaque calque, un peu décalée ; la copie d’un plan de travail va à côté de lui. |
| `move_layers` | Déplace des calques dans un autre plan de travail ou groupe, ou sur le canevas, et à une place parmi ses calques. |
| `group_layers`, `ungroup_layers` | Groupe des calques, ou les sort de leurs groupes. |
| `arrange_layers` | Met des calques au premier plan ou les avance, ou les recule ou les met à l’arrière-plan. |
| `align_layers`, `distribute_layers` | Aligne des calques sur un bord ou sur leur milieu, ou en espace régulièrement trois ou plus. |
| `flip_layers` | Met des calques en miroir là où ils sont. Les mots se lisent toujours à l’endroit. |

### Formes et masques {#tools-shapes}

| Outil | Ce qu’il fait |
| --- | --- |
| `combine_shapes` | Réunir, soustraire, faire l’intersection ou exclure : deux formes ou plus deviennent un seul tracé. |
| `convert_to_path` | Fait des formes et des lignes des tracés, et des textes les contours de leurs lettres. |
| `mask_layers`, `release_mask` | Place des calques à l’intérieur d’une forme, comme une forme contient une image, ou défait de nouveau un masque. |

### Texte {#tools-text}

| Outil | Ce qu’il fait |
| --- | --- |
| `style_text` | Met en forme certaines lettres d’un texte : un mot en gras ou d’une autre couleur, un prix barré, un paragraphe transformé en élément de liste. |
| `replace_text` | Trouve des mots dans les textes du design, dont chaque publication d’une pile et chaque cellule d’une grille, et les remplace par d’autres, en gardant l’apparence des lettres. |
| `check_spelling` | Liste les mots mal orthographiés, chacun dans la langue de son texte, avec des suggestions. |
| `curve_text`, `straighten_text` | Courbe des textes en arc, ou les pose le long du contour d’une forme, et les redresse. |

### Images {#tools-pictures}

| Outil | Ce qu’il fait |
| --- | --- |
| `place_image` | Place un fichier image dans le design : comme nouveau rectangle, ou dans le remplissage d’une forme, les lettres d’un texte ou une bordure. Le fichier est copié dans le design. |
| `develop_photo` | Développe des photos comme le fait un logiciel photo : lumière, couleur, chaque couleur séparément, et détail. La photo elle-même est conservée. |
| `remove_background` | Supprime l’arrière-plan d’images, sur ton Mac, en gardant l’image pour pouvoir la restaurer. |

### Mise en page {#tools-layout}

| Outil | Ce qu’il fait |
| --- | --- |
| `layout_grid` | Donne à un plan de travail une grille de mise en page de colonnes, de rangées et de lignes de base, ou celle qui convient à sa taille. |
| `guides` | Place des repères sur un plan de travail, ou les retire. |
| `repeat_grid`, `fill_repeat_grid` | Crée une grille de répétition ou en modifie une, et remplit ses cellules de mots, de contenu d’exemple, d’images ou des lignes d’un fichier CSV. |

### Composants, styles et ressources {#tools-components}

| Outil | Ce qu’il fait |
| --- | --- |
| `list_components` | Liste les composants du design, leurs variantes et leurs copies. |
| `make_component` | Fait de calques un composant, en liant éventuellement comme copies les groupes qui lui ressemblent. |
| `add_copy` | Place une nouvelle copie d’un composant sur un plan de travail. |
| `set_variant`, `add_variant` | Montre des copies sous une autre variante, ou ajoute une variante telle qu’une copie est maintenant. |
| `update_component` | Renomme un composant ou une variante, ou retire une variante. |
| `keep_in_copy` | Rend des propriétés d’une copie propres à elle, ou les laisse de nouveau suivre le composant. |
| `unlink_copies`, `delete_component` | Fait des copies des groupes ordinaires, ou retire un composant du design, ses copies restant des groupes. |
| `styles` | Liste, nomme, attribue, modifie et supprime des styles (couleurs, typographies, ombres et angles), règle leurs apparences sombres, et montre un plan de travail en sombre ou en clair. |
| `libraries` | Prend des composants et des styles dans tes autres designs, et met à jour ce qui a été pris. Rien ne modifie jamais l’autre design. |
| `list_resources`, `add_resource` | Liste et place ce que contient le panneau Ressources : des éléments des kits d’interface Bezzle, iOS, macOS et Android, et des icônes Lucide, Phosphor et Material Symbols. |

### Piles {#tools-decks}

| Outil | Ce qu’il fait |
| --- | --- |
| `deck` | Fait d’un plan de travail une pile de publications, ajoute, retire et déplace des publications, donne à chaque publication ses mots ou ses images, en amène une devant, ou désempile la pile. |

### Prototype et transmission {#tools-prototype}

| Outil | Ce qu’il fait |
| --- | --- |
| `prototype` | Lit ou modifie le prototype : où mène un toucher sur un calque, une note expliquant pourquoi, comment l’écran suivant arrive, où il commence, et les écrans qui passent d’eux-mêmes au suivant. |
| `get_prototype` | Tout ce qu’il faut pour construire le design en code d’un seul coup : chaque écran sous forme d’arborescence, les flux, les composants et leurs états, les tokens de design, la façon dont chaque écran s’adapte, les fichiers image et une image de chaque écran. |
| `design_tokens` | Les styles nommés du design sous forme de propriétés personnalisées CSS, de constantes SwiftUI ou au format de tokens de design du W3C. |
| `inspect` | Un calque tel qu’un développeur le lit dans {Inspecter} : son cadre et ses distances, son apparence par valeur et par style, sa typographie, et le calque en CSS et en SwiftUI. |

### Notes et versions {#notes-versions}

| Outil | Ce qu’il fait |
| --- | --- |
| `notes` | Liste les fils dans les marges, écrit une note sur un calque, un endroit ou une partie entourée, répond, déplace, marque comme terminés, rouvre et supprime des fils, et en ouvre un sur ton écran, la vue s’envolant vers lui. |
| `versions` | Liste les versions du design, nomme le design tel qu’il est maintenant, revient à une version, ou en montre une sur ton canevas avec la règle du temps sortie. |

Les notes de l’assistant sont signées « Claude », avec un crayon à lui. Tu peux y répondre et les marquer comme terminées comme n’importe quelles autres ; les modifier ou les supprimer revient à l’assistant, ou à Annuler. Revenir à une version fonctionne comme à la main : le design tel qu’il est juste avant est d’abord gardé comme version nommée, et ses notes restent telles qu’elles sont (voir [Notes et versions](/docs/notes.html#going-back)).

### Annuler et exporter {#tools-undo}

| Outil | Ce qu’il fait |
| --- | --- |
| `undo`, `redo` | Annule les dernières modifications d’un design, faites à la main ou par l’assistant, comme le fait {{⌘Z}}, ou les rétablit. |
| `export` | Exporte des plans de travail ou des calques comme le fait le panneau d’export : PNG, JPEG, WebP, AVIF, SVG, ou un seul PDF avec une page par élément, de 1× à 4×. |

## Des demandes toutes prêtes {#prompts}

Bezzle propose aussi à un assistant deux demandes toutes prêtes, que certains assistants listent comme prompts ou commandes slash :

- **Build a prototype** (`build_prototype`) : construit le design sous forme de prototype fonctionnel en code, avec chaque écran, flux, état de composant, token de design et image d’un seul coup, chaque élément étant marqué de son calque, pour que les modifications du code puissent être réécrites dans le design. Tu peux dire dans quoi le construire : SwiftUI, React, HTML et CSS, Flutter ou autre chose.
- **Write the code back into the design** (`write_back`) : compare un prototype construit à partir du design avec le design, et réécrit dans celui-ci ce qui a changé dans le code (mots, couleurs, mise en page, flux), pour que le design reste la source.

En {Prototype} et en {Inspecter}, la carte {Code} de l’inspecteur a un bouton, {Le construire avec Claude}. Il copie une demande à coller dans Claude : construire un prototype fonctionnel de ce design par le serveur de Bezzle, sous forme d’un seul fichier HTML accompagné de ses images, qui s’ouvre directement depuis le Finder, chaque élément étant marqué de son calque, et réécrire les modifications dans le design. Voir [Inspection et transmission](/docs/inspect.html).

## Annuler {#undo}

Chaque modification que fait un assistant est une étape de l’historique d’annulation du design, le même historique que le tien : {{⌘Z}} annule sa dernière étape, ou la tienne, selon celle qui est venue en dernier, et le menu {Édition} la nomme. Un écran entier construit en un seul appel s’annule en une seule étape. L’assistant peut annuler lui aussi, comme le fait {{⌘Z}}.

Chaque design garde son propre historique tant que son onglet est ouvert, de sorte qu’une étape dans un design n’annule jamais quelque chose dans un autre. Fermer l’onglet l’efface.

Certaines choses que fait un assistant te sont laissées :

- **Remplacer des fichiers** : quand il exporte, les fichiers du même nom déjà présents dans le dossier sont gardés et les nouveaux numérotés, sauf s’il demande à les remplacer, ce qu’il a pour consigne de te demander d’abord. Les fichiers vont dans le dossier où tu as exporté en dernier, ou dans Téléchargements.
- **Un design partagé depuis ton Mac** : le placer dans la Corbeille en arrêterait le partage, Bezzle te demande donc, sur le Mac, s’il le peut.
- **Un design en lecture seule** ne peut qu’être regardé, par un assistant comme par toi.

Dans un design partagé, ce que l’assistant modifie part vers tout le monde, comme tes propres modifications (voir [Partager et travailler ensemble](/docs/sharing.html#merging)).

## Obtenir de bons résultats {#tips}

- **Dis de quel design il s’agit.** Un assistant travaille sur le design au premier plan, sauf si tu en nommes un autre ; un design qui n’est pas ouvert est ouvert. Les noms sont ceux de l’écran d’accueil.
- **Les fichiers qu’il peut atteindre** : Bezzle peut ouvrir et placer des fichiers de ton dossier de designs, de Téléchargements et d’Images, ainsi que ceux que tu as ouverts dans Bezzle depuis le Finder ou sa fenêtre d’ouverture. Pour une image gardée ailleurs, mets-la d’abord dans Téléchargements ou dans Images.
- **Laisse-le regarder.** Demande-lui de faire un rendu de ce qu’il a créé et de le vérifier ; il a pour consigne de regarder après avoir fait des modifications et de corriger ce qui ne va pas.
- **Nomme tes styles.** Les couleurs, typographies, ombres et angles nommés deviennent les tokens de design qu’il utilise dans le code, et en changer un change chaque calque qui l’utilise.

## Confidentialité {#privacy}

Le serveur n’écoute que sur ton Mac (`127.0.0.1`) et n’est pas joignable depuis le réseau. Il refuse aussi les requêtes venant de pages web ouvertes dans ton navigateur, qui pourraient sinon atteindre un serveur sur le même Mac ; il leur répond, en anglais : « Only apps on this Mac may use Bezzle's AI server. » (seules les apps de ce Mac peuvent utiliser le serveur IA de Bezzle). Rien de tes designs ne parvient à un assistant tant que tu n’en connectes pas.

Une fois que tu l’as fait, ce que l’assistant lit de tes designs, leurs calques, leurs mots et les images dont il fait le rendu, va à cet assistant et à son fournisseur, et est traité selon leur propre politique de confidentialité. Pour y mettre fin, désactive {Bezzle › Autoriser le contrôle par IA}, ou retire Bezzle des réglages de l’assistant. Voir aussi la [politique de confidentialité](/privacy.html) de Bezzle.
