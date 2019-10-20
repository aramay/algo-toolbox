class Node(object):
   
   def __init__(self, value):
      self.value = value
      self.next = None


class LinkedList(object):
   
   def __init__(self):
      self.length = 0
      self.head = None
      self.tail = None


   def append(self, value):

      node = self.head

      if node == None:
         print ("empty node")
         self.head = Node(value)
         print(self.head.__dict__)
         # print(Node.__dict__)

         self.tail = self.head

         # return self.head
      else:
         print ("appending node " , value)
         new_node = Node(value)
         print("tails ", self.tail.__dict__)
         self.tail.next = new_node
         print("add new tail ", self.tail.__dict__)
         self.tail = new_node
         
         # return self.head

   
   def print_nodes(self):
      list1 = LinkedList()

      if list1.next == None:
         return
      else:
         print(self.head)


   def insert(self, parameter_list):
      
      for x in parameter_list:
         print (x)
         result = Node(x)
      
      return result

# node1 = Node(3)
# node2 = Node(23)
# node3 = Node(24)

list1 = LinkedList()


# ans = list1.insert([34,5,67,33])
ans = list1.append(35)
ans1 = list1.append(45)

# print(node1.__dict__)

# print(ans.__dict__)
# print("ans1.value ", ans1.value)
print(ans.__dict__)
print (ans1.__dict__)

LinkedList.print_nodes()
