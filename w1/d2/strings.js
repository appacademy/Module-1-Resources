/*


  What are strings?
  * Strings are delineated with "", or '' or `` which we learn next week
  * Collection of characters in memory

  Wrapper objects
  * When we treat a primitive value like it was an object (i.e. by accessing properties and methods), JavaScript creates, under the hood, a wrapper to wrap this value and expose it as an object. The JS engine never reuses a wrapper object, giving them to the garbage collector right after a single use.

*/

// console.log("why did the blind man fall into the well?");
// console.log("he couldnt see that well!");
// console.log(`string interpolation`);

let name = "brandon";
console.log(name); // brandon

// string methods
// length property
console.log("brandon".length); // 7
console.log(name.length); // 7

// Indexing
// strings have indexes
// indexes in programming start at 0

/*
VALUE - c a t s undefined
INDEX - 0 1 2 3    4
LENGTH - 4
*/
let animal = "cats";
console.log(animal.length);
// animal = 'cats'[1]
// console.log(animal[0]);// c
// console.log(animal[1]);// a
// console.log(animal[2]);// t
// console.log(animal[3]);// s
// console.log(animal[4]);// undefined

// how to access the last value of a string?
// cats[3] = s
// console.log(animal[animal.length - 1]);// s
// console.log(animal[animal.length]);//
//cats[4] = s

// console.log(animal[animal.length - 2]);// t
//cats[2] = t
let num = 3; //

// console.log(animal[animal.length - num]);// a
//cats[1]

// string have methods!
// .indexOF

let animal2 = "rhrino";

// console.log(animal2.indexOf('r'));// 0
// console.log(animal2.indexOf('h'));// 1
// console.log(animal2.indexOf('o'));// 4
// console.log(animal2.indexOf('z'));// -1

let result = animal2.indexOf('r',1);
// console.log(result);// 2

// concatenation
// string interpolation
let word1 = "whiteboards";
let word2 = "remarkable";

let sentence = word1 + " are " + word2 + "!";
console.log(sentence);

// ${whiteboards} - embedded expressions/variable
let sentence2 = `${word1} are ${word2}`
// console.log(sentence2);

//.concat
let res = word1.concat(' are ', word2);
console.log(res);
