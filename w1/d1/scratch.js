// How to Learn

// Active Learning: Learning by Doing!!!!
// ex: asking questions, actual coding - problems/projects, working with code rather than reading

// Passive Learning: learning by reading/watching
// ex: recieving feedback, watching a video, watching lecture, reading articles/tutorials

// Desirable Difficulty
// effective practicing should simulate the target skill as close as possible

// Spaced Repitition
// learning over a long time 


// How to Debug

// Single Line Comment
// let jeff = "Jeff" // we named jeff

/*
I can type in anything 
Hows it going 
The Packers are better than the Seahawks
Multi Line Comment
*/

// console.log("Hello, World!");
// console.log('Hey, how is it going?');

// console.log("Jeff");

// let firstName = "Jeff";
// console.log(firstName);



// Number Type

// console.log(1 + 2); // 3
// console.log(9 - 2); // 7
// console.log(1.1 * 3); // ~3.3
// console.log(8 / 2); // 4
// console.log(2 ** 3); // 8
// console.log(5 ** 3); // 125

// Order of Operations
// PE => MMD => AS

// console.log(1 + 3 * 4); // 13
// console.log((1 + 3) * 4); // 16

// Modulo
// console.log(15 % 5); // 3r0 => 0
// console.log(16 % 5); // 3r1 => 1
// console.log(17 % 5); // 3r2 => 2
// console.log(18 % 5); // 3r3 => 3
// console.log(19 % 5); // 3r4 => 4
// console.log(20 % 5); // 4r0 => 0

// console.log(5 % 15); // 0r5 => 5


// Booleans
// true and false

// console.log(true); // true
// console.log(false); // false

// ! (not operator) - bang
// console.log(!true); // false
// console.log(!false); // true


// && (and operator)
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// || (or operator)
// console.log(true || true); // true 
// console.log(true || false); //true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log((true && true) || false); // true 
// console.log(true || (true && false)); // true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

// console.log(true && true);
// console.log(!(true && true)); // false || false => false

// console.log(false || (true && false))

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
// console.log(2 <= 2); // true
// console.log(2 >= 2); // true

// console.log('a' < 'b'); // true
// console.log('app' < 'apple'); // true 
// console.log('a' < 'Z'); // false
// console.log('a' < 'z'); // true

// let a = 4;
// let b = 3;

// console.log(a < b); // false
// console.log(a >= b); // true 


// = assignment operator
// == loose equality
// === deep equality
// != not loose equality
// !== not deep equality

// console.log(2 == '2');  // 2 === 2 => true
// console.log(2 === '2'); // false 
// console.log(2 === Number('2')); // '2' => 2 => true
// console.log(2 != '2'); // false
// console.log(2 !== '2'); // true


// Print out to the console true if a number is even
// and false if a number is odd

let numberOne = 4;
let numberTwo = 3;

console.log(numberOne % 2 === 0);
console.log(numberTwo % 2 === 0);