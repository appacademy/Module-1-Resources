/*
What is setTimeout? 
  -The global setTimeout() method sets a timer which executes a function
    or specified piece of code once the timer expires.

Syntax of setTimeout method
  -setTimeout(callbackFunction, delayInMilliseconds, param1, param2);

  -You can also pass an anonmous call back
*/

// setTimeout(console.log, 1000, 'wazzzup')


//first example w/o args
//print hello after 1 second
function time() {
  console.log("time is up");
}

setTimeout(time, 1000);


//example w/o anon callback + args
function sayhI(name1, name2) {
  console.log(`hellooooo ${name1} and ${name2}`);
}

setTimeout(sayhI, 2000, "Brandon", "Bill");

//example with anon callback
//prints console.log after 1 seconds
let name = "Caleb";
let timer = setTimeout(() => {
  console.log(`hello ${name} anon callback`);
}, 1000);

//clearing a timeout
//this will prevent the function from running at all
clearTimeout(timer);



// ===========================================================
//call stack interacts with message queue and asyncrounous code


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

//shows were blocking the code execution, takes awhile to run
//setTimeOut on foo and bar, then run something slow, even tho they happen first, cant even think of the timer, something slow takes so long
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


// ========================================================

//recursion example problem

// function delayedPrinter(delays){
//     if (!delays.length) return
//     const currentDelay = delays.shift()
//     console.log(`Waiting for  ${currentDelay}ms`)
//     setTimeout(delayedPrinter, currentDelay, delays)
// }

//example with iteration
function delayedPrinter(delays) {
    // let totalDelay = 0
    delays.forEach(delay => {
        // totalDelay += delay
        setTimeout(() => {
            console.log(`Waiting for ${delay}ms`)
        },
        // totalDelay)
        delay)
    })
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]

delayedPrinter(delaysArr)
