/**
 * Window String
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in linear time complexity.
Note that when the count of a character C in T is N, then the count of C in minimum window in S should be at least N.

EXAMPLE:

S = "ADOBECODEBANC"
T = "ABC"

Minimum window is "BANC"

Note:
If there is no such window in S that covers all characters in T, return the empty string ''.
If there are multiple such windows, return the first occurring minimum window ( with minimum start index ).


 */

function minWindow(s, t){

   console.log(s,t)

   var start = 0,
      end = 0,
      count = {},
      match = {};


   for (var index = 0; index < t.length; index++) {
      
      if (!(t[index] in count)) {
         count[t[index]] = false
      }
   }

   console.log(count)
}


var s = "ADOBECODEBANC",
   t = "ABC"


console.log(minWindow(s, t))