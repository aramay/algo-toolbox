/*
 *                       Target Practice VI
 *
 *                        Traversals Pt. 2
 *
 *  Instructions: One of the most fundamental components of working
 *                with trees and graphs is traversals.  We will
 *                focus primarily on this piece to build your
 *                foundation of these data structures.
 *
 *          Note: To run tests, set 'runTests' variable to true
 */

'use strict';
var runTests = true;

/*
 *  4. For the example graph below, what is the expected output if we printed each
 *     vertex value from vertex A outwards using:
 *
 *     a. BREADTH FIRST traversal? ABCDEGF
 *
 *     b. DEPTH FIRST traversal? ABDCEFG
 *
 *     NOTE: Assume the order of edges will be alphabetical. E.g., Vertex D has edges to
 *           5 vertices in the following order: B, C, E, F, G
 *
 *     NOTE: The traversal should take care of redundancy and not print the same vertex
 *           value twice.
 *
 *     Example Graph:
 *
 *              B     E
 *            /   \  /
 *          A       D  --- F
 *            \   /   \   /
 *              C       G
 */

/*** Next we need a graph.  Use an existing graph class that you have built. ***/



var Vertex = function(id){
 this.value = id;
 this.edges = {};
};


var Graph = function(){
  this.vertices = {};
  this.totalEdges = 0;
  this.totalVertices = 0;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.addVertex = function(id) {
  var newVertex = new Vertex(id);
  if (!(newVertex in this.vertices)) {
    this.vertices[id] = newVertex;
    this.totalVertices++;
    return this;
  }
  return null;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.getVertex = function(id) {
  if (this.vertices[id] in this.vertices) {
    return this.vertices[id];
  }
  return null;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.addEdge = function(id1, id2) {
  // if ((this.vertices[id1].value in this.vertices) && (this.vertices[id2].value in this.vertices)) {
    this.vertices[id1].edges[id2] = id1;
    this.vertices[id2].edges[id1] = id2;
    this.totalEdges++;
    return this;
  //
  // return null;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.removeEdge = function(id1, id2) {
  if ((this.vertices[id1] in this.vertices) && (this.vertices[id2] in this.vertices)) {
    delete this.vertices[id1].edges[id2];
    delete this.vertices[id2].edges[id1];
    this.totalEdges--;
  }
  return null;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.removeVertex = function(id) {
  if (this.vertices[id] in this.vertices) {
    //remove edges associated with vertex
    for (edge in this.vertices.edges) {
      // edge = id of each connected vertex
      delete this.vertices[edge].edges[id];
    }
    // remove vertex
    delete this.vertices[id];
    this.totalVertices--;
  }
  return null;
};


// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.findNeighbors = function(id) {
  if (this.vertices[id] in this.vertices) {
    return this.vertices[i].edges;
  }
  return null;
};

/*
 *  5a. Build a replica of the example graph in Problem 4. to use as an example.
 */

var ourGraph = new Graph();
ourGraph.addVertex('A');
ourGraph.addVertex('B');
ourGraph.addVertex('C');
ourGraph.addVertex('D');
ourGraph.addVertex('E');
ourGraph.addVertex('F');
ourGraph.addVertex('G');

ourGraph.addEdge('A','B');
ourGraph.addEdge('A','C');
ourGraph.addEdge('B','D');
ourGraph.addEdge('C','D');
ourGraph.addEdge('D','E');
ourGraph.addEdge('D','G');
ourGraph.addEdge('G','F');
ourGraph.addEdge('D','F');
console.log('our graph', ourGraph);

/*
 *  5b. Using a queue and while loop, write a function that takes in a graph and
 *      outputs an array of values from vertex A outwards ordered by BREADTH
 *      FIRST traversal.
 *
 *  Input: Graph
 *  Output: Array
 *
 *  NOTE: Confirm with your answer from problem 4a.
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  HINT: Use a hash table to handle redundancy
 */

Graph.prototype.breadthFirst = function(origin) {
  var result = [];
  var queue = [];
  var visited = {};
  var currentVertex = origin;
  queue.push(currentVertex);
  while (queue.length > 0) {
    visited[currentVertex] = 'yes';
    console.log('edges', this.vertices.currentVertex.edges);
    for(var edge in this.vertices.currentVertex.edges) {
      queue.push(this.vertices[edge]);
    }
    result.push(currentVertex);
    currentVertex = queue.shift();
  }
  return result;
}

/*
 *  5c. Using a stack and while loop, write a function that takes in a graph and
 *      outputs an array of values from vertex A outwards ordered by DEPTH
 *      FIRST traversal.
 *
 *      Input: Graph
 *      Output: Array
 *
 *  NOTE: Confirm with your answer from problem 4b.
 *
 *  NOTE: You may use an array or linked list for your stack.
 *
 *  HINT: Use a hash table to handle redundancy
 */

Graph.prototype.depthFirst = function(origin) {
  var result = [];
  var stack = [];
  var visited = {};
  var currentVertex = origin;
  stack.push(currentVertex);
  while (stack.length > 0) {
    visited[currentVertex] = 'yes';
    for (var edge in currentVertex.edges) {
      stack.push(this.vertices[edge]);
    }
    result.push(currentVertex);
    currentVertex = stack.pop();
  }
  return result;
}




















////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

function run(){
  // code for capturing console.log output
  var record = [];
  (function () {
    var log = console.log;
    console.log = function () {
      record = record.concat(Array.prototype.slice.call(arguments));
      log.apply(this, Array.prototype.slice.call(arguments));
    };
  }());



  console.log('breadthFirst tests');
  var testCount = [0, 0];

  assert(testCount, 'able to return the elements of a graph in breadth first manner', function(){
    var work = new Graph();
    var toInsert = ['A','B','C','D','E','F','G'];
    toInsert.forEach(function(element){
      work.addVertex(element);
    });
    work.addEdge('A', 'B');
    work.addEdge('A', 'C');
    work.addEdge('D', 'B');
    work.addEdge('D', 'C');
    work.addEdge('E', 'D');
    work.addEdge('D', 'F');
    work.addEdge('G', 'D');
    work.addEdge('G', 'F');

    console.log('work', work.vertices);

    var example = work.breadthFirst('A');
    var test1 = example[0] === 'A';
    var test2 = example[1] === 'B' || example[2] === 'B';
    var test3 = example[1] === 'C' || example[2] === 'C';
    var test4 = example[3] === 'D';
    var test5 = example[4] === 'E' || example[5] === 'E' || example[6] === 'E';
    var test6 = example[4] === 'F' || example[5] === 'F' || example[6] === 'F';
    var test7 = example[4] === 'G' || example[5] === 'G' || example[6] === 'G';
    return test1 && test2 && test3 && test4 && test5 && test6 && test7;
  });

  assert(testCount, 'should return only starting initial node if no edges exist in graph', function(){
    var work = new Graph();
    var toInsert = ['A','B','C','D','E','F','G'];
    toInsert.forEach(function(element){
      work.addVertex(element);
    });
    var example = work.breadthFirst('A');
    return example.length === 1 && example[0] === 'A';
  });

  console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


  console.log('depthFirst tests');
  var testCount = [0, 0];

  assert(testCount, 'able to return the elements of a graph in depth first manner', function(){
    var work = new Graph();
    var toInsert = ['A','B','C','D','E','F','G'];
    toInsert.forEach(function(element){
      work.addVertex(element);
    });
    work.addEdge('A', 'B');
    work.addEdge('A', 'C');
    work.addEdge('D', 'B');
    work.addEdge('D', 'C');
    work.addEdge('E', 'D');
    work.addEdge('D', 'F');
    work.addEdge('G', 'D');
    work.addEdge('G', 'F');

    var example = work.depthFirst('A');
    var test1 = example[0] === 'A';
    var test2 = example[1] === 'B' || example[1] === 'C';
    var test3 = example[2] === 'D';
    var test4 = example[3] === 'B' || example[3] === 'C' || example[3] === 'E' || example[3] === 'F' || example[3] === 'G';
    return test1 && test2 && test3 && test4;
  });

  assert(testCount, 'should return only starting initial node if no edges exist in graph', function(){
    var work = new Graph();
    var toInsert = ['A','B','C','D','E','F','G'];
    toInsert.forEach(function(element){
      work.addVertex(element);
    });
    var example = work.depthFirst('A');
    return example.length === 1 && example[0] === 'A';
  });

  console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');









  // function for checking if arrays are equal
  function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }
    return true;
  }

  // custom assert function to handle tests
  // Array count : keeps track out how many tests pass and how many total
  //   in the form of a two item array i.e., [0, 0]
  // String name : describes the test
  // Function test : performs a set of operations and returns a boolean
  //   indicating if test passed
  function assert(count, name, test){
    if(!count || !Array.isArray(count) || count.length !== 2) {
      count = [0, '*'];
    } else {
      count[1]++;
    }

    var pass = 'false';
    var errMsg = null;
    try {
      if (test()) {
        pass = ' true';
        count[0]++;
      }
    } catch(e) {
      errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
    if (errMsg !== null) {
      console.log('       ' + errMsg + '\n');
    }
  }

}

if (runTests){
  run()
}
