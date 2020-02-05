"""
Problem Statement #
Given an array containing 0s and 1s, if you are allowed to replace no more than 
‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

"""
import unittest

def len_of_longest_substring(str, k):
   window_start, max_one_count, max_len = 0,0,0
   frequency_map = {}

   for window_end in range(len(str)):
      if str[window_end] == 1:
         max_one_count += 1

      if (window_end - window_start + 1 - max_one_count) > k:
         if str[window_start] == 1:
            max_one_count -= 1
         window_start += 1
      
      max_len = max(max_len, window_end - window_start + 1)
   
   return max_len


class Test(unittest.TestCase):

   def test_len_of_longest_substring(self):
      result = len_of_longest_substring(str=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2)

      assert result == 6


unittest.main(verbosity=2)