"""
Problem Statement #
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
"""
import unittest

def len_of_longest_sustring(str, k):
   
   chr_frequency_map = {}
   max_len, window_start, max_repeat_letter = 0, 0, 0

   for window_end in range(len(str)):
      right_chr = str[window_end]

      if right_chr not in chr_frequency_map:
         chr_frequency_map[right_chr] = 0
         
      chr_frequency_map[right_chr] += 1

      max_repeat_letter = max(max_repeat_letter, chr_frequency_map[right_chr])

      if (window_end - window_start + 1 - max_repeat_letter) > k:
         
         left_chr = str[window_start]
         chr_frequency_map[left_chr] -= 1

         window_start += 1

      max_len = max(max_len, window_end - window_start + 1)

   return max_len



class Test(unittest.TestCase):
   def test_len_of_longest_sustring(self):
      result = len_of_longest_sustring(str="aabccbb", k=2)
      print("result ", result)

      assert result == 5


unittest.main(verbosity=2)
