/* Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. */
function countRepetitionOfElements(elementsArray) {
  const elementsCount = {};
  for (const element of elementsArray) {
    if (!elementsCount[element]) {
      elementsCount[element] = 0;
    }
    elementsCount[element] += 1;
  }
  return elementsCount;
}



function romanToDecimal(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return 'Wrong type';
  }
  if (romanNumeral.length === 0) {
    return "Empty string";
  }
  const romanRepresentation = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (romanNumeral.length === 1) {
    return romanRepresentation[romanNumeral] || 'Invalid or out of reach numeral';
  }
  for (const char of romanNumeral) {
    const isInvalidChar = !romanRepresentation[char];
    if (isInvalidChar) {
      return 'Invalid or out of reach numeral';
    }
  }
  const romanNumeralArray = romanNumeral.split('');
  const romanMultipleOfFive = romanNumeralArray.filter(char => ['V', 'L', 'D'].includes(char))
  const charRepetitionCount = countRepetitionOfElements(romanNumeralArray);
  const charRepetitionOfMultipleOfFive = countRepetitionOfElements(romanMultipleOfFive);
  const haveManyMultipleOfFive = Object.values(charRepetitionOfMultipleOfFive).some((number) => number > 1);
  const haveManyRepeatedChars = Object.values(charRepetitionCount).some((number) => number > 3);
  if (haveManyRepeatedChars || haveManyMultipleOfFive) {
    return 'Invalid numeral';
  }
  const romanToDecimalArray = []
  for (const char of romanNumeralArray) {
    romanToDecimalArray.push(romanRepresentation[char])
  }
  let decimalNumeral = 0
  for (let index = 0; index < romanToDecimalArray.length; index += 1) {
    const currentDecimalNumber = romanToDecimalArray[index];
    const nextDecimalNumber = romanToDecimalArray[index + 1]
    if (currentDecimalNumber < nextDecimalNumber) {
      decimalNumeral -= currentDecimalNumber
    } else {
      decimalNumeral += currentDecimalNumber
    }
  }
  return decimalNumeral;
}
console.log(romanToDecimal('CMXCIX'));

const vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10]
];
function arrayOfNumbers(vector) {
  const evenNumbers = [];
  const flatenedVector = vector.flat();
  for (const number of flatenedVector) {
    if (number % 2 === 0) {
      const evenNumber = number;
      evenNumbers.push(evenNumber);
    }
  }
  return evenNumbers;
}
const evenNumbers = arrayOfNumbers(vector);
console.log(evenNumbers);

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
function getRepetitionString(countedElementsObject) {
  let repetitionString = 'Sua cesta possui:';
  for (const fruit in countedElementsObject) {
    const countFruitString = ` ${countedElementsObject[fruit]} ${fruit}s,`;
    repetitionString += countFruitString;
  }
  return repetitionString.slice(0,-1)
}
const basketCountedObject = countRepetitionOfElements(basket);
const repetitionString = getRepetitionString(basketCountedObject);
console.log(repetitionString);

const moradores = {
  blocoUm: [{
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [{
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
const {
  nome,
  sobrenome,
  andar,
  apartamento,
} = moradores.blocoDois[1];
const zoeyInfo = `O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}° andar, apartamento ${apartamento}`;
console.log(zoeyInfo);

function getResidentFullNames(block) {
  const fullNames = [];
  for (const residentInfo of block) {
    const {
      nome,
      sobrenome,
    } = residentInfo;
    const fullName = `${nome} ${sobrenome}`;
    fullNames.push(fullName);
  }
  return fullNames;
}
const {
  blocoUm,
  blocoDois
} = moradores;
const blockOneFullNames = getResidentFullNames(blocoUm);
const blockTwoFullNames = getResidentFullNames(blocoDois);
function printFullNames(fullNamesList) {
  for (const fullName of fullNamesList) {
    console.log(fullName);
  }
}
printFullNames(blockOneFullNames);
printFullNames(blockTwoFullNames);