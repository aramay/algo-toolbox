// function computeFibonacci(n) {

//     var list = [];

//     if (n <= 2) {
//         return 1;
//     }else{
//         console.log((n-1) +' '+ (n-2));
//         return (this.computeFibonacci(n-1) + this.computeFibonacci(n-2));

//     }

// }

function fibonacciBottomUp(num){

    var result = [0,1]

    function computeFibonacci(i){
        
        if(i > num){
            return 
        }

        // result.push(computeFibonacci(i - 2) + computeFibonacci(i - 1)) // this is stupid
        result[i] = result[i-2] + result[i-1]
        computeFibonacci(i + 1)

    }
    
    computeFibonacci(2) //invoke helper function

    return result
}

// console.log(computeFibonacci(10));
// var x = computeFibonacci(10);
var x = fibonacciBottomUp(10);
console.log(x)
