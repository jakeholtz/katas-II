var Queue = require('./queue.js');
var Stack = require('./stack.js').Stack;
var StackFromArray = require('./stack.js').StackFromArray;

var queueOne = new Queue();
for (var i = 1; i <= 10; i++) {
  queueOne.enqueue(i);
}

var stackOne = new Stack();
for (var i = 1; i <= 10; i++) {
  stackOne.push(i);
}

var StackFromArrayOne = new StackFromArray();
for (var i = 1; i <= 10; i++) {
  StackFromArrayOne.push(i);
}

module.exports.queueOne = queueOne
module.exports.stackOne = stackOne
module.exports.StackFromArrayOne = StackFromArrayOne