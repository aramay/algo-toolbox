/**
 * Subarray Sum
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.

Input: Array of integers, target value
Output: Boolean
Example
Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
All elements are positive

 */

function subArraySum (args, target) {
  console.log(args)

  var currentSum = args[0],
    start = 0,
    i = 1,
    len = args.length - 1

  for (i = 1; i <= len; i++) {
    while (currentSum > target && start < i - 1) {
      currentSum = currentSum - args[start]

      start++
    }

    if (currentSum === target) {
      console.log('Subarray found')
      console.log(start, i)
      console.log(args.slice(start, i))
      return true
    }

    currentSum += args[i]
  }
  console.log(currentSum)

  console.log('No subarray found')
  return 0
    // while(args[index] !== undefined){

    //     console.log(args[index])
    //     index ++
    // }

    // break;
}

console.log(subArraySum([6, 12, 1, 7, 5, 2, 3], 14))
