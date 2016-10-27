function computeFibonacci(n) {

    var list = [];

    if (n <= 2) {
        return 1;
    }else{
        console.log((n-1) +' '+ (n-2));
        return (this.computeFibonacci(n-1) + this.computeFibonacci(n-2));

    }

}

// console.log(computeFibonacci(10));
var x = computeFibonacci(10);
