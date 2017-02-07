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

LeetCode
https://discuss.leetcode.com/topic/3538/concise-o-log-n-binary-search-solution/16
 */

function sortedRotatedSearch(args, target){

    console.log(args, target)

    var start = 0,
        len = args.length - 1,
        end = args.length - 1;
        // mid = Math.floor(args.length / 2);

    while(start < end){

        var mid = Math.floor((start + end) / 2)

        if(args[mid] > args[end]){

            // console.log("first if")
            if((target > args[mid]) || (target <= args[end])){
// debugger;
                // console.log("second if")
                // console.log("target ", target)
                // console.log("args[mid] ", args[mid])

                start = mid + 1

                // console.log("start ", start)
                // console.log("end ", end)
            }
            else{
                // console.log("else block")
                end = mid
            }
        }else{
            if((target > args[mid] && target <= args[end])){
                start = mid + 1
            }else{
                end = mid
            }
        }
        
        // break;
    }

    if(start == end && target != args[start]) { return - 1 }
    return start

    // function helperSortedRotatedSearch(start, end){

    //     while(len > 0){

    //         if(args[mid] === target){
    //             return mid
    //         }
    //         else if(args[mid] > target){

    //             start = mid + 1
    //             helperSortedRotatedSearch(start, end)
    //         }

    //         len --
    //         // start ++
    //     }
    // }
}

// console.log(sortedRotatedSearch([6,8,11,15,17,3,5], 3))
// console.log(sortedRotatedSearch([6,8,11,15,17,3,5], 10))
console.log(sortedRotatedSearch([5,6,1,2,3,4], 6))