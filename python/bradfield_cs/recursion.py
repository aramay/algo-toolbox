"""
(Recursion exercise from class)
# Alphabet strings
# Part 1
# input: alphabet (e.g. "ABCDE")
# output: all 2 letter words using that alphabet
# - AA, AB, AC, ..., ED, EE
# (Feel free to do this ITERATIVELY)
# Part 2
# 3 letter words
# - AAA, AAB, ..., EED, EEE
# Part 3
# Take in word length as a parameter
# "give me the 5 letter words"
# Hint: Probably want to do this recursively
# -> Think about how iteration turns into recursion
"""

import unittest

def sum_list_of_nums(numbers):
   
   if len(numbers) == 0:
      return 

   return numbers[0] + sum_list_of_nums(numbers[1:])



class TestSumListOfNums(unittest.TestCase):
   
   def test_sum_list1(self):
      result = sum_list_of_nums([1,2,3,4,5])

      assert result == 15


unittest.main(verbosity=2)
