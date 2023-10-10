/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.
    * Create a shallow copy

*/

// spread with arrays
// spread values of an array into another array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [arr1, arr2];
// console.log(arr3);

let arr4 = [0,...arr1, true, ...arr2, 7];
// console.log(arr4); //[
//   0,    1, 2, 3,
//   true, 4, 5, 6,
//   7
// ]

// * spread can be used to be a shallow copy
// * old way
let copy1 = arr1.slice();
// can be used to be make a copy of the original
let copy2 = [...arr1];
// console.log(copy2);// [ 1, 2, 3 ]

//Spread with object
// * spread key:value pairs of object into another object
// ! avoid spreading between different data types
// let obj1 = { name: "brandon" };
// let obj2 = { pet: "cat", favColor: "red" };
// let obj3 = { ...obj1, ...obj2, city: "brooksville", state:'florida' };

// console.log(obj3);
// { name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }
