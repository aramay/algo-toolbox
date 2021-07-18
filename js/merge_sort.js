function mergeSort (arr) {
  if (arr.length < 2) {
    //   return arr
      return arr;
    }

  var midIndex = Math.floor(arr.length / 2),
      left = arr.slice(0, midIndex),
      right = arr.slice(midIndex, arr.length);
  
  // var sortedLeft = mergeSort(left);
  // var sortedRight = mergeSort(right);
  mergeSort(left);
  mergeSort(right);

  // var result = merge(sortedLeft, sortedRight)

  // return result;

  // return merge(mergeSort(left), (right))
  return merge(left, right)

}



function merge (left, right) {
  var result = [],
      index1 = 0,
      index2 = 0

  while (index1 < left.length && index2 < right.length) {
      if (left[index1] <= right[index2]) {
          result.push(left[index1])
          index1++
        }else {
          result.push(right[index2])
          index2++
        }
    }

  while (index2 < right.length) {
       result.push(right[index2])
       index2++
     }

   while (index1 < left.length) {
       result.push(left[index1])
       index1++
     }

   
    
    return result;
    // return result;
}

console.log(mergeSort([6,3,7,567,2,6,4,2]));









/*
// 3rd try

function mergeSort (arr) {
  if (arr.length < 2) {
    //   return arr
      return
    }

  var midIndex = Math.floor(arr.length / 2),
      left = arr.slice(0, midIndex),
      right = arr.slice(midIndex, arr.length);
  
  mergeSort(left)
  mergeSort(right)

  var result = merge(left, right)

  // console.log(result)

//   return merge(mergeSort(left), (right))
//   merge(mergeSort(left), (right))

}

function merge (left, right) {
  var result = [],
      index1 = 0,
      index2 = 0

  while (index1 < left.length && index2 < right.length) {
      if (left[index1] <= right[index2]) {
          result.push(left[index1])
          index1++
        }else {
          result.push(right[index2])
          index2++
        }
    }

  // while (index2 < right.length) {
  //     result.push(right[index2])
  //     index2++
  //   }

  // while (index1 < left.length) {
  //     result.push(left[index1])
  //     index1++
  //   }

    if (index1 === left.length){
        while (index2 < right.length){
          result.push(right[index2]);
          index2++;
        }
    } else {
        while (index1 < left.length){
          result.push(left[index1]);
          index1++;
        }
    }
    // console.log(result)
    // return result;
}


*/


// 1st try
// function mergeSort(arr){

//     //base case
//     if(arr.length < 2){
//         return arr;
//     }

//     var midIndex = Math.floor(arr.length / 2)
//     var left = arr.slice(0,midIndex)
//     var right = arr.slice(midIndex, arr.length )

//     // console.log("sortedLeft before recursive call", sortedLeft)
//     // console.log("sortedRight before recursive call", sortedRight)

//     var sortedLeft = mergeSort(left) // this splits array into half untill two or smaller elements
//     var sortedRight = mergeSort(right)

//     // console.log("sortedLeft after recursive call", sortedLeft)
//     // console.log("sortedRight after recursive call", sortedRight)

//     var result = [],
//         index1 = 0,
//         index2 = 0;

//     while(index1 < sortedLeft.length && index2 < sortedRight.length){
//         if(sortedLeft[index1] <= sortedRight[index2]){
//             result.push(sortedLeft[index1]);

//             index1 ++
//         }else{
//             result.push(sortedRight[index2]);

//             index2 ++
//         }
//     }

//     if (index1 === sortedLeft.length){
//      while (index2 < sortedRight.length){
//        result.push(sortedRight[index2]);
//        index2++;
//      }
//    } else {
//      while (index1 < sortedLeft.length){
//        result.push(sortedLeft[index1]);
//        index1++;
//      }
//    }

//     return result;
// }

// 2nd try
// function mergesort(arr){
//   if (arr.length < 2){
//     return arr;
//   }

//   var midIndex = Math.floor(arr.length / 2);
//   var left = arr.slice(0, midIndex);
//   var right = arr.slice(midIndex, arr.length);

//   var sortedLeft = mergesort(left);
//   var sortedRight = mergesort(right);

//   var result = [];
//   var index1 = 0;
//   var index2 = 0;

//   while (index1 < sortedLeft.length && index2 < sortedRight.length){
//     if (sortedLeft[index1] <= sortedRight[index2]){
//       result.push(sortedLeft[index1]);
//       index1++;
//     } else {
//       result.push(sortedRight[index2]);
//       index2++;
//     }
//   }

//   if (index1 === sortedLeft.length){
//     while (index2 < sortedRight.length){
//       result.push(sortedRight[index2]);
//       index2++;
//     }
//   } else {
//     while (index1 < sortedLeft.length){
//       result.push(sortedLeft[index1]);
//       index1++;
//     }
//   }

//   return result;
// }

// console.log(mergesort([77 ,99 ,44 ,55 ,22 ,88 ,11 ,0 ,66 ,33]))
// console.log(mergeSort([77,99 , 44 , 55 , 22,88,11 , 0 , 66 , 33]))
