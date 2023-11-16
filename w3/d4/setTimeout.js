

/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/


// setTimeout(() => {
//   console.log('hello');
// }, 5000);

function time(name){
  console.log('wasssup ' + name)
}

setTimeout(time, 3000, 'maica');


// function sayHi(name1, name2){
//   console.log(`hello ${name1} and ${name2}`)
// };


// setTimeout((...names) => {
//   console.log(`hello ${names.join(' and ')}`)
// }, 4000, 'charles', 'trevor', 'brandon')


// setTimeout(setTimeout, 1000, console.log('hello'));



// clearTimeout
// prevent function from ever being called

// let timer = setTimeout((name) => {
//   console.log('hello ' + name)
// }, 1000, 'brandon');


// console.log(timer);

// if(isMember){
//   clearTimeout(timer);
// }

// delay = 420000
// setInterval(() => {
//   delay--;
//   console.log(delay)
// }, 1000)



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
// * tree recursion
// console.log(somethingSlow(44));
// predict what would we be the output?<--









// function delayedPrinter(delaysArr){
//   debugger;
//   if(delaysArr.length === 0) return;

//   const currentDelay = delaysArr.shift();
//   console.log(currentDelay);
//   debugger;

//   setTimeout(delayedPrinter, currentDelay, delaysArr)
// };



// delayedPrinter(delaysArr);

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];



function delayedPrinter(delaysArr) {

  let totalDelay = 0;
  delaysArr.forEach((delay) => {
    totalDelay += delay;
    setTimeout(() => {
      console.log(`waiting for ${delay}ms`)
    }, totalDelay);

  })
}


// delayedPrinter(delaysArr);
