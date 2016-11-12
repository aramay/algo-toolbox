/*
 * majorityElement
 *
 * Write a function which accepts an array of integers and returns the majority element.
 *
 * The majority is defined as the integer which appears greater than half the length of the array.
 *
 * You may assume the majority element always exists.
 */

var majorityElement = function(arr) {
  // your code here
  // console.log(arr)

  var halfLength = arr.length / 2;

  var countMajority = {}

  for(var i =0; i<arr.length; i++){

    if(countMajority.hasOwnProperty(arr[i])){

      countMajority[arr[i]] += 1;
    }else {

      countMajority[arr[i]] = 1;
    }
    if(countMajority[arr[i]] > halfLength){
      return arr[i];
    }
  }

//   for(var item in countMajority){

//     if(countMajority[item] > halfLength){

//       return item;
//     }

//   }


  // return countMajority;

};

// console.log(majorityElement([1,1,1,1,2,3,4]));
// 1


/*
 * mergeSortedLists
 *
 * Write a function which accepts two sorted lists and returns a new sorted array containing all the values of the inputs.
 */

var mergeSortedLists = function(list1, list2) {
  // your code here

//   take item from 1st and 2nd array
//     compare them
//     smaller number goes into new array at index 0

//   repeat
  
//   [1,2,4]

  var sorted = true;

  var sortedArray = [];


  var sumOfSortedListLength = list1.length + list2.length;

  var counterlist1 = 0;
  var counterlist2 = 0;

  for(var i=0; i<sumOfSortedListLength; i++){



    if(list1[counterlist1] === undefined){

      sortedArray = sortedArray.concat(list2.slice(counterlist2));

      break;

    }

    if(list2[counterlist2] === undefined){

      sortedArray = sortedArray.concat(list1.slice(counterlist1));
      break;
    }

    if(list1[counterlist1] < list2[counterlist2]){

      sortedArray.push(list1[counterlist1]);

      counterlist1 ++;

    }else {


      sortedArray.push(list2[counterlist2]);

      counterlist2 ++;

    }

  }

  return sortedArray;
};

console.log(mergeSortedLists([1,5,9,15,17],[2,4,10]));
// [1,2,4,5,9,10,15,17]
