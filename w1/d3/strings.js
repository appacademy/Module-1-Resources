/*


  Strings
    * Strings are delineated by "", '', ``


*/

// print some strings to the terminal
console.log("What is the most used language in programming?"); // Profanity

// strings can be stored in a variables
// strings can be letter, words, sentences, spaces
let newString = "Cool string";
let emptyString = "";
let numberString = "$2";

// What you if you need a sentence with quotes
// * alternate the quotes used
// if you need to escape a character use a - backslash
let sentence = " 'You miss every shot you dont take' - Wayne Gretsky ";
let sentence2 = ' "You miss every shot you dont take" - Wayne Gretsky ';
let sentence3 = ' "You miss every shot you don\'t take" - Wayne Gretsky ';
let sentence4 = ` "You miss every shot you don\'t take" - Wayne Gretsky '" - Michael Scott; `;


// String methods/property
// * all strings have a length property
// * tell us how many characters are in a string
console.log('brandon'.length);// 7

let name = 'brandon';
console.log(name.length);// 7
let nameLength = name.length
console.log(nameLength);// 7
// track the variable name; find the value they hold


// Indexing
// * String have indexes
// * indexes in programming starts at 0
/*
  length of 4
  VALUE - c a t s undefined undefined
  INDEX - 0 1 2 3     4         5
*/
let animal = 'cats';

console.log(animal);// cat
console.log(animal.length);// 4

console.log(animal[0]);// c
console.log(animal[1]);// a
console.log(animal[2]);// t
console.log(animal[3]);// s

// cant access an index that does not exists
console.log(animal[4]);// undefined
console.log(animal[5]);// undefined

// we can access the last value of a string guaranteed
// * we subtract one to account for index
console.log(animal[animal.length - 1]);// s
// were are saying find the length of the string; - 4 subtract 1 = 3
// and index into the animal variable at index 3
// animal[3] = 's'

// console.log('cats'[3]);// s

// Strings Methods
// .indexOf
// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.
// ! Always to go to mdn

let animal2 = 'rhino';

console.log(animal2.indexOf('r'));// 0
console.log('rhino'.indexOf('r'));// 0
console.log(animal2[0]);// r

console.log(animal2.indexOf('h'));//  1
console.log(animal2.indexOf('i'));//  2
console.log(animal2.indexOf('z'));//  -1

console.log(animal2.indexOf('R'.toLowerCase()));//  0
// console.log('Rhino'.indexOf('R'));//  0

console.log(animal2.indexOf('R') === -1);// true

// Concatenation
let word1 = 'whiteboards';
let word2 = 'remarkable';

let res = word1 + ' are ' + word2;
console.log(res);// whiteboards are remarkable

// alt 1
console.log(word1.concat(' are ', word2));// whiteboards are remarkable
console.log(word2.concat(' are ', word1));

// alt 2
// string interpolation
// template literal - ``;
// embedded expressions - ${<expression>}

console.log(`${word1} are ${word2}`);// whiteboards are remarkable
