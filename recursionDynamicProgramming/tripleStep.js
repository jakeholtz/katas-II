// A child going up a staircase with n steps, can hop up 1, 2, or 3 steps at a time.
// Implement a method to count how many ways the child can run up the stairs


// IMPLEMENTATION ONE - seperate recursive function
function climbStairs(n) {
  var options = [1, 2, 3];
  var count = 0;
  return (function recurse(sum, index) {
    if (sum === n) {
      return ++count;
    } else if (sum > n) {
      return;
    } else {
      for (var i = index; i < options.length; i++) {
        recurse(sum + options[i], i);
      }
      return count;
    }
  })(0, 0);
}

// IMPLEMENTATION TWO - no separate function
function climbStairs(n, sum = 0, index = 0, options = [1, 2, 3]) {
  var count = 0;
  if (sum === n) {
    return 1;
  } else if (sum > n) {
    return 0;
  } else {
    for (var i = index; i < options.length; i++) {
      count += climbStairs(n, sum + options[i], i, options);
    }
    return count;
  }
}