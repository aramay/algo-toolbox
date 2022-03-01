/**
 * https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
 *
 * Smallest Window containing Substring (hard)#
Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:

Input: String="aabdec", Pattern="abac"
Output: "aabdec"
Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"
Example 3:

Input: String="abdbca", Pattern="abc"
Output: "bca"
Explanation: The smallest substring having all characters of the pattern is "bca".
Example 4:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.

 */

const findSubStr = (str, pattern) => {
  console.log('func called')
  const chrFre = {}
  let winStart = 0
  let winEnd = 0
  let matched = 0
  let minLen = str.length + 1
  let subStrStart = 0

  for (let i = 0; i < pattern.length; i++) {
    let temp = pattern[i]
    if (chrFre[temp] === undefined) {
      chrFre[temp] = 1
    } else {
      chrFre[temp] += 1
    }
  }

  for (winEnd = 0; winEnd < str.length; winEnd++) {
    let rightChr = str[winEnd]

    if (rightChr in chrFre) {
      chrFre[rightChr] -= 1

      if (chrFre[rightChr] >= 0) {
        matched += 1
      }
    }

    // shrink the window if we can, finish as soon as we remove the matched char
    while (matched === pattern.length) {
      if (minLen > winEnd - winStart + 1) {
        minLen = winEnd - winStart + 1
        subStrStart = winStart
      }

      let leftChr = str[winStart]
      winStart += 1

      if (leftChr in chrFre) {
        if (chrFre[leftChr] === 0) {
          matched -= 1
        }
      }
      chrFre[leftChr] += 1
    }
  }

  if (minLen > str.length) {
    return ''
  }
  console.log('end func call')
  return str.substring(subStrStart, subStrStart + minLen)
}

const String1 = 'adcad'
const Pattern1 = 'abc'

const res1 = findSubStr(String1, Pattern1)

console.log('res1 ', res1)

