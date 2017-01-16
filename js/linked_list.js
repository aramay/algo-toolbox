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
    
debugger;
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
    console.log(node)
}

var testCase = new LinkedList();
testCase.append(10);
testCase.append(30);
testCase.append(20);
// testCase.append(3);