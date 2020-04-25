
import unittest
import heapq

def min_heapify(l, index):
   left = 2 * index + 1
   right = 2 * index + 2
   smallest = index

   size = len(l) - 1

   if left <= size and l[index] > l[left]:
      smallest = left
   if right <= size and l[smallest] > l[right]:
      smallest = right
   
   if smallest != index:
      l[index], l[smallest] = l[smallest], l[index]
      min_heapify(l, smallest)

   # print(l)


def min_heap(parameter_list):
   x = heapq.heapify(parameter_list)

   print(x)
   print(parameter_list)


class Test(unittest.TestCase):
   
   def test_min_heapify1(self):

      a = [1,9,8,2,3,10,14,7,16,4]

      size = len(a) - 1

      # for i in range(len(a), -1, -1):
      #    min_heapify(a, i // 2)
      for i in range((size //2), -1, -1):
         # print(i)
         min_heapify(a, i)
   
   def test_min_heapify2(self):

      a = [1,9,8,2,3,10,14,7,16,4]

      min_heap(a)

unittest.main(verbosity=2)
