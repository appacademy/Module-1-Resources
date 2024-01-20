/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  //!!START
  return Object.keys(obj);
  //!!END
}
//!!START SILENT
// solution 2
// function keysInObject(obj) {
//   let array = [];
//   for (key in obj) {
//     array.push(key);
//   }
//   return array;
// }
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
