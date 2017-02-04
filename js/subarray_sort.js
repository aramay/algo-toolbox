/**Subarray Sort
Given an unsorted array, find the start and end index of a subarray where sorting this subarray would make the whole input array sorted.

Input: Array of Integers
Output: Two Integer Array
Example
Input: [3, 4, 8, 7, 10, 6, 17]   =>	Output: [2, 5]
Input: [3, 4, 8, 7, 20, 6, 17]	=>	Output: [2, 6]
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
 */


function subArraySort(args){

    console.log(args)
    var i,
        start = 0,
        len = args.length - 1,
        end = len;

    //loop left-right and find element greater than next element
    for(start = 0; start<args.length; start++){

        console.log(args[i])

        previous = args[i - 1]

        if(args[start] > args[start + 1]){
            console.log("found greater ", args[start])
            break;
        }

        if(start === end){
            console.log("array is sorted")
        }
    }

    //loop righ-left and find element smaller than next element

    for(end = len; end > 0; end--){

        if(args[end] < args[end - 1]){
            console.log("found smaller ", args[end])
            break;
        }
    }
}

console.log(subArraySort([3, 4, 8, 7, 10, 6, 17]))