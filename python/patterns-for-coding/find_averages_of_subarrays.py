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


class Test(unittest.TestCase):
   

   def test_avg_1(self):
      result = find_avg_subarry([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)

      print(result)
      assert result == [2.2, 2.8, 2.4, 3.6, 2.8]
   
   def test_avg_2(self):
      result = find_avg_subarry([1, 3, 2, 6, -1], 5)

      print(result)
      assert result == [2.2]

unittest.main(verbosity=2)