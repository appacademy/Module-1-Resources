/* GUIDED PRACTICE */

/* 1. Write a conditional statement for a mutually exclusive condition. */
// let x = 5;

// if (x > 10) {
//   console.log("x is greater than 10");
// } else if (x < 5) {
//   console.log("x is less than 5");
// } else {
//   console.log("x is between 5 and 10 (inclusive)");
// }

let x = 3;
if (x === 3) {
  console.log("this will run");
} else {
  console.log("this will not run");
  return false;
}

// console.log('x + 4');

/* 2. Write a conditional statement for a non-mutually exclusive condition. */
let randomNumber = Math.random();
console.log(randomNumber)

if (randomNumber > .38) {
  console.log("Twisted Bow");
}

if (randomNumber > .5) {
  console.log("Respawn at Lumbridge with no bank");
}


/* 3. Write a function that returns a boolean based on conditional logic.*/
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  };

  //short hand if statement
  //if we have one line statements, we can omit the curlys
  if (number % 2 === 0) return true;
  return false;


  //ternary
  //short hand for conditions
  //condition ? if condition is true : if condition is false
  number % 2 === 0 ? true : false;

}

let result = isEven(4);
console.log(result);

