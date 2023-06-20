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


  return nums.map( num => num * 2 )
}

// console.log([1,2,3].map( num => num * 2 ))
// console.log(doubledNums(1,2,3,4,5));//[ 2, 4, 6, 8, 10 ]
