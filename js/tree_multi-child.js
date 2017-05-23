function Node(value){
   this.value = value
   this.child = null

}

function Tree(){
   this.rootNode = null
   this.size++
}


Tree.prototype.insert = function(value){

   if (this.rootNode == null) {
      this.rootNode = new Node(value)

      this.size += 1
   }
   else{
      this.rootNode = new Node(value)
   }


}


var test = new Tree()

test.insert(23)
test.insert(25)

console.log(test)