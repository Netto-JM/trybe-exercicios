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
const basketCountedObject = countRepetitionOfElements(basket)
console.log(basketCountedObject);

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