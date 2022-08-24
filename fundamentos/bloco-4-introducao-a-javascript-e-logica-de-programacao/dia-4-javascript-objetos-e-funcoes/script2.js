function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('');
  return (word === reversedWord)
}

function findMaxNumberIndex(arrayOfNumbers) {
  const maxNumber = Math.max(...arrayOfNumbers);
  const maxNumberIndex = arrayOfNumbers.indexOf(maxNumber);
  return maxNumberIndex;
}

console.log(findMaxNumberIndex([6,2,4,7,3]));

function findMinNumberIndex(arrayOfNumbers) {
  const minNumber = Math.min(...arrayOfNumbers);
  const minNumberIndex = arrayOfNumbers.indexOf(minNumber);
  return minNumberIndex;
}

console.log(findMinNumberIndex([6, 2, 4, 7, 3]));