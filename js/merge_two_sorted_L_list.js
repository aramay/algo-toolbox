function Node(value){
    this.value = value
    this.next = null
}

function LinkedList(){
    this.head = null
    this.tail = null
    this.length = 0
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
    // console.log("append func ", node)
    console.log(this.length)
}

LinkedList.prototype.appendMany = function(arr){
    
    for(var i=0; i<arr.length; i++){
        this.append(arr[i])
    }
}

LinkedList.prototype.mergeTwoSortedList = function(list1, list2){

    // console.log(list1, list2)

    var merged = new LinkedList()

    function merge(head1, head2){

        if(head1 === null){
            return head2
        }else if(head2 === null){
            return head1
            // merged.append(head2.value)
        }

        if(head1.value <= head2.value){
            merged.append(head1.value)
            //recursive call
            merge(head1.next, head2)
        }else{
            // console.log(merged.append)
            merged.append(head2.value)
            // this.append(head2.value)
            //recursive call
            merge(head1, head2.next)
        }
    }

    merge(list1.head, list2.head)

    console.log("merged list ", merged.head)

    return merged



}



var merge = new LinkedList()

var list1 = new LinkedList();
list1.appendMany([5, 10, 15]);
console.log(list1)

var list2 = new LinkedList();

list2.appendMany([2,3,20])
console.log(list2)

merge.mergeTwoSortedList(list1, list2)