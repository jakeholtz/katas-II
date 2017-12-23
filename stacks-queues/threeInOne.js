var Queue = require('./queue.js');
var Stack = require('./stack.js').Stack;
var StackFromArray = require('./stack.js').StackFromArray;

var queueOne = require('./data.js').queueOne;
var stackOne = require('./data.js').stackOne;
var stackFromArrayOne = require('./data.js').stackFromArrayOne;


// Implement three stacks using a single array
function FixedTriStack(max) {
  this.max = max;
  this.contents = new Array(this.max * 3);
  this.sizes = [0, 0, 0];
}

FixedTriStack.prototype.push = function(iStack, item) {
  this.start = iStack * this.max;
  this.end = this.start + this.max - 1;
  var newIndex = this.start + this.sizes[iStack];
  if (newIndex > this.end) {
    return "Stack Full"
  } else {
    this.sizes[iStack]++;
    this.contents[newIndex] = item;
    return this.contents;
  }
}

FixedTriStack.prototype.pop = function(iStack) {
  this.start = iStack * this.max;
  this.end = this.start + this.max - 1;
  var poppedIndex = this.start + this.sizes[iStack] - 1;
  if (this.sizes[iStack]) {
    this.sizes[iStack]--;
  }
  var popped = this.contents[poppedIndex];
  this.contents[poppedIndex] = null;
  return popped || null;
}