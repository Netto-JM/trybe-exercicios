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

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.
const buttonContainer = document.querySelector('.buttons-container');

const daysList = document.getElementById('days');

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const decemberHolidays = [24, 25, 31];

const decemberFridays = [4, 11, 18, 25];

function zoomInDay(event) {
  event.target.style.fontSize = '2.5rem'
}

function zoomOutDay(event) {
  event.target.style.fontSize = '20px'
}

for (const day of decemberDaysList) {
  const decemberDayItem = completeElementBuilder('li', day, daysList, ['day']);
  if (decemberHolidays.includes(day)) decemberDayItem.classList.add('holiday');
  if (decemberFridays.includes(day)) decemberDayItem.classList.add('friday');
  decemberDayItem.addEventListener('mouseover', zoomInDay);
  decemberDayItem.addEventListener('mouseout', zoomOutDay);
}

const holidayButton = completeElementBuilder('button', 'Feriados', buttonContainer, undefined, 'btn-holiday');

const holidays = document.querySelectorAll('.holiday');

const fridays = document.querySelectorAll('.friday');

let hilightedHolidays = false;

let hilightedFridays = false;

function hilghtHolidays() {
  for (const day of holidays) {
    if (hilightedHolidays) {
      day.style.backgroundColor = 'rgb(238,238,238)'
    } else {
      day.style.backgroundColor = 'orange'
    }
  }
  hilightedHolidays = !hilightedHolidays;
}

holidayButton.addEventListener('click', hilghtHolidays);

const friday = completeElementBuilder('button', 'Sexta-feira', buttonContainer, undefined, 'btn-friday');

function hilghtFridays() {
  for (let index = 0; index < decemberFridays.length; index += 1) {
    if (hilightedFridays) {
      fridays[index].textContent = decemberFridays[index];
    } else {
      fridays[index].textContent = "LET'S PARTY";
    }
  }
  hilightedFridays = !hilightedFridays;
}

friday.addEventListener('click', hilghtFridays);

const myTaks = document.querySelector('.my-tasks');


function addTaskDiv(color) {
  const customtask = completeElementBuilder('div', undefined, myTaks, ['task']);
  customtask.style.backgroundColor = color;
}

completeElementBuilder('span', 'cozinhar', myTaks);
addTaskDiv('red');
completeElementBuilder('span', 'programar', myTaks);
addTaskDiv('green');

const customtasks = document.getElementsByClassName('task');

function selectTask(event) {
  const clickedTask = event.target;
  const clickedTaskClasses = clickedTask.classList.toString();
  const isNotSelectedTask = !clickedTaskClasses.includes('task-selected')
  clickedTask.classList.toggle('task-selected', isNotSelectedTask)
}

for (const task of customtasks) {
  task.addEventListener('click', selectTask)
}

//eighth exercise completed

/* Implemente uma função que selecione uma tarefa.
Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada. */