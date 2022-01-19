// How to Learn

// Active Learning: 
  // - seem more difficult
  // - doing an exercise, taking a test, building a project, debugging

// Passive Learning:
  // - seem way easier
  // - watching a video, reading an article, watching your favorite teacher (Jeff) lecture to yall



// How to Debug

// This is a single line comment
// asdklfj;
// q893245klnsdfkln;lsaidtu

// console.log("Hey Guys!"); // Comment after line of code

/*
This
is
a
multi
line
comment
*/

// console.log/*This is an inline comment*/("Hey"); 


// console.log("Hello, World!");

// let name = "Billy Adams";
// console.log(name);



// // Number Type
// console.log(12 + 2); // 14
// console.log(7 - 9); // -2
// console.log(2.1 * 3); // 6
// console.log(8 / 2); // 4


// // Order of Operations
// // PE => MDM => AS

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
// console.log(true && true); // ONLY ONE THAT IS TRUE
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// Or Operator (||)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false); // ONLY ONE THAT IS FALSE



// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B


// Variables
// let animal; // Variable Declaration
// // console.log(animal);
// animal = "pig"; // Variable Assignment
// console.log(animal);
// animal = "chicken"; // Variable Reassignment
// console.log(animal);

// let animal2 = "dog"; // Varialbe Initialization (Declaration and Assignment)
// console.log(animal2);

// // let animal = "dog"; // CANNOT REDCLARE



// Comparison Operators
// < > <= >= == ===

// console.log(1 > 2);
// console.log(3 >= 2);
// console.log(2 >= 2);


// console.log('a' < 'b');
// console.log('app' < 'apple');
// console.log('a' < 'z');
// console.log('a' < 'Z');

// A < Z < a < z


// Equality
// = Assignment Operator 
// == Loose Equality
// === Deep Equality
// != Not Loose Equaitly 
// !== Not Deep Equality


// console.log(2 == '2'); // True
// console.log(2 === '2'); // False
// console.log(2 === Number('2')); // True

// console.log(2 === '2'); // False



// Strings
// console.log('hello' === "hello");
// console.log("What's up?");
// console.log('What\'s up?');


// Length Property
// let geeting = "hello";
// console.log(geeting.length);
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

// console.log(animal[0]);
// console.log(animal[1]);
// console.log(animal[2]);
// console.log(animal[3]);
// console.log(animal[animal.length - 1]);
// console.log(animal[456]);


// Index of
// let playoffs = "playoffs";

// console.log(playoffs.indexOf("a")); // 2
// console.log(playoffs.indexOf("off")); // 4
// console.log(playoffs.indexOf("bears")); // -1 because it does not exist in the string
// console.log("bootbamp".indexOf("o")); // 1


let firstName = "Jeff";
let theirTeachingPedigree = "AMAZING";

console.log(firstName + " is " + theirTeachingPedigree);