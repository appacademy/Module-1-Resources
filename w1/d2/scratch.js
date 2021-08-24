// Strings

// console.log('hello' === "hello");
// console.log("What's up?");
// console.log('What\'s up?');

// Length - property 
// let greeting = "Hello";
// console.log(greeting.length);
// console.log("Hello".length);
// console.log("".length);

// Indexing
// The index starts at 0

/* 
    length of 4
    C A T S
    0 1 2 3
*/

// let animal = "Cats";
// console.log(animal[0]) // C
// console.log(animal[1]) // a
// console.log(animal[2]) // t
// console.log(animal[3]) // s
// console.log(animal[-1]) // undefined
// console.log(animal[12]) // undefined
// console.log(animal[animal.length - 1]) // s



/// Index of - method
// let animal = "Bear";

// thisIsHowYouDoCamelCase
// console.log(animal.indexOf("e"));
// console.log(animal.indexOf('a'));
// console.log("Packers".indexOf('P'));
// console.log("Packers".indexOf('cke'));
// console.log("Packers".indexOf('cake'));
// console.log('bootcamp'.indexOf('o')); // only return the index of the first time that character appears


// Concat
// let firstName = "Jeff";
// let lastName = "Granof";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(2 + 'hello');
// console.log(2 * 'hello');


// Functions
// function blankFunc () {};

// function helloWorld () {
//     console.log("Hello, World!")
// };

// helloWorld()

// Write a function that takes in a name and prints out "hello, name"

// function printName (name) {
//     console.log("Hello, " + name);
// }

// printName("Schuler");

// Write a function called sum thats intake 2 numbers and
// returns the sum of them
// Returns do 2 things:
// 1. Makes the function equal to something...
// 2. It makes the function stop executing right away

// function sum (num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
//     console.log("THIS WILL NOT PRINT")
// }

// // sum(3,5); // NOTHING
// let answer = sum(3,5);
// console.log(answer); // 8

// function blankFunc() {
//     /*
//     a bunch of code 
//     */
//    console.log("I'm here")
//     return
// };

// let response = blankFunc();
// console.log(response); // undefined


// Conditionals

/* 
if (test expression) {
    then expression
}
*/

// let number = 6;

// if (number > 5) {
//     console.log("The number is greater than 5");
// } else  if (number < 5) {
//     console.log("The number is less than 5");
// } else {
//     console.log("The number is 5!!!!");
// }; 

// if (number === 6) {
//     console.log("Do SOmething here");
// };


// Loops
// 1. Initial Expression
// 2. Condition for which we keep looping
// 3. Step Towards completing the loop

// While Loop
// let i = 1; // initial expression, starting value

// while (i <= 5) { // Condition, ending value
//     console.log(i);
//     i = i + 1; // step towards completing the loop, step value
// }

// Incrementing a Variable
// i = i + 1; // i goes up 1
// i += 10; // i goes up 10
// i++; // i goes up 1
// score++; // score goes up 1

// For Loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i)


// Loops with Strings
// let teamName = "Packers"

// for (let i = 0; i < teamName.length; i++) {
//     console.log(teamName[i])
// }



// Arrays
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let stringArray = ["Lets", "Go", "Packers"];
// console.log(stringArray);

// let arr2 = [1, 2, "FC Barcelona", undefined, [1, 2, 3]];
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);
// console.log(arr2[4]);
// console.log(arr2[4][0]);
// console.log(arr2[10]);

// console.log(arr2.length);
// console.log(arr2.indexOf("FC BarcelOna"));
// console.log(arr2[2].length);


// Concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];


// console.log(arr1.concat(arr2, arr3));



// typeof
console.log(typeof 12 === 'number');
console.log(typeof arr1);
console.log(Array.isArray(arr1));

