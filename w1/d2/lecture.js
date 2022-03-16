// Strings

// console.log('hello' === "hello");
// console.log("What's Up?");
// console.log('What\'s Up?');

// let greeting = "hello";
// console.log(greeting.length);
// console.log("hello".length);
// console.log("".length);


// Index
// The index ALWAYS STARTS AT 0

/*
  Length of 4
  C A T S
  0 1 2 3
*/

// let animal = "CATS";
// console.log(animal[0]);
// console.log(animal[1]);
// console.log(animal[2]);
// console.log(animal[3]);
// console.log(animal[animal.length - 1]);
// console.log(animal[3245234]); // undefined


// Index of
// let playoffs = "playoffs";

// console.log(playoffs.indexOf("a"));
// console.log(playoffs.indexOf("off"));
// console.log(playoffs.indexOf("bears"));
// console.log(playoffs.indexOf("f"));

// Getting the second ""
// let name = "abcdefa"
// let index = name.indexOf("a");
// console.log(name.indexOf("a", index + 1));


// let firstName = "Jeff";
// let title = "The Humble Child";

// console.log(firstName + " is " + title);


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
// printName("Tom Holland");


// Return does 2 things:
// 1. Makes the function equal to something
// 2. It makes the function stop executing right away

// function sum (num1, num2) {
//   // console.log(num1 + num2);
//   return num1 + num2;
// }

// let response = sum(3,5);
// console.log(response);

// console.log(8 === sum(3,5));


// Conditionals
/*
  if (test expression) {
    then expression
  }
*/

// let number = 5;

// if (number > 5) {
//   console.log("The num is greater than 5");
// } else if (number < 5) {
//   console.log("The num is less than 5");
// } else {
//   console.log("It's 5");
// }



// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop

// While loop
// let i = 1; // Initial expression, starting value

// while (i <= 5) { // Condition, ending value
//   console.log(i);
//   i = i + 1; // step towards completing the loop
// }

// i += 1;
// console.log(i);
// i++;
// console.log(i);

// For loops
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// let order = "Order 66";

// for (let i = 0; i < order.length; i++) {
//   let char = order[i];
//   console.log(char);
// }


// Arrays
let arr = [1, 2, 3, 4, 5];
// console.log(arr);

let stringArray = ["Anakin", "loves", "killing", "younglings"];
// console.log(stringArray);

// let arr2 = [
//   4,
//   false,
//   "THE GOAT AARON RODGERS",
//   undefined,
//   [1, 2, 3]
// ];

// // console.log(arr2[0]);
// // console.log(arr2[1]);
// console.log(arr2[4][0]);

// console.log(arr2.length);
// console.log(arr2.indexOf(false));



// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// // console.log(arr1 + arr2 + arr3); // DONT DO
// console.log(arr1.concat(arr2, arr3));
// console.log(arr1);


// typeof
console.log(typeof 12);
console.log(typeof [1,2,3]);
console.log(Array.isArray([1,2,3]));