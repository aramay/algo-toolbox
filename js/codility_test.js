function test1(E, L) {


    this.test = function () {

        console.log("test function");
    } () ;


    var entranceFee = 2,
        firstFullH = 3,
        firstPartialH = 3,
        afterFirstH = 4,
        total = 0;

    var dat = new Date();

    time = E.split(/\:|\-/g);
    console.log(time);


    dat.setHours(time[0]);
    dat.setMinutes(time[1]);

    startTime = dat.getTime();
    console.log(dat);



    var dat1 = new Date();

    time = L.split(/\:|\-/g);
    console.log(time);

    dat1.setHours(time[0]);
    dat1.setMinutes(time[1]);

    // console.log(dat1);
    dat1.getTime();

    var timeInMilSec = dat1 - dat;
    console.log(dat1 - dat);

    var hours = parseInt(timeInMilSec / 1000);

    hours = hours / 3600;

    hours = Math.ceil(hours);

    // hours = Math.ceil(hours);

    total = entranceFee + ((hours * 4) - 1);

    console.log(hours);
    console.log(total);

    return total;



    // 4 * 4

    // 4 * 4 - 1
// 12060
// 12060 / 3600
// 3.35
// .35 * 60
// 21

}

// "09:42" - 11:42
console.log(test1("09:42","11:42"));
