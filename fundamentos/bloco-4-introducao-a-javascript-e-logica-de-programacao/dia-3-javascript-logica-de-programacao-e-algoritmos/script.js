function isNumber(number) {
  return !((typeof number !== 'number') || isNaN(number));
}

function factorial(number) {
  if (!isNumber(number)) return 'Por favor, digite um número válido';
  if (number < 0) return 'Por favor, digite um número maior ou igual a 0';
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}