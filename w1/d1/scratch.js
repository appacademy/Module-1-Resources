// Active Learning: learning by Doing!
// - practice questions, practice problems, creating your own projects

// Passive Learning: learning by reading/watching
// - any videos you watch, reading articles 

// Desirable Difficulty
// effective practice should be simulating the target skill as closely as possible

// Spaced Repitition
// learning over a long time



// How to Debug

// Type anything I want as long as it stays on this line

/* 
Hi hows it going
I love the packers
this is a multi line comment
*/


// console.log("Hello, World!");
// console.log('Hi, how is it going?')

// let name = "Jeff";
// console.log(name);

// console.log("Jeffs");



// Number Type

// console.log(1 + 2); // 3
// console.log(9 - 2); // 7
// console.log(1.1 * 2); // 2.2
// console.log(8 / 2); // 4 

// Order of Operations
// PE => MMD => AS

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

// console.log(15 % 6); // 2r3

// console.log(-16 % -5);

// console.log(5 % 15); // 5



// Booleans
// console.log(true);
// console.log(false);

// ! = bang

// console.log(!true);
// console.log(!false);

// And Operator
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// Or Operator
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log((true && true) || false); // true
// console.log(true || (true && false)); // true 

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// console.log(true && true);
// console.log(!(true && true)); // false || false => false



// Variables
// let animal; // Variable Declaration
// animal = 'pig'; // Variable Assignment
// animal = "chicken"; // Variable Reassignment 

// let animal = "pig"; // Variable Initialzation 
// console.log(animal);
// console.log('pig');

// animal = "chicken";
// console.log(animal);

// let animal = "dog"; // Cant Re-Declare the Variable



// Comparison Operators
// < > <= >= == ===

// console.log(1 < 2); // true
// console.log(1 > 2); // false
// console.log(1 <= 2); // true
// console.log(2 <= 2); // true
// console.log(2 >= 2); // true
// console.log(10 >= 2); // true 

// console.log('a' < 'b'); // true
// console.log('app' < 'Apple'); // true
// console.log('a' < 'Z'); // false
// console.log('a' < 'z'); // true


// let a = 4;
// let b = 3;

// console.log(a < b); // 4 < 3 => false
// console.log(a >= b); // 4 >= 3 => true


// = assignment 
// == loose equality
// === deep equality 
// != not loose equality
// !== not deep equality

// console.log(2 == '2'); // 2 == 2 => true 
// console.log(2 === '2'); // 2 === '2' => false
// console.log(2 === Number('2')); // '2' => 2     true
// console.log(2 != '2'); // false
// console.log(2 !== '2'); // true 




// Print out to console true if a number is even or false if it is

let num1 = 4;
let num2 = 3;

console.log(num1 % 2 === 0); // 0 === 0 => true
console.log(num2 % 2 === 0); // 1 === 0 => false