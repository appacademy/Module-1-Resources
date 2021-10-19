// Strings

// console.log('hello' === "hello");

// console.log("What's up?");
// console.log('What\'s \nup?');


// Length Property
// let greeting = "Hello";

// console.log(greeting.length);
// console.log("Hello".length);
// console.log("".length);


// Indexing
// The index ALWAYS starts at 0

/*
    CATS - length of 4
    C A T S
    0 1 2 3
*/

// let animal = "Cats";
// console.log(animal[0]); // C
// console.log(animal[1]); // a
// console.log(animal[2]); // t
// console.log(animal[3]); // s
// console.log(animal[animal.length - 1]); // s
// console.log(animal[8]); // undefined
// console.log(animal[-1]); // undefined



// indexOf - method
// let animal = "Bears";

// thisIsHowYouDoCamelCase
// console.log(animal.indexOf("e")); // 1
// console.log(animal.indexOf("ea")); // 1
// console.log(animal.indexOf("won")); // -1

// console.log("Bill".indexOf("ill"));


// Concat
// let firstName = "Jeff";
// let lastName = "Granof";

// let fullName = firstName + " " + lastName;
// console.log(fullName);



// Functions

// function blankFunc () {};

// function helloWorld () {
//   console.log("Hello, World!");
// };

// helloWorld();


// function printName (name) {
//   console.log("Hello There");
//   console.log(name);
// };

// printName("General Kenobi");


// console.log("Hello");

// function sum (num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
//   console.log("THIS WILL NOT PRINT")
// };

// let answer = sum(3,5);
// console.log(answer);


// Conditionals

/*
if (test expression) {
  then expression
}
*/

// let number = 5;

// if (number > 5) {
//   console.log("The number is greater than 5");
// } else if (number < 5) {
//   console.log("The number is less than 5.");
//   console.log("Hi")
// } else {
//   console.log("The number is 5.")
// }


// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop

// while Loop
// let i = 1; // initial expression, starting value of i

// while (i <= 5) { // step 2, condition for which we keep looping
//   console.log(i);
//   i = i + 1; // step towards completing the loop
// }

// incrementing a variable
// 1. i = i + 1
// 2. i += 10
// 3. i++

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// Loops with Strings
// let str = "Jeff got a PS5 today!";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// };


// Arrays

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let stringArr = ["Jeff", "David", "Dan", "Hector", "Bill", "Geoff"];
// console.log(stringArr);

// let arr = [1, 2, "Jeff", undefined, [1, 2, 3]];

// // console.log(arr[0]);
// // console.log(arr[2]);
// // console.log(arr[4][0]);

// console.log(arr.length);
// console.log(arr.indexOf(undefined));


// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);


// typeof
console.log(typeof 12 === 'number');
console.log(typeof [1,2,3]);
console.log(Array.isArray([1,2,3]));