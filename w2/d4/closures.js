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


// example 1: we can access outer function variables
function pizzaMaker(food){

  let order = 'id like a pizza with ';

  //inner function
  // * closing over the outer function - pizzaMaker
  function oven(){
    return order + food;
  }

  // return the return value of calling oven
  return oven();
};

// console.log(pizzaMaker('cheese'));



// Example 2 -  we can access and change the outer function variables
function groceryList(list){

  function addItem() {
    list.push('and ice cream');

  };

  addItem();
  return list;
};


// console.log(groceryList(['milk','eggs']));



// Example 3 - we can return a function and access the variables even after its returned

function elephantCollector(){
  let elephants = ['dumbo'];

  return function inner(name) {
    elephants.push(name);
    return elephants;
  }

};

// console.log(elephantCollector);// [Function: elephantCollector]

// console.log(elephantCollector());// [Function: inner]

let elephantParade1 = elephantCollector()
// console.log(elephantParade1);//[Function: inner]
// console.log(elephantParade1());//<--- [ 'dumbo', undefined ]
console.log(elephantParade1('babar'));// [ 'dumbo', 'babar' ]
// console.log(elephantCollector()('babar'));//[ 'dumbo', 'babar' ]


let elephantParade2 = elephantCollector();
console.log(elephantParade2);// [Function: inner]
console.log(elephantParade2('frank'));//<--- [ 'dumbo', 'frank' ]
