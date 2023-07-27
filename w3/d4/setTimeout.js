
/*


  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * Syntax
      * setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )

    ! If you want to convert from millisecond to seconds
      * just divide by a thousand
        * ex: 5000ms -> 5s

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout().
      * This value can be passed to clearTimeout() to cancel the timeout.

*/

// Show global object and all its methods
// console.log(global);

// setTimeout is a method on the global object
// we can access it like so
// but the developers have made it easy for use and we dont need to key into the global object

// * after 5 seconds call the hello function
function hello() {
  console.log("hello");
}

// global.setTimeout(hello, 5000);

// after 1 second i want to pass to the console.log the argument sup
// setTimeout(console.log, 1000, 'sup');

// example w/o args
function time() {
  console.log("time is up");
}

// setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
// setTimeout(time, 4000);


// example w args
function sayHi(name1, name2) {
  console.log('hello ' + name1 + ' and ' + name2);
}

// * passing variable holding a function
// setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
setTimeout(sayHi, 3000, 'brandon', 'anthony');// hello brandon and anthony

// * anon callback
setTimeout((name1, name2) => {
  console.log('hello ' + name1 + ' and ' + name2);
}, 4000, 'charles', 'trevor');


// * make sure when passing arguments to a setTimeout you are either passing a function name or anonymous function itself
// * examples above

// ! dont pass a invoked function to a setTimeout
// *  that would be passing the return value of a function to a callback
// setTimeout(sayHi(), 3000, 'brandon', 'anthony');
// [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined

// clearTimeout
// * this will prvent the function from running at all

let timer = setTimeout((name) => {
  console.log('hello ' + name);
},1000, 'mochi')

// ! we can use this timer variable which holds a timer object to prevent to code from running
console.log(timer);// the setTimeout is not called



// fib
function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// // * tree recursion
// console.log(somethingSlow(44));
// sync code block the call stack
// *  we had to wait for somethingSlow to complete before removing the task from the message queue
/*
  701408733
  bark
  bazaar
  food
*/

// recursion w/ setTimeout
// we want to print the number and use the number a the delay for a setTimeout
// * Is this actually recursing?
// * cant populate the call stack with async code
// * pseudo - recursion
function delayedPrinter(delaysArr) {
  // console.log(delaysArr);
  debugger;
  if (!delaysArr.length) return;

  const currentDelay = delaysArr.shift();
  console.log(currentDelay);

  // setTimeout( callbackFunction, delayInMilliseconds, param1, param2, paramN )
  // delayedPrinter(delaysArr);
  setTimeout(delayedPrinter, currentDelay, delaysArr);
  // * alt syntax: pass anon callback

  // * alt syntax using anon callback
  // setTimeout(
  //   (delaysArr) => {
  //     delayedPrinter(delaysArr);
  //   },
  //   currentDelay,
  //   delaysArr
  // );

  // * This syntax works as the delaysArr will be accessed through scope chaining, no argument is passed to the function
  //   setTimeout(() => {
  //     delayedPrinter(arr);
  //   }, currentDelay);
  // };
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);

// .forEach doesnt care about the order in which you send callbacks to the node api
// * the delays are sent to the message queue all at the same time
function delayedPrinter2(delaysArr) {
  let totalDelay = 0; // added
  // added
  delaysArr.forEach((delay) => {
    totalDelay += delay;

    setTimeout(() => {
      console.log(delay);
    }, totalDelay); // added
  });
}

delayedPrinter2(delaysArr);
