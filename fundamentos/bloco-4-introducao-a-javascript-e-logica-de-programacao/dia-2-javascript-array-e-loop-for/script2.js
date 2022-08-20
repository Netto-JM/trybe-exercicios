const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const ascendingNumbers = [...numbers]
const descendingNumbers = [...numbers]

for (let index = 1; index < ascendingNumbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (ascendingNumbers[index] < ascendingNumbers[secondIndex]) {
      let position = ascendingNumbers[index];
      ascendingNumbers[index] = ascendingNumbers[secondIndex];
      ascendingNumbers[secondIndex] = position;
    }
  }
}

for (let index = 1; index < descendingNumbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (descendingNumbers[index] > descendingNumbers[secondIndex]) {
      let position = descendingNumbers[index];
      descendingNumbers[index] = descendingNumbers[secondIndex];
      descendingNumbers[secondIndex] = position;
    }
  }
}

console.log(ascendingNumbers);
console.log(descendingNumbers);