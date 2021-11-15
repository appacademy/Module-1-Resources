// Active Learning vs Passive Learning

// Active Learning: Learning by doing!
// - doing an exercise, actively enganging in your code, taking an assessment, building a project

// Passive Learning: 
// - watching a video, reading articles, watching Jeff lecture.



// Intro To Debugging

// This is a single Line comment
// console.log("Hello"); // This will still be a comment

/*
This is a 
multiline comment
GO PACKERS
*/ 

// let firstName = "Jeff";
// console.log(firstName);


// Number Type

// console.log(1 + 2); // 3
// console.log(9 - 2); // 7
// console.log(5 * 3); // 15
// console.log(1.2 * 3); // ~3.6
// console.log(8 / 2); // 4

// Order of Operations
// PE => MDM => AS

// console.log(1 + 3 * 4); // 13
// console.log((1 + 3) * 4); // 16

// Exponents
// console.log(2 ** 3); // 8
// console.log(5 ** 2); // 25

// Modulo
// console.log(15 % 5); // 3r0 => 0
// console.log(16 % 5); // 3r1 => 1
// console.log(17 % 5); // 3r2 => 2
// console.log(18 % 5); // 3r3 => 3
// console.log(19 % 5); // 3r4 => 4
// console.log(20 % 5); // 4r0 => 0

// console.log(5 % 15); // 0r5 => 5


// Booleans
// console.log(true);
// console.log(false);

// Not Operator (! = bang)
// console.log(!true);
// console.log(!false);

// And Operator (&&)
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// Or Operator (||)
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);


// DeMorgans Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// console.log(true && true);
// console.log(!(true && true));



// Variables
// let animal; // Variable Declaration
// animal = "pig"; // Variable assignment
// animal = "cat"; // Variable Reassignment

// let animal = "pig"; // Variable Initialization
// // let animal = "dog"; // THIS WILL NOT WROK - CANNOT REDECLARE


// console.log(animal);



// Comparison Operators
// < > <= >=

// console.log(1 < 2); // true
// console.log(3 <= 2); // false
// console.log(3 > 2); // true
// console.log(3 >= 2); // true

// console.log('a' < 'b');
// console.log('app' < 'apple');
// console.log('a' < 'z');
// console.log('a' < 'Z');

// Lowest Value to Highest Value
// "A" to "Z" and then "a" to "z"

// let a = 4;
// let b = 3;

// console.log(a > b);


// Equality

// = assignment
// == loose equality
// === deep equality
// != not loose equality
// !== not deep equality

// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(2 === Number('2')); // true
// console.log(2 != '2');
// console.log(2 !== '2');


// Print out to the console true if a number is even or false if it is odd
let evenNum = 12;
let oddNum = 5;

console.log(evenNum % 2 === 0);
console.log(oddNum % 2 === 0);