/* SOLUTION 1 - Iterative - Time Complexity: O(2N) => O(N) / Space Complexity: O(1) */
function removeNth(node, n) {
  if(!node) return false;

  /* count nodes */
  var curr = node;
  var count = 0;
  while(curr) {
    count++;
    curr = curr.next;
  }

  /* get nth node */
  curr = node;
  while (curr) {
    if (n === count) return curr;
    count--;
    curr = curr.next;
  }

  return false;
}


/* SOLUTION 2 - Optimized Iterative - Time Complexity: O(N) / Space Complexity: O(1) */
function removeNth(node, n) {
  var pointer1 = node;
  var pointer2 = node;

  /* count nodes */
  while (n-- > 0) {
    if (pointer1 === null) return null;
    pointer1 = pointer1.next;
  }

  /* get nth node */
  while(pointer1) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}