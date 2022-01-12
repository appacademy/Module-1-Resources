// How to learn

// Active Learning: doing an exercise, taking a test, building a project, debugging

// Passive Learning: watching a video, reading article, taking notes



// Into to Debugging

// This right here is a single line
// comment
// before every link
// I use two slashes
// let name = "Jeff"; // I created a variable with "Jeff" as the value 


/* 
this
is
multi
line
comment
*/


// console.log("Brad has a cool hat today!")

// let firstName = "Aaron";
// console.log(firstName)


// Number Type

// console.log(12 + 2); // 14
// console.log(7 - 9); // -2
// console.log(2 * 3); // 6
// console.log(8 / 2); // 4

// Order of Operations
// PE => MMD => AS

// console.log(1 + 3 * 4); // 13
// console.log((1 + 3) * 4); // 16

// Exponents
// console.log(5 ** 2); // 25
// console.log(2 ** 5); // 32



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

// // Not Operator (!) - bang
// console.log(!true);
// console.log(!false);


// And Operator (&&)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Or Operator (||)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B


// // Variables
// let animal; // Variable Declaration
// console.log(animal)
// animal = "pig"; // Variable Assignment
// console.log(animal)
// animal = "chicken"; // Varialbe Reassignment
// console.log(animal)


// let animal2 = "dog"; // Variable Initialization

// // let animal2 = "cow" // CANNOT REDECLARE


// Comparison Operators
// < > <= >= == ===

// console.log(1 < 2);
// console.log(2 > 1);
// console.log(3 >= 2);

// console.log('a' < 'b');
// console.log('app' < 'apple');
// console.log('a' < 'z');
// console.log('a' < 'Z');

// 'A' < 'Z' < 'a'  < 'z'

// let a = 4;
// let b = 3;

// console.log(a > b);



// Equality
// = assignment
// == loose equality
// === deep equality
// != not loose equality
// !== not deep equality

// console.log(2 == '2');
// console.log(2 === '2');
// console.log(2 === Number('2'));


// // Strings
// console.log('hello' === "hello");
// console.log("What's Up?");
// console.log('What\'s Up?');


// let greeting = "hello";
// console.log(greeting.length);
// console.log("hello".length);
// console.log("".length);


// Index
// The index ALWAYS STARTS AT 0

/* 
  length of 4
  C A T S
  0 1 2 3
*/

// let animal = "CATS";
// console.log(animal[0])
// console.log(animal[1])
// console.log(animal[2])
// console.log(animal[3])
// console.log(animal[animal.length - 1])
// console.log(animal[45])


// Index of
// let animal = "Bears";

// console.log(animal.indexOf("e"));
// console.log(animal.indexOf("ear"));
// console.log(animal.indexOf("win")); // -1 because its not in the string and the bears are bad
// console.log("bootbamp".indexOf("o"));

// thisIsHowYouDoCamelCase


let firstName = "Brad";
let teachingPedigree = "Amazing";

console.log(firstName + " is " + teachingPedigree);
