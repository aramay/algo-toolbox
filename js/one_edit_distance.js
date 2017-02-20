/**
 * 
One Edit Distance
Given two words, determine if the the first word is one edit away from the second word.


One edit on a word can be one of the following:
Add a character
Remove a character
Change the character 

Input: Two Strings
Output: Boolean
Example
Input: ‘table’, ‘tablet’   =>	Output: true (edits: 1)
Input: ‘table’, ‘tale’	=>	Output: true (edits: 1)
Input: ‘table’, ‘cables’	=>	Output: false (edits: 2)
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

If the two inputs strings are the same, return false
Assume only lowercase letters, no spaces
 */

function oneEditDistance(args, target){

    // console.log(args)

    var len1 = args.length,
        len2 = target.length,
        idx1 = 0,
        idx2 = 0,
        edits = 0;
    
    // var x = Math.abs(len1 - len2)
    // var x = 
    if (Math.abs(len1 - len2) > 1) { console.log(true) }

    // console.log("x ", x)

    while(idx1 < len1){

console.log(idx1)

        if(args[idx1] === target[idx2]){

            idx1 ++
            idx2 ++

            console.log("first if")
        }
        else{

            if(edits > 1){
                return false
            }

            edits += 1

            console.log(edits)

            if(len1 === len2){
                idx1 ++
                idx2 ++
            }
            else if(args.length > target.length){
                idx1 ++
            }
            else{
                idx2 ++
            }
        }
    }
    

    edits === 1 ? true : false


}

// console.log(oneEditDistance("table", "tablet"))
// console.log(oneEditDistance("table", "tale"))
console.log(oneEditDistance("table", "cables"))
