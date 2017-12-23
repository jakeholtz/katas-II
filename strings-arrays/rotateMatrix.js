/*
Given a square matrix (an array of arrays), create a
function that rotates the matrix 90 degrees to the right
*/

// SQUARE MATRIX
function rotateNinetyDegressRight(matrix) {
  var size = matrix.length;
  var output = new Array(size).fill(0).map((a) => new Array());
  for (var r = 0; r < size; r++) {
    for (var c = 0; c < size; c++) {
      output[c][size - 1 - r] = matrix[r][c];
    }
  }
  return output;
}

// RECTANGULAR MATRIX
function rotateNinetyDegressRight(matrix) {
  var height = matrix.length;
  var width = matrix[0].length;
  var output = new Array(width).fill(0).map((a) => new Array());
  for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
      output[width - 1 - c][r] = matrix[r][c];
    }
  }
  return output;
}
