function insertionSort(n) {

    console.log("unsorted array ", n);

    var inner = 0; // counter for inner loop

    for (var out = 1; out < n.length; out++) { // outer loop

        var temp = n[out]; //move markeed item

        inner = out - 1; //shift starts at out

        while(inner >= 0 && n[inner] >= temp) {

            n[inner + 1] = n[inner];

            inner --;
        }

        n[inner + 1] = temp;

    }
    console.log("sorted array ", n);

}

// var num = [77 ,99 ,44 ,55 ,22 ,88 ,11 ,0 ,66 ,33];
var num = [77 ,99 ,44 ,55 ,22];

console.log(insertionSort(num));
