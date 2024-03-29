"""
6.4.2 Nodes and References
194 Chapter6. TreesandTreeAlgorithms
BOOK: Problem Solving with Algorithms and Data Structures
Release 3.0
Brad Miller, David Ranum
"""
import unittest

from collections import deque 

class Node():
   
   def __init__(self, value=None, rightChild=None, leftChild=None):
      self.value = value
      self.rightChild = rightChild
      self.leftChild = leftChild


class BST():
   
   def __init__(self):
      self.root = None

   def insert(self, value):
      if self.root == None:
         self.root = Node(value)
         print("Root Node {}".format(value))
      else:
         self._insert(value, self.root)

   def _insert(self, value, current_node):   
      if value < current_node.value:

         if current_node.leftChild == None:
            current_node.leftChild = Node(value)
            print ("Value inserted left {}".format(value))

         else:
            self._insert(value, current_node.leftChild)

      if value > current_node.value:
         if current_node.rightChild == None:
            current_node.rightChild = Node(value)
            print ("Value inserted right {}".format(value))
         else:
            self._insert(value, current_node.rightChild)

      # else:
      #    print("Value already exists {}".format(value))


   def in_order(self, root):
      
      if root:
         
         self.in_order(root.leftChild)
         
         print("in_order traversal ", root.value)

         self.in_order(root.rightChild)
   
   def breath_first_search(self, root):
      
      result = []
      q = deque()

      if root is None:

         return None
      
      q.append(root)

      print("root ", root.value)
      

      while len(q) > 0:

         
         # result.append(item)
         item = q.popleft()

         result.append(item.value)

         if(item.leftChild is not None):
            # q.append(root.leftChild)
            print("leftChild ", item.leftChild.value)

            # self.breath_first_search(item.leftChild)

            q.append(item.leftChild)
            result.append(item.leftChild.value)

         if(item.rightChild is not None):
            # q.append(root.rightChild)
            # self.breath_first_search(item.rightChild)
            print("rightChild ", item.rightChild.value)
            q.append(item.rightChild)

            result.append(item.rightChild.value)

      return result


   # def in_order(self, root):
      
   #    self._in_order(self.root.leftChild)
   #    self._in_order(self.root.rightChild)

      # self._in_order()

   # def _in_order(self, cur_node):

   #    print(cur_node.value)


tree = BST()
tree.insert(10)
tree.insert(9)
tree.insert(5)
tree.insert(20)
tree.insert(7)
tree.insert(76)
tree.insert(90)

# print (BST().in_order(tree.root))

print(BST().breath_first_search(tree.root))


# class Test(unittest.TestCase):
   
#    def setUp(self):

#       max_int = 1000

#       self.tree = BST()

#       from random import randint, random
      
#       for _ in range(100):
#          cur_ele = randint(0, max_int)
#          # cur_ele = random.random() * 1000
#          self.tree.insert(cur_ele)

#       # test_print(self, self.tree)

#    def test_print(self):
#       self.print_tree(self.tree)

#    def print_tree(self, cur_node):
#       if cur_node != None:
#          self.print_tree(cur_node.leftChild)
#          print (cur_node.value)
#          self.print_tree(cur_node.rightChild)

#    def test_print_in_order(self):
#       # self.tree = BST()

#       print("test_in_order ", self.tree)  
#       BST().in_order(self.tree)


# unittest.main(verbosity=2)