// number of islands
//
// input: matrix
// output: how many islands there are
//
// input: test
// output: 4

var test = [[1, 1, 0, 0, 0], 
            [0, 1, 0, 0, 1], 
            [1, 1, 0, 0, 1], 
            [0, 0, 1, 0, 1], 
            [1, 1, 0, 0, 0]];

// ==> 4

function islands(matrix){
  var count = 0;
  
  function traverse(x, y){
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length){
      return;
    } else if (matrix[y][x] === 0){
      return;
    }
    
    matrix[y][x] = 0;
    
    traverse(x+1, y);
    traverse(x-1, y);
    traverse(x, y-1);
    traverse(x, y+1);
  }
  
  for (var yCoor = 0; yCoor < matrix.length; yCoor++){
    for (var xCoor = 0; xCoor < matrix[0].length; xCoor++){
      
      if (matrix[yCoor][xCoor] === 1){
        
        count++;
        traverse(xCoor, yCoor);
        
        console.log(matrix);
      }
    }
  }
  
  
  return count;
}


console.log(islands(test));