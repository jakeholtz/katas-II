// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

// I sorted Array
// O bst

var Tree = require('./tree');
var exampleBST = require('./data').binarySearchTree;
var exampleLargeBST = require('./data').largeBinarySearchTree;

function validateBST(tree) {
  var values = [];
  var isBST = true;
  function addValueAndCheck(value) {
    values.push(value);
    if (values[values.length - 1] < values[values.length - 2]) isBST = false;
  }
  return (function traverse(node, depth) {
    if (node.children.length === 2) {
      traverse(node.children[0], depth + 1);
      addValueAndCheck(node.value);
      traverse(node.children[1], depth + 1);
    } else if (node.children.length) {
      if (node.children[0].value < node.value) {
        traverse(node.children[0], depth + 1);
        addValueAndCheck(node.value);
      } else {
        addValueAndCheck(node.value);
        traverse(node.children[0], depth + 1);
      }
    } else {
      addValueAndCheck(node.value);
    }
  })(tree, 0);
  return isBST;
}

// console.log(JSON.stringify(exampleLargeBST));
console.log(validateBST(exampleLargeBST))