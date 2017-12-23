

// implemented through bubble sort
Stack.prototype.sort = function() {
  var newStack = new Stack();
  var popped, peeked, changes;
  do {
    changes = 0;
    while (true) {
      popped = this.pop();
      peeked = this.peek();
      if (!peeked) {
        newStack.push(popped.value);
        break;
      }
      if (popped.value <= peeked.value) {
        newStack.push(popped.value);
      } else {
        var secondPopped = this.pop();
        newStack.push(secondPopped.value);
        this.push(popped.value);
        changes++;
      }
    }
    while(newStack.top) {
      popped = newStack.pop();
      this.push(popped.value);
    }
  } while (changes);
  return this.makeArray();
};



// STACK: [5, 1, 2, 4, 3] <->
// NEWST:              [] <->
//
// STACK:    [5, 1, 2, 4] <->
// NEWST:             [3] <->
//
// STACK:       [5, 1, 4] <->
// NEWST:          [3, 2] <->
//
// STACK:          [5, 4] <->
// NEWST:       [3, 2, 1] <->
//
// STACK:             [5] <->
// NEWST:    [3, 2, 1, 4] <->
//
// STACK:              [] <->
// NEWST: [3, 2, 1, 4, 5] <->
//
// STACK: [5, 4, 1, 2, 3] <->
// NEWST:              [] <->
//
// STACK:    [5, 4, 1, 3] <->
// NEWST:             [2] <->
//
// STACK:       [5, 4, 3] <->
// NEWST:          [2, 1] <->
//
// STACK:          [5, 4] <->
// NEWST:       [2, 1, 3] <->
//
// STACK:             [5] <->
// NEWST:    [2, 1, 3, 4] <->
//
// STACK:              [] <->
// NEWST: [2, 1, 3, 4, 5] <->
//
// STACK: [5, 4, 3, 1, 2] <->
// NEWST:              [] <->
//
// STACK:    [5, 4, 3, 2] <->
// NEWST:             [1] <->
//
// STACK:       [5, 4, 3] <->
// NEWST:          [1, 2] <->
//
// STACK:          [5, 4] <->
// NEWST:       [1, 2, 3] <->
//
// STACK:             [5] <->
// NEWST:    [1, 2, 3, 4] <->
//
// STACK:              [] <->
// NEWST: [1, 2, 3, 4, 5] <->
//
// STACK: [5, 4, 3, 2, 1] <->
// NEWST:              [] <->