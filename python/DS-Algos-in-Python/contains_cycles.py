import unittest

# from algo-toolbox.python.bradfield_cs.linkedlist import UnorderedList

"""
https://www.interviewcake.com/question/python3/linked-list-cycles?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23291:%20Largest%20Stack&utm_medium=email&utm_medium=email

Breakdown
Because a cycle could result from the last node linking to the first node, we might need to look at every node before we even see the start of our cycle again. So it seems like we can’t do better than 
O(n)
O(n) runtime.

How can we track the nodes we’ve already seen?



"""

class Node(object):

   def __init__(self, value, next=None):
      self.value = value
      self.next = next

class UnorderedList(object):
   
   def __init__(self):
      self.head = None
      self._count = 0

   def add(self, item):

      self.head = Node(item, next=self.head)
      # temp = Node(item)
      # temp.next = self.head
      # self.head = temp
      
      # # update count
      # self._count += 1

   def contians_cycles():
      pass

class TestNode(unittest.TestCase):

   def setUp(self):

      self.un_oL = UnorderedList()

   # def test_node_class(self):
   #    x = Node(43, None)

      # print(x.__dict__)

   
   def test_add_nodes_with_cycles(self):

      print("\n Count before adding nodes ", self.un_oL._count)

      L = [31, 77, 17, 93]

      for x in L:
         self.un_oL.add(x)

         # print(self.un_oL.__dict__)

         # if self.un_oL.next is None:
         #    self.un_oL.next = self.un_oL.head

      self._print_linked_list(self.un_oL)
      # return self.un_oL

      # print("\n Count after adding nodes ", un_oL._count)

   def test_add_nodes(self):

      self.un_oL.add(31)
      self.un_oL.add(77)
      self.un_oL.add(17)
      self.un_oL.add(93)
      
      self._print_linked_list(self.un_oL)


   def _print_linked_list(self, linked_list):

      current = linked_list.head
      # print("head \n", linked_list.head.__dict__)

      while current.next is not None:

         
         print(" ", current.__dict__)
         current = current.next

      print(current.__dict__)
      
unittest.main(verbosity=2)
