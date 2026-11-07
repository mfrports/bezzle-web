---
title: Notes et versions
nav: Notes et versions
lede: Discute d’un design dans ses marges, avec des notes épinglées aux calques qu’elles concernent, et remonte le fil de chacune de ses versions, pour ramener un calque ou le design entier tel qu’il était.
---

Les notes sont ce que toi et les personnes avec qui tu travailles écrivez à propos d’un design, comme un relecteur écrit dans la marge d’un dessin : chaque fil est épinglé à un point d’un calque, ou à une partie du design entourée au crayon, et y est relié par un fil de crayon jusqu’à une carte posée sur la table à côté du plan de travail, jamais sur le travail. Les versions sont le design tel qu’il était à des moments antérieurs, gardées d’elles-mêmes pendant que tu travailles. La règle du temps les dispose au pied du canevas, pour les parcourir, les nommer et y revenir.

Les unes et les autres sont gardées dans le fichier du design et, dans un design partagé, elles sont partagées : les notes de chacun, et chaque version que quelqu’un nomme.

::: figure together
Des notes dans la marge, chacune reliée par un fil de crayon au point ou à la boucle qu’elle concerne, dans la couleur de son auteur.
:::

## Écrire une note {#writing}

::: steps
1. **Prends l’outil Note.** Appuie sur {{N}}, ou clique sur {Note} dans la barre d’outils.
2. **Clique sur ce que la note concerne.** Un clic sur un calque épingle la note à ce point du calque ; un clic sur le nom d’un plan de travail, au plan de travail ; un clic sur un endroit vide du canevas, à cet endroit du canevas. Ou dessine une boucle autour d’une partie du design (voir plus bas).
3. **Écris-la.** Une carte s’ouvre à côté du point avec un champ qui indique « Écrire une note ». Tape, et appuie sur {{Return}} pour la publier.
:::

Une fois que tu as cliqué, tu as de nouveau l’outil {Sélection} en main. La note est signée de ton nom, tel que les autres te connaissent dans un design partagé, et dessinée avec ton crayon : bleu sur ton propre Mac.

Pendant que tu écris :

- **{{Return}}** publie la note. La flèche d’envoi à côté du champ fait de même ; elle apparaît dès qu’il y a quelque chose à envoyer.
- **{{Esc}}** abandonne la note sans l’écrire.
- **Cliquer ailleurs** publie ce que tu as écrit. Une note sans mots est simplement abandonnée.
- Le champ s’agrandit à mesure que tu tapes, jusqu’à huit lignes.

### Entourer une partie du design {#circling}

Avec l’outil Note, appuie et fais glisser autour de ce que tu veux désigner, comme tu entourerais quelque chose sur une épreuve imprimée. La boucle s’affiche dès que le pointeur a bougé de quelques points. Relâche, et la note concerne ce que tu as entouré. Une boucle de moins de 10 points de large à l’écran compte comme un clic, et crée une note à l’endroit où tu as appuyé. {{Esc}} pendant le dessin fait disparaître la boucle.

Ce que concerne une boucle est déduit de ce qu’elle entoure :

- le plus grand calque qui se trouve à au moins 60 % à l’intérieur de la boucle, sauf si la boucle fait plus de quatre fois sa taille ;
- sinon, le plus petit calque qui contient toute la boucle ;
- sinon, le plan de travail qui se trouve sous le milieu de la boucle ;
- et, dessinée sur le canevas loin de tout plan de travail, le canevas lui-même.

Une note entourée garde sa boucle autour de ce calque, au même endroit, quand le calque bouge et change de taille. Chaque boucle est dessinée à la main, un peu différemment à chaque fois, jamais tout à fait ronde, son extrémité dépassant son début.

On ne peut pas écrire de note dans un design en lecture seule (voir [Arrêter le partage, et lecture seule](/docs/sharing.html#stop-sharing)).

## Où s’affichent les notes {#placement}

Les notes restent hors du travail. Chaque fil est une carte dans la marge à côté du plan de travail qu’il concerne (la feuille, vue depuis la marge), du côté le plus proche de son point, à sa hauteur là où il y a de la place, et les cartes se font de la place les unes aux autres le long de la marge dans l’ordre de leurs points. Un fil de crayon va de la carte à son épingle.

- **Les cartes** font 236 points de large et se tiennent à 26 points du bord du plan de travail, quel que soit le zoom.
- **Les fanions** : là où la marge n’a pas de place pour une carte, le fil devient à la place un fanion planté sur le bord du plan de travail, à la hauteur de son point, avec l’initiale de son auteur. Un plan de travail de moins de 120 points de haut à l’écran ne reçoit que des fanions. Beaucoup de fanions sur un même bord deviennent plus petits et plus serrés. Zoome, et les fanions s’ouvrent en cartes à mesure que la place apparaît ; Bezzle attend un peu plus de place qu’il n’en faut pour une carte avant de transformer un fanion, pour qu’un fil qui a tout juste la place ne clignote pas entre les deux.
- **Le fil ouvert** a toujours une carte. S’il n’y a pas de place à côté de son plan de travail, elle se soulève au-dessus de la table.
- **Sur le canevas lui-même** : une note qui concerne un endroit loin de tout plan de travail a sa carte à côté de l’épingle ou, faute de place, seulement le jeton de son auteur sur l’épingle.
- **Les épingles** : le point de chaque fil est une petite épingle de la couleur du crayon de son auteur ; une note entourée a sa boucle à la place, le fil quittant la boucle du côté de la carte. Aucune carte ni aucun fanion ne couvre jamais une épingle, pour que chaque épingle puisse toujours être déplacée.

Une note épinglée à un calque reste au même endroit sur lui quand le calque bouge et est redimensionné. Les notes s’affichent en mode {Design} ; en {Prototype} et en {Inspecter}, et pendant que tu parcours les versions, elles s’effacent.

## Lire et répondre {#threads}

Clique sur une carte, un fanion ou une épingle pour ouvrir son fil. Clique de nouveau sur l’épingle, appuie sur {{Esc}} ou sélectionne quelque chose sur le canevas, et il se ferme. Pointer une épingle ou un fanion montre sa première note dans une étiquette et éclaire le calque qu’elle concerne.

Une carte fermée montre les trois premières lignes de la première note du fil et, s’il a des réponses, les jetons de quatre personnes au plus qui ont répondu et le nombre de réponses. Une carte ouverte montre tout, de la plus ancienne à la plus récente, chaque réponse sous un filet, et en bas un champ qui indique « Répondre ». Tape, et appuie sur {{Return}} ou clique sur la flèche pour l’envoyer ; le champ reste prêt pour une autre. {{Esc}} dans le champ ferme le fil.

L’en-tête de chaque note montre le jeton et le nom de son auteur, et il y a combien de temps elle a été écrite. L’en-tête d’un fil ouvert a aussi :

::: fields
- **‹** et **›** ({Note précédente}, {Note suivante}) : vont au fil précédent ou suivant, dans l’ordre d’une relecture : plan de travail par plan de travail, de la rangée du haut vers le bas et de gauche à droite dans chaque rangée, de haut en bas sur chaque plan de travail, et les notes sur le canevas lui-même en dernier. Ils reviennent du dernier au premier, et s’affichent tant que la marge contient plus d’un fil. La vue s’envole vers chacun, en se rapprochant si le plan de travail est trop petit à l’écran pour être lu, sans jamais dépasser la taille réelle.
- **La marque ronde** ({Marquer comme terminé}) : marque le fil comme terminé. Voir plus bas.
- **Un point** après le nom : le fil contient des mots écrits sur un autre Mac depuis ta dernière lecture ici. Les fanions des fils que tu as lus sont plus pâles. Ce que tu as lu est mémorisé sur chaque Mac, pour chaque lecteur.
:::

Les mots d’une note peuvent être sélectionnés et copiés comme n’importe quel texte.

## Déplacer, modifier et terminer {#managing}

### Déplacer une note {#moving}

Fais glisser l’épingle d’un fil pour la mettre ailleurs. Son fil la suit en ployant un peu, et la carte suit. Sur un autre calque, l’épingle s’accroche, avec un petit choc que tu sens sur le trackpad, et si tu la relâches là, la note concerne désormais ce calque. Relâche-la sur un endroit vide du canevas, et elle concerne cet endroit. Une note entourée déplace sa boucle avec elle, et concerne ce que la boucle entoure là où elle se pose.

### Modifier et supprimer {#editing}

Tu peux modifier ou supprimer les notes écrites sur ton propre Mac :

- **Changer les mots** : double-clique dessus dans une carte ouverte, ou clique sur le fil avec le bouton droit et choisis {Modifier}. {{Return}} garde la modification, {{Esc}} laisse les mots tels qu’ils étaient.
- **Supprimer une réponse** : pointe-la dans la carte ouverte et clique sur l’icône de corbeille qui apparaît dans son en-tête.
- **Supprimer un fil** : clique dessus avec le bouton droit et choisis {Supprimer}. Ses réponses disparaissent avec lui.

### Marquer un fil comme terminé {#done}

Une fois qu’un fil a fait le tour de la question, clique sur la marque ronde de son en-tête. La coche est dessinée au crayon, la carte se range et son fil s’enroule, et le fil quitte la marge. Tout le monde peut marquer un fil comme terminé, pas seulement son auteur.

Les fils terminés ne disparaissent pas. Prends l’outil Note ({{N}}) et ils réapparaissent, sous forme de fanions marqués d’une coche. Ouvre-en un, et clique de nouveau sur sa marque, ou choisis {Rouvrir}, pour le ramener dans la marge.

### Le menu des notes {#note-menu}

Clique avec le bouton droit sur une carte, un fanion ou une épingle pour :

| Commande | Ce qu’elle fait |
| --- | --- |
| {Répondre} | Ouvre le fil avec la saisie dans son champ de réponse. Pas sur un fil terminé. |
| {Marquer comme terminé}, {Rouvrir} | Marque le fil comme terminé, ou le ramène. |
| {Modifier} | Ouvre le fil pour changer les mots de sa première note. Seulement pour les notes écrites sur ce Mac. |
| {Copier} | Copie tout le fil en texte, chaque note sous la forme du nom de son auteur et de ses mots, séparées par une ligne vide. |
| {Supprimer} | Supprime le fil avec ses réponses. Seulement pour les notes écrites sur ce Mac. |

Dans un design en lecture seule, le menu ne propose que {Copier}.

### Les notes et Annuler {#notes-undo}

Chaque modification des notes est une étape de l’historique d’annulation du design, nommée dans le menu {Édition} : {Écrire une note}, {Répondre à la note}, {Modifier la note}, {Déplacer la note}, {Clore la note}, {Rouvrir la note} et {Supprimer la note}.

Quand un calque qui porte des notes est supprimé, les notes restent là où il était, sur le canevas, pour que rien de ce qui a été écrit ne disparaisse avec lui. Annule la suppression et elles reviennent sur le calque.

## Les notes dans un design partagé {#shared-notes}

Un design partagé emporte les notes de chacun. Chaque note est dessinée avec le crayon de son auteur, de la même couleur que sur le canevas, et les fils non lus montrent leur point à mesure que les réponses des autres arrivent.

Les notes se fusionnent comme le reste d’un design partagé, chaque note et chacune de ses propriétés séparément : deux personnes qui répondent en même temps gardent chacune leur réponse, et une réponse, une modification des mots et le fil marqué comme terminé, faits au même moment par des personnes différentes, restent tous. Un fil que quelqu’un a supprimé pendant qu’une autre personne y répondait, sans l’avoir vu disparaître, revient avec ses réponses, pour que la réponse ne soit pas perdue.

Un assistant IA peut lui aussi lire, écrire et répondre à des notes. Ses notes sont signées « Claude » (voir [Assistants IA](/docs/ai.html#notes-versions)).

## Versions {#versions}

Pendant que tu travailles, Bezzle garde de lui-même des versions du design : le design entier tel qu’il était à ce moment-là, sans l’endroit où on le regardait. Tu peux aussi nommer une version, et une version nommée est gardée pour de bon.

Une version est prise quand le design est enregistré et :

- qu’il n’a encore aucune version ;
- ou que la plus récente date d’au moins 10 minutes et que le design a changé depuis ;
- ou que tu fermes son onglet et qu’il a changé depuis la plus récente.

Les versions prises d’elles-mêmes sont éclaircies avec le temps, comme Time Machine éclaircit les sauvegardes :

| Âge | Ce qui est gardé |
| --- | --- |
| La dernière heure | chaque version |
| Le dernier jour | une par demi-heure |
| Le dernier mois | une par jour |
| Plus ancien | une par semaine |

Les versions nommées sont toujours gardées, ainsi que la plus récente. Les versions vivent dans le fichier du design, elles vont donc partout où il va. {Dupliquer} sur l’écran d’accueil les garde dans la copie ; {Fichier › Enregistrer une copie} fait partir la copie sans aucune. Un design gardé en un seul fichier, comme aux débuts de Bezzle, devient un paquet la première fois qu’il a besoin de place pour une version (voir [Ce qu’est un fichier de design](/docs/files.html#design-file)).

> [!tip] Annuler et les versions
> Annuler sert pour les étapes que tu viens de faire, et dure tant que le design est ouvert : fermer son onglet efface son historique. Les versions remontent sur des jours et des semaines, et restent avec le design.

## La règle du temps {#ruler}

Ouvre-la avec {Fichier › Versions} ({{⌥⌘T}}), ou avec le bouton horloge de la barre du haut. C’est une carte au pied du canevas, de 600 points de large au plus.

Elle est parcourue par un peigne de traits fins, un pour chaque version, la plus ancienne à gauche, et un cercle à l’extrémité droite pour maintenant. Chaque trait a la couleur du ciel au moment où cette version a été faite : bleu le jour, or et rose vers le soir, indigo la nuit. Les versions nommées sont plus hautes, avec un point au sommet de la couleur du crayon de la personne qui les a nommées. Sous le premier trait de chaque jour figure son nom : {Aujourd’hui}, {Hier}, le jour de la semaine pour la dernière semaine, et la date avant cela ; l’écart d’un jour au suivant est un peu plus large qu’entre les versions d’un même jour.

Pointe le peigne et les traits gonflent sous le pointeur, comme le fait le Dock, avec une étiquette qui glisse le long et nomme la version la plus proche : son jour, son heure et son nom.

::: fields
- **Clique sur un trait** : le canevas montre le design tel qu’il était alors. La ligne de crayon s’envole jusque-là, en pinçant chaque trait qu’elle croise.
- **Fais glisser le long du peigne** : la ligne se soulève et suit le pointeur, en montrant chaque version qu’elle croise, et se pose sur celle qui est dessous quand tu relâches.
- **Deux doigts sur la carte**, ou la molette : une version par cran, en arrière ou en avant.
- **{{←}}** et **{{→}}** : la version précédente ou suivante ; au-delà de la plus récente, maintenant. Sur maintenant, les flèches ne passent d’une version à l’autre que si rien n’est sélectionné, pour qu’elles déplacent toujours une sélection.
- **{{Esc}}**, ou le ✕ à droite de la carte : range la règle et te ramène à maintenant.
- **Le bouton de lecture** ({Rejouer son histoire}) : rejoue la création du design, de sa première version à maintenant, tandis que la lumière des heures où il a été fait passe sur lui. Un long historique est rejoué en une trentaine d’étapes, dont chaque version nommée, en une dizaine de secondes. Clique de nouveau pour {Arrêter}.
:::

L’en-tête de la carte nomme ce que montre le canevas : {Maintenant}, ou le jour et l’heure de la version, par exemple « Aujourd’hui, 14:32 », avec son nom à côté si elle en a un.

## Remonter le temps {#looking-back}

En passant d’une version à une autre, les calques glissent vers ce qu’ils étaient : ceux qui n’étaient pas encore faits s’estompent, et ceux qui ont été supprimés depuis reviennent. Puis ce qui diffère du design tel qu’il est maintenant est marqué :

- **Modifié depuis** : des traits de coupe au crayon à ses coins.
- **Disparu depuis** : les mêmes traits en sépia.
- **Créé depuis** : un léger contour en pointillés là où il se trouvera.
- **En pointant un calque modifié** : il se montre, légèrement, là où il est maintenant, avec un fil de crayon allant de là où il était jusque-là.

Remonter le temps ne change rien. L’inspecteur est estompé, et toute modification faite entre-temps, depuis un menu, par Annuler ou par un assistant, ramène à l’écran le design tel qu’il est maintenant, pour que tu voies la modification au moment où elle se fait. Dans un design partagé, les modifications que font les autres pendant que tu remontes le temps arrivent normalement, et les marques sont recalculées en fonction d’elles.

## Revenir en arrière {#going-back}

### Le design entier {#whole}

Avec une version sur le canevas, clique sur {Revenir à cette version}. Le design redevient ce qu’il était alors. Avant cela, le design tel qu’il est maintenant est gardé comme version nommée, appelée « Avant de revenir à » suivi du nom ou de l’heure de la version, si bien que rien n’est perdu. Ses notes restent telles qu’elles sont maintenant, de même que l’endroit que tu regardes. Revenir en arrière est une étape de l’historique d’annulation, {Revenir à une version}, que {{⌘Z}} annule. Si le design est déjà tel qu’il était alors, rien ne se passe.

### Un calque, ou quelques-uns {#bring-back}

Clique sur un calque marqué comme différent pour le choisir ; une petite coche ronde à son coin montre qu’il est choisi, et un second clic le libère. {Ramener} apparaît dans l’en-tête de la carte. Clique dessus, et les calques choisis reviennent tels qu’ils étaient dans le design tel qu’il est maintenant : chacun là où il est maintenant ou, s’il a disparu depuis, là où il était, avec tout ce qu’il contient. Les calques ramenés sont sélectionnés, et leurs coins marquent leur arrivée. L’étape est {Ramener le calque}, ou {Ramener les calques}, dans l’historique d’annulation.

Dans un design en lecture seule, tu peux remonter le temps, mais pas revenir en arrière ni rien ramener.

## Nommer des versions {#naming}

Clique sur le fanion de l’en-tête de la carte : sur maintenant, il propose de {Nommer cet instant}, sur une version, {Donnez-lui un nom}. Tape un nom et appuie sur {{Return}} ; {{Esc}} la laisse sans nom. Sans mots, la version s’appelle « Version nommée ».

Pour renommer une version nommée, clique sur son nom. Efface le nom pour en refaire une version ordinaire, éclaircie avec le temps comme les autres. Nommer l’instant présent, ou une version prise d’elle-même, la garde pour de bon.

## Les versions dans un design partagé {#shared-versions}

Les versions que Bezzle prend de lui-même restent sur chaque Mac : chacun a les siennes. Une version que quelqu’un nomme pendant que le design est partagé part vers tout le monde, avec le design tel qu’il était alors, et apparaît sur la règle de chacun, son point de la couleur du crayon de la personne qui l’a nommée. Vers les autres qui sont dans le design à ce moment-là, elle part aussitôt, quand elle est assez petite ; sinon, et vers tous les autres, par le serveur de Bezzle ou par le dossier partagé. Les versions nommées avant que le design soit partagé restent sur ton Mac.

Dans un design gardé dans un dossier partagé, chaque Mac garde sa propre liste de versions dans le design, si bien que deux Mac n’écrivent jamais par-dessus la liste l’un de l’autre, et chacun voit ses propres versions et celles que tout le monde a nommées.

Un assistant peut lister les versions, les nommer et y revenir, et en montrer une sur ton canevas avec la règle sortie (voir [Assistants IA](/docs/ai.html#notes-versions)).
