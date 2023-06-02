/*


  setInterval
  - very similar to setTimeout
  - takes in the same args
  - setInterval(callbackFunc, delayInMilliseconds, param1, param2, paramN);
  - executes a function repeatedly after delay specified
  - functions are messages/task/events/stackframe/execution context

*/


function foo(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`);
};


// setInterval(foo, 2000, 'taco', 'hashbrowns')
// console.log(foo('taco', 'hashbrowns'));
// were saying run this function repeatedly every 2 seconds passing these two arguments

//clearInterval - setInterval
//clearTimeout - setTimeout


function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer);
    }
  }, 1000);
  // console.log(timer);//timeout object
};

timeMaker(5);
