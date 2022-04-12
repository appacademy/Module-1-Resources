// Strings

// We can define strings with either double or single quotes:
console.log('hello' === "hello");
// Javascript will see those strings as identical 

// We can choose whether to use double or single quotes based on what we
// anticipate holding in our strings. 
console.log("What's Up?");
console.log('"Join a bootcamp", they said. "It will be fun", they said.')
// Sometimes no amount of being clever can help us avoid needing to use the type
// of quote used to define our strings. In those cases, we can use the escape
// character to tell JS to treat what follows as normal text
console.log('What\'s Up?');

// We can store strings in variables, too
let greeting = "hello";
// All strings have a length property, that lets us know how many characters 
// make up our string
console.log(greeting.length);
console.log("hello".length);
console.log("".length);


// Index
// The index of any string will always begin at 0. To make a complicated story
// simple, it saves space to start counting at 0.

/*
  Length of 4
  C A T S
  0 1 2 3
*/

// We can use a string's indices to take a closer look at all of the characters
// in our string
let animal = "CATS";
console.log(animal[0]); // C
console.log(animal[1]); // A
console.log(animal[2]); // T
console.log(animal[3]); // S
console.log(animal[animal.length - 1]); // S
console.log(animal[3245234]); // undefined


// Index of
// When we have a string and want to check where a certain character or 
// substring shows up, we can use the indexOf method to find the index where it 
// occurs. If character or substring does not occur, the method returns -1
let playoffs = "playoffs";

console.log(playoffs.indexOf("a"));
console.log(playoffs.indexOf("off"));
console.log(playoffs.indexOf("Sabres"));
console.log(playoffs.indexOf("f"));

// You may have noticed that indexOf returns the first instance of our search
// string. How can we find the index of the second result? indexOf can handle a
// second, optional argument. We can specify an index to begin searching from
let first = playoffs.indexOf("f");
console.log(playoffs.indexOf("f", first + 1));

// String concatenation
// Sometimes you may have multiple strings you'd like to tie together into a
// single string. We can use the addition operator + to concatenate strings
// together and form a single string
let firstName = "Bill";
let title = "Module 1 Lead";

let result = firstName + " is the " + title

console.log(result);