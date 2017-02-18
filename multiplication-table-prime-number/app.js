function Prime(limit){

    this.numList = []
    this.limit = limit

    //generate number range
    for(var i=2; i<=limit; i++){
        this.numList.push(i)
    }

    
}

/**
The sieve of Eratosthenes. cases where we want N primes.
 **/

Prime.prototype.findPrimes = function(){

    console.log(this.limit)
    console.log(this.numList)

    // console.log(n)

    var results = []


    for(var outer=0; outer <= this.numList.length - 1; outer++){
    
    var checkNumber = this.numList[outer]

        for(var inner=outer+1; inner < this.numList.length; inner++){

            if(this.numList[inner] % checkNumber === 0){
                
                this.numList.splice(inner, 1)
            }
        }


    }

    console.log(this.numList)
}

Prime.prototype.multiplicationTable = function(){

    console.log("multi ", this.numList)

    var list = this.numList

    for(var i=0; i<list.length; i++){

        var prime = list[i]

        for(var product=1; product<=10; product++){

            console.log(prime + " x " + product + " = " + prime*product)
            
        }
        console.log("***********")
    }
}

var test = new Prime(30)

console.log(test.findPrimes())
console.log(test.multiplicationTable())
// test.findPrimes()

// exports._test = {
//     init: init
// }