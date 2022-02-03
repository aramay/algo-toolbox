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

const findPermutation = (str, pattern) => {
  console.log('func called ', str)
  const patternFrequencyMap = {}
  let winStart = 0
  let k = pattern.length
  let matched = 0

  // Create a HashMap to calculate the frequencies of all characters in the pattern.
  for(let i = 0; i < pattern.length; i++) {
    const chr = pattern[i]
    if (patternFrequencyMap[chr] === undefined) {
      patternFrequencyMap[chr] = 1
    } else {
      patternFrequencyMap[chr] += 1
    }
  }

  
  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    const chr = str[winEnd]

    // If the character from input str matches a character in the HashMap, decrement its frequency in the map.
    if (chr in patternFrequencyMap) {
      patternFrequencyMap[chr] -= 1
      
      // If the character frequency becomes zero, we got a complete match.
      if (patternFrequencyMap[chr] === 0) matched += 1
    }

    //If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.
    if (matched === Object.keys(patternFrequencyMap).length) {
      return true
    }
    // If the window size is greater than the length of the pattern,
    // shrink the window to make it equal to the pattern’s size.
    // At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.
    if (winEnd > k) {
      let leftChr = str[winStart]

      winStart += 1
      if (leftChr in patternFrequencyMap) {
        if (patternFrequencyMap[leftChr] === 0) {
          matched -= 1
        }
        patternFrequencyMap[leftChr] += 1
      }
    }
  }
  return false
}


let Input1 = "oidbcaf"
let Pattern1 = "abc"

const res1 = findPermutation(Input1, Pattern1) //Output: true

console.log('res1 ', res1)