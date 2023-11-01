/*

  Function expression syntax!
    * another a way to write a function
    * we learn about function declaration yesterday
    * storing an anonymous function in a variable therefore giving it a name to alias it by
    * anonymous function - a function with no name

*/

// function declaration
function sayHello(){
  return 'hello'
}

// console.log(sayHello());

let sayHello2 = function () {
  return 'hello';
}

console.log(sayHello2);// [Function: sayHello2]
console.log(sayHello2())// hello

// ! for next week!
// fat arrows
let sayHello3 = () => 'hello';
console.log(sayHello3());// hello


sayHello(function sayHello(){
  return 'hello'
});

// sayHello(() => 'hello');

/*
A first class object is defined as:
* 1. It can be stored in a variable
* 2. it can be passed as an argument to a function (coming up next week!)
* 3. It can be returned from a function (also coming up next week!)
*/
