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