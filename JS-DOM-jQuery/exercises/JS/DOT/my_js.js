// 05 Context
DOT = function(obj, prop){
    console.log(obj)
    if(obj.hasOwnProperty(prop)){
        console.log(obj[prop])
        return obj[prop]
    }else{
        return DOT(obj.__proto__,prop)
    }
}

// 05 Context
DOTCALL = function(obj, prop, args){
    
    var x = DOT(obj, prop)
    
    // console.log(x())

    if(x){
        return x.call(obj,args)
    }    

}

// 06 Prototypes
NEW = function(constructor, args){

}

INSTANCEOF = function(obj, constructor){

}

//Person constructor
var Person = function(name){
    this.name = name
}

//Person prototype property
Person.prototype.isPerson = true;

Person.prototype.speak = function(){
    console.log("Hello ", this.name)
}

var person = new Person("john")

DOT(person, 'name')

DOTCALL(person, 'speak', [])

console.log(person)