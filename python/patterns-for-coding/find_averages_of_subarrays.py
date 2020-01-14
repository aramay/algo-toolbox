"""
Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
"""
import unittest


def find_avg_subarry(arr, k):

   """
   Time complexity: Since for every element of the input array, 
   we are calculating the sum of its next ‘K’ elements, 
   the time complexity of the above algorithm will be 
   O(N*K)
   where ‘N’ is the number of elements in the input array.
   """
   
   result = []

   for i in range(len(arr) - k + 1):

      sum = 0.0

      for j in range(i, i+k):

         sum += arr[j]
      result.append(sum / k)
      print("first 5 elemt")
   print("result ", result)

   return result

def find_avg_subarry1(arr, k):

   """
   The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements. This means that when we move on to the next subarray, we will slide the window by one element. So, to reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the sum and, as a result,the algorithm complexity will reduce to O(N).
   """
   
   result = []
   windowSum, windowStart = 0.0, 0

   for windowEnd in range(len(arr)):
      
      windowSum += arr[windowEnd]

      if windowEnd >= k - 1:

         result.append(windowSum / k)

         windowSum -= arr[windowStart]

         windowStart += 1
         
   return result

class Test(unittest.TestCase):
   

   def test_avg_1(self):
      result = find_avg_subarry([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)

      print(result)
      assert result == [2.2, 2.8, 2.4, 3.6, 2.8]
   
   def test_avg_2(self):
      result = find_avg_subarry([1, 3, 2, 6, -1], 5)

      print(result)
      assert result == [2.2]

   def test_avg_3(self):
      result = find_avg_subarry1([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)
      assert result == [2.2, 2.8, 2.4, 3.6, 2.8]
      
unittest.main(verbosity=2)