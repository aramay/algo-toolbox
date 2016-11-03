function solution(A, K) {

    console.log(A);

    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
//     if (A[0] != 1 && A[n - 1] != K)
        if (A.length < k)
        return false;
    else
        return true;
}

var a = [1,2];
var k = 2;


console.log(solution(a,k));
