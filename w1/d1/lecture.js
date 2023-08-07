
/*


  Intro to JavaScript!

  What is JavaScript?
    * JavaScript is a programming language that was originally developed to increase user interactivity with websites, and has grown to become a useful programming language in the backend of applications as well. JavaScript is now one of the most popular and widely used programming languages for building web applications today.

  Why is javascript is so useful?
    * Run asynchronously
    * dynamic - based on user input
    * enables more responsive websites
    * integrates seamlessly with two core languages HTML & CSS

  What is debugging?
    * Figure out the problem in the code
    *

  How we can debug?
    * console.logs
    * ask for a second look
    * mdn documentation
    * line by line
    * trial and error
    * mocha
    * terminal - error messages!
    * debugger
    * try and explaining code to someone else
      * rubber duck method

  How to style/format?
  *  https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Whats the deal with semicolons?
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion

*/


// single line comment - // - double back slash

/*
this
is
a
multiline
comment
*/

// Comments!
// * explaining what your code does
// * create a plan using polya's
// * notes
// * when reviving try to out what each line of code is doing; if youre unable to explain it! Research it! Reach out for help!
// * command + / - quickly comment in/out code
// * ctrl + / - quickly comment in/out code

// console.logs!
// We use console.log whenever we want to see something on the screen

console.log('Welcome to App Academy!');

// Preview on numbers
// * evaluate the expression then prints the resulting value to the terminal
// * an expression is anything that results in a value
// * expression: must first be evaluated to a single value
// * value: data type: Number, string, boolean, array, object
console.log(1 + 2 * 4);// 9


// preview on variables
let name = 'brandon';
console.log(name);// brandon
// * a variable is an expression
// * we first evaluate what the variable holds
// * in this case, name evaluates too brandon

// console.logs can take an additional arguments
console.log('hey look here this is the name ========>', name)
