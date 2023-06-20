/*


  Array methods!
  - built in functions in javascript
  - quality of life
  - built in logic that we can use and not have to write ourselves over and over

  Array methods!
  - forEach
  - map
  - filter
  - reduce
  - find

  * were passing a value from the array to the callbacks function each iteration
*/

//what we know
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  let ele = arr[i];
  // console.log(ele, i, arr);
}

// QOl forEach
// The forEach() method executes a provided function once for each array element.
// we have access to the element, index, and the array, we can name the variables we want
// check mdn if we forget syntax

// in callback (element, index, array) - can change variables
// arr.forEach((ele, i, arr) => console.log(ele));
// arr.forEach(function (ele, i, arr) {
//   console.log(ele, i, arr);
// });
// arr.forEach((ele, i, arr) => {
//   console.log(ele, i, arr);
// });

let includesTwo = (arr) => {
  // for(let i = 0; i < arr.length; i++) {
  //   let ele  = arr[i];
  //   if(ele === 2) return true;
  // }

  let bool = false;
  arr.forEach((ele) => {
    console.log(ele);
    if (ele === 2)
      // return true;//! we CANT return in a forEach
      bool = true;
  });

  return bool;
};

// console.log(includesTwo([1, 2, 3, 4, 5])); //true

// arr.forEach((ele) => console.log(ele));

// arr.forEach(function (ele) {
//   console.log(ele);
// });

// arr.forEach((ele) => {
//   console.log(ele);
// });

// .map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// return is a new array

let doubledNums = (...nums) => {
  // let doubled = [];

  // for(let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   // console.log(num);
  //   doubled.push(num * 2)
  // }
  // let doubled = nums.map( num => num * 2 )

  return nums.map(function (num) {
    return num * 2;
  });
};

// console.log([1,2,3].map( num => num * 2 ))
// console.log(doubledNums(1,2,3,4,5));//[ 2, 4, 6, 8, 10 ];

// filter
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// return an array of all the elements that meet a condition

//only odds
let onlyOdds = (...nums) => {
  // let res = [];
  // for(let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   if(num % 2 !== 0) res.push(num);
  // };

  return nums.filter(function (num) {
    return num % 2 !== 0;
  });

  // return res;
};

// let onlyOdds = (...nums) => nums.filter(num => num % 2 !== 0);

// console.log(onlyOdds(1, 2, 3, 4, 5)); //[ 1, 3, 5 ]

//works outside function as well
// console.log([1,2,3].filter( function (num) {
//   return num % 2 !== 0;
// }));

// let res = [1,2,3,4,5].filter((num) => num % 2 !== 0);
// console.log(res(1, 2, 3, 4, 5));

//find
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// let found = ['hey','whats','up'].find(word => word.length < 3)
// console.log(found);//up

/*
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/

// sumArr
let sumArr = (nums) => {
  let res = nums.reduce((sum, num) => {
    // console.log(sum, num);
    sum += num;
    // console.log(sum);
    return sum;
  }, 10000);//if we dont pass default value, it will default to first element of arr

  return res;
};

let sumArr2 = nums => nums.reduce((sum, num) => sum += num,0);

// console.log(sumArr([1, 2, 3, 4, 5])); //15
