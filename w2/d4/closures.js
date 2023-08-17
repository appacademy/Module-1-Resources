/*



  Closures!

  What is a closure?
    * A closure is the combination of a function and the lexical environment within which the function was declared
    * A closure is when an inner function uses or changes, variables of an outer function
    * The inner function is closing over the outer function

  Basic closure rules
    * Closures have access to any variable within its own scope as well as any outer function scopes when they are declared
    * A closure will keep reference to all the variables names and where they are defined even if the outer function has returned

  Advantages of closures
    * private state
      ** data encapsulation
    * security
    * currying

  Disadvantages of closure?
    * Memory Intensive - variables are not garbage collected because they are stored in the lexical environment

  Lexical Environment
    * anytime a function is defined, a lexical environment is created
    * consists of all the variables defined and where they were defined

*/

// Example 1
// *  We can access the outer function's variables from the inner function
function pizzaMaker(food) {
  let order = "Id like a pizza with ";

  // inner function
  // * oven function closing over the pizzaMaker function
  function oven() {
    return order + food;
  }

  // * return a function call; not a function itself
  return oven();
}

// console.log(pizzaMaker("cheese")); // Id like a pizza with cheese


// Example 2
// * Access and change the variables of the outer function
function groceryList(list){

  function addItem() {
    list.push('ice cream')
  };

  // * invoke addItem
  // * note the list has been mutated from within in the inner function
  addItem();
  return list;
}
// console.log(groceryList(['milk','eggs']));//[ 'milk', 'eggs', 'ice cream' ]




function elephantCollector() {
  let elephants = ['dumbo'];

  // return true;
  return function inner(name) {
    // console.log(name);// undefined
    elephants.push(name);
    return elephants;
  };

}


// console.log(elephantCollector);// [Function: elephantCollector]
// console.log(elephantCollector());// [Function: inner]

// console.log(elephantCollector()());// [ 'dumbo', undefined ]
// we storing  a function that is a return value in a variable
let elephantParade1 = elephantCollector();

// console.log(elephantParade1);// [Function: inner]

// no argument passed
// console.log(elephantParade1());// [ 'dumbo', undefined ]

// * this is where you would pass the argument to the inner func
// * because elephantParade is a variable that store the return value of elephantCollector
// * that return value being the inner function
// console.log('private state 1 => ',elephantParade1('goober'));// [ 'dumbo', 'goober' ]

// console.log(elephantCollector()('goober'));// [ 'dumbo', 'goober' ]


// We can create another private state
let elephantParade2 = elephantCollector();

// console.log(elephantParade2);// [Function: inner]

// console.log('private state 2 => ',elephantParade2('brandon'));// [ 'dumbo', 'brandon' ]



// Emulate private functions and variables


// An advantage of closures is that we can emulate private functions and variables
// * By creating private environments; we are able to protect variable names as well as create different states to run separate logic in
function createCounter() {
  // both inner functions will have a starting count of 0
  let count = 0;

  return function () {
    count++;
    return count;
  };
}


// Create two separate private states

// show you can do this,
console.log(createCounter()());

// * private state 1
let counter1 = createCounter();
console.log(counter1);// anon function

// * invoke our inner function stored in counter1
counter1();// 1
console.log(counter1());// 2

// Each counter variable has its won lexical environment
// * We will have two separate environments
// * lexical environment is created when the function is defined

// * private state 2
let counter2 = createCounter();
console.log(counter2);// anon function
console.log(counter2());// 1
console.log(counter2());// 2



// return function - would return the function itself
// return function() - would return the return value of the function
