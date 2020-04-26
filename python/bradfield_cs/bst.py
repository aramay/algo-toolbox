"""
https://bradfieldcs.com/algos/searching/the-binary-search/

"""

import unittest 

def binary_search(items, target):
   #base case - list is empty - return False
   if not items:
      return False

   mid_point = len(items) // 2

   if items[mid_point] == target:
      return True

   elif target < items[mid_point]:
      return binary_search(items[0:mid_point], target)
   else:
      return binary_search(items[mid_point:len(items) - 1], target)

   # return True

def binary_search2(items, start, stop, target):
   if not items:
      return False


   mid_point = (stop - start) // 2

   if items[mid_point] == target:
      return True

   elif target < items[mid_point]:
      start = 0
      stop = mid_point
      return binary_search2(items, start, stop, target)
   
   else:
      start = mid_point
      stop = len(items) - 1

      return binary_search2(items, start, stop, target)


class TestBST(unittest.TestCase):

   
   # binary_search(testlist, 3)  # => False
   # binary_search(testlist, 13)  # => True

   # def test_bst(self):
   #    testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42]
   #    result = binary_search(testlist, 3)

   #    assert result == False
   
   # def test_bst1(self):
   #    testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42]
   #    result = binary_search(testlist, 17)

   #    assert result == True
   
   def test_bst3(self):
      testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42]
      stop = len(testlist) - 1
      result = binary_search2(testlist, 0, stop, 17)

      assert result == True

unittest.main(verbosity=2)