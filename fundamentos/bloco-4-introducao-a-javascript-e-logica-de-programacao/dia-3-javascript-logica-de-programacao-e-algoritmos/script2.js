function drawRectangle(number) {
  for (let i = 0; i < number; i++) {
    let row = ''
    for (let j = 0; j < number; j++) {
      row += '*'
    }
    console.log(row);
  }
}

drawRectangle(5)

function drawTriangleRectangleLeft(number) {
  for (let i = 0; i < number; i++) {
    let row = ''
    for (let j = number; j >= number - i; j--) {
      row += '*'
    }
    console.log(row);
  }
}

drawTriangleRectangleLeft(5)

function drawTriangleRectangleRight(number) {
  //code here
}

function drawPiramid(number) {
  //code here
}

function drawHollowPiramid(number) {
  //code here
}