// Strings

// console.log('hello' === "hello");

// // What's up?
// console.log("What's up?");
// console.log('What\'s up?');


// // Length Property
// let greeting = "Hello";
// console.log(greeting.length);
// console.log("Hello".length);

// console.log("".length);


// Indexing
// The index starts at 0


/*
    B U T T E R
    0 1 2 3 4 5
    length = 6 characters
*/

// let food = "butter";

// console.log(food[0]);
// console.log(food[1]);
// console.log(food[2]);
// console.log(food[3]);
// console.log(food[4]);
// console.log(food[food.length - 1]);


// // Index Of method
// let animal = "Lions";

// // thisIsHowYouDoCamelCase
// console.log(animal.indexOf("L")); // 0
// console.log(animal.indexOf("o")); // 2
// console.log(animal.indexOf("win")); // -1

// console.log("Goku".indexOf("ok")); // 1

// console.log("bootbamp".indexOf("o")); // 1


// Concat
// let firstName = "Aaron";
// let lastName = "Rodgers";

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




// Write a function called sum that intakes 2 numbers and returns the sum
// Return does 2 things:
  // 1. Makes the function EQUAL to something
  // 2. It makes the function stop executing RIGHT AWAY

// function sum (num1, num2) {
//   return num1 + num2;
//   console.log("THIS WILL NOT PRINT");
// };

// sum(2,4);
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
//   console.log("The number is greater than 5.");
// } else if (number < 5) {
//   console.log("The number is less than 5.");
// } else {
//   console.log('The number is 5.')
// }


// Loops
  // 1. Initial Expression
  // 2. Condition to keep looping
  // 3. Step towards completing the loop



// While Loops
// let i = 1; // initial expression, starting value

// while (i <= 5) { // Condition to keep looping
//   console.log(i);
//   i = i + 1; // step towards completing the loop
// }


// Incremeting a Variable
// i = i + 10;
// i += 10;
// i++;

// For Loops
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// Loop with Strings
// let order = "Order 66"

// for (let i = 0; i < order.length; i++) {
//   let letter = order[i];
//   console.log(letter);
// }


// Arrays
// let arr = [1,2,3,4,5];
// console.log(arr);

// let stringArray = ["Anakin", "loves", "killing", "younglings"];
// console.log(stringArray);

// let arr2 = [1, "Bob", undefined, [1,2]];
// // console.log(arr2[0], arr2[2]);
// // console.log(arr2[3][0]);
// // console.log(arr2[10]);

// console.log(arr2.length)
// console.log(arr2.indexOf("Bob"));


// Concat
let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let arr4 = arr1.concat(arr2, arr3)
// console.log(arr4);


// typeof

console.log(typeof 12 === "number");
console.log(typeof arr1);
console.log(Array.isArray(arr1));