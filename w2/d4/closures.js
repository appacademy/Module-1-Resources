/*



  Closures

  What is a closures?
    * A closure is the combination of a function and the lexical environment within which that function was declared
    * A closure is when inner function, uses, or changes variables in an outer function

  Basic closures rules
    * Closures have access to any variables within its own, as well as any outer function scopes when they are declared/defined
    * A closure will keep a reference to all the variables when its defined even if the outer function has returned

  Advantages of closures!
    * Private state
      ** data encapsulation
      ** security
    * currying

  Disadvantages of closures
    * Memory Intensive - variables not garbage collection because they are stored in the lexical environment

  Lexical Environment
    * Anytime a function is defined a lexical environment
    * Consists of all the variables defined and where they defined

*/

// Example 1: We can access the outer functions variables
function pizzaMaker(food) {
  let order = "Id like a pizza with";

  // inner function
  // * what closes over the outer function
  function oven() {
    return order + " " + food;
  }

  // * return a function call; not a function itself
  // * return the return value of first invoking ove
  return oven();
}

console.log(pizzaMaker("cheese")); // Id like a pizza with cheese

// function sundaeOrder() {
// // your code here
//     let startingString = "A bowl of ice cream with hot fudge"

//     return function (topping) {
//         // your code here
//                                         // + 'and' + topping
//         startingString = startingString + ` and ${topping}`
//         return startingString
//     };
// }

// // Base string: "A bowl of ice cream with hot fudge"

// let sundae = sundaeOrder(); // => returns a function
// console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
// console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

// let sundae2 = sundaeOrder(); // => returns a function
// console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"



// // We can have multiple closures, each with their own internal state
// ------------------------------

// function counterCreator(){
//     let count = 0;

//     return () => {
//         count++
//         return count
//     }
// }

// let counter1 = counterCreator()
// let counter2 = counterCreator()
// let counter3 = counterCreator()

// counter2()
// counter2()
// counter2()
// counter2()

// counter3()
// counter3()

// console.log(counter1())
// console.log(counter2())
// console.log(counter3())




// Exposing an interface
function counterCreator(){
  let count = 0;

  let interface = {}
  interface.getValue = getValue
  interface.increment = increment
  interface.decrement = decrement

  return interface
  // or
  // return {
  //     "getValue": getValue,
  //     "increment": increment,
  //     "decrement": decrement
  // }

  // Read value
  function getValue() {
      return count
  }

  // Increment Value
  function increment(){
      count++
  }

  // Decrement Value
  function decrement(){
      count--
  }
}

let counter1 = counterCreator()

console.log(counter1.getValue())
counter1.increment()
counter1.increment()
counter1.increment()
console.log(counter1.getValue())
counter1.decrement()
console.log(counter1.getValue())


