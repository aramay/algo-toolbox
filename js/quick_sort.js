function quickSort (args, start, end) {
   // console.log(args)

   // base case to exit ecursive call
  if (start < end) {
    // invoke partition function
    var pIndex = partition(args, start, end)

    console.log('pIndex in quickSort ', pIndex)

    // recursive call to sort left segment of pivot
    quickSort(args, start, pIndex - 1)
    // recursive call to sort right segment of pivot
    quickSort(args, pIndex + 1, end)

    // return args
  }
}

function partition (args, start, end) {
  console.log(args, start, end)

   // pivot index
  var pIndex = start
   // set pivot at the end of array
  var pivot = args[end]

  for (var i = start; i < end; i++) {
    if (args[i] <= pivot) {
      // swap(args[i], args[pIndex])
      var temp = args[i]
      args[i] = args[pIndex]
      args[pIndex] = temp

      pIndex += 1
    }
  }
  // last swap to move pivot at pIndex
  swap(pIndex, i)

  console.log(pIndex, i)

   // this swap moves pivot to its place
  function swap (pIndex, i) {
    // i = i - 1
    console.log('inside swap p ', pIndex, i)
    var temp = args[i]
    args[i] = args[pIndex]
    args[pIndex] = temp
  }

  console.log(args)
  return pIndex
}

var data = [6, 3, 7, 567, 2, 9, 4, 11],
  start = 0,
  end = data.length - 1

console.log(quickSort(data, start, end))
