/**
 * Maximum Sum Subarray of Size K (easy)
https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 */

const max_sub_array_of_size_k = (k, input) => {
  console.log('function called')
  let max_sum = 0

  const calculate_sum = (temp, i) => {
    let window_sum = 0

    for (let j = 0; j < temp.length; j++) {
      window_sum += temp[j]
    }
    // update max_sum
    // if (window_sum > max_sum) {  
    //   max_sum = window_sum
    // }

    max_sum = Math.max(max_sum, window_sum)
  }

  for(let i = 0; i < input.length; i++) {
    
    let temp = input.slice(i, k + i)

    calculate_sum(temp, i)
  }
  return max_sum
}

let input1 = [2, 1, 5, 1, 3, 2]
let k = 3
let result = max_sub_array_of_size_k(k, input1) // [5, 1, 3] => 9

console.log('result ', result)


/**
 * Input: 
Output: 7
Explanation: Subarray with maximum sum is [3, 4]. => 7
 */

const input2 = [2, 3, 4, 1, 5]
let k1 = 2
result = max_sub_array_of_size_k(k1, input2) 

console.log('result2 ', result)