def leap_year(year: int):



   if _is_div_by_4(year):
      
      if _is_div_by_100(year):

         if _is_div_by_400(year):
            return True

         else:
            return False
   
      else:
         
         return True

   else:

      return False
                


def _it_is_century(year):
   # x = str(year)

   x = year / 100

   # if x[1] != "0":
   if x % 4 == 0:
      return True
   else:
      return False
   # x = _decimalToBinary(year)

   print("x ", x)


def _is_div_by_4(year):
    return True if year % 4 == 0 else False


def _is_div_by_100(year):
    return True if year % 100 == 0 else False


def _is_div_by_400(year):
    return True if year % 400 == 0 else False

def _is_div_by_3(year):
   return True if year % 3 == 0 else False

def _decimalToBinary(num):
    """This function converts decimal number
    to binary and prints it"""
    if num > 1:
        _decimalToBinary(num // 2)
    print(num % 2, end='')

    return num % 2

import unittest

# from leap import leap_year

# Tests adapted from `problem-specifications//canonical-data.json` @ v1.6.0


class LeapTest(unittest.TestCase):
    def test_year_not_divisible_by_4_in_common_year(self):
        self.assertIs(leap_year("2015"), False)

    def test_year_divisible_by_2_not_divisible_by_4_in_common_year(self):
        self.assertIs(leap_year(1970), False)

    def test_year_divisible_by_4_not_divisible_by_100_in_leap_year(self):
        self.assertIs(leap_year(1996), True)

    def test_year_divisible_by_4_and_5_is_still_a_leap_year(self):
        self.assertIs(leap_year(1960), True)

    def test_year_divisible_by_100_not_divisible_by_400_in_common_year(self):
        self.assertIs(leap_year(2100), False)

    def test_year_divisible_by_100_but_not_by_3_is_still_not_a_leap_year(self):
        self.assertIs(leap_year(1900), False)

    def test_year_divisible_by_400_in_leap_year(self):
        self.assertIs(leap_year(2000), True)

    def test_year_divisible_by_400_but_not_by_125_is_still_a_leap_year(self):
        self.assertIs(leap_year(2400), True)

    def test_year_divisible_by_200_not_divisible_by_400_in_common_year(self):
        self.assertIs(leap_year(1800), False)


if __name__ == "__main__":
    unittest.main()
