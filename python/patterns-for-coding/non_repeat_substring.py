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
   window_start = 0
   max_length = 0

   non_repeat_chr = {}

   for window_end in range(len(str)):
      right_chr = str[window_end]
      # if the map already contains the 'right_char', shrink the window from the beginning so that
      # we have only one occurrence of 'right_char'

      if right_chr in non_repeat_chr:
         
         window_start = max(window_start, non_repeat_chr[right_chr] + 1)
      
      non_repeat_chr[str[window_end]] = window_end
      max_length = max(max_length, window_end - window_start + 1)
   return max_length


class Test(unittest.TestCase):
   def test_non_repeat_substring(self):
      result = non_repeat_substring("aabccbb")
      print(result)

      assert result == 3
   
   def test_non_repeat_substring1(self):
      result = non_repeat_substring("aaaaaaa")
      print(result)

      assert result == 1

unittest.main(verbosity=2)