/*


  Strings
    * Strings are delineated with "", or '', or ``

*/

// print some strings to the terminal
console.log("What is the most used language in programming?"); // profanity

// Strings holds characters
// Even a space is a character
// strings can be stored in variables
let string = " 234 cool string  ";
console.log(string); // cool string

// What if you need to use quotes?
let sentence = '  "Youre great!" said Tony!  ';
let sentence2 = "  'Youre great!' said Tony!  ";
let sentence3 = `  "Youre great!" said Tony!  `;

// use the escape character - backslash to ignore the next character
let sentence4 = '  "You\'re great!" said Tony!  ';
let sentence5 = `  "You're great!" said Tony!  `;

// String property
// * all strings have a length property
// * tell us how many characters are in the string
// lets evaluate an expression

console.log("brandon".length); // 7
let lastName = "laursen";
let lastNameLength = lastName.length;
console.log(lastNameLength); // 7
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

let animal = "catsasdfasdfsdfdsf";
console.log(animal.length); // 4

// we can index a string to get the value at that index
console.log("cats"[0]); // c
console.log(animal[0]); // c
console.log(animal[1]); // a
console.log(animal[2]); // t
console.log(animal[3]); // s
console.log(animal[4]); // undefined
console.log(animal[5]); // undefined

// we can access the last value of a string
console.log(animal[animal.length - 1]); // s
console.log("cats"[animal.length - 1]); // s
console.log(animal["cats".length - 1]); // s
console.log(animal[4 - 1]); // s
console.log(animal[3]); // s
console.log("cats"[3]); // s

// cant access negative index, you will get undefined
console.log(animal[-2]); // undefined

// Strings methods
// * .indexOf
// * The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
// ! Always go to mdn!

let animal2 = "rhino";

console.log(animal2.indexOf("r"));// 0
console.log(animal2.indexOf("h"));// 1
console.log(animal2.indexOf("o"));// 4
// can store this an in a variable
let index = 2;
console.log('index', index);// 2
console.log(animal2[index]);

// * find out what each variable evaluates too and plug them end till they are a single value
console.log("rhino"[2]);// i
console.log(animal2[index]);
// ^ these two have the same output, one uses expressions stored in variables; one does not

console.log(animal2.indexOf("z"));// -1
// we can use the output to compare and check if the value exists
console.log(animal2.indexOf("z") === -1);// true


// Concatenation
// * + addition operator
// When uses on a string, strings will be concatenated
// concat - to combine into one

let word1 = 'Whiteboards';
let word2 = 'remarkable';

// storing an expression in a variable
let res = word1 + ' are ' + word2;
console.log(res);// Whiteboards are remarkable
console.log(word1 + ' are ' + word2);// Whiteboards are remarkable

// alternative - .concat
// The concat() method concatenates the string arguments to the calling string and returns a new string.

console.log(word1.concat(' are ', word2));
let concatenatedWord = word1.concat(' are ', word2)
console.log(concatenatedWord);

// String interpolation
// template literal using - backtick ``
// We can embedded expression into our template literal - ${expression}

let interpolatedWord = `${word1.toUpperCase()} are ${word2}`;
console.log(interpolatedWord);// WHITEBOARDS are remarkable
