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
   pass


class TestSubstring(unittest.TestCase):
   def test_substring1(self):
      result = find_substring(input="adcad", pattern="abc")

      assert result == "abdec"


unittest.main(verbosity=2)