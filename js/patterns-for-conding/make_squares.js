/**
 * Squaring a Sorted Array (easy)

 * Problem Statement#
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
 */

const makeSquares = (input) => {
  console.log('func called');
  const n = input.length
  const squares = Array(n).fill(0)
  let left = 0
  let right = n - 1
  
  let highestSquareIndex = n - 1

  while (left < right) {
    let leftSquare = input[left] * input[left]

    let rightSquare = input[right] * input[right]

    if (leftSquare > rightSquare) {
      squares[highestSquareIndex] = leftSquare

      left += 1
    } else {
      squares[highestSquareIndex] = rightSquare

      right -= 1
    }

    highestSquareIndex -= 1
  }
  return squares
}

let input1 = [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
console.log(makeSquares(input1))

let input2 = [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]
console.log(makeSquares(input2))
