// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

// I sorted Array
// O bst

var Tree = require('./tree');
var exampleBST = require('./data').binarySearchTree;

function sortedArrayToBST(arr) {
  var len = arr.length;
  return (function recurse(start, end) {
    if (start <= end) {
      var mid = Math.floor((start + end) / 2);
      var node = new Tree(arr[mid]);
      node.children.push(recurse(0, mid - 1));
      node.children.push(recurse(mid + 1, end));
      return node;
    }
    return null;
  })(0, len - 1);
}

console.log(sortedArrayToBST([1, 2, 3, 4, 5]))