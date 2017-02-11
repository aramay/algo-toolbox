
'use strict';

// http://eloquentjavascript.net/1st_edition/appendix2.html

class Minheap {
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
    this.bubbleUp();
  }

  bubbleUp(){
    var childIndex = this.size() - 1;
    var parentIndex;

    if (childIndex % 2 === 0){
      // even case
      parentIndex = (childIndex - 2) / 2;
    } else {
      // odd case
      parentIndex = (childIndex - 1) / 2;
    }

    while (childIndex > 0 && this.storage[childIndex] < this.storage[parentIndex]){
      this.swap(childIndex, parentIndex);

      childIndex = parentIndex;

      if (childIndex % 2 === 0){
        // even case
        parentIndex = (childIndex - 2) / 2;
      } else {
        // odd case
        parentIndex = (childIndex - 1) / 2;
      }
    }
  }

  extract(){
    this.swap(0, this.size() - 1);
    var temp = this.storage.pop();
    this.bubbleDown();
    return temp;
  }

  chooseChildIndex(childIndex1, childIndex2){
    if (childIndex1 >= this.size()){
      return -1;
    } else if (childIndex2 >= this.size()){
      return childIndex1;
    } else if (this.storage[childIndex1] < this.storage[childIndex2]){
      return childIndex1;
    } else {
      return childIndex2;
    }
  }

  bubbleDown(){
    var parentIndex = 0;
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;

    var masterChildIndex = this.chooseChildIndex(childIndex1, childIndex2);
    if (masterChildIndex === -1){return;}

    while (parentIndex < this.size()-1 && this.storage[parentIndex] > this.storage[masterChildIndex]){
      this.swap(parentIndex, masterChildIndex);

      parentIndex = masterChildIndex;
      childIndex1 = 2 * parentIndex + 1;
      childIndex2 = 2 * parentIndex + 2;
      masterChildIndex = this.chooseChildIndex(childIndex1, childIndex2);
    }

  }
}



var test = new Minheap();

test.insert(1);
test.insert(2);
test.insert(7);
test.insert(5);
test.insert(9);
test.insert(10);
test.insert(8);
test.insert(12);


console.log(test.storage);

console.log(test.extract());
console.log(test.extract());

console.log(test.storage);
