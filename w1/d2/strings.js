/*

Strings
String delinated by
  -'' single quotes
  -"" double quotes
  -`` backticks

*/

console.log('Hello world');
let name = 'brandon';
console.log(name);

//strings can be stored in a variable
//strings can be letters, sentences, word

//quotes
let newSentence = 'hey this is a sentence';
//quote with quote
let newSentence2 = '"this is a quote"'
//quote withing quotes within quotes
let newSentence3 = '"You\'re great!" said Tony!'

//strings methods
//all strings have a length property
//.length, we are able see how many characters a string has

let firstName = 'brandon';

//what to know how many letter are ion this string
//we use .length;
console.log(firstName.length)//7
console.log('brandon'.length)//7

//indexing
//strings have indexes
//in programming, indexes start at 0;
//Each letter is assoicated with a specific index

/*
C A T S
0 1 2 3
*/

let animal = 'cats';
// console.log(animal[0])//c
// console.log(animal[1])//a
// console.log(animal[2])//t
// console.log(animal[3])//s

//how do we acces the last indexes value
console.log(animal.length)// 4 - 1 = 3
console.log(animal[animal.length - 1])// s
console.log(animal[3])//s
console.log(animal[-1])//undefined,
// if(!array.length)

//string method
//.indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

let animal2 = 'rhino';

console.log(animal2.indexOf("r"))//0
console.log(animal2.indexOf('i'))//2
//with a letter that doesnt exist, we know itll return -1
console.log(animal2.indexOf('x'))// -1
console.log(animal2.indexOf(1))// -1

//concatenation
let firstName2 = 'brandon';
let title =  'software engineer';

console.log(firstName2 + title)//brandonsoftware engineer
console.log(firstName2 + ' ' + title);//brandon software engineer

//.concat
//The concat() method concatenates the string arguments to the calling string and returns a new string.
//go to mdn anytime you see a new method

console.log(firstName2.concat(' is a ', title));//brandon is a software engineer
console.log(firstName2.concat(title));

//the order in which you concat matters!
console.log(title[1].concat(firstName2[1]));//software engineerbrandon
