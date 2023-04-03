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