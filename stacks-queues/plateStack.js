
// CREATE A NEW PLATESTACK CLASS
function PlateStack(max) {
  this.stackNo = 0;
  this.max = max;
  this.contents = [[]];
}

PlateStack.prototype.isEmpty = function() {
  // if current stack is 0 AND stack 0 is empty
  return !this.stackNo && !this.contents[0].length
}

PlateStack.prototype.push = function(item) {
  var len = this.contents[this.stackNo].length
  // if we've reached the max
  if (len >= this.max) {
    this.contents[++this.stackNo] = [item];
  } else {
  // if we haven't reached the max
    this.contents[this.stackNo][len] = item;
  }
}

PlateStack.prototype.pop = function() {
  if (this.isEmpty()) return null;
  var currStack = this.contents[this.stackNo];
  // if only one item in currentstack
  if (currStack.length === 1) {
    var popped = currStack[0];
    // if this is first stack
    if (!this.stackNo) {
      this.contents[this.stackNo] = [];
    } else {
      this.contents.length--;
      this.stackNo--;
    }
    return popped;
  } else {
    // if more than one item
    var popped = currStack[currStack.length - 1];
    currStack.length--;
    return popped;
  }
}

PlateStack.prototype.peek = function(item) {
  return this.contents[this.size - 1];
}