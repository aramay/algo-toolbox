var isPalindrome = function (input) {

    // console.log(input);

    var i = 0;
    var x = input.length - 1;

    var result = "";

    while(x >= i){
        // console.log(input[x]);
        result = result + input[x];

        x -- ;
    }
    console.log("result ", result);
};

var text = "car";

isPalindrome(text);
// console.log(isPalindrome(text));
