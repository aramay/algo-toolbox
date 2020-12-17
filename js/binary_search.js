/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function BSearch(input, targetValue) {
  // code goes here
  this.input = input
  this.targetValue = targetValue
  this.result = this.search()
  
}


BSearch.prototype.search = function () {
  // pick the middle point of input
  
  let midPoint = Math.floor(this.input.length / 2)
//   let result = null
  let totalLen = this.input.length

  let ans;
  
  function findValue(args, midPoint, targetValue){
    if (targetValue === args[midPoint]){
      
      return ans = {'midPoint' : midPoint, 'targetValue':targetValue}
    }
    // else - return null
    else if (args.length === 1){
      if (targetValue !== args[midPoint]){
        return null
      }
    }
    // 
    else if(targetValue > args[midPoint]){
      let rightTemp = args.slice(midPoint, totalLen)
      midPoint = Math.floor(rightTemp.length / 2)
      findValue(rightTemp, midPoint, targetValue)
    }
    // else value < than value at given index -> go left
    else if (targetValue < args[midPoint]){
      let  leftTemp = args.slice(0, midPoint)
      midPoint = Math.floor(leftTemp.length / 2)
      findValue(leftTemp, midPoint, targetValue)
    }
  return ans
  }
  
  return findValue(this.input, midPoint, this.targetValue)

}

BSearch.prototype.returnIndex = function () {
  let result = this.search()

  if (result){
    return this.input.indexOf(result['targetValue'])

  }
  else {
    return null
  }
}

  



function assertEquals(actual, expected, testName){
  if (actual === expected){
    console.log('passed')
  }
  else {
    console.log(`FAILED! [${testName}] Expected ${expected} but got ${actual}`)
  }
}
let input1 = [1, 3, 16, 22, 31, 33, 34, 101]
let targetValue1 = 99

let actual1 = new BSearch(input1, targetValue1)

let expected1 = null // index of value

let result1 = actual1.returnIndex()

assertEquals(result1, expected1, "binarySearch - value 99 not found -> index is null")

