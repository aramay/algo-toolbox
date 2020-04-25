import unittest


class Stack(object):

    def __init__(self):
        """Initialize an empty stack"""
        self.items = []

    def push(self, item):
        """Push a new item onto the stack"""
        self.items.append(item)

    def pop(self):
        """Remove and return the last item"""
        # If the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        """Return the last item without removing it"""
        if not self.items:
            return None
        return self.items[-1]


class MaxStack(object):

   # Implement the push, pop, and get_max methods


   def __init__(self):

      self.stack = Stack()
      self.max_stack = Stack()
      self.item = 0

   def push(self, item):

      self.stack.push(item)

      if self.max_stack.peek() is None or item >= self.max_stack.peek():
         self.max_stack.push(item)

   def pop(self):
      item = self.stack.pop()

      if item == self.max_stack.peek():
         self.max_stack.pop()
      
      return item

   def get_max(self):
      return self.max_stack.peek()

   def __repr__(self):

      for item in self.max_stack.items:
         # pass
         print (f'{item}')




# Tests

class Test(unittest.TestCase):


   def test_push(self):
      m = MaxStack()
      m.push(5)
      m.push(6)
      print (m.__repr__())

   def test_stack_usage(self):
      max_stack = MaxStack()

      max_stack.push(5)

      actual = max_stack.get_max()
      expected = 5
      self.assertEqual(actual, expected)

      max_stack.push(4)
      max_stack.push(7)
      max_stack.push(7)
      max_stack.push(8)

      actual = max_stack.get_max()
      expected = 8
      self.assertEqual(actual, expected)

      actual = max_stack.pop()
      expected = 8
      self.assertEqual(actual, expected)

      actual = max_stack.get_max()
      expected = 7
      self.assertEqual(actual, expected)

      actual = max_stack.pop()
      expected = 7
      self.assertEqual(actual, expected)

      actual = max_stack.get_max()
      expected = 7
      self.assertEqual(actual, expected)

      actual = max_stack.pop()
      expected = 7
      self.assertEqual(actual, expected)

      actual = max_stack.get_max()
      expected = 5
      self.assertEqual(actual, expected)

      actual = max_stack.pop()
      expected = 4
      self.assertEqual(actual, expected)

      actual = max_stack.get_max()
      expected = 5
      self.assertEqual(actual, expected)


unittest.main(verbosity=2)