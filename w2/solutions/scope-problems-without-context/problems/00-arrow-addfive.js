/***********************************************************************
We've just covered how to write functions using arrow function syntax. 
Let's give some old functions a new flair by rewriting them using fat arrow syntax.

Write a function `addFive` that accepts a number and will return that number
plus 5. Write this function on a single line, and utilize a fat arrow function's 
ability to implicitly return by leaving out your own return statement.


Examples:
let result1 = addFive(0); // returns 5
let result2 = addFive(10); // returns 15
let result3 = addFive(37); // returns 42


***********************************************************************/

//!!START
let addFive = (num) => num + 5;
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addFive;
} catch (e) {
  return null;
}
