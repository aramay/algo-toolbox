function sortColors(args){

    var startPointer = 0,
        endPointer = args.length - 1,
        i = 0;

    while(i < endPointer + 1){

        if(args[i] === 0){
            var temp = args[startPointer]
            args[startPointer] = args[i]
            args[i] = temp

            i ++
            startPointer ++

            continue
        }
        else if(args[i] === 2){

            var temp = args[endPointer]
            args[endPointer] = args[i]
            args[i] = temp

            endPointer --
            continue;
        }

        i ++
    }

    return args

}

console.log(sortColors([2, 0, 1, 2, 1, 0]))

/*
Example
Input: [2, 0, 1, 2, 1, 0]	=>	Output: [0, 0, 1, 1, 2, 2]
Input: [1, 2, 2, 0]		=>	Output: [0, 1, 2, 2]
*/