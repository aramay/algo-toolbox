"""
Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".


"""
import unittest

def non_repeat_substring(str):
   windown_start = 0
   max_length = 0

   non_repeat_chr = {}

   for window_end in range(len(str)):
      right_chr = str[window_end]
      # if the map already contains the 'right_char', shrink the window from the beginning so that
      # we have only one occurrence of 'right_char'

      if right_chr not in non_repeat_chr:
         non_repeat_chr[right_chr] = 0
      non_repeat_chr += 1


class Test(unittest.TestCase):
   def test_non_repeat_substring(self):
      result = non_repeat_substring("aabccbb")

unittest.main(verbosity=2)