/*

   Array Methods

   What are array methods?
    * Array methods are functions built-in to JavaScript
    * Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
    * Allow us to perform commonly used calculations/functions
    * quality of life
    * array methods iterate under the hood to pass each element of an array to a callback function

   What is a callback function?
    * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

    ! We will learn more about callback function tomorrow
    * For now we are going to treat some of the implementation of array methods like a black box
      ** a black box is a device, system, or object which produces useful information without revealing any information about its internal working
    * Implementation of array methods are abstracted under the hood
      ** We do not need to explicitly provide a start, condition, and step
      ** It is implied you want to reach every element when using these array looping methods

   Array methods!
    * .forEach
    * .map
    * .filter
    * .reduce
    * .find
    * and many more!

/*
  Different ways to pass function as callbacks

  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
    (name) => name.includes('o')

  2. Anonymous Explicit Callback
    * Explicit
    * Uses return keyword + {}
      (name) => {
        return name.includes('o');
      }
  3. Anonymous Callback Function Keyword
    * Uses function keyword
    function(name) {
      return name.includes('o');
    }

*/

let animals = ["tiger", "lion", "hippo", "monkey"];

// forEach
function logsUpperCased(animal) {
  // console.log(animal.toUpperCase());
}

// without using for each
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  // console.log(animal);
  logsUpperCased(animal);
}

// its passing every element in the array to the callback
// animals.forEach(logsUpperCased);

// animals.forEach((animal) => console.log(animal.toUpperCase()));

animals.forEach(function (animal) {
  // console.log(animal.toUpperCase())
});

let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181];

// ! cant return in forEach
function includesTwo(arr) {
  // for(let i = 0; i < arr.length; i++){
  //   let number = arr[i];
  //   if(number === 2) return true;
  // };
  let bool = false;

  arr.forEach(function callback(_, i) {
    // console.log(num, i, arr);
    // if(num === 2) return true;// cant return in a foreach
    // if(num === 2) bool = true;
    console.log(i);
  });

  return bool;
}

// console.log(includesTwo(nums));

// .map
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array

// return a new array of numbers that are divided by 2

function divideNumbers(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let number = arr[i];

  //   newArr.push(number / 2);
  // }

  // return newArr;

  // console.log(arr.map((number) =>  number / 2));

  let returnValueOfMap = arr.map((number) =>  number / 2);

  // console.log(returnValueOfMap);
  return returnValueOfMap;
}

// console.log(divideNumbers([2, 4, 6, 8, "word"])); //[1,2,3,4];




// .filter
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

function onlyOdds(nums){

  let odds = [];
  for(let i = 0; i < nums.length; i++){
    let num = nums[i];
    if(num % 2 !== 0) odds.push(num);
  };

  // return odds;

  // let returnOfFilter = nums.filter((num, i, arr) => {
  //  return num % 2 !== 0
  // });

  // console.log(returnOfFilter);
  return nums.filter((num, i , arr) => num % 2 !== 0);
};

// console.log(onlyOdds([1,2,3,4,5]));// [1,3,5];



// .reduce
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.



let product = (numbers) => {

  let result = numbers.reduce((total, num, i, arr) => {
    console.log(i)
    total *= num;
    arr.splice(0,1)
    return total;
  }, 1);

  return result;
}


console.log(product([2,3,4]));//24
