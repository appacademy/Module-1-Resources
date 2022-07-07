// What is learning?

// An active process of engaging with something that you're trying to learn, acquiring new information
// and skills
// Storing, accessing and attracting information

// Active v passive learning?

// Desireable difficulty
// Challenging, but still within the realm of doable

// Spaced repitition

// your code here

console.log('Hello world!');  // Hello world!

let answer = 2 + 2

console.log("answer")   // answer
console.log(answer)     // 4

// let olderDaughter = "Madelyn Aster"

// let youngerDaughter = "Finley Aurora"

// console.log(olderDaughter, youngerDaughter)
// console.log(olderDaughter)
// console.log(youngerDaughter)

console.log("error") // this logs the error to the console

/*
We can 
write
multiline
comments
for ourselves
or other
devs
*/

let olderDaughter = "Madelyn Aster" // initialize variable olderDaughter with string "Madelyn Aster"

let youngerDaughter = "Finley Aurora" // initialize variable youngerDaughter with string "Finley Aurora"

console.log(olderDaughter + youngerDaughter) // logs both variables combined 



// Math
// Order of operations

// Parentheses, Exponents, Multiply, Modulo, Divide, Add, Subtract
// P            E          M         M       D       A    S

console.log(12 + 2)    // 14
console.log(7 - 9)     // -2
console.log(2.02 * 3)  // 6.06000...
console.log(8 / 2)     // 4


console.log(5 % 16)        // 5
console.log((1 + 3) * 4)   // 16
console.log((1 + 5 ** 2))  // 26


console.log(Math.ceil(2.02 * 3))  // 7




//  Boolean

console.log(!true)  // false
console.log(!false) // true



// Logical And -- &&

console.log(!false && !false && (false && true))  // false
// both sides of && must be true in order to yield true



// Logical Or -- ||

console.log(false || true && false || true) // true

let animal; // declare new variabled 'animal'

console.log(animal) // undefined
// when declaring a variable with let, if you do not 
// assign it a value it is undefined by default

animal = "dog"  // set the variable 'animal' to the value of "dog"

console.log(animal) // dog

animal = 42 // set the variable 'animal' to the value of 42

animal = animal + 5 // 47
// animal += 5  // same as above using addition assignment

animal = animal - 1 // 46
// animal -= 1  // same as above using subtraction assignment
// animal--     // decrement opperator, will subtract 1 from the variable

console.log(animal) // 46




let animal2 = "cat" // initialize variable 'animal2' with the value of "cat"

animal2 += "dog" // combine the value of 'animal2' with the string of dog using addition assignment

console.log(animal2)  // catdog


// Comparison Operators
// < > <= >= == === !==

console.log(2 < 2.2)  // true

console.log('a'.toUpperCase())  // A

console.log('a' < 'Z'.toLowerCase())  // true

console.log("app" < "apple")  // true

let a = 3;
let b = 5;

console.log(b < a)  // false

// Equality 
// =, ==, ===

console.log(2 === '2')  // false

console.log(2 === Number('2'))  // true

