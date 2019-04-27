const findTwoLargest = (arr) => {
  let largest = new Array(2);

  for (let num of arr) {
    let [med, big] = largest;

    /* if more than second largest / med (or med doesn't exist) */
    if (!med || num > med) {

      /* and less than big */
      if (num < big) {
        largest[0] = num;

      /* or greater than big (or big doesn't exist) */
      } else if (!big || num > big) {
        largest[0] = big;
        largest[1] = num;
      }
    } 
  }
  return largest;
}