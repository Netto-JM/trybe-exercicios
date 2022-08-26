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