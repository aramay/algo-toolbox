var maxPairWiseProduct = function (num) {

    console.log("max pair wise product .. ");

    var result = 0;

    for (var i = 0; i < num.length; i++) {
        for (var x = 1; i < num.length; i++) {

            if ((num[i] * num[x]) > result) {
                result = num[i] * num[x];
            }
        }

    }
    return result;
};

var num = [1,4,3,2,5];

console.log(maxPairWiseProduct(num));
