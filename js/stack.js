function Stack(size) {

    console.log(size);
    this._list = [];

    this._size = size;

    this._index = 0;
}

Stack.prototype.push = function (item) {

    console.log(num);
    // this.list.push(item);
    var index = this._index++;

    this._list[index] = item;
    console.log(this._list);
    // return size;
};


var num = [77 ,99 ,44 ,55 ,22 ,88 ,11 ,0 ,66 ,33];
var size = 5;
// console.log(Stack(num));


test = new Stack(size);

test.push(20);
test.push(30);
