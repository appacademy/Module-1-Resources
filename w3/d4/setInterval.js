/*




  setInterval
    - very similar to setTimeout
    - takes in the same args
    - setInterval(callbackFunction, delayInMiliseconds, param1, param2);
    - execute a function repeatedly after a specified delay
*/


function food(food1, food2){
  console.log(`I ate some ${food1} and ${food2}`)
};

// setInterval(food, 2000, 'tacos', 'mexican pizza');


function timeMaker(count) {

  let timer = setInterval( () => {
    count--;
    console.log(count);

    if(count === 0) {
      return clearInterval(timer);
    }

  },1000 )

}

timeMaker(5)
