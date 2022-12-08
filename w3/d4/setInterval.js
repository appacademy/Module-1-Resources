/*
  SetInterval!
  - very similar to setTimeout
  - takes in the same args
  - setInterval(callbackfFn, delayInMilliseconds, param1, param2);
  - executes a function repeatedly after specified delay
*/


function foo(food1, food2) {
  console.log(` I ate ${food1} and ${food2}`)
};

// setInterval(foo, 1000, 'chicken', 'pizza');


function timeMaker(count) {
  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer)
    }
  },1000)
}


timeMaker(5)
