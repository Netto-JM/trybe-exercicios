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