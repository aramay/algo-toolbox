function twoSum(nums, target){

    // console.log(args)
    var work = {};
    for (var i = 0; i < nums.length; i++){
        if (work[target - nums[i]] !== undefined){
        return [work[target - nums[i]] + 1, i + 1];
    }

     work[nums[i]] = i;
    }
}

console.log(twoSum([1, 6, -5, 7, 3], -2))

/*
Input: [1, 6, -5, 7, 3], -2      =>	Output: [2,4]
Input: [1, 9, 10], 8			=>	Output: [-1,-1]
Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

If the target integer is not found return [-1, -1].

Values of the array can be positive or negative integers.

*/