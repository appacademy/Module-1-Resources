//setInterval
//little different than setTimeout
/*
similar to setTimeout, there also exists a setInterval that function that
executes a callback repeatedly at the specified delay.
setInterval accepts the same arguments as setTimeout:
*/

function foo(food1, food2) {
  console.log(food1 + " and " + food2 + "!");
}

setInterval(foo, 1000, "pancakes", "couscous");

function timeMaker(count) {
  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0){
      return clearInterval(timer)
    }
  },1000)
}

timeMaker(5)
