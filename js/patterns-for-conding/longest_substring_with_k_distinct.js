/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Example 4:
Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
 */

const longestSubstringWithKDistinct = (arr1, k) => {
  console.log('inside func')
  let windowEnd = 0
  let windowStart = 0
  let charCount = {}

  let maxLen = 0

  for (windowEnd; windowEnd < arr1.length; windowEnd++) {
    console.log('inside for loop')
    let temp = arr1[windowEnd]
    // check if key exists
    if (charCount[temp] === undefined) {
      charCount[temp] = 1
    } else {
      charCount[temp] += 1
    }

    //maxSubStr += 1

    while (Object.keys(charCount).length > k) {
      console.log('charcount length', Object.keys(charCount))
      console.log('inside while loop')
      // maxSubStr -= 1
      let temp = arr1[windowStart]
      // decrement repeating charcount
      charCount[temp] -= 1
      if (charCount[temp] === 0) delete charCount[temp]
      // increment windowStart
      windowStart += 1

    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1)

  }
  console.log(charCount)
  return maxLen
}

let arr1 = "araaci"
let K = 2

const res1 = longestSubstringWithKDistinct(arr1, K) //Output: 4

console.log('res1 ', res1)


let Input1 = "araaci"
let K1 = 1

const res2 = longestSubstringWithKDistinct(Input1, K1) // Output: 2
console.log(res2 === 2)
