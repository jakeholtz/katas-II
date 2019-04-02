var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;


// IMPLEMENT ITERATIVELY
function returnKthToLast(linkedList, k) {
  // count nodes
  var count = 0;
  var node = curr = linkedList.head;
  while (!!curr) {  // count nodes
    count++;
    curr = curr.next;
  }
  // iterate
  for (var i = 0; i < count - k; i++) {
    node = node.next;
  }
  return !!node ? node.value : null;
}


// IMPLEMENT RECURSIVELY
function returnKthToLastRecursively(linkedList, k) {
  // count nodes
  var count = 0;
  var node = curr = linkedList.head;
  while (!!curr) {  // count nodes
    count++;
    curr = curr.next;
  }
  // recurse
  return (function recurse(node, place, i) {
    if (i === place) {
      return node.value;
    } else if (!!node.next) {
      return recurse(node.next, place, i + 1);
    }
  })(linkedList.head, count - k, 0);
}