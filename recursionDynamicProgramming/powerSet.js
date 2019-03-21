// Write a method that returns all subsets of a set

// RECURSIVE SOLUTION
var powerSet = function(str) {
  var uniques = {};
  (function recurse(set, str) {
    set = Array.from(new Set(set)).sort().join('');
    if (!uniques[set]) uniques[set] = true;
    for (var i = 0; i < str.length; i++) {
      recurse(set + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', str);
  return Object.keys(uniques);
};

// SIMPLER, ITERATIVE SOLUTION
function subsets(str) {
  var allSets = [''];
  for (var i = 0; i < str.length; i++) {
    var newSets = allSets.map((item) => item + str[i]);
    allSets.push(...newSets);
  }
  return allSets;
}
