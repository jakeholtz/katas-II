var Stack = require('./stack.js').Stack;
var StackFromArray = require('./stack.js').StackFromArray;

var stackOne = require('./data.js').stackOne;
var stackFromArrayOne = require('./data.js').stackFromArrayOne;

// CREATE A NEW MINSTACK CLASS
function MinStack() {
  this.contents = [];
  this.mins = [];

  this.isEmpty = function() {
    return !this.contents.length;
  }

  this.push = function(item) {
    var len = this.contents.length;
    this.contents[len] = item;
    this.mins[len] = !len ? item : Math.min(this.mins[len - 1], item);
    return len;
  }

  this.pop = function() {
    if (this.isEmpty()) return null;
    var newLen = this.contents.length - 1;
    var popped = this.contents[newLen];
    this.contents.length = this.mins.length = newLen;
    return popped;
  }

  this.min = function() {
    return this.mins[this.mins.length - 1];
  }

  this.peek = function(item) {
    return this.contents[this.size - 1];
  }
}

// console.log(stackOne.makeArray());
// var numbers = new MinStack();
// numbers.push(1);
// numbers.push(11);
// numbers.push(111);
// numbers.push(0);
// numbers.push(10);
// numbers.push(-50);
// console.log(numbers);