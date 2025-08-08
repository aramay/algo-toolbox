/**
 * leetcode: 
 * YT: https://youtu.be/jJXJ16kPFWg
 * Neetcode: https://neetcode.io/problems/is-palindrome?list=neetcode150
 * Valid Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.
 */

const isPalindrome = (str) => {

    let leftIndex = 0
    let caseInsensitiveStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

    let rightIndex = caseInsensitiveStr.length - 1


    while (leftIndex <= rightIndex) {
        if (caseInsensitiveStr[leftIndex] === caseInsensitiveStr[rightIndex]) {

            // increment index left to right 
            // right to left
            leftIndex += 1
            rightIndex -= 1
        }
        else {
            // console.log('true')
            return false
        }
    }
    return true
}

let s1 = "tab a cat"

// Output: false

// console.log("isPalindrome 1", isPalindrome(s1))

let s2 = "Was it a car or a cat I saw?"

// Output: true

console.log(isPalindrome(s2))


/**
 * LEETCODE SOLUTION
 */

var isPalindrome1 = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
};