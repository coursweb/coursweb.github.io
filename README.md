# Cours Programmation Web

Support de cours programmation web

- En ligne sous: [http://cours-web.ch](http://cours-web.ch/)
- Code disponible sous: [https://github.com/coursweb](https://github.com/coursweb)

## À propos

Ceci est un support de cours, visant à accompagner l'apprentissage de la programmation web. Les matières traitées sont: le langage HTML, les styles CSS, la conception de sites avec WordPress.

Ce support de cours accompagne entre autres les cours donnés à l'Eracom (Lausanne), à l'Ecole d'Art Appliqués de La Chaux-de-Fonds, ainsi que les modules de formation du [Collectif WP](http://collectifwp.ch) (Genève).

## Licence

Les contenus de ce support de cours sont mis à disposition sous les termes de la licence **[CC-BY-SA](https://creativecommons.org/licenses/by/4.0/)** (la même licence que Wikipédia).

Vous êtes donc invités à l'utiliser librement, y compris dans un contexte professionnel et commercial, à condition de respecter la licence.

Le code du thème Jekyll (dérivé de [Minima](https://github.com/jekyll/minima)) est mis à disposition sous la licence MIT.

## Contribuer

Les corrections et améliorations sont les bienvenues, et se font par l'intermédiaire du système GIT. Les chapitres HTML, CSS et WordPress sont des "repositories", que vous pouvez cloner, forker, compléter et proposer à la publication.

Les contenus sont rédigés en syntaxe [Markdown](https://collectifwp.github.io/cours-web/wp/texte-formatage#rdiger-en-markdown).

## Les auteurs

Les auteurs et contributeurs sont:

* [Manuel Schmalstieg](https://github.com/ms-studio) – artiste, développeur et enseignant.
* ...

## Technique

Ce site est construit avec [Jekyll](http://jekyllrb.com/), un générateur de sites. Il utilise le thème de base de Jekyll, avec de petites modifications.

La plus importante modification concerne le menu, le code se trouve dans _includes/header.html.

Le code du menu de niveau 2 se trouve dans _includes/nav-second.html.

## Faire tourner Jekyll localement

Pour faire tourner le site en local, il faut d'abord installer Jekyll.

Comme ceci: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

```
sudo gem install jekyll
```

Et: 

```
sudo gem install bundler
```

Une fois que c'est fait, naviguer avec le terminal dans le répertoire du site, puis exécuter la commande suivante:

```
bundle exec jekyll serve
```

Si cela fonctionne, le terminal vous indiquera l'URL pour accéder au serveur, p.ex. [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

### Autres commandes utiles

Mettre à jour Rubygems: 

```
sudo gem update --system
```

### Notes diverses

Styles SASS/CSS et couleurs... 

**Où est donc définie la couleur #828282 ?**

Cette couleur est définie par la variable $grey-color, elle-même définie dans css/main.scss

**Classes CSS et Markdown... est-il possible de donner une classe à un élément?**

Oui, avec cette méthode: https://kramdown.gettalong.org/syntax.html#attribute-list-definitions

Exemple: dans cours-javascript/400-javascript.md on ajoute une classe (.large-image) à des images de grande taille, pour conserver leur lisibilité. On ajoute donc le code `{:id: .large-image}` à la suite de la balise image.