
/*

  Closures

  What is a closure?
    * A closure is the combination of a function and the lexical environment within which that function was declared.
    * A closure is when an inner function uses, or changes, variables in an outer function

  Basic closure rules
    * Closures have access to any variables within its own, as well as any outer function's, scope when they are declared.
    * A closure will keep reference to all the variables when it was defined even if the outer function has returned.

  Advantages of closures
    * private state
      ** data encapsulation
      ** security
    * currying

  Disadvantages to closures
    * Memory intensive - variables are not garbage collected because they are stored in the lexical environment

  Lexical environment
    * Anytime a function is defined a lexical environment is created
    * Lexical environments consist of all the variable defined and where they were defined


*/


// we can access the outer function variables
// lexical env
/* <pizzaMaker>: {
   food: 'mushrooms',
   order: 'Id like a pizza with',
   oven: [Function],
  <oven>: {
    food: 'mushrooms',
    order: 'Id like a pizza with',
  }
}

*/
function pizzaMaker(food) {

  let order = 'Id like a pizza with ';

  function oven() {
    return order + food;
  };

  return oven();// we are returning the return value of invoking the function

};
console.log(pizzaMaker('mushrooms'));
// console.log(pizzaMaker('mangos'));
