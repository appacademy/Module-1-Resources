/*




  What is a setTimeout?
  - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

  - setTimeout(callbackFunc, delayInMilliseconds, param1, param2, paramN); - passing the callback straight to the setTimeout

  - setTimeout(() => cb(), delayInMilliseconds, param1, param2, paramN); -  this a anon func thats calling a callback
    * you can anon callback to a setTimeout

  * to go from  milli to second - multiply a 1000
*/


let sayHello = function(){
  console.log('hello');
};


// global.setTimeout(sayHello, 2000);

// console.log(global);

// setTimeout(console.log, 5000, 'sup');

//function w/o args
function time(){
  console.log('time is up');
};

// setTimeout(time, 3000);

//function w args
function sayHi(name1, name2){
  console.log(`hey ${name1} and ${name2}`);
}

// setTimeout(sayHi, 4000, 'brandon', 'anthony');

//clearTimeout
// the return value of setTimeout is a timeout object
// were storing that return value in a variable so that we can use cleartimeout to prevent the setTimeout from running
// clearTimeout takes in a timer object

// let hey = function(name){
//   console.log(`hello ${name}`);
// }


// let timer2 = setTimeout(   hey,  1000,   'brandon');
// let timer = setTimeout(    (name) => { console.log(`hello ${name}`) }    , 1000 , 'brandon');
// let timer3 = setTimeout(   function(name){ console.log(`hello ${name}`) }    , 1000 , 'brandon');
// let timer4 = setTimeout(   (name) => console.log(`hello ${name}`)     , 1000 , 'brandon');
// // console.log(timer);// gives timeout obj

// clearTimeout(timer);//pass to clearTimeout the timer obj, that you dont want to run
//use clear timeout when you want prevent it from running




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
// //tree recursion
// console.log(somethingSlow(44));
// ? what do you think will be printed?
// take a few minutes to guess the output, draw it out
// fib -> bark -> bazaar -> food

// you can have a message q overflow

// pseudorecursion example
// is this actually recursing?
// this is technically not recursing
// how can you populate the call stack if async code goes straight to the message queue
function delayedPrinter(delaysArr) {
  // console.log(delaysArr);
  if(!delaysArr.length) return;

  const current = delaysArr.shift();
  console.log(current);

  // return delayedPrinter(delaysArr);
  setTimeout(delayedPrinter, current, delaysArr);
  // setTimeout(function() {
  //   delayedPrinter()
  // }, delaysArr);
}

//want to print the value after a delay, and use the value as the delay
const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);

// for loop does not care about when are function enter the message queue, it run the entire for loop immediately sending all the values at once, once they are there, the smallest will be ran first because they exit the message queue first
// in order to combat that, we add a totalDelay which add every previous delay to it, to ensure we that the functions come out in the order we intended
function delayedPrinter2(delaysArr) {
  let totalDelay = 0;//added
  delaysArr.forEach(delay => {
    // console.log(delay)

    totalDelay += delay;//added
    // console.log('totalDelay:', totalDelay);
    setTimeout(console.log, totalDelay, delay);//added totalDelay
    // setTimeout(() => console.log(delay), totalDelay, delay );
    //setTimeout(cbFunc, delayInMilliseconds, arg1)
    //console.log is a function
  });
};


delayedPrinter2(delaysArr);
