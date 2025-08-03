/**
 * Neetcode: https://neetcode.io/problems/longest-consecutive-sequence?list=neetcode150
 * YT: https://www.youtube.com/watch?v=P6RZZMu_maU
 * leetcode: https://leetcode.com/problems/longest-consecutive-sequence/description/
 * Longest Consecutive Sequence
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7
Constraints:

0 <= nums.length <= 1000
-10^9 <= nums[i] <= 10^9
 */

const longestConsecutive = (nums) => {
    console.log(nums)

    const numSet = new Set(nums);
    let longest = 0
    let length = 0

    for ( let num of numSet) {
        console.log(num)
        // check if it is not a start of the sequence
        if (!numSet.has(num - 1)) {
            length = 1

            while (numSet.has(num + length)) {
                length += 1
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
}

// Example 1:

let nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].
const testcase1 = longestConsecutive(nums)
console.log("testcase1 ", testcase1)