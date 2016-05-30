---
layout: page
title: Texte et formatage
permalink: /wp/texte-formatage
---

Texte et formatage
---

Texte brut et wysiwyg

Texte et formatage

Pour éditer les contenus, WordPress offre deux modes d’édition : en mode texte et en mode visuel.

* Edition en mode texte: Le formatage (gras, italique) est rendu par du code html.
* Edition en mode WYSIWG

Raccourcis clavier

Il existe des raccourcis clavier pour des opérations fréquentes, comme l’insertion d’un lien, la mise en gras ou en italique... En survolant les éléments de la barre d’outil, le raccourci sera affiché.

Retours de ligne

Les retours de ligne ont un comportement différent, selon qu’on édite en mode texte ou visuel. 

En mode texte, la touche retour crée simplement une nouvelle ligne. Deux retours consécutifs vont créer un nouveau paragraphe. C’est le comportement habituel d’un éditeur de code.

En mode visuel, chaque retour crée un nouveau paragraphe – l’équivalent de deux retours en mode texte. C’est le comportement habituel d’un logiciel de traitement de texte comme Word ou LibreOffice. Pour un retour de ligne simple, il faut recourir au raccourci clavier Majuscule + Retour.

Pour étendre les options de formatage, il existe des plugins, par exemple TinyMCE Advanced.

Pour insérer des tableaux, il existe un plugin dédié : TablePress.

Exercice: créer un article en utilisant des titres (différents niveaux), du gras, de l'italique, un lien externe, un lien vers un autre article, une citation.

***

La correction typo automatique

WordPress effectue quelques corrections typographiques automatiques. Par exemple, les guillemets droits de votre clavier (') sont transformés en guillemets typographiques (’), et le tiret court (-) en un tiret long (–) s’il est entouré d’espaces. 

Référence: Mark Jaquith : How WordPress Handles Dashes and Hyphens, http://wp.me/p56-10t. 

Pour les curieux, la fonction responsable de ces transformations se nomme wptexturize – http://codex.wordpress.org/Function_Reference/wptexturize

***

L’importance du “slug”

Importance du "slug" dans le permalien.

Le ”slug” est l'élément du permalien référent à un contenu de votre site (article, page, catégorie...). Le slug correspond normalement au titre de l’article. Vous pouvez décider de le modifier manuellement, afin qu'il soit aussi pertinent que possible. C'est un élément important pour l'indexation par les engins de recherche.

***

Le champ "extrait".

***

Rédiger en Markdown 

Le format Markdown, inventé par John Gruber et Aaron Swartz, est une syntaxe minimale de formatage permettant d’écrire dans un éditeur de code, suivant quelques conventions simples. Par exemple, *ces mots* sont en italique, et **ceux-ci** en gras. 
En novembre 2013, WordPress.com a introduit la possibilité d’écrire en Markdown (dans Réglages → Options d’écriture).
Depuis janvier 2014, cette fonctionnalité est incluse dans le plugin Jetpack à destination des sites WordPress indépendants.
Plus d’infos :
http://en.blog.wordpress.com/2013/11/19/markdown/
http://en.support.wordpress.com/markdown-quick-reference/
http://daringfireball.net/projects/markdown/

