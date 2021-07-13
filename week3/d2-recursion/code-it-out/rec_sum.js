/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/
function rec_sum(n) {
  debugger;
  if (n === 1) {
    // BASE CASE
    debugger;
    return 1;
  }
  // RECURSIVE CASE while n > 1
  debugger;
  let sum = rec_sum(n - 1); // Recursive STEP
  debugger;
  return n + sum;
}

console.log(rec_sum(3)); //6 this will equal 3 + rec_sum(n - 1)

