---
layout: page
title: Images responsives
permalink: /media/images-responsives/
---

Images responsives
===

`<picture>` ... élément permettant des images responsives, alternative à `<img>`.

Exemple de code:

```html
<picture>
  <source 
    media="(min-width: 650px)"
    srcset="images/kitten-stretching.png">
  <source 
    media="(min-width: 465px)"
    srcset="images/kitten-sitting.png">
  <img 
    src="images/kitten-curled.png" 
    alt="a cute kitten">
</picture>
```

Et voici un autre exemple trouvé sur le site [sketchapp.com](https://www.sketchapp.com/features/). On notera qu'il utilise le format [WebP](https://fr.wikipedia.org/wiki/WebP), nouveau format compressé développé par Google.

```html
<picture>
  <source 
   srcset="/images/features/mirror.webp 1x,
   /images/features/mirror@2x.webp 2x" 
   type="image/webp">
  <img src="/images/features/mirror-png8.png" 
   srcset="/images/features/mirror-png8@2x.png 2x">
</picture>
```

Enfin, une méthode trouvée sur [un site de Google](https://design.google.com/articles/introducing-pixate-and-form-1-3/) en novembre 2016: 

```html
<div class="_image js-responsive-image loaded" 
  data-knowndimensions="1600x1050" 
  data-preserveaspectratio="true" 
  data-src="form.jpg" 
  data-target="#fig-2" 
  style="background-image: url(form-1240@2x.jpg);">
</div>
```

On notera qu'il n'y a pas de balise image (&lt;img&gt;), l'image est affichée comme image de fond en css (background-image). Son conteneur est un simple `<div>`.

## Références sur les images responsives

- [http://caniuse.com/#feat=picture](http://caniuse.com/#feat=picture)
- [https://github.com/scottjehl/picturefill](https://github.com/scottjehl/picturefill) - un polyfill
- [https://responsiveimages.org/](https://responsiveimages.org/)
