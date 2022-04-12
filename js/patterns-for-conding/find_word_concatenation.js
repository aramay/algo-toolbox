/**
 * Problem Challenge 4
 * Words Concatenation (hard)#
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".
 */

const findWordContatenation = (str, words) => {
  console.log('func called')

  if (words.length === 0 || words[0].length === 0) return []

  const wordsFrequency = {}
  const resultIndices = []
  const wordsCount = words.length
  const wordLen = words[0].length
  const len = str.length
  const lesThan = (len - wordsCount * wordLen) + 1

  words.forEach((word) => {
    if(!(word in wordsFrequency)) {
      wordsFrequency[word] = 0
    }
    wordsFrequency[word] += 1
  })

  for(let i = 0; i < lesThan; i ++ ) {
    console.log('i ', i)
    const wordsSeen = {}

    for(let j = 0; j < wordsCount; j++) {
      let nextWordIndex = i + j * wordLen

      let word = str.substring(nextWordIndex, nextWordIndex + wordLen)

      // break if we dont need this word
      if (!(word in wordsFrequency)) {
        break;
      }
      // add word to wordsSeen
      if(!(word in wordsSeen)){
        wordsSeen[word] = 0
      }

      wordsSeen[word] += 1

      // no need to process further - word frequency higher than required
      if (wordsSeen[word] > (wordsFrequency[word] || 0)) {
        break;
      }
      // store indexes if all words are found
      if (j + 1 === wordsCount) {
        resultIndices.push(i)
      }
    }
  }
  return resultIndices
}

let Input1 = "catfoxcat" 
let words1 = ["cat", "fox"]
console.log(findWordContatenation(Input1, words1))
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".

// Example 2:
let Input2 = "catcatfoxfox"
let words2 = ["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".
