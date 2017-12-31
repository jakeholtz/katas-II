/*
 * Write a recursive function to multiply two positive integers without
 * using the * operator(or / operator). You can use addition, subtraction, and
 * bit shifting, but you should minimize the number of those operations.
 */


function recursiveMultiply(a, b, total = 0) {
  if (a && b) {
    return recursiveMultiply(a, b - 1, total += a);
  }
  return total;
}