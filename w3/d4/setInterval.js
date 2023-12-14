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

//setInterval(callbackfFn, delayInMilliseconds, param1, param2);


let count = 0;
 function imHungry(food1, food2){
  count++;
  console.log(`i want ${food1} and ${food2} now!!`);
  if(count === 5) clearInterval(timerId);
};

// let timerId = setInterval(imHungry, 1000, 'pizza', 'chicken');


function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer);
      // console.log('this aint gonna stop')
    }
  }, 1000)

}


timeMaker(5)
