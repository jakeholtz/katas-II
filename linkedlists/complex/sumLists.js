var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js').numbers;
var random1 = require('./exampleData.js').randNumsOne;
var random2 = require('./exampleData.js').randNumsTwo;

// SIMPLE SUMMING IMPLEMENTATION
// - time complexity: o(n) / o(m + n)
// - space complexity: o(n) / o(m + n)
function sumLists(ll1, ll2) {

  function makeArray(ll) {
    var arr = [];
    var curr = ll.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  var value1 = makeArray(ll1).reduceRight((a,b) => a + b, '');
  var value2 = makeArray(ll2).reduceRight((a,b) => a + b, '');
  var sum = String((+value1) + (+value2))

  var output = new LinkedList();
  for (var i = 0; i < sum.length; i++) {
    output.addToTail(+sum[i]);
  }
  return output;
}

// ADVANCED RECURSIVE IMPLEMENTATION
function sumLists(ll1) {
  var sum = ''
  var sums = [];

  (function recurse(lls) {
    console.log(arguments.length)
    for (var i = 0; i < arguments.length; i++) {
      var curr = arguments[i];
      sum += curr.value;
      if (curr.next) {
        recurse(curr.next, sum)
      } else {
        sums.push(sum);
        sum = '';
      }
    }
  })(ll1.head);

  return sums;
}

console.log(sumLists(random1))