/* IMPLEMENTATION */

const intToRoman = (number) => {
  const arabic = [1000, 500, 100, 50, 10, 5, 1];
  const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let index = 0;
  let numeral = '';

  while(number) {
    if (number >= arabic[index]) {
      numeral += roman[index];
      number -= arabic[index];
    } else {
      let next = index % 2 ? index + 1 : index + 2;
      if (next && number >= arabic[index] - arabic[next]) {
        numeral += (roman[next] + roman[index]);
        number -= (arabic[index] - arabic[next]);
      }
      index++;
    }
  }
  return numeral;
};

/* EXAMPLES */
console.log(integerToRoman(4)); // => IV
console.log(integerToRoman(5)); // => V
console.log(integerToRoman(10)); // => X
console.log(integerToRoman(14)); // => XIV
console.log(integerToRoman(15)); // => XV
console.log(integerToRoman(59)); // => LIX
console.log(integerToRoman(99)); // => 	XCIX
console.log(integerToRoman(231)); // => CCXXXI
console.log(integerToRoman(666)); // => DCLXVI
console.log(integerToRoman(1001)); // => MI


