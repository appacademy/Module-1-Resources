// IIFE - Immediately Invoked Function Expressions

// KEEP THE GLOBAL NAMESPACE CLEAN

/*
  1. Declare a function
  2. Use immediately after
  3. Never going to use the function again
*/

let run = name => {
  console.log(`start the program, ${name}`);
}

run("Brad");

let results = ((name) => {
  return `start the program, ${name}`;
})("Brad");

console.log(results)