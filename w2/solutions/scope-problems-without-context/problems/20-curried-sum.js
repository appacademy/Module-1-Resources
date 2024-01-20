/***********************************************************************

Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.This technique is named after the
logician Haskell Curry(the functional programming language Haskell is, too).

Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.

Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single number as an argument.
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.

If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.


Example:
// 1
const sum = curriedSum(4); // returns a function
sum(5) // returns a function
sum(20) // returns a function
sum(30) // returns a function
sum(20); // => returns 75

// 2
// this function can also be invoked like this:
const sum = curriedSum(3)(2)(1)(7); // => returns 10

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Come up with at least two situations (one per person) on when currying would
  be useful
***********************************************************************/

function curriedSum(numArgs) {
  //!!START
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach(n => {
        total += n;
      });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
  //!!END
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = curriedSum;
} catch (e) {
  return null;
}
