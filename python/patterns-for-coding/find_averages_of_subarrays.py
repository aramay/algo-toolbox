"""
Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
"""
import unittest


def find_avg_subarry(arr, k):
   
   result = []

   # outer_loop = range(len(arr) - (k+1))
   # l = len(arr)
   # end = k+1
   # outer_loop = l - end

   for i in range(len(arr) - k + 1):

      sum = 0.0

      for j in range(i, i+k):

         # print (arr[j])
         sum += arr[j]
      result.append(sum / 5)
      print("first 5 elemt")
      print("result ", result)


class Test(unittest.TestCase):
   

   def test_avd(self):
      result = find_avg_subarry([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)

      # assert result == 

unittest.main(verbosity=2)