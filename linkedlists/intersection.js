var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;


// with knowing 1+ tail
function intersection(ll1, ll2) {
  var tail = ll1.tail;
  var curr = ll2.head;
  while(curr) {
    if(curr === tail) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}


// without knowing the tails
function intersection(ll1, ll2) {
  // only works for non cyclic linkedlists
  function getTail(curr) {
    while(curr) {
      if (!curr.next) return curr;
      curr = curr.next;
    }
  }
  return getTail(ll1.head) === getTail(ll2.head);
}

//   A:    [AH-1]->[2]->[3]->[BT-4]->[AT-5]
//                             ^
//                             |
//   B:    [AH-9]->[8]->[7]-> [5]
