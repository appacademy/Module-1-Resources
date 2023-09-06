/* GUIDED PRACTICE */

/* 1. Write a conditional statement for a mutually exclusive condition. */



/* 2. Write a conditional statement for a non-mutually exclusive condition. */

// let powerLevel = 9001;
// console.log('oh snap, what is their power level Nappa?');
// console.log('its ' + powerLevel)
// if(powerLevel > 9000) {
//  console.log('WHAT!!!?? OVER 9000!!!!')
// }

//  if(powerLevel > 7000) {
//   console.log("This fool wouldn't stand up to a Saiyan Prince")
// }

/* 3. Write a function that returns a boolean based on conditional logic.*/
function checkPowerLevel(powerLevel){

	console.log('oh snap, what is their power level Nappa?');
	console.log('its ' + powerLevel);

	if(powerLevel > 9000) {
 	  console.log('WHAT!!!?? OVER 9000!!!!');
      return powerLevel > 9000
	}

 	if(powerLevel > 7000) {
 	  console.log("This fool wouldn't stand up to a Saiyan Prince");
      return powerLevel > 9000
	};

	return powerLevel > 9000
}

console.log(checkPowerLevel('700'));// false
console.log(checkPowerLevel('90000'));// true

/* BONUS: Use ternary statement syntax or shorthand to write a
conditional statement, and write the same statement with if/else syntax. */
// let randomNumber = Math.random();
// console.log(randomNumber);

// mutually exclusive

if (randomNumber < 0.5) {
  console.log("heads");
} else {
  console.log("heads");
};

// ternary
// condition ? <if conditon is true run this logic> : <else run this logic>

randomNumber < 0.5 ? console.log("heads") : console.log("heads");
