/**
 * 1) Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

plusOut("12xy34", "xy") → "++xy++"
plusOut("12xy34", "1") → "1+++++"
plusOut("12xy34xyabcxy", "xy") → "++xy++xy+++xy"

2) Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

zipZap("zipXzap") → "zpXzp"
zipZap("zopzop") → "zpzp"
zipZap("zzzopzop") → "zzzpzp"

3) A famous question:

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

///////////////////////////////////////////////////////
///// Copy your solutions below with your name on it
///////////////////////////////////////////////////////
//Neo #1.
let plusOut = function(s, word) {
    let re = new RegExp('\[^' + word + '\]','ig');
    return s.replace(re, '+');
}

console.log(plusOut("12xy34xyabcxy", "xy"));
//Neo #2.
let zipZap = function(word) {
    let len = word.length, i = 0, s = [];
  for (;i<len;i++) {
    if (word.charAt(i) === 'z' && word.charAt(i + 2) === 'p') {
        s.push('zp');
      i = i + 2;
    } else {
        s.push(word.charAt(i));
    }
  }
  return s.join('');
}

console.log(zipZap("zipXzap"));
//Neo #3
let fizzBuzz = function() {
    let i = 1, s = '';
  for(;i<=100;i++) {
    s = '';
    if (i % 3 === 0 && i % 5 === 0) {
        s = 'FizBuzz';
    } else if (i % 3 === 0) {
        s = 'Fiz';
    } else if (i % 5 === 0) {
        s = 'Buz';
    }
    s = s || i;
    console.log(s);
  }
};

fizzBuzz();



//Amit #2.
class Main {
     public static void main(String[] args) {
         
          System.out.println(zipZap("zzzopzop"));
     }
    
     public static String zipZap(String inp)
     {
         int k = 3; //sliding window
         
         char[] out = new char[inp.length()];
         int j = -1;
         
         for(int i=0;i<=inp.length()-k;)
         {
             System.out.println("i:" + i);
             char s = inp.charAt(i);
             char e = inp.charAt(i+k-1);
                          
             if(s=='z' && e == 'p')
             {
                 out[++j] = inp.charAt(i);
                 out[++j] = inp.charAt(i+2);
                 
                 i = i+k;
             }
             else
             {
                 out[++j] = inp.charAt(i);
                 i++;
             }
             
         }        
         return new String(out);
     }
}


//Katie (javascript)
//1) plusOut
function plusOut(str, targetStr){
  var index = str.indexOf(targetStr)
  var strAry = str.split("")
  for (var i=0; i<strAry.length; i++){
    if (i < index ||  i >= targetStr.length+index ){
      strAry[i]='+'
    }
  }
  return strAry.join("")
}
//2) zipZap
function zipZap(str){
 var strAry = str.split("")
 var newStr = []
 var i = 0
 while (i<strAry.length-2){
   if (strAry[i] == 'z' && strAry[i+2] == 'p'){
    newStr.push(strAry[i])  
    newStr.push(strAry[i+2])  
    i+=3
   }
   else{
     newStr.push(strAry[i])
     i+=1
   }
 }
 return newStr.join("")
}
//3) fizBuzz 
function fizBuzz(nu){
  if (num % 5 ==0 && num % 3==0){
    return 'FizzBuzz'
  }
  else if (num % 3 == 0){
    return 'Fizz'
  }
  else if (num % 5 == 0){
    return 'Buzz'
  }
  else {
    return num
  }
}

/////////////////////////
/////////////////////////
////// Jack ////
/////////////////////////
/////////////////////////
function replaceWithPlus(string, immuneLetters){
  var index = 0,
    isImmune = true,
    i = 0,
    l = immuneLetters.length;

    string = string.split('');

  while(index < string.length) {
    if (string[index] === immuneLetters[0] ){
      isImmune = true;

      for (i = 0; i < l; i++ ){
        if (string[index + i] !== immuneLetters[i]) {
           isImmune = false;  
        }
      }
      
      if (isImmune){
        index = index + i;
      }
      else {
        string[index] = '+';
        index++;
      }
      
    }
    else {
      string[index] = '+';
      index++;
    }
  }
  
  return string.join('');
}

console.log(replaceWithPlus("12xy34", "xy"));
console.log(replaceWithPlus("12xy34", "1"));
console.log(replaceWithPlus("12xy34xyabcxy", "xy"));

#################
Abid
################

/**
function plusOut (args1, args2){

   var target = {}

   args1 = args1.split("")

   for (var index = 0; index < args2.length; index++) {
      
      if (target.hasOwnProperty(args2[index])) {
         target[args2[index]] += 1
      }
      else{
         target[args2[index]] = 0
      }
   }

   console.log("target ", target)

   for (var index = 0; index < args1.length; index++) {
      
      if (target.hasOwnProperty(args1[index])) {

      }else{
         args1[index] = "+"
      }
      
   }

   console.log("args1 ", args1.join(""))
}

var x = "12xy34"
var y = "xy"

console.log( plusOut(x,y))
*/
 * 
 * 
1) Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

plusOut("12xy34", "xy") → "++xy++"
plusOut("12xy34", "1") → "1+++++"
plusOut("12xy34xyabcxy", "xy") → "++xy++xy+++xy"

 */

// function plusOut (args1, args2){

//    var target = {}

//    args1 = args1.split("")

//    for (var index = 0; index < args2.length; index++) {
      
//       if (target.hasOwnProperty(args2[index])) {
//          target[args2[index]] += 1
//       }
//       else{
//          target[args2[index]] = 0
//       }
//    }

//    console.log("target ", target)

//    for (var index = 0; index < args1.length; index++) {
      
//       if (!target.hasOwnProperty(args1[index])) {
//          args1[index] = "+"
      
//    }

//       console.log("args1 ", args1.join(""))
//    }
// }

// var x = "12xy34"
// var y = "xy"

// console.log( plusOut(x,y))



/**
 * 
2) Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

zipZap("zipXzap") → "zpXzp"
zipZap("zopzop") → "zpzp"
zipZap("zzzopzop") → "zzzpzp"
 */

function zipZap(args){

   var result = []

   var pat = "zip",
      pat2 = "zap"

   var counter = 0,
      counter2 = 0


   while (counter < args.length) {
      
      if (args[counter] === "z") {
         result.push(args[counter])

         // counter2 ++
      }
      if (args[counter] !== ) {
         
      }
      if (args[counter] === "p") {
         result.push(args[counter])
      }

      counter ++
   }

   console.log(result)
}

var x = "zipXzap"
console.log(zipZap(x))


/**
 * 3) A famous question:

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

 */