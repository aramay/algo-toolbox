/**
 * String Anagrams (hard)#
Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get 
�
!
N! permutations (or anagrams) of a string having 
�
N characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

 */
const find_string_anagrams = function(str, pattern) {
  let result_indexes = [];
  // TODO: Write your code here
  const patternFrequency = {}
  let winStart = 0
  const k = pattern.length
  let winEnd = 0
  let matched = 0

  for(let i = 0; i < pattern.length; i++) {
    const chr = pattern[i]
    if (patternFrequency[chr] === undefined) {
      patternFrequency[chr] = 1
    } else {
      patternFrequency[chr] += 1
    }
  }

  for (winEnd = 0; winEnd < str.length; winEnd++) {
    let rightChr = str[winEnd]

    if (rightChr in patternFrequency) {
      // decrement the frequency of matched character.
      patternFrequency[rightChr] -= 1

      if (patternFrequency[rightChr] === 0) {
        // result_indexes.push(winEnd)
        matched += 1
      }
    }

    if (matched === Object.keys(patternFrequency).length) {
      result_indexes.push(winStart)
    }

    if (winEnd >= k - 1) {
      const leftChr = str[winStart]

      winStart += 1

      if (leftChr in patternFrequency) {
        if (patternFrequency[leftChr] === 0) {
          matched -= 1
        }
        patternFrequency[leftChr] += 1
      }
    }
  }

  console.log(patternFrequency)
  
  return result_indexes;
};


let Input1 = "ppqp"
let Pattern1 = "pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

let res1 = find_string_anagrams(Input1, Pattern1)

console.log('res 1', res1)
