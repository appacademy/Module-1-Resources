/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/

function dynamicDivide(divisor) {
  //!!START
  return function (dividend) {
    return dividend / divisor;
  };
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicDivide;
} catch (e) {
  return null;
}
