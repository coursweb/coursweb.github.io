---
layout: page
title: CSS Layout
permalink: /css/layout
---

Méthodes de positionnement et mise en page
----------

Deux bonnes introductions à la mise en page et au positionnement CSS:

*[Introduction au positionnement CSS](http://www.pompage.net/traduction/introduction-au-positionnement-css)*, par Noah Stokes, 2010.    
L'original [en anglais](http://alistapart.com/article/css-positioning-101).

*[Apprendre les mises en page CSS](http://fr.learnlayout.com/)*, par Greg Smith.


La propriété box-sizing: border-box
----------

La propriété **box-sizing**, ajoutée en CSS3, permet de définir la manière dont la largeur d'un élément est calculée.

La valeur par défaut est "content-box", elle signifie que la largeur est celle du contenu uniquement. Le padding (marge intérieure), la bordure et la marge extérieure vont s'ajouter.

Imaginons un élément auquel on donne ces règles:

```css
.element {
	width: 200px;
	padding: 10px;
	border: 2px;
	margin: 10px;
}
```

Cet élément aura une largeur effective de 200+(2x10)+(2x2)+(2x10) = 244 pixels. Tout s'additionne, y compris le padding, la bordure, la marge.

Si on utilise `box-sizing: border-box`, alors la la marge intérieure et la bordure sont compris dans la largeur (width). Un paragraphe situé dans cet élément de 200px n'aura donc que 176px de large (on soustrait aux 200px les 2x10px de padding et 2x2px de bordure). Il n'y a que la marge extérieure (2x10px) qui s'additionne. L'élément fait donc 220px de large. 

Le mode `box-sizing: border-box` est bien supporté par les navigateurs actuels (état mai 2016):
[http://caniuse.com/#feat=css3-boxsizing](http://caniuse.com/#feat=css3-boxsizing)

De nombreux designers ont commencé à appliquer le mode `box-sizing: border-box` sur tous leurs éléments de mise en page. Le framework *Boostrap* suit cette pratique.

**Références:**

Article de Paul Irish, membre de l'équipe Google Chrome:
[http://www.paulirish.com/2012/box-sizing-border-box-ftw/](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)

L'auteur se prononce en faveur de l'utilisation d'un "reset" global pour appliquer le mode *border-box* à tous les éléments:

```css
/* apply a natural box layout model to all elements, 
 * but allowing components to change */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

Utilisation dans Bootstrap, depuis 2013:    
- [http://blog.getbootstrap.com/2013/08/19/bootstrap-3-released/](http://blog.getbootstrap.com/2013/08/19/bootstrap-3-released/)
- [https://github.com/twbs/bootstrap/issues/12351](https://github.com/twbs/bootstrap/issues/12351)

En 2014, le site CSS Tricks déclare le 1er février comme étant la Journée Internationale du box-sizing (International box-sizing Awareness Day):
[https://css-tricks.com/international-box-sizing-awareness-day/](https://css-tricks.com/international-box-sizing-awareness-day/)

Un article (en français) qui résume tout cela:
[https://la-cascade.io/controler-le-modele-de-boite/](https://la-cascade.io/controler-le-modele-de-boite/)

Mise en page / layout
----------

Depuis le lancement du CSS en 1996, diverses techniques ont été développées pour créer des mises en page avec ce langage.

Pendant longtemps, des mises en page ont été créées avec le positionnement "Float". Depuis l'introduction du CSS3, on peut utiliser le module **CSS Flexbox**. Pour l'avenir, le module **CSS Grid Layout** propose des solutions intéressantes.

Une nouvelle approche: Flexbox
===

Quelques bonnes ressources pour maîtriser ce module CSS:

Un article: [http://fr.learnlayout.com/flexbox.html](http://fr.learnlayout.com/flexbox.html)

Un autre article sur Alsa Créations:
[http://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html](http://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)

Un article (en anglais): 
[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Des exemples d'usages typiques:
[http://philipwalton.github.io/solved-by-flexbox/](http://philipwalton.github.io/solved-by-flexbox/)

Futur du positionnement? CSS Grid Layout
===

Un article-tutoriel:
[http://www.alsacreations.com/article/lire/1388-css3-grid-layout.html](http://www.alsacreations.com/article/lire/1388-css3-grid-layout.html)

Et un peu de science-fiction
===

**GSS - Grid Style Sheets** : "GSS reimagines CSS layout & replaces the browser’s layout engine with one that harnesses the Cassowary Constraint Solver — the same algorithm Apple uses to compute native layout."

Il s'agit d'une librairie JavaScript qui simule un algorithme de mise en page reposant sur des "contraintes", également utilisé dans l'environnement de programmation d'applications proposé par Apple : "GSS is a CSS preprocessor & JS runtime that harnesses Cassowary.js, the JS port of the same constraint solving algorithm Apple uses in Cocoa Autolayout for iOS & OS X."

Source: [https://gridstylesheets.org/](https://gridstylesheets.org/)

Cette technologie est liée à la startup The Grid - [https://thegrid.io/](https://thegrid.io/) - qui a pour slogan "The Grid Is The Website Of The Future: It Builds Itself".

