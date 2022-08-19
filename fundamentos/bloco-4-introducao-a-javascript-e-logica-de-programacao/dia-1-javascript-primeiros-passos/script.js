function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function maxDeDois(a, b) {
  return a > b ? a : b;
}

function maxDeTres(a, b, c) {
  return a > b && a > c ? a : b > c ? b : c;
}

function isTrue(bool) {
  return bool === true ? "positive" : bool === false ? "negative" : "zero";
}

function isNumber(num) {
  return !((typeof num !== 'number') || isNaN(num));
}

function isPositive(num) {
  return num > 0;
}

function isPositiveNumber(num) {
  return isNumber(num) && isPositive(num);
}

function isTriangle(a, b, c) {
  let error = '';
  function evaluateAngles(acc, curr, i, arr) {
    error = !isNumber(curr) ? 'Por favor digite um número válido'
    : !isPositive(curr) ? 'Por favor digite um número positivo' : '';
    error && arr.splice(1) // encerra mais cedo
    return acc + curr;
  }
  const sumAngles = [a, b, c].reduce(evaluateAngles, 1) - 1;
  const result = sumAngles === 180 ? true : false;
  return error || result;
}

function anyOdd(a, b, c) {
  return [a, b, c].some(num => num % 2 === 1);
}

function anyEven(a, b, c) {
  return [a, b, c].some(num => num % 2 === 0);
}

function calcProfit(cost, saleValue) {
  if (![cost, saleValue].every(isPositiveNumber)) {
    return 'Valor inválido ou negativo';
  }
  const totalCost = cost + cost * 0.2;
  const result = saleValue - totalCost;
  const word = (result < 0) ? 'loss' : 'profit'; 
  return `You have a ${word} of ${result}`;
}