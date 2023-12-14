
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

let timerId = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )

// let timerId2 = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )
// // console.log(timerId);

// let timerId3 = setTimeout((name1, name2, name3) => console.log(name1, name2, name3), 2000,'trevor', 'charles', 'maica' )


setTimeout(clearTimeout, 3000, timerId);


/*

  timerId1{} => timerId3{}
*/
