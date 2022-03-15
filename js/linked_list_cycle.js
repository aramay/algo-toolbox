/**
 * You have a singly-linked list ↴ and want to check if it contains a cycle.
A singly-linked list is built with nodes, where each node has:

node.next—the next node in the list.
node.value—the data held in the node. For example, if our linked list stores people in line at the movies, node.value might be the person's name.
For example:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

Breakdown
Because a cycle could result from the last node linking to the first node, we might need to look at every node before we even see the start of our cycle again. So it seems like we can’t do better than 
O
(
n
)
O(n) runtime.

How can we track the nodes we’ve already seen?

Using a set, we could store all the nodes we’ve seen so far. The algorithm is simple:

If the current node is already in our set, we have a cycle. Return true.
If the current node is null we've hit the end of the list. Return false.
Else throw the current node in our set and keep going.
What are the time and space costs of this approach? Can we do better?

Our runtime is 
O
(
n
)
O(n), the best we can do. But our space cost is also 
O
(
n
)
O(n). Can we get our space cost down to 
O
(
1
)
O(1) by storing a constant number of nodes?

Think about a looping list and a linear list. What happens when you traverse one versus the other?

A linear list has an end—a node that doesn’t have a next node. But a looped list will run forever. We know we don’t have a loop if we ever reach an end node, but how can we tell if we’ve run into a loop?

We can’t just run our function for a really long time, because we’d never really know with certainty if we were in a loop or just a really long list.

Imagine that you're running on a long, mountainous running trail that happens to be a loop. What are some ways you can tell you're running in a loop?

One way is to look for landmarks. You could remember one specific point, and if you pass that point again, you know you’re running in a loop. Can we use that principle here?
 */

class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

const containsCycle = (firstNode) => {

  // start both runner at first node
  let slowRunner = firstNode
  let fastRunner = firstNode

  while(fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next
  }

  if (slowRunner === slowRunner) return true

  return false
}

/**
 * Bonus
How would you detect the first node in the cycle? Define the first node of the cycle as the one closest to the head of the list.
Would the program always work if the fast runner moves three steps every time the slow runner moves one step?
What if instead of a simple linked list, you had a structure where each node could have several "next" nodes? This data structure is called a "directed graph." How would you test if your directed graph had a cycle?
 */