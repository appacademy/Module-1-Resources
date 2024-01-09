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
  // console.log(randomNumber);

  //mutually exclusive condition
  // console.log(randomNumber);
  // if(randomNumber > 0.5) {
  //   console.log('heads')
  // } else {
  //   console.log('tails')
  // }

//non mutually exclusive condition
// if(randomNumber > 0.5) {
//   console.log('heads')
// }
// if (randomNumber > 0.1) {
//   console.log('tails')
// }


if(10 < 20) {
  // console.log('10 is less than 20')
}

// 4
// if('cats'.length) {
//   console.log('this string has length')
// }
// // <reference> => []
// if([]) {
//   console.log('truthy')
// }

// if('') {
//   console.log('this is falsy')
// }


function greaterThanFive(num) {

  if(num > 5) {
    return `${num} is greater than 5`
  }
    return `${num} is not greater than 5`

}


// console.log(greaterThanFive(1));// 1 is not greater than 5
// console.log(greaterThanFive(10));// 10 is greater than 5

let randomNumber2 = Math.random();
// console.log(randomNumber);

//mutually exclusive condition
// console.log(randomNumber);
// if(randomNumber2 > 0.5) {
//   console.log('heads')
// } else {
//   console.log('tails')
// }

//                 <condition> ? <if condition is true> : <if condition is false>
// let coinSide = Math.random() < .5 ? 'heads' : 'tails'
// console.log(coinSide);

Math.random() < .5 ? console.log('heads') : console.log('tails');

function threeOrSeven(num){
  // console.log(num);
  // console.log(num % 3)
  if(num === 0) return 0;
  if(num % 7 === 0 && num % 3 === 0 && num !== 0) return 21
  else if(num % 7 === 0) return 7
  else if (num % 3 === 0) return 3
  else return num;

}
