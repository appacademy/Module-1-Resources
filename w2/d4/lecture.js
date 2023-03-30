/**
 * Three types of scope!
 * 
 * 1. Local/function
 *    - variables available within a function
 *    - variables declared inside the function
 *    - variables already declared when the function was defined
 *    - function () {}
 * 
 * 2. Block
 *    - a block of code
 *    - for () {}
 *    - if () {}
 *    - while () {}
 * 
 * 3. Global
 *    - represented by the window/node global object
 *    - is available to the entire program/file
 *    - AVOID creating variables in global scope
 * 
 * 
 * Scope Chaining:
 *    - JS scope chain looks for the nearest variable that has the name we need'
 *    - a key scoping in js, inner scope can access variables of outer scope
 *    - outer scope cannot access the variables of the inner scope
 * 
 */

let name = 'global' //global scope

function myFunc() {
  let name = 'function/local' //function scope
  console.log(name)

  if (true) {
    let name = 'block1' //block scope
    console.log(name)

    for (let i = 0; i < 1; i++) {
      let name = 'block2' //block scope
      console.log(name)
    }
    
  }
}

// myFunc();
// console.log(name)


/**
 * Variable declarations
 * 
 * 1. let - what we've been using
 *    - block scoped
 *    - can be reassigned
 *    - cannot redeclare
 * 
 * 2. const - stands constant
 *    - block
 *    - cannot be reassigned
 *    - cannot be redeclared
 * 
 * 3. var
 *    - function
 *    - can be reassigned or redeclared
 * 
 * 4. (none/no keyword)
 *    - global
 *    - any variable that is declared in global scope will be globally available
 *    - any variable that is declared WITHOUT let, const, or var will be globally available
 * 
 * * Hoisting!
 *  - Hoisting if when you have a variable assigned in a scope
 *    but only the variable declaration is raised
 */

// let variable; //declaration
// variable = "some value" //assignment
// let variable2 = "more value" //initialization

/**
 * When var is hoisted, only declaration hoisted
 * default value is undefined
 * No error when hoisting a variable declared with var because it has a default value :)
 */
// console.log(varName)
// var varName = 'brandon'

/**
 * let does not have a default value
 * therefore, when hoisted, an error is thrown
 * ReferenceError: Cannot access 'letName' before initialization
*/
// console.log(letName)
// let letName = 'brandon'

/**
 * const does not have a default value
 * therefore, when hoisted, an error is thrown
 * ReferenceError: Cannot access 'constName' before initialization
*/
// console.log(constName)
// const constName = 'brandon'

/**
 * Where are the values before they are hoisted when using let and const?
 * Temporal dead zone! where variables exist before they are accessed
 */

/**
 * Read/Watch: 47 mins
  - Refactoring Variables
  - JavaScript Variables Quiz
  - Declaring Variable Free Response
  - Scope Debugging
  - Scope Debugging Quiz
  - Scope Quiz
  - Take a break!
 */

/**
 * CLOSURE
 * what is closure?
 *  - when a parent function cant access a data in the child function, BUT
 *    child function can access data in the parent function
 *  - when an inner function uses or changes variables in an outer function
 *  - inner function has access to any variables within its own scope, AND
 *    any variables in the outer function
 * 
 *  - a closure will keep reference to all its variables when its defined,
 *    EVEN IF the outer function has returned
 *  - inner function CLOSES OVER the outer function
 * 
 *  - the lexical environment consists of any and all variables within the scope in which the closure was declared (local inner scope, outer function scope, and global scope)
 *  - anytime a func is declared, a lexical environment is, in essence, created and attached to the function
 *  - this is how data is preserved

 */

/*
our inner func has acces to the outer funcs variables
*/
function pizzaMaker(toppings) {
  let order = "I'd like a pizza with ";

  //inner func :O
  function over(){
    return order + toppings
  }

  return over();
}
// console.log(pizzaMaker('cheese'))

/*
our inner func are able to access AND MODIFY the variables of the outer func
 */
function groceryList(list) {
  let groceries = list;

  function addGrocery() {
    groceries.push('and goldfish')
  }

  addGrocery()
  return groceries
}
// console.log(groceryList(['turtle chips', 'thin mints']))

/*
access, modify, and RETURN A FUNC
bc funcs are first class objects :)
*/
function elephantCollector() {
  let elephants = ['dumbo']

  return function(name) {
    elephants.push(name)
    return elephants
  }
}

// let parade = elephantCollector();
// console.log(parade) //anon func
// console.log(parade('whiskers')) //array of dumbo and whiskers
// console.log(parade('elenore')) //array of dumbo, whiskers, and elenore


function createCounter(){
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

console.log(createCounter()()) //1
console.log()

console.log(createCounter()()) //1
console.log()

//creating a separate lexical environment
let counter1 = createCounter()
console.log(counter1()) //1
console.log(counter1()) //2 because it refers to the same lexical environment tied to counter

console.log()
let counter2 = createCounter()
console.log(counter2()) //1
console.log(counter2()) //2
console.log(counter2()) //3 because it refers to the same lexical environment tied to counter2

console.log()
console.log(counter1()) //3 bc it refers to lex.enviro. tied to counter1