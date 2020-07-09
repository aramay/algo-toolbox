"""
Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".


"""
import unittest

def non_repeat_substring(str):
   


class Test(unittest.TestCase):
   # def test_non_repeat_substring(self):
   #    result = non_repeat_substring("aabccbb")
   #    print(result)

   #    assert result == 3
   
   # def test_non_repeat_substring1(self):
   #    result = non_repeat_substring("aabccbb")
   #    print(result)

   #    assert result == 2
   
   def test_non_repeat_substring2(self):
      result = non_repeat_substring("ABCBA")
      print(result)

      assert result == 3

unittest.main(verbosity=2)