/*

    What is a setTimeout?
      - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
      - setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
      - you can anon callback to a setTimeout

*/

// setTimeout(console.log, 1000, 'sup')

// //example w/o args
// function time() {
//   console.log('time is up');
// }

// setTimeout(time, 1000);

// //example w args
// function sayHi(name1, name2) {
//   console.log(`hello ${name1} and ${name2}`);
// }

// // setTimeout(sayHi, 2000, 'brandon', 'cory');

// //clearTimeout
// //this will prevent the function from running at all

// let name = 'brandon';

let timer = setTimeout(() => {
  console.log(`hello ${name}`)
}, 1000)

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
// console.log(somethingSlow(44));

//recursion example
function delayedPrinter(delaysArr) {
  if (!delays.length) return;

  const currentDelay = delaysArr.shift();

  console.log(currentDelay);

  //setTimeout(callbackFunction, delayInMiliseconds, param1)
  setTimeout(delayedPrinter, currentDelay, delaysArr);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);


function delayedPrinter(delaysArr) {
  let totalDelay = 0;
  delaysArr.forEach((delay) => {
    totalDelay += delay
    console.log(totalDelay)
    setTimeout(() => {
      console.log(delay)
    },totalDelay)
  })
}

delayedPrinter(delaysArr)
