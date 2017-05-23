// function fib (n) {
//   var memo = {}

//   if (n <= 1) {
//      return n
//    }   else {
//      return fib(n - 1) + fib(n - 2)
//    }
// }

function fib_memo (f) {
  
  console.log(fib)

  var memo = {}

  function helper (x) {
    if (!(x in memo)) {
     memo[x] = f(x)
   } else {
     return memo[x]
   }
  
}
  return helper

}

function fib (n) {
  if (n <= 1) {
     return n
   }   else {
      fib(n - 1) + fib(n - 2)
   }
}

var x = fib_memo(fib)

console.log(x(6))
