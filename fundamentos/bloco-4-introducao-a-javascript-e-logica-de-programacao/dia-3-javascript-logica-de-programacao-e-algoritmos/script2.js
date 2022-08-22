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


function drawTriangleRectangleLeft(number) {
  for (let outerIndex = 0; outerIndex < number; outerIndex += 1) {
    let row = ''
    for (let innerIndex = number; innerIndex >= number - outerIndex; innerIndex -= 1) {
      row += '*'
    }
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


function drawPiramid(number) {
  //code here
}


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