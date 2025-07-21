/**
 * YT: https://www.youtube.com/watch?v=KLlXCFG5TnA
 * link: https://neetcode.io/problems/two-integer-sum?list=neetcode150
 * Two Sum
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
 */

/*Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
*/

const twoSum = (nums, target) => {
    console.log(nums)
    const prevMap = new Map()
    let diff = 0

    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]

        if (prevMap.has(diff)){
            return [prevMap.get(diff), i]
        }
        prevMap.set(nums[i], i)
    }
    return // end 
}


let nums = [3,4,5,6], target = 7
const testcase1 = twoSum(nums, target)
console.log("testcase1 ", testcase1)

/*
Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
*/
let nums1 = [4,5,6], target1 = 10
const testcase2 = twoSum(nums1, target1)
console.log("testcase2 ", testcase2)