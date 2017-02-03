/*
Number of Ones
Given a sorted bit array (values of 0, and 1) determine the number of 1’s in the array.

Input: Array of elements with values belong to the set S : { 0, 1 }
Output: Integer
Example
Input: [0, 0, 0, 1, 1, 1]	=>	Output: 3
Input: [0, 0, 0, 0]		=>	Output: 0
Constraints
Time Complexity: O(logN)
Auxiliary Space Complexity: O(1)
 */

function numOfOnes(args){

    console.log(args)

    var result = 0,
        mid = 0;

    // console.log(mid)

    function helperOne(subNum){
        
        mid = Math.floor((subNum.length ) / 2)

        if(subNum[mid] === 1){
            return
        }
        else if(subNum[mid] < 1){

            console.log(subNum)
            helperOne(subNum.slice(mid, subNum.length0))
        }

    }

    helperOne(args)//invoke helper function

    result = args.length - mid

    return result
}

console.log(numOfOnes([0, 0, 0, 0, 1, 1, 1]))