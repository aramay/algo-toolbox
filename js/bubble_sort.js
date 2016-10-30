// what is the largest number that consists of digits 234 => 432

function largestNumber(n) {
    console.log(n);

    // find max
    var max_array = [];
    var temp = 0;

    for(var i=n.length - 1; i >= 1; i--) {
        for (var x = 0; x < i; x++) {

            if (n[x] > n[x+1]) {
                temp = n[x];
                n[x] = n[x+1];
                n[x+1] = temp;

                // n.splice(x, 1);
                // max_array.push(max);
            }
        }

    }

        console.log(n);
//     return max;
}


// var num = [2,3,4];
var num = [3,2,4,1];

console.log(largestNumber(num));
