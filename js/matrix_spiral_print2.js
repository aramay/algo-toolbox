function matrixSpiralPrint(args){

   console.log(args)

   var rows = args.length,
      cols = args[0].length

   var topRow = 0,
      bottomRow = rows - 1,
      leftCol = 0,
      rightCol = cols - 1;


   while (topRow < bottomRow && leftCol < rightCol){

      for (var i = leftCol; i <= rightCol; i++) {
         console.log(args[topRow][i])
      }

      topRow ++

      for (var j = topRow; j <= bottomRow; j++) {
         console.log(args[j][rightCol])
      }

      rightCol --

      if(topRow < bottomRow){

         for (var x = rightCol; x >= leftCol; x--) {
            console.log(args[bottomRow][x])
            
         }

         bottomRow --
      }

      if (leftCol < rightCol) {
         
         for (var y = bottomRow; y >= topRow; y--) {
            console.log(args[y][leftCol])
            
         }

         leftCol ++
      }

   }
}

var M  = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20 ]
];

console.log(matrixSpiralPrint(M))