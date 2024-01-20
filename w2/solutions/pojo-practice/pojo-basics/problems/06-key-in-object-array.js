/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  //!!START
  let keyFound = false;

  // you can't explicitly return from within a `forEach` function so
  // the way we can get around that is by setting a variable for our boolean
  // and flipping it within our case statement
  objArray.forEach(function(obj) {
    if (obj[keyString] !== undefined) {
      keyFound = true;
    }
  });
  
  return keyFound;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
