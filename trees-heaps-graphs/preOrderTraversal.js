var Tree = require('./tree.js');
var basicTree = require('./data.js').basicTree;
var binarySearchTree = require('./data.js').binarySearchTree;

// PRE ORDER TRAVERSAL - Implementation 1
function arrayizePRE(tree) {
  var arr = [tree.value];
  (function recurse(node) {
    for (var i = 0; i < node.children.length; i++) {
      arr.push(node.children[i].value);
      recurse(node.children[i]);
    }
  })(tree);
  return arr;
}


// PRE ORDER TRAVERSAL (POT) - Implementation 2
function arrayizePRE2(tree) {
  var arr = [];
  (function recurse(node) {
    arr.push(node.value);
    for (var i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    }
  })(tree);
  return arr;
}


// PRE ORDER TRAVERSAL (POT) - Implementation 3
function arrayizePRE3(tree, results = []) {
  results.push(tree.value);
  for (var i = 0; i < tree.children.length; i++) {
    arrayizePRE3(tree.children[i], results);
  }
  return results;
}