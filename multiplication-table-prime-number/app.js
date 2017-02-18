function Prime(limit){

    this.numList = []
    this.limit = limit

    //generate number range
    for(var i=2; i<=limit; i++){
        this.findPrimes(i)
    }
}

/**
The sieve of Eratosthenes. cases where we want N primes.
 **/

Prime.prototype.findPrimes = function(n){

    console.log(n)

    // //The square root of a number, n, written below is the number that gives n when multiplied by itself.

    // var temp = Math.floor(Math.sqrt(n))
    // console.log("temp ", temp)
    
    // for(var i = 2; i <= temp; i++){

    //     if(n % i === 0){
    //         return false
    //     }
    // }

    // return true
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