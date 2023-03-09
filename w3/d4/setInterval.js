/*


  SetInterval
  - very similar to setTimeout
  - take in the same args
  - setInterval(callbackFunction, delayInMilliseconds, param1, param2);
  - executes a function repeatedly after a specified delay


*/


function foo(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`)
};


// - setInterval(callbackFunction, delayInMilliseconds, param1, param2);
// setInterval(foo, 2000, 'chicken', 'taco');


//clearTimeout
//clearInterval

function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);

    if(count === 0) {
      return clearInterval(timer);
    }
  },1000);

}

timeMaker(5);
