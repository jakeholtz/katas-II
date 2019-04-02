var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;



function loopDetection(linkedList) {
   var tortoise = linkedList.head;
   var hare = linkedList.head;
   while (tortoise && hare) {
     if (!hare.next) {
       return false;
     } else {
       tortoise = tortoise.next;
       hare = hare.next.next;
     }
     if (tortoise === hare) {
       return true;
     }
   }
   return false;
}

console.log(loopDetection(list));