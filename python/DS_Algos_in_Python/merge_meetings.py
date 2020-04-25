"""
https://www.interviewcake.com/question/python3/merging-ranges?course=fc1&section=array-and-string-manipulation

Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple ↴ of integers (start_time, end_time). These integers represent the number of 30-minute blocks past 9:00am.

For example:

  (2, 3)  # Meeting from 10:00 – 10:30 am
(6, 9)  # Meeting from 12:00 – 1:30 pm

Write a function merge_ranges() that takes a list of multiple meeting time ranges and returns a list of condensed ranges.

For example, given:

"""

import unittest
import pdb

def merge_ranges(meetings):

    # sorted meetings
    sorted_meetings = sorted(meetings)

    # Merge meeting ranges
    print("meetings ", meetings)
    print("meetings sorted ", sorted(meetings))

    merged_meetings = [sorted_meetings[0]]

    for current_m_s, current_m_e in sorted_meetings[1:]:

      last_m_meeting_s, last_m_meeting_e = merged_meetings[-1]

      print(current_m_s)
      print(current_m_e)

      # pdb.set_trace()
      if current_m_s <= last_m_meeting_e:
        merged_meetings[-1] = (last_m_meeting_s,
                                max(last_m_meeting_e, current_m_e)
                                )
      # if last_m_meeting_s <= current_m_e:
      #   merged_meetings[-1] = (last_m_meeting_s,
      #                           max(last_m_meeting_e, current_m_e)
      #                           )

      else:
        merged_meetings.append((current_m_s, current_m_e))

    return merged_meetings

# Tests

class Test(unittest.TestCase):

    def test_meetings_overlap(self):
        # actual = merge_ranges([(1, 3), (2, 4)])
        actual = merge_ranges([(2, 4),(1, 3)])
        expected = [(1, 4)]
        self.assertEqual(actual, expected)

    def test_meetings_touch(self):
        actual = merge_ranges([(5, 6), (6, 8)])
        expected = [(5, 8)]
        self.assertEqual(actual, expected)

    def test_meeting_contains_other_meeting(self):
        actual = merge_ranges([(1, 8), (2, 5)])
        expected = [(1, 8)]
        self.assertEqual(actual, expected)

    def test_meetings_stay_separate(self):
        actual = merge_ranges([(1, 3), (4, 8)])
        expected = [(1, 3), (4, 8)]
        self.assertEqual(actual, expected)

    def test_multiple_merged_meetings(self):
        actual = merge_ranges([(1, 4), (2, 5), (5, 8)])
        expected = [(1, 8)]
        self.assertEqual(actual, expected)

    def test_meetings_not_sorted(self):
        actual = merge_ranges([(5, 8), (1, 4), (6, 8)])
        expected = [(1, 4), (5, 8)]
        self.assertEqual(actual, expected)

    def test_one_long_meeting_contains_smaller_meetings(self):
        actual = merge_ranges([(1, 10), (2, 5), (6, 8), (9, 10), (10, 12)])
        expected = [(1, 12)]
        self.assertEqual(actual, expected)

    def test_sample_input(self):
        actual = merge_ranges([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)])
        expected = [(0, 1), (3, 8), (9, 12)]
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)