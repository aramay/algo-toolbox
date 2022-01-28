/**
 * https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
 * Problem Statement#
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

 */

const lenOfLongestSubStr = (str, k) => {
  console.log('func called')

  let winStart = 0,
  maxRepeatLetter = 0,
  charFrequencyMap = {},
  maxLen = 0

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let rightChar = str[winEnd]

    if(charFrequencyMap[rightChar] === undefined) {
      charFrequencyMap = 1
    } else {
      charFrequencyMap[rightChar] += 1
    }

    maxRepeatLetter = Math.max(maxRepeatLetter, charFrequencyMap[rightChar])

    if( (winEnd - winStart + 1 - maxRepeatLetter) > k) {
      let leftChar = str[winStart]

      charFrequencyMap[leftChar] -= 1
      winStart += 1
    }
    maxLen = Math.max(maxLen, winEnd - winStart + 1)
  }
  return maxLen
}

let Input1 =[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
let k1 = 2
let res1 = lenOfLongestSubStr(Input1, k1)//Output: 6

console.log('res1 ', res1)
