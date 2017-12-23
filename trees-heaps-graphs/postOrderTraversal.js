var Tree = require('./tree.js');
var basicTree = require('./data.js').basicTree;
var binarySearchTree = require('./data.js').binarySearchTree;
var largeBinarySearchTree = require('./data.js').largeBinarySearchTree;

// POST ORDER TRAVERSAL
function arrayizePOST(tree, results = []) {
  for (var i = 0; i < tree.children.length; i++) {
    arrayizePOST(tree.children[i], results);
  }
  results.push(tree.value)
  return results;
}
console.log(arrayizePOST(largeBinarySearchTree))