/*

    What is setTimeout?
      - The global setTimeout method sets a timer which executes a function or specifed piece of code once the timer expires

      Syntax of setTimeout
      - setTimeout(callbackFunction, delayInMilliseconds, param1, param2, param3);
      - you can also pass an anon callback
*/

//run this console.log passsing the arg of wazzup after 1 second
// setTimeout(console.log, 1000, 'wazzzzup')

//example w/o args
function time() {
  console.log("time is up!");
}

// setTimeout(time, 1000)

//example with args
function sayHi(name1, name2) {
  console.log(`Hello ${name1} and ${name2}`);
}

// setTimeout(sayHi, 2000, 'brandon', 'marc');

// let name = 'jojo';
// let timer = setTimeout(() => {
//   console.log(`Hello ${name}`)
// }, 1000)

//clearTimeout
//this will prevent the funtion from running at all
// clearTimeout(timer)

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
// somethingSlow(4);

//recursion example
// function delayedPrinter(delays) {
//   if (!delays.length) return;

//   const currentDelay = delays.shift();

//   console.log(`Waiting for  ${currentDelay}ms`);

//   setTimeout(delayedPrinter, currentDelay, delays);
// }

function delayedPrinter(delays) {
  let totalDelay = 0
  delays.forEach(delay => {
      totalDelay += delay
      console.log(totalDelay)
      setTimeout(() => {
          console.log(`Waiting for ${delay}ms`)
      },
      // totalDelay)
      delay)
  })
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

delayedPrinter(delaysArr);
