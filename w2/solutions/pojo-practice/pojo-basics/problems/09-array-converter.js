/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  //!!START
  let arrayObject = {};
  // iterate through the array one value at a time
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    // if the value doesn't exist in the object already then we add it
    if (arrayObject[currentValue] === undefined) {
      arrayObject[currentValue] = 1;
    } else {
      // otherwise we increment the count of the value in the object
      arrayObject[currentValue] += 1;
    }
  }
  return arrayObject;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
