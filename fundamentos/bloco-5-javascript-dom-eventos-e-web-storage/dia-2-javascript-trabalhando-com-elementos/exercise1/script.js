

function changeElementColor(element, color) {
  element.style.color = color;
}

function changeTextElement(element, text) {
  element.textContent = text;
}

function appendTextNode(element, text) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}

function addClassesToElement(element, classArray) {
  element.classList.add(...classArray);
}

function addIdToElement(element, idName) {
  element.setAttribute('id', idName);
}

function createElementWithText(element, text, classArray, idName) {
  const newElement = document.createElement(element);
  appendTextNode(newElement, text);
  if (classArray) addClassesToElement(newElement, classArray);
  if (idName) addIdToElement(newElement, idName);
  return newElement;
}

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentNode;
const primeiroFilhoDoFilho = pai.firstElementChild.nextElementSibling.firstElementChild;
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
const textNodeAtention = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = pai.lastElementChild.previousSibling.previousSibling;
changeElementColor(pai, 'red');
changeTextElement(primeiroFilhoDoFilho, 'Eu sou o primeiroFilhoDoFilho');
const irmaoDoElementoOndeVoceEsta = createElementWithText('section', 'irmaoDoElementoOndeVoceEsta', undefined, 'irmaoDoElementoOndeVoceEsta');
pai.appendChild(irmaoDoElementoOndeVoceEsta);
const filhoDoElementoOndeVoceEsta = createElementWithText('section', 'filhoDoElementoOndeVoceEsta', undefined, 'filhoDoElementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);
const filhoDoPrimeiroFilhoDoFilho = createElementWithText('section', 'filhoDoPrimeiroFilhoDoFilho', undefined, 'filhoDoPrimeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
const FDPFDF = document.getElementById('filhoDoPrimeiroFilhoDoFilho');
console.log(FDPFDF.parentNode.parentNode.nextElementSibling);

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho.nextElementSibling);
pai.removeChild(terceiroFilho);
pai.removeChild(pai.lastElementChild);
pai.removeChild(textNodeAtention);
elementoOndeVoceEsta.removeChild(primeiroFilhoDoFilho.nextElementSibling);
elementoOndeVoceEsta.removeChild(primeiroFilhoDoFilho.nextElementSibling);
