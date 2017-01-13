/*
 *                           Target Practice V                        
 *                                                                    
 *                         Sorting II - Revisted                      
 *                                                                    
 *  Instructions: To further reinforce understanding of how Mergesort and 
 *                Quicksort are implemented, we will be building those functions 
 *                again.                              
 *                                                                    
 *                Additionally, we will be using a minheap to build Heapsort.  
 *                Please use your minheap from class.     
 *                                                                    
 *                Please do not refer to your homework solutions for Mergesort 
 *                or Quicksort.                            
 *                                                                    
 */

'use strict';

/*
 *  1. Please indicate whether the following sorting algorithms are stable or 
 *     unstable
 *
 *  Mergesort: Stable
 *
 *  Quicksort: Unstable
 *
 *  Heapsort: Unstable
 */


/*
 *  2a. Implement Quicksort in your chosen language, such that given an unsorted 
 *      array of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: quicksort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */

function quicksort(arr){
  
  function subsort(start, end){
    if (start >= end){
      return;
    }

    var mid = start;
    var temp;

    for (var i = start; i < end; i++){
      if (arr[i] < arr[end]){
        temp = arr[i];
        arr[i] = arr[mid];
        arr[mid] = temp;
        mid++;
      }
    }

    temp = arr[mid];
    arr[mid] = arr[end];
    arr[end] = temp;

    subsort(start, mid - 1);
    subsort(mid + 1, end);
  }
  subsort(0, arr.length - 1);

  return arr;
}

// console.log(quicksort([4,15,16,50,8,23,42,108]));

/*
 *  2b. What is the time complexity and auxiliary space complexity of your 
 *      quicksort?
 *
 *      Time Complexity: O(Nlog(N))
 *      Auxiliary Space Complexity: O(N)
 */


/*
 *  3a. Implement Mergesort in your chosen language, such that given an 
 *      unsorted array of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: mergesort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */

function mergesort(arr){
  if (arr.length < 2){
    return arr;
  }

  var midIndex = Math.floor(arr.length / 2);
  var left = arr.slice(0, midIndex);
  var right = arr.slice(midIndex, arr.length);

  var sortedLeft = mergesort(left);
  var sortedRight = mergesort(right);

  var result = [];
  var index1 = 0;
  var index2 = 0;

  while (index1 < sortedLeft.length && index2 < sortedRight.length){
    if (sortedLeft[index1] <= sortedRight[index2]){
      result.push(sortedLeft[index1]);
      index1++;
    } else {
      result.push(sortedRight[index2]);
      index2++;
    }
  }

  if (index1 === sortedLeft.length){
    while (index2 < sortedRight.length){
      result.push(sortedRight[index2]);
      index2++;
    }
  } else {
    while (index1 < sortedLeft.length){
      result.push(sortedLeft[index1]);
      index1++;
    }
  }

  return result;
}

// console.log(mergesort([4,15,16,50,8,23,42,108]));




/*
 *  3b. What is the time complexity and auxiliary space complexity of your 
 *      mergeSort?
 *
 *      Time Complexity: O(Nlog(N))
 *      Auxiliary Space Complexity: O(n)
 */


/*
 *  4a. Implement heapsort in your chosen language, such that given an unsorted 
 *      array of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: heapsort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 */

class MaxHeap {
  constructor(){
    this.storage = [];
  }

  swap(index1, index2){
    var temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  peek(){
    return this.storage[0];
  }

  size(){
    return this.storage.length;
  }

  insert(value){
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  }

  bubbleUp(index){
    if (index < 1){
      return;
    }

    var childIndex = index;
    var parentIndex;

    if (childIndex % 2 === 0){
      parentIndex = (childIndex - 2) / 2;
    } else {
      parentIndex = (childIndex - 1) / 2;
    }

    while (childIndex > 0 && this.storage[childIndex] > this.storage[parentIndex]){
      this.swap(childIndex, parentIndex);

      childIndex = parentIndex;
      if (childIndex % 2 === 0){
        parentIndex = (childIndex - 2) / 2;
      } else {
        parentIndex = (childIndex - 1) / 2;
      }
    }
  }

  removeLargest(){
    this.swap(0, this.size() - 1);
    var toReturn = this.storage.pop();
    this.bubbleDown(0);
    return toReturn;
  }

  bubbleDown(index){
    if (index >= this.size() - 1){
      return;
    }

    var parentIndex = index;
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;

    var masterChildIndex;

    if (childIndex1 >= this.size()){
      return;
    } else if (childIndex2 >= this.size()){
      masterChildIndex = childIndex1;
    } else if (this.storage[childIndex1] > this.storage[childIndex2]){
      masterChildIndex = childIndex1;
    } else if (this.storage[childIndex2] >= this.storage[childIndex1]){
      masterChildIndex = childIndex2;
    }

    while (parentIndex < this.size() - 1 && this.storage[parentIndex] < this.storage[masterChildIndex]){
      this.swap(parentIndex, masterChildIndex);

      parentIndex = masterChildIndex;
      childIndex1 = 2 * parentIndex + 1;
      childIndex2 = 2 * parentIndex + 2;

      if (childIndex1 >= this.size()){
        return;
      } else if (childIndex2 >= this.size()){
        masterChildIndex = childIndex1;
      } else if (this.storage[childIndex1] > this.storage[childIndex2]){
        masterChildIndex = childIndex1;
      } else if (this.storage[childIndex2] >= this.storage[childIndex1]){
        masterChildIndex = childIndex2;
      }
    }
  }

  remove(index){
    this.swap(index, this.size() - 1);
    var toReturn = this.storage.pop();
    this.bubbleUp(index);
    this.bubbleDown(index);
    return toReturn;
  }

  sortStorageArray(){
    var swapIndex = this.size() - 1;

    while (swapIndex > 0){
      this.swap(0, swapIndex);
      this.sortBubbleDown(0, swapIndex);
      swapIndex--;
    }
  }

  sortBubbleDown(index, stopIndex){
    if (index >= stopIndex - 1){
      return;
    }

    var parentIndex = index;
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;

    var masterChildIndex;

    if (childIndex1 >= stopIndex){
      return;
    } else if (childIndex2 >= stopIndex){
      masterChildIndex = childIndex1;
    } else if (this.storage[childIndex1] > this.storage[childIndex2]){
      masterChildIndex = childIndex1;
    } else if (this.storage[childIndex2] >= this.storage[childIndex1]){
      masterChildIndex = childIndex2;
    }

    while (parentIndex < stopIndex - 1 && this.storage[parentIndex] < this.storage[masterChildIndex]){
      this.swap(parentIndex, masterChildIndex);

      parentIndex = masterChildIndex;
      childIndex1 = 2 * parentIndex + 1;
      childIndex2 = 2 * parentIndex + 2;

      if (childIndex1 >= stopIndex){
        return;
      } else if (childIndex2 >= stopIndex){
        masterChildIndex = childIndex1;
      } else if (this.storage[childIndex1] > this.storage[childIndex2]){
        masterChildIndex = childIndex1;
      } else if (this.storage[childIndex2] >= this.storage[childIndex1]){
        masterChildIndex = childIndex2;
      }
    }
  }
}


function heapsort(arr){
  var instance = new MaxHeap();

  arr.forEach(function(element){
    instance.insert(element);
  });
  
  instance.sortStorageArray();
  return instance.storage;
}

// console.log(heapsort([4,15,16,50,8,23,42,108]));

/*
 *  4b. What is the time complexity and auxiliary space complexity of your 
 *      heapsort?
 *
 *      Time Complexity: O(Nlog(N))
 *      Auxiliary Space Complexity: O(N)
 */


/*
 *  If you do not have your own heap, please check the Target Practice resources 
 *  folder for a Binary Heap in your language
 */

















////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

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
  var results = quicksort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = quicksort([4,15,16,50,8,23,42,108])
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = quicksort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('mergesort tests');
var testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', function(){
  var results = mergesort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = mergesort([4,15,16,50,8,23,42,108])
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = mergesort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('heapsort tests');
var testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', function(){
  var results = heapsort([5])
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', function(){
  var results = heapsort([4,15,16,50,8,23,42,108]);
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', function(){
  var results = [];
  for (var i = 0; i < 1000000; i++){
    results.push(Math.floor(Math.random() * 1000000));
  }
  var example = heapsort(results);
  results = results.sort(function(a, b){return a - b;});
  return arraysEqual(example, results);
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



