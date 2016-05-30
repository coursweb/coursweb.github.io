---
layout: page
title: CSS
permalink: /css/
---

Introduction au CSS.
-------

![CSS is awesome](/cours-web/cours-css/img/css-is-awesome.jpeg)

Le langage CSS (Cascading Style Sheets) est apparu en 1997, afin de proposer une meilleure manière de créer des sites internet, en séparant le contenu (HTML) de la présentation.

Il y a eu différentes versions. La spécification **CSS 2** a été publiée en 1998. Une version révisée, CSS 2.1, a été en travail pendant des années, avant d'atteindre le statut de [Recommandation W3C](https://www.w3.org/TR/CSS2/) en 2011. 

La spécification **CSS 3**, qui l'a suivie, a été développée sous la forme de modules indépendants, dont certains sont déjà bien implémentés dans les navigateurs, et utilisés au quotidien (p.ex. Media Queries, Flexbox, Backgrounds and Borders...).

L'année 2010, qui marque une large adoption du standard HTML5, marque aussi la percée du CSS3. C'est en 2010 que sort le livre "[CSS3 for Web Designers](https://abookapart.com/products/css3-for-web-designers)", par Dan Cederholm, et que le terme "Responsive Web Design" fait son apparition sous la plume d'Ethan Marcotte.

![CSS Working Group](/cours-web/cours-css/img/CSSWG2010.jpg)    
*Le CSS Working Group du W3C, lors d'une réunion en 2010*

Principes de base
----------

Exemple de règle CSS...

### Unités CSS

- Les pixels (px)
- Les pourcentages (%)
- em et ex
- Les points et les picas
- rem
- Unités relatives à la surface d’affichage (vh et vw)
- Les pouces (in) et les centimètres (cm)
- Les caractères (ch)
- Grille de texte (gd)
- Nombres bruts

Articles de référence:

- [Dimensionner ses fontes avec rem](http://www.pompage.net/traduction/dimensionner-ses-fontes-avec-rem), par Jonathan Snook, 2011
- [Quelles mesures CSS, pour quel usage ?](http://www.pompage.net/traduction/css-unites-et-usages), par Dudley Storey, 2013

### Cascade CSS et spécificité

Un article très détaillé:
[Cascade CSS et priorité des sélecteurs](http://openweb.eu.org/articles/cascade_css), par Laurent Denis, 2005

Specificity:
https://designshack.net/articles/css/what-the-heck-is-css-specificity/

Calculateur: http://specificity.keegan.st/

***

Question: faut-il définir les fontes et couleurs sur BODY ou sur HTML?

https://css-tricks.com/html-vs-body-in-css/

Réponse: l'un et l'autre ne sont pas faux... Le HTML5Boilerplate utilise HTML pour définir les styles de base. Idem pour normalize.css.



Le modèle de boîte
===



Le modèle de boîte utilisé par les navigateurs est de type "content-box". Si on donne une largeur à un élément, cela ne concerne pas les marges intérieures et extérieures. Un élément auquel on donnerait une largeur de 500px, et des marges intérieures (padding) de 10px, aurait une largeur effective de 520px.



### Le border-collapsing

Le comportement "border-collapsing": en cas de juxtaposition verticale, les marges verticales de deux éléments qui se suivent ne sont pas additionnées. C'est la plus grande des deux marges qui est appliquée.

Exemple: une suite de paragraphes ayant chacun une marge verticale (haut / bas) de 10px. Les marges de deux paragraphes ne s'aditionnent pas, l'espace entre deux paragraphes reste 10px (pas 20px).

Ressources et références
---

Quelques bonnes ressources pour assimiler les bases du CSS, en trois chapitres:

- [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
- [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
- [Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/)


