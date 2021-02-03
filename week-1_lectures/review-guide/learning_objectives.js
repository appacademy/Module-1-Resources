// W1D2 - Control Flow and Array Lesson Learning Objectives

/*
1. Define a function that accepts a sentence string and two words as args.
The function should return a boolean indicating if the sentence includes either word.

Can I write a function that accepts...?
*/
function includesWords(sentence, word1, word2) {
  const words = sentence.split(' ');
  return words.includes(word1) || words.includes(word2);
}

console.log(includesWords('hello world!', 'world', 'ello')); // false
console.log(includesWords('hello world!', 'world!', 'ello')); // true
console.log(includesWords('hello world!', 'world!', 'hello')); // true
console.log(includesWords('hello world!', 'whatever', '28')); // false
console.log(includesWords('hello world!', 'orld', 'ello')); // false

/*
2. Identify a pair of mutually exclusive conditions

Do I know what mutually exclusive conditions are?
Can I use mutually exclusive conditions?
*/

/*
3. Given a for loop, translate it into a while loop, and vice - versa
*/

/*
4. Write a function that iterates through a provided string argument
*/

/* 
5. Given a description of pig latin, write a function that takes in a string 
argument and utilizes String#slice to translate the string into pig latin.
*/

/* 
6. Write a function that takes in an array of words and a string as arguments 
and returns a boolean indicating whether the string is located inside of the array.
The function must use Array#indexOf.
*/

/*
7. Define that an array literal is an ordered list of values defined by using 
bracket and individual values are read by indexing.
*/

/* 
8. Prevent code that can throw an exception from causing the program to crash. 
(W1D5 - Throwing Errors)
*/

// W1D3 - Intermediate Functions Lesson Learning Objectives

// Identify that strings are immutable and arrays are mutable
// Define a function using both function declaration and function expression syntax
// Utilize Array#push, #pop, #shift, #unshift to mutate an array
// List the arguments that can be used with Array#splice
// Write a function that sums up elements of an array, given an array of numbers as an argument
// Utilize Array#forEach, #map, #filter, #reduce in a function
// Define a function that takes in an array of numbers and returns a new array containing only the primes
// Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array
// Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements
// Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
