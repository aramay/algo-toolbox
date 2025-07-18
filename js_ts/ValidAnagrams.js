/**
 * https://leetcode.com/problems/valid-anagram/description/
 * Neetcode: https://www.youtube.com/watch?v=9UtInBqnCgA
 * https://neetcode.io/problems/is-anagram
 */


const isAnagram = (s, t) => {
  if(s.length !== t.length){
    return false;
  }
  let count = new Array(26).fill(0)
  console.log(count)
  for(let i =0; i <s.length; i++){
    let temp = s.charCodeAt(i) - 97
    
    count[s.charCodeAt(i)-97]++;
    count[t.charCodeAt(i)-97]--;
  }
for(let i =0; i < 26; i++){
    if(count[i] !== 0){
        return false;
    }

}

return true;
};

// Test Cases:
console.log(isAnagram("listen", "silent"));     // true

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
    const S = new Map()
    const T = new Map()

    const len = s.length

    if (s.length !== t.length) return false

    for (let i = 0; i < len; i++) {
        let tempS = s[i]
        let tempT = t[i]
        if (!S.has(tempS)) {
            S.set(tempS, 1)
        } else {
            S.set(tempS, S.get(tempS) + 1)
        }
        if (!T.has(tempT)) {
            T.set(tempT, 1)
        } else {
            T.set(tempT, T.get(tempT) + 1)
        }
    }

    for (let [key, ] of S.entries()) {

        if (S.get(key) !== T.get(key)) {
            return false
        }
    }
    console.log(S)
    console.log(T)
    return true

}
// Example 1:
let s = "anagram", t = "nagaram"
// Output: true
// const testcase1 = validAnagram(s, t)
// console.log(testcase1)

// Example 2:

let s1 = "rat", t1 = "car"

// Output: false
const testcase2 = validAnagram(s1, t1)
console.log(testcase2)