/*



  Array methods!

  What are array methods?
  * Array methods are functions built into javascript
  * Array methods help us achieve common behaviors
    * return a new array
    * filter out elements
    * check if a element exists
  * quality of life
  * array method iterate under the hood to pass each element of an array to a callback function

  What is a callback function?
  * A callback function is passed as an argument to another function

  ! Talk about callback tomorrow
*/

let animals = ["tiger", "lion", "hippo", "monkey"];

// standard for loop
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  // console.log(animal);
}

// we can do the same thing with forEach using less lines
// animals.forEach((animal) => console.log(animal));

// * forEach
// The forEach() method of Array instances executes a provided function once for each array element.
// * we use forEach when we want a quick wa to write a for loop

// animals.forEach(function (animal) {
//   console.log(animal);
// });

let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181];

function includesTwo(arr) {
  // standard for loop
  // for(let i = 0; i < arr.length; i++){
  //   let ele = arr[i];
  //   if(ele === 2) return true;
  // }

  // return false;
  let isBool = false;

  //[1, 49, 24, 55, 2, 9, 58, 132, 181]
  // let ele = arr[i];

  // element at i, index, array
  // optionally use i and the array
  // can name them whatever you want
  arr.forEach((ele, i, arr) => {
    console.log(ele, i, arr);
    // logic
    // ! cant return in a forEach
    if (ele === 2) isBool = true;
  });

  return isBool;
}

// console.log(includesTwo(nums)); // true

// [1,2,3].forEach((number, i, arr) => console.log(number, i, arr));

//.map()
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// * we use map whenever we want to return a new array of elements modified in some way

function divideNumbers(numbers) {
  // let newArr = [];
  // // without map
  // for(let i = 0 ; i < numbers.length; i++){
  //   let number = numbers[i];
  //   newArr.push(number / 2);
  // }
  // return newArr;// [ 1, 2, 3, 4 ]

  // return numbers.map(number => number / 2);
  let result = numbers.map((number) => {
    return number / 2;
  });

  return result;
}

// console.log(divideNumbers([2,4,6,8]));// [1,2,3,4]
/*
(number) => {
    return number/ 2
}

number => number / 2

function(number) {
  return number / 2
}
*/

// .filter
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition

function onlyOdds(...numbers) {
  let res = [];

  // for(let i = 0; i < numbers.length; i++){
  //   let number = numbers[i];
  //   if(number % 2 !== 0) res.push(number)
  // };

  // return res;//[ 1, 3, 5, 7 ]

  // return numbers.filter(number => number % 2 !== 0);//[ 1, 3, 5, 7 ]
  let result = numbers.filter((number, i, array) => {
    // console.log(number, i, array);
    return number % 2 !== 0;
  });

  return result; //[ 1, 3, 5, 7 ]
}

// console.log(onlyOdds(1,2,3,4,5,6,7,8));//1,3,5,7

// find
// * The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let array1 = [1, 2, 6, 3, 4, 5, 3];

let found = array1.find((element) => element > 4);

let found2 = array1.find(function (element) {
  return element > 4;
});

// console.log(found);// 6

// reduce
// * The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

function sum(numbers) {
  let sum1 = numbers.reduce((acc, num) => {
    console.log('old acc:', acc)
    // acc += num;
    // console.log("new acc: ", acc, "num: ", num);
    acc.push(num);
    return acc;
  },[]);
  // if we dont provide a initial value
  // * it defaults to the first element of the array

  return sum1;
}

// console.log(sum([1, 2, 3])); // 6 
