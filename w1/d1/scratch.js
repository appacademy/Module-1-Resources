// Active Learning: Learning by doing!
// - doing an exercise, actively enganging in your code, practicing git/any
// other technology we learn, taking a test/quiz, building a project, debugging,
// helping others with their code, 


// Passive Learning
// - watch a video, reading articles & taking notes on them



// Intro to Debugging

// This is a single line comment
// let name = 'Jeff'; // This is still a single line comment

/* 
This is a
multi line comment
Hows everyone doing?
I still own you
*/


// console.log("Hello, World!");
// console.log(name);



// let firstName = "Bill";
// console.log(firstName);


// Number Type

// console.log(1 + 2); // 3
// console.log(9 - 2); // 7
// console.log(1.2 * 3); // 3.6
// console.log(8 / 2); // 4

// Order of Operations
// PE =>  MMD => AS

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

// console.log(5 % 15); // 5



// Booleans
// console.log(true);
// console.log(false);

// // Not operator => ! = bang
// console.log(!true);
// console.log(!false);

// And Operator => &&
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// Or Operator => ||
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(false || false); // false


// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// console.log(true && true);
// console.log(!(true && true));

// !(true) => false
// !true || !true => false || false => false



// Variables
// let animal; // Variable Declaration
// animal = 'pig'; // Variable Assignment
// animal = 'chicken'; // Variable Reassignment

// let animal = 'pig'; // Variable Initialization
// console.log(animal);

// animal = 'chicken';
// console.log(animal);

// animal = 'dog';

// let animal = 'dog'; // THIS WONT WORK - CANT REDECLARE


// Comparison Operators
// < > <= >= == ===

// console.log(1 < 2); // true
// console.log(1 > 2); // false
// console.log(1 <= 2); // true
// console.log(3 >= 2); // true

// console.log('a' <  'b');
// console.log('app' < 'apple');
// console.log('a' < 'z');
// console.log('a' < 'Z');

// Lowest Value to Highest Value
// 'A' => 'Z' => 'a' => 'z' 


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
// // console.log(2 === Number('2')); // true
// console.log(2 != '2');
// console.log(2 !== '2');



// Print out to the console true if a number is even or false if it is odd

let num1 = 12;
let num2 = 5;

console.log(num1 % 2 === 0);
console.log(num2 % 2 === 0);