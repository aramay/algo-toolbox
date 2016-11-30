function nthFibonacci(n) {

    console.log(n);

    var result = [0,1]; //1) instatiate varaibles

    function searchFib(i, limit) { //3) helper methods,
        //4) instantiate
        if (i > limit) { return; }

        result[i] = result[i - 2] + result[i - 1];

        searchFib(i + 1, n); // invoke helper method

    }

    searchFib(2,n);

    return result[n]; //2) return result
}

console.log(nthFibonacci(3));
