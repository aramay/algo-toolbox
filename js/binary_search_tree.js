/*
*  Homework V
*
*  Problem 1: Node class
*
*  Prompt:    Create a Node class
*             The Node class should contain the following properties:
*
*                   value:   integer value (default null)
*               leftChild:   pointer to another node (initially null)
*              rightChild:   pointer to another node (initially null)
*
*                 Example:   var sample = new Node(1)
*                            sample.value        // 1
*                            sample.leftChild    // null
*                            sample.rightChild   // null
*
*
*  Problem 2: BinarySearchTree class.
*
*  Prompt:    Create a BinarySearchTree class
*
*             The BinarySearchTree class should contain the following
*             properties:
*
*                    root:   A pointer to the root node (initially null)
*                    size:   The number of nodes in the BinarySearchTree
*
*             The BinarySearchTree class should also contain the following
*             methods:
*
*                  insert:   A method that takes takes an integer value, and
*                            creates a node with the given input.  The method
*                            will then find the correct place to add the new
*                            node. Values larger than the current node node go
*                            to the right, and smaller values go to the left.
*
*                            Input:     value
*                            Output:    undefined
*
*                  search:   A method that will search to see if a node with a
*                            specified value exists and returns true or false
*                            if found.
*
*                            Input:     value
*                            Output:    boolean
*
*
*             What are the time and auxilliary space complexities of the
*             various methods?
*
*
*  Extra:     Remove method for BinarySearchTree class
*
*  Prompt:    Add the following method to the BinarySearchTree class:
*
*                  remove:   A method that removes a value matching the input
*                            the tree is then retied so that the binary search
*                            tree order is not violated.
*/
'use strict';

function Node(value) {
    this.value = value
    this.leftChild = null
    this.rightChild = null
}

function BinarySearchTree() {
    this.root = null
    this.size = 0
  
}

  // Time Complexity: 
  // Auxiliary Space Complexity: 
BinarySearchTree.prototype.insert = function(value) {

    if(this.root === null){
      this.root = new Node(value)

      this.size += 1
    }else{

      //helper function
      function findAndInsert(currentNode){

        //right child lookup
        if(value > currentNode.value){

          if(currentNode.rightChild === null){
            currentNode.rightChild = new Node(value)
          }else{
            findAndInsert(currentNode.rightChild)
          }
        }//end right child lookup

        //left child lookup
        if(value < currentNode.value){

          if(currentNode.leftChild === null){
            currentNode.leftChild = new Node(value)
          }else{
            findAndInsert(currentNode.leftChild)
          }
        }//end left child lookup
      }//end findAndInsert

      //invoke helper function
      findAndInsert(this.root)

      this.size += 1
    }

    // console.log(this.root)
};


  // Time Complexity: 
  // Auxiliary Space Complexity: 
BinarySearchTree.prototype.search = function(value) {
  
};




var bt = new BinarySearchTree();

bt.insert(12);
console.log(bt);
bt.insert(27);
// debugger;
bt.insert(15);
bt.insert(9);
console.log(bt);





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// var expect = require('chai').expect;

// describe('binary search tree node', function() {

//   describe('creation of a node', function() {
//     it('should exist: ', function() {
//       var test = new Node();

//       expect(test).to.not.equal(undefined);
//     });
//   });

//   describe('encoding a value', function() {
//     it('should store a value: ', function() {
//       var test = new Node();

//       expect(test).to.have.property('value');
//       expect(test.value).to.equal(null);

//       test.value = 3;
//       expect(test.value).to.equal(3);
//     });
//   });

//   describe('pointing to another node', function() {
//     it('should be able to point to another node: ', function() {
//       var initial = new Node(5);
//       var rightTarget = new Node(10);
//       var leftTarget = new Node(2);

//       expect(initial).to.have.property('value');
//       expect(initial).to.have.property('rightChild');
//       expect(initial).to.have.property('leftChild');
//       expect(initial.rightChild).to.equal(null);
//       expect(initial.leftChild).to.equal(null);

//       initial.rightChild = rightTarget;
//       initial.leftChild = leftTarget;

//       expect(initial.rightChild.value).to.equal(10);
//       expect(initial.leftChild.value).to.equal(2);

//     });
//   });
// });

// describe('binary search tree class ', function() {

//   describe('BinarySearchTree properties', function() {
//     it('should have properties root and size', function() {
//       var test = new BinarySearchTree();

//       expect(test).to.have.property('root');
//       expect(test).to.have.property('size');
//       expect(test.root).to.equal(null);
//       expect(test.size).to.equal(0);
//     });
//   });

//   describe('BinarySearchTree methods existence', function(){
//     it('should have methods insert and search', function(){
//       var test = new BinarySearchTree();

//       expect(test).to.respondTo('insert');
//       expect(test).to.respondTo('search');
//     });
//   });

//   describe('BinarySearchTree insert method', function(){
//     it('should be able to insert a single node', function(){
//       var test = new BinarySearchTree();

//       expect(test.root).to.equal(null);
//       expect(test.size).to.equal(0);

//       test.insert(5);

//       expect(test.root.value).to.equal(5);
//       expect(test.root.rightChild).to.equal(null);
//       expect(test.root.leftChild).to.equal(null);
//       expect(test.size).to.equal(1);
//     });

//     it('should be able to insert a second node', function(){
//       var test = new BinarySearchTree();

//       expect(test.root).to.equal(null);
//       expect(test.size).to.equal(0);

//       test.insert(5);

//       expect(test.root.value).to.equal(5);
//       expect(test.root.rightChild).to.equal(null);
//       expect(test.root.leftChild).to.equal(null);
//       expect(test.size).to.equal(1);

//       test.insert(10);

//       expect(test.root.value).to.equal(5);
//       expect(test.root.rightChild.value).to.equal(10);
//       expect(test.root.leftChild).to.equal(null);
//       expect(test.size).to.equal(2);
//     });
//   });

//   describe('BinarySearchTree search method', function(){
//     it('should return true when the node exists', function(){
//       var test = new BinarySearchTree();
//       test.insert(5);
//       test.insert(10);

//       expect(test.search(5)).to.equal(true);
//     });

//     it('should return false when the node does not exist', function(){
//       var test = new BinarySearchTree();
//       test.insert(5);
//       test.insert(10);

//       expect(test.search(17)).to.equal(false);
//     });
//   });

//   // describe('BinarySearchTree remove method', function(){
//   //   it('should delete a node', function(){
//   //     var test = new BinarySearchTree();
//   //     [5,10,2,7,1].map(function(value) {
//   //       test.insert(value);
//   //     });
//   //
//   //     expect(test.search(7)).to.equal(true);
//   //
//   //     test.remove(7);
//   //
//   //     expect(test.search(7)).to.equal(false);
//   //
//   //   });
//   //
//   //   it('should modify the size when deleting a node', function(){
//   //     var test = new BinarySearchTree();
//   //     [5,10,2,7,1].map(function(value) {
//   //       test.insert(value);
//   //     });
//   //
//   //     expect(test.size).to.equal(5);
//   //     test.remove(7);
//   //     expect(test.size).to.equal(4);
//   //   });
//   // });

// });
