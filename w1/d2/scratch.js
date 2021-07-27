//Strings
// console.log('hello' === "hello");
// console.log("What's up?");
// console.log('What\'s up?');

// //Length - property
// console.log('hello world'.length) //length starts at 1
// console.log(''.length) // 0

//Indexing
// let animal = 'ant'; // indices start at 0 (off by one)
// console.log(animal[1]) // 'n'
// console.log(animal[3]) // undefined
// console.log(animal[-1]) // undefined (in some languages this is awesome)
// console.log(animal[animal.length - 1]) // t (prints the last char)

//Index Of - method
// let animal = 'duck';

// console.log(animal.indexOf('c')); // 2
// console.log(animal.indexOf('z')); // -1
// console.log('elephant'.indexOf('e')) // 0

//Concat

// let str1 = 'Mylo';
// let str2 = 'James';

// let fullName = str1 + " " + str2;
// console.log(2 + 'hello'); //2hello
// console.log(2 * 'hello'); //NaN
// console.log(fullName);

//Functions
// function blankFunc () {}

/* Write a function called printer that intakes a name and prints that name */
// let name = 'Conner'
// function printer (name) {
// 	console.log(name);
// }

// //invoke the function
// printer('Conner');
// printer('Mylo');
// printer('Corbin');
// printer('Andy');

/* 
Write a function called sum that intakes 2 numbers and 
RETURNS the sum of the two numbers
Return does 2 things...
1. Makes the function equal something...
2. Stops the execution of the function.
*/

// function sum(num1, num2) {
//   return num1 + num2;
//   console.log('This will not run');
// }

// sum(3, 5); // NOTHING
// let eight = sum(3, 5);
// console.log(sum(3, 5)); // 8

//Conditionals

// let num = 3;

// if (num > 2) {
//   console.log('Greater than 2');
// } else if (num === 3) {
//   console.log('the num is 3');
// } else {
//   console.log('uhhhhhh');
// }

//Loops
// While

// let i = 0; //init expression

// while (i < 5) { //condition
//   console.log(i); // code block
//   i = i + 1; //step
// }

// console.log('done');

// For
// for (let i = 0; i < 5; i++) { // init expresssion/condition/step
//   console.log(i);
// }
// console.log('done');

//Arrays

// let arr = [1, 2, 3];

// console.log(arr[1]); // 2
// console.log(arr[4]); // undefined

// arr[1] = 5; // index assignment... doesn't work with strings...

// console.log(arr);

// console.log(arr.length); // 3 shows how many element in the arr
// console.log(arr.indexOf(3)); // 2 searching through an array to find an element
// console.log(arr.indexOf(12)); // -1

// let nestedArr = [[1, 2], 3]
// console.log(nestedArr[0][0])

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8];

console.log(arr1.concat(arr2, arr3));

//typeof

console.log(typeof 12); // checks the type of soemthing
console.log(typeof "yooo");
console.log(typeof (arr1 + arr2));
console.log(typeof arr1);
console.log(Array.isArray(arr1)); // check if something is an array
