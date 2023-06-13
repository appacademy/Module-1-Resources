/*

  Conditionals!

  - Conditional statement will act as a control for the flow of apps and functions

  The basic structure

  if (condition or comparison){
    <run this code>
  } else if (other condition or comparison) {
    <run this code>
  } else {
    <do this code if none of the conditions are met>
  }

  - mutually exclusive condition - think of a coin flip, it can either be heads or tails but not both
  * you can have as many else if as you want
  * or you dot use an else if, or an else at all

  - non mutually exclusive -  can fulfil more than one condition

*/

console.log("VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL?");
//mutually exclusive condition - only one condition will run
let powerLevel = 9001;

// if(powerLevel >= 9000) {
//   console.log('Its over 9000!!!!!');
//   console.log('WHAT!??? 9000!!!')
// } else if(powerLevel > 1000) {
//   console.log('weakling....')
// } else {
//   console.log('scouter is malfunctioning')
// }

//not mutually exclusive
if (powerLevel >= 9000) {
  console.log("Its over 9000!!!!!");
  console.log("WHAT!??? 9000!!!");
  // if(powerLevel > -10) {
  //   console.log('test');
  // }//nested if statement
}
if (powerLevel > 1000) {
  console.log("weakling....");
}
if (powerLevel > 0) {
  console.log("scouter is malfunctioning");
}

if (10 > 2) {
  console.log("10 is bigger");
}

if (true || false) {
  console.log("true");
}

if (10) {
  //10 is truthy
  console.log("10 exists");
}

if (0) {
  //0 is a falsy value
  console.log("if this will enter or not"); //we dont
}
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy

//function check if a number greater than 100

function isGreaterThan100(num) {
  // console.log(num);
  //if your logic can be done in one line, you can omit curlys
  if (num > 100) return "greater than 100";
  else if (num < 100) return "greater than 90";
  else return "number is a 100";

  return "we will not reach it";
}

console.log("the return value", isGreaterThan100(100));


//ternary's
//condition ? <if condition is true> : <if condition is false>

let darkMode = false;
if(darkMode === true) {
  console.log('turn on dark mode')
} else {
  console.log('turn off dark mode')
};

darkMode ? console.log('turn on dark mode') : console.log('turn off dark mode')
//      if                                 else
