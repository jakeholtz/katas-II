// [B, C, D, E, J]      [A, B, C, D, E]    LAYERS:    [0, 0, 0, 0, 0]    MOVEWARD:    [→, →, →, →, ↓]
// [A, H, I, N, O]  ->  [F, G, H, I, J]               [0, 1, 1, 1, 0]                 [↑, →, →, ↓, ↓]
// [F, G, M, S, T]      [K, L, M, N, O]               [0, 1, 2, 1, 0]                 [↑, →, ., ↓, ↓]
// [K, L, Q, R, Y]      [P, Q, R, S, T]               [0, 1, 1, 1, 0]                 [↑, ↑, ←, ←, ↓]
// [P, U, V, W, X]      [U, V, W, X, Y]               [0, 0, 0, 0, 0]                 [↑, ←, ←, ←, ←]
←↑→↓
// CHANGE (BY ROW)
// [0,0] -> [0,1]    [1,0] -> [0,0]    [2,0] -> [1,0]    [3,0] -> [2,0]    [4,0] -> [3,0]
// [0,1] -> [0,2]    [1,1] -> [1,2]    [2,1] -> [1,1]    [3,1] -> [2,1]    [4,1] -> [4,0]
// [0,2] -> [0,3]    [1,2] -> [1,3]    [2,2] -> [2,2]    [3,2] -> [3,1]    [4,2] -> [4,1]
// [0,3] -> [0,4]    [1,3] -> [2,3]    [2,3] -> [3,3]    [3,3] -> [3,2]    [4,3] -> [4,2]
// [0,4] -> [1,4]    [1,4] -> [2,4]    [2,4] -> [3,4]    [3,4] -> [4,4]    [4,4] -> [4,3]

// FIRST LAYER:                // SECOND LAYER:             // THIRD LAYER:

// [00, 01, 02, 03, 04]        [  ,   ,   ,   ,   ]         [  ,   ,   ,   ,   ]
// [10,   ,   ,   , 14]        [  , 11, 12, 13,   ]         [  ,   ,   ,   ,   ]
// [20,   ,   ,   , 24]        [  , 21,   , 23,   ]         [  ,   , 22,   ,   ]
// [30,   ,   ,   , 34]        [  , 31, 32, 33,   ]         [  ,   ,   ,   ,   ]
// [40, 41, 42, 43, 44]        [  ,   ,   ,   ,   ]         [  ,   ,   ,   ,   ]

// if max is 0 or 4            // if max is 1 or 3          // if max is 2




// determine layer
// determine layer max and min
// rotate according to max and min
  // if normal ... follow first rule
  // else follow second rule



var matrix = [
  ['B', 'C', 'D', 'E', 'J'],
  ['A', 'H', 'I', 'N', 'O'],
  ['F', 'G', 'M', 'S', 'T'],
  ['K', 'L', 'Q', 'R', 'Y'],
  ['P', 'U', 'V', 'W', 'X'],
]


(function internalRotate(matr) {
  var limits = [0, matr.length - 1];
  var newMatr = new Array(matr.length).fill(0).map((a) => []);
  var r = c = dirIndex = 0;
  var dir = ['right', 'down', 'left', 'up'];
  for (var i = 0; i < 24; i++) {
    if (dir[dirIndex] === "right") {
      newMatr[r][c + 1] = matr[r][c++];
      if(c === limits[1]) dirIndex++
    } else if (dir[dirIndex] === "down") {
      newMatr[r + 1][c] = matr[r++][c];
      if(r === limits[1]) dirIndex++
    } else if (dir[dirIndex] === "left") {
      newMatr[r][c - 1] = matr[r][c--];
      if(c === limits[0]) dirIndex++
    } else if (dir[dirIndex] === "up") {
      newMatr[r - 1][c] = matr[r--][c];
      if(r === limits[0]) {
        limits = [++limits[0], --limits[1]]
        c = r = 1 + r
        if (limits[0] === limits[1]) {
          newMatr[r][c] = matr[r][c];
        } else {
          dirIndex = 0;
        }
      }
    }
  }
  return newMatr;
})([
  ['B', 'C', 'D', 'E', 'J'],
  ['A', 'H', 'I', 'N', 'O'],
  ['F', 'G', 'M', 'S', 'T'],
  ['K', 'L', 'Q', 'R', 'Y'],
  ['P', 'U', 'V', 'W', 'X'],
//