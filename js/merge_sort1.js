function mergesort(input) {

  function merge(arr1, arr2){
    var result = [];
    var totalElements = arr1.length + arr2.length;
    for (var i = 0, j = 0; i + j < totalElements;) {
      if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])){
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    return result;
  }

  function divide(arr) {
    if(arr.length < 2) {
      return arr;
    }
    var mid = Math.floor(arr.length / 2);
    return merge(divide(arr.slice(0, mid)), divide(arr.slice(mid)));
  }

  return divide(input);
}