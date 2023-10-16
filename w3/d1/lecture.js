/*

  String Interpolation
    * Alternative way to include values in our strings
    * So that we don't have to concatenate, don't have worry about spaces
    * Delineated by - ``
    * embedded expression - ${}
    * Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation

  What are template literals?
    * Template literals are enclosed by backtick (`) characters instead of double or single quotes.
    * Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}.

*/


// * old way
let firstName = 'brandon';
let lastName = 'laursen';

// * concatenation
let greeting = 'Hello ' + firstName + ' ' + lastName + '!';
// console.log(greeting);

// template literals
let newGreeting = `Hello ${firstName} ${lastName}!`;
// console.log(newGreeting);

let hello = () => 'hello';

console.log(hello());// hello

// console.log(`${hello()} ${firstName} ${lastName}`);

let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

for(let cat of names) {
  console.log(`${hello()} ${cat} `);
}
