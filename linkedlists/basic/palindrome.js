var data = require('./linkedList.js');
var { Node, linkedList1, linkedList2, linkedList3, linkedList4 } = data;


/* IMPLEMENTATION 1 - Using a Stack (at 2N speed) */
function isPalindrome(node) {
  if (!node) return true;
 
  /* add values to stack */
  var stack = [];
  var current = node;
  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  /* compare stack to linkedlist */
  current = node;
  while (current) {
    if (current.value !== stack.pop()) return false;
    current = current.next;
  }
  return true;
}

/* IMPLEMENTATION 2 - Using a Stack (at N speed) */ /* * */
function isPalindrome(node) {
  var fast = node;
  var slow = node;
  var stack = [];
 
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next
    fast = fast.next.next;
  }

  /* for odd sized linked lists */
  if (!fast) slow = slow.next;

  while (!slow) {
    if (stack.pop() !== slow.value) return false;
    slow = slow.next;
  }
}