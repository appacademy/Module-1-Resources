/*

  Function expression syntax
  - just another way to write a function
  - we learnt about function declaration yesterday - using function keyword
  - storing an anonymous function in a variable, therefore giving it name
   * anonymous function is a function with no name

*/

sayHello(); //we can invoke sayHello before its been defined, because its using declaration
//this will thrown no errors, this will work

//function declaration
function sayHello() {
  console.log("hello from say hello");
}

// sayHello();

//know about storing other data types in variable
let age = 30; //storing a number in a variable

// ! cannot access a function expression before its been defined, we will get an error
// myFunc();//ReferenceError: Cannot access 'myFunc' before initialization

//we can do the same thing with a function
//weve stored in anon function in a variable
let myFunc = function () {
  console.log("hello from myfunc");
};

//were checking what the variable holds, its a function
// console.log(myFunc);//[Function: myFunc]
//if you see a variable that holds a function, you can call/invoke it
// myFunc();//hello from myfunc

//where would function expression be useful
// it allows to use fat arrows
// pass function as arguments to other functions,
//just a preview
let sayHello3 = () => console.log("hello from sayHello3");
sayHello3();

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable - learn today
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)

function myFunc5(){
  
}

let myFunc4 = function () {

};
