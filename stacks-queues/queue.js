
// Queue IMPLEMENTATION USING LINKEDLIST
function Queue() {
  this.front = null;
  this.back = null;
}

Queue.prototype.enqueue = function(item) {
  var newItem = new Node(item);
  if (!this.front) this.front = newItem;
  if (this.back) this.back.next = newItem;
  this.back = newItem;
}

Queue.prototype.dequeue = function() {
  if (this.isEmpty()) return null;
  var popped = this.front;
  this.front = this.front.next;
  return popped;
}

Queue.prototype.peek = function(item) {
  return this.front.value;
}

Queue.prototype.isEmpty = function() {
  return !this.back;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = Queue