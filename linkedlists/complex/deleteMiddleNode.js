var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;

function deleteMiddleNode(linkedList) {
  var len = linkedList.size();
  if (len < 3) return;

  var mid = Math.floor(len / 2);
  var prev = linkedList.makeNode(null);
  var node = linkedList.head;

  for (var i = 0; i < mid; i++) {
    prev = node;
    node = node.next;
  }
  prev.next = node.next;
}