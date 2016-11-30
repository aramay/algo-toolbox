/**
 *  Homework I
 *
 *  Instructions:
 *   List the Time and Auxiliary Space Complexity of each of the following functions in the space provided
 **/


/**
 * Problem 1:
 *  Time Complexity: O(1)
 *  Auxiliary Space Complexity: O(1)
 **/

function firstTimesLast(array) {
  var result = null;

  if (array.length < 2) {
    return result;
  } else {
    result = array[0] * array[length-1];
    return result;
  }
};

/**
 * Problem 2:
 *  Time Complexity:O(n)
 *  Auxiliary Space Complexity: O(n)
 **/

function mostFrequentOccurrence(string) {
  var lowerString = string.toLowerCase();
  var letters = {};
  var mostFrequent = [];

  for(var i = 0; i < lowerString.length; i++) {
    if (letters[lowerString[i]]) {
      letters[lowerString[i]] ++;
    } else {
      letters[lowerString[i]] = 1;
    }
  }

  for(var key in letters) {
    if (!mostFrequent.length) {
      mostFrequent = [key, letters[key]];
    } else {
      if (letters[key] > mostFrequent[1]) {
        mostFrequent = [key, letters[key]];
      }
    }
  }

  return mostFrequent[0];
};

/**
 * Problem 3:
 *  Time Complexity: O(n^2)
 *  Auxiliary Space Complexity: O(1)
 **/

function printUnorderedPairs(array) {
 for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
};

/**
 * Problem 4:
 *  Time Complexity:O(log(n))
 *  Auxiliary Space Complexity:O(log(n))
 **/

function sortedArraySearch(sortedArray, target) {
  var mid = Math.floor(sortedArray.length / 2);

  if (sortedArray[mid] === target) {
    return sortedArray[mid];
  } else if (sortedArray[mid] < target && sortedArray.length > 1) {
    return sortedArraySearch(sortedArray.splice(mid, Number.MAX_VALUE), target);
  } else if (sortedArray[mid] > target && sortedArray.length > 1) {
    return sortedArraySearch(sortedArray.splice(0, mid), target);
  } else {
    return -1;
  }
};

/**
 * Problem 5:
 *  Time Complexity: O(m*n)
 *  Auxiliary Space Complexity:O(m*n)
 **/

function makeCombinedMatrix(arrayOne, arrayTwo) {
  var result = [];
  var row;

  for (var i = 0; i < arrayOne.length; i++) {
    row = [];

    for (var j = 0; j < arrayTwo.length; j++) {
      row.push(arrayTwo[j] + arrayOne[i]);
    }

    result.push(row);
  }

  return result;
};
