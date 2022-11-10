/*

  setInterval
    -little different than setTimeout
    - similar to setimeout, there exits a function that executes a callback repeatdly at the specified delay

    -setInterval takes in the same arguments as setTimeout
    setInterval(calbackFb, delayInMilliseconds, param1, param2, param3)
*/

function foo(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`);
}

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
