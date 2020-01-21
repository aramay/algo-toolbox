"""
Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example#1
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example#2
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example#3
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
"""
import unittest

def longest_substring_with_k_distinct(str, k):
   result = {}

   window_start = 0
   max_length = 0

   for window_end in range(len(str)):
      right_chr = str[window_end]

      if right_chr in chr_frequency:
         chr_frequency[right_chr] += 1
      chr_frequency[right_chr] = 0

   for chr in str:
      if chr in result:
         result[chr] += 1
      result = chr


class Test(unittest.TestCase):
   
   def test_longest_substring_with_k_distinct(self):
      pass

unittest.main(verbosity=2)