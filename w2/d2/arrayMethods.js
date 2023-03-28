/*
Array Methods w/ Braxton
  - forEach()
  - map()
  - filter()
  - reduce()
  - find()
*/

/* Setting up a standard for loop and the differences coming up. */


/* What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

/* Array.forEach */// ***Do NOT return in your forEach***
// Definition - Method executes a provided function once for each array element.

const myForEach = (arr) => {
  
};


/* Array.map */
// Definition - Method creates a new array populated with the results of calling a provided function on every element in the calling array. */

const multiplyNums = (arr, multiplier) => {

}

/* Array.filter */
// Definition - Method creates a shallow copy of a portion of a given array,
//              filtered down to just the elements from the given array that pass the test implemented by
//              the provided function.


const filterByType = (arr, type) => {

};


/* Array.reduce */
// Definition - Method executes a user-supplied "reducer" callback function on each element of the array,
//              in order, passing in the return value from the calculation on the preceding element.
//              The final result of running the reducer across all elements of the array is a single value.


const reduceSum = (arr) => {

};

const reduceSumArray = (arr) => {

};

const reduceSumInObj = (arr) => {

};


/* Array.find */
// Definition - Method returns the first element in the provided array that satisfies the provided testing function.
//              If no values satisfy the testing function, undefined is returned.


const findUsersName = (users, usersName, age) => {

};













let colors = ['red', 'blue', 'blue', 'green', 'pink', 'yellow']
let nums = [4, 2, 1, 7, 5, 10, 3, 2, 34, 19];
let animals = [
  {animal: 'monkey', type: 'mammal'},
  {animal: 'parrot', type: 'bird'},
  {animal: 'zebra', type: 'mammal'},
  {animal: 'shark', type: 'fish'},
  {animal: 'bass', type: 'fish'},
  {animal: 'chicken', type: 'bird'},
]
let users = [
  {name: 'Jill', age: 39},
  {name: 'Alex', age: 26},
  {name: 'Braxton', age: 22},
  {name: 'Braxton', age: 30},
  {name: 'Brad', age: 50},
]

myForEach(nums);
multiplyNums(nums, 3);
filterByType(animals, 'mammal');
reduceSum(nums);
reduceSumArray(nums);
reduceSumInObj(colors);
findUsersName(users, 'bRaXtOn', 30);
