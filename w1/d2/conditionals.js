/*



  Conditionals!
  - conditionals will act as a control for the flow of our apps and function
  The basic structure of a conditional

  Mutually exclusive condition
  - like a coin flip, you can be either heads or tails, but not both
  - only one condition can be met

  if (condition or comparison){
  <run this code>
  } else if (other condition or comparison) {
  <run this code>
  } else {
  <do this code if none of the conditions are met>
  }

  - not mutually exclusive - because we can meet both conditions

  if(condition) {
    run this code
  } else {
  }

*/

// console.log('VEGETA WHATS DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL??!!!')

let powerLevel = 9001;

//mutually exclusive
// if(powerLevel > 9000) {
//   console.log('ITS OVER 9000!!!');
//   console.log('what 9000!?')
// } else if(powerLevel > 1000) {
//   console.log('hes a weakling')
// } else {
//   console.log('what is this power??!')
// }

//not mutually exclusive
if (powerLevel > 9000) {
  // console.log('ITS OVER 9000!!!');
  // console.log('what 9000!?')
}

if (powerLevel > 1000) {
  // console.log('power level is great than a 1000')
}

//WITH JUST CONSOLE.LOGS
function checkPowerLevel(powerLevel, name) {
  console.log("VEGETA WHATS DOES THE SCOUTER ABOUT HIS POWER LEVEL");

  if (powerLevel > 9000) {
    console.log('It" over 9000!');
    console.log("what 9000!!");
  } else if (powerLevel < 9000) {
    console.log("hes a weakling");
  } else {
    console.log("what is this power");
  }

  return name + " has a power level of " + powerLevel;
}

//with returns
function checkPowerLevel(name, powerLevel) {
  console.log("VEGETA WHATS DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL??!!!");
  if (powerLevel > 9000) {
    console.log("ITS OVER 9000!!!");
    return name + " power level is greater than 9000";
  } else if (powerLevel > 1000) {
    return "hes a weakling";
  } else {
    return "what is this power??!";
  }
}

//short hand
function checkPowerLevel(name, powerLevel) {
  console.log("VEGETA WHATS DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL??!!!");
  if (powerLevel > 9000) return name + " power level is greater than 9000";
  else if (powerLevel > 1000) return "hes a weakling";
  else return "what is this power??!";
}


console.log(checkPowerLevel("goku", 90000));
console.log(checkPowerLevel("krillin", 90));
