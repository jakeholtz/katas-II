// create a function that determines the nth fibonacci number

/* IMPLEMENTATION 1 - ITERATION (WHILE LOOP) ---------------------------------
  Time Complexity: O(n)
*/

function fibonacci(n) {
  var nums = [0, 1]
  while (n > 1) {
    nums.push(nums.shift(n--) + nums[0]);
  }
  return nums[n];
}

/* IMPLEMENTATION 2 - ITERATION (FOR LOOP) ---------------------------------
  Time Complexity: O(n)
*/

function fibonacci(n) {
  var nums = [0, 1];
  for (var i = n; i > 1; i--) {
    nums.push(nums.shift(n--) + nums[0]);
  }
  return nums[n];
}

/* IMPLEMENTATION 3 - SIMPLE RECURSION ---------------------------------
  Time Complexity: O(2^n)
*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

/* IMPLEMENTATION 4 - RECURSION (MEMOIZED) ---------------------------------
  Time Complexity: O(n)
*/

function fibonacci(n) {
  return (function memoize(i, nums) {
    if (i === 0 || i === 1) return i;
    if (!nums[i]) {
      nums[i] = memoize(i - 1, nums) + memoize(i - 2, nums);
    }
    return nums[i]
  })(n, []);
}

function memoize(n) {
  return fibonacci(n, n + 1);
}