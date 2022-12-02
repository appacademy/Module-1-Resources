/*



  Closures!
    what is a closure?
      - When a parent function cant access data in the child, but the child can access the parent
      - a closure when in inner function uses or changes variables in an outer function
      - Closure have access to any variable within its own scope, as well as any outer function
      - A closure will keep reference to all its variables when its defined even if the outer function has returned
      - inner func closes over the outer func

*/

//first example
//this our inner func has access to the outer funcs variables
//outer func pizza maker
function pizzaMaker(food) {
  let order = 'id like a pizza with '

  //inner func oven
  function oven() {
    return order + food;
  }

  return oven();
}

// console.log(pizzaMaker('cheese'))//id like a pizza with cheese

//closing over the outer func, we are able to access and modify the variables of the outer func within the inner func
function grocerylist(list) {
  let groceries = list;

  function addItem() {
    groceries.push('and ice cream')
  }

  addItem();
  return groceries;
}

// console.log(grocerylist(['milk','eggs']))// 'milk', 'eggs', 'and ice cream' ]

//can return a function
//functions are first class objects!
//they can be returned from a function

function elephantCollector() {
  let elephants = ['dumbo'];

  return function(name) {
    elephants.push(name);
    return elephants;
  }
}

// console.log(elephantCollector)//[Function: elephantCollector]
// console.log(elephantCollector())//[Function (anonymous)]
//a function evaluates to its return
// if the return value is a function we can store it in a variable and invoke it
let elephantParade = elephantCollector();
console.log(elephantCollector()('brandon'))//this works!
// console.log(elephantParade('brandon'));//[ 'dumbo', 'brandon' ]

// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('david'))//[ 'dumbo', 'david' ]


function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

//own private state
console.log(createCounter()())
// let counter1 = createCounter();
// console.log(counter1);
// counter1();
// console.log(counter1())

//another private state
// let counter2 = createCounter();
// console.log(counter2)
// console.log(counter2());
// console.log(counter2())
