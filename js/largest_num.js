// what is the largest number that consists of digits 234 => 432

function largestNumber(n) {
    console.log(n);

    // find max
    var max = n[0];
    var found = true;

    while(n.length > 0) {

        if (n[i] > max) {
            max = n[i];
        }
    }

    // n.splice()
    // n.push(max);
}


var num = [2,3,4];

console.log(largestNumber(num));
