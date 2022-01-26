/** https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
 * Problem Statement#
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

 */

const fruitsIntoBasket = (fruits) => {
  console.log('in the func')
  let winStart = 0
  let fruitFrequency = {}
  let max = 0

  for (let winEnd = 0; winEnd < fruits.length; winEnd++) {
    let temp = fruits[winEnd]
    
    if (fruitFrequency[temp] === undefined) {
      fruitFrequency[temp] = 1
    } else {
      fruitFrequency[temp] += 1
    }
    console.log('fruitFrequency ', fruitFrequency)
    
    while (Object.keys(fruitFrequency).length > 2) {
      let temp = fruits[winStart]
      console.log('temp while loop', temp)
      
      fruitFrequency[temp] -= 1
  
      if (fruitFrequency[temp] === 0) {
        delete fruitFrequency[temp]
      }
      winStart += 1
      
    }
    max = Math.max(max, winEnd - winStart + 1)
  }
  // console.log(fruits.slice(winStart, winEnd))
  return max
}

let Fruit=['A', 'B', 'C', 'A', 'C']

const res1 = fruitsIntoBasket(Fruit) //Output: 3

console.log('res1 ', res1)

