
function uniqueCharacters(n) {
    console.log(n);

    for (var i = 0; i < n.length; i++) {

        var letter = n[i];
        var count = 0;

        for (var x = 0; x < n.length; x++) {
            if (letter === n[x]) {
                count ++;
            }

            if (count > 1) {
                return false;
            }

        }
    }
    return true;
}

console.log(uniqueCharacters("test"));
console.log(uniqueCharacters("abcd"));
