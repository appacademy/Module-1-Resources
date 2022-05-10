// Arrays
// Arrays are ordered collections of data. Much like the strings we learned 
// about, arrays have indices attached to each position within the array. We can
// access the value stored at each index by keying into it with the index.  
let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Arrays will let us store any data type within the array, such as strings:
let stringArray = ["This", "array", "holds", "strings"];
console.log(stringArray);

// We can also mix and match data types in our array
let arr2 = [
  42,
  false,
  "Let's go Pens",
  undefined,
  [[1], 2, [3]]
];

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[4][0]);
console.log(arr2[4][1]);
console.log(arr2[4][0][0]);

console.log(arr2.length);
console.log(arr2.indexOf(false));



// Concat
// When we have multiple arrays, sometimes we want to add the contents of one 
// array into the other. Java script provides a method built into arrays that we
// can use to accomplish our goal:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Unlike strings, we can't properly concatenate arrays using the addition
// operator
let badCombine = array1 + array2 + array3
console.log(badCombine); // DONT DO
// JavaScript didn't know how to handle the addition operator being used on our
// arrays, so it type cast our arrays into strings. Nice try, Java Script, but 
// not quite what we want.

// Instead, we'll use the .concat method to combine them. .concat can take any
// number of arguments and will return a new array with the provided arguments
// added to the end of the array we called the method on. While that may sound
// awkward, it's pretty easy in practice.

let goodCombine = array1.concat(array2, array3)
console.log(goodCombine)
// the original array has not been modified: 
console.log(array1)
// note that order matters in concatenation:
let otherCombine = array1.concat(array3, array2)
console.log(otherCombine)

// typeof
// typeof is a special operator in Javascript that will examine the expression
// that follows and report on its data type. 
console.log(typeof 12);
// before we run this one, note that we might not get what we expect
console.log(typeof [1,2,3]);
// Javascript will report that typeof array is object. We'll learn more about 
// objects next week, but for now if we need to check if what we're working with
// is indeed an array, we can use this expression:
console.log(Array.isArray([1,2,3]));
// When when we provide an array as an argument to that expression, we'll get
// a return value of true, otherwise we'll get false:
console.log(Array.isArray(otherCombine))
console.log(Array.isArray(12))