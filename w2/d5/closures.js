/*

  Closures!
  What is a closure?
    - When a inner function uses or changes the values of the outer function
    - When a parent function cant access data in the child, but the child can access the parent
    - closure have access to any variable within its own scope as well as any outer function
    - A closure will keep reference to all its variables when its defined even if its outer function has return
    - inner func closes over the outer func

*/


//first examples
//this showing that we have access to outer function variable
//outer func
function pizzaMaker(food) {
  let order = 'id like a pizza with ';

  function oven() {
    return order + food;
  };

  return oven();
};

// console.log(pizzaMaker('cheese'))



//this is showing we can access and modify variables of functions that are closed over
function groceryList(list) {

    let groceries = list;

    function addItem() {
      groceries.push('ice cream')
    };

    addItem();

    return groceries;

};

// console.log(groceryList(['milk', 'eggs']))


//can return functions!
//function are first class objects
//1. can be store in a variable
//2. can be passed as an arg to a func
//3. can be returned from a function

function elephantCollector() {
  let elephants = ['dumbo'];

  let myFunc =  function(name) {
    elephants.push(name);
    return elephants;
  }
  return myFunc
};

// console.log(elephantCollector())//[Function (anonymous)]
//
let elephantParade = elephantCollector();

// console.log(elephantParade)//[Function (anonymous)]
// console.log(elephantParade('babar'));//[ 'dumbo', 'babar' ]
// console.log(elephantCollector()('at'))//

//emulate private functions and variables
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

//were able to create private states, that do not interact with each other
// console.log(createCounter())//[Function (anonymous)]
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());


const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
