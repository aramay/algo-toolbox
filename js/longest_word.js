
function findLongestWord(str) {
  
  var word = str.split(" ");
  var longestWordLen = 0;
  
  for(var i=0; i<word.length ; i++){
    
    if(word[i].length > longestWordLen){
      // console.log(word[i].lenght)
      // var len = word[i].length;
      longestWordLen = word[i].length;
      // console.log(longestWordLen)
    }
  }
  return longestWordLen;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
