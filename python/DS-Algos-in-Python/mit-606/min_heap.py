
import unittest

def min_heapify(l, index):
   left = 2 * index
   right = 2 * index + 1
   smallest = index

   size = len(l) - 1

   if left <= size and l[index] > l[left]:
      smallest = left
   if right <= size and l[smallest] > l[right]:
      smallest = right
   
   if smallest != index:
      l[index], l[smallest] = l[smallest], l[right]
      min_heapify(l, smallest)

   print(l)






class Test(unittest.TestCase):
   
   def test_min_heapify1(self):

      a = [1,9,8,2,3,10,14,7,16,4]

      # for i in range(len(a), -1, -1):
      #    min_heapify(a, i // 2)
      for i in range(len(a), -1, -1):
         min_heapify(a, i // 2)

unittest.main(verbosity=2)
