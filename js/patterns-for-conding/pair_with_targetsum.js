/**
 * Problem Statement#
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 */

const pairWithTargetSum = (arr, targetSum) => {
  console.log('func called')

  let p1 = 0
  let p2 = arr.length - 1
  const result = []

  let searchComplete = true

  while (searchComplete) {
    let sum = arr[p1] + arr[p2]

    if (sum > targetSum) {
      p2 -= 1
    } else if (sum < targetSum) {
      p1 += 1
    } else if (sum === targetSum) {
      result.push(p1, p2)
      searchComplete = false
    }
  }
  return result
}

let input1 = [1, 2, 3, 4, 6]
let target1 = 6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

console.log(pairWithTargetSum(input1, target1))