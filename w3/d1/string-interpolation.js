
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

// * Old way
let firstName = "brandon";
let lastName = "laursen";

// * concatenation
let greeting = "Hello " + firstName + " " + lastName + "!";
// console.log(greeting);//Hello brandon laursen!

// * lets do the same things with string interpolation
let newGreeting = `Hello ${firstName} ${lastName}!`;
// console.log(newGreeting)//Hello brandon laursen!

// * can imbedded function/expressions
// * because they evaluate to their return
let hello = () => "hello";

let names = ['celebi', 'pumpkin', 'mochi', 'jazz'];

// * can be used in loops
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  console.log(`${names[i]} ${hello()}`);
}
