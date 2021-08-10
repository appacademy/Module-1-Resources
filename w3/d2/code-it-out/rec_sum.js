/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/
function rec_sum(n) {
  debugger;
  if (n === 1) {  //Base Case
    debugger;
    return 1;
  }
  // Recursive Case - n > 1
  debugger;
  return n + rec_sum(n - 1);
}
// console.log(rec_sum(1)); // 1
// console.log(rec_sum(2)); // 3 // equal num + rec_sum(num - 1)
console.log(rec_sum(3)); //6 this will equal 3 + rec_sum(n - 1)

