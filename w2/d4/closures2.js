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



/*

  Two separate lexical environments
    1. One for elephantParade1
    2. Another for elephantParade2
    * The lexical environment is created the moment the function is defined; it will hold references to all the variables available to the function
    * By having two separate states; we can have two different functions with the same starting point

*/

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
