function matrixZeros(mtrx) {
  var height = mtrx.length;
  var width = mtrx[0].length;
  var zeros = {columns: [], rows: []}
  for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
      if (mtrx[r][c] === 0) {
        zeros.columns[c] = zeros.rows[r] = true;
      }
    }
  }
  debugger;
  var newMatrix = new Array(height);
  for (var i = 0; i < height; i++) {
    if (zeros.rows[i]) {
      newMatrix[i] = new Array(width).fill(0);
    } else {
      newMatrix[i] = new Array(width).fill(1);
      for (var j = 0; j < width; j++) {
        if (zeros.columns[j]) {
          newMatrix[i][j] = 0;
        }
      }
    }
  }
return newMatrix;
}


var matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]


// var result = [
//   [1, 1, 1, 0],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 1, 1, 0],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 0, 1],
// ]

matrixZeros(matrix);
