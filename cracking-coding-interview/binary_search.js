function binarySearch(N, num) {
    console.log(N);


    var middle = N.length / 2;

    middle = Math.ceil(middle);

    if (num === N[middle]) {
        return num;
    }
    if (N.length === 1) {
        return num;
    }

    if (num > N[middle]) {

        return this.binarySearch(N.splice(middle), num);
    }

    else{
        return this.binarySearch(N.slice(0,middle), num);
    }


}

console.log(binarySearch([10,20,30,40,50,60,70], 10));
