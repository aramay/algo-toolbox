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

  var matrix = helper(args)

  console.log('matrix ', matrix)

  var rows = matrix.length,
     cols = matrix[0].length

  var topRow = 0,
     btmRow = rows - 1,
     leftCol = 0,
     rightCol = cols - 1

   // go right to left
  for (var i = leftCol; i <= rightCol; i++) {
     matrix[topRow][i] = 3
   }

  topRow++ // increment topRow

   // go top to bottom
  for (var j = topRow; j <= btmRow; j++) {
     matrix[j][rightCol] = 3

      // console.log(matrix[j][cols])
   }

  rightCol--

  if (topRow < btmRow) {
     for (var y = rightCol; y <= leftCol; y--) {
        matrix[btmRow][y] = 2
      }
     btmRow--
   }

  if (leftCol < rightCol) {
     for (var x = btmRow; x <= topRow; x--) {
        matrix[x][leftCol] = 2
      }

     rightCol--
   }

  console.log(matrix)
   // helper to create matrix
  function helper (args) {
     var row = [],
        col = []

     for (var x = 0; x < args; x++) {
        row.push(x)
      
      for (var y = 0; y < args; y++) {
            // col.push(y)
         col.push(row)
         }
      }


     return col
   }
}

var input = 4
console.log(prettyPrint(input))
