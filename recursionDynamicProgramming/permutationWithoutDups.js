/*
* 8.7 Permutation without Dups: Write a method to compute all permutations of a string of unique characters.
*/


// PSEUDOCODE
// I (INPUT)--------- string
// O (OUTPUT) ------- array of strings
// C (CONSTRAINTS) -- array is all unique characters
// E (EXAMPLE) ------ null

// BEST IMPLEMENTATION

function permutationWithoutDups(string, anagram = '', uniques = []) {
  if (string === '') {
     uniques.push(anagram);
  } else {
    for (var i = 0; i < string.length; i++) {
      permutationWithoutDups(string.slice(0, i) + string.slice(i + 1), anagram + string[i], uniques)
    }
  }
  return uniques;
}