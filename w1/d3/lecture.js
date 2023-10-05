/*


  Function Expression Syntax
    * another way to write a function
    * we learnt about function declaration
    * storing an anonymous function in a variable therefore giving it a name we can alias by
      * anonymous function with no name

*/

// function declaration
// this where have parameters to represent the arguments passed
function sayHello(){
  console.log('hello from sayHello')
}

// invoke/call function
// where arguments are passed
// sayHello()

// function expression
let sayHello2 = function () {
  console.log('hello from sayHello 2')
}

// sayHello2();

// something well be able to do later down the line
let sayHello3 = () => console.log('hello from sayHello 3');
// sayHello3();

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// * 1. It can be stored in a variable
// * 2. it can be passed as an argument to a function (coming up next week!)
// * 3. It can be returned from a function (also coming up next week!)
