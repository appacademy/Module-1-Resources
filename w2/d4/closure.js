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

// we can access the outer function variables
// lexical env
/* <pizzaMaker>: {
   food: 'mushrooms',
   order: 'Id like a pizza with',
   oven: [Function],
  <oven>: {
    food: 'mushrooms',
    order: 'Id like a pizza with',
  }
}

*/
function pizzaMaker(food) {
  let order = "Id like a pizza with ";

  function oven() {
    return order + food;
  }

  return oven(); // we are returning the return value of invoking the function
}
// console.log(pizzaMaker('mushrooms'));
// console.log(pizzaMaker('mangos'));

/* <groceryList>: {
   list: ['bacon','mangos'],
   addItem: [Function],
  <addItem>: {
    list: ['bacon','mangos'],
  }
}
we can access and change the outer functions variables
*/
function groceryList(list) {
  function addItem() {
    list.push("ice cream");
  }

  addItem();
  return list;
}
// console.log(groceryList(['bacon','mangos']));// [ 'bacon', 'mangos', 'ice cream' ]

/* <>: {
   : ['bacon','mangos'],
   : [Function],
  <>: {
    : ,
  }
}

 we can return a function and access the variables even after its returned
*/
/*
  <elephantCollector>: {
    elephants: ['dumbo'];
    inner: <function>
    <inner>:{
       elephants: ['dumbo, undefined];
       name: undefined
    }
  }
*/
let name = "name";
let myFunc = () => "hey";

function elephantCollector() {
  let elephants = ["dumbo"];

  // return named function
  return function inner(name) {
    elephants.push(name);
    return elephants;
  };

  // return anonymous func
  return function (name) {
    elephants.push(name);
    return elephants;
  };

  return (name) => {
    elephants.push(name);
    return elephants;
  };

  return inner

}
// console.log(elephantCollector);//[Function: elephantCollector]
// console.log(elephantCollector());//[Function: inner]

// let elephantParade1 = elephantCollector();
// // console.log(elephantParade1());//<---[ 'dumbo', undefined ]
// console.log(elephantParade1('funkfreed'));//[ 'dumbo', 'funkfreed' ]

// let elephantParade2 = elephantCollector();
// console.log(elephantParade2("zunesha")); //[ 'dumbo', 'zunesha' ]

// Call Stack
// * The call stack is a structure that js uses to keep track of evaluation of function calls
// * function that is at the top of the stack is the function currently being executed
//   * first in last out
//   * last in first out
// * stack of plates
// * when a function is called - it gets pushed to the top
// * when a function is returned - it gets popped off the stack
//   * if a function does not have a return, it will still return and just to default its value to undefined
// let elephantParade1 = function inner(name) {
//   elephants.push(name);
//   return elephants;
// };
// console.log(elephantParade1);//[Function: inner]

/*
<counter1> : {
  count: 0
}

<counter2> : {
  count: 0
}

<counter3> : {
  count: 0
}
*/
function createCounter() {

  let count = 10;

  return function inner() {
    count++;
    return count;


    //reminder can return name of function your within ex:
    return inner; 
  }


}

console.log(createCounter()())
let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

let counter3 = createCounter()
