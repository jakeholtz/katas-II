var LinkedList = require('./linkedList.js');

var numbers = new LinkedList();
numbers.addToTail(1);
numbers.addToTail(2);
numbers.addToTail(3);
numbers.addToTail(4);
numbers.addToTail(5);

var randNumsOne = new LinkedList();
randNumsOne.addToTail(7);
randNumsOne.addToTail(1);
randNumsOne.addToTail(6);


var randNumsTwo = new LinkedList();
randNumsTwo.addToTail(5);
randNumsTwo.addToTail(9);
randNumsTwo.addToTail(2);

module.exports.numbers = numbers;
module.exports.randNumsOne = randNumsOne;
module.exports.randNumsTwo = randNumsTwo;