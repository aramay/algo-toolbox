/**
 * https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1252/assignments/1-cpp/perfect#observing-the-runtime
 */

import { result } from "cypress/types/lodash";

// The actual code's optimized loop
function sum_optimized(num){
    let sum_optimized = 1;
    for (let i = 2; i * i <= num; i++) { // Loop goes up to 5 (since 5*5=25 <= 28, but 6*6=36 > 28)
    if (num % i === 0) {
        sum_optimized += i;
        // 2nd if nested inside 1st if
        if (i !== num / i) {
            sum_optimized += num / i;

            }
        }
    }
    return sum_optimized === num
}

const t = sum_optimized(28)
console.log(t)


// For 28:
// i=2: 28 % 2 === 0
//    sum_optimized += 2 (sum=3)
//    2 !== 28/2 (2 !== 14) -> true. sum_optimized += 14 (sum=17)
// i=3: 28 % 3 !== 0
// i=4: 28 % 4 === 0
//    sum_optimized += 4 (sum=21)
//    4 !== 28/4 (4 !== 7) -> true. sum_optimized += 7 (sum=28)
// i=5: 28 % 5 !== 0
// Loop ends because 6 * 6 = 36, which is not <= 28.
// Final sum_optimized = 28

// Hypothetical non-optimized loop for finding divisors
function sum_non_optimized(num) {
  let sum_non_optimized = 1;
  for (let i = 2; i <= num / 2; i++) {
    // Loop goes up to 14
    console.log("i=", i);
    if (num % i === 0) {
      sum_non_optimized += i;
      console.log("sum_non_optimized -> sum +=", i, "=>", sum_non_optimized);
    }
  }
  console.log("final sum ", sum_non_optimized, "\n");
}

// sum_non_optimized(28);
// sum_non_optimized(36);
// For 28:
// i=2, sum += 2 (sum=3)
// i=3, no
// i=4, sum += 4 (sum=7)
// i=5, no
// i=6, no
// i=7, sum += 7 (sum=14)
// i=8, no
// ...
// i=13, no
// i=14, sum += 14 (sum=28)
// Final sum_non_optimized = 28

function perfectNumber(number) {
  let result = 0;

  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      result += i;
    }
    console.log(result);
  }
  return number === result;
}

// const testcase1 = perfectNumber(36);
// console.log("test case 1 ", testcase1);

// This is not working
/**
 *  function perfectNumber1(number){

  let result = 0
  let count = 1
  let temp = 0

  while (count < number){
    temp = number / count
    console.log(temp)
    if (Number.isInteger(temp)){
      result += count
    }
    count += 1
  }
  console.log("result ", result)
}

perfectNumber1(28)
 */
