// STACK IMPLEMENTATION
var Stack = function() {
  this.top = null;
  this.push = function(value) {
    this.top = {value: value, next: this.top};
  };
  this.pop = function() {
    if (!this.top) return null;
    var unstacked = this.top.value;
    this.top = this.top.next;
    return unstacked;
  };
  this.size = function() {
    var count = 0;
    var curr = this.top
    while(curr) {
        count++;
        curr = curr.next;
    }
    return count;
  };
};

// QUEUE FROM STACK IMPLEMENTATION
var Queue = function() {
  
  var inbox = new Stack();
  var outbox = new Stack();
  this.enqueue = function(value) {
    inbox.push(value);
  };
  this.dequeue = function() {
    if (!outbox.top) {
      while (curr = inbox.top) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};