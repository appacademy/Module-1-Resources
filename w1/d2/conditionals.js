
/*

  Conditionals

  - Conditional statements will act as a control for the flow of apps and functions
  The basic structure

  if (condition or comparison){
    <run this code>
  } else if (other condition or comparison) {
    <run this code>
  } else {
    <do this code if none of the conditions are met>
  }

  - Mutually exclusive condition - think of it like a coin flip, it can be either heads or tails, but not both
*/

// console.log('VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL!!!??')

let powerLevel = 9000;

//mutually exclusive condition
// if(powerLevel >= 9000) {
//   console.log('Its over 9000!!!!');
//   console.log('WHAT!? 9000!!!!!');
// } else if(powerLevel > 900) {
//   console.log('worm...')
// } else {
//   console.log('scouter is malfunctioning...')
// };

// //non mutually exclusive
// if(powerLevel > 9000) {
//   console.log('its over 9000!')
// }
// if(powerLevel > 3000) {
//   console.log('its over 3000!')
// }
// if(powerLevel > 1000) {
//   console.log('its over 1000')
// }

function checkPowerLevel(name, powerLevel) {
  if (powerLevel >= 9000) {
    console.log("Its over 9000!!!!");
    console.log("WHAT!?" + name + " power is level is over 9000!!!!!");
  } else if (powerLevel < 9000) {
    console.log(name + " is a " + "worm...");
  } else {
    console.log("this power..., who are you", name);
  }

  return name + " power level is " + powerLevel;
}

// console.log(checkPowerLevel("krillin", 400));
// console.log(checkPowerLevel('jiren', '????'));
// checkPowerLevel('goku', 10000);

function checkPowerLevel2(name, powerLevel) {
  if (powerLevel >= 9000)
    console.log(
      "Its over 9000!!!!WHAT!?" + name + " power is level is over 9000!!!!!"
    );
  else if (powerLevel < 9000) console.log(name + " is a " + "worm...");
  else console.log("this power..., who are you", name);
  return name + " power level is " + powerLevel;
}

// console.log(checkPowerLevel2("krillin", 400));


//ternary's
//condition ? <if condition is true> : <if condition is false>

let darkMode = false;
// if(darkMode === true) {
//   console.log('turn on dark mode')
// } else {
//   console.log('turn off dark mode')
// }

// darkMode ? console.log('turn on dark mode') : console.log('turn off dark mode');
