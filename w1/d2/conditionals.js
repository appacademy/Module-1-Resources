
/*

 Conditionals
 * let us control what we decide to do, creates a decision making tree for our code

  Talk about truthy and falsy values
  * https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

  * Conditional statements will act as control for the flow of our apps and functions.
  * The basic structure of a conditional statement looks like:
  *
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

// generate random number between 0 and 1
let randomNumber = Math.random();
console.log('random num =>',randomNumber)

// use else if; if you want to check if something is one thing or another but not both
// mutually exclusive condition
if(randomNumber > .5){
  //if condition is true
  console.log('heads')
} else {
  //if condition is false
  console.log('tails');
};


// not mutually exclusive condition
// dont use else if you want to meet more than one condition
if(randomNumber > .1) {
  console.log('greater than .1')
}

if(randomNumber > .2) {
  console.log('greater than .2')
};

// check more than one condition
// else if
// stop at first condition met
if(randomNumber > .1) {
  console.log('greater than .1')
} else if(randomNumber > .2) {
  console.log('greater than .2')
} else if(randomNumber > .3) {
  console.log('greater than .3')
} else {
  console.log('no condition was met')
}
