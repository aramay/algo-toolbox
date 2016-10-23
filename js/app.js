var twoSum = function() {

    var nums = [2, 7, 11, 15];
    var target = 9;

    var ans = [];

    for(var i=0; i<nums.length; i++){

    	if (nums[i] + nums[i+1] == target){
    		console.log("true");
    		// console.log(i, i+1);
    		ans.push(i, i+1);
    		// console.log(ans)
    		break;
    	}
    }
    return ans;

};

console.log(twoSum());
