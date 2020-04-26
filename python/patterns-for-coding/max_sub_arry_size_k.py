"""
Problem Statement #
Given an array of positive numbers and a positive number ‘k’, 
find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

"""
import unittest

def max_sub_array_of_size_k(arr, k):
   max_sum = 0

   for i in range(len(arr) - k + 1):
      
      window_sum = 0

      for j in range(i, k + 1):
         window_sum += arr[j]
      max_sum = max(window_sum, max_sum)
   
   print("max_sum ", max_sum)
   return max_sum

def max_sub_array_of_size_k_1(arr, k):
   
   max_sum = 0
   window_sum = 0
   windowStart = 0

   for windowEnd in range(len(arr)):
      
      window_sum += arr[windowEnd]

      if windowEnd >= k - 1:

         max_sum = max(window_sum, max_sum)
         window_sum -= arr[windowStart]

         windowStart += 1
   
   print("max_sum ", max_sum)
   return max_sum


class Test(unittest.TestCase):
   
   def test_max_sum_sub_arr(self):
      result = max_sub_array_of_size_k([2, 1, 5, 1, 3, 2], k=3)
      print("result ", result)
      assert result == 9
   
   def test_max_sum_sub_arr1(self):
      result = max_sub_array_of_size_k_1([2, 1, 5, 1, 3, 2], k=3)
      print("result ", result)
      assert result == 9


unittest.main(verbosity=2)