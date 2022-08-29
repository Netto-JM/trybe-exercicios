/* Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.*/

function changeElementColor(element, color) {
  element.style.color = color;
}

function changeElementText(element, text) {
  element.textContent = text;
}

function createElementWithText(element, text, className, idName) {
  const newElement = document.createElement(element);
  const textNode = document.createTextNode(text);
  if (className) newElement.classList.add(className);
  if (idName) setAttribute('id', idName);
  newElement.appendChild(textNode)
}

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentNode;
const primeiroFilhoDoFilho = pai.firstElementChild.nextElementSibling.firstElementChild;
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
const textNodeAtention = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = pai.lastElementChild.previousSibling.previousSibling;
changeElementColor(pai, 'red');
changeElementText(primeiroFilhoDoFilho, 'Eu sou o primeiroFilhoDoFilho');