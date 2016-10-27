var isPalindrome = function (input) {

    var i = 0;
    var x = input.length - 1;

    while (i < x) {

        if (input[i] == input[x]) {
            i ++;
            x --;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("mooom"));
