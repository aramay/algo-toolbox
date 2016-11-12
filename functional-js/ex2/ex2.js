function foo(x, y) {

    return function(){
        console.log("test");

        return x + y;
    };

}

var x = foo(3,4);

console.log( x() );	// 7
console.log( x() );	// 7

x();	// 7
