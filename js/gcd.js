function computeGcd(a, b) {
    console.log("gcd");

    var result = 0;

    if (a <= 0 || b <= 0) {
        return "cannot be less than zero";
    }

    // put fraction a / b
    // divide num and deno by D,
        // such that "d" to divide both "a" and "b"
        // want "d" to be as large as possible

        for (var i = 1; i <= a+b; i++) {
            if ((a % i === 0) && (b % i === 0)) {
                result = i;
            }

        }

        return result;

}

console.log(computeGcd(3918848,1653264));
