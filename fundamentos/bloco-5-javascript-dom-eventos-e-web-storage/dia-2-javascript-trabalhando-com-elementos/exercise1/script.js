/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai. */

function changeElementColor(element, color) {
  element.style.color = color;
}

function changeElementText(element, text) {
  element.textContent = text;
}

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentNode;
const primeiroFilhoDoFilho = pai.firstElementChild.nextElementSibling.firstElementChild;
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
const textNodeAtention = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = pai.lastElementChild.previousSibling.previousSibling;
changeElementColor(pai, 'red');
changeElementText(primeiroFilhoDoFilho, 'Eu sou o primeiroFilhoDoFilho');