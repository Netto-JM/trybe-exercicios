/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

const pTags = document.getElementsByTagName('p');
const uppercasedFirstPText = pTags[0].textContent.toLocaleUpperCase();
const mainContent = document.getElementsByClassName('main-content')[0];
const centerContent = document.getElementsByClassName('center-content')[0];
const titleElement = document.getElementsByClassName('title')[0];
const titleText = 'Exercício 5.1 - JavaScript'
const myFuture = 'Desejo estar a caminho de me tornar um desenvolvedor pleno'
const trybeColor = 'rgb(76, 164, 109)';

function changeElementText(element, text) {
  element.textContent = text;
}

function changeElementBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function logAllElementsListText(elementsList) {
  for (const element of elementsList) {
    console.log(element.innerHTML);
  }
}

changeElementText(pTags[0], uppercasedFirstPText);
changeElementText(pTags[1], myFuture);
changeElementText(titleElement, titleText);
changeElementBackgroundColor(mainContent, trybeColor);
changeElementBackgroundColor(centerContent, 'white');
logAllElementsListText(pTags);
