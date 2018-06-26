---
layout: page
title: Exportation d'images
permalink: /media/exporter/
---

Afin de publier des images sur le web, il faut veiller à ce que leur format et leur poids soit approprié.

Voici comment faire une exportation depuis un logiciel (Photoshop):

### Dimensions

Commencez par vérifier les dimensons (hauteur / largeur) de l'image. Dans Photoshop, allez dans le menu *Image > Taille de l'image...* (raccourci: alt+cmd+I).

![](/cours-media/img/1-image-resize.jpg)

Ce menu vous permet de vérifier la taille de l'image, et de la redimensionner si nécessaire.

### À quelle taille faut-il redimensionner l'image?

Il est difficile de donner une réponse universelle, car les résolutions d'écran ne cessent d'évoluer. Les écrans 5k disponibles en 2018 ont par exemple une résolution de 5120 x 2880 pixels.

Une bonne idée est de vérifer quelles sont les tendances globales, avec [un outil comme Statcounter](http://gs.statcounter.com/browser-version-market-share/all/switzerland/#monthly-201804-201806-bar). En juin 2018, on constate que les résolutions d'écran dominantes des utilisateurs du web en Suisse sont :

- 1920 x 1080
- 375 x 667
- 360 x 640
- 768 x 1024
- 1440 x 900

Les écrans 4K ou 5K sont visiblement encore très peu nombreux, ils n'apparaissent pas dans la statistique.

On peut donc estimer qu'une taille d'image maximale de 2000 ou 2400 pixels est raisonnable. D'autant plus qu'un système de publication pourra souvent calculer des versions réduites (voir aussi [le cours WordPress](https://cours-web.ch/wp/images)).

Dans cet exemple, on voit que l'image a une taille de 7136 x 5360 px, ce qui est sans doute excessif pour notre site web.

![](/cours-media/img/2-image-resize.jpg)

Il faudra donc redimensionner l'image en réduisant sa largeur, p.ex. à 2400 px.

![](/cours-media/img/3-resize.jpg)

### Exportation

Une fois cela effectué, il convient d'exporter l'image au format approprié pour le web.

Il existe différents formats d'image destinés au web, dont le JPEG, le GIF, le PNG, le WEBP...

Le JPEG sera le format que vous choisirez, dans la grande majorité des cas. Il sera important de vérifier le degré de compression appliqué lors de l'exportation.

Pour exporter avec un maximum de paramètres, utilisez le menu *Fichier > Exportation > Enregistrer pour le web (hérité)* (raccourci: Maj+Alt+Cmd+S).

![](/cours-media/img/4-export-for-web.jpg)

Cela vous ouvre une grande fenêtre avec de nombreux réglages:

![](/cours-media/img/5-export.jpg)

Voici la procédure à suivre:

1. Vérifiez que l'onglet "Optimisé" est sélectionné, pour bien voir les effets de la compression.
2. Vérifiez que le paramètre défini est JPEG. Dans le doute, optez pour JPEG Supérieur.
3. Vérifiez que la qualité est à 60. Vous pouvez augmenter ce chiffre à 70 ou 80 si l'image vous paraît trop dégradée. 
4. Vérifiez que la taille de l'image est correcte.
5. Observez le poids qui résultera, ici 707.6 K.

Si tout est correct, cliquez sur **Enregistrer...**

Bravo, vous venez d'exporter votre image pour le web!