var ListNode = /** @class */ (function () {
    function ListNode(newData) {
        this.data = newData;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.append = function (value) {
            // @ts-ignore: Object is possibly 'null'.
            var node = _this.head;
            if (node === null) {
                _this.head = new ListNode(value);
                _this.tail = _this.head;
            }
            else {
                var newNode = new ListNode(value);
                // @ts-ignore: Object is possibly 'null'.
                _this.tail.next = newNode;
                _this.tail = newNode;
            }
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var testCase = new LinkedList();
testCase.append(10);
testCase.append(30);
testCase.append(20);
testCase.append(40);
//# sourceMappingURL=LinkedList.js.map