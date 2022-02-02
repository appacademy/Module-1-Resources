// IIFE - Immediately Invoked Function Expressions

// Keep the global namespace clean

/*
  1. Declare a function
  2. Use immediately after
  3. Never want to use the function again
*/

const run = name => console.log(`Start the program, ${name}.`);

run("Caleb");

(name => console.log(`Start the program, ${name}.`))("Caleb");