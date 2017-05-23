/*
 *                        Target Practice II                          
 *                                                                    
 *                           Recursion                                
 *                                                                    
 *  Instructions: Using the Helper Method Recursive Pattern work through the 
 *  following problems.                              
 *                                                                    
 */
'use strict';
/*
 * 1a. What is the term when the recursive call invokes itself more than once.
 */


/*
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.
 */


/*
 * 1c. Should the recursive case or base case typically be tackled first?
 */


/*
 * 2a. Print each item in an array in order using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printArray([1,2,3]) => 
 *          1
 *          2
 *          3
 /

function printArray(arr){

}


/*
 * 2b. Print each item in an array backwards using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printReverse([1,2,3]) => 
 *          3
 *          2
 *          1
 */

function printReverse(arr){

}


/*
 * 2c. Reverse a string using Helper Method Recursion
 *
 * Input:   String
 * Output:  String
 *
 * Example: reverseString('hello') => 'olleh'
 */

function reverseString(str){
  var result = '';
  
  function traverseBack(index){
    if (index < 0){
      return;
    }
    
    result += str[index];
    
    traverseBack(index - 1);
  }
  traverseBack(str.length - 1);
  
  return result;
}

function reverseString2(str){
  if (str.length <= 1){
    return str;
  }
  
  return str[str.length - 1] + reverseString2(str.slice(0, str.length - 1));
}

//console.log(reverseString2('hello'));


/*
 * 2d. Given an array of integers, create an array of two-item arrays using 
 *     Helper Method Recursion
 *
 * Input:   Array of Integers
 * Output:  Array of two-item Arrays
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */

function arrayPairs(arr){
  var result = [];
  
  function traverse(index){
    if (index >= arr.length){
      return;
    }
    
    result.push([arr[index], arr[index + 1]]);
    
    traverse(index + 2);
  }
  traverse(0);
  
  return result;
}

// console.log(arrayPairs([1,2,3,4,5]));


/*
 * 2e. Flatten a nested array using Helper Method of Recursion
 *
 * Input:   Array of Integers and Arrays
 * Output:  Array of Integers
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */

function flatten(arr){
  var result = [];
  
  function traverse(element){
    if (Number.isInteger(element)){
      result.push(element);
      return;
    }
    
    element.forEach(function(item){
      traverse(item);
    })
  }
  traverse(arr);
  
  return result;
}

//console.log(flatten([1, [2, 3, [4]], 5, [[6]]]));


/*
 * 2f. Given a base and an exponent, create a function to find the power using
 *     Helper Method Recursion
 *
 * Input:   Two Integers, base and exponent
 * Output:  Integer
 *
 * Example: power(3, 4) => 81
 */

function power(a, b){

}


/*
 * 2g. Merge two sorted arrays using the Helper Method Recursion
 * 
 * Input:   Two Arrays, both sorted
 * Output:  Array, sorted
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */


function merge(arr1, arr2){
  var result = [];
  
  function traverse(p1, p2){
    if (p1 === arr1.length){
      result = result.concat(arr2.slice(p2));
      return;
    } else if (p2 === arr2.length){
      result = result.concat(arr1.slice(p1));
      return;
    }
    
    if (arr1[p1] <= arr2[p2]){
      result.push(arr1[p1]);
      traverse(p1 + 1, p2);
    } else {
      result.push(arr2[p2]);
      traverse(p1, p2 + 1);
    }
  }
  traverse(0, 0);
  
  return result;
}

// console.log(merge([1,4,7], [2,3,6,9]));