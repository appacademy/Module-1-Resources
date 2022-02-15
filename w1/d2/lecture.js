// Strings
// console.log('hello' === "hello");
// console.log("What's Up?");
// console.log('What\'s Up?');


// length
// let greeting = "hello";
// console.log(greeting.length);
// console.log("hello".length);
// console.log("".length);



// Indexing
// The index ALWAYS STARTS AT 0

/*
  length of 4
  C A T S
  0 1 2 3
*/

// let animal = "CATS";
// console.log(animal[0], animal[1]); // C A
// console.log(animal[1]);
// console.log(animal[2]);
// console.log(animal[3]);
// console.log(animal[animal.length - 1]);
// console.log(animal[3245]);


// Index of 
// let playoffs = "playoffs";

// console.log(playoffs.indexOf("a")); // 2
// console.log(playoffs.indexOf("off")); // 4
// console.log(playoffs.indexOf("bears")); // -1
// console.log("bootbamp".indexOf("o"));


// let name = "Jeff";
// let teachingPedigree = "Best Ever";

// console.log(name + " is the " + teachingPedigree);


// thisIsHowYouDoCamelCasing

// Functions
// function blankFunc () {};

// function helloWorld () {
//   console.log("Hello, World!");
// };

// helloWorld();

// function grevious (name) {
//   console.log("Hello There");
//   console.log(name);
// };

// grevious("General Kenobi");
// grevious("Autumn");
// grevious(3);


// Return do 2 things:
  // 1. Makes the function equal to something
  // 2. It makes the function stop exectuing right away

// function sum (num1, num2) {
//   console.log('Hello')
//   return num1 + num2;
//   console.log(num1 + num2);
// };

// let result = sum(3,4);
// console.log(result);


// Conditionals
/*
  if (test expression) {
    then expression
  }
*/

// let number = 4;

// if (number > 5) {
//   console.log("This number is greater than 5.");
// } else if (number < 5) {
//   console.log("This number is less than 5");
// } else {
//   console.log("ITS 5!!!")
// }

// if (number === 4) {
//   console.log("4")
// }


// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop

// While 
// let i = 1; // initial expression

// while (i <= 5) { // condition for which we keep looping
//   console.log(i);
//   i = i + 1; // step towards completing the loop
// }

// For
// for (let i = 1; i <= 5; i++)  {
//   console.log(i);
// }



// console.log(i);
// i = i + 1;
// console.log(i);
// i += 12;
// console.log(i);
// i++;
// console.log(i);


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
//   "I hate the Rams",
//   undefined,
//   [1, 2, 3]
// ];

// // console.log(arr2[4]);

// console.log(arr2.length);
// console.log(arr2.indexOf(undefined));


// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// // BAD DONT MAKE JEFF YELL AT YOU
// // let arr4 = arr1 + arr2 + arr3;
// // console.log(arr4)

// console.log(arr1.concat(arr2, arr3, [10, 11, 12]))
// console.log(arr1)


console.log(typeof 12);
console.log(typeof [1,2,3]);
console.log(Array.isArray([1,2,3]))
