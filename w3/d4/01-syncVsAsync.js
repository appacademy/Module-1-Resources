// Asynchronous JavaScript

// JavaScript allows for code that runs outside of the normal execution of our
// functions. We'll call this code asynchronous code. When we instruct JS to run
// asynchronous code, it ends up in the message queue. The message queue is the
// area where JS holds onto code that is waiting to be assessed. Once the call
// stack is empty, JS will begin to assess code in the message queue, following
// a first in first out basis. 

// It's important to note that asynchronous code _does not_ immediately enter
// the call stack. For the instances that we'll explore today, JS creates a 
// timeout object. Upon expiring, the timeout object puts the specified callback
// into the message queue. Let's take a look 

// Below is a function that will occupy our callstack for some time, given a
// large enough integer for our input (40 and above should take some time)

function somethingSlow(n) {
  if (n === 1 || n === 2) return 1

  return somethingSlow(n - 1) + somethingSlow(n - 2)
}


// Next we'll define a few functions that make use of with our timeouts:
function foo() {
  debugger
  console.log("food");
}

function bar() {
  debugger
  console.log("bark");
  baz();
}

function baz() {
  debugger
  console.log("bazaar");
}

// Create first timeout object, expiring after 150ms and calling foo 
setTimeout(foo, 150);
// Create second timeout object, expring after 100ms and calling bar
setTimeout(bar, 100);
// Invoking our slow function, to occupy the call stack.
somethingSlow(42);
// Try commenting out our somethingSlow call to see how things change!

// Synchronous code

// Synchronous code will execute in a predictable manner, from top to bottom.
// We may see that behavior "jump" from one line to another when we invoke a 
// function. Here's a short example:

const func = () => console.log('2'); // define function func that will log '2' 
// in console
console.log('1'); // log '1' in console
func(); // invoke func. This tells JS to find our function and execute its code.
// To find it, JS jumps back up a few lines, sees that it needs to log
// '2' and completes it
console.log('3'); // log '3' in console

// Asynchronous code

// Asynchronous code does _not_ guarantee order. Instead, asynchronous code will
// generate indicator to JS that code should continue to function at a later
// time. With our timeout/interval objects, that continuation is upon expiry of
// our timeout/interval. 

console.log('1'); // synchronously log '1'
setTimeout(func, 3000); // tell JS to wait for at least 3000 ms, then call func
console.log('3'); // synchronously log '3'
