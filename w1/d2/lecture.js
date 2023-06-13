/*


  What is JavaScript?
  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

  Why is javascript so useful?
  - Versatile, flexible, dynamic - render dynamic content
  - perform asynchronous task
  - make web pages more responsive
  - use js in the backend - node
  - You can immediately see your work/instant results - interpreted
  - allows multiple tasks at the same time -  do to async nature

  We want to learn javascript!

  What is learning?
  - understanding and retaining information
  - application of that knowledge -  if you dont use it use lose it

  Active vs passive learning?

  - Active learning
    - actually engaging
    - doing the problems and examples
    - asking questions
    - learning by doing
    ex: sports - fields running the drills

  - Passive learning
    - listening, reading, watching lecture, videos,
    ex: sports - watching football, watching practice, studying the plans

  A good balance of both

*/

/*

  Intro to JavaScript

  What is debugging?
  - find and fixing errors in code
  - Isolating portions of the code to determine where an issue exists
  - creating a solution
  - troubleshoot errors
  - looking at errors messages
  - console.logs()
  - debugger tool
  - dev tools


*/


// single line comment - delineated // - double back slash

/*
this
is
a
multiline
comment
delineated by: - // forward slash + asterisk
*/

// comments are good for notes
// explaining what a line of good does
// creating a plan - polya's

//command  + / - quickly comment out code - mac
//ctrl + / - windows

//console.logs
// we use whenever we want to see something on the screen
console.log('Welcome to App Academy');
// use console.log like crazy!


//preview on numbers
// console.log(21 + 73);//94
//inside the console.log, were saying evaluated the expression inside then print to the the terminal

let name = 'brandon';

// console.log('name: =>>>>>', name);
//hey console.logs take more than one arg, you can use a string to help you see what your looking at
// I want to log to the terminal whatever the name variable, evaluates too


// let people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
// console.table(people);


/*


  Numbers and Booleans

  Numbers!
  1. whole numbers
  2. integers
  3. floats
  4. decimals
  5. negative
  6. few other cases

  What is PEMDAS?
  - please excuse my dear aunt sally
  - parenthesis exponent multiplication modulo division addition subtraction
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/


// console.log(2 + 3 * 12);//38
// console.log(10 - 8 / 2);//6
// console.log(20 / 2);//10
// console.log(1.11 * 4);//4.44
// console.log(3 + (2 + 4));//9

// Modulo
// returns a remainder
// console.log('====>',13 % 5);// 3
//hey divide 5 into 13 twice and return the remainder which is 3
// console.log('===>', 3 % 7);//3
// 3 cant divide by 7, so we return 3

// console.log(12 % 5);//2
// console.log(25 % 6);//1
// console.log(5 % 18);//5
// console.log(12 % 3);//0 - no remainder

// whe could modulo be useful?
// check primes by seeing if there no remainder
// finding odds or evens
// conditionals
// multiple of

// if(10 % 2 === 0) {
//   console.log('do something')
// }

/*

   Booleans

   Logical operators
   && - and
   || - or
   ! - not(bang)

   Order of operations
    - not, and, or
      !    &&   ||

   return a boolean - true or false
*/

//booleans - true and false
console.log(false);//false
console.log(true);//true
console.log(!true);//false
console.log(true || false);//true
console.log(true && false);//false


console.log(!true || !false);//true
console.log(!(true && false));//true
// De morgans law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// distributing the sign, and flipping the symbol
// this useful for boolean simplification
// https://erikmhsiao.github.io/de-morgans-laws/

//can we store a boolean in a variable
let a = true;
let b = false;
console.log('looking here', a || b);
// were saying hey compare a with b using an or statement, js will first evaluate a and b, then compare
