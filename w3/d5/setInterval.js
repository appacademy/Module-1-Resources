/*

  setInterval!
  - very similar to setTimeout
  - take in the same args
  - setInterval(callbackFn, delayInMilliseconds, param1, param2, paramN)
  - executes a function repeatedly after a specified delay

*/

function foo(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`);
}

// console.log(foo('chocolate chip cookies', 'dumplings'))

// setInterval(foo, 1000, "chocolate chip cookies", "dumplings");
//were saying run this function repeatedly every 1 second passing these arguments

//clearTimeout - setTimeout
//clearInterval - setInterval

function timeMaker(count) {
  let timer = setInterval(() => {
    count--;
    console.log(count);

    if (count === 0) {
      return clearInterval(timer);
    }
  }, 1000);
  console.log(timer);
}

timeMaker(5);
