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

function isTriangle(a, b, c) {
  let error = '';
  function evaluateAngles(acc, curr, i, arr) {
    // debugging start
    console.log(acc);
    console.log(curr);
    console.log((typeof curr !== 'number'));
    console.log(isNaN(curr));
    console.log(curr <= 0);
    // debugging end
    error = (typeof curr !== 'number') || isNaN(curr) ? 'Por favor digite um número válido' 
    : curr <= 0 ? 'Por favor digite um número positivo' : '';
    error && arr.splice(1) // eject early
    return acc + curr;
  }
  const sumAngles = [a, b, c].reduce(evaluateAngles, 1) - 1;
  const result = sumAngles === 180 ? true : false;
  console.log(error);
  return error || result;
}

console.log(isTriangle(12, 2, 166));