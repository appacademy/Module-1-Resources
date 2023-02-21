/*

Conditionals!

Conditional statements will act as control for the flow of our apps and functions.

The basic structure of a conditional statement looks like:

mutually exclusive condition

A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should use an if/else statement.

You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}

An example not mutually exclusive

*/

// console.log('VEGETA WHATS DOES THE SCOUTER ABOUT HIS POWER LEVEL')

// let powerLevel = 9001;

// //mutually exclusive
// if(powerLevel > 9000) {
//   console.log('It" over 9000!');
//   console.log('what 9000!!')
// } else if(powerLevel < 9000) {
//   console.log('hes a weakling')
// } else {
//   console.log('what is this power')
// }

//not mutually exclusive

// if(powerLevel > 9000) {
//   console.log('its over 9000')
// }
// //were not going to use else if
// if(powerLevel > 5000) {
//   console.log('its over 5000 2');
// }
// if(powerLevel > 1000) {
//   console.log('its over 1000 3')
// }



function checkPowerLevel(powerLevel, name) {
  console.log('VEGETA WHATS DOES THE SCOUTER ABOUT HIS POWER LEVEL');

  if(powerLevel > 9000) {
    console.log('It" over 9000!');
    console.log('what 9000!!')
  } else if(powerLevel < 9000) {
    console.log('hes a weakling');
  } else {
    console.log('what is this power');
  }
  
  return name + ' has a power level of ' + powerLevel;
}

// console.log(checkPowerLevel(9001, 'vegeta'))


// let num2 = 1;
//ternarys
// num2 > 2 ? console.log('num is greater than 2') : console.log('num is less than 2')


//semicolons go anywhere where you're terminating a line of code
