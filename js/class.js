// return the number in a given range


function NumbersInRange(input, low, high) {
   this.input = input

   this.low = low

   this.high = high
   this.result = []
}

NumbersInRange.prototype.getNumbersInRange = function () {
  let temp = this.input
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > this.low){
      this.result.push(temp[i])
    }
    else if (temp[i] < this.high) {
      this.result.push(temp[i])
    }
  }
}

function assertEquals(actual, expected, testName) {
  console.log(Array.from(arguments))
  
  let isEqualLen = actual.length === expected.length
  
  if(isEqualLen){
    console.log('passed')
  }
  else {
    console.log(`FAILED! [${testName}] Expected ${expected} but got ${actual}`)
  }
}


let input = [3, 34, 4, 12, 5, 2]
let low = 1
let high = 10
let expected = [3, 4, 5, 2]

let actual = new NumbersInRange(input, low, high)
console.log(actual)
actual.getNumbersInRange()

let result = actual.result



assertEquals(result, expected, 'Numbers in range')