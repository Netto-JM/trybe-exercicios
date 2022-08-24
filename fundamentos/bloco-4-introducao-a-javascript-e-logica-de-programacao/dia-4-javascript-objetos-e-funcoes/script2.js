function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('');
  return (word === reversedWord)
}

function findMaxNumber(arrayOfNumbers) {
  return Math.max(...arrayOfNumbers)
}

console.log(findMaxNumber([6,2,4,7,1]));