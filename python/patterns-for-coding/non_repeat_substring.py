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
   win_start_index = 0
   non_repeat_chr = {}
   max_len = 0

   for win_end_index in range(len(str)):
      right_chr = str[win_end_index]
      
      if right_chr in non_repeat_chr:
         win_start_index = max(win_start_index, non_repeat_chr[right_chr] + 1)

      non_repeat_chr[right_chr] = win_end_index

      max_len = max(win_start_index, win_end_index + 1)

   print(non_repeat_chr) 
   print("max_len ", max_len)

   return max_len


class Test(unittest.TestCase):
   # def test_non_repeat_substring(self):
   #    result = non_repeat_substring("aabccbb")
   #    print(result)

   #    assert result == 3
   
   # def test_non_repeat_substring1(self):
   #    result = non_repeat_substring("aabccbb")
   #    print(result)

   #    assert result == 2
   
   def test_non_repeat_substring2(self):
      result = non_repeat_substring("ABCBA")
      print(result)

      assert result == 3

unittest.main(verbosity=2)