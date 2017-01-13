function fibonacciTopDown(n){

    var result = [];

    function computeFibonacci(num){

// console.log(num)

        if(num < 2){ 
            return num
        }else{

            result.push(
                computeFibonacci(num - 2) + 
                computeFibonacci(num - 1)
                )
            // return computeFibonacci(num - 2) + computeFibonacci(num - 1)
        }

        // console.log(computeFibonacci(num - 2) + computeFibonacci(num - 1))

        // computeFibonacci(num) // recursive call, this is stupid, AGAIN

    }

    // result = computeFibonacci(n)//invoke helper
    result.push(computeFibonacci(n))

    return result;
}

console.log(fibonacciTopDown(10))