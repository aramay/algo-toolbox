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
      self._count = 0

   def add(self, item):
      temp = Node(item)
      temp.next = self.head
      self.head = temp
      
      # update count
      self._count += 1


class TestNode(unittest.TestCase):

   def setUp(self):
      self.oL = UnorderedList()

   def test_node_class(self):
      x = Node(43, None)

      print(x.__dict__)

   def test_count_before_adding(self):

      assert self.oL._count == 0


   def test_count_after_adding(self):

      oL = self._add_nodes()

      self._print_linked_list(oL)

      assert oL._count == 5
   
   def _add_nodes(self):

      print("\n Count before adding nodes ", self.oL._count)

      L = [31, 77, 17, 93]

      for x in L:
         self.oL.add(x)

      return self.oL

      # print("\n Count after adding nodes ", oL._count)

   def _print_linked_list(self, linked_list):

      current = linked_list.head

      while current.next is not None:

         print("\n", current.__dict__)
         current = current.next

      #this loop also works - but implementation is not ideal
      # while oL.head is not None:
      #    print("\n", oL.__dict__)

      #    oL.head = oL.head.next


unittest.main(verbosity=2)
