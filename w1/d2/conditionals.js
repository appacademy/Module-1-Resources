/*
Conditionals!
Conditional statements will act as control for the flow of our apps and functions.
The basic structure of a conditional statement looks like:

if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}


Let's write a few in practice
*/

// let number = 2;

// if (number > 10) {
//   console.log("num is greater than 10");
// } else if (number > 4) {
//   console.log("num is greater than 4");
// } else {
//   console.log("num is not greater than 10 or 4");
// }

function isNumberGreaterThan10(number) {
  if (number > 10) {
    console.log(`num is greater than 10`);
  } else if (number > 4) {
    console.log("num is greater than 4");
  } else {
    console.log("num is not greater than 10 or 4");
  }
}

isNumberGreaterThan10(210)
