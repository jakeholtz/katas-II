var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;

function linkedListPalindrome(linkedList) {
  // make array of linkedlist values
  var values = [];
  var node = linkedList.head;
  while(!!node) {
    values.push(node.value);
    node = node.next;
  }
  // determine if palindrome
  return values.join('') === values.reverse().join('');
}