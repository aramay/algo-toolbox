"""
Insertion sort: https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec03.pdf


"""
import unittest

def i_sort(arr):
   
   for key in range(len(arr)):

      value = arr[key]

      while(key > 0 and arr[key - 1] > value):
         arr[key] = arr[key - 1]
         key = key - 1

      arr[key] = value

   return arr

class Test(unittest.TestCase):
   
   def test_i_sort(self):

      result = i_sort([3,2,1])

      assert result == [1,2,3]


unittest.main(verbosity=2)