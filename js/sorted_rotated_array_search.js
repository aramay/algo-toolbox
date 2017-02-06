/**
 * Sorted & Rotated Array Search
Given a rotated, sorted array and a target value, return the index of the target value. If the target value does not exist inside of the collection, return -1. 
A rotated, sorted array means that some number of elements have been taken from one end of the array and moved to the other end while maintaining the sorted status of the moved elements. 
[1,2,3,4,5,6,7] → [3,4,5,6,7,1,2]

Input: Array of integers, target value
Output: Integer index of target value (-1 if not found)
Example
Input: [6,8,11,15,17,3,5], 3      	=>	Output: 5
Input: [6,8,11,15,17,3,5], 10		=>	Output: -1
Constraints
Time Complexity: O(log(N))
Auxiliary Space Complexity: O(log(N))

 */

function 