// isPalindrome
//
// input: string
// output: boolean
//
// input: 'racecar'
// output: true
//
// input: 'outco'
// output: false

// function isPalindrome(input){

//   console.log(input);

//   var i = 0;
//   var x = input.length - 1;

//   while (i <= x ){

//     if (input[i] === input[x]){

//       i ++;
//       x --;


//     } else {
//       return false;
//     }
//   }

//   return true;


// }



// console.log(isPalindrome("racecar"));
// console.log(isPalindrome(""));










// anagramPalindrome
//
// input: string
// output: boolean
//
// input: 'carrace' ==> 'racecar' ==> 'carerac'
// output: true
//
// input: 'coout'
// output: false

function anagramPalindrome(input){

  var checkCount = {};

  for(var i = 0; i<input.length; i++){

    if (checkCount.hasOwnProperty(input[i])){

      checkCount[input[i]] += 1;
    } else {

      checkCount[input[i]] = 1;
    }

  }

  // check for how many odd counts
  // if it's less than 2, return true, otherwise, return false

  return checkCount;
}


console.log(anagramPalindrome("bbbcarrace"));

// eracecare

// rcaarce
// aarcrec
// racecar -> bbracecarbb --> ccararbbebb
// coout --> outco --> touoc
