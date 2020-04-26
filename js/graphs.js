 /*
  *                                 Homework VIII
  *
  *  Problem: Graph
  *
  *  Prompt: Create a Vertex class/constructor and Graph class/constructor.
  *          Name it Graph.
  *
  *  The Vertex will have the following properties:
  *
  *               value: integer value (initially null)
  *               edges: hash that contains edges to other vertices
  *
  *  The Graph will have the following properties:
  *
  *            vertices: A hash/dictionary/object to store vertices
  *       totalVertices: The total number of vertices in your Graph
  *          totalEdges: The total number of edges in your Graph
  *
  *  The Graph will also have the following methods:
  *
  *           addVertex: Method that accepts an id (int/str), and creates an
  *                      object with a "value" of id, and a property called
  *                      "edges" which will store the edges of the vertex. If a
  *                      vertex with the id already exists, then do not create a
  *                      new vertex.
  *
  *           getVertex: Method that takes an id, and outputs the vertex with the
  *                      matching id, if it exists.
  *
  *             addEdge: Method that accepts two different id's as its input, and
  *                      creates an edge between both vertices.
  *                      (This edge may look like [id1,id2])
  *
  *          removeEdge: Method that accepts two different id's as its input, and
  *                      removes the edge between the two vertices if it exists.
  *
  *        removeVertex: Method that takes an id as its input, and removes the
  *                      vertex with the matching id.
  *
  *       findNeighbors: Method that accepts an id as its input, and returns
  *                      all of the edges of that vertex.
  *
  *       forEachVertex: Method that accepts an operation, and performs that
  *                      operation on each vertex in the Graph.
  *
  *  Input:  N/A
  *  Output: A Graph instance
  *
  *  What are the time and auxilliary space complexities of the various methods?
  *
  */

'use strict'

 /*
  *  Extra Credit: forEachEdge
  *
  *  Prompt: Method that accepts an operation, and performs that operation on each
  *          edge in the Graph
  */




var Vertex = function (id) {
  this.value = id
  this.edge = {}
}

var Graph = function () {
  this.vertices = {}
  this.totalVertices = 0
  this.totalEdges = 0
}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.addVertex = function (id) {
  if (this.vertices[id] === undefined) {
    
    var newVertex = new Vertex(id)
    this.vertices[id] = newVertex

    this.totalVertices += 1
  }

  console.log(this.vertices)
}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.getVertex = function (id) {

  if(this.vertices[id] !== undefined){
    return this.vertices[id]
  }
  else{
    console.log("ID does not exist in graph")
  }

}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.addEdge = function (id1, id2) {

  //check if given vertices exist
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
    
    //check if edges already exist
    if (this.vertices[id1].edge[id2] === undefined && this.vertices[id2].edge[id1] === undefined ) {
      
      this.vertices[id1].edge[id2] = id2
      this.vertices[id2].edge[id1] = id1

      this.totalEdges += 1
    }
    else{
      console.log("Edge already exists")
    }
    
  }
  else{
    console.log("Either vertices exists")
  }

}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.removeEdge = function (id1, id2) {

  //check if given vertices exist
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
    
    //check if edges already exist
    if (this.vertices[id1].edge[id2] !== undefined && this.vertices[id2].edge[id1] !== undefined ) {
      
      delete this.vertices[id1].edge[id2]
      delete this.vertices[id2].edge[id1]

      // this.vertices[id1].edge[id2] = id2
      // this.vertices[id2].edge[id1] = id1

      this.totalEdges -= 1
    }
    else{
      console.log("Edge already exists")
    }
    
  }
  else{
    console.log("Either vertices exists")
  }
}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.removeVertex = function (id) {

  //check if vertex exists
  if (this.vertices[id] !== undefined) {
    
    var toDelete = this.vertices[id]

    console.log("toDelete ", toDelete.edge)
    //iterate over edges
    for (var edge in toDelete.edge) {
      console.log("removeVertex ", id, edge)
      this.removeEdge(id, edge)
    }

    //delete the vertex reference
   // delete this.vertices[id]
    this.totalVertices -= 1
  }
  else {
    console.log("Vertex does not exists")
  }

}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.findNeighbors = function (id) {

}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.forEachVertex = function (operation) {

}

// Time Complexity:
// Auxiliary Space Complexity:
Graph.prototype.forEachEdge = function (operation) {

}

var test = new Graph()

test.addVertex(5)
test.addVertex(10)
test.addVertex(11)

// console.log(test.addVertex(5))

// test.addEdge()
console.log(test)

test.addEdge(5,10)

console.log(test.vertices)

test.removeVertex(5)

console.log(test.vertices)