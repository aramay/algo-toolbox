/**
 * https://leetcode.com/problems/valid-anagram/description/
 * Neetcode: https://www.youtube.com/watch?v=9UtInBqnCgA
 * https://neetcode.io/problems/is-anagram
 */

/**
 * 242. Valid Anagram
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

STRETCH-CHALLENGE : Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
const validAnagram = (s, t) => {
    console.log("validanagram")
}
// Example 1:
let s = "anagram", t = "nagaram"
// Output: true
const testcase1 = validAnagram(s, t)
console.log(testcase1)

// Example 2:

let s = "rat", t = "car"

// Output: false