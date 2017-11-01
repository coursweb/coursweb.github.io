
// Liens sortants dans nouveau tab: 

for (var links = document.links, i = 0, a; a = links[i]; i++) {
  if (a.host !== location.host) {
    a.target = '_blank';
  }
}

// insertion de légende sous les images:

var images = document.querySelectorAll('img'), i = images.length;

while (i--) {
  var legend = images[i].getAttribute("alt");
  if (legend) {

    // préparer la légende:
    var node = document.createElement("figcaption");
    var textnode = document.createTextNode(legend);
    node.appendChild(textnode); // puts text inside html

    // insérer après l'image:
    images[i].parentNode.insertBefore(node, images[i].nextSibling);

    // idée: envelopper dans un élément <figure>
    // https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/

  } // end if (legend)
    
} // end while

