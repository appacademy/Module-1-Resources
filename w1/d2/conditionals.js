/*

Conditionals!
Conditional statements will act as control for the flow of our apps and
functions. The basic structure of a conditional statement looks
like:

if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}

*/

// let number = 5;
// function isGreaterThan5(number) {
//   if (number > 5 || number === 5) {
//     // console.log("the number greater than 5");
//     return "the number greater than" + number
//   } else if (number < 5) {
//     // console.log("the number is less than 5");
//     return "the number is less than 5" + number
//   } else {
//     // console.log("number is 5");
//     return 'number is ' + number
//   }
// }

// console.log(isGreaterThan5(5));
// console.log(isGreaterThan5(13))

function isGreaterThan100(num) {
  if (num > 100) {
    console.log("Number is greater than 100!");
  } else if (num > 50) {
    console.log("Number is greater than 50!");
  } else if (num > 20) {
    console.log("Number is greater than 20!");
  } else if (num > 10) {
    console.log("Number is greater than 10!");
  } else {
    console.log("Number is less than 10!");
  }

  return num;
}

//short hand
//so if the statement to run if a condition is true is only one line, you can omit the curly's
function isGreaterThan100(num) {
  if (num > 100) console.log("Number is greater than 100!");
  else if (num > 50) console.log("Number is greater than 50!");
  else if (num > 20) console.log("Number is greater than 20!");
  else if (num > 10) console.log("Number is greater than 10!");
  else console.log("Number is less than 10!");
  return num;
}
console.log(isGreaterThan100(5));
console.log(isGreaterThan100(130));

let num = 100;
//can meet multiple if statement conditions if used without a else if like so
if(num > 99) console.log('num is greater than 100');
if(num === 100) console.log('num is equal to 100');
//this code above will print both console.logs

if(num > 99) console.log('num is greater than 100');
else if(num === 100) console.log('num is equal to 100');
//the code above will only print one or the other becuase it is a else if statement

//ternary's
let num2 = 100;
num2 > 100 ? console.log('num is greater than 100') : console.log('num is smaller than 100')
