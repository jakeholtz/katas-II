var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {

  var node = this.makeNode(value);

  if (!this.head) {
    this.tail = this.head = node;
  } else {
    this.tail = this.tail.next = node;
  }

};

LinkedList.prototype.removeHead = function() {
  var removed = this.head;
  if (!this.head) {
    return null;
  } else if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return removed.value;
};

LinkedList.prototype.contains = function(value) {
  var currentNode = this.head;
  while(!!currentNode) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = this.head.next;
  }
  return false;
};

LinkedList.prototype.makeArray = function() {
  var array = [];
  var currentNode = this.head;
  while(currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
};

LinkedList.prototype.size = function() {
  var count = 0;
  var node = this.head;
  while (!!node) {  // count nodes
    count++;
    node = node.next;
  }
  return count;
};

LinkedList.prototype.makeNode = function(value) {
  return new Node(value);
};

function Node(value) {
  this.next = null;
  this.value = value;
  return this;
}




module.exports = LinkedList;