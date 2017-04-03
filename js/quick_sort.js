function quickSort(args){
   // console.log(args)

   var pIndex = partition(args, 0, args.length - 1)

}

function partition(args, start, end){

   console.log(args, start, end)

   var pIndex = start
   var pivot = args[end]

   for (var i = 0; i < args.length; i++) {
      if (args[i] <= pivot) {
         // swap(args[i], args[pIndex])
         var temp = args[i]
         args[i] = args[pIndex]
         args[pIndex] = temp

         pIndex += 1
      }
   }
   swap(pIndex, i)
   
   console.log(pIndex, i)


   function swap(pIndex,i){

      i = i - 1
      console.log("inside swap p ", pIndex, i)
      var temp = args[i]
      args[i] = args[pIndex]
      args[pIndex] = temp

   }

   console.log(args)

}


var x = [6,3,7,567,2,6,4,2]

console.log(quickSort(x))