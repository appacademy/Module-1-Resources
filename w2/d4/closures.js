/*


      Closures
      - when a inner function uses or changes the values of the outer function
      - when a parent function cant access data in the child, but the child can access the parent
      - closure have access to any variables within its scope as well as any outer functions
      - a closure will keep references to all its variables defined even if its outer function has returned
      - inner function is closing over the outer function

      Advantages of closures
      1. private state
      2. data encapsulation
      3. currying

      Disadvantages to closures
      1. Memory intensive - variables are not garbage collected because they are stored in the lexical environment

      Lexical environment
        * anytime a function is defined a lexical environment is created
        * Lexical environments consist of all the variable defined and where they were defined

*/

//First example
//this shows that we have outer functions variable from the inner func
function pizzaMaker(food) {
  let order = "Id like a pizza with ";

  function oven() {
    return order + food;
  }

  return oven(); //lets return the return value of calling oven
}

// console.log(pizzaMaker("cheese"));//Id like a pizza with cheese
// console.log(pizzaMaker("pepperoni"));//Id like a pizza with pepperoni


function elephantCollector() {
  let elephants = ['dumbo'];

  let inner = function(name) {

    elephants.push(name);
    return elephants;
  };

  return inner;// let returns a variable that holds a function, we have not called it
};

//Third reason as to why functions are first class objects
// 1. stored in a variable
// 2. passed as an argument
// 3. can be returned from a function

//The return value of the outer function is the inner function
// console.log(elephantCollector());//? [Function: inner]
//we store the return value of the outer function in a variable elephantParade1
let elephantParade1 = elephantCollector();//<--------- private state 1
// console.log(elephantParade1);//? [Function: inner]
//we are passing to our inner function an argument
console.log(elephantParade1('babar'))// [ 'dumbo', 'babar' ]

//a separate state
let elephantParade2 = elephantCollector();//<-------- private state 2
// console.log(elephantParade2('henry'));//[ 'dumbo', 'henry' ];

// console.log(elephantCollector()('brandon')[1][0]);//'d'; <-- private state 3


//emulate private functions variables

function createCounter(){
  let count = 0;

  //directly returning the function
  //same as example above just not storing in a variable and returning the variable
  return function () {
    count++;
    return count;
  }
}

// console.log(createCounter);//[Function: createCounter]
// console.log(createCounter())//[Function (anonymous)]
let counter1 = createCounter();//<---- private state
console.log(counter1);//[Function (anonymous)]
// console.log(counter1());//1
// console.log(counter1());//2
// console.log(counter1());//3
//so the count value is preserved in the lexical environment

console.log('counter2');
let counter2 = createCounter()//<--- private state
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());





