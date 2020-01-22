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

"""
This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed in Smallest Subarray with a given sum. We can use a HashMap to remember the frequency of each character we have processed. Here is how we will solve this problem:

First, we will insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap.
These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.
After this, we will keep adding one character in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.
While shrinking, we’ll decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.
At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
"""
import unittest

def longest_substring_with_k_distinct(str, k):
   chr_frequency = {}

   window_start = 0
   max_length = 0

   for window_end in range(len(str)):
      right_chr = str[window_end]

      if right_chr not in chr_frequency:
         chr_frequency[right_chr] = 0
      chr_frequency[right_chr] += 1

      while len(chr_frequency) > k:
         left_chr = str[window_start]

         chr_frequency[left_chr] -= 1

         if chr_frequency[left_chr] == 0:
            del chr_frequency[left_chr]
         
         window_start += 1
      max_length = max(max_length, window_end - window_start + 1)
   
   return max_length


class Test(unittest.TestCase):
   
   def test_longest_substring_with_k_distinct(self):
      result = longest_substring_with_k_distinct("araaci", k=2)

      assert result == 4

unittest.main(verbosity=2)