/**
 * Write a function to check that a binary tree ↴ is a valid binary search tree. ↴
Here's a sample binary tree node class:
 
 * What makes a given node "correct" relative to its ancestors in a BST? Two things:

if a node is in the ancestor's left subtree, then it must be less than the ancestor, and
if a node is in the ancestor's right subtree, then it must be greater than the ancestor.

FILE - Binary Search Tree Checker (Practice Interview Question) | Interview Cake.pdf

/Users/abid/Documents/Dev_Bootcamp_Working_Dir/algo_toolbox/js/Binary Search Tree Checker (Practice Interview Question) | Interview Cake.pdf

 */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

