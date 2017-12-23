var Stack = require('./stack.js').Stack;
var StackFromArray = require('./stack.js').StackFromArray;

var stackOne = require('./data.js').stackOne;
var stackFromArrayOne = require('./data.js').stackFromArrayOne;


Stack.prototype.reverseStack = function() {
  var current;
  var reversed = new Stack();
  while(current = this.top) {
    reversed.push(this.pop().value);
  }
  this.top = reversed.top;
  return this
}

console.log(stackOne.makeArray());
console.log(stackOne.reverseStack().makeArray());