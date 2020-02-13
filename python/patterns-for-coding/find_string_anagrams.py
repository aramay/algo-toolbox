"""
Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 1:
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
"""
import unittest

def find_string_anagram(str, pattern):
   window_start, matched = 0,0
   chr_frequency = {}
   indexes = []

   for char in pattern:
      if char not in chr_frequency:
         chr_frequency[char] = 0
      chr_frequency[char] += 1

   for window_end in range(len(str)):
      right_chr = str[window_end]

      if right_chr in chr_frequency:
         chr_frequency[right_chr] -= 1

         if chr_frequency[right_chr] == 0:
            matched += 1
            indexes.append(window_end)

      if window_end > len(pattern) - 1:
         left_chr = str[window_start]
         window_start += 1

         if left_chr in chr_frequency:
            
            if chr_frequency[left_chr] == 0:
               matched -= 1

            chr_frequency[left_chr] += 1

   return []



class Test(unittest.TestCase):
   def test_find_string_anagram(self):
      
      result = find_string_anagram("ppqp", "pq")
      assert result == [1, 2]


unittest.main(verbosity=2)