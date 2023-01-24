/*


  Conditionals!

Conditional statements will act as control for the flow of our apps and
functions. The basic structure of a conditional statement looks like:

if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}

 Mutually exclusive - thought of like a coin flip - it either heads or tails but not both
*/

let number = 6;

// if(number > 5) {
//   //check if num is greater than 5, if it is run this code
//   console.log('num is greater than 5')
// } else if(number > 3) {
//   console.log('num is less than 5')
// } else {
//   console.log('its 5')
// }

// !mutually exclusive
// if (number > 5) {
//   //check if num is greater than 5, if it is run this code
//   console.log("num is greater than 5");
// }
// if (number > 3) {
//   console.log("num is greater than 3");
// }


function isGreaterThan5(number) {

  if(number > 5) {
    // console.log('num is greater than 5')
    return 'num is greater than 5'
  } else if(number < 5) {
    // console.log('num is less than 5')
    return 'num is less than 5'
  } else {
    // console.log('its 5')
    return 'its 5'
  }


};


// console.log(isGreaterThan5(4))

//that if you statement can be on one line, you can omit the curly's
//short hand way to write if statement
if(number > 5) console.log('num is greater than 5')
else if(number > 3) console.log('num is less than 5')
else console.log('its 5')


let num2 = 100;
//ternarys
// num2 > 100 ? console.log('is greater') : console.log('not greater')
