// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

function binaryGap(N) {

    var x = N.toString(2),
            binarArray = x.split(""),
            counter = 0,
            temp = 0;

    for (var i = 0; i < binarArray.length; i++) {
        if (binarArray[i] === "0") {
            counter ++;
        }
        if (binarArray[i] === "1") {
            //temp will hold first count, starts with 0
            if (temp < counter) {
                temp = counter;
            }

            counter = 0;
        }
    }

    return parseInt(temp);
}

console.log(binaryGap(1041));
