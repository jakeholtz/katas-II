
const detectLoops = (node) => {
  let tortoise = node;
  let hare = node;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (hare === tortoise) return true;
  }
  return false;
}