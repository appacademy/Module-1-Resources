/*



  What is JavaScript?
  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

   Why is javascript so useful?
   - you can use in front and back end
   - full stack application
   - render dynamic content
   - perform asynchronous task


   We want to learn javascript!

   What is learning?
   - dynamic process of acquiring skills and knowledge
   - use the knowledge weve gained
   - understanding the logic and connecting the information and facts

   Active vs passing learning
   - active learning - engaging with information, getting hands on practice, recalling
   - passive learning - passive is not as engaging, harder to track progress ex: observations, videos, readings

   ex: sports!

*/


/*

  Intro to JavaScript

  What is debugging?
  - fixing broken code
  - finding and eliminating bugs
  - console.log()
  - read the error message
  - research - mdn documents
  - debugger
  - polya's
  - trial and error
  - break the code down piece by piece to find the broken part

*/

//comments!

/*
This
is
a
multiline
comment
*/

// a single line comment - command + /

//console.log! - Is to see your code in the terminal, use a console.log when you want to see something!
//console.log is going to evaluate the expression inside the parenthesis, then log it to the terminal

// console.log('hello world');//hello world

//preview on numbers
// console.log(1 + 2 + 3);//6

//Preview on variables
let name = 'brandon';
//the expression inside the console.log will evaluate first then be printed
// console.log(name);//brandon

//console.log are your best friend, USE THEM LIKE CRAZY


/*


  Numbers and Booleans!

  Numbers!
  - integers
  - decimals
  - negative numbers
  - whole numbers
  - there other cases

  What is pemdas? -  please excuse my dear aunt sally
  - Order of operations
  - parentheses, exponents, multiplication, modulo, division, addition, subtraction

*/


// console.log(2 + 3 * 14)//44
// console.log(10 - 8 / 2);//6
// console.log(20 / 2);//10
// console.log(1.11 * 3);//3.33
// console.log((4 + 5) / 2);//4.5

// comment out multiple lines - command/ctrl + /
//modulo operator
//returns a remainder

// console.log(13 % 5)//3
//well 5 divides into 13 twice with a remainder of 3
//modulo returns that remainder


// console.log(3 % 7)//3
// 3 cant divide by 7, so we return 3
/*
Another way to think of it is that 7 divides into 3 zero times, with a remainder of 3
*/

//use case - modulo checking if number is even num % 2 === 0
//use case - check odds num % 2 !== 0


/*


  Booleans!
    - Logical operators

    ! - not(bang)
    && - and
    || - or

    Order of operations
    - not, and, or

    Booleans - evaluate to true or false

    keywords: true, false
*/


// console.log(false);//false
// console.log(!true);//false
// console.log(true || false);//true
// console.log(true && false);//false
// console.log(!true || !false);//true
// console.log(!(true && false));//demorgans law - same as above - simplified version of above!
// demorgans law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// distribute the sign and flip the symbol

//can store a boolean in a variable

// let a = true;
// let b = false;
// console.log(a || b); // true
