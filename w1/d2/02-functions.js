// Functions
// Functions are blocks of code written to perform certain tasks. We'll be
// writing lots and lots of functions as the course goes on

// To write a function, we use keyword function, then provide a name for our
// function, followed by parentheses and curly braces. Below is an example of
// an empty function
function blankFunc () {};


// Here's something a bit more involved:
function helloWorld () {
  console.log("Hello, World!");
};
// To make use of our function, we need to call or invoke it. We do that by
// writing the function's name followed immediately by a pair of parentheses
helloWorld();


// We can also set up our functions with parameters, which we can think of as
// placeholder variables for any arguments we may supply to our function. Here
// we'll define a function that has a parameter name. When we invoke our
// function, we'll supply a string as an argument.

function printName (name) {
  console.log("Hello There");
  console.log(name);
};

printName("General Kenobi");
printName("Tom Holland");

// The above functions accomplish a task, but are pretty self contained blocks.
// What if we needed to get information determined within our function to
// somewhere outside of our function? We'll use keyword return to specify what
// should come back from our function.

// return will accomplish two thing:
// - "returns" some value to the point of invocation (we we called our function)
// - Immediately halts the operation of our function
// Let's explore below

// This function has two parameters, num1 and num2. It will return the result of
// adding those parameters together.
function sum (num1, num2) {
  // console.log(num1 + num2);
  return num1 + num2;
}

// We're going to save our return value in a variable named response
let response = sum(3,5);
// Let's log our response to check if we've gotten the right answer(should be 8)
console.log(response);

// Thinking back to yesterday, what output will we see if we run the below code?
console.log(8 === sum(3,5));