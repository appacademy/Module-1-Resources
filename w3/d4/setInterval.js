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

count = 5;
function imHungry(food1, food2) {
  count--;
  console.log(`I want ${food1} and ${food2}`);

  if (count === 0) {
    clearInterval(res);
  }
}

// imHungry('chicken', 'mac and cheese')

let res = setInterval(imHungry, 2000, "chicken", "mac and cheese");

function timer(count) {
  let timeId = setInterval(() => {
    count--;
    console.log(count);
    if (count === 0) {
      clearInterval(timeId);
    }
  }, 2000);
  console.log(timeId);
}

// timer(5);
