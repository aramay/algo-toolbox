"""
https://bradfieldcs.com/algos/lists/implementing-an-unordered-list/
"""
import unittest

class Node(object):

   def __init__(self, value, next=None):
      self.value = value
      self.next = None

class UnorderedList(object):
   
   def __init__(self):
      self.head = None

   def add(self, item):
      temp = Node(item)
      temp.next = self.head
      self.head = temp




class TestNode(unittest.TestCase):

   def test_node_class(self):
      x = Node(43, None)

      print(x.__dict__)

   def test_add_node(self):

      oL = UnorderedList()
      oL.add(31)
      oL.add(77)
      oL.add(17)
      oL.add(93)

      current = oL.head

      while current is not None:
         # pass
         print(current.__dict__)

         current = current.next


unittest.main(verbosity=2)
