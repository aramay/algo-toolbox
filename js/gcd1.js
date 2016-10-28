function computeGcd(a, b) {
    console.log("gcd");

    var result = 0;
    var found = true;

    if (a <= 0 || b <= 0) {
        return "cannot be less than zero";
    }

    // put fraction a / b
    // divide num and deno by D,
        // such that "d" to divide both "a" and "b"
        // want "d" to be as large as possible

        while (found === true) {
            result = a % b;

            a = b;
            b = result;

            if (result === 0) {
                found = false;
            }

        }

        return a;

}

console.log(computeGcd(3918848,1653264));
