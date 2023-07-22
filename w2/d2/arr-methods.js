
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

   ? maybe
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

  */



let animals = ["tiger", "lion", "hippo", "monkey"];

function uppercase(animal) {
  return animal.toUpperCase() + "!";
}

// standard for loop
// * passing a element to a function as we iterate
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log("animal: ", animal);

  // passing animal to uppercase function
  let upperCasedAnimal = uppercase(animal);
  console.log("upperCasedAnimal: ", upperCasedAnimal);
}

// ! we can imitate this with array methods
// * array methods abstract the implementation

// 1. forEach
// * The forEach() method executes a provided function once for each array element.
// * We use forEach when we want a connivent/quick way to write a for loop

// We are looping through the animals array
// * animal is a variable we can choose to represent an element in the array
// * as we loop through the animals array we are console.log each animal
// ! notice that we did not need to specify a start, condition and step
// ! nor did we have to declare a variable for animal
animals.forEach(function (animal) {
  console.log("animal: ", animal);
  let upperCasedAnimal = uppercase(animal);
  console.log("upperCasedAnimal: ", upperCasedAnimal);
});

// ! cannot return in a forEach
let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181];

function includesTwo(arr) {
  // create tracking variable for boolean
  let haveWeFoundATwoYet = false;

  // iterate using forEach
  arr.forEach((num, i, arr) => {
    // if num is reassign tracker to true
    if (num === 2) {
      haveWeFoundATwoYet = true;
      // return true; // ! cant return
    }
  });

  // return tracking variable's value
  return haveWeFoundATwoYet;
}

console.log(includesTwo(nums));

// When you need to access both the value and the index, you can use .forEach() instead of for (;;)
// * It is preferred by the developer to use implicit forEach when possible over a standard for loop
[1, 2, 3].forEach((number) => console.log(number));

// 2. .map
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// * we use map whenever we want to return a new array of elements modified in some way

function divideNumbers(numbers) {
  // without .map
  // let result = [];
  // for(let i = 0; i < numbers.length; i++){
  //   let number = numbers[i];
  //   result.push(number / 2);
  // };
  // return result;

  let result = numbers.map((num) => num / 2);
  console.log(result);
  // * could also return numbers.map
  // return numbers.map(num => num / 2);
  // * can you see how this could lead to a one liner?
}

console.log(divideNumbers([2, 4, 6, 8])); // [1,2,3,4]

// 3. .filter
// * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition

let onlyOdds = (...numbers) => {
  // without .filter
  // let result = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   let number = numbers[i];
  //   if (num % 2 !== 0) {
  //     result.push(number);
  //   }
  // }
  // return result;

  //can also return nums.filter
  let result = numbers.filter((number) => {
    if (number % 2 !== 0) {
      return true;
    }
    return false;
  });

  return result;
  // return numbers.filter(number => number % 2 !== 0 ? true : false)
};

console.log(onlyOdds(1,2,3,4,5,6,7,8));// [1,3,5,7]


// 4. .find
// * The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [1, 2, 3, 4, 5];

const found = array1.find((element) => element === 3);

// store turn value of find which is the element that meets the condition
console.log(found);// 3

let found2 = ['hey', 'whats', 'up'].find((word) => word.length > 4);

console.log(found2);// whats


// 5. .reduce
// * The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// * reduce is the most flexible and powerful of the array methods

function sum(numbers) {

  let sum1 = numbers.reduce((acc,number) => acc += number, 0);
  // *  if no acc is provided, it will default to the first element of the array; in this case 1
  let sum2 = numbers.reduce((acc, number) => {
    console.log('acc: ', acc, 'number: ', number);
    acc += number;
    return acc;
  });
  // *  no acc provided 1 will be used

  // return sum1
  return sum2;
};


console.log(sum([1,2,3]));// 6
