// This is the ES6 version if Numbers in range example.

class NumbersInRange {
   constructor(input, low, high) {
      this._input = input
      this._low = low
      this._high = high
   }

   get NumbersInRange() {
      this._input.filter(cbf)

      function cbf(index, n) {
         if(n >= low && n <= high){
            return n
         }
      }
   }
}


let input = [3, 34, 4, 12, 5, 2]
let low = 1
let high = 10
let expected = [3, 4, 5, 2]

let numbersInRange = new NumbersInRange()