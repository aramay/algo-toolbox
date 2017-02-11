/*
 *                           Target Practice V
 *
 *                         Sorting II - Revisted
 *
 *  Instructions: To further reinforce understanding of how Merge and
 *                Quicksort are implemented, we will be building
 *                those functions again.
 *
 *                Additionally, we will be using a min heap to build
 *                heapsort.  Please use your min heap from class.
 *
 *                Please do not refer to your homework solutions for
 *                Merge Sort or Quicksort.
 *
 *          Note: To run tests, set 'runTests' variable to true
 *
 */

'use strict'
var runTests = true;
/*
 *  1. Please indicate whether the following sorting algorithms are stable or unstable
 *
 *  Mergesort: Estable
 *
 *  Quicksort: Not Stable
 *
 *  Heapsort: Not Stable
 */


/*
 *  2a. Implement Quicksort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: quicksort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */

function quicksort(arr){


  function swap(i , j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function divide(start, end){
    if(start >= end) { return; }
    let mid = start;
    for(var i = start; i < end; i++){
      if(arr[i] < arr[end]){
        swap(i, mid);
        mid ++;
      }
    }
    swap(mid, end);
    divide(start, mid - 1);
    divide(mid + 1, end);
  }
  divide(0, arr.length - 1)

  return arr;
}



/*
 *  2b. What is the time complexity and auxiliary space complexity of your quicksort?
 *
 *      Time Complexity: O(n log n)
 *      Auxiliary Space Complexity: O(1)
 */


/*
 *  3a. Implement Merge Sort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: mergesort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */


function mergesort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergesort to broke it down into pieces
   //then merge those
   return merge(mergesort(left),mergesort(right));
}


function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}


/*
 *  3b. What is the time complexity and auxiliary space complexity of your mergeSort?
 *
 *      Time Complexity: O(n^2 log n)
 *      Auxiliary Space Complexity: O(n)
 */


/*
 *  4a. Implement heapsort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: heapsort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */


var heapsort = function(array) {
  var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  };
  var maxHeap = function(array, i) {
    var l = 2 * i;
    var r = l + 1;
    var largest;
    if (l < array.heapSize && array[l] > array[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < array.heapSize && array[r] > array[largest]) {
      largest = r;
    }
    if (largest != i) {
      swap(array, i, largest);
      maxHeap(array, largest);
    }
  };
  var buildHeap = function(array) {
    array.heapSize = array.length;
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
      maxHeap(array, i);
    }
  };
  buildHeap(array);
  for (var i = array.length-1; i >= 1; i--) {
    swap(array, 0, i);
    array.heapSize--;
    maxHeap(array, 0);
  }
  return array;
};

/*
 *  4b. What is the time complexity and auxiliary space complexity of your heapsort?
 *
 *      Time Complexity:
 *      Auxiliary Space Complexity:
 */


/*
 *  If you do not have your own heap, please check the Target
 *  Practice resources folder for a Binary Heap in your language
 */

























////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

function run(){
  // code for capturing console.log output
  var record = [];
  (function () {
    var log = console.log;
    console.log = function () {
      record = record.concat(Array.prototype.slice.call(arguments));
      log.apply(this, Array.prototype.slice.call(arguments));
    };
  }());


  console.log('quicksort tests');
  var testCount = [0, 0];

  assert(testCount, 'able to sort a single-element array', function(){
    var work = quicksort([5])
    return arraysEqual(work, [5]);
  });

  assert(testCount, 'able to sort a medium-sized unsorted array', function(){
    var work = quicksort([4,15,16,50,8,23,42,108], 0, 7)
    return arraysEqual(work, [4,8,15,16,23,42,50,108]);
  });

  assert(testCount, 'able to sort a large unsorted array', function(){
    var work = [];
    for (var i = 0; i < 1000000; i++){
      work.push(Math.floor(Math.random() * 1000000));
    }
    var example = quicksort(work, 0, work.length-1);
    work = work.sort(function(a, b){return a - b;});
    return arraysEqual(example, work);
  });

  console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


  console.log('mergesort tests');
  var testCount = [0, 0];

  assert(testCount, 'able to sort a single-element array', function(){
    var work = mergesort([5])
    return arraysEqual(work, [5]);
  });

  assert(testCount, 'able to sort a medium-sized unsorted array', function(){
    var work = mergesort([4,15,16,50,8,23,42,108])
    return arraysEqual(work, [4,8,15,16,23,42,50,108]);
  });

  // assert(testCount, 'able to sort a large unsorted array', function(){
  //   var work = [];
  //   for (var i = 0; i < 1000000; i++){
  //     work.push(Math.floor(Math.random() * 1000000));
  //   }
  //   var example = mergesort(work);
  //   work = work.sort(function(a, b){return a - b;});
  //   return arraysEqual(example, work);
  // });

  console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


  console.log('heapsort tests');
  var testCount = [0, 0];

  assert(testCount, 'able to sort a single-element array', function(){
    var work = heapsort([5])
    return arraysEqual(work, [5]);
  });

  assert(testCount, 'able to sort a medium-sized unsorted array', function(){
    var work = heapsort([4,15,16,50,8,23,42,108]);
    return arraysEqual(work, [4,8,15,16,23,42,50,108]);
  });

  assert(testCount, 'able to sort a large unsorted array', function(){
    var work = [];
    for (var i = 0; i < 1000000; i++){
      work.push(Math.floor(Math.random() * 1000000));
    }
    var example = heapsort(work);
    work = work.sort(function(a, b){return a - b;});
    return arraysEqual(example, work);
  });

  console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');









  // function for checking if arrays are equal
  function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }
    return true;
  }

  // custom assert function to handle tests
  // Array count : keeps track out how many tests pass and how many total
  //   in the form of a two item array i.e., [0, 0]
  // String name : describes the test
  // Function test : performs a set of operations and returns a boolean
  //   indicating if test passed
  function assert(count, name, test){
    if(!count || !Array.isArray(count) || count.length !== 2) {
      count = [0, '*'];
    } else {
      count[1]++;
    }

    var pass = 'false';
    var errMsg = null;
    try {
      if (test()) {
        pass = ' true';
        count[0]++;
      }
    } catch(e) {
      errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
    if (errMsg !== null) {
      console.log('       ' + errMsg + '\n');
    }
  }

}

if (runTests){
  run()
}
