/**
 *
 * PRETTYPRINT
 * Print concentric rectangular pattern in a 2d matrix.
Let us show you some examples to clarify what we mean.

Example 1:

Input: A = 4.
Output:

4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

Example 2:

Input: A = 3.
Output:

3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3

The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

You will be given A as an argument to the function you need to implement, and you need to return a 2D array.
 */

function prettyPrint (args) {
   // console.log(args)

   if(args < 0){
	        return []
	    }

  var matrix = helper(args),
      N = args;
   
   console.log(matrix)

//   console.log('matrix ', matrix)

var rows = matrix.length,
   cols = matrix[0].length

var topRow = 0,
   btmRow = rows - 1,
   leftCol = 0,
   rightCol = cols - 1

while (topRow < btmRow && leftCol < rightCol) {
   


      // go right to left
   for (var i = leftCol; i <= rightCol; i++) {
      matrix[topRow][i] = N
      }

   topRow++ // increment topRow

      // go top to bottom
   for (var j = topRow; j <= btmRow; j++) {
      matrix[j][rightCol] = N
      }

   rightCol--


   //go left to right
   if (topRow < btmRow) {

      console.log("go down if state")

      for (var y = rightCol; y >= leftCol; y--) {
         matrix[btmRow][y] = N
         console.log("go down")
         }
      btmRow--
   }
   
   //go bottom to top

   if (leftCol < rightCol) {
      for (var x = btmRow; x >= topRow; x--) {
         matrix[x][leftCol] = N
         }

      leftCol ++
      }

   console.log("before final step ", matrix)
      // helper to create matrix
      N -= 1
   }


   console.log("done")
   if (topRow === btmRow && rightCol === leftCol) {
      matrix[topRow][btmRow] = 1
   }

   // console.log("completed ", matrix)
   return matrix;

  function helper (args) {

         var N = args * 2 - 1,
         row = new Array(N)

         for (var x = 0; x < N; x++) {
            row[x] = new Array(N)
            
         }

      console.log(row)
      return row

      /**
       * for (var y = 0; y < N; y++) {
         
         col.push(1)

         row.push(col)
         }
     return row
       */
      
   }
      
   

}



var input = 3
// console.log(prettyPrint(input))
console.log(prettyPrint(3))
