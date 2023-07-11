/*


  Strings
  - strings by delineated by
   "" - double quotes
   '' - single quotes
   `` - backticks - learn week 3

*/

// strings can hold words, letters, sentences, ANY character,
// a space is a character
console.log('hello world');
console.log(" we can have an entire sentence ");

// we can store strings in a variable
let newString = "What did the router say to the doctor?";// it hurts when ip

// console.log(newString); //What did the router say to the doctor?

// what do we do when we need a string with quotes?
// alternate the quotes
let sentence1 = ' "This is a quote" ';
let sentence2 = " 'this is a quote'  ";

// quote within quote
// alternate quotes, and use escape character
let sentence3 = '   "You\'  re great!" said T\\ony   '
let sentence4 = `   "You'  re great!" said T\\ony   `; // can use backtick

// you can use the escape character to ignore the character so it not treated as the start/end of a string
// if you want use the escape character(\) in your sentence


// strings have methods and properties
// all strings have a length property
// tell us how long a string is, how many characters are in a string
console.log('brandon'.length);// 7
// so we re logging, how long the string is

let lastName = 'laursen';
console.log(lastName.length);// 7
// there are 7 characters in the string that the variable holds

// string have indexes
// indexes in programming start at 0
/*
'CATS'
length of 4
value -  C A T S undefined
index -  0 1 2 3     4
*/

let animal = 'CATS';
console.log(animal.length);// 4

// we can index a string to get a value
console.log(animal);

// were are saying, print for me the character at index 0 in animal variable
console.log(animal[0]);//  C
console.log(animal[1]);//  A
console.log(animal[2]);//  T
console.log(animal[3]);//  S
// we will get undefined if we try to access an index that does not exists
console.log(animal[4]);// undefined
console.log(animal[1 + 1]);// T

// can check the last element of a string guaranteed
console.log(animal[3])
console.log(animal.length);// if we don't subtract 1 we will go one index too far
console.log(animal[animal.length - 1]);
// is find the length of the string, subtract one to account for the one off index
// and then give to us dynamically the last index
// 3

//console.log(animal['cats'.length - 1]);
//console.log(animal[4 - 1]);
//console.log(animal[3]);
//console.log('S');


let animal2 = 'rhino';

// strings also have methods!
// .indexOf - got to mdn
// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

console.log(animal2.indexOf('r'));// 0
//does the string of 'r' exists in the animal2 string, if it does, return to me the index
console.log(animal2.indexOf('h'));// 1
console.log(animal2.indexOf('r'));// 0
console.log(animal2.indexOf('z'));// -1
//'z' does not exists within the animal2 string, so return -1

// can either store a expression in a variable or pass the expression directly
let result = animal2.indexOf('r');
// console.log(result); // 0
// we can store the return value of a method in a variable


// concatenation - combining into one
// + - also concatenates if used on a string

let word1 = 'Whiteboards';
let word2 = 'remarkable';

let res = word1 + ' are ' + word2;
console.log(res);// Whiteboards are remarkable

// .concat
// also combines two strings/arrays into one

console.log(word1.concat(' are ', word2)); // Whiteboards are remarkable

console.log('first ' + [1,2,3])//first 1,2,3
console.log('10' + 12);// 1012
console.log('10' - 8);// 2
