var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    // int[] table = new int[26];

    var s1 = s.split("").sort().join("");
    var t1 = t.split("").sort().join("");

    return s1 == t1;
};

console.log(isAnagram("xxxxxxx", "nagaram"));
