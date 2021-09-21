// Strings

// console.log('Taco Tuesday!!!!!');
// console.log('hello' === "hello");

// console.log("What's up?");
// console.log('What\'s up?');


// Lenth property
// let coolestPerson = "Aaron Rodgers";

// console.log(coolestPerson.length);
// console.log("Barry Mattern".length);
// console.log("".length);


// Indexing
// The index starts at 0

// let animal = "Cats";

/*
    length of 4
    C a t s
    0 1 2 3
*/

// console.log(animal[0]); // C
// console.log(animal[1]); // a
// console.log(animal[2]); // t
// console.log(animal[3]); // s
// console.log(animal[-1]); // undefined
// console.log(animal[4]); // undefined
// console.log(animal[animal.length - 1]); 


// indexOf() method

// let animal = "Lions";

// console.log(animal.indexOf("i")); // 1
// console.log(animal.indexOf("o")); // 2
// console.log(animal.indexOf("win")) // -1 doesnt exist because the lions cant win!

// console.log("bootcamp".indexOf("b")); // 0
// console.log("bootcamp".indexOf("otc")); // 2
// console.log("bootcamp".indexOf("o")); // 1


// Concat
// let firstName = "Hector";
// let lastName = "Crespo";

// let fullName = firstName + " " + lastName;
// console.log(fullName); // "Hector Crespo"

// console.log(2 + "hello"); // "2hello"
// console.log(2 * "hello"); // NaN (Not a Number)


// Functions 
// function blankFunc () {};

// function helloWorld () {
//     console.log("Hello, World!");
// };

// helloWorld();


// function printName (name) {
//     console.log("Hello there");
//     console.log(name);
// };

// printName("General Kenobi");


// Write a function that takes 2 numbers
// and RETURNS the sum of them

// Returns do 2 things:
//  1. Makes the function equal to something
//  2. It makes the function stop executing right away

// function sum (num1, num2) {
//     // console.log(num1 + num2);
//     let result = num1 + num2;
//     return result;
//     console.log("THIS WILL NOT PRINT");
// }

// let add = sum(5,6)
// console.log(add);
// // sum(5,6);

// console.log(1 < 2)



// Conditionals
/*
if (test expression) {
    then expression
}
*/

// let number = 5;

// if (number > 5) {
//     console.log("The number is greater than 5.");
// } else if (number < 5) {
//     console.log("The number is less than 5.");
// } else {
//     console.log("The number is 5!!!!!");
// }



// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step towards completing the loop

// while loop
// let i = 1; // initial expression, starting value of i

// while (i <= 5) { // condition for which we keep looping
//     console.log(i);
//     i = i + 1; // step towards completion
// }

// Incrementing a variable
// 1. i = i + 1
// 2. i += 1
// 3. i++

// For Loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i);

// let command = "Order 66";

// for (let i = 0; i < command.length; i++) {
//     console.log(command[i]);
// }


// Arrays
// let arr = [3, 5, 2, 34, 13];
// console.log(arr);

// let stringArray = ["Anakin", "Killed", "Younglings"];
// console.log(stringArray);

// let arr = [1, 2, "Goku", undefined, null, [1,2,3]]
// console.log(arr);
// console.log(arr[0]); // 1
// console.log(arr[1]); // 2
// console.log(arr[5]); // [1,2,3]
// console.log(arr[5][2]); // 1
// console.log(arr[23]); // undefined

// console.log(arr.length); // 6
// console.log(arr[5].length); // 3
// console.log(arr.indexOf("Goku")); // 2


// Concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

console.log(arr1.concat(arr2, arr3));
