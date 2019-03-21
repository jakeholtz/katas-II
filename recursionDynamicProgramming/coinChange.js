/*
* Create a function that takes n (number of cents) and 
  determines how many ways change be made using pennies,
  nickels, dimes, quarters, half dollars or dollar coins.
*/

/* 1 - Optimized solution, all combos */
function findChangePossibilities(n, index = 0, total = 0, coins = [1, 5, 10, 25, 50, 100]) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    for (var i = index; i < coins.length; i++) {
      total += findChangePossibilities(n -  coins[i], i);
    }
  }
  return total;
}
