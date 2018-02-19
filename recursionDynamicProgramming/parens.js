/*
 * 8.9: Parens: Implement an algorithm to print all valid (e.g.,
 * properly opened and closed) combinations of n-pairs of parentheses.
 */

function findParens(n) {
  var combos = [];
  (function recurse(curr, open, closed) {
    if (open === closed && closed === n) {
      combos.push(curr);
    } else if (open <= n && closed <= n) { // open parens
      if (curr === '' || open >= closed) {
        recurse(curr + '(', open + 1, closed);
      }
      recurse(curr + ')', open, closed + 1); // closed parens
    }
  })('', 0, 0);
  return combos;
}