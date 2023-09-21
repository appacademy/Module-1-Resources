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
  console.log(`I want some ${food1} and ${food2}`);
}

// setInterval(imHungry, 2000, 'cheeseburger', 'pho');

function timeMaker(delayArr) {
  
  let timeId = setInterval(() => {
    let removed = delayArr.shift();
    console.log(removed);
    if (delayArr.length === 0) {
      return clearInterval(timeId);
    }
  }, delayArr[0]);
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

timeMaker(delaysArr);
