/**
Write an efficient function that checks whether any permutation ↴of an input string is a palindrome. ↴
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false


*/

const permutationPalindrome = (input) => {
  console.log('func called')
  const unPairedChrs = new Set()

  for (let chr of input) {
    console.log('inside loop')
    if (unPairedChrs.has(chr)) {
      unPairedChrs.delete(chr)
    } else {
      unPairedChrs.add(chr)
    }
  }
  // If it has zero OR one characters without a pair
  return unPairedChrs.size <= 1
}

console.log(permutationPalindrome("civic"))
