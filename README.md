# Cours Programmation Web

Support de cours programmation web

- En ligne sous: [https://cours-web.ch](https://cours-web.ch/)
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

Les contenus sont rédigés en syntaxe [Markdown](https://cours-web.ch/wp/texte-formatage#rdiger-en-markdown).

## Les auteurs

Les auteurs et contributeurs sont:

* [Manuel Schmalstieg](https://github.com/ms-studio) – artiste, développeur et enseignant.
* Des élèves des classes de graphisme de l'Eracom.
* ...

## Technique

Ce site est construit avec [Jekyll](http://jekyllrb.com/), un générateur de sites. Il utilise le thème de base de Jekyll, avec de petites modifications.

La plus importante modification concerne le menu. Le code se trouve dans _includes/header.html.

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

#### Problèmes potentiels

Le terminal retourne ceci:

-bash: /usr/local/bin/bundle: /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/bin/ruby: bad interpreter: No such file or directory

Cela signifie que certaines composantes de Ruby (langage utilisé par Jekyll) ne fonctionnent plus, car elles font appel à une ancienne version de Ruby (qui a été mise à jour avec le système MacOS). La solution consiste à mettre à jour les composantes (Gems), avec ces commandes:

```
gem install bundler
## et ensuite:
bundle install
```

Cela va réinstaller tout ce qui est nécessaire à Jekyll - [voir la documentation](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) pour plus de détails. 

### Autres commandes utiles

Mettre à jour Rubygems: 

```
sudo gem update --system
```

Mettre à jour Jekyll et les "gems" incluses:

```
sudo bundle update
```

### Notes diverses

Styles SASS/CSS et couleurs...

#### Comment ajouter de nouveaux fichiers SASS/CSS?

Il faut:

1. Ajouter les fichiers dans le dossier `_sass`.
2. Spécifier les noms des fichiers ajoutés dans `css/main.scss`, sous @import. 

#### MediaQueries - quels sont les breakpoints?

Ils sont définis également dans `css/main.scss`. 

À la base il y en a deux:

- $on-palm:          600px;
- $on-laptop:        800px;

#### Où est donc définie la couleur #828282 ?

Cette couleur est définie par la variable $grey-color, elle-même définie dans css/main.scss

#### Classes CSS et Markdown... est-il possible de donner une classe à un élément?

Oui, avec cette méthode: https://kramdown.gettalong.org/syntax.html#attribute-list-definitions

Exemple: dans cours-javascript/400-javascript.md on ajoute une classe (.large-image) à des images de grande taille, pour conserver leur lisibilité. On ajoute donc le code `{:id: .large-image}` à la suite de la balise image.

**Problème:** cela ne fonctionne pas pour les paragraphes, listes, etc.

**Solution:** voici l'astuce employée pour créer une grille de "cartes" à partir d'une liste de liens (p.ex. dans Git-Workflow): on *précède* la liste par un `<div class="cards"></div>`. 

Dans `js/coursweb.js`, on donne une classe et des styles spécifiques à la liste *qui suit cette balise*.

#### Comment ajouter de nouveaux chapitres?

Opération à faire lorsqu'un nouveau chapitre (dossier) est ajouté:

* modifier `_config.yml` (code "chapters"). C'est tout! :)

Important: 

* Pour le **premier article** d'un chapitre, l'URL (permalink) doit obligatoirement être de un niveau - c'est sur la base de ce critère qu'est généré le menu.
* Le code indiqué dans "chapters" doit correspondre à ce qui est dans le **permalien** (sinon le menu de 2ème niveau ne sera pas généré).

Le menu de navigation principal, affichant les chapitres, se trouve dans _includes/nav-primary.html.

Le menu de 2e niveau se trouve dans nav-second.html.

La page d'accueil, qui montre les chapitres sous form de blocs, est produite par le fichier index.html

### Mode Diaporama

Il est possible de consulter les chapitres en mode "diaporama". 

Le code JavaScript qui déclenche ce mode se trouve actuellement dans `_includes/script.html`.

Les styles CSS agissant sur le diaporama sont inclus dans `_includes/head.html` (car toutes les feuilles de style externes sont supprimées lors du basculement en mode "diaporama").
