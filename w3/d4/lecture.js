/*

What does it mean by JavaScript is a single threaded language
  -Meaning only one command can be processed at a time
  -any instance in time during a program, only one command is being executed
  -the current command will run to full completion before the event is handled.

What is multithreaded?
  -multiple commands can be processed at the same time.
  -python is multithreaded

================================================
Synchronous Javascript vs Asynchronous Javascript
What is synchronous code?
  -Code that has an inherent order
  -order of execution is guaranteed
*/
//we can predict the execution of this code
let foo2 = function() {
  console.log("two");
};

console.log("one");
foo2();
console.log("three");
//one => two => three
//============================================================


/*
What is asyncronous code?
  -no guarantee order in which the commands are executed

Why do we need asynchronous code?
  -the environment in which we run our applications is full of uncertainty
  -users, unstable connections
When would we use asyncronous code?
  -When users iteracts with a website, presses a button, cannot be certain with user inputs
  -Making an api call for data from a backend server

Example of async code
*/
console.log("first");

setTimeout(function() {
  console.log("second");
}, 0);

console.log("third");
//first => third => second
//notice setTimeout did not block exection of the code
