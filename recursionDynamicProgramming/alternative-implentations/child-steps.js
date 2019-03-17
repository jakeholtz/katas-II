/* child steps */
// 1, 2, or 3 steps

/*

EXAMPLES

so 1 = ([1]) => 1;
so 2 = ([1 + 1], [2]) => 2;
so 3 = ([1 + 1 + 1], [2 + 1], [1 + 2, 3]) => 4;
so 4 = ([1 + 1 + 1 + 1], [1 + 1 + 2], [1 + 2 + 1], [1 + 3], [2, 1, 1], [2, 2], [3, 1]) => 7;


*/

function childSteps(n){

  /* destructure variables used in recursion to prevent confusion */
  let [ remaining, sum = 0, current = [], results = [] ] = arguments;

  /* if child has completed the staircase, add to all results */
  if (remaining === 0) {
    results.push(current);
  } else if (remaining > 0) {
     /* if child has steps remaining */ 
    for (var i = 1; i <= 3; i++) {
      childSteps(remaining - i, sum + i, current.concat([i]), results);
    }
  }
  return results;
}
