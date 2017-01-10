// var isPalindrome = function (input) {

//     var i = 0;
//     var x = input.length - 1;

//     while (i < x) {

//         if (input[i] == input[x]) {
//             i ++;
//             x --;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

function palindrome(str) {
  // Good luck!
  var x = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  var start = 0;
  var end = x.length - 1;
  
  while(start < end){
    if(x[start] === x[end]){
      
      start ++;
      end --;
      
    }else{
      return false;
    }

  }
  return true;
}

console.log(palindrome("race car"));
