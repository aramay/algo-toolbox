function solution(A, K) {

    console.log(A);

    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
//         if (A[i] + 1 != A[i + 1] && A[i] != 1)
          if (A[i] + 1 != A[i + 1] && (A[i] != 1 && A[i] < K))
            return false;
    }
     if ((A.length == K && A[n - 1] != K) || A.length < K)
        return false;
    else
        return true;
}

// var a = [1,2,2,3];
var a = [1, 1, 2, 3, 4, 5, 5, 6, 8,8,9, 10];
var k = 6;


console.log(solution(a,k));