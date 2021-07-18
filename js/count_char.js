/*

Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

*/

function detectOutlierValue(input) {
  // loop over input
  // let outliers = new Set()
  input = input.split(' ')
  let outliers = {}
  let result = 0

  for (let i=0; i<input.length; i++) {
    // check if number is even or odd
    // return index + 1
    let temp = parseInt(input[i])

    if (temp % 2 === 0){
      outliers[temp] = {'isEven': true, 'index': i + 1}
    }
    else {
      outliers[temp] = {'isOdd': true, 'index': i + 1}
    }

    
  }

  result = helperDetectOutlier(outliers)
  return result
  
  // else if (temp / 2 !== 0) {
  //   return i + 1
  // }
}


function helperDetectOutlier(input){
  // code goes here
  let countEven = 0
  let countOdd = 0

  for (let i in input) {
    
    let temp = input[i]
    if(temp.isEven === true){
      countEven ++
    }

    else if (temp.isOdd === true) {
      countOdd ++ 
    }
  }

  if (countEven > countOdd){
    return input[]
  }

  console.log(countEven, countOdd)
}

console.log(detectOutlierValue("2 4 7 8 10"))
// console.log(detectOutlierValue("1 10 1 1"))