/*


  Array Methods
    * Array methods are built-in function in js that allow us to achieve common behaviors
    * each method have a unique function that perform some kind of change or calculation saving us having to writing commonly written code from scratch
    * quality of life
    * array methods iterate under the hood to pass each element of an array to a callback function

  What is a callback function?
    * A function that is passed as an argument to another function

*/

let animals = ["tiger", "lion", "hippo", "monkey"];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  // console.log(animal);
}

// same thing with for each!
// array methods are called on an array

let myFunc = function (animal) {
  // console.log(animal);
  return true; //cant return in a foreach
};

// * run every element in the animals array through the myfunc function
// * iterates for us under the hood
// * always going to start at 0 and go up the length the array
animals.forEach(myFunc);
/*
tiger
lion
hippo
monkey
*/
// clean!
// animals.forEach((animal) => console.log(animal));

let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181];

function includesTwo(arr) {
  // for(let i = 0; i < arr.length; i++){
  //   let num = arr[i];
  //   if(num === 2) return true;
  // }
  let isBool = true;

  arr.forEach(function (num, i, arr) {
    // console.log(num, i);
    if (num === 2) {
      isBool = true;
    }
  });

  return isBool;
}

// console.log(includesTwo(nums))

// array method on array
// array methods take in a callback
// * we can pass the callback in many ways

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
let newArr = [];
function example(ele, i, arr) {
  newArr.push(ele);
}

// [1, 2, 3].forEach((ele, i, arr) => newArr.push(ele));
// [1, 2, 3].forEach(example);
// console.log(newArr); // [ 1, 2, 3 ]

//.map
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

function divideNumbers(numbers) {
  //without map
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    res.push(number / 2);
  }

  // return res;

  return numbers.map((number) => number / 2);
}

// console.log(divideNumbers([2, 4, 6, 8])); //[1,2,3,4]

//.filter
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

function onlyOdds(numbers) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 !== 0) {
      res.push(number);
    }
  }
  // return res;
  //  console.log('=>',numbers.filter(number => number % 2 !== 0));

  let result = numbers.filter((number) => number % 2 !== 0);
  return result;
}

// console.log(onlyOdds([1,2,3,4,5]));//[1,3,5]

// .reduce
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

function sum(numbers) {
  // use reduce
  let res = numbers.reduce((res, num) => {
    console.log(res, num);
    return res += num;
  }, 220);
  // if no default value is given; it defaults to the first element of the array
  return res;
}

console.log(sum([1, 2, 3])); // 6
