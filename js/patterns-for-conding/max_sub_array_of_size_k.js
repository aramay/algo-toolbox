/**
 * Maximum Sum Subarray of Size K (easy)
https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 */



const maxSubArrayOfSizeK = (k, input) => {
  console.log('function called')
  let max_sum = 0

  // helper method to calculate subarray sum
  const calculateSum = (temp) => {
    let window_sum = 0

    for (let j = 0; j < temp.length; j++) {
      window_sum += temp[j]
    }
    // calculate max of (max_sum and widow_sum)
    max_sum = Math.max(max_sum, window_sum)
  }

  for (let i = 0; i < input.length; i++) {
    let temp = input.slice(i, k + i)
    // call helper method to calculate sum
    calculateSum(temp, i)
  }
  return max_sum
}

/** 
 * Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
 */

let input1 = [2, 1, 5, 1, 3, 2]
let k = 3
let result = maxSubArrayOfSizeK(k, input1) // [5, 1, 3] => 9

console.log('result ', result)


/**
 * Input: [2, 3, 4, 1, 5]
Output: 7
Explanation: Subarray with maximum sum is [3, 4]. => 7
 */

const input2 = [2, 3, 4, 1, 5]
let k1 = 2
result = maxSubArrayOfSizeK(k1, input2)

console.log('result2 ', result)
