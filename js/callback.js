// ADD CODE HERE
function forEach (args, callback) {
   let result = []
   for (let i=0; i<args.length; i++) {
      result.push(callback(args[i]))
   }
 }
 
 function map(args, callback) {
   let output = []
   // console.log(Array.from(arguments))
   // output.push(forEach(args, callback))
   var x = forEach(args, callback)
   console.log("x ", x)
   
 }
 // Uncomment these to check your work!
 // console.log(typeof forEach); // should log: 'function'
 forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
 console.log(typeof map); // should log: 'function'
 console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

