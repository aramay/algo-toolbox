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
   
   frequency_map = {}
   window_start, max_repeat_letter_count, max_length = 0, 0, 0

   for window_end in range(len(str)):
      right_char = str[window_end]

      if right_char not in frequency_map:
         frequency_map[right_char] = 0
      frequency_map[right_char] += 1
      
      max_repeat_letter_count = max(max_repeat_letter_count, frequency_map[right_char])

      count = window_end - window_start + 1 - max_repeat_letter_count

      if (count) > k:
         left_char = str[window_start]

         frequency_map[left_char] -= 1
         window_start += 1

      max_length = max(max_length, window_end - window_start + 1)

   return max_length


class Test(unittest.TestCase):
   def test_len_of_longest_sustring(self):
      result = len_of_longest_sustring(str="aabccbb", k=2)
      print("result ", result)

      assert result == 5


unittest.main(verbosity=2)
