
// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

// Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...arguments) => arguments.filter(num =>  num % 2 === 0)




// findMin
const findMin = (...args) => { 
   return Math.min(...args)
 }



//  mergeObjects
const mergeObjects = (obj1, obj2) => { 
    const obj = {...obj1, ...obj2}
    return obj
 }
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}




//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
    let newArr = [...arr, ...args.map(val =>val * 2)];
   return newArr

}
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]




// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}


/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => { 
    let newArr = [...array1, ...array2];
    return newArr 
 }



/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => { 
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
 }

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2}
}



/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val
    return newObj
    
}


