/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:




Plan it out!
1. use recursion
2. shift off the ele from the front of the array => a delay
3. print the ele to the console
4. use setTimeout to pause for the duration {delay}
  // recursive call
  setTimeout??
***********************************************************************/

function printAndPause(nums) {
  // Your code here
  if (!nums.length) return;

  let delay = nums.shift();

  console.log(delay);

  setTimeout(printAndPause, delay, nums);
  // printAndPause(nums);

}

// console.log(printAndPause([200, 800, 200, 800, 200, 800]))
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
