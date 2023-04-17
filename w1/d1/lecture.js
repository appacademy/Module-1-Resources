//hello :)
/*

  What is JavaScript?
  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

  Why is javascript so useful?
  - used in most webapp
  - Adds interaction for users on sites instead of them being static.
  - render dynamic content
  - it's front and back end
  - Makes html and css intractable
  - It allows things to load asynchronously, like scrolling through a feed while it continues to populate more posts

  We want to learn Javascript?

  What is learning?
  - Taking in new information and mastering skill sets
  - obtaining new information and being able to apply it
  - use knowledge we've gained

  Active vs passive learning
  - Active learning - engaging with the information, getting hands on practice, recalling the information
    - ex: sports
  - Passive learning - passive is not as engaging, harder to track our progress ex: observation, videos, readings!

*/


/*

  Intro to JavaScript

  What is debugging?
  - test cases/mocha/chai
  - console.log()
  - debugger
  - line by line
  - developer tools
  - errors!!!
  - research - mdn use docs!
  - polya's
  - trial and error

*/

//comments!
// single line comment - // cntrl + / or command + /

/*
this
allows
us to
create
a multi line comment!
 */

//console.log() - Is to see your code in the terminal, use console.log if you need to see something
//for example if we wanted to run lecture.js in d1 folder
//from the root wed run node w1/d1/lecture.js
//from w1/d1 wed run node lecture.js
// console.log('hello mars');
//console.log is going to evaluate the expression inside the parenthesis, then log it to the terminal

// console.log(4 + 5);

//preview on variables
let name = 'brandon';
//the variable evaluates ot the value it holds
// console.log(name);


//console.log are your best friend, use them like crazy!
//if there is no console.log nothing will be printed


/*


  Numbers and Booleans!

  Numbers!
  - negative, positive
  - decimals
  - whole numbers
  - there other cases we learn later down the line!
    - Float, integers, etc

  What is pemdas? - Please excuse my dear aunt sally
  - order of operations
  - Parentheses, exponents, multiplication, modulo, division, addition, subtraction

*/


console.log(2 + 3 * 14);
console.log(10 - 8 / 2);
console.log(20 / 2);
console.log(1.11 * 3);
console.log(4 + (3 + 5));
console.log(2 - (5 + 4));
/*
44
6
10
3.33
12
-7
*/

//modulo operator
//Divides and gives the remainder
// console.log('remainder!!!', 13 % 5)//3
//what is the remainder after dividing 5 into 13
//well 5 divides into 13 twice with a remainder of 3!

// console.log('look here', 3 % 7);//3
//3 cant divide by 7, so we return 3

//when modulo useful?
//odd versus even
//check if prime
//counting change
// check if num is even - num % 2 === 0
// check if odd - num % 2 !== 0


/*

  Booleans!

  - Logical operators
    - and, or, not

    ! - not(bang)
    && - and
    || - or

  - Order of operation for operators
    - not, and, or

  Booleans! - evaluate to true or false
  keywords - true and false

*/

// console.log(false);//false
// console.log(!true);//false
// console.log(true || false);//true
// console.log(true && false);//false
// //demorgans law
// console.log(!true || !false);//true
// console.log(!(true && false));//true
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// distribute the sign and flip the symbol

//can store in boolean
let a  = true;
let b = false;
// console.log(a || b);//true


