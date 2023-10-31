/*


 Conditionals
 * let us control what we decide to do, creates a decision making tree for our code

  Talk about truthy and falsy values
  * https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

  * Conditional statements will act as control for the flow of our apps and functions.
  * The basic structure of a conditional statement looks like:
      if (condition or comparison){
        <run this code>
      } else if (other condition or comparison) {
        <run this code>
      } else {
        <do this code if none of the conditions are met>
      }

  Mutually exclusive condition
   * A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should  use an if/else statement.
   * You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

  Conditionals cans be used to control the flow of our program
    * by providing conditions, and commands on what to do if conditions are met or not
    * there are many types of conditions we can check

*/

let randomNumber = Math.random();
// console.log("random num:", randomNumber);

// mutually exclusive condition
// if (randomNumber > 0.5) {
//   console.log("heads");
// } else {
//   console.log("tails");
// }

// non mutually exclusive condition
let number = 5;
// if (number > 1) {
//   console.log("heads"); //heads
// }
// if (number > 2) {
//   console.log("tails"); // tails
// }

// if you need multiple mutually exclusive conditions
// use else if
let number2 = 45;
// if (number2 < 1) {
//   console.log("less than 1"); //heads
// } else if (number2 > 20) {
//   console.log("greater than 20"); // tails
// } else if(number2 > 30) {
//   console.log('greater than 30')
// } else {
//   console.log('doesnt meet any conditions')
// }

function greaterThanFive(num) {
  if (num > 5) {
    return true;
  }
  return false;
}

console.log(greaterThanFive(6));


// truthy and falsy
if(12) {
  console.log('is truthy')
}

if(0) {
  console.log('does not print')
}
