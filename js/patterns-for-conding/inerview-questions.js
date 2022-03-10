// ####### 1 #######
// What is the value of arr after this code runs?
const arr = []

const testExceptions = () => {
  try {
  arr.push('try')
  throw new Error('exception occured')
  } catch(e) {
    arr.push('catch')
  } finally {
    arr.push('finally')
  }
}


testExceptions()
console.log(arr)
// ####### 1 #######

// ####### 4 #######

// What is logged when second function runs?
let x = 'fog'
function first() {
  console.log(x)
}

x = 'dog'
function dog() {
  let x = 'log'
  first()
}

dog()
// ####### 4 #######

// ####### 5 #######
// What is the value of following program?
function myFunc(y1, y2, ...y3) {
  const [x1, ...[result]] = y3
  console.log(result)
}
const arr1 = ['rock', 'paper', 'scissors', 'lizard', 'spock']

myFunc(arr1) // undefined
// ####### 5 #######

// ####### 6 #######
// Which of the following does not create a valid function
const double = x => x*2
// function double = () => return x*2 // invlaid FUNC
function double1(x) { return x*2 }
const double2 = function(x) { return x*2 }

console.log(double(2))
console.log(double1(2))
let y = double2(2)
console.log(y)
// ####### 6 #######

















