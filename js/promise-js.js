// function asyncFunc () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('DONE'), 100)
//   })
// }
// // asyncFunc()
// // .then(x => console.log('Result: ' + x))

// async function main () {
//   const x = await asyncFunc()

//   console.log(x)
// }

// main();

function asyncFunc(){
   const blank = []

   setTimeout(function() {
      blank.push(100)
   }, 100);

   return blank;
}

const ans = asyncFunc().then( x => console.log(ans))

// console.log(ans)

// setTimeout(function() {
//    console.log(ans[0])
// }, 100);