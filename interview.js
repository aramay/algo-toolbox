var baseClass = function() {
    this.x = 1;
}

var child = function() {
    //x = 3
}

child.prototype = new baseClass();//lookup the __proto__ 

var inst = new child();
inst.x —> ??? // => 1
inst.x = 3 
inst.x --> 3
delete inst.x
inst.x —> 1 
------------------

item1 —> item2 —> item3
head              tail

function deleteItem(args1, args2)
    
    if(args1.value === args2){
        
        this.head = args2
        
        delete args1
        
    }
    
    
    while(args1.next != null){
        
        var refrence = args1
        
        if(args2 === args1.value){
            
            //item2
            
            var target = args2.next
            
            delete args2
            refernce.next = target
            break;
        }
        
        args1 = args1.next
      
    } // while end
    
    
    
}

deleteItem(head, 'item2');  //  item1 --> item2.next --> item3 --> null
deleteItem(head, 'item1');  // item2 --> item3


-------------------------------------------------------------
                 A
              B  C  D
           E  F  G   H
          I

node:            
{ value: string, children: [ nodex, nodey, nodez, ... ] }

var tree = 
{ a: [b,c,d]}
{ b: [e,f]}
{c: [g]}
{d: [h]}
{e: [i]}

out: A B C D E F G H I (breadth first)
out: A B E I F C G D H (depth first)

function traversal(root) {
    if(this.root === null){ return false}
    
    var queue = [];
    
    queue.push(this.root)
    
    while(queue.length > 0){
    
        currentNode = queue.shift()
        console.log(currentNode.value)
        
        if(currentNode.children.length != 0){        
            queue = queue.concat(currentNode.children)
        }
    }
}





 
 