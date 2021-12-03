// IIFE - Immediately Invoked Function Expressions

// Keep the global namespace clean

/*
  1. Declare a function
  2. Use immediately after
  3. Never going to use the function again
*/

let run = name => {
  console.log(`Starting the program, ${name}!`);
};

run("Nick Def Not Jeff");


const result = (name => {
  return `Starting the program, ${name}!`
})("Jeff is cooler than Nick");

console.log(result);