"""
Problem Statement #
Given an array of positive numbers and a positive number ‘S’, 
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example # 1
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example # 2
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example # 3
Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
"""

import unittest
import math

def smallest_subarray_with_given_sum(arr, s):
   window_sum = 0
   window_start = 0
   min_length = math.inf

   for window_end in range(len(arr)):
      
      window_sum += arr[window_end]

      while window_sum >= s:
         min_length = min(min_length, window_end - window_start + 1)

         window_sum -= arr[window_start]

         window_start += 1
   
   return min_length

class Test(unittest.TestCase):

   def test_smallest_subarray_with_given_sum(self):
      result = smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], s=7)
      print("result ", result)
      assert result == 2

   def test_smallest_subarray_with_given_sum1(self):
      result = smallest_subarray_with_given_sum([2, 1, 5, 2, 8], s=8)

      assert result == 8


unittest.main(verbosity=3)