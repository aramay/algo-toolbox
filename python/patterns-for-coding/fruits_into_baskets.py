"""
Problem Statement #
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example#1
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example#2
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
"""
import unittest

def fruits_into_baskets(fruits):
   window_start = 0
   fruits_basket = {}
   max_length = 0

   for window_end in range(len(fruits)):
      right_fruit = fruits[window_end]

      if right_fruit not in fruits_basket:
         fruits_basket[right_fruit] = 0
      fruits_basket[right_fruit] += 1



      while len(fruits_basket) > 2:
         left_fruit = fruits[window_start]

         if left_fruit in fruits_basket:
            fruits_basket[left_fruit] -= 1
         
         if fruits_basket[left_fruit] == 0:
            del fruits_basket[left_fruit]

         window_start += 1

      max_length = max(max_length, window_end - window_start + 1)
   
   return max_length






class Test(unittest.TestCase):
   def test_fruits_into_baskets(self):
      result = fruits_into_baskets(fruits=['A', 'B', 'C', 'A', 'C'])

      print(result)
      assert result == 3
   
   def test_fruits_into_baskets1(self):
      result = fruits_into_baskets(fruits=['A', 'B', 'C', 'B', 'B', 'C'])

      print(result)
      assert result == 5

unittest.main(verbosity=2)