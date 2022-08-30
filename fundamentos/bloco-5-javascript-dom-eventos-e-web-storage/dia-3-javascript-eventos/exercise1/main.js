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
  const newElement = createElementWithText(element, text);
  if (classArray) addClassesToElement(newElement, classArray);
  if (idName) addIdToElement(newElement, idName);
  if (parent) parent.appendChild(newElement);
  return newElement;
}

const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeTech(event) {
  const text = event.target.value;
  const tech = document.querySelector('.tech');
  changeTextElement(tech, text);
}

input.addEventListener('input', changeTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function toMyGithub() {
  window.location.href = "https://github.com/Netto-JM";
}

myWebpage.addEventListener('dblclick', toMyGithub);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function generateRandomColor() {
  const colorValues = [];
  for (let index = 0; index < 3; index += 1) {
    const colorValue = Math.floor(Math.random() * 256);
    colorValues[index] = colorValue;
  }
  const color = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
  return color;
}

function changeSpotrybefyFontColor(event) {
  const color = generateRandomColor();
  const spotrybefyElement = event.target;
  changeElementColor(spotrybefyElement, color);
}

myWebpage.addEventListener('mouseover', changeSpotrybefyFontColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.