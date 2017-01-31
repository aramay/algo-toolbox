// Trying to cache last recently used items
// 
// every element stored in LRUCache always appears as key-value pairs


function Node(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
}



function LRUCache(capacity){
    this.count = 0;
    this.capacity = capacity;
    this.ref = {};
    
    this.head = new Node();
    this.tail = new Node();
    
    this.head.next = this.tail;
    this.tail.previous = this.head;
}


//   [null, null] <--> ['blah', 10] <--> ['hello', 5]  <--> ['e', 1] <--> [null, null]
//
//      HEAD                              TAIL

LRUCache.prototype = {
    addNode: function(node){
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next.previous = node;
        this.head.next = node;
    }, 
    
    removeNode: function(node){
        var prevNode = node.previous;
        var nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.previous = prevNode;
    }, 
    
    // most recently modified/inserted
    moveToHead: function(node){
        this.removeNode(node);
        this.addNode(node);
    }, 
    
    removeFromTail: function(){
        var cNode = this.tail.previous;
        this.removeNode(cNode);
        return cNode;
    }, 
    
    
    
    
    get: function(key){
        var cNode = this.ref[key];
        if (cNode !== undefined){
            this.moveToHead(cNode);
            return cNode.value;
        }
        return -1;
    }, 
    
    set: function(key, value){
        var cNode = this.ref[key];
        
        if (cNode === undefined){
            var newNode = new Node(key, value);
            this.ref[key] = newNode;
            this.addNode(newNode);
            
            this.count++;
            
            if (this.count > this.capacity){
                var cNode = this.removeFromTail();
                delete this.ref[cNode.key];
                this.count--;
            }
        } else {
            cNode.value = value;
            this.moveToHead(cNode);
        }
    }
}



var test = new LRUCache(3);

test.set('hello', 5);
test.set('bye', 10);
test.set('see', 17);
test.set('re', 20);

test.get('bye');

console.log(test.head);






