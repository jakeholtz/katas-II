/* SOLUTION 0 -> Recursive Solution (with Annonations) */
function reverse(head) {

  /* Stops when we get to the old tail, the oldTail becomes the newHead  *
   * So 1 -> 2 -> 3   =>  3 was the old tail, and it is now the new head */
  if (!head || !head.next) return head;
  var newHead = reverse(head.next)

  /*                                (head.next.next)                                *
   *                                         V                                      *
   *  (BEFORE) head (1) -> head.next (2) -> null                                    *
   *                (1) ->           (2) -> null                                    *
   *                                                                                *
   *  (STEP 1)      (1) ->           (2) ->  (1) -> (2)...  (head.next.next = head) *
   *  (STEP 2)                       (2) ->  (1) -> null    (head.next = null)      *         
   *                                                                                *
  /*  Next value's next now reverses direction and points to head                   */
  head.next.next = head;
  head.next = null;

  return newHead;
}


/* SOLUTION 1 -> Recursive Solution - Time Complexity O(N) / Space Complexity O(N) */
function reverse(head) {
  
  if (!head || !head.next) return head;
  const newHead = reverseList(head.next);
  
  head.next.next = head;
  head.next = null;
  
  return newHead;
};

/* SOLUTION 2 -> Iterative Solution - Time Complexity O(N) / Space Complexity O(1) */
function reverseList(head) {
  if (!head || !head.next) return head;
  let prev = null;
  let curr = head;
  
  while(curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};