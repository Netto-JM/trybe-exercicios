function drawRectangle(number) {
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = ''
    for (let innerIndex = 0; innerIndex < number; innerIndex += 1) {
      row += '*'
    }
    console.log(row);
  }
}

drawRectangle(5)


function drawPiramidAsterisks(index, stopper) {
  let row = '';
  for (; index >= stopper; index -= 1) {
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
  return row
}

function isPiramidTop(row) {
  if (row.indexOf('*') === -1) return 'Invalid row';
  return row.indexOf('*') === row.lastIndexOf('*')
}

function drawPiramid(number) {
  for (let outerIndex = 0; outerIndex < number; outerIndex += 2) {
    let row = drawPiramidAsterisks(number, number - outerIndex);
    row = drawSpacesAroundAsterisks(row, number)
    console.log(outerIndex);
    console.log(row);
    console.log(row.length);
  }
}

drawPiramid(5)


function drawTriangleRectangleLeft(number) {
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = drawPiramidAsterisks(number, number - outerIndex);
    console.log(row);
  }
}

drawTriangleRectangleLeft(5)


function drawTriangleRectangleRight(number) {
  let spacesToPrint = 4;
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = ''
    let spacesCounter = spacesToPrint;
    for (let innerIndex = 0; innerIndex < number; innerIndex += 1) {
      if (spacesCounter > 0) {
        row += ' '
        spacesCounter -= 1
        continue
      }
      row += '*'
    }
    spacesToPrint -= 1
    console.log(row);
  }
}

drawTriangleRectangleRight(5)


function drawHollowPiramid(number) {
  //code here
}


/* 
function drawTriangleRectangleLeftUpsideDown(number) {
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = ''
    for (let innerIndex = 1; innerIndex <= number - outerIndex; innerIndex += 1) {
      row += '*'
    }
    console.log(row);
  }
}

drawTriangleRectangleLeftUpsideDown(5) */