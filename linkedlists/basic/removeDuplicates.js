
/* IMPLEMENTATION 1 - With Hash set - 0(N) Time Complexity / 0(N) Space Complexity */
const removeDups = (node) => {
  if (!node || !node.next) return node;
  let uniques = new Set();
  let current = node;

  while(current.next) {
    let { value, next } = current;
    uniques.add(value);

    if (uniques.has(next.value)) {
      current.next = next.next;
    } else {
      current = current.next;
    }
  }
  return node;
}