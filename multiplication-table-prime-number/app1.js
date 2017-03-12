var init = function(n){

    var isPrimeList = []

    for(var i=2; i<=n;i++){
        if(isPrime(i)){
            console.log("is prime ", i)
            isPrimeList.push(i)
        }else{
            console.log("not prime ", i)
        }

    }

    return isPrimeList

    // if(isPrime(n)){
    //         console.log("is prime ", n)
    //     }else{
    //         console.log("not prime ", n)
    //     }

    // return n

}

/**
 An integer is prime if it is not divisible by any prime less than or equal to its square root
 **/
function isPrime(n){
    
    //The square root of a number, n, written below is the number that gives n when multiplied by itself.

    var temp = Math.floor(Math.sqrt(n))
    console.log("temp ", temp)
    for(var i = 2; i <= temp; i++){

        if(n % i === 0){
            return false
        }
    }

    return true
}


console.log(init(10))

exports._test = {
    init: init
}