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


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkAnswers(rightAnswers, studentAnswers, callback) {
  const studentScore = callback(rightAnswers, studentAnswers);
  return studentScore;
}

function getScore(rightAnswers, studentAnswers) {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (studentAnswers[index] === 'N.A') continue;
    score += (rightAnswers[index] === studentAnswers[index]) ? 1 : -0.5;
  }
  return score;
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, getScore));


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  mage,
  warrior,
  dragon,
};

function getDamage(minDamage, remainingDamage) {
  return minDamage + Math.floor(Math.random() * remainingDamage) + 1;
}

function dragonDamage(dragon) {
  const minDamage = 15;
  const remainingDamage = dragon.strength - minDamage;
  const totalDamage = getDamage(minDamage, remainingDamage);
  return totalDamage;
}

function warriorDamage(warrior) {
  const minDamage = warrior.strength;
  const remainingDamage = minDamage * warrior.weaponDmg - minDamage;
  const totalDamage = getDamage(minDamage, remainingDamage);
  return totalDamage;
}

function mageDamage(mage) {
  if (mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      spentMana: 0,
    };
  }
  const minDamage = mage.intelligence;
  const remainingDamage = minDamage * 2 - minDamage;
  const totalDamage = getDamage(minDamage, remainingDamage);
  return {
    damage: totalDamage,
    spentMana: 15,
  };
}
