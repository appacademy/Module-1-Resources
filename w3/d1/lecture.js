/**
 * String interpolation
 * - Alternative way to include values in our strings
 * - Bonus: We don't have to concatenate anymore
 */

/**
 * Template literal
 * - enclosed by backticks (`) characters instead of double/single quotes
 * - can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}
 */

/*
let firstName = `Jojo`
let lastName = 'Yih'

let greeting = 'hello ' + firstName + ' ' + lastName + '!'
// console.log(greeting)

let interpolated = `Hello ${firstName} ${lastName}!`
// console.log(interpolated)

let names = ['brandon', 'jojo', 'braxton', 'jesse', 'anabel']
for (let i = 0; i < names.length; i++) {
  let name = names[i]
  console.log(`Hello, ${names[i]}`)
}
*/


/************************ */

/**
 * Debugger Notes
 * - put debugger keyword where scope may change
 * - Continue: continues debugger, go to next debugger
 * - Step Over: means that if there is a function call, it executes it like a black box and returns the result, but you can't see how the function is executed
 * - Step Into: means that if there is a function call, it goes inside the function and see how the function is executing line-by-line until it returns
 * - Step Out: means that if you have stepped in a function and now you want to skip seeing how the rest of the function is going execute, you can STEP OUT
 * - Restart: restarts debugger from the beginning
 * - Stop: Exits the debugger
 */


function foo(word) {
  debugger;
  console.log(word)
  debugger
  bar("barber")
}

function bar(word) {
  debugger;
  console.log(word)
  baz("bazaar")
}

function baz(word) {
  console.log(word)
}

foo('food')

let names = ['brandon', 'jojo', 'braxton', 'jesse', 'anabel']
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`)
  debugger
}