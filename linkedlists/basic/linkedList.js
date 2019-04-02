/* Basic Linked List Implementation */
function Node(value) {
  this.next = null;
  this.value = value;
  return this;
}

Node.prototype.addToTail = function(value) {
  /* start with head go to tail */
  var curr = new Node(value);
  var n = this;
  while (n.next !== null) n = n.next;
  n.next = curr;
}

Node.prototype.makeArray = function() {
  var n = this;
  var array = [n.value];
  while (n.next !== null) {
    n = n.next;
    array.unshift(n.value);
  }
  return array;
}

/* Example Data */
const linkedList1 = new Node(7);
linkedList1.addToTail(1);
linkedList1.addToTail(6);

const linkedList2 = new Node(5);
linkedList2.addToTail(9);
linkedList2.addToTail(2);

module.exports = { Node, linkedList1, linkedList2 };