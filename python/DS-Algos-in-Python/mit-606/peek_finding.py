"""
Peak Finder One-dimensional Version
Position 2 is a peak if and only if b ≥ a and b ≥ c. Position 9 is a peak if i ≥ h.
"""

import unittest

def find_peek(input):
   
   mid_point = (len(input) - 1) // 2

   if len(input) == 0:
      return None

   if len(input) == 2:
      # return input[1]
      return max(input[0], input[1])

   if input[mid_point - 1] <= input[mid_point] and input[mid_point] >= input[mid_point + 1]:
      return input[mid_point]
   

   if input[mid_point] <= input[mid_point - 1]:
      print("look left")

      peek = find_peek(input[0:mid_point])

      # peek = peek if (find_peek(peek)) else None
      # peek = find_peek(input[0:mid_point])
      if peek:
         return peek

   elif input[mid_point] >= input[mid_point + 1]:
      print("look right")

      peek = find_peek(input[mid_point:len(input)])

      if peek:
         return peek





class Test(unittest.TestCase):
   def test_find_peek(self):
      result = find_peek([6,70,4,3,2,1,4,5])
      assert result == 70
   
   def test_find_peek1(self):
      result = find_peek([1,2,3,4,5,6,7,8,90])
      assert result == 90

   

unittest.main(verbosity=2)