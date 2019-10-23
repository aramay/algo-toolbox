"""
Write a function that takes a list of characters and reverses the letters in place. ↴
Why a list of characters instead of a string?
The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like a list, instead of Python 3.6's immutable strings.

https://www.interviewcake.com/question/python3/reverse-string-in-place?course=fc1&section=array-and-string-manipulation
"""

import unittest

def reverse_string(parameter_list):
   
   left_i = 0
   right_i = len(parameter_list) - 1

   while left_i < right_i:
      parameter_list[left_i], parameter_list[right_i] = parameter_list[right_i], parameter_list[left_i]

      left_i += 1
      right_i -= 1

   return parameter_list

   # while counter < len(parameter_list):
   #    print('\n', counter)

   #    tmp_var = parameter_list[left_i]
   #    parameter_list[left_i] = parameter_list[right_i]
   #    parameter_list[right_i] = tmp_var

   #    right_i -= 1
   #    left_i += 1

   #    counter += 1

   # return parameter_list

   # return ["r", "x", "c", "a"]


class Test(unittest.TestCase):

   def test_reverse_string(self):
      actual = reverse_string(["a", "c", "x", "r"])
      expected = ["r", "x", "c", "a"]
      self.assertEqual(actual, expected)

   def test_empty_string(self):
      list_of_chars = []
      reverse_string(list_of_chars)
      expected = []
      self.assertEqual(list_of_chars, expected)

   def test_single_character_string(self):
      list_of_chars = ['A']
      reverse_string(list_of_chars)
      expected = ['A']
      self.assertEqual(list_of_chars, expected)

unittest.main(verbosity=2)
