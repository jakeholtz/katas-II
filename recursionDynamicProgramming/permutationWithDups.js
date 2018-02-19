/*
* 8.8 Permutation with Dups: Write a method to compute all permutations of a string. The permutations should not have duplicates;
*/


// PSEUDOCODE
// I (INPUT)--------- string
// O (OUTPUT) ------- array of strings
// C (CONSTRAINTS) -- array is all unique characters
// E (EXAMPLE) ------ null

// BEST IMPLEMENTATION

function permutationWithDups(string, anagram = '', uniques = {}) {
  if (string === '') {
     uniques[anagram] = true;
  } else {
    for (var i = 0; i < string.length; i++) {
      permutationWithDups(string.slice(0, i) + string.slice(i + 1), anagram + string[i], uniques)
    }
  }
  return Object.keys(uniques);
}