/*



  Closures

  What is a closures?
    * A closure is the combination of a function and the lexical environment within which that function was declared
    * A closure is when inner function, uses, or changes variables in an outer function

  Basic closures rules
    * Closures have access to any variables within its own, as well as any outer function scopes when they are declared/defined
    * A closure will keep a reference to all the variables when its defined even if the outer function has returned

  Advantages of closures!
    * Private state
      ** data encapsulation
      ** security
    * currying

  Disadvantages of closures
    * Memory Intensive - variables not garbage collection because they are stored in the lexical environment

  Lexical Environment
    * Anytime a function is defined a lexical environment
    * Consists of all the variables defined and where they defined

*/

// Example 1: We can access the outer functions variables
function pizzaMaker(food) {
  let order = "Id like a pizza with";

  // inner function
  // * what closes over the outer function
  function oven() {
    return order + " " + food;
  }

  // * return a function call; not a function itself
  // * return the return value of first invoking ove
  return oven();
}

console.log(pizzaMaker("cheese")); // Id like a pizza with cheese
