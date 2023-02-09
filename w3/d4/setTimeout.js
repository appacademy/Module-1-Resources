/*



  What is a setTimeout?
    - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    - setTimeout(callbackFunction, delayInMilliseconds, param1, param1);
    - you can pass a non callback to a setTimeout


*/

setTimeout(console.log, 5000, 'sup');

//example w/o args
function time() {
  console.log("time is up");
}
// setTimeout(time, 2000);

//example w args
function sayHi(name1, name2) {
  console.log(`hey ${name1} and ${name2}`);
}

setTimeout(sayHi, 3000, 'brandon', 'krandon');

//clearTimeout
let name = "brandon";
let timer = setTimeout(() => {

  console.log('hello!' + name)

}, 5000)

console.log('timer id', timer);

//clearTimeout
//you would pass the timer id object to the clear timeout and this will prevent the settimeout from even running
clearTimeout(timer)

/*

Why do foo and bar occur after the specific time we asked them to run?
  -async code is stored in the message queue

Why does doesn't baz have to enter the message queue?
  -it is not async

  What prints to the console in order?

  something slow done
  bark
  bazaar
  food

*/


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
// console.log(somethingSlow(45))//

//recursion example
//technically not recursing, cant populate call stack with async code
function delayedPrinter(delaysArr) {
  if (!delaysArr.length) return;//stop recursing when we have empty array base case

  const currentDelay = delaysArr.shift();//storing first ele shifted off in a variable

  console.log(currentDelay);

  //setTimeout(callbackFunction, delayInMiliseconds, param1)
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

//example with iteration
//this wont work
//for each doesnt care about when the settimeout is sent to the node api
//all time values sent to the node api at the same time, wont account for delay
function delayedPrinter(delays) {
  delays.forEach((delay) => {
    setTimeout(
      () => {
        console.log(`Waiting for ${delay}ms`);
      },

      delay
    );
  });
}

//this works
//add a buffer so all the delays are sent to the node api at the same time
function delayedPrinter(delays) {
  let totalDelay = 0;
  delays.forEach((delay) => {
    totalDelay += delay;
    setTimeout(() => {
      console.log(`Waiting for ${delay}ms`);
    }, totalDelay);
    // delay)
  });
}
