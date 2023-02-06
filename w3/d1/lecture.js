/*

String Interpolation!

Template literals are enclosed by backtick (`) characters instead of double or single quotes.
Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}.

- Alternative way to include values in our strings
- So that we don't have to concatenate

*/


//old way
let firstName = 'krandon';
let lastName = 'laursen';

//concatenation
let greeting = "Hello" + ' ' +  firstName + ' ' + lastName + '!';
// console.log(greeting);

let hello = () => 'Hello';
// console.log(hello())

//the easier way!!!
let newGreeting = `${hello()} ${firstName} ${lastName}!`
// console.log(newGreeting)

let names = ['brandon', 'john', 'jojo', 'anabel', 'jesse']
for(let i = 0; i < names.length; i++) {
  let name = names[i];

  console.log(`The current name ${name}`)
}
