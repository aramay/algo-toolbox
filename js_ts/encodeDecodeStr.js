/**
 * neetcode: https://neetcode.io/problems/string-encode-and-decode?list=neetcode150
 * YT: https://www.youtube.com/watch?v=B1k_sxOSgv8
 * leetcode: https://leetcode.com/problems/encode-and-decode-strings/description/
 * Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.

 */


/**
 * GEMINI VERSION
 */

/*
 * Encodes a list of strings to a single string.
 * @param {string[]} strs - The list of strings to encode.
 * @return {string} The encoded single string.
 */
function encode(strs) {
  let res = "";
  for (const s of strs) {
    res += s.length + "#" + s;
  }
  return res;
}

/*
 * Decodes a single string to a list of strings.
 * @param {string} str - The single string to decode.
 * @return {string[]} The decoded list of strings.
 */
function decode(str) {
  const res = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    // console.log("str.substring(i, j)", str.substring(i, j))
    const length = parseInt(str.substring(i, j), 10);
    res.push(str.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return res;
}

// Test Case 1
const testCase1 = ["lint", "code", "love", "you"];
const encoded1 = encode(testCase1);
console.log("encode ", encoded1)
const decoded1 = decode(encoded1);
console.log("decoded1 ", decoded1); // Should be ["lint", "code", "love", "you"]
console.log(JSON.stringify(decoded1) === JSON.stringify(testCase1)); // Should be true