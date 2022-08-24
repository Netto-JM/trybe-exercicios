function isNumber(number) {
  return !((typeof number !== 'number') || isNaN(number));
}

function isPositive(number) {
  return number > 0;
}

function isPositiveNumber(number) {
  return isNumber(number) && isPositive(number);
}

function isOdd(number) {
  return number % 2 === 1;
}

function isValidPyramidBase(number) {
  return isPositiveNumber(number) && isOdd(number);
}

function addNewLineAtTheEnd(string) {
  return string + '\r\n';
}

function drawRectangleAsterisks(stopper) {
  let row = '';
  for (let index = 0; index < stopper; index += 1) {
    row += '*';
  }
  return row;
}

function countAsterisks(row) {
  return (row.split("*").length - 1);
}

function isPyramidBase(row, base) {
  const asterisksAmount = countAsterisks(row);
  return asterisksAmount === base;
}

function isPyramidTop(row) {
  return row.indexOf('*') === row.lastIndexOf('*');
}


function drawRectangle(number) {
  const errorMessage = "Invalid number, please enter a positive number";
  if (!isPositiveNumber(number)) return errorMessage;
  let rectangle = '';
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = drawRectangleAsterisks(number);
    row = addNewLineAtTheEnd(row);
    rectangle += row;
  }
  console.log(rectangle);
}

drawRectangle(5);



function drawPyramidAsterisks(base, stopper) {
  let row = '';
  for (let index = base; index >= stopper; index -= 1) {
    row += '*';
  }
  return row;
}

function drawSpacesAroundAsterisks(row, base) {
  const numberOfSpaces = base - row.length;
  for (let index = 0; index < numberOfSpaces; index += 1) {
    if (index % 2 === 0) row += ' ';
    else row = ' ' + row;
  }
  return row;
}

function makeHollow(row, base) {
  if (isPyramidBase(row, base) || isPyramidTop(row)) return row;
  let rowTest = row
  //logic goes here
  console.log(row);
  return row;
}

makeHollow(' ***** ', 7);

function drawPyramidRow(base, stopper) {
  let pyramidRow = drawPyramidAsterisks(base, stopper);
  pyramidRow = drawSpacesAroundAsterisks(pyramidRow, base);
  return pyramidRow;
}

function drawPyramid(number, isHollow) {
  const errorMessage = "Invalid base, please enter a positive odd number";
  if (!isValidPyramidBase(number)) return errorMessage;
  let pyramid = '';
  for (let outerIndex = 0; outerIndex < number; outerIndex += 2) {
    let row = drawPyramidRow(number, number - outerIndex);
    if (isHollow) row = makeHollow(row, number);
    row = addNewLineAtTheEnd(row);
    pyramid += row;
    console.log(outerIndex);
    console.log(row.length);
  }
  console.log(pyramid);
}

drawPyramid(5, false);

drawPyramid(7, true);



function drawTriangleRectangleLeft(number) {
  const errorMessage = "Invalid number, please enter a positive number";
  if (!isPositiveNumber(number)) return errorMessage;
  let triangle = '';
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = drawPyramidAsterisks(number, number - outerIndex);
    row = addNewLineAtTheEnd(row);
    triangle += row;
  }
  console.log(triangle);
}

drawTriangleRectangleLeft(5)


function drawTriangleRectangleRight(number) {
  const errorMessage = "Invalid number, please enter a positive number";
  if (!isPositiveNumber(number)) return errorMessage;
  let triangle = '';
  let spacesToPrint = 4;
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = ''
    let spacesCounter = spacesToPrint;
    for (let innerIndex = 0; innerIndex < number; innerIndex += 1) {
      if (spacesCounter > 0) {
        row += ' ';
        spacesCounter -= 1;
        continue;
      }
      row += '*';
    }
    spacesToPrint -= 1;
    row = addNewLineAtTheEnd(row);
    triangle += row;
  }
  console.log(triangle);
}

drawTriangleRectangleRight(5);





function drawTriangleRectangleLeftUpsideDown(number) {
  const errorMessage = "Invalid number, please enter a positive number";
  if (!isPositiveNumber(number)) return errorMessage;
  let triangle = '';
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = '';
    for (let innerIndex = 1; innerIndex <= number - outerIndex; innerIndex += 1) {
      row += '*';
    }
    row = addNewLineAtTheEnd(row);
    triangle += row;
  }
  console.log(triangle);
}

drawTriangleRectangleLeftUpsideDown(5);
