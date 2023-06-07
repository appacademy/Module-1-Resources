/*

Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

Polyas
Understand the problem
* we want an array of numbers between the starting and ending number not including the ending number
Input: start and an end, both numbers => 1, 5
Output: an array => [1,2,3,4];
* we need to get from our input to our output

if this was a loop, what would i do?
for(let i = start; i < end; i++){newArr.push(i)}
start is num passed in, end is the base case, step is the recursive step

Make a plan
1. define a function
2. base case - if(end <= start) return? ! when to stop
3. recursive step - how can we get from our start to end, or base case, increment start, start++
4. recursively call our function range(recursive step)
come back to the plan
*/

//our goal just to access every element
// function range(start, end){//start is where were starting
//   if(end <= start) return [];//base case = when to stop

//   console.log(start);

//    return [start].concat(range(start + 1, end));//start values changes each time we enter a new scope
//   //
//   // console.log(res);
//   //if range returns an array, how can we add a value into the array returned
// }
/*
taking a data type and manipulating it, so that it may it reach the base case, we are taking  a new value and passing to a function call each time, eventually the new value passed, will fulfil the base case, as that will stop the recursion
we can use the return of the functions call in our other functions

range(1,5) => [1].concat(range(2, 5))
  range(2,5) => [2].concat(range(3,5))
    range(3,5) => [3].concat(range(4, 5))
      range(4, 5) => [4].concat(range(5,5))
        range(5,5) => return [];
      range(4, 5) => [4].concat([]) => [4]
    range(3,5) => [3].concat([4]) => [3,4];
  range(2,5) => [2].concat([3,4]) => [2,3,4]
range(1,5) => [1].concat([2,3,4]) => [1,2,3,4]
*/

//concat
//push
//spread
// console.log(range(1, 5)); // [1, 2, 3, 4]
// range(3, 4); // [3]
// range(7, 6); // []
//

function range(start, end) {
  //start is where were starting
  if (end <= start) return [];

  // console.log(start);
  // let res = [];
  // debugger;
  // res.push(start);
  // debugger;
  // let value = range(start + 1, end);
  // res.push(...value);
  // debugger;
  // return res;

  // return [start].concat(range(start + 1, end));
  return [start, ...range(start + 1, end)];
}

console.log(range(1, 5)); // [1, 2, 3, 4];

//default value
function range(start, end, arr = []) {

  //start is where were starting
  if (end <= start) return arr; //base case = when to stop

  // console.log(start);
  arr.push(start);
  return range(start + 1, end, arr); //start values changes each time we enter a new scope
  //
  // console.log(res);
  //if range returns an array, how can we add a value into the array returned
}
console.log("range:", range(1,5));
