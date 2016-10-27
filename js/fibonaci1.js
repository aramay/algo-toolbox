function computeFibonacci(n) {

    // var list = [0,1];
    var list = [0,1];
    var term1 = 0;
    var term2 = 1;
    var term3 = 1;

    if (n <= 2) {
        return 1;
    }

    for (var i = 2; i <= n; i++) {

        term3 = term1 + term2;

        term1 = term2;
        term2 = term3;

        list.push(term3);
    }

    console.log(term3);
    console.log(list);

    // for (var i = 2; i < n; i++) {
    //
    //     console.log(i);
    //
    //     var term = (i-1) + (i-2);
    //
    //     list.push(term);
    //     console.log(list);
    // }

}

// console.log(computeFibonacci(10));
computeFibonacci(10);
