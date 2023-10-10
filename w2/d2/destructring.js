/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/


// Destructuring with arrays
let array = [1, true, 'hello world'];
// * unpack values into variables

let [num, bool, string] = array;
// to the left is the literal you plan to destruct out of
// to the right of the equal sign will be the array itself you plan to destruct from
// console.log(num, bool, string, array);// 1 true hello world


// * can skip elements
// * using comma operator
// let [num, ,str] = array;
// console.log(num, str); // 1 hello world

// ! skip
// Swapping variables using destructuring
// * we can use destructuring to swap the values a variable holds
let firstName = "brandon";
let lastName = "laursen";

// positionally provide the variable you'd like to swap the contents of
[firstName, lastName] = [lastName, firstName];

// console.log(firstName); // laursen
// console.log(lastName); // brandon

// ! skip
// can swap index in array
let arr5 = [10, 20, 30];
// console.log(arr5); //[ 10, 20, 30 ]

// positionally provide the index you'd like to swap the contents of
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
// console.log(arr5); //[ 10, 30, 20 ]


