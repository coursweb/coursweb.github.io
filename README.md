# cours-programmation-web
Support de cours programmation web

En ligne sous: [http://collectifwp.github.io/cours-web/](http://collectifwp.github.io/cours-web/)

## À propos

Ceci est un support de cours, visant à accompagner l'apprentissage de la programmation web. Les matières traitées sont: le langage HTML, les styles CSS, la conception de sites avec WordPress.

Ce support de cours accompagne entre autres les cours donnés à l'Eracom (Lausanne), à l'Ecole d'Art Appliqués de La Chaux-de-Fonds, ainsi que les modules de formation du [Collectif WP](http://collectifwp.ch) (Genève).

## Licence

Ce support de cours est mis à disposition sous les termes de la licence **CC-BY-SA**.

Vous pouvez donc l'utiliser librement, y compris dans un contexte professionnel et commercial, à condition de respecter la licence.

## Contribuer

Les corrections et améliorations sont les bienvenues, et se font par l'intermédiaire du système GIT. Les chapitres HTML, CSS et WordPress sont des "repositories", que vous pouvez clôner, forker, compléter et proposer à la publication.

Les contenus sont rédigés en syntaxe Markdown.

## Les auteurs

Les auteurs et contributeurs sont:

* Manuel Schmalstieg – artiste, développeur et enseignant.
* ...

## Technique

Ce site est construit avec [Jekyll](http://jekyllrb.com/), un générateur de sites. Il utilise le thème de base de Jekyll, avec de petites modifications.

La plus importante modification concerne le menu, le code se trouve dans _includes/header.html.

## Faire tourner Jekyll localement

Pour faire tourner le site en local, il faut d'abord installer Jekyll.

Comme ceci: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

```
sudo gem install jekyll
```

Et: 

```
sudo gem install bundler
```

Une fois que c'est fait, naviguer avec le terminal dans le répertoire du site, et exécuter la commande suivante:

```
bundle exec jekyll serve
```

Si cela fonctionne, le terminal vous indiquera l'URL pour accéder au serveur, p.ex. http://127.0.0.1:4000/cours-web/

### Autres commandes utiles

Mettre à jour Rubygems: 

```
sudo gem update --system
```