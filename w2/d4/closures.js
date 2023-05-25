/*




  Closures!
  - when a inner function uses or changes the value of the outer function
  - when a parent function cant access data in the child, but the child can access the parent
  - closure have access to any variables within its own scope as well as any outer functions
  - a closure will keep reference to all its variables defined even if its outer functions has returned
  - inner function is closing over the outer func

  ? Advantages of closures?
  1. private state
  2. data encapsulation
  3. currying

  ? Disadvantages of closures?
  1. memory intensive - variables are not garbage collected, because they are stored in lexical env
  2. slow down code if you too many

  ! Lexical Environment
    - The lexical Environment consist of any variables available within scope in which the closure was declared
    - anytime a function is defined, a lexical env is created and attached to the function under the hood
*/


//first example
//this shows that we have access to outer function variable from inner func
function pizzaMaker(food) {

  let order = 'id like a pizza with ';

  function oven(){
    return order + food;
  };

  return oven();
};

// console.log(pizzaMaker('cheese'));//id like a pizza with cheese

//Why are functions first class objects
//1. stored in variable - last thursday
//2. passed as an argument - learnt yesterday
//3. can be returned from a function.

//shows that even after the function has returned we still have access to the outer funcs variables

function elephantCollector(){
  let elephants = ['dumbo'];

  let myFunc = function(name) {

    elephants.push(name);
    return elephants
  };

  return myFunc;
}

//elephant state 1
// console.log(elephantCollector)
//[Function: elephantCollector]
// console.log(elephantCollector());//[Function: myFunc]
let elephantParade = elephantCollector();// storing the return value of elephantCollector which is a function that we can call
// console.log(elephantParade);//[Function: myFunc]
// console.log(elephantParade('babar'));//[ 'dumbo', 'babar' ]

//elephant state
//a separate state
// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('henry'));//[ 'dumbo', 'henry' ]
// console.log(elephantCollector(),('what will this print'));//[ 'dumbo', 'what will this print' ]
// console.log(elephantParade2('brandon'));//[ 'dumbo', 'henry', 'brandon' ]



//emulate private functions variables
function createCounter(){
  let count = 0;

  return function(n) {
    n= count
    count++;
    return count;
  }
}

//create a private state 1
console.log(createCounter);//[Function: createCounter]
console.log(createCounter());//[Function (anonymous)]
let counter1 = createCounter();
console.log(counter1);//[Function (anonymous)]
console.log(counter1());//1
console.log(counter1());//2

//create a private state 2
let counter2 = createCounter();
console.log();//[Function (anonymous)]
console.log(counter2());//1
console.log(counter2());//2


// return function - would return the function itself
// return function() - would return the return value of the function
