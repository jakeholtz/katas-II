/*
* 8.3 Magic Index: A magic index in an array A[0...n-1] is
* defined to be an index such that A[i] = i. Given a sorted
* array of distinct integers, write a method to find a magic
* index, if one exists, in array A.
*/


// PSEUDOCODE
// I (INPUT)--------- arr (a sorted array of distinct integers)
// O (OUTPUT) ------- a magic index, if one exists
// C (CONSTRAINTS) -- array is sorted, so maybe o(log n). Also, array's values are distinct
// E (EXAMPLE) ------ null

// BEST IMPLEMENTATION (RECURSIVE - LOG N)
function magicIndex(arr, start = 0, end = arr.length - 1, magic = null, asc) {
  if (asc === undefined) asc = (arr[0] < arr[arr.length - 1]) ? true : false; // determine if ascending
  var mid = Math.floor((start + end) / 2);   // if magic is found
  if (mid === arr[mid]) magic = mid;
  if (magic === null) {
    if ((!asc && arr[mid] < mid) || (asc && arr[mid] > mid)) magic = magicIndex(arr, 0, mid - 1, magic, asc);    // go left
    if ((!asc && arr[mid] > mid) || (asc && arr[mid] < mid)) magic = magicIndex(arr, mid + 1, end, magic, asc);  // go right
  }
  return magic;
}

// WORST IMPLEMENTATION (ITERATIVE - N)
function magicIndexIterative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return null;
}