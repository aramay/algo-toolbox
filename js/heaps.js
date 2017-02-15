


function Heap(type){
    this.storage = [];
    this.type = type; // 'min' or 'max'
}

Heap.prototype = {
    swap: function(index1, index2){
        var temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }, 

    findPeak: function(){
        return this.storage[0];
    }, 
    
    size: function(){
        return this.storage.length;
    }, 
    
    compare: function(pInd, cInd){
        if (this.type === 'min'){
            if (this.storage[pInd] > this.storage[cInd]){
                return true
            }
        } else if (this.type === 'max'){
            if (this.storage[cInd] > this.storage[pInd]){
                return true
            }
        }
        return false;
    },  
        
    insert: function(value){
        this.storage.push(value);
        this.bubbleUp(this.size() - 1);
    }, 
        
    bubbleUp: function(childIndex){
        var parentIndex = this.getParentIndex(childIndex);
        
        while (childIndex > 0 && this.compare(parentIndex, childIndex)){
            this.swap(parentIndex, childIndex);
            
            childIndex = parentIndex;
            parentIndex = this.getParentIndex(childIndex);
        }
        
        
    }, 
    
    getParentIndex: function(childIndex){
        if (childIndex % 2 === 1){
            return (childIndex - 1) / 2;
        } else {
            return (childIndex - 2) / 2;
        }
    }, 
        
    removePeak: function(){
        this.swap(0, this.size() - 1);
        var result = this.storage.pop();
        this.bubbleDown(0);
        return result;
    }, 

    bubbleDown: function(parentIndex){
        var swapChildIndex = this.getMasterChildIndex(parentIndex);
        
        while (parentIndex < this.size() - 1 && this.compare(parentIndex, swapChildIndex)){
            this.swap(parentIndex, swapChildIndex);
            
            parentIndex = swapChildIndex;
            swapChildIndex = this.getMasterChildIndex(parentIndex);
        }
    }, 
    
    getMasterChildIndex: function(parentIndex){
        var cInd1 = 2 * parentIndex + 1;
        var cInd2 = 2 * parentIndex + 2;
        
        if (cInd1 >= this.size()){
            return -1;
        } else if (cInd2 >= this.size()){
            return cInd1;
        } else if (this.type === 'min'){
            if (this.storage[cInd1] < this.storage[cInd2]){
                return cInd1;
            } else {
                return cInd2;
            }
        } else if (this.type === 'max'){
            if (this.storage[cInd1] > this.storage[cInd2]){
                return cInd1;
            } else {
                return cInd2;
            }
        }
    }, 
        
    remove: function(value){
        
    } 
    
}


var test = new Heap('max');
//test.storage = [1,3,7,5,9,8,10];
test.insert(1);
test.insert(7);
test.insert(3);
test.insert(5);
test.insert(8);
test.insert(9);
test.insert(10);
test.insert(12);

console.log(test.storage);
test.insert(2);
console.log(test.storage);
console.log(test.removePeak());
console.log(test.removePeak());
console.log(test.removePeak());
console.log(test.removePeak());
console.log(test.removePeak());
console.log(test.storage);