// working solution 1

function stringCompression(str) {
  var comprStr = '';
  var currLetter = str[0];
  var count = 1;
  for (var i = 1; i <= str.length; i++) {
    if (currLetter === str[i]) {
      count++;
    } else if {
      comprStr += (currLetter + count);
      count = 1;    
    }
    currLetter = str[i];
  }
  return comprStr.length > str.length ? str : comprStr;
}



// working solution 2 (mine)
function stringCompression(str) {
  var comprStr = '';
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if ((str.length - 1 !== i) && (str[i].toLowerCase() === str[i + 1].toLowerCase())) {
      count++;
    } else {
      comprStr += (str[i].toLowerCase() + count);
      count = 1;
    }
  }
  return comprStr.length > str.length ? str : comprStr;
}



// working solution 3 (book)
function stringCompression(str) {
  var comprStr = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if ((str.length > i) && (str[i] !== str[i + 1])) {
      comprStr += (str[i] + count);
      count = 0;
    }
  }
  return comprStr.length > str.length ? str : comprStr;
}

stringCompression('aabcccccaaa') // 'a2b1c5a3'