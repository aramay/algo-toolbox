/**
1)  Container with most water
    Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
    n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
    Find two lines, which together with x-axis forms a container, such that the container contains the most water.
    Ex: maxArray( [2, 5, 4, 1, 2, 4, 3 ] )
*/

function waterContainer(args){
  
  console.log(args)
  
  var left = 0,
      right = args.length - 1,
      max = 0,
      temp = 0;
  
  while(left < right){
    
    console.log("inside loop")
  
    if(args[left] > args[right]){
      temp = (right - left) * args[right]
      
      right --;
    }
    else{
      temp = (right - left) * args[left]
      
      left ++;
    }
    
    max = max > temp ? max : temp
  }
  
  console.log(max)
  
  return max

}


var x = [2, 5, 4, 1, 2, 4, 3]

console.log(waterContainer(x))