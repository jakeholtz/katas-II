

const findThreeLargest = (arr) => {
  let largest = new Array(3);

  for (let num of arr) {
    let [small, middle, big] = largest;

    /* if more than small (or small doesn't exist) */
    if (!small || num > small) {

      /* and less than medium */
      if (num < middle) {
        largest[0] = small;

      /* or greater than medium (or medium doesn't exist) */
      } else if (!middle || num > middle) {
      
        /* and less than big */
        if (num < big) {
          largest[0] = middle;
          largest[1] = num;
          
        /* or greater than big (or big doesn't exist) */ 
        } else {
          largest[0] = middle;
          largest[1] = big;
          largest[2] = num;
        }
      }
    } 
  }
  return largest;
}
