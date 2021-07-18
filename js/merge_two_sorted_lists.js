//merge two sorted list recursively
/*
function mergeLists(listL, listR){

   var result = [],
      index1 = 0,
      index2 = 0;

   while(index1 < listL.length && index2 < listR.length){

      if (listL[index1] < listR[index2]) {
         result.push(listL[index1])

         index1 ++
      }
      else{
         result.push(listR[index2])

         index2 ++
      }
   }

   //when there are leftover in either list - > 
   while(index1 < listL.length){
      result.push(listL[index1])

      index1 ++
   }

   while (index2 < listR.length) {
      result.push(listR[index2])

      index2 ++
   }
   return result
}

*/
// var x = [22 ,44 ,55 ,77 ,99 ]
// var y = [0 ,11, 33,66, 88]
var x = [1,2,4,6]
var y = [3,5,7,8]


function merge(leftArr,rightArr){
  // [1,2,4,5]
  // [7,9,10,13, 15]

// console.log(array)
// console.log(leftArr)
// console.log(rightArr)
  let rightIndex = 0
  let leftIndex = 0
  let res = []

  // iterate over len of two arrays
  while(leftIndex < leftArr.length && rightIndex < rightArr.length){
    if(leftArr[leftIndex]<rightArr[rightIndex]){
      res.push(leftArr[leftIndex])
      // array.push(leftArr[leftIndex])
      leftIndex++
    } else{
      res.push(rightArr[rightIndex])
      // array.push(rightArr[rightIndex])
      rightIndex++
    }
  } 
  while (rightIndex < rightArr.length) {
      res.push(rightArr[rightIndex])
      rightIndex++
    }

  while (leftIndex < leftArr.length) {
      res.push(leftArr[leftIndex])
      leftIndex++
    }
  // console.log(res)
      console.log(res)
  return res
}


console.log(merge(x, y))