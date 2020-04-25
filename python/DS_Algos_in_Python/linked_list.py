import unittest

class ListNode:
   """
   A Node in a singly linked list
   """

   def __init__(self, data=None, next=None):
      self.data = data
      self.next = next

class SinglyLinkedList:

   """
   Create a new Singly Linked List
   """
   
   def __init__(self):

      self.head = None

      print("head ", self.head)

   def __repr__(self):
      
      nodes = []

      current = self.head
      while current:
         nodes.append(repr(current))
         current = current.next

      return '[' + ','.join(nodes) + ']'

   def append(self, data):
      if self.head == None:
         self.head = ListNode(data=data)
         return

      current = self.head
      while current.next:
         current = current.next

         # print(current)
      
      current.next = ListNode(data=data)


   
# class Test(unittest.TestCase):
   
#    def setUp(self):
#       SinglyLinkedList()

#    def test_list(self):
#       l = SinglyLinkedList()
#       l.append(34)
#       l.append("the")

#       print(l)
      

# unittest.main(verbosity=2)