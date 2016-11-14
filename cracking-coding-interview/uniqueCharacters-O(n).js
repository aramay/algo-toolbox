
function uniqueCharacters(n) {
    console.log(n);

    var boolean = [];

    for (var x = 0; x < n.length; x++) {
        // boolean = n[x];
        var temp = n[x];

        if (boolean[temp]) {
            return false;
        }
        boolean[temp] = true;
    }
    return true;

}

console.log(uniqueCharacters("test"));
console.log(uniqueCharacters("abcd"));
