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
  return num => 0;
}

console.log(isPositive(2));

function isTriangle(a, b, c) {
  let error = '';
  function evaluateAngles(acc, curr, i, arr) {
    error = (typeof curr !== 'number') || isNaN(curr) ? 'Por favor digite um número válido' 
    : curr <= 0 ? 'Por favor digite um número positivo' : '';
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
  
  const totalCost = cost + cost * 0.2;
  console.log(totalCost);
  profit = saleValue - totalCost;
  return profit;
}

console.log(calcProfit(10, 20));