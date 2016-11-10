// A permutation, also called an “arrangement number” or “order,” is a rearrangement of the elements of an ordered list S into a one-to-one correspondence with S itself. A string of length n has n! permutation.
function stringPermutation(N) {
    // console.log(N);

    var size = N.length;

    for (var i = 0; i < 6; i++) {

        var temp = N[0];

        N = N.slice(1);

        N = N + temp;

        // console.log(temp);
        console.log(N);
    }

}

// console.log(stringPermutation);
console.log(stringPermutation("ABC"));
