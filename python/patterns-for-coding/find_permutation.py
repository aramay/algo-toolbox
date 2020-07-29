"""
Permutation in a String (hard) #
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have 
n!
n! permutations.

Example 1:
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Example 2:
Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

"""

import unittest

def find_permutation(str, pattern):
   window_start, matched = 0 , 0
   chr_frequency = {}

   for chr in pattern:
      if chr not in chr_frequency:
         chr_frequency[chr] = 0
      chr_frequency[chr] += 1

   for window_end in range(len(str)):
      right_chr = str[window_end]

      if right_chr in chr_frequency:
         chr_frequency[right_chr] -= 1
      
         if chr_frequency[right_chr] == 0:
            matched += 1
      
      if matched == len(chr_frequency):
         return True

      #shrink the window

      if window_end >= len(pattern) -1:
         
         left_chr = str[window_start]
         window_start += 1

         if left_chr in chr_frequency:
            
            if chr_frequency[left_chr] == 0:
               matched -= 1
            
            chr_frequency[left_chr] += 1

   return False




class Test(unittest.TestCase):
   def test_find_permutation1(self):
      result = find_permutation(str="oidbcaf", pattern="abc")

      assert result == True

   def test_find_permutation2(self):
      result = find_permutation(str="odicf", pattern="dc")

      assert result == False

unittest.main(verbosity=2)