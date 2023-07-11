/*




  Conditionals
  - will act as the control for the flow of our apps and functions
  - The basic structure of a conditional statement looks like

 if (condition or comparison){
    <run this code>
  } else if (other condition or comparison) {
    <run this code>
  } else {
    <do this code if none of the conditions are met>
  }

  Mutually exclusive condition
  A general of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false

  * Think of a coin flip, the coin's side can either be heads or tails but not both


*/



// conditionals to control the flow of our program
// by provide conditions, and commands on what to do; if those conditions are met
// there are many types of conditions we can check
// Math.random return a floating point random number between 0 and 1

let randomNumber = Math.random();

console.log(randomNumber);// a random number between 0 and 1

// mutually exclusive - can only be one or the other
// if(randomNumber > .5) {
//   console.log('heads');
// } else {
//   console.log('tails');
// }

// cant get heads/tails to print because mutually exclusive
if(randomNumber > .5) {
  console.log('heads');
} else if(randomNumber > .1){
  console.log('tails');
}

// not mutually exclusive
if(randomNumber > .5) {
  console.log('heads');
}

if(randomNumber > .1){
  console.log('tails');
}

// logs both heads and tails, it fulfils both conditions

// many things we can compare in a conditional

if(10 > 1) {
  console.log('do this if 10 is greater than 1')
} else {
  console.log('else do this')
}

if('string'.length > 2) {
  console.log('length of string is greater than 2')
} else {
  console.log('do this if if string is not greater than 2')
}

//1 if statement
//as many else if as you want - check other conditions
//1 else statement - failsafe - in case all ELSE fails
// truthy and falsy values
// we can pass anything to a if statement, it will evaluate to truthy or falsy
// truthy - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// falsy - https://developer.mozilla.org/en-US/docs/Glossary/Falsy

if(true) {
  console.log('truthy');//truthy
}

// 0 is falsy, so the its false, we don't enter the statement
if(0) {
  console.log('falsy')
};

if('string'.length > 0) {

}

if(!'string'.length) {

}

//.length is a property
// use truthy/fasly values checking that something exists
