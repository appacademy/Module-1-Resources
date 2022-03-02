// IIFE - Immediately Invoked Function Expressions

// Keep the global namespace clean

/*
  1. Declare a function
  2. Use immediately after
  3. Never going to use the function again
*/

(name => {
  console.log(`start the program, ${name}`);
})("Bill");