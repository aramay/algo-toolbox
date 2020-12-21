// This is the ES6 version if Numbers in range example.

class NumbersInRange {
  constructor (input, low, high) {
    this._result = []
    this._input = input
    this._low = low
    this._high = high
  }

  numbersInRange () {
    this._result = this._input.filter((currentValue) => {
      if (currentValue >= low && currentValue <= high) {
        return currentValue
      }
    })

   // this is using a function call back
    /*this._result = this._input.filter(cbf)
    function cbf (n) {
      if (n >= low && n <= high) {
        return n
      }
    } */
  }
}

function assertEquals (actual, expected, testName) {
  console.log(Array.from(arguments))
  let isEqualLen = actual.length === expected.length
  let arrStringify = JSON.stringify(actual) === JSON.stringify(expected)
  if (isEqualLen) {
    console.log(`Passed.. Is Equal len`)
  }
  if (arrStringify) {
    console.log(`Passed .. Has same content: Expected ${expected} got ${actual}`)
  } else {
    console.log(`FAILED!! [${testName}] Expected ${expected} but got ${actual}`)
  }
}

let input = [3, 34, 4, 12, 5, 2]
let low = 1
let high = 10
let expected = [3, 4, 5, 2]

let numbersInRange = new NumbersInRange(input, low, high)
numbersInRange.numbersInRange()

console.log(numbersInRange._low)
console.log(numbersInRange.numbersInRange())
console.log(numbersInRange._result)

assertEquals(numbersInRange._result, expected, `filter numbers in range`)
