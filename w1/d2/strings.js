/*


  Strings
    * Strings are delineated with "", or '', or ``

*/


// print some strings to the terminal
console.log('What is the most used language in programming?');// profanity

// Strings holds characters
// Even a space is a character
// strings can be stored in variables
let string = ' 234 cool string  ';
console.log(string);// cool string

// What if you need to use quotes?
let sentence = '  "Youre great!" said Tony!  '
let sentence2 = "  'Youre great!' said Tony!  "
let sentence3 = `  "Youre great!" said Tony!  `

// use the escape character - backslash to ignore the next character
let sentence4 = '  "You\'re great!" said Tony!  '
let sentence5 = `  "You're great!" said Tony!  `

// String methods
// * all strings have a length property
// * tell us how many characters are in the string
// lets evaluate an expression

console.log('brandon'.length);// 7
let lastName = 'laursen';
let lastNameLength = lastName.length;
console.log(lastNameLength);// 7
// * track the variable names, find the value they hold

// Indexing
// * Strings have indexes
// * indexes in programming start at 0
// * so we can use indexes to access a character

/*
cats
VALUE - c a t s undefined undefined
INDEX - 0 1 2 3    4          5
*/


let animal = 'catsasdfasdfsdfdsf';
console.log(animal.length);// 4

// we can index a string to get the value at that index
console.log('cats'[0]);// c
console.log(animal[0]);// c
console.log(animal[1]);// a
console.log(animal[2]);// t
console.log(animal[3]);// s
console.log(animal[4]);// undefined
console.log(animal[5]);// undefined

// we can access the last value of a string
console.log(animal[animal.length - 1]);// s
console.log('cats'[animal.length - 1]);// s
console.log(animal['cats'.length - 1]);// s
console.log(animal[4 - 1]);// s
console.log(animal[3]);// s
console.log('cats'[3]);// s

// cant access negative index, you will get undefined
console.log(animal[-2]);// undefined

