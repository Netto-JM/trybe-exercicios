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

function createElementWithText(element, text) {
  const newElement = document.createElement(element);
  if (text) appendTextNode(newElement, text);
  return newElement;
}

function completeElementBuilder(element, text, parent, classArray, idName) {
  const newElement = createElementWithText(element, text)
  if (classArray) addClassesToElement(newElement, classArray);
  if (idName) addIdToElement(newElement, idName);
  if (parent) parent.appendChild(newElement);
  return newElement;
}

const listValues = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
const body = document.body;
const h1 = completeElementBuilder('h1', 'Exercício 5.2 - JavaScript DOM', body, ['title']);
const main = completeElementBuilder('main', undefined, body, ['main-content']);
const sectionCenter = completeElementBuilder('section', undefined, main, ['center-content']);
const p = completeElementBuilder('p', 'Sou o "p" primeiro filho de section', sectionCenter);
const sectionLeft = completeElementBuilder('section', undefined, main, ['left-content']);
const sectionRight = completeElementBuilder('section', undefined, main, ['right-content']);
const img = completeElementBuilder('img', undefined, sectionLeft, ['small-image']);
img.setAttribute('src', 'https://picsum.photos/200');
const ul = completeElementBuilder('ul', undefined, sectionRight);

for (const value of listValues) {
  completeElementBuilder('li', value, ul);
}

completeElementBuilder('h3', 'Description One', main, ['description']);
completeElementBuilder('h3', 'Description Two', main, ['description']);
completeElementBuilder('h3', 'Description Three', main, ['description']);
main.removeChild(sectionLeft);
sectionRight.style.marginRight = 'auto';
main.style.backgroundColor = 'green';
ul.removeChild(ul.lastElementChild);
ul.removeChild(ul.lastElementChild);

