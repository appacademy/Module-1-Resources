/*


  Closures!
  - when a inner function uses or changes the values of the outer
  - when a parent function cant access data in the child, but the child can access the parent
  - closure have access to any variable within its own scope as well as any outer functions
  - a closure will keep reference to all its variables defined even if its outer function has returned
  - inner func closes over the outer func

  Advantages of closures?
    - private state
    - data encapsulation
    - currying

  Disadvantage
    - variable are not garbage collected because stored in the lexical environment
    - slow down code if you use too many

  Lexical environment
  - the lexical environment consists of any variables available within scope in which the closure was declared
  - anytime a function defined, a lexical env is created and attached to the function under the hood, this happens during parsing time

*/


//first example
//this shows that we have access to outer function variable from an inner func
function pizzaMaker(food) {

  let order = 'id like a pizza with ';

  function oven() {
    return order + food;
  };

  return oven();
};

// console.log(pizzaMaker('cheese'));

//second example
//show that we can access and modify variables of functions that are closed over
function groceryList(list) {

  let groceries = list;

  function addItem() {
    groceries.push('ice cream');
  };

  addItem();
  return groceries;
};

// console.log(groceryList(['milk', 'eggs']));//[ 'milk', 'eggs', 'ice cream' ]


//show that even after the function has returned we still have access to the outer funcs variables
//can return functions!!
//Why are functions first class objects
//1. stored in variable - last thursday
//2. passed as an argument - learnt yesterday
//3. can be returned from a function.


function elephantCollector() {

  let elephants = ['dumbo'];

  let myFunc = function(name) {
    elephants.push(name);
    return elephants;
  };

  return myFunc;
};

// console.log(elephantCollector);//[Function: elephantCollector]

//elephant state 1
let elephantParade = elephantCollector();
// console.log(elephantParade);//[Function: myFunc]
//invoking the inner function as passing argument
// console.log(elephantParade('babar'));//[ 'dumbo', 'babar' ]

//two different states

//elephant state 1
let elephantParade2 = elephantCollector();
// console.log(elephantParade2);
// console.log(elephantParade2('henry'));//[ 'dumbo', 'henry' ]
// console.log(elephantCollector()('babar2'));



//emulate private function and variables
function createCounter(){
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

//create a private state 1
const counter1 = createCounter();
// console.log(counter1)
console.log(counter1());
console.log(counter1());
console.log(counter1());


//create a private start 2
console.log('counter 2')
const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
// console.log(counter1 == counter2);//false
//
