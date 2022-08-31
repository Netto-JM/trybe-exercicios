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
  decemberDayItem.addEventListener('click', taskDay);
}

const holidayButton = completeElementBuilder('button', 'Feriados', buttonContainer, undefined, 'btn-holiday');

const holidays = document.querySelectorAll('.holiday');

const fridays = document.querySelectorAll('.friday');

let hilightedHolidays = false;

let hilightedFridays = false;

function hilghtHolidays() {
  for (const day of holidays) {
    if (hilightedHolidays) {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'orange';
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
  const isNotSelectedTask = !clickedTaskClasses.includes('task-selected');
  clickedTask.classList.toggle('task-selected', isNotSelectedTask);
  for (const task of customtasks) {
    if (task !== clickedTask) task.classList.remove('task-selected');
  }
}

for (const task of customtasks) {
  task.addEventListener('click', selectTask);
}

function taskDay(event) {
  let selectedTaskColor = ''
  const clickedDay = event.target;
  const defaultColor = 'rgb(238,238,238)';
  const selectedTask = document.querySelector('.task-selected');
  if (selectedTask) selectedTaskColor = selectedTask.style.backgroundColor;
  const currentColor = clickedDay.style.backgroundColor;
  const sameColors = selectedTaskColor === currentColor
  if (sameColors) clickedDay.style.backgroundColor = defaultColor;
  else clickedDay.style.backgroundColor = selectedTaskColor;
}

//ninth exercise completed

/* Implemente uma função que atribua a cor da tarefa ao dia do calendário.
Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) */