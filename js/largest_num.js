// what is the largest number that consists of digits 234 => 432

function largestNumber(num) {
    console.log(num);

    // find max
    var max_array = [];
//     var max = num[0];

    n = num.length - 1;

    while (n > 0) {

        var max = num[0];

        for (var i = 0; i < num.length; i++) {
            
            if (num[i] > max) {
                max = num[i];
//                 num.splice(i, 1);
//                 max_array.push(max);
                num[0] = max;
            }
        }
        n --;
    }

    console.log(max_array);

}


// var num = [2,3,4];
var num = [3,2,4,1];

console.log(largestNumber(num));
