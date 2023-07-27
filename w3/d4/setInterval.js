/*

  What is setInterval?
    * The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
    * setInterval( callbackFunction, delayInMilliseconds, param1, param2, paramN )

  What does a setInterval return?
    * This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

*/


// execute the foo function every 1 second passing some arguments
function food(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`);
};

setInterval(food, 1000, 'pizza', 'fries')

// * calling setInterval repeatedly till we can finally instead return a value so we can pop the function off the stack instead of calling more setTimeout
function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer);
    }
  }, 1000);
}

timeMaker(5);
