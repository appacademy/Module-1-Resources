/*

  What are strings?
  * Strings are delineated with "", or '' or `` which we learn next week
  * Collection of characters in memory

  Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

  * https://programmingwithmosh.com/javascript/javascript-wrapper-objects/

*/

// console.log('single quotes')
// console.log("double quotes")
// console.log(`backticks`);

let newString = "cool string";
let sentence = '"you\'re great!" said Tony ';

// String have methods
// properties
// let name = 'brandon';
// console.log(name.length);//7
// let nameLength = name.length;
// console.log(nameLength);// 7

//indexing
// * string has indexes
// * indexes in programming start at 0

/*
length of 4
VALUE -  c a t s  undefined
INDEX -  0 1 2 3   4    5

*/

let animal = "cats";
// console.log(animal);
// console.log('length', animal.length);
// // index into a string
// console.log(animal[0]);//c
// console.log(animal[1]);//a
// console.log(animal[2]);//t
// console.log(animal[3]);//s
// console.log(animal[4]);// undefined

console.log(animal[animal.length - 1]);// s
// console.log('cats'[3]);// s

let animal2 = "rhino";
console.log(animal2);

// log the expression
console.log(animal2.indexOf("h")); // 1
//or store the expression in a variable and log that
let index = animal2.indexOf("i");
console.log(index); // 2
console.log(animal2[index]); // i

// concat
let word1 = "whiteboards";
let word2 = "remarkable";

let res = word1 + " are " + word2;
console.log(res);// whiteboards are remarkable

// alt - concat

let res2 = word1.concat(' are ',word2)
console.log(res2);// whiteboards are remarkable


// String Interpolation
// template literal - ``

let res3 = `${word1} are ${word2}`;
// let res3 = `${whiteboards} are ${remarkable}`;
console.log(res3);// whiteboards are remarkable


let sentence2 = `Hey did you know ${word1 + ' are ' + word2} ${4  * 3} ${word1.indexOf('w')}`
console.log(sentence2);
// Hey did you know whiteboards are remarkable
