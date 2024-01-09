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
// \ - escape character - ignore the next character
// \n - next line
// \t - tab
let quote = 'You\'re great say Tony!'

let quote2 = 'You"re great say Tony!'

let quote3 = "You're great say Tony!"

let quote4 = `You're great say Tony!`

//strings
let letter = 'a';
let sentence = 'this is a \n sentence \t!'

let multiLine = `
this
multi
line
`
// console.log(multiLine);
// console.log(sentence);

// Strings property
// * all strings have a length property
// * tell us how many characters their are
// * lets evaluate an expression
// console.log('brandon'.length);// 7

let lastName = 'laursen';
let lastNameLength = lastName.length;
//let lastNameLength = 7
// console.log(lastNameLength);// 7
// * track the variable names, find the value they hold!


// Indexing
// * Strings have indexes
// * indexes in programming start at 0!

/*
length of 4
VALUE - c a t s   undefined undefined
INDEX - 0 1 2 3    4    5
*/

let string = 'cats';
// console.log(string);

// console.log(string.length);

// we can index a string to get the value at that index
// console.log(string[0]);// c
// console.log(string[1]);// a
// console.log(string[2]);// t
// console.log(string[3]);// s
// console.log(string[4]);// undefined
// console.log(string[5]);// undefined

// we can access the last value of string
// console.log(string[string.length - 1]);// s
/*
string[string.length - 1]
'cats'[3]
*/

let randomString = 'afdljkashflkajsdf';
// console.log(randomString[randomString.length - 1]);// f
// * were basically saying, hey whats the length of the animal string, whatever it is subtract 1 and index and give me that value
// * we are evaluating an expression and logging it the terminal

// console.log(randomString[randomString.length - 1]);// f
// // console.log(randomString.length);//17
// console.log('afdljkashflkajsdf'[15]);// d
// console.log(randomString[randomString.length - 12 + 2]);// f
let name = 'brandon'
// let memory = ['b','r','a','n','d','o','n']

// string methods!
// * .indexOf method returns the first index at which a given element can be found an array, -1 if it is not present


let animal = 'rhino';
let array = [1,2,3,4,5]
/*
value - r h i n o undefined
index - 0 1 2 3 4 5

value - 1 2 3 4 5
index - 0 1 2 3 4
*/

// console.log('rhino'.indexOf('r'));// 0
// console.log(animal.indexOf('r'));// 0
// console.log(animal.indexOf('h'));// 1
// console.log(animal.indexOf('z'));// -1

// console.log(animal.indexOf('z') === -1);// true

let result = animal.indexOf('z')
// console.log(result);// -1

// -1 represented the absent of that character


// concatenation
let word1 = 'whiteboards';
let word2 = 'remarkable';

let combinedWords = word1 + ' are ' + word2;
// 'whiteboards are remarkable';
console.log(combinedWords);// whiteboards are remarkable


// alt concat
let combinedWords2 = word1.concat(' are ', word2);
// 'whiteboards are remarkable);
console.log(combinedWords2);

// template literals
// embeded expression/variables - ${<variable>};

let combinedWords3 = `${word1} are ${word2}`;
console.log(combinedWords3);// whiteboards are remarkable

console.log([1,2,3].concat([4,5,6]));// [ 1, 2, 3, 4, 5, 6 ]

let wordConca = 'str' + 4 ;
console.log(wordConca);// str4

const pi = 3.14;
var num1 = 12;



let person = {
  age: '30',
  speak: function (){ return 'hey'}
}
console.log(person.speak());
console.log(person.age);

//methods - verb - action to perform on a class
//property - adjective - describes the class
