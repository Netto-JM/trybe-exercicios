function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return (word === reversedWord)
}

console.log(isPalindrome('arara'));

console.log(isPalindrome('carro'));


function findMaxNumberIndex(arrayOfNumbers) {
  const maxNumber = Math.max(...arrayOfNumbers);
  const maxNumberIndex = arrayOfNumbers.indexOf(maxNumber);
  return maxNumberIndex;
}

console.log(findMaxNumberIndex([6,2,4,7,3]));

function findMinNumberIndex(numbersArray) {
  const minNumber = Math.min(...numbersArray);
  const minNumberIndex = numbersArray.indexOf(minNumber);
  return minNumberIndex;
}

console.log(findMinNumberIndex([6, 2, 4, 7, 3]));


function findLongestWord(wordsArray) {
  let longestWord = '';
  for (let index = 0; index < wordsArray.length; index++) {
    if (wordsArray[index].length > longestWord.length) {
      longestWord = wordsArray[index];
    }
  }
  return longestWord;
}

console.log(findLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


function countRepetitionOfNumbers(numbersArray) {
  const numbersCount = {};
  for (const number of numbersArray) {
    if (!numbersCount[number]) {
      numbersCount[number] = 0
    }
    numbersCount[number] += 1
  }
  return numbersCount;
}

function findMostRepeatedNumber(numbersArray) {
  const numbersCount = countRepetitionOfNumbers(numbersArray);
  let mostRepeatedNumber = 0;
  let repetitionCounter = 0;
  for (const key in numbersCount) {
    if (numbersCount[key] > repetitionCounter) {
      mostRepeatedNumber = key;
      repetitionCounter = numbersCount[key]
    }
  }
  return mostRepeatedNumber;
}

console.log(findMostRepeatedNumber([2, 3, 2, 5, 8, 2, 3]));


function calcSummation(number) {
  return number * number / 2 + (number / 2);
}

console.log(calcSummation(13));