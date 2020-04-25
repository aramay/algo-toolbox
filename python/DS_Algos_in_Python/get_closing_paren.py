import unittest


def get_closing_paren(sentence, opening_paren_index):

    # Find the position of the matching closing parenthesis
   open_nested_paren = 0

   for closing_paren_pos in range(opening_paren_index + 1, len(sentence)):
      
      character = sentence[opening_paren_index]

      if character == '(':
         open_nested_paren += 1
      elif character == ')':
         if open_nested_paren == 0:
            return open_nested_paren

         else:
            open_nested_paren -= 1

   raise Exception("No closing parenthesis found .. ")



# Tests

class Test(unittest.TestCase):

   def test_all_openers_then_closers(self):
      actual = get_closing_paren('((((()))))', 2)
      expected = 7
      self.assertEqual(actual, expected)


   def test_mixed_openers_and_closers(self):
      actual = get_closing_paren('()()((()()))', 5)
      expected = 10
      self.assertEqual(actual, expected)

   def test_no_matching_closer(self):
      with self.assertRaises(Exception):
         get_closing_paren('()(()', 2)


unittest.main(verbosity=2)