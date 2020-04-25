import ctypes
import unittest


class DynamicArrays:

    def __init__(self):
        """Create an empty array"""
        self._n = 0
        self._C = 1
        self._A = self.__make_array(self._C)

        print("array ", self._A)

    def __len__(self):
        return self._n

    def append(self, obj):
        if self._n == self._C:
            self.__resize(2 * self.__len__())
        self._A[self._n] = obj
        self._n += 1

    def insert(self, k, value):
        """
        Remove first occurrence of value( or raise ValueError).
        """
        # note: we do not consider shrinking the dynamic array in this version
        if self._n == self._C:
            self.__resize(2 * self._n)

        # for j in range(k, self._n - 1):
        for j in range(self._n, k, - 1):
            # print(self._A[j-1])
            self._A[j] = self._A[j - 1]

        self._A[k] = value
        self._n += 1

    def remove(self, value):
        for i in range(self.__len__()):

            if self._A[i] == value:
                print("found")
                for k in range(i, self._n - 1):
                    self._A[k] = self._A[k + 1]

                    self._A[self._n - 1] = None
                    self._n -= 1

                    return
        raise ValueError("Value {} not found ".format(value))




    def __resize(self, size):
        self._B = self.__make_array(size)

        for i in range(self._n):
            self._B[i] = self._A[i]

        self._A = self._B
        self._C = size

    def __getitem__(self, k):
        if k > self._C or k < 0:
            raise IndexError("invalid index ")
        return self._A[k]

    def __make_array(self, capacity):
        """

        :type capacity: object
        """
        return (capacity * ctypes.py_object)()


# Tests

class Test(unittest.TestCase):

    def test_class_init(self):
        actual = DynamicArrays()
        expected = ctypes.py_object
        self.assertEqual(actual, expected)

    def test_class_a1(self):
        a1 = DynamicArrays()
        a1.append(2)

        print(a1)
        self.assertEqual(a1.__len__(), 1)

    def test_class_a2(self):
        a2 = DynamicArrays()
        a2.append(2)
        a2.append(5)
        a2.append(1)
        a2.append(19)

        print(a2)
        self.assertEqual(a2.__len__(), 4)

    def test_class_remove(self):
        r = DynamicArrays()
        r.append(2)
        r.append(5)
        r.append(1)
        r.append(19)
        r.append(20)

        r.remove(1)

        print(r)
        self.assertEqual(r.__len__(), 4)

    def test_class_remove1(self):
        r = DynamicArrays()
        r.append(2)
        r.append(5)
        r.append(1)
        r.append(19)
        r.append(20)

        r.remove(90)

        print(r)
        self.assertEqual(r.__len__(), 4)

    #todo
    #insert method Test cases
    #test lower bound index
    #test upper bound index

    def test_insert(self):
        i2 = DynamicArrays()
        i2.append(2)
        i2.append(2)
        i2.append(5)
        i2.append(1)
        i2.append(19)

        print(i2)

        i2.insert(1, 4)

        for i in range(i2.__len__()):
            print(i2[i])
        self.assertEqual(i2.__len__(), 6)

unittest.main(verbosity=2)