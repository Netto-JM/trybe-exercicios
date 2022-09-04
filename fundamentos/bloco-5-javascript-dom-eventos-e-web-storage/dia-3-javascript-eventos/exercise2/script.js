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

function generateRandomColor() {
  const colorValues = [];
  for (let index = 0; index < 3; index += 1) {
    const colorValue = Math.floor(Math.random() * 256);
    colorValues[index] = colorValue;
  }
  const color = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
  return color;
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
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
  event.target.style.fontSize = '2.5rem';
}

function zoomOutDay(event) {
  event.target.style.fontSize = '20px';
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
  const customTask = completeElementBuilder('div', undefined, myTaks, ['task']);
  customTask.style.backgroundColor = color;
  customTask.addEventListener('click', selectTask);
}

completeElementBuilder('span', 'cozinhar', myTaks);
addTaskDiv('red');
completeElementBuilder('span', 'programar', myTaks);
addTaskDiv('green');

const customTasks = document.getElementsByClassName('task');

function selectTask(event) {
  const clickedTask = event.target;
  const isNotSelectedTask = !clickedTask.classList.contains('task-selected');
  clickedTask.classList.toggle('task-selected', isNotSelectedTask);
  for (const task of customTasks) {
    if (task !== clickedTask) task.classList.remove('task-selected');
  }
}

function taskDay(event) {
  let selectedTaskColor = '';
  const clickedDay = event.target;
  const defaultColor = 'rgb(238,238,238)';
  const selectedTask = document.querySelector('.task-selected');
  if (selectedTask) selectedTaskColor = selectedTask.style.backgroundColor;
  const currentColor = clickedDay.style.backgroundColor;
  const sameColors = selectedTaskColor === currentColor;
  if (sameColors) clickedDay.style.backgroundColor = defaultColor;
  else clickedDay.style.backgroundColor = selectedTaskColor;
}

const taskInput = document.getElementById('task-input');

const buttonAdd = document.getElementById('btn-add');

function addTask() {
  const taskName = taskInput.value;
  if (taskName.length === 0) return alert('Campo vazio');
  completeElementBuilder('span', taskName, myTaks);
  const randomColor = generateRandomColor();
  addTaskDiv(randomColor);
  taskInput.value = '';
}

function addTaskByEnter(event) {
  if (event.keyCode === 13) addTask();
}

buttonAdd.addEventListener('click', addTask);
taskInput.addEventListener('keydown', addTaskByEnter);
