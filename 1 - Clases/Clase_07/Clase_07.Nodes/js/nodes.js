
const $link = document.querySelector('a');
console.log($link.href);
//-- Get the attribute 'href' from the object.
console.log($link.getAttribute('href'));

//--- Sets a new value for the attribute 'href'.
$link.setAttribute('href', 'https://google.com.ar/');
$link.setAttribute('target', '_blank');
$link.removeAttribute('target');

//--- Activate or deactivate the obj.
$link.toggleAttribute('disabled');
console.log($link.hasAttribute('disabled'));

$image = document.createElement('img');
$image.setAttribute('src', 'https://placeimg.com/300/300/animals');
$image.setAttribute('alt', 'imagen de un animal');

$divImagen = document.getElementById('contenedor-imagen');
//--- Agregamos un hijo a otro elemento ---//
$divImagen.appendChild($image);

//--- Agregamos un hijo a otro elemento ---//
$divImagen.innerHTML = $image;

const $title = document.createElement('h1');

const $textNode = document.createTextNode("i'm a text node");

//--- Adds a node ---//
$title.appendChild($textNode);
$divImagen.appendChild($title);

$divSection = document.querySelector('#text');

//--- Append the child as a first node ---//
$divSection.before($image);