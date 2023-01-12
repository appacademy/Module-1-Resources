/*


  setInterval
    - very similar to setTimeout
    - syntax is the same
    - setInterval(callbackFunc, delayInMiliseconds, param1, param1);
    - execute a function repeatedly after a specified delay
    - repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
*/



function foo(food1, food2) {
  console.log(`i ate ${food1} and ${food2}`);
}

// setInterval(foo, 1000, 'chicken', 'pasta')


function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer);
    }
  },1000)
}


timeMaker(5);
