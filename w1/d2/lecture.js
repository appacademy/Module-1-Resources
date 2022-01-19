// Function Declaration Syntax

// function blankFunction () {};

// function helloWorld () {
//   console.log("Hello, World!");
// };

// helloWorld();


// function printName (name) {
//   console.log("Hello There");
//   console.log(name);
// };

// printName("General Kenobi");
// printName("Ryan Webster");


// Returns do 2 things:
  // 1. Make the function equal to something
  // 2. It stops the function executing RIGHT AWAY


// function sumOfTwo (num1, num2) {
//   let sum = num1 + num2;
//   // console.log(sum);
//   return sum;
// };

// let res = (sumOfTwo(14, 24));
// console.log(res);



// Conditionals
/*
  if (test expressions) {
    then expression (code block)
  }
*/

// let number = 4;

// if (number > 5) {
//   console.log("The number is greater than 5!");
// } else if (number < 5) {
//   console.log("The number is less than 5!");
// } else {
//   console.log("The number is 5!")
// } 

// if (number === 4) {
//   console.log("The number is 4")
// }


// Loops
// 1. Initial Expression (starting value)
// 2. Condition for which we keep looping
// 3. Step towards completing the loop


// While loops
// let i = 1; // Initial Expression, starting value (index)

// while (i <= 5) { // Condition for which we keep looping
//   console.log(i);
//   i = i + 1; // Step towards completing the loop
// }

// // Incrementing Variables
// // i = i + 10; // i goes up by 10
// // i += 10; // same as line 74
// i++; // i goes up by 1

// console.log(i)


// For Loops
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

// let stringArray = ["Anakin", "loves", "killing", "the", "younglings"];
// console.log(stringArray);

// let arr2 = [
//   1,
//   true,
//   "Aaron Rodgers MVP",
//   undefined,
//   null,
//   [1, 2, 3]
// ];

// console.log(arr2[2][0]); // A
// console.log(arr2[0]);
// console.log(arr2[3]);
// console.log(arr2[5][1]);
// console.log(arr2[12]);
// console.log(arr2[arr2.length - 1]);

// console.log(arr2.length);
// console.log(arr2.indexOf("Aaron Rodgers MVP"));
// console.log(arr2.indexOf("Aaron MVP"));


// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// // THIS DOES NOT WORK
// // let arr4 = arr1 + arr2 + arr3;
// // console.log(arr4);

// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);

// let arr = [1,2,3]
// // typeof
// console.log(typeof 12);
// console.log(typeof [1,2,3]);
// console.log(Array.isArray(arr));


// let arr = [1,2,3,4,5];

// while (arr.length) {
//   let el = arr[arr.length - 1];
//   console.log(el);
//   console.log(arr);
//   arr.pop()
// };


let sumArr = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }

  return sum;
}

let result = sumArr([1,2,3]);
console.log(result);