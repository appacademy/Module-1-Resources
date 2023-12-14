
/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/

// console.log(global.setTimeout);

// setTimeout(callbackFunction, delayInMilliseconds, param1, param2);

// setTimeout(() => console.log('hello'), 4000);

// function myFunc(){
//   console.log('wassup');
// }

// setTimeout(myFunc, 3000);

// setTimeout(console.log, 2000, 'hello world');



function sayHi(name1, name2, name3) {
  console.log(name1, name2, name3)
};

// setTimeout(sayHi, 2000, 'trevor', 'charles', 'maica');


// let myFunc = (name1, name2, name3) => console.log(name1, name2, name3);

// setTimeout(myFunc, 2000,'trevor', 'charles', 'maica'  )

// let timerId = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )

// let timerId2 = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )
// // console.log(timerId);

// let timerId3 = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )


// setTimeout(clearTimeout, 3000, timerId);


/*

  timerId1{} => timerId3{}
*/



// setTimeout
// run a function after a given delay passing these arguemnts
// setTimeout(callbackFunc, delay, arg1, arg2, arg...)


// pass some kind of function to setTimeout
//anon
// setTimeout((name) => console.log('hello ' + name), 1000,'brandon' );

// pass named func
function myFunc2(name){
  console.log('hello ' + name)
};

// setInterval(myFunc2, 2000, 'maica');




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

// setTimeout(foo, 0);
// setTimeout(bar, 0);
// * tree recursion
// console.log(somethingSlow(44));
// Try to predict the output? //
// ignore what fib output is just when it would be outputted
// fib => bark => bazaar => food


let count = 0;

function delayedPrinter(delaysArr) {
  count++;

  // if(count === 10) return;
  if(!delaysArr.length) return;

  const currentDelay = delaysArr.shift();
  // console.log('hello')
  console.log(currentDelay);

  // delayedPrinter(delaysArr);
  setTimeout(delayedPrinter, 1000, delaysArr)
}
// setTimeout(callbackFunction, delayInMilliseconds, param1, param2);


// delayedPrinter(delaysArr)



function delayedPrinterIteration(delaysArr){
  let totalDelay = 0;

  delaysArr.forEach(delay => {
    totalDelay += delay;
    setTimeout(console.log, totalDelay, `waiting for ${delay}ms`);

  })
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// console.log(delayedPrinterIteration(delaysArr))






setTimeout(() => {
  for(let i = 0; i < 3; i++){
    console.log(i);
    }
}
, 1000);


// console.log('hello');
// setTimeout(console.log, 1000, 'hello');

// setTimeout(Math.sqrt, 1000, 100);

// (param) => {
//   console.log(Math.sqrt(param))
// }

setTimeout((param) => {
  console.log(Math.sqrt(param))
}, 1000, 100);
