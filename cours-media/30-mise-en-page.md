---
layout: page
title: Mise en page
permalink: /media/image-layout/
---

### Propriété CSS utile: object-fit

Une propriété CSS longtemps attendue, qui permet de spécifier comment une image (ou vidéo) doit s'adapter à son conteneur. 

Les valeurs possibles sont: 

* `fill` : déformation de l'image, pour remplir le cadre à tout prix.
* `contain` : essaie de remplir le cadre tout en gardant toute l'image visible, en la rapetissant s'il le faut.
* `cover` : masquage partiel de l'image, pour remplir entièrement le cadre, sans déformation.
* `scale-down` : l'image se rétrécit pour rentrer dans le cadre. Peut se comporter comme contain.
* `none` : comportement classique, affichage de l'image à taille réelle des pixels.

Exemples : 

* [Un exemple conçu par Jen Simmons](http://labs.jensimmons.com/2016/examples/grace-hopper-page.html).
* [Exemple sur Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

Support navigateurs: cette propriété n'est pas supportée dans Internet Explorer, elle sera dans Edge dès la version 16. [Voir Caniuse.com](http://caniuse.com/#search=object-fit) pour le statut actuel.