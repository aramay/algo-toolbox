"""
https://bradfieldcs.com/algos/trees/representing-a-tree/

"""

import unittest

class Node():

   def __init__(self, val, leftChild=None, rightChild=None):
      self.val = val
      self.rightChild = rightChild
      self.leftChild = leftChild

   def insert_left(self, child):
      if self.leftChild is None:
         self.leftChild = child
      else:
         # child.leftChild = self.leftChild
         self.leftChild = child

class Test(unittest.TestCase):
   def test_create_node(self):
      x = Node(3)

      # print("\n", x.__dict__)

   def test_insert_left_child(self):
      root = Node(4)
      
      print("\n", root.__dict__)
      print("\n", root.val)
      print("\n", root.leftChild)

      root.insert_left(Node("left node"))
      root.insert_left(Node("left node2"))

      print("\n", root.leftChild.__dict__)




unittest.main(verbosity=2)
