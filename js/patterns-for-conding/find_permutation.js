/**
 * https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
 * Problem Challenge 1
 * Permutation in a String (hard)#
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have 
�
!
n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
 */

const findPermutation = (str) => {
  console.log('func called ', str)
}


let Input1 = "oidbcaf"
let Pattern1 = "abc"

const res1 = findPermutation(Input1) //Output: true

console.log('res1 ', res1)