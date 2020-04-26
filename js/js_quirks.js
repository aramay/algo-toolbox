
// var foo = 10;
// var bar = {item: "hello"};
// var baz = {item: "world"};

// function changeStuff(a,b,c) {
//   a = a * 2;
//   b.item = 3;
//   c = {item: 4};
// }

// changeStuff(foo, bar, baz);

// console.log(foo); //10
// console.log(bar.item); // 3
// console.log(baz.item); // {item: "world}, {item: 4}

//hoisting;

// var foo = 2;

// function bar() {
//    console.log(foo);// undefined
//    console.log(bar()); // 2

//    var foo = 1; // 1
//   //this bar will over ride outer bar
  
//    function bar() {
//       return 2; 
//    }
// }
// console.log(bar())
  
//undefined
//2
//undefined


//implement a function takes a string input return true or false if a palindrome.

//http://bonsaiden.github.io/JavaScript-Garden/


/*
function isPalindrome(arg){
  
  // reverse this word
  // return args === reverse.arg
 var temp = "";
  
 for(var i=0; i< arg.length; i++){
  if(arg[i] !== " "){
    
    temp += arg[i]
  }
   
 }
  var palindrome = temp.split("").reverse().join("");
  return temp === palindrome;
  
}

console.log(isPalindrome("m         om"))//true

*/

/*
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1())

console.log(foo2()) // undefined
/**when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement. */


(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/**However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:

var b = 3;
var a = b;
But in fact, var a = b = 3; is actually shorthand for:

b = 3;
var a = b;
As a result (if you are not using strict mode), the output of the code snippet would be:

a defined? false
b defined? true

But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.
 */