/*


Conditionals
Conditional statements will act as control for the flow of our apps
and functions. The basic structure of a conditional statement looks like:

if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}

Lets write a few!
*/

//else if allows us to check multiple conditionals in the same condional chain
//dont always needs else if or else
// let number = 5;

// if (number > 5) {
//   console.log("The number is greater than five");
// } else if (number < 5) {
//   console.log("The number is less than five");
// } else {
//   console.log('Its five!')
// }

//if your if statement code to run, is only one line, you can omit the curly braces
// if (number > 5) console.log("The number is greater than five");
// else if (number < 5) console.log("The number is less than five");
// else console.log("Its five!");

function isGreaterThan100(num) {
  if (num > 100) {
    return "num is greater than 100";
  } else if (num > 50) {
    return "num is greater than 50";
  } else {
    return "number is less than 50";
  }
}

console.log(isGreaterThan100(4));
