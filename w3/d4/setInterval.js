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

function imHungry(food1, food2) {
  console.log(`I want to eat ${food1} and ${food2}`);
}

// imHungry("pizza", "chipotle");

// setInterval(imHungry, 2000, "pizza", "chipotle");

// clearInterval



function timeMaker(count) {

  let timer = setInterval(() => {
    count++;
    console.log(count);
    if(count === 5) {
      return clearInterval(timer);
    }
  }, 1000);

}

timeMaker(0);
