// var temp = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]
var temp = [ 1, 2, 3, 5, 7, 11]

var rowMax = temp.length
var colMax = temp.length

var result = []

result[0] = temp

console.log(result)


function matrix( rows, cols, defaultValue){

  var arr = [];
  arr.push(temp);
  // Creates all lines:
  for(var i=1; i < temp.length; i++){
      var arrMultiply = [];

      for(var j=0; j < temp.length; j++){
        arrMultiply.push(temp[i]*temp[j]);
      }
      arr.push(arrMultiply);
  }

  arr[0][0] = -1;

  return arr;
}

var temp = [1, 2, 3, 5, 7, 11]

var rowMax = temp.length
var colMax = temp.length

var arr = matrix(rowMax, colMax, temp);

console.log(arr)
console.table(arr)

console.log(result)
console.table(result)

// for(var x=0; x< 5; x++){
  
  // for (var row=0; row<rowMax; row++){
    
  //   result[row] = new Array()
    
  //   if(row === 0){
  //     // result[row] = 0

  //     // result[row] = temp
  //     // result.push([2])
  //     // continue
  //   }



    // for (var col=0; col<colMax; col++){
        
    //     if(col === 0){
    //       result[row][col]
    //     }
    //     // if(col === 0 && row === 0){
    //     //   result[0][0] = 0
    //     // }

    //     result[row][col] = temp[col+1]
    //     // result[1][col+1] = temp[col]

    //     // result[row][0] = temp[col]
        
    // }
  // }


// }
