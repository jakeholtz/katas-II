
// MAIN STACK IMPLEMENTATION (USING MODIFIED LINKEDLIST)
function Stack() {
  this.top = null;

  this.isEmpty = function() {
    return !this.top;
  }

  this.pop = function() {
    if (this.isEmpty()) return null;
    var popped = this.top;
    this.top = this.top.next;
    popped.next = null;
    return popped;
  }

  this.push = function(item) {
    var newItem = new Node(item);
    if (!this.top) {
      this.top = newItem;
    } else {
      var oldTop = this.top;
      this.top = newItem
      this.top.next = oldTop;
    }
  }

  this.peek = function(item) {
    return this.top.value;
  }

  this.makeArray = function() {
    var curr;
    var arr = [];
    while(curr = this.top) {
      arr.push(this.pop().value);
    }
    for (var i = arr.length - 1; i >= 0; i--) {
      this.push(arr[i]);
    }
    return arr.reverse();
  }

  function Node(value) {
    this.value = value;
    this.next = null;
  }
}


// SECOND STACK IMPLEMENTATION (USING ARRAY)
function StackFromArray() {
  this.size = 0;
  this.contents = [];

  this.isEmpty = function() {
    return !this.size;
  }

  this.pop = function() {
    if (this.isEmpty()) return null;
    this.size--;
    return this.contents.pop();
  }

  this.push = function(item) {
    this.contents.push(item)
    return ++this.size;
  }

  this.peek = function(item) {
    return this.contents[this.size - 1];
  }

  this.makeArray = function() {
    return this.contents;
  }
}

module.exports.Stack = Stack;
module.exports.StackFromArray = StackFromArray;