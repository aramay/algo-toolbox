class ListNode {
    data: any
    next: ListNode | null
    constructor(newData: any) {
        this.data = newData;
        this.next = null;

    }
}

class LinkedList {
    head: ListNode | null
    tail: ListNode | null
    size: number
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append = (value: any) => {
        // @ts-ignore: Object is possibly 'null'.
        let node: ListNode = this.head
        console.log("append called")
        if (node === null) {
            this.head = new ListNode(value)
            this.tail = this.head
        } else {
            let newNode: ListNode = new ListNode(value)
            // @ts-ignore: Object is possibly 'null'.∞∞^
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size += 1
    }

    insert(value: any, index: number) {

        let position: number = 1,
            currentNode: ListNode = this.head,
            previousNode: ListNode = null,
            newNode: ListNode = new ListNode(value)

        // if index is out of bounds
        if (index > this.size || index < 0) {
            return false
        }

        // if Index is at 0, insert at HEAD
        if (index === 0) {
            let oldHead: ListNode = this.head
            // let newHead: ListNode = new ListNode(value)
            this.head = newNode

            this.head.next = oldHead

            this.size += 1

            return
        }

        // this could be anywhere in the list
        while (position < index) {
            previousNode = currentNode
            currentNode = currentNode.next
            position += 1
        }
        /**might be inserting at wrong index #FIXED - 
         * change position index to start at 1 */
        previousNode.next = newNode
        newNode.next = currentNode
        this.size += 1
    }

    remove (index: number) {

        let currentNode:ListNode = this.head
        let previousNode: ListNode = null
        let position:number = 1

        // if index is out of bounds
        if (index > this.size || index < 0 ) {
            return false
        }

        // if index is 0, delete HEAD
        if (index === 0) {

            let oldHead: ListNode = this.head
            this.head = currentNode.next
            oldHead.next = null // remove node
        }

        // if index is not 0, and valid
        while (position < index) {
            previousNode = currentNode
            currentNode = currentNode.next
            position += 1
        }
        previousNode.next = currentNode.next
    }

    printForward () {

        function printForwardHelper (currentNode: ListNode) {
            // base case, exit recursive call
            if (currentNode === null) return 
            /** this print statement before recursive function
             * will print forward */
            console.log("print forward ", currentNode)
            printForwardHelper(currentNode.next)
            
        }
        printForwardHelper(this.head)
    }

    printBackward () {

        function printBackwardHelper (currentNode: ListNode) {
            // base case, exit recursive call
            if (currentNode === null) return 
            printBackwardHelper(currentNode.next)
            /** this print statement after recursive function
             * will print backwards */
            console.log("print forward ", currentNode)
        }
        printBackwardHelper(this.head)
    }
}

let testCase: LinkedList = new LinkedList();
testCase.append(10);
testCase.append(30);
testCase.append(20);
testCase.append(40);
console.log("testcase ", JSON.stringify(testCase, null, 2));

// testCase.insert(4, 0);
// console.log("testcase ", JSON.stringify(testCase, null, 2));
// testCase.insert(9, 3);
// console.log("testcase ", JSON.stringify(testCase, null, 2));

// testCase.remove(3);
// console.log("testcase remove", JSON.stringify(testCase, null, 2));
testCase.printForward();