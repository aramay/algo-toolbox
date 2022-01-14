/**
 * URL: https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 * 
 * Example # 1
 * Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].


Example #2
Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example #3
Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
 */

const smallest_subarray_sum = (s, arr) => {
  console.log('smallest subarray sum')

  let windowSum = 0
  let windowStart = 0
  let windowEnd = 0
  let minLen = Infinity

  for(windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    // shrink window as small as possible, until less than S
    while(windowSum >= s) {
      minLen = Math.min(minLen, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]

      windowStart += 1
    }
  }
  // return 0 if no sunarr exists
  if (minLen === Infinity) {
    return 0
  }
  return minLen
}

const arr1 = [2, 1, 5, 2, 3, 2]
S = 50
const res1 = smallest_subarray_sum(S, arr1)

console.log('res1 ', res1)
