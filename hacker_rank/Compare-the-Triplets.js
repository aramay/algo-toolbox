function compareTriplets(args1, args2){

    console.log(args1, args2)

    var a0 = (args1[0]);
    var a1 = (args1[1]);
    var a2 = (args1[2]);

    var b0 = (args2[0]);
    var b1 = (args2[1]);
    var b2 = (args2[2]);

    var aliceScore = 0,
        bobScore = 0;
    
    if(a0 > b0){
        

        aliceScore = 1
        console.log(aliceScore)
    }
    else{
        bobScore = 1
    }
    
    if(a1 > b1){
        //console.log(1)
        aliceScore = 1
                console.log(aliceScore)
    }
    else {
        bobScore = 1
    }
    if(a2 > b2){
        aliceScore = 1
                console.log(aliceScore)
    }
    else{
        bobScore = 1
                console.log(bobScore)
    }
    console.log(aliceScore, bobScore)
}

console.log(compareTriplets([5,6,7],
[3,6,10]))