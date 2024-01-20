/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  //!!START
  return Object.values(obj);
  //!!END
}
//!!START SILENT
// solution 2
// function valuesInObject(obj) {
//   let array = [];
//   for (key in obj) {
//     let value = obj[key];
//     array.push(value);
//   }
//   return array;
// }
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
