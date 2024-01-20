/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25


***********************************************************************/

function dynamicMultiply(num) {
  //!!START
  let multiplier = num;

  return function(factor) {
    return multiplier * factor;
  };
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicMultiply;
} catch (e) {
  return null;
}
