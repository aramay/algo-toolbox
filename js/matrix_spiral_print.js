function matrixSpiralPrint(M) {

    console.log(M);

    var rows = M.length,
        cols = M[0].length;

    var topRow = 0,
        btmRow = rows - 1,
        leftCol = 0,
        rightCol = cols - 1;

        // while (topRow < btmRow && leftCol < rightCol) {

            for (var i = leftCol; i <= rightCol; i++) {
                console.log(M[topRow][i]);
            }
            topRow ++;

            for (var x = topRow; x <= btmRow; x++) {
                console.log(M[x][rightCol]);
            }
            rightCol --;

            if (topRow < btmRow) {

                for (var j = rightCol; j <= leftCol; j--) {
                    console.log(M[btmRow][j]);
                }
                btmRow --;
            }

            if (leftCol < rightCol) {

                for (var k = btmRow; k <= topRow; k--) {
                    console.log(M[k][leftCol]);
                }
                leftCol ++ ;
            }
        // }
}

var M  = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20 ]
];

console.log(matrixSpiralPrint(M));
