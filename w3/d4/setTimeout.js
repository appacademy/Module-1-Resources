

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

// setTimeout(time, 3000, 'maica');


// function sayHi(name1, name2){
//   console.log(`hello ${name1} and ${name2}`)
// };


// setTimeout((...names) => {
//   console.log(`hello ${names.join(' and ')}`)
// }, 4000, 'charles', 'trevor', 'brandon')


// setTimeout(setTimeout, 1000, console.log('hello'));



// clearTimeout
// prevent function from ever being called

let timer = setTimeout((name) => {
  console.log('hello ' + name)
}, 1000, 'brandon');


// console.log(timer);

// if(isMember){
//   clearTimeout(timer);
// }
