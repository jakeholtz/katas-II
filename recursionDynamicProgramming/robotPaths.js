/*
* 8.2 Imagine a robot sitting on the upper left hand corner of an NxN
* grid. The robot can only move in two directions: right and down. How
* many possible paths are there for the robot? FOLLOW UP Imagine
* certain squares are “off limits”, such that the robot can not step on
* them. Design an algorithm to get all possible paths for the robot.
*/


// PSEUDOCODE
// I (INPUT)--------- n (dimension of board)
// O (OUTPUT) ------- count (number of ways robot can move starting with left top [0, 0]);
// C (CONSTRAINTS) -- robot can only move RIGHT and DOWN
// E (EXAMPLE) ------ null

function robotPaths(n) {
  // create count variable
  var count = 0;
  // make current piece visited
  // call recursive function first that goes RIGHT -- add 1 to count
  // call recursive function second that goes DOWN -- add 1 to count
  // make current piece unvisited
  return count;
}


// 1) BOARD CLASS
var Board = function(n) {
  this.board = [];
  for (var i = 0; i < n; i++) {
    var line = [];
    for (var j = 0; j < n; j++) {
      line.push(false)
    }
    this.board.push(line);
  }

  this.toggle = function(i, j) {
    this.board[i][j] = !this.board[i][j];
  };

  this.wasVisited = function(i, j) {
    return this.board[i][j];
  };

  this.exists = function(i, j) {
    var end = this.board.length - 1;
    return (i >= 0 && j >= 0 && i <= end && j <= end);
  };
}


// IMPLEMENTATION ONE - Function with separate recursive function
function robotPaths(n) {
  var board = new Board(n);
  var count = 0;
  return (function recurse(board, r, c) {
    board.toggle(r, c);
    ++count;
    if (board.exists(r, c + 1) && !board.wasVisited(r, c + 1)) recurse(board, r, c + 1); // go right
    if (board.exists(r + 1, c) && !board.wasVisited(r + 1, c)) recurse(board, r + 1, c); // go down
    board.toggle(r, c);
    return count;
  })(board, 0, 0);
}

// IMPLEMENTATION TWO - Primary recursive function
function robotPaths(n, b = new Board(n), r = 0, c = 0) {
  var count = 0
  board.toggle(r, c);
  if (board.exists(r, c + 1) && !board.wasVisited(r, c + 1)) count += robotPaths(n, board, r, c + 1); // go right
  if (board.exists(r + 1, c) && !board.wasVisited(r + 1, c)) count += robotPaths(n, board, r + 1, c); // go down
  board.toggle(r, c);
  return ++count;
}