/*



  * Comments
  Why do we use comments?
    * explain what your code is doing
    * creating a plan using polya's framework!
    * notes

  * Console.logs
  When do we use a console.log?
    * When we want to see something in the terminal

  * Numbers
  What are numbers used for?
    * Use numbers to run math, calculate values, represent an amount
  What is PEMDAS?
    * Order of operations
    * parentheses, exponents, multiplication, modulo, division, addition, subtraction
  Where does modulo fit?
    * Along side multiplication/division
  What is the modulus operator and what does it return?
    * A remainder

*/

// console.log('hello world');
// console.log(2 + 3 * 12); // 38
// console.log(10 - 8 / 2); // 6
// console.log(2 * 4 - 2);// 6
// console.log((4 + 5) / 2);// 4.5
// predict output??

// Modulo
// console.log(13 % 5)// 3
// // remainder of 3
// console.log(3 % 7);// 3
// return 3; 3 cant divide by 7

if( 12 % 2 === 0) {
  console.log('is even')
} else {
  console.log('is odd');
}


console.log('whats a ghost favorite data type?');
console.log('BOOlean');


/*

  Booleans

  What are booleans and what are they used for?
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  What are the logical operators?
    ! - not (bang)
    && - and
    || - or

  What is the order of operation for logical operators?
    * not, and, or

*/


// What will these expressions evaluate too?
console.log(false);// false
console.log(true);// true
console.log(!false);// true
console.log(!!true);// true
console.log(true || false);// true

console.log(!true || !false);// true
console.log(!(true && false));// true

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B

function example() {
  return true;
}

// if(!(true && false)){
//   console.log('do something')
// }
