function Node(value){
    this.value = value
    this.next = null
}

function LinkedList(){
    this.length = 0;
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.append = function (value) {
    
// debugger;
    var node = this.head // set Node to head

    if (node === null){
        console.log("empty")
        this.head = new Node(value)
        this.tail = this.head

    }else{
        newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode

    }

    this.length ++
    console.log("append func ", node)
    console.log(this.length)
}

// LinkedList.prototype.appendMany = function(arr){

//     for(var i=0; i<arr.length; i++){

//     }
// }

LinkedList.prototype.insert = function (value, index){

    var length = this.length,
        currentNode = this.head,
        previousNode = null,
        position = 0
        newNode = new Node(value)

    //if index is greater than size or less than 0
    if(index > this.length || index < 0){
        return false
    }
    //if index is 0, insert at HEAD
    if(index === 0){
        var oldHead = this.head
        this.head = newNode

        this.head.next = oldHead

        this.length += 1

        return // exit
    }

    while(position < index){//why does this insert in current location?
        // debugger;
        var previous = currentNode,
            currentNode = currentNode.next
        console.log(currentNode)

        position += 1
    }

    
    previous.next = newNode
    newNode.next = currentNode

    this.length += 1;
    console.log("insert func ", newNode, this.length)
    console.log("insert func ", this.head, this.length)


}

LinkedList.prototype.remove = function(index){

    var length = this.length,
        currentNode = this.head,
        previousNode = null,
        nodeToDelete = null,
        position = 0
        // newNode = new Node(value)

    //if index is greater than size or less than 0
    if(index > this.length || index < 0){
        return false
    }
        
    //if index is 0, delete HEAD
    if(index === 0){

        var oldHead = this.head
        this.head = currentNode.next
        oldHead.next = null // remove node

        this.length -= 1

        return //exit
    }

    while(position < index){
    // while(currentNode.next !== null){
        // debugger
        previousNode = currentNode
        currentNode = currentNode.next
        // nodeToDelete = previousNode.next
        // currentNode = nodeToDelete.next

        position += 1

    }

    previousNode.next = currentNode.next
    console.log("list after node removed ", this.head)

}

LinkedList.prototype.printForward = function(){

    function printHelper(currentNode){

        if (currentNode === null) { return }
        
        printHelper(currentNode.next)
        console.log("print forward ", currentNode)

    }

    printHelper(this.head)

}

LinkedList.prototype.printBackward = function(){
  reverse(this.head);
}

function reverse(node) {
    var temp = new LinkedList()
  if(node === null) {
    return;
  }
    reverse(node.next);
    temp.append(node)
    console.log(node);
}


var testCase = new LinkedList();
testCase.append(10);
testCase.append(30);
testCase.append(20);
testCase.append(40);
// debugger;
testCase.insert(11, 0)//insert at HEAD
testCase.insert(11, -1)//insert at out of bound index
// debugger
testCase.insert(2, 3)//insert at given index
// testCase.append(3);
testCase.remove(0);
testCase.remove(2);

console.log('testCase', testCase)
testCase.printForward()
// testCase.printBackward()