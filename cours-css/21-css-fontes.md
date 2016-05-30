---
layout: page
title: Fontes & typographie
permalink: /css/typographie
---

Propriétés CSS spécifiques à la typographie:

* font-family
* font-weight

Mais aussi:

* text-transform
* text-decoration

Hyphenation, césure
----------

Documentation sur la césure (en anglais, hyphenation).

Macrotypographie du web
------

![](/cours-web/cours-css/img/macrotypographie-titres.png)

Exemples de styles appliqués aux titres, tirés de la conférence "La macrotypographie du web", par Anne-Sophie Fradier (2010).

CSS3 et Webfonts
----

Depuis les débuts du web, la palette typographique à disposition des designers était limitée à une poignée de fontes (Arial, Verdana, Georgia, Times, Courier...), disponibles sur la grande majorité des systèmes d'exploitation.

Entre 2008-2010, tous les navigateurs ont implémenté le **CSS3 Fonts Module**, permettant de charger des fontes spécifiées par les styles CSS avec la propriété *@font-face*.


@Fontface
===

La syntaxe @font-face, optimisée (c'est la version proposée par FontSquirrel):

```css
@font-face {
    font-family: 'univers';
    src: url('univers.eot');
    src: url('univers.eot?#iefix') format('embedded-opentype'),
         url('univers.woff2') format('woff2'),
         url('univers.woff') format('woff'),
         url('univers.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```

On notera que les fontes sont proposées dans quatre formats: eot, woff2, woff, ttf.

- **eot** : format utilisé par Microsoft (Internet Explorer)
- **ttf**
- **woff** : format compressé
- **woff2** : format compressé

Sources de fontes
===

Trouver de bonnes fontes sous licence libre:

Quelques fontes typographiques intéressantes, en majeure partie sous licence libre et/ou gratuites...

Bagnard, et Bagnard Sans:     
[http://www.love-letters.be/](http://www.love-letters.be/ )
http://maykim.co/Bagnard-Sans   
[https://github.com/sebsan/Bagnard-Sans](https://github.com/sebsan/Bagnard-Sans) 

les fontes du collectif OSP:   
[http://osp.kitchen/foundry/](http://osp.kitchen/foundry/)   
Limousine, Le Patin Helvète, Crickx...

les fontes du studio Uplaod:  
[http://uplaod.fr/allfonts](http://uplaod.fr/allfonts)  
[https://github.com/uplaod](https://github.com/uplaod)

les fontes d'Alfredo Marco Pradil (certaines sous licence libre):  
[https://fontlibrary.org/en/member/hanken](https://fontlibrary.org/en/member/hanken)  
[https://sellfy.com/hankendesignco](https://sellfy.com/hankendesignco)

Use & Modify, sélection de fontes curatée par Raphael Bastide:  
[http://usemodify.com/](http://usemodify.com/)

Gidole, open-source modern DIN:  
[https://github.com/larsenwork/Gidole](https://github.com/larsenwork/Gidole)

Work Sans:  
[https://github.com/weiweihuanghuang/Work-Sans](https://github.com/weiweihuanghuang/Work-Sans)

Fontes non-libres, mais intéressantes:

ECAL Typefaces  
[https://ecal-typefaces.ch/ ](https://ecal-typefaces.ch/ )

Grilli Type:  
[https://www.grillitype.com/](https://www.grillitype.com/)

Deux belles fontes mono-espacées:

**Fira mono**   
[https://github.com/mozilla/Fira](https://github.com/mozilla/Fira)

**Source code pro**   
[https://github.com/adobe-fonts/source-code-pro](https://github.com/adobe-fonts/source-code-pro)

Références
----------

Quelques références:

- [On Web Typography](http://alistapart.com/article/on-web-typography), par Jason Santa Maria, 2009
- [De la vraie typographie pour le Web](http://www.pompage.net/traduction/de-la-vraie-typographie-pour-le-web), par Tim Brown, 2009
- [Web Fonts at the Crossing](http://alistapart.com/article/fonts-at-the-crossing), par Richard Fink, 2010
- [Pour une typographie qui a du sens](http://www.pompage.net/traduction/pour-une-typographie-qui-a-du-sens), par Tim Brown, 2011 (en anglais: More Meaningful Typography). - Sur les méthodes avancées, le rythme typographique dans le design.


https://blog.prototypr.io/the-value-of-multi-typeface-design-ccd67227b0ee#.a6neeidbw


https://css-tricks.com/snippets/css/using-font-face/


