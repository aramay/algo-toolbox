var boat = {
    size: 'normal',
    boatInfo: function() {

        console.log(this)
        console.log(this === boat);
        console.log(this.size);
    }
};

console.log(boat)

boat.boatInfo(); // true, 'normal'

var bigBoat = {
    size: "big"
}

bigBoat.boatInfo = boat.boatInfo
console.log(bigBoat.boatInfo())