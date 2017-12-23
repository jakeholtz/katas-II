var Tree = require('./tree.js');
var basicTree = require('./data.js').basicTree;
var binarySearchTree = require('./data.js').binarySearchTree;
var largeBinarySearchTree = require('./data.js').largeBinarySearchTree;


// IN ORDER TRAVERSAL (IOT) - WORKS ONLY FOR COMPLETE BINARY SEARCH TERMS
function arrayizeIOTone(tree, results = [], depth = 0) {
  if (tree.children[0]) inOrderTraversalTwo(tree.children[0], results);
  results.push(tree.value);
  if (tree.children[1]) inOrderTraversalTwo(tree.children[1], results);
  return results;
}

// IN ORDER TRAVERSAL (IOT) - WORKS FOR ALL BINARY SEARCH TREES
function arrayizeIOT(tree, results = [], depth = 0) {
  // TWO CHILDREN
  if (tree.children.length > 1) {
    arrayizeIOT(tree.children[0], results, depth + 1);  // go left
    results.push(tree.value);
    arrayizeIOT(tree.children[1], results, depth + 1);  // go right
  // ONE CHILD
  } else if (tree.children.length) {
    if (tree.value >=  tree.children[0].value) {  // parent has a greater/equal value
      arrayizeIOT(tree.children[0], results, depth + 1);
      results.push(tree.value);
    } else {                                      // parent has a smaller value
      results.push(tree.value);
      arrayizeIOT(tree.children[0], results, depth + 1);
    }
  // NO CHILD
  } else {
    results.push(tree.value);
  }
  return results;
}