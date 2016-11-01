function Stack(size) {

    this._list = [];

    this._size = size;

    this._index = 0;
}

Stack.prototype.push = function (item) {

    var index = this._index++;

    this._list[index] = item;
    console.log("item pushed ", this._list);
};

Stack.prototype.pop = function () {

    //remove last item
    console.log(this._index);
    var index = this._index--;
    // delete this._list[index];
    this._list.splice(index, 1);
    console.log("item removed ", this._list);
};


var num = [77 ,99 ,44 ,55 ,22 ,88 ,11 ,0 ,66 ,33];
var size = 5;



test = new Stack(size);

test.push(20);
test.push(30);
test.pop();
