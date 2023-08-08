/*

    CONDITIONALS!

    Conditionals act as a control for the flow of our apps and funcs

    Mutually exclusive conditions:

        A general rule of thumb is that if you are working with a condition that is mutually exclusive,
        meaning if one condition is true, the other must be false -> if/else statements

        The way you can think of this is like a coin flip - it can either be heads or tails

    Basic structure to if/else statement:

    if (condition or comparison) {
        <run some code>
    } else if (condition or comparison) {
        <run some other code>
    } else {
        <catch all code>
    }

    Non-Mutually exclusive conditions:
    
        We can check multiple conditions, and more than one can be true

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

*/

function coinFlip (flip) {
    if (flip === 'heads') {
        console.log('the coin landed on heads')
    } else if (flip === 'tails') {
        console.log('the coin landed on tails')
    } else {
        console.log("That wasn't a coin")
    }
}

// coinFlip('heads') //the coin landed on heads
// coinFlip('tails') //the coin landed on tails
// coinFlip('banana') //That wasn't a coin

// console.log('VEGETA WHAT DOES THE SCOUTER SAY ABOUT HIS POWER LEVEL?!')

let powerLevel = '9001';

// if (powerLevel > 9000) {
//     console.log("It's over 9000!");
//     console.log('What?! 9000??');
// } else if (powerLevel < 9000) {
//     console.log("He's not even worth our time.");
// } else {
//     console.log("Well that's oddly specific...")
// }

// if (typeof powerLevel !== 'number') {
//     console.log("That's not a number!")
// }
// if (powerLevel > 9000) {
//     console.log("It's over 9000!");
// };
// if (powerLevel > 5000) {
//     console.log("It's over 5000!");
// };
// if (powerLevel > 1000) {
//     console.log("It's over 1000!");
// };

// console.log('after if statements')

// Ternarys

// normal syntax is :
/* 
if (condition) {
    do something
} else {
    do something else
}
*/

// Ternary syntax:
// condition ? if true : if false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let num = 0
num > 0 ? console.log("That's a positive number") : num < 0 ? console.log("That's a negative number") : console.log("Num is 0")