function plusOne(args){

    var len = args.length - 1
    
    for(var i=len; i >= 0; i --){

        if(args[i] === 9){
            args[i] = 0
        }
        else{
            args[i] += 1
            return args
        }
        
    }

    args.unshift(1);
    return args

}

// console.log(plusOne([1,2,3]))
// console.log(plusOne([1, 9]))
// console.log(plusOne([3, 9, 9]))
console.log(plusOne([9, 9]))

/*
    Example
    Input: [1,2,3]  =>	Output: [1,2,4]
    Input: [1, 9]	=>	Output: [2,0]

*/