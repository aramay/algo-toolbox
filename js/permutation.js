/**
find all permutation of input string
"abc" ->

 *
 */

function findPermutation (args) {
   // return args

  var len = args.length - 1,
      sum = 1,
      perCombo = '',
      factorial = calcFactorial(len + 1),
      i = 0;

   // console.log("result fact" ,factorial)

   function permute(args){

      console.log(index)

      while (i < factorial) {
         

         if (len < 2) {
            return args
         }
         else{

            for (var index = len; index > 0; index--) {



               var temp = args[index - 1]

               args[index - 1] = args[index]

               args[index] = temp

               console.log(args)
            }

            i ++ // increment i counter
         }

      }



   }

   function calcFactorial(num){

      var result = 1;

      for (var index = 1; index <= num; index++) {
         
         result *= index
         
      }
      
      return result
   }

   permute(args)

   calcFactorial(len)

//   console.log(args)
}

var x = 'abc'.split("")

console.log(findPermutation(x))
// console.log(findPermutation('abcxyz'))
