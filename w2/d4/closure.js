

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

// first example
// this our inner func has access to the outer funcs variables
// showing we have access to the outer function variables
// outer func pizza maker
function pizzaMaker(food) {
  let order = "id like a pizza with ";

  //inner func oven
  function oven() {
    return order + food;
  }

  return oven();
}

console.log(pizzaMaker('cheese'))//id like a pizza with cheese

// closing over the outer func, we are able to access and modify the variables of the outer func within the inner func
// showing that we can change the outer funcs variables
function grocerylist(list) {
  let groceries = list;

  function addItem() {
    groceries.push("and ice cream");
  }

  addItem();
  return groceries;
}

console.log(grocerylist(["milk", "eggs"])); // 'milk', 'eggs', 'and ice cream' ]

// can return a function
// functions are first class objects!
// they can be returned from a function
// showing that even after the function has returned we
// we still have access to the outer funcs variables
function elephantCollector() {
  let elephants = ["dumbo"];

  return function (name) {
    elephants.push(name);
    return elephants;
  };
}

console.log(elephantCollector); //[Function: elephantCollector]
console.log(elephantCollector()); //[Function (anonymous)]
// a function evaluates to its return
// if the return value is a function we can store it in a variable and invoke it

// private state 1
let elephantParade = elephantCollector();
console.log(elephantCollector()("brandon")); //this works!
console.log(elephantParade("brandon")); //[ 'dumbo', 'brandon' ]

// private state 2
let elephantParade2 = elephantCollector();
console.log(elephantParade2("david")); //[ 'dumbo', 'david' ]

//emulates private functions and variables
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

//create two separate private states

//show you can do this,
console.log(createCounter()());

//private state 1
let counter1 = createCounter();
console.log(counter1); //anon function
counter1();
console.log(counter1());

// each counter variable has its won lexical environment
// lexical environment is created when the function is defined

// another private state
let counter2 = createCounter();
console.log(counter2);
console.log(counter2());
console.log(counter2());

// return function - would return the function itself
// return function() - would return the return value of the function


function sundaeOrder() {
  let toppings = ["hot fudge"];
  return function (topping) {
    toppings.push(topping);
    let bowl = "A bowl of ice cream with ";
    return bowl + toppings.join(" and ");
  };
}

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")); // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")); // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")); // => "A bowl of ice cream with hot fudge and banana"

console.log(sundae("strawberries"));


// alt solve
function sundaeOrder() {

  let string = "A bowl of ice cream with hot fudge and nuts";

  return function (topping) {

    string = string + " and " + topping;
    return string;
  };
}
