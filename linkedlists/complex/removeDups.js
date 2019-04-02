var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;


// MY IMPLEMENTATION
function removeDuplicatesFromLinkedList(ll) {
  if (!ll.head) return [];
  var prev = ll.head;
  var curr = ll.head.next;
  var values = {}; values[prev.value] = true;
  while(!!curr && !!prev) {  // if value doesn't already exist
    if (!values[curr.value]) {  // add value to list of values
      values[curr.value] = true;  // if end of linkedlist, end everything
      if (!curr.next) {
        break;
      } else {
        prev = curr;
        curr = curr.next;
      }
    } else { // if value already exists
      if (!curr.next) {  // if end of linkedlist
        prev.next = null
        ll.tail = prev;
        break;
      } else {
        curr = prev.next = curr.next;
      }
    }
  }
  return ll.makeArray();
}

// CTCI IMPLEMENTATION
function deleteDups(ll) {
  var node = ll.head;
  var previous = ll.makeNode(null);
  var values = {};
    while(node !== null) {
      if (!!values[node.value]) {
        previous.next = node.next;
      } else {
        values[node.value] = true;
        previous = node;
      }
      node = node.next;
    }
}