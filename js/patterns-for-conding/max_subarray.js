/**https://leetcode.com/problems/maximum-subarray/
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

const maxSubArr = (arr1) => {
  console.log('func called')
  let maxSum = -Infinity
  let sum = 0

  for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
    // if currentSum is > max, then reassign maxSum
    if(sum > maxSum) {
      maxSum = sum
    }
    // if currentSum < 0, then set currentSum to 0
    if (sum < 0) sum = 0
    
  }
  return maxSum
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]
let res1 = maxSubArr(nums)

console.log('max sub array sum ', res1)
