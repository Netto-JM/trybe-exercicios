function isNumber(number) {
  return !((typeof number !== 'number') || isNaN(number));
}

function factorial(number) {
  if (!isNumber(number)) return 'Por favor, digite um número válido';
  if (number < 0) return 'Por favor, digite um número maior ou igual a 0';
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(10));


function reverseWordPracticalWay(word) {
  const reversedWord = word.split('').reverse().join('');
  return reversedWord;
}

function reverseWordVerboseWay(word) {
  let reversedWord = ''
  for (let index = word.length-1; index >= 0; index--) {
    reversedWord += word[index];
  }
  return reversedWord;
}

console.log(reverseWordPracticalWay('banana'));

console.log(reverseWordVerboseWay('abacaxi'));


function findBiggestWord(wordsList) {
  let biggestWord = '';
  for (let index = 0; index < wordsList.length; index++) {
    if (wordsList[index].length > biggestWord.length) {
      biggestWord = wordsList[index]
    }
  }
  return biggestWord;
}

function findSmallestWord(wordsList) {
  let smallestWord = wordsList[0];
  for (let index = 0; index < wordsList.length; index++) {
    if (wordsList[index].length < smallestWord.length) {
      smallestWord = wordsList[index]
    }
  }
  return smallestWord;
}

let array = ['java', 'javascript', 'python', 'html', 'css'];

console.log(findBiggestWord(array));

console.log(findSmallestWord(array));


function isPrime(number, initialNumber=number) {
  if (number === 2) return true;
  return initialNumber % (number - 1) === 0 ? false : isPrime(number - 1, initialNumber)
}

function theBiggestPrime(number) {
  if (!isNumber(number)) return 'Por favor, digite um número válido';
  if (number < 2) return 'Por favor, digite um número maior ou igual a 2';
  let biggestPrime = 2;
  for (let index = 2; index <= number; index++) {
    biggestPrime = isPrime(index) ? index : biggestPrime;
  }
  return biggestPrime;
}

console.log(theBiggestPrime(50));