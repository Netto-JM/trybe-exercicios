let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let max = numbers[0];
let min = numbers[0];
let oddAmount = 0
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  console.log(number);
  sum += numbers[index];
  max = numbers[index] > max ? numbers[index] : max;
  min = numbers[index] < min ? numbers[index] : min;
  oddAmount += numbers[index] % 2 == 1 ? 1 : 0;
}
console.log(sum);
const average = sum/numbers.length
console.log(average);
if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}
console.log(max);
console.log(min);
console.log(oddAmount);

const array = []
for (let index = 1; index <= 25; index++) {
  array.push(index);
  console.log(index/2);
}

console.log(array);
