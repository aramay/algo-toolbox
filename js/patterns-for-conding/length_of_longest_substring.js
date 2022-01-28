/**
 * https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
 * 
 * Problem Statement#
Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 */

const lenOfLongestSubStr = (str, k) => {
  console.log('func called')
  let maxRepeatLetterCount = 0
  let frequencyMap = {}
  let winStart = 0
  let maxLen = 0

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let rightChar = str[winEnd]
    if (frequencyMap[rightChar] === undefined) {
      frequencyMap[rightChar] = 1
    } else {
      frequencyMap[rightChar] += 1
    }
    // keep track of max repeating letter in any window
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar])

    if((winEnd - winStart + 1 - maxRepeatLetterCount) > k) {
      let leftChar = str[winStart]

      frequencyMap[leftChar] -= 1
      winStart += 1
    }

    maxLen = Math.max(winEnd - winStart + 1, maxLen)

  }
  return maxLen
}

let Input1 = "aabccbb"
let k1 = 2
let res1 = lenOfLongestSubStr(Input1, k1) //Output: 5
console.log('res1 ', res1)
