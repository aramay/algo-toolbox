/**
 * link: https://neetcode.io/problems/anagram-groups?list=neetcode150
 * YT: https://www.youtube.com/watch?v=vzdNOK2oB2E
 * leetcode: https://leetcode.com/problems/group-anagrams/
 * Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
 */

const solutionGroupAnagram = (strs) => {
    console.log("strs ", strs)

    const anagramsDict = new Map();

    for (const s of strs) {
        const count = new Array(26).fill(0)

        for (const c of s) {

            console.log(c.charCodeAt(0))
            console.log("a".charCodeAt(0))


            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
            
        }

        const keys = count.toString();

        if (!anagramsDict.has(keys)) {
            anagramsDict.set(keys, [])
        }

        anagramsDict.get(keys).push(s)

    }
    console.log("anagramsDict ", anagramsDict)
    return Array.from(anagramsDict.values())
}

/*
Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
*/
let strs1 = ["act","pots","tops","cat","stop","hat"]
const testcase2 = solutionGroupAnagram(strs1)
console.log("testcase1 ", testcase2)

/**
 * NAIVE approach
 */
const groupAnagrams = (strs) => {
    console.log(strs)
    
    let S = new Map();

    if (strs.length === 0) {
        return [""]
    }

    for (let i = 0; i < strs.length; i++) {
        let temp = strs[i]
        console.log("temp ", temp)
        for (let j = 0; j < temp.length; j++) {
            
            let char = temp[j]
            S.set(char, (S.get(char) || 0) + 1)
        }
        
    }

    console.log(" S ", S)
}


/*
Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// */
// let strs = ["act","pots","tops","cat","stop","hat"]
// const testcase1 = groupAnagrams(strs)
// console.log("testcase1 ", testcase1)
