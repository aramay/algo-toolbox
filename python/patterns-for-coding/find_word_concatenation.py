import unittest

"""
Words Concatenation (hard) #
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:
Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".

Example 2:
Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".

Example 3:
"""

def find_word_concat(input:str, words:str) -> str:
   result_indices = []

   word_frequency = {}

   for word in words:
      if word not in word_frequency:
         word_frequency[word] = 0
      word_frequency[word] += 1

   word_len = len(words[0])
   words_count = len(words)

   for i in range((len(input) - words_count * word_len) + 1):
      
      words_seen = {}
      
      for j in range(0, words_count):

         next_word_index = i + j * word_len

         word = input[next_word_index: next_word_index + word_len]

         if word not in word_frequency:
            break

         # add word to word seen map
         if word not in words_seen:
            words_seen[word] = 0
         words_seen[word] += 1

         # no need to process further
         if words_seen[word] > word_frequency.get(word, 0):
            break

         # store index if we've seen all words
         if j + 1 == words_count:
            result_indices.append(i)


   return result_indices


class TestWordConcat(unittest.TestCase):
   
   def test_word_count(self):
      result = find_word_concat(input="catfoxcat", words=["cat", "fox"])

      print ("result => ", result)
      assert result == [0, 3]

unittest.main(verbosity=2)