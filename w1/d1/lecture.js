/*


  What is JavaScript?
  - JavaScript is a programming language that was originally developed
   to increase user interactivity with websites, and has grown to become a
   useful programming language in the backend of applications as well.
   JavaScript is now one of the most popular and widely used programming
   languages for building web applications today.

   Why is javaScript useful?
  - Run asynchronously
      - run more than one thing at the same time
  - Dynamic
      - control and do things based on user input

  We want to learn JavaScript!!

  What is learning?
  - Ability to grasp and maintain information
  - Accessing knowledge and using it later down the line
  - Ability to apply it, shows your understanding

  Active vs passive learning!

  Active learning - Practicing, hands on, being involved
    ex: sports
      - best way to get good, is to practice hands on!

  Passive learning - passive is less engaging, harder to track progress
    ex: sports
      - cant be good, if you're not on the field running the drills!

*/

/*


  Intro JavaScript

  What is debugging?
  - correcting errors in code
  - ask a friend, to take a look, getting a second eye
  - using mdn - documentation
  - using console.log to see your output
  - mocha - check test specs for errors
  - inspect browser
  - debugger
  - trial and error
  - go line by line

  JavaScript style guide - https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

*/

// comments
// single line comments

// comments are good for notes
// explaining a line of code
// writing out polya's framework

// shortcut for making comments
// command + /
// ctrl + /

/*
This
is
a
multiline
comment
*/

// console.logs
// we use console.log whenever we want to see something
// use console.logs to test our code, to see how data changes, and to confirm our output

// hey i want to print to the screen this string
// console.log("Welcome to Academy!"); // Welcome to Academy!

// preview on numbers
// console.log is going to evaluate the code in the parenthesis before printing it to the terminal
// console.log(1 + 2 + 3);//6

// preview on variables
let name = 'brandon';

// when we console.log a variable, we are logging what that variable holds
// console.log(name);// brandon


// console.log can take in more than one argument

// console.log('hey look here =====================>' ,  name);


/*


  Numbers

  Numbers!
  - decimals
  - integers
  - positive/negative numbers
  - floats
  - whole numbers
  - few other special cases

  What is pemdas?
  Order of operations
  - parenthesis, exponents, multiplication, modulo, division, addition, subtraction

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

*/

console.log(2 + 3 * 14);
console.log(10 - 8 * 2);
console.log(20 / 2);
console.log(1.11 * 3);
console.log((4 + 5) / 2);

// Modulo
// returns a remainder

console.log('look here =>', 13 % 5); //3
// we divide 5 into 13 twice, there will be 3 as a remainder

console.log(3 % 7);
// 3 cant divide by 7, we return 3


