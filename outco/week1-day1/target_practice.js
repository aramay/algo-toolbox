/*********************************************************************
 *                        Target Practice I                          *
 *                                                                   *
 *               Complexity Analysis - Time & Space                  *
 *                                                                   *
 *  Instructions: List the Time and Space complexity of each         *
 *                of the following functions in the space provided   *
 *                                                                   *
 *********************************************************************/
'use strict';

/**
 * Problem 1:
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 **/

function isThereCat(obj) {

  while(obj['cat']) {
    console.log('There is cat!');
    delete obj['cat'];
  }
  console.log('There is no cat!');
}


/**
 * Problem 2:
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 **/

function powerOfThrees(int) {
  var result = [];
  var count = 1;
  var temp = 1;

  while(count <= 3) {
    temp *= int;
    result.push(temp);
    count++;
  }

  return result;
}


/**
 * Problem 3:
 *
 *  Time Complexity: O(n^2)
 *  Auxiliary Space Complexity: O(1)
 **/

function findDuplicate(collection) {
  var len = collection.length; // O(1)
  var currItem;

  for (var i = 0; i < len; i++) { // O(n)
    currItem = collection[i]; // O(1)

    for (var j = 0; j < len; j++) { // O(n)
      if (j !== i) { // O(1)
        if (currItem === collection[j]) { // O(1)
          return true; // O(1)
        }
      }
    }
  }
  return false; // O(1)
}


/**
 * Problem 4:
 *
 *  Time Complexity: O(m*n)
 *  Auxiliary Space Complexity: O(m*n)
 **/

function intersectionPoints(arr1, arr2) {
  var result = [];
  var points;

  for (var i = 0; i < arr1.length; i++) { // O(m)
    for (var j = 0; j < arr2.length; j++) { // O(n)
      if (arr1[i] === arr2[j]) { // O(1)
        points = [arr1[i], arr2[j]];
        result.push(points);
        points = [];
      }
    }
  }

  // return result;
}


/**
 * Problem 5:
 *
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity: O(n)
 **/

function nthFibonacci(n) {
  var result = [0,1];

  for(var i = 1; i < n; i++) {
    result[i+1] = result[i] + result[i-1];
  }

  return result[n];
}


/************************
 *     Extra Credit     *
 ************************/

/**
 * Extra Credit 1:
 *
 * Problem: Refactor findDuplicate such that it now finds
 *          and returns all repeating elements
 *          in O(n) time complexity.
 *
 *          What is the auxiliary space complexity of your solution?
 *
 *          Auxiliary Space Complexity: O(n)
 *
 *
 **/


function findDuplicate(collection){
  var lib = {};
  var result = {};

  for (var i = 0; i < collection.length; i++){
    if (lib[collection[i]] === undefined){
      lib[collection[i]] = true;
    } else {
      result[collection[i]] = true;
    }
  }

  return Object.keys(result);
}


console.log(findDuplicate([1,2,3,4,5,1,2,3,4,5]));

/**
 * Extra Credit 2:
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 **/

function nthFibonacci(n){
  var result;
  var cache = {};

  function searchFib(index){
    if (cache[index] !== undefined){
      return cache[index];
    } else if(index < 2){
      return index;
    } else {
      var toInsert = searchFib(index-1) + searchFib(index-2);
      cache[index] = toInsert;
      return cache[index];
    }
  }

  result = searchFib(n);
  return result;
}

// console.log(nthFibonacci(100));
