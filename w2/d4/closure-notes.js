
// Example 2: We can access and change the outer functions variables
// * This example is showing how were able to access and change the list variable from the outer function
function grocerylist(list) {
  function addItem() {
    list.push("and ice cream");
  }

  // * invoke addItem function
  // * note the changes are reflected in the list
  addItem();

  return list;
}

console.log(grocerylist(["milk", "eggs"])); // 'milk', 'eggs', 'and ice cream' ]

// Example 3: We can return a function and access the variables even after its returned
// * Functions are first class objects
// * They can be returned from a function
function elephantCollector() {
  let elephants = ["dumbo"];

  // * returning a named function
  // * this is what our elephantCollector function will evaluate too
  return function inner(name) {
    elephants.push(name);
    return elephants;
  };

  // * returning a anonymous function
  return function (name) {
    elephants.push(name);
    return elephants;
  };

  // * returning a function with a name
  function inner(name) {
    elephants.push(name);
    return elephants;
  }

  // * return the return value of calling inner
  return inner;

  // * return an arrow function
  return (name) => {
    elephants.push(name);
    return elephants;
  };
}
// * variables that holds outer function
console.log(elephantCollector); //[Function: elephantCollector]

// * so we can invoke that variable
console.log(elephantCollector()); //[Function (anonymous)]

// * a function evaluates to its return
// * the return value of elephantCollector is a anonymous function
// * we can store the return value in a variable called elephantParade
let elephantParade1 = elephantCollector();

// * this works! Everything is just an expression
console.log(elephantCollector()("brandon")); //this works!

// * invoke the variable that holds the returned function
console.log(elephantParade1("brandon")); //[ 'dumbo', 'brandon' ]

// * We can actually create private states
// * This would a second private state
let elephantParade2 = elephantCollector();

// * A separate lexical environment
console.log(elephantParade2("david")); //[ 'dumbo', 'david' ]

/*

  Two separate lexical environments
    1. One for elephantParade1
    2. Another for elephantParade2
    * The lexical environment is created the moment the function is defined; it will hold references to all the variables available to the function
    * By having two separate states; we can have two different functions with the same starting point

*/

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
