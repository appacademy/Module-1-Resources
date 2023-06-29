

/*


  setInterval

   - The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call

   * very similar to setTimeout
   - takes in the same args
   - setInterval(callbackFn, delayInMilliseconds, param1, param2, paramN);
   - executes a function repeatedly after a specified delay

*/


function imHungry(food1, food2) {
  console.log(`I want some ${food1} and ${food2}`)
};

//okonomiyaki creab
setInterval(imHungry, 2000, 'okonomiyaki','creab' );
// we are saying i want to run the imHungry function every 2 seconds passing these arguments 'okonomiyaki','creab' forever

// if we ever to stop a setInterval
// we can use clearInterval and pass the timeout object
// setInterval return value is a timeout object

function timeMaker(count) {

  let timerObj = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timerObj);
    }
  }, 2000);

};

// timeMaker(5);
