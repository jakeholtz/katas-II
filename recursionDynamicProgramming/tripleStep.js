// A child going up a staircase with n steps, can hop up 1, 2, or 3 steps at a time.
// Implement a method to count how many ways the child can run up the stairs


/* IMPLEMENTATION ONE: Fibonacci-like implemetation — [Time Complexity: O(3^N)] — Lines 9 */
function countWays(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

// IMPLEMENTATION TWO - Fibonacci-like implemetation, memoized — [Time Complexity: O(N)] — Lines 9 */
function countWays(n, cache = {}) {

  if (n < 0) return 0;
  if (n === 0) return 1;
  if (n > 0) {
    if (cache[n - 1] === undefined) cache[n - 1] = countWays(n - 1, cache);
    if (cache[n - 2] === undefined) cache[n - 2] = countWays(n - 2, cache);
    if (cache[n - 3] === undefined) cache[n - 3] = countWays(n - 3, cache);
    return cache[n - 1] + cache[n - 2] + cache[n - 3];
  }
}

// IMPLEMENTATION THREE - Using a recursive loop, with closure — [Time Complexity: O(3^N)] — Lines 12  */
function countWays(n) {
  var sum = 0;

  (function recurse(remaining) {
    if (remaining === 0) sum++;
    if (remaining > 0) {
      for (var i = 1; i <= 3; i++) {
        recurse(remaining - i);
      }
    }
  })(n, []);

  return sum;
}

// IMPLEMENTATION FOUR - Using a recursive loop, one function — [Time Complexity: O(3^N)] — Lines 11  */
function countWays(n) {
  var [remaining, sum = 0] = arguments;

  if (remaining < 0) return 0;
  if (remaining === 0) return 1;
  if (remaining > 0) {
    for (var i = 1; i <= 3; i++) {
      sum += countWays(remaining - i, 0); /* recurse with sum = 0 to prevent adding sums to sums */
    }
    return sum;
  }
}