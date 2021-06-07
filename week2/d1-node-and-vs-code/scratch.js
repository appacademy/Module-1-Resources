// Methods - push, pop, shift, unshift, splice

/* 
forEach
1. arr.forEach(function(el, i, arr){//some action}) // a function can intake ANOTHER FUNCTION
2. forEach element that is in an array, it will run the function
  a. the function can INTAKE the ele, i, array
3. Intakes a FUNCTION
4. undefined
  a. We use forEach for its SIDE EFFECT not its return value
*/

//console.log every element of the array it's given
function logger(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   let ele = arr[i];
  //   console.log(ele)
  // }
  arr.forEach(function (ele, i, origArr) { //we don't have to use i or origArr they can be deleted
    console.log(ele);
    return "yoooo"; // doesn't really do anything
    console.log('won\'t run') // except keep following lines of code running
    // return won't 'short circuit' the loop
  });
}

logger(["a", "b", "c"]); 

/* 
map
1. Syntax
2. Description
3. Arguments
4. Return value
*/

/* 
Write a function called timesTwo that intakes an
array of numbers and returns a new array where all 
of the numbers are multiplied by 2. You must use Array.map()

timesTwo([1, 2, 3]) => [2, 4, 6]
timesTwo([-1, 6, 0]) => [-2, 12, 0]
*/

/* 
filter
1. Syntax
2. Description
3. Arguments
4. Return value
*/

/* 
Write a function called evens that intakes an
array of numbers and returns a new array of only the
even numbers from the original array. You must use
Array.filter()

evens([1, 2, 3]) => [2]
evens([42, 44, 45]) => [42, 44]
*/

/* 
reduce
1. Syntax
2. Description
3. Arguments
4. Return value
*/

/* 
Write a function called reduceSum that intakes an
array of numbers and returns the sum.
MUST use Array.reduce()
*/


/* 
Write a function called sum that intakes an
array of names and returns a string of "Names: " with
all of the names attached after. Must use Array.reduce()

reduce(['Mylo']) => Names: Mylo 
reduce(['Rick', 'Morty']) => Names: Rick Morty 
*/