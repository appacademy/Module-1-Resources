/*

  Closures!
    What is a closure?
      - When a parent function cant access data in the child, but the child can access the parent
      - a closure when an inner function uses or changes variables in an outer function
      - Closures have access to any variable within its own scope, as well as any
        outer functions scope when they are declared
      - A closure will keep reference to all its variables when its defined even if the outer function
        has returned
      - inner func closes over the outer func

*/

//first example
//we have access to the outer function variables
//outer func pizzaMaker
function pizzaMaker(food) {
  let order = 'Id like a pizza with ';

  //inner func over
  function oven() {
    return order + food;
  }

  return oven();
}

// console.log(pizzaMaker('cheese'));//Id like a pizza with cheese


//second example
//show that we can change the variables of the outer function
function groceryList(list) {
  let groceries = list;
  // console.log(list)
  function additem() {
    groceries.push('and ice cream')
  }

  additem();
  return groceries;
}
// console.log(groceryList(['milk','eggs']))//[ 'milk', 'eggs', 'and ice cream' ]

function elephantCollector() {
  let elephants = ['dumbo'];

  return function(name) {
    elephants.push(name);
    return elephants;
  }
}

//store the lexical env info
const elephantParade = elephantCollector();
// console.log(elephantParade);//[Function (anonymous)]
console.log(elephantParade('Obi'));
console.log(elephantParade('Gerald'));

const elephantParade2 = elephantCollector();
// console.log(elephantParade2('brandon'));
// console.log(elephantParade2('drew'));


function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

let counter1 = createCounter();
console.log(counter1);//function
console.log(counter1());//1
console.log(counter1());


let counter2 = createCounter();
console.log(counter2);//function
console.log(counter2());
console.log(counter2());
