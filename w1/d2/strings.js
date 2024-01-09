/*

  What are strings?
  * Strings are delineated with "", or '' or `` which we learn next week
  * Collection of characters in memory

  Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

  * https://programmingwithmosh.com/javascript/javascript-wrapper-objects/

*/

//create some string
// single quote
// double quote
// template literal/string interpolation
let string1 = 'hello world';
let string2 = "hello mars";
let string3 = `hello venus`;

//quotes within quotes
// \ - escape character
let quote = 'You\'re great say Tony!'

let quote2 = 'You"re great say Tony!'

let quote3 = "You're great say Tony!"

let quote4 = `You're great say Tony!`

//strings
let letter = 'a';
let sentence = 'this is a sentence!'
