/**
 * Given a string, find the length of the longest substring, which has all distinct characters.
 * Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
 */

const nonRepeatingSubStr = () => {
  console.log('func called')
}

let Input1 = "aabccbb"
let res1 = nonRepeatingSubStr(Input1) // Output: 3

console.log('res1 ', res1)