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

console.log(reverseWordPracticalWay('banana'));

function reverseWordVerboseWay(word) {
  let reversedWord = ''
  for (let index = word.length-1; index >= 0; index--) {
    reversedWord += word[index];
  }
  return reversedWord;
}

console.log(reverseWordVerboseWay('abacaxi'));

let array = ['java', 'javascript', 'python', 'html', 'css'];

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

console.log(findBiggestWord(array));

console.log(findSmallestWord(array));