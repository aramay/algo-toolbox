const pipe = (arrOfFuncs, value) => {
  let result = ''
  
  let lastValue = arrOfFuncs[0](value)
  
  
  for (let i=1; i < arrOfFuncs.length; i++){
    let cb = arrOfFuncs[i]
    lastValue = cb(lastValue)
    result = lastValue
  }
  
  console.log(result)

};

/*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase(); // CAT
const addLowerCase = str => str + str.toLowerCase(); // 
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'