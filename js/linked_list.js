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

LinkedList.prototype.insert = function (value, index){

    var length = this.length,
        currentNode = this.head,
        previousNode = null,
        newNode = new Node(value)

    //if index if is greater than size or less than 0
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

    while(index < length){
        var previous = currentNode,
            currentNode = currentNode.next
        console.log(currentNode)

        index += 1
    }

    
    previous.next = newNode
    newNode.next = currentNode

    this.length += 1;
    console.log("insert func ", newNode, this.length)


}

var testCase = new LinkedList();
testCase.append(10);
testCase.append(30);
testCase.append(20);
// debugger;
testCase.insert(11, 0)//insert at HEAD
testCase.insert(11, -1)//insert at out of bound index

testCase.insert(2, 2)//insert at given index
// testCase.append(3);