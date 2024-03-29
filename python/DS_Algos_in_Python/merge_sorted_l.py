import unittest
import pdb


def merge_lists(my_list, alices_list):

    # Combine the sorted lists into one large sorted list
    merged_l = []
    index_1 = 0
    index_2 = 0

    total_l = len(my_list) + len(alices_list)

    current_i = 0

    if not my_list and not alices_list:
        return merged_l


    while current_i < total_l:

        if index_1 > len(my_list) - 1:

            merged_l.append(alices_list[index_2])

            index_2 += 1
            
        elif index_2 > len(alices_list) - 1:
            
            merged_l.append(my_list[index_1])

            index_1 += 1
        
        elif my_list[index_1] < alices_list[index_2]:
            
            merged_l.append(my_list[index_1])

            index_1 += 1

        elif alices_list[index_2] < my_list[index_1]:
            
            merged_l.append(alices_list[index_2])

            index_2 += 1

        current_i += 1

    return merged_l

# Tests

class Test(unittest.TestCase):

    def test_both_lists_are_empty(self):
        actual = merge_lists([], [])
        expected = []
        self.assertEqual(actual, expected)

    def test_first_list_is_empty(self):
        actual = merge_lists([], [1, 2, 3])
        expected = [1, 2, 3]
        self.assertEqual(actual, expected)

    def test_second_list_is_empty(self):
        actual = merge_lists([5, 6, 7], [])
        expected = [5, 6, 7]
        self.assertEqual(actual, expected)

    def test_both_lists_have_some_numbers(self):
        actual = merge_lists([2, 4, 6], [1, 3, 7])
        print("actual ", actual)
        expected = [1, 2, 3, 4, 6, 7]
        self.assertEqual(actual, expected)

    def test_lists_are_different_lengths(self):
        actual = merge_lists([2, 4, 6, 8], [1, 7])
        expected = [1, 2, 4, 6, 7, 8]
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)
