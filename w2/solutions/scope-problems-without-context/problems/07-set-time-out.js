/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds. 

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

function funcTimer(time, func) {
  //!!START
  setTimeout(func, time);
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  return null;
}