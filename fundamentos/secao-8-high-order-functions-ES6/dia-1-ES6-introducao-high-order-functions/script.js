const newEmployees = (callback1, callback2) => {
  const employees = {
    id1: callback1('Pedro Guerra', callback2),
    id2: callback1('Luiza Drumond', callback2),
    id3: callback1('Carla Paiva', callback2),
  }
  return employees;
};

function createPerson(name, callback) {
  const person = {
    nomeCompleto: name,
    email: callback(name),
  }
  return person;
}

function generateEmail(name) {
  const formatedName = name.replace(' ', '_').toLowerCase()
  const email = `${formatedName}@trybe.com`
  return email;
}

const employyList = newEmployees(createPerson, generateEmail)

console.log(employyList);


function checkLottery(bettingNumber, callback) {
  const winningNumber = Math.floor(Math.random() * 5 + 1)
  if (callback(bettingNumber, winningNumber)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

function isWinner(bettingNumber, winningNumber) {
  return bettingNumber === winningNumber;
}

const myBet = 3;

console.log(checkLottery(myBet, isWinner));