/**
 * Flatten the array
 */

const flatArr = (args) => {
  console.log('flat arr')
  const result = []

  const flattenify = (temp) => {
    for (let i = 0; i < temp.length; i++) {
      let item = temp[i]
      if (Array.isArray(item)) {
        // result.push(flattenify(item))
        flattenify(item)
      } else {
        result.push(item)
  
      }
    }

  }
  flattenify(args)
  return result
}

const arr = [
  [1,2],
  [3,4],
  [5,6,[7,8],9],
  [10,11,12]
]
const res1 = flatArr(arr)
console.log('res1 ', res1)


/**
 * ##################
 * Flattend deep
 * ##################
 */

const flattenDeep = (args, depth) => {
  console.log('flatten deep')
  const result = []

  const flattenDeepify = (args, depth) => {
    for (let i = 0; i < args.length; i++) {
      let temp = args[i]
  
      if (Array.isArray(temp) && depth > 0) {
        // result.push(flattenDeep(temp, depth - 1))
        flattenDeepify(temp, depth - 1)
      } else {
        result.push(temp)
      }
    }
  }
  flattenDeepify(args, depth)
  return result
}

const res2 = flattenDeep(arr, 2)
console.log('res2 ', res2)
