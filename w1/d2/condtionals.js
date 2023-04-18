/*

  Conditionals
  - conditionals will act as a control for the flow of our apps and functions
  The basic structure of a conditional

  Mutually exclusive condition
    - like a coin flip, you can either be heads or tails, but not both
    - only one condition can be met

  if (condition or comparison){
  <run this code>
  } else if (other condition or comparison) {
  <run this code>
  } else {
  <do this code if none of the conditions are met>
  }

  Not mutually exclusive
  Because we can meet multiple conditions

  if(condition) {
    run this code
  }
  if(condition) {
    run this code
  }

*/

//mutually exclusive condition

// console.log("VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL????!!!!");

let powerLevel = 9001;
//order does matter
// if(powerLevel > 9000) {
//   console.log('ITS OVER 9000!!!!!');
//   console.log('what!? 9000!!!');
// } else if(powerLevel > 1000) {
//   console.log('hes a weakling')
// } else {
//   console.log('what is this power');
// }

//not mutually exclusive condition
// we can fulfill both conditions
// if (powerLevel > 9000) {
//   console.log("ITS OVER 9000!!!!!");
//   console.log("what!? 9000!!!");
// }
// if (powerLevel > 1000) {
//   console.log("hes a weakling");
// }

// function checkPowerLevel(name, powerLevel) {
//   console.log("VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL????!!!!");
//   if (powerLevel > 9000) {
//     console.log("ITS OVER 9000!!!!!");
//     console.log("what!?" + name + ' power level is over 9000!!!');
//   } else if (powerLevel > 1000) {
//     console.log(name + ' ' + "is a weakling");
//   } else {
//     console.log("what is this power");
//   };
//   return name;
// }

//we can do shorthand
//if your if statement can be done one line , you can omit curlys
function checkPowerLevel(name, powerLevel) {
  console.log("VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL????!!!!");
  if (powerLevel > 9000)console.log("ITS OVER 9000!!!!!","what!?" + name + " power level is over 9000!!!");
  else if (powerLevel > 1000) console.log(name + " " + "is a weakling");
  else console.log("what is this power");
  return name;
}
// console.log(checkPowerLevel("krillin", 1700));//name
// console.log(checkPowerLevel("jiren", 10000000));

//dark mode w ternarys
let darkMode = false;
//condition ? <if condition is true> : <if condition is not true>
darkMode ? console.log('turn on darkmode') : console.log('turn off darkmode')
