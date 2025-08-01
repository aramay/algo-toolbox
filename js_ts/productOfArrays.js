/**
 * Neetcode: https://neetcode.io/problems/products-of-array-discluding-self?list=neetcode150
 * Products of Array Except Self
 * YT: https://www.youtube.com/watch?v=bNvIQI2wAjk
 * leetcode: https://leetcode.com/problems/product-of-array-except-self/
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O
(
n
)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20
 */

const productExceptSelf = (nums) => {
    console.log("nums ", nums)
    
    let prefix = 1, postfix = 1

    // let result = Array.from({length: nums.length}, () => 1)
    let result = new Array(nums.length)
    console.log("result " , result)

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    console.log("result ", result)
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix 
        postfix *= nums[i]
    }
    return result
}

let nums = [1,2,4,6]

// Output: [48,24,12,8]
// [0] - 6*4*2*1 = 48
// [1] - 6*4 = 24 - 48
// [2] - 
const testcase1 = productExceptSelf(nums)
console.log("testcase1 ", testcase1)