"""
Using your favorite language, find all numbers that occur more than once in an array of integers. What is a second way you might do the same problem? Which approach would you prefer and why?
"""
import unittest


def count_num(parameter_list):

   """
   Time complexity O(N)
   Space complexity O(N)
   """
   
   tmp_storage = {} #temporary storage
   result = [] #result storage

   for num in parameter_list:

      if num in tmp_storage:
         result.append(num)
      else:
         tmp_storage[num] = num

   return result


class Test(unittest.TestCase):

   def test_count_num_repeat(self):
      actual = count_num([2,2,3,4,5,6,6])
      expected = [2, 6]
      self.assertEqual(actual, expected)

   def test_count_no_num_repeat(self):
      actual = count_num([2,3,4,5,6])
      expected = []
      self.assertEqual(actual, expected)

unittest.main(verbosity=2)