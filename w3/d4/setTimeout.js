/*





  setTimeout!
  - the global setTimeout() method sets a timer which executed a function or specified piece of code once the timer expires

  - setTimeout(callbackFunction, delayInMilliseconds, param1, param2)
    * any params after the delay arguments, are aguments to the callback function


*/

//EXAMPLE with console.log
//were saying run this console.log passing it the argument 'sup, after 2 seconds
// setTimeout(console.log, 2000, 'sup!')

//example w/o args
function time() {
  console.log("time is up");
}

// setTimeout(time, 1000)

//example with args
function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(sayHi, 2000, "brandon", "whit");

//clear timeout
//this will prevent the function running at all
let name = "brandon";

// let timer = setTimeout(() => {
//     console.log(`hello ${name}`);

// }, 1000);

// console.log(timer)
// clearTimeout(timer);

//this fib func is blocking the call stack
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
//tree recursion
// console.log(somethingSlow(44));//fib => bark => bazaar => food

//recursive function that is going to print out the current number in the array, but also use that number as our delay
//THIS IS NOT RECURSIVE
//because async code does not block the call stack
//recursion is when a function call itself
//pseudorecursion!
function delayedPrinter(delaysArr) {
  if (!delaysArr.length) return; //base case - stop when there is no length in the arr

  const currentDelay = delaysArr.shift(); //recursive step

  console.log(currentDelay);

  //setTimeout(callbackFunction, delayInMiliseconds, param1)
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
//for loop doesnt care about timing, all the callback.event pairs from the setimeout are added at the same time
//so they exit the node api into the message queue, in an order we dont expect
function delayedPrinter(delaysArr) {
  let totalDelay = 0;//added
  delaysArr.forEach((delay) => {
    totalDelay += delay;//added
    setTimeout(
      () => {
        console.log(`Waiting for ${delay}ms`);
      },

      totalDelay//changed from delay
    );
  });
}

delayedPrinter(delaysArr);
