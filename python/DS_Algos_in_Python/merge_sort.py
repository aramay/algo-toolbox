import unittest
# from algo-toolbox.python.DS-Algos-in-Python.merge_sorted_l.py import merge Fix directory names

def merge_sort(input):
   if len(input) <= 1:
      return input

   h = len(input) // 2
   left = input[:h]
   right = input[h:]

   left = merge_sort(left)
   right = merge_sort(right)

   return merge(left, right)

def merge(list1, list2):

    # Combine the sorted lists into one large sorted list
    merged_l = []
    index_1 = 0
    index_2 = 0

    total_l = len(list1) + len(list2)

    current_i = 0

    if not list1 and not list2:
        return merged_l


    while current_i < total_l:

        if index_1 > len(list1) - 1:

            merged_l.append(list2[index_2])

            index_2 += 1
            
        elif index_2 > len(list2) - 1:
            
            merged_l.append(list1[index_1])

            index_1 += 1
        
        elif list1[index_1] < list2[index_2]:
            
            merged_l.append(list1[index_1])

            index_1 += 1

        elif list2[index_2] < list1[index_1]:
            
            merged_l.append(list2[index_2])

            index_2 += 1

        current_i += 1

    return merged_l

class TestMergeSort(unittest.TestCase):
   
   def test_list1(self):
      ans = merge_sort([3,5,2,8,9,0])

      assert ans == [0, 2, 3, 5, 8, 9]

      print(ans)




unittest.main(verbosity=2)