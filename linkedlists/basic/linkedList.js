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

const linkedList3 = new Node('R');
linkedList3.addToTail('A');
linkedList3.addToTail('C');
linkedList3.addToTail('E');
linkedList3.addToTail('C');
linkedList3.addToTail('A');
linkedList3.addToTail('R');

const linkedList4 = new Node('R');
linkedList4.addToTail('E');
linkedList4.addToTail('C');
linkedList4.addToTail('E');
linkedList4.addToTail('I');
linkedList4.addToTail('V');
linkedList4.addToTail('E');
linkedList4.addToTail('R');

module.exports = { Node, linkedList1, linkedList2, linkedList3, linkedList4 };