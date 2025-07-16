/**
 * https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1252/assignments/1-cpp/perfect#observing-the-runtime
 */

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

sum_non_optimized(28);
sum_non_optimized(36);
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
