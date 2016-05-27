---
layout: page
title: RWD
permalink: /css/responsive
---

Media Queries et RWD (Responsive Web Design)
---------

Styles CSS pour l'impression
===

Déjà en HTML4/CSS2, un attribut "media" est disponible.

```
media = { 
  all | 
  aural | braille | embossed | 
  handheld | print | 
  projection | screen | tty | tv 
}
```

Le CSS prévoit donc des styles particuliers pour les logiciels de synthèse vocale (aural), les appareils rendant les contenus de manière tactile (braille, embossed). 

Ceci étant, dans la pratique réelle, les seuls medias qui soient réellement supportés par les navigateurs sont "screen" et "print".

On utilise l'attribut media "print" pour charger des styles CSS spécifiques pour l'impression d'une page web:

```html
<link rel="stylesheet" type="text/css" media="print" href="serif.css">
```

Ou à l'intérieur d'une feuille de styles CSS:

```css
@media screen {
  * { font-family: sans-serif }
}
```

Références concernant @print:    

- [Faites bonne impression avec les CSS](http://www.pompage.net/traduction/impression), par Eric A. Meyer, 2002
- [Maîtriser l’impression CSS](http://openweb.eu.org/articles/maitriser_impression_css), par Nicolas Hoffmann, 2010
- [La spécification CSS 2.1](https://www.w3.org/TR/CSS21/media.html)
- [Les styles @print](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L197) du HTML5Boilerplate - ces styles sont aussi utilisés [dans Bootstrap](https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css#L190).

Avec l'évolution du HTML5, les possibilités de l'attribut "media" sont étendues: on peut maintenant charger des styles selon le format de la fenêtre du navigateur, la largeur, la hauteur, la densité des pixels...

Cela a rendu possible le "Responsive Web Design" (RWD).

RWD (Responsive Web Design)
-----

Références:

- [Responsive Web Design](http://alistapart.com/article/responsive-web-design), par Ethan Marcotte, alistapart, 2010
(aussi [en français](http://gobanclub.net/2010/11/17/responsive_webdesign_ethan_marcotte_trad_fr/))
- [Responsive Webdesign – présent et futur de l’adaptation mobile](http://openweb.eu.org/articles/responsive-webdesign-present-et-futur-de-l-adaptation), par Stéphanie Walter, openweb, 2013. Sujets abordés: images responsives, `<picture>`, srcset, image-set(), WebP, flexbox, CSS columns, Grid Layout, iframes, navigation...

Questions de détail
=== 

Faut-il les écrire les Media Queries en pixels ou en EM?

Un article qui préconise l'usage des EM:    
[http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)

