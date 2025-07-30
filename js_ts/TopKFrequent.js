/**
 * Link: https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
 * 
 * Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

 */
const topKFrequent = (nums, k) => {
    console.log(nums, k)
    const kFreq = new Map();

    for (let i = 0; i < nums.length; i++) {

        let temp = nums[i]

        kFreq.set(temp, (kFreq.get(temp) || 0) + 1)
    }
    console.log("kFreq ", kFreq)
}

/**
 * Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
 */
let nums = [1,2,2,3,3,3], k = 2
const testcase1 = topKFrequent(nums, k)
console.log("testcase1 ", testcase1)
