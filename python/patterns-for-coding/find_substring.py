import unittest

"""
Smallest Window containing Substring (hard) #

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:
Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".

Example 3:
Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.



"""

def find_substring(input:str, pattern:str) -> str:
   window_end = 0
   chr_frequency = {}
   matched = 0
   min_len = len(input) + 1
   sub_str_stat = 0

   for chr in pattern:
      if chr not in chr_frequency:
         chr_frequency[chr] = 0
      chr_frequency[chr] += 1
   
   for window_end in range(len(input)):
      right_chr = input[window_end]

      if right_chr in chr_frequency:
         chr_frequency[right_chr] -= 1
         #count every matching chr
         if chr_frequency[right_chr] > 0:
            matched += 1

      while matched == len(pattern):
         if min_len > windowd_end - window_start + 1:
            min_len = window_end - windows_start + 1

            sub_str_stat = window_start

         left_chr = input[window_start]
         window_start += 1

         if left_chr in chr_frequency:

            """Note that we could have redundant matching characters, 
            therefore we'll decrement the matched count only when a 
            useful occurrence of a matched character is going out of the window"""
            
            if char_frequency[left_char] == 0:
               matched -= 1

            chr_frequency[left_chr] += 1

   if min_len > len(input):
      return "Empty"

   return input[sub_str_stat:sub_str_stat + min_len]



class TestSubstring(unittest.TestCase):
   def test_substring1(self):
      result = find_substring(input="adcad", pattern="abc")

      print(" result =>", result)
      assert result == "abdec"


unittest.main(verbosity=2)