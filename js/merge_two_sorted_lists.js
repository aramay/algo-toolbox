//merge two sorted list recursively
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


// var x = [22 ,44 ,55 ,77 ,99 ]
// var y = [0 ,11, 33,66, 88]
var x = [1,2,4,6]
var y = [3,5,7,8]

console.log(mergeLists(x, y))