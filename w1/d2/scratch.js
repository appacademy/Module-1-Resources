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

// printName("General Kenobi")
// printName("Brad")


// Returns do 2 things:
// 1. Makes the function equal to something
// 2. It makes the function stop executing right away

// function sum (num1, num2) {
//   return num1 + num2;
//   console.log(num1 + num2);
// };

// let response = sum(3,5);
// console.log(response);
// console.log(sum(3,4))



// Conditionals
/*
  if (test expression) {
    then expression
  }
*/

// let number = 4;

// if (number > 5) {
//   console.log("The number is greater than 5");
// } else if (number < 5) {
//   console.log("The number is less than 5");
// } else {
//   console.log("Its 5");
// }

// if (number === 4) {
//   console.log("4");
// }


// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop


// // While loop
// let i = 1; // Initial expression, starting value

// while (i <= 5) { // Condition, ending value
//   console.log(i);
//   i = i + 1; // step towards completing the loop
// }

// // Incrementing a Variable
// i = i + 1 // i go up by 1
// i += 19 // i go up by 19
// i++ // i go up by 1

// For Loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// let order = "Order 66";

// for (let i = 0; i < order.length; i++) {
//   let char = order[i];
//   console.log(char);
// }


// Arrays
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let stringArray = ["Anakin", "loves", "killing", "younglings"];
// console.log(stringArray);

// let arr2 = [
//   1,
//   true,
//   "King Aaron",
//   undefined,
//   [1, 2, 3]
// ];

// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]/*[0]*/);
// console.log(arr2[4][2]);

// console.log(arr2/*[4]*/.length);
// console.log(arr2.indexOf("King Aaron"));


// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// console.log(arr1.concat(arr2, arr3, [10,11,12]));
// console.log(arr1)

// typeof
// console.log(typeof 12);
// console.log(typeof [1,2,3]);
// console.log(Array.isArray([1,2,3]));


// Create a function (using expression syntax) called sumArr that takes in an array
let sumArr = function (arr) {
  // create a variable to track the sum
  let sum = 0;
  // loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    // add each element to the sum
    let num = arr[i];
    sum += num;
  }
  // return sum
  return sum;
};


let res = sumArr([1,2,3]);
console.log(res);