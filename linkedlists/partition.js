var LinkedList = require('./linkedList.js');
var list = require('./exampleData.js');

// partition one
function partition(ll, node, p) {
  var befSta = ll.makeNode(null);
  var befEnd = ll.makeNode(null);
  var aftSta = ll.makeNode(null);
  var aftEnd = ll.makeNode(null);

  while (node !== null) {
    var next = node.next;
    node.next = null;
    if (node.value < p) {
      // insert node into end of before list
      if (befSta === null) {
        befSta = node;
        befEnd = befSta;
      } else {
        befEnd.next = node;
        befEnd = node;
      }
    } else {
      // insert node into end of after list
      if (aftSta === null) {
        aftSta = node;
        aftEnd = aftSta;
      } else {
        aftEnd.next = node;
        aftEnd = node;
      }
    }
    node = next;
  }
  if (befSta === null) {
    return aftSta;
  }
  // merge lists
  befEnd.next = aftSta;
  return befSta;
}

// partition one
function partition(ll, node, p) {
  var befSta = ll.makeNode(null);
  var befEnd = ll.makeNode(null);
  var aftSta = ll.makeNode(null);
  var aftEnd = ll.makeNode(null);
  while (node !== null) {
    var next = node.next;
    node.next = null;
    if (node.value < p) {
      // insert node into end of before list
      if (befSta === null) {
        befSta = node;
        befEnd = befSta;
      } else {
        befEnd.next = node;
        befEnd = node;
      }
    } else {
      // insert node into end of after list
      if (aftSta === null) {
        aftSta = node;
        aftEnd = aftSta;
      } else {
        aftEnd.next = node;
        aftEnd = node;
      }
    }
    node = next;
  }
  if (befSta === null) {
    return aftSta;
  }
  // merge lists
  befEnd.next = aftSta;
  return befSta;
}

// partition one
function partition(ll, node, p) {
  var befSta = ll.makeNode(null);
  var befEnd = ll.makeNode(null);
  var aftSta = ll.makeNode(null);
  var aftEnd = ll.makeNode(null);

  while (node !== null) {
    var next = node.next;
    node.next = null;
    if (node.value < p) {
      // insert node into end of before list
      if (befSta === null) {
        befSta = node;
        befEnd = befSta;
      } else {
        befEnd.next = node;
        befEnd = node;
      }
    } else {
      // insert node into end of after list
      if (aftSta === null) {
        aftSta = node;
        aftEnd = aftSta;
      } else {
        aftEnd.next = node;
        aftEnd = node;
      }
    }
    node = next;
  }
  if (befSta === null) {
    return aftSta;
  }
  // merge lists
  befEnd.next = aftSta;
  return befSta;
}

// partition two
function partitionTwo(ll, node, p) {
var head = node;
var tail = node;

  while (node !== null) {
    var next = node.next;
    if (node.value < p) {
      // insert node at head
      node.next = head;
      head = node;
    } else {
      // insert node at tail
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
}