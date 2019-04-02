var data = require('./linkedList.js');
var { Node, linkedList1, linkedList2 } = data;


function addLists(l1, l2, value = 0) {
  if (!l1 && !l2 && !value) return null; /* if at end of both lists and nothing to carry */

  /* add values together */
  if (l1) value += l1.value;
  if (l2) value += l2.value;

  /* result equals the ones place only */
  var node = new Node(value % 10);

  /* add next values */
  if (l1 || l2) {
    var next1 = l1 ? l1.next : null;
    var next2 = l2 ? l2.next : null;
    var carriedValue = value >= 10 ? 1 : 0;
    node.next = addLists(next1, next2, carriedValue);
  }
  return node; 
}


var added = addLists(linkedList1, linkedList2);
console.log(added.makeArray());