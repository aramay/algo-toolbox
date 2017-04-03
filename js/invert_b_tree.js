/**
 * 1) Invert a binary tree.
Input:
         4
       /   \
      2     7
     / \   / \
    1   3 6   9

Output:
         4
      /   \
      7     2
     / \   / \
    9   6 3   1
 */

'use strict'

function Node (value) {
  this.value = value
  this.leftChild = null
  this.rightChild = null
}

function BinarySearchTree () {
  this.rootNode = null
  this.size = 0
}

  // Time Complexity:
  // Auxiliary Space Complexity:
BinarySearchTree.prototype.insert = function (value) {
  if (this.rootNode === null) {
    this.rootNode = new Node(value)

    this.size += 1
  } else {
      // helper function
    function findAndInsert (currentNode) {
        // right child lookup
        if (value > currentNode.value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value)
          } else {
            findAndInsert(currentNode.rightChild)
          }
        }// end right child lookup

        // left child lookup
        if (value < currentNode.value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value)
          } else {
            findAndInsert(currentNode.leftChild)
          }
        }// end left child lookup
      }// end findAndInsert

      // invoke helper function
    findAndInsert(this.rootNode)

    this.size += 1
  }

    // console.log(this.root)
}

BinarySearchTree.prototype.invert = function () {
  
    
    
    function invertBTree(root){

      var currentNode = root
      
      if (currentNode.rightChild !== null) {
        invertBTree(currentNode.rightChild)
      }
      if (currentNode.leftChild !== null) {
        invertBTree(currentNode.leftChild)
      }
      
      var temp = currentNode.rightChild
      currentNode.rightChild = currentNode.leftChild
      currentNode.leftChild = temp
      
      // if (currentNode !== null) {
      //    var temp = currentNode.rightChild
      //    currentNode.rightChild = currentNode.leftChild
      //    currentNode.leftChild = temp

      //  }

      //  invert(currentNode.rightChild)
      //  invert(currentNode.leftChild)
    }

    invertBTree(this.rootNode)
    console.log('inverted b-tree', bt)
    
  }

var bt = new BinarySearchTree()

bt.insert(12)
console.log(bt)
bt.insert(27)
// debugger;
bt.insert(11)
bt.insert(9)
bt.insert(25)

// console.log(bt)
bt.invert()
// console.log("breadthFirstSearch", bt.breadthFirstSearch(15))
// console.log("depthFirstSearch", bt.depthFirstSearch(15) === 15)
