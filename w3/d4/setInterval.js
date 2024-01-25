

/*

  What is setInterval!
    * The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
    * Very similar to setTimeout
    * Takes in the same args
    * setInterval(callbackfFn, delayInMilliseconds, param1, param2);
    * executes a function repeatedly after specified delay

    What does a setInterval return?
    * The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

*/



// setInterval(console.log, 1000, `im hungry`)

// setInterval((name) => console.log(`hello ${name}`), 2000, 'maica')

let hello = (name) => console.log(`hello ${name}`)

// setInterval(hello, 2000, 'maica');

// let timerId = setInterval(hello, 2000, 'maica');
// console.log(timerId)


function time(count){
  debugger;
  let timerId = setInterval(() => {
    debugger;
    count--;
    console.log(count);
    if(count === 0) return clearInterval(timerId);
  }, 1000)
};

time(15)
