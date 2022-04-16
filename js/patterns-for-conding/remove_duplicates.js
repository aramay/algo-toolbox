/**
 * Remove Duplicates (easy)

 * Problem Statement#
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
 */

/*
const removeDuplicates = (arr) => {
  console.log('func called');
  let p1 = 0
  let p2 = p1 + 1

  let searchComplete = true

  while (searchComplete) {

    if (p2 === arr.length) searchComplete = false

    if (arr[p1] === arr[p2]) {
      arr.splice(p2, 1)
      // p2 += 1
    } else {
      p1 += 1
      p2 = p1 + 1
    }
  }
  return arr
}

let Input1 = [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

console.log(removeDuplicates(Input1));
*/


const removeDuplicates2 = (arr) => {
  console.log('func called');
  let nextNonDuplicate = 1
  let i = 0

  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i]
      nextNonDuplicate += 1
    }
    i += 1
  }
  console.log('arr', arr)
  return nextNonDuplicate
}

let Input1 = [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

console.log(removeDuplicates2(Input1));