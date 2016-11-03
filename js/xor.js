function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    console.log(A);
    result = {};

    for(var i=0; i< A.length; i ++){

        if(result.hasOwnProperty(A[i])){
            result[A[i]] += 1;

        } else {
            result[A[i]] = 1;
        }
    }

    console.log(result);

    for(var prop in result){
        // console.log(prop +"=>"+ result[prop]);

        if (result[prop] % 2 !== 0) {
            return parseInt(prop);
        }
    }

    console.log(prop);
}

console.log(solution([ 9, 3, 9, 3, 9, 7, 9 ]));
